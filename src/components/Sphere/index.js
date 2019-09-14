import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';
import { subscribe } from '../../rotate';

export default class Sphere extends PureComponent {
  state = {
    rotated: 0,
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    subscribe(this.handleRotate);
  }

  render() {
    const {onClick } = this.props;

    const { rotated } = this.state;
    return (
      <View>
      <Entity
        source={{
          gltf2: asset('sphere/scene.gltf'),
        }}
        style={{transform:[
          {translate: [-10, 0, -10]},
          {scaleX: 0.02 },
          { scaleY: 0.02 },
          { scaleZ: 0.02 },
          { rotateX: rotated },
        ]}}
      />
      <VrButton
      style={[
        styles.rootButton,
        { backgroundColor: open ? 'red': 'green' },
      ]}
      onClick={onClick}
    />
    </View>
    );
  }

  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 1 }));
  }
}
