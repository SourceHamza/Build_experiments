"use client";

import { motion } from "motion/react";

export function GridBackground() {
    const totalCells = 1000;

    return (
        <div className="relative w-full h-screen bg-[#F6F4F3] overflow-hidden">
            <div
                className="grid w-full h-full"
                style={{
                    gridTemplateColumns: "repeat(auto-fill, minmax(30px, 1fr))",
                }}
            >
                {Array.from({ length: totalCells }).map((_, i) => (
                    <GridCell key={i} />
                ))}
            </div>
        </div>
    );
};

const GridCell = () => {
    return (
        <motion.div
           
            className="aspect-square border-r border-b border-black/5 relative"

           
            whileHover={{
                backgroundColor: "#0D00FF",
                transition: { duration: 0.2}, 
                scale : 1.1
            }}

            initial={{ backgroundColor: "transparent" }}
            animate={{
                backgroundColor: "transparent",
                transition: { duration: 0.8, ease: "easeOut" } // Smooth "off"
            }}
        />
    );
};
