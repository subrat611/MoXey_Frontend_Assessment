import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import Header from "./components/Header/Header";
import Dialog from "./components/Dialog/Dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addNewUserFormSchema } from "./utils/formSchemas";
import DataTable from "./components/DataTable/DataTable";
import { userListColumns } from "./utils/reactTable/columns";

const data = [
  {
    status: "Active",
    userid: "U12345",
    firstName: "John",
    lastName: "Doe",
    userRole: "role1",
    email: "johndoe@example.com",
  },
  {
    status: "Blocked",
    userid: "U67890",
    firstName: "Jane",
    lastName: "Smith",
    userRole: "role2",
    email: "janesmith@example.com",
  },
  {
    status: "Pending",
    userid: "U54321",
    firstName: "Robert",
    lastName: "Johnson",
    userRole: "role3",
    email: "robertjohnson@example.com",
  },
  {
    status: "Suspended",
    userid: "U98765",
    firstName: "Emily",
    lastName: "Davis",
    userRole: "role2",
    email: "emilydavis@example.com",
  },
  {
    status: "Active",
    userid: "U45678",
    firstName: "Michael",
    lastName: "Brown",
    userRole: "role1",
    email: "michaelbrown@example.com",
  },
];

function App() {
  const [userList, setUserList] = useState(data);
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const methods = useForm({
    resolver: yupResolver(addNewUserFormSchema),
    defaultValues: {
      countryCode: "91",
      status: "pending",
      userid: `u${Math.floor(Math.random() * 500)}`,
    },
  });

  const onSubmit = (data) => {
    setUserList((prev) => [...prev, data]);
  };

  return (
    <div>
      <Header />
      <div className="mx-2 my-5 mx-md-5">
        <h4 className="m-0">Settings</h4>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <h6 className="m-0">Users list</h6>
          <button
            type="button"
            className="btn btn-success text-capitalize fw-medium"
            onClick={() => setAddUserDialogOpen(true)}
          >
            <i className="bi bi-plus-lg"></i>
            <span className="ms-1">add new user</span>
          </button>
        </div>

        <div className="mt-3">
          <DataTable data={userList} columns={userListColumns} />
        </div>

        <Dialog
          isOpen={addUserDialogOpen}
          handleDialogClose={setAddUserDialogOpen}
          handleFormSubmit={onSubmit}
          methods={methods}
        />
      </div>
    </div>
  );
}

export default App;
