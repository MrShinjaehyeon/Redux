import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList";
import { getPosts } from "../modules/posts";

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return; // 데이터가 존재하면 요청하지 않음
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;

/*
포스트 목록이 재로딩 되는 문제를 해결하는 방법은 두가지. 
  첫번째 만약 데이터가 이미 존재한다면 요청을 하지 않도록 하는 방법.

  두번째 로딩을 새로하되 로딩중... 을 띄우지 않는 것. 
  사용자에게 좋은 경험을 제공하면서도 뒤로가기를 통해 다시 포스트 목록을 조회 할 때 최신 데이터를 보여줄 수 있음.
*/
