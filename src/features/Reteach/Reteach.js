import Button from "react-bootstrap/Button";
import InfoToast from "../InfoToast/InfoToast";
import Timer from "../Timer/Timer";

const Reteach = () => {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px",
    gap: "10px"
  };

  const nextButtonStyles = {
    backgroundColor: "#B47AEA",
    borderColor: "black",
    color: "black",
  }

  const split = {
    flexBasis: "100%",
    height: "0"
  }

  const quitButton = {
    flexBasis: "50%"
  }

  return (
    <div style={styles}>
      <h1>RETEACH</h1>
      <div></div>
      <InfoToast />
      <div style={split}></div>
      <Timer targetTimeMins={10}/>
      <div style={split}></div>
      <Button style={nextButtonStyles} size="lg" href="/closing">SKIP TO NEXT</Button>
      <div style={split}></div>
      <div style={quitButton}></div>
      <Button variant="danger" size="sm" href="/reflection">END LESSON</Button>
    </div>
  );
}

export default Reteach;
