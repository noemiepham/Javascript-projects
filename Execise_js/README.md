# Document Object Model
![Document Object Model](https://user-images.githubusercontent.com/86301144/216903592-8b0be86e-9717-4889-b2aa-1af2d34e2157.gif)


## Finding HTML Elements

Often, with JavaScript, you want to manipulate HTML elements.

To do so, you have to find the elements first. There are several ways to do this:

-   Finding HTML elements by id 
> const element = document.getElementById("intro");

-   Finding HTML elements by tag name
> const element = document.getElementsByTagName("p");
-   Finding HTML elements by class name
> const x = document.getElementsByClassName("intro");
-   Finding HTML elements by CSS selectors
> const x = document.querySelectorAll("p.intro");
-   Finding HTML elements by HTML object collections


## HTML events:
|                |Event                       |Description                   |
|----------------|-------------------------------|-----------------------------|
|1|`onchange`           |An HTML element has been changed        |
|2          |`onclick`            |The user clicks an HTML |element           |
|3     |`onmouseover`|The user moves the mouse over an HTML element|
|4     |`onmouseout`|The user moves the mouse away from an HTML element|
|5     |`onkeydown`|  The user pushes a keyboard key|
|6 |`onload`|The browser has finished loading the page |

## Window

1. window.addEventListener(): method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
2. Window page_Offset
 - The  `pageYOffset`  property returns the pixels a document has   
   scrolled from the upper left corner of the windows; 
 - The  `pageYOffset`  property is equal to the  `scrollY`  property.
 - The  `pageYOffset`  property is read-only.
 - The  `nameObject.offsetTop` position of Element ou object in windown,
 3. Window setInterval()
 `myInterval = setInterval(function, milliseconds);`

 ### Definition and Usage
- The setInterval() method calls a function at specified intervals (in milliseconds).

- The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
1 second = 1000 milliseconds.

 ## HTML DOM Elements
 |         Property /Method                      |Description                   |
|----------------|-------------------------------|-----------------------------|
|1|`addEventListener()`           |Attaches an event handler to an element      |
|2          |`classList`            |	Returns the class name(s) of an element         |
|3     |`click()`|	Simulates a mouse-click on an element|
|4     |`getAttribute()`|Returns the value of an element's attribute|
|5     |`previousElementSibling`|  Returns the previous element at the same node tree level|
|6 |`nextElementSibling`|	Returns the next element at the same node tree level|