import React from 'react'
import Modal from "../modal";
import history from "../../history";
import {connect} from 'react-redux'
import {deleteStream, fetchStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    actions() {
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}
                    className="ui button negative">
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancle
                </Link>
            </React.Fragment>
        )
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream ?'
        } else {
            return `Are you sure you want to delete the stream with title ${this.props.stream.title}`
        }

    }

    render() {


        return (<div>

            <Modal title="Delete a Stream"
                   content={this.renderContent()}
                   actions={this.actions()}
                   onDismiss={() => history.push('/')}

            />
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}

}
export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete)