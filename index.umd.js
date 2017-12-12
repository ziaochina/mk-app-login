__webpack_public_path__ = window["__pub_mk-app-login__"];

import config from './config'
import * as data from './data'
import './mock.js'
import './style.less'

export default {
    name: "mk-app-login",
    version: "1.0.10",
    description: "mk-app-login",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}