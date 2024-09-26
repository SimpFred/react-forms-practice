import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import RadioButton from "./components/RadioButton";

export default function App() {
  //TODO: Add your state fields here
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "",
    consent: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "consent") {
      setFormData({ ...formData, consent: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log(formData);

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <Input
            label={"Full name"}
            type={"text"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label={"Address"}
            type={"text"}
            name={"address"}
            value={formData.address}
            onChange={handleChange}
          />
          <Input
            label={"Phone Number"}
            type={"tel"}
            name={"phone"}
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            label={"Email"}
            type={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form__section-right">
          <TextArea
            label={"Write your complaint"}
            name={"complaint"}
            value={formData.complaint}
            onChange={handleChange}
          />

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <RadioButton
              label={"Phone"}
              name={"contact"}
              value={"phone"}
              checked={formData.contact === "phone"}
              onChange={handleChange}
            />

            <RadioButton
              label={"Email"}
              name={"contact"}
              value={"email"}
              checked={formData.contact === "email"}
              onChange={handleChange}
            />

            <RadioButton
              label={"Slow Mail"}
              name={"contact"}
              value={"post"}
              checked={formData.contact === "post"}
              onChange={handleChange}
            />

            <RadioButton
              label={"No contact!"}
              name={"contact"}
              value={"none"}
              checked={formData.contact === "none"}
              onChange={handleChange}
            />
          </div>

          <Input
            label={"I agree you take my data, and do whatever"}
            type={"checkbox"}
            name={"consent"}
            checked={formData.consent}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
