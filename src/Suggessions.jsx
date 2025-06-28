import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggessions() {
    const[profile, setProfile]=useState(null);
    const[suggessions, setSuggessions]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8000/profile')
        .then(data=>data.json())
        .then(data=>setProfile(data))
        .catch(err=>console.log(err))

        fetch('http://localhost:8000/suggessions')
        .then(data=>data.json())
        .then(data=>setSuggessions(data))
        .catch(err=>console.log(err))

    },[])

    const handleFollow=async (id,username)=>{
        axios.post('http://localhost:8000/followers',{"id":id, "username":username})
        .then(alert('followed'))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <div className="suggessions w-75 m-4" >
        { profile ?
        <div className="d-flex">
            
            <img className='dp rounded-circle' src={profile.profilePic} alt='profilePic'/>
            <h5>{profile.username}</h5>
            <small className="tool text-primary">Switch</small>
            <div/>

            
        </div>
        : <p>Loading</p> }
        </div>
        <div className="d-flex left">
            <p>Suggested for you</p>
            <b className="tool1">See All</b>
        </div>

         <div className=" fs-0.1">
         {suggessions.length > 0 ? (
                     <div className='sug'>
                        {suggessions.map((suggession)=>(
                            <div className = "  my-1 fs-0.1" key={suggession.id}>
                                <div className="d-flex fs-0.1">
                                    <img className='dp rounded-circle' src={suggession.profilePic} alt='profile pic'/>
                                    <h5 className="font" >{suggession.username}</h5>
                                    <a className=" text-primary ms-auto " onClick={()=>{handleFollow(suggession.id,suggession.username)}}>Follow</a>
                                </div>
                           
                            
                            </div>
                        ))}
                    </div>
                ):(
                    <div>
                        Loading 
                    </div>
                )  }
                </div>







    </div> 
  )
}

export default Suggessions