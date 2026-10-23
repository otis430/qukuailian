const messagesType = {
    REQUEST_LATEST_BLOCK: 0, //请求最新区块
    RECEIVE_LATEST_BLOCK: 1, //响应最新区块
    REQUEST_LATEST_BLOCKCHAIN: 2,//请求最新区块链
    RECEIVE_LATEST_BLOCKCHAIN: 3,//响应最新区块链
    HANDSHAKE: 4,//握手消息交换节点的监听
}
module.exports = messagesType;