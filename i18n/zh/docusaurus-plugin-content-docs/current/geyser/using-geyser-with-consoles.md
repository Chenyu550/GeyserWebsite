---
title: 在主机上使用 Geyser
description: 关于如何在主机上使用 Geyser 的信息，包括如何在主机版基岩版上加入服务器。
---

# 在主机上使用 Geyser

所有主机都可以通过变通方法加入第三方服务器——包括 Geyser 服务器。Xbox One、Nintendo Switch 和 PS4 系统可以使用名为 BedrockConnect 的第三方程序加入第三方服务器。有关该程序的技术信息，包括如何运行自己的设置，请参阅 [他们的 GitHub 仓库](https://github.com/Pugmatt/BedrockConnect)（*该程序与 GeyserMC 无关*）。也可以使用其他方法。

<!--还有一个任何人都可以设置的工具，允许你通过将用户添加到好友列表来连接到服务器——[FriendConnect](https://github.com/jrcarl624/FriendConnect) 和 [MCXboxBroadcast](https://github.com/rtm516/MCXboxBroadcast)。后者甚至可以设置为 Geyser 扩展。-->

:::note

BedrockConnect 使用的主要 IP 经常在主机上被屏蔽，
如果你在更改 DNS 后遇到互联网连接或加入服务器的问题，
考虑使用 [BedrockConnect Github 页面](https://github.com/Pugmatt/BedrockConnect) 上的其他 BedrockConnect 服务器之一，
或者使用 [Public GeyserConnect](https://www.geyserconnect.net)，它允许连接到 Java 和基岩版服务器。

:::

## Xbox One {#xbox-one}

（视频链接如下）

[![Xbox One BedrockConnect](https://img.youtube.com/vi/g8mHvasVHMs/0.jpg)](https://www.youtube.com/watch?v=g8mHvasVHMs)

## Nintendo Switch {#nintendo-switch}

（视频链接如下）

[![Nintendo Switch BedrockConnect](https://img.youtube.com/vi/zalT_oR1nPM/0.jpg)](https://www.youtube.com/watch?v=zalT_oR1nPM)

文字说明：
1. 从 Nintendo Switch 主机的主页菜单中选择“系统设置”。
2. 选择“互联网”，然后选择“互联网设置”。你的 Nintendo Switch 主机将自动搜索附近的 Wi-Fi 信号。
3. 从“已注册的网络”下的网络列表中选择你的网络。
4. 选择“更改设置”，然后向下滚动并选择“DNS 设置”。
5. 选择“手动”。
6. 用 A 按钮选择“首选 DNS”，然后按住 B 按钮删除 DNS（默认为零）。
7. 输入首选首选 DNS 的 BedrockConnect IP（可以在 [BedrockConnect Github 页面](https://github.com/Pugmatt/BedrockConnect) 上找到根据地区而定的多个选项）。
8. 用 A 按钮选择“备用 DNS”，然后按住 B 按钮删除现有 DNS。
9. 输入备用 DNS。推荐使用 Google 或 Cloudfare 的 IP（8.8.8.8 或 1.1.1.1）。

## PlayStation 4 {#playstation-4}

1. 转到你的 PS4 主屏幕。
2. 转到设置。
3. 转到网络。
4. 选择设置互联网连接。
5. 如果你使用有线互联网，选择“使用 LAN 电缆”，否则选择“使用 Wi-Fi”。
6. 选择自定义网络创建模式。
7. 选择自动 IP 地址。
8. 对于 DHCP 主机名，确保你选择不指定。
9. 在 DNS 设置下，选择手动。
10. 输入首选首选 DNS 的 BedrockConnect IP（可以在 [BedrockConnect GitHub 页面](https://github.com/Pugmatt/BedrockConnect) 上找到根据地区而定的多个选项），并为备用 DNS 输入类似 Google 或 Cloudflare 的 IP（8.8.8.8 或 1.1.1.1）。

## 替代方法 {#alternative-methods}

如果你宁愿尝试在网络上的另一台设备上模拟局域网游戏，以下是操作方法。

### 多平台 {#multiplatform}

#### Netherlink — 免费且无广告。

- iOS（iOS 12.0 或更高版本）：[在 App Store 下载](https://apps.apple.com/be/app/netherlink/id6747323142?l=en)  
- Android：[在 Play Store 下载](https://play.google.com/store/apps/details?id=net.netherdev.netherLink)  
- macOS：[下载 DMG](https://github.com/NetherLinkMC/NetherLinkWebsite/raw/refs/heads/main/downloads/apple/NetherLink.dmg)  
- Windows：[下载安装程序 (.exe)](https://github.com/NetherLinkMC/NetherLinkWebsite/raw/refs/heads/main/downloads/windows/NetherLinkInstaller.exe)


### 使用电脑 {#using-a-pc}
*请注意，此方法不适用于 Nintendo Switch。*
- [Phantom](https://github.com/jhead/phantom)。

### 使用 Android 设备 {#using-an-android-device}
如果你有 Android 设备，你有几个选择：
- [BedrockTogether](https://play.google.com/store/apps/details?id=pl.extollite.bedrocktogetherapp)
- [MC Lan Proxy (试用版)](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroidtrial)
- [MC Lan Proxy (付费版)](https://play.google.com/store/apps/details?id=com.luzenna.mineproxydroid)
- [MC Server Connector](https://play.google.com/store/apps/details?id=com.smokiem.mcserverconnector)

### 使用 iOS 设备 {#using-an-ios-device}
如果你有 iOS 14+ 设备，你可以使用 [BedrockTogether](https://apps.apple.com/app/bedrocktogether/id1534593376)。
