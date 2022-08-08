import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/styles.css";
import { MdOutlineModeEditOutline } from "react-icons/md";
import DetailsBox from "../components/DetailsBox";
import AddressDetailsBox from "../components/AddressDetailsBox";

const EmployeeDetails = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="main section1">
        <div className="mainheading">
          <h1 style={{ marginRight: "82%" }}>Employee Details</h1>
          <div className="createemp">
            <div className="circle">
              <MdOutlineModeEditOutline />
            </div>
            Edit
          </div>
        </div>
      </div>
      <div class="outerempdet">
        <div class="empdet">
          <DetailsBox label="Employee Name" value="Nikitha Raj" />
          <DetailsBox label="Employee ID" value="E-123456" />
          <DetailsBox label="Joining Date" value="11/07/2022" />
          <DetailsBox label="Role" value="Full Stack" />
          <div>
            <div className="label">Status</div>
            <div className="value active">Active</div>
          </div>
          <DetailsBox label="Experience" value="2 Years" />
        </div>
        <div className="secondrow">
          <AddressDetailsBox
            label="Address"
            line1="House No:25,Kochi"
            line2="Pincode:691301"
          />
          <DetailsBox label="Employee ID Proof" value="" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
