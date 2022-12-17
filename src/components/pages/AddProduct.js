import React from 'react';
import '../../App.css';

const Create = () => {
  return (
    <div className='create'>
      <form>
        <label>Item name:</label>
        <input type = "text" required/>
        <label>Item description:</label>
        <textarea type = "text" required/>
        <label>Item cost</label>
        <input type = "number" required/>
        <button>Post</button>
      </form>
    </div>
  )
}

export default Create;