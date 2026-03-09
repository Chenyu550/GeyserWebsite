---
title: Rainbow
description: 一个用于生成 Geyser 物品映射和基岩版资源包的 Minecraft 模组，可与 Geyser 的自定义物品 API V2 配合使用。
---

Rainbow 是一个 Fabric 客户端 Minecraft 模组，用于生成 Geyser 物品映射和基岩版资源包，可与 Geyser 的自定义物品 API (v2) 配合在服务器上使用。

## 什么是 Rainbow？ {#what-is-rainbow}

Rainbow 是一个用于创建 Geyser 物品映射和基岩版资源包的生成器，它使用 Geyser 自定义物品 API V2 格式，允许使用 1.21.4+ Java 版资源包。

:::caution

此项目仍处于早期开发阶段！如有任何错误和问题，请在我们的 [Discord](https://discord.gg/geysermc) 中报告。

:::

## 使用方法 {#usage}

使用 Rainbow：
1. 您需要为 Java 版设置一个 1.21.11 Fabric 客户端，并确保客户端已安装此模组。
2. 加入您选择的服务器以开始转换资源包，然后运行 `/rainbow create <资源包名称>`，其中 `<资源包名称>` 是您输出资源包的名称。
3. 您可以通过以下几种方式进行映射：
    - 逐个手持每个物品，并在手持该物品时运行 `/rainbow map`。
    - 用自定义物品填满您的物品栏，然后运行 `/rainbow mapinventory` 来映射您的整个物品栏。
    - 运行 `/rainbow auto inventory` 并打开包含自定义内容的 UI（例如，箱子或插件命令显示自定义内容）。Rainbow 将继续映射所有自定义物品，直到您使用 `/rainbow auto stop` 停止该进程。
4. 运行 `/rainbow finish` 完成您的转换，Rainbow 随后会将您的资源包和映射文件输出到 `<实例文件夹>/rainbow/<资源包名称>`，您也可以点击聊天中的 `Wrote pack to disk` 消息来打开该文件夹。
5. 在此文件夹中，您会找到 3 个文件：`pack.zip`（您需要将其放入服务器的 `packs` 文件夹）、`geyser_mappings.json`（您需要将其放入服务器的 `custom_mappings` 文件夹），最后是 `report.txt`（如果您遇到问题，可以将其发送到我们的 [Discord](https://discord.gg/geysermc)，否则可以忽略此文件）。

## 下载 {#download}

您可以在[这里](/download/?project=other-projects&rainbow=expanded)下载 Rainbow。

## 贡献 {#contributing}

欢迎任何形式的贡献。如果您有兴趣帮助开发 Rainbow，请随时在 [Discord](https://discord.gg/geysermc) 上联系我们。
