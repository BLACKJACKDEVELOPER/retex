import { signOut } from "next-auth/react";

export default function ProfileComs({ session }) {
    console.log(session)
    return (<>
        {
            session.auth
                ?
                <div>
                    <div className="bg-gray-800 pt-10 flex items-center ml-10 mr-10 justify-center p-2">
                        <div className="bg-white p-8 rounded-lg shadow-md  lg:max-w-3xl w-full">
                            <div className="relative">
                                <img src="https://placekitten.com/500/150" alt="Banner Profile" className="w-full rounded-t-lg" />
                                <img src={session.session.user.image} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white" />
                            </div>
                           
                            {/* <div className="flex items-center mt-4 space-x-4">
                                <a href="#" className="text-blue-500 hover:underline"> Twitter </a>
                                <a href="#" className="text-blue-500 hover:underline"> GitHub </a>
                                <a href="#" className="text-blue-500 hover:underline"> LinkedIn </a>
                            </div> */}
                            <h1 className="flex justify-center items-center mt-16 mb-2">{session.session.user.email}</h1>
                            <hr className=" border-t mb-3 border-gray-300" />
                            

                            <div className="flex justify-between text-gray-600 mx-2">
                                <div className="text-center">
                                    <span className="block font-bold text-lg">1.5k</span>
                                    <span className="text-xs">Followers</span>
                                </div>
                                <div className="text-center">
                                    <span className="block font-bold text-lg">120</span>
                                    <span className="text-xs">Following</span>
                                </div>
                                <div className="text-center">
                                    <span className="block font-bold text-lg">350</span>
                                    <span className="text-xs">Posts</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" bg-gray-800 flex max-w-3xl lg:m-auto sm:m-10 items-center justify-center pb-3">
                        <button onClick={()=> signOut()} className="bg-red-500 w-full text-white p-2 rounded-md">SIGN OUT</button>
                    </div>
                </div>
                :
                ""
        }
    </>)
}