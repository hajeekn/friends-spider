## 环境变量设置

### 通用设置

> 这里的变量会影响到GitHub仓库、gitee仓库的爬取规则。

- `REGKEYS`

  这个变量用于控制额外的匹配字段。多个用英文逗号隔开。

  ```
  '--primary-color','border-width','border-style','--primary-rotate','animation','img_animation','card_style','screenshot'
  ```
  
- `NPM_NAME`

  npm包的名称，确保唯一即npm上搜不到这个包名

- `NPM_TOKEN`

  npm的token，用于发布包

### gitee仓库

> 这里的变量只会影响到gitee仓库的爬取规则

|        变量名        |                             含义                             |  示例值   |
| :------------------: | :----------------------------------------------------------: | :-------: |
| `GITEE_ACCESS_TOKEN` |          用户Token，用于防止频繁访问接口受限的问题           |  `xxxxx`  |
|    `GITEE_OWNER`     |                          仓库的主人                          | `antmoe`  |
|     `GITEE_REPO`     |                            仓库名                            | `friend`  |
|    `GITEE_STATE`     | 需要查找的仓库状态，默认为`all`，即全部状态。<br/>`open`(开启的) `progressing`(进行中) `closed`(关闭的) `rejected`(拒绝的) `all`(全部) |   `all`   |
|     `GITEE_SORT`     | 排序依据，创建时间(`created`)，更新时间(`updated`)。默认: `created` | `created` |
|  `GITEE_DIRECTION`   |        排序规则，升序(`asc`)，降序(`desc`)，默认`asc`        |   `asc`   |
|   `GITEE_REGKEYS`    | 与通用里`REGKEYS`相同，只不过这个变量只会影响到gitee仓库的爬取规则 |           |

### GitHub仓库

> 这里的变量只会影响到GitHub仓库的爬取规则

|      变量名       |                             含义                             |  示例值   |
| :---------------: | :----------------------------------------------------------: | :-------: |
| `GH_ACCESS_TOKEN` |          用户Token，用于防止频繁访问接口受限的问题           |  `xxxxx`  |
|   `GHEE_OWNER`   |                          仓库的主人                          | `antmoe`  |
|   `GH_REPO`    |                            仓库名                            | `friend`  |
|   `GH_STATE`   | 需要查找的仓库状态，默认为`all`，即全部状态。<br/>`open`(开启的) `closed`(关闭的) `all`(全部) |   `all`   |
|   `GH_SORT`    | 排序依据，`created`(创建时间), `updated`(更新时间), `comments`(评论数)。默认: `created` | `created` |
| `GH_DIRECTION` |        排序规则，升序(`asc`)，降序(`desc`)，默认`asc`        |   `asc`   |
|  `GH_REGKEYS`  | 与通用里`REGKEYS`相同，只不过这个变量只会影响到GitHub仓库的爬取规则 |           |