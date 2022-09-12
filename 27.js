// // var num = [10,20,30,40,50];


// var num = new Array();

// for( var i = 0; i<5; i++){
//    num[i] = parseInt(prompt("Enter the Number :"))
// }


// var sum =0;

// for( var i=0; i<5 ;i++){
//     console.log(num[i]);
//     sum = sum + num[i];
// }

// console.log("sum = " +sum);


var numberss = [20,10,40,30];

numberss.sort(function(a,b){
    // return a-b;
    return b-a;
});
console.log(numberss);