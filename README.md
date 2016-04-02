<hr>

**_u.alog(text, optional_label)**<br>
Sends a "log" ( log([value]) ) to the API Output Console. Advantage is the script should only have one "log" which will return a "Undeclared 'log'" error in JSLint only once. Useful way to ensure all logs used for debugging are removed from the final script. **text** is required but the **label** is optional.
> _u.alog(obj.get('left'))<br>=> 105

or

> _u.alog(obj.get('left'),'left')<br>=> left: 105

<hr>
