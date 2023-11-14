'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const metadata = {
    title: 'Register users',
    description: 'Project for class PTAC',
}

export default function DashboardLayout({ children }) {
    const { push } = useRouter();

    const logout = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        push('/');
    }
    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex">
                <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
                    <ul className="flex flex-col space-y-3">
                        <li className="flex flex-row items-center">
                            <Link href="/pages/dashboard">Home</Link>
                        </li>
                        <li className="flex flex-row items-center">
                            <Link href="/pages/dashboard/alter">Alterar</Link>
                        </li>
                        <li className="flex flex-row items-center">
                            <Link href="/pages/dashboard/register">Registrar</Link>
                        </li>
                        <li className="flex flex-row items-center">
                            <button onClick={logout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">
                                SAIR
                            </button>
                        </li>

                    </ul>

                </div>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    )
}