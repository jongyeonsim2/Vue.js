// Vue( 상위 컴포넌트 )
// 각각 하위 컴포넌트와 통신이 되도록 상위 컴포넌트의 데이터 속성을 각각 설정

Vue.component("child-component1", {
  props: ['propsdata'],
  template: "<p> {{ propsdata }} </p>" //<p> {{ propsdata => message1 }} </p>
});

Vue.component("child-component2", {
  props: ['propsdata'],
  template: "<p> {{ propsdata }} </p>" //<p> {{ propsdata => message2 }} </p>
});



let app = new Vue({
  el: "#app",
  data: {
    message1: "Hello Vue, from parent message 1",
    message2: "Hello Vue, from parent message 2"
  }
});