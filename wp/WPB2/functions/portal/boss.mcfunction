execute @s ~ ~ ~ detect ~ ~ ~ water -1 execute @s ~ ~ ~ detect ~+1 ~+1 ~ wb:block_magic_equipment -1 execute @s ~ ~ ~ detect ~-1 ~+1 ~ wb:block_magic_equipment -1 execute @s ~ ~ ~ detect ~ ~+1 ~+1 wb:block_magic_equipment -1 execute @s ~ ~ ~ detect ~ ~+1 ~-1 wb:block_magic_equipment -1 execute @s ~ ~ ~ detect ~+1 ~+1 ~+1 wb:block_magic_barrier -1 execute @s ~ ~ ~ detect ~-1 ~+1 ~+1 wb:block_magic_barrier -1 execute @s ~ ~ ~ detect ~+1 ~+1 ~-1 wb:block_magic_barrier -1 execute @s ~ ~ ~ detect ~-1 ~+1 ~-1 wb:block_magic_barrier -1 tag @s add wbptboss
execute @s[tag=wbptboss] ~ ~ ~ fill ~+1 ~+1 ~+1 ~-1 ~+1 ~-1 air 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~+2 ~+1 ~+1 wb:block_magic_barrier 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~+2 ~+1 ~-1 wb:block_magic_barrier 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~-2 ~+1 ~+1 wb:block_magic_barrier 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~-2 ~+1 ~-1 wb:block_magic_barrier 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~+1 ~+1 ~+2 wb:block_magic_equipment 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~-1 ~+1 ~+2 wb:block_magic_equipment 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~+1 ~+1 ~-2 wb:block_magic_equipment 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~-1 ~+1 ~-2 wb:block_magic_equipment 0 replace
execute @s[tag=wbptboss] ~ ~ ~ fill ~+1 ~ ~+1 ~-1 ~ ~-1 wb:portal_boss 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~+2 ~+1 ~+2 torch 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~-2 ~+1 ~+2 torch 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~+2 ~+1 ~-2 torch 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~-2 ~+1 ~-2 torch 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~+2 ~+1 ~ stone_slab 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~-2 ~+1 ~ stone_slab 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~ ~+1 ~+2 stone_slab 0 replace
execute @s[tag=wbptboss] ~ ~ ~ setblock ~ ~+1 ~-2 stone_slab 0 replace
execute @s[tag=wbptboss] ~ ~ ~ summon minecraft:lightning_bolt ~ ~ ~
execute @s[tag=wbptboss] ~ ~ ~ tp @s ~ ~+1 ~
execute @s[tag=wbptboss] ~ ~ ~ tag @s remove wbptboss