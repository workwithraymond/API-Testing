import Post from "./Post"

const Posts = ({post, removePost}) => {
  return (
    <section>
        <div className="title">
            <h2>Our Posts</h2>
            <div className="title-underline"></div>
        </div>
        <div className="posts">
            {post.map((posts) => {
                return <Post key={posts.id} {...posts} removePost={removePost} />
            })}
        </div>
    </section>
  )
}
export default Posts