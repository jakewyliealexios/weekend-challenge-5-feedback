import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


class Next2Button extends Component {

  goToNext2 = () => {
    // alert("Going to Page 2 of 4!");
    console.log('Freebie props', this.props);
    this.props.history.push('/2');
  }

  render() {
    return (
        <button onClick={this.goToNext2}>Next-></button>
    )
  }
}

// export default Next2Button;
// export default connect(mapReduxStateToProps)(Home);
export default withRouter(Next2Button);