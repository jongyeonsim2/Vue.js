<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in propsdata" :key="todoItem">
        <!-- 체크 아이콘 -->
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
          <!-- 삭제 아이콘 -->
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // 상위 모듈인 app.vue 에서 관리하고 있는 배열 데이터를 하위 모듈로 전달.
  props: ['propsdata'],
  methods: {
    removeTodo(todoItem, index) {
      // 한 건의 데이터가 삭제되었다는 것을 상위 모듈인 app.vue 에게 알려야 함.
      this.$emit('removeTodo', todoItem, index);
    }
  }
}


// export default {
//   data() {
//     return {
//       // 컴포넌트에서 사용할 배열 선언.
//       // 저장소에 있는 todo list 데이터의 저장 용도.
//       todoItems: []
//     }
//   },
//   created() {
//     // 로컬 저장소에 데이터가 있는지 체크
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         this.todoItems.push(localStorage.key(i));
//       }
//     }
//   },
//   methods: {
//     removeTodo(todoItem, index) {
//       // 이벤트 발생 확인
//       //console.log('clicked', todoItem, index);

//       // 브라우저의 localStroage 에서 해당 데이터 삭제
//       localStorage.removeItem(todoItem);

//       // 배열(todoItems)에 해당 데이터 삭제
//       this.todoItems.splice(index, 1);
//     }
//   }
// }
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
