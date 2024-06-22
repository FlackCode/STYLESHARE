"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json()

            if (res.ok) {
                setError(null)
                e.currentTarget.reset()
                router.push('/')
            } else {
                setError(data.error)
            }
        } catch (error) {
            setError('Something went wrong. Please try again.')
        }
    }

    return (
        <main className="header flex flex-col justify-center items-center px-2 py-16">
            <div className="flex flex-col justify-center items-center gap-8 max-w-xl w-full">
                <h1 className="xsm:text-3xl md:text-5xl font-bold text-center">LOGIN</h1>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="border border-black py-4 font-bold xsm:text-xs md:text-sm transition-all duration-300 hover:bg-black hover:text-white"
                    >
                        LOGIN
                    </button>
                    <p className="font-semibold">Don't have an account? <Link href={'/register'} 
                    className="underline underline-offset-4 transition-all duration-300 hover:scale-105">Register here</Link></p>
                </form>
            </div>
        </main>
    )
}