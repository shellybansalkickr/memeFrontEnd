import React,{Component} from 'react';

export class CodaIframe extends Component{
  constructor(props){
    super(props);
  }
 
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ {__html: this.props.iframe} } />
      </div>
    );
  }
};