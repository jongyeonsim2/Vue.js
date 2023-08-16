export default {
  data: [
    { keyword: '검색기록2', date: '23.03' },
    { keyword: '검색기록1', date: '23.02'},
    { keyword: '검색기록0', date: '23.01' },
  ],

  list() {
    // 다른 모델처럼 setTimeout() 함수를 사용하지 않음.
    // 호출 즉시 데이터가 반환되도록 함.
    return Promise.resolve(this.data)
  },
  
  // 동일한 데이터가 등록이 되지 않도록 처리해서, 등록하는 함수.
  add(keyword = '') {
    keyword = keyword.trim()

    // !'' : true
    // 함수 종료 목적임.
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '25.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) {
    /***
     * 콜백 함수( 각 요소를 시험할 함수 )에서
     * true 를 반환하면 요소를 유지하고, false를 반환하면 버리도록 하도록
     * 조건을 구현.
     * 
     * item.keyword !== keyword
     * "A" !== "B" : true => true => 현재 요소를 유지( 화면에 데이터 유지 )
     * "A" !== "A" : false => 현재 요소를 버림 => 
     *                render() 호출 => 화면에서 보이지 않게 됨.
     */
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}