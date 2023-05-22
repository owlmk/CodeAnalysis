import{_ as i,a as d}from"./createcustomrule.a7bc291a.js";import{_ as a,a as _}from"./scheme_codelint_03.3d29583b.js";import{_ as h,r as c,o as p,c as u,a as e,b as t,w as r,f as s,d as o}from"./app.ed144a5b.js";const g={},x=s('<h1 id="tca-armory-r-\u4F7F\u7528\u624B\u518C" tabindex="-1"><a class="header-anchor" href="#tca-armory-r-\u4F7F\u7528\u624B\u518C" aria-hidden="true">#</a> TCA-Armory-R \u4F7F\u7528\u624B\u518C</h1><p>TCA\u72EC\u7ACB\u5DE5\u5177TCA-Armory-R\uFF0C\u522B\u540DRegexScanner\uFF0C\u6B63\u5219\u5339\u914D\u5DE5\u5177\uFF0C\u652F\u6301\u626B\u63CF\u6587\u4EF6\u540D\u79F0\u548C\u6587\u672C\u5185\u5BB9\uFF0C\u652F\u6301\u9875\u9762\u76F4\u63A5<strong>\u81EA\u5B9A\u4E49\u521B\u5EFA\u89C4\u5219</strong>\u3002</p><h2 id="\u9002\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h2><ul><li>\u68C0\u6D4B\u9879\u76EE\u4E2D\u7684\u6587\u4EF6\u540D\uFF0C\u6BD4\u5982\u6F0F\u6D1E\u6587\u4EF6log4j-core-2.10.1.jar</li><li>\u68C0\u6D4B\u4EE3\u7801\u6587\u4EF6\u4E2D\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u6BD4\u5982\u9AD8\u5371\u51FD\u6570vsscanf</li><li>\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u6BD4\u5982\u8D26\u53F7\u5BC6\u7801\u660E\u6587</li></ul><h2 id="\u5BF9\u6BD4regexscan\u3001regexfilescan" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4regexscan\u3001regexfilescan" aria-hidden="true">#</a> \u5BF9\u6BD4RegexScan\u3001RegexFileScan</h2>',5),m=e("li",null,"\u5355\u4E2A\u5DE5\u5177\u5373\u53EF\u5B8C\u6210\u6587\u4EF6\u540D\u548C\u6587\u4EF6\u5185\u5BB9\u7684\u68C0\u67E5",-1),f=e("li",null,"\u626B\u63CF\u901F\u5EA6\u66F4\u5FEB\uFF0C\u5927\u6982\u51CF\u5C1160%\u7684\u8017\u65F6",-1),A=e("li",null,"\u5355\u6761\u89C4\u5219\u5185\u652F\u6301\u591A\u6761\u6B63\u5219\u8868\u8FBE\u5F0F",-1),k=e("li",null,"\u652F\u6301\u6B63\u5219\u8FC7\u6EE4",-1),b=e("li",null,"\u652F\u6301\u5339\u914D\u5206\u7EC4\u548C\u71B5\u68C0\u6D4B",-1),y=o("\u53EA\u652F\u6301"),E={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},T=o("go\u7684\u6B63\u5219\u8BED\u6CD5"),C=e("h2",{id:"\u5FEB\u901F\u63A5\u5165",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5FEB\u901F\u63A5\u5165","aria-hidden":"true"},"#"),o(" \u5FEB\u901F\u63A5\u5165")],-1),v=e("p",null,"\u4EE5\u4E0B\u662F\u63A5\u5165\u6B65\u9AA4\uFF1A",-1),R=o("\u5C5E\u4E8E\u589E\u5F3A\u5206\u6790\u6A21\u5757\uFF0C\u9700\u8981\u5148"),B=o("\u90E8\u7F72CLS"),N=e("li",null,"\u5728\u4EE3\u7801\u5206\u6790\u521B\u5EFA\u9879\u76EE\uFF0C\u81EA\u5B9A\u4E49\u89C4\u5219\u5305\u91CC\u6DFB\u52A0\u60F3\u8981\u8FDB\u884C\u626B\u63CF\u7684TCA-Armory-R\u89C4\u5219",-1),z=e("li",null,"\u542F\u52A8\u5206\u6790\u5373\u53EF",-1),F=s('<h2 id="\u81EA\u5B9A\u4E49\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u89C4\u5219" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u89C4\u5219</h2><h3 id="_1-\u5F00\u653E\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_1-\u5F00\u653E\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650" aria-hidden="true">#</a> 1. \u5F00\u653E\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650</h3><p>\u5F00\u653E<strong>\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219</strong>\u6743\u9650\uFF0C\u9700\u5E73\u53F0\u7BA1\u7406\u5458\u5728<strong>\u7BA1\u7406\u5165\u53E3</strong>-<strong>\u5DE5\u5177\u7BA1\u7406</strong>\u4E2D\u627E\u5230TCA-Armory-R\u5DE5\u5177\uFF0C\u5E76\u5C06\u5176\u6743\u9650\u72B6\u6001\u8C03\u6574\u4E3A<strong>\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219</strong>\u3002</p>',3),S=o("\u89C4\u5219\u6743\u9650\u8BE6\u89C1"),j=o("\u81EA\u5B9A\u4E49\u89C4\u5219\u6743\u9650\u8BF4\u660E"),q=s('<h3 id="_2-\u6DFB\u52A0\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u89C4\u5219" aria-hidden="true">#</a> 2. \u6DFB\u52A0\u89C4\u5219</h3><p>\u8FDB\u5165\u5DE5\u5177\u7BA1\u7406\u5165\u53E3\uFF0C\u8FDB\u5165TCA-Armory-R\u5DE5\u5177\u9875\u9762\uFF0C\u9009\u62E9\u4E0A\u65B9\u7684\u201C\u81EA\u5B9A\u4E49\u89C4\u5219\u201D\uFF0C\u7136\u540E\u70B9\u51FB\u201C\u6DFB\u52A0\u89C4\u5219\u201D:</p><p><img src="'+i+'" alt="\u6DFB\u52A0\u81EA\u5B9A\u4E49\u89C4\u5219"></p><h3 id="_3-\u586B\u5199\u89C4\u5219\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-\u586B\u5199\u89C4\u5219\u4FE1\u606F" aria-hidden="true">#</a> 3. \u586B\u5199\u89C4\u5219\u4FE1\u606F</h3><p>\u8FDB\u5165\u201C\u521B\u5EFA\u89C4\u5219\u201D\u9875\u9762\uFF0C\u6309\u7167\u9700\u6C42\u586B\u5199\u76F8\u5173\u4FE1\u606F\uFF0C\u5B8C\u6210\u540E\uFF0C\u70B9\u51FB\u9875\u9762\u6700\u540E\u7684\u201C\u786E\u5B9A\u201D\u6309\u94AE\u63D0\u4EA4\u3002</p><h3 id="\u89C4\u5219\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u793A\u4F8B" aria-hidden="true">#</a> \u89C4\u5219\u793A\u4F8B\uFF1A</h3><p>\u89C4\u5219\u626B\u63CF\u573A\u666F\uFF1A\u626B\u63CF\u4EE3\u7801\u4E2D\u7684 github token\uFF0C\u5982\u679Ctoken\u4EE5\u660E\u6587\u5F62\u5F0F\u5199\u5728\u6E90\u7801\u6587\u4EF6\u4E2D\uFF0C\u4F1A\u9020\u6210\u9690\u79C1\u6CC4\u9732\uFF0C\u53EF\u80FD\u9020\u6210\u4E25\u91CD\u7684\u5B89\u5168\u4E8B\u6545\u3002</p><p>\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A\u5339\u914D github token \u5B57\u7B26\u4E32\uFF0C\u6839\u636Egithub token\u7684\u4E00\u822C\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u63A8\u65AD\u51FA\u6B63\u5219\u8868\u8FBE\u5F0F ((ghp|gho|ghu|ghs)_[0-9a-zA-Z]{36})\u3002</p>',8),w={class:"custom-container tip"},Z=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),L=o("\u53EA\u652F\u6301go\u6B63\u5219\u8BED\u6CD5: "),V={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},G=o("regexp"),D=s('<p>\u5EFA\u8BAE\u5148\u6D4B\u8BD5\u597D\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u5426\u6B63\u786E\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u7F51\u7AD9\u63A8\u8350\uFF1Ahttp://tool.oschina.net/regex</p><p><img src="'+d+'" alt="\u586B\u5199\u81EA\u5B9A\u4E49\u89C4\u5219"></p><h3 id="\u5B57\u6BB5\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u89E3\u91CA" aria-hidden="true">#</a> \u5B57\u6BB5\u89E3\u91CA</h3><p>\u89C4\u5219\u540D\u79F0\u3001\u524D\u7AEF\u5C55\u793A\u540D\u79F0\uFF1A\u5EFA\u8BAE\u4F7F\u7528\u5355\u8BCD\u9996\u5B57\u6BCD\u5927\u5199\u7684\u683C\u5F0F\uFF0C\u5982 DetectedGithubToken</p><p>\u89C4\u5219\u7B80\u8FF0\uFF1A\u4F5C\u4E3A\u626B\u63CF\u51FA\u6765\u5230\u95EE\u9898\u6807\u9898</p><p>\u89C4\u5219\u53C2\u6570\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><strong>\u89C4\u5219\u53C2\u6570\u4E2D\u7684(3)(4)(5)\u5C5E\u4E8E\u65B0\u529F\u80FD\uFF0C\u9700\u8981\u5C06\u5BA2\u6237\u7AEFclient\u548C\u5DE5\u5177\u5E93TCA-Armory\u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C</strong></p></div>',7),I=e("li",null,[e("p",null,"(1) \u53C2\u6570\u683C\u5F0F\u7C7B\u4F3Cini\u7684\u683C\u5F0F\uFF0C \u4E5F\u5C31\u662Fkey = value\u7684\u683C\u5F0F")],-1),M=o("(2) [\u5FC5\u9009] "),H=e("code",null,"regex",-1),J=o(" \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u626B\u63CF\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982: "),K=e("code",null,"regex=((ghp|gho|ghu|ghs)_[0-9a-zA-Z]{36})",-1),O=o("\u3002"),P=o("\u53EA\u652F\u6301go\u6B63\u5219\u8BED\u6CD5: "),Q={href:"https://pkg.go.dev/regexp/syntax",target:"_blank",rel:"noopener noreferrer"},U=o("regexp"),W=o("\u3002\u5EFA\u8BAE\u5148\u6D4B\u8BD5\u597D\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u5426\u6B63\u786E\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5\u7F51\u7AD9\u63A8\u8350\uFF1A"),X={href:"http://tool.oschina.net/regex",target:"_blank",rel:"noopener noreferrer"},Y=o("http://tool.oschina.net/regex"),$=s("<li><p>(3) [\u53EF\u9009] <code>regex{N}</code> \u53C2\u6570\uFF0C\u53EA\u6709\u5728\u5DF2\u6709<code>regex</code>\u53C2\u6570\u60C5\u51B5\u4E0B\u751F\u6548\uFF0C\u7528\u4E8E\u6269\u5C55\u626B\u63CF\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5176\u4E2D N \u4ECE1\u5F00\u59CB\u8BA1\u6570\uFF0C\u4F8B\u5982: <code>regex1=EAAAACZAVC6ygB[0-9A-Za-z]+</code>, <code>regex2=EAAAAZAw4[0-9A-Za-z]+</code>\u3002<code>regex{N}</code>\u548C<code>regex</code>\u7684\u8868\u8FBE\u5F0F\u5747\u4E3A<strong>\u6216</strong>\u5173\u7CFB\uFF0C\u6BCF\u4E00\u4E2A\u5339\u914D\u7ED3\u679C\u4E0A\u62A5\u4E00\u4E2A\u95EE\u9898\u3002</p></li><li><p>(4) [\u53EF\u9009] <code>regex_not</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u6B63\u5219\u8FC7\u6EE4\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982: <code>regex_not=(?i)example</code>\u3002\u53EF\u4EE5\u5BF9(2)(3)\u4E2Dregex\u5339\u914D\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u7B5B\u9009\uFF0C\u5982\u679C\u5339\u914D\u5219\u8FC7\u6EE4\u8BE5\u7ED3\u679C\uFF0C\u4E0D\u4E88\u4E0A\u62A5\u3002</p></li><li><p>(5) [\u53EF\u9009] <code>regex_not{N}</code> \u53C2\u6570\uFF0C\u53EA\u6709\u5728\u5DF2\u6709<code>regex_not</code>\u53C2\u6570\u60C5\u51B5\u4E0B\u751F\u6548\uFF0C\u7528\u4E8E\u6269\u5C55\u6B63\u5219\u8FC7\u6EE4\u8868\u8FBE\u5F0F\uFF0C\u5176\u4E2D N \u4ECE1\u5F00\u59CB\u8BA1\u6570\uFF0C\u4F8B\u5982: <code>regex_not1=(?i)test</code>, <code>regex_not2=(?i)fake</code>\u3002<code>regex_not{N}</code>\u548C<code>regex_not</code>\u7684\u8868\u8FBE\u5F0F\u5747\u4E3A<strong>\u6216</strong>\u5173\u7CFB\u3002</p></li><li><p>(6) [\u5FC5\u9009] <code>msg</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u5C55\u73B0issue\u8BF4\u660E\uFF0C \u4F8B\u5982: <code>msg=\u68C0\u6D4B\u5230\u9AD8\u5371\u51FD\u6570%s\uFF0C\u5EFA\u8BAE\u66FF\u6362\u3002</code></p><ul><li><p>msg\u4E2D\u7684\u201C%s\u201D\u4F7F\u7528regex\u4E2D\u7684group\uFF08\u7528\u201C()&quot;\u62EC\u8D77\u6765\u7684\u90E8\u5206\uFF09\u4E00\u4E00\u5339\u914D\uFF0C\u5355\u4E2A%s\u9ED8\u8BA4\u4E3A\u6574\u4E2Aregex\u5339\u914D\u7684\u5B57\u7B26\u4E32</p></li><li><p>\u5982\u679Cregex\u6CA1\u6709\u5B9A\u4E49group\uFF0C\u5219msg\u6700\u591A\u6709\u4E00\u4E2A%s, \u5E76\u7531\u6574\u4E2Aregex\u5339\u914D\u7684\u5B57\u7B26\u4E32\u66FF\u4EE3</p></li><li><p>\u5982\u679Cmsg\u91CC\u6CA1\u6709\u5305\u542B\u201C%s\u201D\uFF0C\u5219\u76F4\u63A5\u663E\u793Amsg</p></li><li><p>\u5982\u679Cmsg\u6CA1\u6709\u63D0\u4F9B\uFF0C\u5219\u4F1A\u7ED9\u51FA\u9ED8\u8BA4\u4FE1\u606F</p></li></ul></li><li><p>(7) [\u53EF\u9009] <code>ignore_comment</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u5FFD\u7565\u6CE8\u91CA\u4EE3\u7801\uFF0C\u53EF\u9009\u503C\uFF1ATrue\u3001true\u3001False\u3001false \u3002\u4F8B\u5982: <code>ignore_comment=True</code>, \u9ED8\u8BA4\u662FFalse</p></li><li><p>(8) [\u53EF\u9009] <code>file_scan</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u626B\u63CF\u6587\u4EF6\u540D\u79F0\uFF0C\u53EF\u9009\u503C\uFF1ATrue\u3001true\u3001False\u3001false \u3002\u4F8B\u5982: <code>file_scan=True</code>, \u9ED8\u8BA4\u662FFalse</p></li><li><p>(9) [\u53EF\u9009] <code>include</code> \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u53EA\u626B\u63CF\u7684\u6587\u4EF6\u5339\u914D\u8303\u56F4\uFF0C\u57FA\u4E8E\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4F7F\u7528\u901A\u914D\u7B26\u683C\u5F0F\uFF0C\u591A\u9879\u4F7F\u7528\u82F1\u6587\u5206\u53F7\uFF08;\uFF09\u9694\u5F00\u3002\u4F8B\u5982: <code>include=src/test;src/main.*;*.cpp</code></p></li>",7),ee=e("p",null,[o("(10) [\u53EF\u9009] "),e("code",null,"exclude"),o(" \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u4E0D\u626B\u63CF\u7684\u6587\u4EF6\u5339\u914D\u8303\u56F4\uFF0C\u683C\u5F0F\u540Cinclude\u53C2\u6570\uFF0C\u4F8B\u5982: "),e("code",null,"exclude=tests;*.json")],-1),oe=o("\u8DEF\u5F84\u8FC7\u6EE4\uFF08"),te=e("code",null,"exclude",-1),ne=o(", "),se=e("code",null,"include",-1),le=o("\uFF09\u91C7\u7528Glob-Style\u7684\u5339\u914D\u6A21\u5F0F\uFF0C\u8BE6\u89C1 "),ce={href:"https://pkg.go.dev/path/filepath#Match",target:"_blank",rel:"noopener noreferrer"},re=o("Go-filepath-Match"),ie=o("\uFF0C \u9664\u4E86 "),de=e("code",null,"**",-1),ae=o(" \u7528\u6765\u5339\u914D\u96F6\u6216\u591A\u4E2A\u76EE\u5F55\uFF0C\u672C\u5DE5\u5177\u4F1A"),_e=e("strong",null,"\u9ED8\u8BA4\u5339\u914D\u524D\u540E\u76EE\u5F55",-1),he=o("\u3002\u4E3E\u4F8B:"),pe=s("<blockquote><ol><li><code>exclude=*.py</code> \u4F1A\u5FFD\u7565\u4EE5\u4E0B\u6587\u4EF6: main.py, src/main.py, main.py/install.sh</li><li><code>exclude=tests</code> \u4F1A\u5FFD\u7565\u4EE5\u4E0B\u6587\u4EF6: tests/test.py, a/tests/b/test.py</li><li><code>include=main.*</code> \u4F1A\u53EA\u626B\u63CF\u4EE5\u4E0B\u6587\u4EF6: src/main.py, app/main.go</li><li><code>include=src</code>\u4E14<code>exclude=src/lib</code> \u4F1A\u53EA\u626B\u63CF\u4EE5\u4E0B\u6587\u4EF6: src/main.py, src/project/proj.py; \u5FFD\u7565\u4EE5\u4E0B\u6587\u4EF6: src/lib/lib.py, src/lib/package/pack.js</li></ol></blockquote>",1),ue=e("li",null,[e("p",null,[o("(11)[\u53EF\u9009] "),e("code",null,"match_group"),o(" \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u6B63\u5219\u5339\u914D\u7684\u5206\u7EC4\uFF0C\u6570\u503C\u4E0D\u80FD\u5927\u4E8E\u6B63\u5219\u5339\u914D\u5206\u7EC4\u6570\uFF0C\u4F8B\u5982\uFF1A "),e("code",null,"regex=(aws_account_id)\\s{0,50}(:|=>|=)\\s{0,50}([0-9]{12})"),e("code",null,"match_group=3"),o("\uFF0C\u5339\u914D\u5230\u7B2C3\u4E2A\u5206\u7EC4"),e("code",null,"([0-9]{12})")])],-1),ge=e("p",null,[o("(12)[\u53EF\u9009] "),e("code",null,"entropy"),o(" \u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u6B63\u5219\u5339\u914D\u7ED3\u679C\u7684\u6700\u5C0F\u4FE1\u606F\u71B5\uFF0C\u4F8B\u5982\uFF1A"),e("code",null,"entropy=3"),o("\uFF0C\u71B5\u4E0D\u5927\u4E8E3\u7684\u5339\u914D\u7ED3\u679C\u5C06\u88AB\u8FC7\u6EE4")],-1),xe=o("\u4FE1\u606F\u71B5\uFF1A"),me={href:"https://zh.wikipedia.org/wiki/%E7%86%B5_(%E4%BF%A1%E6%81%AF%E8%AE%BA)",target:"_blank",rel:"noopener noreferrer"},fe=o("\u71B5(\u4FE1\u606F\u8BBA)"),Ae=o(" \u53EF\u7528\u4E8E\u654F\u611F\u4FE1\u606F\uFF08\u5BC6\u94A5\u3001token\uFF09\u7684\u68C0\u6D4B \u542B\u4E49\uFF1A\u53EF\u4EE5\u7406\u89E3\u4E3A\u5B57\u7B26\u4E32\u7684\u6DF7\u4E71\u7A0B\u5EA6\uFF0C\u5B57\u7B26\u8D8A\u968F\u673A\uFF0C\u71B5\u8D8A\u5927\u3002\u56E0\u6B64\uFF0C\u8BBE\u7F6E\u5408\u9002\u7684\u71B5\uFF0C\u53EF\u4EE5\u8FC7\u6EE4\u6389\u4E00\u4E9B\u8BEF\u62A5\u6216\u8005\u4EBA\u4E3A\u6D4B\u8BD5\u7528\u4F8B\u3002"),ke=e("h3",{id:"_4-\u5C06\u81EA\u5B9A\u4E49\u89C4\u5219\u6DFB\u52A0\u5230\u9879\u76EE\u5206\u6790\u65B9\u6848\u4E2D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-\u5C06\u81EA\u5B9A\u4E49\u89C4\u5219\u6DFB\u52A0\u5230\u9879\u76EE\u5206\u6790\u65B9\u6848\u4E2D","aria-hidden":"true"},"#"),o(" 4. \u5C06\u81EA\u5B9A\u4E49\u89C4\u5219\u6DFB\u52A0\u5230\u9879\u76EE\u5206\u6790\u65B9\u6848\u4E2D")],-1),be=e("p",null,"\u8FDB\u5165 \u4EE3\u7801\u5206\u6790 - \u5206\u6790\u65B9\u6848 - \u4EE3\u7801\u68C0\u67E5 - \u81EA\u5B9A\u4E49\u89C4\u5219\u5305 - \u67E5\u770B\u8BE6\u7EC6\u89C4\u5219\uFF0C\u6DFB\u52A0\u89C4\u5219\u3002",-1),ye=e("p",null,[e("img",{src:a,alt:"\u70B9\u51FB\u81EA\u5B9A\u4E49\u89C4\u5219\u5305"})],-1),Ee=e("p",null,[e("img",{src:_,alt:"\u6DFB\u52A0\u89C4\u5219"})],-1);function Te(Ce,ve){const n=c("ExternalLinkIcon"),l=c("RouterLink");return p(),u("div",null,[x,e("ul",null,[m,f,A,k,b,e("li",null,[e("em",null,[y,e("a",E,[T,t(n)])])])]),C,v,e("ol",null,[e("li",null,[R,t(l,{to:"/zh/quickStarted/enhanceDeploy.html"},{default:r(()=>[B]),_:1})]),N,z]),F,e("p",null,[S,t(l,{to:"/zh/guide/%E5%B7%A5%E5%85%B7%E7%AE%A1%E7%90%86/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%84%E5%88%99.html"},{default:r(()=>[j]),_:1})]),q,e("div",w,[Z,e("p",null,[e("strong",null,[L,e("a",V,[G,t(n)])])])]),D,e("ul",null,[I,e("li",null,[e("p",null,[M,H,J,K,O,e("strong",null,[P,e("a",Q,[U,t(n)])]),W,e("a",X,[Y,t(n)])])]),$,e("li",null,[ee,e("blockquote",null,[e("p",null,[oe,te,ne,se,le,e("a",ce,[re,t(n)]),ie,de,ae,_e,he]),pe])]),ue,e("li",null,[ge,e("blockquote",null,[e("p",null,[xe,e("a",me,[fe,t(n)]),Ae])])])]),ke,be,ye,Ee])}const ze=h(g,[["render",Te],["__file","TCA-Armory-R.html.vue"]]);export{ze as default};