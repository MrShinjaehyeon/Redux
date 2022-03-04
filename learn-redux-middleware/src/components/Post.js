import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const { title, body } = post;

  const navigate = useNavigate();
  const goToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={goToHome}>홈으로 이동</button>
    </div>
  );
}

export default Post;
