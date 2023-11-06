import { AuthBTN } from "./AuthButton";
import Link from "next/link";

export default function Header() {


    return (<>

        <header className="w-full text-gray-700 bg-white border-t border-2 border-gray-100 shadow-sm body-font">
            <div className="container flex items-center justify-between p-3 mx-auto flex-row">
                <Link href={"/"} className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <h1>RETEX</h1>
                </Link>
                <div className="items-center h-full">
                    <AuthBTN />
                </div>
            </div>
        </header>

    </>);
}