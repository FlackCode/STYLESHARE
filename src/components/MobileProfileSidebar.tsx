export default function MobileProfileSidebar({ setActiveComponent } : { setActiveComponent : any }) {
    return (
        <div className="flex flex-col items-center border-b md:hidden">
            <button onClick={() => setActiveComponent('User')}
                className="font-bold w-1/2">User</button>
            <button onClick={() => setActiveComponent('UserProducts')}
                className="font-bold w-1/2">User Products</button>
            <button onClick={() => setActiveComponent('Settings')}
                className="font-bold w-1/2">Settings</button>
            <button className="font-bold text-red-700 mb-2">Logout</button>
        </div>
    )
} 