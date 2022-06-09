import video from "../data/video.js";
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import Likes from './Likes';

function App() {
  console.log("Here's your data:", video);

  const {comments, createdAt, downvotes, embedUrl, title, upvotes, views} = video

  return (
    <div className="App">
      <VideoInfo embedUrl={embedUrl} title={title} views={views} createdAt={createdAt} />
      <Likes downvotesOriginal={downvotes} upvotesOriginal={upvotes} />
      <br/>
      <Comments commentsOriginal={comments} />
    </div>
  );
}

export default App;
