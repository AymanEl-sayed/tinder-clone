import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Damon"
                message="If you touch Elena I swear to god I'll rip your heart out!"
                timestamp="40 seconds ago"
                profilePic="http://3.bp.blogspot.com/_uLm6-ycREys/TThXhD5gEAI/AAAAAAAAAgw/VvoJI4NzBVU/s1600/damon_salvatore_by_iamdreaming.jpg"
            />
            <Chat
                name="Caroline"
                message="I slept with another one of our friends don't tell anyone🤫"
                timestamp="2 hours ago"
                profilePic="https://www.purefandom.com/wp-content/uploads/2016/12/caroline-forbes-tvd-750x522-1446153210.jpg"
            />
            <Chat
                name="Klaus🐺"
                message="Hello love."
                timestamp="1 hour ago"
                profilePic="https://img.cinemablend.com/quill/0/7/2/0/b/5/0720b52d2a2bb6d61b4b3824a8b4a238468fd962.jpg"
            />
            <Chat
                name="Elijah"
                message="I promise you, you have my word🔒"
                timestamp="30 minutes ago"
                profilePic="http://images6.fanpop.com/image/photos/36200000/Elijah-image-elijah-36202481-1916-1076.jpg"
            />
        </div>
    );
}

export default Chats