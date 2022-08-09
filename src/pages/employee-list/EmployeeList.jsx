import Header from "../../components/header/Header";
import SideBar from "../../components/side-bar/SideBar";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import CustomSelect from "../../components/custom-select/CustomSelect";
import { BsPlusLg } from "react-icons/bs";
import { useGetAllEmployeesQuery } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import DeleteDialogueBox from "../../components/delete-dialogue-box/DeleteDialogueBox";
import { useState } from "react";

const EmployeeList = () => {
  const { data } = useGetAllEmployeesQuery();

  const [dialogue, setDialogue] = useState({
    id: "",
    isLoading: false,
  });

  const navigate = useNavigate();
  const goToNextPage = (id) => {
    navigate(`/list/${id}`);
  };
  const goToCreatePage = () => {
    navigate(`/create`);
  };

  const deleteEmployee = (e, id) => {
    e.stopPropagation();
    setDialogue({
      id: id,
      isLoading: true,
    });
    console.log(dialogue.id);
  };

  const areYouSureDelete = (value) => {
    setDialogue({
      isLoading: value,
    });
  };
  const editEmployee = (e, id) => {
    e.stopPropagation();
    navigate(`/update/${id}`);
  };

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
              <div className="createemp" onClick={() => goToCreatePage()}>
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
              <tr onClick={() => goToNextPage(elem.id)}>
                <td>{elem.name}</td>
                <td>{elem.id}</td>
                <td>{elem.joining_date}</td>
                <td>{elem.role}</td>
                <td>
                  <div className={elem.status}>{elem.status}</div>
                </td>
                <td>{elem.experience} Years</td>
                <td>
                  <div>
                    <FaRegTrashAlt
                      style={{ color: "#FA4242" }}
                      onClick={(e) => deleteEmployee(e, elem.id)}
                    />
                    <MdOutlineModeEditOutline
                      style={{ color: "#10AAC0", marginLeft: "20px" }}
                      onClick={(e) => editEmployee(e, elem.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {dialogue.isLoading && (
        <DeleteDialogueBox
          id={dialogue.id}
          onDialogue={(value) => {
            areYouSureDelete(value);
          }}
        />
      )}
    </div>
  );
};

export default EmployeeList;
