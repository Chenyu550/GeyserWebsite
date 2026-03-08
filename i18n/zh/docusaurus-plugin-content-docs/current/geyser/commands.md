---
title: 命令与权限
description: Geyser 的命令及其关联的权限节点说明。
---

# 命令与权限

Geyser 内置了许多可供玩家或服务器管理员使用的命令。

:::info

使用 BungeeCord 和 Velocity 时，你需要在代理服务器上使用诸如 <a href="https://luckperms.net/">LuckPerms</a> 之类的权限插件
为玩家分配权限。在后端服务器上分配权限将无效。

:::

## Geyser 命令及其权限 {#geyser-commands--their-permissions}

| 命令                                   | 权限                          | 描述                                                                                                   |
|:-------------------------------------:|:-----------------------------:|:------------------------------------------------------------------------------------------------------:|
|  `geyser` <br/> Geyser 根命令          |       `geyser.command`        |                       查看/执行任何 Geyser 命令所需的基础权限。                                        |
|    `geyser help` <br/> `geyser ?`     |     `geyser.command.help`     |                               显示所有已注册命令的帮助信息。                                          |
|         `geyser advancements`         | `geyser.command.advancements` |                                   打开 Java 版的进度菜单。                                             |
|             `geyser dump`             |     `geyser.command.dump`     |                           导出 Geyser 调试信息（用于提交漏洞报告）。                                   |
|             `geyser list`             |     `geyser.command.list`     |                              列出所有通过 Geyser 连接的玩家。                                          |
|           `geyser offhand`            |   `geyser.command.offhand`    |                                    将物品放入副手栏。                                                 |
|            `geyser reload`            |    `geyser.command.reload`    |                   重新加载 Geyser 配置文件。使用此命令会踢出所有在线玩家！                             |
|           `geyser settings`           |   `geyser.command.settings`   |                  打开设置菜单，可修改世界相关的各项设置。                                               |
| `geyser shutdown` <br/> `geyser stop` |   `geyser.command.shutdown`   |                   关闭 Geyser。<br/>*此命令仅在独立版（Standalone）中生效。*                            |
|          `geyser statistics`          |  `geyser.command.statistics`  |                                    打开 Java 版的统计信息菜单。                                       |
|           `geyser version`            |   `geyser.command.version`    |                       显示当前 Geyser 版本并检查更新。                                                 |
|           `geyser tooltips`           |   `geyser.command.tooltips`   |                          切换是否显示高级提示信息（Java 版按 F3 + H）                                |
|          `geyser extensions`          |  `geyser.command.extensions`  | 列出所有当前已加载的扩展。仅当有扩展被加载时，此命令才会被注册。                                       |
|             `geyser ping`             |     `geyser.command.ping`     |                      显示玩家与 Geyser 实例之间的延迟（Ping 值）。                                     |
|           `geyser options`            |   `geyser.command.options`    |               若由 Java 版服务器触发，则打开“暂停界面扩展项”对话框。                                   |
|         `geyser quickactions`         | `geyser.command.quickactions` |                   若由 Java 版服务器触发，则打开“快速操作”对话框。                                     |

## Geyser 扩展的权限 {#extension-permissions}

以下内容中，`<id>` 指代扩展的唯一标识（ID）。

| 命令                       | 权限                          | 描述                                                       |
|:---------------------------|:------------------------------|:----------------------------------------------------------|
| `<id> help` <br/> `<id> ?` | `geyser.command.exthelp.<id>` | 显示此扩展所注册的所有命令的帮助信息。                     |

## 其他权限 {#other-permissions}

除命令外，还有一些其他权限用于管控 Geyser 的特定功能。

| 权限                       | 描述                                                                                                                               |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `geyser.settings.server`   | 允许玩家使用[游戏设置菜单](/img/wiki/game_menu.png)。（同时要求玩家拥有管理员（OP）权限。）                                          |
| `geyser.settings.gamerules`| 定义用户是否可在[游戏设置菜单](/img/wiki/game_menu.png)中修改游戏规则（Gamerule）。（同时要求玩家拥有管理员（OP）权限。）           |
| `geyser.update`            | 该玩家加入服务器时是否会收到 Geyser 的更新通知。                                                                                   |

## 使用 Geyser-Standalone/Geyser-ViaProxy 时的权限 {#standalone-viaproxy-permissions}
Geyser-ViaProxy 和 Geyser-Standalone 内置了基础的权限处理机制。若要编辑基础权限，
请打开 `permissions.yml` 文件，添加或移除 Geyser 玩家加入时应获得的权限。
更多信息请参考该文件内的说明。

你还可以通过创建[Geyser 扩展](/wiki/geyser/extensions/)并调用 Geyser 的 API 来处理权限校验，从而进一步自定义权限管理逻辑。

## 在无内置权限处理机制的平台上使用 Geyser 时的权限 {#permissions-platforms-no-permission-handlers}
以下内容适用于 Geyser-BungeeCord、Geyser-Velocity 和 Geyser-Fabric 版本。
遗憾的是，这些平台没有内置的权限处理机制。因此，你需要在这些平台上通过权限插件（如 [LuckPerms](https://luckperms.net/)）
手动为玩家授予权限。Geyser 核心权限已在上文列出，扩展的权限请参考对应扩展的文档。

你也可以使用第三方 Geyser 扩展 [LuckLink](https://github.com/onebeastchris/LuckLink)，通过 [LuckPerms](https://luckperms.net/) 自动注册权限：
- 在安装了 Geyser 的平台（BungeeCord/Velocity/Fabric）上安装 [LuckPerms](https://luckperms.net/)。
- 若要让 Geyser 自动注册权限默认值，请下载 `LuckLink.jar` 并将其放入 Geyser 的 `extensions` 文件夹，以此安装 [LuckLink](https://github.com/onebeastchris/LuckLink) 扩展。
- 重启服务器后，权限应会被自动注册。

## Floodgate 命令与权限 {#floodgate-commands-and-permissions}

关于 Floodgate 的命令，请参考[此链接](/wiki/floodgate/commands/)。