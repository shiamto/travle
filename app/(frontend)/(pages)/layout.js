"use client";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";


const Layout = ({ children }) => {
   
    return (
        <>
            <div className='relative' >
                <Header />
                {children}
                <Footer />

            </div>
        </>
    );
};

export default Layout;

