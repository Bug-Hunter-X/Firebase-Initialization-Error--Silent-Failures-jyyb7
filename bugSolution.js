The solution involves using the `initializeApp` promise.  Only execute Firebase related function calls after the promise resolves. Here's an example:

```javascript
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, onValue } from 'firebase/database';

// Import your Firebase configuration
import { firebaseConfig } from './config'; // Replace with your config

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

app.initializeApp(firebaseConfig).then(() => {
  console.log('Firebase initialized successfully!');
  // Access Firebase services here, using the resolved app object
  const starCountRef = ref(db, 'posts/123');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}).catch((error) => {
  console.error('Firebase initialization failed:', error);
});
```