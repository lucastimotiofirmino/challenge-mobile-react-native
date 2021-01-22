![MarvelHeroes-Logo](https://user-images.githubusercontent.com/5942637/105387555-6e8fd580-5bf4-11eb-9ad8-2e648c485149.png)

Repositório com o desafio técnico para a vaga de **Desenvolvedor React Native** da [superlogica](https://superlogica.com/). Abaixo está listado o motivo das escolhas sobre as bibliotecas utilizadas, assim como instalar e como rodas os testes. 

[Readme - Original do desafio](README_original.md) 

## Motivação
Todo fã de Marvel que se preze deveria possuir esse aplicativo! Ele mostra todos os personagens da marvel e seus eventos. Ele utiliza como base a API da marvel https://developer.marvel.com/docs.

## Preview do app no iOS
https://www.youtube.com/watch?v=nNRvOkFYTdo

[![App Preview](https://img.youtube.com/vi/nNRvOkFYTdo/0.jpg)](https://www.youtube.com/watch?v=nNRvOkFYTdo)

## Preview do app no Android
https://www.youtube.com/watch?v=B4kV2NYTfJg
[![App Preview](https://img.youtube.com/vi/B4kV2NYTfJg/0.jpg)](https://www.youtube.com/watch?v=B4kV2NYTfJg)

---- 

## Como instalar o projeto

1. Clone o repositório. `git clone https://github.com/eduduardo/challenge-mobile-react-native.git`
2. Rode: `yarn install` ou `npm install`
3. Copie o `.env` enviado por email para o root do projeto
4. Para rodar o projeto no android: `react-native run-android`
5. Para rodar o projeto no iOS: `react-native run-ios`

## Nota sobre as chaves API da marvel
Pela documentação eles disponibilizam apenas o client-side pelo browser. O correto seria utilizar um proxy server ou colocar dentro de uma API para esconder a chave privada. Por hora e para simplificar optei por fazer a lógica do hash de cada request pelo lado do app mesmo.

⚠️ Lembrando ser necessário ter configurado o `.env`!

### Como rodar manualmente no iOS
1. Depois do `yarn install`
2. Rode: `cd ios/ && pod install`
3. Abra `ios/MarvelHeroes.xcworkspace` no XCODE (version >= 11.7)
4. Faça o build do projeto com o target de simulador ou device físico
5. Rode no terminal `yarn start` para inicial o servidor de bundle.

### Manual run Android
1. Depois do `yarn install`
2. Rode `cd android/ && sh gradlew installDebug`
3. Rode no terminal `yarn start` para inicial o servidor de bundle.

## Como rodar os testes

O projeto possue testes unitários e de interação do usuário com as funcionalidades requisitadas.
1. Rode: `yarn test` ou `npm run test`

## TypeScript vs Javascript
O projeto possui 2 versões, ainda não possuia experiencia com desenvolvimento em typescript (requisito do projeto), desenvolvi o projeto primeiro em javascript e depois converti ele para typescript.
1. A versão `javascript` se encontra na branch: [javascript-version](https://github.com/eduduardo/challenge-mobile-react-native/tree/javascript-version)
2. A versão `typescript` se encontra na `main`

----

## Stack de tecnologias utilizadas

### Código de produção

1. [react-native](https://github.com/facebook/react-native) - utilizado em sua versão mais recente [0.63].
2. [react-navigation](https://github.com/react-navigation/react-navigation) - utilizado para o roteamento, facilitando bastante na criação do modal do requisito
3. [react-native-elements](https://github.com/react-native-elements/react-native-elements) - utilizado para agilizar o design dos componentes básicos, principalmente da busca.
4. [redux](https://github.com/reduxjs/redux) e [react-redux](https://github.com/reduxjs/react-redux) - gerenciamento do estado global da aplicação.
5. [redux-thunk](https://github.com/reduxjs/redux-thunk) - utilizado para disparar as ações de forma assíncrona.
6. [redux-persist](https://github.com/rt2zz/redux-persist) - utilizado para persistir os dados de favoritos
7. [@react-native-async-storage](https://github.com/react-native-async-storage/async-storage) - utilizado pelo redux-persist para persistir os dados como AsyncStorage.
8. [axios](https://github.com/axios/axios) - utilizado para cuidar melhor dos retornos das requests json vindas da API.

## Testes

1. [jest](https://github.com/facebook/jest) - utilizado para a base dos testes.
2. [@testing-library/react-native](https://github.com/callstack/react-native-testing-library) - utilizado para renderizar e manipular como usuário os components e pages do app.
3. [redux-mock-store](https://github.com/reduxjs/redux-mock-store) - utilizado para mockar o redux
4. [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) - utilizado para mockar as requests para a API pelo axios.

## Visual
O logo foi feito utilizando o _logo maker_ do [Adobe Spark](https://spark.adobe.com/express-apps/logo-maker/).

1. Fonts utilizadas no logo: `Raleway-Heavy`, `Lato-BlackItalic`
2. Cores utilizadas: `#F67571`, `#020202`
3. Ícone utilizado: https://thenounproject.com/term/captain-america/30941