import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import MarkAsRead from '../mark-as-read'

jest.mock('../../../common/utils/staticDataUtils', () => {
    return {
        removeReadData: jest.fn(),
    }
})

describe('MarkAsRead component', () => {
    beforeEach(() => {})
    test('MarkAsRead rendering', async () => {
        render(<MarkAsRead />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
    })
})
