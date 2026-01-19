import { div } from "motion/react-client"
import { Mail } from "@/components/assets/Mail"



export function Input() { 
    return (
        <div className=" outline-1 outline-black px-5 py-2 rounded-[5px] w-[512px] h-13 shadow-[0px_4px_0px_0px_rgba(0,_0,_0,_0.25)] flex items-center gap-3">
            <Mail/>
            <input type="text" className="focus:outline-none "
            placeholder="you@example.com" />

            
        </div>
    )
}