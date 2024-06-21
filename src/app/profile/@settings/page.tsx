export default function UserSettings() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-center mb-2 mt-2">Change Password</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        className="border px-4 py-2 w-full"
                        placeholder="examplePassword123"  />
                </div>
                <button
                    type="submit"
                    className="border border-black py-4 font-bold xsm:text-xs md:text-sm transition-all duration-300 hover:bg-black hover:text-white">
                    Submit
                </button>
            </form>
        </div>
    )
}