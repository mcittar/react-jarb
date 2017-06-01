import React from 'react';

class Gif extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.updateGif();
  }

  render() {
    let source = 'http://gph.is/1OLGL5d';
    let gif = <img className="gif" src={ source }></img>;
    if (this.props.gif.data){
      source = this.props.gif.data.image_url;
    }
    return(
      <section className="gif-container">
        { gif }
      </section>
    );
  }
}

export default Gif;
