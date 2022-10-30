import{_ as s,c as a,o as e,a as n}from"./app.f06bd3d7.js";const C=JSON.parse('{"title":"Algebra","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"Sum(numbers) (double)","slug":"sum-numbers-double","link":"#sum-numbers-double","children":[]},{"level":3,"title":"Sum(numbers) (int)","slug":"sum-numbers-int","link":"#sum-numbers-int","children":[]},{"level":3,"title":"IsInt(number)","slug":"isint-number","link":"#isint-number","children":[]},{"level":3,"title":"GetOpposite(number)","slug":"getopposite-number","link":"#getopposite-number","children":[]},{"level":3,"title":"Factorial(number)","slug":"factorial-number","link":"#factorial-number","children":[]},{"level":3,"title":"PositiveOf(number)","slug":"positiveof-number","link":"#positiveof-number","children":[]},{"level":3,"title":"NegativeOf(number)","slug":"negativeof-number","link":"#negativeof-number","children":[]},{"level":3,"title":"GetResultsOf(function, numbers)","slug":"getresultsof-function-numbers","link":"#getresultsof-function-numbers","children":[]}]}],"relativePath":"core/maths/algebra.md","lastUpdated":1666370076000}'),t={name:"core/maths/algebra.md"},o=n(`<h1 id="algebra" tabindex="-1">Algebra <a class="header-anchor" href="#algebra" aria-hidden="true">#</a></h1><p>This page is about the <code>Algebra</code> class available in <a href="/core/maths.html"><code>PeyrSharp.Core.Maths</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>The <code>Algebra</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="sum-numbers-double" tabindex="-1">Sum(numbers) (double) <a class="header-anchor" href="#sum-numbers-double" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Returns the sum of specified <code>double</code> numbers. It returns a <code>double</code> value.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>params double[]</code></td><td><code>numbers</code></td><td>The numbers to do the sum of.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Usage 1</span></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sum</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// sum = 60.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Usage 2</span></span>
<span class="line"><span style="color:#89DDFF;">double[]</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">numbers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">double[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sum2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// sum = 6</span></span>
<span class="line"></span></code></pre></div><h3 id="sum-numbers-int" tabindex="-1">Sum(numbers) (int) <a class="header-anchor" href="#sum-numbers-int" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>Returns the sum of specified <code>int</code> numbers. It returns a <code>int</code> value.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>params int[]</code></td><td><code>numbers</code></td><td>The numbers to do the sum of.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Usage 1</span></span>
<span class="line"><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sum</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// sum = 74</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Usage 2</span></span>
<span class="line"><span style="color:#89DDFF;">int[]</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">numbers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">int[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sum2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// sum = 6</span></span>
<span class="line"></span></code></pre></div><h3 id="isint-number" tabindex="-1">IsInt(number) <a class="header-anchor" href="#isint-number" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><p>Returns <code>true</code> if a specified <code>double</code> is an integer. It returns a <code>bool</code> value.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to check.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">isInt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsInt</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12.0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// isInt = true</span></span>
<span class="line"></span></code></pre></div><h3 id="getopposite-number" tabindex="-1">GetOpposite(number) <a class="header-anchor" href="#getopposite-number" aria-hidden="true">#</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-hidden="true">#</a></h4><p>Gets the opposite of a <code>double</code> number. It returns a <code>double</code> value.</p><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to get the opposite of.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">opposite</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Opposite</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// opposite = -7</span></span>
<span class="line"></span></code></pre></div><h3 id="factorial-number" tabindex="-1">Factorial(number) <a class="header-anchor" href="#factorial-number" aria-hidden="true">#</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-hidden="true">#</a></h4><p>Gets the factorial of an <code>int</code> number. It returns an <code>int</code>.</p><h4 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>number</code></td><td>The number to get the factorial of.</td></tr></tbody></table><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">factorial</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Factorial</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// factorial = 120</span></span>
<span class="line"></span></code></pre></div><h3 id="positiveof-number" tabindex="-1">PositiveOf(number) <a class="header-anchor" href="#positiveof-number" aria-hidden="true">#</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-hidden="true">#</a></h4><p>Gets the positive of a <code>double</code> number. It returns a <code>double</code> value.</p><h4 id="arguments-5" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-5" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to get the positive of.</td></tr></tbody></table><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pos</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PositiveOf</span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// pos = 7</span></span>
<span class="line"></span></code></pre></div><h3 id="negativeof-number" tabindex="-1">NegativeOf(number) <a class="header-anchor" href="#negativeof-number" aria-hidden="true">#</a></h3><h4 id="definition-6" tabindex="-1">Definition <a class="header-anchor" href="#definition-6" aria-hidden="true">#</a></h4><p>Gets the negative of a <code>double</code> number. It returns a <code>double</code> value.</p><h4 id="arguments-6" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-6" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to get the negative of.</td></tr></tbody></table><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">negative</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NegativeOf</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// negative = -7</span></span>
<span class="line"></span></code></pre></div><h3 id="getresultsof-function-numbers" tabindex="-1">GetResultsOf(function, numbers) <a class="header-anchor" href="#getresultsof-function-numbers" aria-hidden="true">#</a></h3><h4 id="definition-7" tabindex="-1">Definition <a class="header-anchor" href="#definition-7" aria-hidden="true">#</a></h4><p>Gets the results of a function applied to specific <code>double</code> numbers. It returns an array of <code>double[]</code>.</p><h4 id="arguments-7" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-7" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Func&lt;double, double&gt;</code></td><td><code>function</code></td><td>The function to apply to all numbers. It must return a double and take a double as an argument.</td></tr><tr><td><code>params double[]</code></td><td><code>numbers</code></td><td>The numbers to get the results of.</td></tr></tbody></table><h4 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Algebra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetResultsOf</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;">// res = double[] { 1, 4, 9, 16 }</span></span>
<span class="line"></span></code></pre></div>`,63),l=[o];function p(r,c,d,i,h,u){return e(),a("div",null,l)}const F=s(t,[["render",p]]);export{C as __pageData,F as default};