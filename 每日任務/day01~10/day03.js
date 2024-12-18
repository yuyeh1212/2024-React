// codepen: https://codepen.io/yuyeh1212/pen/bNbqpRN

// 參考資料:
// 迴圈參考：https://wcc723.github.io/javascript/2017/06/29/es6-native-array/
// Layout: https://getbootstrap.com/docs/5.3/forms/layout/#horizontal-form

console.clear();
let c = " 這是中文字";
let arr = {
  a: "a",
  1: "b",
  " 這是中文字": "c",
  b: "d",
  "--some data": "e",
};

console.log("---(1)---");
const newArr1 = Object.keys(arr);
console.log(newArr1);

console.log("---(2)---");
const newArr2 = Object.values(arr);
console.log(newArr2);

console.log("---(3)---");
newArr1.forEach((newArr1) => {
  console.log(newArr1);
});

console.log("---(4)---");
for (let i = 0; i < newArr2.length; i++) {
  console.log(newArr2[i]);
}
