import React from "react";
import Error from "next/error";
import StoryList from "../components/storyList";
import Layout from "../components/layout";
import Link from "next/link";
import {Component} from "react";

class Index extends Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }
    return { page, stories };
  }
  componentDidMount(){
    if("serviceWorker" in navigator){
      navigator.serviceWorker.register("service-worker.js")
      .then(registration => {
        console.log("Service Worker Registration Successful");
      })
      .catch(err => {
        console.warn("Service Worker Registration failled")
      })
    }
  }
  render() {
    const { page, stories } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Hacker Next"
        description="A hacker news clone made with Next.js">
        <StoryList stories={stories} />
        <span>Page : {page}</span>
        <div style={{ display: "flex", flexDirection: "row", width: "30%" }}>
          <Link href={`/?page=${page + 1}`}>
            <a>Next</a>
          </Link>
          &nbsp; &nbsp;
          {page != 1 && (
            <Link
              href={`/?page=${page-1}`}>
              <a>Go back</a>
            </Link>
          )}
        </div>
      </Layout>
    );
  }
}
export default Index;
