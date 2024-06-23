import React, { useState } from 'react'
import { PublishBlog } from './PublishBlog'
import { BlogContext } from './blogcontext'

export const BlogMain = () => {
    const [blogs, setblogs] = useState([])
    console.log(blogs);
  return (
    <div>
        <h1>Blog Main</h1>
        <BlogContext.Provider value={{blogs,setblogs}}>
            <PublishBlog></PublishBlog>
        </BlogContext.Provider>
    </div>
  )
}
