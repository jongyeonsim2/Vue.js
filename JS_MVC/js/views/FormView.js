import View from "./View.js";

// 디버깅용 태그.
const tag = "[FromView]"

// 임포트한 View 를 이용해서 새로운 FormView 라는 이름의 view 객체를 생성.
const FromView = Object.create(View);

// FormView 객체에 새로운 setup 메소드를 추가.
FromView.setup = function(el) {

}

// 컨트롤러에서 사용하기 위해서 모듈을 내보내기 해야 함.
export default FromView