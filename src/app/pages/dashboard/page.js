
import ListUsers from "@/app/components/ListUsers";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard() {
    const users = await getUsers();

    return (
        <div className="flex-1 p-6">
            <h1 className="text-3xl font-semibold mb-6">Usuários</h1>
            <div className="bg-white rounded-lg shadow-md p-4">
                <Suspense fallback={<div className="text-center"><svg className="animate-spin h-6 w-6 mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.86 3.182 8.019l1.414-1.414zM12 20c-2.075 0-4.05-.32-5.914-.905l-1.416 1.415A7.963 7.963 0 0012 24h4a8 8 0 00-8-8v-4a7.963 7.963 0 003.019 6.364L6.905 19.92A9.928 9.928 0 014 12H0c0 5.523 4.477 10 10 10v-4z"></path></svg> Carregando...</div>}>
                    <ListUsers users={users} />
                </Suspense>
            </div>
        </div>
    );
};