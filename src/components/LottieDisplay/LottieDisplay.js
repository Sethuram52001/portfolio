import React, {Suspense} from 'react';
import Lottie from "react-lottie";
import Loading from "../Loading/Loading";

const LottieDisplay = ({lottieFile}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieFile
    }
    
    return ( 
        <Suspense fallback={<Loading />}>
            <Lottie isClickToPauseDisabled={true} options={defaultOptions} />
        </Suspense>
     );
}
 
export default LottieDisplay;