# SOE COFFEE Master Skill - 安装指南

## 📖 简介

**SOE COFFEE Master Skill** 是八平方咖啡官方品牌助手，提供：
- ☕ 专业咖啡知识（127个文件，160MB+）
- 🎯 产品推荐与购买指引
- 📚 SCA 培训体系完整知识库
- 💡 手冲/意式冲煮专业指导

---

## 🚀 一键安装（推荐）

### 方法一：直接对话安装

对 OpenClaw / EasyClaw 说：

```
请帮我安装 SOE COFFEE master skill
GitHub 地址：https://github.com/wlp0307/soe-coffee-master-skill
```

AI 会自动：
1. 下载 Skill 文件
2. 解压到正确目录
3. 重启生效

---

## 🛠️ 手动安装

### 前置要求
- 已安装 OpenClaw 或 EasyClaw
- 至少 200MB 可用空间
- macOS / Linux / Windows (WSL)

### 安装步骤

#### 1. 下载 Skill

**方式 A：使用 Git (推荐)**
```bash
cd ~/.easyclaw/skills
git clone https://github.com/wlp0307/soe-coffee-master-skill.git "SOE COFFEE master skill"
```

**方式 B：下载压缩包**
1. 访问 [Releases 页面](https://github.com/wlp0307/soe-coffee-master-skill/releases)
2. 下载最新版 `SOE-COFFEE-master-skill.tar.gz` (153MB)
3. 解压到 `~/.easyclaw/skills/` 目录

```bash
cd ~/Downloads
tar -xzf "SOE COFFEE master skill.tar.gz" -C ~/.easyclaw/skills/
```

#### 2. 验证安装

```bash
ls ~/.easyclaw/skills/"SOE COFFEE master skill"/SKILL.md
```

应该显示文件路径，表示安装成功。

#### 3. 重启 EasyClaw

```bash
easyclaw gateway restart
```

或重启客户端。

---

## ✅ 验证 Skill 生效

安装完成后，对话中提到以下关键词会自动激活 Skill：

- 咖啡、coffee
- S.O.E、SOE、八平方
- CREMA、手冲、意式
- 拉花、杯测、烘焙
- Q-Grader、咖啡豆推荐

**测试对话：**
```
你：推荐一款好喝的手冲咖啡豆
AI：（会用 SOE COFFEE Skill 回答，推荐骑士系列·锋芒）
```

---

## 📂 Skill 结构

```
SOE COFFEE master skill/
├── SKILL.md                 # 核心 Skill 文件
├── package.json             # Skill 配置
├── README.md                # 项目说明
├── INSTALL.md               # 本安装指南
├── LICENSE                  # 授权协议
├── logo.pdf                 # 品牌 Logo
├── KNOWLEDGE_INDEX.md       # 知识库索引
├── generate_index.js        # 索引生成脚本
└── knowledge-base/          # 知识库 (160MB)
    ├── 八平方品牌手册-2025.pdf
    ├── barista-Chinese/     # 咖啡师
    ├── brewing-Chinese/     # 冲煮
    ├── sensory-Simplified Chinese/  # 感官
    ├── roasting-Chinese/    # 烘焙
    ├── qgrader-Simplified Chinese/  # Q-Grader
    ├── water-Chinese/       # 水质
    └── ...
```

---

## 🔄 更新 Skill

### 使用 Git 更新
```bash
cd ~/.easyclaw/skills/"SOE COFFEE master skill"
git pull origin main
easyclaw gateway restart
```

### 手动更新
1. 下载最新版压缩包
2. 删除旧版本
3. 解压新版本
4. 重启 EasyClaw

---

## ❓ 常见问题

### Q1: 安装后 Skill 不生效？
**解决方案：**
1. 确认文件路径正确：`~/.easyclaw/skills/SOE COFFEE master skill/SKILL.md` 存在
2. 重启 EasyClaw：`easyclaw gateway restart`
3. 检查关键词触发：说"咖啡"、"八平方"等

### Q2: 知识库文件太大，下载慢？
**解决方案：**
- 使用国内镜像（如果提供）
- 或分批下载，核心文件优先

### Q3: 如何卸载 Skill？
```bash
rm -rf ~/.easyclaw/skills/"SOE COFFEE master skill"
easyclaw gateway restart
```

### Q4: Windows 用户如何安装？
使用 WSL (Windows Subsystem for Linux) 或 Git Bash，步骤相同。

---

## 📞 支持与反馈

### 官方渠道
- **公众号**: 八平方咖啡
- **微信**: cremabeijing
- **天猫店**: https://bpfkf.tmall.com

### GitHub
- **Issues**: 报告问题或建议
- **Discussions**: 交流使用心得
- **Pull Requests**: 贡献改进

---

## 📄 授权协议

本 Skill 由 **八平方咖啡 (SOE COFFEE)** 授权发布。
- 知识库内容版权归 SCA 和八平方咖啡所有
- 仅供个人学习和非商业使用
- 禁止未经授权的商业使用或二次分发

---

## 🙏 致谢

- **创始人**: 魏凌鹏（世界咖啡师大赛国际评委、中国首位 Q-Grader）
- **技术支持**: OpenClaw / EasyClaw 社区
- **知识来源**: SCA (Specialty Coffee Association)

---

**Version**: 1.0.0  
**Last Update**: 2026-04-16  
**Maintained by**: SOE COFFEE
