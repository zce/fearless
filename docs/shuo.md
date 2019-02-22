# 豆瓣广播 Api V2

[回 Api V2 首页](readme.md)

注：广播所有的 API 操作都需要登录。

## 发送一条广播

### 说明

```
发布一条广播信息。请求必须用POST方式提交。
豆瓣广播类型繁多，但是对外只支持‘我说’（可带图）和‘推荐网址’两种。
```

### URL

```
shuo/v2/statuses/
```

### 支持格式

```
JSON
```

### HTTP 请求方式

```
POST
’我说‘类型的广播中如果需要附带图片，注意采用multipart/form-data编码方式上传，上传图片大小限制为<3M，仅支持JPEG,GIF,PNG图片，name 是 image
```

### 请求参数

| 参数      | 必选  | 类型及范围 | 说明               |
| --------- | ----- | ---------- | ------------------ |
| source    | true  | string     | appkey             |
| text      | true  | string     | 广播文本内容       |
| image     | false | bytes      | 我说的图           |
| rec_title | false | string     | 推荐网址的标题     |
| rec_url   | false | string     | 推荐网址的 href    |
| rec_desc  | false | string     | 推荐网址的描述     |
| rec_image | false | string     | 推荐网址的附图 url |

注意：

```
1. image参数一定是我说带的图， 无法作为推荐时带的图， 推荐附图请使用rec_image参数
2. 有image的情况下rec系列参数都会被忽略。
3. 由于原来的attachments参数过于繁琐， 以后已经不建议使用， 而它也只有在image参数和rec系列参数都不传的情况下才会生效。
```

### 调用示例

```
curl "https://api.douban.com/shuo/v2/statuses/" -H "Authorization: Bearer TOKEN"  -F "text=TestText"  -F "image=@upload.png"
```

### 返回结果

```
发送成功的广播数据
```

## 获取当前登录用户及其所关注用户的最新广播(友邻广播)

### 说明

```
获取当前登录用户及其所关注用户的最新广播消息。
```

### URL

```
shuo/v2/statuses/home_timeline
```

### 支持格式

```
JSON
```

### HTTP 请求方式

```
GET
```

### 请求参数

| 参数     | 必选  | 类型及范围 | 说明                                                                                       |
| -------- | ----- | ---------- | ------------------------------------------------------------------------------------------ |
| since_id | false | int64      | 若指定此参数，则只返回 ID 比 since_id 大的广播消息（即比 since_id 发表时间晚的广播消息）。 |
| until_id | false | int64      | 若指定此参数，则返回 ID 小于或等于 until_id 的广播消息                                     |
| count    | false | int        | 默认 20，最大 200                                                                          |
| start    | false | int        | 默认 0                                                                                     |

### 调用示例

```
shuo/v2/statuses/home_timeline?until_id=1006254272
```

### 返回结果

广播列表 示例请登录后点击[这里](http://api.douban.com/shuo/v2/statuses/home_timeline)

## 获取用户发布的广播列表

### 说明

```
返回用户最新发表的广播消息列表。
```

### URL

```
shuo/v2/statuses/user_timeline/:user_id
或者：
shuo/v2/statuses/user_timeline/:screen_name
```

### 支持格式

```
JSON
```

### HTTP 请求方式

```
GET
```

### 请求参数

| 参数     | 必选  | 类型及范围 | 说明                                                                               |
| -------- | ----- | ---------- | ---------------------------------------------------------------------------------- |
| since_id | false | int64      | 若指定此参数，则只返回 ID 比 since_id 大（即比 since_id 发表时间晚的）的广播消息。 |
| until_id | false | int64      | 若指定此参数，则返回 ID 小于或等于 until_id 的广播消息                             |

**如果:id、user_id、screen_name 三个参数均未指定，则返回当前登录用户最近发表的广播消息列表。**

### 调用示例

```
shuo/v2/statuses/user_timeline/2770683
shuo/v2/statuses/user_timeline/ahbei
```

### 返回结果（JSON 示例）

广播列表 示例可点击[这里](http://api.douban.com/shuo/v2/statuses/user_timeline/ahbei)

## 单条广播接口

### 读取（或者删除）一条广播

#### 说明

```
1. 读取一条广播
2. 删除一条广播
```

#### URL

```
shuo/v2/statuses/:id
```

#### 支持格式

```
JSON
```

#### HTTP 请求方式

```
GET/DELETE
```

- GET 为获取单条广播内容
- DELETE 为删除单条广播，只有删除自己的广播

#### 请求参数

| 参数 | 必选  | 类型及范围 | 说明                                |
| ---- | ----- | ---------- | ----------------------------------- |
| pack | false | bool       | 是否打包 resharers 和 comments 数据 |

#### 调用示例

```
shuo/v2/statuses/:id
```

#### 返回结果

1. 该条广播数据

2. 当 pack 为真时

```json
{
  "status": 广播数据,
  "reshare_users": 转播的用户列表,
  "comments": 评论列表,
  "like_users": 赞的用户列表
}
```

### 获取一条广播的回复列表 或者 添加一条评论

#### 说明

```
操作一条广播的回复（包括获取评论列表和添加评论）
```

#### URL

```
shuo/v2/statuses/:id/comments
```

#### 支持格式

```
JSON
```

#### HTTP 请求方式

```
GET 返回一条广播的回复列表
支持参数：start, count

POST 回复一条广播
```

#### 调用示例

```
shuo/v2/statuses/:id/comments
```

#### 返回结果

```
POST: 返回comment 对象
GET： 返回comment对象列表
```

### 获取单条回复的内容或者删除该回复

#### 说明

```
操作一条回复(获取其内容或者是删除)
```

#### URL

```
shuo/v2/statuses/comment/:id
```

#### 支持格式

```
JSON
```

#### HTTP 请求方式

```
GET/DELETE
```

- GET 为获取单条回复内容（可能没用）
- DELETE 为删除单条回复，楼主、发帖人、管理员能删除

#### 调用示例

```
shuo/v2/statuses/comment/:id
```

#### 返回结果

```
该条comment数据（包含相关的statuses)
```

### 转播

#### 说明

1. 获取一条广播的转发相关信息 GET
2. 转播一条广播信息。请求必须用 POST 方式提交。
3. 取消转播等价于删除一条广播

#### URL

```
shuo/v2/statuses/:id/reshare
```

#### 支持格式

```
JSON
```

#### HTTP 请求方式

```
GET  获取最近转播的用户列表
POST 转播
```

#### 调用示例

```
shuo/v2/statuses/:id/reshare
```

#### 返回结果

```
发送成功的广播数据
```

### 赞

#### 说明

```
1. 获取一条广播的赞相关信息 GET
2. 赞一条广播 POST
3. 取消赞 DELETE
```

#### URL

```
shuo/v2/statuses/:id/like
```

#### 支持格式

```
JSON
```

#### HTTP 请求方式

```
+ GET  获取最近赞的用户列表
+ POST 赞
+ DELETE 取消赞
```

#### 调用示例

```
shuo/v2/statuses/:id/like
```

#### 返回结果

```
对应的广播数据
```

## 用户接口

### 获取用户关注列表

#### 说明

```
返回一个用户follow的用户列表
```

#### URL

```
shuo/v2/users/:id/following
```

#### 支持格式

JSON

#### HTTP 请求方式

GET

#### 请求参数

| 参数 | 必选  | 类型及范围 | 说明         |
| ---- | ----- | ---------- | ------------ |
| tag  | false | int        | 该 tag 的 id |

#### 调用示例

shuo/v2/users/:id/following

#### 返回结果

```
返回一个用户follow的用户列表
```

### 获取用户关注者列表

#### 说明

```
返回follow一个用户的用户列表
```

#### URL

```
shuo/v2/users/:id/followers
```

#### 支持格式

JSON

#### HTTP 请求方式

GET

#### 调用示例

shuo/v2/users/:id/followers

#### 返回结果

```
返回follow一个用户的用户列表
```

### 获取共同关注的用户列表

#### 说明

```
返回共同关注的用户列表
```

#### URL

```
shuo/v2/users/:id/follow_in_common
```

#### 支持格式

JSON

#### HTTP 请求方式

GET

#### 调用示例

shuo/v2/users/:id/follow_in_common

#### 返回结果

```
返回共同关注的用户列表
```

### 获取关注的人关注了该用户的列表

#### 说明

返回当前用户关注的人中也关注了该用户的列表

#### URL

```
shuo/v2/users/:id/following_followers_of
```

#### 支持格式

JSON

#### HTTP 请求方式

GET

#### 调用示例

shuo/v2/users/:id/following_followers_of

#### 返回结果

```
返回当前用户关注的人中也关注了该用户的列表
```

### 搜索用户

#### 说明

```
搜索用户
```

#### URL

```
shuo/v2/users/search
```

#### 支持格式

JSON

#### HTTP 请求方式

GET

#### 请求参数

| 参数 | 必选 | 类型及范围 | 说明       |
| ---- | ---- | ---------- | ---------- |
| q    | true | string     | 搜索字符串 |

#### 调用示例

shuo/v2/users/search?q=ahbei

#### 返回结果

```
返回符合要求的user列表
```

### block 用户

#### 说明

```
将指定用户加入黑名单
```

#### URL

```
shuo/v2/users/:id/block
```

#### 支持格式

JSON

#### HTTP 请求方式

POST

#### 请求参数

| 参数    | 必选 | 类型及范围 | 说明    |
| ------- | ---- | ---------- | ------- |
| user_id | true | string     | 用户 ID |

#### 调用示例

shuo/v2/users/:id/block

#### 返回结果

- 成功：{"r": 1}
- 失败：{"r": 0}

## 关系接口

### 建立关注

#### 说明

```
follow一个用户
```

#### URL

```
shuo/v2/friendships/create
```

#### 支持格式

JSON

#### HTTP 请求方式

POST

#### 请求参数

| 参数    | 必选 | 类型及范围 | 说明    |
| ------- | ---- | ---------- | ------- |
| source  | true | string     | appkey  |
| user_id | true | string     | 用户 id |

#### 返回结果

```
发送follow用户的user对象
```

### 取消关注

#### 说明

```
unfollow一个用户
```

#### URL

```
shuo/v2/friendships/destroy
```

#### 支持格式

JSON

#### HTTP 请求方式

POST

#### 请求参数

| 参数    | 必选 | 类型及范围 | 说明    |
| ------- | ---- | ---------- | ------- |
| source  | true | string     | appkey  |
| user_id | true | string     | 用户 id |

#### 返回结果

```
发送unfollow用户的user对象
```

### 获取两个用户的关系

#### 说明

```
follow一个用户
```

#### URL

```
shuo/v2/friendships/show
```

#### 支持格式

JSON

#### HTTP 请求方式

GET

#### 请求参数

| 参数      | 必选 | 类型及范围 | 说明    |
| --------- | ---- | ---------- | ------- |
| source    | true | string     | appkey  |
| source_id | true | string     | 用户 id |
| target_id | true | string     | 用户 id |

其中 source_id 如果没有，则使用当前用户

#### 返回结果

```json
{
  "source": {
    "id": "3407397647969193784",
    "screen_name": "Tux",
    "following": false,
    "followed_by": true
  },
  "target": {
    "id": "-7325997749471485394",
    "screen_name": "001",
    "following": true,
    "followed_by": false
  }
}
```

### 返回的各对象的说明

#### 广播对象

| 属性            | 类型及范围  | 说明                                                           |
| --------------- | ----------- | -------------------------------------------------------------- |
| id              | string      | 广播 id                                                        |
| user            | JSON string | 发广播者                                                       |
| title           | string      | 广播的 title， 如：推荐网址                                    |
| text            | string      | web 段在引号内展示的一段文本, 一般为用户输入的内容             |
| attachments     | JSON string | 请参见发送一条广播的 API 中对 attachments 的说明               |
| source          | JSON string | app key 对应的应用名和应用 url                                 |
| reshared_count  | int         | 转播数                                                         |
| like_count      | int         | 赞的数量                                                       |
| comments_count  | int         | 回应数                                                         |
| can_reply       | bool        | 是否可被回应                                                   |
| liked           | bool        | 是否已经喜欢                                                   |
| created_at      | string      | 发广播的时间                                                   |
| reshared_status | JSON string | 转播的广播对象，这个属性只有在当前广播是一条转播的条件下才会有 |

#### 用户对象

| 属性        | 类型及范围 | 说明     |
| ----------- | ---------- | -------- |
| id          | string     | 用户 id  |
| uid         | string     | 用户域名 |
| screen_name | string     | 用户名号 |
| icon_avatar | string     | 用户头像 |

#### attachments

attachments 是一个 json array 格式的字符串， array 里面的元素称为物, 目前每条广播只支持单个物，物是每条广播表述的行为中的那个宾语，例如： xx 推荐网址， 网址就是这个‘物’， 它的结构如下：

| 属性        | 说明                                                                                                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | 标题，如果传空，会显示‘无标题’， 最大长度 100 字节（50 汉字或 100 字母）                                                                                                           |
| href        | 链接，url 最大长度 1024，需要分析并展示网站域名                                                                                                                                    |
| description | 描述，可以为空，最大长度 200 字节（100 汉字或 200 字母）                                                                                                                           |
| media       | 富媒体，允许 image, flash, music 单条广播所有[[BR]]图片无最小值限制，文件最大不超过 3M[[BR]]缩略图：最大边 150px[[BR]]点击展开后：宽度最大 460px，高度不限[[BR]]原图大小无宽高限制 |
| caption     | 子标题                                                                                                                                                                             |
| type        | 分类，预留字段                                                                                                                                                                     |
| properties  | 如果有分类，这里存放对应类别的详细数据，具体的字段由该类别自行定义                                                                                                                 |

#### media 类型

##### image

```json
{"media":[
    {
        "src": "http://icanhascheezburger.files.wordpress.com/2009/03/funny-pictures-kitten-finished-his-milk-and-wants-a-cookie.jpg",
        "href": "http://icanhascheezburger.com/2009/03/30/funny-pictures-awlll-gone-cookie-now/",
        "type: "image",
        "sizes": {"small": [160, 160], "media": [400, 900], "raw": [700, 1000]}
    },
    {
        "src": "http://photos.icanhascheezburger.com/completestore/2009/1/18/128768048603560273.jpg",
        "href": "http://ihasahotdog.com/upcoming/?pid=20869",
        "type: "image"
    }]
}
```

##### flash

```json
{
  "media": [
    {
      "src": "http://www.mapsofwar.com/photos/EMPIRE17.swf",
      "imgsrc": "http://icanhascheezburger.files.wordpress.com/2009/04/funny-pictures-hairless-cat-phones-    home.jpg",
      "type": "flash"
    }
  ]
}
```

##### music

```json
{
  "media": [
    {
      "src": "http://www.looptvandfilm.com/blog/Radiohead%20-%20In%20Rainbows/01%20-      %20Radiohead%20-%2015%20Step.MP3",
      "title": "15 Step",
      "artist": "Radiohead",
      "album": "In Rainbows",
      "type": "music"
    }
  ]
}
```

[回 Api V2 首页](readme.md)
