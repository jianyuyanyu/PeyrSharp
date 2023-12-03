import{_ as s,o as a,c as t,R as e}from"./chunks/framework.q7IuVqhY.js";const m=JSON.parse('{"title":"Logger","description":"","frontmatter":{},"headers":[],"relativePath":"env/logger.md","filePath":"env/logger.md","lastUpdated":1700306874000}'),i={name:"env/logger.md"},h=e(`<h1 id="logger" tabindex="-1">Logger <a class="header-anchor" href="#logger" aria-label="Permalink to &quot;Logger&quot;">​</a></h1><p>This page is about the <code>Logger</code> class available in <a href="/env.html"><code>PeyrSharp.Env</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Logger</code> class is part of the <code>PeyrSharp.Env</code> module, and is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Env</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td><td><strong>.NET 8</strong></td></tr><tr><td>Env</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Some methods, classes or features of <code>PeyrSharp.Env</code> might not be available in all platforms.</p></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="log-message-filepath-datetime" tabindex="-1">Log(message, filePath, dateTime) <a class="header-anchor" href="#log-message-filepath-datetime" aria-label="Permalink to &quot;Log(message, filePath, dateTime)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>The <code>Log()</code> method logs a specific message alongside a timestamp into a file. This method does not return a value (<code>void</code>).</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You can call this method multiple times on the same file and it will append the message to it.</p></div><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>message</code></td><td>The message or text that needs to be logged.</td></tr><tr><td><code>string</code></td><td><code>filePath</code></td><td>The path where the file should be written.</td></tr><tr><td><code>DateTime</code></td><td><code>dateTime</code></td><td>The timestamp of the log, the time when the log was made.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;C:\\Logs\\log1.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, DateTime.Now)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The line above will generate a file with the following content:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [10/31/2022 09:23:18] Hello</span></span></code></pre></div><h3 id="log-message-filepath-formatstring" tabindex="-1">Log(message, filePath, formatString) <a class="header-anchor" href="#log-message-filepath-formatstring" aria-label="Permalink to &quot;Log(message, filePath, formatString)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Logs a formatted message to a file. This method does not return a value.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>message</code></td><td>The log message to be written.</td></tr><tr><td><code>string</code></td><td><code>filePath</code></td><td>The path to the log file. Must contain an extension.</td></tr><tr><td><code>object[]</code></td><td><code>formatString</code></td><td>An object array that contains zero or more objects to format.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;This is a log message. Date: {0}.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @&quot;C:\\Logs\\log.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DateTime.Now;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message, filePath, date);</span></span></code></pre></div><h3 id="log-message-filepath-datetime-loglevel" tabindex="-1">Log(message, filePath, dateTime, logLevel) <a class="header-anchor" href="#log-message-filepath-datetime-loglevel" aria-label="Permalink to &quot;Log(message, filePath, dateTime, logLevel)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Logs a message with the specified severity level, file path, and timestamp. This method does not return a value.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>message</code></td><td>The message to log.</td></tr><tr><td><code>string</code></td><td><code>filePath</code></td><td>The path to the file where the message was logged.</td></tr><tr><td><code>DateTime</code></td><td><code>dateTime</code></td><td>The timestamp for the log message.</td></tr><tr><td><a href="/enumerations.html#loglevel"><code>LogLevel</code></a></td><td><code>logLevel</code></td><td>The severity level for the log message.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Enums</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PeyrSharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;This is a log message.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> filePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @&quot;C:\\Logs\\log.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DateTime.Now;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LogLevel</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> logLevel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LogLevel.Warning;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message, filePath, date, logLevel);</span></span></code></pre></div>`,30),n=[h];function l(d,o,r,p,g,k){return a(),t("div",null,n)}const E=s(i,[["render",l]]);export{m as __pageData,E as default};
