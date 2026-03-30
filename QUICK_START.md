# 🎉 Demo 项目创建完成！

## 项目摘要

**项目名称:** AutoDev Demo Calculator
**位置:** `/Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22/autodev-demo-project`
**Git 提交:** 2 个 commits 已创建
**状态:** ✅ 完全可用

## 项目特点

### ✅ 完整的项目配置
- TypeScript 编译器配置
- Jest 测试框架配置
- ESLint 代码检查配置
- Git 仓库已初始化
- 所有依赖已安装

### ✅ 实现的功能
- Calculator 类（基本运算：add, subtract, multiply, divide, percentage, sqrt）
- 工具函数（isValidNumber, formatNumber, round）
- 完整的单元测试（11 个测试）

### ⚠️ 故意设计的 Issues（供 AutoDev 修复）
**Issue #1:** Division by zero 未处理
- `divide(5, 0)` 返回 Infinity（应抛出错误）
- 已有失败的测试（tests/calculator.test.ts:33）

**Issue #2:** 缺少 power 函数
- 应实现 `power(base, exponent)` 用于幂运算
- 已有注释的测试（tests/calculator.test.ts:36-40）

**Issue #3:** 无输入验证
- 所有方法都未验证输入是否为有效数字
- 应使用 `isValidNumber()` 工具函数

## 当前测试状态

```
npm test

FAIL tests/calculator.test.ts
  ✓ add should sum two numbers
  ✓ subtract should find difference
  ✓ multiply should find product
  ✓ divide should find quotient
  ✕ divide by zero should throw error ❌
  ✓ percentage should calculate correctly
  ✓ sqrt should calculate square root
  ✓ sqrt of negative should throw error
  ✓ isValidNumber should validate numbers
  ✓ formatNumber should format decimals
  ✓ round should round to precision

Tests: 1 failed, 10 passed, 11 total
```

## 下一步操作指南

### 📝 Step 1: 推送到 GitHub

在 GitHub 创建新仓库 `autodev-demo-calculator`（Public），然后：

```bash
cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22/autodev-demo-project

# 添加 remote（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/autodev-demo-calculator.git

# 推送
git push -u origin master
```

### 📋 Step 2: 创建 GitHub Issues

在仓库的 Issues 页面创建 3 个 issues（详细内容见 `SETUP_GUIDE.md`）：

1. **Issue #1:** Division by zero should throw error
2. **Issue #2:** Implement power function for exponentiation
3. **Issue #3:** Add input validation to all calculator methods

### 🚀 Step 3: 启动 AutoDev Workflow

测试 Issue #1（division by zero）：

```bash
cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22

# 确保 Temporal server 和 worker 运行中
npm run dev:start \
  --issueId 1 \
  --repoUrl https://github.com/YOUR_USERNAME/autodev-demo-calculator \
  --executor claude_code
```

### 📊 Step 4: 在 Dashboard 监控

访问：http://localhost:3000/workflows/autodev-issue-1

观察完整流程：
- Planning → Contract → Generation → Checks → Evaluation → Approval

### ✅ Step 5: 验证成功

检查最终结果：
- Scope verification: `passed: true`
- Deterministic checks: 所有通过
- Evaluator scorecard: 所有维度 ≥ 3/5
- Tests: 全部通过（11/11）

## 预期 AutoDev 行为

### 对于 Issue #1（Division by zero）

**Planning:**
- 识别任务：修复 divide() 方法的零除错误
- 定义 ownedPaths: `["src/calculator.ts", "tests/calculator.test.ts"]`
- Risk level: low（单文件修改）

**Contract Negotiation:**
- Scope in: 添加 divide() 的零检查
- Scope out: 不修改其他方法、不改变返回类型
- Deterministic checks: `["compile-or-lint", "typecheck", "test"]`

**Code Generation（Claude Code executor）:**
```typescript
divide(a: number, b: number): number {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input: expected a valid number');
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}
```

**Deterministic Checks:**
- ✅ `npm run build` - TypeScript 编译通过
- ✅ `npm run lint` - ESLint 检查通过
- ✅ `npm run typecheck` - 类型检查通过
- ✅ `npm test` - **11/11 tests pass** (division by zero test now passes!)

**Evaluator Scorecard:**
- Functionality: 5/5 ✅（修复了 bug，测试通过）
- Code quality: 4/5 ✅（代码清晰）
- Test health: 5/5 ✅（有测试覆盖）
- Scope control: 5/5 ✅（只修改 calculator.ts）
- Risk: 4/5 ✅（低风险，单文件）
- **OverallPass: true** ✅

## 为什么这个项目适合测试？

### ✅ 真实项目结构
- 不是简单的 "Hello World"
- 有完整的 TypeScript 配置
- 有实际的测试、lint、typecheck

### ✅ 适合的复杂度
- Issues 都是真实场景（错误处理、缺失功能、输入验证）
- 代码量适中（单文件修复）
- 测试已准备好

### ✅ Deterministic Checks 会工作
- `npm run build/lint/typecheck/test` 都配置完整
- AutoDev 能准确检测哪些 checks 可用
- 失败的测试会驱动修复

### ✅ Scope Enforcement 可验证
- ownedPaths 定义清晰（只修改 calculator.ts）
- 不会越界修改其他文件
- Scope verifier 会正确检测

## 详细文档

完整设置步骤、Issues 内容、预期流程见：
- `SETUP_GUIDE.md` - GitHub 设置和 Issues 创建指南
- `README.md` - 项目文档（包含已知的 issues 说明）

## 快速测试验证

在推送前验证项目完整性：

```bash
cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22/autodev-demo-project

# 验证构建
npm run build          # ✅ 应成功

# 验证 lint
npm run lint           # ✅ 应无错误

# 验证类型检查
npm run typecheck      # ✅ 应通过

# 验证测试（预期 1 个失败）
npm test               # ⚠️ 10 passed, 1 failed (正常)

# 验证 Git
git log --oneline      # ✅ 应有 2 个 commits
git status             # ✅ 应无未提交文件
```

## 项目文件

```
autodev-demo-project/
├── src/
│   ├── calculator.ts      ← AutoDev 会修改这个文件
│   ├── utils.ts           ← 工具函数（已有 isValidNumber）
│   └── index.ts           ← 导出
├── tests/
│   └── calculator.test.ts ← 测试（已有 division by zero test）
├── package.json           ← npm scripts 定义
├── tsconfig.json          ← TypeScript 配置
├── jest.config.js         ← Jest 配置
├── .eslintrc.js           ← ESLint 配置
├── README.md              ← 项目文档
├── SETUP_GUIDE.md         ← GitHub 设置指南
└── .gitignore             ← Git ignore 规则
```

---

**准备开始实战测试了吗？** 🚀

按照上面的 5 个步骤操作，体验完整的 AutoDev V2.2 workflow！

**关键路径：**
1. 推送到 GitHub → 2. 创建 Issue #1 → 3. 启动 workflow → 4. Dashboard 监控 → 5. 验证成功

祝测试顺利！ 🎯