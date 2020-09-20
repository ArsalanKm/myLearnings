import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '727234999419-f8bv4tbij91brm8lnp487qcakemm20ne.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
        })
    }


    onAuthChange = (isSignedIn) => {

        if (isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId())
        else
            this.props.signOut()


    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null)
            return null
        else if (this.props.isSignedIn === true)
            return (
                <button onClick={this.onSignOutClick}
                        className="ui red google button">
                    <i className="google icon">

                    </i>
                    SignOut
                </button>
            )
        else return (
                <button onClick={this.onSignInClick}
                        className="ui red google button">
                    <i className="google icon">

                    </i>
                    SignInWithGoogle

                </button>
            )
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}

}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)