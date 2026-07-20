export default function Table({ columns, items = [] }) {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-sm">
      <table className="bg-surface w-full border-collapse">
        <TableHead columns={columns} />
        <TableBody columns={columns} items={items} />
      </table>
    </div>
  );
}

function TableHead({ columns }) {
  return (
    <thead>
      <TableRow>
        <TableHeaderCells columns={columns} />
      </TableRow>
    </thead>
  );
}

function TableBody({ columns, items }) {
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

function TableHeaderCells({ columns }) {
  return (
    <>
      {columns.map((column) => (
        <th
          key={column.key}
          className="border-border bg-border/20 border-b px-4 py-6 first:rounded-tr-xl last:rounded-tl-xl"
        >
          {column.label}
        </th>
      ))}
    </>
  );
}

function TableDataCells({ item, columns }) {
  return (
    <>
      {columns.map((column) => {
        const value = item[column.key];

        if (column.render) {
          return (
            <td key={column.key} className="max-w-100 p-4">
              {column.render(value, item)}
            </td>
          );
        }

        return (
          <td key={column.key} className="max-w-100 p-4">
            {value}
          </td>
        );
      })}
    </>
  );
}

function TableRow({ children }) {
  return (
    <tr className="even:bg-border/20 hover:bg-border/80 text-center transition-[background-color]">
      {children}
    </tr>
  );
}
