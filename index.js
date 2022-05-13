const PDFMerge = require('pdf-merge');
const files = [
	`${__dirname}/1、《平凡的世界》读书笔记.pdf`,
  `${__dirname}/5000字大学生读书心得.pdf`,
	`${__dirname}/论文查重报告.pdf`
];
console.log(files);
PDFMerge(files, {output: `${__dirname}/3.pdf`})
.then((buffer) => {console.log(buffer)});