import * as _ from 'lodash';
import { Config } from '../type';

console.log('Loading config for (NODE_ENV):', process.env.NODE_ENV);

let environment: string | undefined = process.env.NODE_ENV || 'development';
environment = process.env.NODE_ENV === "test" ? 'development' : process.env.NODE_ENV;

const shared = require('./shared') || {};
const envSpecific = require('./' + environment) || {};

const all = {};

export default _.merge(all, shared.default, envSpecific.default) as Config;
