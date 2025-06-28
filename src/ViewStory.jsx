import React,{useEffect,useState} from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
function ViewStory(){

   const{id,tot}=useParams()
   const[story,setStory]=useState(null)
  
useEffect(()=>{
      fetch(`http://localhost:8000/story/${id}`).
      then(data=>data.json()).
      then(data=>console.log(data)).
      catch(err=>console.log(err))
   },[id])

  if(id > tot || id<=0){
   Navigate('/')
  } 
   return(
   <div>
     {story? <div className='d-flex justify-content-center align-items-center'> 
      <Link to={`http://localhost:8000/story/${Number(id)-1}/${tot}`}> <i className="bi bi-arrow-left-circle-fill"></i></Link>
      <img className='vh-100 ' src ={story.image} alt='story'/>
            <link to={`http://localhost:8000/story/${Number(id)+1}`}><i className="bi bi-arrow-right-circle-fill"></i></link>
    </div>:
    <div>Loading</div>}
    </div>
   )
}
export default ViewStory