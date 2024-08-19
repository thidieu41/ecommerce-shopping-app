import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Spin } from "antd";

const Loading = () => {
  return (
    <div>
      <Spin
        spinning={true}
        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
      >
        <div
          style={{
            minHeight: 400,
          }}
        />
      </Spin>
    </div>
  );
};

export default Loading;
