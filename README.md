activeclass-js
=======================

activeclass-js is a simple script to set "active" class on HTML element by URL.
This script parse the window location and search all links in the page with the same URL and add the "active" class on the link.
If you need, you can set "active" class on parents.


Getting Started
---------------
How you acquire activeclass-js.js is up to you.

* Install with [Bower]: `$ bower install activeclass-js`
* Download the last dist file 

How to use ?
--------
First, 
You only need to include the script on your web page (on head tags):

```html
<script src="/path/to/activeclass-js.min.js"></script>

```

You probably need to set active class on parent or any other element in the same page.
You can set the parent on link in this way :

1) add the *data-activeclassjs-parents="..."*

```html
<a href="..." data-activeclassjs-parents="**group1**"></a>

```

Note: if you need you can set multiple parents with comma : data-activeclassjs-parents="**group1,group2,...**"


Now, set the parent name on parent's elements. like this : 

2) add the attribute *data-activeclassjs-ref="..."* on all parents:

```html
<div  data-activeclassjs-ref="**group1**">...</div>

```

License
-------

Copyright 2013 DARTEA, SASU

Licensed under the Apache v2 License





