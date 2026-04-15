import React, {useState} from 'react'

function RandomColor() {
    const [bgColor, setBgColor] = useState("rgb(133,100, 103)")
    const [otp, setOtp] = useState(111111)
    function colorChange(){
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        setBgColor(`rgb(${red}, ${green}, ${blue})`)
    }

    function otpGenerate(){
        setOtp(Math.floor(Math.random() * 1000000))
    }
  return (
    <>
      <div style={{
        height: "300px",
        width: "300px",
        backgroundColor: bgColor
      }}>
      </div>

      <button onClick={colorChange}>Random color</button>
      <h2>{otp}</h2> 
      <button onClick={otpGenerate}>Random OTP</button>
    </>
  )
}

export default RandomColor