import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("moein");
  const [phone, setPhone] = useState("09134517859");

  // controled element

  return (
    <form>
      <label>name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>

      <label>phone</label>
      <input
        type="text"
        value={phone}
        onInput={(e) => setPhone(e.target.value)}
      />
      <p>{phone}</p>
    </form>
  );
}

export default UserForm;
