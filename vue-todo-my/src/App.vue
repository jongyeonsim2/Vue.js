<template>
  <div id="app">
    <!-- 컴포넌트 태그 4가지를 작성 -->
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata='todoItems' v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// 화면 요소 4개의 모듈을 사용하기 위해서 import 함.
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    //****************** 데이터 저장 및 삭제  ****************** */
    // 데이터 처리는 localStorage, todoItems 가 대상이 됨.
    // 3가지의 케이스가 존재함으로, 하위 모듈에서 발생시킨 이벤트를
    // vue 모듈에서 확인을 할 수 있으면, 케이스별 처리가 가능함.

    // 하위 모듈에서 호출한 $emit()에서 발생한 이벤트를
    // vue 모듈에서 받아서 처리하면 됨.

    // 컴포넌트 태그에서 하위 모듈에서 발생한 이벤트를 v-on을 이용해서
    // 잡고, 잡히면, 내부 함수를 호출해서 실행시키면 됨.


    //****************** 배열 데이터를 하위 모듈에 전달  ****************** */
    // 해당 하위 모듈의 컴포넌트 태그에 v-bind:propsdata='todoItems' 작성함.


    // 신규 추가되는 경우( 하위 : TodoInput.vue )
    addTodo(todoItem) {
      //console.log('addTodo()', 'clicked', todoItem);
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },

    // 한 건 삭제되는 경우( 하위 : TodoList.vue )
    removeTodo(todoItem, index) {
      //console.log('removeTodo()', 'clicked', todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },

    // 전체 삭제되는 경우( 하위 : TodoFooter.vue )
    clearAll() {
      //console.log('claerAll()', 'clicked');
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
    // 로컬 저장소에 데이터가 있는지 체크
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  components: {
    // 컴포넌트 태그와 실제 모듈의 관계를 설정.
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>