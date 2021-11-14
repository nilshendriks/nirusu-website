---
title: 'Mac OS X default font-smoothing'
date: 2008-04-11
updated: 2013-07-25
categories: [web-development]
summary: 'about light text on dark backgrounds'
---

<section class="nh-intro" markdown="1">
So. It is more than 5 years after I wrote about this and we're still here having the same issue. Worse, there's a lot of misconception about this. There are plenty of blogs out there saying it is a browser issue and some even say it's a webfonts issue.
</section>

Most of the times the solution they provide is to add a rule to your CSS:

```css
-webkit-font-smoothing: antialiased;
```

Thing is this only works for webkit browsers. Firefox actually removed support for font smoothing.

On top of that this so called solution is not solving **the actual problem**. The problem is an OS issue. A Mac OS X issue and it has been for years.

Back in 2008 when I first wrote about this, the only article I found discussing this issue was by *Jason Patterson*. The forum discusses Mac OS X’s sub-pixel AA and Patterson takes the opportunity to claim there’s a bug in Mac OS X’s sub-pixel AA rendering for white/light text on black/dark backgrounds. He also did a thorough test which you can see on his site.

[Mac OS X White/Light Text Sub-Pixel Antialiasing Bug](http://www.lighterra.com/articles/macosxtextaabug/) by Jason Patterson.

As shown in the article this is a setting in Mac OS X and it  affects the whole OS GUI, not just browsers. You can test it with TextEdit for instance.

Before Mac OS X Lion there were multiple options for the font smoothing setting but since Lion the default setting is again to have ‘*lcd Font smoothing when available*’ checked.  (System Preferences -> General) and now it is only a checkbox, on or off.

Note that you need to restart the application in which you want to see the difference so if you uncheck the box and want to test in TextEdit, you need to restart TextEdit.

<!--
Luckily there is a way to get to the previous multiple settings through the command line. I created an Alfred 2 Workflow for it and you can check that out here.
-->
## Now what?

So the default setting in Mac OS X is wrong but where does that leave us – web developers?
Well, you can change the default to something you prefer (off is the only other option since Lion unless you use Terminal) but that way you're not seeing what most people on Macs will see.

So yes, I guess it is all right to use the CSS hack for font-smoothing but we need to know **what** we are fixing here and that it is something *we shouldn't have to fix*.

Here are three more articles on this by Dmitry Fadeyev:

- [Font Smoothing](http://www.usabilitypost.com/2010/08/26/font-smoothing/)
- [Please Stop Disabling Subpixel Rendering](http://www.usabilitypost.com/2011/02/08/please-stop-disabling-subpixel-rendering/)
- [Please Stop "Fixing" Font Smoothing](http://www.usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)

And here is a quote from one of these articles that summarizes everything about this issue:

> There is only one main reason to disable subpixel rendering, and that is to display light text on dark backgrounds on OS X. Mac font rendering tends to butcher light fonts on dark backgrounds, making them spill out to the point of being illegible.

![screenshot](../src/assets/screenshot.png)


<!-- <g-image src="~/assets/screenshot.png" /> -->

<!--
Like before, white text on a black or dark background looks bold this way, even when one has not set the weight to bold with css. I’ve turned it off. Browsers need a restart after that to see the difference.

<p class="illustration" markdown=1>![font smoothing](http://www.mikeafford.com/blog/wp-content/uploads/2009/01/mac-font-smoothing-automatic1.gif)</p><p class="caption">Image by Mike Afford</p>
-->
<!-- (image: ~/assets/screenshot.png) -->


<!--
Not too long ago I was developing a website for a client that uses a black background with white text. I noticed the white text appearing rather bold so I assumed my css was faulty and somewhere was a font-weight set to bold. The fact that this was only happening in all browsers on the Mac platform should have been a pointer to the issue. However, as always I question my code first but after intensive research on the css it turned out it had nothing to do with the code at all.
-->
<!--
<br>I created my own tests, one html file for those who want to check if they experience the same issue and one screenshot of how it looked like before I changed my iMac’s default font smoothing style setting.

## Update
Currently my tests are not available online.

## Update
With Snow Leopard you can no longer chose a setting from a list. It has been ‘simplified’ to a checkbox, on or off. On my iMac this was unchecked by default. Testing my file in Safari, it seems as this looks as it is supposed to: the non bold text doesn’t appear to be bold anymore.

On my MacBook however this option was checked by default and the test file text still looks more bold than it should. Unchecking the option did not have an immediate effect, but after quitting and restarting Safari it seems to do the trick.-->

