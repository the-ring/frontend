<h1 align="center">
  <br>
  <img src="https://avatars1.githubusercontent.com/u/19213164?v=3&s=200" alt="The Ring" width="200">
  <br>
  The Ring - frontend
  <br>
  <br>
</h1>

<h4 align="center">An example client that communicates with <a href="https://github.com/the-ring/backend">backend</a>.</h4>

<p align="center">
  <a href="https://github.com/the-ring/backend/main-styles"><img src="https://img.shields.io/github/tag/the-ring/main-styles.svg" alt="Release"></a>
</p>

**Attention! This project is in active development.**
***Please don't use it in production until the 1.0.0 release.***

## Install
```sh
$ git clone https://github.com/the-ring/frontend.git
$ cd frontend
$ npm install
```

![the-ring-client](https://cloud.githubusercontent.com/assets/2401029/16206844/fba23d5a-3732-11e6-90eb-057d22178c83.gif)

Default config:
```js
{
  styles: { // inherited from the-ring/main-styles
    icons: {
      logoIcon: `${assets}/logo.svg`,
      homeIcon: `${svg}/home.svg`,
      reportIcon: `${svg}/archive.svg`,
      chartIcon: `${svg}/line-graph.svg`,
      cycleIcon: `${svg}/cycle.svg`,
      settingsIcon: `${svg}/cog.svg`,
      chevronDownIcon: `${svg}/chevron-small-down.svg`,
      circlePlusIcon: `${svg}/circle-with-plus.svg`,
      pinIcon: `${svg}/pin.svg`,
      linkIcon: `${svg}/link.svg`,
      crossIcon: `${svg}/cross.svg`,
      userIcon: `${svg}/user.svg`,
      lockIcon: `${svg}/lock.svg`,
      mailIcon: `${svg}/mail.svg`
    },
    fonts: {
      fontFamily: '"Roboto"'
    },
    colors: {
      firstColor: '#121231',
      secondColor: '#212141',
      thirdColor: '#3e3c5f',
      fontColor: '#fff',
      googleColor: '#44b759',
      yandexColor: '#fc0',
      confirmColor: '#44b759',
      cancelColor: '#ab0149',
      disabledColor: '#787878'
    },
    other: {
      cardSmWidth: '400px',
      cardSmMinWidth: '400px',
      cardMdWidth: '900px',
      cardMdMinWidth: '650px',
      cardLgWidth: '1350px',
      cardLgMinWidth: '850px',
      cardXlWidth: '1800px',
      cardXlMinWidth: '1100px'
    }
  },
  react: { // inherited from the-ring/main-react-components
    cache: {
      period: 3e5 // 5 min
    },
    backend: {
      url: 'http://localhost:3000',
      connectUrl: '/connect'
    },
    frontend: {
      port: 3001,
      url: 'http://localhost:3001',
      connectUrl: 'http://localhost:3001/connect'
    }
  }
}
```

## Build css and js
```sh
$ npm run build
```

## Build css
```sh
$ npm run build:css
```

## Start dev server
```sh
$ npm run dev
```

## Development
```sh
$ npm run watch
```

## Start local server
```sh
$ npm start
```

## License

The MIT License (MIT)<br/>
Copyright (c) 2016 Alexey Bystrov
