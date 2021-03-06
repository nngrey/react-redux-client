import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
import SignIn from '../components/SignIn';


// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAuthState: state.authState
    // mappedLaneState: state.laneState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedSignIn: (values) => dispatch(authActions.signIn(values))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
