import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    ischecked: false,
  };

  render() {
    const { ischecked } = this.state;
    return (
      <Checkbox 
        
        title='Hot Offers'
        status={ischecked ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ ischecked: !ischecked }); }}
      />
    );
  }
}