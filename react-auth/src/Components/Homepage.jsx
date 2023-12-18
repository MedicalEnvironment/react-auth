import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div style={{ textAlign: 'center', color: 'black' }}>
            <img
                src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png"
                alt="Facebook Logo"
                style={{ width: '100px', height: '100px', marginBottom: '1rem' }}
            />
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to the Social Network</h2>
            <Link to="/Dashboard">
                <button style={{ background: '#008000', color: 'white', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '999px' }}>
                    Register/Login here
                </button>
            </Link>
        </div>
    );
};

export default Homepage;
