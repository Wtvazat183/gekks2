// var orray = ['a', 'b', 'c']
// console.log(orray[1])
// orray[5] = 't'
// console.log(orray[5])



// var  matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[2][1])
//
// count = 0
// count = count + 1
// count+=1
// count++
//
//
//
//
// var count  =  0
// while (count <= 10){
//     console.log(count)
//     count++
// }
//
//
//
// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }
//
//
// var names =['aliya', 'john', 'jack', 'aidana']
// for (var i = 0; i < names.length; i++){
//     if (names[i][0] === 'a' || names [i][0]==='a'){
//         console.log(`name with letter a -${names[i]}`)
//     }else{
//         console.log(`other names - ${m=names [i]}`)
//     }
//
// }
//
//
//
//
// var fruits = ['banana', 'orange', 'pineapples', 'watermelon']
// fruits.push('apple', 'cherry')
// var fruits2 = fruits.concat('lemon')
// console.log(fruits2)
// var  firstFruit = fruits.shift()
// // console.log (firstFru)
//
//
//
//
//
//
//
//
// fruits.splice(0, 2, 'potato', 'vdfzvs')
// var names2 = ['aidar', 'anna','john', 'jack', 'tom','tim', 'oliver']
// var blacklist = ['jack', 'oliver']
// for (var i = 0; i< names2.length; i++){
//     if (blacklist.includes(names2[i].toLowerCase())){
//         console.warn(`${names2 [i]}`)
//     }
//
// }
//
//
//
//
// console.log(fruits)


const array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
let neyaray = [];
const reject = /(^2|^5)/;

for (let i = 0; i < array.length; i++) {
    if (reject.test(array[i]) == true) {
        neyaray.push(array[i]);
    }
}

console.log(neyaray);
neyaray.sort(function (a, b) {
    return b - a;
});
console.log(neyaray);

const str = [
    'li',
    'div',
    'li',
    'p',
    'h1',
    'p',
    'h1',
    'div',
    'div',
    'li',
    'h1',
    'p',
    'h1',
    'ol',
    'br',
];
tegObj = {
    li: 0,
    div: 0,
    p: 0,
    h1: 0,
    ol: 0,
    br: 0,
};

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'li') tegObj.li++;
    if (str[i] == 'div') tegObj.div++;
    if (str[i] == 'h1') tegObj.h1++;
    if (str[i] == 'p') tegObj.p++;
    if (str[i] == 'ol') tegObj.ol++;
    if (str[i] == 'br') tegObj.br++;
}

console.log(tegObj)