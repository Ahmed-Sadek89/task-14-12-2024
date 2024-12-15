import React from "react"
import { Flip, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ToastContainer
                position="bottom-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
                style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                }}
            />
        </>
    )
}

export default MainLayout
