import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/downloads.geysermc.org/downloads-api",
    },
    {
      type: "category",
      label: "projects-controller",
      items: [
        {
          type: "doc",
          id: "api/downloads.geysermc.org/projects",
          label: "获取所有可用项目的列表。",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "project-controller",
      items: [
        {
          type: "doc",
          id: "api/downloads.geysermc.org/project",
          label: "获取项目的信息。",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "version-controller",
      items: [
        {
          type: "doc",
          id: "api/downloads.geysermc.org/version",
          label: "获取版本的信息。",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "version-builds-controller",
      items: [
        {
          type: "doc",
          id: "api/downloads.geysermc.org/builds",
          label: "获取项目版本的所有可用构建。",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "version-build-controller",
      items: [
        {
          type: "doc",
          id: "api/downloads.geysermc.org/build-specific",
          label: "获取特定构建的相关信息。",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/downloads.geysermc.org/build-latest",
          label: "获取特定构建的相关信息。",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "download-controller",
      items: [
        {
          type: "doc",
          id: "api/downloads.geysermc.org/download-specific",
          label: "从构建数据中下载指定文件。",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/downloads.geysermc.org/download-latest",
          label: "从构建数据中下载指定文件。",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
