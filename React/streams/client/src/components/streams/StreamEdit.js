import React from 'react'
import {connect} from 'react-redux'
import {fetchStream, EditStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        this.props.EditStream(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <div>
                <h3>Edit stream</h3>
                <StreamForm
                    initialValues={{
                        title: this.props?.stream?.title,
                        description: this.props?.stream?.description
                    }}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, EditStream})(StreamEdit)