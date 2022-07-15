export const fileUpload = async (file) => {
  if (!file) throw new Error("File is not existing");

  const cloudUrl = "https://api.cloudinary.com/v1_1/danielcuque/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const response = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Something went wrong");
    const data = await response.json();

    return data.secure_url;
  } catch (error) {
    throw new Error(error);
  }
};
