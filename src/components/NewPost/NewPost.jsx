import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost({onCancel, onSubmit}) {
	const [enteredAuthor, setEnteredAuthor] = useState('')
	const [enteredContent, setEnteredContent] = useState('')

	function contentChangeHandler(event) {
		setEnteredContent(event.target.value)
	}

	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value)
	}


	function generateKey(pre)  {
		return `${ pre }_${ new Date().getTime() }`;
	}

	function submitHandler(event) {
		event.preventDefault()
		const postData = {
			author: enteredAuthor,
			content: enteredContent,
			key: generateKey(`${enteredAuthor}_`)
		}
		console.log(postData)
		onSubmit(postData)
		onCancel()
	}

	return (<form className={classes.form} onSubmit={submitHandler}>
		<p>
			<label htmlFor="name">Your name</label>
			<input type="text" id="name" onChange={authorChangeHandler} required/>
		</p>
		<p>
			<label htmlFor="content">Text</label>
			<textarea id="content" required rows={3} onChange={contentChangeHandler}/>
		</p>
		<p className={classes.actions}>
			<button type="button" onClick={onCancel}>Cancel</button>
			<button>Submit</button>
		</p>
	</form>);
}

export default NewPost;