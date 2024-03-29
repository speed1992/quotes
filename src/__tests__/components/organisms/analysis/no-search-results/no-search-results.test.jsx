import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NoSearchResults from '../../../../../components/organisms/analysis/no-search-results/no-search-results'

test('NoSearchResults rendering', async () => {
    render(<NoSearchResults />)
    expect(screen.getByRole('heading')).toHaveTextContent('No search results found!')
})
