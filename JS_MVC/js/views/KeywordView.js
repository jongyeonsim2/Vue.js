//KeywordView.js

import View from "./View.js"

const tag = "[KeywordView]"

const KeywordView = Object.create(View)

KeywordView.messages = {
  NO_KEYWORDS: "추천 검색어가 없습니다"
}

// setup(), KeywordView 객체 초기화 함수
KeywordView.setup = function (el) {
  this.init(el)
  return this
}

// reder(), 화면 출력 함수
// 키워드 목록을 DB 로 부터 전송 요청을 함. ( Pormise 객체(response)가 리턴 )
// 전송 요청은 MainController에서 수행.
KeywordView.render = function (data = []) {
  // html작성 함수(data) 호출
  this.el.innerHTML = data.length ? 
        this.getKeywordsHtml(data) : this.NO_KEYWORDS

  this.show()
  // 완성된 html에 필요한 event를 달아야 함.
  // 작성된 html 에 이벤트 등록 함수 호출
  this.bindClickEvent()

  return this
}

// html작성 함수
KeywordView.getKeywordsHtml = function (data) {
  return data.reduce(
          (html, item, index) => {
              // li data 작성
              html += `<li data-keyword="${item.keyword}">
                         <span class="number">${index + 1}</span>${item.keyword}
                      </li>`
              return html
        }, '<ul class="list">') + "</ul>"
}



// 작성된 html 에 이벤트 등록 함수
KeywordView.bindClickEvent = function() {
  // 컨트롤러에게 알려줄 수 있도록 사용자 이벤드 생성 함수 호출
  Array.from(
    this.el.querySelectorAll('li'))
      .forEach(li => {
                        li.addEventListener('click', e => this.onClickKeyword(e))
                }
              )
}


// 리스트에서 키워드가 선택이 되었다는것( 이벤트 )을
// 컨트롤러에게 알려줄 수 있도록 사용자 이벤드 생성 함수
KeywordView.onClickKeyword = function (e) {
  // view.js 의 dispatch() 호출
  const {keyword} = e.currentTarget.dataset
  this.dispatch("@click", {keyword})
}

export default KeywordView