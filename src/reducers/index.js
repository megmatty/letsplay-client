import * as ActionTypes from '../actions/index';

const initialState = {list: WIP};

export default function List(state=initialState, action) {
	switch(action.type) {
		case ActionTypes.CHANGE_LIST_WTP:
			this.setState({
        list: WTP
      });
		case ActionTypes.CHANGE_LIST_ATF:
			this.setState({
        list: ATF
      });
  	case ActionTypes.CHANGE_LIST_WIP:
			this.setState({
      	list: WIP
    	});
    default:
    	return state;
	}
}