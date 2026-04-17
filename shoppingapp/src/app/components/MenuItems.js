import Link from "next/link";

const MenuItems = () => {

    
    return <nav className="text-center" style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}> 
        <Link href="/">Home</Link> |{ }
        <Link href="/pages/aboutus"> About Us</Link>|{ }
        <Link href="/pages/contactus"> Contact Us</Link>
    </nav>
    
}
export default MenuItems;