'use client'
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { getUser, updateUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';

export default function Alter({ params }) {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { push } = useRouter();

  useEffect(() => {
    const findUser = async () => {
      const userFind = await getUser(params.id);
      setUser({ ...user, name: userFind.name, email: userFind.email });
    }
    findUser();
  }, [])

  const handlerFormSubmit = async (event) => {
    event.preventDefault();
    await updateUser(user, params.id);
    await new Promise((resolve) => {
      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(resolve, 5000);
    });
    return push("/pages/dashboard");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-semibold mb-4">Alterar Usuário</h1>
        <form onSubmit={handlerFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}