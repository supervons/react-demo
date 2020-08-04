import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

function Login(props) {
    return (
        <div style={{backgroundColor: 'red', height: '300px', width: '300px'}}>
            {/*渲染子路由*/}
            {renderRoutes(props.route.childrens)}
            <Link to="/login/test">advantage1</Link>
        </div>
    );
}

export default Login;
