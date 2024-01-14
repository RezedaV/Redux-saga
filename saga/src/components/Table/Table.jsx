import { useMemo} from "react";
import { useTable} from 'react-table';
import './Table.module.css'

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'Birth year',
        accessor: 'birth_year',
    },
    {
        Header: 'Eye color',
        accessor: 'eye_color',
    },
    {
        Header: 'Hair color',
        accessor: 'hair_color',
    },
    {
        Header: 'Skin color',
        accessor: 'skin_color',
    },
    {
        Header: 'Height',
        accessor: 'height',
    },
    {
        Header: 'Mass',
        accessor: 'mass',
    },
];

const Table = ({data}) => {
    const columns = useMemo(() => COLUMNS, [])
    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>
                                {cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    )
}

export default Table
