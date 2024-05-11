import React, { useState } from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from './posts/Post';

function Timeline() {
    const [posts, setPost] = useState([
        {
            user: "albee0909",
            postImage:
                "https://songjangmin.bates-catapult.net/media/IMG_4865.jpeg",
            likes:-2,
            timespamp: "2d",
        },
        {
            user: "johnjohn",
            postImage:
                "https://songjangmin.bates-catapult.net/media/IMG_0271.jpeg",
            likes:3,
            timespamp: "12h",
        },
        {
            user: "wangqing",
            postImage:
                "https://songjangmin.bates-catapult.net/media/IMG_1474.jpeg",
            likes:5,
            timespamp: "35d",
        },
    ]);
  return (
    <div className='timeline'>
        <div className="timeline__left">
            <div className="timeline_posts">
                {posts.map(post => (
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
            <Suggestions />
        </div>
    </div>
  );
}

export default Timeline;
