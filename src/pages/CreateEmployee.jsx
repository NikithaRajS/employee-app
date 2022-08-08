import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import "../styles/styles.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";

const CreateEmployee = () => {
  const [state, setState] = useState({
    name: "",
    id: "",
    joindate: "",
    exp: "",
    role: "",
    status: "",
    addres: "",
  });

  const onChangeValue = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <Header />
      <SideBar />
      <div>
        <div className="main section1">
          <h1 className="mainheading">Create Employee</h1>
        </div>
      </div>
      <form action="#" id="form" className="main formsection">
        <div className="employee-details">
          <div className="input-box">
            <InputField
              label="Employee Name"
              defaultvalue="Employee Name"
              onChange={(value) => onChangeValue("name", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Employee ID"
              defaultvalue="Employee ID"
              onChange={(value) => onChangeValue("id", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Joining Date"
              defaultvalue="Joining Date"
              onChange={(value) => onChangeValue("joindate", value)}
            />
          </div>

          <div className="input-box">
            <InputSelect
              label="Role"
              options={[
                { key: "DEV", label: "Developer" },
                { key: "QA", label: "QA" },
                { key: "DEVOPS", label: "Dev Ops" },
              ]}
              handleClick={(value) => onChangeValue("role", value)}
            />
          </div>

          <div className="input-box">
            <InputSelect
              label="Status"
              options={[
                { key: "Active", label: "Active" },
                { key: "Probation", label: "Probation" },
                { key: "Inactive", label: "Inactive" },
              ]}
              handleClick={(value) => onChangeValue("status", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Experience"
              defaultvalue="Experience"
              onChange={(value) => onChangeValue("exp", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Address"
              defaultvalue="Address"
              onChange={(value) => onChangeValue("address", value)}
            />
          </div>

          <div className="input-box">
            <span className="details">Upload ID Proof</span>
            <div className="input-box-id">
              <span className="details choose-file">Choose File</span>
              <div>
                <label for="upload-photo" className="browse">
                  Browse
                </label>
                <input type="file" id="upload-photo" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <input
            type="submit"
            className="button button1"
            value="Create"
            onclick="validate()?debounce_leading():val_error()"
            id="subbtn"
          />
          <button className="button button2" onclick={console.log("Clicked")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
