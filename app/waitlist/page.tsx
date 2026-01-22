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

            <div className="absolute hover:scale-101 hover:duration-105 inset-0 z-10 flex items-center justify-center  pointer-events-none">

                {/* THE CARD */}

                <div className="pointer-events-auto gap-6 py-6 px-12 bg-white border border-black rounded-[15px] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.25)] flex flex-col  items-center justify-center">

                    <Logo />

                    <div className="flex flex-col gap-9 items-center w-full">
                        {/* Header Text */}
                        <div className="flex flex-col gap-2 text-center max-w-lg w-95.5">
                            <h1 className={`font-main font-bold text-[20px] tracking-[-0.06em] text-slate-900`}>
                                Digital products,designed and built with intent.
                            </h1>
                            <p className="text-[14px] font-main tracking-[-0.05em] text-[#2F2F2F]">
                                Launch with <span className="font-medium">Clarity and Confidence</span>.
                                Focus on what actually matters with @BUILD.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 items-center">
                            <Input />
                            <Button
                                text="Join The Waitlist"
                                icon={<Send />}
                                variant="long"
                            />
                        </div>

                        <div className=" flex flex-col gap-3 justify-center items-center font-main font-light text-[12px] tracking-[-0.06em]">
                            <hr className="border px-60 border-black/20"></hr>
                            Terms | Privacy & Policy
                        </div>
                    </div>



                </div>
            </div>
        </main>
    );
}