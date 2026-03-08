---
title: 功能特性
description: 了解 Floodgate 2.0 的功能特性，包括白名单命令和皮肤上传功能。
---

## 白名单命令 {#whitelist-command}

Floodgate 2.0 提供了一个白名单命令 `fwhitelist`，用于在 whitelist.json 中添加或移除 Floodgate 玩家。使用时无需包含用户名前缀。
`fwhitelist add Tim203`
`fwhitelist remove Tim203`

你也可以指定 UUID：`fwhitelist add 00000000-0000-0000-0009-01f64f65c7c3`

权限节点为 `floodgate.command.fwhitelist`。

## 什么是皮肤上传？ {#what-is-skin-uploading}
在安装了 Floodgate 2.0 的服务器上，基岩版玩家的皮肤应该能被 Java 版玩家看到。  
如果皮肤未正常显示，很可能是因为皮肤上传队列过长，需要一些时间来完成上传。

皮肤上传功能也是 [全局 API](/wiki/api/api.geysermc.org/global-api/) 的一部分。它负责将基岩版皮肤转换为 Java 版皮肤，并上传至 Mojang 服务器，以便在 Java 版中正常显示。

我们内部使用了 MineSkin 服务。MineSkin 运行在社区捐赠的账号上。如果你想支持 MineSkin 并加快上传速度，可以访问 [此页面](https://mineskin.org/account) 了解更多信息。

![Example skin upload](/img/wiki/skin_upload_example.png)
