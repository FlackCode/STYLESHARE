"use client"
import { auth, db } from "@/lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import Link from "next/link"

export default function Register() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        if (username && email && password) {
            try {
                const res = createUserWithEmailAndPassword(auth, email, password)

                await setDoc(doc(db, 'users', (await res).user.uid), {
                    username,
                    email,
                    id: (await res).user.uid,
                    userProducts: []
                })

                console.log('Successfully registered')
                e.currentTarget.reset()

            } catch (error) {
                console.log(error)
            }
        }
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