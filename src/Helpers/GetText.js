import React, { Component } from 'react'


class GetText extends Component {
  constructor(props){
    super(props);
    this.state={
      text: null
    }
  }


  fetchTextFile(file) {
    fetch(file)
      .then((r) => r.text())
      .then(text => this.setState({ text }));
  }

  // function getSampleText() {

  //   Promise.all([
  //   fetch('sample.txt'),
  //   fetch('sample2.txt')
  //   ]).then(allResp => {
  //     let sampleResp = allResp[0];
  //     let sample2Resp = allResp[1];
  //     console.log(sampleResp);
  //     console.log(sample2Resp);
  //   })
  // }


  render(){

    let  { file } = this.props
  
    if (this.state.text === null){
      this.fetchTextFile(`./textFiles/${file}.txt`);
    }
    return(
      this.state.text && <span>
        {this.state.text}
      </span>
    )
  
  }
}

export default GetText;