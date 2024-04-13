import p1 from '../assets/p1.gif'
import p2 from '../assets/p2.gif'
import p3 from '../assets/p3.gif'
import p4 from '../assets/p4.gif'
import p5 from '../assets/p5.gif'
import p6 from '../assets/p6.gif'
import p7 from '../assets/p7.gif'

import { useState} from 'react';
import repo_result from '../utils/API'
import githubPicture from '../assets/Github blue.png'
import websitePicture from '../assets/website icon.png'

const bg_list = [p1, p2, p3, p4, p5, p6, p7]

export default function Project(){
    const [results, setResults] = useState([]);

    const get_results = async () => {
        const data = await repo_result();
        setResults(data);
    }
    
    get_results();

    
    return (
        <>
            {results.map((result, index)=>{
                const bg_img = bg_list[index]
                return(
                    <div 
                    className="card bg-dark text-white col-md-5" 
                    key={result.project_id}
                    >
                        <img src={bg_img} 
                        className="card-img" 
                        alt="..."
                        />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Project Name: {result.name}</h5>
                            <a href={result.repo_url}><img className="rounded github-link-pic" src={githubPicture}></img></a>
                            <a href={result.depolyed_url}><img className="rounded deployed-link-pic" src={websitePicture}></img></a>
                        </div>
                    </div>
                )
                
            })}
        </>
    )
}