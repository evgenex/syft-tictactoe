import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from './reducers'
import rootSaga from './sagas'
import rootEpic from './epics'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const epicMiddleware = createEpicMiddleware()
  const middlewares = [sagaMiddleware, epicMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, initialState, composedEnhancers)

  sagaMiddleware.run(rootSaga)
  epicMiddleware.run(rootEpic)

  return store
}
