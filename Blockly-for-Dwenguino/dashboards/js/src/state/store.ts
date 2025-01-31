import { configureStore } from '@reduxjs/toolkit'
import { testReducer, increment } from './features/test_slice'
import { oauthReducer } from './features/oauth_slice'
import { userReducer } from './features/user_slice'
import { notificationReducer } from "./features/notification_slice"
import { classGroupReducer } from "./features/class_group_slice"

const store = configureStore({
    reducer: {
        test: testReducer,
        oauth: oauthReducer,
        user: userReducer,
        notification: notificationReducer,
        classGroup: classGroupReducer
    }
})

// You can only update the store using the dispatch method
// Kind of like triggering an event
store.dispatch({type: 'counter/increment'})

store.dispatch(increment());

// Selectors can be used to extract more complex information from the store
const selectCounterValue = (state:any) => state.value

const currentValue = selectCounterValue(store.getState())

export { store }