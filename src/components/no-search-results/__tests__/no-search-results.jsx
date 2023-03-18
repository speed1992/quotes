import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { NoSearchResults } from '../no-search-results'

test('loads and displays greeting', async () => {
    render(<NoSearchResults />)
    expect(screen.getByRole('heading')).toHaveTextContent('No search results found!')
})
