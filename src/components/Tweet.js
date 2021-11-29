// import react from "react";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";


function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      <ProfileImage image ={props.tweet.user.image} />
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">@{props.tweet.user.handle}</span>
          </span> */}
           <Timestamp time={props.tweet.timestamp} />
          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
        </div>

        <p className="message">
          {props.tweet.message}
        </p>
        {/* <p className="message">
          {props.tweet.message}
        </p> */}

           <Action />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
