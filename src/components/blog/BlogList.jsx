import React, { useContext } from 'react'
import { DisplayBlog } from './DisplayBlog'
import { BlogContext } from './blogcontext'

export const BlogList = () => {
    const {blogs,deleteContent} = useContext(BlogContext)
  return (
    <div>
        <h1>Blog List</h1>
        <ul>
            {
                blogs?.map((b)=>{
                    return(
                        <>
                        <li>
                            {b.author} - {b.title} - {b.content}
                            <button className='btn btn-danger' onClick={()=>(deleteContent(b.author))}>Delete</button>
                        </li>
                        </>
                    )
                })
            }
        </ul>
        <DisplayBlog></DisplayBlog>
    </div>
  )
}
