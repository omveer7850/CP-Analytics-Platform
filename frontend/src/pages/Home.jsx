import ProfileForm from "../components/ProfileForm";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>CP Analytics Platform</h1>

        <p>
          Analyze your coding profiles across platforms
        </p>
      </div>

      <ProfileForm />
    </div>
  );
}

export default Home;