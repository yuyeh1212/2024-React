// codepen: https://codepen.io/yuyeh1212/pen/jENwLjX

// 參考資料:
// Spacing: https://getbootstrap.com/docs/5.3/utilities/spacing/
// Sizing: https://getbootstrap.com/docs/5.3/utilities/sizing/

const array = [
    {
      name: '小明',
      age: 18
    },
    {
      name: '小美',
      age: 15
    },
    {
      name: '杰倫',
      age: 19
    },
    {
      name: '漂亮阿姨',
      age: 22
    },
    {
      name: '老媽',
      age: 28
    }
  ];
  let newArray = [];
  
  newArray = array.filter((person) => person.age <= 18);
  
  console.log(newArray)