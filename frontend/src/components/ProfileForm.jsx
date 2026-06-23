import { useState } from "react";

function ProfileForm() {
  const [leetcode, setLeetcode] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter LeetCode Username"
        value={leetcode}
        onChange={(e) => setLeetcode(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Codeforces Username"
        value={codeforces}
        onChange={(e) => setCodeforces(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Analyze Profile
      </button>

      {submitted && (
        <div>
          <h3>Profile Information</h3>
          <p>LeetCode: {leetcode}</p>
          <p>Codeforces: {codeforces}</p>
        </div>
      )}
    </div>
  );
}

export default ProfileForm;