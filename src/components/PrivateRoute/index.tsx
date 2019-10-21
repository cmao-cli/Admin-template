import { getUserInfo } from 'src/services/api';
import * as React from 'react';

class PrivateRoute extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:true,
    };
  }
  async componentDidMount() {
    // const res = await getUserInfo();
    // if (res.status !== 200) {
    // } else {
    //   this.setState({
    //     is_login:true,
    //   });
    // }
  }
  render() {
    const { isLogin } = this.state;
    return isLogin && this.props.render();
  }
}

export default PrivateRoute;