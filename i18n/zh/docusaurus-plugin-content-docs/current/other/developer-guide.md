---
title: 开发者指南
description: 为想要为 GeyserMC 项目做出贡献的开发者提供的指南。
---

# 编译 {#compiling}
1. 将仓库克隆到你的电脑上。
2. 确保你已安装 Java 21。
3. 导航到 Geyser 根目录并运行 `git submodule update --init --recursive`。此命令会下载 Geyser 所需的所有子模块，是此过程中的关键步骤。
4. 运行 `./gradlew build` 并定位到 `bootstrap/<platform>/build/` 文件夹。

# 项目布局 {#project-layout}

Geyser 的代码被划分为不同的模块。例如：

* `bootstrap` 是我们存放特定平台代码的地方。因此，如果你正在将 Geyser 移植到新平台，或者正在处理平台特定的代码，你可能需要在这里工作。
* `core` 是处理连接和进行数据/数据包转换的地方。Geyser 的大部分工作都在这里进行。
* `api` 是 Geyser API 所在的地方。
* `build-logic` 是用于构建 Geyser 的 Kotlin Gradle 插件所在的地方。

# 编译器/IDE 工具 {#compiler-ide-tools}

## Lombok {#lombok}

*请注意，最新版本的 IntelliJ IDEA 不需要额外设置即可使用 Geyser 进行开发。*

如果你使用 IDE 编辑任何 GeyserMC 项目，你很可能需要安装 Project Lombok 插件，因为它用于生成许多便捷的函数。
你可以在没有它的情况下进行编辑，但你的 IDE 中可能会显示缺少函数或其他问题。请参阅其网站上的 IDE 部分，了解支持的插件和安装方法 [https://projectlombok.org/setup/overview](https://projectlombok.org/setup/overview)。

# 协议信息 {#protocol-information}

## GopherTunnel {#gophertunnel}
[GopherTunnel](https://github.com/Sandertv/gophertunnel/tree/master/minecraft/protocol/packet) 是一个用 Go 编写的基岩版库。其源代码是基岩版协议的优秀文档。

## wiki.vg {#wikivg}
有关 Java 版协议的完整介绍，请参阅 [此处](https://wiki.vg/Protocol)。

## wiki.vg (基岩版) {#wikivg-bedrock}
基岩版协议记录在 [此处](https://wiki.vg/Bedrock_Protocol)，但目前不完整，因此仅将其用作参考。

# 程序 {#programs}

## debuginfo-be {#debuginfo-be}
[debuginfo-be](https://github.com/Heath123/debuginfo-be) 是一个 Spigot 插件，可为 Geyser 客户端显示一个带有有用调试信息的覆盖层，类似于 Java 版中的 F3 屏幕。

## pakkit {#pakkit}
pakkit 是一个基于 GUI 的工具，用于拦截服务器和客户端之间的数据包，由 Geyser 贡献者 [circuit10/Heath123](https://github.com/Heath123/) 使用 Electron 开发。它适用于 Java 版（使用 node-minecraft-protocol）和基岩版（作为 ProxyPass 的 GUI 包装器，添加了额外功能）。它支持的功能包括以 JSON 格式查看数据包数据、编辑和重发以及原始数据包数据的十六进制视图。你可以从 [此处](https://github.com/Heath123/pakkit/releases/) 下载它。它目前正在开发中，因此可能会有错误。

## Gadget {#gadget}
Gadget 是一个 Fabric 客户端模组，用于检查和记录 Java 服务器和 Java 客户端之间发送的数据包等内容。它可用于确定 Java 版的行为。
你可以从 [此处](https://modrinth.com/mod/gadget) 下载它。

## ProxyPass {#proxypass}
ProxyPass 是 Cloudburst 团队开发的用于拦截基岩版服务器和客户端之间数据包的工具。你可以在 [此处](https://github.com/CloudburstMC/ProxyPass) 找到它，而原版基岩版服务器可以在 [此处](https://www.minecraft.net/download/server/bedrock/) 找到。
有一个支持在线模式的 ProxyPass 分支（允许你加入 Geyser 服务器并查看发送的数据包）：[Kastle 的 proxypass 分支](https://github.com/Kas-tle/ProxyPass/)。

## MCC Toolchest {#mcc-toolchest}
MCC Toolchest 是一个用于查看和编辑基岩版 NBT 数据的工具，这使你可以查看数据在基岩版中的存储方式。你可以从 [此处](https://mcctoolchest.weebly.com/) 下载它。

## NBTExplorer {#nbtexplorer}
NBTExplorer 是一个用于查看和编辑 Java 版 NBT 数据的工具，这使你可以查看数据在 Java 版中的存储方式。你可以从 [此处](https://github.com/jaquadro/NBTExplorer/releases) 下载它。

## Windows 10 多版本启动器 {#windows-10-multi-version-launcher}
Windows 10 多版本启动器允许你在 Minecraft 基岩版的发布版和测试版之间切换。你可以在 [此处](https://github.com/MCMrARM/mc-w10-version-launcher/) 查看其 GitHub 仓库。
或者，使用 FoxyNoTail 的版本切换器，可在 [此处](https://foxynotail.com/software/mcbe-switcher) 找到。
注意：要为 Minecraft Preview 应用 [环回修复](/wiki/geyser/fixing-unable-to-connect-to-world#windows-1011)，请使用以下环回限制解除命令，并使用不同的应用 ID：`CheckNetIsolation LoopbackExempt -a -n="Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe"`
