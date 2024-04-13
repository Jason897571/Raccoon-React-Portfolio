import githubPicture from '../assets/GitHub.png'
import linkedinPicture from '../assets/Linkedin.png'
import stackExchangePicture from '../assets/Stack Exchange.png'


export default function Footer() {
    return (
        <footer>
            <div className="text-center">
                <a href="https://github.com/Jason897571">
                    <img src={githubPicture} className="rounded foot-pic" alt="..." />
                </a>
                <a href="https://www.linkedin.com/">
                    <img src={linkedinPicture} className="rounded foot-pic" alt="..." />
                </a>
                <a href="https://stackoverflow.com/">
                    <img src={stackExchangePicture} className="rounded foot-pic" alt="..." />
                </a>
                
            </div>
        </footer>
    )
}