<h1 align="center">
  Server-side rendering com Next.js
  <div>
    <img src="https://img.shields.io/badge/-Next.js-brightgreen" />
    <img src="https://img.shields.io/badge/-Node.js-green" />
    <img src="https://img.shields.io/badge/-React-blue" />
  </div>
</h1>

## Descrição

Aplicação desenvolvida como estudo da utilização do Next.js para renderizar aplicações React no lado do servidor.
Essa tecnologia é melhor utilizada em sites, blogs e e-commerces que busquem ser melhor indexados pelos motores de busca do Google (SEO).
Isso acontece pois quando os motores de busca acessam seu site para indexá-lo, ele primeiramente acessa sem utilizar JavaScript, ou seja, caso a aplicação faça consultas à uma API para carregar os dados da página, esses dados serão desconsiderados. A vantagem da renderização no lado do servidor, é que quando o cliente acessa a aplicação, essas chamadas já foram feitas e os componentes já chegam prontos com todos os dados preenchidos, melhorando o SEO da página.

## Instalação

1. Abra seu terminal em uma pasta qualquer e clone este repositório
`git clone https://github.com/renatomarquesteles/nextjs-ssr.git`.
3. Navegue até o diretório da aplicação `cd nextjs-ssr`.
4. Rode `yarn` ou `npm i` para instalar todas as dependências.<br />
5. Rode `yarn dev` ou `npm run dev` e aguarde a inicialização do servidor
6. Abra seu navegador e acesse `http://localhost:3000`
