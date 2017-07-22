import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_app_login from './apps/mk-app-login/index.js'

const apps = {
	config: (options) => {
		Object.keys(options).forEach(key => {
			const reg = new RegExp(`^${key == '*' ? '.*' : key}$`) 
			Object.keys(apps).forEach(appName => { 
				if (appName != 'config') {
					if (reg.test(appName)) {
						apps[appName].config(options[key])
					}
				}
			})
		})
	},
	[mk_app_login.name]:mk_app_login,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()