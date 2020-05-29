import React, { Component } from 'react'

class PartnerBlock extends Component {
  render(){
    let { partner, text } = this.props
    // let imagePath = '../images/partners/'
    return(
    <div className='PartnerBlock flexColumn center'>
      <img className='PartnerImage' src={require(`../images/partners/${partner}.png`)} alt={`${partner} logo`}/>
      <div className='PartnerText flexColumn middle'>
        <strong>{partner}</strong>
        <p className='wordBreak'>{text}</p>
      </div>
    </div>
    )
  }
}

export default PartnerBlock