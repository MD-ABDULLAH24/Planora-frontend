import SignUpForm from "../_component/signup/SignUpForm"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-50 to-gray-100 px-4">
      
      {/* SEO Friendly Content */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Create Your Account
        </h1>
        <p className="text-gray-500 mt-2">
          Join Planora and start managing your events
        </p>
      </div>

      {/* SignUp Form */}
      <SignUpForm />
    </div>
  )
}