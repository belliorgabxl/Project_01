import Nav_main from "@/components/Navbar_main"

export default function MainLayout({ children}){

    return(
        <>
        <Nav_main/>
        {children}
        </>
    )
}