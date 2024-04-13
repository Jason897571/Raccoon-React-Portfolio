import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // handle input change
    const handleInputChange = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;

        if(inputType === 'name'){
            setName(inputValue);
        } else if(inputType === 'email'){
            setEmail(inputValue);
        } else if(inputType === 'message'){
            setMessage(inputValue);
        }



    };

    //handle on click event
    const handleClick =()=>{
        setErrorMessage('');
    }

    // handle mouse leave the box but the value is none
    const handleNameMouseLeave = () => {
        if(name === ""){
            setErrorMessage('Name cannot be blank');
            return;
        }
    }

    const handleEmailMouseLeave = () => {
        if(!validateEmail(email)){
            setErrorMessage('Email is invalid');
            return;
        }
    }

    const handleMessageMouseLeave = () => {
        if(message===""){
            setErrorMessage('Message cannot be blank');
            return;
        }
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(name === "" || message===""){
            setErrorMessage('Name or Message cannot be blank');
            return;
        }
        if(!validateEmail(email)){
            setErrorMessage('Email is invalid');
            return;
        }

        setName("")
        setEmail("")
        setMessage("")
        setErrorMessage("")
        alert('Message sent!')

        
    }

    return (
        <div className="container text-left">
          
          <form className="form container" onSubmit={handleFormSubmit}>
            <h1 className='row'>Name:</h1>
            <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleNameMouseLeave}
            onClick={handleClick}
            type="text"
            placeholder="name"
            className='form-box row'
            />
            <h1 className='row'>Email Address:</h1>
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleEmailMouseLeave}
            onClick={handleClick}
            type="text"
            placeholder="email"
            className='form-box row'
            />
            <h1 className='row'>Message:</h1>
            <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleMessageMouseLeave}
            onClick={handleClick}
            type="text"
            placeholder="message"
            className='form-box row textarea-format'
            />
            <button className="btn btn-primary row" type="submit">
                Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      );
        
}