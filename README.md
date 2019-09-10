# ffw

# 1) Consider the following code what will the console.log output be and why? Name the JS rule that is responsible for this behavior.
The output will be "undefined" because the variable is initialized after the console.log function. To avoid this we should use "const" or "let" instead of "var" or "use strict". The JS rule responsible for this behavior is "Javascript variable hoisting".
#
#
# 2) Create a function named parseUrl(string) which will receive URL string as parameter and will return an object with parsed data as shown in the following demo. Make sure you support IE10.
```javascript
function parseUrl(url) {
  return new URL(url);
}
parsedUrl = parseUrl('http://ffwagency.com/do/any.php?a=1#foo');
console.log(parsedUrl.hash);
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
```
#
#

# 3) Consider the following data object. Use ES6 feature to easily create variables that extract and store values from the data object to obtain:
-	A variable called “names” that will contain data.names
-	A variable called “enrolled” that will contain value from data.enrolled but will default to “false” in case data.enrolled doesn’t exist or is not usable
-	A variable called “marks” that will contain value from data.marksss
```javascript
const data = {
names: ['A', 'B', 'C'],
enrolled: true,
marksss: {
'A' : [1,1,1],
'B' : [2,2,2],
'C' : [3,3,3],
}
};
```
#
```javascript
let { names, enrolled = false, marksss } = data;
```
#
#

# 4) Consider the scenario from the image below. You have a “functionality” helper object that you reuse. In it you attach a click handler called “clickListener” that should ultimately change “isActive” and call “checkTriggered”. When a user clicks on a link: will your code execute correctly? If not – how should we fix it while keeping this original object structure?
![picture](https://static.md/0c09d7b7ed1ba9768a74e84aa27a8fe3.png)
#
The line of code that should be changed is:  
```javascript
.addEventListener(this.clickListener);
```
to   
```javascript
.addEventListener('click', this.clickListener);
```
# 
#

# 5) You work on a jQuery project. Considering the following HTML code on a page. You need to extract all div.node only from the articles wrapper. How many ways of selector-picking using jQuery can you enumerate for this case?
```html
<div class="articles list">
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
    </div>
    <div class="blogs list">
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
    </div>
```
#
```javascript
$(".articles .node");
$(".articles > .node");
$(".articles *");
$(".articles div");
$(".list:first-child .node");
$(".list:first-child *");
$(".list:first-child div");
$(".list:first-of-type .node");
$(".list:first-of-type *");
$(".list:first-of-type div");
$("div:not(.blogs) .node");
$(".list:not(.blogs) .node");
$(".list:nth-of-type(1) .node");
$(".list:nth-child(1) .node");
$(".list:eq(0) .node");
$(".list:lt(1) .node");
```
#
#

# 6) Write a short JS snippet that pulls JSON users data from https://jsonplaceholder.typicode.com/users. Once you have the data print a div for each user instance object received like in the following example:
![picture](https://static.md/6bf9af69751af9f3844a2db07d22a539.png)  
The code for this exercise can be found in the "main.js" file and the output on the rendered "index.html".
#
#

# 7) At what point do you recommend to run AJAX requests (or trigger other asynchronous tasks) during a React Component lifecycle? Why?
The AJAX requests should be run in the "componentDidMount" lifecycle method so you could update the components later on, after the component is rendered.
#

# 8) Considering the following react component please pick one or more correct ways of passing a handler to a component. Also, explain what happens when you click each button from this component?
![picture](https://static.md/15694b07b62f60ae0cab1c3e623e6a10.png)  
#
- For the first button, by clicking on it, nothing will happen, because "onClick" method sees `this.handler1()` as a function with no parameters.  
- The second button calls the method, but it doesn't have access to the text property of the class, because class undefined.  
- The third button will output the text, because in constructor, this gets binded in handler1, so it isn't undefined anymore.  
- The fourth button will also output the text, because in comparison with the second button, handler3 will ignore the restriction.