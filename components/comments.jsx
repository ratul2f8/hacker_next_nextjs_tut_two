const Replies = ({ comments, category }) => {
  return (
    <div>
      <h4 className="category" style={{ fontSize: "0.8em", marginLeft: "1em" }}>
        {category}
      </h4>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <main>
              <h5 className="user">{comment.user}</h5>
              <div className="story-details">
                <strong>level : {comment.level}</strong>
                <strong>{comment.time_ago}</strong>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: comment.content
                }}></div>
            </main>
            <style jsx>
              {`
                main {
                  padding: 0.5em;
                  border-left: 2px solid green;
                  margin-left: 2em;
                }
                .user {
                  padding: 0;
                  margin-block-start: 0.5em;
                  margin-block-end: 0.5em;
                }
                .story-details {
                  font-size: 0.8em;
                  padding-bottom: 1em;
                  padding-top: 0em;
                  margin-bottom: 1em;
                }
                .story-details strong {
                  margin-right: 0.6em;
                }
              `}
            </style>
          </div>
        );
      })}
    </div>
  );
};
const Comments = ({ comments, category }) => {
  return (
    <div>
      <h4 className="category">{category}</h4>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <main>
              <h5 className="user">{comment.user}</h5>
              <div className="story-details">
                <strong>level : {comment.level} &nbsp;</strong>
                <strong>{comment.time_ago}</strong>
              </div>
              <div dangerouslySetInnerHTML={{__html: comment.content}}></div>
            </main>
            {comment.comments ? (
              comment.comments.length == 0 ? null : (
                <Replies
                  comments={comment.comments}
                  category="Replies"
                  className="replies"
                />
              )
            ) : null}
            <style jsx>
              {`
                main {
                  padding: 0.5em;
                }
                .user {
                  padding: 0;
                  margin-block-start: 0.5em;
                  margin-block-end: 0.5em;
                }
                .story-details {
                  font-size: 0.8em;
                  padding-bottom: 1em;
                  padding-top: 0em;
                  margin-bottom: 1em;
                }
                .story-details strong {
                  margin-right: 0.6em;
                  fint-size: 0.8em;
                }
                .category {
                  font-size: 0.9em;
                  margin-block-start: 0.5em;
                  margin-block-end: 0.5em;
                }
              `}
            </style>
          </div>
        );
      })}
    </div>
  );
};
export default Comments;
