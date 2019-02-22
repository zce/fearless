# 音乐 Api V2

[回 Api V2 首页](readme.md)

scope: music_basic_r

| name                                        | Method | endpoint           |
| ------------------------------------------- | ------ | ------------------ |
| [获取音乐信息](#get_music)                  | GET    | /v2/music/:id      |
| [搜索音乐](#get_music_search)               | GET    | /v2/music/search   |
| [某个音乐中标记最多的标签](#get_music_tags) | GET    | /v2/music/:id/tags |

scope: douban_basic_common

| name                                           | Method | endpoint                |
| ---------------------------------------------- | ------ | ----------------------- |
| [发表新评论](#post_music_review)               | POST   | /v2/music/reviews       |
| [修改评论](#put_music_review)                  | PUT    | /v2/music/review/:id    |
| [删除评论](#delete_music_review)               | DELETE | /v2/music/review/:id    |
| [用户对音乐的所有标签](#get_people_music_tags) | GET    | /v2/music/user_tags/:id |

## 音乐信息 Music

```json
{
    "id":10000037,
    "title":"我只在乎你",
    "alt":"http:\/\/music.douban.com\/music\/10000037",
    "author":[{"name":"邓丽君"}],
    "alt_title":"留聲經典復刻版",
    "tags":[
        {"count":20,"name":"经典"},
        {"count":20,"name":"邓丽君"}
    ],
    "summary": "邓丽君在1987年推出的唱片专集《我只在乎你》中，有三首歌的词作者是“桃丽莎”。其实，桃丽莎即是邓丽君自己（英文名TERESA的中译）。根据我手中的资料，邓丽君作的词并不多，虽然她确曾向媒体表示“最大的心愿是出一张一脚踢的唱片”——即由自己包办下全部的词曲和制作，但是因意外去世而没能实现。但是，在此专集中竟有三首之多，不能不令人关注。大体上说，这三首歌具有两种风格，一为写实，一为浪漫。《非龙非彲》以现代汉语与古汉语混合，歌词的意境悲凉，心态哀痛，而且隐含着非比寻常的寓意，笔者愿在此写出来就教于方家。",
    "image":"http:\/\/img1.douban.com\/spic\/s11185741.jpg",
    "mobile_link":"http:\/\/m.douban.com\/music\/subject\/10000037\/",
    "attrs":{
            "publisher":["环球"],
            "singer":["邓丽君"],
            "discs":["1"],
            "pubdate":["1987-01-02"],
            "title":["我只在乎你"],
            "media":["CD"],
            "tracks":["01. 酒醉的探戈\n02. 像故事般温柔\n03. 命运之川\n04. 爱人\n05. 午夜微风\n06. 夏日圣诞\n07. 非龙非彲\n08. 不着痕迹\n09. 心路过黄昏\n10. 我只在乎你"],
            "version":["专辑"]
    },
    rating":{"max":10,"average":"0.0","numRaters":20,"min":0},
}
```

## 评论信息 Review

```json
{
  "rating": { "max": 5, "value": "5", "min": 1 },
  "updated": "2012-08-31 15:03:06",
  "author": User,
  "title": "再见,teresa",
  "votes": 0,
  "comments": 0,
  "summary": "今年是邓丽君小姐逝世15周年,北美歌迷在各地的华人社区举行了盛大的纪念仪式,而我所在的多伦多更是规模空前.1987年邓丽君的一首<<我只在乎你>...",
  "music": Music,
  "useless": 0,
  "published": "2012-08-31 15:03:06",
  "alt": "http://music.douban.com/review/5567544/",
  "id": 5567544
}
```

## 标签信息 Tag

```json
{
  "count": 20,
  "alt": "http://api.douban.com/tag/经典",
  "title": "经典"
}
```

## 获取音乐信息

```
GET  https://api.douban.com/v2/music/:id
```

返回音乐信息，返回 status=200

## 搜索音乐

```
GET  https://api.douban.com/v2/music/search
```

| 参数  | 意义            | 备注              |
| ----- | --------------- | ----------------- |
| q     | 查询关键字      | q 和 tag 必传其一 |
| tag   | 查询的 tag      | q 和 tag 必传其一 |
| start | 取结果的 offset | 默认为 0          |
| count | 取结果的条数    |                   |

返回：返回 status=200，

```json
{
  "start": 0,
  "count": 10,
  "total": 30,
  "musics": [Music]
}
```

## 某个音乐中标记最多的标签

```
GET  https://api.douban.com/v2/music/:id/tags
```

返回：返回 status=200，

```json
{
  "start": 0,
  "count": 10,
  "total": 30,
  "tags": [Tag]
}
```

## 发表新评论

```
POST  https://api.douban.com/v2/music/reviews
```

| 参数    | 意义                  | 备注 |
| ------- | --------------------- | ---- |
| music   | 评论所针对的 music id | 必传 |
| title   | 评论头                | 必传 |
| content | 评论内容              | 必传 |
| rating  | 打分                  |      |

返回： 返回 status=201， 音乐评论 Review 信息

## 修改评论

```
PUT  https://api.douban.com/v2/music/review/:id
```

| 参数    | 意义     | 备注 |
| ------- | -------- | ---- |
| title   | 评论头   | 必传 |
| content | 评论内容 | 必传 |
| rating  | 打分     |      |

返回： status = 202， 音乐评论 Review 信息

## 删除评论

```
DELETE  https://api.douban.com/v2/music/review/:id
```

返回：返回 status=200， OK

## 用户对音乐的所有标签

```
GET  https://api.douban.com/v2/music/user_tags/:id
```

返回：返回 status=200，

```json
{
  "start": 0,
  "count": 10,
  "total": 30,
  "tags": [Tag]
}
```
