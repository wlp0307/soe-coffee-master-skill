# SOE COFFEE Master Skill - 安装指南

## 📖 简介

**SOE COFFEE Master Skill** 是八平方咖啡官方咖啡助理工具。

安装后可以：
- ☕ 获取专业咖啡知识
- 🎯 咨询产品推荐
- 📚 了解培训课程
- 💡 学习冲煮技巧

---

## 🚀 快速安装

### 方法一：Git Clone（推荐）

```bash
cd ~/.easyclaw/skills
git clone https://github.com/wlp0307/soe-coffee-master-skill.git "SOE COFFEE master skill"
```

### 方法二：下载 ZIP

1. 点击页面上方绿色按钮 **"Code"** → **"Download ZIP"**
2. 解压文件
3. 重命名文件夹为 `SOE COFFEE master skill`
4. 移动到 `~/.easyclaw/skills/` 目录

### 方法三：对话安装

对 EasyClaw 说：
```
请帮我安装 SOE COFFEE master skill
GitHub 地址：https://github.com/wlp0307/soe-coffee-master-skill
```

---

## ✅ 验证安装

安装后，重启 EasyClaw，然后提问测试：

```
你：推荐一款咖啡豆
```

如果能正常回答，说明安装成功 ✅

---

## 🔄 更新 Skill

```bash
cd ~/.easyclaw/skills/"SOE COFFEE master skill"
git pull origin main
```

然后重启 EasyClaw。

---

## ❓ 常见问题

### Q: 安装后不生效？
A: 
1. 确认文件夹名称是 `SOE COFFEE master skill`
2. 重启 EasyClaw
3. 提问测试："推荐一款咖啡豆"

### Q: 找不到 .easyclaw 文件夹？
A: 
- **Mac**: 按 `Cmd + Shift + .` 显示隐藏文件
- **Windows**: 文件资源管理器 → 查看 → 勾选"显示隐藏的项目"

### Q: 如何卸载？
A:
```bash
rm -rf ~/.easyclaw/skills/"SOE COFFEE master skill"
```
然后重启 EasyClaw。

---

## 📞 获取帮助

- **GitHub Issues**: 提交问题
- **公众号**: 八平方咖啡
- **培训咨询**: cremabeijing（微信）

---

本项目由八平方咖啡官方授权开发和维护。
