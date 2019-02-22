# 豆瓣Api V2（测试版）

## Api V2说明

＊之前基于GData的旧有Api将不再更新和新加，只会维护，所以请大家使用Api V2版本

1. 豆瓣Api V2认证统一使用OAuth2
2. 数据返回格式统一使用json，GData不再使用
3. 可接受callback参数，使返回的数据为jsonp。callback只能包含数字、字母、下划线，长度不大于50
4. 需要授权的Api，需要加access_token的Header，并且使用https协议，限制具体见[OAuth2文档](oauth2.md)
5. 不需要授权公开api可以使用http，参数里面如果不包含apikey的话，限制单ip每小时150次，带的话每小时500次。带apikey的例子为: http://api.douban.com/v2/user/1000001?apikey=XXX, XXX为你的apikey
6. Api里面的通配符，:id代表纯数字， :name代表由数字+字母+[-_.]这些特殊字符
7. 使用HTTP Status Code表示状态
8. 列表参数使用start和count
9. POST/PUT 时中文使用UTF-8编码
10. 时间格式：yyyy-MM-dd HH:mm:ss, 如"2007-06-28 11:16:11"

＊高级scope暂时还没有开放申请

＊如果需要提高限制次数的权限，可以发邮件给 api-master（at）douban.com申请

## Api V2返回

典型的Api返回值有下面两种

\1. 返回单个对象，具体结构会在相应的产品文档上列出

例如[User](user.md#User)

\2. 返回对象列表

请求参数

| 参数  | 意义           | 备注 |
| ----- | -------------- | ---- |
| start | 起始元素       |      |
| count | 返回结果的数量 |      |

返回：

```
{
    "start" = 0,
    "count" = 10,
    "total" = 50,
    "targets" = [Target, ...]
}
```

例如[搜索用户结果列表](user.md#search)

## Api V2 错误

发生错误时，HTTP Status Code为400错，如400，403，404

错误格式：

```
{
 "msg":"uri_not_found",
 "code":1001,
 "request":"GET \/v2\/photo\/132"
}
```

## 返回状态说明

豆瓣 API 通过HTTP Status Code来说明 API 请求是否成功 下面的表格中展示了可能的HTTP Status Code以及其含义

| *状态码* | *含义*                | *说明*                               |
| -------- | --------------------- | ------------------------------------ |
| 200      | OK                    | 请求成功                             |
| 201      | CREATED               | 创建成功                             |
| 202      | ACCEPTED              | 更新成功                             |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数 |
| 401      | UNAUTHORIZED          | 未授权                               |
| 403      | FORBIDDEN             | 被禁止访问                           |
| 404      | NOT FOUND             | 请求的资源不存在                     |
| 500      | INTERNAL SERVER ERROR | 内部错误                             |

## 通用错误码，具体产品由具体产品api文档给出。

| 错误码 | 错误信息           | 含义                                               | status code |
| ------ | ------------------ | -------------------------------------------------- | ----------- |
| 999    | unknow_v2_error    | 未知错误                                           | 400         |
| 1000   | need_permission    | 需要权限                                           | 403         |
| 1001   | uri_not_found      | 资源不存在                                         | 404         |
| 1002   | missing_args       | 参数不全                                           | 400         |
| 1003   | image_too_large    | 上传的图片太大                                     | 400         |
| 1004   | has_ban_word       | 输入有违禁词                                       | 400         |
| 1005   | input_too_short    | 输入为空，或者输入字数不够                         | 400         |
| 1006   | target_not_fount   | 相关的对象不存在，比如回复帖子时，发现小组被删掉了 | 400         |
| 1007   | need_captcha       | 需要验证码，验证码有误                             | 403         |
| 1008   | image_unknow       | 不支持的图片格式                                   | 400         |
| 1009   | image_wrong_format | 照片格式有误(仅支持JPG,JPEG,GIF,PNG或BMP)          | 400         |
| 1010   | image_wrong_ck     | 访问私有图片ck验证错误                             | 403         |
| 1011   | image_ck_expired   | 访问私有图片ck过期                                 | 403         |
| 1012   | title_missing      | 题目为空                                           | 400         |
| 1013   | desc_missing       | 描述为空                                           | 400         |

## Api V2 索引

### [图书Api V2](book.md)

### [电影Api V2](movie.md)

### [音乐Api V2](music.md)

### [同城Api V2](event.md)

### [广播Api V2](shuo.md)

### [用户Api V2](user.md)

### [日记Api V2](note.md)

### [相册Api V2](photo.md)

### [线上活动Api V2](online.md)

### [论坛Api V2](discussion.md)

### [回复Api V2](comment.md)

### [我去Api V2](travel.md)