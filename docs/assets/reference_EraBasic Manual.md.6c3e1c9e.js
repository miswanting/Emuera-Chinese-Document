import{o as p,c as e,a}from"./app.00f44843.js";const i='{"title":"Emuera 中文文档","description":"","frontmatter":{},"headers":[{"level":2,"title":"目录","slug":"目录"},{"level":2,"title":"概述","slug":"概述"},{"level":2,"title":"使用Emuera解释器","slug":"使用emuera解释器"},{"level":2,"title":"内置类型","slug":"内置类型"},{"level":3,"title":"逻辑值类型：bool","slug":"逻辑值类型：bool"},{"level":3,"title":"数字类型：int64","slug":"数字类型：int64"},{"level":3,"title":"文本序列类型：string","slug":"文本序列类型：string"},{"level":2,"title":"内置常量","slug":"内置常量"},{"level":2,"title":"变量","slug":"变量"},{"level":3,"title":"变量的类型","slug":"变量的类型"},{"level":2,"title":"内置运算符","slug":"内置运算符"},{"level":3,"title":"算数运算符","slug":"算数运算符"},{"level":3,"title":"比较运算符","slug":"比较运算符"},{"level":3,"title":"赋值运算符","slug":"赋值运算符"},{"level":3,"title":"自增减运算符","slug":"自增减运算符"},{"level":3,"title":"逻辑运算符","slug":"逻辑运算符"},{"level":3,"title":"三元运算符","slug":"三元运算符"},{"level":2,"title":"内置函数","slug":"内置函数"},{"level":3,"title":"存档读档","slug":"存档读档"},{"level":2,"title":"内置异常","slug":"内置异常"},{"level":2,"title":"流程控制","slug":"流程控制"},{"level":3,"title":"IF 语句","slug":"if-语句"},{"level":3,"title":"SELECTCASE语句","slug":"selectcase语句"},{"level":3,"title":"FOR 语句","slug":"for-语句"},{"level":3,"title":"WHILE 语句","slug":"while-语句"},{"level":3,"title":"GOTO 语句","slug":"goto-语句"},{"level":2,"title":"数据结构","slug":"数据结构"},{"level":3,"title":"数组","slug":"数组"},{"level":2,"title":"输入与输出","slug":"输入与输出"},{"level":3,"title":"输出文本","slug":"输出文本"},{"level":3,"title":"FORM 表达式","slug":"form-表达式"},{"level":3,"title":"输出按钮","slug":"输出按钮"},{"level":3,"title":"输入","slug":"输入"},{"level":2,"title":"函数与方法","slug":"函数与方法"},{"level":3,"title":"函数的定义","slug":"函数的定义"},{"level":3,"title":"函数的参数","slug":"函数的参数"},{"level":3,"title":"函数的结束与返回","slug":"函数的结束与返回"},{"level":3,"title":"函数的调用","slug":"函数的调用"},{"level":3,"title":"方法（式中函数）","slug":"方法（式中函数）"},{"level":2,"title":"书写规范","slug":"书写规范"},{"level":2,"title":"概述","slug":"概述-1"},{"level":2,"title":"","slug":""},{"level":2,"title":"文件类型","slug":"文件类型"},{"level":3,"title":"ERH文件","slug":"erh文件"},{"level":3,"title":"CSV文件","slug":"csv文件"},{"level":2,"title":"ERA游戏结构和流程","slug":"era游戏结构和流程"},{"level":3,"title":"BEGIN 流程控制语句","slug":"begin-流程控制语句"},{"level":3,"title":"进入 SHOW_STATUS 函数 调教流程","slug":"进入-show-status-函数-调教流程"},{"level":2,"title":"术语表","slug":"术语表"},{"level":3,"title":"启动模式","slug":"启动模式"},{"level":3,"title":"窗口与对话框（Window & Dialogue）","slug":"窗口与对话框（window-dialogue）"},{"level":3,"title":"函数","slug":"函数"},{"level":3,"title":"行","slug":"行"}],"relativePath":"reference/Emuera Manual.md","lastUpdated":1631105841828}',r={},h=[a('<h1 id="emuera-中文文档" tabindex="-1">Emuera 中文文档 <a class="header-anchor" href="#emuera-中文文档" aria-hidden="true">#</a></h1><p>VERSION：0.1.0-191017</p><p>作者：Miswanting</p><p><strong>特别声明：全文大量地参考了<code>甜艮菜</code>大佬发布的相关教程，没有他的总结归纳、授权以及在文档编写与校对期间的鼎力协助，这篇文档断然无法顺利编写出来与大家见面。在此特别感谢！</strong></p><p>作者的话：本文档是基于EraLife项目开发需要，对Emuera解释器使用方法和EraBasic语法调研后的产物。由<strong>EraBasic 语言参考</strong>和<strong>Emuera 使用说明</strong>两部分构成。具有以下特征：</p><ul><li>文档结构参考并优化自Python官方文档；</li><li>文档中<strong>EraBasic 语言参考</strong>部分有大量知识点是基于<code>甜艮菜</code>大佬的总结归纳； <ul><li>原始教程：TODO</li></ul></li><li>文档中<strong>Emuera 使用说明</strong>部分来自作者对Emuera日文Wiki的总结归纳。</li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h2><p>[toc]</p><h1 id="erabasic-语言参考" tabindex="-1">EraBasic 语言参考 <a class="header-anchor" href="#erabasic-语言参考" aria-hidden="true">#</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-hidden="true">#</a></h2><h2 id="使用emuera解释器" tabindex="-1">使用Emuera解释器 <a class="header-anchor" href="#使用emuera解释器" aria-hidden="true">#</a></h2><h2 id="内置类型" tabindex="-1">内置类型 <a class="header-anchor" href="#内置类型" aria-hidden="true">#</a></h2><p>ERA中有两种数据类型。</p><h3 id="逻辑值类型：bool" tabindex="-1">逻辑值类型：bool <a class="header-anchor" href="#逻辑值类型：bool" aria-hidden="true">#</a></h3><p>有时需要判断条件</p><p>那么就需要逻辑运算</p><p>首先应当了解</p><p>true 真</p><p>false 假</p><p>真 就是条件成立，假 就是条件不成立</p><p>ERA中 非0为真 也就是 只有 0 是假 其他的数字都是真</p><h3 id="数字类型：int64" tabindex="-1">数字类型：int64 <a class="header-anchor" href="#数字类型：int64" aria-hidden="true">#</a></h3><p>Era中只存在一种数字类型：int64</p><h4 id="基本运算" tabindex="-1">基本运算 <a class="header-anchor" href="#基本运算" aria-hidden="true">#</a></h4><p>整型变量的计算方法与其他程序语言大同小异，来看看你是否能够无师自通。</p><p>我们来尝试依次做下列计算，然后核对一下答案，看看你对整型变量的计算方法是否真正掌握了：</p><ul><li>赋值 <ul><li>A = 2</li><li>B = A</li></ul></li><li>加法 <ul><li>C = A + 1</li><li>D = B + C</li></ul></li><li>减法 <ul><li>E = A - 1</li><li>F = C - E</li></ul></li><li>乘法 <ul><li>G = A * 2</li><li>H = B * C</li></ul></li><li>除法 <ul><li>I = D / 3</li><li>J = D / A</li></ul></li><li>取余 <ul><li>K = D % 3</li><li>L = D % A</li></ul></li><li>乘除优先 <ul><li>M = A + B * C</li></ul></li><li>括号优先 <ul><li>N = (A + B) * C</li></ul></li><li>乘上小数 <ul><li>O = TIMES A, 1.6</li></ul></li></ul><blockquote><p>答案：</p><p>A == 2，B == 2，C == 3，D == 5，E == 1，F == 2，G == 4，H == 6，**I == 1，J == 2，**K == 2，L == 1，M == 8，N == 12，<strong>O == 3；</strong></p></blockquote><h3 id="文本序列类型：string" tabindex="-1">文本序列类型：string <a class="header-anchor" href="#文本序列类型：string" aria-hidden="true">#</a></h3><p>Era中只存在一种文本序列类型：string</p><h4 id="基本运算-1" tabindex="-1">基本运算 <a class="header-anchor" href="#基本运算-1" aria-hidden="true">#</a></h4><p>字符串型变量稍微麻烦一点，需要认识新的赋值运算符：<code>&#39;=</code></p><ul><li>赋值 <ul><li>LOCALS &#39;= RESULTS</li></ul></li></ul><blockquote><p>考察两种不同的赋值语句</p><ol><li>LOCALS &#39;= RESULTS <ul><li>LOCALS 的值就将被赋值为RESULTS的值</li></ul></li><li>LOCALS = RESULTS <ul><li>LOCALS 的值将为RESULTS</li></ul></li></ol><p>因为在字符串运算中<code>=</code>号右边的式子被称为<code>FORM文本式</code>； 请先记住 FORM文本式 ，详细内容之后介绍；请暂且理解为<code>文本</code>。 你写什么就是什么的文本 所以使用<code>=</code>的结果就是<code>=</code>后是什么，值就将是什么。 而使用<code>&#39;=</code>就不一样，<code>&#39;=</code>的右边，是字符串型，也就是只接受字符串型变量，如 RESULTS 如果不使用变量赋值，也可以自己填写新的内容 LOCALS &#39;= &quot;新的内容&quot; 那么 LOCALS 的值则为 新的内容 LOCALS = &quot;新的内容&quot; 那么 LOCALS 的值则为 &quot;新的内容&quot;</p></blockquote><ul><li>连接 <ul><li>RESULTS &#39;= &quot;ABC&quot; + &quot;DEFG&quot;</li></ul></li><li>重复 <ul><li>RESULTS &#39;= &quot;ABC&quot; * 5</li></ul></li></ul><h2 id="内置常量" tabindex="-1">内置常量 <a class="header-anchor" href="#内置常量" aria-hidden="true">#</a></h2><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true">#</a></h2><p>变量可以看作储存数据的容器。</p><h3 id="变量的类型" tabindex="-1">变量的类型 <a class="header-anchor" href="#变量的类型" aria-hidden="true">#</a></h3><p>整型：只装有整数，如1，0，-1</p><p>字符串型：只装有字符串，如“甲”，“乙丙”</p><blockquote><p>注意：ERA中不支持浮点数，也就是小数。</p></blockquote><p>除法常会造成小数</p><p>小数将会被向下取整，如：1.1=&gt;1，1.9=&gt;1；</p><h2 id="内置运算符" tabindex="-1">内置运算符 <a class="header-anchor" href="#内置运算符" aria-hidden="true">#</a></h2><h3 id="算数运算符" tabindex="-1">算数运算符 <a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a></h3><p>有变量就自然要计算</p><p>想要计算就得了解运算符</p><ul><li>加法：+</li><li>减法：-</li><li>乘法：*</li><li>除法：/</li><li>取余：%</li></ul><h3 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a></h3><p>请注意，逻辑运算中，括号内也是优先计算的</p><p>接下来了解逻辑运算符</p><p>&gt; 大于</p><p>&lt; 小于</p><p>&gt;= 大于等于</p><p>&lt;= 小于等于</p><p>== 等于</p><p>!= 不等于</p><p>1 &gt; 1 为 假</p><p>1 &gt; 0 为 真</p><p>1 &gt;= 1 为 真</p><p>1 &lt; 1 为 假</p><p>1 &lt;= 1 为 真</p><p>1 &lt; 0 为 假</p><p>== 1 为 真</p><p>1 == 0 为 假</p><p>1 == 2 为 假</p><p>1 != 1 为 假</p><p>1 != 0 为 真</p><p>100 为 真</p><p>1 为 真</p><p>0 为 假</p><p>-1 为 真</p><p>-100 为 真</p><p>以上不仅可以判断数字 也可以 判断字符串</p><p>如</p><p>&quot;A&quot; == &quot;A&quot; 为真</p><p>LOCALS == &quot;&quot; LOCALS是否是空字符串，是空字符串则为 真</p><p>LOCALS == &quot;A&quot; LOCALS是否是 A 是 A 则为 真</p><p>但请不要用 大于小于 来判断字符串 好奇的话可以试试</p><h3 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a></h3><ul><li>赋值：= <ul><li>赋值运算符的左边必须是<code>变量</code>，其他的运算符左右可以是常数也可以是变量</li></ul></li></ul><p>现在，可以学习新的赋值运算符了</p><p>+=</p><p>*=</p><p>/=</p><p>%=</p><p>都是什么意思呢？</p><p>LOCAL += 1 等于 LOCAL = LOCAL + 1</p><p>LOCAL -= 1 等于 LOCAL = LOCAL - 1</p><p>LOCAL *= 2 等于 LOCAL = LOCAL * 2</p><p>LOCAL /= 2 等于 LOCAL = LOCAL / 2</p><p>LOCAL %= 2 等于 LOCAL = LOCAL % 2</p><p>LOCALS &#39;= &quot;b&quot;</p><p>LOCALS += &quot;aa&quot; 等于 LOCALS &#39;= LOCALS + &quot;aa&quot; 等于 LOCALS &#39;= &quot;b&quot; + &quot;aa&quot;</p><p>字符串型也可以使用 *= 但必须是乘数字，至于其他的运算就不行了</p><p>就是这样</p><p>为了方便</p><h3 id="自增减运算符" tabindex="-1">自增减运算符 <a class="header-anchor" href="#自增减运算符" aria-hidden="true">#</a></h3><p>LOCAL++ 等于 LOCAL += 1</p><p>LOCAL-- 等于 LOCAL -= 1</p><p>++LOCAL 等于 LOCAL += 1</p><p>--LOCAL 等于 LOCAL -= 1</p><p>咋看是一样的啊？</p><p>加号和减号在前面和在后面有什么区别呢？</p><p>在后面则是 先引用变量后改变变量</p><p>在前面则是 先改变变量后引用变量</p><p>不理解没关系</p><p>通常的使用是</p><p>LOCAL++</p><p>LOCAL--</p><p>就是方便地让 LOCAL 加一减一罢了</p><h3 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a></h3><p>接下来了解更多的运算符</p><p>! 逻辑非</p><p>&amp;&amp; 逻辑与</p><p>|| 逻辑或</p><p>^^ 逻辑异或</p><p>!&amp; 逻辑与非</p><p>!| 逻辑或非</p><p>! 的意思是取反</p><p>!真 的结果就是 假</p><p>!假 的结果就是 真</p><p>常用于判断 条件不成立时成立</p><p>如 !今天下雨了</p><p>实际上今天没下雨</p><p>那么 这个条件就成立了，反之不成立</p><p>&amp;&amp;、|| 的用法更简单</p><p>&amp;&amp; 全真则真 有假则假</p><p>真 &amp;&amp; 真 为 真</p><p>假 &amp;&amp; 真 为 假</p><p>真 &amp;&amp; 假 为 假</p><p>假 &amp;&amp; 假 为 假</p><p>|| 有真则真 全假则假</p><p>真 || 真 为 真</p><p>假 || 真 为 真</p><p>真 || 假 为 真</p><p>假 || 假 为 假</p><p>^^、!&amp;、!| 稍微麻烦一些</p><p>^^ 全真则假 全假则假 不同则真</p><p>真 ^^ 真 为 假</p><p>假 ^^ 真 为 真</p><p>真 ^^ 假 为 真</p><p>假 ^^ 假 为 假</p><p>!&amp; 有假则真 全真则假</p><p>真 !&amp; 真 为 假</p><p>假 !&amp; 真 为 真</p><p>真 !&amp; 假 为 真</p><p>假 !&amp; 假 为 真</p><p>!| 有真则假 全假则真</p><p>真 !| 真 为 假</p><p>假 !| 真 为 假</p><p>真 !| 假 为 假</p><p>假 !| 假 为 真</p><h3 id="三元运算符" tabindex="-1">三元运算符 <a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a></h3><p>?</p><p>#</p><p>这就是三元运算符</p><p>三元运算的结构</p><p>逻辑运算 ? 逻辑运算为真的结果 # 逻辑运算为假的结果</p><p>例子如下</p><p>A == 1 ? 2 # 0</p><p>这一句的意思就是</p><p>如果 A 等于 1 那么返回的结果就是 2 ，否则是 0</p><p>这通常要用 IF 语句才能做到，但是有了三元运算符，这将十分简短</p><p>三元运算符的应用</p><p>B = A == 1 ? 2 # 0</p><p>一般就是这么用的</p><p>除了返回整型</p><p>还可以返回字符串型</p><p>@A == 1 ?字符A#字符B@</p><p>返回字符串型的三元运算需要用 @ 围起来</p><p>? 和 # 后的文本是 FORM文本式</p><p>FORM文本式将在之后讲解</p><p>三元运算的嵌套</p><p>A == 1 ?(B == 1 ? 2 #(C == 2 ? 7 # 10))# 0</p><p>就是这样，只要用括号围起来就好了</p><h2 id="内置函数" tabindex="-1">内置函数 <a class="header-anchor" href="#内置函数" aria-hidden="true">#</a></h2><h3 id="存档读档" tabindex="-1">存档读档 <a class="header-anchor" href="#存档读档" aria-hidden="true">#</a></h3><p>有预先编写好的系统指令可以直接调用</p><p>SAVEGAME</p><p>LOADGAME</p><p>大家用一用就知道是个什么东西了</p><p>很方便</p><p>自己写个新的，画面表现更好的存档界面也是可以的</p><h2 id="内置异常" tabindex="-1">内置异常 <a class="header-anchor" href="#内置异常" aria-hidden="true">#</a></h2><h2 id="流程控制" tabindex="-1">流程控制 <a class="header-anchor" href="#流程控制" aria-hidden="true">#</a></h2><h3 id="if-语句" tabindex="-1">IF 语句 <a class="header-anchor" href="#if-语句" aria-hidden="true">#</a></h3><p>之前超基础的东西讲完了，时候运用了</p><p>首先需要注意的是 ERA 所有 指令 包括内置的 变量 都必须使用大写字母书写</p><p>首先是IF语句</p><p>IF语句的基础结构是</p><p>IF 逻辑运算</p><p>ENDIF</p><p>拓展结构是</p><p>IF 逻辑运算</p><p>ELSE</p><p>ENDIF</p><p>IF 逻辑运算</p><p>ELSEIF 逻辑运算</p><p>ELSE</p><p>ENDIF</p><p>其中 ELSEIF 和 ELSE 都可以随意省略</p><p>ELSEIF 可以有无数个 但是 IF 和 ELSE 和 ENDIF 只能有一个</p><p>那么 IF 语句该如何使用呢？</p><p>当 IF 后的逻辑运算为真时就会执行 IF 下的语句</p><p>IF 真</p><p>​ A = 1</p><p>ENDIF</p><p>这个的结果当然就是 IF 为真</p><p>于是 开始执行 IF 下的语句 A = 1</p><p>如果为假就会直接跳到 ENDIF 处， IF 语句就此结束</p><p>IF 假</p><p>​ A = 1</p><p>ELSEIF 真</p><p>​ B = 1</p><p>ENDIF</p><p>现在 IF 为 假了，当然是要跳到 ENDIF 了吧</p><p>啊？结果不是这样吗？</p><p>当然不是</p><p>现在有了 ELSEIF</p><p>且 ELSEIF 的结果 为真</p><p>于是会执行 ELSEIF 下的语句 ， B = 1</p><p>执行完后将会跳往 ENDIF</p><p>IF 假</p><p>​ A = 1</p><p>ELSEIF 假</p><p>​ B = 1</p><p>ELSEIF 真</p><p>​ C = 1</p><p>ENDIF</p><p>有多个 ELSEIF 呢？</p><p>依次执行</p><p>遇到为真的 ELSEIF 则执行其下的语句，执行完后不会跳往下一个 ELSEIF 或者 ELSE 而是直接跳往 ENDIF</p><p>那么 ELSE 又有什么用呢？</p><p>ELSE 是用于 IF 、 ELSEIF 都为假的情况下使用的</p><p>IF 假</p><p>​ A = 1</p><p>ELSEIF 假</p><p>​ B = 1</p><p>ELSEIF 假</p><p>​ C = 1</p><p>ELSE</p><p>​ D = 1</p><p>ENDIF</p><p>在这个情况下 IF ELSEIF 都为假了，就会跳转到 ELSE 执行其下的语句 D = 1</p><p>然后跳转至 ENDIF ， IF 语句结束</p><p>在 IF 中是可以嵌套 IF 的</p><p>IF 假</p><p>​ IF 真</p><p>​ IF 真</p><pre><code>    ENDIF\nELSEIF 假\n    \nELSE\n    IF 真\n    \n    ENDIF\nENDIF\n</code></pre><p>ELSEIF 假 B = 1 ELSEIF 假 C = 1 ELSE IF 真</p><pre><code>ENDIF\n</code></pre><p>ENDIF</p><p>可以随意得套用</p><p>但请注意 IF 与 ENDIF 的对应关系 如果有缺少 ENDIF 就会报错</p><p>SIF 语句</p><p>这条语句是为了结果只有一条语句的情况下使用的，就是为了方便</p><p>SIF 真</p><p>​ A = 1</p><p>SIF 的值为 真</p><p>则会执行下一行 A = 1</p><p>如果为 假 则跳过下一行</p><p>SIF 不能嵌套 SIF ,也不能嵌套 IF 和其他的 分支语句</p><p>但是其他的分支语句可以嵌套 SIF</p><p>需要注意的是，在逻辑运算中，前面的运算判定为 假 ，而后面的运算不可能逆转为真时，后面的运算就不会被执行了</p><p>如</p><p>A = 0</p><p>B = 1</p><p>A == 1 &amp;&amp; B == 1</p><p>因为 A == 1 为假</p><p>所以 b == 1 就不会被计算了</p><p>这通常会用于某些变量的值为某些数，如 负数 时，会报错的情况下，在之前给一个检测这个变量是否是正数，为负数那么后面的就不会执行了，也就避免报错了</p><p>IF 也有一个预处理指令</p><p>[IF_DEBUG]</p><p>​ 这里面的只在DEBUG模式启动时会被读取</p><p>[ENDIF]</p><h3 id="selectcase语句" tabindex="-1">SELECTCASE语句 <a class="header-anchor" href="#selectcase语句" aria-hidden="true">#</a></h3><p>这是非常方便的分支语句，用于对一个变量的大量条件判断</p><p>SELECTCASE 变量</p><p>​ CASE 判断的值</p><pre><code>CASEELSE\n</code></pre><p>ENDSELECT</p><p>其中的 变量 是填需要判断的变量，可以是数字可以是字符串</p><p>判断的值，就是检测 变量的值 是否等于 判断值</p><p>如果变量时 数字 ，判断值就要是数字，如果是 字符串 ，判断值就要是字符串</p><p>CASEELSE 就是 CASE 全都判断为 假 时执行</p><p>CASEELSE 可以省略， CASE 不能省略</p><p>SELECTCASE 与 IF 一样可以嵌套，也可以在 SELECTCASE 中嵌套 IF 等语句</p><p>接下来是举例</p><p>LOCALS &#39;= &quot;ABC&quot;</p><p>SELECTCASE LOCALS</p><p>​ CASE &quot;ABC&quot;,&quot;什么破教程&quot;,&quot;连PRINT都不先讲&quot;</p><p>​ A = 1</p><p>​ CASE &quot;不讲PRINT还做个捷报&quot;</p><p>​ B = 1</p><p>​ CASE &quot;丢人！&quot;</p><p>​ C = 1</p><p>​ CASEELSE</p><p>​ D = 1</p><p>ENDSELECT</p><p>已知 LOCALS 的值为 ABC 了</p><p>那么哪一个小 CASE 那么幸运，会被我抓去煲汤呢？</p><p>恭喜你了，拿着 A = 1 的小 CASE</p><p>那么这个小 CASE 上有很多个字符串 每个字符串都有逗号相隔</p><p>是什么意思呢？</p><p>意思就是 &quot;ABC&quot; || &quot;什么破教程&quot; || &quot;连PRINT都不先讲&quot;</p><p>只要有一个符合条件就为 真</p><p>当有一个 CASE 判定为真了 就会执行这个 CASE 下的语句 然后跳转到 ENDSELECT 结束语句 如果所有 CASE 都为 假 呢？</p><p>自然就是跳到 CASEELSE 了</p><p>之前说了 CASEELSE 可以省略，所以在省略 CASEELSE 的情况下 将会直接跳转到 ENDSELECT 在 CASE 中还有别的特别运算形式</p><p>TO</p><p>IS</p><p>TO 用于数字变量的判断</p><p>CASE 1 TO 5 等值于 CASE 1,2,3,4,5</p><p>IS 是代表变量的值</p><p>CASE IS == 1 || IS == 2 等值于 CASE 1,2</p><h3 id="for-语句" tabindex="-1">FOR 语句 <a class="header-anchor" href="#for-语句" aria-hidden="true">#</a></h3><p>循环语句就是满足条件，就再次执行语句</p><p>FOR 循环的结构</p><p>FOR LOCAL,0,5</p><p>​ PRINTL 啊啊啊啊啊</p><p>NEXT</p><p>FOR 循环需要使用两个逗号，分隔三个参数</p><p>第一参数是循环内将要用到的整型变量</p><p>可以是任何已经声明的整型变量</p><p>这里使用LOCAL</p><p>第二参数是变量的初始值</p><p>在循环开始时，变量将会被赋值为这个初始值</p><p>第三参数是变量的最大值</p><p>当变量等于这个最大值的时候，就会停止循环</p><p>FOR 循环内的那个 PRINTL</p><p>就是把内容输出到画面的语句了</p><p>PRINTL 啊啊啊啊啊</p><p>被执行后 你就可以在画面上看到 啊啊啊啊啊</p><p>那么这个 FOR 循环的结果是什么呢？</p><p>啊啊啊啊啊</p><p>啊啊啊啊啊</p><p>啊啊啊啊啊</p><p>啊啊啊啊啊</p><p>啊啊啊啊啊</p><p>就是五行整整齐齐的 啊啊啊啊啊</p><p>为什么呢？</p><p>当 FOR 循环开始时</p><p>LOCAL = 0</p><p>IF LOCAL &lt; 5</p><p>​ PRINTL 啊啊啊啊啊</p><p>​ LOCAL++</p><p>​ 回到 IF 重新判断</p><p>ELSE</p><p>​ 跳至 NEXT 结束 FOR 循环</p><p>ENDIF</p><p>就是这么个原理</p><p>看不懂就翻回上面再复习！</p><p>FOR 循环中可以嵌套其他任意的语句，但是如果改变 FOR 循环所使用的变量的话，会变得很麻烦，所以请尽量不要改变</p><h3 id="while-语句" tabindex="-1">WHILE 语句 <a class="header-anchor" href="#while-语句" aria-hidden="true">#</a></h3><p>WHILE 循环的结构</p><p>WHILE LOCAL &lt; 5</p><p>WEND</p><p>WHILE 循环看起来就很简单了</p><p>只有一个逻辑运算 这个运算 为真则循环，为假 则跳出</p><p>也不会对改变变量，单纯只是判断而已</p><p>其运行模式是这样的</p><p>IF LOCAL &lt; 5</p><p>​ 回到 IF 重新判断</p><p>ELSE</p><p>​ 跳至 WEND 结束 WHILE 循环</p><p>ENDIF</p><p>WHILE 循环同样可以嵌套任意的语句，但是改变逻辑运算中的变量一样会变得很麻烦，请按需使用</p><h3 id="goto-语句" tabindex="-1">GOTO 语句 <a class="header-anchor" href="#goto-语句" aria-hidden="true">#</a></h3><p>$标签</p><p>GOTO 标签</p><p>标签有个前缀</p><p>$</p><p>在这个符号后的字符将会被设置为标签</p><p>GOTO 标签</p><p>则会跳转到标签所在位置</p><p>注意不要死循环了</p><p>如果跳转到 IF 语句中，则会执行完当前程序块，然后跳转至 ENDIF</p><p>跳转到 CASE 中也是一样</p><p>FOR 中 WHILE 中也都是一样的，并不会开始循环，而是只执行一次</p><p>GOTO 只能在当前函数内跳转，不能跳到函数外</p><p>BREAK</p><p>在循环中常用的指令，意思是立即跳出当前循环，就是直接结束循环了</p><p>CONTINUE</p><p>在循环中常用的指令，意思是立即开始下一次循环，并不会直接结束循环</p><h2 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-hidden="true">#</a></h2><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h3><p>数组是什么？</p><p>就是数组啦~</p><p>哈哈哈哈！</p><p>在ERA中，数组的书写形式是</p><p>A:0 一维数组</p><p>A:0:0 二维数组</p><p>A:0:0:0 三维数组</p><p>: 号就是分隔符</p><p>0 就是数组 索引值，必须是整型</p><p>索引值是可以计算出来的，也可以使用变量</p><p>A:B:(C+1):LOCAL</p><p>可以这样写，有计算如 C+1 必须加括号</p><p>可以说 所有变量都是 一维数组</p><p>其正规书写形式是 A:0</p><p>简写可以是 A</p><p>多维数组不能简写</p><p>索引值为负数或者超过数组长度就会报错</p><p>接下来是数组的重要知识</p><p>(1) ERA中有角色数组和一般数组</p><p>角色数组如</p><p>CFLAG:0:0</p><p>角色数组第一参数是可以省略的</p><p>也就是可以写成 CFLAG:0</p><p>其会被读取为 CFLAG:TARGET:0</p><p>被省略的第一参数会被填补成为 TARGET 这个变量</p><p>(2)</p><p>在CSV文件中，常会定义数组的标签</p><p>如</p><p>BASE:体力</p><p>这个体力就是标签</p><p>体力 根据CSV中的序号，会是相应的值</p><p>但有一种情况，会使标签失效</p><p>#DIM 体力</p><p>就是这样，如果有自定义的变量名跟标签重名的话，就会优先使用变量的值</p><p>#DIM 体力 = 2</p><p>PRINTVW BASE:体力</p><p>如果 体力 的序号是 0 那么现在显示的将不是序号为 0 的 体力 的值，而是序号为 2 的变量的值了 (3)</p><p>不！——知！——道！！！——————————哈哈！！</p><h2 id="输入与输出" tabindex="-1">输入与输出 <a class="header-anchor" href="#输入与输出" aria-hidden="true">#</a></h2><h3 id="输出文本" tabindex="-1">输出文本 <a class="header-anchor" href="#输出文本" aria-hidden="true">#</a></h3><p>终于到了可以见到实质结果的地方了</p><p>是不是已经弃坑了呢？</p><p>没有关系</p><p>从入门到入土就是这么简单</p><p>PRINT 系指令</p><p>PRINT</p><p>PRINTS</p><p>PRINTV</p><p>PRINTFORM</p><p>这四种有什么区别呢？</p><p>PRINT 的后面无论写什么，都是会直接打印到屏幕上的</p><p>PRINTS 后面要写字符串变量，会读取变量的值打印到屏幕上</p><p>PRINTV 跟 PRINTS 一样，不过是打印整型变量</p><p>PRINTFORM 是采用 FORM文本式 打印的指令</p><blockquote><h3 id="form-表达式" tabindex="-1">FORM 表达式 <a class="header-anchor" href="#form-表达式" aria-hidden="true">#</a></h3><p>FOMR文本式临时大补课！</p><p>这个文本式 平常是这样的</p><p>LOCALS = 巴拉巴拉巴拉</p><p>注意使用的赋值运算符是 = 而不是 &#39;=</p><p>那么LOCALS 的值为 巴拉巴拉巴拉</p><p>字符串型变量A &#39;= &quot;强啊！&quot;</p><p>整型变量A = 100</p><p>LOCALS = 巴拉%字符串型变量A%巴拉{整型变量A}巴拉</p><p>这样的话</p><p>结果是什么呢？</p><p>巴拉强啊！巴拉100巴拉</p><p>就是这个了！</p><p>在 FORM文本式 中，用%%圈起来的是字符串变量，用{}圈起来的是整型变量</p><p>就是这样！</p><p>但里面还能有其他的参数</p><p>%&quot;哈&quot;,3%</p><p>这样的话结果就是|哈 |</p><p>注意到 哈 和 | 中的空格了吗？</p><p>里面的参数 3 就是用于对齐的，默认是左对齐，数字是指半角字符数，字符串比数字小，多余的就会被空格填充，前面说到的{}也是一样的可以这么使用</p><p>%&quot;哈&quot;,3,RIGHT%</p><p>看到第三参数了吗？右对齐的意思，如果是 LEFT 就是左对齐，然而并没有 CENTER 可以用，死心吧</p></blockquote><p>那么懂了 PRINT 的基础形式</p><p>接下来该怎么办呢？</p><p>那么就是变体了</p><p>PRINTL</p><p>PRINTSL</p><p>PRINTVL</p><p>PRINTFORML</p><p>有什么不同？后面都加了 L 对吧</p><p>这个是换行的意思</p><p>不加 L 的话</p><p>PRINT 啊</p><p>PRINT 啊</p><p>的输出结果就是</p><p>啊啊</p><p>加了 L 的输出结果就是</p><p>啊</p><p>啊</p><p>明白了吗？</p><p>下一个变体</p><p>PRINTW</p><p>PRINTSW</p><p>PRINTVW</p><p>PRINTFORMW</p><p>L 被换成了 W</p><p>W 是代表一个指令 WAIT</p><p>就是等待，必须要有鼠标点击或者输入字符才会结束等待</p><p>所以</p><p>PRINTW 等待中</p><p>PRINTL 等待结束</p><p>屏幕上会显示等待中，然后就不动了，当你按下鼠标，就会显示 等待结束</p><p>PRINTW 是会换行的</p><p>下一个变体</p><p>PRINTC</p><p>PRINTSC</p><p>PRINTVC</p><p>PRINTFORMC</p><p>那么加了 C 的又是什么呢？</p><p>就是自动对齐了</p><p>对齐的补充值在设置中调整</p><p>默认是右对齐</p><p>如果写成</p><p>PRINTLC 则是左对齐</p><h3 id="输出按钮" tabindex="-1">输出按钮 <a class="header-anchor" href="#输出按钮" aria-hidden="true">#</a></h3><p>会输出文本了，那么怎么输出按钮呢？</p><p>PRINT [0]按钮0</p><p>这样就可以了 在[]中的数字会被当作按钮，让它周围的文本都变成可以按的按钮，直到下一个[]按钮出现或者换行</p><p>而按钮的结果也就是[]中的数字</p><p>但是仅仅如此还是不够的，必须要有能接收按钮返回值的指令</p><p>INPUT</p><p>这样就会进入等待</p><p>按下按钮之后就会执行 INPUT 之后的语句</p><p>同时，一个内置整型变量 RESULT 会发生改变</p><p>它的值会变成按钮返回的值</p><p>按钮[]中的数字是0 RESULT 会变成0，是1就会变成1</p><p>按钮中也可以是负数</p><p>出了这种方法，还有另一种方法</p><p>PRINTBUTTON</p><p>就是这个了！</p><p>PRINTBUTTON &quot;字符串&quot;,0</p><p>第一参数是按钮文本</p><p>第二参数是按钮反馈的值</p><p>使用这个指令也可以做出返回字符串值的按钮</p><p>PRINTBUTTON &quot;字符串&quot;,&quot;返回字符串值&quot;</p><p>但是这样必须要用</p><p>INPUTS</p><p>来接收字符串型的返回值</p><p>这样的话，被复制的变量也不是整型的 RESULT 了</p><p>而是字符串型的</p><p>RESULTS</p><p>那么如果想在 PRINTBUTTON 中引用变量怎么办？</p><p>PRINTBUTTON &quot;字符串&quot;+字符串变量,0</p><p>但是这样只适用于字符串变量</p><p>这时候就需要 @ 这个符号了！</p><p>PRINTBUTTON @&quot;字符串%字符串变量%{整型变量}&quot;,0</p><p>这样就可以将字符串中的文本转换为 FORM文本式 然后读取了</p><p>PRINTBUTTON 是不会换行的，请手动换行</p><p>按钮的使用就到这里了</p><p>但是会做按钮还不够，按钮得有用处</p><p>通常在 INPUT 后会接 IF 等语句来判断接下来要执行的语句</p><p>PRINTL [1] - 前进！</p><p>PRINTL [0] - 怂了！！</p><p>INPUT</p><p>IF RESULT == 0</p><p>​ 啊啊！</p><p>ELSEIF RESULT == 1</p><p>​ 死亡！</p><p>ENDIF</p><p>就是这样嘿！</p><h3 id="输入" tabindex="-1">输入 <a class="header-anchor" href="#输入" aria-hidden="true">#</a></h3><h2 id="函数与方法" tabindex="-1">函数与方法 <a class="header-anchor" href="#函数与方法" aria-hidden="true">#</a></h2><p>非常基础的东西已经讲了很多了，但光知道这些是没办法让ERA读取的</p><p>你非常需要含树…不！我是说函数……</p><h3 id="函数的定义" tabindex="-1">函数的定义 <a class="header-anchor" href="#函数的定义" aria-hidden="true">#</a></h3><p>函数如何定义</p><p>@</p><p>在一行的首字符前加一个 @</p><p>就完成了函数的声明</p><p>函数名不能以数字开头，不能重名，不能是变量名，不能与指令重名</p><p>@新的函数</p><p>PRINTL 在这个函数下就可以随便写了</p><p>PRINTW 想写什么都可以</p><p>PRINT 只要符合语法规范</p><p>PRINTW 就没有问题！</p><h3 id="函数的参数" tabindex="-1">函数的参数 <a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a></h3><p>@新的函数(ARG,ARGS)</p><p>在声明新的函数时，可以在后面加括号，里面写上参数</p><p>这样的话，就可以传值了</p><h4 id="传值与传参" tabindex="-1">传值与传参 <a class="header-anchor" href="#传值与传参" aria-hidden="true">#</a></h4><h5 id="传值" tabindex="-1">传值 <a class="header-anchor" href="#传值" aria-hidden="true">#</a></h5><p>值传递是什么意思呢？</p><p>CALL 新的函数(1,&quot;ABC&quot;)</p><p>现在调用了刚才声明的函数</p><p>于是刚才声明的函数中写上的参数</p><p>ARG 的值就为 1 了</p><p>ARGS 的值就为 ABC 了</p><p>参数是不能省略的</p><p>如果要省略该怎么办呢？</p><p>@新的函数(ARG,ARGS = &quot;ABC&quot;)</p><p>就在声明参数的时候，给初始值</p><p>这样的话，如果在调用时，省略了这个参数，那么这个参数就会是初始值，没有省略，则会被赋值</p><p>看到这里大家一定还有个问题</p><p>ARG 和 ARGS 是什么？</p><p>它们是函数专用的变量，必须在参数中声明才可以使用</p><p>它们是一维数组</p><p>所以具有 ARG:0,ARG:1,ARG:2 等形态可以使用</p><p>其中 ARG:0 等同于 ARG</p><p>ARGS 也是一样的</p><p>顺便一说</p><p>LOCAL LOCALS RESULT RESULTS A B C 等等，内置变量，全都是一维数组</p><p>关于数组，会在之后提到</p><p>在这里还要特别说明 LOCAL LOCALS</p><p>这两个变量是函数专属的，也就是在 A函数 中 LOCAL 为 1 了</p><p>但是在 B函数 中 LOCAL 还是 0</p><p>在不同的函数中， LOCAL 是无法互相改变的，因为 LOCAL 是函数私有的，每个函数都有单独的 LOCAL</p><p>现在</p><p>大家已经懂了很多了</p><p>但是还不不够！</p><p>还要学习如何声明 函数私有变量</p><p>@新的函数(私有变量A,私有变量B)</p><p>#DIM 私有变量A</p><p>#DIMS 私有变量B</p><p>就是这样</p><p>变量必须在函数的开头声明</p><p>#DIM 是声明整型变量</p><p>#DIMS 是声明字符串型变量</p><p>自定义的变量可以在参数中使用</p><p>变量名不能以数字开头，不能是已经存在的变量的名字（与其他函数的私有变量重名没有关系），不能是指令名</p><p>在声明的变量后可以给初始值</p><p>#DIM 变量A = 1</p><p>这样 变量A 的初始值就是 1 了</p><p>但是，这并不是每次调用函数都会把 变量A 的值设为 1</p><p>变量默认是 静态 的</p><p>只有一次初始化</p><p>这代表着下次调用函数，它的值该是什么还是什么</p><p>如果想让变量每次被调用都会初始化该怎么办呢？</p><p>#DIM DYNAMIC 变量A = 1</p><p>就是这样</p><p>同时还有不能改变值的常量</p><p>#DIM CONST 常量A = 1</p><p>这是声明常量，常量必须有初始化的值，也不能再更改</p><p>如何声明数组？</p><p>#DIM 数组,10</p><p>这是声明有 10 个元素的一维数组</p><p>#DIM 数组,10,10</p><p>这是声明有 10*10 个元素的二维数组</p><p>#DIM 数组,10,10,10</p><p>这是声明有 10*10*10 个元素的三维数组</p><p>有四维数组吗？</p><p>没有</p><h5 id="传参" tabindex="-1">传参 <a class="header-anchor" href="#传参" aria-hidden="true">#</a></h5><p>引用传递是什么？</p><p>@函数A</p><p>#DIM 整型变量A</p><p>CALL 函数B(整型变量A)</p><p>@函数B(整型变量B)</p><p>#DIM REF 整型变量B</p><p>现在，可以看到 #DIM 后 有一个 REF</p><p>这就是引用传递的标识</p><p>在 函数B 中改变了 整型变量B ，那么 函数A 中的 整型变量A 也会发生改变</p><p>在调用函数的参数中，放在 REF 变量的位置的变量 必须是变量，而不能是常量</p><p>如果要引用的是数组该怎么办？</p><p>#DIM REF 整型变量B,0</p><p>这是一维数组 可以省略 ,0</p><p>#DIM REF 整型变量B,0,0</p><p>#DIM REF 整型变量B,0,0,0</p><p>数组的长度要设为 0 ，接下来该怎么用就怎么用</p><h3 id="函数的结束与返回" tabindex="-1">函数的结束与返回 <a class="header-anchor" href="#函数的结束与返回" aria-hidden="true">#</a></h3><p>函数的结束是有标准指令的</p><p>RETURN</p><p>执行这个指令的话，就会直接结束当前函数</p><p>其会有一个默认的返回值 0</p><p>然后 RESULT 变量就会变成返回值</p><p>RETURN 0</p><p>RETURN 1</p><p>这样指定返回值 RESULT 会有相应的改变</p><p>RETURN 0,20,37</p><p>也可以指定多个返回值，这样的话会一次对应 RESULT 数组</p><p>RESULT:0 == 0</p><p>RESULT:1 == 20</p><p>RESULT:2 == 37</p><p>返回值也可以是字符串型</p><p>RETURN &quot;ABC&quot;</p><p>会存入 RESULTS</p><p>同样可以返回数组</p><p>整型和字符串型无法同时返回</p><p>不写 RETURN 的话</p><p>在函数的最末位默认就是 RETURN</p><p>RESTART</p><p>重新开始函数，就是返回函数开头</p><p>但是这个指令并不会导致自定义变量被初始化</p><p>请注意使用，避免死循环</p><h3 id="函数的调用" tabindex="-1">函数的调用 <a class="header-anchor" href="#函数的调用" aria-hidden="true">#</a></h3><p>如何调用函数？</p><p>@新的函数B</p><p>@新的函数A</p><p>CALL 新的函数B</p><p>这样就在 新的函数A 中调用 新的函数B 了</p><p>CALL 语句，就是用来调用函数的</p><p>如果函数不存在的话就会报错</p><p>因此有变体如下</p><p>TRYCALL 尝试调用，函数不存在就什么也不做</p><p>CALL 指令还有别的变体</p><p>CALLFORM 函数名可以用 FORM文本式 来指定</p><p>TRYCALLFORM TRY 尝试调用</p><p>TRYCCALL</p><p>​ 函数存在时，在执行完函数之后会执行这里的语句</p><p>CATCH</p><p>​ 函数不存在会执行这里的语句</p><p>ENDCATCH</p><p>发现了吗？多了一个C,就是如上的解释了，同样有 TRYCCALLFORM</p><h3 id="方法（式中函数）" tabindex="-1">方法（式中函数） <a class="header-anchor" href="#方法（式中函数）" aria-hidden="true">#</a></h3><p>@方法A</p><p>#FUNCTION</p><p>RETURNF 0</p><p>在函数的第一行写上</p><p>#FUNCTION</p><p>就声明了一个方法</p><p>方法的结束不是 RETURN 而是 RETURNF ,不要用错</p><p>方法的返回值只有一个，不能返回数组</p><p>;返回类型</p><p>如果第一行写的是 #FUNCTION 则返回类型是整型，如果写的是 #FUNCTIONS 则返回类型是字符串型</p><p>方法该如何使用呢？</p><p>方法常用于条件判断中</p><p>@今天下雨了</p><p>#FUNCTION</p><p>RETURNF 1</p><p>@MAIN</p><p>IF 今天下雨了() == 1</p><p>​ PRINTL 今天下雨了</p><p>ENDIF</p><p>在使用方法时，在方法名后加上括号，来区分变量与方法</p><p>然后判断方法返回的值</p><p>上面声明的方法中 RETURNF 1 所以返回值是 1</p><p>那么条件成立</p><p>在屏幕上打印了 今天下雨了</p><p>函数也是与函数一样可以有参数的,声明方法、使用方法也是一样的，而且方法的参数比函数的参数要重要得多</p><p>@今天下雨了(星期几)</p><p>#FUNCTION</p><p>#DIMS 星期几</p><p>SELECTCASE 星期几</p><p>​ CASE &quot;星期一&quot;</p><p>​ RETURNF 1</p><p>​ CASE &quot;星期二&quot;</p><p>​ RETURNF 0</p><p>​ CASE &quot;星期三&quot;</p><p>​ RETURNF 1</p><p>​ CASE &quot;星期四&quot;</p><p>​ RETURNF 0</p><p>​ CASE &quot;星期五&quot;</p><p>​ RETURNF 1</p><p>CASE &quot;星期六&quot;</p><p>​ RETURNF 0</p><p>​ CASE &quot;星期日&quot;</p><p>​ RETURNF 1</p><p>ENDSELECT</p><p>RETURNF 0</p><p>@MAIN</p><p>IF 今天下雨了(&quot;星期一&quot;) == 1</p><p>​ PRINTL 今天下雨了</p><p>ELSE</p><p>​ PRINTL 今天没下雨</p><p>ENDIF</p><p>看懂了吗？</p><p>没有看懂就去复习吧！</p><p>方法可以在任何一个变量能出现的地方出现</p><p>PRINTFORM %字符串变量A%哇%字符串方法()%！</p><p>这样的话，在字符串方法的位置，就会打印出这个方法返回的字符串</p><h2 id="书写规范" tabindex="-1">书写规范 <a class="header-anchor" href="#书写规范" aria-hidden="true">#</a></h2><p>编写代码请规范书写</p><p>A = 1 + 1</p><p>看到了吗？嫦娥？</p><p>……</p><p>不不不，是看到了吗？每个符号间都有空格</p><p>这就是书写规范</p><p>IF 真</p><p>​ IF 真</p><p>​ A = 1 + 1</p><p>​ ENDIF</p><p>ENDIF</p><p>看到了吗？</p><p>语句嵌套一定要写制表符在前面</p><p>制表符就是按 TAB 键之后写出的很长的空格</p><h1 id="emuera-使用说明" tabindex="-1">Emuera 使用说明 <a class="header-anchor" href="#emuera-使用说明" aria-hidden="true">#</a></h1><h2 id="概述-1" tabindex="-1">概述 <a class="header-anchor" href="#概述-1" aria-hidden="true">#</a></h2><p>Emuera是Eramaker的重写版本，延续了Eramaker时代的eramaker basic（ERB）语法和启动流程，并在其基础上进行了扩展。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="文件类型" tabindex="-1">文件类型 <a class="header-anchor" href="#文件类型" aria-hidden="true">#</a></h2><h3 id="erh文件" tabindex="-1">ERH文件 <a class="header-anchor" href="#erh文件" aria-hidden="true">#</a></h3><p>ERH文件是用来声明自定义广域变量的</p><p>;一般的静态变量，可以给初始值也可以不给</p><p>#DIM 变量 = 0</p><p>;常量</p><p>#DIM CONST 常量 = 0</p><p>;会被存档保存的静态变量，一半的静态变量是不会被保存的，可以给初始值也可以不给</p><p>#DIM SAVEDATA 可以存档的变量</p><p>;可以存入GLOBAL存档的变量</p><p>#DIM GLOBAL 存入GLOBAL存档的变量</p><p>声明数组的话与之前的函数声明数组是一样的</p><p>#DIM 一维数组,10</p><p>#DIM 二维数组,10,10</p><p>#DIM 三维数组,10,10,10</p><p>可以给一维数组设定初始值</p><p>#DIM 一维数组 = 1,2,35,7,89,45</p><p>#DIMS 一维数组 = &quot;a&quot;,&quot;awg&quot;,&quot;165&quot;,&quot;好强啊！&quot;</p><p>设定的数量就是数组的长度</p><p>括号可以这样用，在括号里的就会被认为是一句</p><p>{</p><p>#DIMS 一维数组 = &quot;jtyj&quot;</p><p>,&quot;wga&quot;</p><p>,&quot;drjdryk&quot;</p><p>,&quot;rtjrtj&quot;</p><p>}</p><h4 id="宏" tabindex="-1">宏 <a class="header-anchor" href="#宏" aria-hidden="true">#</a></h4><p>不是很想讲宏</p><p>因为我很少用</p><p>宏也不复杂</p><p>#DEFINE 一个宏 5</p><p>#DEFINE 二个宏 &quot;字符串&quot;</p><p>#DEFINE 麻烦的宏 5 + 5</p><p>#DEFINE 超级麻烦的宏 麻烦的宏 + 麻烦的宏</p><p>A = 一个宏 展开为 A = 5</p><p>LOCALS &#39;= 二个宏 展开为 LOCALS &#39;= &quot;字符串&quot;</p><p>A = 麻烦的宏 展开为 A = 5 + 5</p><p>A = 超级麻烦的宏 展开为 A = 麻烦的宏 + 麻烦的宏 展开为 A = 5 + 5 + 5 + 5</p><p>宏的概念就是这样了</p><p>在应用中熟练吧，不用的话也不需要看更多细节了</p><p>最后，请注意ERH文件的读取顺序</p><h3 id="csv文件" tabindex="-1">CSV文件 <a class="header-anchor" href="#csv文件" aria-hidden="true">#</a></h3><p>CSV文件很简单，可以去任何ERA游戏中复制，然后在里面改数据，非常简单，不需要教的 还是教一教吧……</p><p>如</p><h4 id="base-csv" tabindex="-1">BASE.CSV <a class="header-anchor" href="#base-csv" aria-hidden="true">#</a></h4><p>0,体力</p><p>1,气力</p><p>……</p><p>……</p><p>……</p><p>第一个数字就是编号，第二个字符串就是标签</p><p>BASE:角色编号:体力 将会索引到 0</p><p>就是这样</p><p>有个特例</p><h4 id="item-csv" tabindex="-1">ITEM.CSV <a class="header-anchor" href="#item-csv" aria-hidden="true">#</a></h4><p>0,标签,价格</p><p>有个没有标签</p><h4 id="str-csv" tabindex="-1">STR.CSV <a class="header-anchor" href="#str-csv" aria-hidden="true">#</a></h4><p>0,字符串</p><p>STR的字符串就是这个序号的值了</p><p>因此没有</p><p>STR:字符串 这种用法</p><p>只能 STR:0</p><h4 id="rename-csv" tabindex="-1">_Rename.CSV <a class="header-anchor" href="#rename-csv" aria-hidden="true">#</a></h4><p>这个不好用</p><p>太久没用</p><p>都忘了</p><p>大致是</p><p>变量,标签</p><p>TALENT:10,麻烦</p><p>使用的时候</p><p>[麻烦] 就是 TALENT:10 了</p><h4 id="replace-csv" tabindex="-1">_Replace.CSV <a class="header-anchor" href="#replace-csv" aria-hidden="true">#</a></h4><p>很多初始化的东西</p><p>自己看着调</p><p>起動時簡略表示 , 少女折寿中……</p><p>这个比较重要，载入的时候显示的文字</p><h4 id="gamebase-csv" tabindex="-1">GameBase.CSV <a class="header-anchor" href="#gamebase-csv" aria-hidden="true">#</a></h4><p>里面主要写 作品名 版本 制作年 作者 注释 之类的东西 如果自己写函数入口的话，有一些是没有用的，但是版本 作品名还是有用的 ，还可以设置存档版本，不同版本存档会被禁止使用</p><h4 id="variablesize-csv" tabindex="-1">VariableSize.CSV <a class="header-anchor" href="#variablesize-csv" aria-hidden="true">#</a></h4><p>这个是很重要的文件，里面初始化了系统默认变量的长度</p><p>按需设置，节省内存</p><p>有一些CSV有很多连带的变量名</p><p>如BASE</p><p>就有</p><p>BASE</p><p>DOWNBASE</p><p>MAXBASE</p><p>BASENAME</p><p>Chara.CSV</p><p>角色数据文件</p><p>创建角色的时候就是调用这里的文件</p><p>里面可以设置各种角色变量的初始化</p><p>PALAM.CSV和JUEL.CSV有连带关系</p><p>两者的序号和标签要一样，不然会有很麻烦的事情</p><p>更多的就需要各位自己使用，自己总结经验，因为都是写细小砸碎的东西，要写出来很麻烦很麻烦，还写不全</p><h4 id="csv文件变量的使用和概念" tabindex="-1">CSV文件变量的使用和概念 <a class="header-anchor" href="#csv文件变量的使用和概念" aria-hidden="true">#</a></h4><p>CSV文件所表示的变量有些是角色变量，有些不是</p><p>如 BASE、TALENT、CFLAG、CSTR 等就是角色变量，都是可以省略第一参数的</p><p>那么这些变量都有什么用呢？</p><p>可以做任何用</p><p>变量是没有固定的用法的，请一定牢记在心</p><p>你可以用 CFLAG 来填素质，也可以用 TALENT 来填体力</p><p>因为它们只是 一个数值，关键是你怎么用它们</p><p>而它们的名称告诉了你，怎么用最好，所以 CLFAG 是用来给人物 插旗（雾）的，TALENT 是表示人物的素质的</p><p>BASE 则是表示一些基础属性的</p><p>他们还有一些连带的变量名</p><p>几乎每一个变量都有一个 NAME 变量</p><p>CFLAGNAME:序号</p><p>BASENAME:序号</p><p>TALENTNAME:序号</p><p>……</p><p>……</p><p>这些变量返回的是后接序号的标签名</p><p>还有一些很重要的</p><p>NAME:角色编号</p><p>CALLNAME:角色编号</p><p>就是人物的全名和昵称</p><p>但是有一些让你无法这么自由地使用</p><p>如 TFLAG,TEQUIP</p><p>这玩意的数值会在进入 BEGIN TRAIN 流程时被重置为 0</p><p>而流程是什么？请向后阅览</p><h2 id="era游戏结构和流程" tabindex="-1">ERA游戏结构和流程 <a class="header-anchor" href="#era游戏结构和流程" aria-hidden="true">#</a></h2><p>要写ERA游戏的话就要清楚其结构和流程，虽然可以自己写一个函数流程，不过了解流程，还是比较重要的，</p><p>在游戏最初会有一个函数入口</p><p>@SYSTEM_TITLE</p><p>这个函数如果没有自己编写的话</p><p>就会使用系统默认的</p><p>接下来是例子</p><p>@SYSTEM_TITLE</p><p>ALIGNMENT CENTER</p><p>DRAWLINEFORM -- - -- - - -</p><p>DRAWLINEFORM ♩♪♫♬♫♪♩✙</p><p>DRAWLINEFORM - - - - - -</p><p>SETCOLOR 青色</p><p>PRINT ♂</p><p>RESETCOLOR</p><p>PRINT era红魔馆NTR++</p><p>SETCOLOR 品红色</p><p>PRINTL ♀</p><p>RESETCOLOR</p><p>PRINTL 版本:0.010</p><p>PRINTL 制作人：甜艮菜</p><p>PRINTL 制作时间：ⓒ 2018年4月15日 - 2018年</p><p>PRINTL</p><p>PRINT ※这是以era紅魔館protoNTR和eraTW以及其他可能存在但没能列出的作品为参考的作品</p><p>DRAWLINEFORM -- - -- - - -</p><p>DRAWLINEFORM - - - - - -</p><p>PRINTL [0] 新游戏</p><p>PRINTL [1] 旧存档</p><p>INPUT</p><p>IF RESULT == 0</p><p>​ BEGIN FIRST</p><p>ELSEIF RESULT == 1</p><p>​ ALIGNMENT LEFT</p><p>​ LOADGAME</p><p>​ RESTART</p><p>ELSE</p><p>​ RESTART</p><p>ENDIF</p><p>直接拿自己的代码做例子了</p><p>ALIGNMENT 是指对齐方式 CENTER 就是居中，之后打印的所有文本都会以居中的方式显示，除此之外还有 LEFT、RIGHT</p><p>DRAWLINEFORM 会循环后面填的字符，画一行线，因此还有原版指令 DRAWLINE ，是用 - 画一条线</p><p>SETCOLOR 设置接下来打印的文字的颜色，参数是 十六进制颜色码 0xFFFFFF ，例子中我使用的是 青色 ，系统中并没有这个变量，这是在 ERH文件 中声明好的</p><p>选择 旧存档就会改变对齐方式为左对齐然后进入 LOADGAME ，如果没有读取存档就会执行 RESTART</p><p>补充一个指令</p><p>字体变粗体</p><p>FONTBOLD</p><p>字体复原</p><p>FONTREGULAR</p><p>同样还有变斜体，请上储备库查阅</p><p>选择新游戏，就会使用流程控制语句 进入新的流程</p><h3 id="begin-流程控制语句" tabindex="-1">BEGIN 流程控制语句 <a class="header-anchor" href="#begin-流程控制语句" aria-hidden="true">#</a></h3><p>BEGIN 是用来跳转流程的，并且有其规则，在规则之外跳转是会报错的</p><p>正常流程如下</p><p>;进入 EVENTFIRST 函数</p><p>BEGIN FIRST</p><p>EVENTFIRST 函数主要用来初始化，如新建角色等</p><p>接着在 EVENTFIRST 的末尾</p><p>;进入 SHOW_SHOP 函数 如果读取了存档也会进入 SHOP 流程</p><p>BEGIN SHOP</p><p>SHOW_SHOP 是商店页面，系统默认会在这里利用ITEM.CSV的数据来买东西，所以叫商店页面，但是在这里你可以跟系统反着来，你可以随便编写你想要的界面</p><p>如 eraTW 中，一开始的能调选项的那个的界面就是 SHOW_SHOP 函数绘制的</p><p>在这个函数中常常会用来初始化、改变选项、查看信息等</p><p>在 SHOW_SHOP 的末尾 需要绘制按钮</p><p>如</p><p>PRINTL [100] - 睁眼</p><p>为什么呢？</p><p>因为在 SHOW_SHOP 结束后会跳转至 USERSHOP 函数</p><p>这个函数自带一个 INPUT</p><p>所以会在这个函数中写 按钮的结果</p><p>IF RESULT == 100</p><p>​ BEGIN TRAIN</p><p>ENDIF</p><p>重点来了</p><h3 id="进入-show-status-函数-调教流程" tabindex="-1">进入 SHOW_STATUS 函数 调教流程 <a class="header-anchor" href="#进入-show-status-函数-调教流程" aria-hidden="true">#</a></h3><p>BEGIN TRAIN</p><p>在 eraTW 中 你平时活动的界面就是由 SHOW_STATUS 绘制的 ，在 魔王 等作品中，调教的界面就是由 SHOW_STATUS 绘制的</p><p>在 SHOW_STATUS 结束后会跳转至 SHOW_USERCOM 函数</p><p>在这个函数中，系统会自动绘制 COM 选项，也就是在 TRAIN.CSV 中设定的选项</p><p>这个绘制流程会经过 COM_ABLE{TRAIN编号} 函数 这个函数的返回值将会决定选项是否会被绘制，返回值为 0 不会被绘制，为 1 会被绘制</p><p>你也可以自己写一个绘制流程， eraTW 便是自己编写的绘制流程</p><p>当 SHOW_USERCOM 函数结束后会跳转至 USERCOM 函数，这个函数跟 USERSHOP 函数一样自带一个 INPUT</p><p>选项的结果将在这个函数中被判断和执行</p><p>执行的函数会是 COM{TRAIN编号} ！此处存疑，因为我长期使用自己编写的流程，所以已经忘记这部分细节的系统流程是什么样的了</p><p>也许是 CALL COM{TRAIN编号}，也许是 DOTRAIN TRAIN编号，也许根本没有调用</p><p>结束后将会返回 SHOW_STATUS 函数，进行循环操作，直到跳转至其他的流程</p><p>需要了解的是</p><p>使用 DOTRAIN 指令执行调教指令首先会初始化UP、DOWN等变量，代入 SELECTCOM 的参数（ SELECTCOM 的参数就是选择的TRAIN编号）</p><p>跳转至 EVENTCOM 函数，执行完后跳转至 COM{TRAIN编号} 函数，执行完后跳转至</p><p>SOURCE_CHECK 函数，执行完后跳转至 EVENTCOMEND 函数，执行完后返回 SHOW_STATUS 函数</p><p>红魔馆protoNTR 就是采用的这种方式，但略有修改</p><p>我则采用了另一种方式，也就是自己写入 SELECTCOM 参数， 手动 CALL SOURCE_CHECK 函数的方式</p><p>而 SOURCE_CHECK 常用于结算选项的结果 比如好感度上升了多少啊，经验上升了多少之类的，还有口上的显示等等</p><p>返回 SHOW_STATUS 函数之后 CUP、DOWNBASE 等变量都会被自动初始化为0 ，如果 SOURCE 变量没有被自动重置为 0 ，是推荐手动写一个函数重置为 0 的</p><p>除非你要留着 SOURCE 变量另作他用</p><p>有一些选项自然会用来进入下一个流程，一般就是 休息、睡觉 等</p><p>;进入 EVENTEND 函数</p><p>BEGIN AFTERTRAIN</p><p>EVENTEND 函数一般是用于结算的函数，但是也可以写任何想写的东西</p><p>;进入 SHOW_JUEL 函数</p><p>在末尾 BEGIN ABLUP</p><p>SHOW_JUEL 函数是用来显示 珠 的函数，看函数名就知道了，但是你也可以不在这里显示 珠 ，但通常还是用来处理 珠 的数据</p><p>SHOW_JUEL 函数结束后会跳转至 SHOW_ABLUP_SELECT 函数，这个函数起初是用来选择提升哪项能力的，如 魔王 ，然而 eraTW 和 红N 并不这么做，你也可以随便写你想写的</p><p>SHOW_ABLUP_SELECT 结束后会跳转至 USERABLUP 函数 同样是一个自带 INPUT 的函数，本是用来处理之前选择要提升的能力的，你可以随便写你想写的</p><p>总有一个选项要跳出这个流程</p><p>;进入 EVENTTURNEND 函数</p><p>BEGIN TURNEND</p><p>EVENTTURNEND 函数是最后一个函数，写一点结算之类的东西吧，什么也不写也可以吧，总之在最后请务必写上</p><p>BEGIN SHOP</p><p>回到商店页面吧，这样就完成了一个游戏周期了</p><p>接下来会不停循环，直到你退出游戏。</p><h1 id="尾声" tabindex="-1">尾声 <a class="header-anchor" href="#尾声" aria-hidden="true">#</a></h1><p>到这里就结束了，作为基础教程，大概是把能讲的都讲了，利用这些知识，基本上能写出一个简单的ERA游戏了</p><p>努力成为一个ERA游戏的作者吧，无论是做和谐的游戏，还是做和谐的游戏，都是可以的</p><p>将来有机会和兴趣，我会编写一个更加详细的拓展教程</p><p>本教程呢，因为是基础教程</p><p>所以有大量的指令不被提及讲解，想要了解更多指令，请移步储备库，搜索指令，另说，指令一般都有其相应的方法可以使用，请留意</p><p>注意到最开头的 [SKIPSTART] 和最末尾的 [SKIPEND] 了吗？ 如果读取到 [SKIPSTART] 就会跳过之后的内容直到遇见 [SKIPEND] ~~</p><p>最后的最后，注意到 ; 符号了吗？ 这是注释符 在 ; 号后的内容都不会被读取 但是如果在 PRINT 指令后就会被当成文本了</p><p>[SKIPEND]</p><h2 id="术语表" tabindex="-1">术语表 <a class="header-anchor" href="#术语表" aria-hidden="true">#</a></h2><h3 id="启动模式" tabindex="-1">启动模式 <a class="header-anchor" href="#启动模式" aria-hidden="true">#</a></h3><h4 id="普通模式" tabindex="-1">普通模式 <a class="header-anchor" href="#普通模式" aria-hidden="true">#</a></h4><h4 id="解释模式" tabindex="-1">解释模式 <a class="header-anchor" href="#解释模式" aria-hidden="true">#</a></h4><h4 id="调试模式" tabindex="-1">调试模式 <a class="header-anchor" href="#调试模式" aria-hidden="true">#</a></h4><h3 id="窗口与对话框（window-dialogue）" tabindex="-1">窗口与对话框（Window &amp; Dialogue） <a class="header-anchor" href="#窗口与对话框（window-dialogue）" aria-hidden="true">#</a></h3><h4 id="主窗口（mainwindow）" tabindex="-1">主窗口（MainWindow） <a class="header-anchor" href="#主窗口（mainwindow）" aria-hidden="true">#</a></h4><h4 id="主控台（mainconsole）" tabindex="-1">主控台（MainConsole） <a class="header-anchor" href="#主控台（mainconsole）" aria-hidden="true">#</a></h4><h4 id="调试窗口（debugwindow）" tabindex="-1">调试窗口（DebugWindow） <a class="header-anchor" href="#调试窗口（debugwindow）" aria-hidden="true">#</a></h4><h4 id="调试控制台（debugconsole）" tabindex="-1">调试控制台（DebugConsole） <a class="header-anchor" href="#调试控制台（debugconsole）" aria-hidden="true">#</a></h4><h4 id="设定对话框（settingdialogue）" tabindex="-1">设定对话框（SettingDialogue） <a class="header-anchor" href="#设定对话框（settingdialogue）" aria-hidden="true">#</a></h4><h4 id="剪贴板对话框（clipboarddialogue）" tabindex="-1">剪贴板对话框（ClipBoardDialogue） <a class="header-anchor" href="#剪贴板对话框（clipboarddialogue）" aria-hidden="true">#</a></h4><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-hidden="true">#</a></h3><h4 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-hidden="true">#</a></h4><h4 id="函数-1" tabindex="-1">函数 <a class="header-anchor" href="#函数-1" aria-hidden="true">#</a></h4><h4 id="事件函数" tabindex="-1">事件函数 <a class="header-anchor" href="#事件函数" aria-hidden="true">#</a></h4><h4 id="预处理器（processor）" tabindex="-1">预处理器（Processor） <a class="header-anchor" href="#预处理器（processor）" aria-hidden="true">#</a></h4><h4 id="属性（预处理器（processor））" tabindex="-1">属性（预处理器（Processor）） <a class="header-anchor" href="#属性（预处理器（processor））" aria-hidden="true">#</a></h4><h4 id="定义（预处理器（processor））" tabindex="-1">定义（预处理器（Processor）） <a class="header-anchor" href="#定义（预处理器（processor））" aria-hidden="true">#</a></h4><h3 id="行" tabindex="-1">行 <a class="header-anchor" href="#行" aria-hidden="true">#</a></h3>',1011)];r.render=function(a,i,r,l,d,t){return p(),e("div",null,h)};export{i as __pageData,r as default};
