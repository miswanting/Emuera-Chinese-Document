# Eramaker 的 ERB 文件格式

> 翻译自原文档：http://cbaku.com/b/erakanon/eramaerb.html

## 基本信息

### 关于 ERB 文件

`ERB文件`，即文件名满足`*.erb`格式的文件。其中，`ERB`是 <u>Er</u>a <u>B</u>asic 的缩写，即 Era 脚本。

在`eramaker.exe`旁新建一个名为`ERB`的文件夹，并将`ERB文件`放入该文件夹中。

可用记事本等文本/代码编辑器进行编辑。

### 如何编写ERB文件

#### 注释和空格

对于所有 ERB 文件：

- 如果每行的第一个非空字符是半角分号`;`，则该行为注释，在程序执行时，该行会被忽略。
- 空白行也会被程序忽略。
- 不支持行尾注释。

::: tip 正确

```sh
;资金设置
MONEY = 500
    ;时间设置
    DAY = 10
    TIME = 1
;开始游戏
PRINT 做什么？
```

:::

::: warning 错误

```sh
MONEY = 500;
TIME = 5;（从第5天开始）
```

:::

#### 半角输入

输入数字、指令、变量名、函数名等时，请使用半角字符。

::: tip 正确

```sh
MONEY = 500
PRINT 开始游戏。
```

:::

::: warning 错误

```sh
ＭＯＮＥＹ　＝　５００
ＰＲＩＮＴ 开始游戏。
```

:::

#### 字符串输入

如果你用`""`包住字符串，它将无法正常工作。

::: tip 正确

```sh
PRINT 这一天结束了……
```

:::

::: warning 错误

```sh
PRINT "这一天结束了……"
```

:::

#### 一行的完结

即使在写长指令时，也不要把指令分成两行以上。

::: tip 正确

```sh
PRINT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
```

:::

::: warning 错误

```sh
PRINT Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

:::

## 变量与命令

### 关于变量

在游戏设计中，对数据的操作至关重要。 因此，你必须学会使用`变量`，它可以存储数据，并用于进行加法和乘法等计算。

### 变量的赋值

#### 直接赋值

变量的赋值需要使用运算符半角等号`=`。

在`=`符号的前后用空格或~~制表符~~隔开。【译者：请使用空格】

EraMaker中可以使用的数字基本都是整数。 不要输入小数。

::: tip 正确

```sh
MONEY = 500
```

:::

::: warning 错误

```sh
MONEY ＝ 500
MONEY=500
MONEY = 3.14
```

:::

#### 计算结果赋值

`*`是乘法，`/`是除法，`%`是求余。

当计算结果是小数时，会被四舍五入。

::: tip 正确

```sh
;MONEY的值为74
MONEY = 15+34+25
;MONEY的值为650
MONEY = 150+(100-50)*10
;MONEY的值为3
MONEY = 10/3
;MONEY的值为TIME的10倍
MONEY = TIME*10
;若DAY为0,1,2……则MONEY为0,10,20……超过7时，返回到0。
MONEY = DAY%7*10
```

:::

::: warning 错误

```sh
MONEY = 500×10÷4
```

:::

使用`+=`，`-=`，`*=`，`/=`和`%=`。

::: tip 示例

```sh
MONEY = 100
TIME = 12
;MONEY的值为150
MONEY += 50
;MONEY的值为750
MONEY *= 7-2
;MONEY的值为80
MONEY -= 670
;MONEY的值为8
MONEY %= TIME
;MONEY的值为1
MONEY /= TIME-4
```

:::

### 关于数组

变量也可以是一个`数组`。`数组`是一种可以用来管理两个或两个以上同名变量的数据。

对数组的访问请使用半角冒号`:`。前后不要留空格。

结构如下：

```
<数组名>:<索引>
```

- 索引可以是整数，最小为0，最大值由数组本身最大值决定。
- 索引可以是变量，但该变量的值只能为整数，而不能是一个数组。

::: tip 正确

```sh
A = 35
;为数组FLAG赋值
FLAG:0 = 0
FLAG:2 = 10
FLAG:35 = 440
;用数组FLAG进行计算
FLAG:A += 100/FLAG:2
FLAG:2 *= FLAG:A
```

:::

::: warning 错误

```sh
FLAG：0 = 10
FLAG : 52 = 1000
FLAG:FLAG:20 = 10000
FLAG:91881816 = 1
```

:::

### 关于二维数组

二维数组也是变量的一种，比较特殊。可以使用两个冒号来访问。

结构为：

```
<数组名>:<角色编号>:<索引>
```

示例：

```sh
A = 2 ;让第5个角色的第0种能力升到3级。
ABL:5:0 = 3
;让第A个(第2个)角色的第1种经验+2。
EXP:A:1 += 2
```

:::

### 打印变量至屏幕

最简单的方法是使用`PRINTV`和`PRINTVL`命令。 后面会详细讨论。

如：

```
A = 2
PRINTV A
A = 30
PRINTVL A
B = 400
PRINTVL B
```

输出：

```
230
400
```

### 关于字符串变量

普通变量只能处理整数，但也有字符串变量可以处理字符串。 但功能有限。

在屏幕上显示字符串变量时，使用`PRINTS`或`PRINTSL`命令。

::: tip 正确

```sh
STR:0 = 测试文字
PRINTSL STR:0
```

:::

::: warning 错误

```sh
;无法对字符串变量使用+=
STR:0 += 测试文字
```

:::

#### 变量列表

参考[此处]()。

### 关于命令（基本）

命令可用于在屏幕上显示文本、进行条件判断等。

### 如何编写命令

基本的使用方式为：

```
<命令名> <命令内容>
```

命令名与命令内容之间请用半角空格或制表符分开。【译者注：请用半角空格】

对于不需要命令内容的命令，可直接换行。

::: tip 正确

```sh
PRINT 这是一个测试。
SIF 3 == 1+2
    PRINT 这很明显。
WAIT
```

:::

::: warning 错误

```sh
PRINT这是一个测试。
;等待输入
WAIT 0
```

:::

### 显示文字

- `PRINT`是显示一个字符的命令，`PRINTL`显示一个字符并新建一行。
- `PRINTVW`显示变量的内容并等待输入。
- `PRINTVW`显示变量的内容并等待输入。
- `PRINTFORM`可以显示字符、变量、字符串变量等的组合，`PRINTFORML`做的和换行一样，`PRINTFORMW`做的和等待输入一样。
- `PRINTFORMS`将字符串变量的内容和`PRINTFORM`一样转换，并显示出来，`PRINTFORMSL`也是如此，还有换行，`PRINTFORMSW`也是如此，并等待输入。
- `PRINTFORMSW`做同样的工作，等待输入；`PRINTFORMSL`做同样的工作，等待输入；
- `PRINTFORMSW`做同样的工作，等待输入；`PRINTFORMSL`做同样的工作，等待输入。

示例：

```
MONEY = 500
NAME:0 = 佐藤
PRINT 存款有
PRINTV MONEY
PRINTL 元。
PRINT 我的名字叫
PRINTS NAME:0
PRINTL 。
PRINTFORML 重复一遍，我的名字叫%NAME:0%，我的存款有{MONEY}元。
PRINTFORMW 如果存款加上1000日元，后支付600日元，剩下的就是{MONEY+1000-600}元。
STR:0 = 将这些钱乘以5，就得到{(MONEY+1000-600)*5}元。
PRINTFORMSW STR:0
```

输出：

```
存款有500元。
我的名字叫佐藤。
重复一遍，我的名字叫佐藤，我的存款有500元。
如果得到1000日元，支付600元，剩下的就是900元。
将这些钱乘以5，就得到4500元。
```

### 条件判断

如果条件表达式不是0，则`SIF`执行下一行。

如果条件表达式不为0（有效时），`SIF`执行下一行。 0（无效时），跳过下一行。

如果条件表达式不是0，则执行下一行，直到达到`ELSE`、`ELSEIF`和`ENDIF`。 如果是0，则跳过`ELSE`、`ELSEIF`和`ENDIF`；如果是0，则跳过`ELSE`、`ELSEIF`和`ENDIF`；如果是`ELSE`，则从下一行开始执行，直到到达`ENDIF`；如果是`ELSEIF`，则从下一行开始执行，直到到达`ELSE`、`ELSEIF`或`ENDIF`。 如果条件表达式是`ELSEIF`，则从下一行开始执行，直到到达`ELSE`、`ELSEIF`或`ENDIF`为止；否则，它将跳过，直到到达`ELSE`、`ELSEIF`或`ENDIF`为止，并重复该过程。

示例：

```
A = 1
B = 2
C = 4

SIF A == 1
    PRINTL 测试1
SIF B != 1
    PRINTL 测试2
SIF C < 5
    PRINTL 测试3
IF A+B > 2
    IF C >= 6
        PRINTL 测试4
    ELSE
        PRINTL 测试5
    ENDIF
    IF A == 1 && B == 3
        PRINTL 测试6
    ELSEIF A == 1 || B == 3
        PRINTL 测试7
    ELSEIF A > 1 || (B > 2 && C > 2)
        PRINTL 测试8
    ENDIF
ELSEIF A+B == 2
    PRINTL 测试9
ELSE
    PRINTL 测试10
ENDIF
```

输出：

```
测试1
测试2
测试3
测试5
测试7
```

#### 布尔运算符

| 字符 |   意义    |
| :--: | :-------: |
|  ==  |   等于    |
|  !=  |  不等于   |
|  >   |   大于    |
|  >=  |  不小于   |
|  <   |   小于    |
|  <=  |  不大于   |
|  &&  | 与（AND） |
| \|\| | 或（OR）  |

可以利用括号来判断更复杂的条件。

### 输入与输入等待

`WAIT`是通过显示句子等待输入时使用的。

（注：一般情况下，你可以用`PRINTW`来表达单行出现的文字，这样更容易阅读。）

当你想让玩家输入一个整数时，使用`INPUT`。 输入的结果存储在`RESULT`中。

当你想让玩家输入一个字符串时，使用`INPUTS`。 输入的结果存储在`RESULTS`中。

示例：

```
PRINT DATA输入开始。
WAIT
PRINTL 请输入你的年龄。
INPUT
PRINTL 请输入你的名字。
INPUTS
PRINTFORML %RESULTS%今年已经{RESULT}岁了。
```

### 重复与GOTO

当你想重复触发指令时，可使用`REPEAT`，语句会执行到`REND`处后返回到初始点。重复次数储存在`COUNT`变量中。

注意：`REPEAT`语句不支持嵌套。

如果你在从`REPEAT`到`REND`的途中使用`CONTINUE`，它将回到`REPEAT`的位置；如果你使用`BREAK`，它将停止重复并跳到`REND`的下一行。

如果你想一次性移动到另一个地方，请使用`GOTO`。当你使用`GOTO`时，你需要用$注册一个 "标签"。

示例：

```
REPEAT 10
    PRINT 你好
REND
;使用不带参数的PRINTL用于换行。
PRINTL
REPEAT 5
    PRINTFORML 分数：{COUNT*5}
REND

MONEY = 300
REPEAT 5
    SIF MONEY <= COUNT*100
        BREAK
    PRINTFORML 金额比{COUNT*100}元更多。
REND
REPEAT 5
    SIF MONEY == COUNT*100
        CONTINUE
    PRINTFORML 金额不是{COUNT*100}元。
REND

$INPUT_LOOP
PRINTL 请输入0-9的整数。
INPUT
SIF RESULT < 0 || RESULT > 9
   GOTO INPUT_LOOP
PRINTFORML 输入的数字为{RESULT}。
```

输出：

```
你好你好你好你好你好你好你好你好你好你好
分数：0
分数：5
分数：10
分数：15
分数：20
金额比0元更多。
金额比100元更多。
金额比200元更多。
金额不是0元。
金额不是100元。
金额不是200元。
金额不是400元。
请输入0-9的整数。
-1 【故意手动输入过小的整数。】
请输入0-9的整数。
10 【故意手动输入过大的整数。】
请输入0-9的整数。
3 【按要求手动输入。】
输入的数字为3。
```

### 关于函数

一个大型的程序，如果执意要连续不断一气呵成写到最后，而不分为各个部分的话，写出来的程序是很糟糕的。维护难度很大。如果把程序合理的分为不同的部分，可以使程序更加容易被理解。

我们可以通过“函数”来实现代码的分割。

函数本身分为“注册”和“调用”两个部分，注册时需要使用`@`，`@`之后紧跟函数的名称。合法的函数名称是由字母与下划线构成的，且均为半角。

游戏启动时最先调用的函数名为`EVENTFIRST`，我们将在后文进行详细介绍。

若想**跳转**到某个函数（不返回），请使用`JUMP`。

若想**调用**某个函数（执行完后返回），请使用`CALL`。

使用`CALL`语句调用的函数在执行到`RETURN`语句后可以返回原函数，`RETURN`语句的参数会被保存在`RESULT`变量中。若函数执行结束而没有执行`RETURN`时，`RESULT`变量中的值为`0`。

若使用`RESTART`语句，当前函数将会冲从头重新开始执行。

示例：

```
@EVENTFIRST
PRINTW 游戏开始。

CALL OPENING
PRINTFORMW 开局函数执行的结果为{RESULT}。
CALL GAME_MAIN
PRINTFORMW 游戏的结果为{RESULT}。
JUMP ENDING

PRINTL 由于上面跳转到ENDING函数，所以本行不执行。

@OPENING
PRINTW 这是开局函数。
RETURN 25

@GAME_MAIN
PRINTW 这是游戏主函数。
PRINTL 函数内语句运行完毕且不显式执行RETURN语句。

@ENDING
PRINTW 游戏结束。
RESTART
```

输出：

```
游戏开始。
这是开局函数。
开局函数执行的结果为25。
这是游戏主函数。
函数内语句运行完毕且不显式执行RETURN语句。
游戏的结果为0。
游戏结束。
游戏结束。
游戏结束。
…… 【无限循环】
```

### 其他基本命令

`QUIT`：退出游戏；

`DRAWLINE`：用`--`画一条从左至右的分割线；

`TIMES`：支持小数的乘法运算（否则EraMaker会对小数自动取整）。

`BAR`：在屏幕上绘制一个类似于`[*****.....]`的控件，用法为：`BAR [变量] [最大值] [控件长度]`。

示例：

```
MONEY = 500
DRAWLINE
BARL MONEY , 1000 , 20
PRINTFORMW 我有{MONEY}元钱。
DRAWLINE
TIMES MONEY , 1.25
BARL MONEY , 1000 , 20
PRINTFORMW 我有{MONEY}元钱，游戏结束。
QUIT
```

输出：

```
------------------------------
[**********..........]
我有500元钱。
------------------------------
[************........]
我有625元钱，游戏结束。
```

### 关于命令（~~训练~~）

EraMaker有一些~~训练~~专用的特殊命令。

#### 显示训练专用的数据

`PRINT_ABL`：显示角色的能力；

`PRINT_TALENT`：显示角色的素质；

`PRINT_MARK`：显示角色的刻印；

`PRINT_EXP`：显示角色的经验；

`PRINT_PALAM`：显示角色训练中的参数；

使用以上的命令时，请指定需要显示的角色，如`PRINT_ABL 0`一般标识显示主角的能力。

`PRINT_ITEM`：显示持有的物品；

`PRINT_SHOPITEM`：显示商店中的物品；

`UPCHECK`：显示训练命令在训练期间参数的变化。

### 角色管理

`ADDCHARA`：新增一个角色。如果需要添加一个编号为3的角色，`ADDCHARA 3`。

`ADDSPCHARA`：新增一个SP角色。如果需要添加一个编号为3的角色，`ADDSPCHARA 3`。（SP角色是指角色编号为0或1的角色。）

`DELCHARA`：删除一个由`ADDCHARA`或其他方法添加的角色。

示例：

```
;编号为0的角色为名为小明的主人公
;编号为3的角色名字是小红、5的角色名字是小刚、6的角色名字是小垃圾
PRINTFORML 当前共有{CHARANUM}名角色。
ADDCHARA 3
ADDCHARA 5
ADDCHARA 6
PRINTFORML 当前共有{CHARANUM}名角色。
REPEAT CHARANUM
    PRINTFORML 第{COUNT}号为%NAME:COUNT%。
REND
DELCHARA 2
PRINTFORML 当前共有{CHARANUM}名角色。
REPEAT CHARANUM
    PRINTFORML 第{COUNT}号为%NAME:COUNT%。
REND
```

输出：

```
当前共有1名角色。
当前共有4名角色。
第0号为小明。
第1号为小红。
第2号为小刚。
第3号为小垃圾。
当前共有3名角色。
第0号为小明。
第1号为小红。
第2号为小垃圾。
```

### 存档相关

`SAVEGAME`：呼出保存存档界面；

`LOADGAME`：呼出加载存档界面；

上面两条命令都只能在`SHOP`中调用。

`PUTFORM`只能与一个名为`@SAVEINFO`的特殊函数一起使用，它可以用与PRINTFORM类似的格式来写出你的存档的概况。如该存档已经过去了多少天，角色的能力是什么，以及正在训练哪个角色等。

### 关于BEGIN

`BEGIN`可以通过调用各种系统指令来推进游戏。

正在执行的函数在调用`BEGIN`函数后会被终止，即使`BEGIN`函数从其他地方被`CALL`语句调用，它也不会返回到原来的函数。

`BEGIN TRAIN`：开始训练；

`BEGIN AFTERTRAIN`：结束训练；

`BEGIN ABLUP`：呼出升级界面；

`BEGIN TURNEND`：结束回合；

`BEGIN SHOP`：呼出SHOP界面；
