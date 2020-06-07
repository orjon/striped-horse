import { Component } from 'react'


class GetText extends Component {
  constructor(props){
    super(props);
    this.state={
      text: ''
    }
  }

  async readTextFile(file) {
    var rawFile = await new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                var allText = rawFile.responseText;
                // console.log("GotText: ", allText);
                // var arr = allText.split('/')
                // console.log("split: ", ...arr);
                this.setState({
                    text: allText
                });
            }
        }
    };
    rawFile.send(null);
  }



  render(){

    let  { file } = this.props

    if (this.state.text ===''){
      this.readTextFile(`./textFiles/partners/${file}.txt`);
    }
    return(
      this.state.text
    )

  }
}

export default GetText;