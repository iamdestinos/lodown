'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Function takes in any value and returns it unchanged
 * @param {*any value}: takes in any value
 * @return {any value}: returns value unchanged
 */

function identity(value) {
    return value;
}

/**
 * typeof: function takes in a value and returns a string detailing its data type
 * @param {any value} value: the value to tell the data type of
 * @return {string}: a string value of the input value's data type 
 */

 _.typeOf = function(value) {
    //determine if value is undefined
    if(value === undefined) {
        return 'undefined';
    }
    //determine if value is null
    else if(value === null) {
        return 'null';
    }
    //determine if value is an array
    else if(Array.isArray(value)) {
        return 'array';
    }
    //determine if value is an object
    else if(typeof value === 'object' && !(value instanceof Date)) {
        return 'object';
    } else {
        //use typeof for rest of checks
        return typeof value;
    }
};

/**
 * first: return a number of values from an array starting from the first value in the array
 * @param {array} array: the array which to take values from
 * @param {number} number: the number of values to return  
 * @return {array}: an array of values as long as the input number starting from the first value in array
 */

_.first = function(array, number){
    //create output array
    var output = [];

    //determine if input array is not an array
    if(!Array.isArray(array)) {
        //if the input array is not an array, return []
        return [];
    }
    //determine if input number is not a number
    if(typeof number !== 'number') {
        //if input number is not a number return first value of array
        return array[0];
    }
    //determine if input number is a negative value
    if(number < 0) {
        //if number is a negative value return empty array
        return [];
    }
    //determine if input number is greater than array.length
    if(array.length < number) {
        //if true return whole input array
        return array;
    }

    //iterate from 0 to input number
    for (let i = 0; i < number; i++) {
        output.push(array[i]);
    }
    //return output
    return output;
};

/**
 * last: return a number of values from an array ending in the last value of the array
 * @param {array} array: the array values are taken from 
 * @param {number} number: the number of values to return
 * @return {array}: array of values that ends with the last value of input array
 */

_.last = function(array, number){
    //create output array
    var output = [];

    //determine if input array is not an array
    if(!Array.isArray(array)) {
        return [];
    }
    //determine if input number is not a number
    if(typeof number !== 'number') {
        return array[array.length - 1];
    }
    //determine if input number is negative
    if(number < 0) {
        return [];
    }
    //determine if input number is greater than array.length
    if(number > array.length) {
        return array;
    }

    //iterate through loop
    for (let i = array.length - number; i < array.length; i++) {
        //add current value to output array
        output.push(array[i]);
    }
    //return output
    return output;
};

/**
 * indexOf: returns an index number of the first instance of a selected value 
 * @param {array} array: the array being searched through for a value
 * @param {any value} value: the value to be found in an array
 * @return {number}: the number representing the value's place in the array 
 */

 _.indexOf = function(array, value) {
    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //determine if current content of array equals value
        if(array[i] == value) {
            //if true, return value of i
            return i;
        }
    }
    //after going through loop return -1
    return -1;
};

/**
 * contains: searches for a value and returns true if it is in a given array
 * @param {array} array: the array being searched for a value
 * @param {any value} value: the value being searched for in the array
 * @return {boolean}: Boolean value states if value sought after is within array
 */

 _.contains = function(array, value){
    //iterate through input array
    for(let i = 0; i < array.length; i++) {
        //determine if current value in array is same as input value
        if(array[i] === value) {
            //if true, return true
            return true;
        }
    }
    //after iterating through loop return false
    return false;
};

/**
 * 
 * @param {*} collection 
 * @param {*} action 
 */

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: returns an array of values with all duplicates removed 
 * @param {array} array: array containing repeating values
 * @return {array}: output array has all values of input array but lacks a repeated value
 */

 _.unique = function(array){
    //create output array
    var output = [];
    //push first value in input array to output
    output.push(array[0]);

    //iterate through input array
    for (let i = 0; i < array.length; i++) {
        //var isUnique equals true
        let isUnique = true;
        //iterate through output array
        for (let j = 0; j < output.length; j++) {
            //determine if current value in i is same as current value in j
            if(array[i] == output[j]) {
                //if true, isUnique is false
                isUnique = false;
            }
        }
        //determine if isUnique is true
        if(isUnique) {
            //if true, add current value of array i to output
            output.push(array[i]);
        }
    }

    //return output
    return output;
};


/**
 * filter: returns an array of values that have gone through a function and the function returned true
 * @param {array} collection: input array of values to be filtered
 * @param {func} action: function that will take in a value from input array and return a boolean 
 * @return {array}: output array contains all values from input array that returned true when put through
 * input func.
 */
_.filter = function(array, func){
    //create var output
    var output = [];

    //iterate through array using for loop
    for (let i = 0; i < array.length; i++) {
        //determine if function returns true
        if(func(array[i], i, array)) {
            //if true, push current element in input array to output array
            output.push(array[i]);
        }
    }

    //return output
    return output;
};

/**
 * reject: returns an array of values passed through a function and returned false. The inverse of filter
 * @param {array} collection: input array of values to be passed through input func. 
 * @param {func} action: function that will take in value in array and return boolean
 * @return {array}: array of values that when passed through input func returned false
 */
 _.reject = function(array, func){
    //create var output
    var output = [];

    //iterate through array input using for loop
    for(let i = 0; i < array.length; i++) {
        //determine if function returned false
        if(!func(array[i], i, array)) {
            //if so, push value of input array to output
            output.push(array[i]);
        }
    }

    //return output
    return output;
};

/**
 * partition: returns an array made up of two arrays. The first array contains values that returned
 * true when passed through the input function and the second contains values that returned false.
 * @param {array} collection: an array of values to be passed through input func
 * @param {func} action: function that takes in a value from input array and returns a boolean
 * @return {array}: an array made up of two arrays, the first containing values that returned true from
 * passing input func, the second containing values that returned false from passing input func 
 */
 _.partition = function(array, func){
    //create var output as an array containing two arrays
    var output = [[], []];

    //iterate through array input using for loop
    for (let i = 0; i < array.length; i++) {
        //determine if func returns true
        if(func(array[i], i, array)) {
            //if true, push current value to first array in output array
            output[0].push(array[i]);
        } else {
            //if false, push current value to second array in output array
            output[1].push(array[i]);
        }
    }

    //return output
    return output;
};

/**
 * map: takes in a collection of values that are passed through a function and returns a new array of
 * values from the returned values
 * @param {collection} collection: an array or object whose values are passed through input func
 * @param {func} action: values from input collection are passed through and return new value
 * @return {output}: an array of values resulting from values passed through input func
 */
 _.map = function(collection, func) {
    //create output var
    var output = [];

    //determine if input collection is an array
    if(Array.isArray(collection)) {
        //iterate using for loop
        for (let i = 0; i < collection.length; i++) {
            var result = func(collection[i], i, collection); //3 arguments
            output.push(result);
        }
    } else {
        //else it's an object
        //iterate using for key in obj loop
        for (let key in collection) {
            output.push(func(collection[key], key, collection)); //3 arguments
        }
    }

    //return output
    return output;
};

/**
 * pluck: takes in an array of objects and returns an array of values from a specific property in each object
 * @param {array} collection: an array of objects that is passed through the map function 
 * @param {prop} string: a string representing a key in an object that is used to return the value in
 * each object's key-value pair
 * @return {output}: an array of values from prop found in each object in input array 
 */
 _.pluck = function(array, prop){
    //invoke map on input array
    let output = _.map(array, function(element){
        // what should this function return?
        return element[prop];
    }); 

    //return output
    return output;
};

/**
 * every: returns a boolean regarding if every value in a collection successfully passed a function
 * @param {collection} collection: an array or object that is passed through func 
 * @param {func} action: a value or function that if its a function every value in input collection
 * passes through that returns boolean  
 * @return {boolean}: boolean value returned true if every value in input collection returned true
 * when passed through input func
 */
 _.every = function(collection, func){
    //determine if collection is an array
    if(Array.isArray(collection)) {
        //if collection is an array iterate through with for loop
        for (let i = 0; i < collection.length; i++) {
            //determine if func is a function
            if(typeof func === 'function') {
                //if true
                //determine if function returns false with current value of array
                if(!func(collection[i], i, collection)) {
                    //if false, return false
                    return false;
                }
            } else {
                //if func is not a function determine if current value is falsey
                if(!collection[i]) {
                    return false;
                }
            }
        }
    } else {
        //if collection is an object iterate with a for key in obj loop
        for (let key in collection) {
            //determine if func is a function
            if(typeof func === 'function') {
                //if true
                //determine if function returns false with current key
                if(!func(collection[key], key, collection)) {
                    //if false, return false
                    return false;
                }
            } else {
                //if func is not a function determine if current value is falsey
                if(!collection[key]) {
                    return false;
                }
            }
        }
    }

    //return true if all else has passed
    return true;
};

/**
 * some: returns boolean regarding if a collection contains at least one value that returns true
 * passing through a function
 * @param {collection} collection: an arrayor object whose values are passed through input func 
 * @param {func} action: a value or function that if a function will pass through values from input
 * collection and return boolean
 * @return {boolean}: a boolean that is true if a minimum single value in input collection passes func
 * and false if none pass
 */
 _.some = function(collection, func){
    //determine if collection is an array
    if(Array.isArray(collection)) {
        //if true, iterate through collection using for loop
        for(let i = 0; i < collection.length; i++) {
            //determine if func is a function
            if(typeof func === 'function') {
                //if true, determine if func with current value returns true
                if(func(collection[i], i, collection)) {
                    //if func is true return true
                    return true;
                }
            } else {
                //if func is not a function determine if current value of collection is truthy
                if(collection[i]) {
                    return true;
                }
            }
        }
    } else {
        //if collection is an object, iterate through collection using for key in obj loop
        for(let key in collection) {
            //determine if func is a function
            if(typeof func === 'function') {
                //if true, determine if current value in func is true
                if(func(collection[key], key, collection)) {
                    //if func is true return true
                    return true;
                }
            } else {
                //if func is not a function determine if current value of collection is truthy
                if(collection[key]) {
                    return true;
                }
            }
        }
    }

    //return false if all else passes
    return false;
 };

 /**
 * reduce: takes in an array, function, and value to return a value resulting from passing value
 * through a function with each value in array
 * @param {array} collection: an array of values passed through input func alongside seed 
 * @param {func} action: a function that takes in an array and seed value and returns new seed
 * @param {seed} value: a value that will accumulate new value each time it is passed through input func
 * @return {seed}: the value of input seed after it has been passed through the final iteration of input func 
 */
  _.reduce = function(array, func, seed) {
    //determine if seed value exists
    if(seed !== undefined) {
        //if true, iterate from start of array to end of it
        for(let i = 0; i < array.length; i++) {
            //
            seed = func(seed, array[i], i, array);
        }
    } else {
        //if false, start from second place of array to end
        seed = array[0];
        for(let i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i, array);
        }
    }

    //return seed
    return seed
};

/**
 * extend: copy properties from additional objects and pass them onto the first object
 * @param {obj1} object: first object that will take in properties from all successive input objects 
 * @param {output} object: object containing all properties copied over from successive input objects 
 */
 _.extend = function(obj1){
    //create output var equal to obj 1
    var output = obj1;
    
    //iterate through arguments
    for(let i = 1; i < arguments.length; i++) {
        //assign current argument to output
        Object.assign(output, arguments[i]); 
    }
    
    //return output
    return output;
};