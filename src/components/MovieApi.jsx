import React, { useState } from 'react'
import '../assets/css/movie.css'
import axios from 'axios';
import { CustomLoader } from './CustomLoader';

export const MovieApi = () => {
    const [inputText, setinputText] = useState("");
    const [movie, setmovie] = useState();
    const [isLoading, setisLoading] = useState(false)

    const searchInput = async() => {
        setisLoading(true);
        console.log(`Movie Name is ${inputText}`);

        const res = await axios.get(`https://moviedatabase8.p.rapidapi.com/Search/${inputText}`,{
            headers: {
                'x-rapidapi-key': 'd8bce76106msh03d5318575a1867p160920jsn2efa9b2e1759',
                'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
            }
        })
        console.log(res.data[0].title);
        console.log(res.data[0].budget);
        setmovie(res.data[0]);
        setisLoading(false);
        
    }
  return (
    <div>
        <div className='text-field text-center'>
            <input type='text' placeholder='Search Movies' onChange={(event)=>{setinputText(event.target.value)}}/>
            <button type='Submit' className='but btn btn-primary' onClick={()=>(searchInput())}>Search</button>
        </div>
        
        {isLoading ? (
            <div>
                <CustomLoader/>
            </div>
        ):(
            <div>
                {movie && (
                    <div className="container">
                        
                        <img className="poster" src={movie.poster_path} alt={movie.title} />
                            <div className="details">
                                <h2 className="title">{movie.title}</h2>
                                <p className="tagline">{movie.tagline}</p>
                                <p className="overview">{movie.overview}</p>
                                <p className="info">Rating: {movie.vote_average}/10</p>
                            </div>    
                    </div>
                )}
            </div>
        )}
    </div>
  )
}
