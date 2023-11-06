import Footer from "../components/footer"

export default function Layout({ children }) {
    return (<>
            {children}
            <Footer />
    </>)
}