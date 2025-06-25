//forEach() = method used to iterate over elements of an array
//and apply specified (function) to each element


//array.forEach(callback)

let numbers = [1,2,3,4,5,6]

numbers.forEach(double)
numbers.forEach(display)

function double(element,index,array){
    array[index]= element*2
}

function display(element){
    console.log(element)
}