import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import {teal} from '@mui/material/colors';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>

            <Route index element={<Home/>}/>
            <Route path="create" element={<Create/>}/>

        </Route>
    )
);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        moha: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
        },
        // primary: {main: teal[500], light: teal[500]}
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
