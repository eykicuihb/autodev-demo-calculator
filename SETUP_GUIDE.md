# AutoDev Demo Project - GitHub Setup Guide

## 项目已创建成功！

本地项目位置：`/Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22/autodev-demo-project`

## 当前项目状态

✅ **项目结构完整**
- TypeScript 配置完整
- Jest 测试配置完整
- ESLint 配置完整
- Git 仓库已初始化
- Initial commit 已创建

✅ **构建测试**
- `npm run build` - TypeScript 编译通过
- `npm run lint` - ESLint 检查通过
- `npm run typecheck` - 类型检查通过

⚠️ **测试结果**
- 10 个测试通过 ✅
- 1 个测试失败 ❌（故意设计，division by zero 未处理）

## 如何推送到 GitHub

### 方案 1: 创建新仓库并推送

1. **在 GitHub 创建新仓库**
   - 访问 https://github.com/new
   - Repository name: `autodev-demo-calculator`
   - Description: "Demo calculator project for AutoDev testing"
   - Public 或 Private（建议 Public）
   - **不要初始化 README、.gitignore、license**（我们已经有了）
   - 点击 "Create repository"

2. **推送本地仓库到 GitHub**
   ```bash
   cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22/autodev-demo-project

   # 添加 GitHub remote（替换 YOUR_USERNAME）
   git remote add origin https://github.com/YOUR_USERNAME/autodev-demo-calculator.git

   # 推送到 GitHub
   git push -u origin master
   ```

### 方案 2: 使用 GitHub CLI（如果已安装）

```bash
cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22/autodev-demo-project

# 创建并推送（替换 YOUR_USERNAME）
gh repo create autodev-demo-calculator --public --source=. --remote=origin --push
```

## 创建 Issues 让 AutoDev 修复

推送成功后，在 GitHub Issues 页面创建以下 3 个 issues：

### Issue #1: Division by zero not handled

**Title:** Division by zero should throw error

**Body:**
```
The `divide()` function in `src/calculator.ts` doesn't handle division by zero.

**Current behavior:**
```typescript
divide(5, 0)  // Returns Infinity (JavaScript default)
```

**Expected behavior:**
Should throw an error when divisor is zero.

**Test already exists:** See `tests/calculator.test.ts` line 33

**Files to modify:**
- `src/calculator.ts` - Add zero check in divide method

**Acceptance criteria:**
- divide(a, 0) throws Error with message "Division by zero is not allowed"
- All existing tests pass
- No other functionality affected
```

### Issue #2: Add power function

**Title:** Implement power function for exponentiation

**Body:**
```
The Calculator class lacks a `power()` function for calculating base^exponent.

**Expected API:**
```typescript
power(base: number, exponent: number): number
```

**Examples:**
```typescript
calc.power(2, 3)   // 8 (2^3)
calc.power(5, 0)   // 1 (5^0)
calc.power(3, 2)   // 9 (3^2)
calc.power(2, -1)  // 0.5 (2^-1)
```

**Files to modify:**
- `src/calculator.ts` - Add power method
- `src/index.ts` - Export if needed
- `tests/calculator.test.ts` - Add tests for power function

**Acceptance criteria:**
- power(base, exponent) returns correct mathematical result
- Handles negative exponents
- Handles zero base and exponent edge cases
- Test coverage included
```

### Issue #3: Add input validation

**Title:** Add input validation to all calculator methods

**Body:**
```
All calculator methods lack input validation. They should check if inputs are valid numbers.

**Current behavior:**
```typescript
calc.add('5', 3)     // Returns '53' (string concatenation)
calc.multiply(NaN, 3) // Returns NaN
```

**Expected behavior:**
Should throw error for invalid inputs (non-numbers, NaN, Infinity).

**Files to modify:**
- `src/calculator.ts` - Add validation to all methods (add, subtract, multiply, divide, percentage, sqrt)
- Use existing `isValidNumber()` utility from `src/utils.ts`
- `tests/calculator.test.ts` - Add validation tests

**Acceptance criteria:**
- All methods validate inputs using isValidNumber()
- Throws Error with message "Invalid input: expected a valid number"
- Tests for invalid inputs added
- Existing tests still pass
```

## 启动 AutoDev Workflow 测试

### 测试 Issue #1（Division by zero）

```bash
cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22

# 确保 Temporal server 和 worker 正在运行
# 如果没有运行，启动它们：
# npm run dev:worker (在一个终端)
# temporal server start-dev (在另一个终端，或使用 Docker)

# 启动 workflow（替换 YOUR_USERNAME）
npm run dev:start \
  --issueId 1 \
  --repoUrl https://github.com/YOUR_USERNAME/autodev-demo-calculator \
  --executor claude_code
```

### 在 Dashboard 监控

访问 http://localhost:3000/workflows/autodev-issue-1

**预期流程：**
1. Planning → 生成 task（修复 division by zero）
2. Contract Negotiation → 定义 scope（只修改 `src/calculator.ts`）
3. Code Generation → Claude Code executor 生成代码
4. Deterministic Checks → 运行 `npm run build, lint, test`
5. Evaluator → 评分各个维度
6. Approval → 等待人工审批（或自动通过）

**预期结果：**
- ✅ Scope control: 5/5（只修改 calculator.ts）
- ✅ Functionality: 5/5（测试通过）
- ✅ Code quality: 4-5/5
- ✅ Test health: 5/5（测试覆盖）
- ✅ Risk: 4-5/5
- ✅ Overall: PASSED

## 项目技术栈

- **语言:** TypeScript 5.3
- **测试:** Jest 29
- **Lint:** ESLint 8 + TypeScript ESLint
- **构建:** tsc (TypeScript compiler)
- **包管理:** npm

## Deterministic Checks 配置

AutoDev 会自动运行以下 checks（通过检测 package.json scripts）：
- ✅ `npm run build` - TypeScript 编译
- ✅ `npm run lint` - ESLint 检查
- ✅ `npm run typecheck` - 类型检查
- ✅ `npm test` - Jest 测试

**当前测试状态：**
- 1 个测试失败（division by zero）❌
- 这是故意设计，Issue #1 修复后应该通过

## 项目文件结构

```
autodev-demo-calculator/
├── src/
│   ├── calculator.ts      # 主实现（有 bugs）
│   ├── utils.ts           # 工具函数
│   └── index.ts           # 导出
├── tests/
│   └── calculator.test.ts # 单元测试
├── package.json           # npm 配置
├── tsconfig.json          # TypeScript 配置
├── jest.config.js         # Jest 配置
├── .eslintrc.js           # ESLint 配置
├── .gitignore             # Git 忽略规则
└── README.md              # 项目文档
```

## 下一步行动

1. **推送项目到 GitHub**
   ```bash
   cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22/autodev-demo-project
   # 使用上面的 GitHub 推送命令
   ```

2. **创建 3 个 Issues**（在 GitHub Issues 页面）

3. **启动 AutoDev 测试**
   ```bash
   cd /Users/chb/workspace/autodev-v22/autodev_temporal_harness_v22
   npm run dev:start --issueId 1 --repoUrl <your-repo-url> --executor claude_code
   ```

4. **在 Dashboard 监控进度**
   http://localhost:3000/workflows/autodev-issue-1

5. **验证结果**
   - 检查生成的代码质量
   - 验证所有测试通过
   - 检查 scope enforcement 正确工作

## 成功标准

完整的 AutoDev workflow 成功应该满足：
- ✅ Scope verification 通过（无越界修改）
- ✅ Deterministic checks 全部通过（build, lint, typecheck, test）
- ✅ Evaluator 所有维度 ≥ 3/5
- ✅ OverallPass = true
- ✅ 在 Dashboard 可以看到完整的执行历史

---

**准备好测试了吗？** 🚀

按照上述步骤推送项目并创建 issues，然后用 AutoDev 来修复它们！