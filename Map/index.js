
//creates a new instane of a map
const map = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
// set()	Sets the value for a key in a Map
map.set("key1", "First");
map.set(2 , "Second");
map.set(3, "Third");
map.set(2 , "Second");
// Gets the value for a key in a Map
map.get();
//Removes all the elements from a Map
map.clear();
//Removes a Map element specified by a key
map.delete("key1");
//Returns true if a key exists in a Map
map.has(2);
//Invokes a callback for each key/value pair in a Map
map.forEach(each => console.log(each))
//Returns an iterator object with the keys in a Map
map.keys();
// size	Returns the number of Map elements
map.size;