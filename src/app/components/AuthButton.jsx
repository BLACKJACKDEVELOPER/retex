
import Link from "next/link"
import { OPTIONS } from "@/lib/AuthOption";
import { getServerSession } from 'next-auth';


function Login() {

  return (<>
    <Link href="login" class="mr-5 font-medium hover:text-gray-900 uppercase">Sign in</Link>
    <Link href="register" class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-red-500 rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none ease">
      Sign Up
    </Link>
  </>)
}

function Profile({ session }) {
  return (<Link href={"profile"} className="flex items-center justify-between w-60">
    <p>{session.user.email}</p>
    <img width={40} className="rounded-md" src={session.user.image} />
  </Link>)
}

export async function AuthBTN() {
  const session = await getServerSession(OPTIONS)

  return (<>
    {
      session ? <Profile session={session} /> : <Login /> 
    }
  </>)
}