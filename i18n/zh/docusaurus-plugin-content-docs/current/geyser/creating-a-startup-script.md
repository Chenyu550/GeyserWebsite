---
title: 创建启动脚本
description: 学习如何为 Geyser-Standalone 创建启动脚本。
---

# 为 Geyser-Standalone 创建启动脚本

:::caution

为了让此功能正常工作，你**必须**安装 Java 17（或更高版本）！

:::

下载并将 Geyser 放入单独的文件夹后，你需要创建一个启动脚本；类似于你运行 Bukkit/Spigot/Paper 服务器的方式。

### Windows {#windows}
* 在与 Geyser-Standalone jar 文件相同的位置创建一个新的文本文件，并将其命名为 `run.bat`。使用文本编辑器（最好是 Notepad++）打开它，并插入下面的文本：

```batch title="run.bat"
@echo off
java -Xms1024M -jar Geyser-Standalone.jar
pause
```

* 双击 **run.bat**，Geyser 应该会启动。Geyser 将生成所有所需的文件。

### macOS {#macos}
* 创建一个名为 **run.command** 的文本文件，并使用 TextEdit 或 TextMate 等文本编辑器打开它。在 **run.command** 文件中输入以下文本：

```sh title="run.command"
#!/bin/bash 
cd "$( dirname "$0" )" 
java -Xms1024M -jar Geyser-Standalone.jar
```

* 打开终端，输入 `chmod a+x` **（不要按回车！）**，然后将你的 *run.command* 文件拖到终端中。
* 按键盘上的回车键，Geyser 将启动。Geyser 将生成所有所需的文件。

### Linux {#linux}
* 创建一个名为 *run.sh* 的文件，并使用文本编辑器打开它。在 `run.sh` 文件中输入以下文本：

```sh title="run.sh"
#!/bin/sh 
cd "$( dirname "$0" )" 
java -Xms1024M -jar Geyser-Standalone.jar
```
* 在你的默认终端应用程序中，通过运行 `chmod +x ~(dir)/run.sh` 使文件可执行，其中 `dir` 是 Geyser 所在文件夹的名称，或者通过更改文件权限；
* 打开你的默认终端应用程序，输入 `./run.sh` 来运行 Geyser。Geyser 将生成所有所需的文件。

