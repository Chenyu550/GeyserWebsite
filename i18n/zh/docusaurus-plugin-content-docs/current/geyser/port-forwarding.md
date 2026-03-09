---
title: 端口转发
description: 关于如何设置 Geyser 所需的 UDP 端口转发的信息。
---

# 端口转发
本页面包含如何设置端口转发的信息，以便在自托管时让 Geyser 正常工作。
还包含针对特定配置的指南，例如 Docker/Pterodactyl，或特定的 VPS/KVM 提供商，例如 OVH 或 Oracle Cloud。

:::caution

如果您使用 Minecraft 服务器托管提供商（例如 Aternos 或 Nodecraft），您应该参考 [setup](/wiki/geyser/setup) 页面上的托管提供商设置。

:::

## 在 Linux/Windows/macOS 上进行端口转发 {#port-forwarding-on-linuxwindowsmacos}
要允许其他人在您的服务器上玩，您需要在托管 Geyser 的设备上设置端口转发。
此外，如果您希望服务器在您自己的家庭网络之外也能访问，您需要在路由器/调制解调器上转发端口（换句话说，允许并将该端口上的流量路由到正确的机器）。
请参阅 [这里](https://www.howtogeek.com/66214/how-to-forward-ports-on-your-router/) 或 [这里](https://www.lifewire.com/how-to-port-forward-4163829) 获取有用的指南。
请注意：如果您没有静态 IP 地址，您的 IP 地址可能会随时间变化。

:::info

某些 ISP（互联网服务提供商）会阻止某些端口，或者不允许您打开端口（例如使用 CGNAT，这不允许您使用动态 IP 打开端口）。
其他 ISP 可能会要求您为静态 IP 地址支付额外费用。
作为端口转发的替代方案，您可以使用 <a href="/wiki/geyser/playit-gg/">playit.gg</a> 来创建隧道。

:::

### Windows {#windows}
要在 Windows 上打开端口，您需要通过 Windows 防火墙打开端口。有多种方法可以做到这一点：

- `Powershell`（推荐）

  要打开 UDP 端口（在我们的示例中，端口 19132），请在管理员 Powershell 中运行以下命令：
  ```powershell
  New-NetFirewallRule -DisplayName "Geyser" -Direction Inbound -Protocol UDP -LocalPort 19132 -Action Allow
  ```
  运行此命令会创建一个名为 "Geyser" 的规则，允许端口 19132 上的 UDP 流量。


- 具有高级安全性的 Windows Defender 防火墙 (GUI)
  1. 在开始菜单中搜索"具有高级安全性的 Windows Defender 防火墙"，然后打开它。([图片](/img/wiki/port-forwarding/windows-1.png))
  2. 点击左侧边栏中的"入站规则"。([图片](/img/wiki/port-forwarding/windows-2.png))
  3. 点击右侧边栏中的"新建规则..."。([图片](/img/wiki/port-forwarding/windows-2.png))
  4. 选择"端口"作为规则类型，然后点击"下一步"。([示例](/img/wiki/port-forwarding/windows-3.png))
  5. 选择"UDP"和"特定本地端口"，然后输入您要打开的端口（在我们的示例中为 19132）。点击"下一步"。([示例](/img/wiki/port-forwarding/windows-4.png))
  6. 选择"允许连接"，然后点击"下一步"。([示例](/img/wiki/port-forwarding/windows-5.png))
  7. 选择您要应用规则的配置文件（例如"域"、"专用"、"公用"），然后点击"下一步"。([示例](/img/wiki/port-forwarding/windows-6.png))
  8. 输入规则的名称（例如"Geyser"），然后点击"完成"。([图片](/img/wiki/port-forwarding/windows-7.png))

### Linux {#linux}
不同的 Linux 发行版，甚至不同的 VPS 提供商都附带并配置了不同的防火墙。在以下示例中，我们将使用 `19132` 作为要打开的端口，但您应该将其替换为您用于 Geyser 的端口。

- `ufw` 是 iptables 的简单防火墙前端，常用于 Ubuntu 和 Debian。要打开 UDP 端口，请运行以下命令：
  ```bash
  sudo ufw allow 19132/udp
  ```
  然后，使用 `sudo ufw reload` 重新加载防火墙，并使用 `sudo ufw status` 查看所有打开的规则。
  更多有用的指南：[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server)，[Baeldung](https://www.baeldung.com/linux/uncomplicated-firewall)

- `firewalld` 通过运行以下命令添加 UDP 端口：
  ```bash
  sudo firewall-cmd --zone=public --permanent --add-port=19132/udp
  ``` 
  然后，使用 `sudo firewall-cmd --reload` 重新加载防火墙，并使用 `sudo firewall-cmd --list-all` 查看所有打开的规则。
  更多有用的指南：[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7)

- `iptables` 是许多 Linux 发行版使用的常见防火墙。要打开 UDP 端口，请运行以下命令：
  ```bash
  sudo iptables -A INPUT -p udp --dport 19132 -j ACCEPT
  ```
  然后，使用 `sudo iptables-save` 保存防火墙，并使用 `sudo iptables -L` 查看所有打开的规则。
  更多 iptables 的有用指南：[DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-iptables-on-ubuntu-14-04)，[Ubuntu](https://help.ubuntu.com/community/IptablesHowTo)

### macOS {#macos}
您需要在防火墙设置中禁用"阻止所有传入连接"，因为这会阻止任何连接，并且不允许您设置例外。
要允许传入连接，请在收到 [这些提示](/img/wiki/port-forwarding/macos_warning.png) 时点击"允许"。
如果您仍然遇到问题，请参阅 Apple 的官方指南 [这里](https://support.apple.com/guide/mac-help/MH11783) 来在 macOS 上打开端口。

## 使用 Docker 或 Pterodactyl {#using-docker-or-pterodactyl}
除了在服务器的防火墙（以及适用的话，您的路由器/调制解调器）中转发端口外，您还需要在 Docker/Pterodactyl 中分配端口。

### Pterodactyl {#pterodactyl}
确保在 Pterodactyl 面板的"网络"选项卡中为服务器分配端口，此外还要转发端口。
请参阅 [这里](https://pterodactyl.io/community/games/minecraft.html#allocations-in-the-panel) 获取更多信息。

![Pterodactyl 面板，网络部分](/img/wiki/port-forwarding/pterodactyl-1.png)

还有不同的 Geyser 蛋可用于 Pterodactyl，可在 [这里](https://github.com/GeyserMC/pterodactyl-stuff) 找到。

:::caution

如果您无法在 Pterodactyl 面板中分配端口，您需要联系您的服务器主机为您分配一个，或者尝试使用现有的端口分配。

:::

### Docker {#docker}
为了让 Geyser 在 Docker 下工作（例如使用 [Itzg 的 Docker 镜像](https://github.com/itzg/docker-minecraft-server)），您需要在 docker-compose 文件中添加 Geyser 的 UDP 端口。这可以通过在 `ports` 部分添加以下内容来完成：
```yaml
ports:
    - "25565:25565"
    - "19132:19132/udp"
```
需要额外的 `/udp` 后缀，以便端口在 UDP 上暴露。如果您想在同一端口上运行 Java 服务器和 Geyser，以下内容将起作用：
```yaml
ports:
    - "25565:25565"
    - "25565:25565/udp"
```
或者，在 docker run 命令中添加另一个端口，使用 `-p 19132:19132/udp` 标志。


## 特定 VPS/KVM 提供商的问题 {#issues-with-specific-vpskvm-providers}
某些提供商，例如 OVH、Oracle Cloud 和 SoYouStart，在默认情况下/大多数情况下都有阻止 UDP 端口的防火墙。

### OVH 和 SoYouStart {#ovh-and-soyoustart}
默认情况下，OVH 的防火墙需要在允许 UDP 连接之前对服务器进行 TCP ping。这对于 Geyser 是不可能的，因此您需要禁用防火墙。

:::caution

如果您无法访问这些防火墙设置，但被链接到此页面，请联系您的服务器主机并向他们提供此链接 - 他们可能在内部使用 OVH。

:::

**要验证/临时解决它：**

尝试通过 Web 浏览器连接到您的服务器 IP 和端口 - 例如，`http://test.geysermc.org:19132`。连接不会起作用，但然后尝试在同一设备上通过 Bedrock 连接，它应该会起作用。
或者，尝试先在 Java 版上连接到服务器，然后在同一设备上用 Bedrock 连接。

**要解决它：**

OVH:
1. 导航到 `Network interfaces`
2. 点击表格中您的 IP 旁边的 `...` 按钮 -> 然后点击 `...` 和 `Configure the GAME firewall` -> `Add rule` -> `Other protocol` ~~(或 `minecraftPocketEdition` 如果可用)~~
3. 将您的 Geyser 端口添加到 `outgoing port` 中。

SoYouStart (OVH 的子公司):
1. 点击 IP 选项卡。
2. 点击公共 IP 地址右侧的齿轮；选择"Game mitigation"。
3. 选择"添加规则"。
4. 在下拉列表中选择"minecraftPocketEdition"并输入目标 UDP 端口。
5. 保存并等待几秒钟，使更改生效。

#### OVH/SoYouStart 游戏防火墙不兼容问题
OVH GAME 过滤器类型 `minecraftPocketEdition` 目前不起作用，您必须使用 `Other` 类型。

如果您想继续使用过滤器类型 `minecraftPocketEdition`，您可以通过在 Java 服务器（或 Geyser 独立代理）的启动标志中添加 `-DGeyser.RakSendCookie=false` 来禁用不兼容的安全功能。

有关更多信息，请参阅：
 - [OVH 基础设施路线图上的此问题](https://github.com/ovh/infrastructure-roadmap/issues/186)
 - [实现导致不兼容的安全功能的拉取请求](https://github.com/GeyserMC/Geyser/pull/4554)

### Oracle Cloud/OCI {#oracle-cloudoci}
默认情况下，Oracle Cloud 会阻止除 SSH 和 RDP 之外的所有传入流量。这必须在 Oracle Cloud 本身和运行 Geyser 的 Compute Instance 中解决。

以下步骤假设您使用的是 Java 服务器和 Geyser 的默认端口，并且应相应调整。

1. 在 OCI 控制台中找到您的 Compute Instance
2. 点击实例的虚拟云网络（这将在"实例详细信息"下）
3. 在左侧，选择"安全列表"
4. 选择一个安全列表。默认情况下只存在一个安全列表。我们将规则添加到哪个安全列表并不重要。
5. 选择"添加入站规则"
6. 为 Java 配置规则（可选）
   - 将"源 CIDR"设置为 `0.0.0.0/0`
   - 将"目标端口范围"设置为 `25565-25565`
   - 选择"另一个入站规则"
7. 为 Geyser 配置规则
   - 将"源 CIDR"设置为 `0.0.0.0/0`
   - 将"目标端口范围"设置为 `19132-19132`
   - 将"IP 协议"设置为 UDP
8. 选择"添加入站规则"

#### Oracle Linux {#oracle-linux}

运行以下命令以允许 Minecraft 和 Geyser 通过操作系统防火墙：

```bash
sudo firewall-cmd --add-port=25565/tcp --permanent
sudo firewall-cmd --add-port=19132/udp --permanent
sudo firewall-cmd --reload
```

#### Ubuntu {#ubuntu}

运行以下命令以允许 Minecraft 和 Geyser 通过操作系统防火墙：

```bash
sudo ufw allow 25565/tcp
sudo ufw allow 19132/udp
```
