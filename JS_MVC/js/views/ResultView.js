
import View from "./View.js";

const tag = "[ResultView]"

const ResultView = Object.create(View)

ResultView.message = {
  NO_RESULT : "검색 결과가 없습니다"
}

ResultView.setup = function (el) {
  this.init(el)
} 

/**
 *  아래의 함수들은 검색 결과를 화면에 rendering 하는 함수임.
 */

// 최종 html 결과 함수
ResultView.render = function (data = []) {
  this.el.innerHTML = 
  data.length ? this.getSearchResultsHtml(data) : this.message.NO_RESULT;
  this.show();
}

// ul 요소 함수
ResultView.getSearchResultsHtml = function (data) {
  // reduce() : 누산기능의 함수.
  // html : 누산이 완료된 최종 html 문서
  // item : 데이터 한 건
  return data.reduce( (html, item) => {

      console.log(tag, "getSearchResultsHtml()" ,html);

      html += this.getSerarchItemHtml(item)
      return html
    }, "<ul>"
  ) + "</ul>"
}

// li  요소 함수
ResultView.getSerarchItemHtml = function (item) {
  return `
    <li>
      <img src="${item.image}" />
      <p>${item.name}</p>
    </li>
  `
}

export default ResultView