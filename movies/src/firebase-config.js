import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJsVdRvZPnpXTcTQHqKAcMleu-tq1EsEE",
    authDomain: "react-movie-app-ab.firebaseapp.com",
    projectId: "react-movie-app-ab",
    storageBucket: "react-movie-app-ab.appspot.com",
    messagingSenderId: "543617482841",
    appId: "1:543617482841:web:65041cf532e99af0c6f148",
    measurementId: "G-C0667E9V62"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);