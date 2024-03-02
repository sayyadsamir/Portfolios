import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div>
       <div className="container text-center m-3">
          <h1 style={{margin:'20px'}}>PORTFOLIO.</h1>
        <div className="row">
          <div className="col-md-4">
             <img src="https://preetikaushik.com/static/media/one.48eaf710a81f9195a284.jpg" alt="" />
             <Link to="https://samir-sayyad.imgbb.com/">
              <span>Viwe Work </span>
             </Link>
          </div>https://www.flaticon.com/free-icon/right-arrow-of-straight-thin-line_60934?term=line&page=1&position=65&origin=search&related_id=60934
          <div className="col-md-4">
             <img src="https://preetikaushik.com/static/media/one.48eaf710a81f9195a284.jpg" alt="" />
              
          </div>

          <div className="col-md-4">
          <img src="https://preetikaushik.com/static/media/one.48eaf710a81f9195a284.jpg" alt="" />

          </div>
        </div>
       </div>
    </div>
  )
}

export default Project
