import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <header>
                <h1>Greenfort</h1>


                <nav>
                    <ul>
                        <li>Gotas</li>
                        <li>Capsulas</li>
                        <li>Cremas</li>
                    </ul>
                </nav>

                <CartWidget/>
            </header>
        </div>
    )
}

export default NavBar