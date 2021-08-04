import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA81SOg6pvBa7fR6dcLSJN6ifaOux7esWo",
  authDomain: "vue-project-todolist.firebaseapp.com",
  projectId: "vue-project-todolist",
  storageBucket: "vue-project-todolist.appspot.com",
  messagingSenderId: "109760289852",
  appId: "1:109760289852:web:038554aa1a1a1a63a47739",
  measurementId: "G-EWXLWK0WW9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


