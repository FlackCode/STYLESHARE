import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json()

    if (!email || !password) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        return NextResponse.json({ message: 'Successfully logged in', user })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 400 })
    }
}