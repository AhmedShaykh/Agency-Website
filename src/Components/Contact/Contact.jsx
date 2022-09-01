import React, { useState } from 'react';
import './ContactStyles.css';

const Contact = () => {

    const [userData, setUserData] = useState({});
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your Full Name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your Email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Enter your Message' />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;