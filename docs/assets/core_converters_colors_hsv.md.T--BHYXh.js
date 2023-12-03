import{_ as a,o as t,c as e,R as i}from"./chunks/framework.q7IuVqhY.js";const g=JSON.parse('{"title":"HSV","description":"","frontmatter":{},"headers":[],"relativePath":"core/converters/colors/hsv.md","filePath":"core/converters/colors/hsv.md","lastUpdated":1700306874000}'),s={name:"core/converters/colors/hsv.md"},o=i(`<h1 id="hsv" tabindex="-1">HSV <a class="header-anchor" href="#hsv" aria-label="Permalink to &quot;HSV&quot;">​</a></h1><p>This page is about the <code>HSV</code> class available in <a href="/core/converters.html"><code>PeyrSharp.Core.Converters</code></a>. You can find here all of its methods and properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>HSV</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td><td><strong>.NET 8</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="hsv-hue-saturation-value" tabindex="-1">HSV(hue, saturation, value) <a class="header-anchor" href="#hsv-hue-saturation-value" aria-label="Permalink to &quot;HSV(hue, saturation, value)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a <code>HSV</code> color from its hue, saturation, and value.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>hue</code></td><td>The Hue of the color.</td></tr><tr><td><code>int</code></td><td><code>saturation</code></td><td>The saturation percentage.</td></tr><tr><td><code>int</code></td><td><code>value</code></td><td>The value/brightness percentage.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HSV</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hsv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">75</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="hue" tabindex="-1">Hue <a class="header-anchor" href="#hue" aria-label="Permalink to &quot;Hue&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Hue { get; init; }</span></span></code></pre></div><p>The <code>Hue</code> property contains the hue of the HSV color. You can only <code>get</code> this property.</p><h3 id="saturation" tabindex="-1">Saturation <a class="header-anchor" href="#saturation" aria-label="Permalink to &quot;Saturation&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Saturation { get; init; }</span></span></code></pre></div><p>The <code>Value</code> property contains the saturation percentage of the HSV color. You can only <code>get</code> this property.</p><h3 id="value" tabindex="-1">Value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;Value&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Value { get; init; }</span></span></code></pre></div><p>The <code>Value</code> property contains the value/brightness percentage of the HSV color. You can only <code>get</code> this property.</p>`,26),n=[o];function h(r,d,l,c,p,u){return t(),e("div",null,n)}const b=a(s,[["render",h]]);export{g as __pageData,b as default};
