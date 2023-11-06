import Link from "next/link"

export default function Register() {
    return (<div className="bg-gray-800">

        <div className="container flex flex-col mx-auto rounded-lg pt-10">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:p-12">
                    <div className="flex items-center xl:p-10">
                        <div className="flex bg-gray-100 p-10 flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign Up</h3>
                            <div className="flex items-center mb-3">
                                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                    <p className="mx-4 text-grey-600">or</p>
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                    </div>
                                    <label className="mb-2 text-sm text-start text-grey-900">Firstname*</label>
                                    <input id="firstname" type="email" placeholder="Enter Firstname" className="border border-black-200 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                                    <label className="mb-2 text-sm text-start text-grey-900">Lastname*</label>
                                    <input id="lastname" type="email" placeholder="Enter Lastname" className="border border-black-200 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                                    <label className="mb-2 text-sm text-start text-grey-900">Email*</label>
                                    <input id="email" type="email" placeholder="mail@loopple.com" className="border border-black-200 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                                    <label className="mb-2 text-sm text-start text-grey-900">Password*</label>
                                    <input id="password" type="password" placeholder="Enter a password" className="border border-black-200 flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                                    <div className="flex flex-row justify-between mb-8">
                                        <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                            <input type="checkbox" value="" className="" />
                                                <span className="ml-3 text-sm font-normal text-grey-900">Accept Condition And Policy</span>
                                        </label>
                                    </div>
                                    <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl bg-red-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Sign Up</button>
                                    <p className="text-sm leading-relaxed text-grey-900">Already have account? <Link href="login" className="font-bold text-grey-700">Sign In</Link></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>)
}