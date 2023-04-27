import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import philosophersDataReducer from '../../components/home-page/homePageRedux/homePageRedux'

export function renderWithProviders(ui, { preloadedState = {}, store = configureStore({ reducer: { philosophersData: philosophersDataReducer }, preloadedState }), ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
