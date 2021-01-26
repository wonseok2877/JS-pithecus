// 1. DOM
const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const equals = document.querySelector(".js-equals");
const numbers = Array.from(document.querySelectorAll(".js-number"));
const operations = Array.from(document.querySelectorAll(".js-operation"));

let firstValue = "",
  firstDone,
  secondValue = "",
  secondDone,
  currentOperation;

//   5. 메인 계산 함수.
function doOperation() {
  // number 타입으로 반환한다. parseInt의 base는 10으로. 10진법.
  const intValueA = parseInt(firstValue, 10);
  const intValueB = parseInt(secondValue, 10);
  // switch문. 현재 입력된 연산기호를 대상으로 한다.
  switch (currentOperation) {
    case "+":
      return intValueA + intValueB;
    case "-":
      return intValueA - intValueB;
    case "/":
      return intValueA / intValueB;
    case "*":
      return intValueA * intValueB;
    //   return은 필수인듯 하다. 값을 불러와야 하니까.
    default:
      return;
  }
}

// 3. button functions
// 3-1. number 버튼 함수
function handleNumberClick(e) {
  // hmtl상의 버튼 값 인식
  const clickedNum = e.target.innerText;
  console.log(clickedNum);
  //   firstDone이 true인가 false인가를 기준으로 숫자를 넣는 변수를 달리한다.
  if (!firstDone) {
    //   firstValue
    firstValue = firstValue + clickedNum;
    // 렌더링
    result.innerHTML = firstValue;
  } else {
    //   secondeValue
    secondValue = secondValue + clickedNum;
    // 렌더링
    result.innerHTML = secondValue;
    // secondDone을 true로 만든다. 왜?
    secondDone = true;
  }
}

// 4. calculate 함수. 중간 매개 함수로 보인다.
function calculate() {
  // 메인 함수의 값을 불러들여 변수에 넣는다.
  const operation = doOperation();
  //   렌더링
  result.innerHTML = operation;
  //   firstValue 변수에다가 계산 이후의 값을 넣는다.
  firstValue = operation;
  //   secondDone 변수를 다시 비워준다.
  secondDone = false;
  //   secondValue 변수를 다시 비워준다.
  secondValue = "";
}

// 3-2. opearation 버튼 함수
function handleOperationClick(e) {
  //  hmtl상의 연산기호 인식
  const clickedOperation = e.target.innerText;
  //   firstDone이 boolean을 기준으로, calculate함수를 실행할지 안 할지를 결정한다.
  if (!firstDone) {
    //   firstDone을 true로 만든다. 왜?
    firstDone = true;
  }
  if (firstDone && secondDone) {
    calculate();
  }
  //   함수 바깥에서 선언한 연산기호 변수에다가 현재의 연산기호를 넣는다. string type일 것이다.
  currentOperation = clickedOperation;
}

// 3-4. 리셋 버튼 함수
function handleReset() {
  // 모든 독립 변수 값을 원래대로 돌려놓는다.
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperation = null;
  // 렌더링도.
  result.innerHTML = "0";
}

// 3-3. = 버튼 함수
function handleEqualsClick() {
  // 두 변수의 값이 모두 참일때만 함수를 실행하도록 설계했다.
  if (firstDone && secondDone) {
    calculate();
  }
}

// 2. eventListener, listen click and execute functions
numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberClick);
});
operations.forEach(function (operation) {
  operation.addEventListener("click", handleOperationClick);
});
reset.addEventListener("click", handleReset);
equals.addEventListener("click", handleEqualsClick);
