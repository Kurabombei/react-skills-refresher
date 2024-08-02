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
			<ul className={classes.feed}>
				{posts.map((post) => (<Post key={post.key} author={post.author} content={post.content}/>))}
			</ul>
		</>
	)
}

export default PostsList;