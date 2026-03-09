---
title: Geyser 命令行参数与系统属性
description: Geyser 提供了一些命令行参数/系统属性，让您无需编辑配置文件即可配置 Geyser。
---

# Geyser 命令行参数与系统属性

Geyser 提供了一些命令行参数/系统属性，让您无需编辑配置文件即可配置 Geyser。
此外，您还可以抑制一些可能会打印到控制台的警告。

## 配置系统属性 {#configuration-system-properties}

您可以使用以下命令行参数将 Geyser 自动绑定到特定地址和端口。
这主要针对服务器托管提供商，用于为用户自动配置服务器。

:::note

Geyser 特定属性的优先级高于插件属性！

:::

- ```-DgeyserUdpPort=server``` 或 ```-DpluginUdpPort=server```
  - ```-1``` 表示不支持 UDP，将强制停止 Geyser。
  - ```server``` 表示匹配 TCP 服务器的端口。
  - 任何其他数字表示使用该特定端口

- ```-DgeyserUdpAddress=server``` 或 ```-DpluginUdpAddress=server```
  - ```server``` 表示匹配 TCP 服务器的绑定地址
  - 任何其他字符串将直接用作绑定地址。

- ```-DgeyserBroadcastPort=19132```
    - 当 Geyser 运行的端口与玩家连接使用的端口不匹配时（例如由于端口转发路由），可以使用此参数。
    - 如果未设置或设置为 0，则默认为 Geyser 运行的端口

## 禁用警告和高级配置 {#disabling-warnings-and-advanced-configuration}

您可以使用以下命令行参数禁用一些可能会打印到控制台的警告。除非另有说明，否则显示的值是 Geyser 使用的默认值。

:::caution

禁用 Geyser 警告日志并不能解决实际问题！只有在您了解自己在做什么的情况下才禁用它们。

:::

- `-DGeyser.PrintSecureChatInformation=true`
  - 允许您禁用有关安全聊天已禁用的警告。
  由于该警告是在服务器发送警告时触发的，因此此选项现在作用不大。
- `-DGeyser.ShowScoreboardLogs=true`
  - 允许您禁用与计分板相关的警告，例如“尝试在不存在请求的目标的情况下更新分数”。
- `-DGeyser.ShowResourcePackLengthWarning=true`
  - 允许您禁用有关资源包路径过长的警告。禁用此警告并不能解决潜在问题！
  如果您的资源包路径超过 80 个字符，控制台玩家可能根本无法加入您的服务器。
- `-DGeyser.PrintPingsInDebugMode=true`
  - 控制是否在调试模式下记录 ping 信息。
- `-DGeyser.UseDirectAdapters=true`
  - 允许您禁用 NMS 适配器的使用。禁用会导致性能下降，仅应用于调试。
  这仅适用于 Spigot，在其他平台上不起作用。
- `-DGeyser.BedrockNetworkThreads=8`
  - 允许您设置用于 Bedrock 网络的线程数。默认情况下不设置为特定数字，而是根据可用资源计算。
- `-DGeyser.AddTeamSuggestions=true`
  - 允许您关闭计分板命令中的队伍建议。默认启用，如果定义了大量队伍，禁用此功能有助于提高性能。在配置中将“command-suggestions”设置为 false 也会禁用此功能。
- `-DGeyser.NoPlayerListPS=true`
  - 启用一个不太理想的解决方法，以解决 PlayStation 主机上在线玩家较多时聊天/输入命令导致客户端崩溃的问题。
  默认禁用，因为大多数设置不需要它。
- `-DGeyser.RakPacketLimit=120`
  - 设置 RakNet 每 IP 每 tick（10ms）的连接后数据包限制。
- `-DGeyser.RakGlobalPacketLimit=100000`
  - 设置 RakNet 每 tick（10ms）的全局数据包限制。
- `-DGeyser.RakRateLimitingDisabled=false`
  - 允许您禁用 RakNet 的连接后速率限制器。除非初始 RakNet 连接由反向代理处理，否则不应禁用速率限制器。
- `-DGeyser.RakSendCookie=true`
  - 允许您禁用在 [Open Connection Reply 1](https://wiki.vg/Raknet_Protocol#Open_Connection_Reply_1) 数据包中发送和验证 cookie 挑战。除非 Geyser 在也发送挑战以防止 IP 欺骗的反向代理后面运行，否则不应将其设置为 `false`。

## Geyser 独立版特定选项 {#geyser-standalone-specific-options}

### `--config [file]` {#--config-file}
- **别名: `-c`**
- 指定要使用的替代配置文件。

### `--gui` / `--nogui` {#--gui----nogui}
- **别名: `gui` / `nogui`**:
- 根据上下文强制使用 GUI 或 非GUI。

## 覆盖特定配置值 {#overriding-specific-config-values}
覆盖标准配置选项（例如 `command-suggestions`）：

`--command-suggestions=false`

覆盖嵌套配置选项（例如 `remote` 部分的 `address`）：

`--remote.address=test.geysermc.org`
