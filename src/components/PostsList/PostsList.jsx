import classes from "./PostsList.module.css"
import Post from "../Post/Post.jsx";
import Modal from "../Modal/Modal.jsx";
import NewPost from "../NewPost/NewPost.jsx";

function PostsList({posts, isPosting, isFetching, onEventHandlers}) {
	return (
		<>
			{isPosting && (<Modal onClose={onEventHandlers.onHide}>
				<NewPost
					onCancel={onEventHandlers.onHide}
					onSubmit={onEventHandlers.onSubmit}
				/>
			</Modal>)}
			{!isFetching && posts.length > 0 && (
				<ul className={classes.feed}>
					{posts.map((post) => (<Post key={post.key} author={post.author} content={post.content}/>))}
				</ul>
			)}
			{!isFetching && posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white'}}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
			{isFetching && (
				<div style={{ textAlign: 'center', color: 'white'}}>
					<h2>Loading posts...</h2>
					<p>Please wait!</p>
				</div>
			)}
		</>
	)
}

export default PostsList;