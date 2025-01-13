function ContactForm() {
  return (
    <div className="flex">
      <h2>Inquire Now!</h2>
      <form action="/action_page.php" className="flex">
        <label for="fname">First name:</label>

        <input type="text" id="fname" name="fname" value="fname" />

        <label for="lname">Last name:</label>

        <input type="text" id="lname" name="lname" value="lname" />

        <label for="email">Email:</label>

        <input type="email" id="email" name="email" value="email" />

        <button style={{ margin: "10px" }}>Submit!</button>
      </form>
    </div>
  );
}

export default ContactForm;
