# 使用 OAuth 2.0 访问豆瓣 API

豆瓣支持 OAuth 2.0 协议的授权访问。关于 OAuth 2.0 协议规范，请参考[这里](http://oauth.net/2/)。

使用 OAuth 2.0 的流程可以简单概括为：

1. 应用向豆瓣请求授权
2. 豆瓣为用户显示一个授权页面，用户在此页面确认是否同意应用的请求
3. 如果用户同意授权，应用会获取到一个访问令牌(access_token)，通过此令牌，应用可以访问授权用户的数据。
4. 如果访问需要授权的 API，请使用 HTTPS 协议，加上 access_token 的 Header，具体见[获取 access_token](#access_token)

豆瓣支持三种 OAuth 2.0 的授权流程：

- 服务器的 WEB 应用的授权流程（server-side flow）
- 桌面客户端应用、移动客户端应用的授权流程（native-application flow）
- [直接在浏览器中运行的 Javascript 应用的授权流程（user-agent flow）](https://developers.douban.com/wiki/?title=browser)

## server-side flow 与 native-application flow

这两种授权流程基本相同，需要通过两步来获取 access_token。

#### 获取 authorization_code

通过在浏览器中访问下面的地址，来引导用户授权，并获得 authorization_code

```
https://www.douban.com/service/auth2/auth
```

参数：

| 参数名称      | 参数说明                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| client_id     | 必选参数，应用的唯一标识，对应于 APIKey                                                                                    |
| redirect_uri  | 必选参数，用户授权完成后的回调地址，应用需要通过此回调地址获得用户的授权结果。此地址必须与在应用注册时填写的回调地址一致。 |
| response_type | 必选参数，此值可以为 code 或者 token 。在本流程中，此值为 code                                                             |
| scope         | 可选参数，申请权限的范围，如果不填，则使用缺省的 scope。如果申请多个 scope，使用逗号分隔。                                 |
| state         | 可选参数，用来维护请求和回调状态的附加字符串，在授权完成回调时会附加此参数，应用可以根据此字符串来判断上下文关系。         |

_注意_：此请求必须是 HTTP GET 方式

例如：

```
https://www.douban.com/service/auth2/auth?
  client_id=0b5405e19c58e4cc21fc11a4d50aae64&
  redirect_uri=https://www.example.com/back&
  response_type=code&
  scope=shuo_basic_r,shuo_basic_w,douban_basic_common
```

返回结果：

- 当用户拒绝授权时，浏览器会重定向到 redirect_uri，并附加错误信息

  ```
  https://www.example.com/back?error=access_denied
  ```

- 当用户同意授权时，浏览器会重定向到 redirect_uri，并附加 autorization_code

  ```
  https://www.example.com/back?code=9b73a4248
  ```

#### 获取 access_token

```
https://www.douban.com/service/auth2/token
```

| 参数名称      | 参数说明                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| client_id     | 必选参数，应用的唯一标识，对应于 APIKey                                                                                  |
| client_secret | 必选参数，应用的唯一标识，对应于豆瓣 secret                                                                              |
| redirect_uri  | 必选参数，用户授权完成后的回调地址，应用需要通过此回调地址获得用户的授权结果。此地址必须与在应用注册时填写的回调地址一致 |
| grant_type    | 必选参数，此值可以为 authorization_code 或者 refresh_token 。在本流程中，此值为 authorization_code                       |
| code          | 必选参数，上一步中获得的 authorization_code                                                                              |

_注意_：此请求必须是 HTTP POST 方式

例如：

```
https://www.douban.com/service/auth2/token?
  client_id=0b5405e19c58e4cc21fc11a4d50aae64&
  client_secret=edfc4e395ef93375&
  redirect_uri=https://www.example.com/back&
  grant_type=authorization_code&
  code=9b73a4248
```

返回结果：

```json
{
  "access_token": "a14afef0f66fcffce3e0fcd2e34f6ff4",
  "expires_in": 3920,
  "refresh_token": "5d633d136b6d56a41829b73a424803ec",
  "douban_user_id": "1221"
}
```

#### 使用 access_token

```
curl "https://api.douban.com/v2/user/~me"
     -H "Authorization: Bearer a14afef0f66fcffce3e0fcd2e34f6ff4"
```

# access_token 有效期 与 refresh_token

在 OAuth 2.0 中，access_token 不再长期有效。在授权获取 access_token 时会一并返回其有效期，也就是返回值中的 expires_in 参数。

在 access_token 使用过程中，如果服务器返回 106 错误：“access_token_has_expired ”，此时，说明 access_token 已经过期，除了通过再次引导用户进行授权来获取 access_token 外，还可以通过 refresh_token 的方式来换取新的 access_token 和 refresh_token。

通过 refresh_token 换取 access_token 的处理过程如下：

```
https://www.douban.com/service/auth2/token
```

| 参数名称      | 参数说明                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| client_id     | 必选参数，应用的唯一标识，对应于 APIKey                                                                                  |
| client_secret | 必选参数，应用的唯一标识，对应于豆瓣 secret                                                                              |
| redirect_uri  | 必选参数，用户授权完成后的回调地址，应用需要通过此回调地址获得用户的授权结果。此地址必须与在应用注册时填写的回调地址一致 |
| grant_type    | 必选参数，此值可以为 authorization_code 或者 refresh_token。在本流程中，此值为 refresh_token                             |
| refresh_token | 必选参数，刷新令牌                                                                                                       |

_注意_：此请求必须是 HTTP POST 方式，refresh_token 只有在 access_token 过期时才能使用，并且只能使用一次。当换取到的 access_token 再次过期时，使用新的 refresh_token 来换取 access_token

例如：

```
https://www.douban.com/service/auth2/token?
  client_id=0b5405e19c58e4cc21fc11a4d50aae64&
  client_secret=edfc4e395ef93375&
  redirect_uri=https://www.example.com/back&
  grant_type=refresh_token&
  refresh_token=5d633d136b6d56a41829b73a424803ec
```

返回结果：

```json
{
  "access_token": "0e63c03dfb66c4172b2b40b9f2344c45",
  "expires_in": 3920,
  "refresh_token": "84406d40cc58e0ae8cc147c2650aa20a",
  "douban_user_id": "1000"
}
```

| 级别 | access_token 有效期 | refresh_token 有效期 | 说明 |
| ---- | ------------------- | -------------------- | ---- |
| L1   | 7 天                | 14 天                |      |
| L2   | 30 天               | 60 天                |      |
| L3   | 90 天               | 180 天               |      |

# 需要授权的 API 访问速度控制

在用户、应用、服务器 IP、scope 等维度对接口的访问速度进行限制。

针对服务器 IP:

| 级别 | 限制          |
| ---- | ------------- |
| L1   | 5000 次/小时  |
| L2   | 10000 次/小时 |
| L3   | 20000 次/小时 |

针对单用户每应用每 scope：

| 级别 | 限制         |
| ---- | ------------ |
| L1   | 500 次/小时  |
| L2   | 1000 次/小时 |
| L3   | 2000 次/小时 |

返回结果的 header 里会有当前访问限制信息：

| Header 名称            | 含义                 |
| ---------------------- | -------------------- |
| X-Ratelimit-Limit      | 单用户每小时次数     |
| X-RateLimit-Remaining  | 单用户每小时剩余次数 |
| X-Ratelimit-Limit2     | 单 ip 每小时次数     |
| X-RateLimit-Remaining2 | 单 ip 每小时剩余次数 |

# 错误代码

如果在 API 使用过程中，有错误，则返回结果为：

```json
{
  "code": 113,
  "msg": "required_parameter_is_missing: client_id",
  "request": "GET /shuo/statuses/232323"
}
```

| 错误代码 | 错误说明                                                                               |
| -------- | -------------------------------------------------------------------------------------- |
| 100      | invalid_request_scheme 错误的请求协议                                                  |
| 101      | invalid_request_method 错误的请求方法                                                  |
| 102      | access_token_is_missing 未找到 access_token                                            |
| 103      | invalid_access_token access_token 不存在或已被用户删除，或者用户修改了密码             |
| 104      | invalid_apikey apikey 不存在或已删除                                                   |
| 105      | apikey_is_blocked apikey 已被禁用                                                      |
| 106      | access_token_has_expired access_token 已过期                                           |
| 107      | invalid_request_uri 请求地址未注册                                                     |
| 108      | invalid_credencial1 用户未授权访问此数据                                               |
| 109      | invalid_credencial2 apikey 未申请此权限                                                |
| 110      | not_trial_user 未注册的测试用户                                                        |
| 111      | rate_limit_exceeded1 用户访问速度限制                                                  |
| 112      | rate_limit_exceeded2 IP 访问速度限制                                                   |
| 113      | required_parameter_is_missing 缺少参数                                                 |
| 114      | unsupported_grant_type 错误的 grant_type                                               |
| 115      | unsupported_response_type 错误的 response_type                                         |
| 116      | client_secret_mismatch client_secret 不匹配                                            |
| 117      | redirect_uri_mismatch redirect_uri 不匹配                                              |
| 118      | invalid_authorization_code authorization_code 不存在或已过期                           |
| 119      | invalid_refresh_token refresh_token 不存在或已过期                                     |
| 120      | username_password_mismatch 用户名密码不匹配                                            |
| 121      | invalid_user 用户不存在或已删除                                                        |
| 122      | user_has_blocked 用户已被屏蔽                                                          |
| 123      | access_token_has_expired_since_password_changed 因用户修改密码而导致 access_token 过期 |
| 124      | access_token_has_not_expired access_token 未过期                                       |
| 125      | invalid_request_scope 访问的 scope 不合法，开发者不用太关注，一般不会出现该错误        |
| 126      | invalid_request_source 访问来源不合法                                                  |
| 127      | thirdparty_login_auth_faied 第三方授权错误                                             |
| 128      | user_locked 用户被锁定                                                                 |
| 999      | unknown 未知错误                                                                       |

| HTTP 状态码 | 说明                                              |
| ----------- | ------------------------------------------------- |
| 200         | 表明 API 的请求正常                               |
| 400         | 表明 API 的请求出错，具体原因参考上面列出的错误码 |
