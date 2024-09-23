# Bem-vindo ao Projeto Rações e Cia - Front-end 🐾

Esse projeto faz parte do meu Trabalho de Conclusão de Curso e tem como objetivo desenvolver um front-end para um sistema de pedidos de um petshop, colocando em prática os aprendizados obtidos durante a graduação.

Aqui você vai encontrar alguns detalhes sobre o projeto, bem como instruções para baixar o projeto localmente.
Obrigado por acessar!

---

# 🛠️ Tecnologias Utilizadas

 - Node.js
 - React
 - NextJs
 - TypeScript
 - Zustand
 - Tailwind CSS
 - Firebase Autenticação
 - Docker
 - Stripe

---

# 📋 Rotas Disponíveis

  ### /products
  - Exibe a lista de produtos disponíveis para compra.
  ### /orders
  - Mostra o histórico de pedidos do usuário (rota protegida).
  ### /orders/id 
  - Detalhes de um pedido específico do usuário (rota protegida).
  ### /cart
  - Página do carrinho de compras, onde o usuário pode revisar e atualizar os produtos.
  ### /login
  - Página para autenticação de usuários.
  ### /admin/products
  - Permite ao admin adicionar, editar ou remover produtos.
  ### /admin/orders
  - Permite ao admin gerenciar os pedidos e alterar os status.

---

# 🚀 Como Executar o Projeto Localmente

## Pré-requisitos
- Node.js (versão 20 ou superior)
- Docker e Docker Compose
- Conta no Firebase
- Conta no Stripe

## Passos para Instalação
#### 1. Clone o repositório:

```
git clone https://github.com/huggoparcelly/racoes-e-cia-app.git
cd racoes-e-cia-app
```

#### 2. Instale as dependências:

```
npm install
```

#### 3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_FIREBASE_API_KEY=firebasekey
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=firebasedomain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=firebaseprojectid
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=firebasestoragebucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=firebasemessagingsender
NEXT_PUBLIC_BASE_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=stripekey
```

#### 4. Utilizando Docker:

``` 
docker-compose up
```

#### 5. A aplicação estará disponível em:
http://localhost:3000
 
---
