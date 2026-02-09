import React , {useState,useEffect, useContext} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ThemeContext } from '../../context/ThemeContext';
function CircleProgress({value,bg,title,icon}) {
  const { theme , toggleTheme } = useContext(ThemeContext
    );
    const [percentage, setpercentage] = useState();
    useEffect(() => {
        setpercentage(value)
    }, []);
    
 
  return (
    <Col>
        <Card className={`text-center mb-3 mx-auto ${bg } ${title}`} style={{  height: '266px' }}>
        <Card.Header className='p-3'> <i className='p-2 rounded-pill '> <FontAwesomeIcon icon={icon}/></i></Card.Header>
        <Card.Body>
          <Card.Title className='mb-4'>{title}</Card.Title>
          <CircularProgressbar  value={percentage} text={`${percentage}%`}  />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CircleProgress