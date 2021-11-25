console.log("welcome to practice");

// narcissistic Numbers
// function narcissistic(value) {
//   let strNum = value.toString();
//   let power = strNum.length;
//   let out = 0;

//   for (let i = 0; i < power; i++) {
//     let num = strNum.charAt(i);
//     out += Math.pow(num, power);
//   }

//   console.log(out);
// }
// narcissistic(1652);

// me, myself & i
// function list(names){
//     //your code here
//     let str = '';
//     for (let i = 0; i < names.length; i++) {
//         if (i == 0) {
//             str = names[i].name;
//         }else if (i == names.length-1) {
//             str = str + ' & ' + names[i].name;
//         }else{
//             str = str + ', ' + names[i].name;
//         }
//     }
//     console.log(str);
//   }
//   list([{ name: "Bart" }]);

// is it a square
// var isSquare = function (n) {
//   let sqrt = Math.sqrt(n);
//   if (sqrt % 1 == 0) {
//     console.log(true);
//   } else console.log(false);
// };
// isSquare(0);

// smallest word in a sentance 
// function findShort(s) {
//   var shortest = "0000000000000000000000000000000";
//   s.split(" ").forEach((word) => {
//     if (word.length < shortest.length) {
//       shortest = word;
//     }
//     return word;
// });
// console.log(shortest.length);
// }

//*********SHORTEND**********//

// function findShort(s){
//     console.log(Math.min(...s.split(' ').map(s=>s.length)));
// }

// findShort("bitcoin take over the world maybe who knows perhaps");
// findShort("Let's travel abroad shall we")

// check if number is an ip 
// function isValidIP(str) {
//     var arr = str.split('.');
//     var x = arr.length == 4 && arr.every(str => {return /^\d+$/.test(str) && str >= 0 && str <= 255;})
//     console.log(x);
//   }
//   isValidIP('10.190.32.259')

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(Math.max.apply(null,arr));
const count = (string) => {
    let arr = string.split('');
    let newArr = arr.filter((item,pos) => {
        return arr.indexOf(item) == pos;
    });
    console.log(newArr);
}
count('hello');