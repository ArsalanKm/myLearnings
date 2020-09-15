import React from "react";
import {connect} from 'react-redux'
import {fetchPost} from '../actions'
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    results = []

    componentDidMount() {
        this.props.fetchPost()
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div key={post.id} className='item'>
                    <i className="large middle aligned icon user">

                    </i>
                    <div className="content">
                        <div className="description">
                            <h2>
                                {post.title}
                            </h2>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            )
        })
    }

    render() {

        return <div className="ui relaxed divided list">
            {this.renderList()}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}

}

export default connect(mapStateToProps, {fetchPost})(PostList)