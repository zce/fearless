# 豆瓣用户 API V2

[回 Api V2 首页](readme.md)

scope: douban_basic_common

＊注意 :name 为用户 uid 或者数字 id

| name                            | Method | endpoint       |
| ------------------------------- | ------ | -------------- |
| [获取用户信息](#get_user)       | GET    | /v2/user/:name |
| [获取当前授权用户信息](#get_me) | GET    | /v2/user/~me   |
| [搜索用户](#search)             | GET    | /v2/user       |

## 用户完整版信息 UserInfo

```json
{
    "id": "1000001",
    "uid": "ahbei",
    "name": "阿北",
    "avatar": "http://img6.douban.com/icon/u1000001-28.jpg", //头像小图
    "alt": "http://www.douban.com/people/ahbei/",
    "relation": "contact", //和当前登录用户的关系，friend或contact
    "created": "2006-01-09 21:12:47", //注册时间
    "loc_id": "108288", //城市id
    "loc_name": "北京", //所在地全称
    "desc": "     现在多数时间在忙忙碌碌地为豆瓣添砖加瓦。坐在马桶上看书，算是一天中最放松的时间。

    我不但喜欢读书、旅行和音乐电影，还曾经是一个乐此不疲的实践者，有一墙碟、两墙书、三大洲的车船票为记。现在自己游荡差>不多够了，开始懂得分享和回馈。豆瓣是一个开始，希望它对你同样有用。

    (因为时间和数量的原因，豆邮和"@阿北"不能保证看到。有豆瓣的问题请email联系help@douban.com。)"
}
```

## 用户简版 User

用户在其他对象里面时使用简版, 在文档里记为 User

```json
{
  "id": "1000001",
  "name": "阿北",
  "uid": "ahbei",
  "alt": "http://www.douban.com/people/ahbei/",
  "avatar": "http://img6.douban.com/icon/u1000001-28.jpg"
}
```

## 获取用户信息

```
GET https://api.douban.com/v2/user/:name
```

返回对应的 People

## 获取当前授权用户信息

```
GET https://api.douban.com/v2/user/~me
```

需要必须先进行 API 认证授权，返回当前授权的 UserInfo

## 搜索用户

```
GET https://api.douban.com/v2/user
```

请求参数

| 参数  | 意义             | 备注 |
| ----- | ---------------- | ---- |
| q     | 全文检索的关键词 |      |
| start | 起始元素         |      |
| count | 返回结果的数量   |      |

返回：

```json
{
    "start" = 0,
    "count" = 10,
    "total" = 34,
    "users" = [User, ...]
}
```

[回 Api V2 首页](readme.md)
