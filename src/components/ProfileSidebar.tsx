const Sidebar = ({ setActiveComponent } : { setActiveComponent: any }) => {
    return (
        <div className="flex-col gap-2 hidden md:flex">
            <button onClick={() => setActiveComponent('User')}
                className="text-left font-bold w-1/2">User</button>
            <button onClick={() => setActiveComponent('UserProducts')}
                className="text-left font-bold w-1/2">User Products</button>
            <button onClick={() => setActiveComponent('Settings')}
                className="text-left font-bold w-1/2">Settings</button>
            <button className="font-bold text-red-700 text-left">Logout</button>
        </div>
    );
};

export default Sidebar