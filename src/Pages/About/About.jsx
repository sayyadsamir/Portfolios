import React from 'react'
import Abouts from './Abouts.css'


function About() {
  return (
    <div>

      <div className="container">
        <div className="row">
          <h1 className='intro'>Introduction.</h1>
          <div className="col-md-12 text-center">
            <img src="https://assets-global.website-files.com/64c3822aefe376c79ca86541/64f8f77684bd62090ac287cf_cropped-Blue%20And%20Yellow%20%20Minimalist%20International%20Podcast%20Day%20Banner-2.jpg" alt="" className='imgs' />
          </div>

          <div className="col-md-7 mt-5">
            <div className="about_me">
              <h2>About Me.</h2>
              <p>
                Hi, I’m Samir Sayyad and I am <b>designer & developer</b> who dream making the world better place by creatin gcaptivating products. I am also very active for international clients. <br /> Available for new projects
              </p>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <div className='biography'>
              <h2>Biography .</h2>
              <h6><span>Name:</span>Sayyad Samir</h6>
              <h6><span>Address:</span> Maharashtra, Beed</h6>
              <h6><span>Study	:</span> AhmedNagar Collage, AhmedNagar</h6>
              <h6><span>Degree:</span> Bachelor's</h6>
              <h6><span>Email:</span> samir.sayyad73501@gmail.com</h6>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default About
