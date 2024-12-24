// codepen: https://codepen.io/yuyeh1212/pen/vEBZRao

// 參考資料:
// reduce: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Grid system: https://getbootstrap.com/docs/5.3/layout/grid/

// 小明的銀行帳戶資訊
let mingAccount = {
    name: '小明',
    age: 22,
    deposit: 10000,
    depositRecord: [
      {
        title: '開戶',
        amounts: 10000
      }
    ]
  };
  // 小明的存款資訊
  let mingTransfer = [
    {
      title: '一月存款',
      amounts: 777
    },
    {
      title: '二月存款',
      amounts: 7000
    },
    {
      title: '三月存款',
      amounts: 70000
    }
  ]
  mingAccount.depositRecord.push(...mingTransfer);
  
  // acc: 累加器，初始值為 0
  // curr: 當前元素
  // curr.amounts 為每筆存款的金額
  let totalDeposit = mingTransfer.reduce((acc, curr) => acc + curr.amounts, 0);
  mingAccount.deposit += totalDeposit;
  
  console.log(mingAccount);