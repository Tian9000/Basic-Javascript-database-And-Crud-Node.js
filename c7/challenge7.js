function weirdMultiply(sentence) {
    var rest = sentence.toString()
    
    var ram = 1;
    for (var i = 0; i < rest.length; i++){
        ram *= rest[i];
    }
    
    if(rest.length === 1){
        return parseInt(rest);
    }
    return weirdMultiply(ram);
    

}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));


