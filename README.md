![MarvelHeroes-Logo](https://user-images.githubusercontent.com/5942637/105387555-6e8fd580-5bf4-11eb-9ad8-2e648c485149.png)

Repositório com o desafio técnico para a vaga de **Desenvolvedor React Native** da [superlogica](https://superlogica.com/). Abaixo está listado o motivo das escolhas sobre as bibliotecas utilizadas, assim como instalar e como rodas os testes. 

[Readme Original do desafio](README_original.md) 

## Motivação
Todo fã de Marvel que se preze deveria possuir esse aplicativo! Ele mostra todos os personagens da marvel e seus eventos. Ele utiliza como base a API da marvel https://developer.marvel.com/docs.

## Como instalar

1. Clone o repositório. `git clone https://github.com/eduduardo/challenge-mobile-react-native.git`
2. Rode: `yarn install` ou `npm install`
3. Para rodar o projeto no android: `react-native run-android`
4. Para rodar o projeto no iOS: `react-native run-ios`

## Como rodar os testes

O projeto possue testes unitários e de integração com a API.

- `yarn test` ou `npm run test`

## Stack de tecnologias utilizadas

1. [react-native](https://github.com/facebook/react-native) - utilizado em sua versão mais recente.
2. [react-navigation](https://github.com/react-navigation/react-navigation) - utilizado para roteamento, biblioteca bem fácil de implementação, e com recursos bem úteis para manipulação de telas.
3. [react-native-elements](https://github.com/react-native-elements/react-native-elements) - utilizado para agilizar o design dos componentes básicos desse desafio, visto que não é um requisito ter styles/components de algum design pré definido.
4. [redux](https://github.com/reduxjs/redux) e [react-redux](https://github.com/reduxjs/react-redux) - gerenciamento do estado global da aplicação.
5. [redux-thunk](https://github.com/reduxjs/redux-thunk) - utilizado para disparar as ações de forma assíncrona.
6. [axios](https://github.com/axios/axios) - utilizado para cuidar melhor dos retornos das requests json vindas da API.
7. [jest](https://github.com/facebook/jest) - utilizado para a base dos testes.
8. [@testing-library/react-native](https://github.com/callstack/react-native-testing-library) - utilizado para renderizar e manipular como usuário os components e pages do app.

Logo feio utilizando o _logo maker_ do [Adobe Spark](https://spark.adobe.com/express-apps/logo-maker/).