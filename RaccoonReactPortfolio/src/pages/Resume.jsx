import ResumePDF from '../assets/Resume.pdf'

export default function Resume() {
    return (
        <div className='content-container'>
            <h1>Resume</h1>
            <a className="resume-download" href={ResumePDF} download="Jason's Resume.pdf">➜ Download My Resume</a>
            <h2 className='skill-title'>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
                
            </ul>
            <h2 className='skill-title'>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mysql Sequelize</li>
                <li>Mogoose</li>
                <li>REST</li>
                
            </ul>
        </div>
    )
}