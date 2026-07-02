import React, { useState } from 'react'
import './Age.css'

const Age = () => {
    const [birthday, setbirthday] = useState('')
    const [age , setAge] = useState(null)
    const [message , setMessage] = useState('')

    function calculateAge(){
        const birthDate = new Date(birthday);
        const now = new Date();

        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();

        if(days < 0){
            months--;

            const daysInPreviousMonth = new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            ).getDate()

            days += daysInPreviousMonth;
        }

        if(months < 0){
            years--;
            months += 12
        }



        if(years < 0){
            setAge(null);
            setMessage("Please enter a valid birthday date.")
            return;
        }
        else if(years < 18){
            setMessage("I'm still a child👶")
        }
        else if(years === 18){
            setMessage("🎉 I'm finally an adult👨‍🦰 🎉")
        }
        else if(years <= 21 ){
            setMessage("Campus life is cool😎")
        }
        else if(years <= 69){
            setMessage("Adult life is hard😭")
        }
        else if(years <= 90){
            setMessage("It's time for retirement🧓")
        }
        else {
            setMessage("Congrats on reaching this far🎉")
        }

        const birthyear = birthDate.getFullYear();
        const currentYear = now.getFullYear();

        if(!birthday){
            setAge(null);
            setMessage('Please Enter birthday!!!');
            return;
        }

        if(birthyear < 1900 ){
            setAge(null);
            setMessage(`Enter birthyear from 1900 to ${currentYear}` );
            return;
        }

        

        setAge({years,months,days});
    }

    const [username, setUsername] = useState('')
    const[inputName, setInputName] = useState('')

    function displayName(){
        setUsername(`${inputName} is:`);

        if(!inputName){
            setUsername('')
        }

    }
    function compiledFunctions(){
        displayName();
        calculateAge();
    }

  return (
    <div className="container">
        <div key={age}>{age !== null ? (
            <div>
                <div className="username">
                    <h2>{username !== "" ? `${username}` : ""}</h2>
                </div>
                <div className="display">
                    <div className="age-container">
                        <h3 className='age'>{age ?.years}</h3>
                        <p className='ageText'>Years</p>
                    </div>
                    <span className="counter-separator">:</span>
                    <div className="age-container">
                        <h3 className='ageNumber'>{age?.months}</h3>
                        <p className='ageText'>Months</p>
                    </div>
                    <span className="counter-separator">:</span>
                    <div className="age-container">
                        <h3 className='age'>{age?.days}</h3>
                        <p className='ageText'>days</p>
                    </div>
                </div>
                {username && (
                    <div className='endUsername'>
                    <h2>OLD</h2>
                </div>
                )}
            </div>
        ) : (
            <h1 className='header'>AGE DISPLAY </h1>
        )}
        </div>
        <div key={message} className="message">
            {message !== "" ? `${message}` : "Enter your birthday date to reveal your age." }
        </div>
        <div className="input-field">
            <div className="user-input">
                <input
                    type="text"
                    placeholder='Your Name (optional)' 
                    className='year' value={inputName} 
                    onChange={(e) => setInputName(e.target.value)} 
                    onKeyDown={(e) => {if(e.key === "Enter"){displayName();}}} 
                     />
                <input
                    className="year" 
                    type="date" 
                    placeholder="Year of birth" 
                    min="1900" 
                    max="2100" 
                    value={birthday} 
                    onChange={(e) => setbirthday(e.target.value)} 
                    onKeyDown={(e) => {if(e.key === "Enter"){calculateAge();}}} required 
                    />
            </div>
            <button type="button" className="submitBtn" onClick={compiledFunctions}>Enter</button>
        </div>
        <div className="info">Your age will appear above when you submit your birth year.</div>
    </div>
  )
}

export default Age