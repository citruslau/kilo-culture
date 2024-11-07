import React, { useMemo } from 'react';
import MaterialReactTable from "material-react-table";
import { userData } from '../../data';
import './DataGrid.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DataGrid = () => {
    const columns = useMemo(() => [
        {
            accessorKey: "name.firstName",
            header: 'First Name',
        },
        {
            accessorKey: "name.lastName",
            header: 'Last Name',
        },
        {
            accessorKey: "membershipType",
            header: "Membership Type",
        },
<<<<<<< Updated upstream
    ], []); 

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: "dark"
            }
        }), [] // Empty dependency array to ensure it only recomputes once
    );
=======
    ], []);

    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode: "dark"
            }
        })
        , []);
>>>>>>> Stashed changes

    return (
        <div className="table-container">
            <ThemeProvider theme={theme}>
                <MaterialReactTable columns={columns} data={userData} />
            </ThemeProvider>
        </div>
    );
<<<<<<< Updated upstream
};
=======
}
>>>>>>> Stashed changes

export default DataGrid;
