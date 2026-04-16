# GitHub 发布清单

## 📋 发布前准备

### 1. 创建 GitHub 仓库

- [ ] 登录 GitHub
- [ ] 点击右上角 "+" → "New repository"
- [ ] 仓库名: `soe-coffee-master-skill`
- [ ] 描述: `☕ SOE COFFEE Master Skill - 八平方咖啡官方品牌助手 for OpenClaw / EasyClaw`
- [ ] 选择 Public（公开）
- [ ] ❌ 不要勾选 "Add a README file"（我们已有）
- [ ] ❌ 不要选择 .gitignore（我们已有）
- [ ] ❌ 不要选择 License（我们已有）
- [ ] 点击 "Create repository"

### 2. 准备本地仓库

```bash
cd ~/.easyclaw/skills/"SOE COFFEE master skill"

# 初始化 Git
git init

# 添加所有文件
git add .

# 首次提交
git commit -m "feat: 初始版本 v1.0.0

- 完整品牌信息与产品线
- 127个专业知识文件 (160MB)
- 智能索引系统
- 购买链接与联系方式"

# 关联远程仓库（替换 wlp0307）
git remote add origin https://github.com/wlp0307/soe-coffee-master-skill.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3. 更新文档中的链接

在以下文件中，将 `wlp0307` 替换为你的 GitHub 用户名：

- [ ] `README_GITHUB.md` (所有链接)
- [ ] `INSTALL.md` (GitHub 地址)
- [ ] `install.sh` (克隆地址)

**批量替换命令:**
```bash
# 替换为你的 GitHub 用户名
YOUR_USERNAME="your-github-username"

# 批量替换
sed -i '' "s/\[你的用户名\]/$YOUR_USERNAME/g" README_GITHUB.md
sed -i '' "s/\[你的用户名\]/$YOUR_USERNAME/g" INSTALL.md
sed -i '' "s/\[你的用户名\]/$YOUR_USERNAME/g" install.sh

# 提交更新
git add .
git commit -m "docs: 更新 GitHub 用户名"
git push
```

### 4. 重命名 README

```bash
# 将 README_GITHUB.md 改为 README.md
mv README_GITHUB.md README.md

# 提交
git add .
git commit -m "docs: 更新 README"
git push
```

---

## 🚀 创建 Release

### 1. 打包压缩文件

```bash
cd ~/.easyclaw/skills
tar -czf "SOE-COFFEE-master-skill-v1.0.0.tar.gz" "SOE COFFEE master skill/"
```

### 2. 在 GitHub 创建 Release

1. 进入仓库页面
2. 点击右侧 "Releases" → "Create a new release"
3. 填写信息:
   - **Tag version**: `v1.0.0`
   - **Release title**: `SOE COFFEE Master Skill v1.0.0`
   - **Description**: 
     ```markdown
     ## 🎉 首个正式版本

     ### ✨ 功能亮点
     - ☕ 完整品牌信息与产品线
     - 📚 127个专业知识文件 (160MB)
     - 🎯 智能索引系统
     - 🛒 购买链接与联系方式

     ### 📦 安装方式

     **一键安装:**
     ```bash
     bash <(curl -fsSL https://raw.githubusercontent.com/wlp0307/soe-coffee-master-skill/main/install.sh)
     ```

     **手动安装:**
     1. 下载下方的 `SOE-COFFEE-master-skill-v1.0.0.tar.gz`
     2. 解压到 `~/.easyclaw/skills/`
     3. 重启 EasyClaw

     详见 [安装指南](https://github.com/wlp0307/soe-coffee-master-skill/blob/main/INSTALL.md)

     ### 📞 支持
     - 公众号: 八平方咖啡
     - 微信: cremabeijing
     - 天猫: https://bpfkf.tmall.com
     ```

4. 上传 `SOE-COFFEE-master-skill-v1.0.0.tar.gz`
5. 点击 "Publish release"

---

## 📣 宣传推广

### 1. 撰写发布公告

可以在以下平台发布：

- [ ] GitHub Discussions
- [ ] 八平方咖啡公众号
- [ ] 小红书
- [ ] 知乎
- [ ] V2EX
- [ ] OpenClaw / EasyClaw 社区

**公告模板:**
```markdown
# 🎉 八平方咖啡官方 AI 助手上线！

大家好！

我们推出了 **SOE COFFEE Master Skill**，
一个专为 OpenClaw / EasyClaw 用户打造的咖啡品牌助手。

## ✨ 功能亮点
- ☕ 专业咖啡知识（127个文件，160MB）
- 🎯 产品推荐与购买指引
- 📚 SCA 培训体系完整知识库
- 💡 手冲/意式冲煮专业指导

## 🚀 一键安装
对你的 AI 说：
"请帮我安装 SOE COFFEE master skill
GitHub 地址：https://github.com/wlp0307/soe-coffee-master-skill"

## 📖 详细文档
https://github.com/wlp0307/soe-coffee-master-skill

欢迎体验！☕
```

### 2. README Badge 更新

在 `README.md` 顶部更新徽章：

```markdown
[![GitHub stars](https://img.shields.io/github/stars/wlp0307/soe-coffee-master-skill.svg?style=social)](https://github.com/wlp0307/soe-coffee-master-skill/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/wlp0307/soe-coffee-master-skill.svg?style=social)](https://github.com/wlp0307/soe-coffee-master-skill/network/members)
[![GitHub downloads](https://img.shields.io/github/downloads/wlp0307/soe-coffee-master-skill/total.svg)](https://github.com/wlp0307/soe-coffee-master-skill/releases)
```

---

## ✅ 发布后维护

### 1. 回应 Issues 和 Discussions
- 及时回复用户问题
- 记录常见问题到 FAQ

### 2. 持续更新
- 补充新产品信息
- 优化知识库索引
- 修复用户反馈的问题

### 3. 版本规划
- v1.1.0: 添加更多 FAQ
- v1.2.0: 支持更多语言
- v2.0.0: 知识库扩展

---

## 📞 需要帮助？

如有疑问，请联系：
- 公众号: 八平方咖啡
- 微信: cremabeijing
