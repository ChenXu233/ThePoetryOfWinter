import ExGameConfig from "../modules/exmc/ExGameConfig.js";
import ExGameServer from "../modules/exmc/ExGameServer.js";
import PomClient from "./PomClient.js";
import { MinecraftDimensionTypes, MinecraftEntityTypes } from 'mojang-minecraft';
import GlobalSettings from './cache/GlobalSettings.js';
import { Objective } from "../modules/exmc/entity/ExScoresManager.js";
import TimeLoopTask from "../modules/exmc/utils/TimeLoopTask.js";
export default class PomServer extends ExGameServer {
    constructor() {
        super();
        this.tps = 20;
        this._mtps = 20;
        this.setting = new GlobalSettings(new Objective("wpsetting"));
        (this.clearEntityNumUpdate = new TimeLoopTask(this.getEvents(), () => {
            this.updateClearEntityNum();
        }).delay(10000)).start();
        this.updateClearEntityNum();
        this.entityCleaner = new TimeLoopTask(this.getEvents(), () => {
            let entities = Array.from(this.getDimension(MinecraftDimensionTypes.overworld).getEntities())
                .concat(Array.from(this.getDimension(MinecraftDimensionTypes.theEnd).getEntities()))
                .concat(Array.from(this.getDimension(MinecraftDimensionTypes.nether).getEntities()));
            //ExGameConfig.console.log("当前实体数：" + entities.length);
            let map = new Map();
            entities.forEach(e => {
                var _a;
                if ((e === null || e === void 0 ? void 0 : e.id) == undefined)
                    return;
                map.set(e.id, ((_a = map.get(e.id)) !== null && _a !== void 0 ? _a : 0) + 1);
            });
            let max = [0, ""];
            map.forEach((v, k) => {
                if (v > max[0] && [MinecraftEntityTypes.player.id, MinecraftEntityTypes.villager.id, MinecraftEntityTypes.villagerV2.id].indexOf(k) === -1) {
                    max[0] = v;
                    max[1] = k;
                }
            });
            ExGameConfig.console.log("最多实体数：" + max[0]);
            ExGameConfig.console.log("最多实体数：" + max[1]);
            if (entities.length > this.entityCleanerLeastNum) {
                entities.forEach(e => {
                    if (!e || !e.id)
                        return;
                    if (e.id === "minecraft:item" && e.viewVector.y !== 0)
                        return;
                    if (e.id === max[1] && !e.nameTag)
                        e.kill();
                });
            }
        }).delay(8000);
        this.upDateEntityCleaner();
        let ticks = 0;
        this.tpsListener = new TimeLoopTask(this.getEvents(), () => {
            this.tps = ticks;
            let liner = (this.tps - this._mtps) > 0 ? this.entityCleanerStrength : 11 - this.entityCleanerStrength;
            this._mtps = this._mtps * (liner - 1) / liner + this.tps / liner;
            //ExGameConfig.console.log("tps：" + this.tps, "myps : " + this._mtps,"delay:"+this.entityCleanerDelay ** (this._mtps));
            this.entityCleaner.delay(this.entityCleanerDelay ** (this._mtps));
            ticks = 0;
        }).delay(1000);
        this.getEvents().events.tick.subscribe(e => {
            ticks++;
        });
        this.tpsListener.start();
    }
    updateClearEntityNum() {
        this.entityCleanerStrength = this.setting.entityCleanerStrength;
        this.entityCleanerLeastNum = this.setting.entityCleanerLeastNum;
        this.entityCleanerDelay = (60 - this.setting.entityCleanerDelay) / 100 + 1.8;
    }
    upDateEntityCleaner() {
        if (this.setting.entityCleaner) {
            this.entityCleaner.start();
        }
        else {
            this.entityCleaner.stop();
        }
    }
    newClient(id, player) {
        return new PomClient(this, id, player);
    }
}
//# sourceMappingURL=PomServer.js.map