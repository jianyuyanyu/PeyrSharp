import{_ as s,c as i,a2 as t,o as e}from"./chunks/framework.CdbxnhrM.js";const c=JSON.parse('{"title":"UwpApp","description":"","frontmatter":{},"headers":[],"relativePath":"env/uwpapp.md","filePath":"env/uwpapp.md","lastUpdated":1700306874000}'),p={name:"env/uwpapp.md"};function n(h,a,l,r,o,d){return e(),i("div",null,a[0]||(a[0]=[t(`<h1 id="uwpapp" tabindex="-1">UwpApp <a class="header-anchor" href="#uwpapp" aria-label="Permalink to &quot;UwpApp&quot;">​</a></h1><p>This page is about the <code>UwpApp</code> class available in <a href="/env.html"><code>PeyrSharp.Env</code></a>. It Represents a simplified version of a UWP app object.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>UwpApp</code> class is part of the <code>PeyrSharp.Env</code> module, and is compatible with all of these frameworks and platforms:</p><table tabindex="0"><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Env</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td><td><strong>.NET 8</strong></td></tr><tr><td>Env</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Some methods, classes or features of <code>PeyrSharp.Env</code> might not be available in all platforms.</p></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="name" tabindex="-1">Name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;Name&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Name { get; init; }</span></span></code></pre></div><p>The name of the UWP app.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create a UwpApp object</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UwpApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> uwpApp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UwpApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyApp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.example.myapp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Access the properties of the UwpApp object</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uwpApp.Name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Output: MyApp</span></span></code></pre></div><h3 id="appid" tabindex="-1">AppID <a class="header-anchor" href="#appid" aria-label="Permalink to &quot;AppID&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Name { get; init; }</span></span></code></pre></div><p>The App ID in the Package Family Name property.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Create a UwpApp object</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UwpApp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> uwpApp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UwpApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyApp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.example.myapp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Access the properties of the UwpApp object</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uwpApp.AppID); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Output: com.example.myapp</span></span></code></pre></div>`,19)]))}const g=s(p,[["render",n]]);export{c as __pageData,g as default};
