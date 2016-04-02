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

**_.bound(number,lowerlimit,upperlimit,[integer true, false])**<br>
Used restrict a number to a lower and upper range. Many uses in RPG applications (prevent over healing of hit points) or canvas applications (prevent a script from moving a token outside the canvas edges.) Optional true/false for **integers.** Cares for input errors as follows:<br>
null => 0<br>
undefined => 0<br>
NaN => 0<br>
false => 0<br>
true => 1<br>

> _.bound(-5.5,0,10)<br>=> -5.5

or

> _.bound(50.5,0,10,true)<br>=> 56

<hr>

**_.represents([obj or id])**<br>
Returns the character object for a graphic object or graphic ID if the graphic represents a character. (Returns false if its not a graphic object or graphic id and/or does not represent a character.)

<hr>

**_.removeObj(obj,[type required for non-graphics types])**<br>
Used to remove an object. Returns false if the object is undefined. Graphic do not require a ***type*** ("graphic') but other objects require a ***type*** to avoid mistaken removal. 
> var obj=getObj('graphic', id);<br>_.removeObj(obj)<br>=> true

or

> var obj=getObj('character', id);<br>_.removeObj(obj)<br>=> false

or

> var obj=getObj('character', id);<br>_uremoveObj(obj,'character')<br>=> true

<hr>
