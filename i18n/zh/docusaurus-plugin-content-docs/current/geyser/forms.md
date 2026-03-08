---
title: 表单与 Cumulus
description: Cumulus 是 Geyser 和 Floodgate 中使用的表单 API，可用于扩展 Geyser 或 Floodgate 的项目中。
---

# 什么是 Cumulus？

基岩版有一个很酷的专属功能叫做表单。  
Cumulus 是我们在 Geyser 和 Floodgate 中使用的表单 API。  
源代码可在[此处](https://github.com/GeyserMC/Cumulus)获取。你可以通过[Floodgate API](/wiki/floodgate/api/)或[Geyser API](/wiki/geyser/api/)访问 Cumulus API。

基岩版支持三种类型的表单：
* 模态表单（ModalForm）
* 简单表单（SimpleForm）
* 自定义表单（CustomForm）

我们将从最简单的表单类型开始，逐一介绍它们，最后介绍最复杂的表单类型。  
之后，你将了解每个组件的概述。  
然后我们会讨论如何发送表单、接收响应以及一些高级用法。  

## 模态表单（ModalForm）{#modalform}

虽然这是最简单的表单类型，但它的自定义性也最差。  
它包含一个标题、描述（内容）和两个按钮。

![模态表单示例](https://i.imgur.com/kMpMgOh.png)

图片中使用的代码：

```java
ModalForm.builder()
    .title("Title")
    .content("Content")
    .button1("Button 1")
    .button2("Button 2")
```

## 简单表单（SimpleForm）{#simpleform}

虽然它比模态表单稍微复杂一些，但也具有更多的自定义性。  
它仍然局限于标题、内容和按钮，但这些按钮也可以包含图片，并且按钮数量没有最少和最多两个的限制。

![简单表单示例](https://i.imgur.com/3rj2OQ2.png)

图片中使用的代码：
```java
SimpleForm.builder()
    .title("Title")
    .content("Content")
    .button("Button without an image")
    .button("Button with URL image", FormImage.Type.URL, "https://github.com/GeyserMC.png?size=200")
    .button("Button with path image", FormImage.Type.PATH, "textures/i/glyph_world_template.png")
```

## 自定义表单（CustomForm）{#customform}

虽然自定义表单是我们列表中的最后一个（因此也是最复杂的一个），但它的自定义性也最强。  
这种表单由标题、内容和一系列不同的组件组成，例如标签、滑块和输入框。  
有关你可以使用的每个组件以及适用于哪种表单类型的更多信息，请参见[组件](https://github.com/GeyserMC/Cumulus/tree/master/src/main/java/org/geysermc/cumulus/component)。

![自定义表单示例](https://i.imgur.com/zHgxELm.png)

图片中使用的代码：

```java
CustomForm.builder()
    .title("Title")
    .dropdown("文本", "选项 1", "选项 2")
    .input("输入框", "占位符")
    .toggle("开关")
    .slider("文本", 0, 10, 1, 5)
```

## 发送表单 {#sending-a-form}

在你决定要使用哪种表单类型并完成实际内容的填写后，就可以将表单发送给基岩版玩家了。  
你可以通过调用 API 并将表单发送到玩家的 UUID 来实现：
```java
FloodgateApi.getInstance().sendForm(uuid, form); // 或 #sendForm(uuid, formBuilder)
```
或者你可以使用玩家的 FloodgatePlayer 实例来实现：
```java
FloodgatePlayer player = FloodgateApi.getInstance().getPlayer(uuid);
player.sendForm(form); // 或 #sendForm(formBuilder)
```
因此，你可以通过类似以下的方式以非常简洁的方式创建并发送表单：
```java
FloodgatePlayer player = FloodgateApi.getInstance().getPlayer(uuid);
...
player.sendForm(
    CustomForm.builder()
        .title("我的超酷标题")
        .label("10/10 内容")
);
```

## 接收客户端的响应 {#receiving-a-response-from-the-client}

我们可以向客户端发送表单固然很好，但我们也希望能够从客户端获取响应并进行处理。  
我们可以使用一个（或多个）结果处理器来实现这一点。最常用的结果处理器有：`validResultHandler(BiConsumer<Form, ValidFormResponseResult> | Consumer<ValidFormResponseResult>)`、`invalidResultHandler`、`closedResultHandler` 和 `closedOrInvalidResultHandler`。  
以下是一个使用结果处理器的示例：
```java
CustomForm.builder()
    .title("geyser.auth.login.form.details.title")
    .label("geyser.auth.login.form.details.desc")
    .input("geyser.auth.login.form.details.email", "account@geysermc.org", "")
    .input("geyser.auth.login.form.details.pass", "123456", "")
    .closedOrInvalidResultHandler(() -> buildAndShowLoginDetailsWindow(session))
    .validResultHandler(response -> session.authenticate(response.next(), response.next())));
```

## 高级用法 {#advanced-stuff}

FormBuilder 还支持翻译构建器中使用的数据。  
要添加翻译器，你可以使用 `translator(BiFunction<String, String, String>)` 或 `translator(BiFunction<String, String, String>, String)` 方法：
```java
ModalForm form = ModalForm.builder()
    .translator(this::translate, userLanguage)
    .title("Title")
    .content("Content")
    .button1("translate.button1")
    .button2("translate.button2")
    .build();

public String translate(String key, String locale) {
    // 此方法将为每个字符串调用，在这个例子中会调用4次：
    // Title、Content、translate.button1、translate.button2
    // 这里放入你自己的翻译逻辑
    // 返回替换键的值
}
```
或者你可以将翻译方法直接放在 FormBuilder 中，而不是单独的方法：
```java
ModalForm form = ModalForm.builder()
    .translator((key, unused) -> {
        // 此方法将为每个字符串调用，在这个例子中会调用4次：
        // Title、Content、translate.button1、translate.button2
        // 由于这不是一个单独的方法，你不需要locale参数，所以它是未使用的。
        // 这里放入你自己的翻译逻辑
        // 返回替换键的值
    })
    .title("Title")
    .content("Content")
    .button1("translate.button1")
    .button2("translate.button2")
    .build();
```
