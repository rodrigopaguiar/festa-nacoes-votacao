// ============================================================
// Cole aqui as chaves que o Firebase te deu ao registrar o app Web
// (Configurações do projeto > seus apps > ícone </> > "Configuração do SDK")
// Esse arquivo é carregado por admin.html, vote.html e dashboard.html
// ============================================================
const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
