import fetch from "isomorphic-fetch";
import { Component } from "react";
import Error from "next/error";
import Layout from "../components/layout";
import Comments from "../components/comments";
class Story extends Component {
  static async getInitialProps({ req, res, query }) {
    let story;
    try {
      const storyId = query.id;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await response.json();
    } catch (err) {
      console.log(err);
      story = null;
    }
    return { story };
  }
  render() {
    const { story } = this.props;
    if (!story) {
      return <Error statusCode={503} />;
    }
    return <Layout title={story.title} backButton>
        <main>
            <h1 className="story-title"><a href={story.url} target="blank"> {story.title}</a></h1>
            <div className="story-details">
                <strong>{story.points} points</strong>
                <strong>{story.comments_count} comments</strong>
                <strong>{story.time_ago}</strong>
            </div>
            {
              story.comments ? story.comments.length == 0 ? null : (<Comments comments = {story.comments} category="Comments"/>) : null
            }
            
        </main>
        <style jsx>
        {
            `
            main{
                padding: 1em;
            }
            .story-title{
                font-size: 1.2em;
                margin: 0;
                font-weight: 300;
                padding-bottom: 0.5em;
            }
            .story-title a{
                color: #333;
                text-decoration: none;
            }
            .story-title a:hover{
                text-decoration:underline;
            }
            .story-details{
                font-size: 0.8rem;
                padding-bottom: 1em;
                border-bottom : 1px solid rgba(0,0,0, 0.1);
                margin-bottom: 1em;
            }
            .story-details strong{
                margin-right: 1em;
            }
            .story-details a{
                color: #f60;
            }
            `
        }
        </style>
    </Layout>
  }
}
export default Story;
