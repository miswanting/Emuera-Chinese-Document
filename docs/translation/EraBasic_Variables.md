# EraBasic 的变量

> 翻译自原文档：http://cbaku.com/b/erakanon/eramavar.html

## 基本变量

### 通用变量

#### A-Z

单字母变量。从A到Z，共26个。适用于储存临时数据。

不要试图用来储存全局数据，因为在其它部分可能会被使用，如果你做了，未来的你会想要坐时光机回来打你的。

用法：

```
;赋值
A = 0
```

#### COUNT

循环次数变量。用于REPEAT~REND循环之中。从0开始计数。

不要在循环之中手动修改其中的数据，可能会导致BUG的出现。即使你知道你在干什么，但还是不推荐手动修改。

#### RESULT

结果变量（数字）。

不推荐以任何理由去改写它。如果需要改写，也请赋值给一个新的变量并改写那个新的变量。

#### RESULTS

结果变量（字符串）。

不推荐以任何理由去改写它。如果需要改写，也请赋值给一个新的变量并改写那个新的变量。

### 基本信息变量

#### DAY

日期变量。默认是没有单位的。

#### TIME

时间变量。默认是没有单位的。

#### MONEY

金钱变量。默认是没有单位的。

### 训练基本信息变量

#### MASTER

主角的注册编号。一般为0。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

#### TARGET

训练对象的注册编号。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

#### ASSI（Assistant）

助手的注册编号。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

#### PLAYER

正在提供训练的角色的注册编号。一般与MASTER或ASSI相同。

注意：这个数字可能与`Chara××.csv`中注册的数字不同。

#### CHARANUM（Character Number）

角色数量。引擎生成，用户无法改变。

#### ASSIPLAY（Assistant Play）

助手现在是否正在训练。

如果正在训练，值为1；

如果没训练，值为0；

#### SELECTCOM（Selected Command）

被选中的命令编号。与`TRAIN.CSV`中所注册的命令编号相同。

#### PREVCOM（Previous Command）

上次被选中的命令编号。

用于判断执行重复命令。

### ~~训练~~变量

#### LOSEBASE

状态损耗变量。`int[0~999]`

一般地，`LOSEBASE:0`代表体力消耗量，`LOSEBASE:1`代表精力消耗量。

#### UP

参数升高变量。`int[0~999]`

索引与`PALAM.CSV`文件中的索引相同。

#### DOWN

参数降低变量。`int[0~999]`

索引与`PALAM.CSV`文件中的索引相同。

#### PALAMLV（Parameter Level）

参数上限。`int[0~999]`

如果相应训练参数的值超过了这个上限，则训练后得到的珍珠数量就会急剧增加。

索引与`PALAM.CSV`文件中的索引相同。

#### EXPLV（Experience Level）

经验值上限。`int[0~999]`

当经验超过这个值时，训练的效果（经验）会增加。

#### EJAC

你懂的。`int`

为了方便，单独拿出来的一个变量。

### 标志

#### FLAG

标志。`int[0~9999]`

#### TFLAG（Temporary Flag）

临时标志。`int[0~999]`

用于储存临时状态或是训练状态。比FLAG更临时。

### 角色数据

大部分变量是二维数组。如`EXP:1:2`代表第1个角色的第2种经验。

但有一种缩写，如`EXP:0`，代表`EXP:TARGET:0`，即训练对象的第0种经验。

#### NO

角色编号。`int[0~99]`

它不是一个二维数组，所以你可以用`NO:TARGET`或`NO:ASSI`来访问它。

#### BASE

角色基本参数。`int[int[]]0~99`

在实例游戏中，`BASE:0`代表体力，`BASE:1`代表精力。

#### MAXBASE

角色基本参数上限。`int[int[]]0~99`

#### ABL

角色能力。`int[int[]]0~99`

在`ABL.CSV`中注册的能力编号。

#### TALENT

角色素质。`int[int[]]0~999`

在`TALENT.CSV`中注册的素质编号。

#### EXP

角色经验。`int[int[]]0~99`

在`EXP.CSV`中注册的经验编号。

#### MARK

角色刻印。`int[int[]]0~99`

在`MARK.CSV`中注册的刻印编号。

#### RELATION

角色相性。`int[int[]]0~99`

`RELATION:TARGET:3`指训练中的角色和角色编号为3的角色的相性。而不是注册编号。

#### JUEL

角色持有的珠。`int[int[]]0~199`

在`PALAM.CSV`中注册的珠编号。

#### CFLAG（Character Flag）

角色标志。`int[int[]]0~999`

角色的各种数据都可保存于此。

`CFLAG:0`为`1`的角色会被认为是特殊角色。

#### ISASSI

是否为助手。`int[]0~99`

如果为`0`，则不是助手；

如果为`1`，则是助手。

用法：`ISASSI:TARGET`或`ISASSI:ASSI`。

#### NAME

角色名称。`string[]0~99`

用法：`NAME:TARGET`或`NAME:ASSI`。

#### CALLNAME

角色称呼。`string[]0~99`

用法：`CALLNAME:TARGET`或`CALLNAME:ASSI`。

#### TEQUIP

角色装备的物品。`int[int[]]0~99`

可用于判断物品装备情况，也可以用于表现角色强化，或是药剂的使用。

#### PALAM

角色训练中的参数。`int[int[]]0~99`

在`PALAM.CSV`中注册的刻印编号。

#### STAIN

角色训练中的污渍。`int[int[]]0~99`

在示例游戏中，`STAIN:0`指口部污渍；`STAIN:1`指手部污渍等。

#### EX

训练中“攀登过几次顶峰”。`int[int[]]0~99`

在示例游戏中，`EX:0`为C；`EX:1`为V；`EX:2`为A；

#### SOURCE

执行训练命令源角色。`int[int[]]0~99`

参见示例游戏中`COM××.ERB`和`SOURCE.ERB`可以看到从训练源到训练参数升高的流程。

#### NOWEX

`int[int[]]0~99`

#### GOTJUEL

`int[int[]]0~99`

### 物品数据

#### ITEM

`int[]0~99`

#### ITEMSALES

`int[]0~99`

#### BOUGHT

#### NOITEM

#### PBAND

### 名称数据

#### ABLNAME

#### TALENTNAME

#### EXPNAME

#### MARKNAME

#### PALAMNAME

#### ITEMNAME

### 字符串数据

#### STR

#### SAVESTR

### 随机数据

#### RAND

## 角色注册编号

### 角色注册编号与角色编号的异同

#### 没有实质内容的角色数据

#### 角色的注册

#### 角色的注销

## 关于污渍

### 污渍数据的特殊性

#### 污渍数据的种类

#### 污渍数据的表示方法

#### 污渍数据的判断方法

#### 如何添加污渍数据