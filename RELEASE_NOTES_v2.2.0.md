# SOE Coffee Master Skill v2.2.0 Release Notes

**发布日期**: 2026-04-20

---

## 🔧 核心修复

### 修复 Skill 自动注册问题 ⚠️ **重要更新**

**问题描述**：
- 之前版本的 SKILL.md 缺少 YAML frontmatter
- 导致 EasyClaw 无法识别和注册 skill
- 用户下载后询问咖啡问题，AI 不会自动激活 skill
- 必须手动读取 SKILL.md 才能回答

**解决方案**：
- ✅ 在 SKILL.md 开头添加正确的 YAML frontmatter
- ✅ 包含 `name` 和 `description` 必需字段
- ✅ description 详细列出所有触发场景（咖啡豆推荐、手冲/意式参数、拉花、杯测、烘焙、Q-Grader、SCA、品牌咨询等）

**修复后效果**：
- ✅ 用户下载 skill 后，运行注册脚本即可正常使用
- ✅ AI 会自动识别咖啡相关问题，激活 skill
- ✅ 回答内容严格按照 SKILL.md 的 33 款产品库和专业知识库

---

## 📝 文档改进

### 更新安装说明

**新增内容**：

1. **⭐ AI 自动安装方法**（推荐）
   - 用户只需告诉 AI："帮我从 GitHub 安装 SOE Coffee Master Skill"
   - AI 自动完成下载、注册、配置全流程

2. **详细的手动安装步骤**
   - Step 1: 下载 Skill（Git Clone 或直接下载）
   - Step 2: 注册 Skill（运行注册脚本或让 AI 帮忙）
   - Step 3: 重启 EasyClaw
   - 提供完整的命令示例

3. **常见问题扩充**
   - Q: 安装后 AI 不回答咖啡问题怎么办？
   - Q: 注册脚本找不到怎么办？
   - Q: YAML frontmatter 是什么？

**改进原因**：
- 之前的安装说明缺少"注册"步骤
- 导致用户安装后无法正常使用
- 现在明确说明注册的必要性和方法

---

## 📊 版本对比

| 特性 | v2.1.0 | v2.2.0 |
|------|--------|--------|
| YAML frontmatter | ❌ 缺失 | ✅ 已添加 |
| 自动注册 | ❌ 无法注册 | ✅ 支持注册 |
| AI 自动激活 | ❌ 不会激活 | ✅ 自动激活 |
| 安装文档 | 不完整 | 完整详细 |
| 用户体验 | 需手动指定 | 无缝使用 |

---

## 🚀 升级指南

### 对于新用户

直接安装最新版即可，推荐使用 AI 自动安装：
```
告诉 AI："帮我从 GitHub 安装 SOE Coffee Master Skill"
```

### 对于已安装用户（v2.0.0 或 v2.1.0）

**方式 1：重新安装（推荐）**
```bash
# 1. 删除旧版本
rm -rf ~/.easyclaw/skills/SOE\ COFFEE\ master\ skill

# 2. 让 AI 重新安装
告诉 AI："帮我从 GitHub 安装 SOE Coffee Master Skill"
```

**方式 2：手动更新**
```bash
# 1. 拉取最新代码
cd ~/.easyclaw/skills/SOE\ COFFEE\ master\ skill
git pull origin main

# 2. 重新注册
python3 /Applications/easyclaw.app/Contents/Resources/cfmind/skills/create-skill/scripts/easyclaw_register_skill.py \
  ~/.easyclaw/skills/"SOE COFFEE master skill" \
  --workspace ~/.easyclaw/workspace

# 3. 重启 EasyClaw
```

---

## ⚠️ 破坏性变更

无

---

## 🔍 技术细节

### YAML Frontmatter 示例

```yaml
---
name: soe-coffee
description: SOE COFFEE (八平方咖啡) 品牌助手。专业咖啡知识库与产品推荐工具。当用户询问咖啡豆推荐、手冲/意式参数、拉花技巧、杯测方法、烘焙知识、Q-Grader认证、SCA培训、S.O.E八平方品牌信息时触发。覆盖门店菜单、33款精品豆库、专业培训体系、比赛规则查询。
---
```

**为什么需要 frontmatter？**
- EasyClaw 的 skill 注册系统通过 frontmatter 识别 skill
- `name`: skill 的唯一标识符
- `description`: AI 用来判断是否激活 skill 的核心依据
- 没有 frontmatter → 验证失败 → 无法注册 → AI 不会使用

---

## 📦 完整更新日志

### Commit 1: `4fc5757` - fix: 添加 YAML frontmatter 以支持自动注册

**变更内容**：
- 在 SKILL.md 开头添加 YAML frontmatter
- 设置 `name: soe-coffee`
- 编写详细的 `description`，包含所有触发关键词

**影响**：
- ✅ Skill 可以通过验证
- ✅ 支持注册脚本
- ✅ AI 能自动识别并激活

---

### Commit 2: `df5c096` - docs: 更新安装说明，添加注册步骤和常见问题

**变更内容**：
- 新增 AI 自动安装方法
- 详细说明手动安装的 3 个步骤
- 添加注册脚本完整命令
- 扩充常见问题章节
- 强调注册步骤的必要性

**影响**：
- ✅ 新用户能正确安装和使用
- ✅ 减少安装失败的情况
- ✅ 提升用户体验

---

## 🙏 致谢

感谢 **魏凌鹏老师** 发现并提出这个关键问题，让 SOE Coffee Master Skill 能够正常被 EasyClaw 识别和使用。

---

## 📞 反馈与支持

如有问题或建议，请通过以下方式联系：
- GitHub Issues: https://github.com/wlp0307/soe-coffee-master-skill/issues
- 微信：cremabeijing（仅限培训咨询）
- 公众号：八平方咖啡

---

**完整更新日志**: https://github.com/wlp0307/soe-coffee-master-skill/compare/v2.1.0...v2.2.0
