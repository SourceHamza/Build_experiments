import { GridBackground } from "@/components/GridBackground"
import { Input } from "@/components/input"
import { Button } from "@/components/Button"
import { Send } from "@/components/assets/Send"
import { Logo } from "@/components/assets/logo"
import { motion } from "motion/react"

export default function Page() {
    return (
        // PARENT: Relative container that holds everything
        <main className="relative w-full h-screen overflow-hidden bg-slate-50">

    
            <div className="absolute inset-0 z-0">
                <GridBackground />
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center p-4 pointer-events-none">

                {/* THE CARD */}
                {/* pointer-events-auto: Re-enables clicking for buttons/inputs inside this box */}
                <div className="pointer-events-auto w-full max-w-160 bg-white border border-black rounded-[15px] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.25)] p-12 flex flex-col gap-10 items-center justify-center">

                    <Logo />

                    <div className="flex flex-col items-center gap-9 w-full">
                        {/* Header Text */}
                        <div className="flex flex-col gap-3 text-center max-w-lg">
                            <h1 className="font-mono text-2xl font-semibold tracking-tight text-slate-900">
                                Digital products, designed and built with intent.
                            </h1>
                            <p className="font-mono text-base text-[#2F2F2F]">
                                Launch with <span className="font-semibold text-black">Clarity and Confidence</span>.
                                Focus on what actually matters with @BUILD.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 w-full max-w-xs items-center">
                            <Input />
                            <Button
                                text="Join The Waitlist"
                                icon={<Send />}
                                variant="long"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}