<template>
  <div>
    <div :key="swThing.id" v-for="swThing in swThings">
      <!-- <div :key="key.name" v-for="(val, key) in swThing">
        <p>
          <strong>{{ key }}</strong> - <span>{{ val }}</span>
        </p> -->
      <Item v-bind:resource="swThing" />
      <!-- </div> -->
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
