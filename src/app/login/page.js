"use client";
import Facebook from "next-auth/providers/facebook";
import { signIn } from "next-auth/react";
import Link from "next/link"


export default function Login() {

    const submit = async () => {
        await signIn("credentials", {
            email: "s64209010013@gmail.com",
            password: "123",
            callbackUrl: "/",
            redirect: true
        })
    }
    const github = async () => {
        await signIn("github", {
            callbackUrl: "/",
            redirect: true
        })
    }
    const facebook = async () => {
        await signIn("facebook", {
            callbackUrl: "/",
            redirect: true
        })
    }
    return (<div className="bg-gray-800">
        <div className="container flex flex-col mx-auto rounded-lg pt-10">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:p-12">
                    <div className="flex items-center xl:p-10">
                        <div className="flex bg-gray-100 p-10 flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                            <input name="csrfToken" type="hidden" defaultValue={1} />
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
                            <p className="mb-4 text-grey-700">Enter your email for reset password</p>
                            <div onClick={github} className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                Sign in with Github
                            </div>
                            <div onClick={facebook} className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                                Sign in with Facebook
                            </div>
                            <div className="flex items-center mb-3">
                                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                <p className="mx-4 text-grey-600">or</p>
                                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                            </div>
                            <label className="mb-2 text-sm text-start text-grey-900">Email*</label>
                            <input name="email" id="email" type="email" placeholder="mail@loopple.com" className="border border-black-200 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                            <label className="mb-2 text-sm text-start text-grey-900">Password*</label>
                            <input name="password" id="password" type="password" placeholder="Enter a password" className="border border-black-200 flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                            <div className="flex flex-row justify-between mb-8">
                                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                    <input type="checkbox" value="" className="" />
                                    <span className="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
                                </label>
                                <Link href={"forgotPassword"} className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</Link>
                            </div>
                            <button onClick={submit} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl bg-red-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Sign In</button>
                            <p className="text-sm leading-relaxed text-grey-900">Not registered yet? <Link href="register" className="font-bold text-grey-700">Create an Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}