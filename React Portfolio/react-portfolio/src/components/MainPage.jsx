import SmallerBackground from '../assets/SmallerBackground.jpg';

function MainPage() {
    return (
        <div id="mainContent">
            <div id="introContainer">
                <aside id="intro">
                    <img src={SmallerBackground} id="smallerPortrait" alt="Riley Van Heukelum" />

                    <hr className="introLine" />
                    <p id="introText">Hello! My name is <br /> <br /> <span className="riley">Riley <span
                        className="noWrap">Van Heukelum</span></span> <br /> <br /> I am a web
                        designer, software engineer, and graphic designer with a passion for computers, art, and philosophy.
                    </p>
                    <button id="introButton" onClick={() => window.location.href='projects.html'}>Go to Project Gallery</button>
                    <hr className="introLine" />
                </aside>
            </div>
        </div>
    )
}

export default MainPage;