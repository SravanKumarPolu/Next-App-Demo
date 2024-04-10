import React from "react";
import Image from "next/image";
interface User {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
    // {
    // next: { revalidate: 10 },
    // }
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {users.map((user) => (
          <li key={user.id} className="text-center m-1">
            <div className="flex flex-col border rounded p-4">
              <img
                src={user.thumbnailUrl}
                className="mx-auto rounded-full mb-2 w-34 h-34"
              />
              <h1 className="text-lg font-semibold ">{user.title}</h1>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
