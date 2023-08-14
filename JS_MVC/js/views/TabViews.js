import View from "./View.js";

const tag = "TabView"

const TabView = Object.create(View)

/***
 * TabView에 setup() 함수 추가.
 * MainController 에서 사용.
 * 
 * 그리고, MainController 에서 
 * html 의 ul 요소를 넘겨줌.
 * 
 */
TabView.setup = function (el) {

  console.log(tag, "TabView.setup()")
  /***
   * MainController 에서 넘겨준 html 의 ul 요소를
   * View의 객체 속성값으로 사용하고, TabView 객체로 생성함.
   */
  this.init(el)

  /***
   * MainController 에서 setup() 호출되면서, bindClick() 도 호출됨.
   * 그래서, 가독성과 유지보수를 위해서 
   * bindClick()의 구현은 아래쪽에서 하면 됨.
   */
  this.bindClick();

  // MainController 가 TabView 메소드 체이닝으로 사용하도록 함.
  return this
}

TabView.bindClick = function () {
  /***
   * 탭 메뉴에서 선택된 메뉴를 식별하기 위해서 click 이벤트를 등록.
   */

  Array.from(this.el.querySelectorAll("li"))
    .forEach( li => {
        li.addEventListener("click", 
          // 가독성, 유지보수를 위해서 onClicke() 아래에서 구현.
          // li.innerText : "추천 검색", "최근 검색"
          e => this.onClick( li.innerText ));
      }
    )
}

/***
 * Tab에 css 를 적용하는 함수.
 * 
 */
TabView.setActiveTab = function (tabName) {
  Array.from(this.el.querySelectAll("li"))
    .forEach(
      li => {
        //CSS 적용
        li.className = ( li.innerText === tabName ? "active" : "" )
      }
    )
  this.show()
}

TabView.onClick = function (tabName) {

  // 선택된 tab 에 css 적용.( 색상 변경 )
  this.setActiveTab(tabName);


  // MainController 가 이벤트 발생을 인식할 수 있도록
  // 사용자 이벤트를 View 모듈을 이용해서 등록해야함.
  // View.dispatch() 를 사용하게 됨.

  /***
   * tab 이 클릭이 되었다는 것은 ( 클릭된 tab 이 변경됨 )
   * 
   * TabView는 tab 만 관리하는 것이고, 다른 내용( tab 이 변경된 내용 )은
   * 관리를 하지 않고 있음.
   * 
   * 따라서, tab 의 변경에 대한 발생 이벤트가 있으면,
   * MainController 에서도 TabView의 tab 변경을 알 수 있으므로,
   * View 모듈의 dispathc() 함수를 통해서 Html 의 ul 요소에
   * 사용자 이벤트( @change )를 등록해서 사용함.
   * 
   * 그리고, MainController 에서  TabView.setup() 메소드에서
   * 메소드 체이닝을 이용하여, view.on() 메소드에 사용자 이벤트( @change )가
   * 발생시 호출할 콜백 함수를 정의하고,
   * MainController 에서 호출할 함수를 별도로 구현을 하면,
   * MainController 에서도 tab 메뉴의 변경을 인식할 수 있어,
   * 이벤트 처리를 할 수 있음.
   * 
   * 즉,  tab의 변경에 따른 결과 화면( resultView )를 변경시킬 수 가 있음. 
   */
  this.dispatch("@change", {tabName});



}

// MainController 에서 사용하도록 모듈을 내보내기 해야 함.
export default TabView