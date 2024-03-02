import React from 'react'
import Homes from './Homes.css'

function Home() {
  return (
    <div>
      <div className='back'>
        <div className="container-fluid text-center" style={{overflow:'hidden'}}>
          <div className="row">

            <div className="col-md-6">
              <div className="img_home">
                <img src="https://img.freepik.com/free-photo/orange-yellow-paper-sheets_23-2148320455.jpg?size=626&ext=jpg&uid=R136820087&ga=GA1.1.1961238112.1707119554&semt=ais" alt="" className='w-100' />
                <img src="https://photos.app.goo.gl/DRqJaDCBikEfDbzZ6" alt="" />

              </div>
            </div>

            <div className="col-md-6 text-white">
              <div className='title_home'>
                <span>Hello!!!</span>
                <h1>I'm Samir Sayyad</h1>
                <span>I'm Passionate <span style={ { color: 'orange' } }>Web Developer</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
