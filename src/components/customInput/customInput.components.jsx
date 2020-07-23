import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import './customInput.styles.scss';

class CustomInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      showEmojis: false,
    };
  }

  handeChange = (e) => {
    this.setState({ inputText: e }, () => {
      this.props.setMessage(this.state.inputText);
      // console.log(this.state.inputText);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(
      {
        showEmojis: false,
      },
      () => {
        this.props.sendMessage(e);
        this.setState({ inputText: '' });
      }
    );
  };

  showEmojis = (e) => {
    this.setState({
      showEmojis: true,
    });
  };

  closeMenu = (e) => {
    this.setState({
      showEmojis: false,
    });
  };

  addEmoji = (e) => {
    let emoji = e.native;
    // console.log(emoji);
    this.setState(
      {
        inputText: this.state.inputText + emoji,
      },
      () => {
        this.props.setMessage(this.state.inputText);
      }
    );
  };
  render() {
    const { message, setMessage, sendMessage } = this.props;
    // console.log(message);
    return (
      <div className="custom-input__outer-Container">
        {this.state.showEmojis ? (
          <span className="emoji-bar">
            <Picker
              className="emoji-bar"
              onSelect={(event) => this.addEmoji(event)}
            />
          </span>
        ) : null}
        <div className="customInputOuterContainer">
          <p className="emoji-icon" onClick={this.showEmojis}>
            {String.fromCodePoint(0x1f60a)}
          </p>
          <form className="form">
            <input
              className="input"
              type="text"
              placeholder="type a message..."
              value={message}
              onChange={(event) => this.handeChange(event.target.value)}
              // onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) =>
                event.key === 'Enter' ? this.handleSubmit(event) : null
              }
            />
            <button className="send" onClick={(event) => sendMessage(event)}>
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CustomInput;
