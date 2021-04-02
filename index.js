const fs = require('fs/promises')

const giteeFriend = require('./components/gitee')
const githubFriend = require('./components/github')

const index = async () => {
  const obj = {
    gitee: await giteeFriend.getData(),
    github: await githubFriend.getData(),
    date: Date.now() + ''
  }
  const friendStr = JSON.stringify(obj)
  await fs.writeFile('./dist/friend.json', friendStr, 'utf8', (err) => {
    if (err) throw err
  })
  const pageageFile = {
    name: process.env.NPM_NAME || '',
    version: `${obj.date[0]}.${obj.date[1]}.${obj.date.slice(2, 13)}`,
    main: 'index.js',
    description: 'Hajeekn的友链json信息存储仓库'
  }
  const pageageFileStr = JSON.stringify(pageageFile)
  await fs.writeFile('./dist/package.json', pageageFileStr, 'utf8', (err) => {
    if (err) throw err
  })
  console.log('写入完成')
}
index()
