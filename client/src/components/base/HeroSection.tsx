import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div>
                <Image
                    src="/banner.svg"
                    alt="banner"
                    width={600}
                    height={600}
                />
            </div>
            <div className="mt-4 text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text ">
                    Clash
                </h1>
                <p className="text-2x; md:text-3xl lg:text-4xl font-bold text-center">
                    Discover the better choice, together.
                </p>

                <Link href={"/login"}>
                    <Button className="mt-4">Start Free</Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
