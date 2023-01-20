import Button from "react-bootstrap/Button";
import InfoToast from "../InfoToast/InfoToast";

function Hook() {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px",
    // flexDirection: "column",
    gap: "30px"
  };

  const buttonStyles = {
    backgroundColor: "#D9BBF9",
    borderColor: "black",
    color: "black",
  }

  return (
    <div style={styles}>
      <h1>HOOK</h1>
      <InfoToast />
      <Button style={buttonStyles} size="lg">SKIP TO NEXT</Button>
    </div>
  );
}

export default Hook;
