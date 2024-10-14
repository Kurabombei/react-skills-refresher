import {useEffect, useState} from "react";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import PostsList from "./components/PostsList/PostsList.jsx";

const initialPosts = []

function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [posts, setPosts] = useState(initialPosts)
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		async function fetchPosts() {
			setIsFetching(true)
			const response = await fetch('http://localhost:8080/posts')
			const resData = await response.json()
			if(!response.ok) {
				console.log('Error while fetching posts.')
			} else {
				setPosts(resData.posts)
			}
			setIsFetching(false)
		}
		fetchPosts()
	}, [])

	function showModalHandler(_) {
		setModalIsVisible(true)
	}

	function hideModalHandler(_) {
		setModalIsVisible(false)
	}

	function submitPostHandler(postData) {
		fetch('http://localhost:8080/posts', {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		setPosts((existingPosts) => [postData, ...existingPosts])
	}

	return (<>
			<MainHeader onCreatePost={showModalHandler}/>
			<main>
				<PostsList
					isPosting={modalIsVisible}
					isFetching={isFetching}
					onEventHandlers={{
						onHide: hideModalHandler,
						onSubmit: submitPostHandler
					}}
					posts={posts}/>
			</main>
		</>)
}

export default App;
