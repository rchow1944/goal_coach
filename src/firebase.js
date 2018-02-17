import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBXUK1t-cWmd6I_8_PRBzHzttqRFqOYkxY',
  authDomain: 'goal-coach-8c9f4.firebaseapp.com',
  databaseURL: 'https://goal-coach-8c9f4.firebaseio.com',
  projectId: 'goal-coach-8c9f4',
  storageBucket: '',
  messagingSenderId: '976372646421'
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
