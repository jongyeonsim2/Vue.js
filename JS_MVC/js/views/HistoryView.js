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
HistoryView.bindRemoveBtn = function () {
  Array.from(this.el.querySelectorAll("button.btn-remove"))
    .forEach( btn => {
                        btn.addEventListener( "click", e => {
                            e.stopPropagation() // 이벤트 전파 멈춤.

                            /***
                             * MainController 에서 사용할 수 있도록
                             * 사용자 이벤드 생성 함수 호출
                             * 
                             * 매개변수 : 부모의 값( 검색 키워드 이력 )
                             */
                            this.onRemove(btn.parentElement.dataset.keyword)
                          }
                        ) // end of addEvnetListener
      } // end of btn callback method
    ) // end of forEach
}



/***
 * "X"버튼, 삭제 버튼에 대한 사용자 이벤트 생성 의뢰 함수
 * keyword : 부모 요소의 값( 검색 키워드 )
 */
HistoryView.onRemove = function (keyword) {
  this.dispatch("@remove", {keyword})
}


export default HistoryView