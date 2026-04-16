# ☕ SOE COFFEE Master Skill

<div align="center">

![SOE COFFEE Logo](./logo.pdf)

**八平方咖啡官方品牌助手 for OpenClaw / EasyClaw**

[![License](https://img.shields.io/badge/License-Private-red.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/wlp0307/soe-coffee-master-skill/releases)
[![Size](https://img.shields.io/badge/Size-160MB-orange.svg)](https://github.com/wlp0307/soe-coffee-master-skill)

[**快速安装**](#-快速安装) • [**功能介绍**](#-功能特性) • [**使用指南**](#-使用方法) • [**知识库**](#-知识库) • [**支持**](#-支持与反馈)

</div>

---

## 📖 项目简介

**SOE COFFEE Master Skill** 是八平方咖啡（SOE COFFEE）官方授权的 OpenClaw / EasyClaw 智能助手技能包。

由创始人 **魏凌鹏老师**（世界咖啡师大赛国际评委、中国首位 Q-Grader）亲自指导开发，内置完整的 SCA 专业培训知识库和品牌信息。

---

## ✨ 功能特性

### 🎯 品牌咨询
- 门店信息与地址导航
- 产品线完整介绍
- 电商渠道与购买指引
- CREMA 培训课程咨询

### ☕ 产品推荐
- **骑士系列·锋芒** - 2026年埃塞俄比亚TOH竞赛亚军豆
- **瑰夏白白** - 澳洲金豆杯冠军三重金奖拼配
- 数十款精品咖啡豆推荐

### 📚 专业知识库
- **127个专业文件** (160MB+)
- **SCA 完整培训体系** (Barista / Brewing / Sensory / Roasting / Q-Grader / Water)
- **八平方品牌手册 2025** (16MB完整版)
- **智能索引系统** - 根据问题自动匹配相关知识

### 💡 冲煮指导
- 手冲咖啡技术参数
- 意式咖啡制作指南
- 水质标准与调整
- 萃取优化建议

---

## 🚀 快速安装

### 一键安装（推荐）

对你的 OpenClaw / EasyClaw 说：

```
请帮我安装 SOE COFFEE master skill
GitHub 地址：https://github.com/wlp0307/soe-coffee-master-skill
```

### 手动安装

```bash
# 克隆仓库
cd ~/.easyclaw/skills
git clone https://github.com/wlp0307/soe-coffee-master-skill.git "SOE COFFEE master skill"

# 重启 EasyClaw
easyclaw gateway restart
```

**详细安装指南**: [INSTALL.md](./INSTALL.md)

---

## 🎮 使用方法

### 自动激活

对话中提到以下关键词时，Skill 会自动激活：

```
咖啡、coffee、SOE、八平方、CREMA
手冲、意式、拉花、杯测、烘焙
Q-Grader、咖啡豆推荐、咖啡培训
```

### 示例对话

#### 产品推荐
```
你：推荐一款性价比高的手冲咖啡豆
AI：推荐骑士系列·锋芒...（详细介绍产区、风味、冲煮参数）
```

#### 专业知识
```
你：手冲咖啡的水温怎么控制？
AI：根据烘焙度调整...（引用知识库，给出 SCA 标准和实用建议）
```

#### 培训咨询
```
你：CREMA 培训怎么报名？
AI：关注公众号"八平方咖啡"或添加微信 cremabeijing...
```

#### 购买指引
```
你：在哪买锋芒？
AI：天猫旗舰店直达链接...（提供多渠道购买方式）
```

---

## 📚 知识库

### 结构概览

```
knowledge-base/ (160MB)
├── 八平方品牌手册-2025.pdf        # 完整品牌指南 (16MB)
├── SCA 课程目录                   # 国际标准课程体系
├── AST Handbook 2025              # 授权培训师手册
├── barista-Chinese/               # 咖啡师技能 (15个文件)
├── brewing-Chinese/               # 冲煮技术 (23个文件)
├── sensory-Simplified Chinese/    # 感官品鉴 (19个文件)
├── roasting-Chinese/              # 烘焙技术 (22个文件)
├── qgrader-Simplified Chinese/    # Q-Grader 认证 (7个文件)
├── water-Chinese/                 # 水质管理 (21个文件)
└── ...
```

### 智能索引

Skill 内置智能索引系统（`KNOWLEDGE_INDEX.md`），根据用户问题自动匹配相关知识文件：

- **咖啡师、意式、拉花** → barista-Chinese
- **手冲、冲煮、萃取** → brewing-Chinese
- **杯测、风味、品鉴** → sensory-Simplified Chinese
- **烘焙、烘豆、烘焙度** → roasting-Chinese
- **Q证、Q-Grader** → qgrader-Simplified Chinese
- **水质、TDS、硬度** → water-Chinese

---

## 🏪 品牌信息

### 关于 SOE COFFEE

- **品牌名**: SOE COFFEE (八平方咖啡)
- **创始人**: 魏凌鹏
  - 世界咖啡师大赛国际评委
  - 中国首位 Q-Grader（咖啡品质鉴定师）
  - 20年咖啡行业经验 (2005-2026)
- **品牌理念**: "黑咖专家 - Black is colorful, Less is more"

### 门店

- 北京五道营胡同店（总店）
- 北京朝阳公园店

### 电商渠道

- 天猫旗舰店: https://bpfkf.tmall.com
- 淘宝/抖音/京东/小红书: 搜索"八平方咖啡"

### CREMA 咖啡培训

- 中国咖啡教育领导品牌
- SCA 授权培训中心
- 培养过万学员，遍布咖啡行业

**联系方式:**
- 公众号: 八平方咖啡
- 微信: cremabeijing

---

## 🔧 技术细节

### 系统要求

- OpenClaw / EasyClaw 客户端
- 至少 200MB 可用空间
- macOS / Linux / Windows (WSL)

### Skill 结构

```
SOE COFFEE master skill/
├── SKILL.md                 # 核心 Skill 文件 (5.9KB)
├── package.json             # Skill 配置
├── README.md                # 项目说明
├── INSTALL.md               # 安装指南
├── LICENSE                  # 授权协议
├── logo.pdf                 # 品牌 Logo
├── KNOWLEDGE_INDEX.md       # 知识库索引
├── generate_index.js        # 索引生成脚本
└── knowledge-base/          # 知识库 (160MB)
```

### 触发机制

Skill 通过 `package.json` 中的 `triggers` 字段定义触发关键词，OpenClaw 检测到关键词时自动加载 `SKILL.md`。

---

## 🤝 贡献指南

欢迎贡献改进！

### 贡献方式

1. **报告问题**: 在 [Issues](https://github.com/wlp0307/soe-coffee-master-skill/issues) 中提交
2. **建议功能**: 在 [Discussions](https://github.com/wlp0307/soe-coffee-master-skill/discussions) 中讨论
3. **提交代码**: Fork 仓库 → 修改 → 提交 Pull Request

### 改进方向

- 补充更多常见问题 FAQ
- 添加产品图片/视频
- 优化知识库索引
- 支持更多语言

---

## 📄 授权协议

本项目由 **八平方咖啡 (SOE COFFEE)** 授权发布。

- **知识库内容**: 版权归 SCA 和八平方咖啡所有
- **使用范围**: 仅供个人学习和非商业使用
- **禁止行为**: 未经授权的商业使用或二次分发

详见 [LICENSE](./LICENSE)

---

## 🆘 支持与反馈

### 官方渠道

- **公众号**: 八平方咖啡
- **微信**: cremabeijing
- **天猫店**: https://bpfkf.tmall.com

### GitHub

- **Issues**: [报告问题](https://github.com/wlp0307/soe-coffee-master-skill/issues)
- **Discussions**: [交流讨论](https://github.com/wlp0307/soe-coffee-master-skill/discussions)

---

## 🙏 致谢

- **魏凌鹏老师** - 创始人，提供专业指导和品牌授权
- **SCA** - 提供国际标准培训体系
- **OpenClaw / EasyClaw 社区** - 技术支持

---

## 📈 版本历史

### v1.0.0 (2026-04-16)

- ✅ 初始版本发布
- ✅ 完整品牌信息与产品线
- ✅ 127个专业知识文件
- ✅ 智能索引系统
- ✅ 购买链接与联系方式

---

<div align="center">

**Made with ☕ by SOE COFFEE**

[官网](https://bpfkf.tmall.com) • [公众号](https://mp.weixin.qq.com) • [GitHub](https://github.com/wlp0307/soe-coffee-master-skill)

</div>
