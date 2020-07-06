## Git

是目前世界上最先进的分布式版本控制系统

homebrew是mac软件包管理工具

| 命令行              | 作用                       |
| ------------------- | :------------------------- |
| git init            | 初始化仓库                 |
| git status          | 查看当前文件状态           |
| git add             | 将文件放到缓存区域         |
| git commit -m 'xxx' | 将暂存区文件上传到本地仓库 |
| git log             | 查看提交记录               |
| git reset           | 重置当前目录版本           |
| git checkout        | 从缓存区拿回文件           |
| git reflog          | 查看所有分支的所有操作记录 |
| git clone           | 从远程仓库拷贝             |
| git pull            | 从远程仓库拉取最新代码     |
| git push            | 将本地库推向远程库         |

一共提交了三次，如果想要回到第一个提交的版本，就先查看提交的记录，锁定commit后面的黄色码，git reset一下，然后再git checkout，这个时候再看txt文件，内容就回到了第一个版本的内容![截屏2020-07-06 上午10.12.07](/Users/edz/Library/Application Support/typora-user-images/截屏2020-07-06 上午10.12.07.png)



