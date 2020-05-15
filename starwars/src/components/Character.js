// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import bootstrap from 'bootstrap';
import {CardBody, CardTitle, CardText, Col, CardImg} from 'reactstrap';

const Card = styled.div`
    margin:: 15px;
    padding: 1%;
`

const Character = props =>{
// console.log("props given to character", props)
    return(
    
        // <Col xs='6' xl='6' md='6'>
    <Card><CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardImg src={props.image}  alt={props.name}/>
            <CardText>Status: {props.status}</CardText>
            <CardText>Species: {props.species}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Found in {props.episodes} episodes</CardText>
    </CardBody></Card>
    // </Col>
    )
}

export default Character;