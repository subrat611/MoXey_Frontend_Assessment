/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "./datatable.module.css";
import { useEffect, useState } from "react";

const DataTable = (props) => {
  const { data, columns } = props;
  const [tableData, setTableData] = useState(data);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: tableData,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnFilters,
    },
  });

  useEffect(() => {
    table.getColumn("status")?.setFilterValue("active");
  }, [table]);

  const handleRemoveData = (id) => {
    setTableData((prevData) => prevData.filter((row) => row.userid !== id));
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                className="table-active text-center border"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  const columnWidth =
                    header.column.columnDef.width || "columnWidthAuto";

                  return (
                    <th
                      scope="col"
                      key={header.id}
                      className={`py-3 ${styles[columnWidth]}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
          <tr className="border">
            <th className="py-3">
              <select
                className="form-select text-capitalize text-center"
                onChange={(event) =>
                  table.getColumn("status")?.setFilterValue(event.target.value)
                }
              >
                <option value="active" selected>
                  active
                </option>
                <option value="blocked">Blocked</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </th>
            <th className=""></th>
            <th>
              <input
                type="text"
                className="form-control"
                value={table.getColumn("email")?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table.getColumn("email")?.setFilterValue(event.target.value)
                }
              />
            </th>
            <th>
              <input
                type="text"
                className="form-control"
                value={table.getColumn("firstName")?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table
                    .getColumn("firstName")
                    ?.setFilterValue(event.target.value)
                }
              />
            </th>
            <th>
              <input
                type="text"
                className="form-control"
                value={table.getColumn("lastName")?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table
                    .getColumn("lastName")
                    ?.setFilterValue(event.target.value)
                }
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {table.getRowModel().rows?.length > 0 &&
            table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="text-center border">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={`${cell.id}-${cell.row?.original._id}`}>
                        {flexRender(cell.column.columnDef.cell, {
                          ...cell.getContext(),
                          handleRemoveData,
                        })}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
