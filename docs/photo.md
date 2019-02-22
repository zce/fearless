# 相册 Api V2

[回 Api V2 首页](readme.md)

＊ 注意，相册 Api V2 都需要登录后才能访问

scope: community_basic_photo

| name                            | Method | endpoint             |
| ------------------------------- | ------ | -------------------- |
| [获取相册](#get_album)          | GET    | /v2/album/:id        |
| [获取相册照片列表](#photo_list) | GET    | /v2/album/:id/photos |
| [获得照片](#get_photo)          | GET    | /v2/photo/:id        |

## 照片 Photo

```json
{
    "id": "1642354684",
    "alt": "http://www.douban.com/photos/photo/1642354684/",
    "album_id": "74539453", //所属相册id
    "album_title": "大菠萝", //所属相册名称
    "icon": "http://img6.douban.com/view/photo/icon/public/p1642354684.jpg",
    "thumb": "http://img6.douban.com/view/photo/thumb/public/p1642354684.jpg",
    "cover": "http://img6.douban.com/view/photo/cover/public/p1642354684.jpg",
    "image": "http://img6.douban.com/view/photo/photo/public/p1642354684.jpg",
    "desc": "昨天蹭 @cmgs 的mf打出来的，因为玩51的基友实在太多，所以还是卖了给我尼姑换武器吧 "，
    "created": "2012-07-25 08:27:57",
    "privacy": "public", //可见性，public, friend, private
    "position": 4,
    "prev_photo": "1648785331",
    "next_photo": "1641039878",
    "liked_count": 0, //喜欢数
    "recs_count": 0, //推荐数
    "comments_count": 7, //回复数
    "author": User,
    "liked": false, //当前登录用户是否喜欢该图片
    "sizes": { //各个规格尺寸, 有的尺寸是没有的
        "icon": [ 100, 49 ] // 小方图
        "thumb": [ 170, 84 ], //小图
        "cover": [ 0, 0 ], //封面方图
        "image": [ 595, 295 ], //大图
    }
}
```

## 相册 Album

```json
{
    "id": "74539453",
    "alt": "http://www.douban.com/photos/album/74539453/",
    "title": "大菠萝",
    "icon": "http://img6.douban.com/view/photo/icon/public/p1622673561.jpg",
    "cover": "http://img6.douban.com/view/photo/cover/public/p1622673561.jpg",
    "thumb": "http://img6.douban.com/view/photo/thumb/public/p1622673561.jpg",
    "image": "http://img6.douban.com/view/photo/photo/public/p1622673561.jpg",
    "privacy: "public",
    "created": "2012-07-10 08:51:41",
    "updated": "2012-08-17 09:34:56",
    "liked_count": 0,
    "recs_count": 0,
    "size": 8,
    "desc": "",
    "author": User,
    "liked": false,
    "sizes": {
        "icon": [ 100, 69 ]
        "cover": [ 0, 0 ],
        "thumb": [ 170, 117 ],
        "image": [ 584, 405 ],
    }
}
```

## 获取相册

```
GET https://api.douban.com/v2/album/:id
```

返回相册 Album

## 获得相册照片列表

```
GET https://api.douban.com/v2/album/:id/photos
```

请求参数

| 参数   | 意义     | 备注                                                    |
| ------ | -------- | ------------------------------------------------------- |
| start  | 起始     | 从 0 开始，默认为 0                                     |
| count  | 数量     |                                                         |
| order  | 排序     | asc, desc, 默认为相册本身的排序                         |
| sortby | 排序方式 | time 上传时间，vote 推荐数，comment 回复数，默认为 time |

返回：

```json
{
  "start": 0,
  "count": 10,
  "total": 30,
  "photos": [Photo]
}
```

## 获得照片

```
GET https://api.douban.com/v2/photo/:id
```

返回照片 Photo

## 照片回复

具体见[回复 Api V2](comment.md)

scope: community_basic_photo

| name             | Method | endpoint                  |
| ---------------- | ------ | ------------------------- |
| 照片回复列表     | GET    | /v2/photo/:id/comments    |
| 获得照片单条回复 | GET    | /v2/photo/:id/comment/:id |

[回 Api V2 首页](readme.md)
