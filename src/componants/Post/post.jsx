import React, { useState } from 'react';
import { Header_post } from '../Header/header';
import axios from "axios"
import "./posts.css"
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {

    const navigate = useNavigate()


  const [author, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [postimage, setImage] = useState(null);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const formData = new FormData();
    formData.append('author', author);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('postimage', postimage);

    fetch('http://localhost:8081/posts', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

      navigate("/postviews")

  };
    
  return (
    <>
        <Header_post />
            <div className='posts-main-container' >
                <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                    <td>Name :</td>
                    <td>
                        <input type="text" value={author} onChange={(event) => setName(event.target.value)} />
                    </td>
                    </tr>
                    <tr>
                    <td>Description :</td>
                    <td>
                        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                    </td>
                    </tr>
                    <tr>
                    <td>Location :</td>
                    <td>
                        <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
                    </td>
                    </tr>
                    <tr>
                    <td>Image :</td>
                    <td>
                        <input type="file" onChange={(event) => setImage(event.target.files[0])} />
                    </td>
                    </tr>
                </table>
                <button type="submit">POST</button>
                </form>
            </div>
    </>
  );
};

export default CreatePostForm;
