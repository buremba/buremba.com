---
layout: post
title: Trap your visitors in your website with onbeforeunload event bug
---

Last month Feros published a [post](https://bugzilla.mozilla.org/show_bug.cgi?id=870755) about a bug that allows filling disk space via HTML5 LocalStorage API. Inspiring from him, I wanted to try onbeforeunload event on iframes and I found a bug that exists all modern browsers support onbeforeunload event. Normally,  when we attach onbeforeunload event to the window, browsers inform users with the value that is returned by the attached function and if  they still wants to exit from our website, the browser doesn’t allow the website to run any callback function. However, if you append tons of iframe into the DOM and attach onbeforeunload event to each iframe’s window, you can lock up your visitor in the web page by infinitely alert boxes.

This is the code that causes evil:

Testing: [http://jsfiddle.net/2PM9r/1/](http://jsfiddle.net/2PM9r/1/)

Status:

The code works perfectly in all popular modern browsers that support onbeforeunload when the visitor wants to refresh or exit the page.

Here is a list of browsers I tried the code:

Chrome 27.0.1453.81

Firefox 20.0.1

Internet Explorer 10.0.92

Opera doesn’t support onbeforeunload event.

Bug reports:

Chrome: [https://code.google.com/p/chromium/issues/detail?id=239784](https://code.google.com/p/chromium/issues/detail?id=239784)

Firefox: [https://bugzilla.mozilla.org/show_bug.cgi?id=870755](https://bugzilla.mozilla.org/show_bug.cgi?id=870755)

Internet Explorer: It seems there is no way to report bug for IE10.