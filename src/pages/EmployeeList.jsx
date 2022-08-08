import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import CustomSelect from "../components/CustomSelect";
import { BsPlusLg } from "react-icons/bs";
import { useGetAllEmployeesQuery } from "../services/Api";

const EmployeeList = () => {
  
  const {data} = useGetAllEmployeesQuery();
  
  return (
    <div>
      <Header />
      <SideBar />
      <div>
        <div className="main section1">
          <div className="mainheading">
            <h1 style={{ marginRight: "60%" }}>Employee List</h1>
            <div className="sidesection">
              <span style={{ fontSize: "15px", marginRight: "15px" }}>
                Filter By
              </span>
              <CustomSelect />
              <div className="createemp">
                <div className="circle">
                  <BsPlusLg />
                </div>
                Create Employee
              </div>
            </div>
          </div>
        </div>
        <table className="table main">
          <thead>
            <tr align="left" className="subheading">
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Joinig Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((elem) => (
              <tr>
                <td>{elem.name}</td>
                <td>{elem.id}</td>
                <td>{elem.joining_date}</td>
                <td>{elem.role}</td>
                <td>
                  <div className="active">{elem.status}</div>
                </td>
                <td>{elem.exp} Years</td>
                <td>
                  <div>
                    <FaRegTrashAlt style={{ color: "#FA4242" }} />
                    <MdOutlineModeEditOutline
                      style={{ color: "#10AAC0", marginLeft: "20px" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
