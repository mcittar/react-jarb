import React from 'react';

class Gif extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.updateGif();
  }

  render() {
    let gif;
    if (this.props.gif.data){
      gif = <img src={ this.props.gif.data.image_url }></img>;
    }
    return(
      <section>
        { gif }
      </section>
    );
  }
}

export default Gif;
