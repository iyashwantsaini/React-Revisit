import "./GRID.css";
import TextEditor from "../TextEditor/TextEditor";
import WebRTC from "../WebRTC/WebRTC";

function GRID() {
  return (
    <div className="row">
      <div className="col80">
        <TextEditor />
      </div>
      <div className="col20">
        <WebRTC />
      </div>
    </div>
  );
}

export default GRID;
