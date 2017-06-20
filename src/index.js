import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';



import 'babel-polyfill';
//import React from 'react';
//import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App2 from './components/App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);


ReactDOM.render(
    	<Provider store={store}>		
		<App />
	</Provider>
	,
	document.getElementById('root')
);
registerServiceWorker();



/*

ReactDOM.render(
    <Provider store={store}>
        <App2 />
    </Provider>,
    document.getElementById('root2')
);
*/

