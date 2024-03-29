import React from 'react'
import { connect } from 'react-redux'
import { sendErrorDetails } from '../../apis/commonServices'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, hasError: false }
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return { error, hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        if (window.location.hostname !== 'localhost') sendErrorDetails({ userName: this.props?.userName ? this.props?.userName : 'nonLoggedIn', errorDetails: { error, errorInfo } })
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>Something went wrong.</h1>
                    <div>Error: {JSON.stringify(this.state.error)}</div>
                </>
            )
        }

        return this.props.children
    }
}

const mapStateToProps = (state) => ({
    userName: state?.philosophersData?.userName,
})

const ConnectedErrorBoundary = connect(mapStateToProps, null)(ErrorBoundary)

export default ConnectedErrorBoundary
