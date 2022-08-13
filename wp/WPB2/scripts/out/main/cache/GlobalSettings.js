import GlobalScoreBoardCache from "../../modules/exmc/storage/cache/GlobalScoreBoardCache.js";
export default class GlobalSettings extends GlobalScoreBoardCache {
    get playerCanTp() {
        return this.getBoolean("playerCanTp");
    }
    set playerCanTp(value) {
        this.setBoolean("playerCanTp", value);
    }
    get tpNeedItem() {
        return this.getBoolean("tpNeedItem");
    }
    set tpNeedItem(value) {
        this.setBoolean("tpNeedItem", value);
    }
    get gameOpList() {
        return this.getList("gameOpList");
    }
    set gameOpList(value) {
        this.setList("gameOpList", value);
    }
    get entityCleaner() {
        return this.getBoolean("entityCleaner");
    }
    set entityCleaner(value) {
        this.setBoolean("entityCleaner", value);
    }
    get deathRecord() {
        return this.getBoolean("deathRecord");
    }
    set deathRecord(value) {
        this.setBoolean("deathRecord", value);
    }
    get tpPointRecord() {
        return this.getBoolean("tpPointRecord");
    }
    set tpPointRecord(value) {
        this.setBoolean("tpPointRecord", value);
    }
    get entityCleanerLeastNum() {
        var _a;
        return (_a = this.getNumber("entityCleanerLeastNum")) !== null && _a !== void 0 ? _a : 350;
    }
    set entityCleanerLeastNum(value) {
        this.setNumber("entityCleanerLeastNum", value);
    }
}
//# sourceMappingURL=GlobalSettings.js.map