<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--<v-select v-model="selected" :options="['foo','bar']"></v-select>-->
    <div class="container" id="listing">
      <div class="row">
        <div class="box col s2"
             v-for="specie in Freshwater" v-on:click="addSelection(specie)">
          <div class="inner-box z-depth-1-half"
               v-bind:id="'specie' + specie.id">
            <h6>{{specie.id}}</h6>
            <h5>{{specie.specie}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  let config = {
    apiKey: 'AIzaSyDJxlT5qEBlrqgl4EJvUdegEqOfP3cmTS8',
    authDomain: 'aquamatcher-db.firebaseapp.com',
    databaseURL: 'https://aquamatcher-db.firebaseio.com',
    projectId: 'aquamatcher-db',
    storageBucket: 'aquamatcher-db.appspot.com',
    messagingSenderId: '291648363117'
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()

  let species = db.ref('Freshwater')

  let selected = []

  /* eslint-disable no-new */
  export default {
    name: 'app',
    firebase: {
      Freshwater: species
    },
    methods: {
      addSelection: function (s) {
        selected.push(s)
        var el = document.getElementById('specie' + s.id)
        el.classList.toggle('isSelected')
      }
    },
    data () {
      return {
        msg: 'AquaMatcher 1.0'
      }
    }
  }
</script>
