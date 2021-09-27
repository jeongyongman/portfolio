function fn_newCallBack(){
    console.log("비동기적으로 호출되고 싶다.");
}
  
console.log("-------  호출 직전 -------");
  
setTimeout(fn_newCallBack, 0); // 콜백이 언제 동작할지 예측해보자.
  
console.log("-------  호출 이후 -------");
  
//무한로프로 콘솔을 찍어낸다.
let i = 0;
while(i<10){
    console.log(i+"\n");
    i++;
}