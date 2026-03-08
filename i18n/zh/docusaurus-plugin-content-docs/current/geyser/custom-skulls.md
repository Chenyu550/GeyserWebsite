---
title: 自定义头颅
description: Geyser 允许将自定义头颅映射为自定义方块，以便在物品栏和实体上使用。
---

与 Java 版不同，基岩版本身不支持自定义头颅物品。因此，任何通过 Geyser 显示自定义头颅的方法在某种程度上都是一种变通方案。Geyser 长期以来通过生成玩家实体的方式支持在世界中显示自定义头颅。然而，这并不允许在物品栏中使用自定义头颅，也不允许实体佩戴它们。为了解决这个问题，Geyser 现在允许通过配置文件预注册自定义头颅。Geyser 随后会在启动时使用此配置文件生成包含预注册自定义头颅的几何形状和纹理的自定义资源包。对于客户端来说，这些头颅是方块。因此，它们可以被玩家放在物品栏中。此外，还为每个头颅方块定义了可附加组件，以便在实体佩戴和手持时正确显示。

要在 Geyser 中设置自定义头颅，您需要选择注册方块的方式。最简单的是[使用 custom-skulls.yml](#custom-skullsyml)，但您也可以[使用 Geyser 扩展](#geyser-extensions)。

## 启用自定义头颅 {#enabling-custom-skulls}

要启用自定义头颅，您必须在 `config.yml` 文件中将 `gameplay.enable-custom-content` 设置为 `true`。这将启用自定义资源包的生成以及自定义头颅到自定义方块的转换。然后您可以将自定义头颅添加到 `custom-skulls.yml` 文件中。

```yaml
# 是否添加任何通常在基岩版中不存在的物品和方块。
# 仅当使用不使用"传输数据包"样式服务器切换的代理时才需要禁用此选项。
# 如果禁用此选项，熔炉矿车物品将被映射为漏斗矿车物品。
# Geyser 的方块、物品和头颅映射系统也将被禁用。
# 更改此选项需要重启 Geyser。
enable-custom-content: true
```

## custom-skulls.yml {#custom-skullsyml}

配置文件 `custom-skulls.yml` 位于 Geyser 的配置文件夹中，其布局如下：

```yml
# --------------------------------
# Geyser 自定义头颅配置文件
#
# 当 `add-custom-skull-blocks` 禁用时，此文件将被忽略。
# 主要配置值请参阅 `config.yml`
#
# 在此文件中指定了玩家用户名、UUID 或纹理的自定义头颅
# 将被转换为自定义方块，并显示在物品栏和实体上。
# --------------------------------

# Java 版玩家用户名
# 皮肤将在 Geyser 启动时更新，如果任何玩家更改了皮肤，
# 玩家将需要重新下载资源包。
player-usernames:
  - GeyserMC

# Java 版玩家 UUID
# 皮肤将在 Geyser 启动时更新，如果任何玩家更改了皮肤，
# 玩家将需要重新下载资源包。
player-uuids:
  - 8b8d8e8f-2759-47c6-acb5-5827de8a72b8

# 在自定义玩家头颅的 NBT 中找到的长字符串
player-profiles:
  - ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJBbWJlcmljaHUiLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTkwNzkwYzU3ZTE4MWVkMTNhZGVkMTRjNDdlZTJmN2M4ZGUzNTMzZTAxN2JhOTU3YWY3YmRmOWRmMWJkZTk0ZiIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9

# Minecraft 皮肤服务器上的皮肤哈希值
skin-hashes:
  - a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f
```

要添加头颅，您需要选择以下四种方法之一，并添加一个新条目。以下部分将解释每种方法：

### 玩家用户名 {#player-usernames}

可以通过玩家用户名在此部分注册头颅。这些头颅会在 Geyser 启动时更新。因此，如果玩家的用户名或皮肤发生变化，它们可能会随之改变。

### 玩家 UUID {#player-uuids}

可以通过玩家 UUID 在此部分注册头颅。这些头颅会在 Geyser 启动时更新。因此，如果皮肤发生变化，它们可能会随之改变。

### 玩家资料 {#player-profiles}

可以通过自定义玩家头颅的 NBT 中找到的纹理字符串在此部分注册头颅。除非手动更改值，否则这些头颅在 Geyser 启动时不会更新。因此，如果玩家的用户名或皮肤发生变化，它们不会随之改变。这些数据是经过 Base64 编码的 JSON。例如，配置中的示例解码后如下：

```json
{
  "timestamp" : 1657322239833,
  "profileId" : "cddbe520d0434a8ba1cc9fc92fde2bcf",
  "profileName" : "Amberichu",
  "textures" : {
    "SKIN" : {
      "url" : "http://textures.minecraft.net/texture/a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f",
      "metadata" : {
        "model" : "slim"
      }
    }
  }
}
```

如果在 Paper 服务器上，可以通过手持物品并运行命令 `/paper dumpitem` 来获取头颅的这些数据。这会将物品的 NBT 数据输出到聊天框和控制台。纹理字符串位于 `SkullOwner` 标签下的 `Properties` 标签中，`textures` 标签下的 `Value` 标签内。例如：

```log
[05:58:07 INFO]: .KastleFirefox 执行了服务器命令: /paper dumpitem
[05:58:07 INFO]: minecraft:player_head{display: {Name: '{"text":"测试"}'}, SkullOwner: {Properties: {textures: [{Value: "ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJkYXZjaG9vIiwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2E5MDc5MGM1N2UxODFlZDEzYWRlZDE0YzQ3ZWUyZjdjOGRlMzUzM2UwMTdiYTk1N2FmN2JkZjlkZjFiZGU5NGYiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ"}]}, Id: [I; -229048314, -553040501, -1407961158, 465313087]}}
```

### 皮肤哈希 {#skin-hashes}

可以通过 Minecraft 皮肤服务器上的皮肤哈希在此部分注册头颅。这可以在 URL 的末尾找到。例如，在 URL `http://textures.minecraft.net/texture/a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f` 中，哈希是 `a90790c57e181ed13aded14c47ee2f7c8de3533e017ba957af7bdf9df1bde94f`。除非手动更改值，否则这些头颅在 Geyser 启动时不会更新。因此，如果玩家的用户名或皮肤发生变化，它们不会随之改变。

这可以通过解码从玩家资料中获取的 Base64 数据来获得。

## Geyser 扩展 {#geyser-extensions}

在这个示例中，我们将从玩家资料中注册一个自定义头颅。我们将使用上面示例中的玩家资料。

首先，创建一个实现 Geyser 的 Extension 类的类：

```java
public class RegisterCustomSkull implements Extension {
    //...
}
```

接下来，在 `GeyserDefineCustomSkullsEvent` 中创建一个注册方块的方法：

```java
public class RegisterCustomSkull implements Extension {
    @Subscribe
    public void onDefineCustomSkulls(GeyserDefineCustomSkullsEvent event) {
        //...
    }
}
```

最后，在事件中注册您的头颅。使用枚举 SkullTextureType 指定传递的值是玩家资料：

```java
public class RegisterCustomSkull implements Extension {
    @Subscribe
    public void onDefineCustomSkulls(GeyserDefineCustomSkullsEvent event) {
        String profile = "ewogICJ0aW1lc3RhbXAiIDogMTY1NzMyMjIzOTgzMywKICAicHJvZmlsZUlkIiA6ICJjZGRiZTUyMGQwNDM0YThiYTFjYzlmYzkyZmRlMmJjZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJkYXZjaG9vIiwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2E5MDc5MGM1N2UxODFlZDEzYWRlZDE0YzQ3ZWUyZjdjOGRlMzUzM2UwMTdiYTk1N2FmN2JkZjlkZjFiZGU5NGYiLAogICAgICAibWV0YWRhdGEiIDogewogICAgICAgICJtb2RlbCIgOiAic2xpbSIKICAgICAgfQogICAgfQogIH0KfQ"
        event.register(profile, SkullTextureType.PROFILE);
    }
}
```

## 从世界中提取自定义头颅 {#scraping-custom-skulls-from-a-world}

可以使用由 Amberichu 制作的工具 [HeadExtractor](https://github.com/davchoo/HeadExtractor) 从现有世界中提取自定义头颅，以便通过映射或 API 轻松实现。有关使用说明，请参阅链接的仓库。
