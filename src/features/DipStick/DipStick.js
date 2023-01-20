import Button from "react-bootstrap/Button";

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

  return (
    <>
    <div style={dipStickStyle}>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
      <Button className="rounded-circle" variant="outline-dark">!</Button>
    </div>
    </>
  )
}

export default DipStick;
