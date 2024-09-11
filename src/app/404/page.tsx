// src/app/404.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-yellow-600 mb-4">Página não encontrada</h1>
        <p className="text-lg text-gray-700 mb-6">A página que você está tentando acessar não existe.</p>
        <Link href="/">
          <label className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Voltar para Home</label>
        </Link>
      </div>
    </div>
  );
}
