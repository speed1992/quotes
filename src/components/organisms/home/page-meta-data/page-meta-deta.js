import { Helmet } from 'react-helmet'
import { getPhilosopherFullName } from '../quotes-list/utils/utils'

const PageMetaData = ({ currentPhilosopher, options }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{getPhilosopherFullName({ currentPhilosopher, options })} Quotes</title>
            <meta name="description" content="Life changing quotations by greatest philosophers" />
            <link rel="canonical" href="https://speed1992.github.io/quotes/" />
        </Helmet>
    )
}

export default PageMetaData
