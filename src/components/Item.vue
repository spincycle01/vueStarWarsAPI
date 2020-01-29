<template>
  <div class="resource-item">
    <div :key="key.name" v-for="(val, key) in resource">
      <li>
        <strong>{{ key }}</strong> - <span>{{ val }}</span>
      </li>
    </div>
    <!-- <Item v-bind:keyResource="key" v-bind:valResource="val"/> -->

    <!-- <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{ todo.title }}
      <button @click="$emit('del-todo', todo.id)" class="del">X</button>
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['resource'],
  methods: {
    // markComplete() {
    //   this.todo.completed = !this.todo.completed;
    // }
  }
};
</script>

<style scoped>
.resource-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
li {
  list-style: none;
  text-align: left;
}
</style>
