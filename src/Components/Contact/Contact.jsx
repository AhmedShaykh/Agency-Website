import React from 'react';
import './ContactStyles.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form className='form'>
                        <h1 className='form-head'><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your Name' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your Email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='6' placeholder='Enter your Message' />
                        </div>
                        
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;