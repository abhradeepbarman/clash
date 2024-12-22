import { registerAction } from "@/actions/authActions";
import RegisterForm from "@/components/auth/RegisterForm";
import { SubmitButton } from "@/components/common/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function register() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[550px] bg-white rounded-xl px-10 py-5 shadow-md">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">
                    Clash
                </h1>
                <h1 className="text-3xl font-bold mt-2">Register</h1>
                <p>Welcome to Clash</p>

                <RegisterForm />

                <p className="text-center mt-2">
                    Already have an account?{" "}
                    <strong>
                        <Link href={"/login"}>Login</Link>
                    </strong>
                </p>
            </div>
        </div>
    );
}

export default register;
