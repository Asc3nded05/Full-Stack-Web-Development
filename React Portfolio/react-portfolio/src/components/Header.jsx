import Logo from '../assets/Logo.png';

function Header() {
    return (
        <header className="topBanner" id="topBannerMainPage">
            <div id="logoTitleContainer">
                <img src={Logo} alt="Logo" id="logo" />
                <h2 id="titleName">Riley <span className="noWrap">Van Heukelum</span></h2>
            </div>

            <nav id="headerNav">
                <ul>
                    <li><a href="index.html" id="home">Home</a></li>
                    <li><a href="aboutMe.html" id="aboutMe" style={{ whiteSpace: "nowrap" }}>About Me</a></li>
                    <li><a href="projects.html" id="projects">Projects</a></li>
                    <li><a href="contact.html" id="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;