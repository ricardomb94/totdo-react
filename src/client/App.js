import React, {useState} from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import '../../assets/css/style.css';


const initialPosts = [
    {
        id:1,
        text:'Lorem ipsum',
        user:{
            avatar:'/uploads/avatar1.png',
            username:'Test User'
        }
    },
    {
        id:2,
        text:'Lorem ipsum',
        user:{
            avatar:'/uploads/avatar2.png',
            username:'Test User 2'
        }
    }
]

const App = () => {

    const [posts, setPost] = useState(initialPosts);
    const [postContent, setPostContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newPost = {
            id:posts.length + 1,
            text:postContent,
            user:{
                avatar:'/uploads/avatar1.png',
                username:'Faked User'
            }
        };
        setPost([newPost, ...posts]);
        setPostContent('');
        console.log([newPost,...posts]);
    };
    return (
        <div className='container'>
            <HelmetProvider>
                <Helmet>
                    <title>Graphbook - Feed</title>
                    <meta name="description" content="Newsfeed of all your friends on Graphbook" />
                </Helmet>
            </HelmetProvider>
            <div className="postForm">
                <form onSubmit={handleSubmit}>
                    <textarea value={postContent} onChange={(event) =>
                        setPostContent(event.target.value)}
                        placeholder="Write your post!"
                        />
                        <input type="submit" value="submit" />
                </form>
            </div>
            <div className="feed">
                {
                    initialPosts.map((post,i) => 
                        <div key={post.id} className="post">
                            <div className="header">
                                <img src={post.user.avatar} alt="avatar" />
                                <h2>{post.user.username}</h2>
                            </div>
                            <p className='content'>
                                {post.text}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default App