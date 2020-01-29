<template>
  <div>
    <form @submit="addStarWarsResource">
      <input
        type="text"
        name="title"
        placeholder="Type either People, Films, Starships, Vehicles, Species, or Planets"
        v-model="title"
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';

export default {
  name: 'AddStarWarsThing',
  data() {
    return {
      title: ''
    };
  },
  methods: {
    addStarWarsResource(e) {
      e.preventDefault();
      const newResource = {
        id: uuid.v4(),
        title: this.title
      };
      this.$emit('add-resource', newResource);

      this.title = '';
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 5px;
}

input[type='submit'] {
  flex: 2;
}
</style>
