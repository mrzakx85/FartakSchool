const preRegisterBtn = document.querySelector(".preRegister-btn");
const allError = document.querySelector(".all-err");
const backbtn = document.querySelector(".backbtn");
const checkBox = document.querySelector(".check-box");

const inputTopic = document.querySelectorAll(".input-topic");

const phoneNumber = document.getElementById("phone-number");
const nationalCode = document.getElementById("national-code");
const postalCode = document.getElementById("postal-code");


backbtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});

//

//

preRegisterBtn.addEventListener("click", () => {
    
  const phoneValue = phoneNumber.value.trim();
  const nationalValue = nationalCode.value.trim();
  const postalValue = postalCode.value.trim();

  let trueNum = false;
  let trueNash = false;

  if (phoneValue) {
    phoneNumber.parentElement.parentElement.children[0].children[0].classList.remove(
      "empty-seachbox",
    );
    allError.innerHTML = "";
    //
    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phoneValue)) {
      phoneNumber.parentElement.parentElement.children[0].children[0].classList.add(
        "empty-seachbox",
      );
      allError.innerHTML = "شماره تلفن اشتباه است";
      trueNum = false;
    } else {
      phoneNumber.parentElement.parentElement.children[0].children[0].classList.remove(
        "empty-seachbox",
      );
      allError.innerHTML = "";
      trueNum = true;
    }
  } else {
    phoneNumber.parentElement.parentElement.children[0].children[0].classList.add(
      "empty-seachbox",
    );
    allError.innerHTML = "";
    trueNum = false;
  }

  // // //  //  //  //  //

  if (trueNum) {
    if (nationalValue) {
      nationalCode.parentElement.parentElement.children[0].children[0].classList.remove(
        "empty-seachbox",
      );
      allError.innerHTML = "";
      //
      const nationalregex = /^\d{10}$/;
      if (!nationalregex.test(nationalValue)) {
        nationalCode.parentElement.parentElement.children[0].children[0].classList.add(
          "empty-seachbox",
        );
        allError.innerHTML = "کد ملی اشتباه است";
        trueNash = false;
      } else {
        nationalCode.parentElement.parentElement.children[0].children[0].classList.remove(
          "empty-seachbox",
        );
        allError.innerHTML = "";
        trueNash = true;
      }
    } else {
      nationalCode.parentElement.parentElement.children[0].children[0].classList.add(
        "empty-seachbox",
      );
      allError.innerHTML = "";
      trueNash = false;
    }
  }

  // // //  //  //  //  //

  if (trueNash) {
    if (postalValue) {
      postalCode.parentElement.parentElement.children[0].children[0].classList.remove(
        "empty-seachbox",
      );
      allError.innerHTML = "";
      //
      const postalregex = /^\d{10}$/;
      if (!postalregex.test(postalValue)) {
        postalCode.parentElement.parentElement.children[0].children[0].classList.add(
          "empty-seachbox",
        );
        allError.innerHTML = "کد پستی اشتباه است";
      } else {
        postalCode.parentElement.parentElement.children[0].children[0].classList.remove(
          "empty-seachbox",
        );
        allError.innerHTML = "";

        if(checkBox.checked) {
           window.location.href = "../index.html"; 
            allError.innerHTML = "";
        }else {
            allError.innerHTML = "آیا قوانین را میپذیرید؟"
        }
        
      }
    } else {
      postalCode.parentElement.parentElement.children[0].children[0].classList.add(
        "empty-seachbox",
      );
      allError.innerHTML = "";
    }
  }

  //

  //
  inputTopic.forEach((topicBox) => {
    const title = topicBox.querySelector("p");
    const searchBox = topicBox.querySelector("input").value.trim();

    //
    if (!searchBox) {
      title.classList.add("empty-seachbox");
    } else {
      title.classList.remove("empty-seachbox");
    }
  });
});

//  title.classList.add("empty-seachbox");
// allError.innerHTML = "شماره تلفن اشتباه است";

// function validatePhone(phoneValue) {
//   const phoneRegex = /^09\d{9}$/;
//   return phoneRegex.test(phoneValue);
// }

// function validateNationalCode(nationalCodeValue) {
//   const nationalregex = /^\d{10}$/;
//   return nationalregex.test(nationalCodeValue);
// }

// function validatePostalCode(postalCodeValue) {
//   const postalregex = /^\d{10}$/;
//   return postalregex.test(postalCodeValue);
// }
