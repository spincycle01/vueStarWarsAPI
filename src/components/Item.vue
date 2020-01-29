<template>
  <div class="resource-item">
    <div :key="key.name" v-for="(val, key) in resource">
      <li>
        <strong>{{ key }}</strong> - <span>{{ val }}</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['resource'],
  methods: {}
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
