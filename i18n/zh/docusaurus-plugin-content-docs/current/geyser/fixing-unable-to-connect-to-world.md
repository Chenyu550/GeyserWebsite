---
title: 修复“无法连接到世界”问题
description: 解决“无法连接到世界”错误的常见问题与方案。
---

## 修复“无法连接到世界”错误 {#fixing-unable-to-connect-to-world-errors}
这是用户在设置 Geyser 时最常遇到的错误。以下是一些解决步骤。
通常，此错误是由 Geyser 配置不当或网络问题引起的。

:::warning
如果你使用的是 Minecraft 服务器托管商（例如 Aternos 或 Apex Hosting），请参考[设置](/wiki/geyser/setup)页面上的托管商设置说明。按照这些说明操作很可能会解决问题！
:::

如果你没有使用 Minecraft 服务器托管商，请继续阅读。

:::info
要检查你的服务器是否（理论上）可以通过基岩版连接，请尝试在服务器控制台中运行以下命令：
`geyser connectiontest <ip> <port>`，然后查看它建议的解决方法。
:::

### Java 版玩家无法连接！ {#java-edition-players-cant-connect}

这**不应该是** Geyser 的问题。Geyser 不会修改服务器行为。Floodgate 确实会修改登录结构，但仅针对基岩版玩家。
请联系你的托管商或在其他地方寻找解决此连接问题的方法。

### 更新 Geyser 后连接失败 {#connecting-fails-after-updating-geyser}

如果你是在更新插件版 Geyser 后出现此问题，请确保你已关闭服务器、替换 Geyser jar 文件，然后重新启动服务器。
如果你重置了配置文件，请再次查看[设置指南](/wiki/geyser/setup/)。

### 我的控制台中有错误！ {#there-are-errors-in-my-console}

请阅读[常见问题页面](/wiki/geyser/common-issues/)。如果那里没有记录其他错误，请加入我们的 [Discord](https://discord.geysermc.org) 服务器。

### 尝试重启服务器和游戏 {#try-restarting-the-server-and-game}

尤其是在移动设备上，有时只需重启 Minecraft 即可解决问题。

### 是服务器问题还是客户端问题？ {#is-it-the-server-or-the-client}

在此处输入你的 Java 服务器 IP 和基岩版地址：https://mcsrvstat.us/。这是确定服务器是否可以被访问的好方法。
此外，检查你是否可以在服务器控制台中看到连接尝试。如果没有，很可能是网络问题。

对于主机端玩家：如果只有他们无法加入，而其他基岩版玩家可以加入，这很可能是他们的主机连接方法有问题。

# 常规故障排除步骤

### 确保你使用正确的 IP 和端口进行连接 {#ensure-youre-connecting-on-the-right-ip-and-port}

你应该使用 Java 服务器 IP 和基岩版端口（在 Geyser 配置中设置）进行连接。例如，如果你端口转发了 19132，那么从基岩版连接时应指定端口 19132。

### 我使用的是托管商或 VPS！ {#im-using-a-hosting-provider-or-vps}

请阅读[支持的托管商页面](/wiki/geyser/supported-hosting-providers/)，查看你的托管商或服务器提供商是否需要额外的配置步骤。
一些 VPS/KVM 提供商可能需要进一步设置，例如 OVH、SoYouStart 和 Oracle Cloud。请阅读此[说明](/wiki/geyser/port-forwarding#issues-with-specific-vpskvm-providers)以获取更多信息。

### 使用 Docker 或 Pterodactyl 时遇到问题 {#issues-using-docker-or-pterodactyl}

确保你已将端口分配给 Pterodactyl，在 Docker 中则要分配给 docker compose 文件。请查看我们的[端口转发](/wiki/geyser/port-forwarding#using-docker-or-pterodactyl)页面以获取解决方案。

## 端口转发问题 {#port-forwarding-issues}

你的服务器需要进行端口转发，以允许来自本地网络之外的连接。有关更多信息，请参阅[我们的端口转发指南](/wiki/geyser/port-forwarding/)。

### 在 DNS 选项/端口转发中使用 TCP 而不是 UDP {#using-tcp-in-dns-optionsport-forwarding-instead-of-udp}

Minecraft：Java 版使用 TCP 进行连接；Minecraft：基岩版使用 UDP。仅使用 TCP 转发基岩版端口将无法工作，必须使用 UDP。同时转发基岩版端口的 `TCP/UDP`（两种协议）也可以工作，但除非 Java 版和基岩版共享同一端口，否则不建议这样做。

### 基岩版端口小于 10000 {#bedrock-port-is-less-than-10000}

从历史上看，使用较小的基岩版端口会导致问题。将其设置为 10000 或以上似乎是安全的。

### 基岩版玩家可以在通过 TCP 端口访问服务器后连接（例如通过 Java 版或同一服务器上的网站），或者只有同时玩 Java 版的玩家才能通过 Geyser 加入 {#bedrock-players-can-connect-after-hitting-the-server-on-a-tcp-port-eg-on-java-or-a-website-on-the-same-server-or-only-people-who-also-play-on-java-edition-can-join-from-geyser}

这很可能是你的服务器上的防火墙问题。请尝试以下解决方法：
尝试通过 Web 浏览器连接到基岩版 IP 和端口 - 例如，`http://test.geysermc.org:19132`。这不会成功，但之后尝试通过基岩版连接，应该就可以工作了。

针对 OVH/SoYouStart 的特定主机修复方法可以在[此处](/wiki/geyser/port-forwarding#issues-with-specific-vpskvm-providers)找到。

### 修改 Geyser 配置中的 `bedrock` `address` {#changing-the-bedrock-address-in-the-geyser-config}

除了少数特定的托管商外，你通常不需要修改 Geyser 配置的这一部分。
但是，在极少数情况下，这确实可以解决问题 - 例如，当 Windows 有多个网络适配器时（通过在 cmd 中运行 `ipconfig` 检查），
将 `address` 设置为你要使用的适配器的本地 IP 会有所帮助。

## 使用托管商或其他环境 {#using-a-hosting-provider-or-other-location}

### Pterodactyl {#pterodactyl}

如果你在使用 Pterodactyl 面板时遇到此错误，请尝试编辑 Geyser 配置并将端口更改为 `19132` 以外的端口（例如 `25566`）。

## 在同一网络中的另一台计算机上托管 Geyser {#hosting-geyser-on-another-computer-on-the-same-network}

### 只能从同一台计算机连接，而无法从其他地方连接 {#can-only-connect-from-the-same-computer-and-not-anywhere-else}

很可能是防火墙阻止了连接。尝试为 Java 添加例外，或暂时禁用防火墙以进行测试。

## 最后的故障排除手段... {#as-a-last-resort-for-troubleshooting}

Minecraft 提供了官方基岩版服务器[下载](https://www.minecraft.net/download/server/bedrock)。下载、运行并尝试连接到它可能有助于确定问题是出在 Geyser 端，还是你的计算机/网络端。
