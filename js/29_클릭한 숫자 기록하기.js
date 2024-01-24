const keys = document.querySelectorAll(".key");
const result = document.querySelector("#result");

for(let item of keys){
  item.addEventListener("click", e => {
    
    if(result.textContent.length == 10) {
    alert("10글자 까지만 입력 가능");
    return;
    } 
    // console.log(e.target.textContent);
    result.textContent += e.target.textContent;

  });
}

/* 초기화 버튼 */

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", () => {
  result.textContent = "";
});