# 回复 Api V2

[回 Api V2 首页](readme.md)

scope 具体见 target 的文档，target 指回复所依附的产品对象名称

| name                  | Method | endpoint                   |
| --------------------- | ------ | -------------------------- |
| [获取回复列表](#list) | GET    | /v2/target/:id/comments    |
| [新发回复](#new)      | POST   | /v2/target/:id/comments    |
| [获取单条回复](#get)  | GET    | /v2/target/:id/comment/:id |
| [删除回复](#delete)   | DELETE | /v2/target/:id/comment/:id |

## 回复 Comment

```json
{
    "id": "48297785",
    "created": "2012-08-20 18":09":47",
    "content": "Hello world!",
    "author": User
}
```

## 获取回复列表

```
GET https://api.douban.com/v2/target/:id/comments
```

返回：

```json
{
  "start": 0,
  "count": 10,
  "total": 30,
  "comments": [Comment]
}
```

## 新发讨论

```
POST https://api.douban.com/v2/target/:id/comments
```

请求参数

| 参数    | 含义     | 备注 |
| ------- | -------- | ---- |
| content | 回复内容 | 必传 |

返回 201，新创建的 Comment

## 获取单条回复

```
GET https://api.douban.com/v2/target/:id/comment/:id
```

返回 Comment

## 删除回复

```
DELETE https://api.douban.com/v2/target/:id/comment/:id
```

[回 Api V2 首页](readme.md)
