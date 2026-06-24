import { useNavigate } from "react-router-dom";

function ProfileForm() {
  const navigate = useNavigate();

  return (
    <div className="input-section">

      <input
        type="text"
        placeholder="LeetCode Username"
      />

      <input
        type="text"
        placeholder="Codeforces Username"
      />

      <input
        type="text"
        placeholder="GitHub Username"
      />

      <input
        type="text"
        placeholder="CodeChef Username"
      />

      <input
        type="text"
        placeholder="AtCoder Username"
      />

      <button onClick={() => navigate("/dashboard")}>
        Analyze Profile
      </button>

    </div>
  );
}

export default ProfileForm;