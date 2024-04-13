import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const repo_result = async() =>{
    const result = await axios.get(`https://api.github.com/users/Jason897571/repos`);
    const filterred_data = result.data.filter((item)=>{
        return item.has_pages === true;
    })
    const mapped_data = filterred_data.map((item)=>{
        return {
            project_id: item.id,
            name: item.name,
            repo_url: item.html_url,
            depolyed_url: `https://jason897571.github.io/${item.name}/`
            };
    })
    return mapped_data;
}



// Export an object with a "search" method that searches the Giphy API for the passed query


export default repo_result;