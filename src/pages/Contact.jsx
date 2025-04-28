export const Contact = () => {
  const handleFormSubmit = (formData) => {
    //console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact container">
      <h2 className="container-title contact-title heading-title">
        Contact Us
      </h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
            required
          />

          <input
            type="email"
            className="form-control"
            autoComplete="false"
            placeholder="Enter your email id"
            name="email"
            required
          />

          <textarea
            className="form-control"
            autoComplete="false"
            rows="10"
            placeholder="Enter your message"
            name="message"
          ></textarea>

          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
