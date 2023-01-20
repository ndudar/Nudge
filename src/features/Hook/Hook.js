import Button from "react-bootstrap/Button";
import InfoToast from "../InfoToast/InfoToast";

function Hook() {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px",
    gap: "20px"
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
      <h1>HOOK</h1>
      <InfoToast />
      <div style={split}></div>
      <Button style={nextButtonStyles} size="lg">SKIP TO NEXT</Button>
      <div style={split}></div>
      <div style={quitButton}></div>
      <Button variant="danger" size="sm">END LESSON</Button>
    </div>
  );
}

export default Hook;
