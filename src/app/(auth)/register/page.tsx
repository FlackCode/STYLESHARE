"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export default function Register() {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const formRef = useRef<HTMLFormElement>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        
        if (username && email && password) {
            try {
                const res = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await res.json()

                if (res.ok) {
                    setSuccess(data.message)
                    setError(null)
                    if (formRef.current) {
                        formRef.current.reset()
                    }
                    router.push('/')
                } else {
                    setError(data.error)
                    setSuccess(null)
                }
            } catch (error) {
                setError(null)
                setSuccess(null)
            }
        }
    }

    return (
        <main className="header flex flex-col justify-center items-center px-2 py-16">
            <div className="flex flex-col justify-center items-center gap-8 max-w-xl w-full">
                <h1 className="xsm:text-3xl md:text-5xl font-bold text-center">REGISTER</h1>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} ref={formRef}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    />
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
                        REGISTER
                    </button>
                    <p className="font-semibold">Already have an account? <Link href={'/login'} 
                    className="underline underline-offset-4 transition-all duration-300 hover:scale-105">Login here</Link></p>
                </form>
            </div>
        </main>
    )
}