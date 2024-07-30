import { Outlet } from "react-router-dom";
import { CartWidget } from "../components/CartWidget/CartWidget";


export function MainLayout() {
    return (
        <div>
            <haeder>
                <h1> Мой ресторан </h1>
                <CartWidget />
            </haeder>
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
            <footer>
                <p> 2024 Sara</p>
            </footer>
        </div>
    );
}