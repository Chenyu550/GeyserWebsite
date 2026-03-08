---
title: Geyser API
description: Geyser API 允许你在自己的插件、模组或扩展中与 Geyser 进行交互。
---

Geyser 拥有一个 API，用于扩展 Geyser 的功能，并允许你在自己的插件、模组或扩展中与 Geyser 进行交互。

### 我可以在哪里使用 Geyser API？ {#where-can-i-use-the-geyser-api}
你可以在以下场景中使用 Geyser API：
- 用于 Paper/Spigot、Velocity、Waterfall/BungeeCord 等的插件
- 用于 Fabric 或 NeoForge 的模组
- Geyser 扩展

### 访问 Geyser API {#accessing-the-geyser-api}
有关如何在项目中包含 Geyser API 依赖的信息，请参阅[此处](/wiki/geyser/getting-started-with-the-api)。

### 文档 {#documentation}

Geyser API 提供了可订阅的事件，或者有关玩家是否通过 Geyser 加入的信息，并让你能够增强 Geyser 的功能（即注册自定义物品）。
（很快，方块和实体也可以）。
它可以在 Geyser 扩展中轻松使用，有关这些内容的详细信息，请参阅[此处](/wiki/geyser/extensions)。

**快速概览：**   
:::info
    Javadocs 可在<a href="https://repo.opencollab.dev/javadoc/maven-snapshots/org/geysermc/geyser/api/latest">此处</a>找到。
:::

#### [GeyserApi](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java)：{#geyserapi}
GeyserApi 接口是访问 Geyser API 提供的各种功能的中心访问点，提供了例如与玩家连接交互的方法。
它扩展了 [Base API](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java) 接口，该接口提供了有关单个玩家的基本信息。

GeyserApi 类是 API 的基类，你需要使用它来访问 API 的任何部分。  
要访问它，你只需输入：
```java
GeyserApi.api();
```

获得实例后，你就可以访问所有方法了。  
使用 API 模块中的文档查看（并获取有关）每个可用方法的信息。  
大多数 [API 方法都有简单的解释](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/GeyserApi.java)。
由于 Geyser API 扩展了 Floodgate 和 Geyser 共享的 Base API，你也可以使用 [Base API 的方法](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/GeyserApiBase.java)。


#### 我们将重点介绍几个，帮助你快速上手：{#well-highlight-a-few-to-get-you-started-quickly}
`GeyserApi#isBedrockPlayer(UUID)`  
用于检查给定 UUID 的**在线**玩家是否是基岩版玩家。

`GeyserApi#connectionByUuid(UUID)`  
用于获取**在线**玩家的 [Connection](https://github.com/GeyserMC/api/blob/master/base/src/main/java/org/geysermc/api/connection/Connection.java)。  
如果玩家不是基岩版玩家，此方法将返回 null。

:::info
    你不需要等到基岩版玩家上线才能使用 getPlayer 和 isBedrockPlayer 方法。  
    你甚至可以在预登录事件中使用它们。
:::

`GeyserApi#sendForm(UUID, Form(Builder))`  
用于向具有给定 UUID 的基岩版玩家发送表单。  
点击[此处](/wiki/geyser/forms/)获取有关表单的更多信息。

`GeyserApi#onlineConnectionsCount()`  
用于获取在线基岩版玩家的数量。

### Geyser API 简短概述 {#short-overview-of-the-geyser-api}

#### [Cumulus](https://github.com/GeyserMC/Cumulus/tree/master/src/main/java/org/geysermc/cumulus) {#cumulus}
虽然技术上不直接在 Geyser API 中，但 Geyser API 也提供了 Cumulus 库。
它允许你向玩家发送基岩版表单。有关更多信息，请参阅 [Cumulus](/wiki/geyser/forms/)。

#### [事件](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event) {#events}
事件包包含 Geyser 触发的所有事件。有关如何监听 Geyser 事件的详细信息，请参阅[此处](/wiki/geyser/events)。

#### [命令](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/command) {#command}
此包包含与 Geyser 中的命令相关的类和接口，允许 [Geyser 扩展](/wiki/geyser/extensions)注册自定义命令。

#### [实体](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/entity) {#entity}
实体包包含与 Geyser 中的实体相关的类和接口，例如 GeyserPlayerEntity 接口，
它代表 Geyser 中的玩家实体。此接口扩展了 GeyserEntity 接口，同时提供了专门针对玩家实体的额外功能，
例如目前的展示表情动作。

#### [物品](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/item) {#item}
物品包包含与 Geyser 中的物品相关的类和接口。你可以创建自定义物品并使用 Geyser API 注册它们。
有关如何注册自定义物品的详细信息，请参阅[此处](/wiki/geyser/custom-items)。

#### [方块](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/block) {#block}
方块包包含与 Geyser 中的方块相关的类和接口。你可以使用此包创建自定义方块，并使用 [GeyserDefineCustomBlocksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineCustomBlocksEvent.java) 注册它们。
有关详细信息，请参阅[此处](/wiki/geyser/custom-blocks)。

#### [网络](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/network) {#network}
网络包包含通过 [RemoteServer](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/RemoteServer.java) 接口提供的有关远程服务器的基本信息，
例如服务器的 IP 地址和端口，以及远程服务器的协议版本。或者认证类型。
你还可以通过 [BedrockListener](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/network/BedrockListener.java) 接口获取 Geyser 监听的端口/IP。

#### [皮肤](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/skin) {#skin}
皮肤包包含一些代表皮肤数据的记录。如果你想更改玩家的皮肤，你可以监听 [SessionSkinApplyEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock/SessionSkinApplyEvent.java)，并在那里设置新的皮肤、皮肤几何形状或披风。

#### [资源包](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/pack) {#pack}
资源包包包含与 Geyser 中的资源包相关的类和接口。你可以创建自定义资源包，并在玩家登录前使用 [SessionLoadResourcePacksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock/SessionLoadResourcePacksEvent.java) 将它们发送到各个会话。
如果你想向所有会话发送资源包，你可以使用 [GeyserDefineResourcePacksEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineResourcePacksEvent.java)。

可以使用 [PackCodec](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/pack/PackCodec.java) 创建资源包，例如提供的 [PathPackCodec](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/pack/PathPackCodec.java)。
这允许你从文件路径加载基岩版资源包：
```java
ResourcePack pack = ResourcePack.create(PackCodec.path(path));
```

#### [扩展](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/extension) {#extension}
此包提供了创建和管理扩展所需的组件。
有关扩展的更详细说明，请参阅[此处](/wiki/geyser/extensions)。
