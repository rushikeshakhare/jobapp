import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './Loading.scss'

const LoadingScreen = () => {
    return (
        <div className="loader">
            <Loader type="Plane" color="#0f0" height={200} width={200} />
        </div>
    );
}

export default LoadingScreen
