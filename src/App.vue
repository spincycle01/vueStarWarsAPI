<template>
  <div id="app">
    <Header />
    <AddStarWarsThing v-on:add-resource="addSWThing" />
    <StarWarsThings
      v-bind:swThings="swThings"
      v-on:del-swThing="deleteSWThing"
    />
  </div>
</template>

<script>
import axios from 'axios';
import StarWarsThings from './components/StarWarsThings';
import Header from './components/Header';
import AddStarWarsThing from './components/AddStarWarsThing';

export default {
  name: 'app',
  components: {
    StarWarsThings,
    Header,
    AddStarWarsThing
  },
  data() {
    return {
      swThings: []
    };
  },
  methods: {
    deleteSWThing(id) {
      this.swThings = this.swThings.filter(swThing => swThing.id !== id);
    },
    addSWThing(newSWThing) {
      // this.todos = [...this.todos, newTodo];
      this.fetchAPI(newSWThing);
    },
    fetchAPI(starwarsField) {
      const field = starwarsField.title.toLowerCase();
      const url = 'http://localhost:8080/' + field;
      axios
        .get(url)
        .then(response => {
          console.log(response.data.results);
          this.swThings = response.data.results;
        })
        .catch(err => console.log('Error:', err));
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
