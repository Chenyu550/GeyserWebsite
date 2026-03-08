---
title: 支持的版本
description: 关于 Geyser 所支持版本的相关信息。
---

import { Versions } from '@site/src/components/Versions'
import DocCardList from '@theme/DocCardList';

# 当前支持的版本

:::info
**Geyser 目前支持MC基岩版 <Versions platform="bedrock"/> 和Java版 <Versions platform="java"/>**。
:::

## 在旧版 Minecraft 基岩版中使用 Geyser
旧版基岩版不受支持。Minecraft 基岩版会在所有平台上自动更新，因此极少有用户会希望使用旧版本。此外，旧版基岩版不具备 Geyser 所支持的全部功能，这会导致体验效果欠佳。

## 在旧版 Minecraft Java 版服务器中使用 Geyser
Geyser 会模拟一个 <Versions platform="java"/> 版本的客户端，因此 Java 版服务器必须允许该版本的用户接入，Geyser 才能正常工作。这一功能的实现得益于 [ViaVersion](https://viaversion.com/)——该插件允许使用新版本的 Java 版玩家加入运行旧版本游戏的服务器。

### 在运行 1.16.5 及以上版本的 Spigot/Paper 服务器上使用 Geyser-Spigot
你可以在运行 1.16.5 及以上版本的服务器上使用 Geyser-Spigot。请注意，Geyser 运行需要 Java 17 环境！使用 Geyser 至少需要安装 Java 17 或更高版本。有关更新 Java 的更多信息，请参见[此处](https://docs.papermc.io/misc/java-install)。对于不支持 Java 17 的 Paper 版本，可在 Java 启动参数中添加 `-DPaper.IgnoreJavaVersion=true` 标识，以允许 Paper 在 Java 17 环境下运行。

若要让基岩版玩家能够聊天（1.19.3 及以上版本）或加入服务器（1.19.1/1.19.2 版本），你需要禁用聊天签名功能。有关该功能的更多信息，可查阅[聊天签名相关页面](/wiki/geyser/secure-chat)。

### 在运行 1.16.5 以下版本的 Spigot/Paper 服务器上使用 Geyser-Spigot
遗憾的是，这一用法暂不支持。你需要使用 Velocity 或 BungeeCord 等代理软件，或单独部署 Geyser-Standalone 并搭配 [ViaVersion](https://github.com/ViaVersion/ViaVersion) 插件使用。另一种替代方案是安装 [ViaProxy](https://github.com/ViaVersion/ViaProxy)（一款独立的 ViaVersion 代理工具，可实现不同 Minecraft Java 版版本间的协议转换），并在其上安装 Geyser-ViaProxy。

### 在非最新版 Minecraft 的 Fabric/NeoForge 服务器上使用 Geyser {#fabric-neoforge-servers}
遗憾的是，Geyser-Fabric 和 Geyser-NeoForge 仅支持最新版本的 Minecraft Java 版。若要在旧版本中仍使用 Geyser，推荐安装 [ViaProxy](https://github.com/ViaVersion/ViaProxy)（一款独立的 ViaVersion 代理工具，可实现不同 Minecraft Java 版版本间的协议转换），并在其上安装 Geyser-ViaProxy。该方案也兼容 Floodgate 认证机制。

### 在代理服务器上使用 Geyser-Velocity 或 Geyser-BungeeCord
请确保将你的代理软件更新至最新版本；若后端服务器并非运行 <Versions platform="java"/> 版本，还需在后端服务器上安装 [ViaVersion](https://github.com/ViaVersion/ViaVersion) 插件。Velocity/BungeeCord 支持绝大多数 Minecraft 版本，因此你可独立更新代理软件，无需考虑后端服务器的版本。