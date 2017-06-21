import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.lists) {
            return (<div>Select a user...</div>);
        }
        return this.props.lists.data.map((list) => {
            console.log(this.props.lists.data);
            return (
                <div>
                    <h2>{list.name}</h2>
                    <h3>Age: {list.rating}</h3>
                </div>
            );
        });
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        lists: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
