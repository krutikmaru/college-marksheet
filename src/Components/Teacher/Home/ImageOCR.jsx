import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../reusables/Loading";

function ImageOCR({ handleOCRMarkChange }) {
  const [image, setImage] = useState(null);
  const [serverRequestSent, setServerRequestSent] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const uploadImage = async () => {
    if (!image) {
      toast.error("No image to upload");
      return;
    }
    try {
      setServerRequestSent(true);
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("http://127.0.0.1:5000/process_image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      if (result.hasOwnProperty("error")) {
        toast.error(result.error);
      } else {
        toast.success("Data extracted successfully");
        handleOCRMarkChange(result);
      }
    } catch (error) {
      toast.error("Error: ", error);
      console.error("Error:", error);
    } finally {
      setServerRequestSent(false);
    }
  };

  if (serverRequestSent) {
    return <Loading />;
  }

  return (
    <div className="text-white p-5 rounded-md border-[#272727] border-2 border-dashed mb-4">
      <h1 className="text-xl">OCR Image</h1>
      <p className="mb-4 text-sm text-[#5f5f5f]">
        Works only if your image has a table with first column named as{" "}
        <span className="text-jhc-blue-primary">'UID'</span>
        and second column named as{" "}
        <span className="text-jhc-blue-primary">'Marks'</span>
      </p>
      <div className="w-full flex justify-between items-center">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={uploadImage}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageOCR;
