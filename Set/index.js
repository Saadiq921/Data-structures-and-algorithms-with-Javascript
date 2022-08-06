//creates a new set
const set = new Set()
// add()	Adds a new element to the Set
set.add("first insertion")
set.add("second insertion")
set.add("third insertion")
set.add("fourth insertion")
//Removes an element from a Set
set.delete("fourth insertion")
//Returns true if a value exists
set.has("first insertion")
//Removes all elements from a Set
set.clear()
//Invokes a callback for each element
set.forEach(each => console.log(each))
//size 
set.size

