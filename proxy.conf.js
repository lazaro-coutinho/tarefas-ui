import { environment } from 'src/environments/environment';

const PROXY_CONFIG = [{
    context: ['/api'],
    target: `${environment.apiUrl}/`,
    secure: false,
    logLevel: 'debug'
}];

module.exports = PROXY_CONFIG;