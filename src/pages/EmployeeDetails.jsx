import Header from "../components/header/Header";
import SideBar from "../components/side-bar/SideBar";
import "../styles/styles.css";
import { MdOutlineModeEditOutline } from "react-icons/md";
import DetailsBox from "../components/details-box/DetailsBox";
import AddressDetailsBox from "../components/address-details/AddressDetailsBox";
import {  useGetEmployeeQuery } from "../services/Api";
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EmployeeDetails = () => {

  const navigate = useNavigate();

  const {id}=useParams();
  const {data}=useGetEmployeeQuery(id);
  console.log(data)

  const goToUpdatePage=(id)=>{
      navigate(`/update/${id}`);
  }
  
  return (
    <div>
      <Header />
      <SideBar />
      <div className="main section1">
        <div className="mainheading">
          <h1 style={{ marginRight: "82%" }}>Employee Details</h1>
          <div className="createemp" onClick={()=>goToUpdatePage(id)}>
            <div className="circle">
              <MdOutlineModeEditOutline />
            </div>
            Edit
          </div>
        </div>
      </div>
      <div class="outerempdet">
        <div class="empdet">
          <DetailsBox label="Employee Name" value={data?.data?.name}/>
          <DetailsBox label="Employee ID" value={data?.data?.id} />
          <DetailsBox label="Joining Date" value={data?.data?.joining_date} />
          <DetailsBox label="Role" value={data?.data?.role} />
          <div>
            <div className="label">Status</div>
            <div className={data?.data?.status}>{data?.data?.status}</div>
          </div>
          <DetailsBox label="Experience" value={`${data?.data?.experience} Years`}/>
        </div>
        <div className="secondrow">
          <AddressDetailsBox
            label="Address"
            line1={data?.data?.address.line1}
            line2={data?.data?.address.line2}
            city={data?.data?.address.city}
            state={data?.data?.address.state}
            pincode={data?.data?.address.zipcode}
            
          />
          <DetailsBox label="Employee ID Proof" value="" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
