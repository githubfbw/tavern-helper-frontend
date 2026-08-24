// 修复 webpack experiments.outputModule + LimitChunkCountPlugin 组合下的一个已知代码生成缺陷：
// BBC_BNWO 的状态栏 bundle 里 vue-loader 的 exportHelper 需要 `__webpack_require__.cjs` 这个 CJS 互操作辅助函数，
// 但 webpack 只生成了对它的属性赋值（`__webpack_require__.cjs = ...`），没有生成 `__webpack_require__` 本身的基础对象声明，
// 导致浏览器里报 `__webpack_require__ is not defined`。
// 通过对比同一套 webpack 配置下另一个能正常渲染的项目（静语公寓）构建产物，确认了缺失的正是这一行对象声明，
// 其内容（n/d/o/cjs 四个方法）与本文件里补上的完全一致，属于该项目自身webpack运行时的标准实现，不是外部拼凑的代码。
// 每次 `webpack --mode production` 重新构建 BBC_BNWO 后，dist 会被清空重建，需要重新运行本脚本修补一次。
import fs from 'node:fs';

const TARGET = 'dist/BBC_BNWO/界面/状态栏/index.html';
const MARKER = '__webpack_require__.cjs=';
const RUNTIME_STUB =
  'var __webpack_require__={n:e=>{const t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},d:(e,t)=>{if(Array.isArray(t))for(var a=0;a<t.length;){var r=t[a++],l=t[a++];__webpack_require__.o(e,r)?0===l&&a++:0===l?Object.defineProperty(e,r,{enumerable:!0,value:t[a++]}):Object.defineProperty(e,r,{enumerable:!0,get:l})}else for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};';

if (!fs.existsSync(TARGET)) {
  console.error(`[patch] 未找到 ${TARGET}，请先执行 webpack 构建`);
  process.exit(1);
}

let html = fs.readFileSync(TARGET, 'utf-8');
if (!html.includes(MARKER)) {
  console.log('[patch] 未发现需要修补的 __webpack_require__.cjs 用法，跳过（可能本次构建结果已不同）');
  process.exit(0);
}
if (html.includes('var __webpack_require__={n:')) {
  console.log('[patch] 已经打过补丁，跳过');
  process.exit(0);
}

const idx = html.indexOf(MARKER);
html = html.slice(0, idx) + RUNTIME_STUB + html.slice(idx);
fs.writeFileSync(TARGET, html, 'utf-8');
console.log(`[patch] 已修补 ${TARGET}：补上缺失的 __webpack_require__ 基础对象声明`);
