import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
      {
          name: "Damon",
          image: 
            "http://3.bp.blogspot.com/_uLm6-ycREys/TThXhD5gEAI/AAAAAAAAAgw/VvoJI4NzBVU/s1600/damon_salvatore_by_iamdreaming.jpg",
          message: "I need a drink",
      },
      {
          name: "Damon",
          image:
            "http://3.bp.blogspot.com/_uLm6-ycREys/TThXhD5gEAI/AAAAAAAAAgw/VvoJI4NzBVU/s1600/damon_salvatore_by_iamdreaming.jpg",
          message: "Tell me you have Bourbon 🍾",
      },
      {
          message: "In the whinery",
      },
  ]);

  const handleSend = e => {
      e.preventDefault();

      setMessages([...messages, { message: input}]);
      setInput('');
  }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH DAMON 11/08/2020
            </p>
            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
            ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
            )}

                <form className="chatScreen__input">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder ="Type a message..."
                        tpye="text"
                />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton"> SEND</button>
                </form>
            
        </div>
    );
}

export default ChatScreen;