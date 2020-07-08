import * as React from 'react';
import {connect} from 'react-redux';
import {createAccount, Dispatch} from '../../apps/auth/actions';
import SignupForm, {FormData} from './SignupForm';

interface StateProps {}

interface ActionProps {
  createAccount: (data: FormData) => Promise<any>;
}

interface OwnProps {}

type Props = StateProps & ActionProps & OwnProps;

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  createAccount: (data: FormData) => dispatch(createAccount(data.username, data.password)),
});

export class SignupFormContainer extends React.Component<Props> {
  handleSubmit = (data: FormData) => {
    return this.props.createAccount(data);
  }
  render() {
    return (
      <SignupForm
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(undefined, mapDispatchToProps)(SignupFormContainer);
