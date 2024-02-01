import LoginWithFacebook from "@/components/buttons/LoginWithFacebook";
import LoginWithGithub from "@/components/buttons/LoginWithGithub";
import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";
import LoginWithX from "@/components/buttons/LoginWithX";
import Navbar from "@/components/navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content container flex-col max-w-lg mt-16">
          <div className="prose">
            <h1 className="mb-4 text-5xl font-bold text-center">Login now!</h1>
            <p className="text-center">
              Log in to your account using one of the methods below
            </p>
          </div>
          <div className="gap-y-4 grid mt-8">
            <LoginWithGoogle />
            <LoginWithFacebook />
            <LoginWithX />
            <LoginWithGithub />
          </div>
        </div>
      </div>
    </>
  );
}
