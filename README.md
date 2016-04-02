# roll20mixin
Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. 

_.mixin(object) Allows you to extend Underscore with your own utility functions. It is also global, which is very handy. 

<hr>

**_.alog(text, optional_label)**<br>
Sends a "log" ( log([value]) ) to the API Output Console. Advantage is the script should only have one "log" which will return a "Undeclared 'log'" error in JSLint only once. Useful way to ensure all logs used for debugging are removed from the final script. **text** is required but the **label** is optional.
> _.alog(obj.get('left'))<br>=> 105

or

> _.alog(obj.get('left'),'left')<br>=> left: 105

<hr>
