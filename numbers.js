 function calculateSegmentProduct(A, B, C) {
   return Math.abs((C - A) * (B - C));
}
 console.log(calculateSegmentProduct(0, 5, 2));
//  export { calculateSegmentProduct };
 function calculateKilobytes(a, b) {
   return Math.floor(a / b);
}
 console.log(calculateKilobytes(5000, 1024));
// const calculateDigitSum = (x1, x2) => Math.abs(x2-x1)
//const calculateDigitSum = (x) => {
//  const des = Math.floor(x/10);
//const ed = x%10;
//return des + ed;
//}
//console.log(des, ed)
//export {calculateDigitSum}