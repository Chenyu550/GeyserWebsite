---
title: Geyser 事件系统
description: Geyser 拥有强大的事件系统，允许你监听 Geyser 发送的事件。事件是 Geyser 扩展的核心，同时也可被插件和模组使用。
---

# Geyser 事件系统
Geyser 拥有强大的事件系统，允许你监听 Geyser 发送的事件。事件是 Geyser 扩展的核心，同时也可被插件和模组使用。

完整文档可查看 [此处](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event)。

## 事件分类 {#event-categories}
要在 Spigot/Paper 插件或 Fabric 模组中使用事件，你需要先将 Geyser 事件总线注册为监听器，然后订阅你想要监听的事件。
扩展可直接使用 @Subscribe 注解。

事件分为以下类别：
- [基岩版](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/bedrock)：针对每个连接的基岩版客户端发送的事件，
  例如当基岩版玩家使用表情时触发的 ClientEmoteEvent，或当基岩版玩家登录并即将加入服务器时触发的 SessionLoginEvent。
- [Java 版](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/java)：针对 Java 版服务器发送的事件，例如
  ServerDefineCommandsEvent——当 Java 版服务器向基岩版玩家发送要显示的命令时触发。
- [连接](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/connection)：与连接相关的事件，例如用于返回自定义 MOTD 等内容的 ping 事件。
- [生命周期](https://github.com/GeyserMC/Geyser/tree/master/api/src/main/java/org/geysermc/geyser/api/event/lifecycle)：在 Geyser 生命周期中发送的事件，例如加载自定义物品、资源包或 Geyser 命令时触发的事件。

要查看各分类下的所有事件，请点击上方链接。

## 使用示例 {#usage-examples}

每个要订阅事件的方法都需要使用 @Subscribe 注解（来自 GeyserMC 事件包）。
```java
@Subscribe
public void onGeyserLoadResourcePacksEvent(GeyserLoadResourcePacksEvent event) {
    logger().info("Loading: " + event.resourcePacks().size() + " resource packs.");
    // 你可以通过 event.resourcePacks().add(资源包路径) 添加资源包
}
```
如果你希望在 Spigot/Paper 插件或 Fabric 模组中监听事件，需要先注册 Geyser 事件总线作为监听器。只需确保你的模组或插件主类实现了 `EventRegistrar` 接口即可。
扩展无需执行此操作——它们会自动注册，因此只需简单添加 @Subscribe 注解即可。

**Paper/Spigot 插件示例：**

1. 在你的 plugin.yml 中添加以下内容：
```yaml
  depend: ["Geyser-Spigot"]
```
这可确保你的插件在 Geyser 之后加载，从而保证 Geyser API 可用。

2. 在你的主类中实现 EventRegistrar 接口，并在 onEnable 方法中注册事件总线：
```java
public class ExamplePlugin extends JavaPlugin implements EventRegistrar {
    
    @Override
    public void onEnable(){
        getLogger().info("注册 Geyser 事件总线！");
        GeyserApi.api().eventBus().register(this, this); // 将你的插件 & 此类实例注册为监听器
    }

    // 这里是一个事件，我们像往常一样使用 @Subscribe 注解订阅
    @Subscribe
    public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent event) {
        getLogger().info("Geyser 已启动！");
    }
}
```
3. 如果你希望为事件提供消费者，而非使用注解，也可以手动将方法订阅到事件总线：
```java
// 在 onEnable 中注册事件注册器后添加以下内容
GeyserApi.api().eventBus().subscribe(this, GeyserPostInitializeEvent.class, this::onGeyserPostInitializeEvent);
```

**Fabric 模组示例：**
```java
public class ExampleMod implements ModInitializer, EventRegistrar {
    public static final Logger LOGGER = LoggerFactory.getLogger("modid");
    
    @Override 
    public void onInitialize() {
        ServerLifecycleEvents.SERVER_STARTING.register((server) -> {
            GeyserApi.api().eventBus().register(this, this); // 将你的模组 & 此类实例注册为监听器
        });
        
        LOGGER.info("Geyser 太棒了！");
    }
    
    // 这里是一个事件，我们像往常一样使用 @Subscribe 注解订阅
    @Subscribe 
    public void onGeyserPostInitializeEvent(GeyserPostInitializeEvent event) {
        LOGGER.info("Geyser 已启动！");
    }
}
```
:::info
    注意：我们无法直接在模组初始化器中注册事件总线，因为此时 Geyser API 尚未加载。
:::

因此，我们在 Fabric API 提供的服务器启动事件中注册它。

## 事件优先级 {#event-priority}
事件可以设置优先级，用于确定监听器的调用顺序。默认优先级为 NORMAL。
要（可选地）设置事件监听器的优先级，你可以在 `@Subscribe` 注解中添加优先级参数：
```java
@Subscribe(postOrder = PostOrder.EARLY)
```
如果你未指定优先级，则会使用默认优先级。所有可用优先级请查看
[此处](https://github.com/GeyserMC/Events/blob/master/src/main/java/org/geysermc/event/PostOrder.java)。
