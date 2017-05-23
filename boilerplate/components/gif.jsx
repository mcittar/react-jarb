import React from 'react';

class Gif extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.updateGif();
  }

  render() {

    return(
      <section>

      </section>
    );
  }
}

export default Gif;
