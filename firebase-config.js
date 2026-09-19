// ============================================================
// Cole aqui as chaves que o Firebase te deu ao registrar o app Web
// (Configurações do projeto > seus apps > ícone </> > "Configuração do SDK")
// Esse arquivo é carregado por admin.html, vote.html e dashboard.html
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyCld7wBaaSJVRKdF1JIB_3v4y4j2iDVemw",
  authDomain: "festa-das-nacoes-votacao.firebaseapp.com",
  projectId: "festa-das-nacoes-votacao",
  storageBucket: "festa-das-nacoes-votacao.firebasestorage.app",
  messagingSenderId: "104039554097",
  appId: "1:104039554097:web:7b0be3b5bc0c413ca2c910"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
