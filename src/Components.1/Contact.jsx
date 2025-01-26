import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-content">
        <h2 className="section-title">Get In Touch</h2>
        <p>
          Looking for freelance or full-time opportunities? Reach out, and
          let's work on something great!
        </p>
        <div className="container">
          <h1>FormSubmit Demo</h1>
          <form target="_blank" action="https://formsubmit.co/devadurgam.nara@gmail.com" method="POST">
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block" class="Submit">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
