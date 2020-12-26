import {useMemo} from 'react';
import {useTable} from 'react-table';
import {useSelector} from 'react-redux';
import '../../styles/App.css';
//date formating in table with date-fns
import {format} from 'date-fns';

// store column and data with useMemo first
//NOTE: can pass data in react-table using useSelector from redux
const Table = () => {
  const courses = useSelector((state) => state.courses);

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Title',
            accessor: 'title',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Select',
            accessor: 'dropdown',
          },
          {
            Header: 'Registered Date',
            accessor: 'date',
            // Cell: ({value}) => {
            //   return format(new Date(value), 'dd/mm/yyyy');
            // },
            //above code is for converting JSON date to wanted formate date using date-fns
          },
          {
            Header: 'Check Status',
            accessor: 'check1',
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(() => courses, []);

  const tableInstance = useTable({columns, data});

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
