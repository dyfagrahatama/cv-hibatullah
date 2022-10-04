import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio 1" />
          </div>
          <h3>Metaverse and NFT Web</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className='btn' target='_blank'>Github</a>
            <a href="https://meta-simple-web.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div> 
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio 2" />
          </div>
          <h3>LSTM Covid Prediction</h3>
          <div className="portfolio__item-cta">
            <a href="https://colab.research.google.com/drive/11F4OzKHsg7gZ1O9LeCL7gi3LiqFqJlwz?usp=sharing" className='btn' target='_blank'>File</a>
            <a href="https://drive.google.com/file/d/1Lw1XYmAdlhAM8lN7O-zWBQLbf-85akCP/view?usp=sharing" className='btn btn-primary' target='_blank'>Document</a>
          </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio 3" />
          </div>
          <h3>3D Compilation</h3>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/file/d/1GS6gJQYuedHYax1adk7FciirrHYx7kfN/view?usp=sharing" className='btn' target='_blank'>Resource</a>
            <a href="https://drive.google.com/file/d/1KtS255pk9CNVD6OmcH0tLhTf-W9p-SKF/view?usp=sharing" className='btn btn-primary' target='_blank'>Preview</a>
          </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio 4" />
          </div>
          <h3>Library Note App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/dyfagrahatama/react-web-catatan-simple" className='btn' target='_blank'>Github</a>
            <a href="https://subtle-halva-175bfa.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio 5" />
          </div>
          <h3>Cashier Desktop App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/dyfagrahatama/TA_DKP_HIBATULLAH-DYFA-GRAHATAMA_21120120130058_PROGRAM-TOKO-LAPTOP" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/dyfagrahatama/TA_DKP_HIBATULLAH-DYFA-GRAHATAMA_21120120130058_PROGRAM-TOKO-LAPTOP" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio 6" />
          </div>
          <h3>Simple Learning Web Tour</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/dyfagrahatama/learn-material-ui-kw" className='btn' target='_blank'>Github</a>
            <a href="https://learn-material-ui-dyfa.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div> 
        </article>
      </div>
    </section>
  )
}

export default Portfolio