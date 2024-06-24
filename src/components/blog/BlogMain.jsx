import React, { useState } from 'react'
import { PublishBlog } from './PublishBlog'
import { BlogContext } from './blogcontext'

export const BlogMain = () => {
    const [blogs, setblogs] = useState([])
    console.log(blogs);

    const deleteContent = (e) => {
      var filterContent = blogs?.filter((d) => {
        return d.author !== e;
      })
      console.log(filterContent);
      setblogs(filterContent);
    }
  return (
    <div>
        <h1>Blog Main</h1>
        <BlogContext.Provider value={{blogs,setblogs,deleteContent}}>
            <PublishBlog></PublishBlog>
        </BlogContext.Provider>
    </div>
  )
}
