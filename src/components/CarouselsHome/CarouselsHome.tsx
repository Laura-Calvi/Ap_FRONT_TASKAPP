import { Carousel } from "react-bootstrap"

const CarouselsHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
        className="d block w-100"
        style={ {maxHeight: "500px", objectFit: 'cover'}}
        src="src/assets/images/pexels-mohammad-danish-891059.jpg" alt="slide1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d block w-100"
        style={ {maxHeight: "500px", objectFit: 'cover'}}
        src="src/assets/images/02.jpg" alt="slide1"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d block w-100"
        style={ {maxHeight: "500px", objectFit: 'cover'}}
        src="src/assets/images/03.jpg" alt="slide1"  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselsHome