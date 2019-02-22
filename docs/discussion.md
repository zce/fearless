# 论坛 API V2

[回 Api V2 首页](readme.md)

scope: douban_common_basic

| name                | Method | endpoint           |
| ------------------- | ------ | ------------------ |
| [获取讨论](#get)    | GET    | /v2/discussion/:id |
| [更新讨论](#update) | PUT    | /v2/discussion/:id |
| [删除讨论](#delete) | DELETE | /v2/discussion/:id |

scope 具体见 target 的文档，target 指论坛所依附的产品对象名称

| name                  | Method | endpoint                   |
| --------------------- | ------ | -------------------------- |
| [新发讨论](#new)      | POST   | /v2/target/:id/discussions |
| [获取讨论列表](#list) | GET    | /v2/target/:id/discussions |

## 讨论 Discussion

```json
{
    "id": "48247785",
    "title": "火炬不是亮点吗？",
    "alt": "http://www.douban.com/online/11215600/discussion/48247785/",
    "created": "2012-08-20 18":09":47",
    "updated": "2012-08-21 15":43":23",
    "content": "之前在场中央，之后却被挪走，这脑残设计！",
    "comments_count": 2,
    "author": User
}
```

## 获取讨论

```
GET https://api.douban.com/v2/discussion/:id
```

返回讨论 Discussion

## 更新讨论

```
PUT https://api.douban.com/v2/discussion/:id
```

请求参数

| 参数    | 含义 | 备注     |
| ------- | ---- | -------- |
| title   | 题目 | 不能为空 |
| content | 内容 | 不能为空 |

返回状态 202

## 删除讨论

```
DELETE https://api.douban.com/v2/discussion/:id
```

## 新发讨论

```
POST https://api.douban.com/v2/target/:id/discussions
```

请求参数同更新讨论，返回 201，新创建的 Discussion

## 获取讨论列表

```
GET https://api.douban.com/v2/target/:id/discussions
```

返回：

```json
{
  "start": 0,
  "count": 10,
  "total": 30,
  "discussions": [Discussion]
}
```

## 论坛回复

具体见[回复 Api V2](comment.md)

scope: douban_common_basic

| name             | Method | endpoint                       |
| ---------------- | ------ | ------------------------------ |
| 获取讨论回复列表 | GET    | /v2/discussion/:id/comments    |
| 回复讨论         | POST   | /v2/discussion/:id/comments    |
| 获取讨论单条回复 | GET    | /v2/discussion/:id/comment/:id |
| 删除讨论回复     | DELETE | /v2/discussion/:id/comment/:id |

[回 Api V2 首页](readme.md)
