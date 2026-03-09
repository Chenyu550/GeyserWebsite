import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/api.geysermc.org/global-api",
    },
    {
      type: "category",
      label: "health",
      items: [
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-health-controller-health",
          label: "简单的服务器在线检查",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "link",
      items: [
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-link-controller-get-bedrock-link-v-1",
          label: "GlobalApiWeb.Api.LinkController.get_bedrock_link_v1",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-link-controller-get-java-link-v-1",
          label: "GlobalApiWeb.Api.LinkController.get_java_link_v1",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-link-controller-get-bedrock-link-v-2",
          label: "通过基岩版 XUID 获取关联的 Java 账号",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-link-controller-get-java-link-v-2",
          label: "通过 Java UUID 获取关联的基岩版账号",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "stats",
      items: [
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-stats-controller-get-all-stats",
          label: "获取所有公开可用的全局 API 统计数据",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-stats-controller-get-all-stats-2",
          label: "获取所有公开可用的全局 API 统计数据",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "xbox",
      items: [
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-xbox-controller-get-gamertag-v-1",
          label: "GlobalApiWeb.Api.XboxController.get_gamertag_v1",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-xbox-controller-get-xuid-v-1",
          label: "GlobalApiWeb.Api.XboxController.get_xuid_v1",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-xbox-controller-get-gamertag-v-2",
          label: "通过 XUID 获取 Xbox游戏标签",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-xbox-controller-get-xuid-v-2",
          label: "通过Xbox游戏标签获取 XUID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "skin",
      items: [
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-skin-controller-get-recent-uploads-page",
          label: "获取最近上传的皮肤列表",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-skin-controller-get-recent-uploads",
          label: "获取最近上传的皮肤列表",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-skin-controller-get-skin",
          label: "获取基岩版玩家最近转换的皮肤",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "utils",
      items: [
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-utils-controller-get-bedrock-or-java-uuid",
          label: "用于获取 Java UUID 或基岩版 XUID 的工具端点",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-render-controller-get-front-texture",
          label: "GlobalApiWeb.Api.RenderController.get_front_texture",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/api.geysermc.org/global-api-web-api-render-controller-get-raw-texture",
          label: "GlobalApiWeb.Api.RenderController.get_raw_texture",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
