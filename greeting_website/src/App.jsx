import React from 'react'

function App () {
  let currDate = new Date()
  currDate = currDate.getHours()
  let gretting = ''
  const cssStyle = {}

  if (currDate >= 1 && currDate < 12) {
    gretting = 'Good Morning'
    cssStyle.color = 'red'
  } else if (currDate >= 12 && currDate < 19) {
    gretting = 'Good Afternoon'
    cssStyle.color = 'green'
  } else {
    gretting = 'Good Night'
    cssStyle.color = 'blue'
  }
  return (
    <>
      <div>
        <h1>
          Hello sagar Yadav , <span style={cssStyle}>{gretting}</span>
        </h1>
      </div>
    </>
  )
}

export default App;
