import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

interface User {
    uid: string;
    username: string;
    email: string;
    userProducts: string[];
    phone: string;
    fullName: string;
}

interface UserStore {
    currentUser: User | null;
    fetchUserInfo: (uid: string | null) => Promise<void>
}

export const useUserStore = create<UserStore>((set) => ({
    currentUser: null,

    fetchUserInfo: async (uid : string | null) => {
        if (!uid) return set({
            currentUser: null
        })

        try {
            const docRef = doc(db, 'users', uid)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                set({
                    currentUser: docSnap.data() as User
                })
            } else {
                set({
                    currentUser: null
                })
            }
        } catch (error) {
            console.log(error)
            return set({
                currentUser: null
            })
        }
    }
}))