const priceForOneHour = {
  html_css: 500,
  js: 1000,
  php: 300,
  python: 400,
};

const hours = {
  "1h": 0,
  "2h": 0.2,
  "3h": 0.3,
};

const lang = {
  rus: 0,
  en: 0.1,
  deut: 0.2,
};
const reporting = {
  offset: 0.02,
  exam: 0.03,
};

const fio = document.querySelector("#fio");
const tel = document.querySelector("#tel");
const mail = document.querySelector("#mail");
const table = document.querySelector("table");
const courses = document.querySelector(".courses");
const coursesItem = document.querySelectorAll(".courses__item");
const coursesLang = document.querySelectorAll(".courses__lang");
const coursesTime = document.querySelectorAll(".courses__time");
const coursesReporting = document.querySelectorAll(".courses__reporting");
const disabled = document.querySelectorAll(".disabled");

const p = document.createElement("p");
p.innerHTML = "Выберете курс";
p.style.color = "red";
p.style.fontSize = "14px";
p.style.textAlign = "center";
p.style.marginTop = "5px";

coursesItem.forEach((el) => {
  if (el.checked === false) {
    disabled.forEach((el) => {
      el.disabled = true;
    });
  }
});
table.addEventListener("click", (event) => {
  const target = event.target.closest(".target");
  if (!target) {
    return;
  }
  const disabled = target.querySelectorAll(".disabled");
  disabled.forEach((el) => {
    if (el.disabled === true) {
      target.append(p);
    }
  });
});

table.addEventListener("click", (event) => {
  const courses = event.target.closest(".courses__item");
  let i = 0;
  if (!courses) {
    return;
  }
  coursesItem.forEach((el, a) => {
    if (el === courses) {
      i = a;
    }
  });
  if (courses.checked) {
    p.remove();
    disabled.forEach((e, ind) => {
      if (ind >= i * 6 && ind <= i * 6 + 5) {
        e.disabled = false;
      }
    });
  } else {
    disabled.forEach((e, ind) => {
      if (ind >= i * 6 && ind <= i * 6 + 5) {
        e.disabled = true;
      }
    });
  }
});

const error = document.createElement("p");
error.innerHTML = "Сначала заполните анкету";
error.style.color = "red";
error.style.marginTop = "20px";

function getPrice() {
  let sum = [];
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arrIndex = [];
  coursesItem.forEach((el, i) => {
    if (el.checked) {
      arr[i] = priceForOneHour[el.value];
      arrIndex.push(i);
    }
  });
  let i = 0;
  coursesTime.forEach((el) => {
    if (el.checked) {
      arr1[arrIndex[i]] = hours[el.value];
      i++;
    }
  });
  i = 0;
  coursesReporting.forEach((el) => {
    if (el.checked) {
      arr2[arrIndex[i]] = reporting[el.value];
      i++;
    }
  });
  i = 0;
  coursesLang.forEach((el) => {
    arr3[arrIndex[i]] = lang[el.options[el.selectedIndex].value];
    i++;
  });
  if (
    arr.length !== 0 &&
    arr1.length !== 0 &&
    arr2.length !== 0 &&
    arr3.length !== 0
  ) {
    if (courses.contains(error)) {
      courses.removeChild(error);
    }
    sum.push(arr[0] + arr[0] * arr1[0] + arr[0] * arr2[0] + arr[0] * arr3[0]);
    sum.push(arr[1] + arr[1] * arr1[1] + arr[1] * arr2[1] + arr[1] * arr3[1]);
    sum.push(arr[2] + arr[2] * arr1[2] + arr[2] * arr2[2] + arr[2] * arr3[2]);
    sum.push(arr[3] + arr[3] * arr1[3] + arr[3] * arr2[3] + arr[3] * arr3[3]);
    if (arr[0] !== undefined) {
      document.querySelector(".courses__price-1").value = sum[0] + " руб";
    } else {
      document.querySelector(".courses__price-1").value = "";
    }
    if (arr[1] !== undefined) {
      document.querySelector(".courses__price-2").value = sum[1] + " руб";
    } else {
      document.querySelector(".courses__price-2").value = "";
    }
    if (arr[2] !== undefined) {
      document.querySelector(".courses__price-3").value = sum[2] + " руб";
    } else {
      document.querySelector(".courses__price-3").value = "";
    }
    if (arr[3] !== undefined) {
      document.querySelector(".courses__price-4").value = sum[3] + " руб";
    } else {
      document.querySelector(".courses__price-4").value = "";
    }
    document.querySelector("#allprice").value =
      sum.filter((e) => isNaN(e) === false).reduce((a, b) => a + b) + " руб";
  } else {
    courses.append(error);
  }
}
document
  .querySelectorAll(".courses__button")[0]
  .addEventListener("click", getPrice);
document
  .querySelectorAll(".courses__button")[1]
  .addEventListener("click", () => {
    coursesItem.forEach((el) => {
      el.checked = false;
    });
    disabled.forEach((el) => {
      el.disabled = true;
      el.checked = false;
    });
    coursesLang.forEach((el) => {
      el.selectedIndex = 0;
    });
    document.querySelector(".courses__price-1").value = "";
    document.querySelector(".courses__price-2").value = "";
    document.querySelector(".courses__price-3").value = "";
    document.querySelector(".courses__price-4").value = "";
    document.querySelector("#allprice").value = "";
    p.remove();
    error.remove();
  });
