import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h3>UserName</h3>
      {user.map((u) => {
        return <div key={u.id}>{u.login}</div>;
      })}
    </div>
  );
};

export default User;
