import Button from "react-bootstrap/Button";

function Hook() {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px",
    flexDirection: "column",
    gap: "30px"
  };

  const buttonStyles = {
    backgroundColor: "#D9BBF9",
    borderColor: "black",
    color: "black"
  }

  return (
    <div style={styles}>
      <h1>HOOK</h1>
      <Button style={buttonStyles} size="lg">SKIP TO NEXT</Button>
    </div>
  );
}

export default Hook;
