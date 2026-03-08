---
title: 当前限制
description: Geyser 当前已知的限制。
---

# 当前限制

由于 Geyser 是两个不同游戏之间的协议转换器，这两个游戏拥有各自不同的代码库，因此 Geyser 存在一些无法处理的限制。
尽管 Minecraft 基岩版和 Java 版非常相似，但在许多方面仍存在巨大差异。

## 无法修复 {#unfixable}

以下内容在不对基岩版或 Java 协议进行整体修改的情况下无法修复。就目前而言，这些问题无法在 Geyser 中修复。

- 聊天中的可点击链接
- 发光效果
- 在物品栏中区分左键和右键点击
- 红石粉方块状态
- 使用 PotionContents 数据组件实现的药水颜色
- 任何不使用 Minecraft Brigadier 库的命令的各种命令参数
- 任何依赖于标签补全或在聊天界面中输入的内容（与上述相关）- 基岩版不会发送任何表明它们在此菜单中的数据包
- 无法查看超过 6 层的旗帜图层
- 由于 Java 版和基岩版之间的偏移差异导致的竹子周围移动问题。使用 [Hurricane](/wiki/other/hurricane) 来解决此问题。
- 自定义铁砧配方或自定义锻造台原料/图案 ([GeyserMC/Geyser#4706](https://github.com/GeyserMC/Geyser/issues/4706))
- 主世界中低于 -512 或高于 512 的高度（以及 Geyser 映射到主世界的自定义维度），以及其他维度中低于 0 或高于 256 的高度 ([GeyserMC/Geyser#3804](https://github.com/GeyserMC/Geyser/issues/3804))
- 海豚的恩惠药水效果视觉效果（效果仍应正常工作）
- 隐形物品展示框 - 不过，有基岩版资源包可以使*所有*物品展示框隐形
- 实体头上的方块（不包括南瓜灯）（例如：盔甲架、玩家）
- 某些方块状态更改由客户端控制，不受调试棒影响 - 例如栅栏。([GeyserMC/Geyser#3125](https://github.com/GeyserMC/Geyser/issues/3125))
- 自定义信标底座方块 ([GeyserMC/Geyser#2301](https://github.com/GeyserMC/Geyser/issues/2301)) - 这些在基岩版中是硬编码的。
- 数据包更改的可攀爬方块 ([GeyserMC/Geyser#4051](https://github.com/GeyserMC/Geyser/issues/4051))
- 自定义附魔/横扫之刃 ([GeyserMC/Geyser#3121](https://github.com/GeyserMC/Geyser/issues/3121))
- 没有鞘翅/自定义鞘翅时的滑翔 (https://github.com/GeyserMC/Geyser/issues/3255, https://github.com/GeyserMC/Geyser/issues/3299)
- 自定义熔炉烹饪时间 ([GeyserMC/Geyser#4104](https://github.com/GeyserMC/Geyser/issues/4104))
- Java 版/基岩版告示牌最大长度不同 ([GeyserMC/Geyser#4130](https://github.com/GeyserMC/Geyser/issues/4130))
- 成就提示的第二行 ([GeyserMC/Geyser#3205](https://github.com/GeyserMC/Geyser/issues/3205))
- 显示非原版附魔等级，例如"精准采集 2" ([GeyserMC/Geyser#5252](https://github.com/GeyserMC/Geyser/issues/5252))

## 通过附带的 GeyserIntegratedPack 可修复 {#fixed-with-geyserintegratedpack}

以下更改**支持**通过附带的 GeyserIntegratedPack 实现，这是一个基岩版资源包，用于添加基岩版原生不支持的功能：
- 自定义盔甲架姿势
- 幻术师
- 基岩版中原生不存在的命中粒子和其他杂项粒子
- 副手动画
- 潜影贝隐形
- 光灵箭纹理
- 与 Java 版匹配的记分板宽度
- 与 Java 版匹配的物品栏界面更改

## 通过 Hurricane 可修复 {#fixable-with-hurricane}

以下问题可以通过 [Hurricane](/wiki/other/hurricane) 插件/模组来解决。不过，这些涉及 Java 服务器修改。
- 由于 Java 版和基岩版之间的偏移差异导致的竹子周围移动问题。
