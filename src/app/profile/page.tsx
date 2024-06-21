"use client"
import Sidebar from "@/components/ProfileSidebar"
import { useState } from "react"
import User from "./@user/page"
import UserProducts from "./@userProducts/page"
import UserSettings from "./@settings/page"

export default function Profile() {
    const [activeComponent, setActiveComponent] = useState('User')

    const renderedComponent = () => {
        switch(activeComponent) {
            case 'User':
                return <User />
            case 'UserProducts':
                return <UserProducts />
            case 'Settings':
                return <UserSettings />
            default:
                return <User />
        }
    }

    return (
        <main className="flex flex-col py-4 xl:py-16 px-4 md:px-8 xl:px-80 gap-4">
            <h1 className="text-3xl font-bold border-b text-center leading-10">Profile Page</h1>
            <div className="grid grid-cols-5">
                <div className="col-span-1 text-left">
                    <Sidebar setActiveComponent={setActiveComponent}/>
                </div>
                <div className="col-span-4">
                    {renderedComponent()}
                </div>
            </div>
        </main>
    )
}