import React, { Component } from 'react'


class GetText extends Component {
  constructor(props){
    super(props);
    this.state={
      text: ''
    }
  }


  fetchTextFile(file) {
    fetch(file)
      .then((response) => response.text())
      .then(text => this.setState({ text }));
  }

  // fetchText(file){
  //   Promise.all(
  //     fetch(file)
  //   ).then(response =>
  //     response.text()
  //   ).then(text =>
  //     this.setState({ text }))
  // }

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
  
    if (this.state.text === ''){
      this.fetchTextFile(`./textFiles/${file}.txt`);
    }
    return(
      this.state.text
    )
  
  }
}

export default GetText;