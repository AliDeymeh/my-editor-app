import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const saveContent = () => {
    // اینجا باید محتوای ویرایشگر را به سرور ارسال کنید
    console.log("Content to save:", editorContent);
  };

  const imagesUploadHandler = (blobInfo, success, failure) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      success(event.target.result);
    };

    reader.onerror = (error) => {
      failure("Image upload failed: " + error.message);
    };

    reader.readAsDataURL(blobInfo.blob());
  };

  return (
    <div>
      <Editor
        apiKey="52xx6d97st5q9osuwmj5jnfibby0xynakhfg57h0ls5allmo"
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image table mergetags | addcomment showcomments | typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          images_upload_handler: imagesUploadHandler,
        }}
        initialValue="Welcome to TinyMCE!"
        onEditorChange={handleEditorChange}
      />
      <button onClick={saveContent}>Save Content</button>
    </div>
  );
}
