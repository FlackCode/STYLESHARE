"use client"
import Sidebar from "@/components/ProfileSidebar"
import { useState } from "react"
import User from "./@user/page"
import UserProducts from "./@userProducts/page"
import UserSettings from "./@settings/page"
import { BsList } from "react-icons/bs"
import MobileProfileSidebar from "@/components/MobileProfileSidebar"

export default function Profile() {
    const [activeComponent, setActiveComponent] = useState('User')
    const [isOpen, setIsOpenened] = useState(false)

    const handleSidebarOpen = () => {
        setIsOpenened(!isOpen)
    }

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
            <div className="flex justify-between md:justify-start items-center border-b">
                <h1 className="text-3xl font-bold leading-10 py-2">Profile Page</h1>
                <button className="border rounded-full w-8 h-8 p-2 flex justify-center items-center md:hidden transition-all duration-300 hover:border-black"
                onClick={handleSidebarOpen} >
                    <BsList />
                </button>
            </div>
            <div className="grid md:grid-cols-5">
                <div className="col-span-1 text-left">
                    <Sidebar setActiveComponent={setActiveComponent}/>
                </div>
                <div className="col-span-4">
                    {isOpen ? <MobileProfileSidebar setActiveComponent={setActiveComponent} /> : ''}
                    {renderedComponent()}
                </div>
            </div>
        </main>
    )
}