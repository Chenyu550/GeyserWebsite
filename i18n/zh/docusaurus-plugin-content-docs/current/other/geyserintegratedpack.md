---
title: GeyserIntegratedPack
description: GeyserIntegratedPack 是一个基岩版资源包，用于修复与 Geyser 的差异性问题，使基岩版与 Java 版保持一致。
---

:::info
Geyser 已内置 GeyserIntegratedPack（之前称为 "GeyserOptionalPack"），您无需手动添加！
请参阅"迁移"部分了解更多详情。
:::

GeyserIntegratedPack 是一个基岩版资源包，为 Geyser 添加更多功能，使基岩版与 Java 版保持一致。
资源包允许在基岩版中实现各种功能和错误修复，包括：

- 盔甲基础手臂/底板可见性
- 盔甲架姿势
- 幻术师
- 缺失的粒子效果
- 副手动画
- 潜影贝隐形差异性
- 光灵箭实体纹理
- 绕过记分板字符限制
- 隐藏 Java 版中不存在的 UI 元素，例如：
  - 制图台中的文本输入框
  - 创造模式下的 2x2 合成网格
  - 命令方块菜单中的刻延迟和重命名字段
  - Java 版中不存在的结构方块选项
- 隐藏武器冷却时间标题上的辅助功能背景

更完整的列表可以在集成包的 [README](https://github.com/GeyserMC/GeyserIntegratedPack/blob/master/README.md) 中找到。
对于那些对功能如何添加感兴趣的人，实现细节可以在[这里](https://github.com/GeyserMC/GeyserIntegratedPack/blob/master/developer_documentation.md)找到。

## 从 GeyserOptionalPack 迁移 {#migration}

之前使用 GeyserOptionalPack 的用户应将其移除，以便 Geyser 提供 GeyserIntegratedPack。
此更改有一个主要好处：自动更新，并且它是为与 Geyser 绑定的高级功能做准备（例如真正的 Java 风格攻击指示器！）。

如果您不希望应用这些更改，也可以在 Geyser 的配置中禁用 GeyserIntegratedPack。

### 发生了什么变化？
- 资源包的 uuid 和版本已更改
- GeyserIntegratedPack 在客户端资源包堆栈中的优先级较低（资源包应用的顺序），因此可以进行手动覆盖
- 由于 Geyser 包含了此包，您不再需要担心自己更新包！

### 如何迁移？

如果您之前从 Geyser 的下载页面下载了 GeyserOptionalPack，您只需将其从 Geyser 的 `packs` 文件夹中移除，让 Geyser 应用 GeyserIntegratedPack - 就完成了！

但是，如果您对资源包进行了修改，则需要做更多的事情：
- 您应该将您的更改分离到一个单独的资源包中。GeyserIntegratedPack 在资源包堆栈中的优先级较低，因此您的资源包中的更改将优先。
- 如果您修改了 GeyserIntegratedPack 更改的实体定义，请确保手动合并这些定义！

使用 UrlPackCodec 的用户也应该提供 GeyserIntegratedPack（可在[这里](https://github.com/GeyserMC/GeyserIntegratedPack)获取）。
Geyser 仍将执行检查以确保"手动"包含的版本不会过时，因此我们建议定期轮询 Geyser 的下载 API 以获取包更新。

## 资源包冲突 {#resource-pack-conflicts}

如果您当前的服务器资源包包含任何与 Geyser 的更改重叠的实体定义（可在[这里](https://github.com/GeyserMC/GeyserIntegratedPack/tree/master/src/main/resources/integratedpack/entity)和[这里](https://github.com/GeyserMC/GeyserIntegratedPack/tree/master/src/main/resources/patches/entity)找到），
您将需要合并这些实体的定义，以便可选包和您自己的包正常工作。
基岩版客户端将根据包应用顺序优先考虑实体定义 - 最高的获胜！由于实体定义文件的复杂性，此过程最好手动执行，尽管也可以[脚本化](https://gist.github.com/Kas-tle/89c6adc3e7901fbabd1b9f71d902d0a6)。
