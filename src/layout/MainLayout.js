import { Outlet } from "react-router-dom";
import { CartWidget } from "../components/CartWidget/CartWidget";
import { Link } from "react-router-dom";


export function MainLayout() {
    return (
        <div>
            <header>
                <h1> Мой ресторан </h1>
                <CartWidget />

            </header>
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
            <footer>
                <nav>
                    <Link to="/about"> О нас</Link>
                </nav>
                <p> 2024 Sara</p>
            </footer>
        </div>
    );
}