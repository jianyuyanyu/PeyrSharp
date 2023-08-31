import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.b637c96f.js";const u=JSON.parse('{"title":"Update","description":"","frontmatter":{},"headers":[],"relativePath":"env/update.md","filePath":"env/update.md","lastUpdated":1683354307000}'),e={name:"env/update.md"},t=o(`<h1 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;Update&quot;">​</a></h1><p>This page is about the <code>Update</code> class available in <a href="/env.html"><code>PeyrSharp.Env</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Update</code> class is part of the <code>PeyrSharp.Env</code> module, and is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Env</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Env</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Some methods, classes or features of <code>PeyrSharp.Env</code> might not be available in all platforms.</p></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getlastversionasync-url" tabindex="-1">GetLastVersionAsync(url) <a class="header-anchor" href="#getlastversionasync-url" aria-label="Permalink to &quot;GetLastVersionAsync(url)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Downloads the content of remote file as <code>string</code>. The remote file should contain the last version text. Do not provide the URL of an HTML page.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is asynchronous and awaitable.</p></div><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>url</code></td><td>Link of the file where the latest version is stored.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lastVersion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> Update.</span><span style="color:#B392F0;">GetLastVersionAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://raw.githubusercontent.com/DevyusCode/LeoCorp-Docs/master/Liens/Update%20System/LABS%20Experimental%20Console/version.txt&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// lastVersion would be equal to the content of this text files</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Env</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lastVersion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> Update.</span><span style="color:#6F42C1;">GetLastVersionAsync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://raw.githubusercontent.com/DevyusCode/LeoCorp-Docs/master/Liens/Update%20System/LABS%20Experimental%20Console/version.txt&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// lastVersion would be equal to the content of this text files</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="isavailable-currentversion-remoteversion" tabindex="-1">IsAvailable(currentVersion, remoteVersion) <a class="header-anchor" href="#isavailable-currentversion-remoteversion" aria-label="Permalink to &quot;IsAvailable(currentVersion, remoteVersion)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Compares two versions. Returns a <code>bool</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>It is recommended to use this method with the <a href="#getlastversionasync-url"><code>GetLastVersionAsync()</code></a> one.</p></div><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>currentVersion</code></td><td>The current version of the app.</td></tr><tr><td><code>string</code></td><td><code>removeVersion</code></td><td>The latest version, stored remotely.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Env</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">current</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> Update.</span><span style="color:#B392F0;">GetLastVersionAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://raw.githubusercontent.com/DevyusCode/LeoCorp-Docs/master/Liens/Update%20System/LABS%20Experimental%20Console/version.txt&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    Console.</span><span style="color:#B392F0;">WriteLine</span><span style="color:#E1E4E8;">(Update.</span><span style="color:#B392F0;">IsAvailable</span><span style="color:#E1E4E8;">(current, last)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Updates are available.&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;You are up-to-date.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Env</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">current</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">last</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> Update.</span><span style="color:#6F42C1;">GetLastVersionAsync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://raw.githubusercontent.com/DevyusCode/LeoCorp-Docs/master/Liens/Update%20System/LABS%20Experimental%20Console/version.txt&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    Console.</span><span style="color:#6F42C1;">WriteLine</span><span style="color:#24292E;">(Update.</span><span style="color:#6F42C1;">IsAvailable</span><span style="color:#24292E;">(current, last)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Updates are available.&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;You are up-to-date.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,24),l=[t];function p(r,c,i,d,y,E){return a(),n("div",null,l)}const m=s(e,[["render",p]]);export{u as __pageData,m as default};
