import React, { useState } from 'react';
import './ContactStyles.css';

const Contact = () => {

    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        message: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    }

    const submitData = async (event) => {
        event.preventDefault();
        fetch('https://react-cyber-dynamic-web-default-rtdb.firebaseio.com/contact.json');
    }

    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form className='form'>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" name='fullname'
                                placeholder='Enter your Name'
                                value={userData.fullname}
                                onChange={postUserData} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name='email'
                                placeholder='Enter your Email'
                                value={userData.email}
                                onChange={postUserData} />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' name='message'
                                placeholder='Enter your Message'
                                value={userData.message}
                                onChange={postUserData} />
                        </div>
                        <button onClick={submitData}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;