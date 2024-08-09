import Image from 'next/image'
import googleImage from '/public/google.png'
import useGoogleAuth from '@/hooks/useGoogleAuth';
import { useRouter } from 'next/navigation';

interface GoogleAuthProps {
  prefix: string;
}

function GoogleAuth({prefix}: GoogleAuthProps) {
  const router = useRouter();
  const { handleGoogleAuth } = useGoogleAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleGoogleAuth();
      router.back();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={handleSubmit}
    >
      <Image src={googleImage} className="w-5" alt="Google Logo" />
      <span className="mx-2 text-blue-500">
        {prefix} com Google
      </span>
    </div>
  )
}

export default GoogleAuth