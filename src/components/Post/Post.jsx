import classes from './Post.module.css';

function Post({author, content}) {
	return (
		<li className={classes.post}>
			<h3 className={classes.author}>{author}</h3>
			<p className={classes.content}>{content}</p>
		</li>
	)
}

export default Post;