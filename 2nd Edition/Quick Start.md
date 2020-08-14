<h1 align="center">Emuera 中文文档（第二版）</h1>
<h2 align="center">目录</h2>
[toc]
## 第一章　快速开始

### 第一节　需求准备

只需要Emuera.exe本体就好了，本文使用版本1.8.2.4。

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



在一个文件夹下有了