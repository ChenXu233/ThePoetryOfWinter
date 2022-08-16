import ExGameClient from "../modules/exmc/ExGameClient.js";
import { EntityQueryOptions, MinecraftItemTypes, ItemStack, MinecraftBlockTypes, Items, MinecraftEffectTypes } from 'mojang-minecraft';
import MenuUIAlert from "./ui/MenuUIAlert.js";
import menuFunctionUI from "./data/menuFunctionUI.js";
import ExPlayer from "../modules/exmc/entity/ExPlayer.js";
import GlobalSettings from "./cache/GlobalSettings.js";
import { Objective } from "../modules/exmc/entity/ExScoresManager.js";
import TagCache from "../modules/exmc/storage/cache/TagCache.js";
import PomData from "./cache/PomData.js";
import TimeLoopTask from "../modules/exmc/utils/TimeLoopTask.js";
import TalentData, { Talent, Occupation } from "./cache/TalentData.js";
import ExColorLoreUtil from "../modules/exmc/item/ExColorLoreUtil.js";
import ExEntity from '../modules/exmc/entity/ExEntity.js';
import MathUtil from "../modules/exmc/utils/MathUtil.js";
import ExItem from "../modules/exmc/item/ExItem.js";
import Vector3 from "../modules/exmc/utils/Vector3.js";
import ExBlock from "../modules/exmc/block/ExBlock.js";
import isEquipment from "./items/isEquipment.js";
import lang from "./data/lang.js";
import { ModalFormData } from "mojang-minecraft-ui";
import ExErrorStack from "../modules/exmc/ExErrorStack.js";
import { decodeUnicode } from "../modules/exmc/utils/Unicode.js";
export default class PomClient extends ExGameClient {
    constructor(server, id, player) {
        super(server, id, player);
        this.strikeSkill = true;
        this.skillLoop = new TimeLoopTask(this.getEvents(), () => {
            var _a;
            if (this.data.talent.occupation.id === Occupation.ASSASSIN.id)
                this.strikeSkill = true;
            if (this.data.talent.occupation.id === Occupation.PRIEST.id) {
                let query = new EntityQueryOptions();
                query.maxDistance = 20;
                query.location = this.player.location;
                let health = 999;
                let player = this.exPlayer;
                for (let p of this.player.dimension.getPlayers(query)) {
                    let exp = ExPlayer.getInstance(p);
                    if (exp.getHealth() < health) {
                        health = exp.getHealth();
                        player = exp;
                    }
                }
                player.addHealth(this, ((_a = this.talentRes.get(Talent.REGENERATE)) !== null && _a !== void 0 ? _a : 0));
            }
        }).delay(10000);
        this.wbflLooper = new TimeLoopTask(this.getEvents(), () => {
            this.exPlayer.getScoresManager().addScoreAsync("wbfl", 2);
        }).delay(5000);
        this.armorCoolingLooper = new TimeLoopTask(this.getEvents(), () => {
            let scores = this.exPlayer.getScoresManager();
            if (scores.getScore("wbkjlq") > 0)
                scores.removeScore("wbkjlq", 1);
        }).delay(1000);
        this.blockTranslateData = new Map();
        this.talentRes = new Map();
        this.globalSettings = new GlobalSettings(new Objective("wpsetting"));
        this.cache = new TagCache(this.exPlayer);
        this.looper = new TimeLoopTask(this.getEvents(), () => {
            this.cache.save();
        });
        this.looper.delay(10000);
        this.looper.start();
        this.data = this.cache.get(new PomData());
        if (this.data.talent.occupation.id === Occupation.PRIEST.id)
            this.skillLoop.start();
        this.register();
    }
    register() {
        this.getEvents().exEvents.itemUse.subscribe((e) => {
            const { item } = e;
            if (item.id == "wb:power") {
                if (!this.data.lang) {
                    new ModalFormData()
                        .title("Choose a language")
                        .dropdown("Language List", ["English", "简体中文"], 0)
                        .show(this.player).then((e) => {
                        if (!e.isCanceled) {
                            this.data.lang = e.formValues[0] == "English" ? "en" : "zh";
                        }
                    })
                        .catch((e) => {
                        ExErrorStack.throwError(e);
                    });
                }
                else {
                    new MenuUIAlert(this, menuFunctionUI(this.getLang())).showPage(["main", "notice"]);
                }
            }
        });
        //职业
        this.getEvents().exEvents.playerHitEntity.subscribe((e) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let item = this.exPlayer.getBag().getItemOnHand();
            let damageFac = 0;
            let extraDamage = 0;
            let target = ExEntity.getInstance(e.hurtEntity);
            let dis = target.getPosition().distance(this.exPlayer.getPosition());
            if (!item) {
                let CLOAD_PIERCING = (_a = this.talentRes.get(Talent.CLOAD_PIERCING)) !== null && _a !== void 0 ? _a : 0;
                damageFac += Math.min(64, dis) / 64 * CLOAD_PIERCING / 100;
                let ARMOR_BREAKING = (_b = this.talentRes.get(Talent.ARMOR_BREAKING)) !== null && _b !== void 0 ? _b : 0;
                extraDamage += this.exPlayer.getMaxHealth() * ARMOR_BREAKING / 100;
                let SANCTION = (_c = this.talentRes.get(Talent.SANCTION)) !== null && _c !== void 0 ? _c : 0;
                damageFac += (16 - Math.min(16, dis)) / 16 * SANCTION / 100;
                let SUDDEN_STRIKE = (_d = this.talentRes.get(Talent.SUDDEN_STRIKE)) !== null && _d !== void 0 ? _d : 0;
                if (this.strikeSkill) {
                    if (this.data.talent.occupation.id === Occupation.ASSASSIN.id)
                        this.skillLoop.startOnce();
                    this.strikeSkill = false;
                    damageFac += SUDDEN_STRIKE / 100;
                }
            }
            else {
                let lore = new ExColorLoreUtil(ExItem.getInstance(item));
                let CLOAD_PIERCING = MathUtil.zeroIfNaN(parseFloat(((_e = lore.getValueUseMap("addition", Talent.getCharacter(this.getLang(), Talent.CLOAD_PIERCING))) !== null && _e !== void 0 ? _e : "->0").split("->")[1]));
                damageFac += Math.min(64, dis) / 64 * CLOAD_PIERCING / 100;
                let ARMOR_BREAKING = MathUtil.zeroIfNaN(parseFloat(((_f = lore.getValueUseMap("addition", Talent.getCharacter(this.getLang(), Talent.ARMOR_BREAKING))) !== null && _f !== void 0 ? _f : "->0").split("->")[1]));
                extraDamage += this.exPlayer.getMaxHealth() * ARMOR_BREAKING / 100;
                let SANCTION = MathUtil.zeroIfNaN(parseFloat(((_g = lore.getValueUseMap("addition", Talent.getCharacter(this.getLang(), Talent.SANCTION))) !== null && _g !== void 0 ? _g : "->0").split("->")[1]));
                damageFac += (16 - Math.min(16, dis)) / 16 * SANCTION / 100;
                let SUDDEN_STRIKE = MathUtil.zeroIfNaN(parseFloat(((_h = lore.getValueUseMap("addition", Talent.getCharacter(this.getLang(), Talent.SUDDEN_STRIKE))) !== null && _h !== void 0 ? _h : "->0").split("->")[1]));
                if (item.id.startsWith("dec:"))
                    damageFac += 0.4;
                if (this.strikeSkill) {
                    if (this.data.talent.occupation.id === Occupation.ASSASSIN.id)
                        this.skillLoop.startOnce();
                    this.strikeSkill = false;
                    damageFac += SUDDEN_STRIKE / 100;
                }
            }
            let damage = e.damage * damageFac + extraDamage;
            this.hasCauseDamage(damage + e.damage);
            target.removeHealth(this, damage);
        });
        this.getEvents().exEvents.playerHurt.subscribe((e) => {
            var _a, _b;
            let damage = ((_a = this.exPlayer.getPreRemoveHealth()) !== null && _a !== void 0 ? _a : 0) + e.damage;
            let add = 0;
            add += damage * ((_b = this.talentRes.get(Talent.DEFENSE)) !== null && _b !== void 0 ? _b : 0) / 100;
            this.exPlayer.addHealth(this, add);
        });
        this.getEvents().exEvents.itemOnHandChange.subscribe((e) => {
            var _a, _b, _c, _d, _e;
            const bag = this.exPlayer.getBag();
            if (e.afterItem) {
                let lore = new ExColorLoreUtil(ExItem.getInstance(e.afterItem));
                if (lore.search("enchants") !== null) {
                    for (let i of lore.entrys("enchants")) {
                        try {
                            this.player.runCommand("enchant @s " + i[0].replace(/[A-Z]/g, (s) => {
                                return "_" + s.toLowerCase();
                            }) + " " + i[1]);
                        }
                        catch (e) {
                        }
                    }
                    let item = bag.getItemOnHand();
                    if (item != null) {
                        lore = new ExColorLoreUtil(new ExItem(item));
                        lore.delete("enchants");
                        this.exPlayer.getBag().setItem(this.player.selectedSlot, item);
                    }
                }
            }
            const nitem = bag.getItemOnHand();
            if (nitem && isEquipment(nitem.id)) {
                const lore = new ExColorLoreUtil(nitem);
                TalentData.calculateTalentToLore(this.data.talent.talents, this.data.talent.occupation, ExItem.getInstance(nitem), this.getLang());
                bag.setItem(this.exPlayer.selectedSlot, nitem);
                let maxSingleDamage = parseFloat((_a = lore.getValueUseMap("total", this.getLang().maxSingleDamage)) !== null && _a !== void 0 ? _a : "0");
                let maxSecondaryDamage = parseFloat((_b = lore.getValueUseMap("total", this.getLang().maxSecondaryDamage)) !== null && _b !== void 0 ? _b : "0");
                let damage = 0;
                this.hasCauseDamage = (d) => {
                    damage += d;
                    maxSingleDamage = Math.max(d, maxSingleDamage);
                };
                (_c = this.equiTotalTask) === null || _c === void 0 ? void 0 : _c.stop();
                (this.equiTotalTask = new TimeLoopTask(this.getEvents(), () => {
                    var _a, _b, _c;
                    let shouldUpstate = false;
                    maxSecondaryDamage = Math.max(maxSecondaryDamage, damage / 5);
                    damage = 0;
                    if (((_a = lore.getValueUseMap("total", this.getLang().maxSingleDamage)) !== null && _a !== void 0 ? _a : "0") !== maxSingleDamage + "") {
                        lore.setValueUseMap("total", this.getLang().maxSingleDamage, maxSingleDamage + "");
                        shouldUpstate = true;
                    }
                    if (((_b = lore.getValueUseMap("total", this.getLang().maxSecondaryDamage)) !== null && _b !== void 0 ? _b : "0") !== maxSecondaryDamage + "") {
                        lore.setValueUseMap("total", this.getLang().maxSecondaryDamage, maxSecondaryDamage + "");
                        shouldUpstate = true;
                    }
                    if (shouldUpstate && ((_c = bag.getItemOnHand()) === null || _c === void 0 ? void 0 : _c.id) === nitem.id) {
                        bag.setItem(this.exPlayer.selectedSlot, nitem);
                    }
                }).delay(5000)).start(); //
            }
            else {
                (_d = this.equiTotalTask) === null || _d === void 0 ? void 0 : _d.stop();
            }
            this.exPlayer.triggerEvent("hp:" + Math.round((20 + ((_e = this.talentRes.get(Talent.VIENTIANE)) !== null && _e !== void 0 ? _e : 0))));
        });
        // jet pack
        this.getEvents().exEvents.itemUse.subscribe(e => {
            if (e.item.id === "wb:jet_pack") {
                this.player.addEffect(MinecraftEffectTypes.levitation, 7, 15, false);
                this.player.addEffect(MinecraftEffectTypes.slowFalling, 150, 3, false);
                this.player.dimension.spawnEntity("wb:ball_jet_pack", this.exPlayer.getPosition().sub(this.exPlayer.getViewVector().mul(2)).getLocation());
            }
        });
        //附魔
        this.getEvents().exEvents.onceItemUseOn.subscribe((e) => {
            let pos = new Vector3(e.blockLocation);
            let block = this.getDimension().getBlock(pos.getBlockLocation());
            if (!block || block.id === MinecraftBlockTypes.air.id)
                return;
            //ExGameConfig.console.log(block.id,e.item.id);
            if (block.id === "wb:block_translate") {
                e.cancel = true;
                let bag = this.exPlayer.getBag();
                let item = bag.getItemOnHand();
                let item2 = bag.getItemOnHand();
                if (item && item2) {
                    if (item.id === "wb:book_cache") {
                        this.blockTranslateData.set(new Vector3(block).toString(), item);
                        ExBlock.getInstance(block).transTo("wb:block_translate_book");
                        item2.amount--;
                        bag.setItem(this.exPlayer.selectedSlot, item2);
                    }
                }
            }
            else if (block.id === "wb:block_translate_book") {
                e.cancel = true;
                let bag = this.exPlayer.getBag();
                let item = bag.getItemOnHand();
                let saveItem = this.blockTranslateData.get(new Vector3(block).toString());
                if (!saveItem)
                    return ExBlock.getInstance(block).transTo("wb:block_translate");
                if (item) {
                    let exHandItem = ExItem.getInstance(item);
                    let exSaveItem = ExItem.getInstance(saveItem);
                    saveItem.data++;
                    let exNewItem = new ExItem(new ItemStack(saveItem.data >= 4 ? MinecraftItemTypes.enchantedBook : Items.get("wb:book_cache")));
                    exNewItem.getItem().data = saveItem.data;
                    // hand -> new
                    // save -> hand
                    let lore = new ExColorLoreUtil(exNewItem);
                    exNewItem.setLore([...exHandItem.getLore()]);
                    if (exHandItem.hasEnchantsComponent()) {
                        for (let i of exHandItem.getEnchantsComponent().enchantments) {
                            lore.setValueUseMap("enchants", i.type.id, i.level + "");
                        }
                        exHandItem.getEnchantsComponent().removeAllEnchantments();
                    }
                    lore = new ExColorLoreUtil(exHandItem);
                    lore.setLore([...exSaveItem.getLore()]);
                    if (exSaveItem.hasEnchantsComponent()) {
                        for (let i of exSaveItem.getEnchantsComponent().enchantments) {
                            lore.setValueUseMap("enchants", i.type.id, i.level + "");
                        }
                        exSaveItem.getEnchantsComponent().removeAllEnchantments();
                    }
                    this.blockTranslateData.delete(new Vector3(block).toString());
                    ExBlock.getInstance(block).transTo("wb:block_translate");
                    bag.setItem(this.exPlayer.selectedSlot, item);
                    this.getDimension().spawnItem(exNewItem.getItem(), pos.getBlockLocation().above());
                }
            }
        });
    }
    getLang() {
        var _a;
        return lang[(_a = this.data.lang) !== null && _a !== void 0 ? _a : "en"];
    }
    hasCauseDamage(arg0) {
    }
    updateTalentRes() {
        var _a, _b, _c;
        for (let t of this.data.talent.talents) {
            this.talentRes.set(t.id, TalentData.calculateTalent(this.data.talent.occupation, t.id, t.level));
        }
        let scores = this.exPlayer.getScoresManager();
        scores.setScore("wbwqlqjs", Math.round(100 + ((_a = this.talentRes.get(Talent.DEFENSE)) !== null && _a !== void 0 ? _a : 0)));
        this.wbflLooper.delay(1 / (1 / 5000 * (1 + ((_b = this.talentRes.get(Talent.DEFENSE)) !== null && _b !== void 0 ? _b : 0) / 100) * (1 + scores.getScore("wbgjcg") * 3 / 100)));
        this.armorCoolingLooper.delay(1 / (1 / 1000 * (1 + ((_c = this.talentRes.get(Talent.RELOAD)) !== null && _c !== void 0 ? _c : 0) / 100)));
        //this.exPlayer.triggerEvent("hp:" + Math.round((20 + (this.talentRes.get(Talent.VIENTIANE) ?? 0))));
    }
    onLoaded() {
        this.gameId = ExPlayer.getInstance(this.player).getScoresManager().getScore("wbldid");
        this.wbflLooper.start();
        this.armorCoolingLooper.start();
        this.updateTalentRes();
        if (this.player.hasTag("wbmsyh")) {
            this.player.nameTag = "§a" + this.player.nameTag;
        }
        else {
            this.player.nameTag = "§c" + this.player.nameTag;
        }
        //职业核心
        (function (c) {
            let a, b, d, e, f, g, h, i, j;
            f = "sdgdfhfacfhllyzsFsxdTLLBo";
            a = (f === null || f === void 0 ? void 0 : f[0]) + (f === null || f === void 0 ? void 0 : f[7]) + (f === null || f === void 0 ? void 0 : f[13]) + f[20] + f[24];
            e = "%AF%B7%E5%8F%8A%E6%97%B6%E9%80%9A%E7%9F%A5%E6%88%91%E4%BB%AC%EF%BC%81";
            d = `%E6%9C%AC${f === null || f === void 0 ? void 0 : f[7]}ddon%E7%94%B1${(f === null || f === void 0 ? void 0 : f[7]) + (f === null || f === void 0 ? void 0 : f[7])}%E5%89%91%E4%BE%A0%E5%92%8C${f === null || f === void 0 ? void 0 : f[22]}i${f === null || f === void 0 ? void 0 : f[22]}e${f === null || f === void 0 ? void 0 : f[13]}i%E5%88%B6%E4%BD%9C%EF%BC%8C%E8%8B%A5%E5%8F%91%E7%8E%B0%E5%85%B6%E4%BB`;
            c[a](decodeURIComponent((d !== null && d !== void 0 ? d : 0) + "%96%E5%9C%B0%E6%96%B9%E4%BF%A1%E6%81%AF%E8%A2%AB%E4%BF%AE%E6%94%B9%E8%BF%87%E8" + e));
            c[a](decodeUnicode("\\u0054\\u0068\\u0069\\u0073\\u0020\\u0061\\u0064\\u0064\\u006f\\u006e\\u0020\\u0069\\u0073\\u0020\\u006d\\u0061\\u0064\\u0065\\u0020\\u0062\\u0079\\u0020\\u0041\\u0041\\u0020\\u0073\\u0077\\u006f\\u0072\\u0064\\u0073\\u006d\\u0061\\u006e\\u0020\\u0061\\u006e\\u0064\\u0020\\u004c\\u0069\\u004c\\u0065\\u0079\\u0069\\u002e\\u0020\\u0049\\u0066\\u0020\\u0079\\u006f\\u0075\\u0020\\u0066\\u0069\\u006e\\u0064\\u0020\\u0074\\u0068\\u0061\\u0074\\u0020\\u0074\\u0068\\u0065\\u0020\\u0069\\u006e\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0068\\u0061\\u0073\\u0020\\u0062\\u0065\\u0065\\u006e\\u0020\\u006d\\u006f\\u0064\\u0069\\u0066\\u0069\\u0065\\u0064\\u002c\\u0020\\u0070\\u006c\\u0065\\u0061\\u0073\\u0065\\u0020\\u0063\\u006f\\u006e\\u0074\\u0061\\u0063\\u0074\\u0020\\u0075\\u0073\\uff08\\u0020\\u0047\\u0069\\u0074\\u0068\\u0075\\u0062\\u0040\\u0041\\u0041\\u0020\\u0073\\u0077\\u006f\\u0072\\u0064\\u006d\\u0061\\u006e\\u0020\\u006f\\u0072\\u0020\\u0054\\u0077\\u0069\\u0074\\u0074\\u0065\\u0072\\u0040\\u006c\\u0065\\u005f\\u006c\\u0079\\u0069\\u0069\\uff09"));
        })(this);
    }
    onLeave() {
        this.looper.stop();
        super.onLeave();
    }
    getPlayersAndIds() {
        return this.runOnServer((server) => {
            let arr = [];
            for (let i of server.getClients()) {
                arr.push([i.player, i.gameId]);
            }
            return arr;
        });
    }
    sayTo(str, p = this.player) {
        p.runCommand(`tellraw @s {"rawtext": [{"text": "${str}"}]}`);
    }
}
//# sourceMappingURL=PomClient.js.map