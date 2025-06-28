import React, { useEffect,useState }from 'react'
import {useNavigate} from 'react-router-dom'
 function Stories() {
    const[Stories,setStories]=useState([])
    const navigate=useNavigate()

    let tot = 0;

    useEffect(()=>{
        fetch('http://localhost:8000/story')
        .then(data=>data.json())
        .then(data=>setStories(data))
        .catch(err=>console.log(err))
    },[]);
  return (
    <div className="story d-flex">
      <div className='d-none'>
      {tot=Stories.length}
      </div>
        {Stories.length > 0 ? (
            Stories.map((story)=>(
                <div key={story.id} className="mx-1" onClick={()=>{navigate(`/story/${story.id}}/${tot}`)}}>
                    <div className="gradiant-border">                   
                         <img src={story.user.profilePic} alt="dp" className="story-dp rounded-circle "/>
                   </div>
                    <p className="text-truncate" style={{width:"50px"}}>{story.user.username}</p>
                </div>
            )
            )
        ):(
            

      <p>Loading</p>
        )}

    </div>


  )
}


    


export default Stories