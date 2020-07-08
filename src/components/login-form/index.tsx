import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch, login} from '../../apps/auth/actions';
import LoginForm, {FormData} from './LoginForm';

interface StateProps {}

interface ActionProps {
  login: (data: FormData) => Promise<any>;
}

interface OwnProps {}

type Props = StateProps & ActionProps & OwnProps;

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => ({
  login: (data: FormData) => dispatch(login(data.username, data.password)),
});

export class LoginFormContainer extends React.Component<Props> {
  handleSubmit = (data: FormData) => {
    return this.props.login(data);
  }
  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default connect(undefined, mapDispatchToProps)(LoginFormContainer);
