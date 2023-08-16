//keywordModel.js
export default {
  data : [
    {keyword: "봄철 요리"},
    {keyword: "이탈리아 요리"},
    {keyword: "절간 요리"},
    {keyword: "중국 요리"}
  ],

  list() {
    return new Promise(
      res => {
        setTimeout(
          () => {
            res(this.data)
          }, 1000
        ) // end of setTimeout
      } // end of response
    ) //  end of Promise
  } // end of list()
}// end of export