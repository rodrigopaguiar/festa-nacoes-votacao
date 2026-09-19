# Plataforma de votação — Festa das Nações

## Arquivos
- `firebase-config.js` — cole aqui as chaves do seu projeto Firebase (você ainda precisa preencher)
- `firestore.rules` — regras de segurança (cole no console do Firebase, aba Regras)
- `admin.html` — onde você cria/abre/encerra as votações (login necessário)
- `vote.html` — página pública que o convidado abre pelo QR code
- `dashboard.html` — painel para deixar no telão

## Passo a passo

1. Siga os passos que te passei para criar o projeto no Firebase (console.firebase.google.com),
   ativar Firestore, ativar Authentication (e-mail/senha) e registrar um app Web.
2. Cole as chaves recebidas em `firebase-config.js`.
3. Cole o conteúdo de `firestore.rules` na aba "Regras" do Firestore e publique.
4. Suba estes 5 arquivos para um repositório no GitHub e ative o GitHub Pages
   (Settings > Pages > Deploy from branch > main / root).
5. Acesse `SEU-SITE/admin.html`, faça login com o e-mail/senha que você cadastrou
   no Authentication, e crie sua primeira votação.
6. Clique em "Abrir votação", pegue o QR code gerado e projete/imprima.
7. Abra `SEU-SITE/dashboard.html?poll=ID-DA-VOTACAO` no telão (o link completo
   aparece no admin, no botão "Abrir painel (telão)").

## Reuso em outros eventos
Basta voltar em `admin.html` e criar uma nova votação — nenhum arquivo precisa
ser alterado. Você pode ter várias votações ativas ao mesmo tempo, cada uma com
seu próprio link e QR code.
