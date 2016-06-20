'use strict';

module.exports = {
  styles: {
  },
  react: {
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
};
