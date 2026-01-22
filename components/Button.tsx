import { ReactNode } from "react"

type ButtonProp = { 
    text : String , 
    variant? : "primary" | "long"|  "secondary", 
    icon? : ReactNode

}


const variants = {  
        primary : `bg-[#0D00FF] px-4 py-2 text-white` , 
        long : `bg-[#0D00FF]  px-44 py-3 text-white` , 
        secondary : `bg-[#E6E6E6] px-4 py-2 outline-1 outline-black text-black`, 
}
const textVariants = {  
        primary : `text-white text-[16px] ` , 
        long : ` text-white text-[16px]` , 
        secondary : `text-[#262626] text-[16px]`, 
}



export function Button({text,variant,icon} :ButtonProp){ 
    return ( 
        <div className={`flex gap-3 font-main items-center justify-center  rounded-[3px] ${variant? variants[variant] : variants["primary"]}`}  >
            {icon}
            <p className={`${variant? textVariants[variant] : textVariants["primary"] }`}>
                {text}
            </p>
        </div>
    )
}