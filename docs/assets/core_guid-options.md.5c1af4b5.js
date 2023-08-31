import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.b637c96f.js";const g=JSON.parse('{"title":"GuidOptions","description":"","frontmatter":{},"headers":[],"relativePath":"core/guid-options.md","filePath":"core/guid-options.md","lastUpdated":1665313649000}'),o={name:"core/guid-options.md"},p=n(`<h1 id="guidoptions" tabindex="-1">GuidOptions <a class="header-anchor" href="#guidoptions" aria-label="Permalink to &quot;GuidOptions&quot;">​</a></h1><p>This page is about the <code>GuidOptions</code> class available in PeyrSharp.Core. You can find here all of its properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>GuidOptions</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="guidoptions-1" tabindex="-1">GuidOptions() <a class="header-anchor" href="#guidoptions-1" aria-label="Permalink to &quot;GuidOptions()&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes <code>GuidOptions</code> with default values for its properties.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GuidOptions</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    options:</span></span>
<span class="line"><span style="color:#6A737D;">        - Length = 32</span></span>
<span class="line"><span style="color:#6A737D;">        - Hyphens = true</span></span>
<span class="line"><span style="color:#6A737D;">        - Braces = false</span></span>
<span class="line"><span style="color:#6A737D;">        - UpperCaseOnly = false</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GuidOptions</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    options:</span></span>
<span class="line"><span style="color:#6A737D;">        - Length = 32</span></span>
<span class="line"><span style="color:#6A737D;">        - Hyphens = true</span></span>
<span class="line"><span style="color:#6A737D;">        - Braces = false</span></span>
<span class="line"><span style="color:#6A737D;">        - UpperCaseOnly = false</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h3 id="guidoptions-length-hyphens-braces-uppercaseonly" tabindex="-1">GuidOptions(length, hyphens, braces, upperCaseOnly) <a class="header-anchor" href="#guidoptions-length-hyphens-braces-uppercaseonly" aria-label="Permalink to &quot;GuidOptions(length, hyphens, braces, upperCaseOnly)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes <code>GuidOptions</code> with specific values for its properties.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GuidOptions</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    options:</span></span>
<span class="line"><span style="color:#6A737D;">        - Length = 32</span></span>
<span class="line"><span style="color:#6A737D;">        - Hyphens = true</span></span>
<span class="line"><span style="color:#6A737D;">        - Braces = true</span></span>
<span class="line"><span style="color:#6A737D;">        - UpperCaseOnly = true</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GuidOptions</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    options:</span></span>
<span class="line"><span style="color:#6A737D;">        - Length = 32</span></span>
<span class="line"><span style="color:#6A737D;">        - Hyphens = true</span></span>
<span class="line"><span style="color:#6A737D;">        - Braces = true</span></span>
<span class="line"><span style="color:#6A737D;">        - UpperCaseOnly = true</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="length" tabindex="-1">Length <a class="header-anchor" href="#length" aria-label="Permalink to &quot;Length&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> int Length { get; set; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> int Length { get; set; }</span></span></code></pre></div><p>The <code>Length</code> property is an <code>int</code> representing the length of the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p><h3 id="hyphens" tabindex="-1">Hyphens <a class="header-anchor" href="#hyphens" aria-label="Permalink to &quot;Hyphens&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> bool Hyphens { get; set; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> bool Hyphens { get; set; }</span></span></code></pre></div><p>The <code>Hyphens</code> property is a <code>bool</code>, which will determine if you want hyphens in the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p><h3 id="braces" tabindex="-1">Braces <a class="header-anchor" href="#braces" aria-label="Permalink to &quot;Braces&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> bool Braces { get; set; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> bool Braces { get; set; }</span></span></code></pre></div><p>The <code>Braces</code> property is a <code>bool</code>, which will determine if you want braces in the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p><h3 id="uppercaseonly" tabindex="-1">UpperCaseOnly <a class="header-anchor" href="#uppercaseonly" aria-label="Permalink to &quot;UpperCaseOnly&quot;">​</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> bool UpperCaseOnly { get; set; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> bool UpperCaseOnly { get; set; }</span></span></code></pre></div><p>The <code>UpperCaseOnly</code> property is a <code>bool</code>, which will determine if you want to only have upper cases in the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p>`,41),t=[p];function l(i,c,r,d,h,y){return a(),e("div",null,t)}const b=s(o,[["render",l]]);export{g as __pageData,b as default};
