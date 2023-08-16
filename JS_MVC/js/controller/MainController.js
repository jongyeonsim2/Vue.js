import SearchModel from "../models/SearchModel.js";
import FormView from "../views/FormView.js";
import TabView from "../views/TabViews.js";
import ResultView from "../views/ResultView.js";

// 디버깅용 태그
const tag = "[MainController]";

/***
 * MainController.js 의 역할
 * 
 * 화면을 구성하기 위햇 Views 들을 import 해야 함.
 * 해당 이벤트별로 필요한 데이터에 해당하는 model을 import 해야 함.
 * 
 * 각 Views 에 대한 setup을 해주어야 함.
 * 각 화면의 요소에 대한 사용자 이벤트에 대한 처리를 해야 함.
 * 
 */

export default {
  init() {
      console.log(tag, "init()")

      /***
       * FormView 의 화면 SetUp
       */
      FormView.setup(document.querySelector("form"))
        .on("@submit", e => this.onSubmit(e.detail.input)) // 가독성, 유지보수를 위해서
        .on("@reset", e => this.onResetForm())// 가독성, 유지보수를 위해서

      /***
       * TabView 의 화면 SetUp
       */
      TabView.setup(document.querySelector("#tabs"))

      /***
       * ResultView 의 화면 SetUp
       */
      ResultView.setup(document.querySelector("#search-result"))

      this.selectedTab = "추천 검색"
      this.renderView()
    },

    renderView() {
      TabView.setActiveTab(this.selectedTab)

      ResultView.hide()
    },

    search(input) {
      SearchModel.list(input).then(data => {
        ResultView.render(data)
      })
      TabView.hide()
    },

    onSubmit(input) {
      console.log(tag, 'onSubmit()', input)
      this.search(input)
    },

    onResetForm() {
      // 검색 입력 내용이 삭제가 되었으므로, 검색 결과 화면 감추기 처리
      console.log(tag, "onResetForm()")
      this.renderView()
    }
}