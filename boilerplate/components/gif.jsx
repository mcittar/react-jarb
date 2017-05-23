import React from 'react';

class Gif extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.updateGif();
  }

  render() {

    return(
      <section>
        { this.props.gif }
      </section>
    );
  }
}

export default Gif;
