export default function User() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-center mt-2">Welcome, user</h1>
            <div className="flex flex-col">
                <p className="font-semibold border-b py-2">Full name: Undefined</p>
                <p className="font-semibold border-b py-2">Email: Undefined</p>
                <p className="font-semibold border-b py-2">Phone Number: Undefined</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <h1 className="font-bold text-xl mb-2">Change Name</h1>
                    <input
                        type="text"
                        name="name"
                        className="border px-4 py-2 w-full"
                        placeholder="John Smith"  />
                </div>
                <div>
                    <h1 className="font-bold text-xl mb-2">Change Email</h1>
                    <input
                        type="email"
                        name="email"
                        className="border px-4 py-2 w-full"
                        placeholder="example@gmail.com" />
                </div>
                <div>
                    <h1 className="font-bold text-xl mb-2">Change Phone Number</h1>
                    <input
                        type="text"
                        name="phone"
                        className="border px-4 py-2 w-full"
                        placeholder="(123) 456-7890" />
                </div>
                <button
                    type="submit"
                    className="border border-black py-4 font-bold xsm:text-xs md:text-sm transition-all duration-300 hover:bg-black hover:text-white">
                    Save Changes
                </button>
            </form>
        </div>
    )
}