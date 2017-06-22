import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'

//this will replace the ListButtonBar Component
    //rename first in data to shortListName
class UserList extends Component {

    renderList() {
        console.log(this);
        return <div className="list-button-bar">
            {this.props.lists.map((list) => {
                return (
                    <div className="list-button"
                        key={list.first}
                        onClick={() => this.props.selectUser(list)}
                    >
                        {list.listName}
                    </div>
                );
            })}
        </div>
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        lists: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
