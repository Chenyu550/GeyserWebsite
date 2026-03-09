---
title: API 入门指南
description: '关于如何使用 Geyser 和 Floodgate API 的入门介绍。'
---

首先，将 Open Collaboration 仓库添加到你的项目中：

**Maven**
```xml
<repository>
    <id>opencollab-snapshot</id>
    <url>https://repo.opencollab.dev/main/</url>
</repository>
```
"main" 仓库包含正式版和快照版。

**Gradle**
```groovy
repositories {
    maven {
        url = uri("https://repo.opencollab.dev/main/")
    }
}
```

## 使用 Geyser {#using-geyser}

添加 Geyser 的 API 代码库作为依赖：

**Maven**
```xml
<dependency>
    <groupId>org.geysermc.geyser</groupId>
    <artifactId>api</artifactId>
    <version>2.9.0-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

**Gradle**
```groovy
dependencies {
    compileOnly('org.geysermc.geyser:api:2.9.0-SNAPSHOT')
}
```

获取 Geyser 玩家，或检查玩家是否来自基岩版：

```java
GeyserConnection connection = GeyserApi.api().connectionByUuid(uuid);
```

如果该玩家不在 Geyser 上，`connection` 可能为 null。

`GeyserApi.api()` 在 Geyser 插件启用前可能为 null。

有关 Geyser API 的更多信息，请参阅 [此处](/wiki/geyser/api/)。

## 使用 Floodgate {#using-floodgate}
本页提供了 Floodgate API 的简单入门介绍。如需详细说明，请参阅 [此处](/wiki/floodgate/api/)。

添加 Floodgate 的 API 作为依赖：

**Maven**
```xml
<dependency>
    <groupId>org.geysermc.floodgate</groupId>
    <artifactId>api</artifactId>
    <version>2.2.4-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

**Gradle**
```groovy
dependencies {
    compileOnly('org.geysermc.floodgate:api:2.2.4-SNAPSHOT')
}
```

使用以下方式获取 Floodgate API：
```java
FloodgateApi api = FloodgateApi.getInstance();
api.isFloodgatePlayer(uuid);
```

有关 Floodgate API 的更多信息，请参阅 [此处](/wiki/floodgate/api/)。
