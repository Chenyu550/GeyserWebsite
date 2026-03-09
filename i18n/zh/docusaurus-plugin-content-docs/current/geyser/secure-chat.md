---
title: Geyser 与安全聊天
description: 关于禁用安全聊天以允许基岩版玩家在 Java 版服务器上聊天的信息。
---

在 Java 版 1.19 更新中，加入了向 Mojang 举报玩家聊天消息的机制。
基岩版不支持此举报机制。
如果你的服务器或代理设置要求所有加入的玩家都支持此机制（默认可能已启用），
基岩版玩家将无法聊天。

服务器管理员可以禁用此设置，但请注意，Java 版玩家可以通过某些模组加入，这些模组会使其消息无法被举报。

有关 Java 版聊天签名系统的技术说明，请参阅这篇[文章](https://gist.github.com/kennytv/ed783dd244ca0321bbd882c347892874)。

# 禁用方法

*Vanilla、Spigot/Paper及其衍生端、Fabric、NeoForge*

在[server.properties](https://minecraft.fandom.com/wiki/Server.properties)中设置 `enforce-secure-profile: false`

*BungeeCord 及其衍生端*

在[config.yml](https://www.spigotmc.org/wiki/bungeecord-configuration-guide/)中设置 `enforce_secure_profile: false`

*Velocity*

在[velocity.toml](https://github.com/PaperMC/Velocity/blob/dev/3.0.0/proxy/src/main/resources/default-velocity.toml#L19)中设置 `force-key-authentication = false`
