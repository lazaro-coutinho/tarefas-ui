const PROXY_CONFIG = [{
    context: ['/api'],
    target: 'https://lvc-tarefas-api.herokuapp.com/',
    secure: false,
    logLevel: 'debug'
}];

module.exports = PROXY_CONFIG;