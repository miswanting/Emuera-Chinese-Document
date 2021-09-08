<h1 align="center">Emuera 中文文档（第二版）</h1>
<h2 align="center">目录</h2>
[toc]
## 第一章　快速开始

### 第一节　需求准备

只需要 Emuera.exe 本体就好了，本文使用版本1.8.2.4。

### 第二节　一个最简单的程序长什么样子？

```
GameRootFolder
 ├─ CSV             // [必须] CSV 文件夹，存放 CSV 数据文件，没有文件夹时程序会报错。
 ├─ ERB             // [必须] ERB 文件夹，存放 EraBasic 脚本文件，没有文件夹时程序会报错。
 │  └─ TEST.ERB     // [可选] 一个 ERB 文件，用于存放 EraBasic 脚本。
 │                  // 文件名任意，这里只是用于演示。脚本内容见下文。
 ├─ emuera.config   // [自动生成] Emuera 配置文件，程序启动时会自动初始化。
 ├─ emuera.log      // [自动生成] Emuera 日志文件，程序运行时会自动生成。
 └─ Emuera1824.exe  // [必须] 程序本体，文档适配最新版本1.8.2.4。
```

TEST.ERB

```
; 该行为注释，注释的特点是该行的第一个字符为分号“;”，Emuera 也支持行内注释（比如下一行）。
@EVENTFIRST  ; EVENTFIRST事件函数，该函数将会在游戏标题界面下用户点击“最初からはじめる”之后触发。
; 输出“HELLO WORLD”字符串
PRINT HELLO WORLD
QUIT  ; 退出程序
```

这就是我们的第一个可运行的完整程序了，打开程序运行一下，看看是怎样的。

## 第二章　程序流程

### 第一节　TITLE

### 第二节　FIRST

### 第三节　LOADGAME

### 第四节　LOADDATAEND

### 第五节　SHOP

### 第六节　SAVEGAME

### 第七节　TRAIN

### 第八节　ABLUP

### 第九节　AFTERTRAIN

### 第十节　TURNEND

## 第三章　命令

### 第一节　PRINT 命令

#### PRINT(|V|S|FORM|FORMS)(|K|D)(|L|W)

#### PRINTSINGLE(|V|S|FORM|FORMS)(|K|D)

#### PRINT(|FORM)(C|LC)(|K|D)

#### PRINTDATA(|K|D)(|L|W)

#### PRINTBUTTON(|C|LC)

#### PRINTPLAIN(|FORM)

#### CUSTOMDRAWLINE

#### DRAWLINEFORM

#### REUSELASTLINE

#### CLEARLINE

#### PRINT_IMG

#### PRINT_RECT

#### PRINT_RECT

#### PRINT_SPACE

### 第二节　样式控制

### 第三节　字符串控制

### 第四节　数字控制

### 第五节　字符控制

### 第六节　变量控制

### 第七节　存读档控制

### 第八节　时间控制

### 第九节　输入控制

### 第十节　随机数控制

### 第十一节　调试辅助控制

### 第十二节　跳转控制

### 第十三节　返回控制

### 第十四节　DEBUG 命令

### 第十五节　工具提示控制

### 第十六节　HTML 命令

### 第十七节　AWAIT 命令

### 第十八节　图像控制

### 第十九节　其他命令