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

export default Login;