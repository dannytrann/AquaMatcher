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
