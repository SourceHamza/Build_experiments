"use client";

import React from "react";
import { motion } from "motion/react";

export function GridBackground() {
    // We generate a large number of cells to ensure the screen is filled.
    // For production, you might calculate this based on window size.
    const totalCells = 1000;

    return (
        <div className="relative w-full h-screen bg-[#F6F4F3] overflow-hidden">
            <div
                className="grid w-full h-full"
                style={{
                    // Creates columns that are at least 50px wide, filling the row
                    gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
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
            // 1. Square Grids
            // 4. Outlines black with 5% opacity
            className="aspect-square border-r border-b border-black/5 relative"

            // 3. Hovering grid element is #0D00FF
            // We use whileHover for the instant reaction
            whileHover={{
                backgroundColor: "#0D00FF",
                transition: { duration: 0 }, // Instant "on"
            }}

            // 2. Interactable (Fades back to transparent when mouse leaves)
            initial={{ backgroundColor: "transparent" }}
            animate={{
                backgroundColor: "transparent",
                transition: { duration: 0.8, ease: "easeOut" } // Smooth "off"
            }}
        />
    );
};
