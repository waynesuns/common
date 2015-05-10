﻿$.datepick.regional['zh-CN'] = {
	monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
	monthNamesShort : [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ],
	dayNames : [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
	dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
	dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
	dateFormat : 'dd-mm-yyyy',
	firstDay : 0,
	renderer : $.extend({}, $.datepick.defaultRenderer, {
		month : $.datepick.defaultRenderer.month.replace(/monthHeader/, 'monthHeader:yyyy年 MM')
	}),
	prevText : '<上月',
	prevStatus : '显示上月',
	prevJumpText : '<<',
	prevJumpStatus : '显示上一年',
	nextText : '下月>',
	nextStatus : '显示下月',
	nextJumpText : '>>',
	nextJumpStatus : '显示下一年',
	currentText : '今天',
	currentStatus : '显示本月',
	todayText : '今天',
	todayStatus : '显示本月',
	clearText : '清除',
	clearStatus : '清除已选日期',
	closeText : '关闭',
	closeStatus : '不改变目前的选择',
	yearStatus : '选择年份',
	monthStatus : '选择月份',
	weekText : '周',
	weekStatus : '年内周次',
	dayStatus : '选择m月d日, DD',
	defaultStatus : '请选择日期',
	isRTL : false
};
$.datepick.regional['en-AU'] = {
	monthNames : [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	monthNamesShort : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
	dayNames : [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
	dayNamesShort : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
	dayNamesMin : [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
	dateFormat : 'dd/mm/yyyy',
	firstDay : 1,
	renderer : $.datepick.defaultRenderer,
	prevText : 'Prev',
	prevStatus : 'Show the previous month',
	prevJumpText : '&#x3c;&#x3c;',
	prevJumpStatus : 'Show the previous year',
	nextText : 'Next',
	nextStatus : 'Show the next month',
	nextJumpText : '&#x3e;&#x3e;',
	nextJumpStatus : 'Show the next year',
	currentText : 'Current',
	currentStatus : 'Show the current month',
	todayText : 'Today',
	todayStatus : 'Show today\'s month',
	clearText : 'Clear',
	clearStatus : 'Erase the current date',
	closeText : 'Done',
	closeStatus : 'Close without change',
	yearStatus : 'Show a different year',
	monthStatus : 'Show a different month',
	weekText : 'Wk',
	weekStatus : 'Week of the year',
	dayStatus : 'Select DD, M d',
	defaultStatus : 'Select a date',
	isRTL : false
};