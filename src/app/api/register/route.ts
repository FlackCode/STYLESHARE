import { NextRequest, NextResponse } from 'next/server';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(req: NextRequest) {
    const { username, email, password } = await req.json()

    if (!username || !email || !password) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        await setDoc(doc(db, 'users', user.uid), {
            username,
            email,
            id: user.uid,
            userProducts: [],
            phone: '',
            fullName: ''
        })

        return NextResponse.json({ message: 'Successfully registered' }, { status: 200 })
    } catch (error: unknown) {
        let errorMessage = 'An unexpected error occurred'
        if (error instanceof Error) {
            errorMessage = error.message
        }
        return NextResponse.json({ error: errorMessage }, { status: 400 })
    }
}