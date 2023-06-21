import React from 'react'

const Eror = () => {
  return (
    <div className='eror-container'>
      <title>404 - File or directory not found.</title>
        <body className='text-eror'>
            <div id='header'>
              <h1>Server Eror</h1>
            </div>
            <div id='content'>
              <div className='content-container'>
                <fieldset>
                  <h2>404 - File or directory not found.</h2>
                  <h3>
                    "The resource you are looking for might have been removed, had its name changed, or is temporarliy unavailable."
                  </h3>
                </fieldset>
              </div>
            </div>
        </body>
    </div>
  )
}

export default Eror