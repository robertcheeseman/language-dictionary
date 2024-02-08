import React from 'react';
import './Definitions.css';

const Definitions = (word, category, meanings) => {
  return (
    <div>
        {word === ""? (<span className='subTitle'>Start by typing a word in the search box</span>) : ("Something")} 
    </div>
  )
}

export default Definitions