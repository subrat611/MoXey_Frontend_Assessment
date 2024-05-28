/* eslint-disable no-unused-vars */
export const userListColumns = [
  {
    accessorKey: "status",
    header: () => <span className="text-uppercase">status</span>,
    cell: (props) => {
      const { row } = props;

      return (
        <span className="badge text-uppercase py-2 px-3 custom-badge">
          {row.original?.status}
        </span>
      );
    },
    width: "columnWidthSm",
  },
  {
    accessorKey: "userid",
    header: () => <span className="text-uppercase">userid</span>,
    cell: (props) => {
      const { row } = props;
      return <p>{row.original?.userid}</p>;
    },
    width: "columnWidthmd",
  },
  {
    accessorKey: "email",
    header: () => <span className="text-uppercase">email address</span>,
    cell: (props) => {
      const { row } = props;
      return <p>{row.original?.email}</p>;
    },
    width: "columnWidthSm",
  },
  {
    accessorKey: "firstName",
    header: () => <span className="text-uppercase">first name</span>,
    cell: (props) => {
      const { row } = props;
      return <p>{row.original?.firstName}</p>;
    },
    width: "columnWidthSm",
  },
  {
    accessorKey: "lastName",
    header: () => <span className="text-uppercase">last name</span>,
    cell: (props) => {
      const { row } = props;
      return <p>{row.original?.lastName}</p>;
    },
    width: "columnWidthSm",
  },
  {
    accessorKey: "userRole",
    header: () => <span className="text-uppercase">user role</span>,
    cell: (props) => {
      const { row } = props;
      return (
        <p className="text-success text-uppercase fw-medium">
          {row.original?.userRole ? row.original?.userRole : "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "expiryBy",
    header: () => <span className="text-uppercase">expiry by</span>,
    cell: (props) => {
      const { row } = props;
      return (
        <p className="text-success">
          {row.original?.expiryBy ? row.original?.expiryBy : "-"}
        </p>
      );
    },
  },
  {
    accessorKey: "actions",
    header: () => <span className="text-uppercase">actions</span>,
    cell: (props) => {
      const { row, handleRemoveData } = props;

      return (
        <div className="btn-group">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle text-capitalize d-flex align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            actions
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          <ul className="dropdown-menu p-1">
            <li
              className="action-remove"
              onClick={() => handleRemoveData(row.original?.userid)}
            >
              Remove User
            </li>
          </ul>
        </div>
      );
    },
  },
];
