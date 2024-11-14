import Webcam from "react-webcam";
import { motion } from "framer-motion";


export default function CameraModule() {

    
    return (
        <>
           <motion.div   className="camera-window absolute h-[15vh] w-[15vw] bg-black rounded-xl z-[199] ">
            <Webcam className="w-full h-full rounded-xl object-cover" />
          </motion.div>
        </>
    )

}