import colors from "picocolors"
import http from "http"
import { getNetworkInterfaces, info } from "./utils"
const { HTTP_PORT } = process.env

http
  .createServer((req, res) => {
    res.end("Hello World!")
  })
  .listen(HTTP_PORT)
// 获取网络接口信息
const interfaces = getNetworkInterfaces()

// 打印启动信息
info(
  ` ${colors.green("➜  Local:")}  ${colors.cyan(
    `http://localhost:${HTTP_PORT}/`
  )}`
)
Object.entries(interfaces).forEach(([_, addresses]) => {
  addresses.forEach((address) => {
    info(
      ` ${colors.green("➜  Network:")}  ${colors.cyan(
        `http://${address}:${HTTP_PORT}/`
      )}`
    )
  })
})
