scoreboard objectives add return dummy 最终结果
scoreboard objectives add decimal dummy 小数
scoreboard objectives add input dummy 输入
scoreboard objectives add judge dummy 判断
scoreboard objectives add two dummy 二
scoreboard objectives add hd dummy 一万
scoreboard objectives add hdx dummy 一百
scoreboard objectives add data dummy 运算数据


scoreboard players set @e[type=minecraft:armor_stand,name=运算] data 25600
scoreboard players set @e[type=minecraft:armor_stand,name=运算] return 12800
scoreboard players set @e[type=minecraft:armor_stand,name=运算] two 2
scoreboard players set @e[type=minecraft:armor_stand,name=运算] hd 10000
scoreboard players set @e[type=minecraft:armor_stand,name=运算] hdx 100
execute @e[type=minecraft:armor_stand,name=运算] ~ ~ ~ scoreboard players operation @s input *= @s hd

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge = @e[type=minecraft:armor_stand,name=运算] return
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge *= @e[type=minecraft:armor_stand,name=运算] judge
scoreboard players operation @e[type=minecraft:armor_stand,name=运算] judge -= @e[type=minecraft:armor_stand,name=运算] input
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=0}] ~ ~ ~ tag @s add ok
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=!0}] ~ ~ ~ scoreboard players operation @s data /= @s two
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=1..}] ~ ~ ~ scoreboard players operation @s return -= @s data
execute @e[type=minecraft:armor_stand,name=运算,scores={judge=..-1}] ~ ~ ~ scoreboard players operation @s return += @s data

execute @e[type=minecraft:armor_stand,name=运算] ~ ~ ~ scoreboard players operation @s decimal = @s return
execute @e[type=minecraft:armor_stand,name=运算] ~ ~ ~ scoreboard players operation @s decimal /= @s hdx
execute @e[type=minecraft:armor_stand,name=运算] ~ ~ ~ scoreboard players operation @s decimal *= @s hdx
execute @e[type=minecraft:armor_stand,name=运算] ~ ~ ~ scoreboard players operation @s return -= @s decimal
execute @e[type=minecraft:armor_stand,name=运算] ~ ~ ~ scoreboard players operation @s decimal >< @s return
execute @e[type=minecraft:armor_stand,name=运算] ~ ~ ~ scoreboard players operation @s return /= @s hdx
