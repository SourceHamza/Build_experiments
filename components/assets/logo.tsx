"use client"

import Image from 'next/image';
import buildLogo from "@/public/buildlogo.png"


export function Logo() {
  return (
    <div>
      <Image
        src={buildLogo}
        alt="Logo"
        width={154}
      />
    </div>
  );
};