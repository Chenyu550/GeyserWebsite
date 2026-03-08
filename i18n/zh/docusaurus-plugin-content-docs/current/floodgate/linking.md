---
title: 账号绑定
description: 了解如何绑定你的Java版和基岩版Minecraft账号以实现跨平台游玩。了解内置的全局账号绑定功能，或如何设置可选的本地账号绑定。
---

## 什么是全局账号绑定？ {#what-is-global-linking}

绑定的说明和信息也可以在这里找到：[https://link.geysermc.org/](https://link.geysermc.org/)

在我们引入全局账号绑定之前，你必须在每个你加入的支持Floodgate的服务器上分别绑定你的Java版和基岩版账号。全局账号绑定就是为了解决这个问题：一次绑定，畅玩所有服务器。  

请注意：当你的账号绑定后，无论你从哪个平台登录，你都将使用Java版账号的位置、物品栏数据和成就等信息（即“同步”玩家数据）。基岩版账号的玩家数据将无法访问，直到你解除绑定。因此，在绑定前你应该将所有物品（末影箱内容、物品、盔甲）转移到Java版账号，以免“丢失”基岩版的进度。如果你忘记这么做，可以先解除绑定，转移所有物品后再重新绑定。

全局账号绑定是[全局API](/wiki/api/api.geysermc.org/global-api/)的一部分，使用GlobalLinkServer来绑定你的账号。要绑定你的账号，你需要按照以下步骤操作：
1. 使用你的Java版和基岩版账号加入GlobalLink服务器  
   （IP：`link.geysermc.org`，Java版端口：`25565`，基岩版端口：`19132`）
2. 在你的Java版**或**基岩版账号上输入`/linkaccount`命令开始绑定流程
3. 你会收到一条包含随机数字的消息，你需要在另一个账号上输入这个数字
4. 在另一个账号上输入`/linkaccount <验证码>`
5. 你会从Java版和基岩版服务器上被踢出，并收到账号已成功绑定的消息

要解除全局绑定的账号，使用Java版或基岩版账号加入GlobalLink服务器（如上述绑定步骤所述），然后使用`/unlinkaccount`命令。 

全局账号绑定在所有运行Floodgate 2.0的服务器上默认启用，但如果你之前禁用了它，可以通过打开Floodgate配置文件，确保`player-link`部分如下所示来重新启用：
```yml
# 玩家绑定配置
player-link:
  # 是否启用绑定系统。关闭此选项将阻止玩家使用绑定功能，
  # 即使他们已经绑定过账号。
  enabled: true
  # 是否使用全局绑定。全局绑定使用中央服务器来处理账号绑定请求，
  # 允许用户一次绑定，畅玩所有支持全局绑定的服务器。
  enable-global-linking: true
```
([查看默认配置](https://github.com/GeyserMC/Floodgate/blob/master/core/src/main/resources/config.yml))

保存配置并重启服务器后，你就可以使用全局账号绑定了。

如果你不想使用全局账号绑定，可以在Floodgate配置文件中禁用`enable-global-linking`选项。

## 本地账号绑定 {#local-linking}
你也可以在你的服务器上设置本地绑定数据库。本地绑定可以与全局绑定同时使用。本地数据库中的绑定记录将覆盖全局绑定服务器中的记录。

请注意，如果你使用了代理服务器（BungeeCord或Velocity），你只需要在代理服务器上执行以下步骤。

1. 从[这里](https://ci.opencollab.dev/job/GeyserMC/job/Floodgate/job/fix-weird-via-issue/)下载一个绑定数据库扩展。
   如果你需要帮助选择合适的扩展：如果你已经有数据库或需要多代理设置，请选择`mysql`；其他情况请选择`sqlite`。完整的文件名应该是`floodgate-*type*-database.jar`。
2. 将你下载的数据库扩展jar文件复制到Floodgate 2.0插件文件夹中（例如`/plugins/floodgate/`）。
3. 在Floodgate配置文件的`player-link`部分中启用`enable-own-linking`选项。
4. 在`player-link`部分中将`type`设置为你的数据库类型（目前支持`mysql`或`sqlite`）。（如果你之前使用Floodgate 1.0并启用了绑定功能，数据库类型是`sqlite`）。
5. 重启服务器

如果你选择了`mysql`，Floodgate数据文件夹内会生成一个新的数据库数据文件夹。你可以在其中输入你的数据库凭据。完成后再次重启服务器。

这样就设置完成了。你可以按照输入`/linkaccount`命令后收到的说明来绑定你的账号。
