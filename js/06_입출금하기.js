const amount = document.getElementById("amount"); //잔액 출력 span
const output = document.getElementById("output"); // 금액 입력 input

let balance = 10000; 
const password = '1234';

function deposit(){
    // 입금 버튼 클릭 시
    // input에 입력된 금액 만큼 잔액에 추가

    if(amount.value.length == 0){
        alert("금액을 입력해주세요");
    }else{
        balance += Number(amount.value);
        output.innerText = balance;

        amount.value ''; //input에 작성된 값 제거
    }
}


function withdrawal(){
    
    if(amount.value.length ==){
        alert("금액을 입력해주세요");

    }else{

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

    
}