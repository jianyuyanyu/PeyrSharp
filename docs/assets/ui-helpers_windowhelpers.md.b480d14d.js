import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.b40c9ff3.js";const w=JSON.parse('{"title":"WindowHelpers","description":"","frontmatter":{},"headers":[],"relativePath":"ui-helpers/windowhelpers.md","filePath":"ui-helpers/windowhelpers.md","lastUpdated":1696079164000}'),l={name:"ui-helpers/windowhelpers.md"},e=o(`<h1 id="windowhelpers" tabindex="-1">WindowHelpers <a class="header-anchor" href="#windowhelpers" aria-label="Permalink to &quot;WindowHelpers&quot;">​</a></h1><p>This page is about the <code>WindowHelpers</code> class available in <a href="./../ui-helpers.html"><code>PeyrSharp.UiHelpers</code></a>. This page is about all of its methods.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>WindowHelpers are part of the <code>PeyrSharp.UiHelpers</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>UiHelpers</td><td>✅</td><td>❌</td><td>❌</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>UiHelpers</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getwindows" tabindex="-1">GetWindows() <a class="header-anchor" href="#getwindows" aria-label="Permalink to &quot;GetWindows()&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Retrieves a list of currently visible windows.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>A list of <code>WindowInfo</code> objects representing the visible windows.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Collections</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Generic</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyWindowManager</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PrintOpenedWindows</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">List</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">WindowInfo</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#B392F0;">windows</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> WinFormsHelpers.</span><span style="color:#B392F0;">GetWindows</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">WindowInfo</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">window</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> windows)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            Console.</span><span style="color:#B392F0;">WriteLine</span><span style="color:#E1E4E8;">(window.Name);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Collections</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Generic</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyWindowManager</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PrintOpenedWindows</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">List</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">WindowInfo</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">windows</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WinFormsHelpers.</span><span style="color:#6F42C1;">GetWindows</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">WindowInfo</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">window</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> windows)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            Console.</span><span style="color:#6F42C1;">WriteLine</span><span style="color:#24292E;">(window.Name);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="closewindow-windowinfo" tabindex="-1">CloseWindow(windowInfo) <a class="header-anchor" href="#closewindow-windowinfo" aria-label="Permalink to &quot;CloseWindow(windowInfo)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Closes a window.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>WindowInfo</code></td><td><code>windowInfo</code></td><td>The window to close.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Linq</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ws</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> WindowHelpers.</span><span style="color:#B392F0;">GetWindows</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">w</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ws.</span><span style="color:#B392F0;">Where</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> x.ClassName </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Notepad&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">First</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">WindowHelpers.</span><span style="color:#B392F0;">CloseWindow</span><span style="color:#E1E4E8;">(w)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Linq</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ws</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WindowHelpers.</span><span style="color:#6F42C1;">GetWindows</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">w</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ws.</span><span style="color:#6F42C1;">Where</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> x.ClassName </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Notepad&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">First</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">WindowHelpers.</span><span style="color:#6F42C1;">CloseWindow</span><span style="color:#24292E;">(w)</span></span></code></pre></div><h3 id="maximizewindow-windowinfo" tabindex="-1">MaximizeWindow(windowInfo) <a class="header-anchor" href="#maximizewindow-windowinfo" aria-label="Permalink to &quot;MaximizeWindow(windowInfo)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Maximizes a window.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>WindowInfo</code></td><td><code>windowInfo</code></td><td>The window to maximize.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Linq</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ws</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> WindowHelpers.</span><span style="color:#B392F0;">GetWindows</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">w</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ws.</span><span style="color:#B392F0;">Where</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> x.ClassName </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Notepad&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">First</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">WindowHelpers.</span><span style="color:#B392F0;">MaximizeWindow</span><span style="color:#E1E4E8;">(w)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Linq</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ws</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WindowHelpers.</span><span style="color:#6F42C1;">GetWindows</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">w</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ws.</span><span style="color:#6F42C1;">Where</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> x.ClassName </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Notepad&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">First</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">WindowHelpers.</span><span style="color:#6F42C1;">MaximizeWindow</span><span style="color:#24292E;">(w)</span></span></code></pre></div><h3 id="restorewindow-windowinfo" tabindex="-1">RestoreWindow(windowInfo) <a class="header-anchor" href="#restorewindow-windowinfo" aria-label="Permalink to &quot;RestoreWindow(windowInfo)&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Restores a window.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>WindowInfo</code></td><td><code>windowInfo</code></td><td>The window to restore.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Linq</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ws</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> WindowHelpers.</span><span style="color:#B392F0;">GetWindows</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">w</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ws.</span><span style="color:#B392F0;">Where</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> x.ClassName </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Notepad&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">First</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">WindowHelpers.</span><span style="color:#B392F0;">RestoreWindow</span><span style="color:#E1E4E8;">(w)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Linq</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ws</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WindowHelpers.</span><span style="color:#6F42C1;">GetWindows</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">w</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ws.</span><span style="color:#6F42C1;">Where</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> x.ClassName </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Notepad&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">First</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">WindowHelpers.</span><span style="color:#6F42C1;">RestoreWindow</span><span style="color:#24292E;">(w)</span></span></code></pre></div><h3 id="minimizewindow-windowinfo" tabindex="-1">MinimizeWindow(windowInfo) <a class="header-anchor" href="#minimizewindow-windowinfo" aria-label="Permalink to &quot;MinimizeWindow(windowInfo)&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Minimizes a window.</p><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>WindowInfo</code></td><td><code>windowInfo</code></td><td>The window to minimize.</td></tr></tbody></table><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Linq</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ws</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> WindowHelpers.</span><span style="color:#B392F0;">GetWindows</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">w</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ws.</span><span style="color:#B392F0;">Where</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> x.ClassName </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Notepad&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">First</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">WindowHelpers.</span><span style="color:#B392F0;">MinimizeWindow</span><span style="color:#E1E4E8;">(w)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Linq</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ws</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WindowHelpers.</span><span style="color:#6F42C1;">GetWindows</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">w</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ws.</span><span style="color:#6F42C1;">Where</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> x.ClassName </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Notepad&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">First</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">WindowHelpers.</span><span style="color:#6F42C1;">MinimizeWindow</span><span style="color:#24292E;">(w)</span></span></code></pre></div><h3 id="movewindow-windowinfo-x-y" tabindex="-1">MoveWindow(windowInfo, x, y) <a class="header-anchor" href="#movewindow-windowinfo-x-y" aria-label="Permalink to &quot;MoveWindow(windowInfo, x, y)&quot;">​</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Moves a window to specified coordinates.</p><h4 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>WindowInfo</code></td><td><code>windowInfo</code></td><td>The window to move.</td></tr><tr><td><code>int</code></td><td><code>x</code></td><td>The X-axis coordinates.</td></tr><tr><td><code>int</code></td><td><code>y</code></td><td>The Y-axis coordinates.</td></tr></tbody></table><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">WindowHelpers.</span><span style="color:#B392F0;">MoveWindow</span><span style="color:#E1E4E8;">(w, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// w is a WindowInfo object, see previous examples.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">WindowHelpers.</span><span style="color:#6F42C1;">MoveWindow</span><span style="color:#24292E;">(w, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// w is a WindowInfo object, see previous examples.</span></span></code></pre></div><h3 id="settopmost-windowinfo-istopmost" tabindex="-1">SetTopMost(windowInfo, isTopMost) <a class="header-anchor" href="#settopmost-windowinfo-istopmost" aria-label="Permalink to &quot;SetTopMost(windowInfo, isTopMost)&quot;">​</a></h3><h4 id="definition-6" tabindex="-1">Definition <a class="header-anchor" href="#definition-6" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Sets the Topmost property of a window.</p><h4 id="arguments-5" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-5" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>WindowInfo</code></td><td><code>windowInfo</code></td><td>The window to target.</td></tr><tr><td><code>bool</code></td><td><code>isTopMost</code></td><td>The value of the TopMost property.</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">Note</p><p>The <code>isTopMost</code> parameter can be set to <code>true</code> if the window should always stay on top; <code>false</code> otherwise.</p></div><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">WindowHelpers.</span><span style="color:#B392F0;">SetTopMost</span><span style="color:#E1E4E8;">(w, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">WindowHelpers.</span><span style="color:#6F42C1;">SetTopMost</span><span style="color:#24292E;">(w, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="getwindowsize-windowinfo" tabindex="-1">GetWindowSize(windowInfo) <a class="header-anchor" href="#getwindowsize-windowinfo" aria-label="Permalink to &quot;GetWindowSize(windowInfo)&quot;">​</a></h3><h4 id="definition-7" tabindex="-1">Definition <a class="header-anchor" href="#definition-7" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the width and height of a window. It returns a tuple of integers representing the width and height of the window.</p><h4 id="arguments-6" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-6" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>WindowInfo</code></td><td><code>windowInfo</code></td><td>The window to get the size of.</td></tr></tbody></table><h4 id="exceptions" tabindex="-1">Exceptions <a class="header-anchor" href="#exceptions" aria-label="Permalink to &quot;Exceptions&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>InvalidOperationException</code></td><td>Thrown if failed to retrieve window size.</td></tr></tbody></table><h4 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">UiHelpers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> WindowHelpers.</span><span style="color:#B392F0;">GetWindowSize</span><span style="color:#E1E4E8;">(w); </span><span style="color:#6A737D;">// w is a WindowInfo object, see previous examples.</span></span>
<span class="line"><span style="color:#E1E4E8;">Console.</span><span style="color:#B392F0;">WriteLine</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">$&quot;Width: {</span><span style="color:#E1E4E8;">size</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">Item1</span><span style="color:#9ECBFF;">}, Height: {</span><span style="color:#E1E4E8;">size</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">Item2</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">UiHelpers</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> WindowHelpers.</span><span style="color:#6F42C1;">GetWindowSize</span><span style="color:#24292E;">(w); </span><span style="color:#6A737D;">// w is a WindowInfo object, see previous examples.</span></span>
<span class="line"><span style="color:#24292E;">Console.</span><span style="color:#6F42C1;">WriteLine</span><span style="color:#24292E;">(</span><span style="color:#032F62;">$&quot;Width: {</span><span style="color:#24292E;">size</span><span style="color:#032F62;">.</span><span style="color:#24292E;">Item1</span><span style="color:#032F62;">}, Height: {</span><span style="color:#24292E;">size</span><span style="color:#032F62;">.</span><span style="color:#24292E;">Item2</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div>`,65),p=[e];function t(r,c,i,y,d,E){return a(),n("div",null,p)}const u=s(l,[["render",t]]);export{w as __pageData,u as default};