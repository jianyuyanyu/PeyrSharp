import{_ as s,c as a,o as n,a as e}from"./app.9df935fe.js";const h=JSON.parse('{"title":"Screen","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"GetDpi(form)","slug":"getdpi-form","link":"#getdpi-form","children":[]},{"level":3,"title":"GetDpi(window)","slug":"getdpi-window","link":"#getdpi-window","children":[]},{"level":3,"title":"GetScreenScaling(form)","slug":"getscreenscaling-form","link":"#getscreenscaling-form","children":[]},{"level":3,"title":"GetScreenScaling(window)","slug":"getscreenscaling-window","link":"#getscreenscaling-window","children":[]}]}],"relativePath":"ui-helpers/screen.md","lastUpdated":1666359224000}'),l={name:"ui-helpers/screen.md"},o=e(`<h1 id="screen" tabindex="-1">Screen <a class="header-anchor" href="#screen" aria-hidden="true">#</a></h1><p>This page is about the <code>ScreenHelpers</code> class available in <a href="./../ui-helpers.html"><code>PeyrSharp.UiHelpers</code></a>. This page is about all of its methods.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>ScreenHelpers are part of the <code>PeyrSharp.UiHelpers</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>UiHelpers</td><td>\u2705</td><td>\u274C</td><td>\u274C</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>UiHelpers</td><td>\u2705</td><td>\u274C</td><td>\u274C</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="getdpi-form" tabindex="-1">GetDpi(form) <a class="header-anchor" href="#getdpi-form" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Gets the DPI of the screen where the Windows <code>Form</code> is located. It returns a <code>double</code> value.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Form</code></td><td><code>form</code></td><td>The form to get the DPI of.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.UiHelpers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Windows.Forms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">partial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyForm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Form</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HandleButton</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        MessageBox</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Show</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ScreenHelpers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetDpi</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="getdpi-window" tabindex="-1">GetDpi(window) <a class="header-anchor" href="#getdpi-window" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>Gets the DPI of the screen where the <code>Window</code> is located. It returns a <code>double</code> value.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Window</code></td><td><code>window</code></td><td>The Window to get the DPI of.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.UiHelpers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Windows</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">partial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyWindow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Window</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HandleButton</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RoutedEventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        MessageBox</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Show</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ScreenHelpers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetDpi</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="getscreenscaling-form" tabindex="-1">GetScreenScaling(form) <a class="header-anchor" href="#getscreenscaling-form" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><p>Gets the scaling of the screen where the Windows <code>Form</code> is located. It returns a <code>double</code> value.</p><p>Possible values:</p><ul><li>100</li><li>125</li><li>150</li><li>175</li><li>200</li></ul><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Form</code></td><td><code>form</code></td><td>The form to get the scale of.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.UiHelpers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Windows.Forms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">partial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyForm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Form</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HandleButton</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        MessageBox</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Show</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ScreenHelpers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetScreenScaling</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="getscreenscaling-window" tabindex="-1">GetScreenScaling(window) <a class="header-anchor" href="#getscreenscaling-window" aria-hidden="true">#</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-hidden="true">#</a></h4><p>Gets the scaling of the screen where the <code>Window</code> is located. It returns a <code>double</code> value.</p><p>Possible values:</p><ul><li>100</li><li>125</li><li>150</li><li>175</li><li>200</li></ul><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Window</code></td><td><code>window</code></td><td>The window to get the scale of.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.UiHelpers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Windows</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">partial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyWindow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Window</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HandleButton</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RoutedEventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        MessageBox</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Show</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ScreenHelpers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetScreenScaling</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,38),p=[o];function t(r,c,i,d,y,F){return n(),a("div",null,p)}const D=s(l,[["render",t]]);export{h as __pageData,D as default};