import React from 'react'
import ScrollToTop from "react-scroll-to-top";

import './styles.global.css'

const ScrollTop = () => {
 
    return (
        <div className="scroll-top">
            <ScrollToTop smooth />
        </div>
    );
};

export default ScrollTop