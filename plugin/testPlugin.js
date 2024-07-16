export default function testPlugin() {
    return {
      name: "text-plugin",
      buildStart() {
        console.log("buildStart");
      },
      transform(code, id) {
        console.log("正在处理的文件" + id);
      },
      load(source) {
        console.log("source", source);
      },
    };
}