import React, { Component } from 'react';

class Partners extends Component {

  constructor(props){
    super(props);
    this.state={
      text1: '',
      text2:''
    }
  }

  async readTextFile(file) {
    var rawFile = await new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                var allText = rawFile.responseText;
                // console.log("allText: ", allText);
                this.setState({
                    text1: allText
                });
                // console.log('TEXT 1:', allText)
            }
        }
    };
    rawFile.send(null);
  }

  fetchTextFile(file) {
      // fetch(file)
      //   // .then(response => response.json())
      //   .then(text2 => this.setState({ text2 }));
    }


  render(){

    if (this.state.text1 ===''){
      this.readTextFile("./textFiles/page1.txt");
      console.log('TEXT 1:', this.state.text1)
    }

    // if (this.state.text2 ===''){
    //   this.fetchTextFile("./textFiles/page1.txt");
    //   console.log('TEXT 2:', this.state.text2)
    // }

   
    return(
      <section className='Partners'>
        Partners
        {this.state.text1}
      </section>
    )
  }
}

export default Partners;