import Button from "react-bootstrap/Button";

function StartLesson() {
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
      <h1>NUDGE</h1>
      <Button style={buttonStyles} size="lg" href="/hook">START LESSON</Button>
    </div>
  );
}

export default StartLesson;
