import React, { Component } from 'react'


class GetTextFile extends Component {
  constructor(props){
    super(props);
    this.state={
      text: '',
      splitText: '',
      json: ''
    }
  }



    fetchTextFile(file) {
      fetch(file)
        .then((response) => response.text())
        .then(text => this.setState({ splitText: text.split('---') }))
    }

    // fetchJSONFile() {
    //   fetch('./textFiles/partners/json.txt')
    //     .then(response => response.json())
    //     .then(text => this.setState({ json: {text} }))
    // }



  render(){

    let  { file } = this.props

    if (this.state.splitText ===''){
      this.fetchTextFile(`./textFiles/${file}.txt`);
    }

    // if (this.state.json ===''){
    //   this.fetchJSONFile();
    // }

    return(
      this.state.splitText
      
    )

  }
}

export default GetTextFile;