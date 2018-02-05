import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class Home extends Component {

constructor(props){
  super(props);
    this.state={isToggleOn:false};
    this.handleClick=this.handleClick.bind(this);
}
handleClick(){
  this.setState(prevState=> ({
    isToggleOn: !prevState.isToggleOn
  }));
}
ComponentWillMount(){
  this.handleClick=this.handleClick.bind(this);
}
ComponentDidMount(){
}

  render() {
    return (
      <div className="Home">
        This is Home
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'On':'Off'}
        </button>
      </div>
    );
  }
}


export default Home;
