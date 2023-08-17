let cmp = {
  template: "<p>this is another local child component.</p>"
};

// 전역 컴포넌트
Vue.component("todo-footer" , {
  template: "<p>this is another global child component.</p>"
});

// Vue 객체 생성
let app = new Vue({
  el: "#app",
  data: {
    message : "this is a parent component"
  },
  components: {
    "todo-list": cmp
  }
});