export default function User() {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">Welcome, user</h1>
            <div className="flex flex-col">
                <p className="font-semibold border-b py-2">Full name: Undefined</p>
                <p className="font-semibold border-b py-2">Email: Undefined</p>
                <p className="font-semibold border-b py-2">Phone Number: Undefined</p>
            </div>
            <div className="flex flex-col">
                <div className="mb-2">
                    <h1 className="font-bold text-xl mb-2">Change Name</h1>
                    <input type="text" className="border px-4 py-2 w-full" placeholder="John Smith"/>
                </div>
                <div>
                    <h1 className="font-bold text-xl mb-2">Change Name</h1>
                    <input type="text" className="border px-4 py-2 w-full" placeholder="John Smith"/>
                </div>
            </div>
        </div>
    )
}