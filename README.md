## Resumo do Projeto

Projeto de desafio da empresa PNDVend. Chat com bot utilizando ReactJS como framework. A inteligência de resposta do BOT não será avaliada , e portanto, foram utilizadas frases aleatórias.

## Criação do projeto

O projeto foi criado utilizando o npm package Create-React-App, ferramente oferecida pelo próprio site do framework, que já gera o bundle do JavaScript.

Projetos criados pelo Create-React-App possuem um Read.me default, que aqui está comentado como 'README_CRA.md'. Alguns pontos explicados lá são importantes a serem passados aqui. Os arquivos index.js e index.html devem permanecer nos respectivos locais da estrutura criada pelo pacote.

A estrutura é similar à :

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Como rodar a aplicação

Algumas ações do npm estão configuradas no package.json. Uma delas é 'npm start', que chama um comanda, que entre suas funções, está subir o servidor na porta local 3000. Portanto , basta utilizar:

* 'npm start'

na pasta root do seu app e sua aplicação estará rodando no enderço 'localhost:3000'.

## Como testar

Para testar , utilize o comando :

* 'npm test'

No package.json, o script 'test' foi configurado para chamar o mocha, e assim rodar o script de teste, que testa a integridade dos objetos utilizados no app.

PS : Não esqueça de utilizar o comando npm install quando clonar o projeto para baixar as dependências do mesmo.

## Itens da avaliação

Como passado por e-mail, os pontos a serem avaliados estão nas categorias descritas abaixo.

Será analizado:

* As estruturas dos componentes (tamanho, nomes, funções, se está usando ES6, FP, etc)<br />
  &nbsp;&nbsp;&nbsp;&nbsp;|- Tentei seguir ao máximo. (utilizei nomes mnemônicos, ES6, FP no que deu, ...)
* A organização dos dados (se será somente via state, ou algum Flux (bônus se for MobX ou Redux);<br />
  &nbsp;&nbsp;&nbsp;&nbsp;|- Organização dos dados utilizei state, passagem de funções via 'props'(e passando contexto), e para Flux utilizei uma bliblioteca chamada Manuh, que funciona à base de eventos em tópicos. Por ter um pattern parecido com o MQTT de publish e subscribe, acabei não utilizando WebSocket e/ou MQTT.
* UI/UX;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;|- Neste ponto, tentei deixar a interface clean utilizando o que foi pedido.

Bônus (opcional):

* Animações via CSS Transitions;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;|- Utilizei apenas uma, no :hover dos balões do chat.
* WebSockets;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;|- Como mencionado, por utilizar Manuh, não utilizei WebSocket/MQTT.
* Integração com alguma API externa;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;|- FALTA (Tentar implementar uma requisição à alguma API aberta pelo sábado)
* Testes Unitários (com Chai).<br />
  &nbsp;&nbsp;&nbsp;&nbsp;|- Feitos para testar integridade dos objetos utilizados.
