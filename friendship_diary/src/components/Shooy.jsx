import { BlogEntry } from "./BlogEntry";
import axios from "axios";
import { useEffect, useState } from "react";

export function Shooy(){
    console.log("hello?");
    
    const [shooyPosts,setShooyPosts] = useState([]);

    useEffect(() => {
        const fetchShooyPosts = async () => {
            try{
                const response = await axios.get("http://localhost:5000/api/shooy-entries");
                setShooyPosts(response.data);
            } catch ( error ){
                console.log(error);
            }
        };


        fetchShooyPosts();
    },[]);

    const handleDelete = async (postId) => {
        try{
            await axios.delete(`http://localhost:5000/api/shooy-entries/${postId}`);

            setShooyPosts((prevPosts) => prevPosts.filter((post)=> post._id !== postId));
        } catch ( error ) {
            console.log(error);
        }
    }



    return(
        <div className="mamla">
            <div> 
            Hello this is Shooy
            </div>
            <br></br>
            
            {shooyPosts.map((entry)=>{
                return (
                    <div key={entry._id}>
                    <BlogEntry key={entry.title} title={entry.title} data={entry.data}/>
                    <button onClick= { () => handleDelete(entry._id)}>Delete</button>
                    </div>)
            })}
            
        </div>
    )
}