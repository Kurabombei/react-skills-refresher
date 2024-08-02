import {useState} from "react";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import PostsList from "./components/PostsList/PostsList.jsx";

const initialPosts = []

function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [posts, setPosts] = useState(initialPosts)
	function showModalHandler(_) {
		setModalIsVisible(true)
	}

	function hideModalHandler(_) {
		setModalIsVisible(false)
	}

	function submitPostHandler(postData) {
		setPosts((existingPosts) => [postData, ...existingPosts])
	}

	return (<>
			<MainHeader onCreatePost={showModalHandler}/>
			<main>
				<PostsList
					isPosting={modalIsVisible}
					onEventHandlers={{
						onHide: hideModalHandler,
						onSubmit: submitPostHandler
					}}
					posts={posts}/>
			</main>
		</>)
}

export default App;
