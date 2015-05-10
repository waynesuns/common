/*!*********************************************************************
 * ELYCHARTS v2.1.4-SNAPSHOT $Id: elycharts.min.js 52 2011-08-07 19:57:09Z stefano.bagnara@gmail.com $
 * A Javascript library to generate interactive charts with vectorial graphics.
 *
 * Copyright (c) 2010 Void Labs s.n.c. (http://void.it)
 * Licensed under the MIT (http://creativecommons.org/licenses/MIT/) license.
 **********************************************************************/
(function(a) {
	if (!a.elycharts) {
		a.elycharts = {}
	}
	a.elycharts.templates = {
		common : {
			margins : [ 10, 10, 10, 10 ],
			interactive : true,
			defaultSeries : {
				visible : true,
				tooltip : {
					active : true,
					width : 100,
					height : 50,
					roundedCorners : 5,
					padding : [ 6, 6 ],
					offset : [ 20, 0 ],
					frameProps : {
						fill : "white",
						"stroke-width" : 2
					},
					contentStyle : {
						"font-family" : "Arial",
						"font-size" : "12px",
						"line-height" : "16px",
						color : "black"
					}
				},
				highlight : {
					scaleSpeed : 100,
					scaleEasing : "",
					moveSpeed : 100,
					moveEasing : "",
					restoreSpeed : 0,
					restoreEasing : ""
				},
				anchor : {},
				startAnimation : {
					type : "simple",
					speed : 600,
					delay : 0,
					propsFrom : {},
					propsTo : {},
					easing : ""
				},
				label : {
					active : false,
					html : false,
					props : {
						fill : "black",
						stroke : "none",
						"font-family" : "Arial",
						"font-size" : "16px"
					},
					style : {
						cursor : "default"
					}
				}
			},
			series : {
				empty : {
					label : {
						active : false
					},
					tooltip : {
						active : false
					}
				}
			},
			features : {
				tooltip : {
					fadeDelay : 100,
					moveDelay : 300
				},
				mousearea : {
					type : "single",
					indexCenter : "auto",
					areaMoveDelay : 500,
					syncTag : false,
					onMouseEnter : false,
					onMouseExit : false,
					onMouseChanged : false,
					onMouseOver : false,
					onMouseOut : false
				},
				highlight : {
					indexHighlightProps : {
						opacity : 1
					}
				},
				animation : {
					startAnimation : {
						speed : 600,
						delay : 0,
						easing : ""
					},
					stepAnimation : {
						speed : 600,
						delay : 0,
						easing : ""
					}
				},
				frameAnimation : {
					active : false,
					cssFrom : {
						opacity : 0
					},
					cssTo : {
						opacity : 1
					},
					speed : "slow",
					easing : "linear"
				},
				pixelWorkAround : {
					active : true
				},
				label : {},
				shadows : {
					active : false,
					offset : [ 2, 2 ],
					props : {
						"stroke-width" : 0,
						"stroke-opacity" : 0,
						fill : "black",
						"fill-opacity" : 0.3
					}
				},
				balloons : {
					active : false,
					style : {},
					padding : [ 5, 5 ],
					left : 10,
					line : [ [ 0, 0 ], [ 0, 0 ] ],
					lineProps : {}
				},
				legend : {
					horizontal : false,
					x : "auto",
					y : 10,
					width : "auto",
					height : 20,
					itemWidth : "fixed",
					margins : [ 0, 0, 0, 0 ],
					dotMargins : [ 10, 5 ],
					borderProps : {
						fill : "white",
						stroke : "black",
						"stroke-width" : 1
					},
					dotType : "rect",
					dotWidth : 10,
					dotHeight : 10,
					dotR : 4,
					dotProps : {
						type : "rect",
						width : 10,
						height : 10
					},
					textProps : {
						font : "12px Arial",
						fill : "#000"
					}
				},
				debug : {
					active : false
				}
			},
			nop : 0
		},
		line : {
			template : "common",
			barMargins : 0,
			defaultAxis : {
				normalize : 2,
				min : 0,
				labels : false,
				labelsDistance : 8,
				labelsRotate : 0,
				labelsProps : {
					font : "10px Arial",
					fill : "#000"
				},
				titleDistance : 25,
				titleDistanceIE : 0.75,
				titleProps : {
					font : "12px Arial",
					fill : "#000",
					"font-weight" : "bold"
				}
			},
			axis : {
				x : {
					titleDistanceIE : 1.2
				}
			},
			defaultSeries : {
				type : "line",
				axis : "l",
				cumulative : false,
				rounded : 1,
				lineCenter : "auto",
				plotProps : {
					"stroke-width" : 1,
					"stroke-linejoin" : "round"
				},
				barWidthPerc : 100,
				fill : false,
				fillProps : {
					stroke : "none",
					"stroke-width" : 0,
					"stroke-opacity" : 0,
					opacity : 0.3
				},
				dot : false,
				dotProps : {
					size : 4,
					stroke : "#000",
					zindex : 5
				},
				dotShowOnNull : false,
				mouseareaShowOnNull : false,
				startAnimation : {
					plotPropsFrom : false,
					fillPropsFrom : false,
					dotPropsFrom : false,
					shadowPropsFrom : false
				}
			},
			features : {
				grid : {
					nx : "auto",
					ny : 4,
					draw : false,
					forceBorder : false,
					props : {
						stroke : "#e0e0e0",
						"stroke-width" : 1
					},
					extra : [ 0, 0, 0, 0 ],
					labelsCenter : "auto",
					evenVProps : false,
					oddVProps : false,
					evenHProps : false,
					oddHProps : false,
					ticks : {
						active : [ false, false, false ],
						size : [ 10, 10 ],
						props : {
							stroke : "#e0e0e0",
							"stroke-width" : 1
						}
					}
				}
			},
			nop : 0
		},
		pie : {
			template : "common",
			startAngle : 0,
			clockwise : false,
			valueThresold : 0.006,
			defaultSeries : {}
		},
		funnel : {
			template : "common",
			rh : 0,
			method : "width",
			topSector : 0,
			topSectorProps : {
				fill : "#d0d0d0"
			},
			bottomSector : 0.1,
			bottomSectorProps : {
				fill : "#d0d0d0"
			},
			edgeProps : {
				fill : "#c0c0c0",
				"stroke-width" : 1,
				opacity : 1
			},
			nop : 0
		},
		barline : {
			template : "common",
			direction : "ltr"
		}
	}
})(jQuery);
(function(f) {
	if (!f.elycharts) {
		f.elycharts = {}
	}
	f.elycharts.lastId = 0;
	f.fn.chart = function(h) {
		if (!this.length) {
			return this
		}
		var i = this.data("elycharts_env");
		if (typeof h == "string") {
			if (h.toLowerCase() == "config") {
				return i ? i.opt : false
			}
			if (h.toLowerCase() == "clear") {
				if (i) {
					i.paper.clear();
					this.html("");
					this.data("elycharts_env", false)
				}
			}
		} else {
			if (!i) {
				if (h) {
					h = b(h)
				}
				if (!h || !h.type || !f.elycharts.templates[h.type]) {
					alert("ElyCharts ERROR: chart type is not specified");
					return false
				}
				i = g(this, h);
				e(i, h);
				i.pieces = f.elycharts[i.opt.type].draw(i);
				this.data("elycharts_env", i)
			} else {
				h = d(h, i.opt);
				i.oldopt = c._clone(i.opt);
				i.opt = f.extend(true, i.opt, h);
				i.newopt = h;
				e(i, h);
				i.pieces = f.elycharts[i.opt.type].draw(i)
			}
		}
		return this
	};
	function g(j, h) {
		if (!h.width) {
			h.width = j.width()
		}
		if (!h.height) {
			h.height = j.height()
		}
		var i = {
			id : f.elycharts.lastId++,
			paper : c._RaphaelInstance(j.get()[0], h.width, h.height),
			container : j,
			plots : [],
			opt : h
		};
		i.paper.rect(0, 0, 1, 1).attr({
			opacity : 0
		});
		f.elycharts[h.type].init(i);
		return i
	}
	function e(i, h) {
		if (h.style) {
			i.container.css(h.style)
		}
	}
	function b(h) {
		var i;
		if (f.elysia_charts) {
			if (f.elysia_charts.default_options) {
				for (i in f.elysia_charts.default_options) {
					f.elycharts.templates[i] = f.elysia_charts.default_options[i]
				}
			}
			if (f.elysia_charts.templates) {
				for (i in f.elysia_charts.templates) {
					f.elycharts.templates[i] = f.elysia_charts.templates[i]
				}
			}
		}
		while (h.template) {
			var j = h.template;
			delete h.template;
			h = f.extend(true, {}, f.elycharts.templates[j], h)
		}
		if (!h.template && h.type) {
			h.template = h.type;
			while (h.template) {
				j = h.template;
				delete h.template;
				h = f.extend(true, {}, f.elycharts.templates[j], h)
			}
		}
		return d(h, h)
	}
	function d(h, i) {
		if (h.type == "pie" || h.type == "funnel") {
			if (h.values && f.isArray(h.values) && !f.isArray(h.values[0])) {
				h.values = {
					root : h.values
				}
			}
			if (h.tooltips && f.isArray(h.tooltips)
					&& !f.isArray(h.tooltips[0])) {
				h.tooltips = {
					root : h.tooltips
				}
			}
			if (h.anchors && f.isArray(h.anchors) && !f.isArray(h.anchors[0])) {
				h.anchors = {
					root : h.anchors
				}
			}
			if (h.balloons && f.isArray(h.balloons)
					&& !f.isArray(h.balloons[0])) {
				h.balloons = {
					root : h.balloons
				}
			}
			if (h.legend && f.isArray(h.legend) && !f.isArray(h.legend[0])) {
				h.legend = {
					root : h.legend
				}
			}
		}
		if (h.defaultSeries) {
			var n = i.type != "line" ? i.type
					: (h.defaultSeries.type ? h.defaultSeries.type
							: (i.defaultSeries.type ? i.defaultSeries.type
									: "line"));
			a(h.defaultSeries, n, i);
			if (h.defaultSeries.stackedWith) {
				h.defaultSeries.stacked = h.defaultSeries.stackedWith;
				delete h.defaultSeries.stackedWith
			}
		}
		if (h.series) {
			for ( var l in h.series) {
				var k = i.type != "line" ? i.type
						: (h.series[l].type ? h.series[l].type
								: (i.series[l].type ? i.series[l].type : (n ? n
										: "line")));
				a(h.series[l], k, i);
				if (h.series[l].values) {
					for ( var m in h.series[l].values) {
						a(h.series[l].values[m], k, i)
					}
				}
				if (h.series[l].stackedWith) {
					h.series[l].stacked = h.series[l].stackedWith;
					delete h.series[l].stackedWith
				}
			}
		}
		if (h.type == "line") {
			if (!h.features) {
				h.features = {}
			}
			if (!h.features.grid) {
				h.features.grid = {}
			}
			if (typeof h.gridNX != "undefined") {
				h.features.grid.nx = h.gridNX;
				delete h.gridNX
			}
			if (typeof h.gridNY != "undefined") {
				h.features.grid.ny = h.gridNY;
				delete h.gridNY
			}
			if (typeof h.gridProps != "undefined") {
				h.features.grid.props = h.gridProps;
				delete h.gridProps
			}
			if (typeof h.gridExtra != "undefined") {
				h.features.grid.extra = h.gridExtra;
				delete h.gridExtra
			}
			if (typeof h.gridForceBorder != "undefined") {
				h.features.grid.forceBorder = h.gridForceBorder;
				delete h.gridForceBorder
			}
			if (h.defaultAxis
					&& h.defaultAxis.normalize
					&& (h.defaultAxis.normalize == "auto" || h.defaultAxis.normalize == "autony")) {
				h.defaultAxis.normalize = 2
			}
			if (h.axis) {
				for ( var j in h.axis) {
					if (h.axis[j]
							&& h.axis[j].normalize
							&& (h.axis[j].normalize == "auto" || h.axis[j].normalize == "autony")) {
						h.axis[j].normalize = 2
					}
				}
			}
		}
		return h
	}
	function a(k, h, j) {
		if (k.color) {
			var i = k.color;
			if (!k.plotProps) {
				k.plotProps = {}
			}
			if (h == "line") {
				if (k.plotProps && !k.plotProps.stroke
						&& !j.defaultSeries.plotProps.stroke) {
					k.plotProps.stroke = i
				}
			} else {
				if (k.plotProps && !k.plotProps.fill
						&& !j.defaultSeries.plotProps.fill) {
					k.plotProps.fill = i
				}
			}
			if (!k.tooltip) {
				k.tooltip = {}
			}
			if (!k.tooltip.frameProps && j.defaultSeries.tooltip.frameProps) {
				k.tooltip.frameProps = {}
			}
			if (k.tooltip && k.tooltip.frameProps
					&& !k.tooltip.frameProps.stroke
					&& !j.defaultSeries.tooltip.frameProps.stroke) {
				k.tooltip.frameProps.stroke = i
			}
			if (!k.legend) {
				k.legend = {}
			}
			if (!k.legend.dotProps) {
				k.legend.dotProps = {}
			}
			if (k.legend.dotProps && !k.legend.dotProps.fill) {
				k.legend.dotProps.fill = i
			}
			if (h == "line") {
				if (!k.dotProps) {
					k.dotProps = {}
				}
				if (k.dotProps && !k.dotProps.fill
						&& !j.defaultSeries.dotProps.fill) {
					k.dotProps.fill = i
				}
				if (!k.fillProps) {
					k.fillProps = {}
				}
				if (k.fillProps && !k.fillProps.fill
						&& !j.defaultSeries.fillProps.fill) {
					k.fillProps.fill = i
				}
			}
		}
	}
	f.elycharts.common = {
		_RaphaelInstance : function(l, i, j) {
			var k = Raphael(l, i, j);
			k.customAttributes.slice = function(h, s, o, n, q, p) {
				a1 = 360 - p;
				a2 = 360 - q;
				var m = (a2 - a1) > 180;
				a1 = (a1 % 360) * Math.PI / 180;
				a2 = (a2 % 360) * Math.PI / 180;
				if (a1 == a2 && q != p) {
					a2 += 359.99 * Math.PI / 180
				}
				return {
					path : n ? [
							[ "M", h + o * Math.cos(a1), s + o * Math.sin(a1) ],
							[ "A", o, o, 0, +m, 1, h + o * Math.cos(a2),
									s + o * Math.sin(a2) ],
							[ "L", h + n * Math.cos(a2), s + n * Math.sin(a2) ],
							[ "A", n, n, 0, +m, 0, h + n * Math.cos(a1),
									s + n * Math.sin(a1) ], [ "z" ] ]
							: [
									[ "M", h, s ],
									[ "l", o * Math.cos(a1), o * Math.sin(a1) ],
									[ "A", o, o, 0, +m, 1,
											h + o * Math.cos(a2),
											s + o * Math.sin(a2) ], [ "z" ] ]
				}
			};
			return k
		},
		_clone : function(j) {
			if (j == null || typeof (j) != "object") {
				return j
			}
			if (j.constructor == Array) {
				return [].concat(j)
			}
			var h = new j.constructor();
			for ( var i in j) {
				h[i] = this._clone(j[i])
			}
			return h
		},
		_mergeObjects : function(i, h) {
			return f.extend(true, i, h)
		},
		compactUnits : function(l, j) {
			for ( var k = j.length - 1; k >= 0; k--) {
				var h = l / Math.pow(1000, k + 1);
				if (h >= 1 && h * 10 % 10 == 0) {
					return h + j[k]
				}
			}
			return l
		},
		getElementOriginalAttrs : function(i) {
			var h = f(i.node).data("original-attr");
			if (!h) {
				h = i.attr();
				f(i.node).data("original-attr", h)
			}
			return h
		},
		findInPieces : function(l, n, k, h, m) {
			for ( var j = 0; j < l.length; j++) {
				if ((typeof n == undefined || n == -1 || n == false || l[j].section == n)
						&& (typeof k == undefined || k == -1 || k == false || l[j].serie == k)
						&& (typeof h == undefined || h == -1 || h == false || l[j].index == h)
						&& (typeof m == undefined || m == -1 || m == false || l[j].subSection == m)) {
					return l[j]
				}
			}
			return false
		},
		samePiecePath : function(i, h) {
			return (((typeof i.section == undefined || i.section == -1 || i.section == false) && (typeof h.section == undefined
					|| h.section == -1 || h.section == false)) || i.section == h.section)
					&& (((typeof i.serie == undefined || i.serie == -1 || i.serie == false) && (typeof h.serie == undefined
							|| h.serie == -1 || h.serie == false)) || i.serie == h.serie)
					&& (((typeof i.index == undefined || i.index == -1 || i.index == false) && (typeof h.index == undefined
							|| h.index == -1 || h.index == false)) || i.index == h.index)
					&& (((typeof i.subSection == undefined
							|| i.subSection == -1 || i.subSection == false) && (typeof h.subSection == undefined
							|| h.subSection == -1 || h.subSection == false)) || i.subSection == h.subSection)
		},
		executeIfChanged : function(m, l) {
			if (!m.newopt) {
				return true
			}
			for ( var k = 0; k < l.length; k++) {
				if (l[k][l[k].length - 1] == "*") {
					for ( var h in m.newopt) {
						if (h.substring(0, l[k].length - 1) + "*" == l[k]) {
							return true
						}
					}
				} else {
					if (l[k] == "series"
							&& (m.newopt.series || m.newopt.defaultSeries)) {
						return true
					} else {
						if (l[k] == "axis"
								&& (m.newopt.axis || m.newopt.defaultAxis)) {
							return true
						} else {
							if (l[k].substring(0, 9) == "features.") {
								l[k] = l[k].substring(9);
								if (m.newopt.features
										&& m.newopt.features[l[k]]) {
									return true
								}
							} else {
								if (typeof m.newopt[l[k]] != "undefined") {
									return true
								}
							}
						}
					}
				}
			}
			return false
		},
		areaProps : function(j, m, k, h, l) {
			var i;
			if (!l) {
				if (typeof k == "undefined" || !k) {
					i = j.opt[m.toLowerCase()]
				} else {
					i = this._clone(j.opt["default" + m]);
					if (j.opt[m.toLowerCase()] && j.opt[m.toLowerCase()][k]) {
						i = this._mergeObjects(i, j.opt[m.toLowerCase()][k])
					}
					if ((typeof h != "undefined") && h >= 0 && i.values
							&& i.values[h]) {
						i = this._mergeObjects(i, i.values[h])
					}
				}
			} else {
				i = this._clone(j.opt[l.toLowerCase()]);
				if (typeof k == "undefined" || !k) {
					if (j.opt[m.toLowerCase()]
							&& j.opt[m.toLowerCase()][l.toLowerCase()]) {
						i = this._mergeObjects(i, j.opt[m.toLowerCase()][l
								.toLowerCase()])
					}
				} else {
					if (j.opt["default" + m]
							&& j.opt["default" + m][l.toLowerCase()]) {
						i = this._mergeObjects(i, j.opt["default" + m][l
								.toLowerCase()])
					}
					if (j.opt[m.toLowerCase()] && j.opt[m.toLowerCase()][k]
							&& j.opt[m.toLowerCase()][k][l.toLowerCase()]) {
						i = this._mergeObjects(i, j.opt[m.toLowerCase()][k][l
								.toLowerCase()])
					}
					if (i && (typeof h != "undefined") && h > 0 && i.values
							&& i.values[h]) {
						i = this._mergeObjects(i, i.values[h])
					}
				}
			}
			return i
		},
		absrectpath : function(i, k, h, j, l) {
			return [ [ "M", i, k ], [ "L", i, j ], [ "L", h, j ],
					[ "L", h, k ], [ "z" ] ]
		},
		linepathAnchors : function(j, i, u, s, p, o, l) {
			var h = 1;
			if (l && l.length) {
				h = l[1];
				l = l[0]
			}
			if (!l) {
				l = 1
			}
			var m = (u - j) / 2, k = (p - u) / 2, v = Math.atan((u - j)
					/ Math.abs(s - i)), t = Math
					.atan((p - u) / Math.abs(s - o));
			v = i < s ? Math.PI - v : v;
			t = o < s ? Math.PI - t : t;
			if (h == 2) {
				if ((v - Math.PI / 2) * (t - Math.PI / 2) > 0) {
					v = 0;
					t = 0
				} else {
					if (Math.abs(v - Math.PI / 2) < Math.abs(t - Math.PI / 2)) {
						t = Math.PI - v
					} else {
						v = Math.PI - t
					}
				}
			}
			var n = Math.PI / 2 - ((v + t) % (Math.PI * 2)) / 2, x = m
					* Math.sin(n + v) / 2 / l, r = m * Math.cos(n + v) / 2 / l, w = k
					* Math.sin(n + t) / 2 / l, q = k * Math.cos(n + t) / 2 / l;
			return {
				x1 : u - x,
				y1 : s + r,
				x2 : u + w,
				y2 : s + q
			}
		},
		linepathRevert : function(l) {
			var h = [], k = false;
			for ( var j = l.length - 1; j >= 0; j--) {
				switch (l[j][0]) {
				case "M":
				case "L":
					if (!k) {
						h.push([ h.length ? "L" : "M", l[j][1], l[j][2] ])
					} else {
						h
								.push([ "C", k[0], k[1], k[2], k[3], l[j][1],
										l[j][2] ])
					}
					k = false;
					break;
				case "C":
					if (!k) {
						h.push([ h.length ? "L" : "M", l[j][5], l[j][6] ])
					} else {
						h
								.push([ "C", k[0], k[1], k[2], k[3], l[j][5],
										l[j][6] ])
					}
					k = [ l[j][3], l[j][4], l[j][1], l[j][2] ]
				}
			}
			return h
		},
		linepath : function(r, h) {
			var s = [];
			if (h) {
				var m = false;
				for ( var k = 0, n = r.length - 1; k < n; k++) {
					if (k) {
						var q = this.linepathAnchors(r[k - 1][0], r[k - 1][1],
								r[k][0], r[k][1], r[k + 1][0], r[k + 1][1], h);
						s
								.push([ "C", m[0], m[1], q.x1, q.y1, r[k][0],
										r[k][1] ]);
						m = [ q.x2, q.y2 ]
					} else {
						s.push([ "M", r[k][0], r[k][1] ]);
						m = [ r[k][0], r[k][1] ]
					}
				}
				if (m) {
					s.push([ "C", m[0], m[1], r[n][0], r[n][1], r[n][0],
							r[n][1] ])
				}
			} else {
				for ( var l = 0; l < r.length; l++) {
					var p = r[l][0], o = r[l][1];
					s.push([ l == 0 ? "M" : "L", p, o ])
				}
			}
			return s
		},
		lineareapath : function(k, j, h) {
			var n = this.linepath(k, h), m = this.linepathRevert(this.linepath(
					j, h));
			for ( var l = 0; l < m.length; l++) {
				n.push(!l ? [ "L", m[0][1], m[0][2] ] : m[l])
			}
			if (n.length) {
				n.push([ "z" ])
			}
			return n
		},
		getX : function(h, i) {
			switch (h[0]) {
			case "CIRCLE":
				return h[1];
			case "RECT":
				return h[!i ? 1 : 3];
			case "SLICE":
				return h[1];
			default:
				return h[h.length - 2]
			}
		},
		getY : function(h, i) {
			switch (h[0]) {
			case "CIRCLE":
				return h[2];
			case "RECT":
				return h[!i ? 2 : 4];
			case "SLICE":
				return h[2];
			default:
				return h[h.length - 1]
			}
		},
		getCenter : function(k, l) {
			if (!k.path) {
				return false
			}
			if (k.path.length == 0) {
				return false
			}
			if (!l) {
				l = [ 0, 0 ]
			}
			if (k.center) {
				return [ k.center[0] + l[0], k.center[1] + l[1] ]
			}
			var j = k.path[0];
			switch (j[0]) {
			case "CIRCLE":
				return [ j[1] + l[0], j[2] + l[1] ];
			case "RECT":
				return [ (j[1] + j[2]) / 2 + l[0], (j[3] + j[4]) / 2 + l[1] ];
			case "SLICE":
				var i = j[5] + (j[6] - j[5]) / 2;
				var h = Math.PI / 180;
				return [
						j[1] + (j[4] + ((j[3] - j[4]) / 2) + l[0])
								* Math.cos(-i * h) + l[1]
								* Math.cos((-i - 90) * h),
						j[2] + (j[4] + ((j[3] - j[4]) / 2) + l[0])
								* Math.sin(-i * h) + l[1]
								* Math.sin((-i - 90) * h) ]
			}
			alert("ElyCharts: getCenter with complex path not supported");
			return false
		},
		movePath : function(u, B, s, q, h) {
			var k = [], t;
			if (B.length == 1 && B[0][0] == "RECT") {
				return [ [ B[0][0], this._movePathX(u, B[0][1], s[0], q),
						this._movePathY(u, B[0][2], s[1], q),
						this._movePathX(u, B[0][3], s[0], q),
						this._movePathY(u, B[0][4], s[1], q) ] ]
			}
			if (B.length == 1 && B[0][0] == "SLICE") {
				if (!h) {
					var A = B[0][5] + (B[0][6] - B[0][5]) / 2;
					var v = Math.PI / 180;
					var z = B[0][1] + s[0] * Math.cos(-A * v) + s[1]
							* Math.cos((-A - 90) * v);
					var w = B[0][2] + s[0] * Math.sin(-A * v) + s[1]
							* Math.cos((-A - 90) * v);
					return [ [ B[0][0], z, w, B[0][3], B[0][4], B[0][5],
							B[0][6] ] ]
				} else {
					return [ [ B[0][0], B[0][1] + s[0], B[0][2] + s[1],
							B[0][3], B[0][4], B[0][5], B[0][6] ] ]
				}
			}
			if (B.length == 1 && B[0][0] == "CIRCLE") {
				return [ [ B[0][0], B[0][1] + s[0], B[0][2] + s[1], B[0][3] ] ]
			}
			if (B.length == 1 && B[0][0] == "TEXT") {
				return [ [ B[0][0], B[0][1], B[0][2] + s[0], B[0][3] + s[1] ] ]
			}
			if (B.length == 1 && B[0][0] == "LINE") {
				for (t = 0; t < B[0][1].length; t++) {
					k.push([ this._movePathX(u, B[0][1][t][0], s[0], q),
							this._movePathY(u, B[0][1][t][1], s[1], q) ])
				}
				return [ [ B[0][0], k, B[0][2] ] ]
			}
			if (B.length == 1 && B[0][0] == "LINEAREA") {
				for (t = 0; t < B[0][1].length; t++) {
					k.push([ this._movePathX(u, B[0][1][t][0], s[0], q),
							this._movePathY(u, B[0][1][t][1], s[1], q) ])
				}
				var m = [];
				for (t = 0; t < B[0][2].length; t++) {
					m.push([ this._movePathX(u, B[0][2][t][0], s[0], q),
							this._movePathY(u, B[0][2][t][1], s[1], q) ])
				}
				return [ [ B[0][0], k, m, B[0][3] ] ]
			}
			var n = [];
			for ( var r = 0; r < B.length; r++) {
				var l = B[r];
				switch (l[0]) {
				case "M":
				case "m":
				case "L":
				case "l":
				case "T":
				case "t":
					n.push([ l[0], this._movePathX(u, l[1], s[0], q),
							this._movePathY(u, l[2], s[1], q) ]);
					break;
				case "A":
				case "a":
					n.push([ l[0], l[1], l[2], l[3], l[4], l[5],
							this._movePathX(u, l[6], s[0], q),
							this._movePathY(u, l[7], s[1], q) ]);
					break;
				case "C":
				case "c":
					n.push([ l[0], l[1], l[2], l[3], l[4],
							this._movePathX(u, l[5], s[0], q),
							this._movePathY(u, l[6], s[1], q) ]);
					break;
				case "S":
				case "s":
				case "Q":
				case "q":
					n.push([ l[0], l[1], l[2],
							this._movePathX(u, l[3], s[0], q),
							this._movePathY(u, l[4], s[1], q) ]);
					break;
				case "z":
				case "Z":
					n.push([ l[0] ]);
					break
				}
			}
			return n
		},
		_movePathX : function(j, h, i, k) {
			if (!k) {
				return h + i
			}
			h = h + i;
			return i > 0 && h > j.opt.width - j.opt.margins[1] ? j.opt.width
					- j.opt.margins[1]
					: (i < 0 && h < j.opt.margins[3] ? j.opt.margins[3] : h)
		},
		_movePathY : function(i, k, h, j) {
			if (!j) {
				return k + h
			}
			k = k + h;
			return h > 0 && k > i.opt.height - i.opt.margins[2] ? i.opt.height
					- i.opt.margins[2]
					: (h < 0 && k < i.opt.margins[0] ? i.opt.margins[0] : k)
		},
		getSVGProps : function(l, h) {
			var j = h ? h : {};
			var i = "path", k;
			if (l.length == 1 && l[0][0] == "RECT") {
				k = c.absrectpath(l[0][1], l[0][2], l[0][3], l[0][4], l[0][5])
			} else {
				if (l.length == 1 && l[0][0] == "SLICE") {
					i = "slice";
					k = [ l[0][1], l[0][2], l[0][3], l[0][4], l[0][5], l[0][6] ]
				} else {
					if (l.length == 1 && l[0][0] == "LINE") {
						k = c.linepath(l[0][1], l[0][2])
					} else {
						if (l.length == 1 && l[0][0] == "LINEAREA") {
							k = c.lineareapath(l[0][1], l[0][2], l[0][3])
						} else {
							if (l.length == 1
									&& (l[0][0] == "CIRCLE"
											|| l[0][0] == "TEXT"
											|| l[0][0] == "DOMELEMENT" || l[0][0] == "RELEMENT")) {
								return h ? h : false
							} else {
								k = l
							}
						}
					}
				}
			}
			if (i != "path" || (k && k.length > 0)) {
				j[i] = k
			} else {
				if (!h) {
					return false
				}
			}
			return j
		},
		showPath : function(l, m, n) {
			m = this.preparePathShow(l, m);
			if (!n) {
				n = l.paper
			}
			if (m.length == 1 && m[0][0] == "CIRCLE") {
				return n.circle(m[0][1], m[0][2], m[0][3])
			}
			if (m.length == 1 && m[0][0] == "TEXT") {
				return n.text(m[0][2], m[0][3], m[0][1])
			}
			var j = this.getSVGProps(m);
			var i = false;
			for ( var h in j) {
				i = true;
				break
			}
			return j && i ? n.path().attr(j) : false
		},
		preparePathShow : function(h, i) {
			return h.opt.features.pixelWorkAround.active ? this.movePath(h,
					this._clone(i), [ 0.5, 0.5 ], false, true) : i
		},
		getPieceFullAttr : function(i, h) {
			if (!h.fullattr) {
				h.fullattr = this._clone(h.attr);
				if (h.path) {
					switch (h.path[0][0]) {
					case "CIRCLE":
						var j = this.preparePathShow(i, h.path);
						h.fullattr.cx = j[0][1];
						h.fullattr.cy = j[0][2];
						h.fullattr.r = j[0][3];
						break;
					case "TEXT":
					case "DOMELEMENT":
					case "RELEMENT":
						break;
					default:
						h.fullattr = this.getSVGProps(this.preparePathShow(i,
								h.path), h.fullattr)
					}
				}
				if (typeof h.fullattr.opacity == "undefined") {
					h.fullattr.opacity = 1
				}
			}
			return h.fullattr
		},
		show : function(l, m) {
			m = this.getSortedPathData(m);
			c.animationStackStart(l);
			var h = false;
			for ( var j = 0; j < m.length; j++) {
				var k = m[j];
				if (typeof k.show == "undefined" || k.show) {
					k.element = k.animation && k.animation.element ? k.animation.element
							: false;
					k.hide = false;
					if (!k.path) {
						k.hide = true
					} else {
						if (k.path.length == 1 && k.path[0][0] == "TEXT") {
							if (k.element) {
								c.animationStackPush(l, k, k.element, false,
										k.animation.speed, k.animation.easing,
										k.animation.delay, true);
								k.animation.element = false
							}
							k.element = this.showPath(l, k.path);
							if (k.element && l.newopt && h) {
								k.element.insertAfter(h)
							}
						} else {
							if (k.path.length == 1
									&& k.path[0][0] == "DOMELEMENT") {
							} else {
								if (k.path.length == 1
										&& k.path[0][0] == "RELEMENT") {
									if (k.element) {
										c.animationStackPush(l, k, k.element,
												false, k.animation.speed,
												k.animation.easing,
												k.animation.delay, true);
										k.animation.element = false
									}
									k.element = k.path[0][1];
									if (k.element && h) {
										k.element.insertAfter(h)
									}
									k.attr = false
								} else {
									if (!k.element) {
										if (k.animation
												&& k.animation.startPath
												&& k.animation.startPath.length) {
											k.element = this.showPath(l,
													k.animation.startPath)
										} else {
											k.element = this
													.showPath(l, k.path)
										}
										if (k.element && l.newopt && h) {
											k.element.insertAfter(h)
										}
									}
								}
							}
						}
					}
					if (k.element) {
						if (k.attr) {
							if (!k.animation) {
								if (typeof k.attr.opacity == "undefined") {
									k.attr.opacity = 1
								}
								k.element.attr(k.attr)
							} else {
								if (!k.animation.element) {
									k.element
											.attr(k.animation.startAttr ? k.animation.startAttr
													: k.attr)
								}
								c.animationStackPush(l, k, k.element, this
										.getPieceFullAttr(l, k),
										k.animation.speed, k.animation.easing,
										k.animation.delay)
							}
						} else {
							if (k.hide) {
								c.animationStackPush(l, k, k.element, false,
										k.animation.speed, k.animation.easing,
										k.animation.delay)
							}
						}
						h = k.element
					}
				}
			}
			c.animationStackEnd(l)
		},
		getSortedPathData : function(m) {
			res = [];
			for ( var k = 0; k < m.length; k++) {
				var l = m[k];
				if (l.paths) {
					for ( var h = 0; h < l.paths.length; h++) {
						l.paths[h].pos = res.length;
						l.paths[h].parent = l;
						res.push(l.paths[h])
					}
				} else {
					l.pos = res.length;
					l.parent = false;
					res.push(l)
				}
			}
			return res.sort(function(j, i) {
				var o = typeof j.attr == "undefined"
						|| typeof j.attr.zindex == "undefined" ? (!j.parent
						|| typeof j.parent.attr == "undefined"
						|| typeof j.parent.attr.zindex == "undefined" ? 0
						: j.parent.attr.zindex) : j.attr.zindex;
				var n = typeof i.attr == "undefined"
						|| typeof i.attr.zindex == "undefined" ? (!i.parent
						|| typeof i.parent.attr == "undefined"
						|| typeof i.parent.attr.zindex == "undefined" ? 0
						: i.parent.attr.zindex) : i.attr.zindex;
				return o < n ? -1 : (o > n ? 1 : (j.pos < i.pos ? -1
						: (j.pos > i.pos ? 1 : 0)))
			})
		},
		animationStackStart : function(h) {
			if (!h.animationStackDepth || h.animationStackDepth == 0) {
				h.animationStackDepth = 0;
				h.animationStack = {}
			}
			h.animationStackDepth++
		},
		animationStackEnd : function(i) {
			i.animationStackDepth--;
			if (i.animationStackDepth == 0) {
				for ( var h in i.animationStack) {
					this._animationStackAnimate(i.animationStack[h], h);
					delete i.animationStack[h]
				}
				i.animationStack = {}
			}
		},
		animationStackPush : function(l, k, j, h, n, o, i, m) {
			if (typeof i == "undefined") {
				i = 0
			}
			if (!l.animationStackDepth || l.animationStackDepth == 0) {
				this._animationStackAnimate([ {
					piece : k,
					object : j,
					props : h,
					speed : n,
					easing : o,
					force : m
				} ], i)
			} else {
				if (!l.animationStack[i]) {
					l.animationStack[i] = []
				}
				l.animationStack[i].push({
					piece : k,
					object : j,
					props : h,
					speed : n,
					easing : o,
					force : m
				})
			}
		},
		_animationStackAnimate : function(h, j) {
			var i = this;
			var k = function() {
				var m = h.pop();
				i._animationStackAnimateElement(m);
				while (h.length > 0) {
					var l = h.pop();
					i._animationStackAnimateElement(l, m)
				}
			};
			if (j > 0) {
				setTimeout(k, j)
			} else {
				k()
			}
		},
		_animationStackAnimateElement : function(h, j) {
			if (h.force || !h.piece.animationInProgress) {
				h.object.stop();
				if (!h.props) {
					h.props = {
						opacity : 0
					}
				}
				if (!h.speed || h.speed <= 0) {
					h.object.attr(h.props);
					h.piece.animationInProgress = false;
					return
				}
				h.piece.animationInProgress = true;
				var i = function() {
					h.piece.animationInProgress = false
				};
				if (j) {
					h.object.animateWith(j, h.props, h.speed,
							h.easing ? h.easing : "linear", i)
				} else {
					h.object.animate(h.props, h.speed, h.easing ? h.easing
							: "linear", i)
				}
			}
		}
	};
	var c = f.elycharts.common;
	f.elycharts.featuresmanager = {
		managers : [],
		initialized : false,
		register : function(i, h) {
			f.elycharts.featuresmanager.managers.push([ h, i ]);
			f.elycharts.featuresmanager.initialized = false
		},
		init : function() {
			f.elycharts.featuresmanager.managers.sort(function(i, h) {
				return i[0] < h[0] ? -1 : (i[0] == h[0] ? 0 : 1)
			});
			f.elycharts.featuresmanager.initialized = true
		},
		beforeShow : function(j, k) {
			if (!f.elycharts.featuresmanager.initialized) {
				this.init()
			}
			for ( var h = 0; h < f.elycharts.featuresmanager.managers.length; h++) {
				if (f.elycharts.featuresmanager.managers[h][1].beforeShow) {
					f.elycharts.featuresmanager.managers[h][1].beforeShow(j, k)
				}
			}
		},
		afterShow : function(j, k) {
			if (!f.elycharts.featuresmanager.initialized) {
				this.init()
			}
			for ( var h = 0; h < f.elycharts.featuresmanager.managers.length; h++) {
				if (f.elycharts.featuresmanager.managers[h][1].afterShow) {
					f.elycharts.featuresmanager.managers[h][1].afterShow(j, k)
				}
			}
		},
		onMouseOver : function(l, m, j, h) {
			if (!f.elycharts.featuresmanager.initialized) {
				this.init()
			}
			for ( var k = 0; k < f.elycharts.featuresmanager.managers.length; k++) {
				if (f.elycharts.featuresmanager.managers[k][1].onMouseOver) {
					f.elycharts.featuresmanager.managers[k][1].onMouseOver(l,
							m, j, h)
				}
			}
		},
		onMouseOut : function(l, m, j, h) {
			if (!f.elycharts.featuresmanager.initialized) {
				this.init()
			}
			for ( var k = 0; k < f.elycharts.featuresmanager.managers.length; k++) {
				if (f.elycharts.featuresmanager.managers[k][1].onMouseOut) {
					f.elycharts.featuresmanager.managers[k][1].onMouseOut(l, m,
							j, h)
				}
			}
		},
		onMouseEnter : function(l, m, j, h) {
			if (!f.elycharts.featuresmanager.initialized) {
				this.init()
			}
			for ( var k = 0; k < f.elycharts.featuresmanager.managers.length; k++) {
				if (f.elycharts.featuresmanager.managers[k][1].onMouseEnter) {
					f.elycharts.featuresmanager.managers[k][1].onMouseEnter(l,
							m, j, h)
				}
			}
		},
		onMouseChanged : function(l, m, j, h) {
			if (!f.elycharts.featuresmanager.initialized) {
				this.init()
			}
			for ( var k = 0; k < f.elycharts.featuresmanager.managers.length; k++) {
				if (f.elycharts.featuresmanager.managers[k][1].onMouseChanged) {
					f.elycharts.featuresmanager.managers[k][1].onMouseChanged(
							l, m, j, h)
				}
			}
		},
		onMouseExit : function(l, m, j, h) {
			if (!f.elycharts.featuresmanager.initialized) {
				this.init()
			}
			for ( var k = 0; k < f.elycharts.featuresmanager.managers.length; k++) {
				if (f.elycharts.featuresmanager.managers[k][1].onMouseExit) {
					f.elycharts.featuresmanager.managers[k][1].onMouseExit(l,
							m, j, h)
				}
			}
		}
	}
})(jQuery);
(function(c) {
	var a = c.elycharts.featuresmanager;
	var b = c.elycharts.common;
	c.elycharts.anchormanager = {
		afterShow : function(f, h) {
			if (!f.opt.anchors) {
				return
			}
			if (!f.anchorBinds) {
				f.anchorBinds = []
			}
			while (f.anchorBinds.length) {
				var d = f.anchorBinds.pop();
				c(d[0]).unbind(d[1], d[2])
			}
			for ( var e = 0; e < f.mouseAreas.length; e++) {
				var g = f.mouseAreas[e].piece ? f.mouseAreas[e].piece.serie
						: false;
				var j;
				if (g) {
					j = f.opt.anchors[g][f.mouseAreas[e].index]
				} else {
					j = f.opt.anchors[f.mouseAreas[e].index]
				}
				if (j && f.mouseAreas[e].props.anchor
						&& f.mouseAreas[e].props.anchor.highlight) {
					(function(m, k, n, l) {
						var i = function() {
							l.anchorMouseOver(m, k)
						};
						var o = function() {
							l.anchorMouseOut(m, k)
						};
						if (!m.mouseAreas[e].props.anchor.useMouseEnter) {
							m.anchorBinds.push([ n, "mouseover", i ]);
							m.anchorBinds.push([ n, "mouseout", o ]);
							c(n).mouseover(i);
							c(n).mouseout(o)
						} else {
							m.anchorBinds.push([ n, "mouseenter", i ]);
							m.anchorBinds.push([ n, "mouseleave", o ]);
							c(n).mouseenter(i);
							c(n).mouseleave(o)
						}
					})(f, f.mouseAreas[e], j, this)
				}
			}
			f.onAnchors = []
		},
		anchorMouseOver : function(e, d) {
			c.elycharts.highlightmanager.onMouseOver(e, d.piece ? d.piece.serie
					: false, d.index, d)
		},
		anchorMouseOut : function(e, d) {
			c.elycharts.highlightmanager.onMouseOut(e, d.piece ? d.piece.serie
					: false, d.index, d)
		},
		onMouseOver : function(f, g, e, d) {
			if (!f.opt.anchors) {
				return
			}
			if (d.props.anchor && d.props.anchor.addClass) {
				var h;
				if (g) {
					h = f.opt.anchors[g][d.index]
				} else {
					h = f.opt.anchors[d.index]
				}
				if (h) {
					c(h).addClass(d.props.anchor.addClass);
					f.onAnchors.push([ h, d.props.anchor.addClass ])
				}
			}
		},
		onMouseOut : function(f, g, e, d) {
			if (!f.opt.anchors) {
				return
			}
			while (f.onAnchors.length > 0) {
				var h = f.onAnchors.pop();
				c(h[0]).removeClass(h[1])
			}
		}
	};
	c.elycharts.featuresmanager.register(c.elycharts.anchormanager, 30)
})(jQuery);
(function(b) {
	var a = b.elycharts.common;
	b.elycharts.animationmanager = {
		beforeShow : function(c, d) {
			if (!c.newopt) {
				this.startAnimation(c, d)
			} else {
				this.stepAnimation(c, d)
			}
		},
		stepAnimation : function(c, d) {
			d = this._stepAnimationInt(c, c.pieces, d)
		},
		_stepAnimationInt : function(m, d, c, o, k, h) {
			var f = [], l;
			var e = 0;
			for ( var g = 0; g < d.length; g++) {
				var n = a
						.areaProps(m, o ? o : d[g].section, k ? k : d[g].serie);
				if (n && n.stepAnimation) {
					n = n.stepAnimation
				} else {
					n = m.opt.features.animation.stepAnimation
				}
				if (c && (e >= c.length || !a.samePiecePath(d[g], c[e]))) {
					if (!h) {
						d[g].show = false;
						f.push(d[g])
					} else {
						l = {
							path : false,
							attr : false,
							show : true
						};
						l.animation = {
							element : d[g].element ? d[g].element : false,
							speed : n && n.speed ? n.speed : 300,
							easing : n && n.easing ? n.easing : "",
							delay : n && n.delay ? n.delay : 0
						};
						f.push(l)
					}
				} else {
					l = c ? c[e] : {
						path : false,
						attr : false
					};
					l.show = true;
					if (typeof d[g].paths == "undefined") {
						l.animation = {
							element : d[g].element ? d[g].element : false,
							speed : n && n.speed ? n.speed : 300,
							easing : n && n.easing ? n.easing : "",
							delay : n && n.delay ? n.delay : 0
						};
						if (!d[g].element) {
							l.animation.startAttr = {
								opacity : 0
							}
						}
					} else {
						l.paths = this._stepAnimationInt(m, d[g].paths,
								c[e].paths, d[g].section, d[g].serie, true)
					}
					f.push(l);
					e++
				}
			}
			if (c) {
				for (; e < c.length; e++) {
					f.push(c[e])
				}
			}
			return f
		},
		startAnimation : function(e, f) {
			for ( var c = 0; c < f.length; c++) {
				if (f[c].paths || f[c].path) {
					var d = a.areaProps(e, f[c].section, f[c].serie);
					if (d && d.startAnimation) {
						d = d.startAnimation
					} else {
						d = e.opt.features.animation.startAnimation
					}
					if (d.active) {
						if (d.type == "simple" || f[c].section != "Series") {
							this.animationSimple(e, d, f[c])
						}
						if (d.type == "grow") {
							this.animationGrow(e, d, f[c])
						}
						if (d.type == "avg") {
							this.animationAvg(e, d, f[c])
						}
						if (d.type == "reg") {
							this.animationReg(e, d, f[c])
						}
					}
				}
			}
		},
		_animationPiece : function(d, f, e) {
			if (d.paths) {
				for ( var c = 0; c < d.paths.length; c++) {
					this._animationPiece(d.paths[c], f, e)
				}
			} else {
				if (d.path) {
					d.animation = {
						speed : f.speed,
						easing : f.easing,
						delay : f.delay,
						startPath : [],
						startAttr : a._clone(d.attr)
					};
					if (f.propsTo) {
						d.attr = a._mergeObjects(d.attr, f.propsTo)
					}
					if (f.propsFrom) {
						d.animation.startAttr = a._mergeObjects(
								d.animation.startAttr, f.propsFrom)
					}
					if (e && f[e.toLowerCase() + "PropsFrom"]) {
						d.animation.startAttr = a._mergeObjects(
								d.animation.startAttr, f[e.toLowerCase()
										+ "PropsFrom"])
					}
					if (typeof d.animation.startAttr.opacity != "undefined"
							&& typeof d.attr.opacity == "undefined") {
						d.attr.opacity = 1
					}
				}
			}
		},
		animationSimple : function(e, d, c) {
			this._animationPiece(c, d, c.subSection)
		},
		animationGrow : function(g, f, e) {
			this._animationPiece(e, f, e.subSection);
			var d, h, j;
			switch (g.opt.type) {
			case "line":
				j = g.opt.height - g.opt.margins[2];
				switch (e.subSection) {
				case "Plot":
					if (!e.paths) {
						h = [ "LINE", [], e.path[0][2] ];
						for (d = 0; d < e.path[0][1].length; d++) {
							h[1].push([ e.path[0][1][d][0], j ])
						}
						e.animation.startPath.push(h)
					} else {
						for (d = 0; d < e.paths.length; d++) {
							if (e.paths[d].path) {
								e.paths[d].animation.startPath.push([ "RECT",
										e.paths[d].path[0][1], j,
										e.paths[d].path[0][3], j ])
							}
						}
					}
					break;
				case "Fill":
					h = [ "LINEAREA", [], [], e.path[0][3] ];
					for (d = 0; d < e.path[0][1].length; d++) {
						h[1].push([ e.path[0][1][d][0], j ]);
						h[2].push([ e.path[0][2][d][0], j ])
					}
					e.animation.startPath.push(h);
					break;
				case "Dot":
					for (d = 0; d < e.paths.length; d++) {
						if (e.paths[d].path) {
							e.paths[d].animation.startPath.push([ "CIRCLE",
									e.paths[d].path[0][1], j,
									e.paths[d].path[0][3] ])
						}
					}
					break
				}
				break;
			case "pie":
				if (e.subSection == "Plot") {
					for (d = 0; d < e.paths.length; d++) {
						if (e.paths[d].path && e.paths[d].path[0][0] == "SLICE") {
							e.paths[d].animation.startPath.push([
									"SLICE",
									e.paths[d].path[0][1],
									e.paths[d].path[0][2],
									e.paths[d].path[0][4]
											+ e.paths[d].path[0][3] * 0.1,
									e.paths[d].path[0][4],
									e.paths[d].path[0][5],
									e.paths[d].path[0][6] ])
						}
					}
				}
				break;
			case "funnel":
				alert("Unsupported animation GROW for funnel");
				break;
			case "barline":
				var c;
				if (e.section == "Series" && e.subSection == "Plot") {
					if (!f.subType) {
						c = g.opt.direction != "rtl" ? g.opt.margins[3]
								: g.opt.width - g.opt.margins[1]
					} else {
						if (f.subType == 1) {
							c = g.opt.direction != "rtl" ? g.opt.width
									- g.opt.margins[1] : g.opt.margins[3]
						}
					}
					for (d = 0; d < e.paths.length; d++) {
						if (e.paths[d].path) {
							if (!f.subType || f.subType == 1) {
								e.paths[d].animation.startPath.push([ "RECT",
										c, e.paths[d].path[0][2], c,
										e.paths[d].path[0][4],
										e.paths[d].path[0][5] ])
							} else {
								j = (e.paths[d].path[0][2] + e.paths[d].path[0][4]) / 2;
								e.paths[d].animation.startPath.push([ "RECT",
										e.paths[d].path[0][1], j,
										e.paths[d].path[0][3], j,
										e.paths[d].path[0][5] ])
							}
						}
					}
				}
				break
			}
		},
		_animationAvgXYArray : function(c) {
			var e = [], f = 0, d;
			for (d = 0; d < c.length; d++) {
				f += c[d][1]
			}
			f = f / c.length;
			for (d = 0; d < c.length; d++) {
				e.push([ c[d][0], f ])
			}
			return e
		},
		animationAvg : function(g, f, e) {
			this._animationPiece(e, f, e.subSection);
			var h = 0, d, c;
			switch (g.opt.type) {
			case "line":
				switch (e.subSection) {
				case "Plot":
					if (!e.paths) {
						e.animation.startPath.push([ "LINE",
								this._animationAvgXYArray(e.path[0][1]),
								e.path[0][2] ])
					} else {
						c = 0;
						for (d = 0; d < e.paths.length; d++) {
							if (e.paths[d].path) {
								c++;
								h += e.paths[d].path[0][2]
							}
						}
						h = h / c;
						for (d = 0; d < e.paths.length; d++) {
							if (e.paths[d].path) {
								e.paths[d].animation.startPath.push([ "RECT",
										e.paths[d].path[0][1], h,
										e.paths[d].path[0][3],
										e.paths[d].path[0][4] ])
							}
						}
					}
					break;
				case "Fill":
					e.animation.startPath.push([ "LINEAREA",
							this._animationAvgXYArray(e.path[0][1]),
							this._animationAvgXYArray(e.path[0][2]),
							e.path[0][3] ]);
					break;
				case "Dot":
					c = 0;
					for (d = 0; d < e.paths.length; d++) {
						if (e.paths[d].path) {
							c++;
							h += e.paths[d].path[0][2]
						}
					}
					h = h / c;
					for (d = 0; d < e.paths.length; d++) {
						if (e.paths[d].path) {
							e.paths[d].animation.startPath.push([ "CIRCLE",
									e.paths[d].path[0][1], h,
									e.paths[d].path[0][3] ])
						}
					}
					break
				}
				break;
			case "pie":
				var j = 360 / e.paths.length;
				if (e.subSection == "Plot") {
					for (d = 0; d < e.paths.length; d++) {
						if (e.paths[d].path && e.paths[d].path[0][0] == "SLICE") {
							e.paths[d].animation.startPath
									.push([ "SLICE", e.paths[d].path[0][1],
											e.paths[d].path[0][2],
											e.paths[d].path[0][3],
											e.paths[d].path[0][4], d * j,
											(d + 1) * j ])
						}
					}
				}
				break;
			case "funnel":
				alert("Unsupported animation AVG for funnel");
				break;
			case "barline":
				alert("Unsupported animation AVG for barline");
				break
			}
		},
		_animationRegXYArray : function(d) {
			var g = [];
			var j = d.length;
			var h = d[0][1];
			var f = d[j - 1][1];
			for ( var e = 0; e < d.length; e++) {
				g.push([ d[e][0], h + (f - h) / (j - 1) * e ])
			}
			return g
		},
		animationReg : function(j, h, g) {
			this._animationPiece(g, h, g.subSection);
			var e, k, f, d;
			switch (j.opt.type) {
			case "line":
				switch (g.subSection) {
				case "Plot":
					if (!g.paths) {
						g.animation.startPath.push([ "LINE",
								this._animationRegXYArray(g.path[0][1]),
								g.path[0][2] ])
					} else {
						k = g.paths.length;
						if (k > 1) {
							for (e = 0; !g.paths[e].path && e < g.paths.length; e++) {
							}
							f = g.paths[e].path ? a.getY(g.paths[e].path[0])
									: 0;
							for (e = g.paths.length - 1; !g.paths[e].path
									&& e >= 0; e--) {
							}
							d = g.paths[e].path ? a.getY(g.paths[e].path[0])
									: 0;
							for (e = 0; e < g.paths.length; e++) {
								if (g.paths[e].path) {
									g.paths[e].animation.startPath.push([
											"RECT", g.paths[e].path[0][1],
											f + (d - f) / (k - 1) * e,
											g.paths[e].path[0][3],
											g.paths[e].path[0][4] ])
								}
							}
						}
					}
					break;
				case "Fill":
					g.animation.startPath.push([ "LINEAREA",
							this._animationRegXYArray(g.path[0][1]),
							this._animationRegXYArray(g.path[0][2]),
							g.path[0][3] ]);
					break;
				case "Dot":
					k = g.paths.length;
					if (k > 1) {
						for (e = 0; !g.paths[e].path && e < g.paths.length; e++) {
						}
						f = g.paths[e].path ? a.getY(g.paths[e].path[0]) : 0;
						for (e = g.paths.length - 1; !g.paths[e].path && e >= 0; e--) {
						}
						d = g.paths[e].path ? a.getY(g.paths[e].path[0]) : 0;
						for (e = 0; e < g.paths.length; e++) {
							if (g.paths[e].path) {
								g.paths[e].animation.startPath.push([ "CIRCLE",
										g.paths[e].path[0][1],
										f + (d - f) / (k - 1) * e,
										g.paths[e].path[0][3] ])
							}
						}
					}
					break
				}
				break;
			case "pie":
				alert("Unsupported animation REG for pie");
				break;
			case "funnel":
				alert("Unsupported animation REG for funnel");
				break;
			case "barline":
				alert("Unsupported animation REG for barline");
				break
			}
		}
	};
	b.elycharts.featuresmanager.register(b.elycharts.animationmanager, 10);
	b.elycharts.frameanimationmanager = {
		beforeShow : function(c, d) {
			if (c.opt.features.frameAnimation.active) {
				b(c.container.get(0))
						.css(c.opt.features.frameAnimation.cssFrom)
			}
		},
		afterShow : function(c, d) {
			if (c.opt.features.frameAnimation.active) {
				c.container.animate(c.opt.features.frameAnimation.cssTo,
						c.opt.features.frameAnimation.speed,
						c.opt.features.frameAnimation.easing)
			}
		}
	};
	b.elycharts.featuresmanager.register(b.elycharts.frameanimationmanager, 90)
})(jQuery);
(function(b) {
	var a = b.elycharts.common;
	b.elycharts.highlightmanager = {
		removeHighlighted : function(d, c) {
			if (d.highlighted) {
				while (d.highlighted.length > 0) {
					var e = d.highlighted.pop();
					if (e.piece) {
						if (c) {
							a.animationStackPush(d, e.piece, e.piece.element, a
									.getPieceFullAttr(d, e.piece),
									e.cfg.restoreSpeed, e.cfg.restoreEasing, 0,
									true)
						}
					} else {
						e.element.remove()
					}
				}
			}
		},
		afterShow : function(c, d) {
			if (c.highlighted && c.highlighted.length > 0) {
				this.removeHighlighted(c, false)
			}
			c.highlighted = []
		},
		onMouseOver : function(C, s, j, G) {
			var r, c;
			for ( var A = 0; A < G.pieces.length; A++) {
				if (G.pieces[A].section == "Series" && G.pieces[A].paths
						&& (!s || G.pieces[A].serie == s)
						&& G.pieces[A].paths[j] && G.pieces[A].paths[j].element) {
					var e = G.pieces[A].paths[j];
					c = e.element;
					r = e.path;
					var u = a.getElementOriginalAttrs(c);
					var E = false;
					var f = s ? G.props : a.areaProps(C, G.pieces[A].section,
							G.pieces[A].serie);
					var q, F, v;
					if (r && f.highlight) {
						if (f.highlight.scale) {
							var I = f.highlight.scale;
							if (typeof I == "number") {
								I = [ I, I ]
							}
							if (r[0][0] == "RECT") {
								var n = r[0][3] - r[0][1];
								var B = r[0][4] - r[0][2];
								r = [ [ "RECT", r[0][1],
										r[0][2] - B * (I[1] - 1),
										r[0][3] + n * (I[0] - 1), r[0][4] ] ];
								a.animationStackPush(C, e, c, a.getSVGProps(a
										.preparePathShow(C, r)),
										f.highlight.scaleSpeed,
										f.highlight.scaleEasing)
							} else {
								if (r[0][0] == "CIRCLE") {
									E = {
										r : r[0][3] * I[0]
									};
									a.animationStackPush(C, e, c, E,
											f.highlight.scaleSpeed,
											f.highlight.scaleEasing)
								} else {
									if (r[0][0] == "SLICE") {
										var D = (r[0][6] - r[0][5])
												* (I[1] - 1) / 2;
										if (D > 90) {
											D = 90
										}
										r = [ [ "SLICE", r[0][1], r[0][1],
												r[0][3] * I[0], r[0][4],
												r[0][5] - D, r[0][6] + D ] ];
										a.animationStackPush(C, e, c, a
												.getSVGProps(a.preparePathShow(
														C, r)),
												f.highlight.scaleSpeed,
												f.highlight.scaleEasing)
									} else {
										if (C.opt.type == "funnel") {
											var o = (e.rect[2] - e.rect[0])
													* (I[0] - 1) / 2;
											var m = (e.rect[3] - e.rect[1])
													* (I[1] - 1) / 2;
											a.animationStackStart(C);
											r = [
													a.movePath(C, [ r[0] ], [
															-o, -m ])[0],
													a.movePath(C, [ r[1] ], [
															+o, -m ])[0],
													a.movePath(C, [ r[2] ], [
															+o, +m ])[0],
													a.movePath(C, [ r[3] ], [
															-o, +m ])[0], r[4] ];
											a.animationStackPush(C, e, c, a
													.getSVGProps(a
															.preparePathShow(C,
																	r)),
													f.highlight.scaleSpeed,
													f.highlight.scaleEasing, 0,
													true);
											q = false;
											if (j > 0) {
												F = G.pieces[A].paths[j - 1];
												q = F.element;
												v = F.path
											} else {
												F = a.findInPieces(G.pieces,
														"Sector", "top");
												if (F) {
													q = F.element;
													v = F.path
												}
											}
											if (q) {
												v = [
														v[0],
														v[1],
														a.movePath(C, [ v[2] ],
																[ +o, -m ])[0],
														a.movePath(C, [ v[3] ],
																[ -o, -m ])[0],
														v[4] ];
												a
														.animationStackPush(
																C,
																F,
																q,
																a
																		.getSVGProps(a
																				.preparePathShow(
																						C,
																						v)),
																f.highlight.scaleSpeed,
																f.highlight.scaleEasing,
																0, true);
												C.highlighted.push({
													piece : F,
													cfg : f.highlight
												})
											}
											q = false;
											if (j < G.pieces[A].paths.length - 1) {
												F = G.pieces[A].paths[j + 1];
												q = F.element;
												v = F.path
											} else {
												F = a.findInPieces(G.pieces,
														"Sector", "bottom");
												if (F) {
													q = F.element;
													v = F.path
												}
											}
											if (q) {
												v = [
														a.movePath(C, [ v[0] ],
																[ -o, +m ])[0],
														a.movePath(C, [ v[1] ],
																[ +o, +m ])[0],
														v[2], v[3], v[4] ];
												a
														.animationStackPush(
																C,
																F,
																q,
																a
																		.getSVGProps(a
																				.preparePathShow(
																						C,
																						v)),
																f.highlight.scaleSpeed,
																f.highlight.scaleEasing,
																0, true);
												C.highlighted.push({
													piece : F,
													cfg : f.highlight
												})
											}
											a.animationStackEnd(C)
										}
									}
								}
							}
						}
						if (f.highlight.newProps) {
							for ( var H in f.highlight.newProps) {
								if (typeof u[H] == "undefined") {
									u[H] = false
								}
							}
							a.animationStackPush(C, e, c, f.highlight.newProps)
						}
						if (f.highlight.move) {
							var g = b.isArray(f.highlight.move) ? f.highlight.move
									: [ f.highlight.move, 0 ];
							r = a.movePath(C, r, g);
							a.animationStackPush(C, e, c, a.getSVGProps(a
									.preparePathShow(C, r)),
									f.highlight.moveSpeed,
									f.highlight.moveEasing)
						}
						C.highlighted.push({
							piece : e,
							cfg : f.highlight
						});
						if (f.highlight.overlayProps) {
							c = a.showPath(C, r);
							if (E) {
								c.attr(E)
							}
							c.attr(f.highlight.overlayProps);
							u = false;
							C.highlighted.push({
								element : c,
								attr : u,
								cfg : f.highlight
							})
						}
					}
				}
			}
			if (C.opt.features.highlight.indexHighlight && C.opt.type == "line") {
				var p = C.opt.features.highlight.indexHighlight;
				if (p == "auto") {
					p = (C.indexCenter == "bar" ? "bar" : "line")
				}
				var z = (C.opt.width - C.opt.margins[3] - C.opt.margins[1])
						/ (C.opt.labels.length > 0 ? C.opt.labels.length : 1);
				var y = (C.opt.width - C.opt.margins[3] - C.opt.margins[1])
						/ (C.opt.labels.length > 1 ? C.opt.labels.length - 1
								: 1);
				var l = true;
				switch (p) {
				case "bar":
					r = [ [ "RECT", C.opt.margins[3] + j * z, C.opt.margins[0],
							C.opt.margins[3] + (j + 1) * z,
							C.opt.height - C.opt.margins[2] ] ];
					break;
				case "line":
					l = false;
				case "barline":
					var k = Math.round((l ? z / 2 : 0) + C.opt.margins[3] + j
							* (l ? z : y));
					r = [ [ "M", k, C.opt.margins[0] ],
							[ "L", k, C.opt.height - C.opt.margins[2] ] ]
				}
				if (r) {
					c = a.showPath(C, r).attr(
							C.opt.features.highlight.indexHighlightProps);
					C.highlighted.push({
						element : c,
						attr : false,
						cfg : C.opt.features.highlight
					})
				}
			}
		},
		onMouseOut : function(e, f, d, c) {
			this.removeHighlighted(e, true)
		}
	};
	b.elycharts.featuresmanager.register(b.elycharts.highlightmanager, 21)
})(jQuery);
(function(b) {
	var a = b.elycharts.common;
	b.elycharts.labelmanager = {
		beforeShow : function(f, g) {
			if (!a.executeIfChanged(f, [ "labels", "values", "series" ])) {
				return
			}
			if (f.opt.labels && (f.opt.type == "pie" || f.opt.type == "funnel")) {
				var j = false;
				var h;
				for ( var d = 0; d < g.length; d++) {
					if (g[d].section == "Series" && g[d].subSection == "Plot") {
						var e = a.areaProps(f, "Series", g[d].serie);
						if (f.emptySeries && f.opt.series.empty) {
							e.label = b.extend(true, e.label,
									f.opt.series.empty.label)
						}
						if (e && e.label && e.label.active) {
							h = [];
							for ( var c = 0; c < g[d].paths.length; c++) {
								if (g[d].paths[c].path) {
									j = c;
									h.push(this.showLabel(f, g[d],
											g[d].paths[c], g[d].serie, c, g))
								} else {
									h.push({
										path : false,
										attr : false
									})
								}
							}
							g.push({
								section : g[d].section,
								serie : g[d].serie,
								subSection : "Label",
								paths : h
							})
						}
					} else {
						if (g[d].section == "Sector" && g[d].serie == "bottom"
								&& !g[d].subSection
								&& j < f.opt.labels.length - 1) {
							h = [];
							h.push(this.showLabel(f, g[d], g[d], "Series",
									f.opt.labels.length - 1, g));
							g.push({
								section : g[d].section,
								serie : g[d].serie,
								subSection : "Label",
								paths : h
							})
						}
					}
				}
			}
		},
		showLabel : function(n, t, s, l, o, k) {
			var j = a.areaProps(n, "Series", l, o);
			if (n.opt.labels[o] || j.label.label) {
				var h = s;
				var r = j.label.label ? j.label.label : n.opt.labels[o];
				var d = a.getCenter(h, j.label.offset);
				if (!j.label.html) {
					var q = j.label.props;
					if (j.label.frameAnchor) {
						q = a._clone(j.label.props);
						q["text-anchor"] = j.label.frameAnchor[0];
						q["alignment-baseline"] = j.label.frameAnchor[1]
					}
					return {
						path : [ [ "TEXT", r, d[0], d[1] ] ],
						attr : q
					}
				} else {
					var m = 1;
					var g = a._clone(j.label.style);
					var f = (typeof g.opacity != "undefined");
					if (f) {
						m = g.opacity;
						g.opacity = 0
					}
					g.position = "absolute";
					g["z-index"] = 25;
					var i;
					if (typeof r == "string") {
						i = b("<div>" + r + "</div>").css(g).prependTo(
								n.container)
					} else {
						i = b(r).css(g).prependTo(n.container)
					}
					if (n.opt.features.debug.active && i.height() == 0) {
						alert("DEBUG: Al gestore label e' stata passata una label ancora senza dimensioni, quindi ancora non disegnata. Per questo motivo il posizionamento potrebbe non essere correto.")
					}
					var e = d[0];
					var c = d[1];
					if (!j.label.frameAnchor
							|| j.label.frameAnchor[0] == "middle") {
						e -= i.width() / 2
					} else {
						if (j.label.frameAnchor
								&& j.label.frameAnchor[0] == "end") {
							e -= i.width()
						}
					}
					if (!j.label.frameAnchor
							|| j.label.frameAnchor[1] == "middle") {
						c -= i.height() / 2
					} else {
						if (j.label.frameAnchor
								&& j.label.frameAnchor[1] == "top") {
							c -= i.height()
						}
					}
					if (f) {
						i.css({
							margin : c + "px 0 0 " + e + "px",
							opacity : m
						})
					} else {
						i.css({
							margin : c + "px 0 0 " + e + "px"
						})
					}
					return {
						path : [ [ "DOMELEMENT", i ] ],
						attr : false
					}
				}
			}
			return false
		}
	};
	b.elycharts.featuresmanager.register(b.elycharts.labelmanager, 5)
})(jQuery);
(function(b) {
	var a = b.elycharts.common;
	b.elycharts.legendmanager = {
		afterShow : function(H, e) {
			if (!H.opt.legend || H.opt.legend.length == 0) {
				return
			}
			var c = H.opt.features.legend;
			if (c.x == "auto") {
				var A = 1;
				c.x = 0
			}
			if (c.width == "auto") {
				var k = 1;
				c.width = H.opt.width
			}
			var p = [ [ "RECT", c.x, c.y, c.x + c.width, c.y + c.height, c.r ] ];
			var B = a.showPath(H, p).attr(c.borderProps);
			if (A || k) {
				B.hide()
			}
			var D = 0;
			var s = [];
			var d = 0;
			var z, K, G, o, n, m, C;
			for (z in H.opt.legend) {
				if (H.opt.type != "pie") {
					d++
				} else {
					d += H.opt.legend[z].length
				}
			}
			var F = 0;
			for (z in H.opt.legend) {
				if (H.opt.type != "pie") {
					K = [ H.opt.legend[z] ]
				} else {
					K = H.opt.legend[z]
				}
				for ( var E = 0; E < K.length; E++) {
					var f = a.areaProps(H, "Series", z, H.opt.type == "pie" ? E
							: false);
					var g = b.extend(true, {}, c.dotProps);
					if (f.legend && f.legend.dotProps) {
						g = b.extend(true, g, f.legend.dotProps)
					}
					if (!g.fill && H.opt.type == "pie") {
						if (f.color) {
							g.fill = f.color
						}
						if (f.plotProps && f.plotProps.fill) {
							g.fill = f.plotProps.fill
						}
					}
					var J = f.legend && f.legend.dotType ? f.legend.dotType
							: c.dotType;
					var I = f.legend && f.legend.dotWidth ? f.legend.dotWidth
							: c.dotWidth;
					var v = f.legend && f.legend.dotHeight ? f.legend.dotHeight
							: c.dotHeight;
					var u = f.legend && f.legend.dotR ? f.legend.dotR : c.dotR;
					var l = f.legend && f.legend.textProps ? f.legend.textProps
							: c.textProps;
					if (!c.horizontal) {
						G = (c.height - c.margins[0] - c.margins[2]) / d;
						o = c.width - c.margins[1] - c.margins[3];
						n = Math.floor(c.x + c.margins[3]);
						m = Math.floor(c.y + c.margins[0] + G * F)
					} else {
						G = c.height - c.margins[0] - c.margins[2];
						if (!c.itemWidth || c.itemWidth == "fixed") {
							o = (c.width - c.margins[1] - c.margins[3]) / d;
							n = Math.floor(c.x + c.margins[3] + o * F)
						} else {
							o = (c.width - c.margins[1] - c.margins[3]) - D;
							n = c.x + c.margins[3] + D
						}
						m = Math.floor(c.y + c.margins[0])
					}
					if (J == "rect") {
						s.push(a.showPath(
								H,
								[ [ "RECT", c.dotMargins[0] + n,
										m + Math.floor((G - v) / 2),
										c.dotMargins[0] + n + I,
										m + Math.floor((G - v) / 2) + v, u ] ])
								.attr(g));
						C = c.dotMargins[0] + I + c.dotMargins[1]
					} else {
						if (J == "circle") {
							s.push(a.showPath(
									H,
									[ [ "CIRCLE", c.dotMargins[0] + n + u,
											m + (G / 2), u ] ]).attr(g));
							C = c.dotMargins[0] + u * 2 + c.dotMargins[1]
						}
					}
					var r = K[E];
					var q = a.showPath(
							H,
							[ [
									"TEXT",
									r,
									n + C,
									m + Math.ceil(G / 2)
											+ (b.browser.msie ? 2 : 0) ] ])
							.attr({
								"text-anchor" : "start"
							}).attr(l);
					s.push(q);
					while (q.getBBox().width > (o - C)
							&& q.getBBox().width > 10) {
						r = r.substring(0, r.length - 1);
						q.attr({
							text : r
						})
					}
					q.show();
					if (c.horizontal && c.itemWidth == "auto") {
						D += C + q.getBBox().width + 4
					} else {
						if (!c.horizontal && k) {
							D = q.getBBox().width + C > D ? q.getBBox().width
									+ C : D
						} else {
							D += o
						}
					}
					F++
				}
			}
			if (k) {
				c.width = D + c.margins[3] + c.margins[1] - 1
			}
			if (A) {
				c.x = Math.floor((H.opt.width - c.width) / 2);
				for (F in s) {
					if (s[F].attrs.x) {
						s[F].attr("x", s[F].attrs.x + c.x)
					} else {
						s[F].attr("path", a.movePath(H, s[F].attrs.path, [ c.x,
								0 ]))
					}
				}
			}
			if (k || A) {
				p = [ [ "RECT", c.x, c.y, c.x + c.width, c.y + c.height, c.r ] ];
				B.attr(a.getSVGProps(a.preparePathShow(H, p)));
				B.show()
			}
		}
	};
	b.elycharts.featuresmanager.register(b.elycharts.legendmanager, 90)
})(jQuery);
(function(c) {
	var a = c.elycharts.featuresmanager;
	var b = c.elycharts.common;
	c.elycharts.mousemanager = {
		afterShow : function(m, g) {
			if (!m.opt.interactive) {
				return
			}
			if (m.mouseLayer) {
				m.mouseLayer.remove();
				m.mouseLayer = null;
				m.mousePaper.remove();
				m.mousePaper = null;
				m.mouseTimer = null;
				m.mouseAreas = null
			}
			m.mouseLayer = c("<div></div>").css({
				position : "absolute",
				"z-index" : 20,
				opacity : 0
			}).prependTo(m.container);
			m.mousePaper = b._RaphaelInstance(m.mouseLayer.get(0), m.opt.width,
					m.opt.height);
			var f = m.mousePaper;
			if (m.opt.features.debug.active && typeof DP_Debug != "undefined") {
				m.paper.text(m.opt.width, m.opt.height - 5, "DEBUG").attr({
					"text-anchor" : "end",
					stroke : "red",
					opacity : 0.1
				});
				f.text(m.opt.width, m.opt.height - 5, "DEBUG").attr({
					"text-anchor" : "end",
					stroke : "red",
					opacity : 0.1
				}).click(function() {
					DP_Debug.dump(m.opt, "", false, 4)
				})
			}
			var k, h;
			m.mouseAreas = [];
			if (m.opt.features.mousearea.type == "single") {
				for (k = 0; k < g.length; k++) {
					if (g[k].mousearea) {
						if (!g[k].paths) {
							if (g[k].path.length >= 1
									&& (g[k].path[0][0] == "LINE" || g[k].path[0][0] == "LINEAREA")) {
								for (h = 0; h < g[k].path[0][1].length; h++) {
									var n = b.areaProps(m, g[k].section,
											g[k].serie);
									if (n.mouseareaShowOnNull
											|| g[k].section != "Series"
											|| m.opt.values[g[k].serie][h] != null) {
										m.mouseAreas
												.push({
													path : [ [
															"CIRCLE",
															g[k].path[0][1][h][0],
															g[k].path[0][1][h][1],
															10 ] ],
													piece : g[k],
													pieces : g,
													index : h,
													props : n
												})
									}
								}
							} else {
								for (h = 0; h < g[k].path.length; h++) {
									m.mouseAreas.push({
										path : [ [ "CIRCLE",
												b.getX(g[k].path[h]),
												b.getY(g[k].path[h]), 10 ] ],
										piece : g[k],
										pieces : g,
										index : h,
										props : b.areaProps(m, g[k].section,
												g[k].serie)
									})
								}
							}
						} else {
							if (g[k].paths) {
								for (h = 0; h < g[k].paths.length; h++) {
									if (g[k].paths[h].path) {
										m.mouseAreas.push({
											path : g[k].paths[h].path,
											piece : g[k],
											pieces : g,
											index : h,
											props : b.areaProps(m,
													g[k].section, g[k].serie)
										})
									}
								}
							}
						}
					}
				}
			} else {
				var d = m.opt.features.mousearea.indexCenter;
				if (d == "auto") {
					d = m.indexCenter
				}
				var e, p;
				if (d == "bar") {
					p = (m.opt.width - m.opt.margins[3] - m.opt.margins[1])
							/ (m.opt.labels.length > 0 ? m.opt.labels.length
									: 1);
					e = m.opt.margins[3]
				} else {
					p = (m.opt.width - m.opt.margins[3] - m.opt.margins[1])
							/ (m.opt.labels.length > 1 ? m.opt.labels.length - 1
									: 1);
					e = m.opt.margins[3] - p / 2
				}
				for ( var l in m.opt.labels) {
					m.mouseAreas.push({
						path : [ [ "RECT", e + l * p, m.opt.margins[0],
								e + (l + 1) * p,
								m.opt.height - m.opt.margins[2] ] ],
						piece : false,
						pieces : g,
						index : parseInt(l),
						props : m.opt.defaultSeries
					})
				}
			}
			var o = false;
			if (!m.opt.features.mousearea.syncTag) {
				m.mouseareaenv = {
					chartEnv : false,
					mouseObj : false,
					caller : false,
					inArea : -1,
					timer : false
				};
				o = m.mouseareaenv
			} else {
				if (!c.elycharts.mouseareaenv) {
					c.elycharts.mouseareaenv = {}
				}
				if (!c.elycharts.mouseareaenv[m.opt.features.mousearea.syncTag]) {
					c.elycharts.mouseareaenv[m.opt.features.mousearea.syncTag] = {
						chartEnv : false,
						mouseObj : false,
						caller : false,
						inArea : -1,
						timer : false
					}
				}
				o = c.elycharts.mouseareaenv[m.opt.features.mousearea.syncTag]
			}
			for (k = 0; k < m.mouseAreas.length; k++) {
				m.mouseAreas[k].area = b.showPath(m, m.mouseAreas[k].path, f)
						.attr({
							stroke : "none",
							fill : "#fff",
							opacity : 0
						});
				(function(s, u, t, q, j) {
					var r = u.piece;
					var i = u.index;
					u.mouseover = function(v) {
						u.event = v;
						clearTimeout(j.timer);
						q.onMouseOverArea(s, r, i, u);
						if (j.chartEnv && j.chartEnv.id != s.id) {
							j.caller.onMouseExitArea(j.chartEnv,
									j.mouseObj.piece, j.mouseObj.index,
									j.mouseObj);
							q.onMouseEnterArea(s, r, i, u)
						} else {
							if (j.inArea != t) {
								if (j.inArea < 0) {
									q.onMouseEnterArea(s, r, i, u)
								} else {
									q.onMouseChangedArea(s, r, i, u)
								}
							}
						}
						j.chartEnv = s;
						j.mouseObj = u;
						j.caller = q;
						j.inArea = t
					};
					u.mouseout = function(v) {
						u.event = v;
						clearTimeout(j.timer);
						q.onMouseOutArea(s, r, i, u);
						j.timer = setTimeout(function() {
							j.timer = false;
							q.onMouseExitArea(s, r, i, u);
							j.chartEnv = false;
							j.inArea = -1
						}, s.opt.features.mousearea.areaMoveDelay)
					};
					c(u.area.node).mouseover(u.mouseover);
					c(u.area.node).mouseout(u.mouseout)
				})(m, m.mouseAreas[k], k, this, o)
			}
		},
		onMouseOverArea : function(g, f, e, d) {
			if (g.opt.features.mousearea.onMouseOver) {
				g.opt.features.mousearea.onMouseOver(g, d.piece ? d.piece.serie
						: false, d.index, d)
			}
			a.onMouseOver(g, d.piece ? d.piece.serie : false, d.index, d)
		},
		onMouseOutArea : function(g, f, e, d) {
			if (g.opt.features.mousearea.onMouseOut) {
				g.opt.features.mousearea.onMouseOut(g, d.piece ? d.piece.serie
						: false, d.index, d)
			}
			a.onMouseOut(g, d.piece ? d.piece.serie : false, d.index, d)
		},
		onMouseEnterArea : function(g, f, e, d) {
			if (g.opt.features.mousearea.onMouseEnter) {
				g.opt.features.mousearea.onMouseEnter(g,
						d.piece ? d.piece.serie : false, d.index, d)
			}
			a.onMouseEnter(g, d.piece ? d.piece.serie : false, d.index, d)
		},
		onMouseChangedArea : function(g, f, e, d) {
			if (g.opt.features.mousearea.onMouseChanged) {
				g.opt.features.mousearea.onMouseChanged(g,
						d.piece ? d.piece.serie : false, d.index, d)
			}
			a.onMouseChanged(g, d.piece ? d.piece.serie : false, d.index, d)
		},
		onMouseExitArea : function(g, f, e, d) {
			if (g.opt.features.mousearea.onMouseExit) {
				g.opt.features.mousearea.onMouseExit(g, d.piece ? d.piece.serie
						: false, d.index, d)
			}
			a.onMouseExit(g, d.piece ? d.piece.serie : false, d.index, d)
		}
	};
	c.elycharts.featuresmanager.register(c.elycharts.mousemanager, 0)
})(jQuery);
(function(b) {
	var a = b.elycharts.common;
	b.elycharts.tooltipmanager = {
		afterShow : function(c, d) {
			if (c.tooltipContainer) {
				c.tooltipFrame.remove();
				c.tooltipFrame = null;
				c.tooltipFrameElement = null;
				c.tooltipContent.remove();
				c.tooltipContent = null;
				c.tooltipContainer.remove();
				c.tooltipContainer = null
			}
			if (!b.elycharts.tooltipid) {
				b.elycharts.tooltipid = 0
			}
			b.elycharts.tooltipid++;
			c.tooltipContainer = b(
					'<div id="elycharts_tooltip_'
							+ b.elycharts.tooltipid
							+ '" style="position: absolute; top: 100; left: 100; z-index: 10; overflow: hidden; white-space: nowrap; display: none"><div id="elycharts_tooltip_'
							+ b.elycharts.tooltipid
							+ '_frame" style="position: absolute; top: 0; left: 0; z-index: -1"></div><div id="elycharts_tooltip_'
							+ b.elycharts.tooltipid
							+ '_content" style="cursor: default"></div></div>')
					.appendTo(document.body);
			c.tooltipFrame = a._RaphaelInstance("elycharts_tooltip_"
					+ b.elycharts.tooltipid + "_frame", 500, 500);
			c.tooltipContent = b("#elycharts_tooltip_" + b.elycharts.tooltipid
					+ "_content")
		},
		_prepareShow : function(e, d, c, f) {
			if (e.tooltipFrameElement) {
				e.tooltipFrameElement.attr(d.frameProps)
			}
			if (d.padding) {
				e.tooltipContent.css({
					padding : d.padding[0] + "px " + d.padding[1] + "px"
				})
			}
			e.tooltipContent.css(d.contentStyle);
			e.tooltipContent.html(f);
			var g = b(e.container).offset();
			if (e.opt.features.tooltip.fixedPos) {
				g.top += e.opt.features.tooltip.fixedPos[1];
				g.left += e.opt.features.tooltip.fixedPos[0]
			} else {
				var h = this.getXY(e, d, c);
				if (!h[2]) {
					g.left += h[0];
					while (g.top + h[1] < 0) {
						h[1] += 20
					}
					g.top += h[1]
				} else {
					g.left = h[0];
					g.top = h[1]
				}
			}
			return {
				top : g.top,
				left : g.left
			}
		},
		getXY : function(e, i, c) {
			var l = 0, k = 0;
			if (c.path[0][0] == "RECT") {
				l = a.getX(c.path[0]) - i.offset[1];
				k = a.getY(c.path[0]) - i.height - i.offset[0]
			} else {
				if (c.path[0][0] == "CIRCLE") {
					l = a.getX(c.path[0]) - i.offset[1];
					k = a.getY(c.path[0]) - i.height - i.offset[0]
				} else {
					if (c.path[0][0] == "SLICE") {
						var o = c.path[0];
						var m = i.width && i.width != "auto" ? i.width : 100;
						var d = i.height && i.height != "auto" ? i.height : 100;
						var f = Math.sqrt(Math.pow(m, 2) + Math.pow(d, 2)) / 2;
						if (f > e.opt.r) {
							f = e.opt.r
						}
						var n = o[5] + (o[6] - o[5]) / 2 + 180;
						var g = Math.PI / 180;
						l = o[1] + f * Math.cos(-n * g) - m / 2;
						k = o[2] + f * Math.sin(-n * g) - d / 2
					} else {
						if (c.piece && c.piece.paths && c.index >= 0
								&& c.piece.paths[c.index]
								&& c.piece.paths[c.index].rect) {
							var j = c.piece.paths[c.index].rect;
							l = j[0] - i.offset[1];
							k = j[1] - i.height - i.offset[0]
						}
					}
				}
			}
			if (e.opt.features.tooltip.positionHandler) {
				return e.opt.features.tooltip.positionHandler(e, i, c, l, k)
			} else {
				return [ l, k ]
			}
		},
		getTip : function(d, e, c) {
			var f = false;
			if (d.opt.tooltips) {
				if (typeof d.opt.tooltips == "function") {
					f = d.opt.tooltips(d, e, c, e && d.opt.values[e]
							&& d.opt.values[e][c] ? d.opt.values[e][c] : false,
							d.opt.labels && d.opt.labels[c] ? d.opt.labels[c]
									: false)
				} else {
					if (e && d.opt.tooltips[e] && d.opt.tooltips[e][c]) {
						f = d.opt.tooltips[e][c]
					} else {
						if (!e && d.opt.tooltips[c]) {
							f = d.opt.tooltips[c]
						}
					}
				}
			}
			return f
		},
		onMouseEnter : function(f, g, d, c) {
			var e = c.props.tooltip;
			if (f.emptySeries && f.opt.series.empty) {
				e = b.extend(true, e, f.opt.series.empty.tooltip)
			}
			if (!e || !e.active) {
				return false
			}
			var h = this.getTip(f, g, d);
			if (!h) {
				return this.onMouseExit(f, g, d, c)
			}
			if (e.width && e.width != "auto" && e.height && e.height != "auto") {
				var i = e.frameProps && e.frameProps["stroke-width"] ? e.frameProps["stroke-width"]
						: 0;
				f.tooltipContainer.width(e.width + i + 1).height(
						e.height + i + 1);
				if (!f.tooltipFrameElement && e.frameProps) {
					f.tooltipFrameElement = f.tooltipFrame.rect(i / 2, i / 2,
							e.width, e.height, e.roundedCorners)
				}
			}
			f.tooltipContainer.css(this._prepareShow(f, e, c, h)).fadeIn(
					f.opt.features.tooltip.fadeDelay);
			return true
		},
		onMouseChanged : function(f, g, d, c) {
			var e = c.props.tooltip;
			if (f.emptySeries && f.opt.series.empty) {
				e = b.extend(true, e, f.opt.series.empty.tooltip)
			}
			if (!e || !e.active) {
				return false
			}
			var h = this.getTip(f, g, d);
			if (!h) {
				return this.onMouseExit(f, g, d, c)
			}
			f.tooltipContainer.clearQueue();
			f.tooltipContainer.animate(this._prepareShow(f, e, c, h),
					f.opt.features.tooltip.moveDelay, "linear");
			return true
		},
		onMouseExit : function(f, g, d, c) {
			var e = c.props.tooltip;
			if (f.emptySeries && f.opt.series.empty) {
				e = b.extend(true, e, f.opt.series.empty.tooltip)
			}
			if (!e || !e.active) {
				return false
			}
			f.tooltipContainer.fadeOut(f.opt.features.tooltip.fadeDelay);
			return true
		}
	};
	b.elycharts.featuresmanager.register(b.elycharts.tooltipmanager, 20)
})(jQuery);
(function(c) {
	var a = c.elycharts.featuresmanager;
	var b = c.elycharts.common;
	c.elycharts.line = {
		init : function(d) {
		},
		draw : function(o) {
			if (b.executeIfChanged(o, [ "values", "series" ])) {
				o.plots = {};
				o.axis = {
					x : {}
				};
				o.barno = 0;
				o.indexCenter = "line"
			}
			var A = o.opt;
			var O = o.plots;
			var B = o.axis;
			var g = o.paper;
			var Y = o.opt.values;
			var r = o.opt.labels;
			var T, p, F, C, f, n;
			if (b.executeIfChanged(o, [ "values", "series" ])) {
				var W = 0;
				var P = false;
				for (C in Y) {
					f = {
						index : W,
						type : false,
						visible : false
					};
					O[C] = f;
					if (Y[C]) {
						F = b.areaProps(o, "Series", C);
						f.type = F.type;
						if (F.type == "bar") {
							o.indexCenter = "bar"
						}
						if (F.visible) {
							f.visible = true;
							if (!n || n < Y[C].length) {
								n = Y[C].length
							}
							var J = [];
							for (T = 0; T < Y[C].length; T++) {
								var G = Y[C][T];
								if (G == null) {
									if (F.type == "bar") {
										G = 0
									} else {
										for ( var S = T + 1; S < Y[C].length
												&& Y[C][S] == null; S++) {
										}
										var l = S < Y[C].length ? Y[C][S]
												: null;
										for ( var R = T - 1; R >= 0
												&& Y[C][R] == null; R--) {
										}
										var I = R >= 0 ? Y[C][R] : null;
										G = l != null ? (I != null ? (l
												* (T - R) + I * (S - T))
												/ (S - R) : l) : I
									}
								}
								J.push(G)
							}
							if (F.stacked && !(typeof F.stacked == "string")) {
								F.stacked = P
							}
							if (typeof F.stacked == "undefined"
									|| F.stacked == C || F.stacked < 0
									|| !O[F.stacked] || !O[F.stacked].visible
									|| O[F.stacked].type != f.type) {
								f.ref = C;
								if (F.type == "bar") {
									f.barno = o.barno++
								}
								f.from = [];
								if (!F.cumulative) {
									f.to = J
								} else {
									f.to = [];
									p = 0;
									for (T = 0; T < J.length; T++) {
										f.to.push(p += J[T])
									}
								}
								for (T = 0; T < J.length; T++) {
									f.from.push(0)
								}
							} else {
								f.ref = F.stacked;
								if (F.type == "bar") {
									f.barno = O[F.stacked].barno
								}
								f.from = O[F.stacked].stack;
								f.to = [];
								p = 0;
								if (!F.cumulative) {
									for (T = 0; T < J.length; T++) {
										f.to.push(f.from[T] + J[T])
									}
								} else {
									for (T = 0; T < J.length; T++) {
										f.to.push(f.from[T] + (p += J[T]))
									}
								}
								O[F.stacked].stack = f.to
							}
							f.stack = f.to;
							f.max = Math.max.apply(Math, f.from.concat(f.to));
							f.min = Math.min.apply(Math, f.from.concat(f.to));
							if (F.axis) {
								if (!B[F.axis]) {
									B[F.axis] = {
										plots : []
									}
								}
								B[F.axis].plots.push(C);
								if (typeof B[F.axis].max == "undefined") {
									B[F.axis].max = f.max
								} else {
									B[F.axis].max = Math.max(B[F.axis].max,
											f.max)
								}
								if (typeof B[F.axis].min == "undefined") {
									B[F.axis].min = f.min
								} else {
									B[F.axis].min = Math.min(B[F.axis].min,
											f.min)
								}
							}
							P = C
						}
					}
				}
			}
			if (!r) {
				r = []
			}
			while (n > r.length) {
				r.push(null)
			}
			n = r.length;
			o.opt.labels = r;
			if (b.executeIfChanged(o, [ "values", "series", "axis" ])) {
				for ( var t in B) {
					F = b.areaProps(o, "Axis", t);
					B[t].props = F;
					if (typeof F.max != "undefined") {
						B[t].max = F.max
					}
					if (typeof F.min != "undefined") {
						B[t].min = F.min
					}
					if (B[t].min == B[t].max) {
						B[t].max = B[t].min + 1
					}
					if (F.normalize && F.normalize > 0) {
						var N = Math.abs(B[t].max);
						if (B[t].min && Math.abs(B[t].min) > N) {
							N = Math.abs(B[t].min)
						}
						if (N) {
							var D = Math.floor(Math.log(N) / Math.LN10)
									- (F.normalize - 1);
							D = D >= 0 ? Math.pow(10, D) : 1 / Math.pow(10, -D);
							N = Math.ceil(N
									/ D
									/ (A.features.grid.ny ? A.features.grid.ny
											: 1))
									* D
									* (A.features.grid.ny ? A.features.grid.ny
											: 1);
							N = Math.round(N / D) * D;
							B[t].normalizationBase = D;
							if (B[t].max) {
								B[t].max = Math.ceil(B[t].max / N) * N
							}
							if (B[t].min) {
								B[t].min = Math.floor(B[t].min / N) * N
							}
						}
					}
					if (B[t].plots) {
						for ( var K = 0; K < B[t].plots.length; K++) {
							O[B[t].plots[K]].max = B[t].max;
							O[B[t].plots[K]].min = B[t].min
						}
					}
				}
			}
			var U = [];
			this.grid(o, U);
			var u = (A.width - A.margins[3] - A.margins[1])
					/ (r.length > 1 ? r.length - 1 : 1);
			var Q = (A.width - A.margins[3] - A.margins[1])
					/ (r.length > 0 ? r.length : 1);
			for (C in Y) {
				F = b.areaProps(o, "Series", C);
				f = O[C];
				if (F.lineCenter && F.lineCenter == "auto") {
					F.lineCenter = (o.indexCenter == "bar")
				} else {
					if (F.lineCenter && o.indexCenter == "line") {
						o.indexCenter = "bar"
					}
				}
				if (Y[C] && F.visible) {
					var s = (A.height - A.margins[2] - A.margins[0])
							/ (f.max - f.min);
					if (F.type == "line") {
						var E = [ "LINE", [], F.rounded ];
						var h = [ "LINEAREA", [], [], F.rounded ];
						var X = [];
						for (T = 0, K = r.length; T < K; T++) {
							if (f.to.length > T) {
								var Z = b.areaProps(o, "Series", C, T);
								var V = f.to[T] > f.max ? f.max
										: (f.to[T] < f.min ? f.min : f.to[T]);
								var M = Math.round((F.lineCenter ? Q / 2 : 0)
										+ A.margins[3] + T
										* (F.lineCenter ? Q : u));
								var L = Math.round(A.height - A.margins[2] - s
										* (V - f.min));
								var w = f.from[T] > f.max ? f.max
										: (f.from[T] < f.min ? f.min
												: f.from[T]);
								var q = Math.round(A.height - A.margins[2] - s
										* (w - f.min))
										+ (c.browser.msie ? 1 : 0);
								E[1].push([ M, L ]);
								if (F.fill) {
									h[1].push([ M, L ]);
									h[2].push([ M, q ])
								}
								if (Z.dot) {
									if (Y[C][T] == null && !Z.dotShowOnNull) {
										X.push({
											path : false,
											attr : false
										})
									} else {
										X.push({
											path : [ [ "CIRCLE", M, L,
													Z.dotProps.size ] ],
											attr : Z.dotProps
										})
									}
								}
							}
						}
						if (F.fill) {
							U.push({
								section : "Series",
								serie : C,
								subSection : "Fill",
								path : [ h ],
								attr : F.fillProps
							})
						} else {
							U.push({
								section : "Series",
								serie : C,
								subSection : "Fill",
								path : false,
								attr : false
							})
						}
						U.push({
							section : "Series",
							serie : C,
							subSection : "Plot",
							path : [ E ],
							attr : F.plotProps,
							mousearea : "pathsteps"
						});
						if (X.length) {
							U.push({
								section : "Series",
								serie : C,
								subSection : "Dot",
								paths : X
							})
						} else {
							U.push({
								section : "Series",
								serie : C,
								subSection : "Dot",
								path : false,
								attr : false
							})
						}
					} else {
						pieceBar = [];
						for (T = 0, K = r.length; T < K; T++) {
							if (f.to.length > T) {
								if (f.from[T] != f.to[T]) {
									var m = Math.floor((Q - A.barMargins)
											/ o.barno);
									var H = m * (100 - F.barWidthPerc) / 200;
									var e = A.barMargins / 2 + f.barno * m;
									var z = Math.floor(A.margins[3] + T * Q + e
											+ H);
									var ab = Math.round(A.height - A.margins[2]
											- s * (f.to[T] - f.min));
									var aa = Math.round(A.height - A.margins[2]
											- s * (f.from[T] - f.min));
									pieceBar.push({
										path : [ [ "RECT", z, ab,
												z + m - H * 2, aa ] ],
										attr : F.plotProps
									})
								} else {
									pieceBar.push({
										path : false,
										attr : false
									})
								}
							}
						}
						if (pieceBar.length) {
							U.push({
								section : "Series",
								serie : C,
								subSection : "Plot",
								paths : pieceBar,
								mousearea : "paths"
							})
						} else {
							U.push({
								section : "Series",
								serie : C,
								subSection : "Plot",
								path : false,
								attr : false,
								mousearea : "paths"
							})
						}
					}
				} else {
					if (F.type == "line") {
						U.push({
							section : "Series",
							serie : C,
							subSection : "Fill",
							path : false,
							attr : false
						})
					}
					U.push({
						section : "Series",
						serie : C,
						subSection : "Plot",
						path : false,
						attr : false,
						mousearea : "paths"
					});
					if (F.type == "line") {
						U.push({
							section : "Series",
							serie : C,
							subSection : "Dot",
							path : false,
							attr : false
						})
					}
				}
			}
			a.beforeShow(o, U);
			b.show(o, U);
			a.afterShow(o, U);
			return U
		},
		grid : function(l, aa) {
			if (b.executeIfChanged(l, [ "values", "series", "axis", "labels",
					"margins", "width", "height", "features.grid" ])) {
				var C = l.opt;
				var I = l.opt.features.grid;
				var d = l.paper;
				var E = l.axis;
				var r = l.opt.labels;
				var w = (C.width - C.margins[3] - C.margins[1])
						/ (r.length > 1 ? r.length - 1 : 1);
				var V = (C.width - C.margins[3] - C.margins[1])
						/ (r.length > 0 ? r.length : 1);
				var Z, Y, Q, P, G, W, U, f, J, o;
				var L = [];
				var m = I.labelsCenter;
				if (m == "auto") {
					m = (l.indexCenter == "bar")
				}
				if (E.x && E.x.props.labels) {
					var H = false;
					var u = E.x.props.labelsAnchor || "auto";
					if (u == "auto") {
						u = E.x.props.labelsRotate > 0 ? "start"
								: (E.x.props.labelsRotate == 0 ? "middle"
										: "end")
					}
					var ab = E.x.props.labelsPos || "auto";
					if (ab == "auto") {
						ab = m ? (E.x.props.labelsRotate == 0 ? u : "middle")
								: "start"
					}
					for (Z = 0; Z < r.length; Z++) {
						if ((typeof r[Z] != "boolean" && r[Z] != null) || r[Z]) {
							if (!E.x.props.labelsSkip
									|| Z >= E.x.props.labelsSkip) {
								J = r[Z];
								if (E.x.props.labelsFormatHandler) {
									J = E.x.props.labelsFormatHandler(J)
								}
								o = (E.x.props.prefix ? E.x.props.prefix : "")
										+ J
										+ (E.x.props.suffix ? E.x.props.suffix
												: "");
								W = C.margins[3]
										+ Z
										* (m ? V : w)
										+ (E.x.props.labelsMargin ? E.x.props.labelsMargin
												: 0);
								if (ab == "middle") {
									W += (m ? V : w) / 2
								}
								if (ab == "end") {
									W += (m ? V : w)
								}
								U = C.height - C.margins[2]
										+ E.x.props.labelsDistance;
								f = d.text(W, U, o).attr(E.x.props.labelsProps)
										.toBack();
								f.attr({
									"text-anchor" : u
								});
								var h = false;
								var D = f.getBBox();
								var ad = {
									x : D.x,
									y : D.y
								};
								var ac = {
									x : D.x + D.width,
									y : D.y + D.height
								};
								var q = {
									x : W,
									y : U
								};
								rotate = function(j, i) {
									var y = j.x * Math.cos(i) - j.y
											* Math.sin(i), x = j.x
											* Math.sin(i) + j.y * Math.cos(i);
									return {
										x : y,
										y : x
									}
								};
								collide = function(j, i, ag) {
									xor = function(ai, ah) {
										return (ai || ah) && !(ai && ah)
									};
									if (j.alpha != i.alpha) {
										throw "collide doens't support rects with different rotations"
									}
									var ae = rotate({
										x : j.p1.x - ag,
										y : j.p1.y - ag
									}, -j.alpha);
									var af = rotate({
										x : j.p2.x + ag,
										y : j.p2.y + ag
									}, -j.alpha);
									var x = rotate({
										x : i.p1.x - ag,
										y : i.p1.y - ag
									}, -i.alpha);
									var y = rotate({
										x : i.p2.x + ag,
										y : i.p2.y + ag
									}, -i.alpha);
									return !xor(Math.min(ae.x, af.x) > Math
											.max(x.x, y.x), Math
											.max(ae.x, af.x) < Math.min(x.x,
											y.x))
											&& !xor(Math.min(ae.y, af.y) > Math
													.max(x.y, y.y), Math.max(
													ae.y, af.y) < Math.min(x.y,
													y.y))
								};
								rotated = function(x, i, ae) {
									translate = function(ag, af) {
										return {
											x : ag.x + af.x,
											y : ag.y + af.y
										}
									};
									negate = function(af) {
										return {
											x : -af.x,
											y : -af.y
										}
									};
									var y = translate(rotate(translate(x.p1,
											negate(i)), ae), i);
									var j = translate(rotate(translate(x.p2,
											negate(i)), ae), i);
									return {
										p1 : y,
										p2 : j,
										alpha : x.alpha + ae
									}
								};
								D = function(y) {
									if (y.alpha == 0) {
										return {
											x : y.p1.x,
											y : y.p1.y,
											width : y.p2.x - y.p1.x,
											height : y.p2.y - y.p1.y
										}
									} else {
										var j = [];
										j.push({
											x : 0,
											y : 0
										});
										j.push({
											x : y.p2.x - y.p1.x,
											y : 0
										});
										j.push({
											x : 0,
											y : y.p2.y - y.p1.y
										});
										j.push({
											x : y.p2.x - y.p1.x,
											y : y.p2.y - y.p1.y
										});
										var ah = [];
										ah.left = 0;
										ah.right = 0;
										ah.top = 0;
										ah.bottom = 0;
										for (_px = 0; _px < j.length; _px++) {
											var af = j[_px];
											var ag = parseInt((af.x * Math
													.cos(y.alpha))
													+ (af.y * Math.sin(y.alpha)));
											var ae = parseInt((af.x * Math
													.sin(y.alpha))
													+ (af.y * Math.cos(y.alpha)));
											ah.left = Math.min(ah.left, ag);
											ah.right = Math.max(ah.right, ag);
											ah.top = Math.min(ah.top, ae);
											ah.bottom = Math.max(ah.bottom, ae)
										}
										var x = parseInt(Math.abs(ah.right
												- ah.left));
										var i = parseInt(Math.abs(ah.bottom
												- ah.top));
										var ag = ((y.p1.x + y.p2.x) / 2) - x
												/ 2;
										var ae = ((y.p1.y + y.p2.y) / 2) - i
												/ 2;
										return {
											x : ag,
											y : ae,
											width : x,
											height : i
										}
									}
								};
								var X = Raphael.rad(E.x.props.labelsRotate);
								var K = rotated({
									p1 : ad,
									p2 : ac,
									alpha : 0
								}, q, X);
								var k = E.x.props.labelsMarginRight ? E.x.props.labelsMarginRight / 2
										: 0;
								if (E.x.props.labelsHideCovered && H
										&& collide(K, H, k)) {
									f.hide();
									r[Z] = false
								} else {
									h = D(K);
									if (I.nx == "auto"
											&& (h.x < 0 || h.x + h.width > C.width)) {
										f.hide();
										r[Z] = false
									} else {
										H = K
									}
								}
								if (E.x.props.labelsRotate) {
									f.rotate(E.x.props.labelsRotate, W, U)
											.toBack()
								}
								L.push({
									path : [ [ "RELEMENT", f ] ],
									attr : false
								})
							}
						}
					}
				}
				aa.push({
					section : "Axis",
					serie : "x",
					subSection : "Label",
					paths : L
				});
				if (E.x && E.x.props.title) {
					Q = C.margins[3]
							+ Math
									.floor((C.width - C.margins[1] - C.margins[3]) / 2);
					P = C.height - C.margins[2] + E.x.props.titleDistance
							* (c.browser.msie ? E.x.props.titleDistanceIE : 1);
					aa.push({
						section : "Axis",
						serie : "x",
						subSection : "Title",
						path : [ [ "TEXT", E.x.props.title, Q, P ] ],
						attr : E.x.props.titleProps
					})
				} else {
					aa.push({
						section : "Axis",
						serie : "x",
						subSection : "Title",
						path : false,
						attr : false
					})
				}
				for ( var z in [ "l", "r" ]) {
					Y = [ "l", "r" ][z];
					if (E[Y] && E[Y].props.labels && I.ny) {
						L = [];
						for (Z = E[Y].props.labelsSkip ? E[Y].props.labelsSkip
								: 0; Z <= I.ny; Z++) {
							var t = (C.height - C.margins[2] - C.margins[0])
									/ I.ny;
							if (Y == "r") {
								W = C.width - C.margins[1]
										+ E[Y].props.labelsDistance;
								if (!E[Y].props.labelsProps["text-anchor"]) {
									E[Y].props.labelsProps["text-anchor"] = "start"
								}
							} else {
								W = C.margins[3] - E[Y].props.labelsDistance;
								if (!E[Y].props.labelsProps["text-anchor"]) {
									E[Y].props.labelsProps["text-anchor"] = "end"
								}
							}
							if (E[Y].props.labelsAnchor
									&& E[Y].props.labelsAnchor != "auto") {
								E[Y].props.labelsProps["text-anchor"] = E[Y].props.labelsAnchor
							}
							J = (E[Y].min + (Z * ((E[Y].max - E[Y].min) / I.ny)));
							if (E[Y].normalizationBase) {
								J = Math.round(J / E[Y].normalizationBase)
										/ (1 / E[Y].normalizationBase)
							}
							if (E[Y].props.labelsFormatHandler) {
								J = E[Y].props.labelsFormatHandler(J)
							}
							if (E[Y].props.labelsCompactUnits) {
								J = b.compactUnits(J,
										E[Y].props.labelsCompactUnits)
							}
							o = (E[Y].props.prefix ? E[Y].props.prefix : "")
									+ J
									+ (E[Y].props.suffix ? E[Y].props.suffix
											: "");
							U = C.height - C.margins[2] - Z * t;
							L
									.push({
										path : [ [
												"TEXT",
												o,
												W,
												U
														+ (E[Y].props.labelsMargin ? E[Y].props.labelsMargin
																: 0) ] ],
										attr : E[Y].props.labelsProps
									})
						}
						aa.push({
							section : "Axis",
							serie : Y,
							subSection : "Label",
							paths : L
						})
					} else {
						aa.push({
							section : "Axis",
							serie : Y,
							subSection : "Label",
							paths : []
						})
					}
					if (E[Y] && E[Y].props.title) {
						if (Y == "r") {
							Q = C.width
									- C.margins[1]
									+ E[Y].props.titleDistance
									* (c.browser.msie ? E[Y].props.titleDistanceIE
											: 1)
						} else {
							Q = C.margins[3]
									- E[Y].props.titleDistance
									* (c.browser.msie ? E[Y].props.titleDistanceIE
											: 1)
						}
						var B = b._clone(E[Y].props.titleProps);
						B.rotation = Y == "l" ? 270 : 90;
						aa
								.push({
									section : "Axis",
									serie : Y,
									subSection : "Title",
									path : [ [
											"TEXT",
											E[Y].props.title,
											Q,
											C.margins[0]
													+ Math
															.floor((C.height
																	- C.margins[0] - C.margins[2]) / 2) ] ],
									attr : B
								})
					} else {
						aa.push({
							section : "Axis",
							serie : Y,
							subSection : "Title",
							path : false,
							attr : false
						})
					}
				}
				if (I.nx || I.ny) {
					var R = [], A = [], n = [], T = I.nx == "auto" ? (m ? r.length
							: r.length - 1)
							: I.nx, S = I.ny, g = (C.height - C.margins[2] - C.margins[0])
							/ (S ? S : 1), p = (C.width - C.margins[1] - C.margins[3])
							/ (T ? T : 1), O = typeof I.forceBorder == "object" ? I.forceBorder[3]
							: I.forceBorder, N = typeof I.forceBorder == "object" ? I.forceBorder[1]
							: I.forceBorder, v = typeof I.forceBorder == "object" ? I.forceBorder[0]
							: I.forceBorder, s = typeof I.forceBorder == "object" ? I.forceBorder[2]
							: I.forceBorder, M = S > 0 ? (typeof I.draw == "object" ? I.draw[0]
							: I.draw)
							: false, F = T > 0 ? typeof I.draw == "object" ? I.draw[1]
							: I.draw
							: false;
					if (S > 0) {
						for (Z = 0; Z < S + 1; Z++) {
							if (v && Z == 0 || s && Z == S || M && Z > 0
									&& Z < S) {
								R.push([ "M", C.margins[3] - I.extra[3],
										C.margins[0] + Math.round(Z * g) ]);
								R.push([ "L",
										C.width - C.margins[1] + I.extra[1],
										C.margins[0] + Math.round(Z * g) ])
							}
							if (Z < S) {
								if (Z % 2 == 0 && I.evenHProps || Z % 2 == 1
										&& I.oddHProps) {
									A.push({
										path : [ [
												"RECT",
												C.margins[3] - I.extra[3],
												C.margins[0]
														+ Math.round(Z * g),
												C.width - C.margins[1]
														+ I.extra[1],
												C.margins[0]
														+ Math.round((Z + 1)
																* g) ] ],
										attr : Z % 2 == 0 ? I.evenHProps
												: I.oddHProps
									})
								} else {
									A.push({
										path : false,
										attr : false
									})
								}
							}
						}
					}
					for (Z = 0; Z < T + 1; Z++) {
						if (O
								&& Z == 0
								|| N
								&& Z == T
								|| F
								&& ((I.nx != "auto" && Z > 0 && Z < T) || (I.nx == "auto" && (typeof r[Z] != "boolean" || r[Z])))) {
							R.push([ "M", C.margins[3] + Math.round(Z * p),
									C.margins[0] - I.extra[0] ]);
							R.push([ "L", C.margins[3] + Math.round(Z * p),
									C.height - C.margins[2] + I.extra[2] ])
						}
						if (Z < T) {
							if (Z % 2 == 0 && I.evenVProps || Z % 2 == 1
									&& I.oddVProps) {
								n.push({
									path : [ [
											"RECT",
											C.margins[3] + Math.round(Z * p),
											C.margins[0] - I.extra[0],
											C.margins[3]
													+ Math.round((Z + 1) * p),
											C.height - C.margins[2]
													+ I.extra[2], ] ],
									attr : Z % 2 == 0 ? I.evenVProps
											: I.oddVProps
								})
							} else {
								n.push({
									path : false,
									attr : false
								})
							}
						}
					}
					aa.push({
						section : "Grid",
						path : R.length ? R : false,
						attr : R.length ? I.props : false
					});
					aa.push({
						section : "GridBandH",
						paths : A
					});
					aa.push({
						section : "GridBandV",
						paths : n
					});
					var e = [];
					if (I.ticks.active
							&& (typeof I.ticks.active != "object" || I.ticks.active[0])) {
						for (Z = 0; Z < T + 1; Z++) {
							if (I.nx != "auto" || typeof r[Z] != "boolean"
									|| r[Z]) {
								e.push([
										"M",
										C.margins[3] + Math.round(Z * p),
										C.height - C.margins[2]
												- I.ticks.size[1] ]);
								e.push([
										"L",
										C.margins[3] + Math.round(Z * p),
										C.height - C.margins[2]
												+ I.ticks.size[0] ])
							}
						}
					}
					if (I.ticks.active
							&& (typeof I.ticks.active != "object" || I.ticks.active[1])) {
						for (Z = 0; Z < S + 1; Z++) {
							e.push([ "M", C.margins[3] - I.ticks.size[0],
									C.margins[0] + Math.round(Z * g) ]);
							e.push([ "L", C.margins[3] + I.ticks.size[1],
									C.margins[0] + Math.round(Z * g) ])
						}
					}
					if (I.ticks.active
							&& (typeof I.ticks.active != "object" || I.ticks.active[2])) {
						for (Z = 0; Z < S + 1; Z++) {
							e.push([ "M",
									C.width - C.margins[1] - I.ticks.size[1],
									C.margins[0] + Math.round(Z * g) ]);
							e.push([ "L",
									C.width - C.margins[1] + I.ticks.size[0],
									C.margins[0] + Math.round(Z * g) ])
						}
					}
					aa.push({
						section : "Ticks",
						path : e.length ? e : false,
						attr : e.length ? I.ticks.props : false
					})
				}
			}
		}
	}
})(jQuery);
(function(c) {
	var a = c.elycharts.featuresmanager;
	var b = c.elycharts.common;
	c.elycharts.pie = {
		init : function(d) {
		},
		draw : function(E) {
			var e = E.opt;
			var p = E.opt.width;
			var C = E.opt.height;
			var t = E.opt.r ? E.opt.r : Math.floor((p < C ? p : C) / 2.5);
			var g = E.opt.cx ? E.opt.cx : Math.floor(p / 2);
			var f = E.opt.cy ? E.opt.cx : Math.floor(C / 2);
			var A = 0, B, s, v, z, j;
			for (v in e.values) {
				z = {
					visible : false,
					total : 0,
					values : []
				};
				E.plots[v] = z;
				var d = b.areaProps(E, "Series", v);
				if (d.visible) {
					z.visible = true;
					A++;
					z.values = e.values[v];
					for (B = 0, s = z.values.length; B < s; B++) {
						if (z.values[B] > 0) {
							j = b.areaProps(E, "Series", v, B);
							if (typeof j.inside == "undefined" || j.inside < 0) {
								z.total += z.values[B]
							}
						}
					}
					for (B = 0; B < s; B++) {
						if (z.values[B] < z.total * e.valueThresold) {
							z.total = z.total - z.values[B];
							z.values[B] = 0
						}
					}
				}
			}
			var u = t / A;
			var m = -u, k = 0;
			var n = [];
			for (v in e.values) {
				z = E.plots[v];
				var y = [];
				if (z.visible) {
					m += u;
					k += u;
					var F = E.opt.startAngle, D = 0, l = 0;
					if (z.total == 0) {
						E.emptySeries = true;
						j = b.areaProps(E, "Series", "empty");
						y.push({
							path : [ [ "CIRCLE", g, f, t ] ],
							attr : j.plotProps
						})
					} else {
						E.emptySeries = false;
						for (B = 0, s = z.values.length; B < s; B++) {
							var x = z.values[B];
							if (x > 0) {
								j = b.areaProps(E, "Series", v, B);
								if (typeof j.inside == "undefined"
										|| j.inside < 0) {
									F += l;
									D = 360 * x / z.total;
									l = D
								} else {
									D = 360 * values[j.inside] / z.total * x
											/ values[j.inside]
								}
								var o = m, q = k;
								if (j.r) {
									if (j.r > 0) {
										if (j.r <= 1) {
											q = m + u * j.r
										} else {
											q = m + j.r
										}
									} else {
										if (j.r >= -1) {
											o = m + u * (-j.r)
										} else {
											o = m - j.r
										}
									}
								}
								if (!E.opt.clockwise) {
									y.push({
										path : [ [ "SLICE", g, f, q, o, F,
												F + D ] ],
										attr : j.plotProps
									})
								} else {
									y.push({
										path : [ [ "SLICE", g, f, q, o, -F - D,
												-F ] ],
										attr : j.plotProps
									})
								}
							} else {
								y.push({
									path : false,
									attr : false
								})
							}
						}
					}
				} else {
					if (e.values[v] && e.values[v].length) {
						for (B = 0, s = e.values[v].length; B < s; B++) {
							y.push({
								path : false,
								attr : false
							})
						}
					}
				}
				n.push({
					section : "Series",
					serie : v,
					subSection : "Plot",
					paths : y,
					mousearea : "paths"
				})
			}
			a.beforeShow(E, n);
			b.show(E, n);
			a.afterShow(E, n);
			return n
		}
	}
})(jQuery);