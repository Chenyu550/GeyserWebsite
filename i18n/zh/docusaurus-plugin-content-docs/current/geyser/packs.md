---
title: 在 Geyser 中使用资源包
description: 本页面介绍如何在 Geyser 中使用资源包。
---

# 简介

Geyser 支持向连接的基岩版客户端发送基岩版资源包。
不过，Geyser 并不支持将 Java 版格式的资源包转换为基岩版格式。

资源包提供了丰富的自定义选项，就像在 Java 版中一样，它们可以用于多种用途：
- 纹理修改：资源包可以更改方块、物品和实体的外观，带来独特的视觉体验。
- 音效更改：可以添加自定义音效或音乐曲目，营造更沉浸式的氛围。
- UI 增强：资源包可以修改用户界面——一个流行的例子是提供深色模式 UI 选项。
……以及更多！

# 使用资源包

### 发送本地资源包
向基岩版玩家发送资源包最简单的方法是将基岩版资源包（.zip 或 .mcpack 文件）放入 Geyser 的 `packs` 文件夹中。

`packs` 文件夹的位置：

- Fabric/NeoForge：`/config/Geyser-<platform>/packs/`
- Geyser 独立版：根目录下的 `/packs/`
- 其他平台：`/plugins/Geyser-<platform>/packs/`

重启服务器（或重载 Geyser）后，连接的玩家将收到该文件夹中的所有资源包。


### 远程资源包链接（可通过 Geyser API 使用）
除了发送本地资源包，你还可以通过向基岩版玩家发送下载链接来提供资源包。
这与 Java 版的资源包下载方式类似，但有一些关键限制：

- 链接必须是资源包的直接下载链接（会跟随重定向，但最终必须指向文件下载）
- Content-Length 标头必须指定准确的文件大小。
- Content-Type 应用标头必须设置为 `application/zip`。

Geyser 会在启动时下载你配置的远程资源包，如果这些条件未满足，会发出警告。
遗憾的是，这些限制无法绕过，因为它们是基岩版客户端强加的。

要手动验证标头，可以使用 curl 命令检查这些值。
例如：
`curl -I -L https://download.geysermc.org/v2/projects/geyseroptionalpack/versions/1.0.10/builds/11/downloads/geyseroptionalpack` 返回以下内容：
- `-I`：此选项告诉 curl 在输出中获取 HTTP 响应标头。
- `-L`：确保 curl 跟随重定向

输出如下：
```shell
HTTP/1.1 200 OK
Date: Wed, 03 Jul 2024 23:03:06 GMT
Content-Type: application/zip
Content-Length: 95400
Connection: keep-alive
access-control-allow-methods: GET
access-control-allow-origin: *
Cache-Control: public, s-maxage=1209600
content-disposition: attachment; filename="=?UTF-8?Q?GeyserOptionalPack.mcpack?="; filename*=UTF-8''GeyserOptionalPack.mcpack
etag: "0258409cde3a2906e1085490fa5b10b77"
last-modified: Wed, 03 Jul 2024 08:42:41 GMT
CF-Cache-Status: HIT
Age: 21500
Accept-Ranges: bytes
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=DUpNVi9R96y13%2BlJm%2BNTpDLvSt9bw9CFDUh8Qwhpb9SsqjJbuInBGtSM5hiM2dGbSGkUccP4KvSqqD%2FCKrrcQ9ur5at5G0u8FrfooVTKLP%2B4MwGoUl29DwlxeMVg6tX36RjjICmV97M4FlErCZEe%2F3gM%2FA%3D%3D"}],"group":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Server: cloudflare
CF-RAY: 89da81ca69c63735-FRA
alt-svc: h3=":443"; ma=86400
```
这表明 content-length 确实设置正确，并且 content type 确实是 `application/zip`。
此外，Geyser 会尝试读取 `ETag` 以查看内容是否已更改。要查询它，可以使用以下命令：

`curl -I -L -v https://download.geysermc.org/v2/projects/geyseroptionalpack/versions/1.0.10/builds/11/downloads/geyseroptionalpack 2>&1 | grep ETag`
或者，只需使用 `-v` 标头将开启详细模式，也会显示 etag。

# 常见问题

- **Geyser 是否支持行为包/附加组件？** <br />
不支持。这些需要在 Java 版服务器端进行修改，而当 Geyser 用作代理时这是不可能的。
不过，许多通过附加组件或行为包实现的功能可以通过 Geyser API 来完成——例如[自定义物品](/wiki/geyser/custom-items)
或[自定义方块](/wiki/geyser/custom-blocks)。

- **Geyser 是否会转换 Java 版资源包？** <br />
目前不会。现在，你需要手动创建等效的基岩版资源包。

- **我可以让玩家自己选择资源包吗？** <br />
在大多数基岩版平台（主机版除外），玩家可以在客户端下载和安装资源包。
还有一个 Geyser 扩展 [PickPack](https://github.com/onebeastchris/PickPack)，它使用 Geyser API 允许所有基岩版玩家从一组资源包中进行选择。

- **在代理设置中：是否支持每个后端服务器使用不同的资源包？** <br />
遗憾的是，这本身是不可能的，因为基岩版仅允许在初始连接到服务器时添加或移除资源包。
不过，通过使用传输数据包，可以指示基岩版客户端重新连接到服务器，然后应用更改。
要实现每个服务器使用不同资源包，你可以使用非官方的 [GeyserPackSync](https://github.com/onebeastchris/GeyserPackSync) 插件。

- **Geyser 是否有发送资源包的 API？** <br />
有！有关更多信息，请参阅 [Geyser API 文档](/wiki/geyser/api/)。其中有一个 `SessionLoadResourcePacksEvent` 用于确定向每个连接的玩家发送哪些资源包，或者更通用的 `GeyserDefineResourcePacksEvent` 用于定义所有用户接收的资源包。

- **我可以使用子包或指定资源包的加载顺序吗？** <br />
可以！不过，此功能需要你使用 Geyser API。
