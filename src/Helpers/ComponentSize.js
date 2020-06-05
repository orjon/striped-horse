import React, { Component } from 'react';
import '../styles/ComponentSize.scss';


class ComponentSize extends Component {
  state = {
    dimensions: null,
  };

  componentDidMount() {
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
  }

  renderContent() {
    const { dimensions } = this.state;

    return (
      <div>
        width: {dimensions.width}
        <br />
        height: {dimensions.height}
      </div>
    );
  }



  render() {
    const { dimensions } = this.state;

    return (
      <div className="ComponentSize Hello" ref={el => (this.container = el)}>
        {dimensions && this.renderContent()}
      </div>
    );
  }



  // render(){


  //   return(
  //     <div className='ComponentSize' id='ComponentSize'>
  //       words
  //       {/* {width} */}
  //     </div>
  //   )
  // }

}

export default ComponentSize;

