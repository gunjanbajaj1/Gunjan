import { useState } from "react";
const FormV1 = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    gender: "",
    age:"",
  });

  const onInputChange = (e) => {
    //console.log("e:", e);
    //console.log("e:", e.target);
    //console.log("Value: ", e.target.value, e.target.name, e.target.type);
    const { name, value } = e.target;
    setProfile({[name]: value });
    console.log({ name, value });
  };

  return (
    <div>
      <div className="form-element">
        <p>Name : {profile.name} </p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={profile.name}
          onChange={onInputChange}
        />
      </div>
      <div className="form-element">
        <p>Email : {profile.email}</p>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={profile.email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-element">
        <p>Email : {profile.email}</p>
        <input
          type="text"
          name="age"
          placeholder="Enter Age"
          value={profile.age}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default FormV1;
