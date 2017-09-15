/**
 * webapi.js 封装app所需的所有web请求
 * 供app测试使用，app加入网站后webpai应该由网站通过config,提供给每个app
 */


import { fetch } from 'mk-utils'

export default {
    user: {
        /**
         * @api {POST} /v1/user/login 登录
         * @apiName login
         * @apiGroup webapi__user
         * @apiPermission anyone
         * @apiDescription 用于用户登录网站使用的接口
         * @apiParam  {Object} option json对象
         * @apiParamExample  {json} 请求示例 
           {
               "mobile" : "13334445556", //手机号
               "password" : "1" //密码
           }
         * @apiSuccessExample {Json} 返回示例 
           {
                "result": true, //是否成功标志
                "token": "1,13334445556,1,13334445556,,", //登录后token
                //返回值
                "value": {  
                    "mobile": "13334445556",
                    "password": "1"
                }
            }
         */
        login: (option) => fetch.post('/v1/user/login', option)
    }
}