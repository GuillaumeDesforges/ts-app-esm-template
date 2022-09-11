import {useEffect, useMemo, useState} from 'react';
import {remult} from 'remult';
import {Post} from 'shared';

const postRepo = remult.repo(Post);

export const App = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	useEffect(() => {
		(async () => {
			const posts = await postRepo.find();
			console.log("posts=" + posts);
			setPosts(posts);
		})();
	}, [setPosts]);
	return <div>
		{posts.map((post) => <div>Post(id={post.id}, title={post.title})</div>)}
	</div>
};
