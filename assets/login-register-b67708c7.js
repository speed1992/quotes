import{k as u}from"./commonUtils-9c9ddae1.js";import{u as e,g as c}from"./index-9f2e32b3.js";const g="_userInput_ivq2c_3",h="_menuBtn_ivq2c_33",t={userInput:g,menuBtn:h},k=({setUserName:o,userName:n,isLoggedIn:p,setIsLoggedIn:a,openSnackbar:s,markedQuotes:v,setMarkedQuotes:C,password:i,setPassword:m,setIsFetching:r})=>{const d=n.charAt(0).toUpperCase()+n.slice(1);return e(c,{children:p?e("div",{children:[e("div",{className:t.userName,children:["Hi ",d,"!"]}),e("button",{className:t.menuBtn,onClick:()=>a(!1),children:"Logout"})]}):e(c,{children:["Username",e("input",{type:"text",className:t.userInput,onChange:l=>o(l.target.value),value:n}),"Password",e("input",{type:"password",className:t.userInput,onChange:l=>m(l.target.value),value:i}),e("button",{className:t.menuBtn,onClick:()=>u({apiCallType:"login",userName:n,password:i,setIsLoggedIn:a,openSnackbar:s,setIsFetching:r}),children:"Login"}),e("button",{className:t.menuBtn,onClick:()=>u({apiCallType:"register",userName:n,password:i,setIsLoggedIn:a,openSnackbar:s,setIsFetching:r}),children:"Register"})]})})};export{k as default};
