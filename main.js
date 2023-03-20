let step = document.querySelectorAll(".steps > div");

// start form  validation
let user = document.querySelector("#user");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let submit = document.querySelector(".submit1");
let info_2 = document.querySelector(".all .info-2");
let all = document.querySelectorAll(".all > div");
const form = document.forms[0];
let fail = document.querySelector(".fail")
form.addEventListener("submit", function (el) {
  let validmail = false;
  let validtel = false;
  if (/\w+@\w+\.[com]+/gi.test(email.value)) {
    validmail = true;
    email.style.borderColor = "#ddd"
  }else{
    email.style.borderColor = "#b67e87"
  }
  if (/\d+/gi.test(phone.value)) {
    phone.style.borderColor = "#ddd"
    validtel = true;
  }else{
    phone.style.borderColor = "#b67e87"
    fail.style.display = "block"
  }
  if (validmail === false && validtel === false) {
    el.preventDefault();
  }
  if (validmail === true && validtel === true) {
    all.forEach((el) => el.classList.remove("appear"));
    info_2.classList.add("appear");
    step.forEach((el) => {
      el.classList.remove("active");
      if (el.classList.contains("step-2")) {
        el.classList.add("active");
      }
    });
  }
  el.preventDefault();
});

// end form  validation

// change the monthes to years
let palns = document.querySelectorAll(".plan > div");
let price = document.querySelectorAll(".plan .price span");
let choose = document.querySelector("#my");
let month = document.querySelector(".monthe");
let year = document.querySelector(".year");
let more = document.querySelectorAll(".more");
let total1 = document.querySelector(".total .total1>div span:first-child");
let total1_p = document.querySelector(".total .total1>span");
palns.forEach((paln) => {
  paln.onclick = function () {
    console.log(paln.children);
    total1.innerHTML = `${paln.children[1].innerHTML}(${
      choose.checked ? "year" : "mon"
    })`;
    total1_p.innerHTML = `${paln.children[2].innerHTML}`;
    palns.forEach((paln) => {
      paln.classList.remove("active");
    });
    paln.classList.add("active");
  };
});
choose.addEventListener("click", function () {
  let type;
  if (choose.checked) {
    year.classList.add("active");
    month.classList.remove("active");
    price.forEach((el) => (el.innerHTML = +el.innerHTML * 10));
    more.forEach((el) => (el.style.display = "block"));
    palns.forEach((el) => (el.style.height = "180px"));
    type = true;
  } else {
    month.classList.add("active");
    year.classList.remove("active");
    price.forEach((el) => (el.innerHTML = +el.innerHTML / 10));
    more.forEach((el) => (el.style.display = "none"));
    palns.forEach((el) => (el.style.height = "150px"));
    type = false;
  }
  if (type) {
    costs.forEach((el) => {
      el.innerHTML = +el.innerHTML * 10;
    });
  } else
    costs.forEach((el) => {
      el.innerHTML = +el.innerHTML / 10;
    });
});
// change the monthes to years

// function of go back
let info_1 = document.querySelector(".info");
let back = document.querySelector(".back");
back.onclick = function () {
  all.forEach((el) => el.classList.remove("appear"));
  info_1.classList.add("appear");
  step.forEach((el) => {
    el.classList.remove("active");
    if (el.classList.contains("step-1")) {
      el.classList.add("active");
    }
  });
};
// function of go back

// function of next page 3
let submit2 = document.querySelector(".submit2");
let info_3 = document.querySelector(".info-3");
submit2.addEventListener("click", function (btn) {
  all.forEach((el) => el.classList.remove("appear"));
  info_3.classList.add("appear");
  step.forEach((el) => {
    el.classList.remove("active");
    if (el.classList.contains("step-3")) {
      el.classList.add("active");
    }
  });
  btn.preventDefault();
});
// function of next page 3

// start page 3
let checks = document.querySelectorAll(".info-3 .box [type='checkbox']");
let costs = document.querySelectorAll(".info-3 .box .cost span");
let total2 = document.querySelector(".total .total2");

checks.forEach((el) => {
  el.parentElement.onclick = function () {
    let div = document.createElement("div");
    let one = document.createElement("span");
    let two = document.createElement("span");
    if (el.checked === true) {
      one.appendChild(
        document.createTextNode(
          el.parentElement.children[1].children[0].innerHTML
        )
      );
      two.appendChild(
        document.createTextNode(
          `+${el.parentElement.children[2].textContent.match(/\d+/gi)}$/${
            total1.innerHTML.includes("Monthly") ? "mo" : "year"
          }`
        )
      );
      el.parentElement.classList.add("active");
      total2.appendChild(one);
      total2.appendChild(two);
      div.append(one, two);
      total2.appendChild(div);
    }
    if (el.checked === false) {
      el.parentElement.classList.remove("active");
      total2.children[0].remove();
    }
  };
});

// start page 3

// function of next page 4
let submit3 = document.querySelector(".submit3");
let info_4 = document.querySelector(".info-4");
submit3.addEventListener("click", function (btn) {
  all.forEach((el) => el.classList.remove("appear"));
  info_4.classList.add("appear");
  step.forEach((el) => {
    el.classList.remove("active");
    if (el.classList.contains("step-4")) {
      el.classList.add("active");
    }
  });
  btn.preventDefault();
});
// function of next page 4

// function of go back
let back2 = document.querySelector(".back2");
back2.onclick = function () {
  all.forEach((el) => el.classList.remove("appear"));
  info_2.classList.add("appear");
  step.forEach((el) => {
    el.classList.remove("active");
    if (el.classList.contains("step-2")) {
      el.classList.add("active");
    }
  });
};
// function of go back

// start step-4
let back3 = document.querySelector(".back3");
back3.onclick = function () {
  all.forEach((el) => el.classList.remove("appear"));
  info_3.classList.add("appear");
  step.forEach((el) => {
    el.classList.remove("active");
    if (el.classList.contains("step-3")) {
      el.classList.add("active");
    }
  });
};
// start step-4

submit3.addEventListener("click", function (btn) {
  let total = document.querySelector(".final span:last-child ");
  let numbers = document.querySelectorAll(".total2 div span:last-child");
  let z = document.querySelector(".total .total1>span");
  let a = [];
  a.push(z.innerHTML.match(/\d+/gi).join(" "));
  numbers.forEach((el) => {
    let num = el.innerHTML;
    a.push(num.match(/\d+/gi).join(" "));
  });
  total.innerHTML = `+$${a.reduce((a, c) => +a + +c)}/${
    total1.innerHTML.includes("Monthly") ? "mo" : "year"
  }`;
  let op = document.querySelector(".final span:first-child");
  let si = document.querySelector(".total .total1>span");
  si.innerHTML = `+${si.innerHTML.match(/\d+/)}/$${
    total1.innerHTML.includes("Monthly") ? "mo" : "year"
  }`;
  op.innerHTML = `per(${total1.innerHTML.includes("Monthly") ? "mo" : "year"})`;
  btn.preventDefault();
});
// console.log(total1.innerHTML.includes("Monthly"));


let confirm = document.querySelector(".info-4 form .submit4");
let end  = document.querySelector(".end")

confirm.onclick = function(con){
    all.forEach((el) => el.classList.remove("appear"));
    end.classList.add("appear");
    step.forEach((el) => {
      el.classList.remove("active");
      if (el.classList.contains("step-4")) {
        el.classList.add("active");
      }
    });
    con.preventDefault();
}