// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {
    event.create('dirt_dust').displayName('Dirt Dust').texture('kubejs:item/dirt_dust')
    event.create('gravel_dust').displayName('Gravel Dust').texture('kubejs:item/gravel_dust')
    event.create('modularium_ingot').displayName('Modularium Ingot').texture('kubejs:item/modularium_ingot')
    event.create('modularium_dust').displayName('Modularium Dust').texture('kubejs:item/modularium_dust')
    event.create('lead_pickaxe', 'pickaxe').tier('lead').texture('kubejs:item/lead_pickaxe')
    event.create('silver_pickaxe', 'pickaxe').tier('silver').texture('kubejs:item/silver_pickaxe')
    event.create('nickel_pickaxe', 'pickaxe').tier('nickel').texture('kubejs:item/nickel_pickaxe')
    event.create('invar_pickaxe', 'pickaxe').tier('invar').texture('kubejs:item/invar_pickaxe')
    event.create('electrum_pickaxe', 'pickaxe').tier('electrum').texture('kubejs:item/electrum_pickaxe')
    event.create('constantan_pickaxe', 'pickaxe').tier('constantan').texture('kubejs:item/constantan_pickaxe')
    event.create('bronze_pickaxe', 'pickaxe').tier('bronze').texture('kubejs:item/bronze_pickaxe')
    event.create('tin_pickaxe', 'pickaxe').tier('tin').texture('kubejs:item/tin_pickaxe')


})
StartupEvents.registry('block', event => {
  event.create('modularium_block') // Create a new block
    .displayName('Modularium Block') // Set a custom name
    .material('metal')
    .textureAll('kubejs:block/modularium_block')
    .hardness(2.7) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
})
StartupEvents.registry('block', event => {
    event.create("custommachinery:decay_generator", "custommachinery")
    event.create('kubejs:decay_generator', "custommachinery").machine("custommachinery:decay_generator")
})
ItemEvents.toolTierRegistry(event => {
    event.add('tin', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/tin'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('lead', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/lead'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('copper', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('silver', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('nickel', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('invar', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('electrum', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('constantan', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('bronze', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
ItemEvents.toolTierRegistry(event => {
    event.add('tin', tier => {
      tier.uses = 250
      tier.speed = 6.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 14
      tier.repairIngredient = '#forge:ingots/copper'
    })
})
