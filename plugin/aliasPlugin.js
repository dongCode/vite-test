import path from "node:path";

export default function aliasPlugin() {
  return {
    name: "alias-plugin",
    resolveId(source) {
      console.log("source", source);
        if (source.startsWith("@alias/")) {
        debugger
        // 将 '@alias/' 开头的模块路径解析为 'src/' 目录下的对应路径
        const realPath = path.resolve(__dirname, "src", source.slice(7));
        return realPath;
      }
      return null; // 返回 null 表示让 Vite 继续处理该模块的解析
    },
  };
}
