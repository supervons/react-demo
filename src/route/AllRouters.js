
import Login from '../view/login/Login'
import Test from '../view/login/cps/test'
import HomePage from '../view/index/HomePage'

const routes = [
    {
        path: '/',
        component: Login,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        childrens: [
            {
                path: '/login/test',
                component: Test
            }
        ]
    }, {
        path: '/home',
        component: HomePage
    }]

export default routes

