# ServerEvents.recipes

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [RecipesEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/1902/common/src/main/java/dev/latvian/mods/kubejs/recipe/RecipesEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| SKIP_ERROR | Pattern | ✔ |
| originalRecipes | Map<ResourceLocation, RecipeJS> | ✘ |
| addedRecipes | Collection<RecipeJS> | ✘ |
| failedCount | AtomicInteger | ✘ |
| takenIds | Map<ResourceLocation, RecipeJS> | ✘ |
| shaped | RecipeTypeFunction | ✘ |
| shapeless | RecipeTypeFunction | ✘ |
| smelting | RecipeTypeFunction | ✘ |
| blasting | RecipeTypeFunction | ✘ |
| smoking | RecipeTypeFunction | ✘ |
| campfireCooking | RecipeTypeFunction | ✘ |
| stonecutting | RecipeTypeFunction | ✘ |
| smithing | RecipeTypeFunction | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| remove | RecipeFilter |  | void | ✘ |
| stage | RecipeFilter, String |  | void | ✘ |
| printExamples | String |  | void | ✘ |
| custom | JsonObject |  | RecipeJS | ✘ |
| runInParallel | Callable<T> |  | T | ✔ |
| runInParallel | Runnable |  | void | ✔ |
| customFilter | Predicate<RecipeKJS> |  | RecipeFilter | ✘ |
| countRecipes | RecipeFilter |  | int | ✘ |
| containsRecipe | RecipeFilter |  | boolean | ✘ |
| findRecipeIds | RecipeFilter |  | Collection<ResourceLocation> | ✘ |
| recipeStream | RecipeFilter |  | Stream<RecipeJS> | ✘ |
| forEachRecipe | RecipeFilter, Consumer<RecipeJS> |  | void | ✘ |
| printAllTypes |  |  | void | ✘ |
| setItemErrors | boolean |  | void | ✘ |
| findRecipes | RecipeFilter |  | Collection<RecipeJS> | ✘ |
| printTypes |  |  | void | ✘ |
| getRecipes |  |  | Map<String, Object> | ✘ |
| addRecipe | RecipeJS, boolean |  | RecipeJS | ✘ |
| takeId | RecipeJS, String, String |  | ResourceLocation | ✘ |
| getRecipeFunction | String |  | RecipeTypeFunction | ✘ |
| replaceOutput | RecipeFilter, ReplacementMatch, OutputReplacement |  | void | ✘ |
| replaceInput | RecipeFilter, ReplacementMatch, InputReplacement |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
ServerEvents.recipes((event) => {
	// This space (un)intentionally left blank
});
```

