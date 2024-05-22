// import {motion, AnimatePresence} from "framer-motion";
import { MyComponent } from "./animatepresence";
import TestFrammer from "./testframmer";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main >
      <div className="mt-52 ml-20 bg-gray-800  h-[20rem] w-[50rem] flex flex-wrap p-10 ">
        {/* <motion.div className="h-20 w-96 bg-red-400" />
        <motion.div className="h-20 w-96 bg-blue-200" />
        <motion.div className="h-20 w-20 ml-20 bg-cyan-800" />
        <motion.div className="h-20 w-20 bg-amber-300" /> */}
        <TestFrammer />
        <Button variant="secondary">Button</Button>
        <MyComponent isVisible={true}/>
        
        
      </div>
    </main>
  );
}
