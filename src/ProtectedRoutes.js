import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

function ProtectedRoutes(props) {
    const {user} = props
    const {admin} = user
    return admin ? <Outlet /> : <Navigate replace to="/Home" />
};

export default ProtectedRoutes