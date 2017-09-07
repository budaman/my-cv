import React, { Component } from 'react';

class Intro extends Component {

  state = {
    imgMount: false,
    title: false
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        imgMount:true,
        title: true
      })
    })

  }
  render() {

    const { imgMount, title } = this.state

    return (
      <div className="intro-cont">
        <img
          className={"light-pic " + (imgMount ?  'light-pic-animation' :  '') }
          src="img/light.jpg"
          alt="smth"
        />
        <div className={"quote-text " + (title ? 'title-animation' : '')}>Creativity takes courage
          <br/>
          <div><i className="author">- Henri Matisse</i></div>
        </div>
      </div>
    );
  }
}

export default Intro;
