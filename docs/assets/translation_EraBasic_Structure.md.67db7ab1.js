import{o as e,c as d,a}from"./app.b380940c.js";const c='{"title":"EraBasic 的结构","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本信息","slug":"基本信息"},{"level":3,"title":"EraMaker 的启动","slug":"eramaker-的启动"},{"level":3,"title":"SHOP","slug":"shop"},{"level":3,"title":"TRAIN","slug":"train"},{"level":3,"title":"AFTERTRAIN","slug":"aftertrain"},{"level":3,"title":"ABLUP","slug":"ablup"},{"level":3,"title":"TURNEND","slug":"turnend"},{"level":3,"title":"事件函数","slug":"事件函数"}],"relativePath":"translation/EraBasic_Structure.md","lastUpdated":1631162667788}',o={},r=[a('<h1 id="erabasic-的结构" tabindex="-1">EraBasic 的结构 <a class="header-anchor" href="#erabasic-的结构" aria-hidden="true">#</a></h1><blockquote><p>翻译自原文档：<a href="http://cbaku.com/b/erakanon/eramaerc.html" target="_blank" rel="noopener noreferrer">http://cbaku.com/b/erakanon/eramaerc.html</a></p></blockquote><h2 id="基本信息" tabindex="-1">基本信息 <a class="header-anchor" href="#基本信息" aria-hidden="true">#</a></h2><h3 id="eramaker-的启动" tabindex="-1">EraMaker 的启动 <a class="header-anchor" href="#eramaker-的启动" aria-hidden="true">#</a></h3><p>程序启动后，会出现标题屏幕，你可以选择“从头开始”或“加载存档”。当你选择“从头开始”时，ERB文件中的<code>EVENTFIRST</code>函数会被调用。</p><p>当<code>EVENTFIRST</code>执行完毕后，游戏便会结束。在函数执行完毕之前调用<code>BEGIN</code>、<code>SHOP</code>或<code>TRAIN</code>函数进入相应的游戏逻辑是有必要的。</p><h3 id="shop" tabindex="-1">SHOP <a class="header-anchor" href="#shop" aria-hidden="true">#</a></h3><h4 id="进入shop" tabindex="-1">进入SHOP <a class="header-anchor" href="#进入shop" aria-hidden="true">#</a></h4><p>进入SHOP流程后，<code>@EVENTSHOP</code>函数（如果有的话）将被调用。这是一个事件函数。</p><p>之后，<code>@SHOW_SHOP</code>函数将会被调用。可以在此函数中显示一些基本信息，如日期和训练中的角色等。调用<code>PRINT_SHOPITEM</code>显示出售中的物品，或是显示一些特殊的选项，如保存和加载等。</p><h4 id="在shop流程中选择命令" tabindex="-1">在SHOP流程中选择命令 <a class="header-anchor" href="#在shop流程中选择命令" aria-hidden="true">#</a></h4><p>如果选择的数字位于0-99，则意味着购买物品。</p><p>如果选择任何其他数字，将调用函数<code>@USERSHOP</code>，所选择的数字被储存在<code>RESULT</code>变量中，等待进行后续的处理。</p><blockquote><p>此处可参见实例游戏中的<code>SHOP.ERB</code>文件部分，方便理解。</p></blockquote><h4 id="购买" tabindex="-1">购买 <a class="header-anchor" href="#购买" aria-hidden="true">#</a></h4><p>当你购买物品时，函数<code>@EVENTBUY</code>将会被调用（如果有的话）。这是一个事件函数。（如果你想把已购买的物品从商店的品种中删除，使用这个功能是个好主意。）</p><h3 id="train" tabindex="-1">TRAIN <a class="header-anchor" href="#train" aria-hidden="true">#</a></h3><h4 id="进入train" tabindex="-1">进入TRAIN <a class="header-anchor" href="#进入train" aria-hidden="true">#</a></h4><p>进入SHOP流程后，<code>@EVENTTRAIN</code>函数（如果有的话）将被调用。这是一个事件函数。</p><p>然后，<code>@SHOW_STATUS</code>函数会被调用。这个函数会显示日期、训练中的角色等基本信息，以及使用<code>PRINT_PALAM</code>命令来显示训练中的参数。可以试一试。</p><p>然后，可以供玩家执行的命令会自动显示。命令显示时会自动调用相应的<code>@COM_ABLE××</code>函数，若函数的返回值<code>RETURN</code>为<code>1</code>，则意味着该命令可以被玩家点击。若相应的<code>@COM_ABLE××</code>函数不存在，也意味着命令可以被玩家点击。更多细节参见示例文件<code>COMABLE.ERB</code>。</p><p>此外，一个名为<code>@SHOW_USERCOM</code>的函数会被调用，类似于“结束训练”之类的特殊命令应该显示在该函数内。</p><p>更多信息参见示例文件：<code>SYSTEM.ERB</code>和<code>INFO.ERB</code>。</p><h4 id="train中的指令选择" tabindex="-1">TRAIN中的指令选择 <a class="header-anchor" href="#train中的指令选择" aria-hidden="true">#</a></h4><p>当玩家选择一个指令时，<code>@EVENTCOM</code>函数（若有）会被调用。这是一个事件函数。另外，与所选命令相对应的函数会被调用，如选择“正常位置”命令，并且<code>TRAIN.CSV</code>文件中的“正常位置”命令对应的编号为20，则将调用一个名为<code>@COM20</code>的函数。</p><p>若一个动作函数无法执行，则在函数中调用<code>RETURN 0</code>语句，便会返回到命令选择界面，而不继续执行命令。</p><p>若一个命令可以被执行，在<code>@COM××</code>中就会执行<code>RETURN 1</code>，然后<code>@SOURCE_CHECK</code>函数就会被调用。训练的结果反映在这里的训练参数中。</p><p>更多信息参见示例文件：<code>COM××.ERB</code>和<code>SOURCE.ERB</code>。</p><h4 id="train中的指令选择结束" tabindex="-1">TRAIN中的指令选择结束 <a class="header-anchor" href="#train中的指令选择结束" aria-hidden="true">#</a></h4><p>指令选择结束后，事件函数<code>@EVENTCOMEND</code>（若有）会被调用，可以在该函数内执行显示角色台词等行为。</p><p>更多信息参见示例文件：<code>CKOJOxx.ERB</code>。</p><h4 id="用户命令" tabindex="-1">用户命令 <a class="header-anchor" href="#用户命令" aria-hidden="true">#</a></h4><p>如果动作选项所对应的<code>@COM××</code>函数不存在，将调用@USERCOM。</p><p>更多信息参见示例文件：<code>SYSTEM.ERB</code>。</p><h3 id="aftertrain" tabindex="-1">AFTERTRAIN <a class="header-anchor" href="#aftertrain" aria-hidden="true">#</a></h3><p>进入AFTERTRAIN流程后，事件函数<code>@EVENTEND</code>（若有）将会被调用。</p><p>训练结束后，人物的台词可以在这里进行处理。此外，训练结束后的结算（珠等）也应在这里进行。</p><p>更多信息参见示例文件：<code>AFTERTRA.ERB</code>。</p><h3 id="ablup" tabindex="-1">ABLUP <a class="header-anchor" href="#ablup" aria-hidden="true">#</a></h3><h4 id="ablup的显示" tabindex="-1">ABLUP的显示 <a class="header-anchor" href="#ablup的显示" aria-hidden="true">#</a></h4><p>首先，<code>@SHOW_JUEL</code>函数会被调用，显示当前所有的珠子。</p><p>然后，<code>@SHOW_ABLUP_SELECT</code>函数会被调用，显示能力列表和退出按钮。</p><p>更多信息参见示例文件：<code>ABL.ERB</code>。</p><h4 id="ablup的指令选择" tabindex="-1">ABLUP的指令选择 <a class="header-anchor" href="#ablup的指令选择" aria-hidden="true">#</a></h4><p>当玩家选择一个命令时，相对应的函数将会被调用，如选择“[3] C感觉”，就会调用<code>@ABLUP3</code>函数。</p><p>若相对应的<code>@ABLUPxx</code>函数不存在，则将调用<code>@USERABLUP</code>函数。选择的命令编号储存在<code>RESULT</code>变量中，可以在函数中进行相应处理。</p><p>更多信息参见示例文件：<code>ABLUP××.ERB</code>和<code>ABL.ERB</code>。</p><h3 id="turnend" tabindex="-1">TURNEND <a class="header-anchor" href="#turnend" aria-hidden="true">#</a></h3><p>进入TURNEND流程后，事件函数<code>@EVENTTURNEND</code>（若有）将会被调用。</p><p>在这里可以处理一下关于时间和角色状态（如恢复等）的逻辑。</p><p>注意：若事件函数<code>@EVENTTURNEND</code>未定义，则游戏会停止。</p><p>更多信息参见示例文件：<code>SYSTEM.ERB</code>。</p><h3 id="事件函数" tabindex="-1">事件函数 <a class="header-anchor" href="#事件函数" aria-hidden="true">#</a></h3><h4 id="关于事件函数" tabindex="-1">关于事件函数 <a class="header-anchor" href="#关于事件函数" aria-hidden="true">#</a></h4><p>事件函数是指游戏生命周期中的固定位置会被调用的函数。如命令执行完毕会训练开始时。</p><p>当你想显示人物的对话时，事件函数很有用。如果你把台词直接写在相应的<code>@COM××</code>函数中，就会让人难以理解。而如果利用事件函数，则可以方便地单独管理相关台词。</p><p>事件函数可以重名。</p><p>如：</p><div class="language-"><pre><code>;正常位置执行结束的时候的台词\n@EVENTCOMEND\n;正常位置的编号为20。若不是20就无视\nSIF SELECTCOM != 20\n    RETURN 0\n;如果FLAG:1000为非0就无视\nSIF FLAG:1000\n    RETURN 0\nPRINTW “不要这么直接呀！”\n;设定FLAG。显示一次后就不再显示\nFLAG:1000 = 1\nRETURN 1\n\n;背后位置执行结束的时候的台词\n@EVENTCOMEND\n;背后位置的编号为21。若不是21就无视\nSIF SELECTCOM != 21\n    RETURN 0\n;如果FLAG:1001为非0就无视\nSIF FLAG:1001\n    RETURN 0\nPRINTW “这种位置……”\n;设定FLAG。显示一次后就不再显示\nFLAG:1001 = 1\nRETURN 1\n</code></pre></div><p>可以给事件函数赋予“性质”。</p><p>当附加<code>#SINGLE</code>的性质时，当该函数以<code>RETURN 1</code>结束时，即使存在其他同名函数也不会被调用。这个特性可以用在同一个角色存在几句相互矛盾的台词时。</p><p>当附加<code>#PRI</code>的性质时，该函数会优先于其他同名函数之前执行。这个特性可以用于角色死亡检查。</p><p>当附加<code>#LATER</code>的性质时，该函数会优先于其他同名函数之后执行。这个特性可以用于结算，如显示“一天过去了。”之类的文本。</p><p>如：</p><div class="language-"><pre><code>@EVENTTURNEND\n#SINGLE\nSIF FLAG:1000\n   RETURN 0\nFLAG:1000 = 1\nPRINTW “不想动了……”\nRETURN 1\n\n@EVENTTURNEND\n#SINGLE\nSIF FLAG:1001\n   RETURN 0\nFLAG:1001 = 1\nPRINTW “想回家……”\nRETURN 1\n\n@EVENTTURNEND\n#SINGLE\nSIF FLAG:1002\n   RETURN 0\nFLAG:1002 = 1\nPRINTW “想出门……”\nRETURN 1\n\n@EVENTTURNEND\n#LATER\nPRINTW 一天过去了……\nRETURN 1\n</code></pre></div><p>（1-3句每次只显示一个，而最后一句会在<code>FLAG:1000</code>、<code>FLAG:1001</code>和<code>FLAG:1002</code>的值都为<code>1</code>之后才会显示。）</p>',66)];o.render=function(a,c,o,n,h,p){return e(),d("div",null,r)};export{c as __pageData,o as default};