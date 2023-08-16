import SearchModel from "../models/SearchModel.js";
import FormView from "../views/FormView.js";
import TabView from "../views/TabViews.js";
import ResultView from "../views/ResultView.js";

import KeywordModel from "../models/keywordModel.js";
import KeywordView from "../views/KeywordView.js";



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
       * KeywordView 의 화면 SetUp
       */
      KeywordView.setup(document.querySelector("#search-keyword"))
        .on("@click", e => this.onClickKeyword(e.detail.keyword))

      /***
       * ResultView 의 화면 SetUp
       */
      ResultView.setup(document.querySelector("#search-result"))

      this.selectedTab = "추천 검색"
      this.renderView()
    },

    renderView() {
      TabView.setActiveTab(this.selectedTab)

      if (this.selectedTab === "추천 검색") {
        // 키워드 데이터 수신 처리 함수 호출
        console.log(tag, "추천 검색")
        this.fetchSearchKeyword()
        // "최근 검색"은 보이지 않게 처리
      } else {
        // "추천 검색"이 보이지 않게 처리
        KeywordView.hide()
      }

      ResultView.hide()
    },

    search(input) {
      SearchModel.list(input).then(data => {
        this.onSearchResult(data)
      })
    },

    onSubmit(input) {
      console.log(tag, 'onSubmit()', input)
      this.search(input)
    },

    onSearchResult(data) {
      TabView.hide()
      KeywordView.hide()
      //HistoryView.hide()
      ResultView.render(data)
    },

    onResetForm() {
      // 검색 입력 내용이 삭제가 되었으므로, 검색 결과 화면 감추기 처리
      console.log(tag, "onResetForm()")
      this.renderView()
    },

    onClickKeyword(keyword) {
      this.search(keyword)
    },

    fetchSearchKeyword() {
      // 데이터 수신 및 수신된 데이터로 화면 작성(html 작성)
      KeywordModel.list().then(
        data => {
          console.log(tag, data)
          KeywordView.render(data)
        }
      )

      
    }
}