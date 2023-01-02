import React from 'react'
import { Row, Carousel } from 'react-bootstrap'
import img1 from '../assets/img/documentation/1.JPG'
import img2 from '../assets/img/documentation/2.jpg'
import img3 from '../assets/img/documentation/3.JPG'
import img4 from '../assets/img/documentation/4.jpeg'
import img5 from '../assets/img/documentation/5.JPG'
import img6 from '../assets/img/documentation/6.JPG'
import img7 from '../assets/img/documentation/7.JPG'
import img8 from '../assets/img/documentation/8.JPG'
import img9 from '../assets/img/documentation/9.JPG'
import img10 from '../assets/img/documentation/10.jpg'
import img11 from '../assets/img/documentation/11.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Gallery