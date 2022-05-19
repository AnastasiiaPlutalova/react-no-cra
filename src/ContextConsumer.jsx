import React from 'react';
import { FirstContext, SecondContext } from './context';

class ContextConsumer extends React.Component {
  render() {
    return <>
      <div>{this.context}</div>
      <div>
        <SecondContext.Consumer>{({text}) => (text)}</SecondContext.Consumer>
      </div>
    </>;
  }
}

ContextConsumer.contextType = FirstContext;

export default ContextConsumer;
