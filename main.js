let bill = document.getElementById("bill-input");
let tip = document.querySelector(".custom");
let noP = document.querySelector(".no-p");
let Person = document.querySelector(".per-person");
let TotalH = document.querySelector(".Total");
let calculateButton = document.getElementById("cal");
let error = document.querySelector(".error");
let errorNo = document.querySelector(".error-no");
let buttons = document.querySelectorAll(".cent-btn");

calculateButton.addEventListener("click", calculateTip);

function hideError() {
  setTimeout(() => {
    error.style.display = "none";
    bill.style.border = "2px solid #cbf1f5";
    tip.style.border = "2px solid #cbf1f5";
    noP.style.border = "none";
    errorNo.style.display = "none";
    noP.style.border = "#cbf1f5";
  }, 4000);
}

function calculateTip() {
  let bills = bill.value;
  let tips = tip.value;
  let noPs = noP.value;

  if (bills === "") {
    bill.style.border = " 1px solid red";
    error.style.display = "block";
    error.innerHTML = "bill is empty!!!";
    hideError();
  } else if (tips === "") {
    tip.style.border = "1px solid red";
    error.style.display = "block";
    error.innerHTML = "tip is empty!!!";
    hideError();
  } else if (noPs === "") {
    noP.style.border = "1px solid red";
    error.style.display = "block";
    error.innerHTML = "input number of people!!!";
    hideError();

    // } else if(isNaN(bills )){
    //     error.style.display = "block";
    //     error.innerHTML = "an input is not a number";
    //     hideError();

    // } else if(isNaN(tips )){
    //     error.style.display = "block";
    //     error.innerHTML = "an input is not a number";
    //     hideError();
  } else {
    noPs = Number(noPs);
    bills = Number(bills);
    tips = Number(tips);
    let total = bills * (tips / 100);

    // total + bill
    // let totalAmount = total + bills;

    total = Math.ceil(total);
    TotalH.innerHTML = `$${total}`;

    //total per person
    if (noPs <= 0) {
      errorNo.style.display = "block";
      errorNo.innerHTML = "most be more than zero";
      noP.style.border = "1px solid red";
      TotalH.innerHTML = "$0.00";
      hideError();
    } else if (isNaN(noPs)) {
      errorNo.style.display = "block";
      errorNo.innerHTML = "not a number";
      noP.style.border = "1px solid red";
      TotalH.innerHTML = "$0.00";
      hideError();
    } else {
      let perPerson = total / noPs;
      perPerson = Math.ceil(perPerson);
      Person.innerHTML = `$${perPerson}`;
    }
    bill.value = "";
    tip.value = "";
    noP.value = "";
  }
}

// handleKeyPress();
// function handleKeyPress(event){
//     if (event === "enter"){
//         calculateTip();
//     }
// }

function allValue() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // if (btn.classList.contains("cent-btn")){
      //     btn.classList.toggle("active");
      // };
      let btnValue = btn.value;
      tip.value = btnValue;
    });
  });
}
allValue();
