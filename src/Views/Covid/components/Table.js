/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

// Libraries
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

// CSS
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

// Components
import { CreatedAtCellRenderer } from './CellRenderer';
import { InfoCellRenderer } from './CellRenderer';

const Table = ({ darkMode, rowData, setShareArray }) => {
  const [darkThemeClassState, setDarkThemeClassState] = useState('');

  // Helper Functions
  const customValueGetter = (params) => params.node.data.info;
  const customValueGetterContact = (params) => params.node.data.contact;
  const onSelectionChanged = (event) =>
    setShareArray(event.api.getSelectedNodes());

  useEffect(() => {
    const themeClassName = 'light'
      ? 'ag-theme-alpine-dark'
      : 'ag-theme-alpine';
    setDarkThemeClassState(themeClassName);
  }, ['light']);

  return (
    <div
      style={{ height: '70vh', marginTop: 20 }}
      className={darkThemeClassState}
    >
      <AgGridReact
        rowData={rowData}
        suppressRowClickSelection
        rowSelection='multiple'
        rowHeight={200}
        onSelectionChanged={onSelectionChanged}
        frameworkComponents={{
          infoCellRenderer: InfoCellRenderer,
          createdAtCellRenderer: CreatedAtCellRenderer,
        }}
        overlayLoadingTemplate={
          '<span className="ag-overlay-loading-center">Please wait while we are fetching the data</span>'
        }
        overlayNoRowsTemplate={
          rowData
            ? '<span >Please select your state and required resource type</span>'
            : '<span className="ag-overlay-loading-center">Please wait while we are fetching the data</span>'
        }
      >
        <AgGridColumn
          field='district'
          filter='agTextColumnFilter'
          floatingFilter
          sortable
          checkboxSelection
        />
        <AgGridColumn
          field='info'
          wrapText
          minWidth={200}
          flex={5}
          filter='agTextColumnFilter'
          valueGetter={customValueGetter}
          cellRenderer='infoCellRenderer'
          editable
          floatingFilter
          sortable
          cellEditor='agLargeTextCellEditor'
        />
        <AgGridColumn
          field='contact'
          filter='agTextColumnFilter'
          floatingFilter
          sortable
          editable
          wrapText
          flex={4}
          minWidth={160}
          cellEditor='agLargeTextCellEditor'
          valueGetter={customValueGetterContact}
          cellRenderer='infoCellRenderer'
        />
        <AgGridColumn field='createdAt' cellRenderer='createdAtCellRenderer' />
      </AgGridReact>
    </div>
  );
};

export default Table;
