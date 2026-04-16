#!/bin/bash
# SOE COFFEE Master Skill - 快速安装脚本

set -e

echo "=========================================="
echo "  SOE COFFEE Master Skill 安装程序"
echo "=========================================="
echo ""

# 检测操作系统
OS="$(uname -s)"
case "${OS}" in
    Linux*)     MACHINE=Linux;;
    Darwin*)    MACHINE=Mac;;
    *)          MACHINE="UNKNOWN:${OS}"
esac

echo "检测到系统: ${MACHINE}"
echo ""

# 检查 EasyClaw 安装
SKILLS_DIR="$HOME/.easyclaw/skills"
if [ ! -d "$SKILLS_DIR" ]; then
    echo "❌ 错误: 未找到 ~/.easyclaw/skills 目录"
    echo "请先安装 OpenClaw 或 EasyClaw"
    exit 1
fi

echo "✅ 检测到 EasyClaw 安装目录"
echo ""

# 检查 Git
if ! command -v git &> /dev/null; then
    echo "❌ 错误: 未安装 Git"
    echo "请先安装 Git: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git 已安装"
echo ""

# 克隆仓库
SKILL_NAME="SOE COFFEE master skill"
SKILL_PATH="$SKILLS_DIR/$SKILL_NAME"

echo "开始安装 SOE COFFEE Master Skill..."
echo "目标目录: $SKILL_PATH"
echo ""

# 检查是否已安装
if [ -d "$SKILL_PATH" ]; then
    echo "⚠️  检测到已安装版本"
    read -p "是否覆盖安装? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "取消安装"
        exit 0
    fi
    echo "删除旧版本..."
    rm -rf "$SKILL_PATH"
fi

# 克隆仓库
echo "下载 Skill 文件（约 160MB，请稍候）..."
git clone https://github.com/wlp0307/soe-coffee-master-skill.git "$SKILL_PATH"

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "  ✅ 安装成功！"
    echo "=========================================="
    echo ""
    echo "下一步："
    echo "1. 重启 EasyClaw:"
    echo "   easyclaw gateway restart"
    echo ""
    echo "2. 测试 Skill:"
    echo "   对话中提到 '咖啡'、'八平方' 等关键词即可激活"
    echo ""
    echo "3. 示例问题:"
    echo "   - 推荐一款手冲咖啡豆"
    echo "   - 手冲咖啡水温怎么控制"
    echo "   - CREMA 培训怎么报名"
    echo ""
    echo "官方支持:"
    echo "- 公众号: 八平方咖啡"
    echo "- 微信: cremabeijing"
    echo "- GitHub: https://github.com/wlp0307/soe-coffee-master-skill"
    echo ""
    echo "=========================================="
else
    echo ""
    echo "❌ 安装失败"
    echo "请检查网络连接或手动安装"
    echo "手动安装指南: https://github.com/wlp0307/soe-coffee-master-skill/blob/main/INSTALL.md"
    exit 1
fi
