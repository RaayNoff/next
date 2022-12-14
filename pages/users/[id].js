import { useRouter } from 'next/router';

const User = ({ user }) => {
  const router = useRouter();

  return (
    <div>
      <h1>Пользователь c id {router.query.id}</h1>
      <p>Имя пользователя: {user.name}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: {
      user,
    }, // will be passed to the page component as props
  };
}

export default User;
