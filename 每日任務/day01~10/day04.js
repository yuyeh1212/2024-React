// codepen: https://codepen.io/yuyeh1212/pen/WbepKqz

// 參考資料
//回呼函式: https://developer.mozilla.org/zh-TW/docs/Glossary/Callback_function
//Text: https://getbootstrap.com/docs/5.3/utilities/text/#font-size
//Typography: https://getbootstrap.com/docs/5.3/content/typography/#headings

let crowdAge = [
  {
    name: 'Rick',
    age: 17
  },
  {
    name: 'Jane',
    age: 25
  },
  {
    name: 'Jordan',
    age: 19
  },
  {
    name: 'Jack',
    age: 7
  },
  {
    name: 'Reol',
    age: 27
  }
];

// callback 函式
function ageFilterCB(cb, arr) {
  return cb(arr);
}

function ageFilter(arr) {
  return arr.filter(person => person.age > 18);
}

let filterResult = [];
filterResult = ageFilterCB(ageFilter, crowdAge);
console.log(filterResult); /* 為陣列，內容包含屬性 age > 18 的 crowdAge 元素 */