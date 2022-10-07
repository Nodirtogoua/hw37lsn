// function nodir(a, b) {
//     let n = 0;
//     let m = 0;

//     if (a == a.toLowerCase()) {
//         n++;
//     } else {
//         m++;
//     }
//     if (b == b.toLowerCase()) {
//         n++;
//     } else {
//         m++;
//     }
//     if (n == 2) {
//         return 1;
//     } else if (m == 2) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }
// console.log(nodir('A', 'L'));


// function nodir(a, b) {
//     let k = 0;
//     let j = 0;
//     if (typeof Number(a) != NaN) {
//         k++;
//     }
//     else {
//         j++;
//     }
//     if (typeof Number(b) != NaN) {
//         k++;
//     }
//     else {
//         j++;
//     }
//     if (k == 2) {
//         return -1;
//     }
//     else if (j == 2) {
//         return -1;
//     }
//     else {
//         return 0;
//     }
// }
// console.log(nodir('0', '?'));