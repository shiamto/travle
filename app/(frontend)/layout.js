
import FrontFooter from "../components/frontend/layout/footer"
import FrontHeader from "../components/frontend/layout/header"
import "../styles/app.scss"

export const metadata = {
    title: 'Dahlia Ecommerce',
    description: 'Dahlia Ecommerce',
}


export default async function FrontendLayout({ children }) {
    return (
        <>
            <FrontHeader />
            {children}
            <FrontFooter />
        </>
    )
}
