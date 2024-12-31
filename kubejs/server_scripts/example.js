
BlockEvents.leftClicked('compactmachines:solid_wall', event => {
  let CurrentTickCount = event.server.tickCount
  let wait_period = 20
  let NextTickCount = 40
  if(CurrentTickCount >= NextTickCount) {
    console.log("1 second has passed")
    let NextTickCount = event.server.tickCount + wait_period
    console.log(NextTickCount)
    console.log(CurrentTickCount)
    if (event.player.mainHandItem.id == "minecraft:wooden_shovel") {
      event.player.runCommandSilent('/loot give @p loot minecraft:wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "minecraft:wooden_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:wood_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "minecraft:stone_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:stone_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "minecraft:iron_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:iron_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "kubejs:lead_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:lead_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "kubejs:tin_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:tin_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "kubejs:silver_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:silver_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "kubejs:nickel_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:nickel_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "kubejs:electrum_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:electrum_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "kubejs:constantan_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:constantan_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "kubejs:bronze_pickaxe") {
      event.player.runCommandSilent('/loot give @p loot minecraft:bronze_pick_wall')
      event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
      event.player.damageHeldItem()
    } else if (event.player.mainHandItem.id == "minecraft:air") {
      let PlayerHealth = event.player.getHealth()
      if (PlayerHealth >= 2) {

        event.player.setHealth(PlayerHealth - 0.5)
        event.player.runCommandSilent('/loot give @p loot minecraft:wall')
        event.player.runCommandSilent('/playsound minecraft:block.metal.break master XDtymon ~ ~ ~ 0.4 0.2')
        
      } else {
        event.player.runCommandSilent('/title @p actionbar "You can`t bruise yourself!"')    
      } 
    }
  } else {
    console.log("not working")

  }
  
  
})
ServerEvents.recipes(event => {
  event.recipes.custommachinery.custom_machine("custommachinery:decay_generator", 600)
  .requireItemTag("#forge:storage_blocks/uranium")
  .produceEnergyPerTick(60)
  .produceItem('nuclearcraft:thorium_block')
  event.recipes.custommachinery.custom_machine("custommachinery:decay_generator", 2400)
  .requireItemTag("#forge:storage_blocks/thorium")
  .produceEnergyPerTick(20)
  .produceItem('thermal:lead_block')
})
BlockEvents.leftClicked('minecraft:dirt', event => {

  event.player.animateHurt()
  event.player.runCommandSilent('/loot give @p loot minecraft:dirt')
  event.block.set('minecraft:farmland')
})

ServerEvents.recipes(event => {
  event.smelting('kubejs:modularium_ingot', 'kubejs:modularium_dust')
  event.shapeless(
    Item.of('minecraft:dirt', 1), 
    [
      '4x kubejs:dirt_dust'
    ]
  )
 
  event.shapeless(
    Item.of('minecraft:gravel', 1), 
    [
      '4x kubejs:gravel_dust'
    ]
  )
  event.shapeless(
    Item.of('kubejs:modularium_block', 1), 
    [
      '9x kubejs:modularium_ingot'
    ]
  )
  event.shapeless(
    Item.of('kubejs:modularium_ingot', 9), 
    [
      'kubejs:modularium_block'
    ]
  )
  event.shaped(
		Item.of('bonsaitrees3:bonsaipot'),
		[ 
		  '   ', 
		  '   ',
		  'SS '  
		],
		{
		  S: 'minecraft:cobblestone'
		}
	)
  //
  event.shaped(
		Item.of('kubejs:modularium_dust'),
		[ 
		  'UIU', 
		  'IRI',
		  'UIU'  
		],
		{
		  U: 'immersiveengineering:dust_uranium',
		  I: 'thermal:iron_dust',
		  R: 'minecraft:redstone'
		}
	)

  //Kilofy
  event.shaped(
		Item.of('kubejs:tin_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/tin'
		}
	)
  event.shaped(
		Item.of('kubejs:lead_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/lead'
		}
	)
  event.shaped(
		Item.of('kubejs:nickel_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/nickel'
		}
	)
  event.shaped(
		Item.of('kubejs:silver_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/silver'
		}
	)
  event.shaped(
		Item.of('kubejs:invar_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/invar'
		}
	)
  event.shaped(
		Item.of('kubejs:electrum_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/electrum'
		}
	)
  event.shaped(
		Item.of('kubejs:constantan_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/constantan'
		}
	)
  event.shaped(
		Item.of('kubejs:bronze_pickaxe'),
		[ 
		  'III', 
		  ' S ',
		  ' S '  
		],
		{
		  S: 'minecraft:stick',
      I: '#forge:ingots/bronze'
		}
	)
})

ServerEvents.recipes(event => {
	[
    'bonsaitrees3:bonsaipot',
    'compactmachines:wall',
    'compactmachines:machine_tiny',
    'compactmachines:machine_small',
    'compactmachines:machine_normal',
    'compactmachines:machine_large',
    'compactmachines:machine_giant',
    'compactmachines:machine_maximum',


  ].forEach((recpieID) => event.remove({id: recpieID}));
})
PlayerEvents.tick(event=> {

})