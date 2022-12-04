import{_ as e,c as a,o as s,a as t}from"./app.28de27a0.js";const y=JSON.parse('{"title":"Angle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"DegreesToRadians(degrees)","slug":"degreestoradians-degrees","link":"#degreestoradians-degrees","children":[]},{"level":3,"title":"RadiansToDegrees(radians)","slug":"radianstodegrees-radians","link":"#radianstodegrees-radians","children":[]}]}],"relativePath":"core/converters/angle.md","lastUpdated":1666626451000}'),n={name:"core/converters/angle.md"},r=t(`<h1 id="angle" tabindex="-1">Angle <a class="header-anchor" href="#angle" aria-hidden="true">#</a></h1><p>This page is about the <code>Angle</code> class available in <a href="/core/converters.html"><code>PeyrSharp.Core.Converters</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>The <code>Angle</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="degreestoradians-degrees" tabindex="-1">DegreesToRadians(degrees) <a class="header-anchor" href="#degreestoradians-degrees" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Converts degrees to radians. Returns a <code>double</code> value.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>degrees</code></td><td>Number of degrees to convert.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">radians</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Angle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DegreesToRadians</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// radians = 1.5707963271535559</span></span>
<span class="line"></span></code></pre></div><h3 id="radianstodegrees-radians" tabindex="-1">RadiansToDegrees(radians) <a class="header-anchor" href="#radianstodegrees-radians" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>Converts radians to degrees. Returns a <code>double</code> value.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>radians</code></td><td>Number of radians to convert.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">deg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Angle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RadiansToDegrees</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1.2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// deg = 68.7549354</span></span>
<span class="line"></span></code></pre></div>`,21),o=[r];function d(l,i,c,p,h,g){return s(),a("div",null,o)}const b=e(n,[["render",d]]);export{y as __pageData,b as default};