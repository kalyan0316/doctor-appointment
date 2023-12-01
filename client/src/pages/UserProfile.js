import React, { useState } from 'react'
import { Form, Input, message } from "antd";
import "./../styles/login.css";
const UserProfile = () => {
  const [gender,setGender]=useState('');
  const handlegenderchange=(e)=>{
    setGender(e.target.value);
  }
  return (
    <div>
      <>
      <div className="form-container">
        <Form
          layout="vertical"
          
          className="login-form card p-4"
        >
          <h1 className="text-center"> Sign in</h1>
          <Form.Item label="username" name="">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Address" name="Address">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Input type="radio" checked={gender==='female'} onChange={handlegenderchange} required />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Input type="radio" checked={gender==='male'} onChange={handlegenderchange} required />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input type="text" required />
          </Form.Item>
          
          
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </Form>
      </div>
    </>
    </div>
  )
}

export default UserProfile