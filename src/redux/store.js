import { configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { contacts } from './contacts/contacts-reducers';

const store = configureStore({
    reducer: contacts,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== 'production',
});

export { store };