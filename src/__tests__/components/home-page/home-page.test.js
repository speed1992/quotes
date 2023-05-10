/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { act } from 'react-dom/test-utils'
import { renderWithProviders } from '../../../common/jest-testing/test-utils/render-utils'
import HomePage from '../../../components/home-page/home-page'

describe('Homepage component', () => {
    test('should render without crash', async () => {
        await act(async () => renderWithProviders(<HomePage />), { timeout: Infinity })
    })
})
