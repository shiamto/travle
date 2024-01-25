import FrontFooter from "../components/frontend/layout/footer"
import FrontHeader from "../components/frontend/layout/header"
import SiteProvider from "../contexts/site"
import { fetchSiteSettings } from "../helpers/backend"
import { useFetch } from "../helpers/hooks"
import "../styles/app.scss"

export const metadata = {
    title: 'Wilhloesch Travel',
    description: 'Wilhloesch Travel',
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
