import githubPicture from '../assets/GitHub.png'
import linkedinPicture from '../assets/Linkedin.png'
import stackExchangePicture from '../assets/Stack Exchange.png'


export default function Footer() {
    return (
        <footer>
            <div className="text-center">
                <img src={githubPicture} className="rounded foot-pic" alt="..." />
                <img src={linkedinPicture} className="rounded foot-pic" alt="..." />
                <img src={stackExchangePicture} className="rounded foot-pic" alt="..." />
            </div>
        </footer>
    )
}