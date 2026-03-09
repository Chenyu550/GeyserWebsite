---
title: GeyserConnect
description: GeyserConnect 是 Geyser 的一个扩展，允许你使用单个 Geyser 代理连接多个服务器。
---

GeyserConnect 是 Geyser 的一个扩展，允许你使用单个 GeyserMC 代理连接多个服务器。

## 设置 {#setup}
（要使 GeyserConnect 正常工作，你需要开放一个 UDP 端口，默认情况下是 `19132`）。
1. 从[下载页面](/download)下载最新的 Geyser 构建版本
2. 从[这里](https://geysermc.org/download/?project=other-projects&geyserconnect=expanded)下载最新的构建版本
3. 解压下载的 ZIP 文件，并将解压后的 JAR 文件放入 GeyserMC 独立安装目录的 `extensions` 文件夹中。
4. 像正常安装 Geyser 一样启动 Geyser 独立版本。例如：`java -Xms1024M -jar Geyser.jar`（更多信息请参见[创建启动脚本](/wiki/geyser/creating-a-startup-script/)）
5. 关闭 Geyser 独立实例，并在 `extensions` 文件夹中的 `GeyserConnect` 里进行你想要的 GeyserConnect 配置更改。
6. 连接到它以确保一切正常工作。

## DNS {#dns}
如果你想使用 DNS 配置，仓库中有 [DNS](https://github.com/GeyserMC/GeyserConnect/tree/master/bind9)（使用 bind9）配置文件。

## 配置 {#config}
请参阅[这里](https://github.com/GeyserMC/GeyserConnect/blob/master/src/main/resources/config.yml)。
