
const tag = "[View]";

/***
 * 모든 View 들의 공통부분을 관리하는 모듈.
 * => HTML 문서의 하나의 요소(element)
 * 
 */

export default {

  // 화면의 해당 요소를 자기 자신의 속성으로 초기화
  init(el) {
    //console.log(tag, "init()");

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
  dispatch(event, data) {
    const evt = new CustomEvent(event, {detail: data});
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