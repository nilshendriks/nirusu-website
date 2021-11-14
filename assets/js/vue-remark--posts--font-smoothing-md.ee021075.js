(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Vdax:function(t,e,o){"use strict";o.r(e);var n=o("KHd+"),a=o("UQSp"),i=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},b=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===s(r[t])&&"function"==typeof r[t].render||"function"==typeof r[t]&&"function"==typeof r[t].options.render?e[t]=r[t]:o[t]=function(){return r[t]}}))},p=i.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Mac OS X default font-smoothing",date:"2008-04-11T00:00:00.000Z",updated:"2013-07-25T00:00:00.000Z",categories:["web-development"],summary:"about light text on dark backgrounds"};var h=function(t){t.options[l]&&(t.options[l]=u),i.a.util.defineReactive(t.options,l,u),t.options.computed=p.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},c=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("section",{staticClass:"nh-intro",attrs:{markdown:"1"}},[t._v("\nSo. It is more than 5 years after I wrote about this and we're still here having the same issue. Worse, there's a lot of misconception about this. There are plenty of blogs out there saying it is a browser issue and some even say it's a webfonts issue.\n")]),n("p",[t._v("Most of the times the solution they provide is to add a rule to your CSS:")]),n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",{pre:!0,attrs:{class:"language-css"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-font-smoothing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" antialiased"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),n("p",[t._v("Thing is this only works for webkit browsers. Firefox actually removed support for font smoothing.")]),n("p",[t._v("On top of that this so called solution is not solving "),n("strong",[t._v("the actual problem")]),t._v(". The problem is an OS issue. A Mac OS X issue and it has been for years.")]),n("p",[t._v("Back in 2008 when I first wrote about this, the only article I found discussing this issue was by "),n("em",[t._v("Jason Patterson")]),t._v(". The forum discusses Mac OS X’s sub-pixel AA and Patterson takes the opportunity to claim there’s a bug in Mac OS X’s sub-pixel AA rendering for white/light text on black/dark backgrounds. He also did a thorough test which you can see on his site.")]),n("p",[n("a",{attrs:{href:"http://www.lighterra.com/articles/macosxtextaabug/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Mac OS X White/Light Text Sub-Pixel Antialiasing Bug")]),t._v(" by Jason Patterson.")]),n("p",[t._v("As shown in the article this is a setting in Mac OS X and it  affects the whole OS GUI, not just browsers. You can test it with TextEdit for instance.")]),n("p",[t._v("Before Mac OS X Lion there were multiple options for the font smoothing setting but since Lion the default setting is again to have ‘"),n("em",[t._v("lcd Font smoothing when available")]),t._v("’ checked.  (System Preferences -> General) and now it is only a checkbox, on or off.")]),n("p",[t._v("Note that you need to restart the application in which you want to see the difference so if you uncheck the box and want to test in TextEdit, you need to restart TextEdit.")]),n("h2",{attrs:{id:"now-what"}},[n("a",{attrs:{href:"#now-what","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Now what?")]),n("p",[t._v("So the default setting in Mac OS X is wrong but where does that leave us – web developers?\nWell, you can change the default to something you prefer (off is the only other option since Lion unless you use Terminal) but that way you're not seeing what most people on Macs will see.")]),n("p",[t._v("So yes, I guess it is all right to use the CSS hack for font-smoothing but we need to know "),n("strong",[t._v("what")]),t._v(" we are fixing here and that it is something "),n("em",[t._v("we shouldn't have to fix")]),t._v(".")]),n("p",[t._v("Here are three more articles on this by Dmitry Fadeyev:")]),n("ul",[n("li",[n("a",{attrs:{href:"http://www.usabilitypost.com/2010/08/26/font-smoothing/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Font Smoothing")])]),n("li",[n("a",{attrs:{href:"http://www.usabilitypost.com/2011/02/08/please-stop-disabling-subpixel-rendering/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Please Stop Disabling Subpixel Rendering")])]),n("li",[n("a",{attrs:{href:"http://www.usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v('Please Stop "Fixing" Font Smoothing')])])]),n("p",[t._v("And here is a quote from one of these articles that summarizes everything about this issue:")]),n("blockquote",[n("p",[t._v("There is only one main reason to disable subpixel rendering, and that is to display light text on dark backgrounds on OS X. Mac font rendering tends to butcher light fonts on dark backgrounds, making them spill out to the point of being illegible.")])]),n("p",[n("g-image",{attrs:{src:o("YBhz"),alt:"screenshot"}})],1)])}),[],!1,null,null,null);"function"==typeof b&&b(c),"function"==typeof h&&h(c);e.default=c.exports},YBhz:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/screenshot.e911259.1b9673a31bd68833935365a76c0c5389.png",size:{width:565,height:467},sizes:"(max-width: 565px) 100vw, 565px",srcset:["/assets/static/screenshot.e911259.1b9673a31bd68833935365a76c0c5389.png 565w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 565 467' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-b3e051c38bc7e46261b2fc03db47ffc0'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-b3e051c38bc7e46261b2fc03db47ffc0)' width='565' height='467' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAA1CAYAAADxhu2sAAAACXBIWXMAAAsSAAALEgHS3X78AAAPU0lEQVRo3t1bS1Bb1xn2A%2bw4TVK3TjrpYzrJtE3SdWfazHScdOzGzrjTRaa7TrtJ02U23XbRJG0ni9TTxNn1MdmETtOpHTAIBEgCJAF6P5CEBOJpEEgCiadtbMo9/b7/3qsXAoOBLMzM73N0zrnnnvOf73%2be62PHav7%2b/o9/Nnxw9cPGP7zzXuM77/6x8c9/%2blPj1atXGz/%2b%2bOPGjz76qPHatWsHpg8//LDx3Xffa/zLX642fgB6//330fbXQ5l7J/rkk08ar1%2b/3vDKK68cP1bvD60njh0/3njs0f9rePbZZ0/qWzb%2bHn/88ZOP4Q/Vp7xe3/tef/A/Xp//U38g2BQOhZoSiURTOp1uGhkZaRodHd1GbN8PpVKpJp/P3xSLx5tisXhTOBxuSiaT%2b5qLY7mmPdKnY2Nj/8J7//bmm28%2bh32eeumllxpKh3/mzJlTKL8Cem7Q68%2bHYknlC0ZUKBJXeJHKZOZUPp8XyuVyKpvNluqkhYWFfRGfCQQCyjM4qDxenxocGFCZuXm1uLi4p%2bc5LpvNybrq0lx1OTubkXfeunVLvf322xd50C%2b%2b%2bOIZEwXHGxsbz5w8efIbqP%2bg3%2b2eHhtLK3DrPji9SQqFQpvJ4WGU4c3hZHITp7UZCYc344nhzXgstokT3IxEo/ui6NCQXhq0p%2bcikc0hPAembfa6%2bjdD0dhmKGLSUEW9ph3jAuHo1sCg584bb7zxC%2bzz6/h78hjFnv%2bAAU%2bcOHGC0HjVYrFkBnEyDkfPltfr1VDX7DabFvD7tNaWFq2luVnrtFq1G9eva44%2bt4ZT1Hp7%2bzSXy1WXnDu01xvjrEOumj6326V1dtu1cGRIKy4vaxv372t3Nu6CNnakjXv3tNX126qj03bvlfPnf419Pn/u3LmzKE8KAxoaGp4EA76D%2bqXPPvssY%2bu2qba2ti0QS2WxtKu2Vr3e2toqdTCqVHZ2diqrlWQ1qLOGatutdaj6mU6Dap9jW0eHVbVarMrS0anard2grgqq/S1tWgfaW1vb7r388su/wT5fOHv27FepEMmAk0DAkxABMuAyIDZHOYO8bM3MzKi9EGVrenq6LrGv3vhK2t4/XTWnOa6yPsNS%2bqeMcVNG//S2%2bdGmZTIZNTExcf/ixYtvkQFPP/10fQaMj4/PbWxsqGKxuLW0tKRqCe163SjN37dv31Z37tyRkrRulCsrKyXFVQCxXF5elvalpWWpmwqW4wqFolpbX1dra2tqHeVto766uirzmXXS2tq6/i6MWV/XS85X3LbmJW1lZVXl8vn7ly9fFgY888wz9RkAkzHHSbGYrUVjwbtRoVBQOVgFl9MFrT4A8iqv169Cfp/yeLxqYnJSzc3PK28opsKwLlBkoKgK%2bDzK6/OpWDyhbhuMm8c8mZlbaig6pIaGYgpKVwWCITUUS4g1gk5SMJtqfHxMjY6MYMyQ8vkDMiYcDKgInqPm55pq1qmREfPz8/cvXbq0NwbgoS1OVI/MjbMkAnK5rArCrJEJsO/Kj0WFgkEpp6YIyRkVig2roeERFcOiXS63ctjsMtbnC3Bhah4LHxlNA9ZTaiSVVInEsMGAsDAA1kiF8TsWiylYJJUA48ikKDYdJbPAgHA4KmaPazLXaKxTZ0A2ezgMqGQCocvJV1ZXdPivl2HJkpDkBjOZWTUHOeQC%2bRyhbM5Fv4IkfgXmW4Z4UERMqLPOeSrryyvL5TGlsSvbNn/oDCidPuSVCw36PerGf6/DQlhUa0uzaoPF8AGqtu4u1dHeARGYVnM4XT8QwtNzOfvQ162cTqdaxqLJqLX1NdEf04ZCrITvwsKDxVDI0DOV6DxCBBjKTE5jSbQvZW9yckLN4pQJZ26EJ57PL4gITE1NoX9STVB%2bIc%2bpZLLGYtxC34Sitq4jw2qxqq3wQL10ZAwwF0ONzo1QBllOUdnNZRR87pI5S6fHS/BOJVNqliZuZhZQz%2bswBi2BgSRCmu0cWwvhegjcDz00A3bj9lKxIIrv5k04QnBMeh0ONTycgFPUJX5%2bOBxSrW0dKj02LhtvvnEDTkyH6rI5lN3RA8RkhQEFyCyJ9YnJKbHblad4MCpUW4GHQ8DijidhKiZTOYkyNJQU66ZSmkOgQ%2bVGZUh9oCvFjAQplcQ2KsLdTn832NcT1SNDgO60lBcmkdriQtXpmdGb6TDVh3Gxqq/07B7le3fmHBABuzGAiya0aecpuzw5mkTKsK4P5qVtEVp8FGIwMTEpekFs/nxWFCQdJLq001CSRAafn4OZzKK9HHrnSvW8gaI86jKPYTpZr8%2bEIxIBHf4rKpmIQ84tEpwMDgyq3p4eZXP0qsH%2bfj1ogRmk5v/v5xZEl72q3%2bVSdjhApM72doUoUnUj8HK6B1RfX5%2b62dyC4KpD9fcPqj46VTCn/G2DzuixOyR/MDDgUb32bgmObra04pnPFcJzEbvtyFg8uBXQuVjYEYqVlBcx0PtM%2bMvp5XPw3hLKRu/PHxRLQS8uEgopht6RcFiQVJv0MOfJ58tJl3JbOSGzuKMYHJIZ3GnDezFVrNPO03d3ufrh//vhy4%2bLqxxAvODHbxecIsYEVKC1z%2b42d3GP5vHACKi3qQc5IZWuMmU0mUjA/7epfne/6gP056AH6AWaVqRYLFQp2P2avN2YcKgIEM4XqzV3ZagsPkJJ6xfllGjfp%2bEJIh5Xw2AEZTYrucTygsUnMEoiwZxrO6QX9%2b0MHRAB5Rh%2bKBpVXdZ2KDGbQDkY8CkLlCDD3wE3FBwUlb2nT7W3taHNh5PuVamRUdXaTt/fJcrNCTHwSSLUA8Vml7aAz6vaOzoR/YUEJXSakqlRCXIqY3t984Uv0hOshjMVDqO6WbizjOpo8mZn6fbOiklkSdPGTE3GcGxoqlKpEZx8XMp4XA9tx6EIGQ%2bMIgSeBDLYzrYwmEBtT9TMzs5COU4KeqhH9HXsVywOAQHV8C/DvZQdqpMxMks%2bRx0Qi0aUA%2biw2XskH%2bAZ0E3fAMwn0%2bJtrRYgyg%2bz2C3mlIkTSc7abarDYoH73AttXzSySns%2b%2bYN7gmUxeHjf3Iz1a6M7U49Umr1ilaLVPcW9KN8HKOTDYMCDabfLjKIR8JjI0WlJ3/RSNap0xbpsyH1hG8LMWIOk15dLaNtBaR5cBB6WTKeF8h0diosTRD%2bAITR9A8p2GnVaBvZRJ1CXMO2VSuk5g5FUSh%2bfHpPfw4lh1NNiVUagV8ZQT6OvvF7j4AqHKgKLDwVBbp7KkLlAu71HT4j6A8oPN7cD7jCtSTQShqw7hKxwq%2bPxYeXq6xVdQI/ROzignNAXbrcbLrIbFsWtJ2Exh6PHqQbgelOXbF%2bvzoQjyQnuVQERAVSCjAnSOPFJBEW0GNT8PHGePuscMwKTOZbWEyq0AHLCeIYZJf5m1oltE0AQnyUaWJLBSxCFSl1y5EnRvTKACCCk4/EYvED99GjvvR6PcrucEuT09Tkl82uebGwoKmjwDHpw8k4goVeCIKLB3tWlujq7gCCPjO%2bFL8Fco5kUXVo64qTofplgeoa05f2uPrH9DI1DcKJikvuPSPjMwIh9iZh%2bJzAMHUDHKw55pzMVjqAN/UyBBwJBCapS0A1MvXMsnSuPLyC5RVMhHjkDTC1bHTOUo0eTCXz5zK0pZcPpOXBiPFXeC/AOkhEiLzzstm4Jf1nv7rQKWugvULZ7EA7zWWaSmVEeBDKSyRFdhCAyvHyh%2bJAoDl/QvUChbvan2iSWkye57Lx4e3HAO45TpleYiMflEoQnTxhTvrmhIKJEWgVuSE7Z5xM0kKgwp6dnjACq7IityF3C8tHfC9RJNsjLedFBWjEuNcw7PC7IvDwp%2bQE19p1R4d2Nu1LyfoB3k1zD6pp%2bX7Bx717p7vHu3bul96yuGZFkjaU6NCW4FzPITQ0gxCVMvR6vZISpoBjseDw%2byfJmcfo0YdNQhnJbZDCISRCmwvqdfWLygtAHbsw1AIhT6aVHR9AO8wdRSCZTKhJGnACRYGDFDBSVpA/vopWoFz0e2BPcQ6JBXkyHJuD3S2aHCouwjoQjotkpkzRrYfzW84d6Dk9yh/jNfj4fCoZERKK8PI0O6ZegDI7wHGMFmkOG0nHjbpAXo9EIxSIi5rEe9AWli1%2bAIyTpcQOO5oWHmSo3TaEZE8xJUnS%2bxITS3aKRVi9dmIiYFCuu0pfE1pt90g6zt4L37LTGwoGzwoWqSfYVA5h3/pIrlPqCwN7coLmRFSPmF4VmtOuxQfVm2cbbI/1idEU2z2d2zx4dZSywaFBNCqxWPHjK//r3DWXt7BY94IcNp7z3ILylbDNbrDtGXnGCHDCNvb16BjlojHVAv9AC0CS6JbNsU203W1RqdGybzd/BFzlsBNRJUNba3kLZFaYuwLyQ37iUDGDSCHpox4eh3HSXOC2mLx7nmFFxiGgaaQYTkP2JiXHpYxtL6go6PfVTZ9tSeJpxTX8wM1h5MUpYm/4ANzlnKKJKZ0iHaF5ukEv3%2boYprLzzr7paW10pmVJdRFZFdPSrtvJYs22XRGipxNo04zuEPTEgU/GJjFZLCwKnohYKBTVLR5cWDoe17m67Zmlr1%2bDVaYCr5vf7tQ5Lu2a1dmrtrTc1W5dVs6PP2tGp9Tn7tb4eh/SFQyENoqE1f96iTU3PaHCINLi62tr6upbNZTVYFC2ZiGnNzS0aokHN2dujteI9zS03NZhLWcdCnTWahE1rOHXN5/NrNMewQPdee%2b01/SOpbQw4UfpIap7OBh%2buTl4Uq9Jg5Cg1uXz5aaCB12HmVVbWuAhlH6%2byGA3KFZooxgXp1yPFrOQXeaGSMb4g4TdHWV6f8flctnRtxnbTguQM67HTGs118h3Yk2bkNDdff/3139ZFQENDg3wnCHmbNj4o2gRkturRfHZeynw%2bt5XN5bYwsfE7L3WTKn8TUbmKseVn9HFmW2V/vXk4PpfX6%2bY6HrROjP0f5iAK7rz66qtvkgHnzp0rMeDE8ePH%2baXo86j/5Pz587%2b7cuXKBxcuXvjo4sWL12rpQqm8cO3ChUOkh5ivcj07rtMYe/ny5aug3%2bOgr2CfL0LkS1%2bK8oPhx0HfBCN%2biJIDfgkip956RIhfh/4K9HPQj7FPfhb8RCUDTqGRkPjeqVOnfnT69OmforwC%2btkjQlewp0sgbv77oK9hr4%2bZH0sfMzhxBh3nQN9CnfrgBULlEaLvYm/fBj2D%2bpdM%2ba/4DyPChNMUBwx6EvTlR4yeMjZ%2b2tj88R3%2b54zA4oTBkEeJzH1Vbfz/A24WdzGA1R4AAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}]);