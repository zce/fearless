# 豆瓣线上活动 API V2

[回 Api V2 首页](readme.md)

scope: community_basic_online

| name                                 | Method | endpoint                    |
| ------------------------------------ | ------ | --------------------------- |
| [获取线上活动](#get)                 | GET    | /v2/online/:id              |
| [获取线上活动参加成员列表](#users)   | GET    | /v2/online/:id/participants |
| [获取线上活动论坛列表](#discussions) | GET    | /v2/online/:id/discussions  |
| [获取线上活动列表](#list)            | GET    | /v2/onlines                 |

scope: community_advanced_online

| name                                     | Method | endpoint                         |
| ---------------------------------------- | ------ | -------------------------------- |
| [创建线上活动](#new)                     | POST   | /v2/onlines                      |
| [更新线上活动](#update)                  | PUT    | /v2/online/:id                   |
| [删除线上活动](#delete)                  | DELETE | /v2/online/:id                   |
| [参加线上活动](#join)                    | POST   | /v2/online/:id/participants      |
| [退出线上活动](#quit)                    | DELETE | /v2/online/:id/participants      |
| [喜欢线上活动](#like)                    | POST   | /v2/online/:id/like              |
| [取消喜欢线上活动](#unlike)              | DELETE | /v2/online/:id/like              |
| [图片列表](#photos)                      | GET    | /v2/online/:id/photos            |
| [上传图片](#upload)                      | POST   | /v2/online/:id/photos            |
| [线上活动论坛发贴](#post)                | POST   | /v2/online/:id/discussions       |
| [获取用户参加的线上活动列表](#join_list) | GET    | /v2/online/user_participated/:id |
| [获取用户创建的线上活动列表](#owned)     | GET    | /v2/online/user_created/:id      |

## Online

```json
{
  "id": "11038343",
  "alt": "http://www.douban.com/online/11038343/",

  "title": "新的截图猜电影，来！",
  "desc": "截图猜电影\r\n猜中后描述改为：\r\n《电影名》 by （猜中者名字）\r\n请遵守规则！\r\n\r\n附注：相关网址是，听>配乐>猜电影友情活动，尽请参加！",

  "tags": ["截图", "电影", "交友", "猜图"],

  "created": "2012-02-24 11:49:32",
  "begin_time": "2012-02-24 11:00:00",
  "end_time": "2012-05-23 11:00:00",

  "related_url": "http://www.douban.com/online/10999361/",
  "shuo_topic": "新的截图猜电影，来！", //对应广播的#主题#
  "cascade_invite": true, //用户能不能邀请友邻加入
  "group_id": "0", //关联小组的id
  "album_id": "65606728", //对应相册的id

  "participant_count": 13881, //参加人数
  "photo_count": 63281, //照片数
  "liked_count": 2127, //喜欢数
  "recs_count": 417, //推荐数

  "icon": "http://img6.douban.com/bpic/o590273.jpg",
  "thumb": "http://img6.douban.com/spic/o590273.jpg",
  "cover": "http://img6.douban.com/tpic/o590273.jpg",
  "image": "http://img6.douban.com/lpic/o590273.jpg",

  "owner": User,
  //当前用户是否喜欢，参加
  "liked": false,
  "joined": false
}
```

## 获取线上活动

```
GET https://api.douban.com/v2/online/:id
```

返回 [Online](#online)

## 获取线上活动参加成员列表

```
GET https://api.douban.com/v2/online/:id/participants
```

返回 [User](user.md#user) 列表

## 获取线上活动论坛列表

```
GET https://api.douban.com/v2/online/:id/discussions
```

返回 [Discussion](discussion.md#discussion) 列表

## 获取线上活动列表

```
GET https://api.douban.com/v2/onlines
```

| 参数 | 意义 | 备注                                       |
| ---- | ---- | ------------------------------------------ |
| cate | 类别 | day，week，latest 分别对应每天，每周，最新 |

返回 [Online](#online) 列表

## 创建线上活动

```
POST https://api.douban.com/v2/onlines
```

请求参数

| 参数           | 意义                           | 备注                                                       |
| -------------- | ------------------------------ | ---------------------------------------------------------- |
| title          | 题目                           | 不能为空                                                   |
| desc           | 描述                           | 不能为空                                                   |
| begin_time     | 开始时间                       | 不能为空，不是是过去的时间，时间格式"%Y-%m-%d %H:%M"       |
| end_time       | 结束时间                       | 不能为空，不能早于开始时间，活动期限不能长于 3 个月(90 天) |
| related_url    | 关联的 url 或者小组链接        | 可以为空                                                   |
| cascade_invite | 是否允许参与的成员邀请朋友参加 | 默认为 false                                               |
| tags           | 标签                           | 不超过 4 个，用空格分开，默认为空                          |

返回 200，创建好的[Online](#online)

## 更新线上活动

```
PUT https://api.douban.com/v2/online/:id
```

参数参考创建线上活动

## 删除线上活动

```
DELETE https://api.douban.com//v2/online/:id
```

## 参加线上活动

```
POST https://api.douban.com/v2/online/:id/participants
```

## 退出线上活动

```
DELETE https://api.douban.com/v2/online/:id/participants
```

## 喜欢线上活动

```
POST https://api.douban.com/v2/online/:id/like
```

## 取消喜欢线上活动

```
DELETE https://api.douban.com/v2/online/:id/like
```

## 图片列表

```
GET  https://api.douban.com/v2/online/:id/photos
```

返回 Photo 列表，具体见[相册 Api V2](photo.md#photo_list)

## 上传图片

```
POST  https://api.douban.com/v2/online/:id/photos
```

具体见[相册 Api V2](photo.md#new_photo)

## 上线活动论坛发贴

```
POST  https://api.douban.com/v2/online/:id/discussions|
```

见[论坛 api](discussion.md)

## 获取用户参加的线上活动列表

```
GET  https://api.douban.com/v2/online/user_participated/:id
```

| 参数            | 意义             | 备注                        |
| --------------- | ---------------- | --------------------------- |
| exclude_expired | 是否包括过期活动 | true，false，默认为包含过期 |

返回：

```json
{
  "start": 0,
  "count": 10,
  "total": 30,
  "onlines": [Online]
}
```

## 获取用户创建的线上活动列表

```
GET  https://api.douban.com/v2/online/user_created/:id
```

返回[Online](#online) 列表

## 线上活动相关错误

| 错误码 | 错误信息                      | 含义                                                                | status code |
| ------ | ----------------------------- | ------------------------------------------------------------------- | ----------- |
| 1100   | begin_time_too_late           | 开始时间过晚                                                        | 400         |
| 1101   | end_time_too_early            | 结束时间已过                                                        | 400         |
| 1102   | end_time_less_than_begin_time | 结束时间早于开始时间                                                | 400         |
| 1103   | period_too_long               | 活动长于 90 天                                                      | 400         |
| 1104   | tags_too_much                 | tag 多于 4 个                                                       | 400         |
| 1105   | tags_too_long                 | tag 长于 18 个字符                                                  | 400         |
| 1106   | edit_too_much                 | 编辑次数过多                                                        | 400         |
| 1107   | wrong_cate                    | 错误的列表类别，day，week，latest 分别对应每天，每周，最新 3 个类别 | 400         |
| 1108   | wrong_time_format             | 错误的时间格式，正确时间格式：yyyy-MM-dd HH:mm:ss                   | 400         |

[回 Api V2 首页](readme.md)
