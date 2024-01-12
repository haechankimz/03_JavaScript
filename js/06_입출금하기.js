
const balance = document.getElementById("balance");
const amount = document.getElementById("amount");

function deposit(){
      let balance = 10000;
    

}







function withdrawal(){
    
    const password = prompt("비밀번호를 입력하세요");

    if(password == null){
        alert("취소");
    }else{
        
        if(password == '1234'){
            alert("비밀번호 일치");
        } else{
            alert("비밀번호가 일치하지 않습니다");
        }
    }
}