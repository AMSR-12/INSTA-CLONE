import React, { useState } from "react";
import Post from "./Post/Post";
 import Suggestion from "./Suggestions"
import "./Timeline.css";

function Timeline() {
  const [posts] = useState([
    {
      user: "Arul_Selvi",
      postImage:"https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif",
      likes:'1k',
      timestamp: "2h",
    },
    {
      user: "Esther-Jensy",
      postImage:"https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg",
      likes: 500,
      timestamp: "5h",
    },
    {
      user: "Rashu-Kutty",
      postImage:'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
      likes: "1,22,000",
      timestamp: "2d",
    },
    {
      user: "selvi-123",
      postImage:
      "https://th.bing.com/th/id/OIP.9VqgOLtnx12E1URQUPdiOQHaEo?pid=ImgDet&w=1920&h=1200&rs=1",
      likes:10,
      timestamp: "10mins",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestion/>
      </div>
    </div>
  );
}

export default Timeline;