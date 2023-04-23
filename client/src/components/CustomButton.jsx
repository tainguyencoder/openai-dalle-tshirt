import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} bg-gradient-to-r from-${snap.color}-400 to-${snap.color}-500 hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% ...`}
      type="button"
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton