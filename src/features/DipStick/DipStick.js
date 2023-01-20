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

  const popover = (
    <Popover>
      <Popover.Body>
        <ButtonGroup>
        <Button variant="success">Yes</Button>
        <Button variant="warning">Kinda</Button>
        <Button variant="danger">No</Button>
        </ButtonGroup>
      </Popover.Body>
    </Popover>
  )

  return (
    <>
    <div style={dipStickStyle}>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      </OverlayTrigger>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      </OverlayTrigger>
    </div>
    </>
  )
}

export default DipStick;
