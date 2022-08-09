import { useDeleteEmployeeMutation } from "../../services/Api";
import "./styles.css";


const DeleteDialogueBox = ({ id, onDialogue }) => {
  const [deleteEmployeeByID] = useDeleteEmployeeMutation();
  
 const handleClick=()=>{
    deleteEmployeeByID(id);
    onDialogue(false)
 }
  return (
    <div className="dialogue">
      <div className="dialoguecontent">
        <p className="p1">Are you sure?</p>
        <p className="p2">Do you really want to delete</p>
        <p className="p3">employee?</p>
        <div>
          <button onClick={() => handleClick()} className="bluebutton">Confirm</button>
          <button onClick={() => onDialogue(false)} className="greybutton">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialogueBox;
