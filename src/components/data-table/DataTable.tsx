import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table";

import { useEffect, useState } from "react";
import "./datatable.scss";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchValue?: string;
  pageSize?: number;
  isLoading?: boolean;
  notFoundMainText?: string;
  notFoundSubText?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchValue = "",
  pageSize: initialPageSize = 10,
  isLoading = false,
  notFoundMainText = "No data found",
  notFoundSubText = "Try changing your filters",
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    setGlobalFilter(searchValue);
  }, [searchValue]);

  const handlePageSizeChange = (newPageSize: number) => {
    table.setPageSize(newPageSize);
  };

  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const pageSize = table.getState().pagination.pageSize;
  const totalItems = table.getFilteredRowModel().rows.length;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 3;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= maxVisiblePages) {
        for (let i = 2; i <= maxVisiblePages + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - maxVisiblePages + 1) {
        pages.push("...");
        for (let i = totalPages - maxVisiblePages; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="datatable-container">
      <div className="table-wrapper">
        <table className="datatable">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, headerIndex) => {
                  const canSort = header.column.getCanSort();

                  return (
                    <th
                      key={header.id}
                      className={`${canSort ? "sortable" : ""} ${
                        headerIndex === 0 ? "first-column" : ""
                      } ${
                        headerIndex === headerGroup.headers.length - 1
                          ? "last-column"
                          : ""
                      }`}
                      onClick={
                        canSort
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      <div className="header-content">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="loading-cell">
                  Loading...
                </td>
              </tr>
            ) : table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell, cellIndex) => (
                    <td
                      key={cell.id}
                      className={`${cellIndex === 0 ? "first-column" : ""} ${
                        cellIndex === row.getVisibleCells().length - 1
                          ? "last-column"
                          : ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="empty-cell">
                  <div className="empty-state">
                    <div className="empty-icon">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                    <div className="empty-text">
                      <h3>
                        {searchValue
                          ? "No matching results found"
                          : notFoundMainText}
                      </h3>
                      <p>
                        {searchValue
                          ? `No results match "${searchValue}". Try adjusting your search.`
                          : notFoundSubText}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="showing-info">
          <span>Showing</span>
          <select
            value={pageSize}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
            disabled={isLoading}
            className="page-size-select"
          >
            {[10, 20, 30, 40, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>out of {totalItems}</span>
        </div>

        <div className="pagination-controls">
          <button
            className="pagination-button nav-button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage() || isLoading}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="page-numbers">
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                className={`page-number ${
                  page === currentPage ? "active" : ""
                } ${page === "..." ? "ellipsis" : ""}`}
                onClick={() => {
                  if (typeof page === "number") {
                    table.setPageIndex(page - 1);
                  }
                }}
                disabled={page === "..." || isLoading}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="pagination-button nav-button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage() || isLoading}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
