import{_ as t,c as s,a2 as e,o as i}from"./chunks/framework.CdbxnhrM.js";const g=JSON.parse('{"title":"Storage","description":"","frontmatter":{},"headers":[],"relativePath":"core/converters/storage.md","filePath":"core/converters/storage.md","lastUpdated":1700306874000}'),n={name:"core/converters/storage.md"};function h(l,a,o,r,d,p){return i(),s("div",null,a[0]||(a[0]=[e(`<h1 id="storage" tabindex="-1">Storage <a class="header-anchor" href="#storage" aria-label="Permalink to &quot;Storage&quot;">​</a></h1><p>This page is about the <code>Storage</code> class available in <a href="/core/converters.html"><code>PeyrSharp.Core.Converters</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Storage</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table tabindex="0"><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td><td><strong>.NET 8</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="tobyte-value-storageunit" tabindex="-1">ToByte(value, storageUnit) <a class="header-anchor" href="#tobyte-value-storageunit" aria-label="Permalink to &quot;ToByte(value, storageUnit)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a size (kb, mb, ...) to byte. Returns a <code>double</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method can also be used in <a href="/extensions/double.html#tobyte-storageunit"><code>PeyrSharp.Extensions</code></a>.</p></div><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><a href="/enumerations.html#storageunits"><code>StorageUnits</code></a></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> byte</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, StorageUnits.Kilobyte);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// byte = 1000</span></span></code></pre></div><h3 id="tokilobyte-value-storageunit" tabindex="-1">ToKilobyte(value, storageUnit) <a class="header-anchor" href="#tokilobyte-value-storageunit" aria-label="Permalink to &quot;ToKilobyte(value, storageUnit)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a size (kb, mb, ...) to kilobyte. Returns a <code>double</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method can also be used in <a href="/extensions/double.html#tokilobyte-storageunit"><code>PeyrSharp.Extensions</code></a>.</p></div><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><a href="/enumerations.html#storageunits"><code>StorageUnits</code></a></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: byte, gigabyte...)</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> kilobyte</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToKilobyte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, StorageUnits.Byte);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// kilobyte = 2</span></span></code></pre></div><h3 id="tomegabyte-value-storageunit" tabindex="-1">ToMegabyte(value, storageUnit) <a class="header-anchor" href="#tomegabyte-value-storageunit" aria-label="Permalink to &quot;ToMegabyte(value, storageUnit)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a size (kb, mb, ...) to megabyte. Returns a <code>double</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method can also be used in <a href="/extensions/double.html#tomegabyte-storageunit"><code>PeyrSharp.Extensions</code></a>.</p></div><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><a href="/enumerations.html#storageunits"><code>StorageUnits</code></a></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> megabyte</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToMegabyte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, StorageUnits.Kilobyte);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// megabyte = 1.5</span></span></code></pre></div><h3 id="togigabyte-value-storageunit" tabindex="-1">ToGigabyte(value, storageUnit) <a class="header-anchor" href="#togigabyte-value-storageunit" aria-label="Permalink to &quot;ToGigabyte(value, storageUnit)&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a size (kb, mb, ...) to gigabyte. Returns a <code>double</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method can also be used in <a href="/extensions/double.html#togigabyte-storageunit"><code>PeyrSharp.Extensions</code></a>.</p></div><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><a href="/enumerations.html#storageunits"><code>StorageUnits</code></a></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, megabyte...)</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gigabyte</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToGigabyte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, StorageUnits.Megabyte);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// gigabyte = 1</span></span></code></pre></div><h3 id="toterabyte-value-storageunit" tabindex="-1">ToTerabyte(value, storageUnit) <a class="header-anchor" href="#toterabyte-value-storageunit" aria-label="Permalink to &quot;ToTerabyte(value, storageUnit)&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a size (kb, mb, ...) to terabyte. Returns a <code>double</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method can also be used in <a href="/extensions/double.html#toterabyte-storageunit"><code>PeyrSharp.Extensions</code></a>.</p></div><h4 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><a href="/enumerations.html#storageunits"><code>StorageUnits</code></a></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> terabyte</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToTerabyte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, StorageUnits.Petabyte);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// terabyte = 1000</span></span></code></pre></div><h3 id="topetabyte-value-storageunit" tabindex="-1">ToPetabyte(value, storageUnit) <a class="header-anchor" href="#topetabyte-value-storageunit" aria-label="Permalink to &quot;ToPetabyte(value, storageUnit)&quot;">​</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a size (kb, mb, ...) to petabyte. Returns a <code>double</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method can also be used in <a href="/extensions/double.html#topetabyte-storageunit"><code>PeyrSharp.Extensions</code></a>.</p></div><h4 id="arguments-5" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-5" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The value to convert.</td></tr><tr><td><a href="/enumerations.html#storageunits"><code>StorageUnits</code></a></td><td><code>storageUnit</code></td><td>The unit of the value. (ex: kilobyte, gigabyte...)</td></tr></tbody></table><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> petabyte</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ToPetabyte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, StorageUnits.Terabyte);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// petabyte = 1</span></span></code></pre></div><h3 id="bitstobytes-n" tabindex="-1">BitsToBytes(n) <a class="header-anchor" href="#bitstobytes-n" aria-label="Permalink to &quot;BitsToBytes(n)&quot;">​</a></h3><h4 id="definition-6" tabindex="-1">Definition <a class="header-anchor" href="#definition-6" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a number of bits to a number of bytes. Returns a <code>double</code> value.</p><h4 id="arguments-6" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-6" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>n</code></td><td>The number of bits to convert.</td></tr></tbody></table><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bytes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BitsToBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bytes = 8</span></span></code></pre></div><h3 id="bytestobits-n" tabindex="-1">BytesToBits(n) <a class="header-anchor" href="#bytestobits-n" aria-label="Permalink to &quot;BytesToBits(n)&quot;">​</a></h3><h4 id="definition-7" tabindex="-1">Definition <a class="header-anchor" href="#definition-7" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts a number of bytes to a number of bits. Returns a <code>double</code> value.</p><h4 id="arguments-7" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-7" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>n</code></td><td>The number of bytes to convert to bits.</td></tr></tbody></table><h4 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Core</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Converters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Storage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BytesToBits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bits = 8192</span></span></code></pre></div>`,69)]))}const c=t(n,[["render",h]]);export{g as __pageData,c as default};
