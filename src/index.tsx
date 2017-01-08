import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Layout from './components/Layout';
import './globalStyles.scss';
import routes from './routes';

const root = document.getElementById('root');

function render() {
	ReactDOM.render(
		<AppContainer>
			{ routes }
		</AppContainer>,
		root,
	);
}

render();

// `hot` is dynamically defined
declare var module: any;
if (module.hot) {
	module.hot.accept('./components/Layout', render);
}
