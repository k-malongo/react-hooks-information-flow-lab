import React from 'react'

export default function Header({onDarkModeClick, isDarkMode}) {

    function buttonClick(){
        onDarkModeClick(isDarkMode)
    }
  return (
     <header>
        <h2>Shopster</h2>
        <button onClick={buttonClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
  )
}
