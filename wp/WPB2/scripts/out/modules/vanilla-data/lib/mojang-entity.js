// Vanilla Data for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
//                 Raphael Landaverde <https://github.com/rlandav>
/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * All possible MinecraftEntityTypes
 */
export var MinecraftEntityTypes;
(function (MinecraftEntityTypes) {
    MinecraftEntityTypes["Agent"] = "agent";
    MinecraftEntityTypes["Allay"] = "allay";
    MinecraftEntityTypes["AreaEffectCloud"] = "area_effect_cloud";
    MinecraftEntityTypes["ArmorStand"] = "armor_stand";
    MinecraftEntityTypes["Arrow"] = "arrow";
    MinecraftEntityTypes["Axolotl"] = "axolotl";
    MinecraftEntityTypes["Bat"] = "bat";
    MinecraftEntityTypes["Bee"] = "bee";
    MinecraftEntityTypes["Blaze"] = "blaze";
    MinecraftEntityTypes["Boat"] = "boat";
    MinecraftEntityTypes["Camel"] = "camel";
    MinecraftEntityTypes["Cat"] = "cat";
    MinecraftEntityTypes["CaveSpider"] = "cave_spider";
    MinecraftEntityTypes["ChestBoat"] = "chest_boat";
    MinecraftEntityTypes["ChestMinecart"] = "chest_minecart";
    MinecraftEntityTypes["Chicken"] = "chicken";
    MinecraftEntityTypes["Cod"] = "cod";
    MinecraftEntityTypes["CommandBlockMinecart"] = "command_block_minecart";
    MinecraftEntityTypes["Cow"] = "cow";
    MinecraftEntityTypes["Creeper"] = "creeper";
    MinecraftEntityTypes["Dolphin"] = "dolphin";
    MinecraftEntityTypes["Donkey"] = "donkey";
    MinecraftEntityTypes["DragonFireball"] = "dragon_fireball";
    MinecraftEntityTypes["Drowned"] = "drowned";
    MinecraftEntityTypes["Egg"] = "egg";
    MinecraftEntityTypes["ElderGuardian"] = "elder_guardian";
    MinecraftEntityTypes["EnderCrystal"] = "ender_crystal";
    MinecraftEntityTypes["EnderDragon"] = "ender_dragon";
    MinecraftEntityTypes["EnderPearl"] = "ender_pearl";
    MinecraftEntityTypes["Enderman"] = "enderman";
    MinecraftEntityTypes["Endermite"] = "endermite";
    MinecraftEntityTypes["EvocationIllager"] = "evocation_illager";
    MinecraftEntityTypes["EyeOfEnderSignal"] = "eye_of_ender_signal";
    MinecraftEntityTypes["Fireball"] = "fireball";
    MinecraftEntityTypes["FireworksRocket"] = "fireworks_rocket";
    MinecraftEntityTypes["FishingHook"] = "fishing_hook";
    MinecraftEntityTypes["Fox"] = "fox";
    MinecraftEntityTypes["Frog"] = "frog";
    MinecraftEntityTypes["Ghast"] = "ghast";
    MinecraftEntityTypes["GlowSquid"] = "glow_squid";
    MinecraftEntityTypes["Goat"] = "goat";
    MinecraftEntityTypes["Guardian"] = "guardian";
    MinecraftEntityTypes["Hoglin"] = "hoglin";
    MinecraftEntityTypes["HopperMinecart"] = "hopper_minecart";
    MinecraftEntityTypes["Horse"] = "horse";
    MinecraftEntityTypes["Husk"] = "husk";
    MinecraftEntityTypes["IronGolem"] = "iron_golem";
    MinecraftEntityTypes["LightningBolt"] = "lightning_bolt";
    MinecraftEntityTypes["LingeringPotion"] = "lingering_potion";
    MinecraftEntityTypes["Llama"] = "llama";
    MinecraftEntityTypes["LlamaSpit"] = "llama_spit";
    MinecraftEntityTypes["MagmaCube"] = "magma_cube";
    MinecraftEntityTypes["Minecart"] = "minecart";
    MinecraftEntityTypes["Mooshroom"] = "mooshroom";
    MinecraftEntityTypes["Mule"] = "mule";
    MinecraftEntityTypes["Npc"] = "npc";
    MinecraftEntityTypes["Ocelot"] = "ocelot";
    MinecraftEntityTypes["Panda"] = "panda";
    MinecraftEntityTypes["Parrot"] = "parrot";
    MinecraftEntityTypes["Phantom"] = "phantom";
    MinecraftEntityTypes["Pig"] = "pig";
    MinecraftEntityTypes["Piglin"] = "piglin";
    MinecraftEntityTypes["PiglinBrute"] = "piglin_brute";
    MinecraftEntityTypes["Pillager"] = "pillager";
    MinecraftEntityTypes["Player"] = "player";
    MinecraftEntityTypes["PolarBear"] = "polar_bear";
    MinecraftEntityTypes["Pufferfish"] = "pufferfish";
    MinecraftEntityTypes["Rabbit"] = "rabbit";
    MinecraftEntityTypes["Ravager"] = "ravager";
    MinecraftEntityTypes["Salmon"] = "salmon";
    MinecraftEntityTypes["Sheep"] = "sheep";
    MinecraftEntityTypes["Shulker"] = "shulker";
    MinecraftEntityTypes["ShulkerBullet"] = "shulker_bullet";
    MinecraftEntityTypes["Silverfish"] = "silverfish";
    MinecraftEntityTypes["Skeleton"] = "skeleton";
    MinecraftEntityTypes["SkeletonHorse"] = "skeleton_horse";
    MinecraftEntityTypes["Slime"] = "slime";
    MinecraftEntityTypes["SmallFireball"] = "small_fireball";
    MinecraftEntityTypes["Sniffer"] = "sniffer";
    MinecraftEntityTypes["SnowGolem"] = "snow_golem";
    MinecraftEntityTypes["Snowball"] = "snowball";
    MinecraftEntityTypes["Spider"] = "spider";
    MinecraftEntityTypes["SplashPotion"] = "splash_potion";
    MinecraftEntityTypes["Squid"] = "squid";
    MinecraftEntityTypes["Stray"] = "stray";
    MinecraftEntityTypes["Strider"] = "strider";
    MinecraftEntityTypes["Tadpole"] = "tadpole";
    MinecraftEntityTypes["ThrownTrident"] = "thrown_trident";
    MinecraftEntityTypes["Tnt"] = "tnt";
    MinecraftEntityTypes["TntMinecart"] = "tnt_minecart";
    MinecraftEntityTypes["TraderLlama"] = "trader_llama";
    MinecraftEntityTypes["TripodCamera"] = "tripod_camera";
    MinecraftEntityTypes["Tropicalfish"] = "tropicalfish";
    MinecraftEntityTypes["Turtle"] = "turtle";
    MinecraftEntityTypes["Vex"] = "vex";
    MinecraftEntityTypes["Villager"] = "villager";
    MinecraftEntityTypes["VillagerV2"] = "villager_v2";
    MinecraftEntityTypes["Vindicator"] = "vindicator";
    MinecraftEntityTypes["WanderingTrader"] = "wandering_trader";
    MinecraftEntityTypes["Warden"] = "warden";
    MinecraftEntityTypes["Witch"] = "witch";
    MinecraftEntityTypes["Wither"] = "wither";
    MinecraftEntityTypes["WitherSkeleton"] = "wither_skeleton";
    MinecraftEntityTypes["WitherSkull"] = "wither_skull";
    MinecraftEntityTypes["WitherSkullDangerous"] = "wither_skull_dangerous";
    MinecraftEntityTypes["Wolf"] = "wolf";
    MinecraftEntityTypes["XpBottle"] = "xp_bottle";
    MinecraftEntityTypes["XpOrb"] = "xp_orb";
    MinecraftEntityTypes["Zoglin"] = "zoglin";
    MinecraftEntityTypes["Zombie"] = "zombie";
    MinecraftEntityTypes["ZombieHorse"] = "zombie_horse";
    MinecraftEntityTypes["ZombiePigman"] = "zombie_pigman";
    MinecraftEntityTypes["ZombieVillager"] = "zombie_villager";
    MinecraftEntityTypes["ZombieVillagerV2"] = "zombie_villager_v2";
})(MinecraftEntityTypes || (MinecraftEntityTypes = {}));
//# sourceMappingURL=mojang-entity.js.map