// codepen: https://codepen.io/yuyeh1212/pen/GgKEPEN

// 參考資料:
// JavaScript 是「傳值」或「傳址」？: https://ithelp.ithome.com.tw/articles/10191057
// Object.assign(): https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// JavaScript 展開與其餘: https://www.casper.tw/javascript/2017/12/24/javascript-spread-operator/

let town = {
    name: "真心鎮",
    resident: []
  };
  let townData = {};
  let Ming = { name: "小明", age: 16 };
  let Rick = { name: "瑞克", age: 21 };
  
  /* 程式碼修改處（可以更改 function 規則） */
  function addResident(obj, res1, res2) {
    townData = { ...obj, resident: [...obj.resident] };
  
    townData.resident.push(res1, res2);
  }
  /* 程式碼修改處 */
  
  addResident(town, Ming, Rick);
  console.log(townData === town); // 結果須為 false
  console.log(town); // 原始 town 內容
  console.log(townData); // townData 包含新增的 resident  