import React, { useState } from 'react'
import Login from './Login/Login'
import useToken from './App/useToken'


const Dashboard = () => {
    const { token, setToken } = useToken()

    if (!token) {
        { return <Login setToken={setToken} /> }
    }
    return (
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'Center' }}>Your news recommendation for this day</h2>
    )
    }

export default Dashboard