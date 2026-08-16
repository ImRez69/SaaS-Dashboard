import type { ReactNode } from "react";
import type { Users, User } from "../../types/user";

type Columns = {
  key: keyof User;
  label: string;
  render?: (value: string | number, item?: string) => ReactNode;
}[];

interface TableProps {
  columns: Columns;
  items: Users;
}

export default function Table({ columns, items = [] }: TableProps) {
  return (
    <div className="mx-auto h-100 w-full flex-1 overflow-auto rounded-xl shadow-sm max-md:w-80">
      <table className="bg-surface w-full border-collapse">
        <TableHead columns={columns} />
        <TableBody columns={columns} items={items} />
      </table>
    </div>
  );
}

interface TableHeadProps {
  columns: Columns;
}

function TableHead({ columns }: TableHeadProps) {
  return (
    <thead>
      <TableRow>
        <TableHeaderCells columns={columns} />
      </TableRow>
    </thead>
  );
}

interface TableBodyProps {
  columns: Columns;
  items: Users;
}

function TableBody({ columns, items }: TableBodyProps) {
  return (
    <tbody className="divide-border divide-y">
      {items.map((item) => (
        <TableRow key={item.id}>
          <TableDataCells item={item} columns={columns} />
        </TableRow>
      ))}
    </tbody>
  );
}

interface TableHeaderCellsProps {
  columns: Columns;
}

function TableHeaderCells({ columns }: TableHeaderCellsProps) {
  return (
    <>
      {columns.map((column) => (
        <th
          key={column.key}
          className="border-border bg-border/20 border-b px-4 py-6 whitespace-nowrap first:rounded-tr-xl last:rounded-tl-xl"
        >
          {column.label}
        </th>
      ))}
    </>
  );
}

interface TableDataCellsProps {
  columns: Columns;
  item: User;
}

function TableDataCells({ item, columns }: TableDataCellsProps) {
  return (
    <>
      {columns.map((column) => {
        const value = item[column.key];

        if (column.render) {
          return (
            <td key={column.key} className="max-w-100 p-4 whitespace-nowrap">
              {column.render(value, item.name)}
            </td>
          );
        }

        return (
          <td key={column.key} className="max-w-100 p-4 whitespace-nowrap">
            {value}
          </td>
        );
      })}
    </>
  );
}

interface TableRow {
  children: ReactNode;
}

function TableRow({ children }: TableRow) {
  return (
    <tr className="even:bg-border/20 hover:bg-border/80 text-center transition-[background-color]">
      {children}
    </tr>
  );
}
