//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'

//创建一个路由器
const router = new VueRouter({
    routes:[
        //每一个路由都是一个配置对象
        { 
            name:'guanyu',
            path:'/about',
            component:About
        },
        { 
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            // path:'details/:id/:title', //配置params属性时
                            path:'details',
                            component:Details,
                            //Details接收数据
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Details组件
                            // props:{a:11,b:'hello'} 
                            
                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Deatils组件。                       
                            // props:true

                            //props的第三种写法，值为函数，该函数返回的对象中每一组key-value都会通过props传给Details组件
                            props($route){
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
//把路由暴露出去
export default router