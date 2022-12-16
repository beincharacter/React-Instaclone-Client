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
  const [image, setImage] = useState(null);
  const [postimage, setImageUrl] = useState('');
  let img;
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/doh91aq3h/image/upload';
    const formData = new FormData();
    formData.append('author', author);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('file', image);
    formData.append('upload_preset', 'htrt9fqi');

    try {
      const res = await axios.post(cloudinaryUrl, formData);
      setImageUrl(res.data.url);
      img=res.data.secure_url;

    } catch (err) {
      console.error(err);
    }

    formData.append("postimage", postimage);


    // post to nodeJsAPI
    const data = { author, description, location, postimage };
    console.log(data)
    // console.log(formData)
  
    axios.post('https://node-instacloneserver.onrender.com/posts', 
      // method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'mode': 'no-cors'
      // },
      // body: JSON.stringify(data)
      data
    )
     
      .then(response => {
        console.log(response);
        navigate("/postviews")
      }).catch((err)=>{
        console.log(`err--->${err}`)
      });

  };
    
    
 


//   console.log(imageUrl)

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
