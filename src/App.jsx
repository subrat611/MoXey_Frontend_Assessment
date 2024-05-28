import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import Header from "./components/Header/Header";
import Dialog from "./components/Dialog/Dialog";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addNewUserFormSchema } from "./utils/formSchemas";
import DataTable from "./components/DataTable/DataTable";
import { userListColumns } from "./utils/reactTable/columns";
import toast, { Toaster } from "react-hot-toast";
import { defaultMessage } from "./utils";

const data = [
  {
    status: "active",
    userid: "U12345",
    firstName: "John",
    lastName: "Doe",
    userRole: "role1",
    email: "johndoe@example.com",
  },
  {
    status: "blocked",
    userid: "U67890",
    firstName: "Jane",
    lastName: "Smith",
    userRole: "role2",
    email: "janesmith@example.com",
  },
  {
    status: "active",
    userid: "U54321",
    firstName: "Robert",
    lastName: "Johnson",
    userRole: "role3",
    email: "robertjohnson@example.com",
  },
  {
    status: "pending",
    userid: "U98765",
    firstName: "Emily",
    lastName: "Davis",
    userRole: "role2",
    email: "emilydavis@example.com",
  },
  {
    status: "active",
    userid: "U45678",
    firstName: "Michael",
    lastName: "Brown",
    userRole: "role1",
    email: "michaelbrown@example.com",
  },
  {
    status: "active",
    userid: "U45678",
    firstName: "Brown",
    lastName: "Davis",
    userRole: "role1",
    email: "Davis@example.com",
  },
];

function App() {
  const [userList, setUserList] = useState(data);
  const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
  const [countries, setCountries] = useState([]);

  const methods = useForm({
    resolver: yupResolver(addNewUserFormSchema),
    defaultValues: {
      countryCode: "",
      status: "pending",
    },
  });

  const onSubmit = (data) => {
    const newData = { ...data, userid: uuidv4() };
    setUserList((prev) => [...prev, newData]);
    toast.success("User added successfully" || defaultMessage);
    methods.reset();
    setAddUserDialogOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="mx-2 my-5 mx-md-5">
        <h4 className="m-0">Settings</h4>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <h6 className="m-0 text-secondary text-capitalize">users list</h6>
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
          countries={countries}
          setCountries={setCountries}
        />
      </div>

      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#0DC384",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#ef233c",
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
