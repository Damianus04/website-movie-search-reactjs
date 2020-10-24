import React, { Fragment, Component } from 'react';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <Fragment>
                    <div className="container">
                        <div className="alert alert-warning alert-dismissible fade show">
                            <h4 className="alert-heading"><i className="fa fa-warning"></i> Warning!</h4>
                            <h3>Something went wrong</h3>
                            <p>check your spelling</p>
                            <hr/>
                            <p className="mb-0">Once you have filled all the details, click on the 'Next' button to continue.</p>
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                        </div>
                    </div>
                </Fragment>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary