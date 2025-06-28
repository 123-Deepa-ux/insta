import React, { useState,useEffect } from 'react'

function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8000/post').
        then((data)=>data.json()).
        then((data=>setPosts(data))).
        catch(err=>console.log(err))

    },[]);
    
    return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0 ? (
             <div>
                {posts.map((post)=>(
                    <div className = "my-3" key={post.id}>
                        <div className="d-flex">
                            <img className='dp rounded-circle' src={post.user.profilePic} alt='profilepic'/>
                            <h5>{post.user.username}</h5>
                        </div>
                    <img className="image" src={post.imageURL} alt=""/>
                    <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>

                    </div>
                    <div>
                       <b>{post.like}Likes</b> 
                    </div>
                    <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        ):(
            <div>
                Loading Posts
            </div>
        )  }
     </div>
  )
}

export default Posts