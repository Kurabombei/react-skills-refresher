import classes from "./PostsList.module.css"
import Post from "../Post/Post.jsx";
import Modal from "../Modal/Modal.jsx";
import NewPost from "../NewPost/NewPost.jsx";

function PostsList({posts, isPosting, onEventHandlers}) {
	return (
		<>
			{isPosting && (<Modal onClose={onEventHandlers.onHide}>
				<NewPost
					onCancel={onEventHandlers.onHide}
					onSubmit={onEventHandlers.onSubmit}
				/>
			</Modal>)}
			{posts.length > 0 && (
				<ul className={classes.feed}>
					{posts.map((post) => (<Post key={post.key} author={post.author} content={post.content}/>))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white'}}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	)
}

export default PostsList;