
const tag = "[View]";

/***
 * 모든 View 들의 공통부분을 관리하는 모듈.
 * => HTML 문서의 하나의 요소(element)
 * 
 */

export default {

  // 화면의 해당 요소를 자기 자신의 속성으로 초기화
  init(el) {
    console.log(tag, "init()");

    if (!el) throw el

    this.el = el;

    // HTML 요소 자기 자신을 계속 사용하기 위해서 this 로 반환.
    return this;
  },

  // 이벤트 처리를 위한 Listener 추가
  on( event, handler ) {
    this.el.addEventListener(event, handler);
    return this;
  },

  // Controller 에서 요소에서 발생한 사용자 이벤트를 알 수 있도록 dispathch.
  /***
   * event 매개변수는 MainController 에서 이벤트로 발생이 되면
   * FormView에서 문자열(이벤트 명)로 넘겨줌.
   * 전달 받은 문자열(이벤트 명)으로 사용자 이벤트 생성.
   * 생성한 사용자 이벤트를 HTML 요소 자기 자신에게 dispatch 함.
   */
  dispatch(event, data) {
    // 사용자 이벤트 생성
    const evt = new CustomEvent(event, {detail: data});
    // HTML 요소 자기 자신에세 사용자 이벤트를 dispathc 함.
    this.el.dispatchEvent(evt);
    return this;
  },
  
  // 요소 감추기
  hide() {
    this.el.style.display = "none";
    return this;
  },

  // 요소 보이기
  show() {
    this.el.style.display = "";
    return this;
  },

}