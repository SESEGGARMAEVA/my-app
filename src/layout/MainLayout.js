import { Outlet } from "react-router-dom";
import { CartWidget } from "../components/CartWidget/CartWidget";
import { Link } from "react-router-dom";



export function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-between" >
            <div className="sticky top-0 p-4 border-b border-black backdrop-blur bg-white/50" >
                <header className="container mx-auto flex justify-between p-4" >
                    <Link className="text-2xl font-bold" href="/">
                        CLOVER
                    </Link>
                    <CartWidget />
                </header>
            </div>
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
            <footer>
                <nav>
                    <Link to="/about"> О нас</Link>
                </nav>
                <p className="bg-gray-800 text-white">2024 Sara</p>
            </footer>
        </div>
    );
}