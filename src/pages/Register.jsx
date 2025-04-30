import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userId: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const formatPlaceholder = (name) => {
    return name
      .replace(/([A-Z])/g, " $1") // Insert space before capital letter
      .replace(/\s+/g, " ") // Normalize spaces
      .trim() // Remove leading/trailing spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize words
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name || !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(formData.name)) {
      newErrors.name = "Enter valid name";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email id";
    }

    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid mobile number";
    }

    if (!formData.userId) {
      newErrors.userId = "User id is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(
        res.ok
          ? "Registration successful!"
          : data.message || "Something went wrong"
      );

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          mobile: "",
          userId: "",
          password: "",
          confirmPassword: "",
        });
        setErrors({});
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <section className="section-register container">
      <h2 className="register-title heading-title">
        Register Yourself
        <br />
        and Join the Community
      </h2>

      <div className="gardient-cards">
        <div className="card">
          <div className="container-card">
            <form onSubmit={handleSubmit}>
              {[
                { name: "name", type: "text" },
                { name: "email", type: "email" },
                { name: "mobile", type: "text" },
                { name: "userId", type: "text" },
                { name: "password", type: "password" },
                { name: "confirmPassword", type: "password" },
              ].map(({ name, type }) => (
                <div
                  key={name}
                  className="form-group"
                  style={{ position: "relative", marginBottom: "1rem" }}
                >
                  <input
                    type={
                      name === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : type
                    }
                    name={name}
                    placeholder={formatPlaceholder(name)}
                    value={formData[name]}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      width: "100%",
                      paddingRight: name === "password" ? "2.5rem" : "1rem",
                    }}
                  />
                  {name === "password" && (
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "11px",
                        cursor: "pointer",
                        color: "#555",
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  )}
                  {errors[name] && (
                    <p style={{ color: "red", fontSize: "0.85rem" }}>
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
