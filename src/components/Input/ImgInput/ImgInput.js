import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const ImgInput = ({ setImages, images }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setImages(newFileList);

  const uploadButton = (
    <div
      className="user-img"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   flexDirection: "column",
      //   marginTop: "20px",
      //   marginBottom: "30px",
      // }}
    >
      <PlusOutlined width={"400px"} className="ant-tooltip-open"/>
      <div
        style={{
          marginTop: 8,
        }}
      >
        Rasm yuklash uchun ustiga bosing
      </div>
    </div>
  );
  return (
    <>
      <div
        className="aka imginput"
        style={{ marginLeft: "80px", width: "400px", marginTop: "50px" }}
      >
        <Upload
          action={null}
          listType="picture-card"
          fileList={images}
          onPreview={handlePreview}
          onChange={handleChange}
          style={{ width: "100%" }}
        >

          {images.length >= 8 ? null : uploadButton}
        </Upload>
        <div className="aka">
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <div className="input-img">
              <img alt="example" src={previewImage} />
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ImgInput;
