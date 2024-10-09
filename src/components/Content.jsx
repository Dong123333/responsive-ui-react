import { Layout } from "antd";
function Content() {
  const { Content } = Layout;
  return (
    <Content className="bg-[#989494] h-full">
      <div style={{ padding: "24px 0 0 24px", fontWeight: "bold" }}>Home</div>
      <div
        style={{
          marginLeft: "24px",
          marginTop: "36px",
          backgroundColor: "#fff",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "24px",
        }}
      >
        <div
          style={{
            padding: "20px",
          }}
        >
          <img src="https://placehold.co/321x201?text=X" alt="" />
        </div>
        <div
          style={{
            padding: "20px",
          }}
        >
          <img src="https://placehold.co/321x201?text=X" alt="" />
        </div>
        <div
          style={{
            padding: "20px",
          }}
        >
          <img src="https://placehold.co/321x201?text=X" alt="" />
        </div>
      </div>
    </Content>
  );
}

export default Content;
