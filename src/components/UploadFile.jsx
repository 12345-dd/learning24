/*import axios from "axios";
import React, { useState } from "react";

export const UploadFile = () => {
  const [filePath, setfilePath] = useState();
  const fileUploadHandler = async (event) => {
    //event.target.value..
    //console.log("fileUploadHandler",event.target.files[0])
    const formData = new FormData();
    formData.append("myImage", event.target.files[0]);
    const res = await axios.post(
      "http://localhost:4000/upload/upload",
      formData
    );
    console.log("res", res);
    setfilePath(res.data.secure_url);
  };

  return (
    <div>
      <h1>UPLOAD FILE</h1>
      <input
        type="file"
        name="file"
        id="file"
        onChange={(event) => {
          fileUploadHandler(event);
        }}
      ></input>
      {filePath && (
        <img
          src={filePath}
          alt="file"
          style={{ width: "300px", height: "300px" }}
        ></img>
      )}
      <br/><br/>
    </div>
  );
};*/

import axios from "axios";
import React, { useState } from "react";

export const UploadFile = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedItems, setUploadedItems] = useState([]);

  const fileUploadHandler = async () => {

    const formData = new FormData();
    formData.append("myImage", file);
    formData.append("name", name);

      const res = await axios.post("http://localhost:4000/upload/upload", formData);
      console.log("response:", res.data);

      if (res.data && res.data.product && res.data.product.image) {
        setUploadedItems((prevItems) => [
          ...prevItems,
          { name, image: res.data.product.image }
        ]);

        setName(""); 
        setFile(null);
      } else {
        console.log(res.data);
      }

  };

  return (
    <div>
      <h1>Upload File</h1>
      <br/>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/><br/>
      <input
        type="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br/><br/>
      <button class="btn btn-primary" onClick={fileUploadHandler}>Add</button>

      <div style={{ display: "flex", flexWrap: "wrap" ,gap: "1rem", marginTop: "1rem" ,justifyContent:"center"}}>
      {
        uploadedItems.map((item) => (
            <div>
              <h3>{item.name}</h3>
              <img src={item.image} style={{ width: "300px", height: "300px" }} />
            </div>
          
        ))
      }
      </div>
    </div>
  );
};
