---
title: 常见问题
description: 人们在使用 Geyser 时可能遇到的常见问题以及潜在的解决方法。
---

# 常见问题

通常情况下，人们可能会遇到Geyser未出现在服务器列表中或类似的问题。
本页面列出了人们可能遇到的一些常见问题以及对应的潜在解决方法。
如果问题仍未解决，请加入我们的[Discord服务器](https://discord.gg/geysermc)获取支持。

# Floodgate
有关Floodgate的问题，请参阅：[Floodgate：已知问题/注意事项](/wiki/floodgate/issues/)。

# 无法连接！（服务器未出现在好友列表中或提示“无法连接到世界”）
* 如果你未使用诸如TCPShield之类的反向代理，请确保将`advanced.java.use-haproxy-protocol`设置为false。
若出现“无法连接到世界”但控制台无任何错误，请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)。

## 若服务器未出现在好友列表中 {#if-the-server-doesnt-show-up-in-the-friends-list}

* *若使用Windows 10、iOS或Android系统*：尝试在游戏内的“服务器”列表中添加该服务器。
* *若使用Xbox One*：尝试通过[BedrockConnect](/wiki/geyser/using-geyser-with-consoles/)进行连接。
* *若使用PS4*：[尝试使用LAN代理。](/wiki/geyser/using-geyser-with-consoles#playstation-4)
* *若使用任天堂Switch*：目前本地服务器无法显示在“好友”标签页中，但你仍可通过[BedrockConnect](/wiki/geyser/using-geyser-with-consoles/)进行连接。

*若Geyser实例为本地托管*：尝试使用`localhost`或`0.0.0.0`作为IP地址。
*若上述方法无效，或你的Geyser实例位于局域网内的另一台电脑上*：使用你的**本地**IPv4地址。

:::warning

若出现“无法连接到世界”但控制台无任何连接相关日志，请参阅[此处](/wiki/geyser/fixing-unable-to-connect-to-world/)解决。

:::

### 启动时出现`java.net.BindException: Address already in use: bind` {#javanetbindexception-address-already-in-use-bind-on-startup}
此错误表示指定端口（配置文件中设置的端口）已被占用（很可能是另一个Geyser实例）。请确保关闭所有占用该端口的应用程序。若你不记得曾打开过相关程序，通常重启电脑可解决此问题。

### [...]` has been compiled by a more recent version of the Java Runtime (class file version 60.0)` {#-has-been-compiled-by-a-more-recent-version-of-the-java-runtime-class-file-version-600}

请参阅以下链接更新至Java 17：https://docs.papermc.io/misc/java-install。

### 主机服务商未立即开放UDP端口 {#hosting-provider-will-not-immediately-open-up-udp}

以下步骤仅适用于独立版Geyser。
此问题通常与主机服务商的设置有关。最常见的原因是他们未开放UDP协议的端口，而《我的世界：基岩版》正是使用UDP协议（《我的世界：Java版》则使用TCP协议）。
若你使用的是在线主机，可通过以下方法解决：关闭服务器，在选择服务器jar包时，选择Nukkit或其他任何基岩版服务器软件（你实际上并不会切换到Nukkit）。之后，打开FTP文件管理器并找到Nukkit jar包，将其替换为你要使用的服务器软件jar包。启动服务器后，主机应会开放UDP端口，同时你仍可使用所需的服务器jar包。

**请注意：** 若你的服务器在启动时会自动重新下载jar包（例如启用了自动更新系统），此解决方法将无效。若该方法对你无效，请联系主机服务商，我们对此无能为力。

# 卡在“定位服务器”界面且无任何错误

你可能需要更新Java版本。如需更新，请访问[Adoptium.net](https://adoptium.net/)。

此问题有时会出现在网络环境较差的情况下。Geyser配置文件中有一个`advanced.bedrock.mtu`选项，可逐步降低该数值（每次降低100），每次修改后重启服务器并重新测试连接。

若你出现“无法连接到世界”但控制台无任何连接相关日志，此选项大概率无法解决问题。

# 登录失败

***若你使用的是插件版Geyser***：在Geyser配置文件中，将远程地址（remote address）设置为`127.0.0.1`。若无效，请检查启动日志中是否有关于Docker的提示，并将该地址填入远程地址。

### Cannot reply to EncryptionRequestPacket without profile and access token（无配置文件和访问令牌时无法回复EncryptionRequestPacket） {#cannot-reply-to-encryptionrequestpacket-without-profile-and-access-token}

此提示有两种成因：

*Floodgate相关问题*：

该提示可能出现在Floodgate配置环境中。通常表示配置错误，或存在其他插件冲突。若你曾将同一服务器上Floodgate文件夹中的密钥复制到Geyser文件夹中，此操作现已无必要，你可安全删除Geyser文件夹中的密钥副本，重启服务器后重试。

*Java版服务器开启正版验证（Online Mode）但Geyser处于离线模式（Offline Mode）*：

若你的配置如此，简而言之，这是无法正常工作的。若Java版服务器的验证模式设为正版验证（online），则Geyser也需配置为相同模式。服务器要求有效的《我的世界：Java版》账号，若你未通过Geyser登录该账号，将无法加入服务器。若配置正确但仍出现此问题，可能是你的账号凭证无效。

### Connection Refused: \<INSERT IP AND/OR DOMAIN\> {#connection-refused-insert-ip-andor-domain}

“连接被拒绝”通常表示指定端口上未找到Java版服务器，或服务器在网络层面拒绝了该连接。
后者可能由TCPShield等抗DDoS插件导致，除此之外，请确保配置文件中填写的服务器地址拼写正确、服务器处于运行状态且端口转发配置正确。

### Floodgate配置错误 {#floodgate-misconfiguration}
更多信息请参阅[此页面](/wiki/floodgate/setup/)。

### 缺少配置文件密钥。该服务器要求安全配置文件。 {#missing-profile-key-this-server-requires-secure-profiles}

请参阅[此页面](/wiki/geyser/secure-chat/)。

### Mojang重置账号凭证 {#mojang-resetting-account-credentials}
遗憾的是，此问题非我们所能控制。当你在服务器主机上以插件形式运行Geyser，或连接到地理位置较远的好友服务器时，大概率会出现此问题。若你在本地运行Geyser，通常不会遇到该问题。对于服务器，我们推荐使用自研插件[Floodgate（水闸）](https://github.com/GeyserMC/Floodgate)，该插件允许基岩版客户端无需Java版账号即可加入服务器。更多信息请参阅[此处](/wiki/floodgate)。

# 基岩版客户端提示“无效的IP地址！”
此问题可能因你输入的域名解析到SRV记录（基岩版不支持SRV记录）导致。请尝试使用IPv4地址。
此外，若你在IP输入框中同时填写IP和端口，也会出现此问题——相关正确的连接方式（以“test.geysermc.org:19132”为例）请参阅[此处](/img/wiki/edit_server_form.png)。

# 基岩版客户端首次打开命令界面时卡死
在Geyser配置文件中禁用`command-suggestions`（命令建议）选项。此操作会解决卡死问题，但代价是基岩版客户端将失去命令建议功能。
若你是专用服务器管理员，可预先配置玩家可使用的命令列表。这不仅仅会移除Java版玩家标签补全中不必要的命令。
而且还能带来其他益处。以下插件可实现此功能：
[CommandWhitelist](https://www.spigotmc.org/resources/81326/)（命令白名单）。或者，使用[HideCommands](https://github.com/Redned235/HideCommands) Geyser扩展插件，仅对基岩版玩家隐藏命令。

# Failed to load locale asset cache: Unrecognized token 'Cannot'（加载区域设置资源缓存失败：无法识别令牌'Cannot'）
此错误或启动时其他与下载区域设置文件相关的错误，通常是由于Java尝试通过IPv6连接（而Mojang仅使用IPv4）导致。因此，请在启动Geyser或服务器时添加以下参数：`-Djava.net.preferIPv4Stack=true`，示例：`java -Xms1024M -Djava.net.preferIPv4Stack=true -jar Geyser.jar`

# Outdated client! Please use 1.x.x

服务器版本过高或Geyser版本过旧。请确保使用最新版Geyser。

# Outdated server! I'm still on 1.x.x

更新服务器版本，或要求服务器管理员安装[ViaVersion](https://viaversion.com/)（版本兼容插件）。你也可尝试使用[VIAaaS](https://github.com/ViaVersion/VIAaaS)（作为服务的ViaVersion）。

# 仅适用于搭配Floodgate的BungeeCord环境

若你使用Floodgate，请确保在所有Spigot后端服务器上均安装该插件，具体如下：

1.  `Bungee端：安装Geyser和Floodgate`
2.  `大厅服（Lobby）：安装Floodgate`
3.  `服务器1（Server-1）：安装Floodgate`
4.  `服务器2（Server-2）：安装Floodgate`

以此类推。

* 同时请确保所有服务器上的`key.pem`（密钥文件）和`config.yml`（配置文件）完全一致。

若玩家无法从大厅服连接到其他后端服务器，请检查控制台日志。


### 可能引发问题的插件 {#plugins-that-can-cause-issues}
* `HamsterAPI`
