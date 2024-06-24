import React, { useContext } from 'react'
import { BlogContext } from './blogcontext'

export const DisplayBlog = () => {
    const {blogs} = useContext(BlogContext);
  return (
    <div>
        <h1>Display Blogs</h1>
        <ul>
            {
                blogs?.map((b)=>{
                    return(
                        <li>
                            {b.content}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
