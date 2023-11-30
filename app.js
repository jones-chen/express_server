// Include http module from Node.js使用 require 
const express = require('express')  //載入 Express
const app = express()  //此行是比http多的，取出函式
 
// Define server related variables 定義伺服器相關變數，使用 Express 傳送回應 (response) 給使用者
// const hostname = 'localhost' //在 Express 中，如果沒有定義 hostname ，Express 就會預設用 localhost。
const port= 3000  //自訂，建議為3000
 
// setting the route and corresponding response 不同頁面，給予不同Response
// 當使用者進入 localhost = 3000 跟目錄底下時回傳”內容”
app.get ('/', (req, res)=>{  //設定路由  // '/'代表根目錄
  res.send(`<h1>This is my first express web app </h1>`) 
// 不需要設定content type，如果是使用send方法，會自動判斷內容類型
})
 
// Start and listen the server  //啟動伺服器去監聽，顯示在終端機，此時不用hostname了
app.listen(port, () => {   //當伺服器被啟動時，這個函式就會被執行。
  console.log(`express is running on http://localhost:${port}`)   // 顯示在Terminal
})
