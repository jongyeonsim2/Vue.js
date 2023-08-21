<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">추가</button>
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