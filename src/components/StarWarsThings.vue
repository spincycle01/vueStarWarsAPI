<template>
  <div>
    <div :key="swThing.id" v-for="swThing in swThings">
      <Item v-bind:resource="swThing" />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'StarWarsThings',
  components: {
    Item
  },
  props: ['swThings']
};
</script>

<style scoped></style>
