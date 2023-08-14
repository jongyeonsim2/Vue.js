import View from "./View.js";

// 디버깅용 태그.
const tag = "[FromView]"

// 임포트한 View 를 이용해서 새로운 FormView 라는 이름의 view 객체를 생성.
const FromView = Object.create(View);

// FormView 객체에 새로운 setup 메소드를 추가.
FromView.setup = function(el) {

  //console.log(tag, "setup()");
  this.init(el);

  //html 요소에서 tyoe 이 text 인 요소를 찾음.
  this.inputEl = el.querySelector("[type=text]");
  //html 요소에서 button 요소를 찾음.
  this.resetEl = el.querySelector("[type=reset]");

  // 검색 내용이 입력이 되지 않은 상태이면
  // 버튼을 숨김처리함.
  this.showResetBtn(false);

  return this;
}

FromView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? "block" : "none";
}

/***\
 *  keyup : key 가 입력이 되었을 때 발생하는 이벤트임.
 *  keyup 이벤트가 발생하면, onKeyup(), onClickReset() 함수를 
 *  구현해서 이벤트를 넘겨주도록 함.
 */
FromView.bindEvents = function () {
  this.inputEl.addEventListener("keyup", e => this.onKeyup(e));
  this.resetEl.addEventListener("click", e => this.onClickReset());
}

/***
 * 키보트에서 입력이 될 때 마다 실행이 되고,
 * 이 함수에서 "X" 버튼을 보여줄지 말지를 결정.
 * 
 * 두 가지의 경우에 대해서 이벤트를 처리해야 함.
 * 
 * 1. 검색 문자열이 입력 된 경우
 * 
 * 2. 엔터 키가 입력이 된 경우
 *    엔터 키가 입력이 되면 검색 결과가 보여지도록 해야 함.
 * 
 *    따라서, 검색 결과는 FormView에서 보여주는 것이 아니라,
 *    MainController 에서 enter key 이벤트가 발생했다는 것을 확인하고,
 *    다른 View(검색 결과 view)에게 검색 결과를 보여주도록 요청을 함.
 * 
 *    그래서, FormView에서는 enter key 를 MainController 에게
 *    전달하고, 그리고, MainController는 해달 결과 화면을 
 *    보여주도록 처리해야 함.
 * 
 *    결국, 사용자 이벤트를 만들어서 처리를 해야함.
 * 
 */
FromView.onKeyup = function (e) {

}

/***
 * FormView 에서 "X" 버튼을 클릭을 했을 때의 이벤트를
 * MainController 에게 알려주고, 
 * 검색 결과를 삭제하는 것을 컨트롤러에게 위임해서 처리함.
 * 따라서, 사용자 이벤트를 만들어서 dispatch 를 해야 함.
 */
FromView.onClickReset = function () {

}

// 컨트롤러에서 사용하기 위해서 모듈을 내보내기 해야 함.
export default FromView