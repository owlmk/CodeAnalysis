import{_ as d,r as s,o as c,c as l,a as e,b as o,w as r,f as n,d as a}from"./app.ed144a5b.js";const t={},h=n(`<h1 id="docker\u5FEB\u901F\u90E8\u7F72-\u5E73\u53F0\u4F53\u9A8C\u9996\u63A8" tabindex="-1"><a class="header-anchor" href="#docker\u5FEB\u901F\u90E8\u7F72-\u5E73\u53F0\u4F53\u9A8C\u9996\u63A8" aria-hidden="true">#</a> Docker\u5FEB\u901F\u90E8\u7F72\uFF08\u5E73\u53F0\u4F53\u9A8C\u9996\u63A8\uFF09</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>Docker\u90E8\u7F72\u4F1A\u5305\u542BMariadb\u548CRedis\uFF0C\u5982\u679C\u9700\u8981\u66F4\u5927\u89C4\u6A21\u4F7F\u7528\uFF0C\u53EF\u4EE5\u8C03\u6574\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528\u8FD0\u7EF4\u89C4\u8303\u7684 MySQL/Mariadb \u548C Redis\u3002</p></div><h4 id="\u4F9D\u8D56\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u73AF\u5883" aria-hidden="true">#</a> \u4F9D\u8D56\u73AF\u5883</h4><ul><li>\u7CFB\u7EDF\u73AF\u5883 <ul><li>Linux\u3001macOS\u3001Windows</li><li>\u6700\u4F4E\u914D\u7F6E\uFF1A2\u68384G\u5185\u5B58\u3001100G\u786C\u76D8\u5B58\u50A8\u7A7A\u95F4</li></ul></li><li>\u73AF\u5883\u51C6\u5907 <ul><li>Docker</li></ul></li><li>\u6743\u9650\u51C6\u5907 <ul><li>\u9700\u8981\u5F00\u653E80\u30018000\u7AEF\u53E3\u7684\u8BBF\u95EE\u6743\u9650(80\u4E3ATCA\u5E73\u53F0\u8BBF\u95EE\u7AEF\u53E3\uFF0C8000\u4E3ATCA Server\u8BBF\u95EE\u7AEF\u53E3)</li></ul></li></ul><h4 id="\u90E8\u7F72\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5BF9\u8C61" aria-hidden="true">#</a> \u90E8\u7F72\u5BF9\u8C61</h4><p>Server\u3001Web \u4E0E Client</p><h4 id="\u64CD\u4F5C\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u8BF4\u660E" aria-hidden="true">#</a> \u64CD\u4F5C\u8BF4\u660E</h4><h5 id="\u9996\u6B21\u542F\u52A8\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u9996\u6B21\u542F\u52A8\u64CD\u4F5C" aria-hidden="true">#</a> \u9996\u6B21\u542F\u52A8\u64CD\u4F5C</h5><ol><li>\u8FDB\u5165CodeAnalysis\u5DE5\u4F5C\u76EE\u5F55\uFF08\u4F8B\u5982<code>~/CodeAnalysis</code>)\uFF0C\u4EE5\u4E0B\u8DEF\u5F84\u5747\u4E3A\u76EE\u5F55\u5185\u7684\u76F8\u5BF9\u8DEF\u5F84</li><li>\u6267\u884C\u547D\u4EE4\uFF1A<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash ./quick_install.sh docker deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ol><li>\u901A\u8FC7Docker\u90E8\u7F72\u9ED8\u8BA4\u4F1A\u4ECEDockerHub\u4E0A\u62C9\u53D6<code>tencenttca/tca:latest</code>\u955C\u50CF</li><li>\u901A\u8FC7Docker\u90E8\u7F72\u9ED8\u8BA4\u4F1A\u5728\u5F53\u524D\u6839\u76EE\u5F55\u4E0B\u7684\u6302\u8F7D\u4E09\u4E2A\u8DEF\u5F84\uFF1A <ul><li><code>.docker_temp/logs</code>\uFF1A\u5BB9\u5668\u5185\u7684<code>/var/log/tca/</code>\uFF0C\u5B58\u653ETCA\u5E73\u53F0\u7684\u65E5\u8F93\u51FA\u6587\u4EF6\uFF1B</li><li><code>.docker_temp/data</code>\uFF1A\u5BB9\u5668\u5185\u7684<code>/var/opt/tca/</code>\uFF0C \u5B58\u653ETCA\u5E73\u53F0\u7684\u670D\u52A1\u6570\u636E\uFF0C\u4E3B\u8981\u662FMariadb\u3001Redis\uFF1B</li><li><code>.docker_temp/configs</code>\uFF1A\u5BB9\u5668\u5185\u7684<code>/etc/tca</code>\uFF0C\u5B58\u653ETCA\u5E73\u53F0\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E3B\u8981\u662F<code>config.sh</code></li></ul></li></ol></div><h5 id="\u66F4\u65B0\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u64CD\u4F5C" aria-hidden="true">#</a> \u66F4\u65B0\u64CD\u4F5C</h5><ol><li>\u66F4\u65B0\u4EE3\u7801</li><li>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>TCA_IMAGE_BUILD=true ./quick_install.sh docker deploy  #\u91CD\u65B0\u6784\u5EFA\u5E76\u542F\u52A8tca\u5BB9\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>TCA_IMAGE_BUILD=true</code>\u8868\u793A\u4ECE\u672C\u5730\u6784\u5EFATCA\u955C\u50CF\u8FD0\u884C</p></div><h5 id="\u8FD0\u884C\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u5BB9\u5668" aria-hidden="true">#</a> \u8FD0\u884C\u5BB9\u5668</h5><p>\u5982\u679C\u5DF2\u7ECF\u5728\u673A\u5668\u4E0A\u6267\u884C\u8FC7<code>docker deploy</code>\uFF0C\u5E76\u4FDD\u7559\u5BB9\u5668\u6570\u636E\u7684\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8\u5BB9\u5668\uFF0C\u7EE7\u7EED\u8FD0\u884CTCA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash ./quick_install.sh docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="\u505C\u6B62\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u5BB9\u5668" aria-hidden="true">#</a> \u505C\u6B62\u5BB9\u5668</h5><p>\u5982\u679C\u5BB9\u5668\u6B63\u5728\u8FD0\u884C\uFF0C\u5E0C\u671B\u505C\u6B62\u5BB9\u5668\uFF0C\u53EF\u4EE5\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash ./quick_install.sh docker stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528tca" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528tca" aria-hidden="true">#</a> \u4F7F\u7528TCA</h4>`,21),u=a("\u81F3\u6B64\uFF0C\u60A8\u5DF2\u5B8C\u6210\u7B2C\u4E00\u4E2ATCA\u5E73\u53F0\u90E8\u7F72\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u8F93\u5165"),p=e("code",null,"http://\u90E8\u7F72\u673A\u5668IP/",-1),_=a("\uFF0C\u70B9\u51FB\u7ACB\u5373\u4F53\u9A8C\uFF0C\u5B8C\u6210\u767B\u5F55\u540E\u5373\u53EF\u5F00\u542F\u60A8\u7684\u817E\u8BAF\u4E91\u4EE3\u7801\u5206\u6790\u3002"),b=e("br",null,null,-1),m=a(" \u5E73\u53F0\u5185\u64CD\u4F5C\u6307\u5F15\u8BF7\u67E5\u770B\uFF1A"),v=a("\u5FEB\u901F\u542F\u52A8\u4E00\u6B21\u4EE3\u7801\u5206\u6790"),k=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u63D0\u793A"),e("p",null,"\u9ED8\u8BA4\u5E73\u53F0\u767B\u5F55\u8D26\u53F7/\u5BC6\u7801\uFF1ACodeDog/admin"),e("p",null,"\u5982\u90E8\u7F72\u8FC7\u7A0B\u4E2D\uFF0C\u5DF2\u8C03\u6574\u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\uFF0C\u8BF7\u6309\u7167\u8C03\u6574\u540E\u7684\u8D26\u53F7\u5BC6\u7801\u8FDB\u884C\u767B\u5F55")],-1);function A(g,f){const i=s("RouterLink");return c(),l("div",null,[h,e("p",null,[u,p,_,b,m,o(i,{to:"/zh/guide/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E6%AC%A1%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90.html"},{default:r(()=>[v]),_:1})]),k])}const C=d(t,[["render",A],["__file","dockerDeploy.html.vue"]]);export{C as default};
