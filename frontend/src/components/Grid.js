
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function Grid() {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((response) => response.json())
            .then((rowData) => setRowData(rowData));
    }, []);

    const columnDefs = [
        { headerName: 'Athlete', field: 'athlete', sortable: true, filter: true },
        { headerName: 'Age', field: 'age', sortable: true, filter: true },
        { headerName: 'Country', field: 'country', sortable: true, filter: true },
        { headerName: 'Year', field: 'year', sortable: true, filter: true },
        { headerName: 'Sport', field: 'sport', sortable: true, filter: true },
        { headerName: 'Gold', field: 'gold', sortable: true, filter: true },
        { headerName: 'Silver', field: 'silver', sortable: true, filter: true },
        { headerName: 'Bronze', field: 'bronze', sortable: true, filter: true },
        { headerName: 'Total', field: 'total', sortable: true, filter: true },
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
            <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
        </div>
    );
}

export default Grid;
