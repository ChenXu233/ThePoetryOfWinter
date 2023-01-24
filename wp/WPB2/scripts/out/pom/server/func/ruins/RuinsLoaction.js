var _a;
import Vector3 from "../../../../modules/exmc/math/Vector3.js";
import { ExBlockArea } from '../../../../modules/exmc/server/block/ExBlockArea.js';
export default class RuinsLoaction {
}
_a = RuinsLoaction;
RuinsLoaction.DESERT_RUIN_NUM = 0;
RuinsLoaction.DESERT_RUIN_LOCATION_START = new Vector3(16384, 64, 16384);
RuinsLoaction.DESERT_RUIN_LOCATION_SIZE = new Vector3(512, 191, 512);
RuinsLoaction.DESERT_RUIN_LOCATION_END = _a.DESERT_RUIN_LOCATION_START.clone().add(_a.DESERT_RUIN_LOCATION_SIZE);
RuinsLoaction.DESERT_RUIN_LOCATION_CENTER = _a.DESERT_RUIN_LOCATION_START.clone().add(_a.DESERT_RUIN_LOCATION_SIZE.x / 2, 0, _a.DESERT_RUIN_LOCATION_SIZE.z / 2);
RuinsLoaction.DESERT_RUIN_AREA = new ExBlockArea(_a.DESERT_RUIN_LOCATION_START, _a.DESERT_RUIN_LOCATION_SIZE);
RuinsLoaction.DESERT_RUIN_PROTECT_AREA = new ExBlockArea(_a.DESERT_RUIN_LOCATION_START.clone().sub(_a.DESERT_RUIN_LOCATION_SIZE), _a.DESERT_RUIN_LOCATION_END.clone().add(_a.DESERT_RUIN_LOCATION_SIZE));
RuinsLoaction.STONE_RUIN_NUM = 1;
RuinsLoaction.STONE_RUIN_LOCATION_START = new Vector3(15360, 64, 15360);
RuinsLoaction.STONE_RUIN_LOCATION_SIZE = new Vector3(128, 128, 128);
RuinsLoaction.STONE_RUIN_LOCATION_END = _a.STONE_RUIN_LOCATION_START.clone().add(_a.STONE_RUIN_LOCATION_SIZE);
RuinsLoaction.STONE_RUIN_LOCATION_CENTER = _a.STONE_RUIN_LOCATION_START.clone().add(_a.STONE_RUIN_LOCATION_SIZE.x / 2, 0, _a.STONE_RUIN_LOCATION_SIZE.z / 2);
RuinsLoaction.STONE_RUIN_AREA = new ExBlockArea(_a.STONE_RUIN_LOCATION_START, _a.STONE_RUIN_LOCATION_SIZE);
RuinsLoaction.STONE_RUIN_PROTECT_AREA = new ExBlockArea(_a.STONE_RUIN_LOCATION_START.clone().sub(_a.STONE_RUIN_LOCATION_SIZE), _a.STONE_RUIN_LOCATION_END.clone().add(_a.STONE_RUIN_LOCATION_SIZE));
RuinsLoaction.CAVE_RUIN_NUM = 2;
RuinsLoaction.CAVE_RUIN_LOCATION_START = new Vector3(17408, 64, 17408);
RuinsLoaction.CAVE_RUIN_LOCATION_SIZE = new Vector3(128, 128, 128);
RuinsLoaction.CAVE_RUIN_LOCATION_END = _a.CAVE_RUIN_LOCATION_START.clone().add(_a.CAVE_RUIN_LOCATION_SIZE);
RuinsLoaction.CAVE_RUIN_LOCATION_CENTER = _a.CAVE_RUIN_LOCATION_START.clone().add(_a.CAVE_RUIN_LOCATION_SIZE.x / 2, 0, _a.CAVE_RUIN_LOCATION_SIZE.z / 2);
RuinsLoaction.CAVE_RUIN_AREA = new ExBlockArea(_a.CAVE_RUIN_LOCATION_START, _a.CAVE_RUIN_LOCATION_SIZE);
RuinsLoaction.CAVE_RUIN_PROTECT_AREA = new ExBlockArea(_a.CAVE_RUIN_LOCATION_START.clone().sub(_a.CAVE_RUIN_LOCATION_SIZE), _a.CAVE_RUIN_LOCATION_END.clone().add(_a.CAVE_RUIN_LOCATION_SIZE));
//# sourceMappingURL=RuinsLoaction.js.map