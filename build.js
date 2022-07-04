/**
 * 构建异步组件的脚本
 * 自动读取目录文件
 */
var fs = require("fs");
var path = require("path");
const shell = require("shelljs");

console.log("开始构建组件");
console.time("构建sdk");
// vite 打包需要的配置
const { defineConfig, build } = require("vite");

const { createVuePlugin } = require("vite-plugin-vue2");
// vite 插件

let files = [];
const dir = "./build/";
fs.readdir(dir, (err, filenames) => {
  if (err) {
    console.error(err);
  } else {
    filenames.forEach((e) => {
      files.push({
        name: e.replace(".js", ""),
        path: path.join(dir, e),
      });
    });

    console.log(files, "当前目录文件");
    buildAll(files);
  }
});
// const env = process.argv.slice(2)[0]

async function buildAll(files) {
  shell.exec("rm -rf dist");
  shell.exec("mkdir -p dist");
  const funs = [];
  files.forEach(async (c) => {
    const fun = new Promise(async (resolve, reject) => {
      const result = await viteBuild(c);
      shell.exec(`cp -r ${c.name}/* dist`);
      resolve(result);
    });
    funs.push(fun);
  });
  await Promise.all(funs);
  shell.exec(`cp -r lib dist/`);
  console.timeEnd("构建sdk");
}

const baseConfig = defineConfig({
  //  target: 'chrome78',
  //  cssTarget: 'chrome78',
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
async function viteBuild(option) {
  return new Promise(async (resolve, reject) => {
    const result = await build({
      ...baseConfig,
      build: {
        lib: {
          // 入口
          entry: option.path,
          // 组件库名字
          name: option.name,
          fileName: option.name,
          // 输出格式
          // formats: ['es', 'umd']
        },
        outDir: option.name,
        rollupOptions: {
          //  确保外部化处理那些你不想打包进库的依赖
          external: ["vue"],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: "Vue",
            },
          },
        },
      },
    });
    resolve(result);
  });
}
