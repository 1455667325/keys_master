import React from 'react';
import { Button, Modal } from 'antd';
class ImgLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: null,isError:true ,visible:false};
  }
  handleImageLoaded() {
    this.setState({ imageStatus: '已加载',isError:false });
  }

  handleImageErrored() {
    this.setState({ imageStatus: '加载失败',isError:true });
  }
  getFull=()=>{
    this.setState({
      visible:true
    })
  }
   handleCancel = () => {
    setTimeout(()=>{
      this.setState({ visible: false });
    })
  };
  render() {
    const { visible } = this.state;
    return (
      <div onClick={this.getFull} style={this.state.isError? {display:'none'}:{}}>
          <img width="40px"
          src={this.props.imageUrl}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          />
          <Modal width='65%'  title="页面快照" visible={visible} closable={false}
            footer={[
            <Button key="back" onClick={this.handleCancel}>
              关闭
            </Button>,

          ]}>
             <img width="100%"
              src={this.props.imageUrl}
            />
          </Modal>
      </div>
    );
  }
}
export default ImgLoad;
