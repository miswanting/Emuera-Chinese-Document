<h1 align='center'>Emuera 中文文档（第一版）</h1>

<h3 align='center'>目录</h3>

- [§0]() 文档说明
- [§1](#§1 EraMaker之章 Chapter of EraMaker) EraMaker之章 `Chapter of EraMaker`
  - [§1.1]() CSV文件格式 `CSV file format` [CSVファイル書式](http://cbaku.com/b/erakanon/eramacsv.html)
  - [§1.2]() ERB文件格式 `ERB file format` [ERBファイル書式](http://cbaku.com/b/erakanon/eramaerb.html)
  - [§1.3]() EraBasic的结构 `Structure of EraBasic` [era basicの構造](http://cbaku.com/b/erakanon/eramaerc.html)
  - [§1.4]() EraBasic变量列表 `List of EraBasic variables` [era basic変数リスト](http://cbaku.com/b/erakanon/eramavar.html)
- [§2]() Emuera之章 `Chapter of Emuera`
  - [§2.1]() 术语表 Glossary [用語集](https://osdn.net/projects/emuera/wiki/EmuDic)
  - [§2.2]() 调试命令 Debugging commands [デバッグコマンド](https://osdn.net/projects/emuera/wiki/debugcom)
  - [§2.3]() 调试模式 Debugging mode [デバッグモード](https://osdn.net/projects/emuera/wiki/debug)
  - [§2.4]() `_replace.csv` [_replace.csv](https://osdn.net/projects/emuera/wiki/replace)
  - [§2.5]() 强制配置项目 Force configurations [コンフィグ項目の強制](https://osdn.net/projects/emuera/wiki/exconfig)
  - [§2.6]() 流程图 Flow diagram [フロー図](https://osdn.net/projects/emuera/wiki/flow)
  - [§2.7]() 与EraMaker的差异 Differences from EraMaker [eramakerとの相違点](https://osdn.net/projects/emuera/wiki/diff)
  - [§2.8]() 在Emuera中增加的扩展语法 New syntax for Emuera [Emueraで追加された拡張文法](https://osdn.net/projects/emuera/wiki/extended)
    - [§2.8.1]() 常规 General [一般](https://osdn.net/projects/emuera/wiki/exetc)
    - [§2.8.2]() 运算符 Operators [演算](https://osdn.net/projects/emuera/wiki/exop)
    - [§2.8.3]() 常量与变量 Constants and Variables [定数・変数](https://osdn.net/projects/emuera/wiki/exvar)
    - [§2.8.4]() 用户自定义变量 User Defined Variables [ユーザー定義の変数](https://osdn.net/projects/emuera/wiki/UserVars)
    - [§2.8.5]() 命令 Commands [命令](https://osdn.net/projects/emuera/wiki/excom)
    - [§2.8.6]() 函数与预处理器 Functions and Preprocessors [関数・プリプロセッサ](https://osdn.net/projects/emuera/wiki/exfunc)
    - [§2.8.7]() 表达式函数 Functions for Expression [式中で使える関数](https://osdn.net/projects/emuera/wiki/exmeth)
    - [§2.8.8]() 用户自定义的表达式内函数 User-defined intra-expression functions [ユーザー定義の式中関数](https://osdn.net/projects/emuera/wiki/UserMeth)
    - [§2.8.9]() 头文件 Header files [ヘッダーファイル（ERH）](https://osdn.net/projects/emuera/wiki/ERH)
    - [§2.8.10]() HTML_PRINT相关 HTML_PRINT related [HTML_PRINT関連](https://osdn.net/projects/emuera/wiki/exhtml)
    - [§2.8.11]() 资源 Resources [リソースファイル](https://osdn.net/projects/emuera/wiki/resources)

# §0 文档说明

- 文档中涉及到的名称都进行了规范，统统采用帕斯卡命名法（大驼峰式命名法），即：
  - `era light` → `EraLight`
  - `erakanon` → `EraKanon`
  - `era basic` → `EraBasic`
- 出于对该游戏引擎使用场景的特殊性的考虑，文档中的一些敏感词语会进行相应的脱敏处理。一些内容意会就好。如“训练”等。
- 第一版文档脱胎于对日语原文档的翻译，且采用的是意译的路径。也会涉及到大量的对示例代码等内容的改造。因此请不要苛求翻译的精确度。

# §1 EraMaker之章 Chapter of EraMaker

<div align="right"><a href="#§1 EraMaker之章 Chapter of EraMaker">§</a> <a href="#Emuera 中文文档（第一版）">TOP</a></div>

## §1.1 CSV文件格式 CSV file format

> http://cbaku.com/b/erakanon/eramacsv.html

作者注：我觉得光看这个文件的描述，很难了解这个游戏。 如果先玩样板游戏（指EraLight），然后一边看样板游戏的CSV文件，就比较容易理解了。

### 基本信息

#### 关于CSV文件

在`eramaker.exe`旁直接创建一个名为`CSV`的文件夹。
CSV文件包含以下项目：

| 文件名称     | 文件说明                                             |
| :----------- | ---------------------------------------------------- |
| GameBase.csv | 注册游戏的基本数据。                                 |
| Palam.csv    | 注册训练时的参数（快乐C、痛苦、反感等）。            |
| Abl.csv      | 注册你的能力(V感、仆从心、受虐狂等)。                |
| Talent.csv   | 注册品质（懦弱、自制、快速恢复等）。                 |
| Mark.csv     | 注册你的印记（快乐印记、羞辱印记等）。               |
| Exp.csv      | 注册你的经历（V经历、手淫经历等）。                  |
| Train.csv    | 注册训练命令（舔阴、口交、鞭子等）。                 |
| Item.csv     | 注册物品（振动器、针等）。                           |
| Str.csv      | 注册各种句子，以便在游戏中使用。                     |
| CharaXX.csv  | 注册你的角色的初始数据，从Chara00.csv到Chara99.csv。 |

#### 如何编写CSV文件

在所有的CSV文件中，

- 如果第一列中的第一个字符是半角分号`;`，则该行将被忽略。空行也会被忽略。

如：

```csv
;体力和精神力的设置
基本,0,2000
基本,1,000

;能力的设定
能力,0,2
```

- 输入数字时请使用半角字符。

正确：

```csv
121,Futa
```

错误：

```csv
１２１,Futa
```

- 如果你用""包住字符串，它就不能正常工作，OpenOffice和其他程序似乎默认就有这个特性。

正确：

```csv
0,服从
1,欲望
2,技能
```

错误：

```csv
0,"服从"
1,"欲望"
2,"技能"
```

设置方法请参考您的电子表格软件的帮助。

## 每个文件的格式

#### GameBase.csv的格式

在第一列中写入指令，在第二列和后续列中写入数据。

##### `コード`,(数值)：游戏代号Code

设置代表游戏的代号，用来防止意外加载其他游戏的保存数据。可以设置是你喜欢的任何数值。

##### `バージョン`,(数值)：版本Version

将游戏的版本设置为（号）。 画面上显示（数字）除以1000（0.10代表100）。初始化时，保存在不同版本中的数据将不会被加载。

##### `タイトル`,[字符串]：标题Title

将游戏的标题设置为（字符串）。 它将在启动时显示。

##### `作者`,[字符串]：作者

将游戏的作者设置为（字符串）。 它将在启动时显示。

##### `製作年`,[字符串]：制作年份

设置游戏制作年份为（字符串）。 它将在启动时显示。 它不是一个数字，所以可以写成2005-2006年。

##### `追加情報`,[字符串]：附加信息

将游戏的附加信息设置为（字符串）。 此信息将在启动时显示。

##### `最初からいるキャラ`,(数值)：自始至终都有的人物

在游戏开始时设置要训练的角色。 (数字)是一个字符号。 例如，1表示Chara01.csv，12表示Chara12.csv。

##### `アイテムなし`,(数値)

如果将(数字)设置为1，则可以不用物品进行训练，即使训练时需要物品，如振动棒等。 当你做一个没有物品概念的游戏时，将其设置为1。

##### `バージョン違い認める`,(数値)

如果保存数据的版本大于或等于(数)，即使版本不同，也可以读取。 如果你有一个不影响整个版本的升级，就设置这个。

如：

```csv
;读取1.20版本后的保存数据。
バージョン違い認める,1200
```

#### Palam.csv的格式

- 参数编号写在第一栏，参数名称写在第二栏。
- 参数编号从0开始，建议不要设置空号。
- 参数号最大为99。

#### Abl.csv的格式

- 在第一栏写上能力编号，在第二栏写上能力名称。
- 建议能力号的数字从0开始，不要有空号。
- 能力的最大数量是99。

#### Talent.csv的格式

- 在第一栏写上特征编号，第二栏写上特征名称。
- 也可以做一个空号。
- 最小数是0，最大数是99。

#### Mark.csv的格式

- 在第一栏中写上印号，在第二栏中写上印名。
- 建议从0开始，不要做空号。
- 最大印数为99。

#### Exp.csv的格式

- 第一栏写经验号，第二栏写经验名称。
- 你也可以做一个空号。
- 最低经验数为0，最高经验数为99。

#### Train.csv的格式

- 命令编号写在第一栏，命令名称写在第二栏。
- 你也可以做一个空号。
- 命令号最小为0，最大为99。

#### Item.csv的格式

- 第一栏写商品编号，第二栏写商品名称，第三栏写商品价格。
- 你也可以创建一个空号。
- 最小项目数为0，最大为99。

#### Str.csv的格式

- 第一栏写的是字符串编号，第二栏写的是字符串。
- 绳子的长度没有限制。
- 字符串的长度不受限制，可以用空数。
- 最小字符串数为0，最大为19999。

#### CharaXX.csv的格式

##### `番号`,[数值]

将字符编号设置为（编号）。 这在创建字符之间的兼容性、同一字符的特殊版本等时非常重要。

##### `名前`,[字符串]

将字符的名称设置为（字符串）。 字符串的长度没有限制，但如果太长，可能会导致显示失真。

##### `呼び名`,[字符串]

将角色的昵称设置为（字符串）。 让我们用在有外号的人物身上。
对字符串的长度没有限制，但如果太长，可能会导致显示失真。

##### `基礎`,[数值1],[数值2]

将字符基本参数中的（数值1）秒设置为（数值2）。
在样本游戏中，第0个参数是强度，第1个参数是能量，第2个参数是射精仪。
数字1）最低为0，最高为99。

如：

```csv
;体力是2000，能量是1000。
基礎,0,2000
基礎,1,1000
```

##### `能力`,[数值1],[数值2]

将角色初始能力的（数字1）th设置为（数字2）。
请使用Abl.csv中指定的能力编号作为（编号1）。
(数字2)没有限制，但在样本游戏中，它被设置为0到5。

##### `素質`,[数值]

将（数字）数字添加到你的角色特征中。
请使用Talent.csv中指定的特征号作为（编号）。

##### `経験`,[数值1],[数值2]

将角色初始经验的（数字1）th设置为（数字2）。
请使用Exp.csv中指定的经验号（数值为1）。

##### `相性`,[数值1],[数值2]

将（数字1）的字符的亲和力设置为（数字2）。
请使用您在CharaXX.csv中指定的字符号作为（数字1）。
(数字1)请使用您在CharaXX.csv中指定的字符数。100是(数字2)的标准值。

##### `助手`,[数值]

(数值)设为1时，从初始状态开始作为助手处理。

##### `フラグ`,[数值1],[数值2]

(数值1)th的字符标志被设置为(数值2)。
(数字1)的最小值是0，最大值是999。
角色旗帜可以根据游戏制作者的想法自由使用。 在样板游戏中，第0个标志为1的角色是 "特殊角色"。
(*称为标志，但可以是0和1以外的整数值)

### 须知

##### 关于`Str.csv`中的`***`和`+++`

在样本游戏EraLight的`Str.csv`中，有很多`***`和`+++`。 在游戏中，这些会分别转换为 `あかり`和`浩之ちゃん`。
要想完全理解这一点，需要掌握EraBasic的知识，但现在，你应该知道，`***`是你正在训练的角色的**姓名**，`+++`是主角的名字，`$$$`是你要培养的角色的**昵称**。
在示例游戏EraKanon中，有一个助手系统。 `///`是助手的名字，`===`是你当时训练的人的名字（主角或助手）。

<div align="right"><a href="#§1.1 CSV文件格式 CSV file format">§</a> <a href="#Emuera 中文文档（第一版）">TOP</a></div>

## §1.2 ERB文件格式 ERB file format

> http://cbaku.com/b/erakanon/eramaerb.html

我觉得光看这个文件的解释是很难让人对游戏有印象的。 如果先玩样板游戏，然后一边看样板游戏的ERB文件，就比较容易理解了。

### 基本信息

#### 关于ERB文件

在eramaker.exe下直接放置一个名为ERB的文件夹，并将ERB文件放入该文件夹中。
您可以使用任何文件名，只要扩展名是.ERB。
请用记事本等文本编辑器编辑。

#### 如何编写ERB文件

##### 注释和空格

在所有ERB文件中，

- 如果第一个字符是半角分号`;`，则该行将被忽略。 另外，空行也会被忽略。
- 请不要在行末加分号，也不要在行后写评论。
- 行首的半角空格和制表符无论延续多少都会被忽略。

正确：

```
;资金设置
MONEY = 500
    ;时间设置
    DAY = 10
    TIME = 1
;开始游戏
PRINT 做什么？
```

错误：

```
MONEY = 500;
TIME = 5;（从第5天开始）
```

##### 半角输入

输入数字、指令、变量名、函数名等时，请使用半角字符。

正确：

```
MONEY = 500
PRINT 开始游戏。
```

错误：

```
ＭＯＮＥＹ　＝　５００
ＰＲＩＮＴ 开始游戏。
```

##### 字符串输入

如果你用`""`包住字符串，它将无法正常工作。

正确：

```
PRINT 这一天结束了……
```

错误：

```
PRINT "这一天结束了……"
```

##### 一行的完结

即使在写长指令时，也不要把指令分成两行以上。

正确：

```
PRINT 因为奈月的身体很敏感，也很有经验，就算你对她粗暴一点，她也会很高兴。虽然嘴上否认，但奈月却越发的暴躁了。但睡梦中的特殊情况，让我迟迟不敢大胆行动。
```

错误：

```
PRINT
因为奈月的身体很敏感，也很有经验，就算你对她粗暴一点，她也会很高兴。虽然嘴上否认，但奈月却越发的暴躁了。但睡梦中的特殊情况，让我迟迟不敢大胆行动。
```

### 变量与命令

#### 关于变量

在训练SLG中，参数的变化至关重要。 因此，你必须学会如何使用 "变量"，它可以存储数据并进行加法和乘法等计算。

##### 将数字放入变量中

使用`=`。请按半角输入。在`=`前后用空格或~~制表符~~隔开。（译者：请使用空格）
EraMaker中可以使用的数字基本都是整数。 不要输入小数。

正确：

```
MONEY = 500
```

错误：

```
MONEY ＝ 500
MONEY=500
MONEY = 3.14
```

##### 将计算出的数字放入变量

我们也用`=`。 注意，`*`是乘法，`/`是除法，`%`是求余。
当计算结果是小数时，会被四舍五入。

正确：

```
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

错误：

```
MONEY = 500×10÷4
```

##### 变量之间的加乘运算

使用`+=`，`-=`，`*=`，`/=`和`%=`。

正确：

```
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

##### 关于数组

变量可以作为一个“数组”来访问。 变量可以以“数组”的形式访问。"数组 "是用来管理两个或多个同名变量的数据。
对数组的访问使用半角冒号`:`。两者之间不要留有空格。
数组后面可以放的最小数字是0。 最大值由变量决定。 详细情况请参考清单。
可以在数组后面放一个变量，而不是一个数字。 但是，在数组之后，是不能带数组的。

正确：

```
A = 35
;为数组FLAG赋值
FLAG:0 = 0
FLAG:2 = 10
FLAG:35 = 440
;用数组FLAG进行计算
FLAG:A += 100/FLAG:2
FLAG:2 *= FLAG:A
```

错误：

```
FLAG：0 = 10
FLAG : 52 = 1000
FLAG:FLAG:20 = 10000
FLAG:91881816 = 1
```

##### 关于二维数组

有一个变量，可以例外地使用两个冒号来访问。 它是一个与人物数据有关的变量。
它的访问形式是（变量名）:（占有字符号）:（变量号）。

如：

```
A = 2 ;让第5个角色的第0种能力升到3级。
ABL:5:0 = 3
;让第A个(第2个)角色的第1种经验+2。
EXP:A:1 += 2
```

##### 在屏幕上显示变量

最简单的方法是使用说明书`PRINTV`和`PRINTVL`。 后面会详细讨论说明。

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

##### 关于字符串变量

普通变量只能处理整数，但也有字符串变量可以处理字符串。 但功能有限。
在屏幕上显示字符串变量时，使用指令`PRINTS`或`PRINTSL`。

正确：

```
STR:0 = 测试文字
PRINTSL STR:0
```

错误：

```
;无法对字符串变量使用+=
STR:0 += 测试文字
```

##### 变量列表

参考[此处]()。

#### 关于命令（基本）

命令可用于在屏幕上显示文本和进行条件判断。

##### 如何编写命令

这是基本的如何编写（指令名称）（指令内容）。 请用半角空格或制表符将（指令名称）和（指令内容）分开。
对于没有（指令内容）的指令，请按原样改行。

正确：

```
PRINT 这是一个测试。
SIF 3 == 1+2
    PRINT 这很明显。
WAIT
```

错误：

```
PRINT这是一个测试。
;等待输入
WAIT 0
```

##### 显示文字

`PRINT`是显示一个字符的命令，`PRINTL`显示一个字符并新建一行。
`PRINTVW`显示变量的内容并等待输入。
`PRINTVW`显示变量的内容并等待输入。
`PRINTFORM`可以显示字符、变量、字符串变量等的组合，`PRINTFORML`做的和换行一样，`PRINTFORMW`做的和等待输入一样。
`PRINTFORMS`将字符串变量的内容和`PRINTFORM`一样转换，并显示出来，`PRINTFORMSL`也是如此，还有换行，`PRINTFORMSW`也是如此，并等待输入。
`PRINTFORMSW`做同样的工作，等待输入；`PRINTFORMSL`做同样的工作，等待输入；`PRINTFORMSW`做同样的工作，等待输入；`PRINTFORMSL`做同样的工作，等待输入。

如：

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

##### 条件判断

如果条件表达式不是0，则`SIF`执行下一行。
如果条件表达式不为0（有效时），`SIF`执行下一行。 0（无效时），跳过下一行。
如果条件表达式不是0，则执行下一行，直到达到`ELSE`、`ELSEIF`和`ENDIF`。 如果是0，则跳过`ELSE`、`ELSEIF`和`ENDIF`；如果是0，则跳过`ELSE`、`ELSEIF`和`ENDIF`；如果是`ELSE`，则从下一行开始执行，直到到达`ENDIF`；如果是`ELSEIF`，则从下一行开始执行，直到到达`ELSE`、`ELSEIF`或`ENDIF`。 如果条件表达式是`ELSEIF`，则从下一行开始执行，直到到达`ELSE`、`ELSEIF`或`ENDIF`为止；否则，它将跳过，直到到达`ELSE`、`ELSEIF`或`ENDIF`为止，并重复该过程。

如：

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

布尔运算符：均为半角。

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

可以用括号来判断更复杂的条件。

##### 输入与输入等待

`WAIT`是通过显示句子等待输入时使用的。
（注：一般情况下，你可以用`PRINTW`来表达单行的文字，这样更容易阅读。）
当你想让玩家输入一个整数时，使用`INPUT`。 输入的结果存储在`RESULT`中。
当你想让玩家输入一个字符串时，使用`INPUTS`。 输入的结果存储在`RESULTS`中。

如：

```
PRINT DATA输入开始。
WAIT
PRINTL 请输入你的年龄。
INPUT
PRINTL 请输入你的名字。
INPUTS
PRINTFORML %RESULTS%今年已经{RESULT}岁了。
```

##### 重复与GOTO

当你想重复触发指令时，可使用`REPEAT`，语句会执行到`REND`处后返回到初始点。重复次数储存在`COUNT`变量中。

注意：`REPEAT`语句不支持嵌套。

如果你在从`REPEAT`到`REND`的途中使用`CONTINUE`，它将回到`REPEAT`的位置；如果你使用`BREAK`，它将停止重复并跳到`REND`的下一行。

如果你想一次性移动到另一个地方，请使用`GOTO`。当你使用`GOTO`时，你需要用$注册一个 "标签"。

如：

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

##### 关于函数

一个大型的程序，如果执意要连续不断一气呵成写到最后，而不分为各个部分的话，写出来的程序是很糟糕的。维护难度很大。如果把程序合理的分为不同的部分，可以使程序更加容易被理解。

我们可以通过“函数”来实现代码的分割。

函数本身分为“注册”和“调用”两个部分，注册时需要使用`@`，`@`之后紧跟函数的名称。合法的函数名称是由字母与下划线构成的，且均为半角。

游戏启动时最先调用的函数名为`EVENTFIRST`，我们将在后文进行详细介绍。

若想**跳转**到某个函数（不返回），请使用`JUMP`。

若想**调用**某个函数（执行完后返回），请使用`CALL`。

使用`CALL`语句调用的函数在执行到`RETURN`语句后可以返回原函数，`RETURN`语句的参数会被保存在`RESULT`变量中。若函数执行结束而没有执行`RETURN`时，`RESULT`变量中的值为`0`。

若使用`RESTART`语句，当前函数将会冲从头重新开始执行。

如：

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

##### 其他基本命令

`QUIT`：退出游戏；

`DRAWLINE`：用`--`画一条从左至右的分割线；

`TIMES`：支持小数的乘法运算（否则EraMaker会对小数自动取整）。

`BAR`：在屏幕上绘制一个类似于`[*****.....]`的控件，用法为：`BAR [变量] [最大值] [控件长度]`。

如：

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

#### 关于命令（训练用）

EraMaker有一些训练专用的特殊命令。

##### 显示训练专用的数据

`PRINT_ABL`：显示角色的能力；

`PRINT_TALENT`：显示角色的素质；

`PRINT_MARK`：显示角色的刻印；

`PRINT_EXP`：显示角色的经验；

`PRINT_PALAM`：显示角色训练中的参数；

使用以上的命令时，请指定需要显示的角色，如`PRINT_ABL 0`一般标识显示主角的能力。

`PRINT_ITEM`：显示持有的物品；

`PRINT_SHOPITEM`：显示商店中的物品；

`UPCHECK`：显示训练命令在训练期间参数的变化。

##### 角色管理

`ADDCHARA`：新增一个角色。如果需要添加一个编号为3的角色，`ADDCHARA 3`。

`ADDSPCHARA`：新增一个SP角色。如果需要添加一个编号为3的角色，`ADDSPCHARA 3`。（SP角色是指角色编号为0或1的角色。）

`DELCHARA`：删除一个由`ADDCHARA`或其他方法添加的角色。

如：

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

##### 存档相关

`SAVEGAME`：呼出保存存档界面；

`LOADGAME`：呼出加载存档界面；

上面两条命令都只能在`SHOP`中调用。

`PUTFORM`只能与一个名为`@SAVEINFO`的特殊函数一起使用，它可以用与PRINTFORM类似的格式来写出你的存档的概况。如该存档已经过去了多少天，角色的能力是什么，以及正在训练哪个角色等。

##### BEGIN

`BEGIN`可以通过调用各种系统指令来推进游戏。

正在执行的函数在调用`BEGIN`函数后会被终止，即使`BEGIN`函数从其他地方被`CALL`语句调用，它也不会返回到原来的函数。

`BEGIN TRAIN`：开始训练；

`BEGIN AFTERTRAIN`：结束训练；

`BEGIN ABLUP`：呼出升级界面；

`BEGIN TURNEND`：结束回合；

`BEGIN SHOP`：呼出SHOP界面；

<div align="right"><a href="#§1 EraMaker之章 Chapter of EraMaker">§</a> <a href="#Emuera 中文文档（第一版）">TOP</a></div>

## §1.3 EraBasic的结构 Structure of EraBasic

> http://cbaku.com/b/erakanon/eramaerc.html

### 基本信息

#### EraMaker的启动

游戏启动后，会出现标题屏幕，你可以选择“从头开始”或“加载存档”。当你选择“从头开始”时，ERB文件中的`EVENTFIRST`函数会被调用。

当`EVENTFIRST`完全执行完毕后，游戏便会结束。因此，通过`BEGIN`调用`SHOP`或`TRAIN`很有必要的。

> 此处可参见示例游戏的`SYSTEM.ERB`的开头部分。

#### SHOP

##### 进入SHOP流程

进入SHOP流程后，`@EVENTSHOP`函数（如果有的话）将被调用。这是一个事件函数。

之后，`@SHOW_SHOP`函数将会被调用。可以在此函数中显示一些基本信息，如日期和训练中的角色等。调用`PRINT_SHOPITEM`显示出售中的物品，或是显示一些特殊的选项，如保存和加载等。

##### 在SHOP流程中选择命令

如果选择的数字位于0-99，则意味着购买物品。

如果选择任何其他数字，将调用函数`@USERSHOP`，所选择的数字被储存在`RESULT`变量中，等待进行后续的处理。

> 此处可参见实例游戏中的`SHOP.ERB`文件部分，方便理解。

##### 购买

当你购买物品时，函数`@EVENTBUY`将会被调用（如果有的话）。这是一个事件函数。（如果你想把已购买的物品从商店的品种中删除，使用这个功能是个好主意。）

#### TRAIN

##### 进入TRAIN流程

进入SHOP流程后，`@EVENTTRAIN`函数（如果有的话）将被调用。这是一个事件函数。

然后，`@SHOW_STATUS`函数会被调用。这个函数会显示日期、训练中的角色等基本信息，以及使用`PRINT_PALAM`命令来显示训练中的参数。可以试一试。

然后，可以供玩家执行的命令会自动显示。命令显示时会自动调用相应的`@COM_ABLE××`函数，若函数的返回值`RETURN`为`1`，则意味着该命令可以被玩家点击。若相应的`@COM_ABLE××`函数不存在，也意味着命令可以被玩家点击。更多细节参见示例文件`COMABLE.ERB`。

此外，一个名为`@SHOW_USERCOM`的函数会被调用，类似于“结束训练”之类的特殊命令应该显示在该函数内。

更多信息参见示例文件：`SYSTEM.ERB`和`INFO.ERB`。

##### TRAIN中的指令选择

当玩家选择一个指令时，`@EVENTCOM`函数（若有）会被调用。这是一个事件函数。另外，与所选命令相对应的函数会被调用，如选择“正常位置”命令，并且`TRAIN.CSV`文件中的“正常位置”命令对应的编号为20，则将调用一个名为`@COM20`的函数。

若一个动作函数无法执行，则在函数中调用`RETURN 0`语句，便会返回到命令选择界面，而不继续执行命令。

若一个命令可以被执行，在`@COM××`中就会执行`RETURN 1`，然后`@SOURCE_CHECK`函数就会被调用。训练的结果反映在这里的训练参数中。

更多信息参见示例文件：`COM××.ERB`和`SOURCE.ERB`。

##### TRAIN中的指令选择结束

指令选择结束后，事件函数`@EVENTCOMEND`（若有）会被调用，可以在该函数内执行显示角色台词等行为。

更多信息参见示例文件：`CKOJOxx.ERB`。

##### 用户命令

如果动作选项所对应的`@COM××`函数不存在，将调用@USERCOM。

更多信息参见示例文件：`SYSTEM.ERB`。

#### AFTERTRAIN

进入AFTERTRAIN流程后，事件函数`@EVENTEND`（若有）将会被调用。

训练结束后，人物的台词可以在这里进行处理。此外，训练结束后的结算（珠等）也应在这里进行。

更多信息参见示例文件：`AFTERTRA.ERB`。

#### ABLUP

##### ABLUP的显示

首先，`@SHOW_JUEL`函数会被调用，显示当前所有的珠子。

然后，`@SHOW_ABLUP_SELECT`函数会被调用，显示能力列表和退出按钮。

更多信息参见示例文件：`ABL.ERB`。

##### ABLUP的指令选择

当玩家选择一个命令时，相对应的函数将会被调用，如选择“[3] C感觉”，就会调用`@ABLUP3`函数。

若相对应的`@ABLUPxx`函数不存在，则将调用`@USERABLUP`函数。选择的命令编号储存在`RESULT`变量中，可以在函数中进行相应处理。

更多信息参见示例文件：`ABLUP××.ERB`和`ABL.ERB`。

#### TURNEND

进入TURNEND流程后，事件函数`@EVENTTURNEND`（若有）将会被调用。

在这里可以处理一下关于时间和角色状态（如恢复等）的逻辑。

注意：若事件函数`@EVENTTURNEND`未定义，则游戏会停止。

更多信息参见示例文件：`SYSTEM.ERB`。

#### 事件函数

##### 关于事件函数

事件函数是指游戏生命周期中的固定位置会被调用的函数。如命令执行完毕会训练开始时。

当你想显示人物的对话时，事件函数很有用。如果你把台词直接写在相应的`@COM××`函数中，就会让人难以理解。而如果利用事件函数，则可以方便地单独管理相关台词。

事件函数可以重名。

如：

```
;正常位置执行结束的时候的台词
@EVENTCOMEND
;正常位置的编号为20。若不是20就无视
SIF SELECTCOM != 20
    RETURN 0
;如果FLAG:1000为非0就无视
SIF FLAG:1000
    RETURN 0
PRINTW “不要这么直接呀！”
;设定FLAG。显示一次后就不再显示
FLAG:1000 = 1
RETURN 1

;背后位置执行结束的时候的台词
@EVENTCOMEND
;背后位置的编号为21。若不是21就无视
SIF SELECTCOM != 21
    RETURN 0
;如果FLAG:1001为非0就无视
SIF FLAG:1001
    RETURN 0
PRINTW “这种位置……”
;设定FLAG。显示一次后就不再显示
FLAG:1001 = 1
RETURN 1
```

可以给事件函数赋予“性质”。

当附加`#SINGLE`的性质时，当该函数以`RETURN 1`结束时，即使存在其他同名函数也不会被调用。这个特性可以用在同一个角色存在几句相互矛盾的台词时。

当附加`#PRI`的性质时，该函数会优先于其他同名函数之前执行。这个特性可以用于角色死亡检查。

当附加`#LATER`的性质时，该函数会优先于其他同名函数之后执行。这个特性可以用于结算，如显示“一天过去了。”之类的文本。

如：

```
@EVENTTURNEND
#SINGLE
SIF FLAG:1000
   RETURN 0
FLAG:1000 = 1
PRINTW “不想动了……”
RETURN 1

@EVENTTURNEND
#SINGLE
SIF FLAG:1001
   RETURN 0
FLAG:1001 = 1
PRINTW “想回家……”
RETURN 1

@EVENTTURNEND
#SINGLE
SIF FLAG:1002
   RETURN 0
FLAG:1002 = 1
PRINTW “想出门……”
RETURN 1

@EVENTTURNEND
#LATER
PRINTW 一天过去了……
RETURN 1
```

（1-3句每次只显示一个，而最后一句会在`FLAG:1000`、`FLAG:1001`和`FLAG:1002`的值都为`1`之后才会显示。）

<div align="right"><a href="#§1 EraMaker之章 Chapter of EraMaker">§</a> <a href="#Emuera 中文文档（第一版）">TOP</a></div>

## §1.4 EraBasic变量列表 List of EraBasic variables

> http://cbaku.com/b/erakanon/eramavar.html

### 基本变量

#### 通用变量

##### A-Z

单字母变量。从A到Z，共26个。适用于储存临时数据。

不要寄希望于用它储存跨区块的数据，因为在其它部分可能会被使用。

用法：

```
;赋值
```

##### COUNT

循环次数变量。用于REPEAT~REND循环之中。从0开始计数。

不要在循环之中手动修改其中的数据，可能会导致BUG的出现。即使你知道你在干什么，但还是不推荐手动修改。

##### RESULT

结果变量（数字）。

不推荐以任何理由去改写它。如果需要改写，也请赋值给一个新的变量并改写那个新的变量。

##### RESULTS

结果变量（字符串）。

不推荐以任何理由去改写它。如果需要改写，也请赋值给一个新的变量并改写那个新的变量。

#### 基本信息变量

##### DAY

日期变量。默认是没有单位的。

##### TIME

时间变量。默认是没有单位的。

##### MONEY

金钱变量。默认是没有单位的。

#### 训练基本信息变量

##### MASTER

主角的注册编号。一般为0。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

##### TARGET

训练对象的注册编号。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

##### ASSI（Assistant）

助手的注册编号。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

##### PLAYER

正在提供训练的角色的注册编号。一般与MASTER或ASSI相同。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

##### CHARANUM（Character Number）

角色数量。引擎生成，用户无法改变。

##### ASSIPLAY（Assistant Play）

助手现在是否正在训练。

如果正在训练，值为1；

如果没训练，值为0；

##### SELECTCOM（Selected Command）

被选中的命令编号。与`TRAIN.CSV`中所注册的命令编号相同。

##### PREVCOM（Previous Command）

上次被选中的命令编号。

用于判断执行重复命令。

#### 训练变量

##### LOSEBASE

状态损耗变量。`int[0~999]`

一般地，`LOSEBASE:0`代表体力消耗量，`LOSEBASE:1`代表精力消耗量。

##### UP

参数升高变量。`int[0~999]`

索引与`PALAM.CSV`文件中的索引相同。

##### DOWN

参数降低变量。`int[0~999]`

索引与`PALAM.CSV`文件中的索引相同。

##### PALAMLV（Parameter Level）

参数上限。`int[0~999]`

如果相应训练参数的值超过了这个上限，则训练后得到的珍珠数量就会急剧增加。

索引与`PALAM.CSV`文件中的索引相同。

##### EXPLV（Experience Level）

经验值上限。`int[0~999]`

当经验超过这个值时，训练的效果（经验）会增加。

##### EJAC

你懂的。`int`

为了方便，单独拿出来的一个变量。

#### 标志

##### FLAG

标志。`int[0~9999]`

##### TFLAG（Temporary Flag）

临时标志。`int[0~999]`

用于储存临时状态或是训练状态。比FLAG更临时。

#### 角色数据

大部分变量是二维数组。如`EXP:1:2`代表第1个角色的第2种经验。

但有一种缩写，如`EXP:0`，代表`EXP:TARGET:0`，即训练对象的第0种经验。

##### NO

角色编号。`int[0~99]`

它不是一个二维数组，所以你可以用`NO:TARGET`或`NO:ASSI`来访问它。

##### BASE

##### MAXBASE

##### ABL

##### TALENT

##### EXP

##### MARK

##### RELATION

##### JUEL

##### CFLAG

##### ISASSI

##### NAME

##### CALLNAME

##### TEQUIP

##### PALAM

##### STAIN

##### EX

##### SOURCE

##### NOWEX

##### GOTJUEL

#### 物品数据

#### 名称数据

#### 字符串数据

#### 随机数据

### 角色注册编号

#### 角色注册编号与角色编号的异同

### 关于污渍

#### 污渍数据的特殊性

##### 污渍数据的种类

##### 污渍数据的表示方法

<div align="right"><a href="#§1 EraMaker之章 Chapter of EraMaker">§</a> <a href="#Emuera 中文文档（第一版）">TOP</a></div>

# §2 Emuera之章 Chapter of Emuera

<div align="right"><a href="#§1 EraMaker之章 Chapter of EraMaker">§</a> <a href="#Emuera 中文文档（第一版）">TOP</a></div>

## EraMaker

### [EraBasic 的结构]()

> http://cbaku.com/b/erakanon/eramaerc.html

### [CSV 文件语法]()

> http://cbaku.com/b/erakanon/eramacsv.html

### [ERB 文件语法]()

> http://cbaku.com/b/erakanon/eramaerb.html

### [EraBasic 变量列表]()

> http://cbaku.com/b/erakanon/eramavar.html

## Emuera

### [词汇表]()

> https://osdn.net/projects/emuera/wiki/EmuDic

### [调试命令]()

> https://osdn.net/projects/emuera/wiki/debugcom

### [调试模式]()

> https://osdn.net/projects/emuera/wiki/debug

### [_replace.csv]()

> https://osdn.net/projects/emuera/wiki/replace

### [配置文件]()

> https://osdn.net/projects/emuera/wiki/exconfig

### [运行流程]()

> https://osdn.net/projects/emuera/wiki/flow

### [与EraMaker的不同点]()

> https://osdn.net/projects/emuera/wiki/diff

### Emuera新增的语法

#### [常规]()

> https://osdn.net/projects/emuera/wiki/exetc

#### [计算]()

> https://osdn.net/projects/emuera/wiki/exop

#### [常量与变量]()

> https://osdn.net/projects/emuera/wiki/exvar

#### [用户定义变量]()

> https://osdn.net/projects/emuera/wiki/UserVars

#### [命令]()

> https://osdn.net/projects/emuera/wiki/excom

#### [函数与预处理器]()

> https://osdn.net/projects/emuera/wiki/exfunc

#### [行内函数]()

> https://osdn.net/projects/emuera/wiki/exmeth

#### [自定义函数]()

> https://osdn.net/projects/emuera/wiki/UserMeth

#### [头文件]()

> https://osdn.net/projects/emuera/wiki/ERH

#### [HTML_PRINT]()

> https://osdn.net/projects/emuera/wiki/exhtml

#### [资源文件]()

> https://osdn.net/projects/emuera/wiki/resources