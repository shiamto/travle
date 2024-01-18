import "@fontsource/inter";
import './styles/app.scss';

export const metadata = {
    title: "Wilhloesch Travel",
    description: "Embark on a journey of seamless travel experiences with Wilhloesch Travel."

};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
