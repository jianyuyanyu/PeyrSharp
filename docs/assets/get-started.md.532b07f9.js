import{_ as e,c as a,o as s,a as l}from"./app.8bc8667e.js";const g=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Packages and modules","slug":"packages-and-modules","link":"#packages-and-modules","children":[]},{"level":2,"title":"Installation methods","slug":"installation-methods","link":"#installation-methods","children":[{"level":3,"title":".NET CLI","slug":"net-cli","link":"#net-cli","children":[]},{"level":3,"title":"Package Manager","slug":"package-manager","link":"#package-manager","children":[]},{"level":3,"title":"Package Reference","slug":"package-reference","link":"#package-reference","children":[]}]}],"relativePath":"get-started.md","lastUpdated":1665225647000}'),n={name:"get-started.md"},t=l(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="packages-and-modules" tabindex="-1">Packages and modules <a class="header-anchor" href="#packages-and-modules" aria-hidden="true">#</a></h2><p>Before installing PeyrSharp, you may want to consider what features you will actually need to use in your project. Indeed, PeyrSharp is divided in multiple modules and packages.</p><p>If you think you need all the features of PeyrSharp, you can directly install the PeyrSharp NuGet package. However, you can also install the packages that you only need in your project. Here&#39;s a list of all the packages and their features:</p><p><strong>PeyrSharp</strong>, the main package, that contains all of the followings:</p><details class="details custom-block"><summary><strong>PeyrSharp.Core</strong>, the basic methods and features of C#</summary><ul><li>Maths</li><li>Password</li><li>Guid</li><li>Converters</li><li>Internet</li><li>Crypt</li></ul></details><details class="details custom-block"><summary><strong>PeyrSharp.Env</strong>, methods related to the file system and to the current execution environment.</summary><ul><li>FileSys</li><li>Logger</li><li>Update</li><li>System</li></ul></details><details class="details custom-block"><summary><strong>PeyrSharp.Enums</strong>, all enumerations used by PeyrSharp</summary><ul><li>WindowsVersion</li><li>TimeUnits</li><li>SystemThemes</li><li>OperatingSystems</li><li>StorageUnits</li><li>ControlAlignment</li><li>PasswordPresets</li><li>PasswordStrength</li></ul></details><details class="details custom-block"><summary><strong>PeyrSharp.Exceptions</strong>, all exceptions used by PeyrSharp</summary><ul><li>RGBInvalidValueException</li><li>HEXInvalidValueException</li><li>InvalidGuidLengthException</li></ul></details><details class="details custom-block"><summary><strong>PeyrSharp.Extensions</strong>, extension methods, that extends basic types, such as <code>string</code>, <code>int</code>, <code>double</code> or arrays (<code>T[]</code>).</summary><ul><li>String</li><li>Int</li><li>Double</li><li>Array (<code>T[]</code>)</li></ul></details><details class="details custom-block"><summary><strong>PeyrSharp.UiHelpers</strong>, methods related to Windows Forms or to the Windows Presentation Framework (WPF).</summary><ul><li>WinForms</li><li>Screen</li><li>WPF</li></ul></details><h2 id="installation-methods" tabindex="-1">Installation methods <a class="header-anchor" href="#installation-methods" aria-hidden="true">#</a></h2><p>PeyrShall is available on NuGet, you can install it by running the following command:</p><h3 id="net-cli" tabindex="-1">.NET CLI <a class="header-anchor" href="#net-cli" aria-hidden="true">#</a></h3><p>You can add PeyrSharp to your project the .NET CLI.</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dotnet add package PeyrSharp </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">version </span><span style="color:#F78C6C;">1.0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0.2210</span></span>
<span class="line"></span></code></pre></div><h3 id="package-manager" tabindex="-1">Package Manager <a class="header-anchor" href="#package-manager" aria-hidden="true">#</a></h3><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">NuGet\\Install-Package PeyrSharp -Version 1.0.0.2210</span></span>
<span class="line"></span></code></pre></div><h3 id="package-reference" tabindex="-1">Package Reference <a class="header-anchor" href="#package-reference" aria-hidden="true">#</a></h3><p>You can specify in your project file that it is dependent on PeyrSharp.</p><div class="language-xml"><button class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PackageReference</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PeyrSharp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">Version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0.2210</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><h1 id="start-coding" tabindex="-1">Start coding <a class="header-anchor" href="#start-coding" aria-hidden="true">#</a></h1><p>To call methods and classes included in PeyrSharp, you will need to add the corresponding using directives in your code file.</p><div class="language-c#"><button class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,24),o=[t];function r(i,c,d,p,u,h){return s(),a("div",null,o)}const m=e(n,[["render",r]]);export{g as __pageData,m as default};
