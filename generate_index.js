#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const knowledgeBasePath = path.join(__dirname, 'knowledge-base');
const indexOutput = path.join(__dirname, 'KNOWLEDGE_INDEX.md');

// 关键词映射
const categoryKeywords = {
  'barista-Chinese': ['咖啡师', '意式咖啡', 'espresso', '拉花', '奶泡', 'barista'],
  'brewing-Chinese': ['手冲', '冲煮', '萃取', '研磨', '水粉比', 'brewing', 'pour over'],
  'sensory-Simplified Chinese': ['感官', '杯测', '风味', '品鉴', 'cupping', 'sensory', '香气', '口感'],
  'roasting-Chinese': ['烘焙', '烘豆', '一爆', '二爆', 'roasting', '烘焙度', '梅纳反应'],
  'qgrader-Simplified Chinese': ['Q-Grader', 'Q证', '品质鉴定', 'Arabica', 'Robusta'],
  'water-Chinese': ['水质', 'TDS', '硬度', '矿物质', 'water'],
  '水质': ['水质', 'TDS', '硬度', '矿物质', 'water'],
  'cva-Simplified Chinese': ['咖啡价值评估', 'CVA', '价值链', '产地'],
  'introChinese': ['入门', '基础', '介绍', 'introduction'],
  'introtocuppingSimplified Chinese': ['杯测入门', '杯测基础', '品鉴入门']
};

function scanDirectory(dir, baseDir = dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(scanDirectory(fullPath, baseDir));
    } else if (stat.isFile() && /\.(pdf|md|txt|docx)$/i.test(item)) {
      const relativePath = path.relative(baseDir, fullPath);
      const category = relativePath.split(path.sep)[0];
      const level = relativePath.includes('Foundation') ? '基础' : 
                   relativePath.includes('Intermediate') ? '中级' : 
                   relativePath.includes('Professional') ? '专业' : '通用';
      
      files.push({
        name: item,
        path: relativePath,
        category: category,
        level: level,
        keywords: categoryKeywords[category] || []
      });
    }
  });
  
  return files;
}

// 生成索引
const allFiles = scanDirectory(knowledgeBasePath);

// 按类别分组
const grouped = {};
allFiles.forEach(file => {
  if (!grouped[file.category]) {
    grouped[file.category] = [];
  }
  grouped[file.category].push(file);
});

// 生成 Markdown 索引
let markdown = `# S.O.E COFFEE 知识库索引\n\n`;
markdown += `> 本索引包含 ${allFiles.length} 个专业咖啡培训文件\n`;
markdown += `> 知识库路径: \`knowledge-base/\`\n\n`;
markdown += `## 📚 知识库结构\n\n`;

// 统计信息
markdown += `### 总览\n\n`;
Object.keys(grouped).forEach(category => {
  const count = grouped[category].length;
  const displayName = category.replace(/-Chinese|-Simplified Chinese/g, '');
  markdown += `- **${displayName}**: ${count} 个文件\n`;
});

markdown += `\n## 🔍 分类索引\n\n`;

// 详细分类
Object.keys(grouped).sort().forEach(category => {
  const displayName = category.replace(/-Chinese|-Simplified Chinese/g, '');
  const keywords = categoryKeywords[category] || [];
  
  markdown += `### ${displayName}\n\n`;
  markdown += `**关键词**: ${keywords.join(', ')}\n\n`;
  
  // 按级别分组
  const byLevel = {基础: [], 中级: [], 专业: [], 通用: []};
  grouped[category].forEach(file => {
    byLevel[file.level].push(file);
  });
  
  ['基础', '中级', '专业', '通用'].forEach(level => {
    if (byLevel[level].length > 0) {
      markdown += `**${level}级别:**\n\n`;
      byLevel[level].forEach(file => {
        markdown += `- \`${file.path}\`\n`;
      });
      markdown += `\n`;
    }
  });
});

// 快速查询映射
markdown += `## 🎯 快速查询映射\n\n`;
markdown += `根据用户问题关键词,匹配对应知识库文件:\n\n`;

const keywordMap = {};
Object.keys(categoryKeywords).forEach(category => {
  categoryKeywords[category].forEach(keyword => {
    if (!keywordMap[keyword]) {
      keywordMap[keyword] = [];
    }
    keywordMap[keyword].push(category);
  });
});

Object.keys(keywordMap).sort().forEach(keyword => {
  const categories = [...new Set(keywordMap[keyword])];
  markdown += `- **${keyword}** → ${categories.map(c => c.replace(/-Chinese|-Simplified Chinese/g, '')).join(', ')}\n`;
});

// 写入文件
fs.writeFileSync(indexOutput, markdown, 'utf8');
console.log(`✅ 索引已生成: ${indexOutput}`);
console.log(`📊 总计 ${allFiles.length} 个文件`);
