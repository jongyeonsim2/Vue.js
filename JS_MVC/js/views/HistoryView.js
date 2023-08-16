import KeywordView from "./KeywordView.js";

/***
 * 
 * 재사용 모듈
 * - View.js
 * - KeywordView.js
 * 
 * KeywordView 를 이용한 재사용 함수
 * - KeywordView.setup()
 * - KeywordView.render()
 * - li 의 event 등록 기능도 재사용 가능
 * 
 */

const tag = "[HistoryView]"

const HistoryView = Object.create(KeywordView)

HistoryView.messages.NO_KEYWORDS = "검색 이력이 없습니다"

//html 작성 함수
HistoryView.getKeywordsHtml = function (data) {
  return data.reduce( (html, item) => {
      html += `<li data-keyword="${item.keyword}">
                ${item.keyword}
                <span class="date">${item.date}</span>
                <button class="btn-remove"></button>
              </li>`
      return html
    }, '<ul class="list">') + "</ul>"
}


/***
 * button 작성 함수
 * 이벤트 전파가 발생함.
 * 버튼 이벤트(자식) => li 요소의 이벤트(부모) : 버블링 이벤트
 * 버블링 이벤트가 발생하지 않도록 제어가 필요함
 */


//"X"버튼, 삭제 버튼에 대한 사용자 이벤트 생성 의뢰 함수



export default HistoryView