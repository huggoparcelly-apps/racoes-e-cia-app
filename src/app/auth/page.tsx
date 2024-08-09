import AuthForm from "../Components/authForm/AuthForm"

function AuthPage() {
  return (
    <div className="min-h-full px-4 flex">
      <div className="container mx-auto max-w-md p-0">
        <div className="flex justify-center items-center h-full">
          <div className="space-y-10 w-full">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage