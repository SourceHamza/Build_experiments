"use client"

import { Mail } from "@/components/assets/Mail"
import { motion } from "motion/react"


export function Input() {
    return (
        <div className=" outline-1 outline-black px-4 py-3 font-main text-[14px]  rounded-[5px]  shadow-[0px_4px_0px_0px_rgba(0,_0,_0,_0.25)] flex items-center gap-3">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Mail />
            </motion.div>
            <input type="text" className="focus:outline-none w-108"
                placeholder="you@example.com" />


        </div>
    )
}