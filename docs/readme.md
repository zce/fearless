# 豆瓣 Api V2（测试版）

## Api V2 说明

＊之前基于 GData 的旧有 Api 将不再更新和新加，只会维护，所以请大家使用 Api V2 版本

1. 豆瓣 Api V2 认证统一使用 OAuth2
2. 数据返回格式统一使用 json，GData 不再使用
3. 可接受 callback 参数，使返回的数据为 jsonp。callback 只能包含数字、字母、下划线，长度不大于 50
4. 需要授权的 Api，需要加 access_token 的 Header，并且使用 https 协议，限制具体见[OAuth2 文档](oauth2.md)
5. 不需要授权公开 api 可以使用 http，参数里面如果不包含 apikey 的话，限制单 ip 每小时 150 次，带的话每小时 500 次。带 apikey 的例子为: http://api.douban.com/v2/user/1000001?apikey=XXX, XXX 为你的 apikey
6. Api 里面的通配符，:id 代表纯数字， :name 代表由数字+字母+[-_.]这些特殊字符
7. 使用 HTTP Status Code 表示状态
8. 列表参数使用 start 和 count
9. POST/PUT 时中文使用 UTF-8 编码
10. 时间格式：yyyy-MM-dd HH:mm:ss, 如"2007-06-28 11:16:11"

＊高级 scope 暂时还没有开放申请

＊如果需要提高限制次数的权限，可以发邮件给 api-master（at）douban.com 申请

## Api V2 返回

典型的 Api 返回值有下面两种

\1. 返回单个对象，具体结构会在相应的产品文档上列出

例如[User](user.md#User)

\2. 返回对象列表

请求参数

| 参数  | 意义           | 备注 |
| ----- | -------------- | ---- |
| start | 起始元素       |      |
| count | 返回结果的数量 |      |

返回：

```json
{
    "start": 0,
    "count": 10,
    "total": 50,
    "targets": [Target, ...]
}
```

例如[搜索用户结果列表](user.md#search)

## Api V2 错误

发生错误时，HTTP Status Code 为 400 错，如 400，403，404

错误格式：

```json
{
  "msg": "uri_not_found",
  "code": 1001,
  "request": "GET /v2/photo/132"
}
```

## 返回状态说明

豆瓣 API 通过 HTTP Status Code 来说明 API 请求是否成功 下面的表格中展示了可能的 HTTP Status Code 以及其含义

| 状态码 | 含义                  | 说明                                 |
| ------ | --------------------- | ------------------------------------ |
| 200    | OK                    | 请求成功                             |
| 201    | CREATED               | 创建成功                             |
| 202    | ACCEPTED              | 更新成功                             |
| 400    | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数 |
| 401    | UNAUTHORIZED          | 未授权                               |
| 403    | FORBIDDEN             | 被禁止访问                           |
| 404    | NOT FOUND             | 请求的资源不存在                     |
| 500    | INTERNAL SERVER ERROR | 内部错误                             |

## 通用错误码，具体产品由具体产品 api 文档给出。

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
| 1009   | image_wrong_format | 照片格式有误(仅支持 JPG,JPEG,GIF,PNG 或 BMP)       | 400         |
| 1010   | image_wrong_ck     | 访问私有图片 ck 验证错误                           | 403         |
| 1011   | image_ck_expired   | 访问私有图片 ck 过期                               | 403         |
| 1012   | title_missing      | 题目为空                                           | 400         |
| 1013   | desc_missing       | 描述为空                                           | 400         |

## Api V2 索引

### [图书 Api V2](book.md)

### [电影 Api V2](movie.md)

### [音乐 Api V2](music.md)

### [同城 Api V2](event.md)

### [广播 Api V2](shuo.md)

### [用户 Api V2](user.md)

### [日记 Api V2](note.md)

### [相册 Api V2](photo.md)

### [线上活动 Api V2](online.md)

### [论坛 Api V2](discussion.md)

### [回复 Api V2](comment.md)

### [我去 Api V2](travel.md)
