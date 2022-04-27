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
 * @param {value} value: the value to be found in an array
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
