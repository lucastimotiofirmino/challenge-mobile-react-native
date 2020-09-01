![](https://i.imgur.com/wr5fQrE.png)
# Marvel Heroes
Aplicativo móvel construído utilizando o framework **React Native**, e **Redux**.

## Descrição
O aplicativo consome dados da API de personagens da Marvel, e os retorna em ordem alfabética em uma lista  utilizando infinite scroll.

As informações dos personagens favoritos, podem ser armazenados na memória interna do dispositivo.

##Funcionalidades
- Multi-idiomas com seleção automática na inicialização.
- Persistência dos dados.
- Transição fluída de elementos entre telas.
- Tratamento amigável para tratar exceções em tempo de execução.

## Arquitetura e padrões utilizados
#### Estilização:

Os componentes foram desenvolvidos utilizando o padrão **[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/ "Atomic Design")**, favorecendo a reutilização, manutenção e a padronização dos elementos visuais.

Os padrões de espaçamento e tipografia estão baseados nas guidelides das plataforma.

As unidades de medida são baseadas nas dimensões e densidade de pixel das telas, proporcionando elementos homogêneos em dispositivos distintos.

#### Padrões do React Native:
O código foi desenvolvido utilizando Typescript e os componentes foram estruturados com o padrão Functional Components.

| Funcionalidade | Biblioteca                    |
| ------------- | ------------------------------ |
| Internacionalização      | aws-amplify/core       |
| Gerenciamento de estado  | Redux     |
| Persistência de dados  | Redux Persist    |
| Navegação  | React Navigation V4*     |
| Testes E2E  | Detox / Mocha     |

**Foi mantido o React Navigation V4 devido a compatibilidade com a biblioteca que proporciona fluidez nas transições de telas.*

### Testes automatizados
Os testes E2E são executados utilizando a biblioteca Detox e o test runner Mocha.

## Instalação
![](https://img.shields.io/static/v1?label=Node.js&message=Atenção&color=orange) Você precisa ter o Node.Js instalado na sua máquina.

1) Instale as dependências do projeto:
```
yarn install
```
2) Faça o build para a plataforma:
```
npx react-native run-ios // IOS ou
npx react-native run-android // Android
```

## Pré-visualização

### Transição fluída
![Transição fluida](https://i.imgur.com/rHJif81.gif "Transição fluida")

### Favoritos
![Favoritos](https://i.imgur.com/E6vNaxC.gif "Favoritos")

### Infinite scroll:
![Infinite Scroll](https://i.imgur.com/dvMNSX5.gif "Infinite Scroll")

### Busca de personagens:
![Busca de personagens](https://i.imgur.com/ZdEg4S7.gif "Busca de personagens")

