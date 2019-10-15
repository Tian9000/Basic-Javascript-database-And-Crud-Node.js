function deretkaskus(n) {
    var rambo = [];
    for (var i = 3; i <= n * 3; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) {
            rambo.push("KASKUS")
        } 
        else if (i % 6 == 0) {
            rambo.push("KUS")
        } else if (i % 5 == 0) {
            rambo.push("KAS");
        }else{
            rambo.push(i);
        }
    }
    return rambo;
}
console.log(deretkaskus(10))




