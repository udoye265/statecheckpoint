import React from "react";
const movies = []
const Filter = ()=>{
    return(
        <div>
            {
                movies.filter((movie)=>{
                })
            }
              <label htmlFor="titleFilter">Title</label>
                    <input type="text" placeholder="Enter movie title" id="titleFilter" />
                    <label htmlFor="ratingFilter">Rating</label>
                    <input type="text" placeholder="Enter Rating" id="ratingFilter" />
        </div>
    )
}

 export default Filter