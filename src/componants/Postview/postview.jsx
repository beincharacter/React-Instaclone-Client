import React, { useEffect, useState } from 'react';
import "./postview.css";
import { Header_postview } from '../Header/header';

export default function Postview() {

    const [userdata,setUserData]=useState([]);

     //useEffect(() => {
    fetch("https://node-instacloneserver.onrender.com/posts" , {method:"GET"})
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  //}, [userdata]);
    

  return (
    <>
        <Header_postview />
        
        <div className="postview-main-container">

        {userdata.map((user, i) => {
                return (
                <div className="card border" key={i} >

                    {/* card header */}

                    <div className="card-header padding" >
                        <span>
                            <span className="user-name bolder">{user.author}</span>
                            <span className="dots-container bolder">...</span>
                            <span className="user-location lighter">{user.location}</span>
                        </span>

                    </div>

                    {/* image container */}

                    <div className="img-container" >
                        <img src={user.postimage} alt="photo" width="100%"/>
                    </div>

                    <div className="icon-date-container padding" >
                        <span className="like-icon lighter"><i className="fa-regular fa-heart"></i></span>
                        <span className="share-icon lighter"> <i className="fa-regular fa-paper-plane"></i></span>
                        <span className="date lighter" >{user.date}</span>
                    </div>

                    <div className="likes padding lighter"><p>{user.likes} likes</p></div>

                    <div className="description padding bolder"><p>{user.description}</p></div>

                </div>
                )
            })}
            
        </div>

    </>
  );
}
