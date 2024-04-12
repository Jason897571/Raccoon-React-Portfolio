import p1 from '../assets/p1.gif'
import { useState} from 'react';
import repo_result from '../utils/API'
import githubPicture from '../assets/GitHub.png'
import websitePicture from '../assets/website icon.png'

export default function Project(){
    const [results, setResults] = useState([]);

    const get_results = async () => {
        const data = await repo_result();
        setResults(data);
    }
    
    get_results();

    
    return (
        <>
            {results.map((result)=>{
                return(
                    <div className="card bg-dark text-white col-md-5" key={result.project_id}>
                        <img src={p1} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Project Name: {result.name}</h5>
                            <a href={result.repo_url}><img className="rounded portfolio-pic" src={githubPicture}></img></a>
                            <a href={result.depolyed_url}><img className="rounded foot-pic" src={websitePicture}></img></a>
                            
                            
                        </div>
                    </div>
                )
                
            })}
        </>
    )
}