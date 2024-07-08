export default function Contact() {
  return (
    <>
      <h2 className="contact-header">Contact</h2>

      <form className="contact-form" action="/submit-form" method="post">
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" required />
        <br />
        <br />

        <label htmlFor="email">Email Address:</label>
        <br />
        <input type="text" id="subject" name="subject" required />
        <br />
        <br />

        <label htmlFor="message">Message:</label>
        <br />
        <textarea id="message" name="message" rows="4" required></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
