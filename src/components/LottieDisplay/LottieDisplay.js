import React from 'react';
import Lottie from "react-lottie";

const LottieDisplay = ({lottieFile}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieFile
    }
    
    return ( 
        <div >
            <Lottie isClickToPauseDisabled={true}options={defaultOptions} />
        </div>
     );
}
 
export default LottieDisplay;