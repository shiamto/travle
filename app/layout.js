import '@fontsource/inter'
import "./styles/app.scss"
import MainLoader from "./components/common/loader";

export const metadata = {
  title: 'Wilhloesch Travel',
  description: 'Manage your travel with ease',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
