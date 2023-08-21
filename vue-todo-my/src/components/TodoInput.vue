<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="할 일을 입력해주세요."
     v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <!-- 웹 접근성 
           스크린 리더 : 컴퓨터의 화면을 다양한 언어의 음성을 표현하는 것.
                        텍스트를 읽어주는 기계.

            aria-hidden="true" => 접근성 API에 노출. 스크린 리더가 음성으로 표현.
      -->
      <i class="addBtn fas fa-plus fa-fade" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      //console.log(this.newTodoItem);

      let value = this.newTodoItem.trim();// 오른쪽 왼쪽 공백 제거.

      if (value !== '') {
        // 키, value 형식으로 저장.
        localStorage.setItem(this.newTodoItem, this.newTodoItem);

        // 여기까지는 데이터 저장
        // 여기까지 진행이 되면, vue 상위 모듈에게 신규 데이터가 등록되었음을 알려야 함.

        // 매개변수 1 : 상위 모듈에게 알려주 이벤트명
        // 매개변수 2 : 상위 모듈이 처리해야 할 데이터. 저장을 상위 모듈에게 위임함.
        this.$emit('addTodo', value);

        // 단일 책임 원칙을 적용해서, 화면적인 요소는 분리.
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = ''; // 화면적인 요소
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>