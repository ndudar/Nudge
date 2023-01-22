import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const DipStick = () => {

  const dipStickStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: ".5rem 1rem .5rem 1rem",
    border: "1px solid #ebebeb",
    flexBasis: "100%"
  }

  const target = useRef(null)

  const handleClick = (val, newVariant) => {
    target.current.innerHTML = "X";
    target.current.className = `rounded-circle btn btn-${newVariant}`
    //maybe helper function here for average?
  }

  //function that calculates average for export 

  const popover = (
    <Popover target={target.current}>
      <Popover.Body>
        <ButtonGroup>
        <Button onClick={() => {handleClick(100, 'success')}} value={100} variant="success">Yes</Button>
        <Button onClick={() => {handleClick(50, 'warning')}} value={50} variant="warning">Kinda</Button>
        <Button onClick={() => {handleClick(0, 'danger')}} value={0} variant="danger">No</Button>
        </ButtonGroup>
      </Popover.Body>
    </Popover>
  )

  //target.current.innerHTML === '!'
  //target.current.className ==="rounded-circle btn btn-outline-dark"

  return (
    <>
    <div style={dipStickStyle}>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button ref={target} className="rounded-circle" variant='outline-dark'>!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button ref={target} className="rounded-circle" variant='outline-dark'>!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button ref={target} className="rounded-circle" variant='outline-dark'>!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button ref={target} className="rounded-circle" variant='outline-dark'>!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button ref={target} className="rounded-circle" variant='outline-dark'>!</Button>
      </OverlayTrigger>
    </div>
    </>
  )
}

//export a const of the average data


export default DipStick;
