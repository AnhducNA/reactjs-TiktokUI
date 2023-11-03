import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes} from "~/routes";
import DefaultLayout from "~/components/Layout/DefaultLayout";
import {Fragment} from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        Layout = Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page/>
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
