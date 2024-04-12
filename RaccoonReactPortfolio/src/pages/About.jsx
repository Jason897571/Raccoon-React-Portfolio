import avatar from '../assets/Avatar.jpg'

export default function About() {
    return (
        <div>
            <h1 className='about-me-title'>About me</h1>
            <img src={avatar} className="rounded-circle Avatar" alt="Circular Avatar"></img>
            <p>I am a software developer with a passion for creating innovative solutions. I have a strong background in web development and a deep understanding of modern web technologies. I am always eager to learn and stay up-to-date with the latest trends in the industry.</p>
            <br></br>
            <p>When Im not coding, you can find me playing guitar or reading a book.</p>
            <br></br>
            <p>Feel free to contact me if you have any questions or would like to collaborate on a project.</p>
        </div>
    )
}