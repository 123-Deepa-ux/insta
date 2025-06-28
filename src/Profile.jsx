import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'



function Profile(){

     const [profile,setProfile]=useState(null)
     const[followers,setFollowers]=useState([])
     const[unfollowed,setUnfollowed]=useState(0)

     useEffect(()=>{
        axios.get('http://localhost:8000/profile').
        then(data=>{setProfile(data.data); console.log(data)})
        .catch(err=>console.log(err))

        axios.get('http://localhost:8000/followers').
        then(data=>setFollowers(data.data))
        .catch(err=>console.log(err))
     },[])

     function HandleonChange(e){
        setProfile(prev=>({
            ...prev,
            [e.target.name]:e.target.value
     }))

    }

    const handleUpdate= async()=>{
        axios.put('http://localhost:8000/profile',profile)
        .then(console.log("upated"))
.catch(err=>console.log(err))  
  }

  const handleUnfollow= async(id)=>{
    axios.delete(`http://localhost:8000/followers/${id}`)
  .then(alert('unfollowed'))
  .then(setUnfollowed(!unfollowed))
.catch(err=>console.log(err))
}


return(
    
        <div className="m-5">
            { profile ? (
            <div>
                <img src={profile.profilePic} className='profile rounded-circle'/>
                 <h5>{Profile.username}</h5>

                 <input type='text' value={profile.username} name='username' className='form-control' onChange={HandleonChange}/>
                  <input type='text' value={profile.profilePic} name='profilePic' className='form-control' onChange={HandleonChange}/>
                  <button className='btn btn-primary my-4'
                  onClick={handleUpdate}>Update</button>
            </div>
        
        ):(
            <div>Loading </div>  
            
        )}

        {followers.length > 0 ?(
            followers.map(follower=>(
                <div key={follower.id} className='d-flex my-2'>

                    {follower.username}
                    <button className='btn btn-secondary ms-auto'
                    onClick={()=>{handleUnfollow(follower.id)}}>Unfollow</button>

                </div>
            ))

        ):(
            <div>Loading followers</div>
        )}
      </div>      
    )
}

export default Profile