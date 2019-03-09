import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import menuReducer from './reducers/home';

export default createStore(
	combineReducers({
		home: homeReducer
	}),
	applyMiddleware(thunk)
);