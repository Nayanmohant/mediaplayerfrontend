import React from 'react'
import {Col, Container,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
function Landingpage() {
  return (
   <>
   <Container>
    <Row>
      <Col sm={12} md={6}>
      <h3>Welcome to <span className='text-warning'>Media player</span></h3>
      <p style={{textAlign:"justify"}} className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aspernatur cum vitae quos. Perferendis corrupti praesentium fuga velit exercitationem deleniti quis delectus recusandae at odit, similique est totam asperiores nesciunt!</p>
    <Link to={'/home'}>  <button className='btn btn-warning mt-5'>Get started</button></Link> 

      </Col>
      <Col SM={12} md={6} className='d-flex justify-content-center'>
      <img src="https://static.vecteezy.com/system/resources/previews/008/653/792/non_2x/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg" alt="no image" className='w-50'/>
      </Col>
    </Row>
    </Container>

    <div className='container-fluid mt-5'>
    <div className='row'>
      <div className='col-md-2'></div>

     <div className='col-md-8'>
     <h3 className='text-center'>Features</h3>

      <div className='row mt-5'>
        <div className='col-md-4'>
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2023/10/10/13/26/13-26-45-476_512.gif" className="w-100" height={'250px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-md-4 mt-4 mt-md-0'>
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2022/08/31/01/18/01-18-22-555_512.gif"  className="w-100" height={'250px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

      </div>
      <div className='col-md-4 mt-4 mt-md-0'>
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2023/03/13/01/19/01-19-02-222_512.gif"  className="w-100" height={'250px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
      <div className='col-md-2'>
      </div>

    </div>
   
    </div>

     <div className='container-fluid mt-5'>
      <div className='row mt-5'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <div className='row border p-5 rounded'>
            <div className='col-md-6'>
              <h4 className='text-warning'>Simple fast and powerful</h4>
              <p><span className='fs-5'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur possimus alias, illo voluptatibus eligendi doloribus voluptate ad recusandae sequi quidem nihil dolor laboriosam fugit error temporibus quaerat. Saepe, qui!</p>
              <p><span className='fs-5'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur possimus alias, illo voluptatibus eligendi doloribus voluptate ad recusandae sequi quidem nihil dolor laboriosam fugit error temporibus quaerat. Saepe, qui!</p>
              <p><span className='fs-5'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur possimus alias, illo voluptatibus eligendi doloribus voluptate ad recusandae sequi quidem nihil dolor laboriosam fugit error temporibus quaerat. Saepe, qui!</p>
            </div>
            <div className='col-md-6'>
              
              <iframe width="100%" height="400npm " src="https://www.youtube.com/embed/roz9sXFkTuE" title="Aaj Ki Raat | Stree 2 | Tamannaah Bhatia | Sachin-Jigar | Madhubanti | Divya | Amitabh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>

      </div>
     </div>

   </>
  )
}

export default Landingpage
