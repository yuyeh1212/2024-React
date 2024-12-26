// codepen: https://codepen.io/yuyeh1212/pen/KwPvpQj

// 參考資料:
// JS Expression: https://www.casper.tw/development/2020/09/17/js-expression/

// 問題一
// if(Ans) {
//   console.log("Ans 是表達式");
// }

// 請問以下有哪些選項代入 Ans 可以輸出 console.log 不會報錯?

// 1. 2 === 2
// 2. "string"
// 3. var a(是變數聲明語句，不是一個值或表達式，因此不能直接作為 if 判斷的條件。)
// 4. if(true){let a = 2;}(是一個控制流語句，而不是值或表達式，不能直接代入 Ans)
// 5. [25, 30] // 純陣列
// 6. {name: "hexSchool"}  // 純物件
// Ans：1、2、5、6

// --------------------------------------------

function executeExpression(expression) {
  return expression();
}

function hexIsGood() {
  return true;
}

const result = executeExpression(hexIsGood);
console.log(result); // true
