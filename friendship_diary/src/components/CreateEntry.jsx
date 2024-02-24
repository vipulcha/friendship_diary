/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import  Dropdown  from "./Dropdown";
import { shooyPosts, helioPosts } from "../db";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export function CreateEntry(){
    const navigate = useNavigate();
    const [title,setTitle]=useState("");
    const [data,setData]=useState("");
    const [entryfor,setEntryfor]=useState("");


    const handleTitleChange= (e) =>{
        setTitle(e.target.value);
    }

    const handleDataChange= (e) =>{
        setData(e.target.value);
    }
    console.log(entryfor);

    const handleSubmit= async (e) =>{
        e.preventDefault();
        const newEntry = {title,data};
        if(entryfor=="Shooy"){
            shooyPosts.push(newEntry)

            await axios.post("http://localhost:5000/api/shooy-entries", newEntry);

            navigate('/Shooy');
        }
        else{
            helioPosts.push(newEntry) 

            await axios.post("http://localhost:5000/api/helio-entries", newEntry);
            navigate('/Helio');
        }
    }
    return(
        <div >
        <Dropdown setEntryfor={setEntryfor}/>
        <br/>
            <form onSubmit={handleSubmit} >
                <label >
                <div className="flex flex-col">
                    <div>
                    Title:
                    </div>
                    <input type="text" value={title} onChange={handleTitleChange} style={{width: '800px',backgroundColor: 'rgb(226, 243, 238)' }}/>
                    
                </div>
                </label>
                <br/>
                <label >
                <div className="flex flex-col">
                    <div>
                    Content:
                    </div>
                    <textarea value={data} onChange={handleDataChange} style={{ width: '1460px', height: '600px',  backgroundColor: 'rgb(226, 243, 238)' }}/>
                </div>
                </label>
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}