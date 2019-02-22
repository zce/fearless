# 豆瓣日记 API V2

[回 Api V2 首页](readme.md)

＊ 注意，日记 Api V2 都需要登录后才能访问

scope: community_basic_note

| name                                      | Method | endpoint                  |
| ----------------------------------------- | ------ | ------------------------- |
| [增加一篇日记](#add)                      | POST   | /v2/notes                 |
| [删除一篇日记](#delete)                   | DELETE | /v2/note/:id              |
| [更新一篇日记](#update)                   | PUT    | /v2/note/:id              |
| [上传照片到日记](#upload)                 | POST   | /v2/note/:id              |
| [获取一篇日记](#get)                      | GET    | /v2/note/:id              |
| [获取日记下的评论列表](#get_comment_list) | GET    | /v2/note/:id/comments     |
| [喜欢一篇日记](#like_note)                | POST   | /v2/note/:id/like         |
| [取消喜欢一篇日记](#unlike_note)          | DELETE | /v2/note/:id/like         |
| [获取用户的日记列表](#get_list)           | GET    | /v2/note/user_created/:id |

## 日记 Note

```json
{
    "update_time": "2012-08-20 15:55:20",
    "publish_time": "2012-08-19 01:20:09",
    "photos": {
        "2" : "http://img6.douban.com/view/note/large/public/p231928725-2.jpg",
        "3" : "http://img6.douban.com/view/note/large/public/p231928725-3.jpg",
        "4" : "http://img6.douban.com/view/note/large/public/p231928725-4.jpg",
    },
    "comments_count": 19,
    "liked_count": 67
    "recs_count": 72,
    "id": "231928725",
    "alt": "http://www.douban.com/note/231928725",
    "can_reply": true,
    "title": "《EVA》中现代人的救赎之路 ———论《EVA》中的诺斯替和现代性元素及其他（未完待续）",
    "privacy": "public",
    "summary": "《EVA》中现代人的救赎之路 ———论《EVA》中的诺斯替和现代性元素及其他   这个...",
    "content": "临近20C，当尼采这个狂人宣告上帝已死的时候，现代性才跃出了启蒙思想家的思想图纸，犹如鬼魅一般真正进入了大众民众的日常思想谱系，于是，形式繁多的现代性学说主宰了20C的大众意识形态，无                 论是虚无主义，存在主义，还是马克思主义等等都是现代性语境下的产物。但随着现代性在意识形态的统治地位不断扩张，现代性所引发的病理在21C也愈发彰显。[img=2:C]救赎之路[/img]于是现代性问题成为20C思想界的重要议题，但有两位独树一帜的思想家却引发了我的兴趣，他俩就是约纳斯和沃格林。[img=4:L][/img]沃格林首开先河的提出，基督教早期的异端诺斯替主义像幽灵一样附着于现代性的各种学说之中，并从思想史的角度出发来阐释诺斯替主义和现代性千丝万缕的关系。约纳斯不仅把诺斯替主义看作历史上的一场精神运动，而且进一步把它视为对人类处境的一种独特类型的回应，认为它的思想原则与精神态度普遍地存在于历史的各个阶段。古代的诺斯替宗教..  [url=http://www.douban.com][/url]"
}
```

| 字段          | 意义         | 备注                                                         |
| ------------- | ------------ | ------------------------------------------------------------ |
| update_time   | 更新时间     | 最后一次编辑的时间                                           |
| publish_time  | 发布时间     | 无                                                           |
| photos        | 日记里的图   | 日记关联的图片                                               |
| recs_count    | 被推荐的次数 | 无                                                           |
| id            | 日记的 id    | 无                                                           |
| can_reply     | 是否能评论   | true 表示可以评论,false 表示不能评论                         |
| title         | 日记标题     | 无                                                           |
| privacy       | 可见权限     | public:表示所有人可见 friend:只朋友可见 private:只有自己可见 |
| summary       | 日记简要描述 | 无                                                           |
| content       | 日记内容     | 无                                                           |
| comment_count | 评论数       | 无                                                           |
| liked_count   | 标记为喜欢数 | 无                                                           |

日记内容格式

使用格式类似 BBCode，具体例子如下：

| 项目         | 代码                                    |
| ------------ | --------------------------------------- |
| 图片         | [img=id:layout][/img]                   |
| 带标注的图片 | [img=id:layout]desc[/img]               |
| url          | [url="http://www.douban.com"][/url]     |
| 带标题的 url | [url="http://www.douban.com"]豆瓣[/url] |

图片格式解释

| 格式   | 解释                                                |
| ------ | --------------------------------------------------- |
| id     | 图片顺序号，每篇日记内不能重复                      |
| layout | 排版，有 L，C，R，分别对应居左，居中，居右 3 种排版 |
| desc   | 图注，可以为空                                      |

## 获取用户的日记列表

```
GET https://api.douban.com/v2/note/user_created/:id
```

请求参数：

| format | 日记内容格式 | 取值为 html_full, html_short, abstract, text，默认为 text |
| ------ | ------------ | --------------------------------------------------------- |
|        |              |                                                           |

返回一个[Note](#note) 列表

## 获取一条日记

```
GET https://api.douban.com/v2/note/:id
```

请求参数：

| 参数   | 描述         | 可选值                                                    |
| ------ | ------------ | --------------------------------------------------------- |
| format | 日记内容格式 | 取值为 html_full, html_short, abstract, text，默认为 text |

日记内容格式含义

| 格式       | 描述                                              |
| ---------- | ------------------------------------------------- |
| text       | 默认格式，文本默认，图片和 url 使用类 BBCode 标签 |
| html_full  | html 格式的全部内容                               |
| html_short | html 格式的摘要内容                               |
| abstract   | 文本格式的摘要内容                                |

返回一个[Note](#note)

## 增加一条日记

```
POST https://api.douban.com/v2/notes
```

＊ 如果有图片的话采用 multipart/form-data 编码方式，上传图片大小限制为<3M，name 是 image_pid

请求参数

| 名称       | 含义                                                                                                            | 备注                                                           | 示例                             |
| ---------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------- |
| title      | 日记标题                                                                                                        | 必传，不能为空                                                 |                                  |
| privacy    | 隐私控制                                                                                                        | 为 public，friend，private，分布对应公开，朋友可见，仅自己可见 |                                  |
| can_reply  | 是否允许回复                                                                                                    | 必传, true 或者 false                                          |                                  |
| content    | 日记内容, 如果含图片，使用“<图片 p_pid>”伪 tag 引用图片, 如果含链接，使用 html 的链接标签格式，或者直接使用网址 | 必传                                                           | 日记正文<图片 p_2>正文<图片 p_3> |
| pids       | 上传的图片 pid 本地编号，使用前缀"p\_"                                                                          | 用逗号分隔，最多一次传 3 张图片                                | p_2,p_3,p_4                      |
| layout_pid | 对应 pid 的排版                                                                                                 | 有 L, C, R 分别对应居左，居中，居右 3 种排版                   |                                  |
| desc_pid   | 对应 pid 的图注                                                                                                 | 可以为空                                                       |                                  |
| image_pid  | 对应 pid 的图片内容                                                                                             |                                                                |                                  |

## 喜欢一条日记

```
POST https://api.douban.com/v2/note/:id/like
```

## 取消喜欢一条日记

```
DELETE https://api.douban.com/v2/note/:id/like
```

请求参数

| 参数      | 意义           | 备注                                                                                                |
| --------- | -------------- | --------------------------------------------------------------------------------------------------- |
| title     | 日记标题       | 必选参数                                                                                            |
| content   | 日记内容       | 必选参数                                                                                            |
| privacy   | 日记可见权限   | 可选参数,默认为 public ,对所有人都可见,public:表示所有人可见 friend:只朋友可见 private:只有自己可见 |
| can_reply | 日记是否可评论 | 可选参数,默认为 true ,true 表示可以评论,false 表示不能评论                                          |

返回 201，新创建的[Note](#note)

## 更新一条日记

```
PUT https://api.douban.com/v2/note/:id
```

参数同创建日记一样,成功返回 202 ,更新后的[Note](#note)

## 上传照片到日记

```
POST https://api.douban.com/v2/note/:id
```

＊ 采用 multipart/form-data 编码方式，上传图片大小限制为<3M，name 是 image_pid

请求参数

| 名称       | 含义                                        | 备注                                         | 示例                             |
| ---------- | ------------------------------------------- | -------------------------------------------- | -------------------------------- |
| pids       | 上传的图片 pid 本地编号，使用前缀"p\_"      | 用逗号分隔，最多一次传 3 张图片              | p_2,p_3,p_4                      |
| layout_pid | 对应 pid 的排版                             | 有 L, C, R 分别对应居左，居中，居右 3 种排版 |                                  |
| desc_pid   | 对应 pid 的图注                             | 可以为空                                     |                                  |
| content    | 日记内容, 使用“<图片 p_pid>”伪 tag 引用图片 | 可选，如果不传的话，图片会追加到日记末尾     | 日记正文<图片 p_2>正文<图片 p_3> |
| image_pid  | 对应 pid 的图片内容                         |                                              |                                  |

```
//image2.png, image3.png 为本地图片文件路径，curl调用如下，TOKEN为授权后的access_token
curl "https://api.douban.com/v2/note/:id" -H "Authorization: Bearer TOKEN"  -F "pids=p_2,p_3"  -F "image_2=@image2.png" -F "image_3=@image3.png"
```

返回更新后的日记 Note

## 删除一条日记

```
DELETE https://api.douban.com/v2/note/:id
```

删除成功 返回 200

## 日记回复

具体见[回复 Api V2](comment.md)

| name             | Method | endpoint                 |
| ---------------- | ------ | ------------------------ |
| 获取讨论回复列表 | GET    | /v2/note/:id/comments    |
| 回复讨论         | POST   | /v2/note/:id/comments    |
| 获取讨论单条回复 | GET    | /v2/note/:id/comment/:id |
| 删除讨论回复     | DELETE | /v2/note/:id/comment/:id |

## 日记相关错误码

| 错误码 | 错误信息         | 含义                                                                | status_code |
| ------ | ---------------- | ------------------------------------------------------------------- | ----------- |
| 1006   | target_not_found | 找不到某条日记                                                      | 400         |
| 1000   | need_permission  | 没权限访问用户不可见的日记，或者没登录的情况下去访问需要登录的数据  | 403         |
| 1002   | missing_args     | 请求的时候缺少必选的参数                                            | 400         |
| 1014   | wrong_method     | 错误的 http 请求方式，比如一些接口需要 http PUT 却用 http POST 请求 | 400         |
| 1001   | uri_not_found    | 未登录 或者访问的 api 没有经过授权申请通过                          | 404         |

[回 Api V2 首页](readme.md)
