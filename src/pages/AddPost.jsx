import React, { useEffect } from 'react'
import { Container, PostForm } from '../components'
import { useSelector } from 'react-redux';


function AddPost() {
  const {apiResponseData,isLoading} = useSelector((state) => state.ui )
    useEffect(() => {
        if (!isLoading && apiResponseData) {
          console.log("apiResponseData from Redux:", apiResponseData); // Logs the data from the PostCard component
        }
      }, [isLoading, apiResponseData]); // Watch for changes in apiResponseData

  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost