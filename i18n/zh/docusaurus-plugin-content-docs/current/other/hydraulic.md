---
title: Hydraulic
description: 'Hydraulic 是 Geyser 的配套项目，允许基岩版玩家加入模组化的 Minecraft: Java 版服务器。'
---

Hydraulic 是 Geyser 的配套项目，允许基岩版玩家加入模组化的 Minecraft: Java 版服务器。

## 什么是 Hydraulic？ {#what-is-hydraulic}

Hydraulic 是一个服务端模组，允许基岩版玩家加入模组化的 Minecraft: Java 版服务器。该项目与 [Geyser](https://github.com/GeyserMC/Geyser) 配合工作来实现这一功能。

:::caution

该项目仍处于非常早期的开发阶段，不应在生产环境中使用！

:::

## 下载 {#download}

你可以在[这里](/download/?project=other-projects&hydraulic=expanded)下载 Hydraulic。

## 贡献 {#contributing}

任何贡献都将不胜感激。如果你有兴趣帮助开发 Hydraulic，请随时在 [Discord](https://discord.gg/geysermc) 上联系我们。

### 项目设置 {#project-setup}

1. 将仓库克隆到你的电脑上。
2. 导航到 Hydraulic 根目录并运行 `git submodule update --init --recursive`。此命令会下载 Hydraulic 所需的所有子模块，是此过程中至关重要的一步。
3. 在 loom 设置完成后，项目应该可以导入到你的 IDE 中。有关更详细的信息，请参阅 [Fabric 设置](https://fabricmc.net/wiki/tutorial:setup)。
4. 使用 `./gradlew build` 编译 jar 文件，或使用 `./gradlew :fabric:runServer` 或 `./gradlew :neoforge:runServer` 运行安装了 Hydraulic 的服务器。确保将 Geyser 安装到你的 `mods` 文件夹中！
