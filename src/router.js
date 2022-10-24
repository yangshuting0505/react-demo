import {lazy} from 'react';

const App = lazy(() => import(/* webpackChunkName: 'app' */ './pages/App'));

const routes = [
    {
        path: '/app',
        component: <App />,
    }
];

export default routes;