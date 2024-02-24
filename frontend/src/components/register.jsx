function Register()
{
    return <div className="register">
        <form className="flex flex-col gap-1 w-fit p-10 bg-white rounded-xl fields">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white">REGISTER</h1>
            <input type="text" id="name" className="rounded-xl bg-slate-700 text-white p-2"placeholder="Name"/>
            <input type="text" id="phone" className="rounded-xl bg-slate-700 text-white p-2"placeholder="Phone Number"/>
            <input type="text" id="mail" className="rounded-xl bg-slate-700 text-white p-2"placeholder="E-Mail"/>
            <input type="text" id="add" className="rounded-xl bg-slate-700 text-white p-2"placeholder="Address"/>
            <button className="bg-blue-700 rounded-xl p-2 text-white">REGISTER</button>
        </form>
    </div>
}
export default Register