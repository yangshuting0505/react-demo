import {
    Routes,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';
import routes from './router.js';

const Layout = () => {
    return (
        <Router>
            <Routes>
                {
                    routes.map(({exact, path, component}) => {
                        return (
                            <Route
                                key={path}
                                exact={exact}
                                path={path}
                                element={component}
                            />
                        );
                    })
                }
            </Routes>
      </Router>
    );
}

export default Layout;
