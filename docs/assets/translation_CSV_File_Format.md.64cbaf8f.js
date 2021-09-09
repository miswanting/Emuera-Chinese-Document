import{o as a,c as e,a as s}from"./app.b380940c.js";const n='{"title":"Eramaker 的 CSV 文件格式","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本信息","slug":"基本信息"},{"level":3,"title":"关于CSV文件","slug":"关于csv文件"},{"level":3,"title":"如何编写CSV文件","slug":"如何编写csv文件"},{"level":2,"title":"每个文件的格式","slug":"每个文件的格式"},{"level":3,"title":"GameBase.csv的格式","slug":"gamebase-csv的格式"},{"level":3,"title":"Palam.csv的格式","slug":"palam-csv的格式"},{"level":3,"title":"Abl.csv的格式","slug":"abl-csv的格式"},{"level":3,"title":"Talent.csv的格式","slug":"talent-csv的格式"},{"level":3,"title":"Mark.csv的格式","slug":"mark-csv的格式"},{"level":3,"title":"Exp.csv的格式","slug":"exp-csv的格式"},{"level":3,"title":"Train.csv的格式","slug":"train-csv的格式"},{"level":3,"title":"Item.csv的格式","slug":"item-csv的格式"},{"level":3,"title":"Str.csv的格式","slug":"str-csv的格式"},{"level":3,"title":"CharaXX.csv的格式","slug":"charaxx-csv的格式"}],"relativePath":"translation/CSV_File_Format.md","lastUpdated":1631164121500}',t={},c=[s('<h1 id="eramaker-的-csv-文件格式" tabindex="-1">Eramaker 的 CSV 文件格式 <a class="header-anchor" href="#eramaker-的-csv-文件格式" aria-hidden="true">#</a></h1><blockquote><p>翻译自原文档：<a href="http://cbaku.com/b/erakanon/eramacsv.html" target="_blank" rel="noopener noreferrer">http://cbaku.com/b/erakanon/eramacsv.html</a></p></blockquote><h2 id="基本信息" tabindex="-1">基本信息 <a class="header-anchor" href="#基本信息" aria-hidden="true">#</a></h2><h3 id="关于csv文件" tabindex="-1">关于CSV文件 <a class="header-anchor" href="#关于csv文件" aria-hidden="true">#</a></h3><p>在<code>eramaker.exe</code>旁直接创建一个名为<code>CSV</code>的文件夹。</p><p>CSV文件包含以下项目：</p><table><thead><tr><th style="text-align:left;">文件名称</th><th>文件说明</th></tr></thead><tbody><tr><td style="text-align:left;">GameBase.csv</td><td>注册游戏的基本数据。</td></tr><tr><td style="text-align:left;">Palam.csv</td><td>注册训练时的参数（快乐C、痛苦、反感等）。</td></tr><tr><td style="text-align:left;">Abl.csv</td><td>注册你的能力(V感、仆从心、受虐狂等)。</td></tr><tr><td style="text-align:left;">Talent.csv</td><td>注册品质（懦弱、自制、快速恢复等）。</td></tr><tr><td style="text-align:left;">Mark.csv</td><td>注册你的印记（快乐印记、羞辱印记等）。</td></tr><tr><td style="text-align:left;">Exp.csv</td><td>注册你的经验（V经历、手淫经历等）。</td></tr><tr><td style="text-align:left;">Train.csv</td><td>注册训练命令（舔阴、口交、鞭子等）。</td></tr><tr><td style="text-align:left;">Item.csv</td><td>注册物品（振动器、针等）。</td></tr><tr><td style="text-align:left;">Str.csv</td><td>注册各种句子，以便在游戏中使用。</td></tr><tr><td style="text-align:left;">CharaXX.csv</td><td>注册你的角色的初始数据，从Chara00.csv到Chara99.csv。</td></tr></tbody></table><h3 id="如何编写csv文件" tabindex="-1">如何编写CSV文件 <a class="header-anchor" href="#如何编写csv文件" aria-hidden="true">#</a></h3><p>在所有的CSV文件中，</p><ul><li>如果第一列中的第一个字符是半角分号<code>;</code>，则该行将被忽略。空行也会被忽略。</li></ul><p>如：</p><div class="language-csv"><pre><code><span class="token value">;体力和精神力的设置</span>\n<span class="token value">基本</span><span class="token punctuation">,</span><span class="token value">0</span><span class="token punctuation">,</span><span class="token value">2000</span>\n<span class="token value">基本</span><span class="token punctuation">,</span><span class="token value">1</span><span class="token punctuation">,</span><span class="token value">000</span>\n\n<span class="token value">;能力的设定</span>\n<span class="token value">能力</span><span class="token punctuation">,</span><span class="token value">0</span><span class="token punctuation">,</span><span class="token value">2</span>\n</code></pre></div><ul><li>如果你用<code>&quot;&quot;</code>包住字符串，它就不能正常工作，OpenOffice和其他程序似乎默认就有这个特性。</li></ul><div class="tip custom-block"><p class="custom-block-title">正确</p><div class="language-"><pre><code>0,服从\n1,欲望\n2,技能\n</code></pre></div></div><div class="warning custom-block"><p class="custom-block-title">错误</p><div class="language-csv"><pre><code><span class="token value">0</span><span class="token punctuation">,</span><span class="token value">&quot;服从&quot;</span>\n<span class="token value">1</span><span class="token punctuation">,</span><span class="token value">&quot;欲望&quot;</span>\n<span class="token value">2</span><span class="token punctuation">,</span><span class="token value">&quot;技能&quot;</span>\n</code></pre></div></div><p>设置方法请参考您的电子表格软件的帮助。</p><h2 id="每个文件的格式" tabindex="-1">每个文件的格式 <a class="header-anchor" href="#每个文件的格式" aria-hidden="true">#</a></h2><h3 id="gamebase-csv的格式" tabindex="-1"><code>GameBase.csv</code>的格式 <a class="header-anchor" href="#gamebase-csv的格式" aria-hidden="true">#</a></h3><p>在第一列中写入指令，在第二列和后续列中写入数据。</p><h4 id="游戏代号-game-id" tabindex="-1">游戏代号(Game ID) <a class="header-anchor" href="#游戏代号-game-id" aria-hidden="true">#</a></h4><p>设置代表游戏的代号，用来防止意外加载其他游戏的保存数据。可以设置是你喜欢的任何数值。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">コード</span><span class="token punctuation">,</span><span class="token value">&lt;number&gt;</span>\n</code></pre></div><p>如：（当前游戏代号为123456）</p><div class="language-csv"><pre><code><span class="token value">コード</span><span class="token punctuation">,</span><span class="token value">123456</span>\n</code></pre></div><h4 id="游戏版本-game-version" tabindex="-1">游戏版本(Game Version) <a class="header-anchor" href="#游戏版本-game-version" aria-hidden="true">#</a></h4><p>设置游戏版本。运行时显示的值为此处设定值除以1000后的结果。</p><p>即此处设置100即代表版本号为0.10。</p><p>设置1即代表版本号为0.001。</p><p>初始化时，保存在不同版本中的数据将不会被加载。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">バージョン</span><span class="token punctuation">,</span><span class="token value">&lt;number&gt;</span>\n</code></pre></div><p>如：（当前游戏版本为54.321）</p><div class="language-csv"><pre><code><span class="token value">バージョン</span><span class="token punctuation">,</span><span class="token value">54321</span>\n</code></pre></div><h4 id="游戏标题-game-title" tabindex="-1">游戏标题(Game Title) <a class="header-anchor" href="#游戏标题-game-title" aria-hidden="true">#</a></h4><p>设置游戏标题。</p><p>游戏标题将在游戏启动时显示。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">タイトル</span><span class="token punctuation">,</span><span class="token value">&lt;string&gt;</span>\n</code></pre></div><p>如：（设置游戏标题为“光之美少女”）</p><div class="language-csv"><pre><code><span class="token value">タイトル</span><span class="token punctuation">,</span><span class="token value">光之美少女</span>\n</code></pre></div><h4 id="游戏作者-game-author" tabindex="-1">游戏作者(Game Author) <a class="header-anchor" href="#游戏作者-game-author" aria-hidden="true">#</a></h4><p>设置游戏作者。</p><p>游戏作者将在游戏启动时显示。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">作者</span><span class="token punctuation">,</span><span class="token value">&lt;string&gt;</span>\n</code></pre></div><p>如：（设置游戏作者为“美少女”）</p><div class="language-csv"><pre><code><span class="token value">作者</span><span class="token punctuation">,</span><span class="token value">美少女</span>\n</code></pre></div><h4 id="制作年份" tabindex="-1">制作年份 <a class="header-anchor" href="#制作年份" aria-hidden="true">#</a></h4><p>设置游戏制作年份。</p><p>游戏制作年份将在游戏启动时显示。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">製作年</span><span class="token punctuation">,</span><span class="token value">&lt;string&gt;</span>\n</code></pre></div><p>如：（设置游戏制作年份为2021）</p><div class="language-csv"><pre><code><span class="token value">製作年</span><span class="token punctuation">,</span><span class="token value">2021</span>\n</code></pre></div><h4 id="附加信息" tabindex="-1">附加信息 <a class="header-anchor" href="#附加信息" aria-hidden="true">#</a></h4><p>设置游戏附加信息。</p><p>游戏附加信息将在游戏启动时显示。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">追加情報</span><span class="token punctuation">,</span><span class="token value">&lt;string&gt;</span>\n</code></pre></div><p>如：（设置游戏附加信息为“作者是美少女。”）</p><div class="language-csv"><pre><code><span class="token value">追加情報</span><span class="token punctuation">,</span><span class="token value">作者是美少女。</span>\n</code></pre></div><h4 id="默认训练角色" tabindex="-1">默认训练角色 <a class="header-anchor" href="#默认训练角色" aria-hidden="true">#</a></h4><blockquote><p><code>默认训练角色</code>原文为<code>最初からいるキャラ</code>，即<code>从最初开始就有的角色</code>。</p></blockquote><p>游戏开始时，设置为主角以外且存在的角色编号。</p><p>在游戏开始时，默认该编号所对应的角色为主角正在<s>训练</s>的角色。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">最初からいるキャラ</span><span class="token punctuation">,</span><span class="token value">&lt;number&gt;</span>\n</code></pre></div><p>如：（设置默认训练角色为1号角色（即<code>Chara01.csv</code>所对应的角色））</p><div class="language-csv"><pre><code><span class="token value">最初からいるキャラ</span><span class="token punctuation">,</span><span class="token value">1</span>\n</code></pre></div><h4 id="无物品系统" tabindex="-1">无物品系统 <a class="header-anchor" href="#无物品系统" aria-hidden="true">#</a></h4><blockquote><p><code>无物品系统</code>原文为<code>アイテムなし</code>，即<code>Item無し</code>。</p></blockquote><p>是否禁用内置的物品系统，若数值为1，则禁用内置的物品系统。</p><p>结构如下：</p><div class="language-csv"><pre><code><span class="token value">アイテムなし</span><span class="token punctuation">,</span><span class="token value">&lt;number&gt;</span>\n</code></pre></div><h4 id="版本向下兼容" tabindex="-1">版本向下兼容 <a class="header-anchor" href="#版本向下兼容" aria-hidden="true">#</a></h4><blockquote><p><code>版本向下兼容</code>原文为<code>バージョン違い認める</code>，即<code>接受版本差异</code>。</p></blockquote><p>如果存档版本大于或等于设定值，即可识别并读取。</p><p>可使用这个参数实现存档的向下兼容，适用于非破坏性的升级，</p><p>如：</p><div class="language-csv"><pre><code><span class="token value">;识别1.20版本及之后的存档。</span>\n<span class="token value">バージョン違い認める</span><span class="token punctuation">,</span><span class="token value">1200</span>\n</code></pre></div><h3 id="palam-csv的格式" tabindex="-1"><code>Palam.csv</code>的格式 <a class="header-anchor" href="#palam-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册参数(Parameters)。</li><li>参数编号写在第一栏，参数名称写在第二栏。</li><li>参数编号从0开始，建议不要设置空号。</li><li>参数号最大为99。</li></ul><p>示例：</p><div class="language-csv"><pre><code><span class="token value">0</span><span class="token punctuation">,</span><span class="token value">快Ｃ</span>\n<span class="token value">1</span><span class="token punctuation">,</span><span class="token value">快Ｂ</span>\n<span class="token value">2</span><span class="token punctuation">,</span><span class="token value">快Ａ</span>\n</code></pre></div><h3 id="abl-csv的格式" tabindex="-1"><code>Abl.csv</code>的格式 <a class="header-anchor" href="#abl-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册能力。</li><li>在第一栏写上能力编号，在第二栏写上能力名称。</li><li>建议能力号的数字从0开始，不要有空号。</li><li>能力的最大数量是99。</li></ul><p>示例：</p><div class="language-"><pre><code>0,感知\n3,技巧\n</code></pre></div><h3 id="talent-csv的格式" tabindex="-1"><code>Talent.csv</code>的格式 <a class="header-anchor" href="#talent-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册天赋。</li><li>在第一栏写上特征编号，第二栏写上特征名称。</li><li>也可以做一个空号。</li><li>最小数是0，最大数是99。</li></ul><h3 id="mark-csv的格式" tabindex="-1"><code>Mark.csv</code>的格式 <a class="header-anchor" href="#mark-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册刻印。</li><li>在第一栏中写上印号，在第二栏中写上印名。</li><li>建议从0开始，不要做空号。</li><li>最大印数为99。</li></ul><h3 id="exp-csv的格式" tabindex="-1"><code>Exp.csv</code>的格式 <a class="header-anchor" href="#exp-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册经验。</li><li>第一栏写经验号，第二栏写经验名称。</li><li>你也可以做一个空号。</li><li>最低经验数为0，最高经验数为99。</li></ul><h3 id="train-csv的格式" tabindex="-1"><code>Train.csv</code>的格式 <a class="header-anchor" href="#train-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册动作。</li><li>命令编号写在第一栏，命令名称写在第二栏。</li><li>你也可以做一个空号。</li><li>命令号最小为0，最大为99。</li></ul><h3 id="item-csv的格式" tabindex="-1"><code>Item.csv</code>的格式 <a class="header-anchor" href="#item-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册物品。</li><li>第一栏写商品编号，第二栏写商品名称，第三栏写商品价格。</li><li>你也可以创建一个空号。</li><li>最小项目数为0，最大为99。</li></ul><h3 id="str-csv的格式" tabindex="-1"><code>Str.csv</code>的格式 <a class="header-anchor" href="#str-csv的格式" aria-hidden="true">#</a></h3><ul><li>该文件用于注册文本。</li><li>第一栏写的是字符串编号，第二栏写的是字符串。</li><li>字符串的长度不受限制，编号可以不连贯。</li><li>最小字符串数为0，最大为19999。</li></ul><h4 id="关于str-csv中的-、-、-、-和" tabindex="-1">关于<code>Str.csv</code>中的<code>+++</code>、<code>***</code>、<code>$$$</code>、<code>///</code>和<code>===</code> <a class="header-anchor" href="#关于str-csv中的-、-、-、-和" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">代</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:center;">+++</td><td>主角姓名</td></tr><tr><td style="text-align:center;">***</td><td>被<s>训练</s>者姓名</td></tr><tr><td style="text-align:center;">$$$</td><td>被<s>训练</s>者称呼</td></tr><tr><td style="text-align:center;">///</td><td>助手姓名</td></tr><tr><td style="text-align:center;">===</td><td>训练者姓名（主角或助手）</td></tr></tbody></table><h3 id="charaxx-csv的格式" tabindex="-1"><code>CharaXX.csv</code>的格式 <a class="header-anchor" href="#charaxx-csv的格式" aria-hidden="true">#</a></h3><h4 id="角色编号" tabindex="-1">角色编号 <a class="header-anchor" href="#角色编号" aria-hidden="true">#</a></h4><p>在处理角色间相性（关系），同一角色的特殊版本时非常重要。</p><p>结构如下：</p><div class="language-"><pre><code>番号,&lt;number&gt;\n</code></pre></div><p>如：（角色编号为1）</p><div class="language-"><pre><code>番号,1\n</code></pre></div><h4 id="角色名称" tabindex="-1">角色名称 <a class="header-anchor" href="#角色名称" aria-hidden="true">#</a></h4><p>字符串长度无限制，但太长会影响显示。</p><p>结构如下：</p><div class="language-"><pre><code>名前,&lt;string&gt;\n</code></pre></div><p>如：（角色名称为“小明”）</p><div class="language-"><pre><code>名前,小明\n</code></pre></div><h4 id="角色称呼" tabindex="-1">角色称呼 <a class="header-anchor" href="#角色称呼" aria-hidden="true">#</a></h4><p>用于设置角色称呼或外号。</p><p>字符串长度无限制，但太长会影响显示。</p><p>结构如下：</p><div class="language-"><pre><code>呼び名,&lt;string&gt;\n</code></pre></div><p>如：（角色名称为“小明”）</p><div class="language-"><pre><code>呼び名,魔王\n</code></pre></div><h4 id="角色基础数据" tabindex="-1">角色基础数据 <a class="header-anchor" href="#角色基础数据" aria-hidden="true">#</a></h4><p>将角色的，名为<code>arg1</code>的属性的值，设置为<code>arg2</code>。</p><p>每个角色具有自带的数值属性。假设我们需要一个角色初始具有2000的体力值。则我们可以在相应的<code>CharaXX.csv</code>文件中加上：</p><div class="language-csv"><pre><code><span class="token value">基礎</span><span class="token punctuation">,</span><span class="token value">0</span><span class="token punctuation">,</span><span class="token value">2000</span>\n</code></pre></div><p>其中<code>0</code>就代表体力的编号。</p><p>同理，若我们新增一个基础数据，则将其设为1……乃至更多。</p><p><code>arg1</code>的取值范围为[0,99]</p><p>结构如下：</p><div class="language-"><pre><code>基礎,&lt;arg1:number&gt;,&lt;arg2:number&gt;\n</code></pre></div><p>如：</p><div class="language-"><pre><code>;体力是2000，精力是1000。\n基礎,0,2000\n基礎,1,1000\n</code></pre></div><h4 id="角色能力" tabindex="-1">角色能力 <a class="header-anchor" href="#角色能力" aria-hidden="true">#</a></h4><p>将角色的能力基本<code>arg1</code>设置为值<code>arg2</code>。</p><p><code>arg1</code>的取值应和<a href="#abl-csv%E7%9A%84%E6%A0%BC%E5%BC%8F"><code>Abl.csv</code></a>文件中的能力编号相对应。</p><p>结构如下：</p><div class="language-"><pre><code>能力,&lt;arg1:number&gt;,&lt;arg2:number&gt;\n</code></pre></div><h4 id="角色素质" tabindex="-1">角色素质 <a class="header-anchor" href="#角色素质" aria-hidden="true">#</a></h4><p>让角色具有<code>arg1</code>编号所代表的素质。</p><p><code>arg1</code>的取值应和<a href="#talent-csv%E7%9A%84%E6%A0%BC%E5%BC%8F"><code>Talent.csv</code></a>文件中的素质编号相对应。</p><p>结构如下：</p><div class="language-"><pre><code>素質,&lt;arg1:number&gt;\n</code></pre></div><h4 id="角色经验" tabindex="-1">角色经验 <a class="header-anchor" href="#角色经验" aria-hidden="true">#</a></h4><p>将角色的初始经验<code>arg1</code>设置为值<code>arg2</code>。</p><p><code>arg1</code>的取值应和<a href="#exp-csv%E7%9A%84%E6%A0%BC%E5%BC%8F"><code>Exp.csv</code></a>文件中的经验编号相对应。</p><p>结构如下：</p><div class="language-"><pre><code>経験,&lt;arg1:number&gt;,&lt;arg2:number&gt;\n</code></pre></div><h4 id="角色相性（关系）" tabindex="-1">角色相性（关系） <a class="header-anchor" href="#角色相性（关系）" aria-hidden="true">#</a></h4><p>将当前角色对<code>arg1</code>所代表的角色的相性设置为<code>arg2</code>。</p><p><code>arg1</code>的取值应和<a href="#chaxx-csv%E7%9A%84%E6%A0%BC%E5%BC%8F"><code>CharaXX.csv</code></a>文件编号相对应。</p><p>结构如下：</p><div class="language-"><pre><code>相性,&lt;arg1:number&gt;,&lt;arg2:number&gt;\n</code></pre></div><h4 id="助手" tabindex="-1">助手 <a class="header-anchor" href="#助手" aria-hidden="true">#</a></h4><p>若其值为1，则该角色初始化后默认为助手。</p><h4 id="角色标志-flag" tabindex="-1">角色标志(Flag) <a class="header-anchor" href="#角色标志-flag" aria-hidden="true">#</a></h4><p>将该角色的标志<code>arg1</code>的值设置为<code>arg2</code>。</p><p><code>arg1</code>的取值范围为[0,999]。</p><p>角色标志的设置完全是可自定义的。</p><p><code>arg2</code>的取值范围不限，但必须是整数值。</p>',161)];t.render=function(s,n,t,l,d,p){return a(),e("div",null,c)};export{n as __pageData,t as default};