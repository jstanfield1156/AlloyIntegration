import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name_first: "",
    name_last: "",
    email_address: "",
    birth_date: "",
    document_ssn: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country_code: "US"
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name_first: form.name_first,
      name_last: form.name_last,
      email_address: form.email_address,
      birth_date: form.birth_date,
      document_ssn: form.document_ssn,
      address: {
        line1: form.line1,
        line2: form.line2,
        city: form.city,
        state: form.state,
        postal_code: form.postal_code,
        country_code: form.country_code
      }
    };

    try {
      const res = await axios.post("http://localhost:3001/submit", payload);
      setResult(res.data.outcome);
    } catch (err) {
      console.error(err);
      setResult("error");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Bank Application Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="name_first" placeholder="First Name" onChange={handleChange} required /><br />
        <input name="name_last" placeholder="Last Name" onChange={handleChange} required /><br />
        <input name="email_address" placeholder="Email" onChange={handleChange} required /><br />
        <input name="birth_date" placeholder="YYYY-MM-DD" onChange={handleChange} required /><br />
        <input name="document_ssn" placeholder="SSN (9 digits)" onChange={handleChange} required /><br />
        <input name="line1" placeholder="Address Line 1" onChange={handleChange} required /><br />
        <input name="line2" placeholder="Address Line 2" onChange={handleChange} /><br />
        <input name="city" placeholder="City" onChange={handleChange} required /><br />
        <input name="state" placeholder="State (e.g., NY)" onChange={handleChange} required /><br />
        <input name="postal_code" placeholder="ZIP Code" onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          {result === "Approved" && <h2>✅ Application Approved! You Rock!</h2>}
          {result === "Manual Review" && <h2>⏳ Under Review. We'll contact you soon. Good Luck!</h2>}
          {result === "Denied" && <h2>❌ Sorry, Application Denied.Boo.</h2>}
          {result === "error" && <h2>❌ Submission failed. Please try again.</h2>}
        </div>
      )}
    </div>
  );
}

export default App;


