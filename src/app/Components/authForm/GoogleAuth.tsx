import Image from 'next/image'
import googleImage from '/public/google.png'
import useGoogleAuth from '@/hooks/useGoogleAuth';

interface GoogleAuthProps {
  prefix: string;
}

function GoogleAuth({prefix}: GoogleAuthProps) {
  
  const { handleGoogleAuth } = useGoogleAuth();

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={handleGoogleAuth}
    >
      <Image src={googleImage} className="w-5" alt="Google Logo" />
      <span className="mx-2 text-blue-500">
        {prefix} com Google
      </span>
    </div>
  )
}

export default GoogleAuth