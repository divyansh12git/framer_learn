'use client'
import {motion} from 'framer-motion'



const TestFrammer=()=>{
    const li=[];
    for(let i=0;i<10;i++){
        i&1?li.push(0):li.push(100);
    }
    
    return (
        <div>
            <motion.div className="h-20 w-96 bg-amber-500 rounded-lg ml-20 " animate={{ x:li }} transition={{ ease: "easeInOut", duration: 0.5 , }} 
                whileHover={{
                    scale: 1.2,
                    transition: { duration:0.5, },
    
                }}
  whileInView={{ opacity: 1 }}  />
            
        </div>
    );
}

export default TestFrammer;