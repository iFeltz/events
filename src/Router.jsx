import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './components/pages/Home';
import Event from './components/pages/Event';

const routes = [
	{
		path: '/',
		exact: true,
		component: withRouter(Home)
	},
	{
		path: '/event/:id',
		exact: true,
		component: withRouter(Event)
	}
];

function Router() {
	return (
		<BrowserRouter>
			{routes.map((route, i) => (
				<Route
					key={i}
					exact={route.exact}
					path={route.path}
					render={props => {
						console.log(props);
						return (
							// pass the sub-routes down to keep nesting
							<route.component key={props.location.key} {...props} />
						);
					}}
				/>
			))}
		</BrowserRouter>
	);
}

export default Router;
