import React from "react";
import Image from "next/image";
interface User {
  id: number;
  albumId: number;
  url: string;
}
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul className="grid grid-cols-4">
        {users.map((user) => (
          <li key={user.id} className="text-center m-1">
            {user.albumId}
            <img src={user.url} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
