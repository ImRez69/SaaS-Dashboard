import type { ReactNode } from "react";
import type { Columns, Items, Item } from "../../types/table";

interface TableProps<T> {
  columns: Columns<T>;
  items: Items<T>;
}

export default function Table<T extends { id: string | number }>({
  columns,
  items = [],
}: TableProps<T>) {
  return (
    <div className="mx-auto h-100 w-full flex-1 overflow-auto rounded-xl shadow-sm max-md:w-80">
      <table className="bg-surface w-full border-collapse">
        <TableHead columns={columns} />
        <TableBody columns={columns} items={items} />
      </table>
    </div>
  );
}

interface TableHeadProps<T> {
  columns: Columns<T>;
}

function TableHead<T>({ columns }: TableHeadProps<T>) {
  return (
    <thead>
      <TableRow>
        <TableHeaderCells columns={columns} />
      </TableRow>
    </thead>
  );
}

interface TableBodyProps<T> {
  columns: Columns<T>;
  items: Items<T>;
}

function TableBody<T extends { id: string | number }>({
  columns,
  items,
}: TableBodyProps<T>) {
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

interface TableHeaderCellsProps<T> {
  columns: Columns<T>;
}

function TableHeaderCells<T>({ columns }: TableHeaderCellsProps<T>) {
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

interface TableDataCellsProps<T> {
  columns: Columns<T>;
  item: Item<T>;
}

function TableDataCells<T>({ item, columns }: TableDataCellsProps<T>) {
  return (
    <>
      {columns.map((column) => {
        const value = String(item[column.key]);

        if (column.render) {
          return (
            <td key={column.key} className="max-w-100 p-4 whitespace-nowrap">
              {column.render(value, item)}
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
