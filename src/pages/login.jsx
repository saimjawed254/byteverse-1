<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    mobile_number: '',
    address: '',
    govt_id: '',
    photo: null,
  });
  const [preview, setPreview] = useState('');
  const [fileInputKey, setFileInputKey] = useState(Date.now()); 
  const fileInputRef = useRef(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = new FormData();
    for (const key in formData) {
      submitData.append(key, formData[key]);
    }
    console.log('Form submitted:', formData);
    alert('Patient registration successful!');
    setFormData({
      name: '',
      age: '',
      gender: '',
      email: '',
      mobile_number: '',
      address: '',
      govt_id: '',
      photo: null,
    });
    setPreview('');
    setFileInputKey(Date.now()); 
  };

  return (
    <div className="health-form-container">
      <div className="health-form-card">
        <h1 className="form-title">Tell Us About You</h1>
        <p className="form-description">Get Started With Us.</p>
        
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age </label>
            <input
              type="number"
              id="age"
                name="age"
              placeholder="Please enter your age..."
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              placeholder="Please enter your gender..."
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Please enter your mobile no..."
              value={formData.mobile_number}
              onChange={handleChange}
              required
            />
          </div>          
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="Please enter your address..."
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="govt_id">Govt. ID</label>
            <input
              type="digits"
              id="govt_id"
              name="govt_id"
              placeholder="Please enter your government ID..."
              value={formData.govt_id}
              onChange={handleChange}
              required
            />
          </div>       
          <div className="form-group">
            <label htmlFor="photo">Upload Photo</label>
            <input
              key={fileInputKey} 
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              required
              ref={fileInputRef} 
            />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />
              </div>
            )}
          </div>
          
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
=======
import { useRef } from "react"
import axios from "axios";

function Login() {
    const imageInputRef = useRef(null);
    const govidInputRef = useRef(null);
    const typeRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const addressRef = useRef();


    const handleForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imageInputRef.current.files[0]);
        formData.append("govid", govidInputRef.current.files[0]);
        formData.append("type", typeRef.current.value);
        formData.append("name", nameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("gender", genderRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("number", numberRef.current.value);
        formData.append("address", addressRef.current.value);

        try {
            const response = await axios.post('http://127.0.0.1:3000/login', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Data Uploaded Successfully", response.data.message);
        } catch (e) {
            console.log("Data could not be uploaded", e);
        }
        imageInputRef.current.value = "";
        govidInputRef.current.value = "";
        typeRef.current.value = "";
        nameRef.current.value = "";
        ageRef.current.value = "";
        genderRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
        addressRef.current.value = "";
    }


    return (
        <>
            <h1>Login Page</h1>
            <div className="image-form">
                {/* enctype="multipart/form-data" */}
                <form onSubmit={handleForm} action="">
                    <input type="text" ref={typeRef} placeholder='Please enter your type!' required />
                    <input type="text" ref={nameRef} placeholder='Please enter your good name!' required />
                    <input type="number" ref={ageRef} placeholder='Please enter your age!' required />
                    <input type="text" ref={genderRef} placeholder='Please enter your Gender!' required />
                    <input type="text" ref={emailRef} placeholder='Please enter your Email!' required />
                    <input type="text" ref={numberRef} placeholder='Please enter your Number!' required />
                    <input type="text" ref={addressRef} placeholder='Please enter your Address!' required />
                    <input type="file" name="image" ref={imageInputRef} />
                    <input type="file" name="govid" ref={govidInputRef} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}
>>>>>>> 9fd8e254e7252ba1aff26e882fe9f7ca22bf89f4

export default Login;