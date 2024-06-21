const Sidebar = ({ setActiveComponent } : { setActiveComponent: any }) => {
    return (
        <div className="flex flex-col gap-2">
            <button onClick={() => setActiveComponent('User')}
                className="text-left font-bold w-1/2">User</button>
            <button onClick={() => setActiveComponent('UserProducts')}
                className="text-left font-bold w-1/2">User Products</button>
            <button onClick={() => setActiveComponent('Settings')}
                className="text-left font-bold w-1/2">Settings</button>
        </div>
    );
};

export default Sidebar