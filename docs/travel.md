# 我去 Api V2

[回 Api V2 首页](readme.md)

scope: travel_basic_r

| name                                       | Method | endpoint                          |
| ------------------------------------------ | ------ | --------------------------------- |
| [获取某个用户的地点收藏](#user-collection) | GET    | /v2/travel/user/:name/collections |
| [获取地点信息](#place)                     | GET    | /v2/travel/place/:id/             |

## 获取某个用户的地点收藏

```
GET  https://api.douban.com/v2/travel/user/:name/collections
```

| 参数   | 意义     | 备注\*                                                          |
| ------ | -------- | --------------------------------------------------------------- |
| status | 收藏状态 | 选填（想去：wish 在这儿：visiting 去过：visited）默认为所有状态 |
| start  | 起始位置 | 选填，默认为 0                                                  |
| count  | 返回数量 | 选填，默认为 20                                                 |

## 获取地点信息

```json
{
  "name": "世界",
  "url": "/trip/place/1000001/",
  "pic": "http://img3.douban.com/view/photo/albumcover/public/p1921930761.jpg",
  "zoom": 1,
  "longitude": -26.8333,
  "latitude": 11.83,
  "id": 1000001
}
```

## 使用案例

[豆瓣我去秀](http://www.douban.com/trip/service/badgemaker)
