execute @s[tag=prune] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§b[系统]禁用成功"}]}
execute @s[tag=!prune] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§b[系统]禁用失败，你还没有装备这个粒子"}]}
execute @s[tag=prune] ~ ~ ~ tag @s remove prune