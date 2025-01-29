import React, { useEffect } from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onGetApiResponseHandler } from '../store/uislice'

function PostCard({$id, title, featuredImage}) {

  const dispatch = useDispatch()

  useEffect(() => {
    // Simulating an API response or hardcoded data
    const apiData = {
      name: "arshlan",
      course: "btech",
      postId: $id,  // Store post-specific data if needed
    };

    // Dispatch the action to store the data in Redux
    dispatch(onGetApiResponseHandler(apiData));
  }, [dispatch, $id]);
  

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard