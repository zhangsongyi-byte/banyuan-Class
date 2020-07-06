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



# 版本操作&远程库



### `github` 的使用

1. 创建账号(github网站操作)

   <https://github.com/join>

2. SSH（22端口）是Secure Shell的简写，在进行数据传输之前，SSH先对联机数据包通过加密技术进行加密处理，加密后在进行数据传输。确保了传递的数据安全。

   

   使用密码登录，每次都必须输入密码，非常麻烦。SSH提供了公钥登录，可以省去输入密码的步骤。

   所谓"公钥登录"，原理很简单，就是用户将自己的公钥储存在远程主机上。登录的时候，远程主机会向用户发送一段随机字符串，用户用自己的私钥加密后，再发回来。远程主机用事先储存的公钥进行解密，如果成功，就证明用户是可信的，直接允许登录shell，不再要求密码。

   

3. 配置 `ssh-key` （github网站操作)

   配置 `ssh-key` 的目的是为了使用 `ssh` 方式和 `github` 服务器建立连接，这样就不用输入用户名和密码。

   这个步骤的思路是： a. 配置本机的 `ssh-key` ； b. 将本机的 `ssh-key` 的公钥配置在 `github` 上。下面是具体操作：

   1. 删除别人的 `ssh-key`

      > **注意**
      >
      > 如果你明白 `ssh-key` 是什么，而且确认这台电脑现在的 `ssh-key` 是你自己生成的，请不做这一步操作。

      

      ```shell
      rm -f ~/.ssh/id_rsa*
      ```

   2. 打开终端，输入这条命令：

      ```shell
      cd ~/.ssh
      ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
      ```

      > **注意**
      >
      > -   命令里面双引号的内容修改成你自己的邮箱
      > -   该命令会有提示，一路回车就可以了

   3. 到这里，你本地的 `ssh-key` 就创建好了，需要将它放到 `github` 上

      终端里通过 `cat` 命令显示 ssh 公钥的内容：

          cat ~/.ssh/id_rsa.pub

      将下图中框内的内容都复制出来：

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/ssh-4.png)

   4. 使用注册申请好的账号和密码登陆你的 `github`

   5. 选择你的头像右边的下拉框（在网页的右上方）

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/ssh-1.png)

   6. 选择如下的 `SSH and GPG keys`

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/ssh-2.png)

   7. 选中右上角的 `New SSH Key`

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/ssh-3.png)

   8. 将第3)步你复制的内容粘贴进去，再补充一个标题：

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/ssh-5.png)

   9. 最后一步，验证你是否完成了配置

          ssh -T git@github.com

      如果看到类似下面的 `successfully` 什么的，而且把你github的账号打印出来，则表示你成功了

          linc@pop-os:~/agenda$ ssh -T git@github.com
          Hi linc5403! You've successfully authenticated, but GitHub does not provide shell access.

4. 创建项目（github网站操作）

   1. 来到github的首页，并登陆，选择左侧 `Repositories` 右边的那个 `New`:

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/create-1.png)

   2. 在创建项目的页面填好 `Repository Name` ，点击 `Create repository` 按钮，项目就创建好了。

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/create-2.png)

   3. 在上一步已经在 `github` 服务器上创建好了远程项目，接下来需要将它同步到你的本地。

      你们需要重点看下面这张图：

      ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/create-3.png)

5. 项目管理(本机操作)

   项目管理的流程如下：

   ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/git_flow.svg)

   1. `git clone`

      `git clone` 命令会在当前目录下下载远端的项目,例如：

      - 先找到 `git` 仓库的地址，创建项目的最后一步：

        ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/clone-1.png)

      - 使用 `git clone` 将它下载下来：

            git clone git@github.com:linc5403/for_git_demo.git

        会将远端 `for_git_demo.git` 仓库下载下来，在当前目录下新创建目录名为 `for_git_demo` 的目录:

        ![img](http://by-camp.oss-cn-shanghai.aliyuncs.com/prep/preparatory-course/img/clone-2.png)

        进入 `for_git_demo` 目录后，可以看到其中有 `.git` 的隐藏文件夹；说明 `git` 仓库已经建立好了。

   2. `git add`

      当你对本地文件作了修改后，应当使用 `git add` 命令将你的变更告知git，此时可以缓存你的变更。

      让我们在 `for_git_demo` 目录中新建一个README.md文件，并将它添加到git中:

          linc@pop-os:~/for_git_demo$ echo "#this is my first git repo" >> README.md
          linc@pop-os:~/for_git_demo$ git status
          On branch master
          
          No commits yet
          
          Untracked files:
            (use "git add <file>..." to include in what will be committed)
          
          	README.md
          
          nothing added to commit but untracked files present (use "git add" to track)
          linc@pop-os:~/for_git_demo$ git add README.md

   3. `git commit`

      当你的变更可以固定下来后，应当使用 `git commit` 命令将变更固化下来，同时需要描述此次变更的内容，方便今后快速查找。

      > **重要**
      >
      > 当你还不会使用命令行编辑器的时候，最好使用 `git commit -m “你想说的话"` 这种方式来进行提交

          linc@pop-os:~/for_git_demo$ git commit -m "init repo"
          [master (root-commit) 2c902a3] init repo
           1 file changed, 1 insertion(+)
           create mode 100644 README.md

   4. `git push`

      将你的本地项目同步到服务器，就不怕工作丢失了。

          linc@pop-os:~/for_git_demo$ git push
          Enumerating objects: 3, done.
          Counting objects: 100% (3/3), done.
          Writing objects: 100% (3/3), 234 bytes | 234.00 KiB/s, done.
          Total 3 (delta 0), reused 0 (delta 0)
          To github.com:linc5403/for_git_demo.git
           * [new branch]      master -> master


<a id="org9a89223"></a>

### 注意事项

1. 确认你的 `home` 目录下没有 `.git` 文件夹:

   在终端上运行这两条命令：

       cd ~
       ls -la | grep "\.git"

   如果有类似下面的回显：

       drwxr-xr-x  8 linc linc  4096 Mar 13 08:29 .git

   说明你的 `home` 目录被上一个同学放到了 `git` 中进行管理，请删除这个文件夹：

       rm -rf ~/.git

2. 修改自己提交git的用户名和邮箱

       git config --list

   此时会有类似这样的显示：

       user.name=lin chuan
       user.email=linch1982@gmail.com
       core.quotepath=false

   如果出现的username和email不是你想要的，请使用如下命令进行修改:

       git config --global user.name "你的名字,最好用英文字母"
       git config --global user.email "你的邮箱地址"

   > **注意** 上面两条 `config` 命令中的双引号不要省略

3. 如果你的git命令回显中出现中文的乱码

   使用下面这条命令进行修正：

       git config --global core.quotepath false

4. 你可以随时使用 `git status` 命令查看git的状态

5. 使用 `.gitignore` 来管理哪些文件/文件夹进入 `git`

   -   列出不关心的文件类型或文件名
   -   列出需要关心的内容(`!`)
   -   文件夹(`/`)

   示例:  

       # Blacklist everything
       *
       # Whitelist all directories
       !*/
       # Whitelist the file you're interested in.
       !*.c
       !*.h
       !Makefile
       !*.dat
       !.gitignore

