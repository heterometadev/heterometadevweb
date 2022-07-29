import { motion } from "framer-motion"
import React  from "react";
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const Transitions = ({ children }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2 }}
        >
            {children}
        </motion.div>
    );
};
export default Transitions;