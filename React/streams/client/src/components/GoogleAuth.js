import React from 'react'

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '727234999419-f8bv4tbij91brm8lnp487qcakemm20ne.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
        })
    }


    onAuthChange = () => {

        this.setState({
                isSignedIn: this.auth.isSignedIn.get()
            }
        )
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null)
            return null
        else if (this.state.isSignedIn)
            return (
                <button onClick={()=>this.auth.signOut()} className="ui red google button">
                    <i className="google icon">

                    </i>
                    SignOut
                </button>
            )
        else return (
                <button onClick={()=>this.auth.signIn()} className="ui red google button">
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

export default GoogleAuth