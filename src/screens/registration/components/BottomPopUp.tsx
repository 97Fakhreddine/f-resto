// @ts-nocheck
import { HEIGHT, View, WIDTH } from "@/ui";
import React from "react";
import Modal from "react-native-modal";
class BottomPopUp extends React.Component {
  state: { isOpen: boolean };
  constructor(
    props: { componentProps: JSX.Element; } | any
  ) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  close = () => {
    this.setState({ isOpen: false });
  };
  show = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;
    const ComponentProps: JSX.Element = this.props.componentProps;
    const deviceHeight = HEIGHT;
    const deviceWidth = WIDTH;
    return (
      <Modal
        isVisible={isOpen}
        onSwipeComplete={this.close}
        backdropOpacity={0.5}
        onBackdropPress={this.close}
        swipeDirection="down"
        deviceHeight={deviceHeight}
        deviceWidth={deviceWidth}
        hasBackdrop={true}
        style={{
          margin: 0,
          backgroundColor: "none",
        }}
      >
        <View
          style={{
            maxHeight: deviceHeight * 0.4,
          }}
        >
          <ComponentProps />
        </View>
      </Modal>
    );
  }
}

export default BottomPopUp;