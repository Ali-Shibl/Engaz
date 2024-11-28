import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Posts() {
  const [Data, setData] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const TokenUser=JSON.parse(localStorage.getItem('dataUser'))
  const {name,photo,id}=TokenUser

async function getDataUser(iduser) {
  setisLoading(true)
try {
  const { data } = await axios.post('/api/getHomePosts.php', {
    UsersId:iduser
  }, {
    headers: { 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>' },
    withCredentials: true,
  });

 console.log(data.data);
 setData(data.data)
  
} catch (error) {

  console.log(error.response.data.message);
  
}
setisLoading(false)

}


useEffect(() => {
  if (id) getDataUser(id);
}, [id]);

  return (
 <>
{isLoading ?
  
  <div className='d-flex justify-content-center align-items-center' style={{height:300}}>
    <span className="loader"></span>
    
  </div>
  :

<>

{Data && Data.length > 0 ?Data.map((post)=>
    <main key={post.PostsID} className="shadow bg-white rounded-4  content mb-3">
    {/* header-post */}
    <header className='header-post d-flex justify-content-between align-items-center p-3 pb-1'>
       <div className=' d-flex align-items-center  gap-3 flex-wrap'>
          <img src={photo} alt={name} className='rounded-circle'  style={{width:50,height:50}}/>
          <div>
          <p className='m-0 lh-sm text fw-bold'>{name}</p>
          <span className='text-muted minutes'><i class="fa-regular fa-clock me-1"></i> 2 mins</span>
          </div>
        </div>
        <div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>

    </header>

     {/* textpost */}
     <p className='my-2 px-3 text-post'>{post.PostText || 'No description available.'}</p>

     {/* Hashingpost */}
    <div className='hashtag  px-3'>
      <button className='bg-btn border-0 rounded-4 me-2'>#doctor</button>
      <button className='bg-btn border-0 rounded-4'>#healthy</button>

    </div>

    {/* immgpost */}
    {post.PostPhoto && <img src={post.PostPhoto} alt="Post image" className='w-100 mt-2' />}

    {/* tfa3l */}
    <div className='tfa3l px-3 pb-3 pt-2 d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center mt-3'>
      <div className='d-flex align-items-center  justify-content-between gap-2 gap-xl-1 gap-xxl-2 mt-3 mt-md-2 mt-lg-0'>
        <button className='btn-post rounded-4 text-main'><i class="fa-regular fa-thumbs-up"></i> Like</button>
        <button  className='btn-post rounded-4 text-main mx-2'><i class="fa-regular fa-comment"></i> comment</button>
        <button  className='btn-post rounded-4 text-main'><i class="fa-solid fa-share"></i> share</button>
      </div>
      <div className='d-flex align-items-center  justify-content-between gap-2 gap-xl-1 gap-xxl-2 '>
        <p className='m-0 text-muted'>{post.PostLike} likes</p>
        <p className='m-0 text-muted'>{post.PostComments} comments</p>
        <p className='m-0 text-muted'>{post.PostShareNum} shares</p>
      </div>



    </div>

  </main>
  
  

  
  ):<p className="text-center text-muted">No posts available.</p>  }  
</>
}
</>
  )
}
