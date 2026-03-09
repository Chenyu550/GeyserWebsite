---
title: 自定义方块
description: Geyser 允许将自定义方块映射到原版 Java 版方块状态或模组方块，以实现自定义方块模型。
---

要在 Geyser 中设置自定义方块，你必须选择如何注册你的方块。最简单的方法是[使用 JSON 文件](#json-映射)，但你也可以[使用 Geyser 扩展](#geyser-扩展)。

需要注意的是，方块及其相关组件并不十分稳定。Mojang 倾向于比物品更频繁地对这些内容进行修改。这意味着 Geyser 允许你注册的任何组件都有可能在未来的基岩版中失效。

## 启用自定义方块 {#enabling-custom-blocks}

在开始之前，请确保你的 `config.yml` 文件中 `gameplay.enable-custom-content` 已设置为 `true`。

```yml
# 是否添加任何在基岩版中通常不存在的物品和方块。
# 仅当使用不使用"转移数据包"风格的服务器切换代理时，才需要禁用此选项。
# 如果禁用此选项，熔炉矿车物品将被映射到漏斗矿车物品。
# Geyser 的方块、物品和头颅映射系统也将被禁用。
# 此选项需要重启 Geyser 才能更改其设置。
enable-custom-content: true
```

## JSON 映射 {#json-mappings}

JSON 映射使用与行为包注册方块类似的结构。等效组件列于 [Minecraft：基岩版创作者文档](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/blockcomponentslist)中。

注册方块或物品的自定义映射文件应放置在 `custom_mappings` 文件夹中。此文件夹在你启动服务器时创建。对于独立版，它位于与 `Geyser-Standalone.jar` 文件相同的文件夹中；对于插件版，它位于你的 Geyser 数据文件夹内。如果你没有此文件夹，请确保你使用的是最新版本的 Geyser。

### 映射文件示例 {#example-mappings-file}

```json
{
	"format_version": 1,
	"blocks": {
		"minecraft:granite_wall": {
			"name": "my_block",
			"display_name": "自定义花岗岩墙",
			"geometry": "geometry.blocks.my_block_geo",
			"material_instances": {
				"*": {
					"texture": "some_texture",
					"render_method": "alpha_test",
					"face_dimming": true,
					"ambient_occlusion": true
				}
			},
			"tags": ["stone", "wall"],
			"state_overrides": {
				"east=none,north=none,south=none,up=true,waterlogged=true,west=none": {
					"geometry": "geometry.blocks.my_other_block_geo",
					"destructible_by_mining": 10,
					"place_air": false
				},
				"east=none,north=none,south=none,up=false,waterlogged=true,west=tall": {
					"friction": 0.6,
					"light_emission": 7,
					"light_dampening": 8,
					"transformation": {
                        "scale": [0.5, 0.5, 0.5],
                        "translation": [1, 0, 0],
                        "rotation": [0, 90, 0]
                    }
				},
				"east=none,north=none,south=low,up=true,waterlogged=true,west=tall": {
					"placement_filter": {
						"conditions": [{
							"allowed_faces": ["up", "down"],
							"block_filter": [{
									"tags": "!query.any_tag('stone')"
								},
								"minecraft:dirt"
							]
						}]
					}
				}
			}
		}
	}
}
```

### 架构 {#schema}

以下详细说明了映射文件的架构。只有 `name` 字段是严格必需的。所有其他字段都是可选的。

<div class="long-list" markdown="1">

- `format_version`: 
  - 类型：`integer`
    - 描述：映射文件格式的版本。
- `blocks`:
  - 类型：`object`
    - 描述：包含方块定义列表的对象。
        - `minecraft:some_block`:
            - 类型：`object`
                - 描述：用于覆盖指定 Java 版方块的方块定义。
                    - `name`: 
                        - 类型：`string`
                            - 默认值：无
                            - 描述：自定义方块的名称。
                    - `collision_box`:
                        - 类型：`object`
                            - `origin`: 
                                - 类型：`array`
                                    - 默认值：从被覆盖的方块推断
                                    - 描述：x、y 和 z 原点值的数组
                                    - 范围：必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内（含）
                                        - `items`:
                                            - 类型：`float`
                                                - 默认值：从被覆盖的方块推断
                                                - 描述：单轴的原点值
                            - `size`: 
                                - 类型：`array`
                                    - 默认值：从被覆盖的方块推断
                                    - 描述：x、y 和 z 尺寸值的数组
                                        - `items`:
                                            - 类型：`float`
                                                - 默认值：从被覆盖的方块推断
                                                - 描述：单轴的尺寸值
                            - 范围：`origin` 和 `size` 的总和必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内（含）。
                    - `destructible_by_mining`:
                        - 类型：`integer`
                            - 默认值：从被覆盖的方块推断
                            - 描述：使用基础工具挖掘方块所需的时间（秒）。
                    - `display_name`: 
                        - 类型：`string`
                            - 默认值：自定义方块的名称
                            - 描述：方块的显示名称。
                    - `extended_collision_box`:
                        - 类型：`object`
                            - `origin`: 
                                - 类型：`array`
                                    - 默认值：从被覆盖的方块推断
                                    - 描述：x、y 和 z 原点值的数组
                                    - 范围：必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内（含）
                                        - `items`:
                                            - 类型：`float`
                                                - 默认值：从被覆盖的方块推断
                                                - 描述：单轴的原点值
                            - `size`: 
                                - 类型：`array`
                                    - 默认值：从被覆盖的方块推断
                                    - 描述：x、y 和 z 尺寸值的数组
                                        - `items`:
                                            - 类型：`float`
                                                - 默认值：从被覆盖的方块推断
                                                - 描述：单轴的尺寸值
                            - 范围：`origin` 和 `size` 的总和必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内（含）。
                    - `friction`:
                        - 类型：`float`
                            - 范围：`0.0` 到 `1.0`
                            - 默认值：`0.4`
                            - 描述：实体在方块上移动时的摩擦值。
                    - `geometry`: 
                        - 类型：`string`
                            - 默认值：无
                            - 描述：方块的几何标识符。
                        - 类型：`object`
                            - 描述：带有骨骼可见性过滤器的方块几何形状
                                - `identifier`
                                    - 类型：`string`
                                        - 默认值：无
                                        - 描述：方块的几何标识符。
                                - `bone_visibility`:
                                    - 类型：`object`
                                        - 描述：包含方块骨骼可见性过滤器的对象。
                                            - `bone_name`:
                                                - 类型：`string`
                                                    - 默认值：无
                                                    - 描述：决定骨骼是否可见的 molang 字符串。
                                                - 类型：`boolean`
                                                    - 默认值：无
                                                    - 描述：骨骼是否可见。
                    - `light_emission`:
                        - 类型：`integer`
                            - 范围：`0` 到 `15`
                            - 默认值：`0`
                            - 描述：方块发出的光量。
                    - `light_dampening`:
                        - 类型：`integer`
                            - 范围：`0` 到 `15`
                            - 默认值：`15`
                            - 描述：光线穿过方块时被衰减的量。
                    - `material_instances`:
                        - 类型：`object`
                            - 描述：包含方块材质实例的对象。
                                - `key`:
                                    - 类型：`object`
                                        - 描述：方块的默认材质实例。可以使用其他通配符或特定实例。
                                            - `texture`:
                                                - 类型：`string`
                                                    - 默认值：自定义方块的名称
                                                    - 描述：方块的纹理资源路径。
                                            - `render_method`:
                                                - 类型：`string`
                                                    - 默认值：`alpha_test`
                                                    - 描述：方块使用的渲染方法。
                                            - `face_dimming`:
                                                - 类型：`boolean`
                                                    - 默认值：`false`
                                                    - 描述：是否为方块启用面明暗处理。
                                            - `ambient_occlusion`:
                                                - 类型：`boolean`
                                                    - 默认值：`false`
                                                    - 描述：是否为方块启用环境光遮蔽。
                    - `place_air`:
                        - 类型：`boolean`
                            - 默认值：`true`
                            - 描述：方块是否应放置空气以防止重复放置。
                    - `placement_filter`:
                        - 类型：`object`
                            - 描述：包含方块放置过滤器的对象。
                                - `conditions`:
                                    - 类型：`array`
                                        - 描述：放置方块必须满足的条件数组。
                                            - `allowed_faces`:
                                                - 类型：`array`
                                                    - 描述：可以放置方块的面的数组。
                                                        - `items`:
                                                            - 类型：`string`
                                                                - 范围：`up`、`down`、`north`、`south`、`east`、`west`
                                                                - 描述：可以放置方块的面。
                                                        - `block_filter`:
                                                            - 类型：`array`
                                                                - 描述：可以放置方块的方块或 true molang 查询的数组。
                                                                    - `items`:
                                                                        - 类型：`string`
                                                                            - 描述：可以放置方块的方块。
                                                                                - 类型 `object`
                                                                                    - 描述：保存可以放置方块的 true molang 查询。
                                                                                        - `tags`:
                                                                                            - 类型：`array`
                                                                                                - 描述：可以放置方块的 true molang 查询。
                    - `selection_box`:
                        - 类型：`object`
                            - `origin`: 
                                - 类型：`array`
                                    - 默认值：从被覆盖的方块推断
                                    - 描述：x、y 和 z 原点值的数组
                                    - 范围：必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内（含）
                                        - `items`:
                                            - 类型：`float`
                                                - 默认值：从被覆盖的方块推断
                                                - 描述：单轴的原点值
                            - `size`: 
                                - 类型：`array`
                                    - 默认值：从被覆盖的方块推断
                                    - 描述：x、y 和 z 尺寸值的数组
                                        - `items`:
                                            - 类型：`float`
                                                - 默认值：从被覆盖的方块推断
                                                - 描述：单轴的尺寸值
                            - 范围：`origin` 和 `size` 的总和必须在 `[-8, 0, -8]` 到 `[8, 16, 8]` 范围内（含）。
                    - `tags`:
                        - 类型：`array`
                            - 描述：与方块关联的标签数组。
                                - `items`: 
                                    - 类型：`string`
                    - `transformation`:
                        - 类型：`object`
                            - 描述：应用于方块的平移、缩放和旋转值。
                                - `scale`
                                    - 类型：`array`
                                        - 默认值：`[1, 1, 1]`
                                        - 描述：x、y 和 z 缩放值的数组
                                            - `items`:
                                                - 类型：`float`
                                                    - 默认值：`1`
                                                    - 描述：单轴的缩放值
                                - `translation`:
                                    - 类型：`array`
                                        - 默认值：`[0, 0, 0]`
                                        - 描述：x、y 和 z 平移值的数组
                                            - `items`:
                                                - 类型：`float`
                                                    - 默认值：`0`
                                                    - 描述：单轴的平移值
                                - `rotation`
                                    - 类型：`array`
                                        - 默认值：`[0, 0, 0]`
                                        - 描述：x、y 和 z 旋转值的数组，以 90 度为增量（例如 `[90, -180, 0]`）
                                            - `items`:
                                                - 类型：`integer`
                                                    - 范围：`0`、`90`、`180` 和 `270`
                                                    - 默认值：`0`
                                                    - 描述：单轴的旋转值
                    - `unit_cube`:
                        - 类型：`boolean`
                            - 默认值：`false`
                            - 描述：是否在曲面细分中使用单位立方体。
                    - `creative_category`: 
                        - 类型：`string`
                            - 默认值：`building_blocks`
                            - 描述：放置方块的创造模式类别。
                            - 范围：请参阅基岩版 Wiki 上的[菜单类别](https://wiki.bedrock.dev/documentation/menu-categories.html#list-of-categories)。
                    - `creative_group`:
                        - 类型：`string`
                            - 默认值：无
                            - 描述：放置方块的创造模式组。
                            - 范围：请参阅基岩版 Wiki 上的[菜单组](https://wiki.bedrock.dev/documentation/menu-categories.html#list-of-groups)。
                    - `included_in_creative_inventory`:
                        - 类型：`boolean`
                            - 默认值：`true`
                            - 描述：方块是否包含在创造模式物品栏中。
                    - `only_override_states`:
                        - 类型：`boolean`
                            - 默认值：`false`
                            - 描述：方块是否应仅覆盖 `state_overrides` 中指定的状态。
                    - `state_overrides`:
                        - 类型：`object`
                            - 描述：包含方块状态覆盖的对象。
                                - `property1=value1,property2=value2,...`:
                                    - 类型：`object`
                                        - 描述：特定方块状态的覆盖。可能的状态列于 Geyser 的[方块映射](https://raw.githubusercontent.com/GeyserMC/mappings/6b661f0d517d895aebc1f55a25d2c86f033beb1d/blocks.json)中
                                        - 接受与方块定义相同的所有属性，但 `creative_category`、`creative_group`、`included_in_creative_inventory`、`only_override_states` 和 `state_overrides` 除外。

</div>

## Geyser 扩展 {#geyser-extensions}

在此示例中，我们将创建一个自定义方块，覆盖原版的红石线点。此方块将放置在方块顶部，并在充能时发出可见的红石信号。

首先，创建一个实现 Geyser 的 Extension 类的类：

```java
public class RedstoneDot implements Extension {
    //...
}
```

接下来，创建一个方法在 `GeyserDefineCustomBlocksEvent` 中注册你的方块：

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        //...
    }
}
```

为方块构建 `CustomBlockComponents`、`CustomBlockData` 和 `CustomBlockPermutation` 列表（如果需要）：

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        BoxComponent selectionBox = new BoxComponent(-5, 0, -5, 10, 1f, 10);

        CustomBlockComponents components = CustomBlockComponents.builder()
                .collisionBox(BoxComponent.emptyBox())
                .selectionBox(selectionBox)
                .geometry(new GeometryComponentBuilder()
                    .identifier("geometry.amberichu.redstone_dot")
                    .build())
                .lightEmission(0)
                .lightDampening(0)
                .friction(1f)
                .build();

        CustomBlockData redstoneDot = CustomBlockData.builder()
                .name("redstone_dot")
                .intProperty("POWER_PROPERTY", IntStream.range(0, 16).boxed().toList())
                .components(components)
                .permutations(createRedstoneDotPermutations())
                .build();

        // ...
    }

    private List<CustomBlockPermutation> createRedstoneDotPermutations() {
        List<CustomBlockPermutation> permutations = new ArrayList<>();
        for (int power = 0; power < 16; power++) {
            String texture = "amberichu.redstone_dot" + power;
            MaterialInstance invisMaterialInstance = MaterialInstance.builder()
                        .texture("amberichu.invisible")
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build();
            CustomBlockComponents components = CustomBlockComponents.builder()
                    .materialInstance("up", MaterialInstance.builder()
                        .texture(texture)
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build())
                    .materialInstance("down", invisMaterialInstance)
                    .materialInstance("north", invisMaterialInstance)
                    .materialInstance("south", invisMaterialInstance)
                    .materialInstance("east", invisMaterialInstance)
                    .materialInstance("west", invisMaterialInstance)
                    .build();
            String condition = String.format("query.block_property('%s') == %d", POWER_PROPERTY, power);
            permutations.add(new CustomBlockPermutation(components, condition));
        }
        return permutations;
    }
}
```

Finally, register the custom block, block state overrides, and block item overrides:

```java
public class RedstoneDot implements Extension {
    @Subscribe
    public void onDefineCustomBlocks(GeyserDefineCustomBlocksEvent event) {
        BoxComponent selectionBox = new BoxComponent(-5, 0, -5, 10, 1f, 10);

        CustomBlockComponents components = CustomBlockComponents.builder()
                .collisionBox(BoxComponent.emptyBox())
                .selectionBox(selectionBox)
                .geometry(new GeometryComponentBuilder()
                    .identifier("geometry.amberichu.redstone_dot")
                    .build())
                .lightEmission(0)
                .lightDampening(0)
                .friction(1f)
                .build();

        CustomBlockData redstoneDot = CustomBlockData.builder()
                .name("redstone_dot")
                .intProperty("POWER_PROPERTY", IntStream.range(0, 16).boxed().toList())
                .components(components)
                .permutations(createRedstoneDotPermutations())
                .build();
        
        event.register(redstoneDot);
        event.registerItemOverride("minecraft:redstone_wire", redstoneDot);

        for (int power = 0; power < 16; power++) {
            String javaIdentifier = String.format("minecraft:redstone_wire[east=none,north=none,power=%d,south=none,west=none]", power);
            event.registerOverride(javaIdentifier, redstoneDot.blockStateBuilder()
                    .intProperty("POWER_PROPERTY", power)
                    .build());
        }
    }

    private List<CustomBlockPermutation> createRedstoneDotPermutations() {
        List<CustomBlockPermutation> permutations = new ArrayList<>();
        for (int power = 0; power < 16; power++) {
            String texture = "amberichu.redstone_dot" + power;
            MaterialInstance invisMaterialInstance = MaterialInstance.builder()
                        .texture("amberichu.invisible")
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build();
            CustomBlockComponents components = CustomBlockComponents.builder()
                    .materialInstance("up", MaterialInstance.builder()
                        .texture(texture)
                        .renderMethod("alpha_test")
                        .faceDimming(false)
                        .ambientOcclusion(false)
                        .build())
                    .materialInstance("down", invisMaterialInstance)
                    .materialInstance("north", invisMaterialInstance)
                    .materialInstance("south", invisMaterialInstance)
                    .materialInstance("east", invisMaterialInstance)
                    .materialInstance("west", invisMaterialInstance)
                    .build();
            String condition = String.format("query.block_property('%s') == %d", POWER_PROPERTY, power);
            permutations.add(new CustomBlockPermutation(components, condition));
        }
        return permutations;
    }
}
```
