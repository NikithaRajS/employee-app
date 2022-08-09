import InputField from "../components/input-field/InputField";
import InputSelect from "../components/input-select/InputSelect";
import "../styles/styles.css";
import Header from "../components/header/Header";
import SideBar from "../components/side-bar/SideBar";
import { useState, useEffect } from "react";
import {
  useCreateEmployeeMutation,
  useGetEmployeeQuery,
  useUpdateEmployeeMutation,
} from "../services/Api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [createEmp, result] = useCreateEmployeeMutation();
  const [updateEmp, rslt] = useUpdateEmployeeMutation();
  const { id } = useParams();
  const { data: employeeDetails } = useGetEmployeeQuery(id);

  const goToList = () => {
    navigate(`/list`);
  };

  useEffect(() => {
    if (result.isSuccess) {
      navigate(`/list`);
    }
    if(rslt.isSuccess){
      navigate(`/list`);
    }
  }, [result,rslt]);

  useEffect(() => {
    if (employeeDetails?.data) {
      setState({
        name: employeeDetails?.data?.name,
        id: employeeDetails?.data?.id,
        joining_date: employeeDetails?.data?.joining_date,
        experience: employeeDetails?.data?.experience,
        role: employeeDetails?.data?.role,
        status: employeeDetails?.data?.status,
        line1: employeeDetails?.data?.address.line1,
        line2: employeeDetails?.data?.address.line2,
        city: employeeDetails?.data?.address.city,
        state: employeeDetails?.data?.address.state,
        zipcode: employeeDetails?.data?.address.zipcode,
        username:employeeDetails?.data?.username,
        
      });
    }
  }, [employeeDetails]);

  const [state, setState] = useState({
    name: "",
    id: "",
    joining_date: "",
    experience: "",
    role: "Admin",
    status: "Active",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zipcode: "",
    username:"",
    password:"",
  });

  const onChangeValue = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const onClickSubmit = () => {
    let uname="user";
    let pass="password";
    if(state.role==="Admin"){
      uname="Admin"
      pass="admin"
    }
    const payload = {
      name: state.name,
      joining_date: state.joining_date,
      role: state.role,
      status: state.status,
      address: {
        line1: state.line1,
        line2: state.line2,
        city: state.city,
        state: state.state,
        zipcode: Number(state.zipcode),
      },
      experience: Number(state.experience),
      username: uname,
      password: pass,
      departmentId: "5883e2f2-ee00-43b2-9797-1942a01c81d5",
    };
    if (id) {
      updateEmp({id, payload} );
    } else {
      createEmp(payload);
    }
  };

  return (
    <div>
      <Header />
      <SideBar />
      <div>
        <div className="main section1">
          <h1 className="mainheading">
            {id ? "Edit Employee" : "Create Employee"}
          </h1>
        </div>
      </div>
      <div id="form" className="main formsection">
        <div className="employee-details">
          <div className="input-box">
            <InputField
              label="Employee Name"
              defaultvalue={state.name}
              placeholder="Employee Name"
              onChange={(value) => onChangeValue("name", value)}
            />
          </div>

        

          <div className="input-box">
            <InputField
              label="Joining Date"
              placeholder="Joining Date"
              defaultvalue={state.joining_date}
              onChange={(value) => onChangeValue("joining_date", value)}
            />
          </div>

          <div className="input-box">
            <InputSelect
              defaultvalue={state.role}
              label="Role"
              options={[
                { key: "ADMIN", label: "Admin" },
                { key: "DEV", label: "Developer" },
                { key: "QA", label: "QA" },
                { key: "DEVOPS", label: "Dev Ops" },
              ]}
              handleClick={(value) => onChangeValue("role", value)}
            />
          </div>

          <div className="input-box">
            <InputSelect
              defaultvalue={state.status}
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
              placeholder="Experience"
              defaultvalue={state.experience}
              onChange={(value) => {
                onChangeValue("experience", value)
                console.log(value);
              }}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Address Line 1"
              placeholder="Address Line 1"
              defaultvalue={state.line1}
              onChange={(value) => onChangeValue("line1", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Address Line 2"
              placeholder="Address Line 2"
              defaultvalue={state.line2}
              onChange={(value) => onChangeValue("line2", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="City"
              placeholder="City"
              defaultvalue={state.city}
              onChange={(value) => onChangeValue("city", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="State"
              placeholder="State"
              defaultvalue={state.state}
              onChange={(value) => onChangeValue("state", value)}
            />
          </div>

          <div className="input-box">
            <InputField
              label="Zip Code"
              placeholder="Zip Code"
              defaultvalue={state.zipcode}
              onChange={(value) => onChangeValue("zipcode", value)}
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
          <button
            type="submit"
            className="button button1"
            onClick={() => onClickSubmit()}
            id="subbtn"
          >
            {id ? "Edit" : "Create"}
          </button>
          <button className="button button2" onClick={() => goToList()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
