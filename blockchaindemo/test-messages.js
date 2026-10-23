const messagesType = require("./messages-type.js");
const Messages = require("./messages.js");
const Block = require("./Block.js");

console.log("=======消息类型和消息工厂测试开始========");
try {
    // 测试1：消息的枚举类型
    console.log("1: 测试消息类型枚举");
    console.log("REQUEST_LATEST_BLOCK", messagesType.REQUEST_LATEST_BLOCK);
    console.log("RECEIVE_LATEST_BLOCK", messagesType.RECEIVE_LATEST_BLOCK);
    console.log(
        "REQUEST_LATEST_BLOCKCHAIN",
        messagesType.REQUEST_LATEST_BLOCKCHAIN,
    );
    console.log(
        "RECEIVE_LATEST_BLOCKCHAIN",
        messagesType.RECEIVE_LATEST_BLOCKCHAIN,
    );
    console.log("HANDSHAKE", messagesType.HANDSHAKE);
    console.log("1111111111111111111111111111111111111111");

    // 测试2：请求最新区块消息函数
    console.log("2: 测试请求最新区块消息函数");
    const requestLatestBlockMsg = Messages.getLatestBlock();
    console.log("-- 消息类型：", requestLatestBlockMsg.type);
    console.log(
        "-- 是否为请求最新区块类型：",
        requestLatestBlockMsg.type === messagesType.REQUEST_LATEST_BLOCK,
    );
    console.log("-- 消息结构：", JSON.stringify(requestLatestBlockMsg));
    console.log("2222222222222222222222222222222222222222");

    // 测试3：响应最新区块消息的功能
    console.log("3: 测试响应最新区块消息的功能");
    const testBlock = Block.genesis;
    const sendLatestBlockMsg = Messages.sendLatestBlock(testBlock);
    console.log("-- 消息类型：", sendLatestBlockMsg.type);
    console.log(
        "-- 是否为响应最新区块类型：",
        sendLatestBlockMsg.type === messagesType.RECEIVE_LATEST_BLOCK,
    );
    console.log("-- 消息结构：", JSON.stringify(sendLatestBlockMsg));
    console.log("3333333333333333333333333333333333333333");

} catch (error) {
    console.error("测试失败:", error);
}