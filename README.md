quick-sort.js - Generic quick sort implementation for js
=====================================================

quick-sort.js - Generic quick sort implementation for js.
The algorithm takes O(n log n) comparisons to sort n items. In the worst case, it makes O(n2) comparisons, though this behavior is rare.<br>
<a href="https://en.wikipedia.org/wiki/Quicksort">Quick sort on Wikipedia</a>


##Installation
```
npm install quick-sort.js
```

###Usage

```
var QSort = require('quick-sort.js');

var getter = function(iterable, index) {
    return iterable[index];
};

var setter = function(iterable, value, index) {
  iterable[index] = value;  
};

var comparator = function(elem1, elem2) {
  return elem2 - elem1;// desc sort
};

var list = [1,4,2,3,7,9,3,6,7,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(list);

QSort(list, list.length, getter, setter, comparator);//desc sort

console.log(list);
```

##API

####QSort(iterable, length, [[[fnGetter], [fnSetter]], [fnCompare]])
+ ```iterable```: object like array
+ ```length```: length or iterable
+ ```fnGetter```: function for getting a element from iterable 
   + ```fnGetter(iter, index)```
   + Optional, if not given, will use bracket syntaxe: ```iter[index]```
+ ```fnSetter```: function for setting a element from iterable 
   + ```fnGetter(iter, value,index)```
   + Optional, if not given, will use bracket syntaxe: ```iter[index] = value```

+ ```fnCompare```	
 + ```fnCompare(elem1, elem2)```: function for comparing two elem of iterable
   + Optional, if not given, will use : ```elem1 - elem2```
