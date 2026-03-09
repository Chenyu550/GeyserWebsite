---
title: Discord 机器人使用说明
description: 关于如何使用 Geyser Discord 机器人的信息。
---

我们的 Discord 机器人提供了一些非常有用的工具来调试/跟踪您的服务器问题。我们将深入介绍如何使用机器人命令及其工具。

## 服务器日志 {#server-logs}

如果您遇到控制台错误或 Geyser 无法正常运行/启动，服务器日志对于找出 Geyser 无法运行的根本原因非常有用。您可以安全地使用 [mclogs](https://mclo.gs) 分享您的服务器日志，因为它会从日志中删除所有 IP 地址和其他敏感信息。

如果您将日志 URL 粘贴到我们的 Discord 中，我们的机器人将分析错误，并在存在修复方法时提供修复方案，如下所示。您也可以将 `latest.log` 文件粘贴到 Discord 中。

![错误示例](/img/wiki/discord-bot/logs.png)

## OCR {#ocr}

OCR（光学字符识别）是我们的 Discord 机器人可以处理的功能，这意味着如果您上传一张包含错误的图片到我们的 Discord，如下所示，机器人可能能够帮助您解决问题。

![错误示例](/img/wiki/discord-bot/ocr.png)

## Ping 服务器 {#ping-server}

如果您不确定您的服务器是否可以从外部访问，您可以使用我们的 ping 工具。在 #bot-spam 频道中使用 ping 命令：/ping "服务器IP"，如下所示，机器人将检查您的服务器是否在线/可访问。如果您的服务器没有在默认端口上运行：Java 版 25565 和基岩版 19132，您需要指定端口，例如 /ping "服务器IP:服务器端口"。

如果机器人返回 `Unable to find Java/Bedrock server at the requested address`（无法在请求的地址找到 Java/基岩版服务器），您的服务器要么没有正确运行/设置，要么您的防火墙阻止了连接。有关如何设置 Geyser 的更多信息，请查看 [Geyser 设置页面](/wiki/geyser/setup/)。

![ping 命令示例](/img/wiki/discord-bot/ping.png)

## 提供商列表 {#provider-list}

一些托管提供商有独特的 Geyser 设置方法。如果您不知道如何在您的提供商上设置 Geyser，您可以手动查看 [Geyser 托管提供商列表](/wiki/geyser/supported-hosting-providers/)，或者使用我们的机器人命令 `/provider "提供商名称"`，如下所示。

![provider 命令示例](/img/wiki/discord-bot/provider.png)

## 下载命令 {#download-command}

发送所选程序/插件的下载链接。`/download "Geyser"` 或 `/download "ViaVersion"` 等等。

## 排行榜命令 {#leaderboard-command}

提供指向 Geyser 机器人经验排行榜的链接。

## 排名命令 {#rank-command}

您可以在我们的 Discord 上给自己两种类型的角色，"GeyserNews" 和 "Testers"。您可以使用命令 `/rank "所选角色"` 给自己添加角色。

## 队列命令 {#queue-command}

显示当前全局 API 皮肤队列上传时间。


