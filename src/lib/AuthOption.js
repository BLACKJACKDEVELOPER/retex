import GitHubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook"



export const OPTIONS = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        FacebookProvider({
            clientId:process.env.FACEBOOK_ID,
            clientSecret:process.env.FACEBOOK_SECRET
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "Enter Email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password"
                }
            },
            async authorize(credentials) {
                console.log(credentials)
                const user = { id: 42, email: "s64209010013@gmail.com", password: "123", fullname: "Pok piyapon" }
                if (credentials.email == user.email && credentials.password == user.password) {
                    console.log(true)
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages:{
        signIn:"/login"
    },
    secret:process.env.NextAuthSecret
}