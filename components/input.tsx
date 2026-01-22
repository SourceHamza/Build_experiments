import { div } from "motion/react-client"
import { Mail } from "@/components/assets/Mail"



export function Input() { 
    return (
        <div className=" outline-1 outline-black px-4 py-3 font-main text-[14px]  rounded-[5px]  shadow-[0px_4px_0px_0px_rgba(0,_0,_0,_0.25)] flex items-center gap-3">
            <Mail/>
            <input type="text" className="focus:outline-none w-108"
            placeholder="you@example.com" />

            
        </div>
    )
}