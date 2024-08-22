import { networkInterfaces } from "os"

// 定义网络接口信息的类型
interface NetworkInterfaces {
  [key: string]: string[]
}

// 获取本地和网络接口信息
export function getNetworkInterfaces(): NetworkInterfaces {
  const nets = networkInterfaces()
  const results: NetworkInterfaces = {} // 使用类型别名

  for (const name of Object.keys(nets)) {
    const netInterface = nets[name]

    if (netInterface) {
      for (const net of netInterface) {
        // 跳过非 IPv4 和内部地址（例如 127.0.0.1）
        if (net.family === "IPv4" && !net.internal) {
          if (!results[name]) {
            results[name] = []
          }
          results[name].push(net.address)
        }
      }
    }
  }

  return results
}

export function info(message: string) {
  console.log(message)
}
