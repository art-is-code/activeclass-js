activeclass-js
======

activeclass-js is a simple script to set "active" class on links.

How to use ?

You only need to include the script on your web page :
<strong>
&lt;script src="/path/to/activeclass-js.js"&gt;&lt;/script&gt;
</strong>

If you need, you can set "active" class on parent elements like this :

1) add the <i>data-activeclassjs-parents="..."</i>

&lt;a href="..." data-activeclassjs-parents="<strong>group1</strong>"&gt;&lt;/a&gt;

Note: if you need you can set multiple parents with comma : data-activeclassjs-parents="<strong>group1,group2,...</strong>"


2) add the attribute <i>data-activeclassjs-ref="..."</i> on all parents:

&lt;div  data-activeclassjs-ref="<strong>group1</strong>"&gt;...&lt;/div&gt;



