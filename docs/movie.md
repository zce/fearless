# Movie API Doc

## 说明:

V2 版 API 权限分 3 类:

- 公开（对应 Required Scope URI ：movie_basic_r, movie_basic_w）- 所有开发者均可申请，审核通过。限定 40 次请求/分钟。开放基本数据接口，一般的个人爱好者自建网站或应用都会满足。
- 高级（对应 Required Scope URI ：movie_advance_r, movie_advance_w） - 在运行过一段时间之后，如果这个非商业网站（例如非盈利性质的图书馆，学校，公益组织等）的确出众，且价值观符合 Douban，无版权问题，又不和豆瓣电影有正面的商业竞争，可以申请高级权限。开放基本上所有的接口。
- 商务（对应 Required Scope URI ：movie_premium_r, movie_premium_w）- 应用于商务合作，不限制次数，开放有限接口。已经商业化网站请使用此接口。 移植到 V2 之后，只要满足我们的 API 规定要求（见后），即可开通。
  > 申请开通高级或商务接口请联系 bd-team@douban.com
- 评分需和资料任一项同时显示，并且标注“豆瓣评分”
- 如使用资料，须在影片资料下增加链接“去豆瓣电影查看详情”，链接指向为相应条目 url
- 影评须单独注明“豆瓣电影”，不可和其他方评论数据混合显示
- 如果应用包含客户端服务，此客户端不得使用包含“豆瓣“和”豆瓣电影”字样显示在名称及相应 logo 内
- 如果应用使用豆瓣资料、评分、影评，则此应用不得采用其他平台方提供的同类型数据，且应用不得自建评分、影评服务

## API 列表

### 电影条目

- [电影条目信息](#subject)
- [电影条目剧照](#subject-photos)
- [电影条目长评](#reviews)
- [电影条目短评](#comments)

### 影人条目

- [影人条目信息](#celebrity)
- [影人剧照](#celebrity-photos)
- [影人作品](#works)

### 搜索

- [电影搜索](#search)

### 榜单

- [正在热映](#in_theaters)
- [即将上映](#coming_soon)
- [Top250](#top250)
- [口碑榜](#weekly)
- [北美票房榜](#us-box)
- [新片榜](#new-movies)

## TODO

- `[ ]` 电影条目信息中删除 pubdate 字段, 含义和 mainland_pubdate 重复了

### 电影条目信息

---

#### Resources URI

```
/v2/movie/subject/:id
```

#### Required Scope

```
movie_basic_r
```

#### Example:

```
GET /v2/movie/subject/1764796
```

#### Status:

```
200 OK
```

#### Resources Properties:

| Property         | Description                                                                                    | Type  | Basic | Advance | Premium | Default  |
| ---------------- | ---------------------------------------------------------------------------------------------- | ----- | ----- | ------- | ------- | -------- |
| id               | 条目 id                                                                                        | str   | Y     | Y       | Y       | -        |
| title            | 中文名                                                                                         | str   | Y     | Y       | Y       | -        |
| original_title   | 原名                                                                                           | str   | Y     | Y       | Y       | ''       |
| aka              | 又名                                                                                           | array | Y     | Y       | Y       | []       |
| alt              | 条目页 URL                                                                                     | str   | Y     | Y       | Y       | -        |
| mobile_url       | 移动版条目页 URL                                                                               | str   | Y     | Y       | Y       | -        |
| rating           | 评分，[见附录](#subject-rating)                                                                | dict  | Y     | Y       | Y       | -        |
| ratings_count    | 评分人数                                                                                       | int   | Y     | Y       | Y       | 0        |
| wish_count       | 想看人数                                                                                       | int   | Y     | Y       | Y       | 0        |
| collect_count    | 看过人数                                                                                       | int   | Y     | Y       | Y       | 0        |
| do_count         | 在看人数，如果是电视剧，默认值为 0，如果是电影值为 null                                        | int   | Y     | Y       | Y       | 0 / null |
| images           | 电影海报图，分别提供 288px x 465px(大)，96px x 155px(中) 64px x 103px(小)尺寸                  | dict  | Y     | Y       | Y       | -        |
| subtype          | 条目分类, movie 或者 tv                                                                        | str   | Y     | Y       | Y       | movie    |
| directors        | 导演，数据结构为影人的简化描述，[见附录](#simple-celebrity)                                    | array | Y     | Y       | Y       | []       |
| casts            | 主演，最多可获得 4 个，数据结构为影人的简化描述，[见附录](#simple-celebrity)                   | array | Y     | Y       | Y       | []       |
| writers          | 编剧，数据结构为影人的简化描述，[见附录](#simple-celebrity)                                    | array | N     | Y       | Y       | []       |
| website          | 官方网站                                                                                       | str   | N     | Y       | Y       | ''       |
| douban_site      | 豆瓣小站                                                                                       | str   | Y     | Y       | Y       | ''       |
| pubdates         | 如果条目类型是电影则为上映日期，如果是电视剧则为首 Ï 日期                                      | array | N     | Y       | Y       | []       |
| mainland_pubdate | 大陆上映日期，如果条目类型是电影则为上映日期，如果是电视剧则为首播日期                         | str   | N     | Y       | Y       | ''       |
| pubdate          | 兼容性数据，未来会去掉，大陆上映日期，如果条目类型是电影则为上映日期，如果是电视剧则为首播日期 | str   | N     | Y       | Y       | ''       |
| year             | 年代                                                                                           | str   | Y     | Y       | Y       | ''       |
| languages        | 语言                                                                                           | array | N     | Y       | Y       | []       |
| durations        | 片长                                                                                           | array | N     | Y       | Y       | []       |
| genres           | 影片类型，最多提供 3 个                                                                        | array | Y     | Y       | Y       | []       |
| countries        | 制片国家/地区                                                                                  | array | Y     | Y       | Y       | []       |
| summary          | 简介                                                                                           | str   | Y     | Y       | Y       | ''       |
| comments_count   | 短评数量                                                                                       | int   | Y     | Y       | Y       | 0        |
| reviews_count    | 影评数量                                                                                       | int   | Y     | Y       | Y       | 0        |
| seasons_count    | 总季数(tv only)                                                                                | int   | Y     | Y       | Y       | 0 / null |
| current_season   | 当前季数(tv only)                                                                              | int   | Y     | Y       | Y       | 0 / null |
| episodes_count   | 当前季的集数(tv only)                                                                          | int   | Y     | Y       | Y       | 0 / null |
| schedule_url     | 影讯页 URL(movie only)                                                                         | str   | Y     | Y       | Y       | ''       |
| trailer_urls     | 预告片 URL，对高级用户以上开放，最多开放 4 个地址                                              | array | N     | Y       | Y       | []       |
|                  |                                                                                                |       |       |         |         |          |
| clip_urls        | 片段 URL，对高级用户以上开放，最多开放 4 个地址                                                | array | N     | Y       | Y       | []       |
|                  |                                                                                                |       |       |         |         |          |
| blooper_urls     | 花絮 URL，对高级用户以上开放，最多开放 4 个地址                                                | array | N     | Y       | Y       | []       |
| photos           | 电影剧照，前 10 张，[见附录](#simple-photo)                                                    | array | N     | Y       | Y       | []       |
| popular_reviews  | 影评，前 10 条，影评结构，[见附录](#simple-review)                                             | array | N     | Y       | Y       | []       |

### 影人条目信息

---

#### Resources URI

```
/v2/movie/celebrity/:id
```

#### Required Scope

```
movie_basic_r
```

#### Example:

```
GET /v2/movie/celebrity/1054395
```

#### Status:

```
200 OK
```

#### Resources Properties:

| Property      | Description                                                                  | Type  | Basic | Advance | Premium | Default |
| ------------- | ---------------------------------------------------------------------------- | ----- | ----- | ------- | ------- | ------- |
| id            | 条目 id                                                                      | str   | Y     | Y       | N/A     | -       |
| name          | 中文名                                                                       | str   | Y     | Y       | N/A     | -       |
| name_en       | 英文名                                                                       | str   | Y     | Y       | N/A     | ''      |
| alt           | 条目页 URL                                                                   | str   | Y     | Y       | N/A     | -       |
| mobile_url    | 条目移动版 URL                                                               | str   | Y     | Y       | N/A     | -       |
| avatars       | 影人头像，分别提供 420px x 600px(大)，140px x 200px(中) 70px x 100px(小)尺寸 | dict  | Y     | Y       | N/A     | -       |
| summary       | 简介                                                                         | str   | N     | Y       | N/A     | ''      |
| aka           | 更多中文名                                                                   | array | Y     | Y       | N/A     | []      |
| aka_en        | 更多英文名                                                                   | array | Y     | Y       | N/A     | []      |
| website       | 官方网站                                                                     | str   | N     | Y       | N/A     | ''      |
| gender        | 性别                                                                         | str   | Y     | Y       | N/A     | ''      |
| birthday      | 出生日期                                                                     | str   | N     | Y       | N/A     | ''      |
| born_place    | 出生地                                                                       | str   | Y     | Y       | N/A     | ''      |
| professions   | 职业                                                                         | array | N     | Y       | N/A     | []      |
| constellation | 星座                                                                         | str   | N     | Y       | N/A     | ''      |
| photos        | 影人剧照，最多 10 张，[见附录](#simple-photo)                                | array | N     | Y       | N/A     | []      |
| works         | 影人作品，最多 5 部，简版电影条目结构，[见附录](#simple-subject)             | array | Y     | Y       | N/A     | []      |

### 电影条目剧照

---

#### Resources URI

```
/v2/movie/subject/:id/photos
```

#### Required Scope

```
movie_advance_r
```

#### Example:

```
GET /v2/movie/subject/1054395/photos
```

#### Status:

```
200 OK
```

#### Request Properties:

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| start    | start       | int  | N/A   | Y       | Y       | 0       |
| count    | count       | int  | N/A   | Y       | Y       | 10      |

#### Resources Properties:

| Property | Description                         | Type  | Basic | Advance | Premium | Default |
| -------- | ----------------------------------- | ----- | ----- | ------- | ------- | ------- |
| start    | start                               | int   | N/A   | Y       | Y       | 0       |
| count    | count                               | int   | N/A   | Y       | Y       | 10      |
| total    | 总数                                | int   | N/A   | Y       | Y       | 0       |
| subject  | 电影条目，[见附录](#simple-subject) | dict  | N/A   | Y       | Y       | -       |
| photos   | 查询结果，[见附录](#photo)          | array | N/A   | Y       | Y       | -       |

### 电影条目影评列表

---

#### Resources URI

```
/v2/movie/subject/:id/reviews
```

#### Required Scope

```
movie_advance_r
```

#### Example:

```
GET /v2/movie/subject/1054395/reviews
```

#### Status:

```
200 OK
```

#### Request Properties:

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| start    | start       | int  | N/A   | Y       | Y       | 0       |
| count    | count       | int  | N/A   | Y       | Y       | 10      |

#### Resources Properties:

| Property | Description                         | Type  | Basic | Advance | Premium | Default |
| -------- | ----------------------------------- | ----- | ----- | ------- | ------- | ------- |
| start    | start                               | int   | N/A   | Y       | Y       | 0       |
| count    | count                               | int   | N/A   | Y       | Y       | 10      |
| total    | 总数                                | int   | N/A   | Y       | Y       | 0       |
| subject  | 电影条目，[见附录](#simple-subject) | dict  | N/A   | Y       | Y       | -       |
| reviews  | 影评列表，[见附录](#review)         | array | N/A   | Y       | Y       | -       |

### 电影条目短评列表

---

#### Resources URI

```
/v2/movie/subject/:id/comments
```

#### Required Scope

```
movie_advance_r
```

#### Example:

```
GET /v2/movie/subject/1054395/comments
```

#### Status:

```
200 OK
```

#### Request Properties:

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| start    | start       | int  | N/A   | Y       | Y       | 0       |
| count    | count       | int  | N/A   | Y       | Y       | 10      |

#### Resources Properties:

| Property | Description                         | Type  | Basic | Advance | Premium | Default |
| -------- | ----------------------------------- | ----- | ----- | ------- | ------- | ------- |
| start    | start                               | int   | N/A   | Y       | Y       | 0       |
| count    | count                               | int   | N/A   | Y       | Y       | 10      |
| total    | 总数                                | int   | N/A   | Y       | Y       | 0       |
| subject  | 电影条目，[见附录](#simple-subject) | dict  | N/A   | Y       | Y       | -       |
| comments | 短评列表，[见附录](#comment)        | array | N/A   | Y       | Y       | -       |

### 影人作品

---

#### Resources URI

```
/v2/movie/celebrity/:id/works
```

#### Required Scope

```
movie_advance_r
```

#### Example:

```
GET /v2/movie/celebrity/1054395/works
```

#### Status:

```
200 OK
```

#### Request Properties:

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| start    | start       | int  | N/A   | Y       | Y       | 0       |
| count    | count       | int  | N/A   | Y       | Y       | 5       |

#### Resources Properties:

| Property  | Description                                               | Type  | Basic | Advance | Premium | Default |
| --------- | --------------------------------------------------------- | ----- | ----- | ------- | ------- | ------- |
| start     | start                                                     | int   | N/A   | Y       | Y       | 0       |
| count     | count                                                     | int   | N/A   | Y       | Y       | 5       |
| total     | 总数                                                      | int   | N/A   | Y       | Y       | 0       |
| celebrity | 影人条目，[见附录](#simple-celebrity)                     | dict  | N/A   | Y       | Y       | -       |
| works     | 作品列表，包括作品及对应的角色，[见附录](#simple-subject) | array | N/A   | Y       | Y       | -       |

### 影人剧照

---

#### Resources URI

```
/v2/movie/celebrity/:id/photos
```

#### Required Scope

```
movie_advance_r
```

#### Example:

```
GET /v2/movie/celebrity/1054395/photos
```

#### Status:

```
200 OK
```

#### Request Properties:

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| start    | start       | int  | N/A   | Y       | Y       | 0       |
| count    | count       | int  | N/A   | Y       | Y       | 10      |

#### Resources Properties:

| Property  | Description                           | Type  | Basic | Advance | Premium | Default |
| --------- | ------------------------------------- | ----- | ----- | ------- | ------- | ------- |
| start     | start                                 | int   | N/A   | Y       | Y       | 0       |
| count     | count                                 | int   | N/A   | Y       | Y       | 10      |
| total     | 总数                                  | int   | N/A   | Y       | Y       | 0       |
| celebrity | 影人条目，[见附录](#simple-celebrity) | dict  | N/A   | Y       | Y       | -       |
| photos    | 剧照列表，[见附录](#photo)            | array | N/A   | Y       | Y       | -       |

### 电影条目搜索

---

#### Resources URI

```
/v2/movie/search?q={text}
```

#### Required Scope

```
movie_basic_r
```

#### Example:

```
GET /v2/movie/search?q=张艺谋 GET /v2/movie/search?tag=喜剧
```

#### Status:

```
200 OK
```

#### Request Properties:

| Property | Description      | Type | Basic | Advance | Premium | Default |
| -------- | ---------------- | ---- | ----- | ------- | ------- | ------- |
| q        | query string     | str  | Y     | Y       | Y       | -       |
| tag      | tag query string | str  | Y     | Y       | Y       | -       |
| start    | start            | int  | Y     | Y       | Y       | 0       |
| count    | count            | int  | Y     | Y       | Y       | 20      |

#### Resources Properties:

| Property | Description                             | Type  | Basic | Advance | Premium | Default |
| -------- | --------------------------------------- | ----- | ----- | ------- | ------- | ------- |
| start    | start                                   | int   | Y     | Y       | Y       | 0       |
| count    | count                                   | int   | Y     | Y       | Y       | 20      |
| total    | 总数, Basic 最多只返回 20 条记录        | int   | Y     | Y       | Y       | 0       |
| query    | 搜索字符串                              | str   | Y     | Y       | Y       | -       |
| tag      | 搜索标签                                | str   | Y     | Y       | Y       | -       |
| subjects | 搜索结果列表，[见附录](#simple-subject) | array | Y     | Y       | Y       | -       |

### Top250

---

#### Resources URI

```
/v2/movie/top250
```

#### Required Scope

```
movie_basic_r
```

#### Example:

```
GET /v2/movie/top250
```

#### Status:

```
200 OK
```

#### Request Properties:

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| start    | start       | int  | Y     | Y       | N/A     | 0       |
| count    | count       | int  | Y     | Y       | N/A     | 10      |

#### Resources Properties:

| Property | Description                         | Type  | Basic | Advance | Premium | Default |
| -------- | ----------------------------------- | ----- | ----- | ------- | ------- | ------- |
| start    | start                               | int   | Y     | Y       | N/A     | 0       |
| count    | count                               | int   | Y     | Y       | N/A     | 10      |
| total    | 总数                                | int   | Y     | Y       | N/A     | 0       |
| title    | 排行榜名称                          | str   | Y     | Y       | N/A     | -       |
| subjects | 条目列表，[见附录](#simple-subject) | array | Y     | Y       | N/A     | -       |

### 北美票房榜

---

#### Resources URI

```
/v2/movie/us_box
```

#### Required Scope

```
movie_basic_r
```

#### Example:

```
GET /v2/movie/us_box
```

#### Status:

```
200 OK
```

#### Resources Properties:

| Property | Description                            | Type  | Basic | Advance | Premium | Default |
| -------- | -------------------------------------- | ----- | ----- | ------- | ------- | ------- |
| title    | 排行榜名称                             | str   | Y     | Y       | N/A     | -       |
| date     | 排行榜日期范围                         | str   | Y     | Y       | N/A     | -       |
| subjects | usbox 条目列表，[见附录](#box-subject) | array | Y     | Y       | N/A     | -       |

### 口碑榜

---

#### Resources URI

```
/v2/movie/weekly
```

#### Required Scope

```
movie_advance_r
```

#### Example:

```
GET /v2/movie/weekly
```

#### Status:

```
200 OK
```

#### Resources Properties:

| Property | Description                                | Type  | Basic | Advance | Premium | Default |
| -------- | ------------------------------------------ | ----- | ----- | ------- | ------- | ------- |
| title    | 排行榜名称                                 | str   | N/A   | Y       | N/A     | -       |
| subjects | weekly 条目列表，[见附录](#weekly-subject) | array | N/A   | Y       | N/A     | -       |

### 新片榜

---

#### Resources URI

```
/v2/movie/new_movies
```

#### Required Scope

```
movie_advance_r
```

#### Example:

```
GET /v2/movie/new_movies
```

#### Status:

```
200 OK
```

#### Resources Properties:

| Property | Description                         | Type  | Basic | Advance | Premium | Default |
| -------- | ----------------------------------- | ----- | ----- | ------- | ------- | ------- |
| title    | 排行榜名称                          | str   | N/A   | Y       | N/A     | -       |
| subjects | 条目列表，[见附录](#simple-subject) | array | N/A   | Y       | N/A     | -       |

### 正在上映

---

#### Resources URI

```
/v2/movie/in_theaters
```

#### Required Scope

```
movie_premium_r
```

#### Example:

```
GET /v2/movie/in_theaters
```

#### Status:

200 OK

```json
{
    "title": "正在上映的电影-北京",
    "total": 39,
    "start": 0,
    "count": 20,
    "subjects": [<Subject>, ...],
}
```

#### Request Properties:

| Name | Type   | Optional           | Note                                 |
| ---- | ------ | ------------------ | ------------------------------------ |
| city | string | yes(default: 北京) | 中文，如: “北京” 或者数字 ID: 108288 |

#### Resources Properties:

| Property | Description                         | Type | Basic | Advance | Premium | Default             |
| -------- | ----------------------------------- | ---- | ----- | ------- | ------- | ------------------- |
| start    | start                               | int  | N/A   | Y       | Y       | 0                   |
| count    | count                               | int  | N/A   | Y       | Y       | 20                  |
| total    | 总数                                | int  | N/A   | Y       | Y       | 0                   |
| subject  | 电影条目，[见附录](#simple-subject) | dict | N/A   | Y       | Y       | -                   |
| title    | 标题                                | str  | N/A   | Y       | Y       | 正在上映的电影-北京 |

### 即将上映

---

#### Resources URI

```
/v2/movie/coming_soon
```

#### Required Scope

```
movie_premium_r
```

#### Example:

```
GET /v2/movie/coming_soon
```

#### Status:

200 OK

```json
{
    "start": 0,
    "count": 20,
    "title": "即将上映的电影",
    "total": 39,
    "subjects": [<Subject>, ...],
}
```

#### Request Properties:

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| start    | start       | int  | Y     | Y       | N/A     | 0       |
| count    | count       | int  | Y     | Y       | N/A     | 20      |

#### Resources Properties:

| Property | Description                         | Type | Basic | Advance | Premium | Default        |
| -------- | ----------------------------------- | ---- | ----- | ------- | ------- | -------------- |
| start    | start                               | int  | N/A   | Y       | Y       | 0              |
| count    | count                               | int  | N/A   | Y       | Y       | 20             |
| total    | 总数                                | int  | N/A   | Y       | Y       | 0              |
| subject  | 电影条目，[见附录](#simple-subject) | dict | N/A   | Y       | Y       | -              |
| title    | 标题                                | str  | N/A   | Y       | Y       | 即将上映的电影 |

# _Appendix_

### Simple Celebrity Properties

---

| Property | Description                                                                  | Type | Basic | Advance | Premium | Default |
| -------- | ---------------------------------------------------------------------------- | ---- | ----- | ------- | ------- | ------- |
| id       | 影人条目 id                                                                  | str  | Y     | Y       | Y       | -       |
| name     | 中文名                                                                       | str  | Y     | Y       | Y       | -       |
| alt      | 影人条目 URL                                                                 | str  | Y     | Y       | Y       | -       |
| avatars  | 影人头像，分别提供 420px x 600px(大)，140px x 200px(中) 70px x 100px(小)尺寸 | dict | Y     | Y       | Y       | -       |

### Simple Rating Properties

---

| Property | Description | Type     | Basic | Advance | Premium | Default |
| -------- | ----------- | -------- | ----- | ------- | ------- | ------- |
| min      | 最低评分    | int      | Y     | Y       | Y       | -       |
| max      | 最高评分    | int      | Y     | Y       | Y       | -       |
| average  | 评分        | float(1) | Y     | Y       | Y       | -       |
| stars    | 评星数      | int      | Y     | Y       | Y       | -       |

### Rating Properties

---

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| min      | 最低评分    | int  | Y     | Y       | Y       | -       |
| max      | 最高评分    | int  | Y     | Y       | Y       | -       |
| value    | 评分        | int  | Y     | Y       | Y       | -       |

### Simple Subject Properties

---

| Property       | Description                                                                   | Type     | Basic | Advance | Premium | Default |
| -------------- | ----------------------------------------------------------------------------- | -------- | ----- | ------- | ------- | ------- |
| id             | 条目 id                                                                       | str      | Y     | Y       | Y       | -       |
| title          | 中文名                                                                        | str      | Y     | Y       | Y       | -       |
| original_title | 原名                                                                          | str      | Y     | Y       | Y       | ''      |
| alt            | 条目 URL                                                                      | float(1) | Y     | Y       | Y       | -       |
| images         | 电影海报图，分别提供 288px x 465px(大)，96px x 155px(中) 64px x 103px(小)尺寸 | dict     | Y     | Y       | Y       | -       |
| rating         | 评分，[见附录](#subject-rating)                                               | dict     | Y     | Y       | Y       | -       |
| pubdates       | 如果条目类型是电影则为上映日期，如果是电视剧则为首播日期                      | array    | N     | Y       | Y       | []      |
| year           | 年代                                                                          | str      | Y     | Y       | Y       | ''      |
| subtype        | 条目分类, movie 或者 tv                                                       | str      | Y     | Y       | Y       | movie   |

### Photo Properties

---

| Property       | Description                      | Type | Basic | Advance | Premium | Default |
| -------------- | -------------------------------- | ---- | ----- | ------- | ------- | ------- |
| id             | 图片 id                          | str  | N/A   | Y       | Y       | -       |
| subject_id     | 条目 id                          | str  | N/A   | Y       | Y       | -       |
| alt            | 图片展示页 url                   | str  | N/A   | Y       | Y       | -       |
| icon           | 图片地址，icon 尺寸              | str  | N/A   | Y       | Y       | -       |
| image          | 图片地址，image 尺寸             | str  | N/A   | Y       | Y       | -       |
| thumb          | 图片地址，thumb 尺寸             | str  | N/A   | Y       | Y       | -       |
| cover          | 图片地址，cover 尺寸             | str  | N/A   | Y       | Y       | -       |
| created_at     | 发布日期                         | str  | N/A   | Y       | Y       | -       |
| desc           | 图片描述                         | str  | N/A   | Y       | Y       | ''      |
| author         | 上传用户，[见附录](#simple-user) | dict | N/A   | Y       | Y       | -       |
| album_id       | 相册 id                          | str  | N/A   | Y       | Y       | -       |
| album_title    | 相册标题                         | str  | N/A   | Y       | Y       | -       |
| album_url      | 相册地址                         | str  | N/A   | Y       | Y       | -       |
| next_photo     | 下一张图片                       | str  | N/A   | Y       | Y       | ''      |
| prev_photo     | 上一张图片                       | str  | N/A   | Y       | Y       | ''      |
| position       | 图片在相册中的位置，按照时间排序 | int  | N/A   | Y       | Y       | 0       |
| comments_count | 评论数                           | int  | N/A   | Y       | Y       | 0       |
| photos_count   | 全部剧照数量                     | int  | N/A   | Y       | Y       | 0       |

### Simple Photo Properties

---

| Property | Description          | Type | Basic | Advance | Premium | Default |
| -------- | -------------------- | ---- | ----- | ------- | ------- | ------- |
| id       | 图片 id              | str  | N/A   | Y       | Y       | -       |
| alt      | 图片展示页 url       | str  | N/A   | Y       | Y       | -       |
| icon     | 图片地址，icon 尺寸  | str  | N/A   | Y       | Y       | -       |
| image    | 图片地址，image 尺寸 | str  | N/A   | Y       | Y       | -       |
| thumb    | 图片地址，thumb 尺寸 | str  | N/A   | Y       | Y       | -       |
| cover    | 图片地址，cover 尺寸 | str  | N/A   | Y       | Y       | -       |

### Review Properties

---

| Property       | Description                      | Type | Basic | Advance | Premium | Default |
| -------------- | -------------------------------- | ---- | ----- | ------- | ------- | ------- |
| id             | 影评 id                          | str  | Y     | Y       | Y       | -       |
| title          | 影评名                           | str  | Y     | Y       | Y       | -       |
| alt            | 影评 url                         | str  | Y     | Y       | Y       | -       |
| created_at     | 发布日期                         | str  | Y     | Y       | Y       | -       |
| updated_at     | 更新日期                         | str  | Y     | Y       | Y       | -       |
| subject_id     | 条目 id                          | str  | Y     | Y       | Y       | -       |
| author         | 上传用户，[见附录](#simple-user) | dict | Y     | Y       | Y       | -       |
| summary        | 摘要，100 字以内                 | str  | Y     | Y       | Y       | -       |
| rating         | 影评评分，[见附录](#rating)      | dict | Y     | Y       | Y       | -       |
| useful_count   | 有用数                           | int  | Y     | Y       | Y       | 0       |
| useless_count  | 无用数                           | int  | Y     | Y       | Y       | 0       |
| comments_count | 评论数                           | int  | Y     | Y       | Y       | 0       |

### Simple Review Properties

---

| Property   | Description                      | Type | Basic | Advance | Premium | Default |
| ---------- | -------------------------------- | ---- | ----- | ------- | ------- | ------- |
| id         | 影评 id                          | str  | Y     | Y       | Y       | -       |
| title      | 影评名                           | str  | Y     | Y       | Y       | -       |
| alt        | 影评 url                         | str  | Y     | Y       | Y       | -       |
| subject_id | 条目 id                          | str  | Y     | Y       | Y       | -       |
| author     | 上传用户，[见附录](#simple-user) | dict | Y     | Y       | Y       | -       |
| rating     | 影评评分，[见附录](#rating)      | dict | Y     | Y       | Y       | -       |
| summary    | 摘要，100 字以内                 | str  | Y     | Y       | Y       | -       |

### Comment Properties

---

| Property     | Description                      | Type | Basic | Advance | Premium | Default |
| ------------ | -------------------------------- | ---- | ----- | ------- | ------- | ------- |
| id           | 短评 id                          | str  | Y     | Y       | Y       | -       |
| created_at   | 发布日期                         | str  | Y     | Y       | Y       | -       |
| subject_id   | 条目 id                          | str  | Y     | Y       | Y       | -       |
| author       | 上传用户，[见附录](#simple-user) | dict | Y     | Y       | Y       | -       |
| content      | 短评内容，140 字以内             | str  | Y     | Y       | Y       | -       |
| rating       | 短评评分，[见附录](#rating)      | dict | Y     | Y       | Y       | -       |
| useful_count | 有用数                           | int  | Y     | Y       | Y       | 0       |

### Simple User Properties

---

| Property  | Description      | Type | Basic | Advance | Premium | Default |
| --------- | ---------------- | ---- | ----- | ------- | ------- | ------- |
| id        | 用户 id          | str  | Y     | Y       | Y       | -       |
| name      | 用户名           | str  | Y     | Y       | Y       | -       |
| uid       | 用户唯一标识     | str  | Y     | Y       | Y       | -       |
| signature | 用户签名         | str  | Y     | Y       | Y       | ''      |
| alt       | 用户个人主页 url | str  | Y     | Y       | Y       | -       |
| avatar    | 用户头像         | str  | Y     | Y       | Y       | -       |

### Box-Subject Properties

---

| Property | Description                       | Type | Basic | Advance | Premium | Default |
| -------- | --------------------------------- | ---- | ----- | ------- | ------- | ------- |
| rank     | 排名                              | int  | Y     | Y       | Y       | -       |
| box      | 票房                              | int  | Y     | Y       | Y       | -       |
| new      | 是否新上映                        | bool | Y     | Y       | -       |         |
| subject  | 电影条目[见附录](#simple-subject) | dict | Y     | Y       | Y       | -       |

### Weekly-Subject Properties

---

| Property | Description | Type | Basic | Advance | Premium | Default |
| -------- | ----------- | ---- | ----- | ------- | ------- | ------- |
| rank     | 排名        | int  | Y     | Y       | Y       | -       |
| delta    | 排名改变量  | int  | Y     | Y       | Y       | Y       |
