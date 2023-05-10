import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import MarkAsRead from '../../../../../components/organisms/tools/mark-as-read/mark-as-read'

jest.mock('../../../../../common/utils/staticDataUtils', () => {
    return {
        removeReadData: jest.fn(),
    }
})

describe('MarkAsRead component', () => {
    test('MarkAsRead rendering', async () => {
        const setLocalTranslateKey = jest.fn()
        render(<MarkAsRead setLocalTranslateKey={setLocalTranslateKey} />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
    })
})
