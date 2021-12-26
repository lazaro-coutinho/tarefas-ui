const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'api',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;