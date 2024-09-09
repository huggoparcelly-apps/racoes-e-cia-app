// src/app/401.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Custom401() {
  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">Acesso não autorizado</h1>
        <p className="text-lg text-gray-700 mb-6">Você não tem permissão para acessar esta página.</p>
        <Link href="/login">
          <label className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Fazer Login</label>
        </Link>
      </div>
    </div>
  );
}
