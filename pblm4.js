let array = [3,[2,4,5],6,7,[8]]
 let count = 0;

 array.map(function breakarr(e){
    if(Array.isArray(e))
    return e.map(breakarr)
    count += 1;
})
console.log(count)