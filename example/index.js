import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_app_login from './apps/mk-app-login/index.js'

const apps = {
	[mk_app_login.name]:mk_app_login,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()