const keys = document.querySelectorAll(".key");
const result = document.querySelector(".result");
const numberText = document.querySelector(".numberText");
const phoneNumber = document.querySelector(".phoneNumber");

for(let item of keys){
  item.addEventListener("click", e => {
    
    numberText.textContent += e.target.textContent;
  });
}

const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {

  const li = document.createElement("li");
  li.classList.add("phoneNumber");
  
  li.textContent = numberText.textContent;
  result.prepend(li);

  
  const listes = document.querySelectorAll("li");

  const span2 = document.createElement("span");

  span2.classList.add("star");

  span2.innerHTML = "&nbsp;&nbsp; ☆";

  span2.addEventListener("click", (e) => {

    const parent = e.target.parentElement;

      if(e.target.value != 0){
        e.target.innerHTML = "&nbsp;&nbsp;★";
        e.target.style.color = "orange";
        parent.style.color = "red";
      }else {
        e.target.innerHTML = "&nbsp;&nbsp;☆";
        e.target.style.color = "black";
        parent.style.color = "black";
      }

  });

  li.append(span2);
  
  const span = document.createElement("span");

  span.classList.add("remove");

  span.innerHTML = "&nbsp; &times;";

  span.addEventListener("click", (e) => {

    const parent = e.target.parentElement;
    parent.remove();
  });

  li.append(span);

  numberText.textContent = "";

});

const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", () => {
  numberText.textContent = "";
});