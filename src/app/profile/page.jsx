"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProfileComs from "../components/Profile";

export default function Profile() {
    const router = useRouter();

    const [session, Setsession] = useState({ auth: false })
    useEffect(() => {
        fetch("/api/auth/session")
            .then(res => res.json()).then(res => {
                res.auth === true ? null : router.push("login", { scroll: false })
                Setsession(res)
            })
    }, [])

    return (<>

        
        <ProfileComs session={session} />


    </>)
}