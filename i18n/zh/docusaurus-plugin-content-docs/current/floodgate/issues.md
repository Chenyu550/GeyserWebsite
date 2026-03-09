---
title: 已知问题与注意事项
description: 排查Floodgate的常见问题。获取连接故障、配置错误及已知限制的解决方案。
---

# 已知问题与注意事项
如果您遇到的问题未在此列出，建议加入Geyser的[Discord服务器](http://discord.geysermc.org/)寻求帮助。

## 执行命令 {#running-commands}
在某些场景下（例如将`username-prefix`（用户名前缀）设为`*`时），您可能需要将基岩版玩家的用户名用引号包裹；示例：`/tp "*BedrockPlayer"`。将前缀设为`.`也可解决该问题。

## 若需使用IP转发，请同时在BungeeCord配置中启用该功能！ {#if-you-wish-to-use-ip-forwarding-please-enable-it-in-your-bungeecord-config-as-well}
该问题通常是因为您已在Floodgate配置中启用`send-floodgate-data`（发送Floodgate数据），但目标服务器未安装Floodgate，或不同插件实例间的Floodgate密钥不一致（请拷贝密钥，确保所有实例使用同一密钥）。

## `java.lang.IllegalStateException: Cannot reply to EncryptionRequestPacket without profile and access token.` {#javalangillegalstateexception-cannot-reply-to-encryptionrequestpacket-without-profile-and-access-token}

请确认服务器已正确安装并启动Floodgate。若问题仍存在，可参考下一条解决方案。

## `javax.crypto.AEADBadTagException: Tag mismatch!` {#javaxcryptoaeadbadtagexception-tag-mismatch}

如果Geyser和Floodgate部署在同一服务器：关闭服务器，删除`floodgate`插件文件夹，删除Geyser文件夹内的所有密钥文件，然后重启服务器。
如果Geyser和Floodgate部署在不同服务器，且您需要拷贝密钥文件，该错误也可能与FTP上传方式有关。使用ASCII模式上传会失败，必须确保上传时选择二进制模式。若需使用FTP，推荐使用[WinSCP](https://winscp.net)。

## java.lang.NumberFormatException: For input string: "" {#javalangnumberformatexception-for-input-string-}

您尝试在未登录Xbox账号的情况下登录服务器。Floodgate要求基岩版玩家通过Xbox账号完成身份验证。

## Geyser-Floodgate:51777 lost connection: Internal Exception: java.lang.NumberFormatException: For input string: "SfqdXv36"（或类似错误） {#geyser-floodgate51777-lost-connection-internal-exception-javalangnumberformatexception-for-input-string-sfqdxv36-or-a-similar-error}

将BungeeCord配置中的`ip-forwarding`（IP转发）设为`true`。

## 断开连接时提示“Please connect through the official Geyser” {#please-connect-through-the-official-geyser-disconnect-message}

请确保Floodgate和Geyser均已更新至最新版本。

## 修改配置文件中的前缀后，服务器上的前缀未生效 {#prefix-is-not-changing-on-the-server-after-changing-it-in-the-config}

在Paper服务端1.15.2-355至1.16.5-505版本区间内存在一个BUG：已连接过服务器的Floodgate玩家，其用户名前缀不会被修改。Paper 1.16.5-506及更高版本已修复该问题。

请确保删除服务器根目录下的`usercache.json`文件，并重启服务器。

## LuckPerms与前缀相关问题 {#issues-with-luckperms-and-prefixes}

在LuckPerms的配置文件中将`allow-invalid-usernames`（允许无效用户名）设为`true`。

## 验证用户名失败！（使用Paper服务端时） {#failed-to-verify-username-with-paper}

要彻底解决该问题，请在[`config/paper-global.yml`文件的「不受支持设置」章节](https://docs.papermc.io/paper/reference/global-configuration#unsupported_settings)（1.19以下版本的服务器为根目录的`paper.yml`）中禁用`perform-username-validation`（执行用户名验证）。在后端服务器部署Floodgate也可缓解该问题。

## Forge/Fabric与Bukkit混合服务端报错 {#error-with-forge-or-fabric-bukkit-hybrid}

目前，无法在混合Forge+Bukkit或Fabric+Bukkit的服务端（例如Magma、Mohist、Cardboard/Bukkit4Fabric）上运行Floodgate——这类混合服务端不支持我们为实现基岩版玩家连接所需的复杂操作（技术说明：此类服务端通常不支持NMS）。

若您希望在混合服务端中使用Floodgate，建议将这些服务端部署在BungeeCord或Velocity代理之后，并在代理层运行Floodgate。

## 离线模式下启用全局绑定后，Java版与基岩版玩家的数据未同步 {#after-enabling-global-linking-in-offline-mode-player-data-is-not-synced-between-java-and-bedrock-players}

该问题出现在离线模式下，原因是与基岩版账号绑定的Java版账号UUID，与Floodgate全局绑定服务器返回的在线模式UUID不匹配。

使用全局绑定时，请确保`server.properties`中的`online-mode`（在线模式）设为`true`。否则，基岩版玩家的身份验证UUID将与Java版游玩时的UUID不一致，导致游戏进度丢失。本地绑定不会出现此问题。