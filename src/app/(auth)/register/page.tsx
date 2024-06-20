"use client"
import Link from "next/link"

export default function Register() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { username, email, password } = Object.fromEntries(formData)
        console.log("Username:", username, "Email:", email, "Password:", password)
        e.currentTarget.reset()
    }

    return (
        <main className="header flex flex-col justify-center items-center px-2 py-16">
            <div className="flex flex-col justify-center items-center gap-8 max-w-xl w-full">
                <h1 className="xsm:text-3xl md:text-5xl font-bold text-center">REGISTER</h1>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
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