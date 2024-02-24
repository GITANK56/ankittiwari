import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChilderen: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChilderen: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity:1,
    },
    closed: {
        y: 50,
        opacity:0,
    },
};
const Links = () =>{
    const items =["Homepage", "Skills", "Portfolio", "About", "Contact"];


    return(
        <motion.div className="links" variants={variants}>
            {items.map((item) => 
            (<motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale: 0.95}}>
                {item}
            </motion.a>
          ))}
        </motion.div>
    );
};

export default Links