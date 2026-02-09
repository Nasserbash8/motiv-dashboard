import React from 'react'
import LineAreaChart from '../../widgets/lineAreaChart'
import BarHChart from '../../widgets/barChart'
import { Col, Row } from 'react-bootstrap'

function Charts() {
  return (
    <div className='charts nb-3 '>
    <Row>
      <Col md={6}>
      <div className='chart rounded mb-3 p-3'>
      <BarHChart/>
      </div>
     
      </Col>

      <Col md={6}>
      <div className='chart rounded mb-3 p-3'>
      <LineAreaChart/>
      </div>
      </Col>
    </Row>
 
  
  </div>
  )
}

export default Charts