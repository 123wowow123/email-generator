import * as _ from 'lodash';
import { Config } from '../type';

console.log('Loading config for (NODE_ENV):', process.env.NODE_ENV);

let environment: string | undefined = process.env.NODE_ENV || 'development';
environment = process.env.NODE_ENV === 'test' ? 'development' : process.env.NODE_ENV;

const all = {};
let envSpecific;
const shared = require('./shared') || {};

if (environment === 'development') {
    envSpecific = require('./' + environment);
}
else {
    envSpecific = {};
}



export default _.merge(all, shared.default, envSpecific.default) as Config;
