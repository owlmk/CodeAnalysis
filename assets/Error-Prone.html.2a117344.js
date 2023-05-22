import{_ as s,r as l,o as d,c as t,a as e,b as r,w as c,f as i,d as n}from"./app.ed144a5b.js";const v={},u=i('<h1 id="error-prone-\u4F7F\u7528\u624B\u518C" tabindex="-1"><a class="header-anchor" href="#error-prone-\u4F7F\u7528\u624B\u518C" aria-hidden="true">#</a> Error Prone \u4F7F\u7528\u624B\u518C</h1><h2 id="error-prone-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#error-prone-\u4ECB\u7ECD" aria-hidden="true">#</a> Error Prone \u4ECB\u7ECD</h2><blockquote><p>Error Prone\u662Fgoogle\u5F00\u6E90\u7684Java\u7F16\u8BD1\u65F6\u68C0\u6D4B\u5DE5\u5177\uFF0C\u5C06\u5E38\u89C1\u7684Java\u9519\u8BEF\u6355\u83B7\u4E3A\u7F16\u8BD1\u65F6\u9519\u8BEF\uFF0C\u589E\u5F3A\u5BF9java\u4EE3\u7801\u7684\u7C7B\u578B\u5206\u6790\uFF0C\u4ECE\u800C\u8BA9\u5F00\u53D1\u4EBA\u5458\u53CA\u65F6\u53D1\u73B0\u95EE\u9898</p></blockquote><h2 id="tca\u4F7F\u7528\u6307\u5F15" tabindex="-1"><a class="header-anchor" href="#tca\u4F7F\u7528\u6307\u5F15" aria-hidden="true">#</a> TCA\u4F7F\u7528\u6307\u5F15</h2><p>TCA\u539F\u6709\u7F16\u8BD1\u65F6\u68C0\u6D4B\u5DE5\u5177JavaWarning\u83B7\u53D6java\u4EE3\u7801\u7F16\u8BD1\u65F6\u7684\u544A\u8B66\u4FE1\u606F\uFF0C\u73B0\u96C6\u6210Error Prone\u89C4\u5219\u81F3JavaWarning\u5DE5\u5177\u4EE5\u589E\u52A0\u83B7\u53D6Error Prone\u7684\u9519\u8BEF\u544A\u8B66\u4FE1\u606F\u3002</p>',5),m=e("li",null,"\u5728\u89C4\u5219\u5305\u4E2D\u6DFB\u52A0JavaWarning\u5DE5\u5177\u7684Error Prone\u89C4\u5219\uFF08\u53EF\u901A\u8FC7\u89C4\u5219\u89E3\u51B3\u65B9\u6CD5\u8FDB\u884C\u533A\u5206\uFF09\uFF1B",-1),p=n("\u91C7\u7528"),h=n("TCA Client"),g=n("\u6A21\u5F0F\uFF0C\u6839\u636E\u5BA2\u6237\u7AEF\u73AF\u5883\u914D\u7F6E\u5DE5\u5177\u548C\u7F16\u8BD1\u547D\u4EE4\uFF0C\u8BE6\u60C5\u53C2\u8003\u4E0B\u6587\uFF1B"),b=e("li",null,"\u5BA2\u6237\u7AEF\u542F\u52A8\u5206\u6790\uFF0C\u5728TCA Web\u9875\u9762\u4E0A\u67E5\u770B\u95EE\u9898\u3002",-1),_=e("h2",{id:"error-prone-\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-prone-\u914D\u7F6E","aria-hidden":"true"},"#"),n(" Error Prone \u914D\u7F6E")],-1),E=e("h3",{id:"\u901A\u8FC7bazel\u6784\u5EFA",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u901A\u8FC7bazel\u6784\u5EFA","aria-hidden":"true"},"#"),n(" \u901A\u8FC7Bazel\u6784\u5EFA")],-1),A=e("li",null,[n("Bazel\u5728\u6784\u5EFAjava\u9879\u76EE\u65F6\uFF0C\u9ED8\u8BA4\u6253\u5F00\u4E86Error Prone\uFF0C\u6240\u4EE5\u5728\u672C\u5730\u914D\u7F6EBazel\u73AF\u5883\uFF0C\u7F16\u5199Bazel\u6784\u5EFA\u6587\u4EF6\uFF0C"),e("code",null,"bazel build :project"),n("\u6784\u5EFA\u9879\u76EE\u5373\u53EF\u3002")],-1),j=n("\u8BE6\u60C5\u8BF7\u53C2\u8003"),N={href:"https://bazel.build/?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},L=n("Bazel\u5B98\u65B9\u6587\u6863"),f=i(`<h3 id="maven-\u914D\u7F6E-error-prone" tabindex="-1"><a class="header-anchor" href="#maven-\u914D\u7F6E-error-prone" aria-hidden="true">#</a> Maven \u914D\u7F6E Error Prone</h3><p>\u7F16\u8F91pom.xml\u6587\u4EF6\u5C06\u8BBE\u7F6E\u6DFB\u52A0\u5230maven-compiler-plugin\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;build&gt;
    &lt;plugins&gt;
      &lt;plugin&gt;
        &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
        &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
        &lt;version&gt;3.8.0&lt;/version&gt;
        &lt;configuration&gt;
          &lt;source&gt;8&lt;/source&gt;
          &lt;target&gt;8&lt;/target&gt;
          &lt;encoding&gt;UTF-8&lt;/encoding&gt;
          &lt;compilerArgs&gt;
            &lt;arg&gt;-XDcompilePolicy=simple&lt;/arg&gt;
            &lt;arg&gt;-Xplugin:ErrorProne&lt;/arg&gt;
          &lt;/compilerArgs&gt;
          &lt;annotationProcessorPaths&gt;
            &lt;path&gt;
              &lt;groupId&gt;com.google.errorprone&lt;/groupId&gt;
              &lt;artifactId&gt;error_prone_core&lt;/artifactId&gt;
              &lt;version&gt;\${error-prone.version}&lt;/version&gt;
            &lt;/path&gt;
            &lt;!-- Other annotation processors go here.

            If &#39;annotationProcessorPaths&#39; is set, processors will no longer be
            discovered on the regular -classpath; see also &#39;Using Error Prone
            together with other annotation processors&#39; below. --&gt;
          &lt;/annotationProcessorPaths&gt;
        &lt;/configuration&gt;
      &lt;/plugin&gt;
    &lt;/plugins&gt;
  &lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E<code>JDK 16</code>\u6216\u66F4\u9AD8\u7684\u7248\u672C\uFF0C\u9700\u8981\u5C06\u4EE5\u4E0B\u5185\u5BB9<code>--add-exports</code>\u548C<code>--add-opens</code>\u6807\u5FD7\u6DFB\u52A0\u5230<code>.mvn/jvm.config</code>\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>--add-exports jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED
--add-exports jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED
--add-exports jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED
--add-exports jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED
--add-exports jdk.compiler/com.sun.tools.javac.parser=ALL-UNNAMED
--add-exports jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED
--add-exports jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED
--add-exports jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED
--add-opens jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED
--add-opens jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###\u547D\u4EE4\u884C Error Prone \u652F\u6301<code>com.sun.source.util.Plugin</code>API\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u5C06 Error Prone \u6DFB\u52A0\u5230<code>-processorpath</code>\u5E76\u8BBE\u7F6E<code>-Xplugin</code>\u6807\u5FD7\u6765\u4E0E<code>JDK 9</code>\u53CA\u66F4\u9AD8\u7248\u672C\u4E00\u8D77\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>wget https://repo1.maven.org/maven2/com/google/errorprone/error_prone_core/\${EP_VERSION?}/error_prone_core-\${EP_VERSION?}-with-dependencies.jar
wget https://repo1.maven.org/maven2/org/checkerframework/dataflow-errorprone/3.15.0/dataflow-errorprone-3.15.0.jar
javac \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.api=ALL-UNNAMED \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.parser=ALL-UNNAMED \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED \\
  -J--add-exports=jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED \\
  -J--add-opens=jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED \\
  -J--add-opens=jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED \\
  -XDcompilePolicy=simple \\
  -processorpath error_prone_core-\${EP_VERSION?}-with-dependencies.jar:dataflow-errorprone-3.15.0.jar \\
  &#39;-Xplugin:ErrorProne -XepDisableAllChecks -Xep:CollectionIncompatibleType:ERROR&#39; \\
  Example.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),x=e("li",null,[n("\u5BF9\u4E8E"),e("code",null,"JDK 16"),n("\u4EE5\u53CA\u66F4\u9AD8\u7684\u7248\u672C"),e("code",null,"--add-exports"),n("\u548C"),e("code",null,"--add-opens"),n("\u53C2\u6570\u662F\u5FC5\u987B\u7684")],-1),k=n("\u5BF9\u4E8E"),P=e("code",null,"JDK 8",-1),D=n(",\u8BF7\u53C2\u8003"),U={href:"https://github.com/google/error-prone/blob/f8e33bc460be82ab22256a7ef8b979d7a2cacaba/docs/installation.md",target:"_blank",rel:"noopener noreferrer"},M=n("\u65E7\u7248\u672C\u5B89\u88C5\u8BF4\u660E"),J=e("h3",{id:"\u5176\u4ED6\u914D\u7F6E\u548C\u6CE8\u610F\u4E8B\u9879",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5176\u4ED6\u914D\u7F6E\u548C\u6CE8\u610F\u4E8B\u9879","aria-hidden":"true"},"#"),n(" \u5176\u4ED6\u914D\u7F6E\u548C\u6CE8\u610F\u4E8B\u9879")],-1),I=n("Error Prone\u8FD8\u652F\u6301\u901A\u8FC7Gradle\u548CAnt\u914D\u7F6E\uFF0C\u8BE6\u60C5\u53C2\u8003"),w={href:"https://errorprone.info/docs/installation",target:"_blank",rel:"noopener noreferrer"},C=n("Error Prone\u5B98\u65B9\u914D\u7F6E\u6587\u6863"),B=n("\u4E0D\u540CJDK\u7248\u672C\u53C2\u6570\u6709\u6240\u4E0D\u540C\uFF0C\u8BE6\u60C5\u53C2\u8003"),z={href:"https://github.com/google/error-prone/blob/f8e33bc460be82ab22256a7ef8b979d7a2cacaba/docs/installation.md",target:"_blank",rel:"noopener noreferrer"},R=n("\u65E7\u7248\u672C\u5B89\u88C5\u8BF4\u660E");function T(V,X){const a=l("RouterLink"),o=l("ExternalLinkIcon");return d(),t("div",null,[u,e("ul",null,[m,e("li",null,[p,r(a,{to:"/en/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E6%9C%AC%E5%9C%B0%E5%88%86%E6%9E%90.html"},{default:c(()=>[h]),_:1}),g]),b]),_,E,e("ul",null,[A,e("li",null,[j,e("a",N,[L,r(o)])])]),f,e("ul",null,[x,e("li",null,[k,P,D,e("a",U,[M,r(o)])])]),J,e("ul",null,[e("li",null,[I,e("a",w,[C,r(o)])]),e("li",null,[B,e("a",z,[R,r(o)])])])])}const O=s(v,[["render",T],["__file","Error-Prone.html.vue"]]);export{O as default};
