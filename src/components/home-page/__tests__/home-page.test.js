import { waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { renderWithProviders } from '../../../common/jest-testing/test-utils/render-utils'
import HomePage from '../home-page'

describe('Homepage component', () => {
    // beforeEach(async () => {})

    test('should render without crash', async () => {
        await act(async () => waitFor(() => renderWithProviders(<HomePage />), { timeout: 5000000000 }))
    })
})
