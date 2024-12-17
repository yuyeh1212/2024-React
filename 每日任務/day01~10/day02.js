// codepen: https://codepen.io/yuyeh1212/pen/ogvBPxZ

// 參考資料
// Form controls: https://getbootstrap.com/docs/5.3/forms/form-control/
// Select : https://getbootstrap.com/docs/5.3/forms/select/
// Checks and radios: https://getbootstrap.com/docs/5.3/forms/checks-radios/

let c = ' 這是中文字';
let arr = {
  a: 'a',
  1: 'b',
  ' 這是中文字': 'c',
  'b': 'd',
  '--some data': 'e'
}

console.log(arr[1]);  // 請取得結果為 'b' 的值
console.log(arr[c]);  // 請取得結果為 'c' 的值，必須使用變數
console.log(arr.b);  // 請取得結果為 'd' 的值，必須使用點記號
console.log(arr['--some data']);  // 請取得結果為 'e' 的值