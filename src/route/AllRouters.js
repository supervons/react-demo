/**
 * @desc 使用lazy进行路由懒加载
 * @author supervons
 * @date 2020/08/09
 */
import {lazy}  from 'react';
const Login = lazy(() => import('../view/login/Login'));
const Test = lazy(() => import('../view/login/cps/test'));
const HomePage = lazy(() => import('../view/index/HomePage'));

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

