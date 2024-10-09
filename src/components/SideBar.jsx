import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { AdminContext, useAdminContext } from "../context/AdminContext";
function SideBar() {
  const { Sider } = Layout;
  const { collapseMenu } = useAdminContext(AdminContext);
  return (
    <Sider trigger={null} collapsed={collapseMenu}>
      <Menu
        theme="light"
        mode="inline"
        className="h-screen"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "grp",
            label: <img src="https://placehold.co/200x64?text=LOGO"></img>,
            type: "group",
            children: [
              {
                key: "home",
                label: "Home Page",
              },
              {
                key: "financial",
                label: "Financial Management",
              },
              {
                key: "humanrs",
                label: "Human Resources Management",
              },
              {
                key: "asset",
                label: "Asset Management",
                children: [
                  {
                    key: "building",
                    label: "Building Information",
                    icon: <RightOutlined />,
                  },
                  {
                    key: "technical",
                    label: "Technical Systems",
                    icon: <RightOutlined />,
                  },
                  {
                    key: "service",
                    label: "Service Contracts",
                    icon: <RightOutlined />,
                  },
                  {
                    key: "company",
                    label: "Company Maintenance",
                    icon: <RightOutlined />,
                  },
                ],
              },
              {
                type: "divider",
              },
            ],
          },
        ]}
      />
    </Sider>
  );
}

export default SideBar;
