const mmc = (a, b) => {
  let mult = 2;
  let result = 1;
  const mmcRecursive = (a, b) => {
    let resultA;
    let resultB;
    if (a == 1 && b == 1) return;
    if (!(a % mult) || !(b % mult)) {
      resultA = !(a % mult) ? a / mult : a;
      resultB = !(b % mult) ? b / mult : b;
      result = result * mult;
      mmcRecursive(resultA, resultB);
      return;
    }

    mult++;
    mmcRecursive(a, b);
  };
  mmcRecursive(a, b);
  return result;
};

const mdc = (a, b) => {
  let mult = 2;
  let result = 1;
  const mmdRecursive = (a, b) => {
    let resultA;
    let resultB;
    if (a == 1 && b == 1) return;
    if (!(a % mult) || !(b % mult)) {
      resultA = !(a % mult) ? a / mult : a;
      resultB = !(b % mult) ? b / mult : b;

      if (!(a % mult) && !(b % mult)) {
        result = result * mult;
      }
      mmdRecursive(resultA, resultB);
      return;
    }

    mult++;
    mmdRecursive(a, b);
  };
  mmdRecursive(a, b);
  return result;
};

const buttons = document.querySelectorAll("[data-calc]");
const logic = () => {
  const containers = document.querySelectorAll(".container");
  containers.forEach((i) => {
    if (i.classList.contains("inativo")) {
      i.classList.remove("inativo");
      return;
    }
    i.classList.add("inativo");
  });
};
buttons.forEach((bt) => {
  bt.addEventListener("click", logic);
});
const resultContainer = document.querySelector("#containerResult");
function mdcButton() {
  let [numberOne, numberTwo] = Array.from(
    document.querySelectorAll("[data-mdc]")
  );
  let result = 0;
  if (numberOne.value && numberTwo.value) {
    result = mdc(parseFloat(numberOne.value), parseFloat(numberTwo.value));
    resultContainer.innerHTML = result;
  }
}

function mmcButton() {
  let [numberOne, numberTwo] = Array.from(
    document.querySelectorAll("[data-mmc]")
  );
  let result = 0;
  if (numberOne.value && numberTwo.value) {
    result = mdc(parseFloat(numberOne.value), parseFloat(numberTwo.value));
    resultContainer.innerHTML = result;
  }
}
