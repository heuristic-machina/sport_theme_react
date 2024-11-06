function Table({ data, config, keyFn }) {


    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    });

    const renderRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td className='p-2' key={column.label}>{column.render(rowData)}</td>;
    });


        return (
            <tr className='border-b ' key={keyFn(rowData)}>
                <td className='flex justify-between'>{renderedCells}
                </td>
            </tr>
        );
    });

    return <table className='table-auto border-spacing-2'>
        <thead>
            <tr className='flex justify-between text-left border-b-2'>{renderedHeaders}
            </tr>
            <tbody className='table-row-group text-left'>
                {renderRows}
            </tbody>
        </thead>
    </table>
};

export default Table;

{/* {team.name}</td> */ }

{/* <th className='table-cell text-left'></th>
<th className='table-cell text-left'>Mascot</th>
<th className='table-cell text-left'>Score</th> */}