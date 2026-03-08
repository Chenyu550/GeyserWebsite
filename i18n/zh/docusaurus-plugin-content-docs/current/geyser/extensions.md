---
title: Geyser扩展
description: Geyser 扩展相当于“插件”，但专门适用于 Geyser 平台。这带来了平台无关的优势，意味着你无需担心单独适配所有平台。
---

# Geyser 扩展

Geyser 扩展相当于“插件”，但专门针对 Geyser 平台设计。
这一特性带来了平台无关的优势，即你无需费心单独适配所有平台。
此外，从设计上来说，这些扩展仅对通过 Geyser 加入的基岩版玩家生效。

## Geyser 扩展能实现什么功能？ {#what-can-geyser-extensions-do}

扩展可以充分利用 Geyser API 为 Geyser 增加额外功能。
有关当前可实现的功能，可参考 [Geyser API 文档](/wiki/geyser/api/)。

举几个例子：
- 注册自定义物品和方块
- 隐藏命令使其不被建议显示
- 修改服务器公告（MOTD）
- 注册自定义命令
- 监听事件（例如表情动作事件）

Geyser 底层 API 正在持续扩展，带来越来越多的功能可能性。

## 已有哪些 Geyser 扩展？ {#which-geyser-extensions-exist}

可前往 Modrinth 平台的“插件”标签下查看 Geyser 扩展专区！

## 安装扩展 {#installing-extensions}

安装扩展只需将扩展的 .jar 文件放入 Geyser 的 `extensions` 文件夹。
随后重启 Geyser（或运行 Geyser 的服务器）即可。

## 更新扩展 {#updating-extensions}
更新扩展可通过扩展目录下的 `update` 文件夹按以下步骤操作：

1. 将扩展 jar 包的更新版本复制到 `extensions` 目录下的 `update` 文件夹中。
2. 在下一次服务器或应用重启时，`update` 文件夹中的所有扩展将自动替换主 extensions 目录中对应的扩展。若为新扩展，则会直接添加。
3. 若更新失败，相关信息会被记录到日志中，服务器/应用仍会照常加载扩展。你可查看日志以排查问题。

## 创建 Geyser 扩展 {#creating-geyser-extensions}

创建扩展最简单的方式是使用 [这个官方模板](https://github.com/GeyserMC/GeyserExampleExtension/)。
只需基于该模板创建新仓库，自定义 `extension.yml` 和 `settings.gradle` 文件，即可开始开发扩展。

当扩展的 jar 包中 `resources` 目录下包含 `extension.yml` 文件时，Geyser 就能识别该扩展。

```yml title="extension.yml"
id: exampleid
name: ExampleExtension
main: org.geyser.extension.exampleid.ExampleExtension
api: 2.9.0
version: 1.0.0
authors: [ExampleAuthor]
dependencies: # 可选配置
  exampledependency:
    # 该依赖应在当前扩展加载前/后加载（BEFORE 或 AFTER）
    load: BEFORE # 默认值：BEFORE
    # 该配置决定此依赖是否为当前扩展加载的必要条件
    required: true # 默认值：true
```

各字段说明：
- id：扩展的唯一标识。每个扩展都需有唯一的 ID，且仅能包含小写字母。例如，若你为扩展注册一个命令，该命令会以 ID 作为前缀：如 `/exampleid command`。
- name：扩展的名称。
- main：扩展的主类路径。
- api：扩展所适配的 Geyser API 版本。
- authors：扩展的作者。若有多位作者，使用逗号分隔。
- dependencies：扩展的依赖项。每个依赖项包含加载顺序（load）和是否必需（required）两个属性，默认值分别为 `BEFORE` 和 `true`。

## 创建主类 {#creating-the-main-class}

主类作为扩展的入口点，需要 [实现 Geyser 提供的 **Extension** 接口](https://github.com/GeyserMC/GeyserExampleExtension/blob/master/src/main/java/org/geyser/extension/exampleid/ExampleExtension.java#L12)。
通过这种方式，Geyser 能识别该扩展，并为你提供重要方法的访问权限——例如 `logger()` 方法可获取扩展的日志记录器。
如需查看该接口提供的所有方法，可参考 [此处](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/extension/Extension.java)。

与插件不同，扩展没有 `onEnable` 或 `onDisable` 方法。取而代之的是，大部分操作需通过监听 Geyser 生命周期不同阶段的事件来完成。
其中一些重要事件包括：
- `GeyserPreInitializeEvent`：该事件在 Geyser 开始初始化时触发。例如，若你需要注册在配置文件中配置的扩展命令，
则需在此处加载配置文件，以确保配置在 `GeyserDefineCommandsEvent` 触发前准备就绪。
- `GeyserPostInitializeEvent`：该事件在 Geyser 完成初始化后调用。你的大部分业务代码应在此处编写，因为此时 GeyserAPI 已完全可用。
- `GeyserShutdownEvent`：该事件在 Geyser 关闭时触发。你可利用此事件保存数据或清理资源。

以下是示例代码：
```java
@Subscribe
public void onPostInitialize(GeyserPostInitializeEvent event) {
    // 示例：提示你的扩展正在加载
    this.logger().info("正在加载示例扩展...");
}
```
若你希望注册自定义物品、全局资源包（或即将支持的自定义方块和实体），需使用 @Subscribe 注解订阅对应事件，
并在事件中完成注册。自定义物品的示例可参考 [此处](/wiki/geyser/custom-items#geyser-extensions)。其他事件的文档可参考 [此处](/wiki/geyser/events)。

要构建扩展，运行 Gradle 的 build 任务，然后安装该扩展即可。

## 基于 Geyser 扩展创建命令 {#creating-commands-with-geyser-extensions}
创建命令需使用 Geyser API 中的 `Commands` 包。简要说明：
- [Command.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/Command.java)
  该接口代表 Geyser 中的一个命令——如需创建命令，可使用 CommandBuilder（命令构建器）。你可通过它来注册该命令：
  [GeyserDefineCommandsEvent](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle/GeyserDefineCommandsEvent.java)
- [CommandExecutor.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandExecutor.java)
  该接口代表 Geyser 中的命令执行处理器，并继承了 CommandSource 接口。
- [CommandSource.java](https://github.com/GeyserMC/Geyser/blob/master/api/src/main/java/org/geysermc/geyser/api/command/CommandSource.java)
  该接口代表 Geyser 中的命令执行源。可用于向执行源发送消息、检查执行源是否有执行命令的权限，或获取语言区域等操作。

```java
Command command = Command.builder(this) // "this" 指代扩展的主类
        .name("ExampleCommand")
        .bedrockOnly(true)
        .source(CommandSource.class)
        .aliases(List.of("example", "ex"))
        .description("一个示例命令")
        .executableOnConsole(false) 
        .suggestedOpOnly(false)
        .permission("example.command")
        .executor((source, cmd, args) -> {
            // 命令执行逻辑——此处编写命令执行的代码
            // source：执行命令的来源
            // cmd：被执行的命令
            // args：传递给命令的参数
            source.sendMessage("你好，世界");
        })
        .build();
```

注册命令需订阅 `GeyserDefineCommandsEvent` 事件，并在事件中完成注册：
```java
@Subscribe
public void onDefineCommands(GeyserDefineCommandsEvent event) {
    event.register(command);
}
```
若所有操作正确，你可在游戏内执行 `/扩展ID [命令名]` 来运行该命令——在本示例中，即为 `/exampleid examplecommand`。
执行后，命令执行源会收到“你好，世界”的消息。
由于我们设置了别名，你也可运行 `/exampleid example` 或 `/exampleid ex` 来执行同一个命令。
如需传递参数，只需运行 `/exampleid examplecommand [参数]`——将 `[参数]` 替换为你想传递的参数即可。

## 监听事件 {#listening-to-events}
相关文档可参考 [此处](/wiki/geyser/events)。你无需手动注册事件监听器，Geyser 会自动完成注册。

---

## 扩展使用遇到问题？ {#facing-troubles-with-extensions}

- 确保使用最新版本的 Geyser——旧版本可能未包含最新的 API 变更。
- 添加调试打印语句。
- 可在 [Geyser 官方 Discord 服务器](https://discord.gg/geysermc) 的 #development 频道提问。
