import { SearchOutlined, MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Layout, Avatar } from "antd";
import { useAdminContext } from "../context/AdminContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AccountCircleOutlined,
  NotificationsOutlined,
  EmailOutlined,
} from "@mui/icons-material";
function Header() {
  const { Header } = Layout;
  const { collapseMenu, setCollapseMenu } = useAdminContext();
  return (
    <Header
      style={{
        padding: 0,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={collapseMenu ? <MenuOutlined /> : ""}
          onClick={() => setCollapseMenu(!collapseMenu)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div
          style={{
            width: "250px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            border: "1px solid #ccc",
            borderRadius: "13px",
          }}
        >
          <SearchOutlined style={{ fontSize: "24px", paddingLeft: "6px" }} />
          <input
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              paddingLeft: "6px",
              borderTopRightRadius: "13px",
              borderBottomRightRadius: "13px",
            }}
            type="text"
            placeholder="Search projects"
          />
        </div>
      </div>
      <Navbar expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <AccountCircleOutlined />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center gap-3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "6px",
                }}
              >
                <Avatar size="large" />
                <p style={{ margin: 0 }}>Admin</p>
                <DownOutlined />
              </div>
              <div className="d-flex align-items-center gap-3">
                <NotificationsOutlined />
                <EmailOutlined />
                <AccountCircleOutlined />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Header>
  );
}

export default Header;
