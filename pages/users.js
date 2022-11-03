import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';

const Users = ({ users: initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <MainContainer title={'Пользователи'}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

Users.getInitialProps = async (ctx) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return { users: data };
};

export default Users;
