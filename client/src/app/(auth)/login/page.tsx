import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[550px] bg-white rounded-xl px-10 py-5 shadow-md">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">
                    Clash
                </h1>
                <h1 className="text-3xl font-bold mt-2">Login</h1>
                <p>Welcome back</p>

                <form>
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter your email..."
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password..."
                        />
                    </div>
                    <Link href={"/forget-password"}>
                        <p className="text-right font-semibold">
                            Forget Password?
                        </p>
                    </Link>
                    <div className="mt-4">
                        <Button className="w-full">Submit</Button>
                    </div>
                </form>

                <p className="text-center mt-2">
                    Don't have an account?{" "}
                    <strong>
                        <Link href={"/register"}>Register</Link>
                    </strong>
                </p>
            </div>
        </div>
    );
}

export default Login;
