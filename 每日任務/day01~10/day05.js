// codepen: https://codepen.io/yuyeh1212/pen/ZYzKBEG

// 參考資料: 
// Colors: https://getbootstrap.com/docs/5.3/utilities/colors/
// Background: https://getbootstrap.com/docs/5.3/utilities/background/#background-color

console.clear();
const array = [
  {
    name: "小明",
    age: 18
  },
  {
    name: "小美",
    age: 15
  },
  {
    name: "杰倫",
    age: 19
  },
  {
    name: "漂亮阿姨",
    age: 22
  },
  {
    name: "老媽",
    age: 28
  }
];
let newArray = array.map((person) => {
  return {
    ...person,
    age: `${person.age} 歲啦`
  };
});

console.log(newArray);
