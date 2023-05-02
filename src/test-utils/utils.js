import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

export function renderWithProviders(ui, { preloadedState = {}, store, ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
