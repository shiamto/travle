import "@fontsource/inter";
import MainLoader from "../components/common/loader";
import './styles/app.scss'

export const metadata = {
    title: "OneRide",
    description: "Manage your Ride with ease",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MainLoader />
                {children}
            </body>
        </html>
    );
}
