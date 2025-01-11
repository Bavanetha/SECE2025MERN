import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Share your Thoughts</h1>
      <form>
        Email : <input type="email"></input>
        Query : <textarea rows="10"type="text"></textarea>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Contact
