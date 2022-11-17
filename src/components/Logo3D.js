import React from 'react';
import Spline from '@splinetool/react-spline';

const Logo3D = () => {
    return (
        <div className='spline'>
            <div className="anchor" id="home"></div>
            <Spline scene="https://prod.spline.design/ZaOE6pfF348Tje5J/scene.splinecode" />
            
        </div>
    );
};

export default Logo3D;