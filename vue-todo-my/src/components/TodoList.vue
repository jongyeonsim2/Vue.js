<template>
  <section>
    <ul>
      <li v-for="todoItem in todoItems">{{ todoItem }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // 컴포넌트에서 사용할 배열 선언.
      // 저장소에 있는 todo list 데이터의 저장 용도.
      todoItems: []
    }
  },
  created() {
    // 로컬 저장소에 데이터가 있는지 체크
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
}
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
