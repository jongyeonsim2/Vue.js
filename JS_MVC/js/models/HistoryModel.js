export default {
  data: [
    { keyword: '검색기록2', date: '23.03' },
    { keyword: '검색기록1', date: '23.02'},
    { keyword: '검색기록0', date: '23.01' },
  ],

  list() {
    return Promise.resolve(this.data)
  },
  
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '25.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}