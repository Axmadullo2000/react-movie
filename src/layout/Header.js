export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
            <a href className="brand-logo center">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href>Movies</a></li>
                <li><a href>Cartoons</a></li>
            </ul>
            </div>
        </nav>
    )
}