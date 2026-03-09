---
title: playit.gg 安装教程
description: 如何设置 playit.gg 来使用 Geyser 而无需端口转发。
---

## 前置条件 {#prerequisites}

:::info
你必须能够在本地连接到你的 Geyser 实例！
:::

:::warning
playit.gg 的 Minecraft 服务器插件不支持 UDP 隧道。你必须使用程序代理！
:::

- 如果你已经安装并运行了 playit.gg（例如用于 Minecraft Java 版），请跳过第 1 和第 2 步，直接从第 3 步开始。

## 安装教程 {#setup}
1. 前往 [playit.gg 官网](https://playit.gg/) - 下载程序并运行它。它会在浏览器中打开登录页面 - 创建账户并登录，或者使用访客账户。
2. 登录后，确保将程序与网站连接，直到完成第 4 步。这应该会自动完成，如果没有，请按照网站和 playit.gg 程序控制台中的说明操作。
   ![img](/img/wiki/playit-gg/running.png)
3. 如果你看到上面的屏幕，请点击"创建隧道"，或者在登录账户后选择"隧道"选项卡。在那里，选择"Minecraft Bedrock"，保持"启用隧道"勾选状态，然后点击"添加隧道"。
   ![img](/img/wiki/playit-gg/add_tunnel.png)
4. 点击"添加隧道"后，它应该会创建一个新的隧道，你就设置完成了！向下滚动直到你看到这个：
   ![img](/img/wiki/playit-gg/added_tunnel.png)
   在 Geyser 配置中，将 `advanced.bedrock.broadcast-port` 设置为"分配"选项卡中的 playit.gg 端口。这对于显示服务器信息是必要的。

   **除非你有理由（例如在同一台机器上托管另一个 Geyser 服务器），否则请不要更改 `config.yml` 中的 Geyser 端口**，如果有这种情况，请跳到下面的段落。`config.yml` 中的基岩版（Geyser）端口和 playit.gg 端口是完全分开的，playit.gg 会将其端口转发到默认的 Geyser 端口，并且应该已经可以正常工作。更改它可能会导致错误。如果你更改了配置端口，请将基岩版端口改回默认值 19132，并确保 `clone-remote-port` 为 `false`。

   如果你的 Geyser 运行在非 19132 的端口上，请在上面显示的页面上更新"本地端口"为你的 Geyser 端口。除非你没有在同一设备上运行 playit.gg 和 Geyser，否则"本地地址"不需要更改。
5. 连接到你的服务器 - 使用"分配"选项卡中的 IP 和端口。在我们的示例中 - "180.ip.ply.gg" 作为 IP，"17019" 作为端口。或者，使用它提供的域名代替 IP。
6. 如果你成功加入，那么你就完成了！请确保保持 playit.gg 程序运行，因为关闭它会关闭隧道。你可能还想限制单个连接的速率 - 使用"每个连接速率限制"选项来实现。
   （如果你无法加入，请查看本页面的 [故障排除](#troubleshooting) 部分。）

## 故障排除 {#troubleshooting}

### 我无法连接到我的服务器！ {#i-cant-connect-to-my-server}
* *你的 Minecraft 服务器控制台中是否有错误？*
* *除非你在 playit.gg 网站上手动更改了"本地端口"，否则在 Geyser 配置中，请确保基岩版端口是默认值 `19132` 并且 `clone-remote-port` 为 `false`。*
* *如果你更改了 `bedrock-port` 或将 `clone-remote-port` 设置为 `true` 并且有理由这样做（例如在同一台机器上托管另一个 Geyser 服务器），你必须告诉 playit.gg 使用那个端口！请参阅第 4 步的最后一段。*
* *检查你是否使用了"分配"选项卡中的 playit.gg IP 和端口来加入。*
* *确保在尝试加入时程序代理是打开的。*
* *请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)了解一般故障排除步骤。*
