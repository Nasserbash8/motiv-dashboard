import React, { useContext } from 'react'
import CarCard from "../components/widgets/card";
import { Container, Form, Row } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
const Booking = () => {
  const { theme , toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`booking ${theme}`}>   
                <Container fluid className=' p-3'>
                      <h3 className={`title ${theme}`}> Booking</h3>
                      <div className= {` ${theme} filtring my-3 d-md-flex d-block justify-content-between`}>
                          <Form className='d-flex mb-3 '>
                            <Form.Select size="sm"  className='rounded-pill'> 
                               <option>New</option>
                            </Form.Select>

                            <Form.Select size="sm"  className='rounded-pill' >
                               <option>Toyota</option>
                            </Form.Select>
                          </Form>
                            <span className='display-style text-center'>
                            

                            <i className='rounded-pill gird-style p-2 me-1   fa fa-th gird'></i>
                            <i className='rounded-pill list-style p-2 active fa fa-sliders'></i>
                            </span>
                           
                      </div>
                      <CarCard/>
          </Container>
              </div>
             
         

         
       

     
  )
}

export default Booking