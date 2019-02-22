# 豆瓣同城 V2

[回 Api V2 首页](readme.md)

## 活动接口

scope: event_basic_r

- [读] GET /v2/event/:id [获取活动](#event_get)
- [读] GET /v2/event/:id/participants [获取参加活动的用户](#event_participants)
- [读] GET /v2/event/:id/wishers [获取活动感兴趣的用户](#event_wishers)
- [读] GET /v2/event/user_created/:id [获取用户发起的活动](#event_user_created)
- [读] GET /v2/event/user_participated/:id [获取用户参加的活动](#event_user_participated)
- [读] GET /v2/event/user_wished/:id [获取用户感兴趣的活动](#event_user_wished)
- [读] GET /v2/event/list [获取活动列表](#event_list)
- [读] GET /v2/loc/:id [获取城市](#loc_get)
- [读] GET /v2/loc/list [获取城市列表](#loc_list)

scope: event_basic_w

- [写] POST /v2/event/:id/participants [参加活动](#event_participate)
- [写] DELETE /v2/event/:id/participants [不参加活动](#event_quit)
- [写] POST /v2/event/:id/wishers [对活动感兴趣](#event_wish)
- [写] DELETE /v2/event/:id/wishers [对活动不感兴趣](#event_unwish)

注：

- event_basic_r 无需授权，但是有访问限制，可以使用 http 或 https
- event_basic_w 必须先进行 API 认证授权，请使用 https 访问，关于 API 认证授权的信息请参阅 [API 授权说明](oauth2.md)

## 活动类型 [#](#type)

使用数字或者单词均可。

- 音乐 10/music
- 戏剧 11/drama
- 展览 12/exhibition
- 讲座 13/salon
- 聚会 14/party
- 运动 15/sports
- 旅行 16/travel
- 公益 17/commonweal
- 电影 18/film

## Event 数据格式 [#](#event)

```json
{
  "is_priv": "no",
  "participant_count": 27,
  "image": "http: //img1.douban.com/pview/event_poster/median/public/d5cd936b61ec0b4.jpg",
  "adapt_url": "http: //www.douban.com/location/adapt/event/16878708/",
  "begin_time": "2012-08-1721: 00: 00",
  "owner": {
    "avatar": "http: //img3.douban.com/view/site/small/public/ae2f20e33c40096.jpg",
    "alt": "http: //site.douban.com/jianghujiubar/",
    "id": "500313",
    "name": "江湖酒吧",
    "uid": "jianghujiubar"
  },
  "alt": "http: //www.douban.com/event/16878708/",
  "geo": "39.935715 116.408653",
  "id": "16878708",
  "album": "74809163",
  "title": "美国乡村音乐：RandyAbelStable",
  "wisher_count": 114,
  "content": "http: //site.douban.com/liuyusi/\n如果单听音乐，你会错觉刘于思应该是一个老炮——不仅在于他技术扎实的弹唱，更在于他的味道“正”：那些纯正的60年代R&B，韵味十足的布鲁斯口琴，还有毫不做作的演唱，想玩成这样不仅也得花上十多年功夫练琴，还得花同样的时间来磨练心态吧？但事实却是，刘于思是一个86年出生的年轻人，这真让人大跌眼镜了。\n\n听刘于思的歌让人仿佛乘坐时光机去了六十年代的美国西海岸——那个无忧无虑的嬉皮岁月，满眼的金色阳光。刘于思最近在北京的许多酒吧里演出，但事实上，如果能在下午的街头听他唱歌，应该是一件更美妙的事。\n",
  "image-hlarge": "http: //img3.douban.com/pview/event_poster/hlarge/public/47766b19fca763e.jpg",
  "end_time": "2012-08-1723: 30: 00",
  "image-lmobile": "http: //img1.douban.com/pview/event_poster/lmobile/public/d5cd936b61ec0b4.jpg",
  "has_invited": "no",
  "can_invite": "no",
  "address": "北京东城区交道口南大街东棉花胡同7号",
  "loc_name": "北京",
  "loc_id": "108288"
}
```

## EventList 数据格式 [#](#events_list)

```json
{
  "count": 20,
  "start": 0,
  "total": 2,
  "events": [
    {
      "is_priv": "no",
      "participant_count": 509,
      "image": "http://img6.douban.com/view/event_poster/median/public/9a0bde6b5b45029.jpg",
      "adapt_url": "http://www.douban.com/location/adapt/event/15069059/",
      "begin_time": "2011-11-16 17:30:00",
      "owner": {
        "avatar": "http://img6.douban.com/icon/u2205775-69.jpg",
        "alt": "http://www.douban.com/people/hoccwong/",
        "id": "2205775",
        "name": "[已注销]",
        "uid": "hoccwong"
      },
      "alt": "http://www.douban.com/event/15069059/",
      "geo": "39.865021 116.379021",
      "id": "15069059",
      "album": "60239683",
      "title": "【路有冻死骨】2011年冬季救助",
      "wisher_count": 607,
      "content": "（活动海报上的老人刘爷爷，是我们第一年的救助对象，已于2010年10月29日在地下通道去世，享年77岁，为纪念他，我们继续用这张海报，祝福老人早登极乐。）\r\n\r\n【活动介绍】\r\n他们是我们的同胞\r\n\r\n他们深陷苦难、举步维艰\r\n\r\n他们露宿街头、无家可归\r\n\r\n他们或老或小，如我们的父母、爷爷奶奶、兄弟姐妹\r\n\r\n一年一度的“路有冻死骨，寒流不等人”冬季救助活动，旨在向北京街头无家可归的露宿者发放御寒衣物、被褥、棉鞋、手套、食物、药品等过冬物资，帮助他们度过北京严寒。受助的无家可归者从2岁到90岁不等，有嗷嗷待哺的孩子，白发苍苍的老人、残障、病患，因各种原因滞留北京，无家可归。通过对他们生存状况的调查，我们了解到他们在寒冷的冬季严重缺乏御寒物资，有些露宿街头，有些住在地下人行通道，被褥单薄，衣食简陋。一旦进入气温低于零下的寒冬，他们将面临生存危机。",
      "image-hlarge": "http://img6.douban.com/pics/event/hlarge_event_dft.jpg",
      "end_time": "2012-02-16 23:30:00",
      "image-lmobile": "http://img6.douban.com/pics/event/lmobile_event_dft.jpg",
      "has_invited": "no",
      "can_invite": "no",
      "address": "北京 丰台区 北京南站",
      "loc_name": "北京",
      "loc_id": "108288"
    },
    {
      "is_priv": "no",
      "participant_count": 306,
      "image": "http://img6.douban.com/view/event_poster/median/public/35739c9d6b38124.jpg",
      "adapt_url": "http://www.douban.com/location/adapt/event/12270102/",
      "begin_time": "2010-07-25 14:00:00",
      "owner": {
        "avatar": "http://img6.douban.com/view/site/small/public/f4a980e1bb9e9c1.jpg",
        "alt": "http://site.douban.com/songshuhui/",
        "id": "500055",
        "name": "科学松鼠会",
        "uid": "songshuhui"
      },
      "alt": "http://www.douban.com/event/12270102/",
      "geo": "39.983803 116.494713",
      "id": "12270102",
      "album": "30697743",
      "title": "【小姬看片会第十六期】关于时间旅行的常见问题 [报名已满！]",
      "wisher_count": 1558,
      "content": "这才睡一觉的功夫…… 报名就翻番了……！\r\n童鞋们！报名表未发布即是报名表已关闭！！！\r\n收到确认信的童鞋们如果有不去的切记转让名额啊！！\r\n\r\n\r\n【注意事项】 \r\n1.豆瓣点“我要参加”是无效的！必须通过报名链接报名方可入场。 \r\n2.每个ID、邮箱、手机号，在同一场活动中限报名一次。一人一表，家属亲友均需报名。 \r\n3.由于场地容量有限，将以报名时间的先后顺序发送确认邮件。 \r\n4.确认将在活动开始前2天发出，请同时查收垃圾邮件。",
      "image-hlarge": "http://img6.douban.com/pics/event/hlarge_event_dft.jpg",
      "end_time": "2010-07-25 16:30:00",
      "image-lmobile": "http://img6.douban.com/pics/event/lmobile_event_dft.jpg",
      "has_invited": "no",
      "can_invite": "no",
      "address": "北京 朝阳区 798艺术区尤伦斯当代艺术中心报告厅",
      "loc_name": "北京",
      "loc_id": "108288"
    }
  ]
}
```

## 获取活动 [#](#events_get)

```
GET https://api.douban.com/v2/event/:id
```

返回格式:[Event](#event)

## 获取参加活动的用户 [#](#event_participants)

```
GET https://api.douban.com/v2/event/:id/participants
```

## 获取活动感兴趣的用户

```
GET https://api.douban.com/v2/event/:id/wishers
```

例如

```
GET https://api.douban.com/v2/event/10069638/wishers
```

返回格式

```json
{
  "count": 20,
  "start": 0,
  "total": 2,
  "users": [
    {
      "avatar": "http://img6.douban.com/icon/u54770363-2.jpg",
      "alt": "http://www.douban.com/people/54770363/",
      "id": "54770363",
      "name": "小子",
      "uid": "54770363"
    },
    {
      "avatar": "http://img6.douban.com/icon/u52050486-5.jpg",
      "alt": "http://www.douban.com/people/52050486/",
      "id": "52050486",
      "name": "伊丽莎白小贱贱",
      "uid": "52050486"
    }
  ]
}
```

## 获取用户创建的活动 [#](#event_user_created)

```
GET https://api.douban.com/v2/event/user_created/:id
```

返回格式:[Event List](#events_list)

## 获取用户参加的活动

```
GET https://api.douban.com/v2/event/user_participated/:id
```

返回格式:[Event List](#events_list)

## 获取用户感兴趣的活动

```
GET https://api.douban.com/v2/event/user_wished/:id
```

获取参加和感兴趣的活动时可指定参数：

| 参数   | 含义               | 备注             |
| ------ | ------------------ | ---------------- |
| status | 活动是否过期的状态 | ongoing, expired |

返回格式:[Event List](#events_list)

## 获取活动列表 [#](#event_list)

```
GET https://api.douban.com/v2/event/list
```

返回格式:[Event List](#events_list)

| 参数     | 含义     | 备注                                                                                 |
| -------- | -------- | ------------------------------------------------------------------------------------ |
| loc      | 城市 id  |                                                                                      |
| day_type | 时间类型 | future, week, weekend, today, tomorrow                                               |
| type     | 活动类型 | all,music, film, drama, commonweal, salon, exhibition, party, sports, travel, others |

## 获取城市 [#](#loc_get)

```
GET https://api.douban.com/v2/loc/:id
```

返回格式:

```json
{
  "parent": "china",
  "habitable": "yes",
  "id": "108288",
  "name": "北京",
  "uid": "beijing"
}
```

## 获取城市列表 [#](#loc_list)

```
GET https://api.douban.com/v2/loc/list
```

返回格式:

```json
{
  "count": 3,
  "start": 0,
  "total": 882,
  "locs": [
    {
      "parent": "china",
      "habitable": "yes",
      "id": "108288",
      "name": "北京",
      "uid": "beijing"
    },
    {
      "parent": "china",
      "habitable": "yes",
      "id": "108296",
      "name": "上海",
      "uid": "shanghai"
    },
    {
      "parent": "guangdong",
      "habitable": "yes",
      "id": "118281",
      "name": "广州",
      "uid": "guangzhou"
    }
  ]
}
```

## 参加活动 [#](#event_participate)

```
POST https://api.douban.com/v2/event/:id/participants
```

返回 202

| 参数             | 含义     | 备注                                        |
| ---------------- | -------- | ------------------------------------------- |
| participate_date | 参加时间 | 时间格式：“％Y-％m-％d”，无此参数则时间待定 |

## 不参加活动

```
DELETE https://api.douban.com/v2/event/:id/participants
```

返回 202

## 对活动感兴趣

```
POST https://api.douban.com/v2/event/:id/wishers
```

返回 202

## 对活动不感兴趣

```
DELETE https://api.douban.com/v2/event/:id/wishers
```

返回 202

[回 Api V2 首页](readme.md)
