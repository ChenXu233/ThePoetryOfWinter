var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ExGameConfig from "../../modules/exmc/ExGameConfig.js";
import ExPlayer from '../../modules/exmc/entity/ExPlayer.js';
import MenuUIAlert from '../ui/MenuUIAlert.js';
import ExMessageAlert from "../../modules/exmc/ui/ExMessageAlert.js";
import TalentData, { Occupation, Talent } from "../cache/TalentData.js";
import { ModalFormData } from "mojang-minecraft-ui";
import ExErrorStack from "../../modules/exmc/ExErrorStack.js";
import Vector3 from '../../modules/exmc/utils/Vector3.js';
export default {
    "main": {
        "img": "textures/items/wet_paper",
        "text": "主页",
        "default": "notice",
        "page": {
            "notice": {
                "text": "公告",
                "page": [
                    {
                        "type": "img_adjustToScreen",
                        "msg": "textures/ui/title.png"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "稳定版更新啦！本次更新2个活动，快去看看吧！"
                    }
                ]
            },
            "activity": {
                "text": "活动",
                "page": (client, ui) => [
                    {
                        "type": "text_title",
                        "msg": "宣传赢好礼"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "本作品是耗时三年制作的大型模组，但奈何并无人气，我们决定举办本活动"
                    },
                    {
                        "type": "img_adjustToScreen",
                        "msg": "textures/ui/active_action.png"
                    },
                ].concat(MenuUIAlert.getLabelViews(`
1.活动时间: 2022年8月13日一2022年8月31日23点59分。
2.活动稿件必须是首次投递的原创作品，且符合创作投稿规范，禁止低创、搬运、抄袭、旧稿重投等。同一篇作品不能由多人提交，重复参加，且活动稿件需要在2022年9月20日前保持开放浏览。
3.瓜分奖金将于活动结束结果公示后20个工作日内发放完毕。
4.禁止一切违规刷票、刷赞、刷人气等作弊行为，一经发现将取消作品参赛资格。

带话题#冬之纪行诗在 bilibili 投稿
1、所有投稿中抽取十位送出大会员(可折现25)
2、单稿件播放达1w瓜分1k现金奖励
3、活动截止后按播放量额外发放奖励:
单稿件播放量排名│奖励
1│200￥
2│100￥
3│50￥

`.split("\n"))).concat([
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text_title",
                        "msg": "征稿活动："
                    }
                ]).concat(MenuUIAlert.getLabelViews(`
主题：永冬塔
大小限制：64xnx64
联系作者或b站发视频并at剑侠（id自己去b站搜）或@Sonality进行投稿
有机会被加入Add中哦~
`.split("\n")))
            },
            "version": {
                "text": "版本",
                "page": (client, ui) => {
                    return [
                        {
                            "type": "text_title",
                            "msg": "版本信息"
                        },
                        {
                            "type": "text",
                            "msg": "当前Addon版本: "
                        },
                        {
                            "type": "text",
                            "msg": ExGameConfig.addonVersion
                        },
                        {
                            "type": "text",
                            "msg": "补丁包信息请到以下链接查看："
                        },
                        {
                            "type": "text",
                            "msg": "https://aaswordman.github.io/ThePoetryOfWinter/"
                        },
                        {
                            "type": "padding"
                        },
                        {
                            "type": "text_title",
                            "msg": "版本须知"
                        },
                        {
                            "type": "padding"
                        },
                        {
                            "type": "text",
                            "msg": "冬诗可能存在卡顿现象，因此我们建议您先输入/tag @s add owner，再前往菜单设置中，打开实体清理选项。如果您担心重要实体被清，请不要开启。"
                        },
                        {
                            "type": "padding"
                        },
                        {
                            "type": "text_title",
                            "msg": "致谢名单"
                        },
                        {
                            "type": "padding"
                        }
                    ].concat(MenuUIAlert.getLabelViews(`
名字排序为随机排序

主要制作者   - LiLeyi   AAswordsman
提供部分内容与技术支持   -  
EnderghostScale     haveyouwantto
huo鱼一只            AR_UnryAllenCN
世心                 論娘
荷叶                 Q儿
SpiffyTerror         悸动天使
画盒豆腐             兔块子
传说中阿库西斯教教徒   枫雪白霜
碧月狐DADA            Fulank彡North cat
一只朴实无华的蒜头王八  KirisamePPSH
Lone114514            Mr.龙灵
Hanyi寒翼             鸥吃鱼
某不知名的琦玉        Him1025(kALE)
WINDes

感谢支持团队
竹翼团队      无上蓝痕工作室

感谢宣传者
BunBun不是笨笨    在矿里的小金呀
`.split("\n")));
                }
            },
            "imp": {
                "text": "最终用户许可协议",
                "page": (client, ui) => {
                    return MenuUIAlert.getLabelViews(`
冬之纪行诗最终用户许可协议

一、为保护玩家乐趣、利益及维护开发者利益，我们需要这些最终用户许可条款为冬之纪行诗Add-Ons(以下简称本作品)的下载和使用制定一些规则。本许可是您与本作品的开发者(包括但不限于剑侠、LiLeyi及其他未列出或将来加入开发的人员，以下简称我们)之间达成的协议，描述使用游戏的条款和条件，这些条款应在中国法律所允许的范围内最大程度地适用。
二、由于网络服务的特殊性，您同意本协议以电子协议形式签订。您一旦以任何形式表明同意，即视为您同意并已经接受本协议的全部条款；
三、本协议的订立、履行、解释及争议的解决均适用中华人民共和国法律并排除其他一切冲突法的适用。如您就本协议内容或其执行有任何疑问，请与我们联系。您因使用我们服务所产生的及与本协议相关的争议，应由我们与您友好协商解决；如协商不成，任何一方均可向合同签订地有管辖权的人民法院提起诉讼。

您知晓并同意：
一、知识产权
1.本作品是基于游戏"MineCraft"创作的 免费 内容拓展模组，在未取得我们允许的情况下，您不得将本作品用于商业用途/盈利。

2.阅览本作品的代码以学习交流是允许的，但在未取得我们允许的情况下，您不得以任何方式窃取本作品中的代码、美术、音乐、文档等内容后将其复制、分发、发行、出租、展览、表演、广播、修改、改编、销售、运营、转许可、通过信息网络传播。

3.您可以就本作品向我们提出有关建议，但这并不意味着您的建议会被采纳，我们可以通过所需的任何方式使用或不使用您的建议，且不必向您支付报酬。如果您认为我们应为您的建议支付报酬，请提前说明该要求，在我们以书面形式答复后再提交该建议，否则您提交该建议造成的损失将由您个人承担。

二、我们的权利和义务
1.下载的提供
1).您可以直接从MCPEDL及我们所授权的其他网站/平台/渠道获取本作品
2).如果您从未经我们授权的第三方获取本作品或与本作品名称相同的内容，我们无法保证该软件能够正常使用，并对因此给您造成的损失不予负责。
3).我们会不断丰富本作品的内容、终端、形式等。当您使用本服务时，您应选择与您的终端、系统等相匹配的作品/游戏版本，否则，您可能无法正常使用本作品；我们可能会在本作品的完成之前发布测试版本，因此它可能包含BUG，这是无法避免的。
2.作品的更新
1).为了增进玩家体验、完善作品内容，我们  可能  不断努力开发新的服务，并为您不时提供作品更新。
2).为了改善用户体验或提高服务安全性、保证功能的一致性等目的，我们有权对本作品进行更新，或者对作品的部分功能效果、服务内容进行改变。

三、其他
1.当暴露在特定光影图案或闪光光亮下时，有极小部分人群会引发癫痫。这种情形可能是由于某些未查出的癫痫症状引起，即使该人员没有患癫痫病史也有可能造成此类病症。如果您的家人或任意家庭成员有过类似症状，请在请在进行游戏前咨询您的医生或医师。如果您在游戏过程中出现任何症状，包括头晕、目眩、眼部或肌肉抽搐、失去意识、失去方向感、抽搐或出现任何自己无法控制的动作，请立刻停止游戏并在继续游戏前咨询您的医生或医师，否则所造成的一切后果由您自己承担。
2.您在游戏MineCraft中的存档可能会由于装载本作品的更新而损坏，在更新前请自行备份您的存档，否则所造成的一切后果由您自己承担。
3. 本协议内容同时包括本协议附件中的协议或规则，我们可能不断发布的关于本服务的其他相关协议、规则等内容。上述内容一经正式发布，即为本协议不可分割的组成部分，您同样应当遵守。

您理解并同意，英文版为机器翻译内容，若本协议有中文、英文等多个语言版本，相应内容不一致的，均以中文版的内容为准。

1、 In order to protect the fun and interests of players and the interests of developers, we need these end-user license terms to formulate some rules for the download and use of winter chronicles add ons (hereinafter referred to as this work). This license is an agreement between you and the developers of this work (including but not limited to AA swordsman, LiLeyi and other people not listed or who will join the development in the future, hereinafter referred to as US). It describes the terms and conditions of using the game. These terms shall be applied to the maximum extent permitted by Chinese laws.
2、 Due to the particularity of network services, you agree that this agreement is signed in the form of electronic agreement. Once you express your consent in any form, it shall be deemed that you agree and have accepted all the terms of this Agreement;
3、 The conclusion, performance, interpretation and dispute settlement of this Agreement shall be governed by the laws of the people's Republic of China, excluding the application of other conflict laws. If you have any questions about the contents of this agreement or its implementation, please contact us. Any dispute arising from your use of our services and related to this Agreement shall be settled through friendly negotiation between us and you; If the negotiation fails, either party may bring a lawsuit to the people's court with jurisdiction at the place where the contract is signed.
You understand and agree that:
1、 Intellectual property
1. This work is a free content expansion module created based on the game "minecraft". You may not use this work for commercial purposes / profits without our permission.
2. It is allowed to read the code of this work to learn and communicate, but without our permission, you shall not steal the code, art, music, documents and other contents of this work in any way, and then copy, distribute, distribute, rent, exhibit, perform, broadcast, modify, adapt, sell, operate, sublicense, and disseminate them through the information network.
3. You can make suggestions to us about this work, but this does not mean that your suggestions will be adopted. We can use or not use your suggestions in any way we need, and do not need to pay you any remuneration. If you think that we should pay for your proposal, please explain this requirement in advance and submit the proposal after we reply in writing. Otherwise, you will bear the losses caused by submitting the proposal.
2、 Our rights and obligations
1. Provision of download
1) . you can directly obtain this work from mcpedl and other websites / platforms / channels authorized by us
2). If you have never obtained this work or the content with the same name as this work from a third party authorized by us, we cannot guarantee the normal use of this software and will not be responsible for the losses caused to you.
3). We will constantly enrich the content, terminal and form of this work. When you use this service, you should select a work / game version that matches your terminal, system, etc., otherwise, you may not be able to use this work normally; We may release the test version before the completion of this work, so it may contain bugs, which is unavoidable.
2. Update of works
1). In order to improve the player's experience and improve the content of the work, we may constantly strive to develop new services and provide you with work updates from time to time.
2). In order to improve the user experience, improve the service security and ensure the consistency of functions, we have the right to update the work, or change some of the functional effects and service contents of the work.
3、 Other
1. When exposed to specific light and shadow patterns or flash light, a small part of the population will cause epilepsy. This situation may be caused by some undetected epileptic symptoms. Even if the person has no history of epilepsy, it may cause such symptoms. If your family or any family member has similar symptoms, please consult your doctor or physician before playing the game. If you have any symptoms during the game, including dizziness, dizziness, eye or muscle convulsions, loss of consciousness, loss of direction, convulsions, or any movement beyond your control, please stop the game immediately and consult your doctor or physician before continuing the game. Otherwise, you will bear all the consequences.
2. Your archives in the game minecraft may be damaged due to loading the updates of this work. Please back up your archives before updating, otherwise you will bear all the consequences.
3. The contents of this agreement also include the agreements or rules in the annexes to this agreement, and other relevant agreements and rules on this service that we may continuously publish. Once the above contents are officially released, they shall be an integral part of this agreement, and you shall also abide by them.
`.split("\n"));
                }
            },
            "QA": {
                "text": "Q & A",
                "page": [
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text_title",
                        "msg": "为什么无法召唤BOSS"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "现在部分boss有专属的召唤者方块了。在他们的群系中，概率生成BOSS建筑，建筑内有召唤者方块。使用 钥匙 类物品点击即可召唤boss。对于未激活的召唤者方块，使用特定物品可以再次激活。如果找不到特定建筑，说明脸黑。请在特定的群系找。"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text_title",
                        "msg": "为什么那么卡"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "卡顿多半是因为实体过多导致的。请尝试在 管理 界面（只有带有owner tag的玩家才能进入）打开实体清理功能，并调整最低保留实体数。建议350，配置好就往上调，配置差就往下调。"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text_title",
                        "msg": "如何升级、天赋点数怎么获得"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "可以通过升级台挂机，以及在线时间来升级。升级可获得点数。"
                    }
                ]
            }
        }
    },
    "person": {
        "img": "textures/items/amethyst_chestplate.png",
        "text": "个人",
        "default": "info",
        "page": {
            "info": {
                "text": "信息",
                "page": (client, ui) => {
                    let source = client.player;
                    let scores = ExPlayer.getInstance(source).getScoresManager();
                    let msg = [`玩家ID: ${client.gameId}`,
                        `玩家等级: ${scores.getScore("wbdj")}`,
                        `当前法力值: ${scores.getScore("wbfl")}`,
                        `武器技能冷却: ${scores.getScore("wbwqlq")}`,
                        `盔甲技能冷却: ${scores.getScore("wbkjlqcg")}`,
                        `友好模式是否开启: ${source.hasTag("wbmsyh") ? "是" : "否"}`,
                        `等级效果是否启用: ${source.hasTag("wbdjeff") ? "是" : "否"}`];
                    return MenuUIAlert.getLabelViews(msg);
                }
            },
            "add": {
                "text": "加成",
                "page": [
                    {
                        "type": "text_title",
                        "msg": "等级效果"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "到达一定等级可以获得药水增益"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "toggle",
                        "msg": "等级效果 开",
                        "state": (client, ui) => client.player.hasTag("wbdjeff"),
                        "function": (client, ui) => {
                            if (!client.player.hasTag("wbdjeff")) {
                                client.player.addTag("wbdjeff");
                            }
                            else {
                                client.player.removeTag("wbdjeff");
                            }
                            return true;
                        }
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text_title",
                        "msg": "粒子效果"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "可以通过合成相应的药水来获得粒子，用腻了再来这里取消"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "button",
                        "msg": "去除火焰",
                        "function": (client, ui) => {
                            client.player.removeTag("pflame");
                            return true;
                        }
                    },
                    {
                        "type": "button",
                        "msg": "去除光环",
                        "function": (client, ui) => {
                            client.player.removeTag("phalo");
                            return true;
                        }
                    },
                    {
                        "type": "button",
                        "msg": "去除符文",
                        "function": (client, ui) => {
                            client.player.removeTag("prune");
                            return true;
                        }
                    },
                    {
                        "type": "button",
                        "msg": "去除爱心",
                        "function": (client, ui) => {
                            client.player.removeTag("plove");
                            return true;
                        }
                    }
                ]
            },
            "talent": {
                "text": "天赋",
                "page": (client, ui) => {
                    var _a;
                    let arr;
                    if (TalentData.hasOccupation(client.data.talent)) {
                        const point = (client.exPlayer.getScoresManager().getScore("wbdjcg") * 2 - ((_a = client.data.talent.pointUsed) !== null && _a !== void 0 ? _a : 0));
                        arr = [
                            {
                                "type": "text",
                                "msg": "剩余可使用点数 ： " + point
                            }
                        ];
                        for (let i of client.data.talent.talents) {
                            arr.push({
                                "type": point > 0 && i.level < 40 ? "textAndAddButton" : "textAndNoButton",
                                "msg": Talent.getCharacter(i.id) + ":" + i.level + "\n" + (function () {
                                    let useChr = "";
                                    let a = Math.floor(i.level / 4);
                                    let b = i.level % 4;
                                    let c = 10 - a - 1;
                                    let s = "";
                                    while (a > 0) {
                                        s += useChr[0];
                                        a--;
                                    }
                                    s += useChr[4 - b];
                                    while (c > 0) {
                                        s += useChr[4];
                                        c--;
                                    }
                                    return s;
                                })(),
                                "function": () => {
                                    var _a;
                                    if (point > 0 && i.level < 40) {
                                        i.level++;
                                        client.data.talent.pointUsed = 1 + ((_a = client.data.talent.pointUsed) !== null && _a !== void 0 ? _a : 0);
                                        client.data.talent.talents.splice(client.data.talent.talents.findIndex(t => t.id === i.id), 1);
                                        client.data.talent.talents.unshift(i);
                                        client.updateTalentRes();
                                    }
                                    return true;
                                }
                            }, {
                                "type": "text",
                                "msg": TalentData.getDescription(client.data.talent, i.id, i.level)
                            }, {
                                "type": "padding"
                            });
                        }
                    }
                    else {
                        arr = [
                            {
                                "type": "text_title",
                                "msg": "选择你的职业"
                            },
                            {
                                "type": "padding",
                            }
                        ];
                        for (const i of Occupation.keys) {
                            arr.push({
                                "type": "button",
                                "msg": i.character,
                                "function": (client, ui) => {
                                    TalentData.chooseOccupation(client.data.talent, i);
                                    return true;
                                }
                            });
                        }
                    }
                    return arr;
                }
            },
            "deathback": {
                "text": "传送点",
                "page": (client, ui) => {
                    if (client.data.pointRecord == undefined)
                        client.data.pointRecord = {
                            deathPoint: [],
                            point: []
                        };
                    let arr = [
                        {
                            "type": "text_title",
                            "msg": "传送点记录"
                        },
                        {
                            "type": "padding"
                        }
                    ];
                    if (client.globalSettings.tpPointRecord) {
                        for (let j = 0; j < client.data.pointRecord.point.length; j++) {
                            const i = client.data.pointRecord.point[j];
                            const v = new Vector3(i[2]);
                            arr.push({
                                "type": "text",
                                "msg": "传送点：" + (i[0] + v.toString())
                            }, {
                                "type": "button",
                                "msg": "前往点：" + (i[1] == "" ? (i[0] + v.toString()) : i[1]),
                                "function": (client, ui) => {
                                    let bag = client.exPlayer.getBag();
                                    if (!bag.hasItem("wb:conveyor_issue") && client.globalSettings.tpNeedItem) {
                                        client.sayTo("§b背包无传送石，传送失败");
                                        return false;
                                    }
                                    if (client.globalSettings.tpNeedItem) {
                                        let pos = (bag.searchItem("wb:conveyor_issue"));
                                        let item = bag.getItem(pos);
                                        item.amount--;
                                        bag.setItem(pos, item);
                                    }
                                    client.exPlayer.setPosition(v, client.getDimension(i[0]));
                                    client.sayTo("§b传送成功");
                                    return false;
                                }
                            }, {
                                "type": "button",
                                "msg": "备注点：" + (i[1] == "" ? (i[0] + v.toString()) : i[1]),
                                "function": (client, ui) => {
                                    new ModalFormData().textField("输入备注", (i[0] + v.toString()))
                                        .show(client.player)
                                        .then(e => {
                                        if (e.isCanceled)
                                            return;
                                        i[1] = e.formValues[0];
                                    }).catch(e => {
                                        ExErrorStack.throwError(e);
                                    });
                                    return false;
                                }
                            }, {
                                "type": "button",
                                "msg": "删除点：" + (i[1] == "" ? (i[0] + v.toString()) : i[1]),
                                "function": (client, ui) => {
                                    client.data.pointRecord.point.splice(j, 1);
                                    return true;
                                }
                            }, {
                                "type": "padding"
                            });
                        }
                        arr.push({
                            "msg": "记录当前点" + client.exPlayer.getPosition().floor().toString(),
                            "type": "button",
                            "function": (client, ui) => {
                                client.data.pointRecord.point.push([client.exPlayer.getDimension().id, "", client.exPlayer.getPosition().floor()]);
                                return true;
                            }
                        });
                    }
                    else {
                        arr.push({
                            "type": "text",
                            "msg": "禁止记录传送点"
                        });
                    }
                    // if (client.globalSettings.deathRecord) {
                    // 	for (let j = 0; j < client.data.pointRecord.deathPoint.length; j++) {
                    // 		let i = client.data.pointRecord.deathPoint[j];
                    // 		let v = new Vector3(i[1]);
                    // 		arr.push(
                    // 			{
                    // 				"type": "text",
                    // 				"msg": "死亡点：" + v.toString()
                    // 			},
                    // 			{
                    // 				"type": "button",
                    // 				"msg": "前往点" + v.toString()
                    // 			},
                    // 			{
                    // 				"type": "padding"
                    // 			}
                    // 		);
                    // 	}
                    // } else {
                    // 	arr.push(
                    // 		{
                    // 			"type": "text",
                    // 			"msg": "禁止死亡回溯"
                    // 		}
                    // 	)
                    // }
                    return arr;
                }
            }
        }
    },
    "social": {
        "img": "textures/items/gingerbread_totem.png",
        "text": "交往",
        "default": "setting",
        "page": {
            "setting": {
                "text": "交往设置",
                "page": [
                    {
                        "type": "text_title",
                        "msg": "敌对模式"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "text",
                        "msg": "在敌对模式下，你可以攻击任何玩家，名字显示为红色；在友好模式下你无法攻击处于友好模式的玩家，名字显示为绿色。"
                    },
                    {
                        "type": "text",
                        "msg": "即：如果一个玩家名字是绿色，那么他是无威胁的；如果他开了红，那么他可能有攻击倾向。"
                    },
                    {
                        "type": "padding"
                    },
                    {
                        "type": "button",
                        "msg": "友好模式",
                        "function": (client, ui) => {
                            client.player.addTag("wbmsyh");
                            if (client.player.nameTag.startsWith("§")) {
                                client.player.nameTag = client.player.nameTag.substring(2);
                            }
                            client.player.nameTag = "§a" + client.player.nameTag;
                            return true;
                        }
                    },
                    {
                        "type": "button",
                        "msg": "敌对模式",
                        "function": (client, ui) => {
                            client.player.removeTag("wbmsyh");
                            if (client.player.nameTag.startsWith("§")) {
                                client.player.nameTag = client.player.nameTag.substring(2);
                            }
                            client.player.nameTag = "§c" + client.player.nameTag;
                            return true;
                        }
                    }
                ]
            },
            "tp": {
                "text": "传送",
                "page": (client, ui) => __awaiter(void 0, void 0, void 0, function* () {
                    var _a;
                    if (!client.globalSettings.playerCanTp) {
                        return [{
                                "type": "text",
                                "msg": "不允许使用传送"
                            }];
                    }
                    ;
                    let arr = [];
                    arr.push({
                        "msg": "传送至",
                        "type": "text_title"
                    });
                    arr.push({
                        "type": "padding"
                    });
                    let players = (_a = yield client.getPlayersAndIds()) !== null && _a !== void 0 ? _a : [];
                    for (const i of players) {
                        const p = ExPlayer.getInstance(i[0]);
                        arr.push({
                            "type": "button",
                            "msg": `${p.nameTag} pos:${p.getPosition().floor()}`,
                            "function": (client, ui) => {
                                let bag = client.exPlayer.getBag();
                                if (!bag.hasItem("wb:conveyor_issue") && client.globalSettings.tpNeedItem) {
                                    client.sayTo("§b背包无传送石，传送失败");
                                    return false;
                                }
                                if (client.globalSettings.tpNeedItem) {
                                    let pos = (bag.searchItem("wb:conveyor_issue"));
                                    let item = bag.getItem(pos);
                                    item.amount--;
                                    bag.setItem(pos, item);
                                }
                                client.sayTo("§b你向对方发起了请求");
                                new ExMessageAlert().title("传送请求").body(`玩家 ${client.player.nameTag} §r想要传送到你的位置，是否接受？`)
                                    .button1("是", () => {
                                    client.sayTo("§b传送成功");
                                    client.sayTo("§b传送成功", i[0]);
                                    client.exPlayer.setPosition(p.getPosition(), p.getDimension());
                                })
                                    .button2("否", () => {
                                    client.sayTo("§b对方拒绝了你的请求");
                                    client.sayTo("§b你拒绝了对方的请求", i[0]);
                                })
                                    .show(i[0]);
                                return false;
                            }
                        });
                    }
                    arr.push({
                        "msg": "邀请传送到你的位置",
                        "type": "text_title"
                    });
                    arr.push({
                        "type": "padding"
                    });
                    for (const i of players) {
                        const p = ExPlayer.getInstance(i[0]);
                        arr.push({
                            "type": "button",
                            "msg": `${p.nameTag} (pos:${p.getPosition().floor()})`,
                            "function": (client, ui) => {
                                let bag = client.exPlayer.getBag();
                                if (!bag.hasItem("wb:conveyor_issue") && client.globalSettings.tpNeedItem) {
                                    client.sayTo("§b背包无传送石，传送失败");
                                    return false;
                                }
                                if (client.globalSettings.tpNeedItem) {
                                    let pos = (bag.searchItem("wb:conveyor_issue"));
                                    let item = bag.getItem(pos);
                                    item.amount--;
                                    bag.setItem(pos, item);
                                }
                                client.sayTo("§b你向对方发起了邀请");
                                new ExMessageAlert().title("传送请求").body(`玩家 ${client.player.nameTag} §r邀请你传送到 pos:${client.exPlayer.getPosition().floor()} ，是否接受？`)
                                    .button1("是", () => {
                                    client.sayTo("§b传送成功");
                                    client.sayTo("§b传送成功", i[0]);
                                    p.setPosition(client.exPlayer.getPosition(), client.exPlayer.getDimension());
                                })
                                    .button2("否", () => {
                                    client.sayTo("§b对方拒绝了你的邀请");
                                    client.sayTo("§b你拒绝了对方的邀请", i[0]);
                                })
                                    .show(i[0]);
                                return false;
                            }
                        });
                    }
                    return arr;
                })
            }
        }
    },
    "setting": {
        "img": "textures/items/artificial_meat_creator_on.png",
        "text": "设置",
        "default": "op",
        "page": {
            "op": {
                "text": "管理",
                "page": (client, ui) => {
                    if (client.player.hasTag("owner")) {
                        return [
                            {
                                "type": "text_title",
                                "msg": "游戏内容"
                            },
                            {
                                "type": "toggle",
                                "msg": "玩家传送",
                                "state": (client, ui) => client.globalSettings.playerCanTp,
                                "function": (client, ui) => {
                                    client.globalSettings.playerCanTp = !client.globalSettings.playerCanTp;
                                    return true;
                                }
                            },
                            {
                                "type": "toggle",
                                "msg": "任何传送需要传送石",
                                "state": (client, ui) => client.globalSettings.tpNeedItem,
                                "function": (client, ui) => {
                                    client.globalSettings.tpNeedItem = !client.globalSettings.tpNeedItem;
                                    return true;
                                }
                            },
                            {
                                "type": "toggle",
                                "msg": "开启实体清理",
                                "state": (client, ui) => client.globalSettings.entityCleaner,
                                "function": (client, ui) => {
                                    client.globalSettings.entityCleaner = !client.globalSettings.entityCleaner;
                                    client.runOnServer((server) => {
                                        server.upDateEntityCleaner();
                                    });
                                    return true;
                                }
                            },
                            //,
                            // {
                            // 	"type": "toggle",
                            // 	"msg": "开启死亡点回溯",
                            // 	"state": (client: PomClient, ui: MenuUIAlert) => client.globalSettings.deathRecord,
                            // 	"function": (client: PomClient, ui: MenuUIAlert) => {
                            // 		client.globalSettings.deathRecord = !client.globalSettings.deathRecord;
                            // 		return true;
                            // 	}
                            // },
                            {
                                "type": "toggle",
                                "msg": "允许记录传送点",
                                "state": (client, ui) => client.globalSettings.tpPointRecord,
                                "function": (client, ui) => {
                                    client.globalSettings.tpPointRecord = !client.globalSettings.tpPointRecord;
                                    return true;
                                }
                            }
                        ];
                    }
                    else {
                        return [{
                                "type": "text",
                                "msg": "无权限访问此页面。如果你是 op ，请输入/tag @s add owner 来获取管理权限"
                            }];
                    }
                }
            },
            "set": {
                "text": "高级设置",
                "page": (client, ui) => {
                    if (client.player.hasTag("owner")) {
                        return [{
                                "type": "button",
                                "msg": "实体清理设置",
                                "function": (client, ui) => {
                                    new ModalFormData()
                                        .toggle("开启实体清理", client.globalSettings.entityCleaner)
                                        .slider("保留实体数", 100, 1000, 50, client.globalSettings.entityCleanerLeastNum)
                                        .show(client.player).then((e) => {
                                        if (e.isCanceled)
                                            return;
                                        client.globalSettings.entityCleaner = e.formValues[0];
                                        client.globalSettings.entityCleanerLeastNum = e.formValues[1];
                                    })
                                        .catch((e) => {
                                        ExErrorStack.throwError(e);
                                    });
                                    return false;
                                }
                            }];
                    }
                    else {
                        return [{
                                "type": "text",
                                "msg": "无权限访问此页面。如果你是 op ，请输入/tag @s add owner 来获取管理权限"
                            }];
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=menuFunctionUI.js.map