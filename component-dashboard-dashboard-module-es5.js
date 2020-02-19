function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-dashboard-dashboard-module"], {
  /***/
  "./node_modules/angular-highcharts/fesm2015/angular-highcharts.js":
  /*!************************************************************************!*\
    !*** ./node_modules/angular-highcharts/fesm2015/angular-highcharts.js ***!
    \************************************************************************/

  /*! exports provided: Chart, ChartDirective, ChartModule, HIGHCHARTS_MODULES, MapChart, StockChart, ɵa */

  /***/
  function node_modulesAngularHighchartsFesm2015AngularHighchartsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chart", function () {
      return Chart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDirective", function () {
      return ChartDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartModule", function () {
      return ChartModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HIGHCHARTS_MODULES", function () {
      return HIGHCHARTS_MODULES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapChart", function () {
      return MapChart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockChart", function () {
      return StockChart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return ChartService;
    });
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/chart.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Chart =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} options
       */
      function Chart() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          series: []
        };

        _classCallCheck(this, Chart);

        this.options = options;
        this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.ref$ = this.refSubject.asObservable();
      }
      /**
       * Add Point
       * @param {?} point         Highcharts.DataPoint, number touple or number
       * @param {?=} serieIndex    Index position of series. This defaults to 0.
       * @param {?=} redraw        Flag whether or not to redraw point. This defaults to true.
       * @param {?=} shift         Shift point to the start of series. This defaults to false.
       * @return {?}
       */


      _createClass(Chart, [{
        key: "addPoint",
        value: function addPoint(point) {
          var serieIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var redraw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var shift = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.ref$.subscribe(
          /**
          * @param {?} chart
          * @return {?}
          */
          function (chart) {
            if (chart.series.length > serieIndex) {
              chart.series[serieIndex].addPoint(point, redraw, shift);
            }
          });
        }
        /**
         * Add Series
         * @param {?} series        Series Configuration
         * @param {?=} redraw        Flag whether or not to redraw series. This defaults to true.
         * @param {?=} animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
         * @return {?}
         */

      }, {
        key: "addSeries",
        value: function addSeries(series) {
          var redraw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var animation = arguments.length > 2 ? arguments[2] : undefined;
          this.ref$.subscribe(
          /**
          * @param {?} chart
          * @return {?}
          */
          function (chart) {
            chart.addSeries(series, redraw, animation);
          });
        }
        /**
         * Remove Point
         * @param {?} pointIndex    Index of Point
         * @param {?=} serieIndex    Specified Index of Series. Defaults to 0.
         * @return {?}
         */

      }, {
        key: "removePoint",
        value: function removePoint(pointIndex) {
          var serieIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          this.ref$.subscribe(
          /**
          * @param {?} chart
          * @return {?}
          */
          function (chart) {
            if (chart.series.length > serieIndex && chart.series[serieIndex].data.length > pointIndex) {
              chart.series[serieIndex].removePoint(pointIndex, true);
            }
          });
        }
        /**
         * Remove Series
         * @param {?} seriesIndex    Index position of series to remove.
         * @return {?}
         */

      }, {
        key: "removeSeries",
        value: function removeSeries(seriesIndex) {
          this.ref$.subscribe(
          /**
          * @param {?} chart
          * @return {?}
          */
          function (chart) {
            if (chart.series.length > seriesIndex) {
              chart.series[seriesIndex].remove(true);
            }
          });
        }
        /**
         * @param {?} el
         * @return {?}
         */

      }, {
        key: "init",
        value: function init(el) {
          var _this = this;

          if (!this.ref) {
            Object(highcharts__WEBPACK_IMPORTED_MODULE_0__["chart"])(el.nativeElement, this.options,
            /**
            * @param {?} chart
            * @return {?}
            */
            function (chart) {
              _this.refSubject.next(chart);

              _this.ref = chart;

              _this.refSubject.complete();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined; // new init subject

            this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
            this.ref$ = this.refSubject.asObservable();
          }
        }
      }]);

      return Chart;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/mapchart.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Felix Itzenplitz. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at
     * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
     */


    var MapChart =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} options
       */
      function MapChart() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          series: []
        };

        _classCallCheck(this, MapChart);

        this.options = options;
        this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.ref$ = this.refSubject.asObservable();
      }
      /**
       * @param {?} el
       * @return {?}
       */


      _createClass(MapChart, [{
        key: "init",
        value: function init(el) {
          var _this2 = this;

          if (!this.ref) {
            Object(highcharts__WEBPACK_IMPORTED_MODULE_0__["mapChart"])(el.nativeElement, this.options,
            /**
            * @param {?} chart
            * @return {?}
            */
            function (chart) {
              _this2.refSubject.next(chart);

              _this2.ref = chart;

              _this2.refSubject.complete();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined; // new init subject

            this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
            this.ref$ = this.refSubject.asObservable();
          }
        }
      }]);

      return MapChart;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stockchart.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Felix Itzenplitz. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at
     * https://github.com/cebor/angular-highcharts/blob/master/LICENSE
     *
     * @author Felix Itzenplitz
     * @author Timothy A. Perez (contributor)
     */


    var StockChart =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} options
       */
      function StockChart() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          series: []
        };

        _classCallCheck(this, StockChart);

        this.options = options;
        this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        this.ref$ = this.refSubject.asObservable();
      }
      /**
       * @param {?} el
       * @return {?}
       */


      _createClass(StockChart, [{
        key: "init",
        value: function init(el) {
          var _this3 = this;

          if (!this.ref) {
            Object(highcharts__WEBPACK_IMPORTED_MODULE_0__["stockChart"])(el.nativeElement, this.options,
            /**
            * @param {?} chart
            * @return {?}
            */
            function (chart) {
              _this3.refSubject.next(chart);

              _this3.ref = chart;

              _this3.refSubject.complete();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined; // new init subject

            this.refSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
            this.ref$ = this.refSubject.asObservable();
          }
        }
      }]);

      return StockChart;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/chart.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ChartDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} el
       */
      function ChartDirective(el) {
        _classCallCheck(this, ChartDirective);

        this.el = el;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(ChartDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.chart.isFirstChange()) {
            this.destroy();
            this.init();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
            this.chart.init(this.el);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          if (this.chart instanceof Chart || this.chart instanceof StockChart || this.chart instanceof MapChart) {
            this.chart.destroy();
          }
        }
      }]);

      return ChartDirective;
    }();

    ChartDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[chart]'
      }]
    }];
    /** @nocollapse */

    ChartDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    ChartDirective.propDecorators = {
      chart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/chart.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var HIGHCHARTS_MODULES = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('HighchartsModules');

    var ChartService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} chartModules
       */
      function ChartService(chartModules) {
        _classCallCheck(this, ChartService);

        this.chartModules = chartModules;
      }
      /**
       * @return {?}
       */


      _createClass(ChartService, [{
        key: "initModules",
        value: function initModules() {
          this.chartModules.forEach(
          /**
          * @param {?} chartModule
          * @return {?}
          */
          function (chartModule) {
            chartModule(highcharts__WEBPACK_IMPORTED_MODULE_0__);
          });
        }
      }]);

      return ChartService;
    }();

    ChartService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }];
    /** @nocollapse */

    ChartService.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [HIGHCHARTS_MODULES]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/chart.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = [];

    var ChartModule =
    /**
     * @param {?} cs
     */
    function ChartModule(cs) {
      _classCallCheck(this, ChartModule);

      this.cs = cs;
      this.cs.initModules();
    };

    ChartModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        exports: [ChartDirective],
        declarations: [ChartDirective],
        providers: [{
          provide: HIGHCHARTS_MODULES,
          useValue: ɵ0
        }, ChartService]
      }]
    }];
    /** @nocollapse */

    ChartModule.ctorParameters = function () {
      return [{
        type: ChartService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-highcharts.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-highcharts.js.map

    /***/

  },

  /***/
  "./node_modules/highcharts/highcharts-more.src.js":
  /*!********************************************************!*\
    !*** ./node_modules/highcharts/highcharts-more.src.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsHighchartsMoreSrcJs(module, exports, __webpack_require__) {
    "use strict";

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Highcharts JS v8.0.0 (2019-12-10)
    *
    * (c) 2009-2018 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */


    (function (factory) {
      if (true && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
      } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (Highcharts) {
          factory(Highcharts);
          factory.Highcharts = Highcharts;
          return factory;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(function (Highcharts) {
      var _modules = Highcharts ? Highcharts._modules : {};

      function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
          obj[path] = fn.apply(null, args);
        }
      }

      _registerModule(_modules, 'parts-more/Pane.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */

        /**
         * @typedef {"arc"|"circle"|"solid"} Highcharts.PaneBackgroundShapeValue
         */
        var extend = U.extend,
            splat = U.splat;
        var CenteredSeriesMixin = H.CenteredSeriesMixin,
            merge = H.merge;
        /* eslint-disable valid-jsdoc */

        H.Chart.prototype.collectionsWithUpdate.push('pane');
        /**
         * The Pane object allows options that are common to a set of X and Y axes.
         *
         * In the future, this can be extended to basic Highcharts and Highstock.
         *
         * @private
         * @class
         * @name Highcharts.Pane
         * @param {Highcharts.PaneOptions} options
         * @param {Highcharts.Chart} chart
         */

        function Pane(options, chart) {
          this.init(options, chart);
        } // Extend the Pane prototype


        extend(Pane.prototype, {
          coll: 'pane',

          /**
           * Initialize the Pane object
           *
           * @private
           * @function Highcharts.Pane#init
           *
           * @param {Highcharts.PaneOptions} options
           *
           * @param {Highcharts.Chart} chart
           */
          init: function init(options, chart) {
            this.chart = chart;
            this.background = [];
            chart.pane.push(this);
            this.setOptions(options);
          },

          /**
           * @private
           * @function Highcharts.Pane#setOptions
           *
           * @param {Highcharts.PaneOptions} options
           */
          setOptions: function setOptions(options) {
            // Set options. Angular charts have a default background (#3318)
            this.options = options = merge(this.defaultOptions, this.chart.angular ? {
              background: {}
            } : void 0, options);
          },

          /**
           * Render the pane with its backgrounds.
           *
           * @private
           * @function Highcharts.Pane#render
           */
          render: function render() {
            var options = this.options,
                backgroundOption = this.options.background,
                renderer = this.chart.renderer,
                len,
                i;

            if (!this.group) {
              this.group = renderer.g('pane-group').attr({
                zIndex: options.zIndex || 0
              }).add();
            }

            this.updateCenter(); // Render the backgrounds

            if (backgroundOption) {
              backgroundOption = splat(backgroundOption);
              len = Math.max(backgroundOption.length, this.background.length || 0);

              for (i = 0; i < len; i++) {
                // #6641 - if axis exists, chart is circular and apply
                // background
                if (backgroundOption[i] && this.axis) {
                  this.renderBackground(merge(this.defaultBackgroundOptions, backgroundOption[i]), i);
                } else if (this.background[i]) {
                  this.background[i] = this.background[i].destroy();
                  this.background.splice(i, 1);
                }
              }
            }
          },

          /**
           * Render an individual pane background.
           *
           * @private
           * @function Highcharts.Pane#renderBackground
           *
           * @param {Highcharts.PaneBackgroundOptions} backgroundOptions
           *        Background options
           *
           * @param {number} i
           *        The index of the background in this.backgrounds
           */
          renderBackground: function renderBackground(backgroundOptions, i) {
            var method = 'animate',
                attribs = {
              'class': 'highcharts-pane ' + (backgroundOptions.className || '')
            };

            if (!this.chart.styledMode) {
              extend(attribs, {
                'fill': backgroundOptions.backgroundColor,
                'stroke': backgroundOptions.borderColor,
                'stroke-width': backgroundOptions.borderWidth
              });
            }

            if (!this.background[i]) {
              this.background[i] = this.chart.renderer.path().add(this.group);
              method = 'attr';
            }

            this.background[i][method]({
              'd': this.axis.getPlotBandPath(backgroundOptions.from, backgroundOptions.to, backgroundOptions)
            }).attr(attribs);
          },

          /**
           * The pane serves as a container for axes and backgrounds for circular
           * gauges and polar charts.
           *
           * @since        2.3.0
           * @product      highcharts
           * @requires     highcharts-more
           * @optionparent pane
           */
          defaultOptions: {
            /**
             * The end angle of the polar X axis or gauge value axis, given in
             * degrees where 0 is north. Defaults to [startAngle](#pane.startAngle)
             * + 360.
             *
             * @sample {highcharts} highcharts/demo/gauge-vu-meter/
             *         VU-meter with custom start and end angle
             *
             * @type      {number}
             * @since     2.3.0
             * @product   highcharts
             * @apioption pane.endAngle
             */

            /**
             * The center of a polar chart or angular gauge, given as an array
             * of [x, y] positions. Positions can be given as integers that
             * transform to pixels, or as percentages of the plot area size.
             *
             * @sample {highcharts} highcharts/demo/gauge-vu-meter/
             *         Two gauges with different center
             *
             * @type    {Array<string|number>}
             * @default ["50%", "50%"]
             * @since   2.3.0
             * @product highcharts
             */
            center: ['50%', '50%'],

            /**
             * The size of the pane, either as a number defining pixels, or a
             * percentage defining a percentage of the plot are.
             *
             * @sample {highcharts} highcharts/demo/gauge-vu-meter/
             *         Smaller size
             *
             * @type    {number|string}
             * @product highcharts
             */
            size: '85%',

            /**
             * The start angle of the polar X axis or gauge axis, given in degrees
             * where 0 is north. Defaults to 0.
             *
             * @sample {highcharts} highcharts/demo/gauge-vu-meter/
             *         VU-meter with custom start and end angle
             *
             * @since   2.3.0
             * @product highcharts
             */
            startAngle: 0
          },

          /**
           * An array of background items for the pane.
           *
           * @sample {highcharts} highcharts/demo/gauge-speedometer/
           *         Speedometer gauge with multiple backgrounds
           *
           * @type         {Array<*>}
           * @optionparent pane.background
           */
          defaultBackgroundOptions: {
            /**
             * The class name for this background.
             *
             * @sample {highcharts} highcharts/css/pane/
             *         Panes styled by CSS
             * @sample {highstock} highcharts/css/pane/
             *         Panes styled by CSS
             * @sample {highmaps} highcharts/css/pane/
             *         Panes styled by CSS
             *
             * @type      {string}
             * @default   highcharts-pane
             * @since     5.0.0
             * @apioption pane.background.className
             */

            /**
             * The shape of the pane background. When `solid`, the background
             * is circular. When `arc`, the background extends only from the min
             * to the max of the value axis.
             *
             * @type    {Highcharts.PaneBackgroundShapeValue}
             * @since   2.3.0
             * @product highcharts
             */
            shape: 'circle',

            /**
             * The pixel border width of the pane background.
             *
             * @since 2.3.0
             * @product highcharts
             */
            borderWidth: 1,

            /**
             * The pane background border color.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @since   2.3.0
             * @product highcharts
             */
            borderColor: '#cccccc',

            /**
             * The background color or gradient for the pane.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @default { linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, stops: [[0, #ffffff], [1, #e6e6e6]] }
             * @since   2.3.0
             * @product highcharts
             */
            backgroundColor: {
              /** @ignore-option */
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },

              /** @ignore-option */
              stops: [[0, '#ffffff'], [1, '#e6e6e6']]
            },

            /** @ignore-option */
            from: -Number.MAX_VALUE,

            /**
             * The inner radius of the pane background. Can be either numeric
             * (pixels) or a percentage string.
             *
             * @type    {number|string}
             * @since   2.3.0
             * @product highcharts
             */
            innerRadius: 0,

            /** @ignore-option */
            to: Number.MAX_VALUE,

            /**
             * The outer radius of the circular pane background. Can be either
             * numeric (pixels) or a percentage string.
             *
             * @type     {number|string}
             * @since    2.3.0
             * @product  highcharts
             */
            outerRadius: '105%'
          },

          /**
           * Gets the center for the pane and its axis.
           *
           * @private
           * @function Highcharts.Pane#updateCenter
           * @param {Highcharts.RadialAxis} [axis]
           * @return {void}
           */
          updateCenter: function updateCenter(axis) {
            this.center = (axis || this.axis || {}).center = CenteredSeriesMixin.getCenter.call(this);
          },

          /**
           * Destroy the pane item
           *
           * @ignore
           * @private
           * @function Highcharts.Pane#destroy
           * /
          destroy: function () {
              H.erase(this.chart.pane, this);
              this.background.forEach(function (background) {
                  background.destroy();
              });
              this.background.length = 0;
              this.group = this.group.destroy();
          },
          */

          /**
           * Update the pane item with new options
           *
           * @private
           * @function Highcharts.Pane#update
           * @param {Highcharts.PaneOptions} options
           *        New pane options
           * @param {boolean} [redraw]
           * @return {void}
           */
          update: function update(options, redraw) {
            merge(true, this.options, options);
            merge(true, this.chart.options.pane, options); // #9917

            this.setOptions(this.options);
            this.render();
            this.chart.axes.forEach(function (axis) {
              if (axis.pane === this) {
                axis.pane = null;
                axis.update({}, redraw);
              }
            }, this);
          }
        });
        H.Pane = Pane;
      });

      _registerModule(_modules, 'parts-more/RadialAxis.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var correctFloat = U.correctFloat,
            defined = U.defined,
            extend = U.extend,
            pick = U.pick,
            pInt = U.pInt,
            relativeLength = U.relativeLength,
            wrap = U.wrap;
        var addEvent = H.addEvent,
            Axis = H.Axis,
            merge = H.merge,
            noop = H.noop,
            Tick = H.Tick,
            // @todo Extract this to a new file:
        hiddenAxisMixin,
            // @todo Extract this to a new file
        radialAxisMixin,
            axisProto = Axis.prototype,
            tickProto = Tick.prototype; // Augmented methods for the x axis in order to hide it completely, used for
        // the X axis in gauges

        hiddenAxisMixin = {
          getOffset: noop,
          redraw: function redraw() {
            this.isDirty = false; // prevent setting Y axis dirty
          },
          render: function render() {
            this.isDirty = false; // prevent setting Y axis dirty
          },
          createLabelCollector: function createLabelCollector() {
            return false;
          },
          setScale: noop,
          setCategories: noop,
          setTitle: noop
        }; // Augmented methods for the value axis

        radialAxisMixin = {
          // The default options extend defaultYAxisOptions
          defaultRadialGaugeOptions: {
            labels: {
              align: 'center',
              x: 0,
              y: null // auto

            },
            minorGridLineWidth: 0,
            minorTickInterval: 'auto',
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickWidth: 1,
            tickLength: 10,
            tickPosition: 'inside',
            tickWidth: 2,
            title: {
              rotation: 0
            },
            zIndex: 2 // behind dials, points in the series group

          },
          // Circular axis around the perimeter of a polar chart
          defaultCircularOptions: {
            gridLineWidth: 1,
            labels: {
              align: null,
              distance: 15,
              x: 0,
              y: null,
              style: {
                textOverflow: 'none' // wrap lines by default (#7248)

              }
            },
            maxPadding: 0,
            minPadding: 0,
            showLastLabel: false,
            tickLength: 0
          },
          // Radial axis, like a spoke in a polar chart
          defaultRadialOptions: {
            /**
             * In a polar chart, this is the angle of the Y axis in degrees, where
             * 0 is up and 90 is right. The angle determines the position of the
             * axis line and the labels, though the coordinate system is unaffected.
             * Since v8.0.0 this option is also applicable for X axis (inverted
             * polar).
             *
             * @sample {highcharts} highcharts/xaxis/angle/
             *         Custom X axis' angle on inverted polar chart
             * @sample {highcharts} highcharts/yaxis/angle/
             *         Dual axis polar chart
             *
             * @type      {number}
             * @default   0
             * @since     4.2.7
             * @product   highcharts
             * @apioption xAxis.angle
             */

            /**
             * Polar charts only. Whether the grid lines should draw as a polygon
             * with straight lines between categories, or as circles. Can be either
             * `circle` or `polygon`. Since v8.0.0 this option is also applicable
             * for X axis (inverted polar).
             *
             * @sample {highcharts} highcharts/demo/polar-spider/
             *         Polygon grid lines
             * @sample {highcharts} highcharts/xaxis/gridlineinterpolation/
             *         Circle and polygon on inverted polar
             * @sample {highcharts} highcharts/yaxis/gridlineinterpolation/
             *         Circle and polygon
             *
             * @type       {string}
             * @product    highcharts
             * @validvalue ["circle", "polygon"]
             * @apioption  xAxis.gridLineInterpolation
             */
            gridLineInterpolation: 'circle',
            gridLineWidth: 1,
            labels: {
              align: 'right',
              x: -3,
              y: -2
            },
            showLastLabel: false,
            title: {
              x: 4,
              text: null,
              rotation: 90
            }
          },

          /* eslint-disable valid-jsdoc */

          /**
           * Merge and set options.
           * @private
           */
          setOptions: function setOptions(userOptions) {
            var options = this.options = merge(this.defaultOptions, this.defaultPolarOptions, userOptions); // Make sure the plotBands array is instanciated for each Axis
            // (#2649)

            if (!options.plotBands) {
              options.plotBands = [];
            }

            H.fireEvent(this, 'afterSetOptions');
          },

          /**
           * Wrap the getOffset method to return zero offset for title or labels in a
           * radial axis.
           * @private
           */
          getOffset: function getOffset() {
            // Call the Axis prototype method (the method we're in now is on the
            // instance)
            axisProto.getOffset.call(this); // Title or label offsets are not counted

            this.chart.axisOffset[this.side] = 0;
          },

          /**
           * Get the path for the axis line. This method is also referenced in the
           * getPlotLinePath method.
           * @private
           */
          getLinePath: function getLinePath(lineWidth, radius) {
            var center = this.center,
                end,
                chart = this.chart,
                r = pick(radius, center[2] / 2 - this.offset),
                path;

            if (this.isCircular || typeof radius !== 'undefined') {
              path = this.chart.renderer.symbols.arc(this.left + center[0], this.top + center[1], r, r, {
                start: this.startAngleRad,
                end: this.endAngleRad,
                open: true,
                innerR: 0
              }); // Bounds used to position the plotLine label next to the line
              // (#7117)

              path.xBounds = [this.left + center[0]];
              path.yBounds = [this.top + center[1] - r];
            } else {
              end = this.postTranslate(this.angleRad, r);
              path = ['M', center[0] + chart.plotLeft, center[1] + chart.plotTop, 'L', end.x, end.y];
            }

            return path;
          },

          /**
           * Override setAxisTranslation by setting the translation to the
           * difference in rotation. This allows the translate method to return
           * angle for any given value.
           * @private
           */
          setAxisTranslation: function setAxisTranslation() {
            // Call uber method
            axisProto.setAxisTranslation.call(this); // Set transA and minPixelPadding

            if (this.center) {
              // it's not defined the first time
              if (this.isCircular) {
                this.transA = (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1);
              } else {
                this.transA = this.center[2] / 2 / (this.max - this.min || 1);
              }

              if (this.isXAxis) {
                this.minPixelPadding = this.transA * this.minPointOffset;
              } else {
                // This is a workaround for regression #2593, but categories
                // still don't position correctly.
                this.minPixelPadding = 0;
              }
            }
          },

          /**
           * In case of auto connect, add one closestPointRange to the max value
           * right before tickPositions are computed, so that ticks will extend
           * passed the real max.
           * @private
           */
          beforeSetTickPositions: function beforeSetTickPositions() {
            // If autoConnect is true, polygonal grid lines are connected, and
            // one closestPointRange is added to the X axis to prevent the last
            // point from overlapping the first.
            this.autoConnect = this.isCircular && typeof pick(this.userMax, this.options.max) === 'undefined' && correctFloat(this.endAngleRad - this.startAngleRad) === correctFloat(2 * Math.PI); // This will lead to add an extra tick to xAxis in order to display a
            // correct range on inverted polar

            if (!this.isCircular && this.chart.inverted) {
              this.max++;
            }

            if (this.autoConnect) {
              this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0; // #1197, #2260
            }
          },

          /**
           * Override the setAxisSize method to use the arc's circumference as
           * length. This allows tickPixelInterval to apply to pixel lengths along
           * the perimeter.
           * @private
           */
          setAxisSize: function setAxisSize() {
            axisProto.setAxisSize.call(this);

            if (this.isRadial) {
              // Set the center array
              this.pane.updateCenter(this); // The sector is used in Axis.translate to compute the
              // translation of reversed axis points (#2570)

              if (this.isCircular) {
                this.sector = this.endAngleRad - this.startAngleRad;
              } // Axis len is used to lay out the ticks


              this.len = this.width = this.height = this.center[2] * pick(this.sector, 1) / 2;
            }
          },

          /**
           * Returns the x, y coordinate of a point given by a value and a pixel
           * distance from center
           * @private
           */
          getPosition: function getPosition(value, length) {
            var translatedVal = this.translate(value);
            return this.postTranslate(this.isCircular ? translatedVal : this.angleRad, // #2848
            // In case when translatedVal is negative, the 0 value must be
            // used instead, in order to deal with lines and labels that
            // fall out of the visible range near the center of a pane
            pick(this.isCircular ? length : translatedVal < 0 ? 0 : translatedVal, this.center[2] / 2) - this.offset);
          },

          /**
           * Translate from intermediate plotX (angle), plotY (axis.len - radius)
           * to final chart coordinates.
           * @private
           */
          postTranslate: function postTranslate(angle, radius) {
            var chart = this.chart,
                center = this.center;
            angle = this.startAngleRad + angle;
            return {
              x: chart.plotLeft + center[0] + Math.cos(angle) * radius,
              y: chart.plotTop + center[1] + Math.sin(angle) * radius
            };
          },

          /**
           * Find the path for plot bands along the radial axis.
           * @private
           */
          getPlotBandPath: function getPlotBandPath(from, to, options) {
            var center = this.center,
                startAngleRad = this.startAngleRad,
                fullRadius = center[2] / 2,
                radii = [pick(options.outerRadius, '100%'), options.innerRadius, pick(options.thickness, 10)],
                offset = Math.min(this.offset, 0),
                percentRegex = /%$/,
                start,
                end,
                angle,
                xOnPerimeter,
                open,
                isCircular = this.isCircular,
                // X axis in a polar chart
            ret; // Polygonal plot bands

            if (this.options.gridLineInterpolation === 'polygon') {
              ret = this.getPlotLinePath({
                value: from
              }).concat(this.getPlotLinePath({
                value: to,
                reverse: true
              })); // Circular grid bands
            } else {
              // Keep within bounds
              from = Math.max(from, this.min);
              to = Math.min(to, this.max); // Plot bands on Y axis (radial axis) - inner and outer radius
              // depend on to and from

              if (!isCircular) {
                radii[0] = this.translate(from);
                radii[1] = this.translate(to);
              } // Convert percentages to pixel values


              radii = radii.map(function (radius) {
                if (percentRegex.test(radius)) {
                  radius = pInt(radius, 10) * fullRadius / 100;
                }

                return radius;
              }); // Handle full circle

              if (options.shape === 'circle' || !isCircular) {
                start = -Math.PI / 2;
                end = Math.PI * 1.5;
                open = true;
              } else {
                start = startAngleRad + this.translate(from);
                end = startAngleRad + this.translate(to);
              }

              radii[0] -= offset; // #5283

              radii[2] -= offset; // #5283

              ret = this.chart.renderer.symbols.arc(this.left + center[0], this.top + center[1], radii[0], radii[0], {
                // Math is for reversed yAxis (#3606)
                start: Math.min(start, end),
                end: Math.max(start, end),
                innerR: pick(radii[1], radii[0] - radii[2]),
                open: open
              }); // Provide positioning boxes for the label (#6406)

              if (isCircular) {
                angle = (end + start) / 2;
                xOnPerimeter = this.left + center[0] + center[2] / 2 * Math.cos(angle);
                ret.xBounds = angle > -Math.PI / 2 && angle < Math.PI / 2 ? // Right hemisphere
                [xOnPerimeter, this.chart.plotWidth] : // Left hemisphere
                [0, xOnPerimeter];
                ret.yBounds = [this.top + center[1] + center[2] / 2 * Math.sin(angle)]; // Shift up or down to get the label clear of the perimeter

                ret.yBounds[0] += angle > -Math.PI && angle < 0 || angle > Math.PI ? -10 : 10;
              }
            }

            return ret;
          },

          /* *
           * Find the correct end values of crosshair in polar.
           */
          getCrosshairPosition: function getCrosshairPosition(options, x1, y1) {
            var axis = this,
                value = options.value,
                shapeArgs,
                end,
                x2,
                y2;

            if (axis.isCircular) {
              if (!defined(value)) {
                // When the snap is set to false
                x2 = options.chartX || 0;
                y2 = options.chartY || 0;
                value = axis.translate(Math.atan2(y2 - y1, x2 - x1) - axis.startAngleRad, true);
              } else if (options.point) {
                // When the snap is set to true
                shapeArgs = options.point.shapeArgs || {};

                if (shapeArgs.start) {
                  // Find a true value of the point based on the
                  // angle
                  value = axis.translate(options.point.rectPlotY, true);
                }
              }

              end = axis.getPosition(value);
              x2 = end.x;
              y2 = end.y;
            } else {
              if (!defined(value)) {
                x2 = options.chartX;
                y2 = options.chartY;
              }

              if (defined(x2) && defined(y2)) {
                // Calculate radius of non-circular axis' crosshair
                value = axis.translate(Math.min(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), axis.len), true);
              }
            }

            return [value, x2 || 0, y2 || 0];
          },

          /* *
           * Find the path for plot lines perpendicular to the radial axis.
           */
          getPlotLinePath: function getPlotLinePath(options) {
            var axis = this,
                center = axis.center,
                chart = axis.chart,
                inverted = chart.inverted,
                value = options.value,
                reverse = options.reverse,
                end = axis.getPosition(value),
                background = axis.pane.options.background ? axis.pane.options.background[0] || axis.pane.options.background : {},
                innerRadius = background.innerRadius || '0%',
                outerRadius = background.outerRadius || '100%',
                x1 = center[0] + chart.plotLeft,
                y1 = center[1] + chart.plotTop,
                x2 = end.x,
                y2 = end.y,
                a,
                b,
                otherAxis,
                xy,
                tickPositions,
                crossPos,
                ret; // Crosshair logic

            if (options.isCrosshair) {
              // Find crosshair's position and perform destructuring assignment
              crossPos = this.getCrosshairPosition(options, x1, y1);
              value = crossPos[0];
              x2 = crossPos[1];
              y2 = crossPos[2];
            } // Spokes


            if (axis.isCircular) {
              a = typeof innerRadius === 'string' ? relativeLength(innerRadius, 1) : innerRadius / Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
              b = typeof outerRadius === 'string' ? relativeLength(outerRadius, 1) : outerRadius / Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
              ret = ['M', x1 + a * (x2 - x1), y1 - a * (y1 - y2), 'L', x2 - (1 - b) * (x2 - x1), y2 + (1 - b) * (y1 - y2)]; // Concentric circles
            } else {
              // Pick the right values depending if it is grid line or
              // crosshair
              value = axis.translate(value); // This is required in case when xAxis is non-circular to
              // prevent grid lines (or crosshairs, if enabled) from
              // rendering above the center after they supposed to be
              // displayed below the center point

              if (!options.isCrosshair && (value < 0 || value > axis.height) && inverted) {
                value = 0;
              }

              if (axis.options.gridLineInterpolation === 'circle') {
                // A value of 0 is in the center, so it won't be
                // visible, but draw it anyway for update and animation
                // (#2366)
                ret = axis.getLinePath(0, value); // Concentric polygons
              } else {
                // Find the other axis (a circular one) in the same pane
                chart[inverted ? 'yAxis' : 'xAxis'].forEach(function (a) {
                  if (a.pane === axis.pane) {
                    otherAxis = a;
                  }
                });
                ret = [];
                tickPositions = otherAxis.tickPositions;

                if (otherAxis.autoConnect) {
                  tickPositions = tickPositions.concat([tickPositions[0]]);
                } // Reverse the positions for concatenation of polygonal
                // plot bands


                if (reverse) {
                  tickPositions = [].concat(tickPositions).reverse();
                }

                tickPositions.forEach(function (pos, i) {
                  xy = otherAxis.getPosition(pos, value);
                  ret.push(i ? 'L' : 'M', xy.x, xy.y);
                });
              }
            }

            return ret;
          },

          /* *
           * Find the position for the axis title, by default inside the gauge
           */
          getTitlePosition: function getTitlePosition() {
            var center = this.center,
                chart = this.chart,
                titleOptions = this.options.title;
            return {
              x: chart.plotLeft + center[0] + (titleOptions.x || 0),
              y: chart.plotTop + center[1] - {
                high: 0.5,
                middle: 0.25,
                low: 0
              }[titleOptions.align] * center[2] + (titleOptions.y || 0)
            };
          },

          /* *
           * Attach and return collecting function for labels in radial axis for
           * anti-collision.
           */
          createLabelCollector: function createLabelCollector() {
            var axis = this;
            return function () {
              if (axis.isRadial && axis.tickPositions && // undocumented option for now, but working
              axis.options.labels.allowOverlap !== true) {
                return axis.tickPositions.map(function (pos) {
                  return axis.ticks[pos] && axis.ticks[pos].label;
                }).filter(function (label) {
                  return Boolean(label);
                });
              }
            };
          }
          /* eslint-enable valid-jsdoc */

        };
        /* eslint-disable no-invalid-this */
        // Actions before axis init.

        addEvent(Axis, 'init', function (e) {
          var chart = this.chart,
              inverted = chart.inverted,
              angular = chart.angular,
              polar = chart.polar,
              isX = this.isXAxis,
              coll = this.coll,
              isHidden = angular && isX,
              isCircular,
              chartOptions = chart.options,
              paneIndex = e.userOptions.pane || 0,
              pane = this.pane = chart.pane && chart.pane[paneIndex]; // Prevent changes for colorAxis

          if (coll === 'colorAxis') {
            this.isRadial = false;
            return;
          } // Before prototype.init


          if (angular) {
            extend(this, isHidden ? hiddenAxisMixin : radialAxisMixin);
            isCircular = !isX;

            if (isCircular) {
              this.defaultPolarOptions = this.defaultRadialGaugeOptions;
            }
          } else if (polar) {
            extend(this, radialAxisMixin); // Check which axis is circular

            isCircular = this.horiz;
            this.defaultPolarOptions = isCircular ? this.defaultCircularOptions : merge(coll === 'xAxis' ? this.defaultOptions : this.defaultYAxisOptions, this.defaultRadialOptions); // Apply the stack labels for yAxis in case of inverted chart

            if (inverted && coll === 'yAxis') {
              this.defaultPolarOptions.stackLabels = this.defaultYAxisOptions.stackLabels;
            }
          } // Disable certain features on angular and polar axes


          if (angular || polar) {
            this.isRadial = true;
            chartOptions.chart.zoomType = null;

            if (!this.labelCollector) {
              this.labelCollector = this.createLabelCollector();
            }

            if (this.labelCollector) {
              // Prevent overlapping axis labels (#9761)
              chart.labelCollectors.push(this.labelCollector);
            }
          } else {
            this.isRadial = false;
          } // A pointer back to this axis to borrow geometry


          if (pane && isCircular) {
            pane.axis = this;
          }

          this.isCircular = isCircular;
        });
        addEvent(Axis, 'afterInit', function () {
          var chart = this.chart,
              options = this.options,
              isHidden = chart.angular && this.isXAxis,
              pane = this.pane,
              paneOptions = pane && pane.options;

          if (!isHidden && pane && (chart.angular || chart.polar)) {
            // Start and end angle options are
            // given in degrees relative to top, while internal computations are
            // in radians relative to right (like SVG).
            // Y axis in polar charts
            this.angleRad = (options.angle || 0) * Math.PI / 180; // Gauges

            this.startAngleRad = (paneOptions.startAngle - 90) * Math.PI / 180;
            this.endAngleRad = (pick(paneOptions.endAngle, paneOptions.startAngle + 360) - 90) * Math.PI / 180; // Gauges

            this.offset = options.offset || 0;
          }
        }); // Wrap auto label align to avoid setting axis-wide rotation on radial axes
        // (#4920)

        addEvent(Axis, 'autoLabelAlign', function (e) {
          if (this.isRadial) {
            e.align = void 0;
            e.preventDefault();
          }
        }); // Remove label collector function on axis remove/update

        addEvent(Axis, 'destroy', function () {
          if (this.chart && this.chart.labelCollectors) {
            var index = this.chart.labelCollectors.indexOf(this.labelCollector);

            if (index >= 0) {
              this.chart.labelCollectors.splice(index, 1);
            }
          }
        }); // Add special cases within the Tick class' methods for radial axes.

        addEvent(Tick, 'afterGetPosition', function (e) {
          if (this.axis.getPosition) {
            extend(e.pos, this.axis.getPosition(this.pos));
          }
        }); // Find the center position of the label based on the distance option.

        addEvent(Tick, 'afterGetLabelPosition', function (e) {
          var axis = this.axis,
              label = this.label,
              labelBBox = label.getBBox(),
              labelOptions = axis.options.labels,
              optionsY = labelOptions.y,
              ret,
              centerSlot = 20,
              // 20 degrees to each side at the top and bottom
          align = labelOptions.align,
              angle = (axis.translate(this.pos) + axis.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
              correctAngle = Math.round(angle),
              labelDir = 'end',
              // Direction of the label 'start' or 'end'
          reducedAngle1 = correctAngle < 0 ? correctAngle + 360 : correctAngle,
              reducedAngle2 = reducedAngle1,
              translateY = 0,
              translateX = 0,
              labelYPosCorrection = labelOptions.y === null ? -labelBBox.height * 0.3 : 0;

          if (axis.isRadial) {
            // Both X and Y axes in a polar chart
            ret = axis.getPosition(this.pos, axis.center[2] / 2 + relativeLength(pick(labelOptions.distance, -25), axis.center[2] / 2, -axis.center[2] / 2)); // Automatically rotated

            if (labelOptions.rotation === 'auto') {
              label.attr({
                rotation: angle
              }); // Vertically centered
            } else if (optionsY === null) {
              optionsY = axis.chart.renderer.fontMetrics(label.styles && label.styles.fontSize).b - labelBBox.height / 2;
            } // Automatic alignment


            if (align === null) {
              if (axis.isCircular) {
                // Y axis
                if (labelBBox.width > axis.len * axis.tickInterval / (axis.max - axis.min)) {
                  // #3506
                  centerSlot = 0;
                }

                if (angle > centerSlot && angle < 180 - centerSlot) {
                  align = 'left'; // right hemisphere
                } else if (angle > 180 + centerSlot && angle < 360 - centerSlot) {
                  align = 'right'; // left hemisphere
                } else {
                  align = 'center'; // top or bottom
                }
              } else {
                align = 'center';
              }

              label.attr({
                align: align
              });
            } // Auto alignment for solid-gauges with two labels (#10635)


            if (align === 'auto' && axis.tickPositions.length === 2 && axis.isCircular) {
              // Angles reduced to 0 - 90 or 180 - 270
              if (reducedAngle1 > 90 && reducedAngle1 < 180) {
                reducedAngle1 = 180 - reducedAngle1;
              } else if (reducedAngle1 > 270 && reducedAngle1 <= 360) {
                reducedAngle1 = 540 - reducedAngle1;
              } // Angles reduced to 0 - 180


              if (reducedAngle2 > 180 && reducedAngle2 <= 360) {
                reducedAngle2 = 360 - reducedAngle2;
              }

              if (axis.pane.options.startAngle === correctAngle || axis.pane.options.startAngle === correctAngle + 360 || axis.pane.options.startAngle === correctAngle - 360) {
                labelDir = 'start';
              }

              if (correctAngle >= -90 && correctAngle <= 90 || correctAngle >= -360 && correctAngle <= -270 || correctAngle >= 270 && correctAngle <= 360) {
                align = labelDir === 'start' ? 'right' : 'left';
              } else {
                align = labelDir === 'start' ? 'left' : 'right';
              } // For angles beetwen (90 + n * 180) +- 20


              if (reducedAngle2 > 70 && reducedAngle2 < 110) {
                align = 'center';
              } // auto Y translation


              if (reducedAngle1 < 15 || reducedAngle1 >= 180 && reducedAngle1 < 195) {
                translateY = labelBBox.height * 0.3;
              } else if (reducedAngle1 >= 15 && reducedAngle1 <= 35) {
                translateY = labelDir === 'start' ? 0 : labelBBox.height * 0.75;
              } else if (reducedAngle1 >= 195 && reducedAngle1 <= 215) {
                translateY = labelDir === 'start' ? labelBBox.height * 0.75 : 0;
              } else if (reducedAngle1 > 35 && reducedAngle1 <= 90) {
                translateY = labelDir === 'start' ? -labelBBox.height * 0.25 : labelBBox.height;
              } else if (reducedAngle1 > 215 && reducedAngle1 <= 270) {
                translateY = labelDir === 'start' ? labelBBox.height : -labelBBox.height * 0.25;
              } // auto X translation


              if (reducedAngle2 < 15) {
                translateX = labelDir === 'start' ? -labelBBox.height * 0.15 : labelBBox.height * 0.15;
              } else if (reducedAngle2 > 165 && reducedAngle2 <= 180) {
                translateX = labelDir === 'start' ? labelBBox.height * 0.15 : -labelBBox.height * 0.15;
              }

              label.attr({
                align: align
              });
              label.translate(translateX, translateY + labelYPosCorrection);
            }

            e.pos.x = ret.x + labelOptions.x;
            e.pos.y = ret.y + optionsY;
          }
        }); // Wrap the getMarkPath function to return the path of the radial marker

        wrap(tickProto, 'getMarkPath', function (proceed, x, y, tickLength, tickWidth, horiz, renderer) {
          var axis = this.axis,
              endPoint,
              ret;

          if (axis.isRadial) {
            endPoint = axis.getPosition(this.pos, axis.center[2] / 2 + tickLength);
            ret = ['M', x, y, 'L', endPoint.x, endPoint.y];
          } else {
            ret = proceed.call(this, x, y, tickLength, tickWidth, horiz, renderer);
          }

          return ret;
        });
      });

      _registerModule(_modules, 'parts-more/AreaRangeSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var defined = U.defined,
            extend = U.extend,
            isArray = U.isArray,
            isNumber = U.isNumber,
            pick = U.pick;
        var noop = H.noop,
            Series = H.Series,
            seriesType = H.seriesType,
            seriesTypes = H.seriesTypes,
            seriesProto = Series.prototype,
            pointProto = H.Point.prototype;
        /**
         * The area range series is a carteseian series with higher and lower values for
         * each point along an X axis, where the area between the values is shaded.
         *
         * @sample {highcharts} highcharts/demo/arearange/
         *         Area range chart
         * @sample {highstock} stock/demo/arearange/
         *         Area range chart
         *
         * @extends      plotOptions.area
         * @product      highcharts highstock
         * @excluding    stack, stacking
         * @requires     highcharts-more
         * @optionparent plotOptions.arearange
         */

        seriesType('arearange', 'area', {
          /**
           * Whether to apply a drop shadow to the graph line. Since 2.3 the shadow
           * can be an object configuration containing `color`, `offsetX`, `offsetY`,
           * `opacity` and `width`.
           *
           * @type      {boolean|Highcharts.ShadowOptionsObject}
           * @product   highcharts
           * @apioption plotOptions.arearange.shadow
           */

          /**
           * @default   low
           * @apioption plotOptions.arearange.colorKey
           */

          /**
           * Pixel width of the arearange graph line.
           *
           * @since 2.3.0
           *
           * @private
           */
          lineWidth: 1,
          threshold: null,
          tooltip: {
            pointFormat: "<span style=\"color:{series.color}\">\u25CF</span> " + '{series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
          },

          /**
           * Whether the whole area or just the line should respond to mouseover
           * tooltips and other mouse or touch events.
           *
           * @since 2.3.0
           *
           * @private
           */
          trackByArea: true,

          /**
           * Extended data labels for range series types. Range series data labels use
           * no `x` and `y` options. Instead, they have `xLow`, `xHigh`, `yLow` and
           * `yHigh` options to allow the higher and lower data label sets
           * individually.
           *
           * @declare Highcharts.SeriesAreaRangeDataLabelsOptionsObject
           * @exclude x, y
           * @since   2.3.0
           * @product highcharts highstock
           *
           * @private
           */
          dataLabels: {
            align: null,
            verticalAlign: null,

            /**
             * X offset of the lower data labels relative to the point value.
             *
             * @sample highcharts/plotoptions/arearange-datalabels/
             *         Data labels on range series
             * @sample highcharts/plotoptions/arearange-datalabels/
             *         Data labels on range series
             */
            xLow: 0,

            /**
             * X offset of the higher data labels relative to the point value.
             *
             * @sample highcharts/plotoptions/arearange-datalabels/
             *         Data labels on range series
             */
            xHigh: 0,

            /**
             * Y offset of the lower data labels relative to the point value.
             *
             * @sample highcharts/plotoptions/arearange-datalabels/
             *         Data labels on range series
             */
            yLow: 0,

            /**
             * Y offset of the higher data labels relative to the point value.
             *
             * @sample highcharts/plotoptions/arearange-datalabels/
             *         Data labels on range series
             */
            yHigh: 0
          } // Prototype members

        }, {
          pointArrayMap: ['low', 'high'],
          pointValKey: 'low',
          deferTranslatePolar: true,

          /* eslint-disable valid-jsdoc */

          /**
           * @private
           */
          toYData: function toYData(point) {
            return [point.low, point.high];
          },

          /**
           * Translate a point's plotHigh from the internal angle and radius measures
           * to true plotHigh coordinates. This is an addition of the toXY method
           * found in Polar.js, because it runs too early for arearanges to be
           * considered (#3419).
           * @private
           */
          highToXY: function highToXY(point) {
            // Find the polar plotX and plotY
            var chart = this.chart,
                xy = this.xAxis.postTranslate(point.rectPlotX, this.yAxis.len - point.plotHigh);
            point.plotHighX = xy.x - chart.plotLeft;
            point.plotHigh = xy.y - chart.plotTop;
            point.plotLowX = point.plotX;
          },

          /**
           * Translate data points from raw values x and y to plotX and plotY.
           * @private
           */
          translate: function translate() {
            var series = this,
                yAxis = series.yAxis,
                hasModifyValue = !!series.modifyValue;
            seriesTypes.area.prototype.translate.apply(series); // Set plotLow and plotHigh

            series.points.forEach(function (point) {
              var high = point.high,
                  plotY = point.plotY;

              if (point.isNull) {
                point.plotY = null;
              } else {
                point.plotLow = plotY;
                point.plotHigh = yAxis.translate(hasModifyValue ? series.modifyValue(high, point) : high, 0, 1, 0, 1);

                if (hasModifyValue) {
                  point.yBottom = point.plotHigh;
                }
              }
            }); // Postprocess plotHigh

            if (this.chart.polar) {
              this.points.forEach(function (point) {
                series.highToXY(point);
                point.tooltipPos = [(point.plotHighX + point.plotLowX) / 2, (point.plotHigh + point.plotLow) / 2];
              });
            }
          },

          /**
           * Extend the line series' getSegmentPath method by applying the segment
           * path to both lower and higher values of the range.
           * @private
           */
          getGraphPath: function getGraphPath(points) {
            var highPoints = [],
                highAreaPoints = [],
                i,
                getGraphPath = seriesTypes.area.prototype.getGraphPath,
                point,
                pointShim,
                linePath,
                lowerPath,
                options = this.options,
                connectEnds = this.chart.polar && options.connectEnds !== false,
                connectNulls = options.connectNulls,
                step = options.step,
                higherPath,
                higherAreaPath;
            points = points || this.points;
            i = points.length; // Create the top line and the top part of the area fill. The area fill
            // compensates for null points by drawing down to the lower graph,
            // moving across the null gap and starting again at the lower graph.

            i = points.length;

            while (i--) {
              point = points[i];

              if (!point.isNull && !connectEnds && !connectNulls && (!points[i + 1] || points[i + 1].isNull)) {
                highAreaPoints.push({
                  plotX: point.plotX,
                  plotY: point.plotY,
                  doCurve: false // #5186, gaps in areasplinerange fill

                });
              }

              pointShim = {
                polarPlotY: point.polarPlotY,
                rectPlotX: point.rectPlotX,
                yBottom: point.yBottom,
                // plotHighX is for polar charts
                plotX: pick(point.plotHighX, point.plotX),
                plotY: point.plotHigh,
                isNull: point.isNull
              };
              highAreaPoints.push(pointShim);
              highPoints.push(pointShim);

              if (!point.isNull && !connectEnds && !connectNulls && (!points[i - 1] || points[i - 1].isNull)) {
                highAreaPoints.push({
                  plotX: point.plotX,
                  plotY: point.plotY,
                  doCurve: false // #5186, gaps in areasplinerange fill

                });
              }
            } // Get the paths


            lowerPath = getGraphPath.call(this, points);

            if (step) {
              if (step === true) {
                step = 'left';
              }

              options.step = {
                left: 'right',
                center: 'center',
                right: 'left'
              }[step]; // swap for reading in getGraphPath
            }

            higherPath = getGraphPath.call(this, highPoints);
            higherAreaPath = getGraphPath.call(this, highAreaPoints);
            options.step = step; // Create a line on both top and bottom of the range

            linePath = [].concat(lowerPath, higherPath); // For the area path, we need to change the 'move' statement
            // into 'lineTo' or 'curveTo'

            if (!this.chart.polar && higherAreaPath[0] === 'M') {
              higherAreaPath[0] = 'L'; // this probably doesn't work for spline
            }

            this.graphPath = linePath;
            this.areaPath = lowerPath.concat(higherAreaPath); // Prepare for sideways animation

            linePath.isArea = true;
            linePath.xMap = lowerPath.xMap;
            this.areaPath.xMap = lowerPath.xMap;
            return linePath;
          },

          /**
           * Extend the basic drawDataLabels method by running it for both lower and
           * higher values.
           * @private
           */
          drawDataLabels: function drawDataLabels() {
            var data = this.points,
                length = data.length,
                i,
                originalDataLabels = [],
                dataLabelOptions = this.options.dataLabels,
                point,
                up,
                inverted = this.chart.inverted,
                upperDataLabelOptions,
                lowerDataLabelOptions; // Split into upper and lower options. If data labels is an array, the
            // first element is the upper label, the second is the lower.
            //
            // TODO: We want to change this and allow multiple labels for both upper
            // and lower values in the future - introducing some options for which
            // point value to use as Y for the dataLabel, so that this could be
            // handled in Series.drawDataLabels. This would also improve performance
            // since we now have to loop over all the points multiple times to work
            // around the data label logic.

            if (isArray(dataLabelOptions)) {
              if (dataLabelOptions.length > 1) {
                upperDataLabelOptions = dataLabelOptions[0];
                lowerDataLabelOptions = dataLabelOptions[1];
              } else {
                upperDataLabelOptions = dataLabelOptions[0];
                lowerDataLabelOptions = {
                  enabled: false
                };
              }
            } else {
              // Make copies
              upperDataLabelOptions = extend({}, dataLabelOptions);
              upperDataLabelOptions.x = dataLabelOptions.xHigh;
              upperDataLabelOptions.y = dataLabelOptions.yHigh;
              lowerDataLabelOptions = extend({}, dataLabelOptions);
              lowerDataLabelOptions.x = dataLabelOptions.xLow;
              lowerDataLabelOptions.y = dataLabelOptions.yLow;
            } // Draw upper labels


            if (upperDataLabelOptions.enabled || this._hasPointLabels) {
              // Set preliminary values for plotY and dataLabel
              // and draw the upper labels
              i = length;

              while (i--) {
                point = data[i];

                if (point) {
                  up = upperDataLabelOptions.inside ? point.plotHigh < point.plotLow : point.plotHigh > point.plotLow;
                  point.y = point.high;
                  point._plotY = point.plotY;
                  point.plotY = point.plotHigh; // Store original data labels and set preliminary label
                  // objects to be picked up in the uber method

                  originalDataLabels[i] = point.dataLabel;
                  point.dataLabel = point.dataLabelUpper; // Set the default offset

                  point.below = up;

                  if (inverted) {
                    if (!upperDataLabelOptions.align) {
                      upperDataLabelOptions.align = up ? 'right' : 'left';
                    }
                  } else {
                    if (!upperDataLabelOptions.verticalAlign) {
                      upperDataLabelOptions.verticalAlign = up ? 'top' : 'bottom';
                    }
                  }
                }
              }

              this.options.dataLabels = upperDataLabelOptions;

              if (seriesProto.drawDataLabels) {
                // #1209:
                seriesProto.drawDataLabels.apply(this, arguments);
              } // Reset state after the upper labels were created. Move
              // it to point.dataLabelUpper and reassign the originals.
              // We do this here to support not drawing a lower label.


              i = length;

              while (i--) {
                point = data[i];

                if (point) {
                  point.dataLabelUpper = point.dataLabel;
                  point.dataLabel = originalDataLabels[i];
                  delete point.dataLabels;
                  point.y = point.low;
                  point.plotY = point._plotY;
                }
              }
            } // Draw lower labels


            if (lowerDataLabelOptions.enabled || this._hasPointLabels) {
              i = length;

              while (i--) {
                point = data[i];

                if (point) {
                  up = lowerDataLabelOptions.inside ? point.plotHigh < point.plotLow : point.plotHigh > point.plotLow; // Set the default offset

                  point.below = !up;

                  if (inverted) {
                    if (!lowerDataLabelOptions.align) {
                      lowerDataLabelOptions.align = up ? 'left' : 'right';
                    }
                  } else {
                    if (!lowerDataLabelOptions.verticalAlign) {
                      lowerDataLabelOptions.verticalAlign = up ? 'bottom' : 'top';
                    }
                  }
                }
              }

              this.options.dataLabels = lowerDataLabelOptions;

              if (seriesProto.drawDataLabels) {
                seriesProto.drawDataLabels.apply(this, arguments);
              }
            } // Merge upper and lower into point.dataLabels for later destroying


            if (upperDataLabelOptions.enabled) {
              i = length;

              while (i--) {
                point = data[i];

                if (point) {
                  point.dataLabels = [point.dataLabelUpper, point.dataLabel].filter(function (label) {
                    return !!label;
                  });
                }
              }
            } // Reset options


            this.options.dataLabels = dataLabelOptions;
          },
          alignDataLabel: function alignDataLabel() {
            seriesTypes.column.prototype.alignDataLabel.apply(this, arguments);
          },
          drawPoints: function drawPoints() {
            var series = this,
                pointLength = series.points.length,
                point,
                i; // Draw bottom points

            seriesProto.drawPoints.apply(series, arguments); // Prepare drawing top points

            i = 0;

            while (i < pointLength) {
              point = series.points[i]; // Save original props to be overridden by temporary props for top
              // points

              point.origProps = {
                plotY: point.plotY,
                plotX: point.plotX,
                isInside: point.isInside,
                negative: point.negative,
                zone: point.zone,
                y: point.y
              };
              point.lowerGraphic = point.graphic;
              point.graphic = point.upperGraphic;
              point.plotY = point.plotHigh;

              if (defined(point.plotHighX)) {
                point.plotX = point.plotHighX;
              }

              point.y = point.high;
              point.negative = point.high < (series.options.threshold || 0);
              point.zone = series.zones.length && point.getZone();

              if (!series.chart.polar) {
                point.isInside = point.isTopInside = typeof point.plotY !== 'undefined' && point.plotY >= 0 && point.plotY <= series.yAxis.len && // #3519
                point.plotX >= 0 && point.plotX <= series.xAxis.len;
              }

              i++;
            } // Draw top points


            seriesProto.drawPoints.apply(series, arguments); // Reset top points preliminary modifications

            i = 0;

            while (i < pointLength) {
              point = series.points[i];
              point.upperGraphic = point.graphic;
              point.graphic = point.lowerGraphic;
              extend(point, point.origProps);
              delete point.origProps;
              i++;
            }
          },

          /* eslint-enable valid-jsdoc */
          setStackedPoints: noop
        }, {
          /**
           * Range series only. The high or maximum value for each data point.
           * @name Highcharts.Point#high
           * @type {number|undefined}
           */

          /**
           * Range series only. The low or minimum value for each data point.
           * @name Highcharts.Point#low
           * @type {number|undefined}
           */

          /* eslint-disable valid-jsdoc */

          /**
           * @private
           */
          setState: function setState() {
            var prevState = this.state,
                series = this.series,
                isPolar = series.chart.polar;

            if (!defined(this.plotHigh)) {
              // Boost doesn't calculate plotHigh
              this.plotHigh = series.yAxis.toPixels(this.high, true);
            }

            if (!defined(this.plotLow)) {
              // Boost doesn't calculate plotLow
              this.plotLow = this.plotY = series.yAxis.toPixels(this.low, true);
            }

            if (series.stateMarkerGraphic) {
              series.lowerStateMarkerGraphic = series.stateMarkerGraphic;
              series.stateMarkerGraphic = series.upperStateMarkerGraphic;
            } // Change state also for the top marker


            this.graphic = this.upperGraphic;
            this.plotY = this.plotHigh;

            if (isPolar) {
              this.plotX = this.plotHighX;
            } // Top state:


            pointProto.setState.apply(this, arguments);
            this.state = prevState; // Now restore defaults

            this.plotY = this.plotLow;
            this.graphic = this.lowerGraphic;

            if (isPolar) {
              this.plotX = this.plotLowX;
            }

            if (series.stateMarkerGraphic) {
              series.upperStateMarkerGraphic = series.stateMarkerGraphic;
              series.stateMarkerGraphic = series.lowerStateMarkerGraphic; // Lower marker is stored at stateMarkerGraphic
              // to avoid reference duplication (#7021)

              series.lowerStateMarkerGraphic = void 0;
            }

            pointProto.setState.apply(this, arguments);
          },
          haloPath: function haloPath() {
            var isPolar = this.series.chart.polar,
                path = []; // Bottom halo

            this.plotY = this.plotLow;

            if (isPolar) {
              this.plotX = this.plotLowX;
            }

            if (this.isInside) {
              path = pointProto.haloPath.apply(this, arguments);
            } // Top halo


            this.plotY = this.plotHigh;

            if (isPolar) {
              this.plotX = this.plotHighX;
            }

            if (this.isTopInside) {
              path = path.concat(pointProto.haloPath.apply(this, arguments));
            }

            return path;
          },
          destroyElements: function destroyElements() {
            var graphics = ['lowerGraphic', 'upperGraphic'];
            graphics.forEach(function (graphicName) {
              if (this[graphicName]) {
                this[graphicName] = this[graphicName].destroy();
              }
            }, this); // Clear graphic for states, removed in the above each:

            this.graphic = null;
            return pointProto.destroyElements.apply(this, arguments);
          },
          isValid: function isValid() {
            return isNumber(this.low) && isNumber(this.high);
          }
          /* eslint-enable valid-jsdoc */

        });
        /**
         * A `arearange` series. If the [type](#series.arearange.type) option is not
         * specified, it is inherited from [chart.type](#chart.type).
         *
         *
         * @extends   series,plotOptions.arearange
         * @excluding dataParser, dataURL, stack, stacking
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption series.arearange
         */

        /**
         * An array of data points for the series. For the `arearange` series type,
         * points can be given in the following ways:
         *
         * 1.  An array of arrays with 3 or 2 values. In this case, the values
         *     correspond to `x,low,high`. If the first value is a string, it is
         *     applied as the name of the point, and the `x` value is inferred.
         *     The `x` value can also be omitted, in which case the inner arrays
         *     should be of length 2\. Then the `x` value is automatically calculated,
         *     either starting at 0 and incremented by 1, or from `pointStart`
         *     and `pointInterval` given in the series options.
         *     ```js
         *     data: [
         *         [0, 8, 3],
         *         [1, 1, 1],
         *         [2, 6, 8]
         *     ]
         *     ```
         *
         * 2.  An array of objects with named values. The following snippet shows only a
         *     few settings, see the complete options set below. If the total number of
         *     data points exceeds the series'
         *     [turboThreshold](#series.arearange.turboThreshold),
         *     this option is not available.
         *     ```js
         *     data: [{
         *         x: 1,
         *         low: 9,
         *         high: 0,
         *         name: "Point2",
         *         color: "#00FF00"
         *     }, {
         *         x: 1,
         *         low: 3,
         *         high: 4,
         *         name: "Point1",
         *         color: "#FF00FF"
         *     }]
         *     ```
         *
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
         * @extends   series.line.data
         * @excluding marker, y
         * @product   highcharts highstock
         * @apioption series.arearange.data
         */

        /**
         * @extends   series.arearange.dataLabels
         * @product   highcharts highstock
         * @apioption series.arearange.data.dataLabels
         */

        /**
         * The high or maximum value for each data point.
         *
         * @type      {number}
         * @product   highcharts highstock
         * @apioption series.arearange.data.high
         */

        /**
         * The low or minimum value for each data point.
         *
         * @type      {number}
         * @product   highcharts highstock
         * @apioption series.arearange.data.low
         */

        ''; // adds doclets above to tranpiled file
      });

      _registerModule(_modules, 'parts-more/AreaSplineRangeSeries.js', [_modules['parts/Globals.js']], function (H) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        /**
         * The area spline range is a cartesian series type with higher and
         * lower Y values along an X axis. The area inside the range is colored, and
         * the graph outlining the area is a smoothed spline.
         *
         * @sample {highstock|highstock} stock/demo/areasplinerange/
         *         Area spline range
         *
         * @extends   plotOptions.arearange
         * @since     2.3.0
         * @excluding step
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption plotOptions.areasplinerange
         */

        seriesType('areasplinerange', 'arearange', null, {
          getPointSpline: seriesTypes.spline.prototype.getPointSpline
        });
        /**
         * A `areasplinerange` series. If the [type](#series.areasplinerange.type)
         * option is not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.areasplinerange
         * @excluding dataParser, dataURL, stack
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption series.areasplinerange
         */

        /**
         * An array of data points for the series. For the `areasplinerange`
         * series type, points can be given in the following ways:
         *
         * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
         *    to `x,low,high`. If the first value is a string, it is applied as the name
         *    of the point, and the `x` value is inferred. The `x` value can also be
         *    omitted, in which case the inner arrays should be of length 2\. Then the
         *    `x` value is automatically calculated, either starting at 0 and
         *    incremented by 1, or from `pointStart` and `pointInterval` given in the
         *    series options.
         *    ```js
         *    data: [
         *        [0, 0, 5],
         *        [1, 9, 1],
         *        [2, 5, 2]
         *    ]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.areasplinerange.turboThreshold), this option is
         *    not available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        low: 5,
         *        high: 0,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        low: 4,
         *        high: 1,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
         * @extends   series.arearange.data
         * @product   highcharts highstock
         * @apioption series.areasplinerange.data
         */

        ''; // adds doclets above to transpiled file
      });

      _registerModule(_modules, 'parts-more/ColumnRangeSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var clamp = U.clamp,
            pick = U.pick;
        var defaultPlotOptions = H.defaultPlotOptions,
            merge = H.merge,
            noop = H.noop,
            seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        var colProto = seriesTypes.column.prototype;
        /**
         * The column range is a cartesian series type with higher and lower
         * Y values along an X axis. To display horizontal bars, set
         * [chart.inverted](#chart.inverted) to `true`.
         *
         * @sample {highcharts|highstock} highcharts/demo/columnrange/
         *         Inverted column range
         *
         * @extends      plotOptions.column
         * @since        2.3.0
         * @excluding    negativeColor, stacking, softThreshold, threshold
         * @product      highcharts highstock
         * @requires     highcharts-more
         * @optionparent plotOptions.columnrange
         */

        var columnRangeOptions = {
          /**
           * Extended data labels for range series types. Range series data labels
           * have no `x` and `y` options. Instead,
          they have `xLow`,
          `xHigh`,
           * `yLow` and `yHigh` options to allow the higher and lower data label
           * sets individually.
           *
           * @declare   Highcharts.SeriesAreaRangeDataLabelsOptionsObject
           * @extends   plotOptions.arearange.dataLabels
           * @since     2.3.0
           * @product   highcharts highstock
           * @apioption plotOptions.columnrange.dataLabels
           */
          pointRange: null,

          /** @ignore-option */
          marker: null,
          states: {
            hover: {
              /** @ignore-option */
              halo: false
            }
          }
        };
        /**
         * The ColumnRangeSeries class
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.columnrange
         *
         * @augments Highcharts.Series
         */

        seriesType('columnrange', 'arearange', merge(defaultPlotOptions.column, defaultPlotOptions.arearange, columnRangeOptions), {
          // eslint-disable-next-line valid-jsdoc

          /**
           * Translate data points from raw values x and y to plotX and plotY
           * @private
           */
          translate: function translate() {
            var series = this,
                yAxis = series.yAxis,
                xAxis = series.xAxis,
                startAngleRad = xAxis.startAngleRad,
                start,
                chart = series.chart,
                isRadial = series.xAxis.isRadial,
                safeDistance = Math.max(chart.chartWidth, chart.chartHeight) + 999,
                plotHigh; // eslint-disable-next-line valid-jsdoc

            /**
             * Don't draw too far outside plot area (#6835)
             * @private
             */

            function safeBounds(pixelPos) {
              return clamp(pixelPos, -safeDistance, safeDistance);
            }

            colProto.translate.apply(series); // Set plotLow and plotHigh

            series.points.forEach(function (point) {
              var shapeArgs = point.shapeArgs,
                  minPointLength = series.options.minPointLength,
                  heightDifference,
                  height,
                  y;
              point.plotHigh = plotHigh = safeBounds(yAxis.translate(point.high, 0, 1, 0, 1));
              point.plotLow = safeBounds(point.plotY); // adjust shape

              y = plotHigh;
              height = pick(point.rectPlotY, point.plotY) - plotHigh; // Adjust for minPointLength

              if (Math.abs(height) < minPointLength) {
                heightDifference = minPointLength - height;
                height += heightDifference;
                y -= heightDifference / 2; // Adjust for negative ranges or reversed Y axis (#1457)
              } else if (height < 0) {
                height *= -1;
                y -= height;
              }

              if (isRadial) {
                start = point.barX + startAngleRad;
                point.shapeType = 'path';
                point.shapeArgs = {
                  d: series.polarArc(y + height, y, start, start + point.pointWidth)
                };
              } else {
                shapeArgs.height = height;
                shapeArgs.y = y;
                point.tooltipPos = chart.inverted ? [yAxis.len + yAxis.pos - chart.plotLeft - y - height / 2, xAxis.len + xAxis.pos - chart.plotTop - shapeArgs.x - shapeArgs.width / 2, height] : [xAxis.left - chart.plotLeft + shapeArgs.x + shapeArgs.width / 2, yAxis.pos - chart.plotTop + y + height / 2, height]; // don't inherit from column tooltip position - #3372
              }
            });
          },
          directTouch: true,
          trackerGroups: ['group', 'dataLabelsGroup'],
          drawGraph: noop,
          getSymbol: noop,
          // Overrides from modules that may be loaded after this module
          crispCol: function crispCol() {
            return colProto.crispCol.apply(this, arguments);
          },
          drawPoints: function drawPoints() {
            return colProto.drawPoints.apply(this, arguments);
          },
          drawTracker: function drawTracker() {
            return colProto.drawTracker.apply(this, arguments);
          },
          getColumnMetrics: function getColumnMetrics() {
            return colProto.getColumnMetrics.apply(this, arguments);
          },
          pointAttribs: function pointAttribs() {
            return colProto.pointAttribs.apply(this, arguments);
          },
          animate: function animate() {
            return colProto.animate.apply(this, arguments);
          },
          polarArc: function polarArc() {
            return colProto.polarArc.apply(this, arguments);
          },
          translate3dPoints: function translate3dPoints() {
            return colProto.translate3dPoints.apply(this, arguments);
          },
          translate3dShapes: function translate3dShapes() {
            return colProto.translate3dShapes.apply(this, arguments);
          }
        }, {
          setState: colProto.pointClass.prototype.setState
        });
        /**
         * A `columnrange` series. If the [type](#series.columnrange.type)
         * option is not specified, it is inherited from
         * [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.columnrange
         * @excluding dataParser, dataURL, stack, stacking
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption series.columnrange
         */

        /**
         * An array of data points for the series. For the `columnrange` series
         * type, points can be given in the following ways:
         *
         * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
         *    to `x,low,high`. If the first value is a string, it is applied as the name
         *    of the point, and the `x` value is inferred. The `x` value can also be
         *    omitted, in which case the inner arrays should be of length 2\. Then the
         *    `x` value is automatically calculated, either starting at 0 and
         *    incremented by 1, or from `pointStart` and `pointInterval` given in the
         *    series options.
         *    ```js
         *    data: [
         *        [0, 4, 2],
         *        [1, 2, 1],
         *        [2, 9, 10]
         *    ]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.columnrange.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        low: 0,
         *        high: 4,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        low: 5,
         *        high: 3,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
         * @extends   series.arearange.data
         * @excluding marker
         * @product   highcharts highstock
         * @apioption series.columnrange.data
         */

        /**
         * @extends   series.columnrange.dataLabels
         * @product   highcharts highstock
         * @apioption series.columnrange.data.dataLabels
         */

        /**
         * @excluding halo, lineWidth, lineWidthPlus, marker
         * @product   highcharts highstock
         * @apioption series.columnrange.states.hover
         */

        /**
         * @excluding halo, lineWidth, lineWidthPlus, marker
         * @product   highcharts highstock
         * @apioption series.columnrange.states.select
         */

        ''; // adds doclets above into transpiled
      });

      _registerModule(_modules, 'parts-more/ColumnPyramidSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Sebastian Bochan
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var clamp = U.clamp,
            pick = U.pick;
        var seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        var colProto = seriesTypes.column.prototype;
        /**
         * The ColumnPyramidSeries class
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes.columnpyramid
         *
         * @augments Highcharts.Series
         */

        seriesType('columnpyramid', 'column',
        /**
         * Column pyramid series display one pyramid per value along an X axis.
         * To display horizontal pyramids, set [chart.inverted](#chart.inverted) to
         * `true`.
         *
         * @sample {highcharts|highstock} highcharts/demo/column-pyramid/
         *         Column pyramid
         * @sample {highcharts|highstock} highcharts/plotoptions/columnpyramid-stacked/
         *         Column pyramid stacked
         * @sample {highcharts|highstock} highcharts/plotoptions/columnpyramid-inverted/
         *         Column pyramid inverted
         *
         * @extends      plotOptions.column
         * @since        7.0.0
         * @product      highcharts highstock
         * @excluding    boostThreshold, borderRadius, crisp, depth, edgeColor,
         *               edgeWidth, groupZPadding, negativeColor, softThreshold,
         *               threshold, zoneAxis, zones
         * @requires     highcharts-more
         * @optionparent plotOptions.columnpyramid
         */
        {// no additions
        }, {
          /* eslint-disable-next-line valid-jsdoc */

          /**
           * Overrides the column translate method
           * @private
           */
          translate: function translate() {
            var series = this,
                chart = series.chart,
                options = series.options,
                dense = series.dense = series.closestPointRange * series.xAxis.transA < 2,
                borderWidth = series.borderWidth = pick(options.borderWidth, dense ? 0 : 1 // #3635
            ),
                yAxis = series.yAxis,
                threshold = options.threshold,
                translatedThreshold = series.translatedThreshold = yAxis.getThreshold(threshold),
                minPointLength = pick(options.minPointLength, 5),
                metrics = series.getColumnMetrics(),
                pointWidth = metrics.width,
                // postprocessed for border width
            seriesBarW = series.barW = Math.max(pointWidth, 1 + 2 * borderWidth),
                pointXOffset = series.pointXOffset = metrics.offset;

            if (chart.inverted) {
              translatedThreshold -= 0.5; // #3355
            } // When the pointPadding is 0,
            // we want the pyramids to be packed tightly,
            // so we allow individual pyramids to have individual sizes.
            // When pointPadding is greater,
            // we strive for equal-width columns (#2694).


            if (options.pointPadding) {
              seriesBarW = Math.ceil(seriesBarW);
            }

            colProto.translate.apply(series); // Record the new values

            series.points.forEach(function (point) {
              var yBottom = pick(point.yBottom, translatedThreshold),
                  safeDistance = 999 + Math.abs(yBottom),
                  plotY = clamp(point.plotY, -safeDistance, yAxis.len + safeDistance),
                  // Don't draw too far outside plot area
              // (#1303, #2241, #4264)
              barX = point.plotX + pointXOffset,
                  barW = seriesBarW / 2,
                  barY = Math.min(plotY, yBottom),
                  barH = Math.max(plotY, yBottom) - barY,
                  stackTotal,
                  stackHeight,
                  topPointY,
                  topXwidth,
                  bottomXwidth,
                  invBarPos,
                  x1,
                  x2,
                  x3,
                  x4,
                  y1,
                  y2;
              point.barX = barX;
              point.pointWidth = pointWidth; // Fix the tooltip on center of grouped pyramids
              // (#1216, #424, #3648)

              point.tooltipPos = chart.inverted ? [yAxis.len + yAxis.pos - chart.plotLeft - plotY, series.xAxis.len - barX - barW, barH] : [barX + barW, plotY + yAxis.pos - chart.plotTop, barH];
              stackTotal = threshold + (point.total || point.y); // overwrite stacktotal (always 100 / -100)

              if (options.stacking === 'percent') {
                stackTotal = threshold + (point.y < 0) ? -100 : 100;
              } // get the highest point (if stack, extract from total)


              topPointY = yAxis.toPixels(stackTotal, true); // calculate height of stack (in pixels)

              stackHeight = chart.plotHeight - topPointY - (chart.plotHeight - translatedThreshold); // topXwidth and bottomXwidth = width of lines from the center
              // calculated from tanges proportion.

              topXwidth = barW * (barY - topPointY) / stackHeight; // like topXwidth, but with height of point

              bottomXwidth = barW * (barY + barH - topPointY) / stackHeight;
              /*
                      /\
                     /  \
              x1,y1,------ x2,y1
                   /      \
                  ----------
              x4,y2        x3,y2
              */

              x1 = barX - topXwidth + barW;
              x2 = barX + topXwidth + barW;
              x3 = barX + bottomXwidth + barW;
              x4 = barX - bottomXwidth + barW;
              y1 = barY - minPointLength;
              y2 = barY + barH;

              if (point.y < 0) {
                y1 = barY;
                y2 = barY + barH + minPointLength;
              } // inverted chart


              if (chart.inverted) {
                invBarPos = chart.plotWidth - barY;
                stackHeight = topPointY - (chart.plotWidth - translatedThreshold); // proportion tanges

                topXwidth = barW * (topPointY - invBarPos) / stackHeight;
                bottomXwidth = barW * (topPointY - (invBarPos - barH)) / stackHeight;
                x1 = barX + barW + topXwidth; // top bottom

                x2 = x1 - 2 * topXwidth; // top top

                x3 = barX - bottomXwidth + barW; // bottom top

                x4 = barX + bottomXwidth + barW; // bottom bottom

                y1 = barY;
                y2 = barY + barH - minPointLength;

                if (point.y < 0) {
                  y2 = barY + barH + minPointLength;
                }
              } // Register shape type and arguments to be used in drawPoints


              point.shapeType = 'path';
              point.shapeArgs = {
                // args for datalabels positioning
                x: x1,
                y: y1,
                width: x2 - x1,
                height: barH,
                // path of pyramid
                d: ['M', x1, y1, 'L', x2, y1, x3, y2, x4, y2, 'Z']
              };
            });
          }
        });
        /**
         * A `columnpyramid` series. If the [type](#series.columnpyramid.type) option is
         * not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.columnpyramid
         * @excluding connectEnds, connectNulls, dashStyle, dataParser, dataURL,
         *            gapSize, gapUnit, linecap, lineWidth, marker, step
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption series.columnpyramid
         */

        /**
         * @excluding halo, lineWidth, lineWidthPlus, marker
         * @product   highcharts highstock
         * @apioption series.columnpyramid.states.hover
         */

        /**
         * @excluding halo, lineWidth, lineWidthPlus, marker
         * @product   highcharts highstock
         * @apioption series.columnpyramid.states.select
         */

        /**
         * An array of data points for the series. For the `columnpyramid` series type,
         * points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values will be
         *    interpreted as `y` options. The `x` values will be automatically
         *    calculated, either starting at 0 and incremented by 1, or from
         *    `pointStart` and `pointInterval` given in the series options. If the axis
         *    has categories, these will be used. Example:
         *    ```js
         *    data: [0, 5, 3, 5]
         *    ```
         *
         * 2. An array of arrays with 2 values. In this case, the values correspond to
         *    `x,y`. If the first value is a string, it is applied as the name of the
         *    point, and the `x` value is inferred.
         *    ```js
         *    data: [
         *        [0, 6],
         *        [1, 2],
         *        [2, 6]
         *    ]
         *    ```
         *
         * 3. An array of objects with named values. The objects are point configuration
         *    objects as seen below. If the total number of data points exceeds the
         *    series' [turboThreshold](#series.columnpyramid.turboThreshold), this
         *    option is not available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        y: 9,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        y: 6,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/chart/reflow-true/
         *         Numerical values
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
         * @extends   series.line.data
         * @excluding marker
         * @product   highcharts highstock
         * @apioption series.columnpyramid.data
         */

        ''; // adds doclets above to transpiled file;
      });

      _registerModule(_modules, 'parts-more/GaugeSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var clamp = U.clamp,
            isNumber = U.isNumber,
            pick = U.pick,
            pInt = U.pInt;
        var merge = H.merge,
            noop = H.noop,
            Series = H.Series,
            seriesType = H.seriesType,
            TrackerMixin = H.TrackerMixin;
        /**
         * Gauges are circular plots displaying one or more values with a dial pointing
         * to values along the perimeter.
         *
         * @sample highcharts/demo/gauge-speedometer/
         *         Gauge chart
         *
         * @extends      plotOptions.line
         * @excluding    animationLimit, boostThreshold, colorAxis, colorKey,
         *               connectEnds, connectNulls, cropThreshold, dashStyle, dragDrop,
         *               findNearestPointBy, getExtremesFromAll, marker, negativeColor,
         *               pointPlacement, shadow, softThreshold, stacking, states, step,
         *               threshold, turboThreshold, xAxis, zoneAxis, zones
         * @product      highcharts
         * @requires     highcharts-more
         * @optionparent plotOptions.gauge
         */

        seriesType('gauge', 'line', {
          /**
           * When this option is `true`, the dial will wrap around the axes. For
           * instance, in a full-range gauge going from 0 to 360, a value of 400
           * will point to 40\. When `wrap` is `false`, the dial stops at 360.
           *
           * @see [overshoot](#plotOptions.gauge.overshoot)
           *
           * @type      {boolean}
           * @default   true
           * @since     3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.wrap
           */

          /**
           * Data labels for the gauge. For gauges, the data labels are enabled
           * by default and shown in a bordered box below the point.
           *
           * @since   2.3.0
           * @product highcharts
           */
          dataLabels: {
            borderColor: '#cccccc',
            borderRadius: 3,
            borderWidth: 1,
            crop: false,
            defer: false,
            enabled: true,
            verticalAlign: 'top',
            y: 15,
            zIndex: 2
          },

          /**
           * Options for the dial or arrow pointer of the gauge.
           *
           * In styled mode, the dial is styled with the
           * `.highcharts-gauge-series .highcharts-dial` rule.
           *
           * @sample {highcharts} highcharts/css/gauge/
           *         Styled mode
           *
           * @type    {*}
           * @since   2.3.0
           * @product highcharts
           */
          dial: {},

          /**
           * The length of the dial's base part, relative to the total radius
           * or length of the dial.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {string}
           * @default   70%
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.baseLength
           */

          /**
           * The pixel width of the base of the gauge dial. The base is the part
           * closest to the pivot, defined by baseLength.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {number}
           * @default   3
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.baseWidth
           */

          /**
           * The radius or length of the dial, in percentages relative to the
           * radius of the gauge itself.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {string}
           * @default   80%
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.radius
           */

          /**
           * The length of the dial's rear end, the part that extends out on the
           * other side of the pivot. Relative to the dial's length.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {string}
           * @default   10%
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.rearLength
           */

          /**
           * The width of the top of the dial, closest to the perimeter. The pivot
           * narrows in from the base to the top.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {number}
           * @default   1
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.topWidth
           */

          /**
           * The background or fill color of the gauge's dial.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default   #000000
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.backgroundColor
           */

          /**
           * The border color or stroke of the gauge's dial. By default, the
           * borderWidth is 0, so this must be set in addition to a custom border
           * color.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default   #cccccc
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.borderColor
           */

          /**
           * The width of the gauge dial border in pixels.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-dial/
           *         Dial options demonstrated
           *
           * @type      {number}
           * @default   0
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.dial.borderWidth
           */

          /**
           * Allow the dial to overshoot the end of the perimeter axis by this
           * many degrees. Say if the gauge axis goes from 0 to 60, a value of
           * 100, or 1000, will show 5 degrees beyond the end of the axis when this
           * option is set to 5.
           *
           * @see [wrap](#plotOptions.gauge.wrap)
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-overshoot/
           *         Allow 5 degrees overshoot
           *
           * @type      {number}
           * @since     3.0.10
           * @product   highcharts
           * @apioption plotOptions.gauge.overshoot
           */

          /**
           * Options for the pivot or the center point of the gauge.
           *
           * In styled mode, the pivot is styled with the
           * `.highcharts-gauge-series .highcharts-pivot` rule.
           *
           * @sample {highcharts} highcharts/css/gauge/
           *         Styled mode
           *
           * @type    {*}
           * @since   2.3.0
           * @product highcharts
           */
          pivot: {},

          /**
           * The pixel radius of the pivot.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
           *         Pivot options demonstrated
           *
           * @type      {number}
           * @default   5
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.pivot.radius
           */

          /**
           * The border or stroke width of the pivot.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
           *         Pivot options demonstrated
           *
           * @type      {number}
           * @default   0
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.pivot.borderWidth
           */

          /**
           * The border or stroke color of the pivot. In able to change this,
           * the borderWidth must also be set to something other than the default
           * 0.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
           *         Pivot options demonstrated
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default   #cccccc
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.pivot.borderColor
           */

          /**
           * The background color or fill of the pivot.
           *
           * @sample {highcharts} highcharts/plotoptions/gauge-pivot/
           *         Pivot options demonstrated
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default   #000000
           * @since     2.3.0
           * @product   highcharts
           * @apioption plotOptions.gauge.pivot.backgroundColor
           */
          tooltip: {
            headerFormat: ''
          },

          /**
           * Whether to display this particular series or series type in the
           * legend. Defaults to false for gauge series.
           *
           * @since   2.3.0
           * @product highcharts
           */
          showInLegend: false // Prototype members

        }, {
          // chart.angular will be set to true when a gauge series is present,
          // and this will be used on the axes
          angular: true,
          directTouch: true,
          drawGraph: noop,
          fixedBox: true,
          forceDL: true,
          noSharedTooltip: true,
          trackerGroups: ['group', 'dataLabelsGroup'],

          /* eslint-disable valid-jsdoc */

          /**
           * Calculate paths etc
           * @private
           */
          translate: function translate() {
            var series = this,
                yAxis = series.yAxis,
                options = series.options,
                center = yAxis.center;
            series.generatePoints();
            series.points.forEach(function (point) {
              var dialOptions = merge(options.dial, point.dial),
                  radius = pInt(pick(dialOptions.radius, '80%')) * center[2] / 200,
                  baseLength = pInt(pick(dialOptions.baseLength, '70%')) * radius / 100,
                  rearLength = pInt(pick(dialOptions.rearLength, '10%')) * radius / 100,
                  baseWidth = dialOptions.baseWidth || 3,
                  topWidth = dialOptions.topWidth || 1,
                  overshoot = options.overshoot,
                  rotation = yAxis.startAngleRad + yAxis.translate(point.y, null, null, null, true); // Handle the wrap and overshoot options

              if (isNumber(overshoot) || options.wrap === false) {
                overshoot = isNumber(overshoot) ? overshoot / 180 * Math.PI : 0;
                rotation = clamp(rotation, yAxis.startAngleRad - overshoot, yAxis.endAngleRad + overshoot);
              }

              rotation = rotation * 180 / Math.PI;
              point.shapeType = 'path';
              point.shapeArgs = {
                d: dialOptions.path || ['M', -rearLength, -baseWidth / 2, 'L', baseLength, -baseWidth / 2, radius, -topWidth / 2, radius, topWidth / 2, baseLength, baseWidth / 2, -rearLength, baseWidth / 2, 'z'],
                translateX: center[0],
                translateY: center[1],
                rotation: rotation
              }; // Positions for data label

              point.plotX = center[0];
              point.plotY = center[1];
            });
          },

          /**
           * Draw the points where each point is one needle
           * @private
           */
          drawPoints: function drawPoints() {
            var series = this,
                chart = series.chart,
                center = series.yAxis.center,
                pivot = series.pivot,
                options = series.options,
                pivotOptions = options.pivot,
                renderer = chart.renderer;
            series.points.forEach(function (point) {
              var graphic = point.graphic,
                  shapeArgs = point.shapeArgs,
                  d = shapeArgs.d,
                  dialOptions = merge(options.dial, point.dial); // #1233

              if (graphic) {
                graphic.animate(shapeArgs);
                shapeArgs.d = d; // animate alters it
              } else {
                point.graphic = renderer[point.shapeType](shapeArgs).attr({
                  // required by VML when animation is false
                  rotation: shapeArgs.rotation,
                  zIndex: 1
                }).addClass('highcharts-dial').add(series.group);
              } // Presentational attributes


              if (!chart.styledMode) {
                point.graphic[graphic ? 'animate' : 'attr']({
                  stroke: dialOptions.borderColor || 'none',
                  'stroke-width': dialOptions.borderWidth || 0,
                  fill: dialOptions.backgroundColor || '#000000'
                });
              }
            }); // Add or move the pivot

            if (pivot) {
              pivot.animate({
                translateX: center[0],
                translateY: center[1]
              });
            } else {
              series.pivot = renderer.circle(0, 0, pick(pivotOptions.radius, 5)).attr({
                zIndex: 2
              }).addClass('highcharts-pivot').translate(center[0], center[1]).add(series.group); // Presentational attributes

              if (!chart.styledMode) {
                series.pivot.attr({
                  'stroke-width': pivotOptions.borderWidth || 0,
                  stroke: pivotOptions.borderColor || '#cccccc',
                  fill: pivotOptions.backgroundColor || '#000000'
                });
              }
            }
          },

          /**
           * Animate the arrow up from startAngle
           * @private
           */
          animate: function animate(init) {
            var series = this;

            if (!init) {
              series.points.forEach(function (point) {
                var graphic = point.graphic;

                if (graphic) {
                  // start value
                  graphic.attr({
                    rotation: series.yAxis.startAngleRad * 180 / Math.PI
                  }); // animate

                  graphic.animate({
                    rotation: point.shapeArgs.rotation
                  }, series.options.animation);
                }
              }); // delete this function to allow it only once

              series.animate = null;
            }
          },

          /**
           * @private
           */
          render: function render() {
            this.group = this.plotGroup('group', 'series', this.visible ? 'visible' : 'hidden', this.options.zIndex, this.chart.seriesGroup);
            Series.prototype.render.call(this);
            this.group.clip(this.chart.clipRect);
          },

          /**
           * Extend the basic setData method by running processData and generatePoints
           * immediately, in order to access the points from the legend.
           * @private
           */
          setData: function setData(data, redraw) {
            Series.prototype.setData.call(this, data, false);
            this.processData();
            this.generatePoints();

            if (pick(redraw, true)) {
              this.chart.redraw();
            }
          },

          /**
           * Define hasData function for non-cartesian series.
           * Returns true if the series has points at all.
           * @private
           */
          hasData: function hasData() {
            return !!this.points.length; // != 0
          },
          // If the tracking module is loaded, add the point tracker
          drawTracker: TrackerMixin && TrackerMixin.drawTrackerPoint
          /* eslint-enable valid-jsdoc */

        }, {
          // Point members

          /* eslint-disable valid-jsdoc */

          /**
           * Don't do any hover colors or anything
           * @private
           */
          setState: function setState(state) {
            this.state = state;
          }
          /* eslint-enable valid-jsdoc */

        });
        /**
         * A `gauge` series. If the [type](#series.gauge.type) option is not
         * specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.gauge
         * @excluding animationLimit, boostThreshold, connectEnds, connectNulls,
         *            cropThreshold, dashStyle, dataParser, dataURL, findNearestPointBy,
         *            getExtremesFromAll, marker, negativeColor, pointPlacement, shadow,
         *            softThreshold, stack, stacking, states, step, threshold,
         *            turboThreshold, zoneAxis, zones
         * @product   highcharts
         * @requires  highcharts-more
         * @apioption series.gauge
         */

        /**
         * An array of data points for the series. For the `gauge` series type,
         * points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values will be
         *    interpreted as `y` options. Example:
         *    ```js
         *    data: [0, 5, 3, 5]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.gauge.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        y: 6,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        y: 8,
         *        name: "Point1",
         *       color: "#FF00FF"
         *    }]
         *    ```
         *
         * The typical gauge only contains a single data value.
         *
         * @sample {highcharts} highcharts/chart/reflow-true/
         *         Numerical values
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<number|null|*>}
         * @extends   series.line.data
         * @excluding drilldown, marker, x
         * @product   highcharts
         * @apioption series.gauge.data
         */

        ''; // adds the doclets above in the transpiled file
      });

      _registerModule(_modules, 'parts-more/BoxPlotSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var pick = U.pick;
        var noop = H.noop,
            seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        /**
         * The boxplot series type.
         *
         * @private
         * @class
         * @name Highcharts.seriesTypes#boxplot
         *
         * @augments Highcharts.Series
         */

        /**
         * A box plot is a convenient way of depicting groups of data through their
         * five-number summaries: the smallest observation (sample minimum), lower
         * quartile (Q1), median (Q2), upper quartile (Q3), and largest observation
         * (sample maximum).
         *
         * @sample highcharts/demo/box-plot/
         *         Box plot
         *
         * @extends      plotOptions.column
         * @excluding    borderColor, borderRadius, borderWidth, groupZPadding, states
         * @product      highcharts
         * @requires     highcharts-more
         * @optionparent plotOptions.boxplot
         */

        seriesType('boxplot', 'column', {
          threshold: null,
          tooltip: {
            pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> <b> " + '{series.name}</b><br/>' + 'Maximum: {point.high}<br/>' + 'Upper quartile: {point.q3}<br/>' + 'Median: {point.median}<br/>' + 'Lower quartile: {point.q1}<br/>' + 'Minimum: {point.low}<br/>'
          },

          /**
           * The length of the whiskers, the horizontal lines marking low and
           * high values. It can be a numerical pixel value, or a percentage
           * value of the box width. Set `0` to disable whiskers.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         True by default
           *
           * @type    {number|string}
           * @since   3.0
           * @product highcharts
           */
          whiskerLength: '50%',

          /**
           * The fill color of the box.
           *
           * In styled mode, the fill color can be set with the
           * `.highcharts-boxplot-box` class.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           *
           * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default #ffffff
           * @since   3.0
           * @product highcharts
           */
          fillColor: '#ffffff',

          /**
           * The width of the line surrounding the box. If any of
           * [stemWidth](#plotOptions.boxplot.stemWidth),
           * [medianWidth](#plotOptions.boxplot.medianWidth)
           * or [whiskerWidth](#plotOptions.boxplot.whiskerWidth) are `null`,
           * the lineWidth also applies to these lines.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
           *         Error bar styling
           *
           * @since   3.0
           * @product highcharts
           */
          lineWidth: 1,

          /**
           * The color of the median line. If `undefined`, the general series color
           * applies.
           *
           * In styled mode, the median stroke width can be set with the
           * `.highcharts-boxplot-median` class.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/css/boxplot/
           *         Box plot in styled mode
           * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
           *         Error bar styling
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject}
           * @since     3.0
           * @product   highcharts
           * @apioption plotOptions.boxplot.medianColor
           */

          /**
           * The pixel width of the median line. If `null`, the
           * [lineWidth](#plotOptions.boxplot.lineWidth) is used.
           *
           * In styled mode, the median stroke width can be set with the
           * `.highcharts-boxplot-median` class.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/css/boxplot/
           *         Box plot in styled mode
           *
           * @since   3.0
           * @product highcharts
           */
          medianWidth: 2,

          /*
          // States are not working and are removed from docs.
          // Refer to: #2340
          states: {
              hover: {
                  brightness: -0.3
              }
          },
           /**
           * The color of the stem, the vertical line extending from the box to
           * the whiskers. If `undefined`, the series color is used.
           *
           * In styled mode, the stem stroke can be set with the
           * `.highcharts-boxplot-stem` class.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/css/boxplot/
           *         Box plot in styled mode
           * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
           *         Error bar styling
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @since     3.0
           * @product   highcharts
           * @apioption plotOptions.boxplot.stemColor
           */

          /**
           * The dash style of the stem, the vertical line extending from the
           * box to the whiskers.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/css/boxplot/
           *         Box plot in styled mode
           * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
           *         Error bar styling
           *
           * @type      {Highcharts.DashStyleValue}
           * @default   Solid
           * @since     3.0
           * @product   highcharts
           * @apioption plotOptions.boxplot.stemDashStyle
           */

          /**
           * The width of the stem, the vertical line extending from the box to
           * the whiskers. If `undefined`, the width is inherited from the
           * [lineWidth](#plotOptions.boxplot.lineWidth) option.
           *
           * In styled mode, the stem stroke width can be set with the
           * `.highcharts-boxplot-stem` class.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/css/boxplot/
           *         Box plot in styled mode
           * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
           *         Error bar styling
           *
           * @type      {number}
           * @since     3.0
           * @product   highcharts
           * @apioption plotOptions.boxplot.stemWidth
           */

          /**
           * @default   high
           * @apioption plotOptions.boxplot.colorKey
           */

          /**
           * The color of the whiskers, the horizontal lines marking low and high
           * values. When `undefined`, the general series color is used.
           *
           * In styled mode, the whisker stroke can be set with the
           * `.highcharts-boxplot-whisker` class .
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/css/boxplot/
           *         Box plot in styled mode
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @since     3.0
           * @product   highcharts
           * @apioption plotOptions.boxplot.whiskerColor
           */

          /**
           * The line width of the whiskers, the horizontal lines marking low and
           * high values. When `undefined`, the general
           * [lineWidth](#plotOptions.boxplot.lineWidth) applies.
           *
           * In styled mode, the whisker stroke width can be set with the
           * `.highcharts-boxplot-whisker` class.
           *
           * @sample {highcharts} highcharts/plotoptions/box-plot-styling/
           *         Box plot styling
           * @sample {highcharts} highcharts/css/boxplot/
           *         Box plot in styled mode
           *
           * @since   3.0
           * @product highcharts
           */
          whiskerWidth: 2
        },
        /** @lends Highcharts.seriesTypes.boxplot */
        {
          // array point configs are mapped to this
          pointArrayMap: ['low', 'q1', 'median', 'q3', 'high'],
          // return a plain array for speedy calculation
          toYData: function toYData(point) {
            return [point.low, point.q1, point.median, point.q3, point.high];
          },
          // defines the top of the tracker
          pointValKey: 'high',
          // Get presentational attributes
          pointAttribs: function pointAttribs() {
            // No attributes should be set on point.graphic which is the group
            return {};
          },
          // Disable data labels for box plot
          drawDataLabels: noop,
          // Translate data points from raw values x and y to plotX and plotY
          translate: function translate() {
            var series = this,
                yAxis = series.yAxis,
                pointArrayMap = series.pointArrayMap;
            seriesTypes.column.prototype.translate.apply(series); // do the translation on each point dimension

            series.points.forEach(function (point) {
              pointArrayMap.forEach(function (key) {
                if (point[key] !== null) {
                  point[key + 'Plot'] = yAxis.translate(point[key], 0, 1, 0, 1);
                }
              });
            });
          },
          // eslint-disable-next-line valid-jsdoc

          /**
           * Draw the data points
           * @private
           */
          drawPoints: function drawPoints() {
            var series = this,
                points = series.points,
                options = series.options,
                chart = series.chart,
                renderer = chart.renderer,
                q1Plot,
                q3Plot,
                highPlot,
                lowPlot,
                medianPlot,
                medianPath,
                crispCorr,
                crispX = 0,
                boxPath,
                width,
                left,
                right,
                halfWidth,
                // error bar inherits this series type but doesn't do quartiles
            doQuartiles = series.doQuartiles !== false,
                pointWiskerLength,
                whiskerLength = series.options.whiskerLength;
            points.forEach(function (point) {
              var graphic = point.graphic,
                  verb = graphic ? 'animate' : 'attr',
                  shapeArgs = point.shapeArgs,
                  boxAttr = {},
                  stemAttr = {},
                  whiskersAttr = {},
                  medianAttr = {},
                  color = point.color || series.color;

              if (typeof point.plotY !== 'undefined') {
                // crisp vector coordinates
                width = shapeArgs.width;
                left = Math.floor(shapeArgs.x);
                right = left + width;
                halfWidth = Math.round(width / 2);
                q1Plot = Math.floor(doQuartiles ? point.q1Plot : point.lowPlot);
                q3Plot = Math.floor(doQuartiles ? point.q3Plot : point.lowPlot);
                highPlot = Math.floor(point.highPlot);
                lowPlot = Math.floor(point.lowPlot);

                if (!graphic) {
                  point.graphic = graphic = renderer.g('point').add(series.group);
                  point.stem = renderer.path().addClass('highcharts-boxplot-stem').add(graphic);

                  if (whiskerLength) {
                    point.whiskers = renderer.path().addClass('highcharts-boxplot-whisker').add(graphic);
                  }

                  if (doQuartiles) {
                    point.box = renderer.path(boxPath).addClass('highcharts-boxplot-box').add(graphic);
                  }

                  point.medianShape = renderer.path(medianPath).addClass('highcharts-boxplot-median').add(graphic);
                }

                if (!chart.styledMode) {
                  // Stem attributes
                  stemAttr.stroke = point.stemColor || options.stemColor || color;
                  stemAttr['stroke-width'] = pick(point.stemWidth, options.stemWidth, options.lineWidth);
                  stemAttr.dashstyle = point.stemDashStyle || options.stemDashStyle;
                  point.stem.attr(stemAttr); // Whiskers attributes

                  if (whiskerLength) {
                    whiskersAttr.stroke = point.whiskerColor || options.whiskerColor || color;
                    whiskersAttr['stroke-width'] = pick(point.whiskerWidth, options.whiskerWidth, options.lineWidth);
                    point.whiskers.attr(whiskersAttr);
                  }

                  if (doQuartiles) {
                    boxAttr.fill = point.fillColor || options.fillColor || color;
                    boxAttr.stroke = options.lineColor || color;
                    boxAttr['stroke-width'] = options.lineWidth || 0;
                    point.box.attr(boxAttr);
                  } // Median attributes


                  medianAttr.stroke = point.medianColor || options.medianColor || color;
                  medianAttr['stroke-width'] = pick(point.medianWidth, options.medianWidth, options.lineWidth);
                  point.medianShape.attr(medianAttr);
                } // The stem


                crispCorr = point.stem.strokeWidth() % 2 / 2;
                crispX = left + halfWidth + crispCorr;
                point.stem[verb]({
                  d: [// stem up
                  'M', crispX, q3Plot, 'L', crispX, highPlot, // stem down
                  'M', crispX, q1Plot, 'L', crispX, lowPlot]
                }); // The box

                if (doQuartiles) {
                  crispCorr = point.box.strokeWidth() % 2 / 2;
                  q1Plot = Math.floor(q1Plot) + crispCorr;
                  q3Plot = Math.floor(q3Plot) + crispCorr;
                  left += crispCorr;
                  right += crispCorr;
                  point.box[verb]({
                    d: ['M', left, q3Plot, 'L', left, q1Plot, 'L', right, q1Plot, 'L', right, q3Plot, 'L', left, q3Plot, 'z']
                  });
                } // The whiskers


                if (whiskerLength) {
                  crispCorr = point.whiskers.strokeWidth() % 2 / 2;
                  highPlot = highPlot + crispCorr;
                  lowPlot = lowPlot + crispCorr;
                  pointWiskerLength = /%$/.test(whiskerLength) ? halfWidth * parseFloat(whiskerLength) / 100 : whiskerLength / 2;
                  point.whiskers[verb]({
                    d: [// High whisker
                    'M', crispX - pointWiskerLength, highPlot, 'L', crispX + pointWiskerLength, highPlot, // Low whisker
                    'M', crispX - pointWiskerLength, lowPlot, 'L', crispX + pointWiskerLength, lowPlot]
                  });
                } // The median


                medianPlot = Math.round(point.medianPlot);
                crispCorr = point.medianShape.strokeWidth() % 2 / 2;
                medianPlot = medianPlot + crispCorr;
                point.medianShape[verb]({
                  d: ['M', left, medianPlot, 'L', right, medianPlot]
                });
              }
            });
          },
          setStackedPoints: noop // #3890

        });
        /**
         * A `boxplot` series. If the [type](#series.boxplot.type) option is
         * not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.boxplot
         * @excluding dataParser, dataURL, marker, stack, stacking, states
         * @product   highcharts
         * @requires  highcharts-more
         * @apioption series.boxplot
         */

        /**
         * An array of data points for the series. For the `boxplot` series
         * type, points can be given in the following ways:
         *
         * 1. An array of arrays with 6 or 5 values. In this case, the values correspond
         *    to `x,low,q1,median,q3,high`. If the first value is a string, it is
         *    applied as the name of the point, and the `x` value is inferred. The `x`
         *    value can also be omitted, in which case the inner arrays should be of
         *    length 5. Then the `x` value is automatically calculated, either starting
         *    at 0 and incremented by 1, or from `pointStart` and `pointInterval` given
         *    in the series options.
         *    ```js
         *    data: [
         *        [0, 3, 0, 10, 3, 5],
         *        [1, 7, 8, 7, 2, 9],
         *        [2, 6, 9, 5, 1, 3]
         *    ]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.boxplot.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        low: 4,
         *        q1: 9,
         *        median: 9,
         *        q3: 1,
         *        high: 10,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        low: 5,
         *        q1: 7,
         *        median: 3,
         *        q3: 6,
         *        high: 2,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<Array<(number|string),number,number,number,number>|Array<(number|string),number,number,number,number,number>|*>}
         * @extends   series.line.data
         * @excluding marker
         * @product   highcharts
         * @apioption series.boxplot.data
         */

        /**
         * The `high` value for each data point, signifying the highest value
         * in the sample set. The top whisker is drawn here.
         *
         * @type      {number}
         * @product   highcharts
         * @apioption series.boxplot.data.high
         */

        /**
         * The `low` value for each data point, signifying the lowest value
         * in the sample set. The bottom whisker is drawn here.
         *
         * @type      {number}
         * @product   highcharts
         * @apioption series.boxplot.data.low
         */

        /**
         * The median for each data point. This is drawn as a line through the
         * middle area of the box.
         *
         * @type      {number}
         * @product   highcharts
         * @apioption series.boxplot.data.median
         */

        /**
         * The lower quartile for each data point. This is the bottom of the
         * box.
         *
         * @type      {number}
         * @product   highcharts
         * @apioption series.boxplot.data.q1
         */

        /**
         * The higher quartile for each data point. This is the top of the box.
         *
         * @type      {number}
         * @product   highcharts
         * @apioption series.boxplot.data.q3
         */

        ''; // adds doclets above to transpiled file
      });

      _registerModule(_modules, 'parts-more/ErrorBarSeries.js', [_modules['parts/Globals.js']], function (H) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var noop = H.noop,
            seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        /**
         * Error bars are a graphical representation of the variability of data and are
         * used on graphs to indicate the error, or uncertainty in a reported
         * measurement.
         *
         * @sample highcharts/demo/error-bar/
         *         Error bars on a column series
         * @sample highcharts/series-errorbar/on-scatter/
         *         Error bars on a scatter series
         *
         * @extends      plotOptions.boxplot
         * @product      highcharts highstock
         * @requires     highcharts-more
         * @optionparent plotOptions.errorbar
         */

        seriesType('errorbar', 'boxplot', {
          /**
           * The main color of the bars. This can be overridden by
           * [stemColor](#plotOptions.errorbar.stemColor) and
           * [whiskerColor](#plotOptions.errorbar.whiskerColor) individually.
           *
           * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
           *         Error bar styling
           *
           * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @default #000000
           * @since   3.0
           * @product highcharts
           */
          color: '#000000',
          grouping: false,

          /**
           * The parent series of the error bar. The default value links it to
           * the previous series. Otherwise, use the id of the parent series.
           *
           * @since   3.0
           * @product highcharts
           */
          linkedTo: ':previous',
          tooltip: {
            pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
          },

          /**
           * The line width of the whiskers, the horizontal lines marking low
           * and high values. When `null`, the general
           * [lineWidth](#plotOptions.errorbar.lineWidth) applies.
           *
           * @sample {highcharts} highcharts/plotoptions/error-bar-styling/
           *         Error bar styling
           *
           * @type    {number}
           * @since   3.0
           * @product highcharts
           */
          whiskerWidth: null // Prototype members

        }, {
          type: 'errorbar',
          // array point configs are mapped to this
          pointArrayMap: ['low', 'high'],
          // return a plain array for speedy calculation
          toYData: function toYData(point) {
            return [point.low, point.high];
          },
          pointValKey: 'high',
          doQuartiles: false,
          drawDataLabels: seriesTypes.arearange ? function () {
            var valKey = this.pointValKey;
            seriesTypes.arearange.prototype.drawDataLabels.call(this); // Arearange drawDataLabels does not reset point.y to high,
            // but to low after drawing (#4133)

            this.data.forEach(function (point) {
              point.y = point[valKey];
            });
          } : noop,
          // Get the width and X offset, either on top of the linked series column or
          // standalone
          getColumnMetrics: function getColumnMetrics() {
            return this.linkedParent && this.linkedParent.columnMetrics || seriesTypes.column.prototype.getColumnMetrics.call(this);
          }
        });
        /**
         * A `errorbar` series. If the [type](#series.errorbar.type) option
         * is not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.errorbar
         * @excluding dataParser, dataURL, stack, stacking
         * @product   highcharts
         * @requires  highcharts-more
         * @apioption series.errorbar
         */

        /**
         * An array of data points for the series. For the `errorbar` series
         * type, points can be given in the following ways:
         *
         * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
         *    to `x,low,high`. If the first value is a string, it is applied as the name
         *    of the point, and the `x` value is inferred. The `x` value can also be
         *    omitted, in which case the inner arrays should be of length 2\. Then the
         *    `x` value is automatically calculated, either starting at 0 and
         *    incremented by 1, or from `pointStart` and `pointInterval` given in the
         *    series options.
         *    ```js
         *    data: [
         *        [0, 10, 2],
         *        [1, 1, 8],
         *        [2, 4, 5]
         *    ]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.errorbar.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        low: 0,
         *        high: 0,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        low: 5,
         *        high: 5,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
         * @extends   series.arearange.data
         * @excluding dataLabels, drilldown, marker, states
         * @product   highcharts
         * @apioption series.errorbar.data
         */

        ''; // adds doclets above to transpiled file
      });

      _registerModule(_modules, 'parts-more/WaterfallSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var arrayMax = U.arrayMax,
            arrayMin = U.arrayMin,
            correctFloat = U.correctFloat,
            isNumber = U.isNumber,
            objectEach = U.objectEach,
            pick = U.pick;
        var addEvent = H.addEvent,
            Axis = H.Axis,
            Chart = H.Chart,
            Point = H.Point,
            Series = H.Series,
            StackItem = H.StackItem,
            seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        /**
         * Returns true if the key is a direct property of the object.
         * @private
         * @param {*} obj - Object with property to test
         * @param {string} key - Property key to test
         * @return {boolean} - Whether it is a direct property
         */

        function ownProp(obj, key) {
          return Object.hasOwnProperty.call(obj, key);
        }
        /* eslint-disable no-invalid-this */


        addEvent(Axis, 'afterInit', function () {
          if (!this.isXAxis) {
            this.waterfallStacks = {
              changed: false
            };
          }
        });
        addEvent(Axis, 'afterBuildStacks', function () {
          this.waterfallStacks.changed = false;
          delete this.waterfallStacks.alreadyChanged;
        });
        addEvent(Chart, 'beforeRedraw', function () {
          var axes = this.axes,
              series = this.series,
              i = series.length;

          while (i--) {
            if (series[i].options.stacking) {
              axes.forEach(function (axis) {
                if (!axis.isXAxis) {
                  axis.waterfallStacks.changed = true;
                }
              });
              i = 0;
            }
          }
        });
        addEvent(Axis, 'afterRender', function () {
          var stackLabelOptions = this.options.stackLabels;

          if (stackLabelOptions && stackLabelOptions.enabled && this.waterfallStacks) {
            this.renderWaterfallStackTotals();
          }
        }); // eslint-disable-next-line valid-jsdoc

        /**
         * Calls StackItem.prototype.render function that creates and renders stack
         * total label for each waterfall stack item.
         *
         * @private
         * @function Highcharts.Axis#renderWaterfallStackTotals
         */

        Axis.prototype.renderWaterfallStackTotals = function () {
          var yAxis = this,
              waterfallStacks = yAxis.waterfallStacks,
              stackTotalGroup = yAxis.stackTotalGroup,
              dummyStackItem = new StackItem(yAxis, yAxis.options.stackLabels, false, 0, void 0);
          yAxis.dummyStackItem = dummyStackItem; // Render each waterfall stack total

          objectEach(waterfallStacks, function (type) {
            objectEach(type, function (stackItem) {
              dummyStackItem.total = stackItem.stackTotal;

              if (stackItem.label) {
                dummyStackItem.label = stackItem.label;
              }

              StackItem.prototype.render.call(dummyStackItem, stackTotalGroup);
              stackItem.label = dummyStackItem.label;
              delete dummyStackItem.label;
            });
          });
          dummyStackItem.total = null;
        };
        /**
         * A waterfall chart displays sequentially introduced positive or negative
         * values in cumulative columns.
         *
         * @sample highcharts/demo/waterfall/
         *         Waterfall chart
         * @sample highcharts/plotoptions/waterfall-inverted/
         *         Horizontal (inverted) waterfall
         * @sample highcharts/plotoptions/waterfall-stacked/
         *         Stacked waterfall chart
         *
         * @extends      plotOptions.column
         * @product      highcharts
         * @requires     highcharts-more
         * @optionparent plotOptions.waterfall
         */


        seriesType('waterfall', 'column', {
          /**
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @apioption plotOptions.waterfall.color
           */

          /**
           * The color used specifically for positive point columns. When not
           * specified, the general series color is used.
           *
           * In styled mode, the waterfall colors can be set with the
           * `.highcharts-point-negative`, `.highcharts-sum` and
           * `.highcharts-intermediate-sum` classes.
           *
           * @sample {highcharts} highcharts/demo/waterfall/
           *         Waterfall
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @product   highcharts
           * @apioption plotOptions.waterfall.upColor
           */
          dataLabels: {
            inside: true
          },

          /**
           * The width of the line connecting waterfall columns.
           *
           * @product highcharts
           */
          lineWidth: 1,

          /**
           * The color of the line that connects columns in a waterfall series.
           *
           * In styled mode, the stroke can be set with the `.highcharts-graph` class.
           *
           * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @since   3.0
           * @product highcharts
           */
          lineColor: '#333333',

          /**
           * A name for the dash style to use for the line connecting the columns
           * of the waterfall series. Possible values: Dash, DashDot, Dot, LongDash,
           * LongDashDot, LongDashDotDot, ShortDash, ShortDashDot, ShortDashDotDot,
           * ShortDot, Solid
           *
           * In styled mode, the stroke dash-array can be set with the
           * `.highcharts-graph` class.
           *
           * @type    {Highcharts.DashStyleValue}
           * @since   3.0
           * @product highcharts
           */
          dashStyle: 'Dot',

          /**
           * The color of the border of each waterfall column.
           *
           * In styled mode, the border stroke can be set with the
           * `.highcharts-point` class.
           *
           * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @since   3.0
           * @product highcharts
           */
          borderColor: '#333333',
          states: {
            hover: {
              lineWidthPlus: 0 // #3126

            }
          } // Prototype members

        }, {
          pointValKey: 'y',
          // Property needed to prevent lines between the columns from disappearing
          // when negativeColor is used.
          showLine: true,
          // After generating points, set y-values for all sums.
          generatePoints: function generatePoints() {
            var point, len, i, y; // Parent call:

            seriesTypes.column.prototype.generatePoints.apply(this);

            for (i = 0, len = this.points.length; i < len; i++) {
              point = this.points[i];
              y = this.processedYData[i]; // override point value for sums
              // #3710 Update point does not propagate to sum

              if (point.isIntermediateSum || point.isSum) {
                point.y = correctFloat(y);
              }
            }
          },
          // Translate data points from raw values
          translate: function translate() {
            var series = this,
                options = series.options,
                yAxis = series.yAxis,
                len,
                i,
                points,
                point,
                shapeArgs,
                y,
                yValue,
                previousY,
                previousIntermediate,
                range,
                minPointLength = pick(options.minPointLength, 5),
                halfMinPointLength = minPointLength / 2,
                threshold = options.threshold,
                stacking = options.stacking,
                tooltipY,
                actualStack = yAxis.waterfallStacks[series.stackKey],
                actualStackX,
                dummyStackItem,
                total,
                pointY,
                yPos,
                hPos; // run column series translate

            seriesTypes.column.prototype.translate.apply(series);
            previousY = previousIntermediate = threshold;
            points = series.points;

            for (i = 0, len = points.length; i < len; i++) {
              // cache current point object
              point = points[i];
              yValue = series.processedYData[i];
              shapeArgs = point.shapeArgs;
              range = [0, yValue];
              pointY = point.y; // code responsible for correct positions of stacked points
              // starts here

              if (stacking) {
                if (actualStack) {
                  actualStackX = actualStack[i];

                  if (stacking === 'overlap') {
                    total = actualStackX.stackState[actualStackX.stateIndex--];
                    y = pointY >= 0 ? total : total - pointY;

                    if (ownProp(actualStackX, 'absolutePos')) {
                      delete actualStackX.absolutePos;
                    }

                    if (ownProp(actualStackX, 'absoluteNeg')) {
                      delete actualStackX.absoluteNeg;
                    }
                  } else {
                    if (pointY >= 0) {
                      total = actualStackX.threshold + actualStackX.posTotal;
                      actualStackX.posTotal -= pointY;
                      y = total;
                    } else {
                      total = actualStackX.threshold + actualStackX.negTotal;
                      actualStackX.negTotal -= pointY;
                      y = total - pointY;
                    }

                    if (!actualStackX.posTotal) {
                      if (ownProp(actualStackX, 'absolutePos')) {
                        actualStackX.posTotal = actualStackX.absolutePos;
                        delete actualStackX.absolutePos;
                      }
                    }

                    if (!actualStackX.negTotal) {
                      if (ownProp(actualStackX, 'absoluteNeg')) {
                        actualStackX.negTotal = actualStackX.absoluteNeg;
                        delete actualStackX.absoluteNeg;
                      }
                    }
                  }

                  if (!point.isSum) {
                    // the connectorThreshold property is later used in
                    // getCrispPath function to draw a connector line in a
                    // correct place
                    actualStackX.connectorThreshold = actualStackX.threshold + actualStackX.stackTotal;
                  }

                  if (yAxis.reversed) {
                    yPos = pointY >= 0 ? y - pointY : y + pointY;
                    hPos = y;
                  } else {
                    yPos = y;
                    hPos = y - pointY;
                  }

                  point.below = yPos <= pick(threshold, 0);
                  shapeArgs.y = yAxis.translate(yPos, 0, 1, 0, 1);
                  shapeArgs.height = Math.abs(shapeArgs.y - yAxis.translate(hPos, 0, 1, 0, 1));
                }

                dummyStackItem = yAxis.dummyStackItem;

                if (dummyStackItem) {
                  dummyStackItem.x = i;
                  dummyStackItem.label = actualStack[i].label;
                  dummyStackItem.setOffset(series.pointXOffset || 0, series.barW || 0, series.stackedYNeg[i], series.stackedYPos[i]);
                }
              } else {
                // up points
                y = Math.max(previousY, previousY + pointY) + range[0];
                shapeArgs.y = yAxis.translate(y, 0, 1, 0, 1); // sum points

                if (point.isSum) {
                  shapeArgs.y = yAxis.translate(range[1], 0, 1, 0, 1);
                  shapeArgs.height = Math.min(yAxis.translate(range[0], 0, 1, 0, 1), yAxis.len) - shapeArgs.y; // #4256
                } else if (point.isIntermediateSum) {
                  if (pointY >= 0) {
                    yPos = range[1] + previousIntermediate;
                    hPos = previousIntermediate;
                  } else {
                    yPos = previousIntermediate;
                    hPos = range[1] + previousIntermediate;
                  }

                  if (yAxis.reversed) {
                    // swapping values
                    yPos ^= hPos;
                    hPos ^= yPos;
                    yPos ^= hPos;
                  }

                  shapeArgs.y = yAxis.translate(yPos, 0, 1, 0, 1);
                  shapeArgs.height = Math.abs(shapeArgs.y - Math.min(yAxis.translate(hPos, 0, 1, 0, 1), yAxis.len));
                  previousIntermediate += range[1]; // If it's not the sum point, update previous stack end position
                  // and get shape height (#3886)
                } else {
                  shapeArgs.height = yValue > 0 ? yAxis.translate(previousY, 0, 1, 0, 1) - shapeArgs.y : yAxis.translate(previousY, 0, 1, 0, 1) - yAxis.translate(previousY - yValue, 0, 1, 0, 1);
                  previousY += yValue;
                  point.below = previousY < pick(threshold, 0);
                } // #3952 Negative sum or intermediate sum not rendered correctly


                if (shapeArgs.height < 0) {
                  shapeArgs.y += shapeArgs.height;
                  shapeArgs.height *= -1;
                }
              }

              point.plotY = shapeArgs.y = Math.round(shapeArgs.y) - series.borderWidth % 2 / 2; // #3151

              shapeArgs.height = Math.max(Math.round(shapeArgs.height), 0.001);
              point.yBottom = shapeArgs.y + shapeArgs.height;

              if (shapeArgs.height <= minPointLength && !point.isNull) {
                shapeArgs.height = minPointLength;
                shapeArgs.y -= halfMinPointLength;
                point.plotY = shapeArgs.y;

                if (point.y < 0) {
                  point.minPointLengthOffset = -halfMinPointLength;
                } else {
                  point.minPointLengthOffset = halfMinPointLength;
                }
              } else {
                if (point.isNull) {
                  shapeArgs.width = 0;
                }

                point.minPointLengthOffset = 0;
              } // Correct tooltip placement (#3014)


              tooltipY = point.plotY + (point.negative ? shapeArgs.height : 0);

              if (series.chart.inverted) {
                point.tooltipPos[0] = yAxis.len - tooltipY;
              } else {
                point.tooltipPos[1] = tooltipY;
              }
            }
          },
          // Call default processData then override yData to reflect waterfall's
          // extremes on yAxis
          processData: function processData(force) {
            var series = this,
                options = series.options,
                yData = series.yData,
                // #3710 Update point does not propagate to sum
            points = options.data,
                point,
                dataLength = yData.length,
                threshold = options.threshold || 0,
                subSum,
                sum,
                dataMin,
                dataMax,
                y,
                i;
            sum = subSum = dataMin = dataMax = 0;

            for (i = 0; i < dataLength; i++) {
              y = yData[i];
              point = points && points[i] ? points[i] : {};

              if (y === 'sum' || point.isSum) {
                yData[i] = correctFloat(sum);
              } else if (y === 'intermediateSum' || point.isIntermediateSum) {
                yData[i] = correctFloat(subSum);
                subSum = 0;
              } else {
                sum += y;
                subSum += y;
              }

              dataMin = Math.min(sum, dataMin);
              dataMax = Math.max(sum, dataMax);
            }

            Series.prototype.processData.call(this, force); // Record extremes only if stacking was not set:

            if (!options.stacking) {
              series.dataMin = dataMin + threshold;
              series.dataMax = dataMax;
            }

            return;
          },
          // Return y value or string if point is sum
          toYData: function toYData(pt) {
            if (pt.isSum) {
              return 'sum';
            }

            if (pt.isIntermediateSum) {
              return 'intermediateSum';
            }

            return pt.y;
          },
          updateParallelArrays: function updateParallelArrays(point, i) {
            Series.prototype.updateParallelArrays.call(this, point, i); // Prevent initial sums from triggering an error (#3245, #7559)

            if (this.yData[0] === 'sum' || this.yData[0] === 'intermediateSum') {
              this.yData[0] = null;
            }
          },
          // Postprocess mapping between options and SVG attributes
          pointAttribs: function pointAttribs(point, state) {
            var upColor = this.options.upColor,
                attr; // Set or reset up color (#3710, update to negative)

            if (upColor && !point.options.color) {
              point.color = point.y > 0 ? upColor : null;
            }

            attr = seriesTypes.column.prototype.pointAttribs.call(this, point, state); // The dashStyle option in waterfall applies to the graph, not
            // the points

            delete attr.dashstyle;
            return attr;
          },
          // Return an empty path initially, because we need to know the stroke-width
          // in order to set the final path.
          getGraphPath: function getGraphPath() {
            return ['M', 0, 0];
          },
          // Draw columns' connector lines
          getCrispPath: function getCrispPath() {
            var data = this.data,
                yAxis = this.yAxis,
                length = data.length,
                graphNormalizer = Math.round(this.graph.strokeWidth()) % 2 / 2,
                borderNormalizer = Math.round(this.borderWidth) % 2 / 2,
                reversedXAxis = this.xAxis.reversed,
                reversedYAxis = this.yAxis.reversed,
                stacking = this.options.stacking,
                path = [],
                connectorThreshold,
                prevStack,
                prevStackX,
                prevPoint,
                yPos,
                isPos,
                prevArgs,
                pointArgs,
                i,
                d;

            for (i = 1; i < length; i++) {
              pointArgs = data[i].shapeArgs;
              prevPoint = data[i - 1];
              prevArgs = data[i - 1].shapeArgs;
              prevStack = yAxis.waterfallStacks[this.stackKey];
              isPos = prevPoint.y > 0 ? -prevArgs.height : 0;

              if (prevStack) {
                prevStackX = prevStack[i - 1]; // y position of the connector is different when series are
                // stacked, yAxis is reversed and it also depends on point's
                // value

                if (stacking) {
                  connectorThreshold = prevStackX.connectorThreshold;
                  yPos = Math.round(yAxis.translate(connectorThreshold, 0, 1, 0, 1) + (reversedYAxis ? isPos : 0)) - graphNormalizer;
                } else {
                  yPos = prevArgs.y + prevPoint.minPointLengthOffset + borderNormalizer - graphNormalizer;
                }

                d = ['M', prevArgs.x + (reversedXAxis ? 0 : prevArgs.width), yPos, 'L', pointArgs.x + (reversedXAxis ? pointArgs.width : 0), yPos];
              }

              if (!stacking && d && prevPoint.y < 0 && !reversedYAxis || prevPoint.y > 0 && reversedYAxis) {
                d[2] += prevArgs.height;
                d[5] += prevArgs.height;
              }

              path = path.concat(d);
            }

            return path;
          },
          // The graph is initially drawn with an empty definition, then updated with
          // crisp rendering.
          drawGraph: function drawGraph() {
            Series.prototype.drawGraph.call(this);
            this.graph.attr({
              d: this.getCrispPath()
            });
          },
          // Waterfall has stacking along the x-values too.
          setStackedPoints: function setStackedPoints() {
            var series = this,
                options = series.options,
                waterfallStacks = series.yAxis.waterfallStacks,
                seriesThreshold = options.threshold,
                stackThreshold = seriesThreshold || 0,
                interSum = stackThreshold,
                stackKey = series.stackKey,
                xData = series.xData,
                xLength = xData.length,
                actualStack,
                actualStackX,
                totalYVal,
                actualSum,
                prevSum,
                statesLen,
                posTotal,
                negTotal,
                xPoint,
                yVal,
                x,
                alreadyChanged,
                changed; // function responsible for calculating correct values for stackState
            // array of each stack item. The arguments are: firstS - the value for
            // the first state, nextS - the difference between the previous and the
            // newest state, sInx - counter used in the for that updates each state
            // when necessary, sOff - offset that must be added to each state when
            // they need to be updated (if point isn't a total sum)
            // eslint-disable-next-line require-jsdoc

            function calculateStackState(firstS, nextS, sInx, sOff) {
              if (!statesLen) {
                actualStackX.stackState[0] = firstS;
                statesLen = actualStackX.stackState.length;
              } else {
                for (sInx; sInx < statesLen; sInx++) {
                  actualStackX.stackState[sInx] += sOff;
                }
              }

              actualStackX.stackState.push(actualStackX.stackState[statesLen - 1] + nextS);
            }

            series.yAxis.usePercentage = false;
            totalYVal = actualSum = prevSum = stackThreshold; // code responsible for creating stacks for waterfall series

            if (series.visible || !series.chart.options.chart.ignoreHiddenSeries) {
              changed = waterfallStacks.changed;
              alreadyChanged = waterfallStacks.alreadyChanged; // in case of a redraw, stack for each x value must be
              // emptied (only for the first series in a specific stack)
              // and recalculated once more

              if (alreadyChanged && alreadyChanged.indexOf(stackKey) < 0) {
                changed = true;
              }

              if (!waterfallStacks[stackKey]) {
                waterfallStacks[stackKey] = {};
              }

              actualStack = waterfallStacks[stackKey];

              for (var i = 0; i < xLength; i++) {
                x = xData[i];

                if (!actualStack[x] || changed) {
                  actualStack[x] = {
                    negTotal: 0,
                    posTotal: 0,
                    stackTotal: 0,
                    threshold: 0,
                    stateIndex: 0,
                    stackState: [],
                    label: changed && actualStack[x] ? actualStack[x].label : void 0
                  };
                }

                actualStackX = actualStack[x];
                yVal = series.yData[i];

                if (yVal >= 0) {
                  actualStackX.posTotal += yVal;
                } else {
                  actualStackX.negTotal += yVal;
                } // points do not exist yet, so raw data is used


                xPoint = options.data[i];
                posTotal = actualStackX.absolutePos = actualStackX.posTotal;
                negTotal = actualStackX.absoluteNeg = actualStackX.negTotal;
                actualStackX.stackTotal = posTotal + negTotal;
                statesLen = actualStackX.stackState.length;

                if (xPoint && xPoint.isIntermediateSum) {
                  calculateStackState(prevSum, actualSum, 0, prevSum);
                  prevSum = actualSum;
                  actualSum = seriesThreshold; // swapping values

                  stackThreshold ^= interSum;
                  interSum ^= stackThreshold;
                  stackThreshold ^= interSum;
                } else if (xPoint && xPoint.isSum) {
                  calculateStackState(seriesThreshold, totalYVal, statesLen);
                  stackThreshold = seriesThreshold;
                } else {
                  calculateStackState(stackThreshold, yVal, 0, totalYVal);

                  if (xPoint) {
                    totalYVal += yVal;
                    actualSum += yVal;
                  }
                }

                actualStackX.stateIndex++;
                actualStackX.threshold = stackThreshold;
                stackThreshold += actualStackX.stackTotal;
              }

              waterfallStacks.changed = false;

              if (!waterfallStacks.alreadyChanged) {
                waterfallStacks.alreadyChanged = [];
              }

              waterfallStacks.alreadyChanged.push(stackKey);
            }
          },
          // Extremes for a non-stacked series are recorded in processData.
          // In case of stacking, use Series.stackedYData to calculate extremes.
          getExtremes: function getExtremes() {
            var stacking = this.options.stacking,
                yAxis,
                waterfallStacks,
                stackedYNeg,
                stackedYPos;

            if (stacking) {
              yAxis = this.yAxis;
              waterfallStacks = yAxis.waterfallStacks;
              stackedYNeg = this.stackedYNeg = [];
              stackedYPos = this.stackedYPos = []; // the visible y range can be different when stacking is set to
              // overlap and different when it's set to normal

              if (stacking === 'overlap') {
                objectEach(waterfallStacks[this.stackKey], function (stackX) {
                  stackedYNeg.push(arrayMin(stackX.stackState));
                  stackedYPos.push(arrayMax(stackX.stackState));
                });
              } else {
                objectEach(waterfallStacks[this.stackKey], function (stackX) {
                  stackedYNeg.push(stackX.negTotal + stackX.threshold);
                  stackedYPos.push(stackX.posTotal + stackX.threshold);
                });
              }

              this.dataMin = arrayMin(stackedYNeg);
              this.dataMax = arrayMax(stackedYPos);
            }
          } // Point members

        }, {
          getClassName: function getClassName() {
            var className = Point.prototype.getClassName.call(this);

            if (this.isSum) {
              className += ' highcharts-sum';
            } else if (this.isIntermediateSum) {
              className += ' highcharts-intermediate-sum';
            }

            return className;
          },
          // Pass the null test in ColumnSeries.translate.
          isValid: function isValid() {
            return isNumber(this.y) || this.isSum || this.isIntermediateSum;
          }
        });
        /**
         * A `waterfall` series. If the [type](#series.waterfall.type) option
         * is not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.waterfall
         * @excluding dataParser, dataURL
         * @product   highcharts
         * @requires  highcharts-more
         * @apioption series.waterfall
         */

        /**
         * An array of data points for the series. For the `waterfall` series
         * type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values will be
         *    interpreted as `y` options. The `x` values will be automatically
         *    calculated, either starting at 0 and incremented by 1, or from
         *    `pointStart` and `pointInterval` given in the series options. If the axis
         *    has categories, these will be used. Example:
         *    ```js
         *    data: [0, 5, 3, 5]
         *    ```
         *
         * 2. An array of arrays with 2 values. In this case, the values correspond to
         *    `x,y`. If the first value is a string, it is applied as the name of the
         *    point, and the `x` value is inferred.
         *    ```js
         *    data: [
         *        [0, 7],
         *        [1, 8],
         *        [2, 3]
         *    ]
         *    ```
         *
         * 3. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.waterfall.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        y: 8,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        y: 8,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/chart/reflow-true/
         *         Numerical values
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
         * @extends   series.line.data
         * @excluding marker
         * @product   highcharts
         * @apioption series.waterfall.data
         */

        /**
         * When this property is true, the points acts as a summary column for
         * the values added or substracted since the last intermediate sum,
         * or since the start of the series. The `y` value is ignored.
         *
         * @sample {highcharts} highcharts/demo/waterfall/
         *         Waterfall
         *
         * @type      {boolean}
         * @default   false
         * @product   highcharts
         * @apioption series.waterfall.data.isIntermediateSum
         */

        /**
         * When this property is true, the point display the total sum across
         * the entire series. The `y` value is ignored.
         *
         * @sample {highcharts} highcharts/demo/waterfall/
         *         Waterfall
         *
         * @type      {boolean}
         * @default   false
         * @product   highcharts
         * @apioption series.waterfall.data.isSum
         */

        ''; // adds doclets above to transpiled file
      });

      _registerModule(_modules, 'parts-more/PolygonSeries.js', [_modules['parts/Globals.js']], function (H) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var LegendSymbolMixin = H.LegendSymbolMixin,
            noop = H.noop,
            Series = H.Series,
            seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        /**
         * A polygon series can be used to draw any freeform shape in the cartesian
         * coordinate system. A fill is applied with the `color` option, and
         * stroke is applied through `lineWidth` and `lineColor` options.
         *
         * @sample {highcharts} highcharts/demo/polygon/
         *         Polygon
         * @sample {highstock} highcharts/demo/polygon/
         *         Polygon
         *
         * @extends      plotOptions.scatter
         * @since        4.1.0
         * @excluding    jitter, softThreshold, threshold, cluster
         * @product      highcharts highstock
         * @requires     highcharts-more
         * @optionparent plotOptions.polygon
         */

        seriesType('polygon', 'scatter', {
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
          },
          stickyTracking: false,
          tooltip: {
            followPointer: true,
            pointFormat: ''
          },
          trackByArea: true // Prototype members

        }, {
          type: 'polygon',
          getGraphPath: function getGraphPath() {
            var graphPath = Series.prototype.getGraphPath.call(this),
                i = graphPath.length + 1; // Close all segments

            while (i--) {
              if ((i === graphPath.length || graphPath[i] === 'M') && i > 0) {
                graphPath.splice(i, 0, 'z');
              }
            }

            this.areaPath = graphPath;
            return graphPath;
          },
          drawGraph: function drawGraph() {
            // Hack into the fill logic in area.drawGraph
            this.options.fillColor = this.color;
            seriesTypes.area.prototype.drawGraph.call(this);
          },
          drawLegendSymbol: LegendSymbolMixin.drawRectangle,
          drawTracker: Series.prototype.drawTracker,
          setStackedPoints: noop // No stacking points on polygons (#5310)

        });
        /**
         * A `polygon` series. If the [type](#series.polygon.type) option is
         * not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.polygon
         * @excluding dataParser, dataURL, stack
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption series.polygon
         */

        /**
         * An array of data points for the series. For the `polygon` series
         * type, points can be given in the following ways:
         *
         * 1. An array of numerical values. In this case, the numerical values will be
         *    interpreted as `y` options. The `x` values will be automatically
         *    calculated, either starting at 0 and incremented by 1, or from
         *    `pointStart` and `pointInterval` given in the series options. If the axis
         *    has categories, these will be used. Example:
         *    ```js
         *    data: [0, 5, 3, 5]
         *    ```
         *
         * 2. An array of arrays with 2 values. In this case, the values correspond to
         *    `x,y`. If the first value is a string, it is applied as the name of the
         *    point, and the `x` value is inferred.
         *    ```js
         *    data: [
         *        [0, 10],
         *        [1, 3],
         *        [2, 1]
         *    ]
         *    ```
         *
         * 3. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.polygon.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        y: 1,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        y: 8,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/chart/reflow-true/
         *         Numerical values
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
         * @extends   series.line.data
         * @product   highcharts highstock
         * @apioption series.polygon.data
         */

        ''; // adds doclets above to transpiled file
      });

      _registerModule(_modules, 'parts-more/BubbleLegend.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Highsoft AS
         *
         *  Author: Paweł Potaczek
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */

        /**
         * @interface Highcharts.BubbleLegendFormatterContextObject
         */

        /**
        * The center y position of the range.
        * @name Highcharts.BubbleLegendFormatterContextObject#center
        * @type {number}
        */

        /**
        * The radius of the bubble range.
        * @name Highcharts.BubbleLegendFormatterContextObject#radius
        * @type {number}
        */

        /**
        * The bubble value.
        * @name Highcharts.BubbleLegendFormatterContextObject#value
        * @type {number}
        */
        var arrayMax = U.arrayMax,
            arrayMin = U.arrayMin,
            isNumber = U.isNumber,
            objectEach = U.objectEach,
            pick = U.pick,
            wrap = U.wrap;
        var Series = H.Series,
            Legend = H.Legend,
            Chart = H.Chart,
            addEvent = H.addEvent,
            color = H.color,
            merge = H.merge,
            noop = H.noop,
            stableSort = H.stableSort,
            setOptions = H.setOptions;
        setOptions({
          legend: {
            /**
             * The bubble legend is an additional element in legend which
             * presents the scale of the bubble series. Individual bubble ranges
             * can be defined by user or calculated from series. In the case of
             * automatically calculated ranges, a 1px margin of error is
             * permitted.
             *
             * @since        7.0.0
             * @product      highcharts highstock highmaps
             * @requires     highcharts-more
             * @optionparent legend.bubbleLegend
             */
            bubbleLegend: {
              /**
               * The color of the ranges borders, can be also defined for an
               * individual range.
               *
               * @sample highcharts/bubble-legend/similartoseries/
               *         Similat look to the bubble series
               * @sample highcharts/bubble-legend/bordercolor/
               *         Individual bubble border color
               *
               * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
               */
              borderColor: void 0,

              /**
               * The width of the ranges borders in pixels, can be also
               * defined for an individual range.
               */
              borderWidth: 2,

              /**
               * An additional class name to apply to the bubble legend'
               * circle graphical elements. This option does not replace
               * default class names of the graphical element.
               *
               * @sample {highcharts} highcharts/css/bubble-legend/
               *         Styling by CSS
               *
               * @type {string}
               */
              className: void 0,

              /**
               * The main color of the bubble legend. Applies to ranges, if
               * individual color is not defined.
               *
               * @sample highcharts/bubble-legend/similartoseries/
               *         Similat look to the bubble series
               * @sample highcharts/bubble-legend/color/
               *         Individual bubble color
               *
               * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
               */
              color: void 0,

              /**
               * An additional class name to apply to the bubble legend's
               * connector graphical elements. This option does not replace
               * default class names of the graphical element.
               *
               * @sample {highcharts} highcharts/css/bubble-legend/
               *         Styling by CSS
               *
               * @type {string}
               */
              connectorClassName: void 0,

              /**
               * The color of the connector, can be also defined
               * for an individual range.
               *
               * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
               */
              connectorColor: void 0,

              /**
               * The length of the connectors in pixels. If labels are
               * centered, the distance is reduced to 0.
               *
               * @sample highcharts/bubble-legend/connectorandlabels/
               *         Increased connector length
               */
              connectorDistance: 60,

              /**
               * The width of the connectors in pixels.
               *
               * @sample highcharts/bubble-legend/connectorandlabels/
               *         Increased connector width
               */
              connectorWidth: 1,

              /**
               * Enable or disable the bubble legend.
               */
              enabled: false,

              /**
               * Options for the bubble legend labels.
               */
              labels: {
                /**
                 * An additional class name to apply to the bubble legend
                 * label graphical elements. This option does not replace
                 * default class names of the graphical element.
                 *
                 * @sample {highcharts} highcharts/css/bubble-legend/
                 *         Styling by CSS
                 *
                 * @type {string}
                 */
                className: void 0,

                /**
                 * Whether to allow data labels to overlap.
                 */
                allowOverlap: false,

                /**
                 * A [format string](http://docs.highcharts.com/#formatting)
                 * for the bubble legend labels. Available variables are the
                 * same as for `formatter`.
                 *
                 * @sample highcharts/bubble-legend/format/
                 *         Add a unit
                 *
                 * @type {string}
                 */
                format: '',

                /**
                 * Available `this` properties are:
                 *
                 * - `this.value`: The bubble value.
                 *
                 * - `this.radius`: The radius of the bubble range.
                 *
                 * - `this.center`: The center y position of the range.
                 *
                 * @type {Highcharts.FormatterCallbackFunction<Highcharts.BubbleLegendFormatterContextObject>}
                 */
                formatter: void 0,

                /**
                 * The alignment of the labels compared to the bubble
                 * legend. Can be one of `left`, `center` or `right`.
                 *
                 * @sample highcharts/bubble-legend/connectorandlabels/
                 *         Labels on left
                 *
                 * @type {Highcharts.AlignValue}
                 */
                align: 'right',

                /**
                 * CSS styles for the labels.
                 *
                 * @type {Highcharts.CSSObject}
                 */
                style: {
                  /** @ignore-option */
                  fontSize: 10,

                  /** @ignore-option */
                  color: void 0
                },

                /**
                 * The x position offset of the label relative to the
                 * connector.
                 */
                x: 0,

                /**
                 * The y position offset of the label relative to the
                 * connector.
                 */
                y: 0
              },

              /**
               * Miximum bubble legend range size. If values for ranges are
               * not specified, the `minSize` and the `maxSize` are calculated
               * from bubble series.
               */
              maxSize: 60,

              /**
               * Minimum bubble legend range size. If values for ranges are
               * not specified, the `minSize` and the `maxSize` are calculated
               * from bubble series.
               */
              minSize: 10,

              /**
               * The position of the bubble legend in the legend.
               * @sample highcharts/bubble-legend/connectorandlabels/
               *         Bubble legend as last item in legend
               */
              legendIndex: 0,

              /**
               * Options for specific range. One range consists of bubble,
               * label and connector.
               *
               * @sample highcharts/bubble-legend/ranges/
               *         Manually defined ranges
               * @sample highcharts/bubble-legend/autoranges/
               *         Auto calculated ranges
               *
               * @type {Array<*>}
               */
              ranges: {
                /**
                 * Range size value, similar to bubble Z data.
                 * @type {number}
                 */
                value: void 0,

                /**
                 * The color of the border for individual range.
                 * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 */
                borderColor: void 0,

                /**
                 * The color of the bubble for individual range.
                 * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 */
                color: void 0,

                /**
                 * The color of the connector for individual range.
                 * @type {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
                 */
                connectorColor: void 0
              },

              /**
               * Whether the bubble legend range value should be represented
               * by the area or the width of the bubble. The default, area,
               * corresponds best to the human perception of the size of each
               * bubble.
               *
               * @sample highcharts/bubble-legend/ranges/
               *         Size by width
               *
               * @type {Highcharts.BubbleSizeByValue}
               */
              sizeBy: 'area',

              /**
               * When this is true, the absolute value of z determines the
               * size of the bubble. This means that with the default
               * zThreshold of 0, a bubble of value -1 will have the same size
               * as a bubble of value 1, while a bubble of value 0 will have a
               * smaller size according to minSize.
               */
              sizeByAbsoluteValue: false,

              /**
               * Define the visual z index of the bubble legend.
               */
              zIndex: 1,

              /**
               * Ranges with with lower value than zThreshold, are skipped.
               */
              zThreshold: 0
            }
          }
        });
        /* eslint-disable no-invalid-this, valid-jsdoc */

        /**
         * BubbleLegend class.
         *
         * @private
         * @class
         * @name Highcharts.BubbleLegend
         * @param {Highcharts.LegendBubbleLegendOptions} options
         *        Bubble legend options
         * @param {Highcharts.Legend} legend
         *        Legend
         */

        H.BubbleLegend = function (options, legend) {
          this.init(options, legend);
        };

        H.BubbleLegend.prototype = {
          /**
           * Create basic bubbleLegend properties similar to item in legend.
           *
           * @private
           * @function Highcharts.BubbleLegend#init
           * @param {Highcharts.LegendBubbleLegendOptions} options
           *        Bubble legend options
           * @param {Highcharts.Legend} legend
           *        Legend
           * @return {void}
           */
          init: function init(options, legend) {
            this.options = options;
            this.visible = true;
            this.chart = legend.chart;
            this.legend = legend;
          },
          setState: noop,

          /**
           * Depending on the position option, add bubbleLegend to legend items.
           *
           * @private
           * @function Highcharts.BubbleLegend#addToLegend
           * @param {Array<(Highcharts.Point|Highcharts.Series)>}
           *        All legend items
           * @return {void}
           */
          addToLegend: function addToLegend(items) {
            // Insert bubbleLegend into legend items
            items.splice(this.options.legendIndex, 0, this);
          },

          /**
           * Calculate ranges, sizes and call the next steps of bubbleLegend
           * creation.
           *
           * @private
           * @function Highcharts.BubbleLegend#drawLegendSymbol
           * @param {Highcharts.Legend} legend
           *        Legend instance
           * @return {void}
           */
          drawLegendSymbol: function drawLegendSymbol(legend) {
            var chart = this.chart,
                options = this.options,
                size,
                itemDistance = pick(legend.options.itemDistance, 20),
                connectorSpace,
                ranges = options.ranges,
                radius,
                maxLabel,
                connectorDistance = options.connectorDistance; // Predict label dimensions

            this.fontMetrics = chart.renderer.fontMetrics(options.labels.style.fontSize.toString() + 'px'); // Do not create bubbleLegend now if ranges or ranges valeus are not
            // specified or if are empty array.

            if (!ranges || !ranges.length || !isNumber(ranges[0].value)) {
              legend.options.bubbleLegend.autoRanges = true;
              return;
            } // Sort ranges to right render order


            stableSort(ranges, function (a, b) {
              return b.value - a.value;
            });
            this.ranges = ranges;
            this.setOptions();
            this.render(); // Get max label size

            maxLabel = this.getMaxLabelSize();
            radius = this.ranges[0].radius;
            size = radius * 2; // Space for connectors and labels.

            connectorSpace = connectorDistance - radius + maxLabel.width;
            connectorSpace = connectorSpace > 0 ? connectorSpace : 0;
            this.maxLabel = maxLabel;
            this.movementX = options.labels.align === 'left' ? connectorSpace : 0;
            this.legendItemWidth = size + connectorSpace + itemDistance;
            this.legendItemHeight = size + this.fontMetrics.h / 2;
          },

          /**
           * Set style options for each bubbleLegend range.
           *
           * @private
           * @function Highcharts.BubbleLegend#setOptions
           * @return {void}
           */
          setOptions: function setOptions() {
            var ranges = this.ranges,
                options = this.options,
                series = this.chart.series[options.seriesIndex],
                baseline = this.legend.baseline,
                bubbleStyle = {
              'z-index': options.zIndex,
              'stroke-width': options.borderWidth
            },
                connectorStyle = {
              'z-index': options.zIndex,
              'stroke-width': options.connectorWidth
            },
                labelStyle = this.getLabelStyles(),
                fillOpacity = series.options.marker.fillOpacity,
                styledMode = this.chart.styledMode; // Allow to parts of styles be used individually for range

            ranges.forEach(function (range, i) {
              if (!styledMode) {
                bubbleStyle.stroke = pick(range.borderColor, options.borderColor, series.color);
                bubbleStyle.fill = pick(range.color, options.color, fillOpacity !== 1 ? color(series.color).setOpacity(fillOpacity).get('rgba') : series.color);
                connectorStyle.stroke = pick(range.connectorColor, options.connectorColor, series.color);
              } // Set options needed for rendering each range


              ranges[i].radius = this.getRangeRadius(range.value);
              ranges[i] = merge(ranges[i], {
                center: ranges[0].radius - ranges[i].radius + baseline
              });

              if (!styledMode) {
                merge(true, ranges[i], {
                  bubbleStyle: merge(false, bubbleStyle),
                  connectorStyle: merge(false, connectorStyle),
                  labelStyle: labelStyle
                });
              }
            }, this);
          },

          /**
           * Merge options for bubbleLegend labels.
           *
           * @private
           * @function Highcharts.BubbleLegend#getLabelStyles
           * @return {Highcharts.CSSObject}
           */
          getLabelStyles: function getLabelStyles() {
            var options = this.options,
                additionalLabelsStyle = {},
                labelsOnLeft = options.labels.align === 'left',
                rtl = this.legend.options.rtl; // To separate additional style options

            objectEach(options.labels.style, function (value, key) {
              if (key !== 'color' && key !== 'fontSize' && key !== 'z-index') {
                additionalLabelsStyle[key] = value;
              }
            });
            return merge(false, additionalLabelsStyle, {
              'font-size': options.labels.style.fontSize,
              fill: pick(options.labels.style.color, '#000000'),
              'z-index': options.zIndex,
              align: rtl || labelsOnLeft ? 'right' : 'left'
            });
          },

          /**
           * Calculate radius for each bubble range,
           * used code from BubbleSeries.js 'getRadius' method.
           *
           * @private
           * @function Highcharts.BubbleLegend#getRangeRadius
           * @param {number} value
           *        Range value
           * @return {number|null}
           *         Radius for one range
           */
          getRangeRadius: function getRangeRadius(value) {
            var options = this.options,
                seriesIndex = this.options.seriesIndex,
                bubbleSeries = this.chart.series[seriesIndex],
                zMax = options.ranges[0].value,
                zMin = options.ranges[options.ranges.length - 1].value,
                minSize = options.minSize,
                maxSize = options.maxSize;
            return bubbleSeries.getRadius.call(this, zMin, zMax, minSize, maxSize, value);
          },

          /**
           * Render the legendSymbol group.
           *
           * @private
           * @function Highcharts.BubbleLegend#render
           * @return {void}
           */
          render: function render() {
            var renderer = this.chart.renderer,
                zThreshold = this.options.zThreshold;

            if (!this.symbols) {
              this.symbols = {
                connectors: [],
                bubbleItems: [],
                labels: []
              };
            } // Nesting SVG groups to enable handleOverflow


            this.legendSymbol = renderer.g('bubble-legend');
            this.legendItem = renderer.g('bubble-legend-item'); // To enable default 'hideOverlappingLabels' method

            this.legendSymbol.translateX = 0;
            this.legendSymbol.translateY = 0;
            this.ranges.forEach(function (range) {
              if (range.value >= zThreshold) {
                this.renderRange(range);
              }
            }, this); // To use handleOverflow method

            this.legendSymbol.add(this.legendItem);
            this.legendItem.add(this.legendGroup);
            this.hideOverlappingLabels();
          },

          /**
           * Render one range, consisting of bubble symbol, connector and label.
           *
           * @private
           * @function Highcharts.BubbleLegend#renderRange
           * @param {Highcharts.LegendBubbleLegendRangesOptions} range
           *        Range options
           * @return {void}
           */
          renderRange: function renderRange(range) {
            var mainRange = this.ranges[0],
                legend = this.legend,
                options = this.options,
                labelsOptions = options.labels,
                chart = this.chart,
                renderer = chart.renderer,
                symbols = this.symbols,
                labels = symbols.labels,
                label,
                elementCenter = range.center,
                absoluteRadius = Math.abs(range.radius),
                connectorDistance = options.connectorDistance,
                labelsAlign = labelsOptions.align,
                rtl = legend.options.rtl,
                fontSize = labelsOptions.style.fontSize,
                connectorLength = rtl || labelsAlign === 'left' ? -connectorDistance : connectorDistance,
                borderWidth = options.borderWidth,
                connectorWidth = options.connectorWidth,
                posX = mainRange.radius,
                posY = elementCenter - absoluteRadius - borderWidth / 2 + connectorWidth / 2,
                labelY,
                labelX,
                fontMetrics = this.fontMetrics,
                labelMovement = fontSize / 2 - (fontMetrics.h - fontSize) / 2,
                crispMovement = (posY % 1 ? 1 : 0.5) - (connectorWidth % 2 ? 0 : 0.5),
                styledMode = renderer.styledMode; // Set options for centered labels

            if (labelsAlign === 'center') {
              connectorLength = 0; // do not use connector

              options.connectorDistance = 0;
              range.labelStyle.align = 'center';
            }

            labelY = posY + options.labels.y;
            labelX = posX + connectorLength + options.labels.x; // Render bubble symbol

            symbols.bubbleItems.push(renderer.circle(posX, elementCenter + crispMovement, absoluteRadius).attr(styledMode ? {} : range.bubbleStyle).addClass((styledMode ? 'highcharts-color-' + this.options.seriesIndex + ' ' : '') + 'highcharts-bubble-legend-symbol ' + (options.className || '')).add(this.legendSymbol)); // Render connector

            symbols.connectors.push(renderer.path(renderer.crispLine(['M', posX, posY, 'L', posX + connectorLength, posY], options.connectorWidth)).attr(styledMode ? {} : range.connectorStyle).addClass((styledMode ? 'highcharts-color-' + this.options.seriesIndex + ' ' : '') + 'highcharts-bubble-legend-connectors ' + (options.connectorClassName || '')).add(this.legendSymbol)); // Render label

            label = renderer.text(this.formatLabel(range), labelX, labelY + labelMovement).attr(styledMode ? {} : range.labelStyle).addClass('highcharts-bubble-legend-labels ' + (options.labels.className || '')).add(this.legendSymbol);
            labels.push(label); // To enable default 'hideOverlappingLabels' method

            label.placed = true;
            label.alignAttr = {
              x: labelX,
              y: labelY + labelMovement
            };
          },

          /**
           * Get the label which takes up the most space.
           *
           * @private
           * @function Highcharts.BubbleLegend#getMaxLabelSize
           * @return {Highcharts.BBoxObject}
           */
          getMaxLabelSize: function getMaxLabelSize() {
            var labels = this.symbols.labels,
                maxLabel,
                labelSize;
            labels.forEach(function (label) {
              labelSize = label.getBBox(true);

              if (maxLabel) {
                maxLabel = labelSize.width > maxLabel.width ? labelSize : maxLabel;
              } else {
                maxLabel = labelSize;
              }
            });
            return maxLabel || {};
          },

          /**
           * Get formatted label for range.
           *
           * @private
           * @function Highcharts.BubbleLegend#formatLabel
           * @param {Highcharts.LegendBubbleLegendRangesOptions} range
           *        Range options
           * @return {string}
           *         Range label text
           */
          formatLabel: function formatLabel(range) {
            var options = this.options,
                formatter = options.labels.formatter,
                format = options.labels.format;
            var numberFormatter = this.chart.numberFormatter;
            return format ? H.format(format, range) : formatter ? formatter.call(range) : numberFormatter(range.value, 1);
          },

          /**
           * By using default chart 'hideOverlappingLabels' method, hide or show
           * labels and connectors.
           *
           * @private
           * @function Highcharts.BubbleLegend#hideOverlappingLabels
           * @return {void}
           */
          hideOverlappingLabels: function hideOverlappingLabels() {
            var chart = this.chart,
                allowOverlap = this.options.labels.allowOverlap,
                symbols = this.symbols;

            if (!allowOverlap && symbols) {
              chart.hideOverlappingLabels(symbols.labels); // Hide or show connectors

              symbols.labels.forEach(function (label, index) {
                if (!label.newOpacity) {
                  symbols.connectors[index].hide();
                } else if (label.newOpacity !== label.oldOpacity) {
                  symbols.connectors[index].show();
                }
              });
            }
          },

          /**
           * Calculate ranges from created series.
           *
           * @private
           * @function Highcharts.BubbleLegend#getRanges
           * @return {Array<Highcharts.LegendBubbleLegendRangesOptions>}
           *         Array of range objects
           */
          getRanges: function getRanges() {
            var bubbleLegend = this.legend.bubbleLegend,
                series = bubbleLegend.chart.series,
                ranges,
                rangesOptions = bubbleLegend.options.ranges,
                zData,
                minZ = Number.MAX_VALUE,
                maxZ = -Number.MAX_VALUE;
            series.forEach(function (s) {
              // Find the min and max Z, like in bubble series
              if (s.isBubble && !s.ignoreSeries) {
                zData = s.zData.filter(isNumber);

                if (zData.length) {
                  minZ = pick(s.options.zMin, Math.min(minZ, Math.max(arrayMin(zData), s.options.displayNegative === false ? s.options.zThreshold : -Number.MAX_VALUE)));
                  maxZ = pick(s.options.zMax, Math.max(maxZ, arrayMax(zData)));
                }
              }
            }); // Set values for ranges

            if (minZ === maxZ) {
              // Only one range if min and max values are the same.
              ranges = [{
                value: maxZ
              }];
            } else {
              ranges = [{
                value: minZ
              }, {
                value: (minZ + maxZ) / 2
              }, {
                value: maxZ,
                autoRanges: true
              }];
            } // Prevent reverse order of ranges after redraw


            if (rangesOptions.length && rangesOptions[0].radius) {
              ranges.reverse();
            } // Merge ranges values with user options


            ranges.forEach(function (range, i) {
              if (rangesOptions && rangesOptions[i]) {
                ranges[i] = merge(false, rangesOptions[i], range);
              }
            });
            return ranges;
          },

          /**
           * Calculate bubble legend sizes from rendered series.
           *
           * @private
           * @function Highcharts.BubbleLegend#predictBubbleSizes
           * @return {Array<number,number>}
           *         Calculated min and max bubble sizes
           */
          predictBubbleSizes: function predictBubbleSizes() {
            var chart = this.chart,
                fontMetrics = this.fontMetrics,
                legendOptions = chart.legend.options,
                floating = legendOptions.floating,
                horizontal = legendOptions.layout === 'horizontal',
                lastLineHeight = horizontal ? chart.legend.lastLineHeight : 0,
                plotSizeX = chart.plotSizeX,
                plotSizeY = chart.plotSizeY,
                bubbleSeries = chart.series[this.options.seriesIndex],
                minSize = Math.ceil(bubbleSeries.minPxSize),
                maxPxSize = Math.ceil(bubbleSeries.maxPxSize),
                maxSize = bubbleSeries.options.maxSize,
                plotSize = Math.min(plotSizeY, plotSizeX),
                calculatedSize; // Calculate prediceted max size of bubble

            if (floating || !/%$/.test(maxSize)) {
              calculatedSize = maxPxSize;
            } else {
              maxSize = parseFloat(maxSize);
              calculatedSize = (plotSize + lastLineHeight - fontMetrics.h / 2) * maxSize / 100 / (maxSize / 100 + 1); // Get maxPxSize from bubble series if calculated bubble legend
              // size will not affect to bubbles series.

              if (horizontal && plotSizeY - calculatedSize >= plotSizeX || !horizontal && plotSizeX - calculatedSize >= plotSizeY) {
                calculatedSize = maxPxSize;
              }
            }

            return [minSize, Math.ceil(calculatedSize)];
          },

          /**
           * Correct ranges with calculated sizes.
           *
           * @private
           * @function Highcharts.BubbleLegend#updateRanges
           * @param {number} min
           * @param {number} max
           * @return {void}
           */
          updateRanges: function updateRanges(min, max) {
            var bubbleLegendOptions = this.legend.options.bubbleLegend;
            bubbleLegendOptions.minSize = min;
            bubbleLegendOptions.maxSize = max;
            bubbleLegendOptions.ranges = this.getRanges();
          },

          /**
           * Because of the possibility of creating another legend line, predicted
           * bubble legend sizes may differ by a few pixels, so it is necessary to
           * correct them.
           *
           * @private
           * @function Highcharts.BubbleLegend#correctSizes
           * @return {void}
           */
          correctSizes: function correctSizes() {
            var legend = this.legend,
                chart = this.chart,
                bubbleSeries = chart.series[this.options.seriesIndex],
                bubbleSeriesSize = bubbleSeries.maxPxSize,
                bubbleLegendSize = this.options.maxSize;

            if (Math.abs(Math.ceil(bubbleSeriesSize) - bubbleLegendSize) > 1) {
              this.updateRanges(this.options.minSize, bubbleSeries.maxPxSize);
              legend.render();
            }
          }
        }; // Start the bubble legend creation process.

        addEvent(H.Legend, 'afterGetAllItems', function (e) {
          var legend = this,
              bubbleLegend = legend.bubbleLegend,
              legendOptions = legend.options,
              options = legendOptions.bubbleLegend,
              bubbleSeriesIndex = legend.chart.getVisibleBubbleSeriesIndex(); // Remove unnecessary element

          if (bubbleLegend && bubbleLegend.ranges && bubbleLegend.ranges.length) {
            // Allow change the way of calculating ranges in update
            if (options.ranges.length) {
              options.autoRanges = !!options.ranges[0].autoRanges;
            } // Update bubbleLegend dimensions in each redraw


            legend.destroyItem(bubbleLegend);
          } // Create bubble legend


          if (bubbleSeriesIndex >= 0 && legendOptions.enabled && options.enabled) {
            options.seriesIndex = bubbleSeriesIndex;
            legend.bubbleLegend = new H.BubbleLegend(options, legend);
            legend.bubbleLegend.addToLegend(e.allItems);
          }
        });
        /**
         * Check if there is at least one visible bubble series.
         *
         * @private
         * @function Highcharts.Chart#getVisibleBubbleSeriesIndex
         * @return {number}
         *         First visible bubble series index
         */

        Chart.prototype.getVisibleBubbleSeriesIndex = function () {
          var series = this.series,
              i = 0;

          while (i < series.length) {
            if (series[i] && series[i].isBubble && series[i].visible && series[i].zData.length) {
              return i;
            }

            i++;
          }

          return -1;
        };
        /**
         * Calculate height for each row in legend.
         *
         * @private
         * @function Highcharts.Legend#getLinesHeights
         * @return {Array<Highcharts.Dictionary<number>>}
         *         Informations about line height and items amount
         */


        Legend.prototype.getLinesHeights = function () {
          var items = this.allItems,
              lines = [],
              lastLine,
              length = items.length,
              i = 0,
              j = 0;

          for (i = 0; i < length; i++) {
            if (items[i].legendItemHeight) {
              // for bubbleLegend
              items[i].itemHeight = items[i].legendItemHeight;
            }

            if ( // Line break
            items[i] === items[length - 1] || items[i + 1] && items[i]._legendItemPos[1] !== items[i + 1]._legendItemPos[1]) {
              lines.push({
                height: 0
              });
              lastLine = lines[lines.length - 1]; // Find the highest item in line

              for (j; j <= i; j++) {
                if (items[j].itemHeight > lastLine.height) {
                  lastLine.height = items[j].itemHeight;
                }
              }

              lastLine.step = i;
            }
          }

          return lines;
        };
        /**
         * Correct legend items translation in case of different elements heights.
         *
         * @private
         * @function Highcharts.Legend#retranslateItems
         * @param {Array<Highcharts.Dictionary<number>>} lines
         *        Informations about line height and items amount
         * @return {void}
         */


        Legend.prototype.retranslateItems = function (lines) {
          var items = this.allItems,
              orgTranslateX,
              orgTranslateY,
              movementX,
              rtl = this.options.rtl,
              actualLine = 0;
          items.forEach(function (item, index) {
            orgTranslateX = item.legendGroup.translateX;
            orgTranslateY = item._legendItemPos[1];
            movementX = item.movementX;

            if (movementX || rtl && item.ranges) {
              movementX = rtl ? orgTranslateX - item.options.maxSize / 2 : orgTranslateX + movementX;
              item.legendGroup.attr({
                translateX: movementX
              });
            }

            if (index > lines[actualLine].step) {
              actualLine++;
            }

            item.legendGroup.attr({
              translateY: Math.round(orgTranslateY + lines[actualLine].height / 2)
            });
            item._legendItemPos[1] = orgTranslateY + lines[actualLine].height / 2;
          });
        }; // Toggle bubble legend depending on the visible status of bubble series.


        addEvent(Series, 'legendItemClick', function () {
          var series = this,
              chart = series.chart,
              visible = series.visible,
              legend = series.chart.legend,
              status;

          if (legend && legend.bubbleLegend) {
            // Temporary correct 'visible' property
            series.visible = !visible; // Save future status for getRanges method

            series.ignoreSeries = visible; // Check if at lest one bubble series is visible

            status = chart.getVisibleBubbleSeriesIndex() >= 0; // Hide bubble legend if all bubble series are disabled

            if (legend.bubbleLegend.visible !== status) {
              // Show or hide bubble legend
              legend.update({
                bubbleLegend: {
                  enabled: status
                }
              });
              legend.bubbleLegend.visible = status; // Restore default status
            }

            series.visible = visible;
          }
        }); // If ranges are not specified, determine ranges from rendered bubble series
        // and render legend again.

        wrap(Chart.prototype, 'drawChartBox', function (proceed, options, callback) {
          var chart = this,
              legend = chart.legend,
              bubbleSeries = chart.getVisibleBubbleSeriesIndex() >= 0,
              bubbleLegendOptions,
              bubbleSizes;

          if (legend && legend.options.enabled && legend.bubbleLegend && legend.options.bubbleLegend.autoRanges && bubbleSeries) {
            bubbleLegendOptions = legend.bubbleLegend.options;
            bubbleSizes = legend.bubbleLegend.predictBubbleSizes();
            legend.bubbleLegend.updateRanges(bubbleSizes[0], bubbleSizes[1]); // Disable animation on init

            if (!bubbleLegendOptions.placed) {
              legend.group.placed = false;
              legend.allItems.forEach(function (item) {
                item.legendGroup.translateY = null;
              });
            } // Create legend with bubbleLegend


            legend.render();
            chart.getMargins();
            chart.axes.forEach(function (axis) {
              if (axis.visible) {
                // #11448
                axis.render();
              }

              if (!bubbleLegendOptions.placed) {
                axis.setScale();
                axis.updateNames(); // Disable axis animation on init

                objectEach(axis.ticks, function (tick) {
                  tick.isNew = true;
                  tick.isNewLabel = true;
                });
              }
            });
            bubbleLegendOptions.placed = true; // After recalculate axes, calculate margins again.

            chart.getMargins(); // Call default 'drawChartBox' method.

            proceed.call(chart, options, callback); // Check bubble legend sizes and correct them if necessary.

            legend.bubbleLegend.correctSizes(); // Correct items positions with different dimensions in legend.

            legend.retranslateItems(legend.getLinesHeights());
          } else {
            proceed.call(chart, options, callback); // Allow color change on static bubble legend after click on legend

            if (legend && legend.options.enabled && legend.bubbleLegend) {
              legend.render();
              legend.retranslateItems(legend.getLinesHeights());
            }
          }
        });
      });

      _registerModule(_modules, 'parts-more/BubbleSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */

        /**
         * @typedef {"area"|"width"} Highcharts.BubbleSizeByValue
         */
        var arrayMax = U.arrayMax,
            arrayMin = U.arrayMin,
            clamp = U.clamp,
            extend = U.extend,
            isNumber = U.isNumber,
            pick = U.pick,
            pInt = U.pInt;
        var Axis = H.Axis,
            color = H.color,
            noop = H.noop,
            Point = H.Point,
            Series = H.Series,
            seriesType = H.seriesType,
            seriesTypes = H.seriesTypes;
        /**
         * A bubble series is a three dimensional series type where each point renders
         * an X, Y and Z value. Each points is drawn as a bubble where the position
         * along the X and Y axes mark the X and Y values, and the size of the bubble
         * relates to the Z value.
         *
         * @sample {highcharts} highcharts/demo/bubble/
         *         Bubble chart
         *
         * @extends      plotOptions.scatter
         * @excluding    cluster
         * @product      highcharts highstock
         * @requires     highcharts-more
         * @optionparent plotOptions.bubble
         */

        seriesType('bubble', 'scatter', {
          dataLabels: {
            formatter: function formatter() {
              return this.point.z;
            },
            inside: true,
            verticalAlign: 'middle'
          },

          /**
           * If there are more points in the series than the `animationLimit`, the
           * animation won't run. Animation affects overall performance and doesn't
           * work well with heavy data series.
           *
           * @since 6.1.0
           */
          animationLimit: 250,

          /**
           * Whether to display negative sized bubbles. The threshold is given
           * by the [zThreshold](#plotOptions.bubble.zThreshold) option, and negative
           * bubbles can be visualized by setting
           * [negativeColor](#plotOptions.bubble.negativeColor).
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-negative/
           *         Negative bubbles
           *
           * @type      {boolean}
           * @default   true
           * @since     3.0
           * @apioption plotOptions.bubble.displayNegative
           */

          /**
           * @extends   plotOptions.series.marker
           * @excluding enabled, enabledThreshold, height, radius, width
           */
          marker: {
            lineColor: null,
            lineWidth: 1,

            /**
             * The fill opacity of the bubble markers.
             */
            fillOpacity: 0.5,

            /**
             * In bubble charts, the radius is overridden and determined based on
             * the point's data value.
             *
             * @ignore-option
             */
            radius: null,
            states: {
              hover: {
                radiusPlus: 0
              }
            },

            /**
             * A predefined shape or symbol for the marker. Possible values are
             * "circle", "square", "diamond", "triangle" and "triangle-down".
             *
             * Additionally, the URL to a graphic can be given on the form
             * `url(graphic.png)`. Note that for the image to be applied to exported
             * charts, its URL needs to be accessible by the export server.
             *
             * Custom callbacks for symbol path generation can also be added to
             * `Highcharts.SVGRenderer.prototype.symbols`. The callback is then
             * used by its method name, as shown in the demo.
             *
             * @sample     {highcharts} highcharts/plotoptions/bubble-symbol/
             *             Bubble chart with various symbols
             * @sample     {highcharts} highcharts/plotoptions/series-marker-symbol/
             *             General chart with predefined, graphic and custom markers
             *
             * @type  {Highcharts.SymbolKeyValue|string}
             * @since 5.0.11
             */
            symbol: 'circle'
          },

          /**
           * Minimum bubble size. Bubbles will automatically size between the
           * `minSize` and `maxSize` to reflect the `z` value of each bubble.
           * Can be either pixels (when no unit is given), or a percentage of
           * the smallest one of the plot width and height.
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-size/
           *         Bubble size
           *
           * @type    {number|string}
           * @since   3.0
           * @product highcharts highstock
           */
          minSize: 8,

          /**
           * Maximum bubble size. Bubbles will automatically size between the
           * `minSize` and `maxSize` to reflect the `z` value of each bubble.
           * Can be either pixels (when no unit is given), or a percentage of
           * the smallest one of the plot width and height.
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-size/
           *         Bubble size
           *
           * @type    {number|string}
           * @since   3.0
           * @product highcharts highstock
           */
          maxSize: '20%',

          /**
           * When a point's Z value is below the
           * [zThreshold](#plotOptions.bubble.zThreshold) setting, this color is used.
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-negative/
           *         Negative bubbles
           *
           * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
           * @since     3.0
           * @product   highcharts
           * @apioption plotOptions.bubble.negativeColor
           */

          /**
           * Whether the bubble's value should be represented by the area or the
           * width of the bubble. The default, `area`, corresponds best to the
           * human perception of the size of each bubble.
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-sizeby/
           *         Comparison of area and size
           *
           * @type       {Highcharts.BubbleSizeByValue}
           * @default    area
           * @since      3.0.7
           * @apioption  plotOptions.bubble.sizeBy
           */

          /**
           * When this is true, the absolute value of z determines the size of
           * the bubble. This means that with the default `zThreshold` of 0, a
           * bubble of value -1 will have the same size as a bubble of value 1,
           * while a bubble of value 0 will have a smaller size according to
           * `minSize`.
           *
           * @sample    {highcharts} highcharts/plotoptions/bubble-sizebyabsolutevalue/
           *            Size by absolute value, various thresholds
           *
           * @type      {boolean}
           * @default   false
           * @since     4.1.9
           * @product   highcharts
           * @apioption plotOptions.bubble.sizeByAbsoluteValue
           */

          /**
           * When this is true, the series will not cause the Y axis to cross
           * the zero plane (or [threshold](#plotOptions.series.threshold) option)
           * unless the data actually crosses the plane.
           *
           * For example, if `softThreshold` is `false`, a series of 0, 1, 2,
           * 3 will make the Y axis show negative values according to the `minPadding`
           * option. If `softThreshold` is `true`, the Y axis starts at 0.
           *
           * @since   4.1.9
           * @product highcharts
           */
          softThreshold: false,
          states: {
            hover: {
              halo: {
                size: 5
              }
            }
          },
          tooltip: {
            pointFormat: '({point.x}, {point.y}), Size: {point.z}'
          },
          turboThreshold: 0,

          /**
           * The minimum for the Z value range. Defaults to the highest Z value
           * in the data.
           *
           * @see [zMin](#plotOptions.bubble.zMin)
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-zmin-zmax/
           *         Z has a possible range of 0-100
           *
           * @type      {number}
           * @since     4.0.3
           * @product   highcharts
           * @apioption plotOptions.bubble.zMax
           */

          /**
           * @default   z
           * @apioption plotOptions.bubble.colorKey
           */

          /**
           * The minimum for the Z value range. Defaults to the lowest Z value
           * in the data.
           *
           * @see [zMax](#plotOptions.bubble.zMax)
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-zmin-zmax/
           *         Z has a possible range of 0-100
           *
           * @type      {number}
           * @since     4.0.3
           * @product   highcharts
           * @apioption plotOptions.bubble.zMin
           */

          /**
           * When [displayNegative](#plotOptions.bubble.displayNegative) is `false`,
           * bubbles with lower Z values are skipped. When `displayNegative`
           * is `true` and a [negativeColor](#plotOptions.bubble.negativeColor)
           * is given, points with lower Z is colored.
           *
           * @sample {highcharts} highcharts/plotoptions/bubble-negative/
           *         Negative bubbles
           *
           * @since   3.0
           * @product highcharts
           */
          zThreshold: 0,
          zoneAxis: 'z' // Prototype members

        }, {
          pointArrayMap: ['y', 'z'],
          parallelArrays: ['x', 'y', 'z'],
          trackerGroups: ['group', 'dataLabelsGroup'],
          specialGroup: 'group',
          bubblePadding: true,
          zoneAxis: 'z',
          directTouch: true,
          isBubble: true,

          /* eslint-disable valid-jsdoc */

          /**
           * @private
           */
          pointAttribs: function pointAttribs(point, state) {
            var markerOptions = this.options.marker,
                fillOpacity = markerOptions.fillOpacity,
                attr = Series.prototype.pointAttribs.call(this, point, state);

            if (fillOpacity !== 1) {
              attr.fill = color(attr.fill).setOpacity(fillOpacity).get('rgba');
            }

            return attr;
          },

          /**
           * Get the radius for each point based on the minSize, maxSize and each
           * point's Z value. This must be done prior to Series.translate because
           * the axis needs to add padding in accordance with the point sizes.
           * @private
           */
          getRadii: function getRadii(zMin, zMax, series) {
            var len,
                i,
                zData = this.zData,
                yData = this.yData,
                minSize = series.minPxSize,
                maxSize = series.maxPxSize,
                radii = [],
                value; // Set the shape type and arguments to be picked up in drawPoints

            for (i = 0, len = zData.length; i < len; i++) {
              value = zData[i]; // Separate method to get individual radius for bubbleLegend

              radii.push(this.getRadius(zMin, zMax, minSize, maxSize, value, yData[i]));
            }

            this.radii = radii;
          },

          /**
           * Get the individual radius for one point.
           * @private
           */
          getRadius: function getRadius(zMin, zMax, minSize, maxSize, value, yValue) {
            var options = this.options,
                sizeByArea = options.sizeBy !== 'width',
                zThreshold = options.zThreshold,
                zRange = zMax - zMin,
                pos = 0.5; // #8608 - bubble should be visible when z is undefined

            if (yValue === null || value === null) {
              return null;
            }

            if (isNumber(value)) {
              // When sizing by threshold, the absolute value of z determines
              // the size of the bubble.
              if (options.sizeByAbsoluteValue) {
                value = Math.abs(value - zThreshold);
                zMax = zRange = Math.max(zMax - zThreshold, Math.abs(zMin - zThreshold));
                zMin = 0;
              } // Issue #4419 - if value is less than zMin, push a radius that's
              // always smaller than the minimum size


              if (value < zMin) {
                return minSize / 2 - 1;
              } // Relative size, a number between 0 and 1


              if (zRange > 0) {
                pos = (value - zMin) / zRange;
              }
            }

            if (sizeByArea && pos >= 0) {
              pos = Math.sqrt(pos);
            }

            return Math.ceil(minSize + pos * (maxSize - minSize)) / 2;
          },

          /**
           * Perform animation on the bubbles
           * @private
           */
          animate: function animate(init) {
            if (!init && this.points.length < this.options.animationLimit // #8099
            ) {
                this.points.forEach(function (point) {
                  var graphic = point.graphic,
                      animationTarget;

                  if (graphic && graphic.width) {
                    // URL symbols don't have width
                    animationTarget = {
                      x: graphic.x,
                      y: graphic.y,
                      width: graphic.width,
                      height: graphic.height
                    }; // Start values

                    graphic.attr({
                      x: point.plotX,
                      y: point.plotY,
                      width: 1,
                      height: 1
                    }); // Run animation

                    graphic.animate(animationTarget, this.options.animation);
                  }
                }, this); // delete this function to allow it only once

                this.animate = null;
              }
          },

          /**
           * Define hasData function for non-cartesian series.
           * Returns true if the series has points at all.
           * @private
           */
          hasData: function hasData() {
            return !!this.processedXData.length; // != 0
          },

          /**
           * Extend the base translate method to handle bubble size
           * @private
           */
          translate: function translate() {
            var i,
                data = this.data,
                point,
                radius,
                radii = this.radii; // Run the parent method

            seriesTypes.scatter.prototype.translate.call(this); // Set the shape type and arguments to be picked up in drawPoints

            i = data.length;

            while (i--) {
              point = data[i];
              radius = radii ? radii[i] : 0; // #1737

              if (isNumber(radius) && radius >= this.minPxSize / 2) {
                // Shape arguments
                point.marker = extend(point.marker, {
                  radius: radius,
                  width: 2 * radius,
                  height: 2 * radius
                }); // Alignment box for the data label

                point.dlBox = {
                  x: point.plotX - radius,
                  y: point.plotY - radius,
                  width: 2 * radius,
                  height: 2 * radius
                };
              } else {
                // below zThreshold
                // #1691
                point.shapeArgs = point.plotY = point.dlBox = void 0;
              }
            }
          },
          alignDataLabel: seriesTypes.column.prototype.alignDataLabel,
          buildKDTree: noop,
          applyZones: noop // Point class

        }, {
          /**
           * @private
           */
          haloPath: function haloPath(size) {
            return Point.prototype.haloPath.call(this, // #6067
            size === 0 ? 0 : (this.marker ? this.marker.radius || 0 : 0) + size);
          },
          ttBelow: false
        }); // Add logic to pad each axis with the amount of pixels necessary to avoid the
        // bubbles to overflow.

        Axis.prototype.beforePadding = function () {
          var axis = this,
              axisLength = this.len,
              chart = this.chart,
              pxMin = 0,
              pxMax = axisLength,
              isXAxis = this.isXAxis,
              dataKey = isXAxis ? 'xData' : 'yData',
              min = this.min,
              extremes = {},
              smallestSize = Math.min(chart.plotWidth, chart.plotHeight),
              zMin = Number.MAX_VALUE,
              zMax = -Number.MAX_VALUE,
              range = this.max - min,
              transA = axisLength / range,
              activeSeries = []; // Handle padding on the second pass, or on redraw

          this.series.forEach(function (series) {
            var seriesOptions = series.options,
                zData;

            if (series.bubblePadding && (series.visible || !chart.options.chart.ignoreHiddenSeries)) {
              // Correction for #1673
              axis.allowZoomOutside = true; // Cache it

              activeSeries.push(series);

              if (isXAxis) {
                // because X axis is evaluated first
                // For each series, translate the size extremes to pixel values
                ['minSize', 'maxSize'].forEach(function (prop) {
                  var length = seriesOptions[prop],
                      isPercent = /%$/.test(length);
                  length = pInt(length);
                  extremes[prop] = isPercent ? smallestSize * length / 100 : length;
                });
                series.minPxSize = extremes.minSize; // Prioritize min size if conflict to make sure bubbles are
                // always visible. #5873

                series.maxPxSize = Math.max(extremes.maxSize, extremes.minSize); // Find the min and max Z

                zData = series.zData.filter(isNumber);

                if (zData.length) {
                  // #1735
                  zMin = pick(seriesOptions.zMin, clamp(arrayMin(zData), seriesOptions.displayNegative === false ? seriesOptions.zThreshold : -Number.MAX_VALUE, zMin));
                  zMax = pick(seriesOptions.zMax, Math.max(zMax, arrayMax(zData)));
                }
              }
            }
          });
          activeSeries.forEach(function (series) {
            var data = series[dataKey],
                i = data.length,
                radius;

            if (isXAxis) {
              series.getRadii(zMin, zMax, series);
            }

            if (range > 0) {
              while (i--) {
                if (isNumber(data[i]) && axis.dataMin <= data[i] && data[i] <= axis.max) {
                  radius = series.radii ? series.radii[i] : 0;
                  pxMin = Math.min((data[i] - min) * transA - radius, pxMin);
                  pxMax = Math.max((data[i] - min) * transA + radius, pxMax);
                }
              }
            }
          }); // Apply the padding to the min and max properties

          if (activeSeries.length && range > 0 && !this.isLog) {
            pxMax -= axisLength;
            transA *= (axisLength + Math.max(0, pxMin) - // #8901
            Math.min(pxMax, axisLength)) / axisLength;
            [['min', 'userMin', pxMin], ['max', 'userMax', pxMax]].forEach(function (keys) {
              if (typeof pick(axis.options[keys[0]], axis[keys[1]]) === 'undefined') {
                axis[keys[0]] += keys[2] / transA;
              }
            });
          }
          /* eslint-enable valid-jsdoc */

        };
        /**
         * A `bubble` series. If the [type](#series.bubble.type) option is
         * not specified, it is inherited from [chart.type](#chart.type).
         *
         * @extends   series,plotOptions.bubble
         * @excluding dataParser, dataURL, stack
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption series.bubble
         */

        /**
         * An array of data points for the series. For the `bubble` series type,
         * points can be given in the following ways:
         *
         * 1. An array of arrays with 3 or 2 values. In this case, the values correspond
         *    to `x,y,z`. If the first value is a string, it is applied as the name of
         *    the point, and the `x` value is inferred. The `x` value can also be
         *    omitted, in which case the inner arrays should be of length 2\. Then the
         *    `x` value is automatically calculated, either starting at 0 and
         *    incremented by 1, or from `pointStart` and `pointInterval` given in the
         *    series options.
         *    ```js
         *    data: [
         *        [0, 1, 2],
         *        [1, 5, 5],
         *        [2, 0, 2]
         *    ]
         *    ```
         *
         * 2. An array of objects with named values. The following snippet shows only a
         *    few settings, see the complete options set below. If the total number of
         *    data points exceeds the series'
         *    [turboThreshold](#series.bubble.turboThreshold), this option is not
         *    available.
         *    ```js
         *    data: [{
         *        x: 1,
         *        y: 1,
         *        z: 1,
         *        name: "Point2",
         *        color: "#00FF00"
         *    }, {
         *        x: 1,
         *        y: 5,
         *        z: 4,
         *        name: "Point1",
         *        color: "#FF00FF"
         *    }]
         *    ```
         *
         * @sample {highcharts} highcharts/series/data-array-of-arrays/
         *         Arrays of numeric x and y
         * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
         *         Arrays of datetime x and y
         * @sample {highcharts} highcharts/series/data-array-of-name-value/
         *         Arrays of point.name and y
         * @sample {highcharts} highcharts/series/data-array-of-objects/
         *         Config objects
         *
         * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
         * @extends   series.line.data
         * @product   highcharts
         * @apioption series.bubble.data
         */

        /**
         * @extends     series.line.data.marker
         * @excluding   enabledThreshold, height, radius, width
         * @product     highcharts
         * @apioption   series.bubble.data.marker
         */

        /**
         * The size value for each bubble. The bubbles' diameters are computed
         * based on the `z`, and controlled by series options like `minSize`,
         * `maxSize`, `sizeBy`, `zMin` and `zMax`.
         *
         * @type      {number|null}
         * @product   highcharts
         * @apioption series.bubble.data.z
         */

        /**
         * @excluding enabled, enabledThreshold, height, radius, width
         * @apioption series.bubble.marker
         */


        ''; // adds doclets above to transpiled file
      });

      _registerModule(_modules, 'modules/networkgraph/integrations.js', [_modules['parts/Globals.js']], function (H) {
        /* *
         *
         *  Networkgraph series
         *
         *  (c) 2010-2019 Paweł Fus
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */

        /* eslint-disable no-invalid-this, valid-jsdoc */
        H.networkgraphIntegrations = {
          verlet: {
            /**
             * Attractive force funtion. Can be replaced by API's
             * `layoutAlgorithm.attractiveForce`
             *
             * @private
             * @param {number} d current distance between two nodes
             * @param {number} k expected distance between two nodes
             * @return {number} force
             */
            attractiveForceFunction: function attractiveForceFunction(d, k) {
              // Used in API:
              return (k - d) / d;
            },

            /**
             * Repulsive force funtion. Can be replaced by API's
             * `layoutAlgorithm.repulsiveForce`
             *
             * @private
             * @param {number} d current distance between two nodes
             * @param {number} k expected distance between two nodes
             * @return {number} force
             */
            repulsiveForceFunction: function repulsiveForceFunction(d, k) {
              // Used in API:
              return (k - d) / d * (k > d ? 1 : 0); // Force only for close nodes
            },

            /**
             * Barycenter force. Calculate and applys barycenter forces on the
             * nodes. Making them closer to the center of their barycenter point.
             *
             * In Verlet integration, force is applied on a node immidatelly to it's
             * `plotX` and `plotY` position.
             *
             * @private
             * @return {void}
             */
            barycenter: function barycenter() {
              var gravitationalConstant = this.options.gravitationalConstant,
                  xFactor = this.barycenter.xFactor,
                  yFactor = this.barycenter.yFactor; // To consider:

              xFactor = (xFactor - (this.box.left + this.box.width) / 2) * gravitationalConstant;
              yFactor = (yFactor - (this.box.top + this.box.height) / 2) * gravitationalConstant;
              this.nodes.forEach(function (node) {
                if (!node.fixedPosition) {
                  node.plotX -= xFactor / node.mass / node.degree;
                  node.plotY -= yFactor / node.mass / node.degree;
                }
              });
            },

            /**
             * Repulsive force.
             *
             * In Verlet integration, force is applied on a node immidatelly to it's
             * `plotX` and `plotY` position.
             *
             * @private
             * @param {Highcharts.Point} node
             *        Node that should be translated by force.
             * @param {number} force
             *        Force calcualated in `repulsiveForceFunction`
             * @param {Highcharts.PositionObject} distance
             *        Distance between two nodes e.g. `{x, y}`
             * @return {void}
             */
            repulsive: function repulsive(node, force, distanceXY) {
              var factor = force * this.diffTemperature / node.mass / node.degree;

              if (!node.fixedPosition) {
                node.plotX += distanceXY.x * factor;
                node.plotY += distanceXY.y * factor;
              }
            },

            /**
             * Attractive force.
             *
             * In Verlet integration, force is applied on a node immidatelly to it's
             * `plotX` and `plotY` position.
             *
             * @private
             * @param {Highcharts.Point} link
             *        Link that connects two nodes
             * @param {number} force
             *        Force calcualated in `repulsiveForceFunction`
             * @param {Highcharts.PositionObject} distance
             *        Distance between two nodes e.g. `{x, y}`
             * @return {void}
             */
            attractive: function attractive(link, force, distanceXY) {
              var massFactor = link.getMass(),
                  translatedX = -distanceXY.x * force * this.diffTemperature,
                  translatedY = -distanceXY.y * force * this.diffTemperature;

              if (!link.fromNode.fixedPosition) {
                link.fromNode.plotX -= translatedX * massFactor.fromNode / link.fromNode.degree;
                link.fromNode.plotY -= translatedY * massFactor.fromNode / link.fromNode.degree;
              }

              if (!link.toNode.fixedPosition) {
                link.toNode.plotX += translatedX * massFactor.toNode / link.toNode.degree;
                link.toNode.plotY += translatedY * massFactor.toNode / link.toNode.degree;
              }
            },

            /**
             * Integration method.
             *
             * In Verlet integration, forces are applied on node immidatelly to it's
             * `plotX` and `plotY` position.
             *
             * Verlet without velocity:
             *
             *    x(n+1) = 2 * x(n) - x(n-1) + A(T) * deltaT ^ 2
             *
             * where:
             *     - x(n+1) - new position
             *     - x(n) - current position
             *     - x(n-1) - previous position
             *
             * Assuming A(t) = 0 (no acceleration) and (deltaT = 1) we get:
             *
             *     x(n+1) = x(n) + (x(n) - x(n-1))
             *
             * where:
             *     - (x(n) - x(n-1)) - position change
             *
             * TO DO:
             * Consider Verlet with velocity to support additional
             * forces. Or even Time-Corrected Verlet by Jonathan
             * "lonesock" Dummer
             *
             * @private
             * @param {Highcharts.NetworkgraphLayout} layout layout object
             * @param {Highcharts.Point} node node that should be translated
             * @return {void}
             */
            integrate: function integrate(layout, node) {
              var friction = -layout.options.friction,
                  maxSpeed = layout.options.maxSpeed,
                  prevX = node.prevX,
                  prevY = node.prevY,
                  // Apply friciton:
              diffX = (node.plotX + node.dispX - prevX) * friction,
                  diffY = (node.plotY + node.dispY - prevY) * friction,
                  abs = Math.abs,
                  signX = abs(diffX) / (diffX || 1),
                  // need to deal with 0
              signY = abs(diffY) / (diffY || 1); // Apply max speed:

              diffX = signX * Math.min(maxSpeed, Math.abs(diffX));
              diffY = signY * Math.min(maxSpeed, Math.abs(diffY)); // Store for the next iteration:

              node.prevX = node.plotX + node.dispX;
              node.prevY = node.plotY + node.dispY; // Update positions:

              node.plotX += diffX;
              node.plotY += diffY;
              node.temperature = layout.vectorLength({
                x: diffX,
                y: diffY
              });
            },

            /**
             * Estiamte the best possible distance between two nodes, making graph
             * readable.
             *
             * @private
             * @param {Highcharts.NetworkgraphLayout} layout layout object
             * @return {number}
             */
            getK: function getK(layout) {
              return Math.pow(layout.box.width * layout.box.height / layout.nodes.length, 0.5);
            }
          },
          euler: {
            /**
             * Attractive force funtion. Can be replaced by API's
             * `layoutAlgorithm.attractiveForce`
             *
             * Other forces that can be used:
             *
             * basic, not recommended:
             *    `function (d, k) { return d / k }`
             *
             * @private
             * @param {number} d current distance between two nodes
             * @param {number} k expected distance between two nodes
             * @return {number} force
             */
            attractiveForceFunction: function attractiveForceFunction(d, k) {
              return d * d / k;
            },

            /**
             * Repulsive force funtion. Can be replaced by API's
             * `layoutAlgorithm.repulsiveForce`.
             *
             * Other forces that can be used:
             *
             * basic, not recommended:
             *    `function (d, k) { return k / d }`
             *
             * standard:
             *    `function (d, k) { return k * k / d }`
             *
             * grid-variant:
             *    `function (d, k) { return k * k / d * (2 * k - d > 0 ? 1 : 0) }`
             *
             * @private
             * @param {number} d current distance between two nodes
             * @param {number} k expected distance between two nodes
             * @return {number} force
             */
            repulsiveForceFunction: function repulsiveForceFunction(d, k) {
              return k * k / d;
            },

            /**
             * Barycenter force. Calculate and applys barycenter forces on the
             * nodes. Making them closer to the center of their barycenter point.
             *
             * In Euler integration, force is stored in a node, not changing it's
             * position. Later, in `integrate()` forces are applied on nodes.
             *
             * @private
             * @return {void}
             */
            barycenter: function barycenter() {
              var gravitationalConstant = this.options.gravitationalConstant,
                  xFactor = this.barycenter.xFactor,
                  yFactor = this.barycenter.yFactor;
              this.nodes.forEach(function (node) {
                if (!node.fixedPosition) {
                  var degree = node.getDegree(),
                      phi = degree * (1 + degree / 2);
                  node.dispX += (xFactor - node.plotX) * gravitationalConstant * phi / node.degree;
                  node.dispY += (yFactor - node.plotY) * gravitationalConstant * phi / node.degree;
                }
              });
            },

            /**
             * Repulsive force.
             *
             * @private
             * @param {Highcharts.Point} node
             *        Node that should be translated by force.
             * @param {number} force
             *        Force calcualated in `repulsiveForceFunction`
             * @param {Highcharts.PositionObject} distanceXY
             *        Distance between two nodes e.g. `{x, y}`
             * @return {void}
             */
            repulsive: function repulsive(node, force, distanceXY, distanceR) {
              node.dispX += distanceXY.x / distanceR * force / node.degree;
              node.dispY += distanceXY.y / distanceR * force / node.degree;
            },

            /**
             * Attractive force.
             *
             * In Euler integration, force is stored in a node, not changing it's
             * position. Later, in `integrate()` forces are applied on nodes.
             *
             * @private
             * @param {Highcharts.Point} link
             *        Link that connects two nodes
             * @param {number} force
             *        Force calcualated in `repulsiveForceFunction`
             * @param {Highcharts.PositionObject} distanceXY
             *        Distance between two nodes e.g. `{x, y}`
             * @param {number} distanceR
             * @return {void}
             */
            attractive: function attractive(link, force, distanceXY, distanceR) {
              var massFactor = link.getMass(),
                  translatedX = distanceXY.x / distanceR * force,
                  translatedY = distanceXY.y / distanceR * force;

              if (!link.fromNode.fixedPosition) {
                link.fromNode.dispX -= translatedX * massFactor.fromNode / link.fromNode.degree;
                link.fromNode.dispY -= translatedY * massFactor.fromNode / link.fromNode.degree;
              }

              if (!link.toNode.fixedPosition) {
                link.toNode.dispX += translatedX * massFactor.toNode / link.toNode.degree;
                link.toNode.dispY += translatedY * massFactor.toNode / link.toNode.degree;
              }
            },

            /**
             * Integration method.
             *
             * In Euler integration, force were stored in a node, not changing it's
             * position. Now, in the integrator method, we apply changes.
             *
             * Euler:
             *
             * Basic form: `x(n+1) = x(n) + v(n)`
             *
             * With Rengoild-Fruchterman we get:
             * `x(n+1) = x(n) + v(n) / length(v(n)) * min(v(n), temperature(n))`
             * where:
             * - `x(n+1)`: next position
             * - `x(n)`: current position
             * - `v(n)`: velocity (comes from net force)
             * - `temperature(n)`: current temperature
             *
             * Known issues:
             * Oscillations when force vector has the same magnitude but opposite
             * direction in the next step. Potentially solved by decreasing force by
             * `v * (1 / node.degree)`
             *
             * Note:
             * Actually `min(v(n), temperature(n))` replaces simulated annealing.
             *
             * @private
             * @param {Highcharts.NetworkgraphLayout} layout
             *        Layout object
             * @param {Highcharts.Point} node
             *        Node that should be translated
             * @return {void}
             */
            integrate: function integrate(layout, node) {
              var distanceR;
              node.dispX += node.dispX * layout.options.friction;
              node.dispY += node.dispY * layout.options.friction;
              distanceR = node.temperature = layout.vectorLength({
                x: node.dispX,
                y: node.dispY
              });

              if (distanceR !== 0) {
                node.plotX += node.dispX / distanceR * Math.min(Math.abs(node.dispX), layout.temperature);
                node.plotY += node.dispY / distanceR * Math.min(Math.abs(node.dispY), layout.temperature);
              }
            },

            /**
             * Estiamte the best possible distance between two nodes, making graph
             * readable.
             *
             * @private
             * @param {object} layout layout object
             * @return {number}
             */
            getK: function getK(layout) {
              return Math.pow(layout.box.width * layout.box.height / layout.nodes.length, 0.3);
            }
          }
        };
      });

      _registerModule(_modules, 'modules/networkgraph/QuadTree.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  Networkgraph series
         *
         *  (c) 2010-2019 Paweł Fus
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var extend = U.extend;
        /* eslint-disable no-invalid-this, valid-jsdoc */

        /**
         * The QuadTree node class. Used in Networkgraph chart as a base for Barnes-Hut
         * approximation.
         *
         * @private
         * @class
         * @name Highcharts.QuadTreeNode
         *
         * @param {Highcharts.Dictionary<number>} box Available space for the node
         */

        var QuadTreeNode = H.QuadTreeNode = function (box) {
          /**
           * Read only. The available space for node.
           *
           * @name Highcharts.QuadTreeNode#box
           * @type {Highcharts.Dictionary<number>}
           */
          this.box = box;
          /**
           * Read only. The minium of width and height values.
           *
           * @name Highcharts.QuadTreeNode#boxSize
           * @type {number}
           */

          this.boxSize = Math.min(box.width, box.height);
          /**
           * Read only. Array of subnodes. Empty if QuadTreeNode has just one Point.
           * When added another Point to this QuadTreeNode, array is filled with four
           * subnodes.
           *
           * @name Highcharts.QuadTreeNode#nodes
           * @type {Array<Highcharts.QuadTreeNode>}
           */

          this.nodes = [];
          /**
           * Read only. Flag to determine if QuadTreeNode is internal (and has
           * subnodes with mass and central position) or external (bound to Point).
           *
           * @name Highcharts.QuadTreeNode#isInternal
           * @type {boolean}
           */

          this.isInternal = false;
          /**
           * Read only. If QuadTreeNode is an external node, Point is stored in
           * `this.body`.
           *
           * @name Highcharts.QuadTreeNode#body
           * @type {boolean|Highcharts.Point}
           */

          this.body = false;
          /**
           * Read only. Internal nodes when created are empty to reserve the space. If
           * Point is added to this QuadTreeNode, QuadTreeNode is no longer empty.
           *
           * @name Highcharts.QuadTreeNode#isEmpty
           * @type {boolean}
           */

          this.isEmpty = true;
        };

        extend(QuadTreeNode.prototype,
        /** @lends Highcharts.QuadTreeNode.prototype */
        {
          /**
           * Insert recursively point(node) into the QuadTree. If the given
           * quadrant is already occupied, divide it into smaller quadrants.
           *
           * @param {Highcharts.Point} point
           *        Point/node to be inserted
           * @param {number} depth
           *        Max depth of the QuadTree
           */
          insert: function insert(point, depth) {
            var newQuadTreeNode;

            if (this.isInternal) {
              // Internal node:
              this.nodes[this.getBoxPosition(point)].insert(point, depth - 1);
            } else {
              this.isEmpty = false;

              if (!this.body) {
                // First body in a quadrant:
                this.isInternal = false;
                this.body = point;
              } else {
                if (depth) {
                  // Every other body in a quadrant:
                  this.isInternal = true;
                  this.divideBox(); // Reinsert main body only once:

                  if (this.body !== true) {
                    this.nodes[this.getBoxPosition(this.body)].insert(this.body, depth - 1);
                    this.body = true;
                  } // Add second body:


                  this.nodes[this.getBoxPosition(point)].insert(point, depth - 1);
                } else {
                  // We are below max allowed depth. That means either:
                  // - really huge number of points
                  // - falling two points into exactly the same position
                  // In this case, create another node in the QuadTree.
                  //
                  // Alternatively we could add some noise to the
                  // position, but that could result in different
                  // rendered chart in exporting.
                  newQuadTreeNode = new QuadTreeNode({
                    top: point.plotX,
                    left: point.plotY,
                    // Width/height below 1px
                    width: 0.1,
                    height: 0.1
                  });
                  newQuadTreeNode.body = point;
                  newQuadTreeNode.isInternal = false;
                  this.nodes.push(newQuadTreeNode);
                }
              }
            }
          },

          /**
           * Each quad node requires it's mass and center position. That mass and
           * position is used to imitate real node in the layout by approximation.
           */
          updateMassAndCenter: function updateMassAndCenter() {
            var mass = 0,
                plotX = 0,
                plotY = 0;

            if (this.isInternal) {
              // Calcualte weightened mass of the quad node:
              this.nodes.forEach(function (pointMass) {
                if (!pointMass.isEmpty) {
                  mass += pointMass.mass;
                  plotX += pointMass.plotX * pointMass.mass;
                  plotY += pointMass.plotY * pointMass.mass;
                }
              });
              plotX /= mass;
              plotY /= mass;
            } else if (this.body) {
              // Just one node, use coordinates directly:
              mass = this.body.mass;
              plotX = this.body.plotX;
              plotY = this.body.plotY;
            } // Store details:


            this.mass = mass;
            this.plotX = plotX;
            this.plotY = plotY;
          },

          /**
           * When inserting another node into the box, that already hove one node,
           * divide the available space into another four quadrants.
           *
           * Indexes of quadrants are:
           * ```
           * -------------               -------------
           * |           |               |     |     |
           * |           |               |  0  |  1  |
           * |           |   divide()    |     |     |
           * |     1     | ----------->  -------------
           * |           |               |     |     |
           * |           |               |  3  |  2  |
           * |           |               |     |     |
           * -------------               -------------
           * ```
           */
          divideBox: function divideBox() {
            var halfWidth = this.box.width / 2,
                halfHeight = this.box.height / 2; // Top left

            this.nodes[0] = new QuadTreeNode({
              left: this.box.left,
              top: this.box.top,
              width: halfWidth,
              height: halfHeight
            }); // Top right

            this.nodes[1] = new QuadTreeNode({
              left: this.box.left + halfWidth,
              top: this.box.top,
              width: halfWidth,
              height: halfHeight
            }); // Bottom right

            this.nodes[2] = new QuadTreeNode({
              left: this.box.left + halfWidth,
              top: this.box.top + halfHeight,
              width: halfWidth,
              height: halfHeight
            }); // Bottom left

            this.nodes[3] = new QuadTreeNode({
              left: this.box.left,
              top: this.box.top + halfHeight,
              width: halfWidth,
              height: halfHeight
            });
          },

          /**
           * Determine which of the quadrants should be used when placing node in
           * the QuadTree. Returned index is always in range `< 0 , 3 >`.
           *
           * @param {Highcharts.Point} point
           * @return {number}
           */
          getBoxPosition: function getBoxPosition(point) {
            var left = point.plotX < this.box.left + this.box.width / 2,
                top = point.plotY < this.box.top + this.box.height / 2,
                index;

            if (left) {
              if (top) {
                // Top left
                index = 0;
              } else {
                // Bottom left
                index = 3;
              }
            } else {
              if (top) {
                // Top right
                index = 1;
              } else {
                // Bottom right
                index = 2;
              }
            }

            return index;
          }
        });
        /**
         * The QuadTree class. Used in Networkgraph chart as a base for Barnes-Hut
         * approximation.
         *
         * @private
         * @class
         * @name Highcharts.QuadTree
         *
         * @param {number} x left position of the plotting area
         * @param {number} y top position of the plotting area
         * @param {number} width width of the plotting area
         * @param {number} height height of the plotting area
         */

        var QuadTree = H.QuadTree = function (x, y, width, height) {
          // Boundary rectangle:
          this.box = {
            left: x,
            top: y,
            width: width,
            height: height
          };
          this.maxDepth = 25;
          this.root = new QuadTreeNode(this.box, '0');
          this.root.isInternal = true;
          this.root.isRoot = true;
          this.root.divideBox();
        };

        extend(QuadTree.prototype,
        /** @lends Highcharts.QuadTree.prototype */
        {
          /**
           * Insert nodes into the QuadTree
           *
           * @param {Array<Highcharts.Point>} points
           */
          insertNodes: function insertNodes(points) {
            points.forEach(function (point) {
              this.root.insert(point, this.maxDepth);
            }, this);
          },

          /**
           * Depfth first treversal (DFS). Using `before` and `after` callbacks,
           * we can get two results: preorder and postorder traversals, reminder:
           *
           * ```
           *     (a)
           *     / \
           *   (b) (c)
           *   / \
           * (d) (e)
           * ```
           *
           * DFS (preorder): `a -> b -> d -> e -> c`
           *
           * DFS (postorder): `d -> e -> b -> c -> a`
           *
           * @param {Highcharts.QuadTreeNode|null} node
           * @param {Function} [beforeCallback] function to be called before
           *                      visiting children nodes
           * @param {Function} [afterCallback] function to be called after
           *                      visiting children nodes
           */
          visitNodeRecursive: function visitNodeRecursive(node, beforeCallback, afterCallback) {
            var goFurther;

            if (!node) {
              node = this.root;
            }

            if (node === this.root && beforeCallback) {
              goFurther = beforeCallback(node);
            }

            if (goFurther === false) {
              return;
            }

            node.nodes.forEach(function (qtNode) {
              if (qtNode.isInternal) {
                if (beforeCallback) {
                  goFurther = beforeCallback(qtNode);
                }

                if (goFurther === false) {
                  return;
                }

                this.visitNodeRecursive(qtNode, beforeCallback, afterCallback);
              } else if (qtNode.body) {
                if (beforeCallback) {
                  beforeCallback(qtNode.body);
                }
              }

              if (afterCallback) {
                afterCallback(qtNode);
              }
            }, this);

            if (node === this.root && afterCallback) {
              afterCallback(node);
            }
          },

          /**
           * Calculate mass of the each QuadNode in the tree.
           */
          calculateMassAndCenter: function calculateMassAndCenter() {
            this.visitNodeRecursive(null, null, function (node) {
              node.updateMassAndCenter();
            });
          }
        });
      });

      _registerModule(_modules, 'modules/networkgraph/layouts.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  Networkgraph series
         *
         *  (c) 2010-2019 Paweł Fus
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var clamp = U.clamp,
            defined = U.defined,
            extend = U.extend,
            pick = U.pick,
            setAnimation = U.setAnimation;
        var addEvent = H.addEvent,
            Chart = H.Chart;
        /* eslint-disable no-invalid-this, valid-jsdoc */

        H.layouts = {
          'reingold-fruchterman': function reingoldFruchterman() {}
        };
        extend(
        /**
         * Reingold-Fruchterman algorithm from
         * "Graph Drawing by Force-directed Placement" paper.
         * @private
         */
        H.layouts['reingold-fruchterman'].prototype, {
          init: function init(options) {
            this.options = options;
            this.nodes = [];
            this.links = [];
            this.series = [];
            this.box = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            this.setInitialRendering(true);
            this.integration = H.networkgraphIntegrations[options.integration];
            this.attractiveForce = pick(options.attractiveForce, this.integration.attractiveForceFunction);
            this.repulsiveForce = pick(options.repulsiveForce, this.integration.repulsiveForceFunction);
            this.approximation = options.approximation;
          },
          start: function start() {
            var layout = this,
                series = this.series,
                options = this.options;
            layout.currentStep = 0;
            layout.forces = series[0] && series[0].forces || [];

            if (layout.initialRendering) {
              layout.initPositions(); // Render elements in initial positions:

              series.forEach(function (s) {
                s.render();
              });
            }

            layout.setK();
            layout.resetSimulation(options);

            if (options.enableSimulation) {
              layout.step();
            }
          },
          step: function step() {
            var layout = this,
                series = this.series,
                options = this.options; // Algorithm:

            layout.currentStep++;

            if (layout.approximation === 'barnes-hut') {
              layout.createQuadTree();
              layout.quadTree.calculateMassAndCenter();
            }

            layout.forces.forEach(function (forceName) {
              layout[forceName + 'Forces'](layout.temperature);
            }); // Limit to the plotting area and cool down:

            layout.applyLimits(layout.temperature); // Cool down the system:

            layout.temperature = layout.coolDown(layout.startTemperature, layout.diffTemperature, layout.currentStep);
            layout.prevSystemTemperature = layout.systemTemperature;
            layout.systemTemperature = layout.getSystemTemperature();

            if (options.enableSimulation) {
              series.forEach(function (s) {
                // Chart could be destroyed during the simulation
                if (s.chart) {
                  s.render();
                }
              });

              if (layout.maxIterations-- && isFinite(layout.temperature) && !layout.isStable()) {
                if (layout.simulation) {
                  H.win.cancelAnimationFrame(layout.simulation);
                }

                layout.simulation = H.win.requestAnimationFrame(function () {
                  layout.step();
                });
              } else {
                layout.simulation = false;
              }
            }
          },
          stop: function stop() {
            if (this.simulation) {
              H.win.cancelAnimationFrame(this.simulation);
            }
          },
          setArea: function setArea(x, y, w, h) {
            this.box = {
              left: x,
              top: y,
              width: w,
              height: h
            };
          },
          setK: function setK() {
            // Optimal distance between nodes,
            // available space around the node:
            this.k = this.options.linkLength || this.integration.getK(this);
          },
          addElementsToCollection: function addElementsToCollection(elements, collection) {
            elements.forEach(function (elem) {
              if (collection.indexOf(elem) === -1) {
                collection.push(elem);
              }
            });
          },
          removeElementFromCollection: function removeElementFromCollection(element, collection) {
            var index = collection.indexOf(element);

            if (index !== -1) {
              collection.splice(index, 1);
            }
          },
          clear: function clear() {
            this.nodes.length = 0;
            this.links.length = 0;
            this.series.length = 0;
            this.resetSimulation();
          },
          resetSimulation: function resetSimulation() {
            this.forcedStop = false;
            this.systemTemperature = 0;
            this.setMaxIterations();
            this.setTemperature();
            this.setDiffTemperature();
          },
          setMaxIterations: function setMaxIterations(maxIterations) {
            this.maxIterations = pick(maxIterations, this.options.maxIterations);
          },
          setTemperature: function setTemperature() {
            this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
          },
          setDiffTemperature: function setDiffTemperature() {
            this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
          },
          setInitialRendering: function setInitialRendering(enable) {
            this.initialRendering = enable;
          },
          createQuadTree: function createQuadTree() {
            this.quadTree = new H.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height);
            this.quadTree.insertNodes(this.nodes);
          },
          initPositions: function initPositions() {
            var initialPositions = this.options.initialPositions;

            if (H.isFunction(initialPositions)) {
              initialPositions.call(this);
              this.nodes.forEach(function (node) {
                if (!defined(node.prevX)) {
                  node.prevX = node.plotX;
                }

                if (!defined(node.prevY)) {
                  node.prevY = node.plotY;
                }

                node.dispX = 0;
                node.dispY = 0;
              });
            } else if (initialPositions === 'circle') {
              this.setCircularPositions();
            } else {
              this.setRandomPositions();
            }
          },
          setCircularPositions: function setCircularPositions() {
            var box = this.box,
                nodes = this.nodes,
                nodesLength = nodes.length + 1,
                angle = 2 * Math.PI / nodesLength,
                rootNodes = nodes.filter(function (node) {
              return node.linksTo.length === 0;
            }),
                sortedNodes = [],
                visitedNodes = {},
                radius = this.options.initialPositionRadius;
            /**
             * @private
             */

            function addToNodes(node) {
              node.linksFrom.forEach(function (link) {
                if (!visitedNodes[link.toNode.id]) {
                  visitedNodes[link.toNode.id] = true;
                  sortedNodes.push(link.toNode);
                  addToNodes(link.toNode);
                }
              });
            } // Start with identified root nodes an sort the nodes by their
            // hierarchy. In trees, this ensures that branches don't cross
            // eachother.


            rootNodes.forEach(function (rootNode) {
              sortedNodes.push(rootNode);
              addToNodes(rootNode);
            }); // Cyclic tree, no root node found

            if (!sortedNodes.length) {
              sortedNodes = nodes; // Dangling, cyclic trees
            } else {
              nodes.forEach(function (node) {
                if (sortedNodes.indexOf(node) === -1) {
                  sortedNodes.push(node);
                }
              });
            } // Initial positions are laid out along a small circle, appearing
            // as a cluster in the middle


            sortedNodes.forEach(function (node, index) {
              node.plotX = node.prevX = pick(node.plotX, box.width / 2 + radius * Math.cos(index * angle));
              node.plotY = node.prevY = pick(node.plotY, box.height / 2 + radius * Math.sin(index * angle));
              node.dispX = 0;
              node.dispY = 0;
            });
          },
          setRandomPositions: function setRandomPositions() {
            var box = this.box,
                nodes = this.nodes,
                nodesLength = nodes.length + 1;
            /**
             * Return a repeatable, quasi-random number based on an integer
             * input. For the initial positions
             * @private
             */

            function unrandom(n) {
              var rand = n * n / Math.PI;
              rand = rand - Math.floor(rand);
              return rand;
            } // Initial positions:


            nodes.forEach(function (node, index) {
              node.plotX = node.prevX = pick(node.plotX, box.width * unrandom(index));
              node.plotY = node.prevY = pick(node.plotY, box.height * unrandom(nodesLength + index));
              node.dispX = 0;
              node.dispY = 0;
            });
          },
          force: function force(name) {
            this.integration[name].apply(this, Array.prototype.slice.call(arguments, 1));
          },
          barycenterForces: function barycenterForces() {
            this.getBarycenter();
            this.force('barycenter');
          },
          getBarycenter: function getBarycenter() {
            var systemMass = 0,
                cx = 0,
                cy = 0;
            this.nodes.forEach(function (node) {
              cx += node.plotX * node.mass;
              cy += node.plotY * node.mass;
              systemMass += node.mass;
            });
            this.barycenter = {
              x: cx,
              y: cy,
              xFactor: cx / systemMass,
              yFactor: cy / systemMass
            };
            return this.barycenter;
          },
          barnesHutApproximation: function barnesHutApproximation(node, quadNode) {
            var layout = this,
                distanceXY = layout.getDistXY(node, quadNode),
                distanceR = layout.vectorLength(distanceXY),
                goDeeper,
                force;

            if (node !== quadNode && distanceR !== 0) {
              if (quadNode.isInternal) {
                // Internal node:
                if (quadNode.boxSize / distanceR < layout.options.theta && distanceR !== 0) {
                  // Treat as an external node:
                  force = layout.repulsiveForce(distanceR, layout.k);
                  layout.force('repulsive', node, force * quadNode.mass, distanceXY, distanceR);
                  goDeeper = false;
                } else {
                  // Go deeper:
                  goDeeper = true;
                }
              } else {
                // External node, direct force:
                force = layout.repulsiveForce(distanceR, layout.k);
                layout.force('repulsive', node, force * quadNode.mass, distanceXY, distanceR);
              }
            }

            return goDeeper;
          },
          repulsiveForces: function repulsiveForces() {
            var layout = this;

            if (layout.approximation === 'barnes-hut') {
              layout.nodes.forEach(function (node) {
                layout.quadTree.visitNodeRecursive(null, function (quadNode) {
                  return layout.barnesHutApproximation(node, quadNode);
                });
              });
            } else {
              layout.nodes.forEach(function (node) {
                layout.nodes.forEach(function (repNode) {
                  var force, distanceR, distanceXY;

                  if ( // Node can not repulse itself:
                  node !== repNode && // Only close nodes affect each other:
                  // layout.getDistR(node, repNode) < 2 * k &&
                  // Not dragged:
                  !node.fixedPosition) {
                    distanceXY = layout.getDistXY(node, repNode);
                    distanceR = layout.vectorLength(distanceXY);

                    if (distanceR !== 0) {
                      force = layout.repulsiveForce(distanceR, layout.k);
                      layout.force('repulsive', node, force * repNode.mass, distanceXY, distanceR);
                    }
                  }
                });
              });
            }
          },
          attractiveForces: function attractiveForces() {
            var layout = this,
                distanceXY,
                distanceR,
                force;
            layout.links.forEach(function (link) {
              if (link.fromNode && link.toNode) {
                distanceXY = layout.getDistXY(link.fromNode, link.toNode);
                distanceR = layout.vectorLength(distanceXY);

                if (distanceR !== 0) {
                  force = layout.attractiveForce(distanceR, layout.k);
                  layout.force('attractive', link, force, distanceXY, distanceR);
                }
              }
            });
          },
          applyLimits: function applyLimits() {
            var layout = this,
                nodes = layout.nodes;
            nodes.forEach(function (node) {
              if (node.fixedPosition) {
                return;
              }

              layout.integration.integrate(layout, node);
              layout.applyLimitBox(node, layout.box); // Reset displacement:

              node.dispX = 0;
              node.dispY = 0;
            });
          },

          /**
           * External box that nodes should fall. When hitting an edge, node
           * should stop or bounce.
           * @private
           */
          applyLimitBox: function applyLimitBox(node, box) {
            var radius = node.radius;
            /*
            TO DO: Consider elastic collision instead of stopping.
            o' means end position when hitting plotting area edge:
             - "inelastic":
            o
             \
            ______
            |  o'
            |   \
            |    \
             - "elastic"/"bounced":
            o
             \
            ______
            |  ^
            | / \
            |o'  \
             Euler sample:
            if (plotX < 0) {
                plotX = 0;
                dispX *= -1;
            }
             if (plotX > box.width) {
                plotX = box.width;
                dispX *= -1;
            }
             */
            // Limit X-coordinates:

            node.plotX = clamp(node.plotX, box.left + radius, box.width - radius); // Limit Y-coordinates:

            node.plotY = clamp(node.plotY, box.top + radius, box.height - radius);
          },

          /**
           * From "A comparison of simulated annealing cooling strategies" by
           * Nourani and Andresen work.
           * @private
           */
          coolDown: function coolDown(temperature, temperatureStep, currentStep) {
            // Logarithmic:

            /*
            return Math.sqrt(this.nodes.length) -
                Math.log(
                    currentStep * layout.diffTemperature
                );
            */
            // Exponential:

            /*
            var alpha = 0.1;
            layout.temperature = Math.sqrt(layout.nodes.length) *
                Math.pow(alpha, layout.diffTemperature);
            */
            // Linear:
            return temperature - temperatureStep * currentStep;
          },
          isStable: function isStable() {
            return Math.abs(this.systemTemperature - this.prevSystemTemperature) < 0.00001 || this.temperature <= 0;
          },
          getSystemTemperature: function getSystemTemperature() {
            return this.nodes.reduce(function (value, node) {
              return value + node.temperature;
            }, 0);
          },
          vectorLength: function vectorLength(vector) {
            return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
          },
          getDistR: function getDistR(nodeA, nodeB) {
            var distance = this.getDistXY(nodeA, nodeB);
            return this.vectorLength(distance);
          },
          getDistXY: function getDistXY(nodeA, nodeB) {
            var xDist = nodeA.plotX - nodeB.plotX,
                yDist = nodeA.plotY - nodeB.plotY;
            return {
              x: xDist,
              y: yDist,
              absX: Math.abs(xDist),
              absY: Math.abs(yDist)
            };
          }
        });
        /* ************************************************************************** *
         * Multiple series support:
         * ************************************************************************** */
        // Clear previous layouts

        addEvent(Chart, 'predraw', function () {
          if (this.graphLayoutsLookup) {
            this.graphLayoutsLookup.forEach(function (layout) {
              layout.stop();
            });
          }
        });
        addEvent(Chart, 'render', function () {
          var systemsStable,
              afterRender = false;
          /**
           * @private
           */

          function layoutStep(layout) {
            if (layout.maxIterations-- && isFinite(layout.temperature) && !layout.isStable() && !layout.options.enableSimulation) {
              // Hook similar to build-in addEvent, but instead of
              // creating whole events logic, use just a function.
              // It's faster which is important for rAF code.
              // Used e.g. in packed-bubble series for bubble radius
              // calculations
              if (layout.beforeStep) {
                layout.beforeStep();
              }

              layout.step();
              systemsStable = false;
              afterRender = true;
            }
          }

          if (this.graphLayoutsLookup) {
            setAnimation(false, this); // Start simulation

            this.graphLayoutsLookup.forEach(function (layout) {
              layout.start();
            }); // Just one sync step, to run different layouts similar to
            // async mode.

            while (!systemsStable) {
              systemsStable = true;
              this.graphLayoutsLookup.forEach(layoutStep);
            }

            if (afterRender) {
              this.series.forEach(function (s) {
                if (s && s.layout) {
                  s.render();
                }
              });
            }
          }
        });
      });

      _registerModule(_modules, 'modules/networkgraph/draggable-nodes.js', [_modules['parts/Globals.js']], function (H) {
        /* *
         *
         *  Networkgraph series
         *
         *  (c) 2010-2019 Paweł Fus
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var Chart = H.Chart,
            addEvent = H.addEvent;
        /* eslint-disable no-invalid-this, valid-jsdoc */

        H.dragNodesMixin = {
          /**
           * Mouse down action, initializing drag&drop mode.
           *
           * @private
           * @param {Highcharts.Point} point The point that event occured.
           * @param {Highcharts.PointerEventObject} event Browser event, before normalization.
           * @return {void}
           */
          onMouseDown: function onMouseDown(point, event) {
            var normalizedEvent = this.chart.pointer.normalize(event);
            point.fixedPosition = {
              chartX: normalizedEvent.chartX,
              chartY: normalizedEvent.chartY,
              plotX: point.plotX,
              plotY: point.plotY
            };
            point.inDragMode = true;
          },

          /**
           * Mouse move action during drag&drop.
           *
           * @private
           *
           * @param {global.Event} event Browser event, before normalization.
           * @param {Highcharts.Point} point The point that event occured.
           *
           * @return {void}
           */
          onMouseMove: function onMouseMove(point, event) {
            if (point.fixedPosition && point.inDragMode) {
              var series = this,
                  chart = series.chart,
                  normalizedEvent = chart.pointer.normalize(event),
                  diffX = point.fixedPosition.chartX - normalizedEvent.chartX,
                  diffY = point.fixedPosition.chartY - normalizedEvent.chartY,
                  newPlotX,
                  newPlotY; // At least 5px to apply change (avoids simple click):

              if (Math.abs(diffX) > 5 || Math.abs(diffY) > 5) {
                newPlotX = point.fixedPosition.plotX - diffX;
                newPlotY = point.fixedPosition.plotY - diffY;

                if (chart.isInsidePlot(newPlotX, newPlotY)) {
                  point.plotX = newPlotX;
                  point.plotY = newPlotY;
                  point.hasDragged = true;
                  this.redrawHalo(point);

                  if (!series.layout.simulation) {
                    // When dragging nodes, we don't need to calculate
                    // initial positions and rendering nodes:
                    series.layout.setInitialRendering(false); // Start new simulation:

                    if (!series.layout.enableSimulation) {
                      // Run only one iteration to speed things up:
                      series.layout.setMaxIterations(1);
                    } else {
                      series.layout.start();
                    }

                    series.chart.redraw(); // Restore defaults:

                    series.layout.setInitialRendering(true);
                  } else {
                    // Extend current simulation:
                    series.layout.resetSimulation();
                  }
                }
              }
            }
          },

          /**
           * Mouse up action, finalizing drag&drop.
           *
           * @private
           * @param {Highcharts.Point} point The point that event occured.
           * @return {void}
           */
          onMouseUp: function onMouseUp(point, event) {
            if (point.fixedPosition && point.hasDragged) {
              if (this.layout.enableSimulation) {
                this.layout.start();
              } else {
                this.chart.redraw();
              }

              point.inDragMode = point.hasDragged = false;

              if (!this.options.fixedDraggable) {
                delete point.fixedPosition;
              }
            }
          },
          // Draggable mode:

          /**
           * Redraw halo on mousemove during the drag&drop action.
           *
           * @private
           * @param {Highcharts.Point} point The point that should show halo.
           * @return {void}
           */
          redrawHalo: function redrawHalo(point) {
            if (point && this.halo) {
              this.halo.attr({
                d: point.haloPath(this.options.states.hover.halo.size)
              });
            }
          }
        };
        /*
         * Draggable mode:
         */

        addEvent(Chart, 'load', function () {
          var chart = this,
              mousedownUnbinder,
              mousemoveUnbinder,
              mouseupUnbinder;

          if (chart.container) {
            mousedownUnbinder = addEvent(chart.container, 'mousedown', function (event) {
              var point = chart.hoverPoint;

              if (point && point.series && point.series.hasDraggableNodes && point.series.options.draggable) {
                point.series.onMouseDown(point, event);
                mousemoveUnbinder = addEvent(chart.container, 'mousemove', function (e) {
                  return point && point.series && point.series.onMouseMove(point, e);
                });
                mouseupUnbinder = addEvent(chart.container.ownerDocument, 'mouseup', function (e) {
                  mousemoveUnbinder();
                  mouseupUnbinder();
                  return point && point.series && point.series.onMouseUp(point, e);
                });
              }
            });
          }

          addEvent(chart, 'destroy', function () {
            mousedownUnbinder();
          });
        });
      });

      _registerModule(_modules, 'parts-more/PackedBubbleSeries.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2018 Grzegorz Blachlinski, Sebastian Bochan
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */

        /**
         * Formatter callback function.
         *
         * @callback Highcharts.SeriesPackedBubbleDataLabelsFormatterCallbackFunction
         *
         * @param {Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject} this
         *        Data label context to format
         *
         * @return {string}
         *         Formatted data label text
         */

        /**
         * Context for the formatter function.
         *
         * @interface Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject
         * @extends Highcharts.DataLabelsFormatterContextObject
         * @since 7.0.0
         */

        /**
        * The color of the node.
        * @name Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject#color
        * @type {Highcharts.ColorString}
        * @since 7.0.0
        */

        /**
        * The point (node) object. The node name, if defined, is available through
        * `this.point.name`. Arrays: `this.point.linksFrom` and `this.point.linksTo`
        * contains all nodes connected to this point.
        * @name Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject#point
        * @type {Highcharts.Point}
        * @since 7.0.0
        */

        /**
        * The ID of the node.
        * @name Highcharts.SeriesPackedBubbleDataLabelsFormatterContextObject#key
        * @type {string}
        * @since 7.0.0
        */
        var clamp = U.clamp,
            defined = U.defined,
            extend = U.extend,
            extendClass = U.extendClass,
            isArray = U.isArray,
            isNumber = U.isNumber,
            pick = U.pick;
        var seriesType = H.seriesType,
            Series = H.Series,
            Point = H.Point,
            addEvent = H.addEvent,
            fireEvent = H.fireEvent,
            Chart = H.Chart,
            color = H.Color,
            Reingold = H.layouts['reingold-fruchterman'],
            NetworkPoint = H.seriesTypes.bubble.prototype.pointClass,
            dragNodesMixin = H.dragNodesMixin;
        H.networkgraphIntegrations.packedbubble = {
          repulsiveForceFunction: function repulsiveForceFunction(d, k, node, repNode) {
            return Math.min(d, (node.marker.radius + repNode.marker.radius) / 2);
          },
          barycenter: function barycenter() {
            var layout = this,
                gravitationalConstant = layout.options.gravitationalConstant,
                box = layout.box,
                nodes = layout.nodes,
                centerX,
                centerY;
            nodes.forEach(function (node) {
              if (layout.options.splitSeries && !node.isParentNode) {
                centerX = node.series.parentNode.plotX;
                centerY = node.series.parentNode.plotY;
              } else {
                centerX = box.width / 2;
                centerY = box.height / 2;
              }

              if (!node.fixedPosition) {
                node.plotX -= (node.plotX - centerX) * gravitationalConstant / (node.mass * Math.sqrt(nodes.length));
                node.plotY -= (node.plotY - centerY) * gravitationalConstant / (node.mass * Math.sqrt(nodes.length));
              }
            });
          },
          repulsive: function repulsive(node, force, distanceXY, repNode) {
            var factor = force * this.diffTemperature / node.mass / node.degree,
                x = distanceXY.x * factor,
                y = distanceXY.y * factor;

            if (!node.fixedPosition) {
              node.plotX += x;
              node.plotY += y;
            }

            if (!repNode.fixedPosition) {
              repNode.plotX -= x;
              repNode.plotY -= y;
            }
          },
          integrate: H.networkgraphIntegrations.verlet.integrate,
          getK: H.noop
        };
        H.layouts.packedbubble = extendClass(Reingold, {
          beforeStep: function beforeStep() {
            if (this.options.marker) {
              this.series.forEach(function (series) {
                if (series) {
                  series.calculateParentRadius();
                }
              });
            }
          },
          setCircularPositions: function setCircularPositions() {
            var layout = this,
                box = layout.box,
                nodes = layout.nodes,
                nodesLength = nodes.length + 1,
                angle = 2 * Math.PI / nodesLength,
                centerX,
                centerY,
                radius = layout.options.initialPositionRadius;
            nodes.forEach(function (node, index) {
              if (layout.options.splitSeries && !node.isParentNode) {
                centerX = node.series.parentNode.plotX;
                centerY = node.series.parentNode.plotY;
              } else {
                centerX = box.width / 2;
                centerY = box.height / 2;
              }

              node.plotX = node.prevX = pick(node.plotX, centerX + radius * Math.cos(node.index || index * angle));
              node.plotY = node.prevY = pick(node.plotY, centerY + radius * Math.sin(node.index || index * angle));
              node.dispX = 0;
              node.dispY = 0;
            });
          },
          repulsiveForces: function repulsiveForces() {
            var layout = this,
                force,
                distanceR,
                distanceXY,
                bubblePadding = layout.options.bubblePadding;
            layout.nodes.forEach(function (node) {
              node.degree = node.mass;
              node.neighbours = 0;
              layout.nodes.forEach(function (repNode) {
                force = 0;

                if ( // Node can not repulse itself:
                node !== repNode && // Only close nodes affect each other:
                // Not dragged:
                !node.fixedPosition && (layout.options.seriesInteraction || node.series === repNode.series)) {
                  distanceXY = layout.getDistXY(node, repNode);
                  distanceR = layout.vectorLength(distanceXY) - (node.marker.radius + repNode.marker.radius + bubblePadding); // TODO padding configurable

                  if (distanceR < 0) {
                    node.degree += 0.01;
                    node.neighbours++;
                    force = layout.repulsiveForce(-distanceR / Math.sqrt(node.neighbours), layout.k, node, repNode);
                  }

                  layout.force('repulsive', node, force * repNode.mass, distanceXY, repNode, distanceR);
                }
              });
            });
          },
          applyLimitBox: function applyLimitBox(node) {
            var layout = this,
                distanceXY,
                distanceR,
                factor = 0.01; // parentNodeLimit should be used together
            // with seriesInteraction: false

            if (layout.options.splitSeries && !node.isParentNode && layout.options.parentNodeLimit) {
              distanceXY = layout.getDistXY(node, node.series.parentNode);
              distanceR = node.series.parentNodeRadius - node.marker.radius - layout.vectorLength(distanceXY);

              if (distanceR < 0 && distanceR > -2 * node.marker.radius) {
                node.plotX -= distanceXY.x * factor;
                node.plotY -= distanceXY.y * factor;
              }
            }

            Reingold.prototype.applyLimitBox.apply(this, arguments);
          },
          isStable: function isStable() {
            return Math.abs(this.systemTemperature - this.prevSystemTemperature) < 0.00001 || this.temperature <= 0 || // In first iteration system does not move:
            this.systemTemperature > 0 && this.systemTemperature / this.nodes.length < 0.02 && this.enableSimulation // Use only when simulation is enabled
            ;
          }
        });
        /**
         * @private
         * @class
         * @name Highcharts.seriesTypes.packedbubble
         *
         * @extends Highcharts.Series
         */

        seriesType('packedbubble', 'bubble',
        /**
         * A packed bubble series is a two dimensional series type, where each point
         * renders a value in X, Y position. Each point is drawn as a bubble
         * where the bubbles don't overlap with each other and the radius
         * of the bubble relates to the value.
         *
         * @sample highcharts/demo/packed-bubble/
         *         Packed bubble chart
         * @sample highcharts/demo/packed-bubble-split/
         *         Split packed bubble chart
          * @extends      plotOptions.bubble
         * @excluding    connectEnds, connectNulls, dragDrop, jitter, keys,
         *               pointPlacement, sizeByAbsoluteValue, step, xAxis, yAxis,
         *               zMax, zMin
         * @product      highcharts
         * @since        7.0.0
         * @requires     highcharts-more
         * @optionparent plotOptions.packedbubble
         */
        {
          /**
           * Minimum bubble size. Bubbles will automatically size between the
           * `minSize` and `maxSize` to reflect the value of each bubble.
           * Can be either pixels (when no unit is given), or a percentage of
           * the smallest one of the plot width and height, divided by the square
           * root of total number of points.
           *
           * @sample highcharts/plotoptions/bubble-size/
           *         Bubble size
           *
           * @type {number|string}
           *
           * @private
           */
          minSize: '10%',

          /**
           * Maximum bubble size. Bubbles will automatically size between the
           * `minSize` and `maxSize` to reflect the value of each bubble.
           * Can be either pixels (when no unit is given), or a percentage of
           * the smallest one of the plot width and height, divided by the square
           * root of total number of points.
           *
           * @sample highcharts/plotoptions/bubble-size/
           *         Bubble size
           *
           * @type {number|string}
           *
           * @private
           */
          maxSize: '50%',
          sizeBy: 'area',
          zoneAxis: 'y',
          tooltip: {
            pointFormat: 'Value: {point.value}'
          },

          /**
           * Flag to determine if nodes are draggable or not. Available for
           * graph with useSimulation set to true only.
           *
           * @since 7.1.0
           *
           * @private
           */
          draggable: true,

          /**
           * An option is giving a possibility to choose between using simulation
           * for calculating bubble positions. These reflects in both animation
           * and final position of bubbles. Simulation is also adding options to
           * the series graph based on used layout. In case of big data sets, with
           * any performance issues, it is possible to disable animation and pack
           * bubble in a simple circular way.
           *
           * @sample highcharts/series-packedbubble/spiral/
           *         useSimulation set to false
           *
           * @since 7.1.0
           *
           * @private
           */
          useSimulation: true,

          /**
           * @declare Highcharts.SeriesPackedBubbleDataLabelsOptionsObject
           *
           * @private
           */
          dataLabels: {
            /**
             * The
             * [format string](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)
             * specifying what to show for _node_ in the networkgraph. In v7.0
             * defaults to `{key}`, since v7.1 defaults to `undefined` and
             * `formatter` is used instead.
             *
             * @type      {string}
             * @since     7.0.0
             * @apioption plotOptions.packedBubble.dataLabels.format
             */
            // eslint-disable-next-line valid-jsdoc

            /**
             * Callback JavaScript function to format the data label for a node.
             * Note that if a `format` is defined, the format takes precedence
             * and the formatter is ignored.
             *
             * @type  {Highcharts.SeriesPackedBubbleDataLabelsFormatterCallbackFunction}
             * @since 7.0.0
             */
            formatter: function formatter() {
              return this.point.value;
            },

            /**
             * @type      {string}
             * @since     7.1.0
             * @apioption plotOptions.packedBubble.dataLabels.parentNodeFormat
             */
            // eslint-disable-next-line valid-jsdoc

            /**
             * Callback to format data labels for _parentNodes_. The
             * `parentNodeFormat` option takes precedence over the
             * `parentNodeFormatter`.
             *
             * @type  {Highcharts.SeriesPackedBubbleDataLabelsFormatterCallbackFunction}
             * @since 7.1.0
             */
            parentNodeFormatter: function parentNodeFormatter() {
              return this.name;
            },

            /**
             * Options for a _parentNode_ label text.
             *
             * **Note:** Only SVG-based renderer supports this option.
             *
             * @sample {highcharts} highcharts/series-packedbubble/packed-dashboard
             *         Dashboard with dataLabels on parentNodes
             *
             * @declare Highcharts.SeriesPackedBubbleDataLabelsTextPathOptionsObject
             * @since   7.1.0
             */
            parentNodeTextPath: {
              /**
               * Presentation attributes for the text path.
               *
               * @type      {Highcharts.SVGAttributes}
               * @since     7.1.0
               * @apioption plotOptions.packedBubble.dataLabels.attributes
               */

              /**
               * Enable or disable `textPath` option for link's or marker's
               * data labels.
               *
               * @since 7.1.0
               */
              enabled: true
            },

            /**
             * Options for a _node_ label text which should follow marker's
             * shape.
             *
             * **Note:** Only SVG-based renderer supports this option.
             *
             * @extends   plotOptions.series.dataLabels.textPath
             * @apioption plotOptions.packedBubble.dataLabels.textPath
             */
            padding: 0
          },

          /**
           * Options for layout algorithm when simulation is enabled. Inside there
           * are options to change the speed, padding, initial bubbles positions
           * and more.
           *
           * @extends   plotOptions.networkgraph.layoutAlgorithm
           * @excluding approximation, attractiveForce, repulsiveForce, theta
           * @since     7.1.0
           *
           * @private
           */
          layoutAlgorithm: {
            /**
             * Initial layout algorithm for positioning nodes. Can be one of
             * the built-in options ("circle", "random") or a function where
             * positions should be set on each node (`this.nodes`) as
             * `node.plotX` and `node.plotY`.
             *
             * @sample highcharts/series-networkgraph/initial-positions/
             *         Initial positions with callback
             *
             * @type {"circle"|"random"|Function}
             */
            initialPositions: 'circle',

            /**
             * @sample highcharts/series-packedbubble/initial-radius/
             *         Initial radius set to 200
             *
             * @extends   plotOptions.networkgraph.layoutAlgorithm.initialPositionRadius
             * @excluding states
             */
            initialPositionRadius: 20,

            /**
             * The distance between two bubbles, when the algorithm starts to
             * treat two bubbles as overlapping. The `bubblePadding` is also the
             * expected distance between all the bubbles on simulation end.
             */
            bubblePadding: 5,

            /**
             * Whether bubbles should interact with their parentNode to keep
             * them inside.
             */
            parentNodeLimit: false,

            /**
             * Whether series should interact with each other or not. When
             * `parentNodeLimit` is set to true, thi option should be set to
             * false to avoid sticking points in wrong series parentNode.
             */
            seriesInteraction: true,

            /**
             * In case of split series, this option allows user to drag and
             * drop points between series, for changing point related series.
             *
             * @sample highcharts/series-packedbubble/packed-dashboard/
             *         Example of drag'n drop bubbles for bubble kanban
             */
            dragBetweenSeries: false,

            /**
             * Layout algorithm options for parent nodes.
             *
             * @extends   plotOptions.networkgraph.layoutAlgorithm
             * @excluding approximation, attractiveForce, enableSimulation,
             *            repulsiveForce, theta
             */
            parentNodeOptions: {
              maxIterations: 400,
              gravitationalConstant: 0.03,
              maxSpeed: 50,
              initialPositionRadius: 100,
              seriesInteraction: true,

              /**
               * Styling options for parentNodes markers. Similar to
               * line.marker options.
               *
               * @sample highcharts/series-packedbubble/parentnode-style/
               *         Bubble size
               *
               * @extends   plotOptions.series.marker
               * @excluding states
               */
              marker: {
                fillColor: null,
                fillOpacity: 1,
                lineWidth: 1,
                lineColor: null,
                symbol: 'circle'
              }
            },
            enableSimulation: true,

            /**
             * Type of the algorithm used when positioning bubbles.
             * @ignore-option
             */
            type: 'packedbubble',

            /**
             * Integration type. Integration determines how forces are applied
             * on particles. The `packedbubble` integration is based on
             * the networkgraph `verlet` integration, where the new position
             * is based on a previous position without velocity:
             * `newPosition += previousPosition - newPosition`.
             *
             * @sample highcharts/series-networkgraph/forces/
             *
             * @ignore-option
             */
            integration: 'packedbubble',
            maxIterations: 1000,

            /**
             * Whether to split series into individual groups or to mix all
             * series together.
             *
             * @since   7.1.0
             * @default false
             */
            splitSeries: false,

            /**
             * Max speed that node can get in one iteration. In terms of
             * simulation, it's a maximum translation (in pixels) that a node
             * can move (in both, x and y, dimensions). While `friction` is
             * applied on all nodes, max speed is applied only for nodes that
             * move very fast, for example small or disconnected ones.
             *
             * @see [layoutAlgorithm.integration](#series.networkgraph.layoutAlgorithm.integration)
             *
             * @see [layoutAlgorithm.friction](#series.networkgraph.layoutAlgorithm.friction)
             */
            maxSpeed: 5,
            gravitationalConstant: 0.01,
            friction: -0.981
          }
        }, {
          /**
           * An internal option used for allowing nodes dragging.
           * @private
           */
          hasDraggableNodes: true,

          /**
           * Array of internal forces. Each force should be later defined in
           * integrations.js.
           * @private
           */
          forces: ['barycenter', 'repulsive'],
          pointArrayMap: ['value'],
          pointValKey: 'value',
          isCartesian: false,
          requireSorting: false,
          directTouch: true,
          axisTypes: [],
          noSharedTooltip: true,
          // solving #12287
          searchPoint: H.noop,

          /* eslint-disable no-invalid-this, valid-jsdoc */

          /**
           * Create a single array of all points from all series
           * @private
           * @param {Highcharts.Series} series Array of all series objects
           * @return {Array<Highcharts.PackedBubbleData>} Returns the array of all points.
           */
          accumulateAllPoints: function accumulateAllPoints(series) {
            var chart = series.chart,
                allDataPoints = [],
                i,
                j;

            for (i = 0; i < chart.series.length; i++) {
              series = chart.series[i];

              if (series.visible || !chart.options.chart.ignoreHiddenSeries) {
                // add data to array only if series is visible
                for (j = 0; j < series.yData.length; j++) {
                  allDataPoints.push([null, null, series.yData[j], series.index, j, {
                    id: j,
                    marker: {
                      radius: 0
                    }
                  }]);
                }
              }
            }

            return allDataPoints;
          },
          init: function init() {
            Series.prototype.init.apply(this, arguments); // When one series is modified, the others need to be recomputed

            addEvent(this, 'updatedData', function () {
              this.chart.series.forEach(function (s) {
                if (s.type === this.type) {
                  s.isDirty = true;
                }
              }, this);
            });
            return this;
          },
          render: function render() {
            var series = this,
                dataLabels = [];
            Series.prototype.render.apply(this, arguments); // #10823 - dataLabels should stay visible
            // when enabled allowOverlap.

            if (!series.options.dataLabels.allowOverlap) {
              series.data.forEach(function (point) {
                if (isArray(point.dataLabels)) {
                  point.dataLabels.forEach(function (dataLabel) {
                    dataLabels.push(dataLabel);
                  });
                }
              });
              series.chart.hideOverlappingLabels(dataLabels);
            }
          },
          // Needed because of z-indexing issue if point is added in series.group
          setVisible: function setVisible() {
            var series = this;
            Series.prototype.setVisible.apply(series, arguments);

            if (series.parentNodeLayout && series.graph) {
              if (series.visible) {
                series.graph.show();

                if (series.parentNode.dataLabel) {
                  series.parentNode.dataLabel.show();
                }
              } else {
                series.graph.hide();
                series.parentNodeLayout.removeElementFromCollection(series.parentNode, series.parentNodeLayout.nodes);

                if (series.parentNode.dataLabel) {
                  series.parentNode.dataLabel.hide();
                }
              }
            } else if (series.layout) {
              if (series.visible) {
                series.layout.addElementsToCollection(series.points, series.layout.nodes);
              } else {
                series.points.forEach(function (node) {
                  series.layout.removeElementFromCollection(node, series.layout.nodes);
                });
              }
            }
          },
          // Packedbubble has two separate collecions of nodes if split, render
          // dataLabels for both sets:
          drawDataLabels: function drawDataLabels() {
            var textPath = this.options.dataLabels.textPath,
                points = this.points; // Render node labels:

            Series.prototype.drawDataLabels.apply(this, arguments); // Render parentNode labels:

            if (this.parentNode) {
              this.parentNode.formatPrefix = 'parentNode';
              this.points = [this.parentNode];
              this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath;
              Series.prototype.drawDataLabels.apply(this, arguments); // Restore nodes

              this.points = points;
              this.options.dataLabels.textPath = textPath;
            }
          },

          /**
           * The function responsible for calculating series bubble' s bBox.
           * Needed because of exporting failure when useSimulation
           * is set to false
           * @private
           */
          seriesBox: function seriesBox() {
            var series = this,
                chart = series.chart,
                data = series.data,
                max = Math.max,
                min = Math.min,
                radius,
                // bBox = [xMin, xMax, yMin, yMax]
            bBox = [chart.plotLeft, chart.plotLeft + chart.plotWidth, chart.plotTop, chart.plotTop + chart.plotHeight];
            data.forEach(function (p) {
              if (defined(p.plotX) && defined(p.plotY) && p.marker.radius) {
                radius = p.marker.radius;
                bBox[0] = min(bBox[0], p.plotX - radius);
                bBox[1] = max(bBox[1], p.plotX + radius);
                bBox[2] = min(bBox[2], p.plotY - radius);
                bBox[3] = max(bBox[3], p.plotY + radius);
              }
            });
            return isNumber(bBox.width / bBox.height) ? bBox : null;
          },

          /**
           * The function responsible for calculating the parent node radius
           * based on the total surface of iniside-bubbles and the group BBox
           * @private
           */
          calculateParentRadius: function calculateParentRadius() {
            var series = this,
                bBox,
                parentPadding = 20,
                minParentRadius = 20;
            bBox = series.seriesBox();
            series.parentNodeRadius = clamp(Math.sqrt(2 * series.parentNodeMass / Math.PI) + parentPadding, minParentRadius, bBox ? Math.max(Math.sqrt(Math.pow(bBox.width, 2) + Math.pow(bBox.height, 2)) / 2 + parentPadding, minParentRadius) : Math.sqrt(2 * series.parentNodeMass / Math.PI) + parentPadding);

            if (series.parentNode) {
              series.parentNode.marker.radius = series.parentNode.radius = series.parentNodeRadius;
            }
          },
          // Create Background/Parent Nodes for split series.
          drawGraph: function drawGraph() {
            // if the series is not using layout, don't add parent nodes
            if (!this.layout || !this.layout.options.splitSeries) {
              return;
            }

            var series = this,
                chart = series.chart,
                parentAttribs = {},
                nodeMarker = this.layout.options.parentNodeOptions.marker,
                parentOptions = {
              fill: nodeMarker.fillColor || color(series.color).brighten(0.4).get(),
              opacity: nodeMarker.fillOpacity,
              stroke: nodeMarker.lineColor || series.color,
              'stroke-width': nodeMarker.lineWidth
            },
                visibility = series.visible ? 'inherit' : 'hidden'; // create the group for parent Nodes if doesn't exist

            if (!this.parentNodesGroup) {
              series.parentNodesGroup = series.plotGroup('parentNodesGroup', 'parentNode', visibility, 0.1, chart.seriesGroup);
              series.group.attr({
                zIndex: 2
              });
            }

            this.calculateParentRadius();
            parentAttribs = H.merge({
              x: series.parentNode.plotX - series.parentNodeRadius,
              y: series.parentNode.plotY - series.parentNodeRadius,
              width: series.parentNodeRadius * 2,
              height: series.parentNodeRadius * 2
            }, parentOptions);

            if (!series.parentNode.graphic) {
              series.graph = series.parentNode.graphic = chart.renderer.symbol(parentOptions.symbol).add(series.parentNodesGroup);
            }

            series.parentNode.graphic.attr(parentAttribs);
          },

          /**
           * Creating parent nodes for split series, in which all the bubbles
           * are rendered.
           * @private
           */
          createParentNodes: function createParentNodes() {
            var series = this,
                chart = series.chart,
                parentNodeLayout = series.parentNodeLayout,
                nodeAdded,
                parentNode = series.parentNode;
            series.parentNodeMass = 0;
            series.points.forEach(function (p) {
              series.parentNodeMass += Math.PI * Math.pow(p.marker.radius, 2);
            });
            series.calculateParentRadius();
            parentNodeLayout.nodes.forEach(function (node) {
              if (node.seriesIndex === series.index) {
                nodeAdded = true;
              }
            });
            parentNodeLayout.setArea(0, 0, chart.plotWidth, chart.plotHeight);

            if (!nodeAdded) {
              if (!parentNode) {
                parentNode = new NetworkPoint().init(this, {
                  mass: series.parentNodeRadius / 2,
                  marker: {
                    radius: series.parentNodeRadius
                  },
                  dataLabels: {
                    inside: false
                  },
                  dataLabelOnNull: true,
                  degree: series.parentNodeRadius,
                  isParentNode: true,
                  seriesIndex: series.index
                });
              }

              if (series.parentNode) {
                parentNode.plotX = series.parentNode.plotX;
                parentNode.plotY = series.parentNode.plotY;
              }

              series.parentNode = parentNode;
              parentNodeLayout.addElementsToCollection([series], parentNodeLayout.series);
              parentNodeLayout.addElementsToCollection([parentNode], parentNodeLayout.nodes);
            }
          },

          /**
           * Function responsible for adding series layout, used for parent nodes.
           * @private
           */
          addSeriesLayout: function addSeriesLayout() {
            var series = this,
                layoutOptions = series.options.layoutAlgorithm,
                graphLayoutsStorage = series.chart.graphLayoutsStorage,
                graphLayoutsLookup = series.chart.graphLayoutsLookup,
                parentNodeOptions = H.merge(layoutOptions, layoutOptions.parentNodeOptions, {
              enableSimulation: series.layout.options.enableSimulation
            }),
                parentNodeLayout;
            parentNodeLayout = graphLayoutsStorage[layoutOptions.type + '-series'];

            if (!parentNodeLayout) {
              graphLayoutsStorage[layoutOptions.type + '-series'] = parentNodeLayout = new H.layouts[layoutOptions.type]();
              parentNodeLayout.init(parentNodeOptions);
              graphLayoutsLookup.splice(parentNodeLayout.index, 0, parentNodeLayout);
            }

            series.parentNodeLayout = parentNodeLayout;
            this.createParentNodes();
          },

          /**
           * Adding the basic layout to series points.
           * @private
           */
          addLayout: function addLayout() {
            var series = this,
                layoutOptions = series.options.layoutAlgorithm,
                graphLayoutsStorage = series.chart.graphLayoutsStorage,
                graphLayoutsLookup = series.chart.graphLayoutsLookup,
                chartOptions = series.chart.options.chart,
                layout;

            if (!graphLayoutsStorage) {
              series.chart.graphLayoutsStorage = graphLayoutsStorage = {};
              series.chart.graphLayoutsLookup = graphLayoutsLookup = [];
            }

            layout = graphLayoutsStorage[layoutOptions.type];

            if (!layout) {
              layoutOptions.enableSimulation = !defined(chartOptions.forExport) ? layoutOptions.enableSimulation : !chartOptions.forExport;
              graphLayoutsStorage[layoutOptions.type] = layout = new H.layouts[layoutOptions.type]();
              layout.init(layoutOptions);
              graphLayoutsLookup.splice(layout.index, 0, layout);
            }

            series.layout = layout;
            series.points.forEach(function (node) {
              node.mass = 2;
              node.degree = 1;
              node.collisionNmb = 1;
            });
            layout.setArea(0, 0, series.chart.plotWidth, series.chart.plotHeight);
            layout.addElementsToCollection([series], layout.series);
            layout.addElementsToCollection(series.points, layout.nodes);
          },

          /**
           * Function responsible for adding all the layouts to the chart.
           * @private
           */
          deferLayout: function deferLayout() {
            // TODO split layouts to independent methods
            var series = this,
                layoutOptions = series.options.layoutAlgorithm;

            if (!series.visible) {
              return;
            } // layout is using nodes for position calculation


            series.addLayout();

            if (layoutOptions.splitSeries) {
              series.addSeriesLayout();
            }
          },

          /**
           * Extend the base translate method to handle bubble size,
           * and correct positioning them.
           * @private
           */
          translate: function translate() {
            var series = this,
                chart = series.chart,
                data = series.data,
                index = series.index,
                point,
                radius,
                positions,
                i,
                useSimulation = series.options.useSimulation;
            series.processedXData = series.xData;
            series.generatePoints(); // merged data is an array with all of the data from all series

            if (!defined(chart.allDataPoints)) {
              chart.allDataPoints = series.accumulateAllPoints(series); // calculate radius for all added data

              series.getPointRadius();
            } // after getting initial radius, calculate bubble positions


            if (useSimulation) {
              positions = chart.allDataPoints;
            } else {
              positions = series.placeBubbles(chart.allDataPoints);
              series.options.draggable = false;
            } // Set the shape and arguments to be picked up in drawPoints


            for (i = 0; i < positions.length; i++) {
              if (positions[i][3] === index) {
                // update the series points with the val from positions
                // array
                point = data[positions[i][4]];
                radius = positions[i][2];

                if (!useSimulation) {
                  point.plotX = positions[i][0] - chart.plotLeft + chart.diffX;
                  point.plotY = positions[i][1] - chart.plotTop + chart.diffY;
                }

                point.marker = extend(point.marker, {
                  radius: radius,
                  width: 2 * radius,
                  height: 2 * radius
                });
                point.radius = radius;
              }
            }

            if (useSimulation) {
              series.deferLayout();
            }

            fireEvent(series, 'afterTranslate');
          },

          /**
           * Check if two bubbles overlaps.
           * @private
           * @param {Array} first bubble
           * @param {Array} second bubble
           * @return {Boolean} overlap or not
           */
          checkOverlap: function checkOverlap(bubble1, bubble2) {
            var diffX = bubble1[0] - bubble2[0],
                // diff of X center values
            diffY = bubble1[1] - bubble2[1],
                // diff of Y center values
            sumRad = bubble1[2] + bubble2[2]; // sum of bubble radius

            return Math.sqrt(diffX * diffX + diffY * diffY) - Math.abs(sumRad) < -0.001;
          },

          /**
           * Function that is adding one bubble based on positions and sizes of
           * two other bubbles, lastBubble is the last added bubble, newOrigin is
           * the bubble for positioning new bubbles. nextBubble is the curently
           * added bubble for which we are calculating positions
           * @private
           * @param {Array<number>} lastBubble The closest last bubble
           * @param {Array<number>} newOrigin New bubble
           * @param {Array<number>} nextBubble The closest next bubble
           * @return {Array<number>} Bubble with correct positions
           */
          positionBubble: function positionBubble(lastBubble, newOrigin, nextBubble) {
            var sqrt = Math.sqrt,
                asin = Math.asin,
                acos = Math.acos,
                pow = Math.pow,
                abs = Math.abs,
                distance = sqrt( // dist between lastBubble and newOrigin
            pow(lastBubble[0] - newOrigin[0], 2) + pow(lastBubble[1] - newOrigin[1], 2)),
                alfa = acos( // from cosinus theorem: alfa is an angle used for
            // calculating correct position
            (pow(distance, 2) + pow(nextBubble[2] + newOrigin[2], 2) - pow(nextBubble[2] + lastBubble[2], 2)) / (2 * (nextBubble[2] + newOrigin[2]) * distance)),
                beta = asin( // from sinus theorem.
            abs(lastBubble[0] - newOrigin[0]) / distance),
                // providing helping variables, related to angle between
            // lastBubble and newOrigin
            gamma = lastBubble[1] - newOrigin[1] < 0 ? 0 : Math.PI,
                // if new origin y is smaller than last bubble y value
            // (2 and 3 quarter),
            // add Math.PI to final angle
            delta = (lastBubble[0] - newOrigin[0]) * (lastBubble[1] - newOrigin[1]) < 0 ? 1 : -1,
                // (1st and 3rd quarter)
            finalAngle = gamma + alfa + beta * delta,
                cosA = Math.cos(finalAngle),
                sinA = Math.sin(finalAngle),
                posX = newOrigin[0] + (newOrigin[2] + nextBubble[2]) * sinA,
                // center of new origin + (radius1 + radius2) * sinus A
            posY = newOrigin[1] - (newOrigin[2] + nextBubble[2]) * cosA;
            return [posX, posY, nextBubble[2], nextBubble[3], nextBubble[4]]; // the same as described before
          },

          /**
           * This is the main function responsible
           * for positioning all of the bubbles
           * allDataPoints - bubble array, in format [pixel x value,
           * pixel y value, radius,
           * related series index, related point index]
           * @private
           * @param {Array<Highcharts.PackedBubbleData>} allDataPoints All points from all series
           * @return {Array<Highcharts.PackedBubbleData>} Positions of all bubbles
           */
          placeBubbles: function placeBubbles(allDataPoints) {
            var series = this,
                checkOverlap = series.checkOverlap,
                positionBubble = series.positionBubble,
                bubblePos = [],
                stage = 1,
                j = 0,
                k = 0,
                calculatedBubble,
                sortedArr,
                arr = [],
                i; // sort all points

            sortedArr = allDataPoints.sort(function (a, b) {
              return b[2] - a[2];
            });

            if (sortedArr.length) {
              // create first bubble in the middle of the chart
              bubblePos.push([[0, 0, sortedArr[0][2], sortedArr[0][3], sortedArr[0][4]] // point index
              ]); // 0 level bubble

              if (sortedArr.length > 1) {
                bubblePos.push([[0, 0 - sortedArr[1][2] - sortedArr[0][2], // move bubble above first one
                sortedArr[1][2], sortedArr[1][3], sortedArr[1][4]]]); // 1 level 1st bubble
                // first two already positioned so starting from 2

                for (i = 2; i < sortedArr.length; i++) {
                  sortedArr[i][2] = sortedArr[i][2] || 1; // in case if radius is calculated as 0.

                  calculatedBubble = positionBubble(bubblePos[stage][j], bubblePos[stage - 1][k], sortedArr[i]); // calculate initial bubble position

                  if (checkOverlap(calculatedBubble, bubblePos[stage][0])) {
                    /* if new bubble is overlapping with first bubble
                     * in current level (stage)
                     */
                    bubblePos.push([]);
                    k = 0;
                    /* reset index of bubble, used for
                     * positioning the bubbles around it,
                     * we are starting from first bubble in next
                     * stage because we are changing level to higher
                     */

                    bubblePos[stage + 1].push(positionBubble(bubblePos[stage][j], bubblePos[stage][0], sortedArr[i])); // (last bubble, 1. from curr stage, new bubble)

                    stage++; // the new level is created, above current

                    j = 0; // set the index of bubble in curr level to 0
                  } else if (stage > 1 && bubblePos[stage - 1][k + 1] && checkOverlap(calculatedBubble, bubblePos[stage - 1][k + 1])) {
                    /* if new bubble is overlapping with one of the prev
                     * stage bubbles, it means that - bubble, used for
                     * positioning the bubbles around it has changed
                     * so we need to recalculate it
                     */
                    k++;
                    bubblePos[stage].push(positionBubble(bubblePos[stage][j], bubblePos[stage - 1][k], sortedArr[i])); // (last bubble, prev stage bubble, new bubble)

                    j++;
                  } else {
                    // simply add calculated bubble
                    j++;
                    bubblePos[stage].push(calculatedBubble);
                  }
                }
              }

              series.chart.stages = bubblePos; // it may not be necessary but adding it just in case -
              // it is containing all of the bubble levels

              series.chart.rawPositions = [].concat.apply([], bubblePos); // bubble positions merged into one array

              series.resizeRadius();
              arr = series.chart.rawPositions;
            }

            return arr;
          },

          /**
           * The function responsible for resizing the bubble radius.
           * In shortcut: it is taking the initially
           * calculated positions of bubbles. Then it is calculating the min max
           * of both dimensions, creating something in shape of bBox.
           * The comparison of bBox and the size of plotArea
           * (later it may be also the size set by customer) is giving the
           * value how to recalculate the radius so it will match the size
           * @private
           */
          resizeRadius: function resizeRadius() {
            var chart = this.chart,
                positions = chart.rawPositions,
                min = Math.min,
                max = Math.max,
                plotLeft = chart.plotLeft,
                plotTop = chart.plotTop,
                chartHeight = chart.plotHeight,
                chartWidth = chart.plotWidth,
                minX,
                maxX,
                minY,
                maxY,
                radius,
                bBox,
                spaceRatio,
                smallerDimension,
                i;
            minX = minY = Number.POSITIVE_INFINITY; // set initial values

            maxX = maxY = Number.NEGATIVE_INFINITY;

            for (i = 0; i < positions.length; i++) {
              radius = positions[i][2];
              minX = min(minX, positions[i][0] - radius); // (x center-radius) is the min x value used by specific bubble

              maxX = max(maxX, positions[i][0] + radius);
              minY = min(minY, positions[i][1] - radius);
              maxY = max(maxY, positions[i][1] + radius);
            }

            bBox = [maxX - minX, maxY - minY];
            spaceRatio = [(chartWidth - plotLeft) / bBox[0], (chartHeight - plotTop) / bBox[1]];
            smallerDimension = min.apply([], spaceRatio);

            if (Math.abs(smallerDimension - 1) > 1e-10) {
              // if bBox is considered not the same width as possible size
              for (i = 0; i < positions.length; i++) {
                positions[i][2] *= smallerDimension;
              }

              this.placeBubbles(positions);
            } else {
              /** if no radius recalculation is needed, we need to position
               * the whole bubbles in center of chart plotarea
               * for this, we are adding two parameters,
               * diffY and diffX, that are related to differences
               * between the initial center and the bounding box
               */
              chart.diffY = chartHeight / 2 + plotTop - minY - (maxY - minY) / 2;
              chart.diffX = chartWidth / 2 + plotLeft - minX - (maxX - minX) / 2;
            }
          },

          /**
           * Calculate min and max bubble value for radius calculation.
           * @private
           */
          calculateZExtremes: function calculateZExtremes() {
            var chart = this.chart,
                zMin = this.options.zMin,
                zMax = this.options.zMax,
                valMin = Infinity,
                valMax = -Infinity;

            if (zMin && zMax) {
              return [zMin, zMax];
            } // it is needed to deal with null
            // and undefined values


            chart.series.forEach(function (s) {
              s.yData.forEach(function (p) {
                if (defined(p)) {
                  if (p > valMax) {
                    valMax = p;
                  }

                  if (p < valMin) {
                    valMin = p;
                  }
                }
              });
            });
            zMin = pick(zMin, valMin);
            zMax = pick(zMax, valMax);
            return [zMin, zMax];
          },

          /**
           * Calculate radius of bubbles in series.
           * @private
           */
          getPointRadius: function getPointRadius() {
            var series = this,
                chart = series.chart,
                plotWidth = chart.plotWidth,
                plotHeight = chart.plotHeight,
                seriesOptions = series.options,
                useSimulation = seriesOptions.useSimulation,
                smallestSize = Math.min(plotWidth, plotHeight),
                extremes = {},
                radii = [],
                allDataPoints = chart.allDataPoints,
                minSize,
                maxSize,
                value,
                radius,
                zExtremes;
            ['minSize', 'maxSize'].forEach(function (prop) {
              var length = parseInt(seriesOptions[prop], 10),
                  isPercent = /%$/.test(seriesOptions[prop]);
              extremes[prop] = isPercent ? smallestSize * length / 100 : length * Math.sqrt(allDataPoints.length);
            });
            chart.minRadius = minSize = extremes.minSize / Math.sqrt(allDataPoints.length);
            chart.maxRadius = maxSize = extremes.maxSize / Math.sqrt(allDataPoints.length);
            zExtremes = useSimulation ? series.calculateZExtremes() : [minSize, maxSize];
            (allDataPoints || []).forEach(function (point, i) {
              value = useSimulation ? clamp(point[2], zExtremes[0], zExtremes[1]) : point[2];
              radius = series.getRadius(zExtremes[0], zExtremes[1], minSize, maxSize, value);

              if (radius === 0) {
                radius = null;
              }

              allDataPoints[i][2] = radius;
              radii.push(radius);
            });
            series.radii = radii;
          },
          // Draggable mode:

          /**
           * Redraw halo on mousemove during the drag&drop action.
           * @private
           * @param {Highcharts.Point} point The point that should show halo.
           */
          redrawHalo: dragNodesMixin.redrawHalo,

          /**
           * Mouse down action, initializing drag&drop mode.
           * @private
           * @param {global.Event} event Browser event, before normalization.
           * @param {Highcharts.Point} point The point that event occured.
           */
          onMouseDown: dragNodesMixin.onMouseDown,

          /**
           * Mouse move action during drag&drop.
           * @private
           * @param {global.Event} event Browser event, before normalization.
           * @param {Highcharts.Point} point The point that event occured.
           */
          onMouseMove: dragNodesMixin.onMouseMove,

          /**
           * Mouse up action, finalizing drag&drop.
           * @private
           * @param {Highcharts.Point} point The point that event occured.
           */
          onMouseUp: function onMouseUp(point) {
            if (point.fixedPosition && !point.removed) {
              var distanceXY,
                  distanceR,
                  layout = this.layout,
                  parentNodeLayout = this.parentNodeLayout;

              if (parentNodeLayout && layout.options.dragBetweenSeries) {
                parentNodeLayout.nodes.forEach(function (node) {
                  if (point && point.marker && node !== point.series.parentNode) {
                    distanceXY = layout.getDistXY(point, node);
                    distanceR = layout.vectorLength(distanceXY) - node.marker.radius - point.marker.radius;

                    if (distanceR < 0) {
                      node.series.addPoint(H.merge(point.options, {
                        plotX: point.plotX,
                        plotY: point.plotY
                      }), false);
                      layout.removeElementFromCollection(point, layout.nodes);
                      point.remove();
                    }
                  }
                });
              }

              dragNodesMixin.onMouseUp.apply(this, arguments);
            }
          },
          destroy: function destroy() {
            // Remove the series from all layouts series collections #11469
            if (this.chart.graphLayoutsLookup) {
              this.chart.graphLayoutsLookup.forEach(function (layout) {
                layout.removeElementFromCollection(this, layout.series);
              }, this);
            }

            if (this.parentNode) {
              this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes);

              if (this.parentNode.dataLabel) {
                this.parentNode.dataLabel = this.parentNode.dataLabel.destroy();
              }
            }

            H.Series.prototype.destroy.apply(this, arguments);
          },
          alignDataLabel: H.Series.prototype.alignDataLabel
        }, {
          /**
           * Destroy point.
           * Then remove point from the layout.
           * @private
           * @return {undefined}
           */
          destroy: function destroy() {
            if (this.series.layout) {
              this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
            }

            return Point.prototype.destroy.apply(this, arguments);
          }
        }); // Remove accumulated data points to redistribute all of them again
        // (i.e after hiding series by legend)

        addEvent(Chart, 'beforeRedraw', function () {
          if (this.allDataPoints) {
            delete this.allDataPoints;
          }
        });
        /* eslint-enable no-invalid-this, valid-jsdoc */

        /**
         * A `packedbubble` series. If the [type](#series.packedbubble.type) option is
         * not specified, it is inherited from [chart.type](#chart.type).
         *
         * @type      {Object}
         * @extends   series,plotOptions.packedbubble
         * @excluding dataParser,dataURL,stack
         * @product   highcharts highstock
         * @requires  highcharts-more
         * @apioption series.packedbubble
         */

        /**
         * An array of data points for the series. For the `packedbubble` series type,
         * points can be given in the following ways:
         *
         * 1.  An array of `values`.
         *
         *  ```js
         *     data: [5, 1, 20]
         *  ```
         *
         * 2.  An array of objects with named values. The objects are point
         * configuration objects as seen below. If the total number of data points
         * exceeds the series' [turboThreshold](#series.packedbubble.turboThreshold),
         * this option is not available.
         *
         *  ```js
         *     data: [{
         *         value: 1,
         *         name: "Point2",
         *         color: "#00FF00"
         *     }, {
         *         value: 5,
         *         name: "Point1",
         *         color: "#FF00FF"
         *     }]
         *  ```
         *
         * @type      {Array<Object|Array>}
         * @extends   series.line.data
         * @excluding marker, x, y
         * @sample    {highcharts} highcharts/series/data-array-of-objects/
         *            Config objects
         * @product   highcharts
         * @apioption series.packedbubble.data
         */

        /**
         * @type      {Highcharts.SeriesPackedBubbleDataLabelsOptionsObject|Array<Highcharts.SeriesPackedBubbleDataLabelsOptionsObject>}
         * @product   highcharts
         * @apioption series.packedbubble.data.dataLabels
         */

        /**
         * @excluding enabled,enabledThreshold,height,radius,width
         * @product   highcharts
         * @apioption series.packedbubble.marker
         */

        ''; // adds doclets above to transpiled file
      });

      _registerModule(_modules, 'parts-more/Polar.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js']], function (H, U) {
        /* *
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var defined = U.defined,
            pick = U.pick,
            splat = U.splat,
            wrap = U.wrap; // Extensions for polar charts. Additionally, much of the geometry required for
        // polar charts is gathered in RadialAxes.js.

        var Pointer = H.Pointer,
            Series = H.Series,
            seriesTypes = H.seriesTypes,
            seriesProto = Series.prototype,
            pointerProto = Pointer.prototype,
            colProto;
        /* eslint-disable no-invalid-this, valid-jsdoc */

        /**
         * Search a k-d tree by the point angle, used for shared tooltips in polar
         * charts
         * @private
         */

        seriesProto.searchPointByAngle = function (e) {
          var series = this,
              chart = series.chart,
              xAxis = series.xAxis,
              center = xAxis.pane.center,
              plotX = e.chartX - center[0] - chart.plotLeft,
              plotY = e.chartY - center[1] - chart.plotTop;
          return this.searchKDTree({
            clientX: 180 + Math.atan2(plotX, plotY) * (-180 / Math.PI)
          });
        };
        /**
         * #6212 Calculate connectors for spline series in polar chart.
         * @private
         * @param {boolean} calculateNeighbours
         *        Check if connectors should be calculated for neighbour points as
         *        well allows short recurence
         */


        seriesProto.getConnectors = function (segment, index, calculateNeighbours, connectEnds) {
          var i,
              prevPointInd,
              nextPointInd,
              previousPoint,
              nextPoint,
              previousX,
              previousY,
              nextX,
              nextY,
              plotX,
              plotY,
              ret,
              // 1 means control points midway between points, 2 means 1/3 from
          // the point, 3 is 1/4 etc;
          smoothing = 1.5,
              denom = smoothing + 1,
              leftContX,
              leftContY,
              rightContX,
              rightContY,
              dLControlPoint,
              // distance left control point
          dRControlPoint,
              leftContAngle,
              rightContAngle,
              jointAngle,
              addedNumber = connectEnds ? 1 : 0; // Calculate final index of points depending on the initial index value.
          // Because of calculating neighbours, index may be outisde segment
          // array.

          if (index >= 0 && index <= segment.length - 1) {
            i = index;
          } else if (index < 0) {
            i = segment.length - 1 + index;
          } else {
            i = 0;
          }

          prevPointInd = i - 1 < 0 ? segment.length - (1 + addedNumber) : i - 1;
          nextPointInd = i + 1 > segment.length - 1 ? addedNumber : i + 1;
          previousPoint = segment[prevPointInd];
          nextPoint = segment[nextPointInd];
          previousX = previousPoint.plotX;
          previousY = previousPoint.plotY;
          nextX = nextPoint.plotX;
          nextY = nextPoint.plotY;
          plotX = segment[i].plotX; // actual point

          plotY = segment[i].plotY;
          leftContX = (smoothing * plotX + previousX) / denom;
          leftContY = (smoothing * plotY + previousY) / denom;
          rightContX = (smoothing * plotX + nextX) / denom;
          rightContY = (smoothing * plotY + nextY) / denom;
          dLControlPoint = Math.sqrt(Math.pow(leftContX - plotX, 2) + Math.pow(leftContY - plotY, 2));
          dRControlPoint = Math.sqrt(Math.pow(rightContX - plotX, 2) + Math.pow(rightContY - plotY, 2));
          leftContAngle = Math.atan2(leftContY - plotY, leftContX - plotX);
          rightContAngle = Math.atan2(rightContY - plotY, rightContX - plotX);
          jointAngle = Math.PI / 2 + (leftContAngle + rightContAngle) / 2; // Ensure the right direction, jointAngle should be in the same quadrant
          // as leftContAngle

          if (Math.abs(leftContAngle - jointAngle) > Math.PI / 2) {
            jointAngle -= Math.PI;
          } // Find the corrected control points for a spline straight through the
          // point


          leftContX = plotX + Math.cos(jointAngle) * dLControlPoint;
          leftContY = plotY + Math.sin(jointAngle) * dLControlPoint;
          rightContX = plotX + Math.cos(Math.PI + jointAngle) * dRControlPoint;
          rightContY = plotY + Math.sin(Math.PI + jointAngle) * dRControlPoint; // push current point's connectors into returned object

          ret = {
            rightContX: rightContX,
            rightContY: rightContY,
            leftContX: leftContX,
            leftContY: leftContY,
            plotX: plotX,
            plotY: plotY
          }; // calculate connectors for previous and next point and push them inside
          // returned object

          if (calculateNeighbours) {
            ret.prevPointCont = this.getConnectors(segment, prevPointInd, false, connectEnds);
          }

          return ret;
        };
        /**
         * Translate a point's plotX and plotY from the internal angle and radius
         * measures to true plotX, plotY coordinates
         * @private
         */


        seriesProto.toXY = function (point) {
          var xy,
              chart = this.chart,
              xAxis = this.xAxis,
              yAxis = this.yAxis,
              plotX = point.plotX,
              plotY = point.plotY,
              series = point.series,
              inverted = chart.inverted,
              pointY = point.y,
              clientX; // Corrected y position of inverted series other than column

          if (inverted && series && !series.isRadialBar) {
            point.plotY = plotY = typeof pointY === 'number' ? yAxis.translate(pointY) || 0 : 0;
          } // Save rectangular plotX, plotY for later computation


          point.rectPlotX = plotX;
          point.rectPlotY = plotY; // Find the polar plotX and plotY

          xy = inverted ? xAxis.postTranslate(plotY, plotX) : xAxis.postTranslate(plotX, yAxis.len - plotY);
          point.plotX = point.polarPlotX = xy.x - chart.plotLeft;
          point.plotY = point.polarPlotY = xy.y - chart.plotTop; // If shared tooltip, record the angle in degrees in order to align X
          // points. Otherwise, use a standard k-d tree to get the nearest point
          // in two dimensions.

          if (this.kdByAngle) {
            clientX = (plotX / Math.PI * 180 + xAxis.pane.options.startAngle) % 360;

            if (clientX < 0) {
              // #2665
              clientX += 360;
            }

            point.clientX = clientX;
          } else {
            point.clientX = point.plotX;
          }
        };

        if (seriesTypes.spline) {
          /**
           * Overridden method for calculating a spline from one point to the next
           * @private
           */
          wrap(seriesTypes.spline.prototype, 'getPointSpline', function (proceed, segment, point, i) {
            var ret, connectors;

            if (this.chart.polar) {
              // moveTo or lineTo
              if (!i) {
                ret = ['M', point.plotX, point.plotY];
              } else {
                // curve from last point to this
                connectors = this.getConnectors(segment, i, true, this.connectEnds);
                ret = ['C', connectors.prevPointCont.rightContX, connectors.prevPointCont.rightContY, connectors.leftContX, connectors.leftContY, connectors.plotX, connectors.plotY];
              }
            } else {
              ret = proceed.call(this, segment, point, i);
            }

            return ret;
          }); // #6430 Areasplinerange series use unwrapped getPointSpline method, so
          // we need to set this method again.

          if (seriesTypes.areasplinerange) {
            seriesTypes.areasplinerange.prototype.getPointSpline = seriesTypes.spline.prototype.getPointSpline;
          }
        }
        /**
         * Extend translate. The plotX and plotY values are computed as if the polar
         * chart were a cartesian plane, where plotX denotes the angle in radians
         * and (yAxis.len - plotY) is the pixel distance from center.
         * @private
         */


        H.addEvent(Series, 'afterTranslate', function () {
          var series = this;
          var chart = series.chart;

          if (chart.polar && series.xAxis) {
            // Prepare k-d-tree handling. It searches by angle (clientX) in
            // case of shared tooltip, and by two dimensional distance in case
            // of non-shared.
            series.kdByAngle = chart.tooltip && chart.tooltip.shared;

            if (series.kdByAngle) {
              series.searchPoint = series.searchPointByAngle;
            } else {
              series.options.findNearestPointBy = 'xy';
            } // Postprocess plot coordinates


            if (!series.preventPostTranslate) {
              var points = series.points;
              var i = points.length;

              while (i--) {
                // Translate plotX, plotY from angle and radius to true plot
                // coordinates
                series.toXY(points[i]); // Treat points below Y axis min as null (#10082)

                if (!chart.hasParallelCoordinates && !series.yAxis.reversed && points[i].y < series.yAxis.min) {
                  points[i].isNull = true;
                }
              }
            } // Perform clip after render


            if (!this.hasClipCircleSetter) {
              this.hasClipCircleSetter = !!series.eventsToUnbind.push(H.addEvent(series, 'afterRender', function () {
                var circ;

                if (chart.polar) {
                  circ = this.yAxis.center;

                  if (!this.clipCircle) {
                    this.clipCircle = chart.renderer.clipCircle(circ[0], circ[1], circ[2] / 2);
                  } else {
                    this.clipCircle.animate({
                      x: circ[0],
                      y: circ[1],
                      r: circ[2] / 2
                    });
                  }

                  this.group.clip(this.clipCircle);
                  this.setClip = H.noop;
                }
              }));
            }
          }
        }, {
          order: 2
        }); // Run after translation of ||-coords

        /**
         * Extend getSegmentPath to allow connecting ends across 0 to provide a
         * closed circle in line-like series.
         * @private
         */

        wrap(seriesProto, 'getGraphPath', function (proceed, points) {
          var series = this,
              i,
              firstValid,
              popLastPoint; // Connect the path

          if (this.chart.polar) {
            points = points || this.points; // Append first valid point in order to connect the ends

            for (i = 0; i < points.length; i++) {
              if (!points[i].isNull) {
                firstValid = i;
                break;
              }
            }
            /**
             * Polar charts only. Whether to connect the ends of a line series
             * plot across the extremes.
             *
             * @sample {highcharts} highcharts/plotoptions/line-connectends-false/
             *         Do not connect
             *
             * @type      {boolean}
             * @since     2.3.0
             * @product   highcharts
             * @apioption plotOptions.series.connectEnds
             */


            if (this.options.connectEnds !== false && typeof firstValid !== 'undefined') {
              this.connectEnds = true; // re-used in splines

              points.splice(points.length, 0, points[firstValid]);
              popLastPoint = true;
            } // For area charts, pseudo points are added to the graph, now we
            // need to translate these


            points.forEach(function (point) {
              if (typeof point.polarPlotY === 'undefined') {
                series.toXY(point);
              }
            });
          } // Run uber method


          var ret = proceed.apply(this, [].slice.call(arguments, 1)); // #6212 points.splice method is adding points to an array. In case of
          // areaspline getGraphPath method is used two times and in both times
          // points are added to an array. That is why points.pop is used, to get
          // unmodified points.

          if (popLastPoint) {
            points.pop();
          }

          return ret;
        });

        var polarAnimate = function polarAnimate(proceed, init) {
          var chart = this.chart,
              animation = this.options.animation,
              group = this.group,
              markerGroup = this.markerGroup,
              center = this.xAxis.center,
              plotLeft = chart.plotLeft,
              plotTop = chart.plotTop,
              attribs; // Specific animation for polar charts

          if (chart.polar) {
            if (this.isRadialBar) {
              if (!init) {
                // Run the pie animation for radial bars
                this.startAngleRad = pick(this.translatedThreshold, this.xAxis.startAngleRad);
                H.seriesTypes.pie.prototype.animate.call(this, init);
              }
            } else {
              // Enable animation on polar charts only in SVG. In VML, the scaling
              // is different, plus animation would be so slow it would't matter.
              if (chart.renderer.isSVG) {
                animation = H.animObject(animation); // Initialize the animation

                if (init) {
                  // Scale down the group and place it in the center
                  attribs = {
                    translateX: center[0] + plotLeft,
                    translateY: center[1] + plotTop,
                    scaleX: 0.001,
                    scaleY: 0.001
                  };
                  group.attr(attribs);

                  if (markerGroup) {
                    markerGroup.attr(attribs);
                  } // Run the animation

                } else {
                  attribs = {
                    translateX: plotLeft,
                    translateY: plotTop,
                    scaleX: 1,
                    scaleY: 1
                  };
                  group.animate(attribs, animation);

                  if (markerGroup) {
                    markerGroup.animate(attribs, animation);
                  } // Delete this function to allow it only once


                  this.animate = null;
                }
              }
            } // For non-polar charts, revert to the basic animation

          } else {
            proceed.call(this, init);
          }
        }; // Define the animate method for regular series


        wrap(seriesProto, 'animate', polarAnimate);

        if (seriesTypes.column) {
          colProto = seriesTypes.column.prototype;

          colProto.polarArc = function (low, high, start, end) {
            var center = this.xAxis.center,
                len = this.yAxis.len;
            return this.chart.renderer.symbols.arc(center[0], center[1], len - high, null, {
              start: start,
              end: end,
              innerR: len - pick(low, len)
            });
          };
          /**
           * Define the animate method for columnseries
           * @private
           */


          wrap(colProto, 'animate', polarAnimate);
          /**
           * Extend the column prototype's translate method
           * @private
           */

          wrap(colProto, 'translate', function (proceed) {
            var series = this,
                options = series.options,
                threshold = options.threshold,
                stacking = options.stacking,
                chart = series.chart,
                xAxis = series.xAxis,
                yAxis = series.yAxis,
                reversed = yAxis.reversed,
                center = xAxis.center,
                startAngleRad = xAxis.startAngleRad,
                endAngleRad = xAxis.endAngleRad,
                visibleRange = endAngleRad - startAngleRad,
                thresholdAngleRad,
                points,
                point,
                i,
                yMin,
                yMax,
                start,
                end,
                tooltipPos,
                pointX,
                pointY,
                stackValues,
                stack,
                barX,
                innerR,
                r;
            series.preventPostTranslate = true; // Run uber method

            proceed.call(series); // Postprocess plot coordinates

            if (xAxis.isRadial) {
              points = series.points;
              i = points.length;
              yMin = yAxis.translate(yAxis.min);
              yMax = yAxis.translate(yAxis.max);
              threshold = options.threshold || 0;

              if (chart.inverted) {
                // Finding a correct threshold
                if (H.isNumber(threshold)) {
                  thresholdAngleRad = yAxis.translate(threshold); // Checks if threshold is outside the visible range

                  if (defined(thresholdAngleRad)) {
                    if (thresholdAngleRad < 0) {
                      thresholdAngleRad = 0;
                    } else if (thresholdAngleRad > visibleRange) {
                      thresholdAngleRad = visibleRange;
                    } // Adding start angle offset


                    series.translatedThreshold = thresholdAngleRad + startAngleRad;
                  }
                }
              }

              while (i--) {
                point = points[i];
                barX = point.barX;
                pointX = point.x;
                pointY = point.y;

                if (chart.inverted) {
                  point.shapeType = 'arc';
                  point.plotY = yAxis.translate(pointY);

                  if (stacking) {
                    stack = yAxis.stacks[(pointY < 0 ? '-' : '') + series.stackKey];

                    if (series.visible && stack && stack[pointX]) {
                      if (!point.isNull) {
                        stackValues = stack[pointX].points[series.getStackIndicator(void 0, pointX, series.index).key]; // Translating to radial values

                        start = yAxis.translate(stackValues[0]);
                        end = yAxis.translate(stackValues[1]); // If starting point is beyond the
                        // range, set it to 0

                        if (defined(start)) {
                          start = U.clamp(start, 0, visibleRange);
                        }
                      }
                    }
                  } else {
                    // Initial start and end angles for radial bar
                    start = thresholdAngleRad;
                    end = point.plotY;
                  }

                  if (start > end) {
                    // Swapping start and end
                    end = [start, start = end][0];
                  } // Prevent from rendering point outside the
                  // acceptable circular range


                  if (!reversed) {
                    if (start < yMin) {
                      start = yMin;
                    } else if (end > yMax) {
                      end = yMax;
                    } else if (end < yMin || start > yMax) {
                      start = end = 0;
                    }
                  } else {
                    if (end > yMin) {
                      end = yMin;
                    } else if (start < yMax) {
                      start = yMax;
                    } else if (start > yMin || end < yMax) {
                      start = end = visibleRange;
                    }
                  }

                  if (yAxis.min > yAxis.max) {
                    start = end = reversed ? visibleRange : 0;
                  }

                  start += startAngleRad;
                  end += startAngleRad; // In case when radius, inner radius or both are
                  // negative, a point is rendered but partially or as
                  // a center point

                  innerR = Math.max(barX, 0);
                  r = Math.max(barX + point.pointWidth, 0);
                  point.shapeArgs = {
                    x: center[0],
                    y: center[1],
                    r: r,
                    innerR: innerR,
                    start: start,
                    end: end
                  }; // Fade out the points if not inside the polar "plot area"

                  point.opacity = start === end ? 0 : void 0; // A correct value for stacked or not fully visible
                  // point

                  point.plotY = (defined(series.translatedThreshold) && (start < series.translatedThreshold ? start : end)) - startAngleRad;
                } else {
                  point.shapeType = 'path';
                  start = barX + startAngleRad;
                  point.shapeArgs = {
                    d: series.polarArc(point.yBottom, point.plotY, start, start + point.pointWidth)
                  };
                } // Provided a correct coordinates for the tooltip


                series.toXY(point);

                if (chart.inverted) {
                  tooltipPos = xAxis.postTranslate(point.rectPlotY, point.barX + point.pointWidth / 2);
                  point.tooltipPos = [tooltipPos.x - chart.plotLeft, tooltipPos.y - chart.plotTop];
                } else {
                  point.tooltipPos = [point.plotX, point.plotY];
                }

                point.ttBelow = point.plotY > center[1];
              }
            }
          });
          /**
           * Find correct align and vertical align based on an angle in polar chart
           * @private
           */

          colProto.findAlignments = function (angle, options) {
            var align, verticalAlign;

            if (options.align === null) {
              if (angle > 20 && angle < 160) {
                align = 'left'; // right hemisphere
              } else if (angle > 200 && angle < 340) {
                align = 'right'; // left hemisphere
              } else {
                align = 'center'; // top or bottom
              }

              options.align = align;
            }

            if (options.verticalAlign === null) {
              if (angle < 45 || angle > 315) {
                verticalAlign = 'bottom'; // top part
              } else if (angle > 135 && angle < 225) {
                verticalAlign = 'top'; // bottom part
              } else {
                verticalAlign = 'middle'; // left or right
              }

              options.verticalAlign = verticalAlign;
            }

            return options;
          };
          /**
           * Align column data labels outside the columns. #1199.
           * @private
           */


          wrap(colProto, 'alignDataLabel', function (proceed, point, dataLabel, options, alignTo, isNew) {
            var chart = this.chart,
                inside = pick(options.inside, !!this.options.stacking),
                angle,
                // align: Highcharts.AlignValue,
            // verticalAlign: Highcharts.VerticalAlignValue,
            shapeArgs,
                labelPos;

            if (chart.polar) {
              angle = point.rectPlotX / Math.PI * 180;

              if (!chart.inverted) {
                // Align nicely outside the perimeter of the columns
                options = this.findAlignments(angle, options);
              } else {
                // Required corrections for data labels of inverted bars
                // The plotX and plotY are correctly set therefore they
                // don't need to be swapped (inverted argument is false)
                this.forceDL = chart.isInsidePlot(point.plotX, Math.round(point.plotY), false); // Checks if labels should be positioned inside

                if (inside && point.shapeArgs) {
                  shapeArgs = point.shapeArgs; // Calculates pixel positions for a data label to be
                  // inside

                  labelPos = this.xAxis.postTranslate( // angle
                  (shapeArgs.start + shapeArgs.end) / 2 - this.xAxis.startAngleRad, // radius
                  point.barX + point.pointWidth / 2);
                  alignTo = {
                    x: labelPos.x - chart.plotLeft,
                    y: labelPos.y - chart.plotTop
                  };
                } else if (point.tooltipPos) {
                  alignTo = {
                    x: point.tooltipPos[0],
                    y: point.tooltipPos[1]
                  };
                }

                options.align = pick(options.align, 'center');
                options.verticalAlign = pick(options.verticalAlign, 'middle');
              }

              seriesProto.alignDataLabel.call(this, point, dataLabel, options, alignTo, isNew); // Hide label of a point (only inverted) that is outside the
              // visible y range

              if (this.isRadialBar && point.shapeArgs && point.shapeArgs.start === point.shapeArgs.end) {
                dataLabel.hide(true);
              }
            } else {
              proceed.call(this, point, dataLabel, options, alignTo, isNew);
            }
          });
        }
        /**
         * Extend getCoordinates to prepare for polar axis values
         * @private
         */


        wrap(pointerProto, 'getCoordinates', function (proceed, e) {
          var chart = this.chart,
              ret = {
            xAxis: [],
            yAxis: []
          };

          if (chart.polar) {
            chart.axes.forEach(function (axis) {
              var isXAxis = axis.isXAxis,
                  center = axis.center,
                  x,
                  y; // Skip colorAxis

              if (axis.coll === 'colorAxis') {
                return;
              }

              x = e.chartX - center[0] - chart.plotLeft;
              y = e.chartY - center[1] - chart.plotTop;
              ret[isXAxis ? 'xAxis' : 'yAxis'].push({
                axis: axis,
                value: axis.translate(isXAxis ? Math.PI - Math.atan2(x, y) : // angle
                // distance from center
                Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), true)
              });
            });
          } else {
            ret = proceed.call(this, e);
          }

          return ret;
        });

        H.SVGRenderer.prototype.clipCircle = function (x, y, r) {
          var wrapper,
              id = H.uniqueKey(),
              clipPath = this.createElement('clipPath').attr({
            id: id
          }).add(this.defs);
          wrapper = this.circle(x, y, r).add(clipPath);
          wrapper.id = id;
          wrapper.clipPath = clipPath;
          return wrapper;
        };

        H.addEvent(H.Chart, 'getAxes', function () {
          if (!this.pane) {
            this.pane = [];
          }

          splat(this.options.pane).forEach(function (paneOptions) {
            new H.Pane( // eslint-disable-line no-new
            paneOptions, this);
          }, this);
        });
        H.addEvent(H.Chart, 'afterDrawChartBox', function () {
          this.pane.forEach(function (pane) {
            pane.render();
          });
        });
        H.addEvent(H.Series, 'afterInit', function () {
          var chart = this.chart; // Add flags that identifies radial inverted series

          if (chart.inverted && chart.polar) {
            this.isRadialSeries = true;

            if (this instanceof seriesTypes.column) {
              this.isRadialBar = true;
            }
          }
        });
        /**
         * Extend chart.get to also search in panes. Used internally in
         * responsiveness and chart.update.
         * @private
         */

        wrap(H.Chart.prototype, 'get', function (proceed, id) {
          return H.find(this.pane, function (pane) {
            return pane.options.id === id;
          }) || proceed.call(this, id);
        });
      });

      _registerModule(_modules, 'masters/highcharts-more.src.js', [], function () {});
    });
    /***/

  },

  /***/
  "./node_modules/highcharts/highcharts.js":
  /*!***********************************************!*\
    !*** ./node_modules/highcharts/highcharts.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsHighchartsJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highcharts JS v8.0.0 (2019-12-10)
    (c) 2009-2018 Torstein Honsi
    License: www.highcharts.com/license
    */


    (function (S, M) {
      true && module.exports ? (M["default"] = M, module.exports = S.document ? M(S) : M) : true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return M(S);
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })("undefined" !== typeof window ? window : this, function (S) {
      function M(c, e, F, I) {
        c.hasOwnProperty(e) || (c[e] = I.apply(null, F));
      }

      var J = {};
      M(J, "parts/Globals.js", [], function () {
        var c = "undefined" !== typeof S ? S : "undefined" !== typeof window ? window : {},
            e = c.document,
            F = c.navigator && c.navigator.userAgent || "",
            I = e && e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            G = /(edge|msie|trident)/i.test(F) && !c.opera,
            H = -1 !== F.indexOf("Firefox"),
            v = -1 !== F.indexOf("Chrome"),
            q = H && 4 > parseInt(F.split("Firefox/")[1], 10);
        return {
          product: "Highcharts",
          version: "8.0.0",
          deg2rad: 2 * Math.PI / 360,
          doc: e,
          hasBidiBug: q,
          hasTouch: !!c.TouchEvent,
          isMS: G,
          isWebKit: -1 !== F.indexOf("AppleWebKit"),
          isFirefox: H,
          isChrome: v,
          isSafari: !v && -1 !== F.indexOf("Safari"),
          isTouchDevice: /(Mobile|Android|Windows Phone)/.test(F),
          SVG_NS: "http://www.w3.org/2000/svg",
          chartCount: 0,
          seriesTypes: {},
          symbolSizes: {},
          svg: I,
          win: c,
          marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
          noop: function noop() {},
          charts: [],
          dateFormats: {}
        };
      });
      M(J, "parts/Utilities.js", [J["parts/Globals.js"]], function (c) {
        function e(d, a) {
          return parseInt(d, a || 10);
        }

        function F(d) {
          return "string" === typeof d;
        }

        function I(d) {
          d = Object.prototype.toString.call(d);
          return "[object Array]" === d || "[object Array Iterator]" === d;
        }

        function G(d, a) {
          return !!d && "object" === typeof d && (!a || !I(d));
        }

        function H(d) {
          return G(d) && "number" === typeof d.nodeType;
        }

        function v(d) {
          var a = d && d.constructor;
          return !(!G(d, !0) || H(d) || !a || !a.name || "Object" === a.name);
        }

        function q(d) {
          return "number" === typeof d && !isNaN(d) && Infinity > d && -Infinity < d;
        }

        function C(d) {
          return "undefined" !== typeof d && null !== d;
        }

        function B(d, a, b) {
          var h;
          F(a) ? C(b) ? d.setAttribute(a, b) : d && d.getAttribute && ((h = d.getAttribute(a)) || "class" !== a || (h = d.getAttribute(a + "Name"))) : A(a, function (a, h) {
            d.setAttribute(h, a);
          });
          return h;
        }

        function u(d, a) {
          var h;
          d || (d = {});

          for (h in a) {
            d[h] = a[h];
          }

          return d;
        }

        function w() {
          for (var d = arguments, a = d.length, b = 0; b < a; b++) {
            var l = d[b];
            if ("undefined" !== typeof l && null !== l) return l;
          }
        }

        function m(d, a) {
          var h = function h() {};

          h.prototype = new d();
          u(h.prototype, a);
          return h;
        }

        function r(d, a) {
          return parseFloat(d.toPrecision(a || 14));
        }

        function D(d, a, b, l) {
          d = +d || 0;
          a = +a;
          var h = c.defaultOptions.lang,
              k = (d.toString().split(".")[1] || "").split("e")[0].length,
              g = d.toString().split("e");
          if (-1 === a) a = Math.min(k, 20);else if (!q(a)) a = 2;else if (a && g[1] && 0 > g[1]) {
            var t = a + +g[1];
            0 <= t ? (g[0] = (+g[0]).toExponential(t).split("e")[0], a = t) : (g[0] = g[0].split(".")[0] || 0, d = 20 > a ? (g[0] * Math.pow(10, g[1])).toFixed(a) : 0, g[1] = 0);
          }
          var x = (Math.abs(g[1] ? g[0] : d) + Math.pow(10, -Math.max(a, k) - 1)).toFixed(a);
          k = String(e(x));
          t = 3 < k.length ? k.length % 3 : 0;
          b = w(b, h.decimalPoint);
          l = w(l, h.thousandsSep);
          d = (0 > d ? "-" : "") + (t ? k.substr(0, t) + l : "");
          d += k.substr(t).replace(/(\d{3})(?=\d)/g, "$1" + l);
          a && (d += b + x.slice(-a));
          g[1] && 0 !== +d && (d += "e" + g[1]);
          return d;
        }

        function A(d, a, b) {
          for (var h in d) {
            Object.hasOwnProperty.call(d, h) && a.call(b || d[h], d[h], h, d);
          }
        }

        c.timers = [];
        var f = c.charts,
            b = c.doc,
            a = c.win;

        c.error = function (d, b, k, l) {
          var h = q(d),
              f = h ? "Highcharts error #" + d + ": www.highcharts.com/errors/" + d + "/" : d.toString(),
              g = function g() {
            if (b) throw Error(f);
            a.console && console.log(f);
          };

          if ("undefined" !== typeof l) {
            var t = "";
            h && (f += "?");
            c.objectEach(l, function (d, a) {
              t += "\n" + a + ": " + d;
              h && (f += encodeURI(a) + "=" + encodeURI(d));
            });
            f += t;
          }

          k ? c.fireEvent(k, "displayError", {
            code: d,
            message: f,
            params: l
          }, g) : g();
        };

        c.Fx = function (d, a, b) {
          this.options = a;
          this.elem = d;
          this.prop = b;
        };

        c.Fx.prototype = {
          dSetter: function dSetter() {
            var d = this.paths[0],
                a = this.paths[1],
                b = [],
                l = this.now,
                f = d.length;
            if (1 === l) b = this.toD;else if (f === a.length && 1 > l) for (; f--;) {
              var p = parseFloat(d[f]);
              b[f] = isNaN(p) || "A" === a[f - 4] || "A" === a[f - 5] ? a[f] : l * parseFloat("" + (a[f] - p)) + p;
            } else b = a;
            this.elem.attr("d", b, null, !0);
          },
          update: function update() {
            var d = this.elem,
                a = this.prop,
                b = this.now,
                l = this.options.step;
            if (this[a + "Setter"]) this[a + "Setter"]();else d.attr ? d.element && d.attr(a, b, null, !0) : d.style[a] = b + this.unit;
            l && l.call(d, b, this);
          },
          run: function run(d, b, k) {
            var h = this,
                f = h.options,
                p = function p(d) {
              return p.stopped ? !1 : h.step(d);
            },
                g = a.requestAnimationFrame || function (d) {
              setTimeout(d, 13);
            },
                t = function t() {
              for (var d = 0; d < c.timers.length; d++) {
                c.timers[d]() || c.timers.splice(d--, 1);
              }

              c.timers.length && g(t);
            };

            d !== b || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = d, this.end = b, this.unit = k, this.now = this.start, this.pos = 0, p.elem = this.elem, p.prop = this.prop, p() && 1 === c.timers.push(p) && g(t)) : (delete f.curAnim[this.prop], f.complete && 0 === Object.keys(f.curAnim).length && f.complete.call(this.elem));
          },
          step: function step(d) {
            var a = +new Date(),
                b = this.options,
                l = this.elem,
                f = b.complete,
                p = b.duration,
                g = b.curAnim;
            if (l.attr && !l.element) d = !1;else if (d || a >= p + this.startTime) {
              this.now = this.end;
              this.pos = 1;
              this.update();
              var t = g[this.prop] = !0;
              A(g, function (d) {
                !0 !== d && (t = !1);
              });
              t && f && f.call(l);
              d = !1;
            } else this.pos = b.easing((a - this.startTime) / p), this.now = this.start + (this.end - this.start) * this.pos, this.update(), d = !0;
            return d;
          },
          initPath: function initPath(d, a, b) {
            function h(d) {
              for (n = d.length; n--;) {
                var a = "M" === d[n] || "L" === d[n];
                var b = /[a-zA-Z]/.test(d[n + 3]);
                a && b && d.splice(n + 1, 0, d[n + 1], d[n + 2], d[n + 1], d[n + 2]);
              }
            }

            function f(d, a) {
              for (; d.length < r;) {
                d[0] = a[r - d.length];
                var b = d.slice(0, c);
                [].splice.apply(d, [0, 0].concat(b));
                z && (b = d.slice(d.length - c), [].splice.apply(d, [d.length, 0].concat(b)), n--);
              }

              d[0] = "M";
            }

            function k(d, a) {
              for (var b = (r - d.length) / c; 0 < b && b--;) {
                E = d.slice().splice(d.length / N - c, c * N), E[0] = a[r - c - b * c], x && (E[c - 6] = E[c - 2], E[c - 5] = E[c - 1]), [].splice.apply(d, [d.length / N, 0].concat(E)), z && b--;
              }
            }

            a = a || "";
            var g = d.startX,
                t = d.endX,
                x = -1 < a.indexOf("C"),
                c = x ? 7 : 3,
                E,
                n;
            a = a.split(" ");
            b = b.slice();
            var z = d.isArea,
                N = z ? 2 : 1;
            x && (h(a), h(b));

            if (g && t) {
              for (n = 0; n < g.length; n++) {
                if (g[n] === t[0]) {
                  var O = n;
                  break;
                } else if (g[0] === t[t.length - g.length + n]) {
                  O = n;
                  var A = !0;
                  break;
                } else if (g[g.length - 1] === t[t.length - g.length + n]) {
                  O = g.length - n;
                  break;
                }
              }

              "undefined" === typeof O && (a = []);
            }

            if (a.length && q(O)) {
              var r = b.length + O * N * c;
              A ? (f(a, b), k(b, a)) : (f(b, a), k(a, b));
            }

            return [a, b];
          },
          fillSetter: function fillSetter() {
            c.Fx.prototype.strokeSetter.apply(this, arguments);
          },
          strokeSetter: function strokeSetter() {
            this.elem.attr(this.prop, c.color(this.start).tweenTo(c.color(this.end), this.pos), null, !0);
          }
        };

        c.merge = function () {
          var d,
              a = arguments,
              b = {},
              l = function l(d, a) {
            "object" !== typeof d && (d = {});
            A(a, function (b, h) {
              !G(b, !0) || v(b) || H(b) ? d[h] = a[h] : d[h] = l(d[h] || {}, b);
            });
            return d;
          };

          !0 === a[0] && (b = a[1], a = Array.prototype.slice.call(a, 2));
          var f = a.length;

          for (d = 0; d < f; d++) {
            b = l(b, a[d]);
          }

          return b;
        };

        c.clearTimeout = function (d) {
          C(d) && clearTimeout(d);
        };

        c.css = function (d, a) {
          c.isMS && !c.svg && a && "undefined" !== typeof a.opacity && (a.filter = "alpha(opacity=" + 100 * a.opacity + ")");
          u(d.style, a);
        };

        c.createElement = function (d, a, f, l, y) {
          d = b.createElement(d);
          var h = c.css;
          a && u(d, a);
          y && h(d, {
            padding: "0",
            border: "none",
            margin: "0"
          });
          f && h(d, f);
          l && l.appendChild(d);
          return d;
        };

        c.datePropsToTimestamps = function (d) {
          A(d, function (a, b) {
            G(a) && "function" === typeof a.getTime ? d[b] = a.getTime() : (G(a) || I(a)) && c.datePropsToTimestamps(a);
          });
        };

        c.formatSingle = function (d, a, b) {
          var h = /\.([0-9])/,
              f = c.defaultOptions.lang,
              k = b && b.time || c.time;
          b = b && b.numberFormatter || D;
          /f$/.test(d) ? (h = (h = d.match(h)) ? h[1] : -1, null !== a && (a = b(a, h, f.decimalPoint, -1 < d.indexOf(",") ? f.thousandsSep : ""))) : a = k.dateFormat(d, a);
          return a;
        };

        c.format = function (d, a, b) {
          for (var h = "{", f = !1, k, g, t, x, L = [], E; d;) {
            h = d.indexOf(h);
            if (-1 === h) break;
            k = d.slice(0, h);

            if (f) {
              k = k.split(":");
              g = k.shift().split(".");
              x = g.length;
              E = a;

              for (t = 0; t < x; t++) {
                E && (E = E[g[t]]);
              }

              k.length && (E = c.formatSingle(k.join(":"), E, b));
              L.push(E);
            } else L.push(k);

            d = d.slice(h + 1);
            h = (f = !f) ? "}" : "{";
          }

          L.push(d);
          return L.join("");
        };

        c.getMagnitude = function (d) {
          return Math.pow(10, Math.floor(Math.log(d) / Math.LN10));
        };

        c.normalizeTickInterval = function (d, a, b, l, f) {
          var h = d;
          b = w(b, 1);
          var g = d / b;
          a || (a = f ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === l && (1 === b ? a = a.filter(function (d) {
            return 0 === d % 1;
          }) : .1 >= b && (a = [1 / b])));

          for (l = 0; l < a.length && !(h = a[l], f && h * b >= d || !f && g <= (a[l] + (a[l + 1] || a[l])) / 2); l++) {
            ;
          }

          return h = r(h * b, -Math.round(Math.log(.001) / Math.LN10));
        };

        c.stableSort = function (d, a) {
          var b = d.length,
              h,
              f;

          for (f = 0; f < b; f++) {
            d[f].safeI = f;
          }

          d.sort(function (d, b) {
            h = a(d, b);
            return 0 === h ? d.safeI - b.safeI : h;
          });

          for (f = 0; f < b; f++) {
            delete d[f].safeI;
          }
        };

        c.timeUnits = {
          millisecond: 1,
          second: 1E3,
          minute: 6E4,
          hour: 36E5,
          day: 864E5,
          week: 6048E5,
          month: 24192E5,
          year: 314496E5
        };

        Math.easeInOutSine = function (d) {
          return -.5 * (Math.cos(Math.PI * d) - 1);
        };

        c.getStyle = function (d, b, f) {
          if ("width" === b) return b = Math.min(d.offsetWidth, d.scrollWidth), f = d.getBoundingClientRect && d.getBoundingClientRect().width, f < b && f >= b - 1 && (b = Math.floor(f)), Math.max(0, b - c.getStyle(d, "padding-left") - c.getStyle(d, "padding-right"));
          if ("height" === b) return Math.max(0, Math.min(d.offsetHeight, d.scrollHeight) - c.getStyle(d, "padding-top") - c.getStyle(d, "padding-bottom"));
          a.getComputedStyle || c.error(27, !0);
          if (d = a.getComputedStyle(d, void 0)) d = d.getPropertyValue(b), w(f, "opacity" !== b) && (d = e(d));
          return d;
        };

        c.inArray = function (d, a, b) {
          return a.indexOf(d, b);
        };

        c.find = Array.prototype.find ? function (d, a) {
          return d.find(a);
        } : function (d, a) {
          var b,
              h = d.length;

          for (b = 0; b < h; b++) {
            if (a(d[b], b)) return d[b];
          }
        };
        c.keys = Object.keys;

        c.stop = function (d, a) {
          for (var b = c.timers.length; b--;) {
            c.timers[b].elem !== d || a && a !== c.timers[b].prop || (c.timers[b].stopped = !0);
          }
        };

        A({
          map: "map",
          each: "forEach",
          grep: "filter",
          reduce: "reduce",
          some: "some"
        }, function (d, a) {
          c[a] = function (a) {
            return Array.prototype[d].apply(a, [].slice.call(arguments, 1));
          };
        });

        c.addEvent = function (d, a, b, f) {
          void 0 === f && (f = {});
          var h = d.addEventListener || c.addEventListenerPolyfill;
          var l = "function" === typeof d && d.prototype ? d.prototype.protoEvents = d.prototype.protoEvents || {} : d.hcEvents = d.hcEvents || {};
          c.Point && d instanceof c.Point && d.series && d.series.chart && (d.series.chart.runTrackerClick = !0);
          h && h.call(d, a, b, !1);
          l[a] || (l[a] = []);
          l[a].push({
            fn: b,
            order: "number" === typeof f.order ? f.order : Infinity
          });
          l[a].sort(function (d, a) {
            return d.order - a.order;
          });
          return function () {
            c.removeEvent(d, a, b);
          };
        };

        c.removeEvent = function (d, a, b) {
          function h(a, b) {
            var g = d.removeEventListener || c.removeEventListenerPolyfill;
            g && g.call(d, a, b, !1);
          }

          function f(b) {
            var g;

            if (d.nodeName) {
              if (a) {
                var f = {};
                f[a] = !0;
              } else f = b;

              A(f, function (d, a) {
                if (b[a]) for (g = b[a].length; g--;) {
                  h(a, b[a][g].fn);
                }
              });
            }
          }

          var k;
          ["protoEvents", "hcEvents"].forEach(function (g, t) {
            var l = (t = t ? d : d.prototype) && t[g];
            l && (a ? (k = l[a] || [], b ? (l[a] = k.filter(function (a) {
              return b !== a.fn;
            }), h(a, b)) : (f(l), l[a] = [])) : (f(l), t[g] = {}));
          });
        };

        c.fireEvent = function (a, h, f, l) {
          var d;
          f = f || {};

          if (b.createEvent && (a.dispatchEvent || a.fireEvent)) {
            var k = b.createEvent("Events");
            k.initEvent(h, !0, !0);
            u(k, f);
            a.dispatchEvent ? a.dispatchEvent(k) : a.fireEvent(h, k);
          } else f.target || u(f, {
            preventDefault: function preventDefault() {
              f.defaultPrevented = !0;
            },
            target: a,
            type: h
          }), function (b, h) {
            void 0 === b && (b = []);
            void 0 === h && (h = []);
            var g = 0,
                t = 0,
                l = b.length + h.length;

            for (d = 0; d < l; d++) {
              !1 === (b[g] ? h[t] ? b[g].order <= h[t].order ? b[g++] : h[t++] : b[g++] : h[t++]).fn.call(a, f) && f.preventDefault();
            }
          }(a.protoEvents && a.protoEvents[h], a.hcEvents && a.hcEvents[h]);

          l && !f.defaultPrevented && l.call(a, f);
        };

        c.animate = function (a, b, f) {
          var d,
              h = "",
              k,
              g;

          if (!G(f)) {
            var t = arguments;
            f = {
              duration: t[2],
              easing: t[3],
              complete: t[4]
            };
          }

          q(f.duration) || (f.duration = 400);
          f.easing = "function" === typeof f.easing ? f.easing : Math[f.easing] || Math.easeInOutSine;
          f.curAnim = c.merge(b);
          A(b, function (t, l) {
            c.stop(a, l);
            g = new c.Fx(a, f, l);
            k = null;
            "d" === l ? (g.paths = g.initPath(a, a.d, b.d), g.toD = b.d, d = 0, k = 1) : a.attr ? d = a.attr(l) : (d = parseFloat(c.getStyle(a, l)) || 0, "opacity" !== l && (h = "px"));
            k || (k = t);
            k && k.match && k.match("px") && (k = k.replace(/px/g, ""));
            g.run(d, k, h);
          });
        };

        c.seriesType = function (a, b, f, l, y) {
          var d = c.getOptions(),
              g = c.seriesTypes;
          d.plotOptions[a] = c.merge(d.plotOptions[b], f);
          g[a] = m(g[b] || function () {}, l);
          g[a].prototype.type = a;
          y && (g[a].prototype.pointClass = m(c.Point, y));
          return g[a];
        };

        c.uniqueKey = function () {
          var a = Math.random().toString(36).substring(2, 9),
              b = 0;
          return function () {
            return "highcharts-" + a + "-" + b++;
          };
        }();

        c.isFunction = function (a) {
          return "function" === typeof a;
        };

        a.jQuery && (a.jQuery.fn.highcharts = function () {
          var a = [].slice.call(arguments);
          if (this[0]) return a[0] ? (new c[F(a[0]) ? a.shift() : "Chart"](this[0], a[0], a[1]), this) : f[B(this[0], "data-highcharts-chart")];
        });
        return {
          animObject: function animObject(a) {
            return G(a) ? c.merge(a) : {
              duration: a ? 500 : 0
            };
          },
          arrayMax: function arrayMax(a) {
            for (var d = a.length, b = a[0]; d--;) {
              a[d] > b && (b = a[d]);
            }

            return b;
          },
          arrayMin: function arrayMin(a) {
            for (var d = a.length, b = a[0]; d--;) {
              a[d] < b && (b = a[d]);
            }

            return b;
          },
          attr: B,
          clamp: function clamp(a, b, f) {
            return a > b ? a < f ? a : f : b;
          },
          correctFloat: r,
          defined: C,
          destroyObjectProperties: function destroyObjectProperties(a, b) {
            A(a, function (d, h) {
              d && d !== b && d.destroy && d.destroy();
              delete a[h];
            });
          },
          discardElement: function discardElement(a) {
            var d = c.garbageBin;
            d || (d = c.createElement("div"));
            a && d.appendChild(a);
            d.innerHTML = "";
          },
          erase: function erase(a, b) {
            for (var d = a.length; d--;) {
              if (a[d] === b) {
                a.splice(d, 1);
                break;
              }
            }
          },
          extend: u,
          extendClass: m,
          isArray: I,
          isClass: v,
          isDOMElement: H,
          isNumber: q,
          isObject: G,
          isString: F,
          numberFormat: D,
          objectEach: A,
          offset: function offset(d) {
            var h = b.documentElement;
            d = d.parentElement || d.parentNode ? d.getBoundingClientRect() : {
              top: 0,
              left: 0
            };
            return {
              top: d.top + (a.pageYOffset || h.scrollTop) - (h.clientTop || 0),
              left: d.left + (a.pageXOffset || h.scrollLeft) - (h.clientLeft || 0)
            };
          },
          pad: function pad(a, b, f) {
            return Array((b || 2) + 1 - String(a).replace("-", "").length).join(f || "0") + a;
          },
          pick: w,
          pInt: e,
          relativeLength: function relativeLength(a, b, f) {
            return /%$/.test(a) ? b * parseFloat(a) / 100 + (f || 0) : parseFloat(a);
          },
          setAnimation: function setAnimation(a, b) {
            b.renderer.globalAnimation = w(a, b.options.chart.animation, !0);
          },
          splat: function splat(a) {
            return I(a) ? a : [a];
          },
          syncTimeout: function syncTimeout(a, b, f) {
            if (0 < b) return setTimeout(a, b, f);
            a.call(0, f);
            return -1;
          },
          wrap: function wrap(a, b, f) {
            var d = a[b];

            a[b] = function () {
              var a = Array.prototype.slice.call(arguments),
                  b = arguments,
                  g = this;

              g.proceed = function () {
                d.apply(g, arguments.length ? arguments : b);
              };

              a.unshift(d);
              a = f.apply(this, a);
              g.proceed = null;
              return a;
            };
          }
        };
      });
      M(J, "parts/Color.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.isNumber,
            I = e.pInt,
            G = c.merge;

        c.Color = function (e) {
          if (!(this instanceof c.Color)) return new c.Color(e);
          this.init(e);
        };

        c.Color.prototype = {
          parsers: [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function parse(c) {
              return [I(c[1]), I(c[2]), I(c[3]), parseFloat(c[4], 10)];
            }
          }, {
            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function parse(c) {
              return [I(c[1]), I(c[2]), I(c[3]), 1];
            }
          }],
          names: {
            white: "#ffffff",
            black: "#000000"
          },
          init: function init(e) {
            var v, q;
            if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = e.stops.map(function (e) {
              return new c.Color(e[1]);
            });else {
              if (e && e.charAt && "#" === e.charAt()) {
                var C = e.length;
                e = parseInt(e.substr(1), 16);
                7 === C ? v = [(e & 16711680) >> 16, (e & 65280) >> 8, e & 255, 1] : 4 === C && (v = [(e & 3840) >> 4 | (e & 3840) >> 8, (e & 240) >> 4 | e & 240, (e & 15) << 4 | e & 15, 1]);
              }

              if (!v) for (q = this.parsers.length; q-- && !v;) {
                var H = this.parsers[q];
                (C = H.regex.exec(e)) && (v = H.parse(C));
              }
            }
            this.rgba = v || [];
          },
          get: function get(c) {
            var e = this.input,
                q = this.rgba;

            if (this.stops) {
              var C = G(e);
              C.stops = [].concat(C.stops);
              this.stops.forEach(function (e, q) {
                C.stops[q] = [C.stops[q][0], e.get(c)];
              });
            } else C = q && F(q[0]) ? "rgb" === c || !c && 1 === q[3] ? "rgb(" + q[0] + "," + q[1] + "," + q[2] + ")" : "a" === c ? q[3] : "rgba(" + q.join(",") + ")" : e;

            return C;
          },
          brighten: function brighten(c) {
            var e,
                q = this.rgba;
            if (this.stops) this.stops.forEach(function (e) {
              e.brighten(c);
            });else if (F(c) && 0 !== c) for (e = 0; 3 > e; e++) {
              q[e] += I(255 * c), 0 > q[e] && (q[e] = 0), 255 < q[e] && (q[e] = 255);
            }
            return this;
          },
          setOpacity: function setOpacity(c) {
            this.rgba[3] = c;
            return this;
          },
          tweenTo: function tweenTo(c, e) {
            var q = this.rgba,
                v = c.rgba;
            v.length && q && q.length ? (c = 1 !== v[3] || 1 !== q[3], e = (c ? "rgba(" : "rgb(") + Math.round(v[0] + (q[0] - v[0]) * (1 - e)) + "," + Math.round(v[1] + (q[1] - v[1]) * (1 - e)) + "," + Math.round(v[2] + (q[2] - v[2]) * (1 - e)) + (c ? "," + (v[3] + (q[3] - v[3]) * (1 - e)) : "") + ")") : e = c.input || "none";
            return e;
          }
        };

        c.color = function (e) {
          return new c.Color(e);
        };
      });
      M(J, "parts/SvgRenderer.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.animObject,
            I = e.attr,
            G = e.defined,
            H = e.destroyObjectProperties,
            v = e.erase,
            q = e.extend,
            C = e.isArray,
            B = e.isNumber,
            u = e.isObject,
            w = e.isString,
            m = e.objectEach,
            r = e.pick,
            D = e.pInt,
            A = e.splat,
            f = c.addEvent,
            b = c.animate,
            a = c.charts,
            d = c.color,
            h = c.css,
            k = c.createElement,
            l = c.deg2rad,
            y = c.doc,
            p = c.hasTouch,
            g = c.isFirefox,
            t = c.isMS,
            x = c.isWebKit,
            L = c.merge,
            E = c.noop,
            n = c.removeEvent,
            z = c.stop,
            N = c.svg,
            O = c.SVG_NS,
            V = c.symbolSizes,
            T = c.win;

        var P = c.SVGElement = function () {
          return this;
        };

        q(P.prototype, {
          opacity: 1,
          SVG_NS: O,
          textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
          init: function init(a, b) {
            this.element = "span" === b ? k(b) : y.createElementNS(this.SVG_NS, b);
            this.renderer = a;
            c.fireEvent(this, "afterInit");
          },
          animate: function animate(a, d, n) {
            var K = F(r(d, this.renderer.globalAnimation, !0));
            r(y.hidden, y.msHidden, y.webkitHidden, !1) && (K.duration = 0);
            0 !== K.duration ? (n && (K.complete = n), b(this, a, K)) : (this.attr(a, void 0, n), m(a, function (a, b) {
              K.step && K.step.call(this, a, {
                prop: b,
                pos: 1
              });
            }, this));
            return this;
          },
          complexColor: function complexColor(a, b, d) {
            var n = this.renderer,
                K,
                Q,
                g,
                z,
                f,
                h,
                t,
                l,
                R,
                x,
                k,
                N = [],
                p;
            c.fireEvent(this.renderer, "complexColor", {
              args: arguments
            }, function () {
              a.radialGradient ? Q = "radialGradient" : a.linearGradient && (Q = "linearGradient");
              Q && (g = a[Q], f = n.gradients, t = a.stops, x = d.radialReference, C(g) && (a[Q] = g = {
                x1: g[0],
                y1: g[1],
                x2: g[2],
                y2: g[3],
                gradientUnits: "userSpaceOnUse"
              }), "radialGradient" === Q && x && !G(g.gradientUnits) && (z = g, g = L(g, n.getRadialAttr(x, z), {
                gradientUnits: "userSpaceOnUse"
              })), m(g, function (a, b) {
                "id" !== b && N.push(b, a);
              }), m(t, function (a) {
                N.push(a);
              }), N = N.join(","), f[N] ? k = f[N].attr("id") : (g.id = k = c.uniqueKey(), f[N] = h = n.createElement(Q).attr(g).add(n.defs), h.radAttr = z, h.stops = [], t.forEach(function (a) {
                0 === a[1].indexOf("rgba") ? (K = c.color(a[1]), l = K.get("rgb"), R = K.get("a")) : (l = a[1], R = 1);
                a = n.createElement("stop").attr({
                  offset: a[0],
                  "stop-color": l,
                  "stop-opacity": R
                }).add(h);
                h.stops.push(a);
              })), p = "url(" + n.url + "#" + k + ")", d.setAttribute(b, p), d.gradient = N, a.toString = function () {
                return p;
              });
            });
          },
          applyTextOutline: function applyTextOutline(a) {
            var b = this.element,
                d;
            -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
            a = a.split(" ");
            var n = a[a.length - 1];

            if ((d = a[0]) && "none" !== d && c.svg) {
              this.fakeTS = !0;
              a = [].slice.call(b.getElementsByTagName("tspan"));
              this.ySetter = this.xSetter;
              d = d.replace(/(^[\d\.]+)(.*?)$/g, function (a, b, d) {
                return 2 * b + d;
              });
              this.removeTextOutline(a);
              var g = b.firstChild;
              a.forEach(function (a, K) {
                0 === K && (a.setAttribute("x", b.getAttribute("x")), K = b.getAttribute("y"), a.setAttribute("y", K || 0), null === K && b.setAttribute("y", 0));
                a = a.cloneNode(1);
                I(a, {
                  "class": "highcharts-text-outline",
                  fill: n,
                  stroke: n,
                  "stroke-width": d,
                  "stroke-linejoin": "round"
                });
                b.insertBefore(a, g);
              });
            }
          },
          removeTextOutline: function removeTextOutline(a) {
            for (var b = a.length, d; b--;) {
              d = a[b], "highcharts-text-outline" === d.getAttribute("class") && v(a, this.element.removeChild(d));
            }
          },
          symbolCustomAttribs: "x y width height r start end innerR anchorX anchorY rounded".split(" "),
          attr: function attr(a, b, d, n) {
            var g = this.element,
                K,
                Q = this,
                f,
                h,
                t = this.symbolCustomAttribs;

            if ("string" === typeof a && "undefined" !== typeof b) {
              var l = a;
              a = {};
              a[l] = b;
            }

            "string" === typeof a ? Q = (this[a + "Getter"] || this._defaultGetter).call(this, a, g) : (m(a, function (b, d) {
              f = !1;
              n || z(this, d);
              this.symbolName && -1 !== c.inArray(d, t) && (K || (this.symbolAttr(a), K = !0), f = !0);
              !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0);
              f || (h = this[d + "Setter"] || this._defaultSetter, h.call(this, b, d, g), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, h));
            }, this), this.afterSetters());
            d && d.call(this);
            return Q;
          },
          afterSetters: function afterSetters() {
            this.doTransform && (this.updateTransform(), this.doTransform = !1);
          },
          updateShadows: function updateShadows(a, b, d) {
            for (var n = this.shadows, g = n.length; g--;) {
              d.call(n[g], "height" === a ? Math.max(b - (n[g].cutHeight || 0), 0) : "d" === a ? this.d : b, a, n[g]);
            }
          },
          addClass: function addClass(a, b) {
            var d = b ? "" : this.attr("class") || "";
            a = (a || "").split(/ /g).reduce(function (a, b) {
              -1 === d.indexOf(b) && a.push(b);
              return a;
            }, d ? [d] : []).join(" ");
            a !== d && this.attr("class", a);
            return this;
          },
          hasClass: function hasClass(a) {
            return -1 !== (this.attr("class") || "").split(" ").indexOf(a);
          },
          removeClass: function removeClass(a) {
            return this.attr("class", (this.attr("class") || "").replace(w(a) ? new RegExp(" ?" + a + " ?") : a, ""));
          },
          symbolAttr: function symbolAttr(a) {
            var b = this;
            "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (d) {
              b[d] = r(a[d], b[d]);
            });
            b.attr({
              d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            });
          },
          clip: function clip(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
          },
          crisp: function crisp(a, b) {
            b = b || a.strokeWidth || 0;
            var d = Math.round(b) % 2 / 2;
            a.x = Math.floor(a.x || this.x || 0) + d;
            a.y = Math.floor(a.y || this.y || 0) + d;
            a.width = Math.floor((a.width || this.width || 0) - 2 * d);
            a.height = Math.floor((a.height || this.height || 0) - 2 * d);
            G(a.strokeWidth) && (a.strokeWidth = b);
            return a;
          },
          css: function css(a) {
            var b = this.styles,
                d = {},
                n = this.element,
                g = "",
                z = !b,
                f = ["textOutline", "textOverflow", "width"];
            a && a.color && (a.fill = a.color);
            b && m(a, function (a, n) {
              a !== b[n] && (d[n] = a, z = !0);
            });

            if (z) {
              b && (a = q(b, d));
              if (a) if (null === a.width || "auto" === a.width) delete this.textWidth;else if ("text" === n.nodeName.toLowerCase() && a.width) var Q = this.textWidth = D(a.width);
              this.styles = a;
              Q && !N && this.renderer.forExport && delete a.width;

              if (n.namespaceURI === this.SVG_NS) {
                var t = function t(a, b) {
                  return "-" + b.toLowerCase();
                };

                m(a, function (a, b) {
                  -1 === f.indexOf(b) && (g += b.replace(/([A-Z])/g, t) + ":" + a + ";");
                });
                g && I(n, "style", g);
              } else h(n, a);

              this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline));
            }

            return this;
          },
          getStyle: function getStyle(a) {
            return T.getComputedStyle(this.element || this, "").getPropertyValue(a);
          },
          strokeWidth: function strokeWidth() {
            if (!this.renderer.styledMode) return this["stroke-width"] || 0;
            var a = this.getStyle("stroke-width"),
                b = 0;
            if (a.indexOf("px") === a.length - 2) b = D(a);else if ("" !== a) {
              var d = y.createElementNS(O, "rect");
              I(d, {
                width: a,
                "stroke-width": 0
              });
              this.element.parentNode.appendChild(d);
              b = d.getBBox().width;
              d.parentNode.removeChild(d);
            }
            return b;
          },
          on: function on(a, b) {
            var d = this,
                n = d.element;
            p && "click" === a ? (n.ontouchstart = function (a) {
              d.touchEventFired = Date.now();
              a.preventDefault();
              b.call(n, a);
            }, n.onclick = function (a) {
              (-1 === T.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (d.touchEventFired || 0)) && b.call(n, a);
            }) : n["on" + a] = b;
            return this;
          },
          setRadialReference: function setRadialReference(a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this;
          },
          translate: function translate(a, b) {
            return this.attr({
              translateX: a,
              translateY: b
            });
          },
          invert: function invert(a) {
            this.inverted = a;
            this.updateTransform();
            return this;
          },
          updateTransform: function updateTransform() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                d = this.scaleX,
                n = this.scaleY,
                g = this.inverted,
                z = this.rotation,
                f = this.matrix,
                h = this.element;
            g && (a += this.width, b += this.height);
            a = ["translate(" + a + "," + b + ")"];
            G(f) && a.push("matrix(" + f.join(",") + ")");
            g ? a.push("rotate(90) scale(-1,1)") : z && a.push("rotate(" + z + " " + r(this.rotationOriginX, h.getAttribute("x"), 0) + " " + r(this.rotationOriginY, h.getAttribute("y") || 0) + ")");
            (G(d) || G(n)) && a.push("scale(" + r(d, 1) + " " + r(n, 1) + ")");
            a.length && h.setAttribute("transform", a.join(" "));
          },
          toFront: function toFront() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this;
          },
          align: function align(a, b, d) {
            var n,
                g = {};
            var z = this.renderer;
            var f = z.alignedObjects;
            var K, h;

            if (a) {
              if (this.alignOptions = a, this.alignByTranslate = b, !d || w(d)) this.alignTo = n = d || "renderer", v(f, this), f.push(this), d = null;
            } else a = this.alignOptions, b = this.alignByTranslate, n = this.alignTo;

            d = r(d, z[n], z);
            n = a.align;
            z = a.verticalAlign;
            f = (d.x || 0) + (a.x || 0);
            var t = (d.y || 0) + (a.y || 0);
            "right" === n ? K = 1 : "center" === n && (K = 2);
            K && (f += (d.width - (a.width || 0)) / K);
            g[b ? "translateX" : "x"] = Math.round(f);
            "bottom" === z ? h = 1 : "middle" === z && (h = 2);
            h && (t += (d.height - (a.height || 0)) / h);
            g[b ? "translateY" : "y"] = Math.round(t);
            this[this.placed ? "animate" : "attr"](g);
            this.placed = !0;
            this.alignAttr = g;
            return this;
          },
          getBBox: function getBBox(a, b) {
            var d,
                n = this.renderer,
                g = this.element,
                z = this.styles,
                f = this.textStr,
                K,
                h = n.cache,
                t = n.cacheKeys,
                Q = g.namespaceURI === this.SVG_NS;
            b = r(b, this.rotation, 0);
            var x = n.styledMode ? g && P.prototype.getStyle.call(g, "font-size") : z && z.fontSize;

            if (G(f)) {
              var c = f.toString();
              -1 === c.indexOf("<") && (c = c.replace(/[0-9]/g, "0"));
              c += ["", b, x, this.textWidth, z && z.textOverflow].join();
            }

            c && !a && (d = h[c]);

            if (!d) {
              if (Q || n.forExport) {
                try {
                  (K = this.fakeTS && function (a) {
                    [].forEach.call(g.querySelectorAll(".highcharts-text-outline"), function (b) {
                      b.style.display = a;
                    });
                  }) && K("none"), d = g.getBBox ? q({}, g.getBBox()) : {
                    width: g.offsetWidth,
                    height: g.offsetHeight
                  }, K && K("");
                } catch (ca) {
                  "";
                }

                if (!d || 0 > d.width) d = {
                  width: 0,
                  height: 0
                };
              } else d = this.htmlGetBBox();

              n.isSVG && (a = d.width, n = d.height, Q && (d.height = n = {
                "11px,17": 14,
                "13px,20": 16
              }[z && z.fontSize + "," + Math.round(n)] || n), b && (z = b * l, d.width = Math.abs(n * Math.sin(z)) + Math.abs(a * Math.cos(z)), d.height = Math.abs(n * Math.cos(z)) + Math.abs(a * Math.sin(z))));

              if (c && 0 < d.height) {
                for (; 250 < t.length;) {
                  delete h[t.shift()];
                }

                h[c] || t.push(c);
                h[c] = d;
              }
            }

            return d;
          },
          show: function show(a) {
            return this.attr({
              visibility: a ? "inherit" : "visible"
            });
          },
          hide: function hide(a) {
            a ? this.attr({
              y: -9999
            }) : this.attr({
              visibility: "hidden"
            });
            return this;
          },
          fadeOut: function fadeOut(a) {
            var b = this;
            b.animate({
              opacity: 0
            }, {
              duration: a || 150,
              complete: function complete() {
                b.attr({
                  y: -9999
                });
              }
            });
          },
          add: function add(a) {
            var b = this.renderer,
                d = this.element;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            "undefined" !== typeof this.textStr && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex) var n = this.zIndexSetter();
            n || (a ? a.element : b.box).appendChild(d);
            if (this.onAdd) this.onAdd();
            return this;
          },
          safeRemoveChild: function safeRemoveChild(a) {
            var b = a.parentNode;
            b && b.removeChild(a);
          },
          destroy: function destroy() {
            var a = this,
                b = a.element || {},
                d = a.renderer,
                n = d.isSVG && "SPAN" === b.nodeName && a.parentGroup,
                g = b.ownerSVGElement,
                f = a.clipPath;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            z(a);
            f && g && ([].forEach.call(g.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
              -1 < a.getAttribute("clip-path").indexOf(f.element.id) && a.removeAttribute("clip-path");
            }), a.clipPath = f.destroy());

            if (a.stops) {
              for (g = 0; g < a.stops.length; g++) {
                a.stops[g] = a.stops[g].destroy();
              }

              a.stops = null;
            }

            a.safeRemoveChild(b);

            for (d.styledMode || a.destroyShadows(); n && n.div && 0 === n.div.childNodes.length;) {
              b = n.parentGroup, a.safeRemoveChild(n.div), delete n.div, n = b;
            }

            a.alignTo && v(d.alignedObjects, a);
            m(a, function (b, d) {
              a[d] && a[d].parentGroup === a && a[d].destroy && a[d].destroy();
              delete a[d];
            });
          },
          shadow: function shadow(a, b, d) {
            var n = [],
                g,
                z = this.element;
            if (!a) this.destroyShadows();else if (!this.shadows) {
              var f = r(a.width, 3);
              var h = (a.opacity || .15) / f;
              var K = this.parentInverted ? "(-1,-1)" : "(" + r(a.offsetX, 1) + ", " + r(a.offsetY, 1) + ")";

              for (g = 1; g <= f; g++) {
                var t = z.cloneNode(0);
                var l = 2 * f + 1 - 2 * g;
                I(t, {
                  stroke: a.color || "#000000",
                  "stroke-opacity": h * g,
                  "stroke-width": l,
                  transform: "translate" + K,
                  fill: "none"
                });
                t.setAttribute("class", (t.getAttribute("class") || "") + " highcharts-shadow");
                d && (I(t, "height", Math.max(I(t, "height") - l, 0)), t.cutHeight = l);
                b ? b.element.appendChild(t) : z.parentNode && z.parentNode.insertBefore(t, z);
                n.push(t);
              }

              this.shadows = n;
            }
            return this;
          },
          destroyShadows: function destroyShadows() {
            (this.shadows || []).forEach(function (a) {
              this.safeRemoveChild(a);
            }, this);
            this.shadows = void 0;
          },
          xGetter: function xGetter(a) {
            "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
            return this._defaultGetter(a);
          },
          _defaultGetter: function _defaultGetter(a) {
            a = r(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a;
          },
          dSetter: function dSetter(a, b, d) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            this[b] !== a && (d.setAttribute(b, a), this[b] = a);
          },
          dashstyleSetter: function dashstyleSetter(a) {
            var b,
                d = this["stroke-width"];
            "inherit" === d && (d = 1);

            if (a = a && a.toLowerCase()) {
              a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

              for (b = a.length; b--;) {
                a[b] = D(a[b]) * d;
              }

              a = a.join(",").replace(/NaN/g, "none");
              this.element.setAttribute("stroke-dasharray", a);
            }
          },
          alignSetter: function alignSetter(a) {
            var b = {
              left: "start",
              center: "middle",
              right: "end"
            };
            b[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", b[a]));
          },
          opacitySetter: function opacitySetter(a, b, d) {
            this[b] = a;
            d.setAttribute(b, a);
          },
          titleSetter: function titleSetter(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = y.createElementNS(this.SVG_NS, "title"), this.element.appendChild(b));
            b.firstChild && b.removeChild(b.firstChild);
            b.appendChild(y.createTextNode(String(r(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
          },
          textSetter: function textSetter(a) {
            a !== this.textStr && (delete this.bBox, delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this));
          },
          setTextPath: function setTextPath(a, b) {
            var d = this.element,
                n = {
              textAnchor: "text-anchor"
            },
                g = !1,
                z = this.textPathWrapper,
                f = !z;
            b = L(!0, {
              enabled: !0,
              attributes: {
                dy: -5,
                startOffset: "50%",
                textAnchor: "middle"
              }
            }, b);
            var h = b.attributes;

            if (a && b && b.enabled) {
              z && null === z.element.parentNode ? (f = !0, z = z.destroy()) : z && this.removeTextOutline.call(z.parentGroup, [].slice.call(d.getElementsByTagName("tspan")));
              this.options && this.options.padding && (h.dx = -this.options.padding);
              z || (this.textPathWrapper = z = this.renderer.createElement("textPath"), g = !0);
              var t = z.element;
              (b = a.element.getAttribute("id")) || a.element.setAttribute("id", b = c.uniqueKey());
              if (f) for (a = d.getElementsByTagName("tspan"); a.length;) {
                a[0].setAttribute("y", 0), B(h.dx) && a[0].setAttribute("x", -h.dx), t.appendChild(a[0]);
              }
              g && z.add({
                element: this.text ? this.text.element : d
              });
              t.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + b);
              G(h.dy) && (t.parentNode.setAttribute("dy", h.dy), delete h.dy);
              G(h.dx) && (t.parentNode.setAttribute("dx", h.dx), delete h.dx);
              m(h, function (a, b) {
                t.setAttribute(n[b] || b, a);
              });
              d.removeAttribute("transform");
              this.removeTextOutline.call(z, [].slice.call(d.getElementsByTagName("tspan")));
              this.text && !this.renderer.styledMode && this.attr({
                fill: "none",
                "stroke-width": 0
              });
              this.applyTextOutline = this.updateTransform = E;
            } else z && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(d, a), this.updateTransform(), this.options.rotation && this.applyTextOutline(this.options.style.textOutline));

            return this;
          },
          destroyTextPath: function destroyTextPath(a, b) {
            var d = a.getElementsByTagName("text")[0];

            if (d) {
              if (d.removeAttribute("dx"), d.removeAttribute("dy"), b.element.setAttribute("id", ""), d.getElementsByTagName("textPath").length) {
                for (a = this.textPathWrapper.element.childNodes; a.length;) {
                  d.appendChild(a[0]);
                }

                d.removeChild(this.textPathWrapper.element);
              }
            } else if (a.getAttribute("dx") || a.getAttribute("dy")) a.removeAttribute("dx"), a.removeAttribute("dy");

            this.textPathWrapper = this.textPathWrapper.destroy();
          },
          fillSetter: function fillSetter(a, b, d) {
            "string" === typeof a ? d.setAttribute(b, a) : a && this.complexColor(a, b, d);
          },
          visibilitySetter: function visibilitySetter(a, b, d) {
            "inherit" === a ? d.removeAttribute(b) : this[b] !== a && d.setAttribute(b, a);
            this[b] = a;
          },
          zIndexSetter: function zIndexSetter(a, b) {
            var d = this.renderer,
                n = this.parentGroup,
                g = (n || d).element || d.box,
                z = this.element,
                f = !1;
            d = g === d.box;
            var h = this.added;
            var t;
            G(a) ? (z.setAttribute("data-z-index", a), a = +a, this[b] === a && (h = !1)) : G(this[b]) && z.removeAttribute("data-z-index");
            this[b] = a;

            if (h) {
              (a = this.zIndex) && n && (n.handleZ = !0);
              b = g.childNodes;

              for (t = b.length - 1; 0 <= t && !f; t--) {
                n = b[t];
                h = n.getAttribute("data-z-index");
                var l = !G(h);
                if (n !== z) if (0 > a && l && !d && !t) g.insertBefore(z, b[t]), f = !0;else if (D(h) <= a || l && (!G(a) || 0 <= a)) g.insertBefore(z, b[t + 1] || null), f = !0;
              }

              f || (g.insertBefore(z, b[d ? 3 : 0] || null), f = !0);
            }

            return f;
          },
          _defaultSetter: function _defaultSetter(a, b, d) {
            d.setAttribute(b, a);
          }
        });
        P.prototype.yGetter = P.prototype.xGetter;

        P.prototype.translateXSetter = P.prototype.translateYSetter = P.prototype.rotationSetter = P.prototype.verticalAlignSetter = P.prototype.rotationOriginXSetter = P.prototype.rotationOriginYSetter = P.prototype.scaleXSetter = P.prototype.scaleYSetter = P.prototype.matrixSetter = function (a, b) {
          this[b] = a;
          this.doTransform = !0;
        };

        P.prototype["stroke-widthSetter"] = P.prototype.strokeSetter = function (a, b, d) {
          this[b] = a;
          this.stroke && this["stroke-width"] ? (P.prototype.fillSetter.call(this, this.stroke, "stroke", d), d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke ? (d.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
        };

        e = c.SVGRenderer = function () {
          this.init.apply(this, arguments);
        };

        q(e.prototype, {
          Element: P,
          SVG_NS: O,
          init: function init(a, b, d, n, z, t, l) {
            var K = this.createElement("svg").attr({
              version: "1.1",
              "class": "highcharts-root"
            });
            l || K.css(this.getStyle(n));
            n = K.element;
            a.appendChild(n);
            I(a, "dir", "ltr");
            -1 === a.innerHTML.indexOf("xmlns") && I(n, "xmlns", this.SVG_NS);
            this.isSVG = !0;
            this.box = n;
            this.boxWrapper = K;
            this.alignedObjects = [];
            this.url = (g || x) && y.getElementsByTagName("base").length ? T.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(y.createTextNode("Created with Highcharts 8.0.0"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = t;
            this.forExport = z;
            this.styledMode = l;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.setSize(b, d, !1);
            var c;
            g && a.getBoundingClientRect && (b = function b() {
              h(a, {
                left: 0,
                top: 0
              });
              c = a.getBoundingClientRect();
              h(a, {
                left: Math.ceil(c.left) - c.left + "px",
                top: Math.ceil(c.top) - c.top + "px"
              });
            }, b(), this.unSubPixelFix = f(T, "resize", b));
          },
          definition: function definition(a) {
            function b(a, n) {
              var g;
              A(a).forEach(function (a) {
                var z = d.createElement(a.tagName),
                    f = {};
                m(a, function (a, b) {
                  "tagName" !== b && "children" !== b && "textContent" !== b && (f[b] = a);
                });
                z.attr(f);
                z.add(n || d.defs);
                a.textContent && z.element.appendChild(y.createTextNode(a.textContent));
                b(a.children || [], z);
                g = z;
              });
              return g;
            }

            var d = this;
            return b(a);
          },
          getStyle: function getStyle(a) {
            return this.style = q({
              fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
              fontSize: "12px"
            }, a);
          },
          setStyle: function setStyle(a) {
            this.boxWrapper.css(this.getStyle(a));
          },
          isHidden: function isHidden() {
            return !this.boxWrapper.getBBox().width;
          },
          destroy: function destroy() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            H(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.unSubPixelFix && this.unSubPixelFix();
            return this.alignedObjects = null;
          },
          createElement: function createElement(a) {
            var b = new this.Element();
            b.init(this, a);
            return b;
          },
          draw: E,
          getRadialAttr: function getRadialAttr(a, b) {
            return {
              cx: a[0] - a[2] / 2 + b.cx * a[2],
              cy: a[1] - a[2] / 2 + b.cy * a[2],
              r: b.r * a[2]
            };
          },
          truncate: function truncate(a, b, d, n, g, z, f) {
            var h = this,
                t = a.rotation,
                l,
                K = n ? 1 : 0,
                x = (d || n).length,
                c = x,
                k = [],
                N = function N(a) {
              b.firstChild && b.removeChild(b.firstChild);
              a && b.appendChild(y.createTextNode(a));
            },
                p = function p(z, t) {
              t = t || z;
              if ("undefined" === typeof k[t]) if (b.getSubStringLength) try {
                k[t] = g + b.getSubStringLength(0, n ? t + 1 : t);
              } catch (ea) {
                "";
              } else h.getSpanWidth && (N(f(d || n, z)), k[t] = g + h.getSpanWidth(a, b));
              return k[t];
            },
                R;

            a.rotation = 0;
            var O = p(b.textContent.length);

            if (R = g + O > z) {
              for (; K <= x;) {
                c = Math.ceil((K + x) / 2), n && (l = f(n, c)), O = p(c, l && l.length - 1), K === x ? K = x + 1 : O > z ? x = c - 1 : K = c;
              }

              0 === x ? N("") : d && x === d.length - 1 || N(l || f(d || n, c));
            }

            n && n.splice(0, c);
            a.actualWidth = O;
            a.rotation = t;
            return R;
          },
          escapes: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
          },
          buildText: function buildText(a) {
            var b = a.element,
                d = this,
                n = d.forExport,
                g = r(a.textStr, "").toString(),
                z = -1 !== g.indexOf("<"),
                f = b.childNodes,
                t,
                l = I(b, "x"),
                x = a.styles,
                c = a.textWidth,
                k = x && x.lineHeight,
                p = x && x.textOutline,
                L = x && "ellipsis" === x.textOverflow,
                E = x && "nowrap" === x.whiteSpace,
                A = x && x.fontSize,
                Q,
                e = f.length;
            x = c && !a.added && this.box;

            var V = function V(a) {
              var n;
              d.styledMode || (n = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : A || d.style.fontSize || 12);
              return k ? D(k) : d.fontMetrics(n, a.getAttribute("style") ? a : b).h;
            },
                q = function q(a, b) {
              m(d.escapes, function (d, n) {
                b && -1 !== b.indexOf(d) || (a = a.toString().replace(new RegExp(d, "g"), n));
              });
              return a;
            },
                P = function P(a, b) {
              var d = a.indexOf("<");
              a = a.substring(d, a.indexOf(">") - d);
              d = a.indexOf(b + "=");
              if (-1 !== d && (d = d + b.length + 1, b = a.charAt(d), '"' === b || "'" === b)) return a = a.substring(d + 1), a.substring(0, a.indexOf(b));
            },
                T = /<br.*?>/g;

            var u = [g, L, E, k, p, A, c].join();

            if (u !== a.textCache) {
              for (a.textCache = u; e--;) {
                b.removeChild(f[e]);
              }

              z || p || L || c || -1 !== g.indexOf(" ") && (!E || T.test(g)) ? (x && x.appendChild(b), z ? (g = d.styledMode ? g.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : g.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), g = g.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(T)) : g = [g], g = g.filter(function (a) {
                return "" !== a;
              }), g.forEach(function (g, z) {
                var f = 0,
                    x = 0;
                g = g.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                var K = g.split("|||");
                K.forEach(function (g) {
                  if ("" !== g || 1 === K.length) {
                    var k = {},
                        p = y.createElementNS(d.SVG_NS, "tspan"),
                        R,
                        r;
                    (R = P(g, "class")) && I(p, "class", R);
                    if (R = P(g, "style")) R = R.replace(/(;| |^)color([ :])/, "$1fill$2"), I(p, "style", R);
                    (r = P(g, "href")) && !n && (I(p, "onclick", 'location.href="' + r + '"'), I(p, "class", "highcharts-anchor"), d.styledMode || h(p, {
                      cursor: "pointer"
                    }));
                    g = q(g.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");

                    if (" " !== g) {
                      p.appendChild(y.createTextNode(g));
                      f ? k.dx = 0 : z && null !== l && (k.x = l);
                      I(p, k);
                      b.appendChild(p);
                      !f && Q && (!N && n && h(p, {
                        display: "block"
                      }), I(p, "dy", V(p)));

                      if (c) {
                        var m = g.replace(/([^\^])-/g, "$1- ").split(" ");
                        k = !E && (1 < K.length || z || 1 < m.length);
                        r = 0;
                        var e = V(p);
                        if (L) t = d.truncate(a, p, g, void 0, 0, Math.max(0, c - parseInt(A || 12, 10)), function (a, b) {
                          return a.substring(0, b) + "\u2026";
                        });else if (k) for (; m.length;) {
                          m.length && !E && 0 < r && (p = y.createElementNS(O, "tspan"), I(p, {
                            dy: e,
                            x: l
                          }), R && I(p, "style", R), p.appendChild(y.createTextNode(m.join(" ").replace(/- /g, "-"))), b.appendChild(p)), d.truncate(a, p, null, m, 0 === r ? x : 0, c, function (a, b) {
                            return m.slice(0, b).join(" ").replace(/- /g, "-");
                          }), x = a.actualWidth, r++;
                        }
                      }

                      f++;
                    }
                  }
                });
                Q = Q || b.childNodes.length;
              }), L && t && a.attr("title", q(a.textStr, ["&lt;", "&gt;"])), x && x.removeChild(b), p && a.applyTextOutline && a.applyTextOutline(p)) : b.appendChild(y.createTextNode(q(g)));
            }
          },
          getContrast: function getContrast(a) {
            a = d(a).rgba;
            a[0] *= 1;
            a[1] *= 1.2;
            a[2] *= .5;
            return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
          },
          button: function button(a, b, d, n, g, z, h, l, x, c) {
            var K = this.label(a, b, d, x, null, null, c, null, "button"),
                k = 0,
                N = this.styledMode;
            K.attr(L({
              padding: 8,
              r: 2
            }, g));

            if (!N) {
              g = L({
                fill: "#f7f7f7",
                stroke: "#cccccc",
                "stroke-width": 1,
                style: {
                  color: "#333333",
                  cursor: "pointer",
                  fontWeight: "normal"
                }
              }, g);
              var p = g.style;
              delete g.style;
              z = L(g, {
                fill: "#e6e6e6"
              }, z);
              var O = z.style;
              delete z.style;
              h = L(g, {
                fill: "#e6ebf5",
                style: {
                  color: "#000000",
                  fontWeight: "bold"
                }
              }, h);
              var R = h.style;
              delete h.style;
              l = L(g, {
                style: {
                  color: "#cccccc"
                }
              }, l);
              var E = l.style;
              delete l.style;
            }

            f(K.element, t ? "mouseover" : "mouseenter", function () {
              3 !== k && K.setState(1);
            });
            f(K.element, t ? "mouseout" : "mouseleave", function () {
              3 !== k && K.setState(k);
            });

            K.setState = function (a) {
              1 !== a && (K.state = k = a);
              K.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
              N || K.attr([g, z, h, l][a || 0]).css([p, O, R, E][a || 0]);
            };

            N || K.attr(g).css(q({
              cursor: "default"
            }, p));
            return K.on("click", function (a) {
              3 !== k && n.call(K, a);
            });
          },
          crispLine: function crispLine(a, b) {
            a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + b % 2 / 2);
            return a;
          },
          path: function path(a) {
            var b = this.styledMode ? {} : {
              fill: "none"
            };
            C(a) ? b.d = a : u(a) && q(b, a);
            return this.createElement("path").attr(b);
          },
          circle: function circle(a, b, d) {
            a = u(a) ? a : "undefined" === typeof a ? {} : {
              x: a,
              y: b,
              r: d
            };
            b = this.createElement("circle");

            b.xSetter = b.ySetter = function (a, b, d) {
              d.setAttribute("c" + b, a);
            };

            return b.attr(a);
          },
          arc: function arc(a, b, d, n, g, z) {
            u(a) ? (n = a, b = n.y, d = n.r, a = n.x) : n = {
              innerR: n,
              start: g,
              end: z
            };
            a = this.symbol("arc", a, b, d, d, n);
            a.r = d;
            return a;
          },
          rect: function rect(a, b, d, n, g, z) {
            g = u(a) ? a.r : g;
            var f = this.createElement("rect");
            a = u(a) ? a : "undefined" === typeof a ? {} : {
              x: a,
              y: b,
              width: Math.max(d, 0),
              height: Math.max(n, 0)
            };
            this.styledMode || ("undefined" !== typeof z && (a.strokeWidth = z, a = f.crisp(a)), a.fill = "none");
            g && (a.r = g);

            f.rSetter = function (a, b, d) {
              f.r = a;
              I(d, {
                rx: a,
                ry: a
              });
            };

            f.rGetter = function () {
              return f.r;
            };

            return f.attr(a);
          },
          setSize: function setSize(a, b, d) {
            var n = this.alignedObjects,
                g = n.length;
            this.width = a;
            this.height = b;

            for (this.boxWrapper.animate({
              width: a,
              height: b
            }, {
              step: function step() {
                this.attr({
                  viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                });
              },
              duration: r(d, !0) ? void 0 : 0
            }); g--;) {
              n[g].align();
            }
          },
          g: function g(a) {
            var b = this.createElement("g");
            return a ? b.attr({
              "class": "highcharts-" + a
            }) : b;
          },
          image: function image(a, b, d, n, g, z) {
            var h = {
              preserveAspectRatio: "none"
            },
                t = function t(a, b) {
              a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", b) : a.setAttribute("hc-svg-href", b);
            },
                l = function l(b) {
              t(x.element, a);
              z.call(x, b);
            };

            1 < arguments.length && q(h, {
              x: b,
              y: d,
              width: n,
              height: g
            });
            var x = this.createElement("image").attr(h);
            z ? (t(x.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), h = new T.Image(), f(h, "load", l), h.src = a, h.complete && l({})) : t(x.element, a);
            return x;
          },
          symbol: function symbol(b, d, n, g, z, f) {
            var t = this,
                l = /^url\((.*?)\)$/,
                x = l.test(b),
                c = !x && (this.symbols[b] ? b : "circle"),
                K = c && this.symbols[c],
                N = G(d) && K && K.call(this.symbols, Math.round(d), Math.round(n), g, z, f);

            if (K) {
              var p = this.path(N);
              t.styledMode || p.attr("fill", "none");
              q(p, {
                symbolName: c,
                x: d,
                y: n,
                width: g,
                height: z
              });
              f && q(p, f);
            } else if (x) {
              var O = b.match(l)[1];
              p = this.image(O);
              p.imgwidth = r(V[O] && V[O].width, f && f.width);
              p.imgheight = r(V[O] && V[O].height, f && f.height);

              var R = function R() {
                p.attr({
                  width: p.width,
                  height: p.height
                });
              };

              ["width", "height"].forEach(function (a) {
                p[a + "Setter"] = function (a, b) {
                  var d = {},
                      n = this["img" + b],
                      g = "width" === b ? "translateX" : "translateY";
                  this[b] = a;
                  G(n) && (f && "within" === f.backgroundSize && this.width && this.height && (n = Math.round(n * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(b, n), this.alignByTranslate || (d[g] = ((this[b] || 0) - n) / 2, this.attr(d)));
                };
              });
              G(d) && p.attr({
                x: d,
                y: n
              });
              p.isImg = !0;
              G(p.imgwidth) && G(p.imgheight) ? R() : (p.attr({
                width: 0,
                height: 0
              }), k("img", {
                onload: function onload() {
                  var b = a[t.chartIndex];
                  0 === this.width && (h(this, {
                    position: "absolute",
                    top: "-999em"
                  }), y.body.appendChild(this));
                  V[O] = {
                    width: this.width,
                    height: this.height
                  };
                  p.imgwidth = this.width;
                  p.imgheight = this.height;
                  p.element && R();
                  this.parentNode && this.parentNode.removeChild(this);
                  t.imgCount--;
                  if (!t.imgCount && b && b.onload) b.onload();
                },
                src: O
              }), this.imgCount++);
            }

            return p;
          },
          symbols: {
            circle: function circle(a, b, d, n) {
              return this.arc(a + d / 2, b + n / 2, d / 2, n / 2, {
                start: .5 * Math.PI,
                end: 2.5 * Math.PI,
                open: !1
              });
            },
            square: function square(a, b, d, n) {
              return ["M", a, b, "L", a + d, b, a + d, b + n, a, b + n, "Z"];
            },
            triangle: function triangle(a, b, d, n) {
              return ["M", a + d / 2, b, "L", a + d, b + n, a, b + n, "Z"];
            },
            "triangle-down": function triangleDown(a, b, d, n) {
              return ["M", a, b, "L", a + d, b, a + d / 2, b + n, "Z"];
            },
            diamond: function diamond(a, b, d, n) {
              return ["M", a + d / 2, b, "L", a + d, b + n / 2, a + d / 2, b + n, a, b + n / 2, "Z"];
            },
            arc: function arc(a, b, d, n, g) {
              var z = g.start,
                  f = g.r || d,
                  h = g.r || n || d,
                  t = g.end - .001;
              d = g.innerR;
              n = r(g.open, .001 > Math.abs(g.end - g.start - 2 * Math.PI));
              var l = Math.cos(z),
                  x = Math.sin(z),
                  c = Math.cos(t);
              t = Math.sin(t);
              z = r(g.longArc, .001 > g.end - z - Math.PI ? 0 : 1);
              f = ["M", a + f * l, b + h * x, "A", f, h, 0, z, r(g.clockwise, 1), a + f * c, b + h * t];
              G(d) && f.push(n ? "M" : "L", a + d * c, b + d * t, "A", d, d, 0, z, G(g.clockwise) ? 1 - g.clockwise : 0, a + d * l, b + d * x);
              f.push(n ? "" : "Z");
              return f;
            },
            callout: function callout(a, b, d, n, g) {
              var z = Math.min(g && g.r || 0, d, n),
                  f = z + 6,
                  h = g && g.anchorX;
              g = g && g.anchorY;
              var t = ["M", a + z, b, "L", a + d - z, b, "C", a + d, b, a + d, b, a + d, b + z, "L", a + d, b + n - z, "C", a + d, b + n, a + d, b + n, a + d - z, b + n, "L", a + z, b + n, "C", a, b + n, a, b + n, a, b + n - z, "L", a, b + z, "C", a, b, a, b, a + z, b];
              h && h > d ? g > b + f && g < b + n - f ? t.splice(13, 3, "L", a + d, g - 6, a + d + 6, g, a + d, g + 6, a + d, b + n - z) : t.splice(13, 3, "L", a + d, n / 2, h, g, a + d, n / 2, a + d, b + n - z) : h && 0 > h ? g > b + f && g < b + n - f ? t.splice(33, 3, "L", a, g + 6, a - 6, g, a, g - 6, a, b + z) : t.splice(33, 3, "L", a, n / 2, h, g, a, n / 2, a, b + z) : g && g > n && h > a + f && h < a + d - f ? t.splice(23, 3, "L", h + 6, b + n, h, b + n + 6, h - 6, b + n, a + z, b + n) : g && 0 > g && h > a + f && h < a + d - f && t.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, d - z, b);
              return t;
            }
          },
          clipRect: function clipRect(a, b, d, n) {
            var g = c.uniqueKey() + "-",
                z = this.createElement("clipPath").attr({
              id: g
            }).add(this.defs);
            a = this.rect(a, b, d, n, 0).add(z);
            a.id = g;
            a.clipPath = z;
            a.count = 0;
            return a;
          },
          text: function text(a, b, d, n) {
            var g = {};
            if (n && (this.allowHTML || !this.forExport)) return this.html(a, b, d);
            g.x = Math.round(b || 0);
            d && (g.y = Math.round(d));
            G(a) && (g.text = a);
            a = this.createElement("text").attr(g);
            n || (a.xSetter = function (a, b, d) {
              var n = d.getElementsByTagName("tspan"),
                  g = d.getAttribute(b),
                  z;

              for (z = 0; z < n.length; z++) {
                var f = n[z];
                f.getAttribute(b) === g && f.setAttribute(b, a);
              }

              d.setAttribute(b, a);
            });
            return a;
          },
          fontMetrics: function fontMetrics(a, b) {
            a = !this.styledMode && /px/.test(a) || !T.getComputedStyle ? a || b && b.style && b.style.fontSize || this.style && this.style.fontSize : b && P.prototype.getStyle.call(b, "font-size");
            a = /px/.test(a) ? D(a) : 12;
            b = 24 > a ? a + 3 : Math.round(1.2 * a);
            return {
              h: b,
              b: Math.round(.8 * b),
              f: a
            };
          },
          rotCorr: function rotCorr(a, b, d) {
            var n = a;
            b && d && (n = Math.max(n * Math.cos(b * l), 4));
            return {
              x: -a / 3 * Math.sin(b * l),
              y: n
            };
          },
          label: function label(a, b, d, g, z, f, h, t, l) {
            var x = this,
                c = x.styledMode,
                k = x.g("button" !== l && "label"),
                p = k.text = x.text("", 0, 0, h).attr({
              zIndex: 1
            }),
                N,
                K,
                O = 0,
                E = 3,
                r = 0,
                A,
                y,
                m,
                R,
                e,
                D = {},
                V,
                T,
                da = /^url\((.*?)\)$/.test(g),
                u = c || da,
                v = function v() {
              return c ? N.strokeWidth() % 2 / 2 : (V ? parseInt(V, 10) : 0) % 2 / 2;
            };

            l && k.addClass("highcharts-" + l);

            var w = function w() {
              var a = p.element.style,
                  b = {};
              K = ("undefined" === typeof A || "undefined" === typeof y || e) && G(p.textStr) && p.getBBox();
              k.width = (A || K.width || 0) + 2 * E + r;
              k.height = (y || K.height || 0) + 2 * E;
              T = E + Math.min(x.fontMetrics(a && a.fontSize, p).b, K ? K.height : Infinity);
              u && (N || (k.box = N = x.symbols[g] || da ? x.symbol(g) : x.rect(), N.addClass(("button" === l ? "" : "highcharts-label-box") + (l ? " highcharts-" + l + "-box" : "")), N.add(k), a = v(), b.x = a, b.y = (t ? -T : 0) + a), b.width = Math.round(k.width), b.height = Math.round(k.height), N.attr(q(b, D)), D = {});
            };

            var Q = function Q() {
              var a = r + E;
              var b = t ? 0 : T;
              G(A) && K && ("center" === e || "right" === e) && (a += {
                center: .5,
                right: 1
              }[e] * (A - K.width));
              if (a !== p.x || b !== p.y) p.attr("x", a), p.hasBoxWidthChanged && (K = p.getBBox(!0), w()), "undefined" !== typeof b && p.attr("y", b);
              p.x = a;
              p.y = b;
            };

            var U = function U(a, b) {
              N ? N.attr(a, b) : D[a] = b;
            };

            k.onAdd = function () {
              p.add(k);
              k.attr({
                text: a || 0 === a ? a : "",
                x: b,
                y: d
              });
              N && G(z) && k.attr({
                anchorX: z,
                anchorY: f
              });
            };

            k.widthSetter = function (a) {
              A = B(a) ? a : null;
            };

            k.heightSetter = function (a) {
              y = a;
            };

            k["text-alignSetter"] = function (a) {
              e = a;
            };

            k.paddingSetter = function (a) {
              G(a) && a !== E && (E = k.padding = a, Q());
            };

            k.paddingLeftSetter = function (a) {
              G(a) && a !== r && (r = a, Q());
            };

            k.alignSetter = function (a) {
              a = {
                left: 0,
                center: .5,
                right: 1
              }[a];
              a !== O && (O = a, K && k.attr({
                x: m
              }));
            };

            k.textSetter = function (a) {
              "undefined" !== typeof a && p.attr({
                text: a
              });
              w();
              Q();
            };

            k["stroke-widthSetter"] = function (a, b) {
              a && (u = !0);
              V = this["stroke-width"] = a;
              U(b, a);
            };

            c ? k.rSetter = function (a, b) {
              U(b, a);
            } : k.strokeSetter = k.fillSetter = k.rSetter = function (a, b) {
              "r" !== b && ("fill" === b && a && (u = !0), k[b] = a);
              U(b, a);
            };

            k.anchorXSetter = function (a, b) {
              z = k.anchorX = a;
              U(b, Math.round(a) - v() - m);
            };

            k.anchorYSetter = function (a, b) {
              f = k.anchorY = a;
              U(b, a - R);
            };

            k.xSetter = function (a) {
              k.x = a;
              O && (a -= O * ((A || K.width) + 2 * E), k["forceAnimate:x"] = !0);
              m = Math.round(a);
              k.attr("translateX", m);
            };

            k.ySetter = function (a) {
              R = k.y = Math.round(a);
              k.attr("translateY", R);
            };

            var C = k.css;
            h = {
              css: function css(a) {
                if (a) {
                  var b = {};
                  a = L(a);
                  k.textProps.forEach(function (d) {
                    "undefined" !== typeof a[d] && (b[d] = a[d], delete a[d]);
                  });
                  p.css(b);
                  "width" in b && w();
                  "fontSize" in b && (w(), Q());
                }

                return C.call(k, a);
              },
              getBBox: function getBBox() {
                return {
                  width: K.width + 2 * E,
                  height: K.height + 2 * E,
                  x: K.x - E,
                  y: K.y - E
                };
              },
              destroy: function destroy() {
                n(k.element, "mouseenter");
                n(k.element, "mouseleave");
                p && (p = p.destroy());
                N && (N = N.destroy());
                P.prototype.destroy.call(k);
                k = x = w = Q = U = null;
              }
            };
            c || (h.shadow = function (a) {
              a && (w(), N && N.shadow(a));
              return k;
            });
            return q(k, h);
          }
        });
        c.Renderer = e;
      });
      M(J, "parts/Html.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.attr,
            I = e.defined,
            G = e.extend,
            H = e.pick,
            v = e.pInt,
            q = c.createElement,
            C = c.css,
            B = c.isFirefox,
            u = c.isMS,
            w = c.isWebKit,
            m = c.SVGElement;
        e = c.SVGRenderer;
        var r = c.win;
        G(m.prototype, {
          htmlCss: function htmlCss(c) {
            var r = "SPAN" === this.element.tagName && c && "width" in c,
                f = H(r && c.width, void 0);

            if (r) {
              delete c.width;
              this.textWidth = f;
              var b = !0;
            }

            c && "ellipsis" === c.textOverflow && (c.whiteSpace = "nowrap", c.overflow = "hidden");
            this.styles = G(this.styles, c);
            C(this.element, c);
            b && this.htmlUpdateTransform();
            return this;
          },
          htmlGetBBox: function htmlGetBBox() {
            var c = this.element;
            return {
              x: c.offsetLeft,
              y: c.offsetTop,
              width: c.offsetWidth,
              height: c.offsetHeight
            };
          },
          htmlUpdateTransform: function htmlUpdateTransform() {
            if (this.added) {
              var c = this.renderer,
                  r = this.element,
                  f = this.translateX || 0,
                  b = this.translateY || 0,
                  a = this.x || 0,
                  d = this.y || 0,
                  h = this.textAlign || "left",
                  k = {
                left: 0,
                center: .5,
                right: 1
              }[h],
                  l = this.styles,
                  y = l && l.whiteSpace;
              C(r, {
                marginLeft: f,
                marginTop: b
              });
              !c.styledMode && this.shadows && this.shadows.forEach(function (a) {
                C(a, {
                  marginLeft: f + 1,
                  marginTop: b + 1
                });
              });
              this.inverted && [].forEach.call(r.childNodes, function (a) {
                c.invertChild(a, r);
              });

              if ("SPAN" === r.tagName) {
                l = this.rotation;
                var p = this.textWidth && v(this.textWidth),
                    g = [l, h, r.innerHTML, this.textWidth, this.textAlign].join(),
                    t;
                (t = p !== this.oldTextWidth) && !(t = p > this.oldTextWidth) && ((t = this.textPxLength) || (C(r, {
                  width: "",
                  whiteSpace: y || "nowrap"
                }), t = r.offsetWidth), t = t > p);
                t && (/[ \-]/.test(r.textContent || r.innerText) || "ellipsis" === r.style.textOverflow) ? (C(r, {
                  width: p + "px",
                  display: "block",
                  whiteSpace: y || "normal"
                }), this.oldTextWidth = p, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
                g !== this.cTT && (y = c.fontMetrics(r.style.fontSize, r).b, !I(l) || l === (this.oldRotation || 0) && h === this.oldAlign || this.setSpanRotation(l, k, y), this.getSpanCorrection(!I(l) && this.textPxLength || r.offsetWidth, y, k, l, h));
                C(r, {
                  left: a + (this.xCorr || 0) + "px",
                  top: d + (this.yCorr || 0) + "px"
                });
                this.cTT = g;
                this.oldRotation = l;
                this.oldAlign = h;
              }
            } else this.alignOnAdd = !0;
          },
          setSpanRotation: function setSpanRotation(c, r, f) {
            var b = {},
                a = this.renderer.getTransformKey();
            b[a] = b.transform = "rotate(" + c + "deg)";
            b[a + (B ? "Origin" : "-origin")] = b.transformOrigin = 100 * r + "% " + f + "px";
            C(this.element, b);
          },
          getSpanCorrection: function getSpanCorrection(c, r, f) {
            this.xCorr = -c * f;
            this.yCorr = -r;
          }
        });
        G(e.prototype, {
          getTransformKey: function getTransformKey() {
            return u && !/Edge/.test(r.navigator.userAgent) ? "-ms-transform" : w ? "-webkit-transform" : B ? "MozTransform" : r.opera ? "-o-transform" : "";
          },
          html: function html(c, r, f) {
            var b = this.createElement("span"),
                a = b.element,
                d = b.renderer,
                h = d.isSVG,
                k = function k(a, b) {
              ["opacity", "visibility"].forEach(function (d) {
                a[d + "Setter"] = function (g, f, h) {
                  var t = a.div ? a.div.style : b;
                  m.prototype[d + "Setter"].call(this, g, f, h);
                  t && (t[f] = g);
                };
              });
              a.addedSetters = !0;
            };

            b.textSetter = function (d) {
              d !== a.innerHTML && (delete this.bBox, delete this.oldTextWidth);
              this.textStr = d;
              a.innerHTML = H(d, "");
              b.doTransform = !0;
            };

            h && k(b, b.element.style);

            b.xSetter = b.ySetter = b.alignSetter = b.rotationSetter = function (a, d) {
              "align" === d && (d = "textAlign");
              b[d] = a;
              b.doTransform = !0;
            };

            b.afterSetters = function () {
              this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
            };

            b.attr({
              text: c,
              x: Math.round(r),
              y: Math.round(f)
            }).css({
              position: "absolute"
            });
            d.styledMode || b.css({
              fontFamily: this.style.fontFamily,
              fontSize: this.style.fontSize
            });
            a.style.whiteSpace = "nowrap";
            b.css = b.htmlCss;
            h && (b.add = function (f) {
              var h = d.box.parentNode,
                  l = [];

              if (this.parentGroup = f) {
                var g = f.div;

                if (!g) {
                  for (; f;) {
                    l.push(f), f = f.parentGroup;
                  }

                  l.reverse().forEach(function (a) {
                    function d(b, d) {
                      a[d] = b;
                      "translateX" === d ? t.left = b + "px" : t.top = b + "px";
                      a.doTransform = !0;
                    }

                    var f = F(a.element, "class");
                    g = a.div = a.div || q("div", f ? {
                      className: f
                    } : void 0, {
                      position: "absolute",
                      left: (a.translateX || 0) + "px",
                      top: (a.translateY || 0) + "px",
                      display: a.display,
                      opacity: a.opacity,
                      pointerEvents: a.styles && a.styles.pointerEvents
                    }, g || h);
                    var t = g.style;
                    G(a, {
                      classSetter: function (a) {
                        return function (b) {
                          this.element.setAttribute("class", b);
                          a.className = b;
                        };
                      }(g),
                      on: function on() {
                        l[0].div && b.on.apply({
                          element: l[0].div
                        }, arguments);
                        return a;
                      },
                      translateXSetter: d,
                      translateYSetter: d
                    });
                    a.addedSetters || k(a);
                  });
                }
              } else g = h;

              g.appendChild(a);
              b.added = !0;
              b.alignOnAdd && b.htmlUpdateTransform();
              return b;
            });
            return b;
          }
        });
      });
      M(J, "parts/Time.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.defined,
            I = e.extend,
            G = e.isObject,
            H = e.objectEach,
            v = e.pad,
            q = e.pick,
            C = e.splat,
            B = c.merge,
            u = c.timeUnits,
            w = c.win;

        c.Time = function (c) {
          this.update(c, !1);
        };

        c.Time.prototype = {
          defaultOptions: {
            Date: void 0,
            getTimezoneOffset: void 0,
            timezone: void 0,
            timezoneOffset: 0,
            useUTC: !0
          },
          update: function update(c) {
            var r = q(c && c.useUTC, !0),
                m = this;
            this.options = c = B(!0, this.options || {}, c);
            this.Date = c.Date || w.Date || Date;
            this.timezoneOffset = (this.useUTC = r) && c.timezoneOffset;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            (this.variableTimezone = !(r && !c.getTimezoneOffset && !c.timezone)) || this.timezoneOffset ? (this.get = function (c, f) {
              var b = f.getTime(),
                  a = b - m.getTimezoneOffset(f);
              f.setTime(a);
              c = f["getUTC" + c]();
              f.setTime(b);
              return c;
            }, this.set = function (c, f, b) {
              if ("Milliseconds" === c || "Seconds" === c || "Minutes" === c && 0 === f.getTimezoneOffset() % 60) f["set" + c](b);else {
                var a = m.getTimezoneOffset(f);
                a = f.getTime() - a;
                f.setTime(a);
                f["setUTC" + c](b);
                c = m.getTimezoneOffset(f);
                a = f.getTime() + c;
                f.setTime(a);
              }
            }) : r ? (this.get = function (c, f) {
              return f["getUTC" + c]();
            }, this.set = function (c, f, b) {
              return f["setUTC" + c](b);
            }) : (this.get = function (c, f) {
              return f["get" + c]();
            }, this.set = function (c, f, b) {
              return f["set" + c](b);
            });
          },
          makeTime: function makeTime(m, r, e, A, f, b) {
            if (this.useUTC) {
              var a = this.Date.UTC.apply(0, arguments);
              var d = this.getTimezoneOffset(a);
              a += d;
              var h = this.getTimezoneOffset(a);
              d !== h ? a += h - d : d - 36E5 !== this.getTimezoneOffset(a - 36E5) || c.isSafari || (a -= 36E5);
            } else a = new this.Date(m, r, q(e, 1), q(A, 0), q(f, 0), q(b, 0)).getTime();

            return a;
          },
          timezoneOffsetFunction: function timezoneOffsetFunction() {
            var m = this,
                r = this.options,
                e = w.moment;
            if (!this.useUTC) return function (c) {
              return 6E4 * new Date(c).getTimezoneOffset();
            };

            if (r.timezone) {
              if (e) return function (c) {
                return 6E4 * -e.tz(c, r.timezone).utcOffset();
              };
              c.error(25);
            }

            return this.useUTC && r.getTimezoneOffset ? function (c) {
              return 6E4 * r.getTimezoneOffset(c);
            } : function () {
              return 6E4 * (m.timezoneOffset || 0);
            };
          },
          dateFormat: function dateFormat(m, r, e) {
            if (!F(r) || isNaN(r)) return c.defaultOptions.lang.invalidDate || "";
            m = q(m, "%Y-%m-%d %H:%M:%S");
            var A = this,
                f = new this.Date(r),
                b = this.get("Hours", f),
                a = this.get("Day", f),
                d = this.get("Date", f),
                h = this.get("Month", f),
                k = this.get("FullYear", f),
                l = c.defaultOptions.lang,
                y = l.weekdays,
                p = l.shortWeekdays;
            f = I({
              a: p ? p[a] : y[a].substr(0, 3),
              A: y[a],
              d: v(d),
              e: v(d, 2, " "),
              w: a,
              b: l.shortMonths[h],
              B: l.months[h],
              m: v(h + 1),
              o: h + 1,
              y: k.toString().substr(2, 2),
              Y: k,
              H: v(b),
              k: b,
              I: v(b % 12 || 12),
              l: b % 12 || 12,
              M: v(A.get("Minutes", f)),
              p: 12 > b ? "AM" : "PM",
              P: 12 > b ? "am" : "pm",
              S: v(f.getSeconds()),
              L: v(Math.floor(r % 1E3), 3)
            }, c.dateFormats);
            H(f, function (a, b) {
              for (; -1 !== m.indexOf("%" + b);) {
                m = m.replace("%" + b, "function" === typeof a ? a.call(A, r) : a);
              }
            });
            return e ? m.substr(0, 1).toUpperCase() + m.substr(1) : m;
          },
          resolveDTLFormat: function resolveDTLFormat(c) {
            return G(c, !0) ? c : (c = C(c), {
              main: c[0],
              from: c[1],
              to: c[2]
            });
          },
          getTimeTicks: function getTimeTicks(c, r, e, A) {
            var f = this,
                b = [],
                a = {};
            var d = new f.Date(r);
            var h = c.unitRange,
                k = c.count || 1,
                l;
            A = q(A, 1);

            if (F(r)) {
              f.set("Milliseconds", d, h >= u.second ? 0 : k * Math.floor(f.get("Milliseconds", d) / k));
              h >= u.second && f.set("Seconds", d, h >= u.minute ? 0 : k * Math.floor(f.get("Seconds", d) / k));
              h >= u.minute && f.set("Minutes", d, h >= u.hour ? 0 : k * Math.floor(f.get("Minutes", d) / k));
              h >= u.hour && f.set("Hours", d, h >= u.day ? 0 : k * Math.floor(f.get("Hours", d) / k));
              h >= u.day && f.set("Date", d, h >= u.month ? 1 : Math.max(1, k * Math.floor(f.get("Date", d) / k)));

              if (h >= u.month) {
                f.set("Month", d, h >= u.year ? 0 : k * Math.floor(f.get("Month", d) / k));
                var y = f.get("FullYear", d);
              }

              h >= u.year && f.set("FullYear", d, y - y % k);
              h === u.week && (y = f.get("Day", d), f.set("Date", d, f.get("Date", d) - y + A + (y < A ? -7 : 0)));
              y = f.get("FullYear", d);
              A = f.get("Month", d);
              var p = f.get("Date", d),
                  g = f.get("Hours", d);
              r = d.getTime();
              f.variableTimezone && (l = e - r > 4 * u.month || f.getTimezoneOffset(r) !== f.getTimezoneOffset(e));
              r = d.getTime();

              for (d = 1; r < e;) {
                b.push(r), r = h === u.year ? f.makeTime(y + d * k, 0) : h === u.month ? f.makeTime(y, A + d * k) : !l || h !== u.day && h !== u.week ? l && h === u.hour && 1 < k ? f.makeTime(y, A, p, g + d * k) : r + h * k : f.makeTime(y, A, p + d * k * (h === u.day ? 1 : 7)), d++;
              }

              b.push(r);
              h <= u.hour && 1E4 > b.length && b.forEach(function (b) {
                0 === b % 18E5 && "000000000" === f.dateFormat("%H%M%S%L", b) && (a[b] = "day");
              });
            }

            b.info = I(c, {
              higherRanks: a,
              totalRange: h * k
            });
            return b;
          }
        };
      });
      M(J, "parts/Options.js", [J["parts/Globals.js"]], function (c) {
        var e = c.color,
            F = c.merge;
        c.defaultOptions = {
          colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
          },
          global: {},
          time: c.Time.prototype.defaultOptions,
          chart: {
            styledMode: !1,
            borderRadius: 0,
            colorCount: 10,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            resetZoomButton: {
              theme: {
                zIndex: 6
              },
              position: {
                align: "right",
                x: -10,
                y: 10
              }
            },
            width: null,
            height: null,
            borderColor: "#335cad",
            backgroundColor: "#ffffff",
            plotBorderColor: "#cccccc"
          },
          title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            widthAdjust: -44
          },
          subtitle: {
            text: "",
            align: "center",
            widthAdjust: -44
          },
          caption: {
            margin: 15,
            text: "",
            align: "left",
            verticalAlign: "bottom"
          },
          plotOptions: {},
          labels: {
            style: {
              position: "absolute",
              color: "#333333"
            }
          },
          legend: {
            enabled: !0,
            align: "center",
            alignColumns: !0,
            layout: "horizontal",
            labelFormatter: function labelFormatter() {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: {
              activeColor: "#003399",
              inactiveColor: "#cccccc"
            },
            itemStyle: {
              color: "#333333",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              textOverflow: "ellipsis"
            },
            itemHoverStyle: {
              color: "#000000"
            },
            itemHiddenStyle: {
              color: "#cccccc"
            },
            shadow: !1,
            itemCheckboxStyle: {
              position: "absolute",
              width: "13px",
              height: "13px"
            },
            squareSymbol: !0,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
              style: {
                fontWeight: "bold"
              }
            }
          },
          loading: {
            labelStyle: {
              fontWeight: "bold",
              position: "relative",
              top: "45%"
            },
            style: {
              position: "absolute",
              backgroundColor: "#ffffff",
              opacity: .5,
              textAlign: "center"
            }
          },
          tooltip: {
            enabled: !0,
            animation: c.svg,
            borderRadius: 3,
            dateTimeLabelFormats: {
              millisecond: "%A, %b %e, %H:%M:%S.%L",
              second: "%A, %b %e, %H:%M:%S",
              minute: "%A, %b %e, %H:%M",
              hour: "%A, %b %e, %H:%M",
              day: "%A, %b %e, %Y",
              week: "Week from %A, %b %e, %Y",
              month: "%B %Y",
              year: "%Y"
            },
            footerFormat: "",
            padding: 8,
            snap: c.isTouchDevice ? 25 : 10,
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
            backgroundColor: e("#f7f7f7").setOpacity(.85).get(),
            borderWidth: 1,
            shadow: !0,
            style: {
              color: "#333333",
              cursor: "default",
              fontSize: "12px",
              pointerEvents: "none",
              whiteSpace: "nowrap"
            }
          },
          credits: {
            enabled: !0,
            href: "https://www.highcharts.com?credits",
            position: {
              align: "right",
              x: -10,
              verticalAlign: "bottom",
              y: -5
            },
            style: {
              cursor: "pointer",
              color: "#999999",
              fontSize: "9px"
            },
            text: "Highcharts.com"
          }
        };

        c.setOptions = function (e) {
          c.defaultOptions = F(!0, c.defaultOptions, e);
          (e.time || e.global) && c.time.update(F(c.defaultOptions.global, c.defaultOptions.time, e.global, e.time));
          return c.defaultOptions;
        };

        c.getOptions = function () {
          return c.defaultOptions;
        };

        c.defaultPlotOptions = c.defaultOptions.plotOptions;
        c.time = new c.Time(F(c.defaultOptions.global, c.defaultOptions.time));

        c.dateFormat = function (e, G, H) {
          return c.time.dateFormat(e, G, H);
        };

        "";
      });
      M(J, "parts/Tick.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.clamp,
            I = e.correctFloat,
            G = e.defined,
            H = e.destroyObjectProperties,
            v = e.extend,
            q = e.isNumber,
            C = e.objectEach,
            B = e.pick,
            u = c.fireEvent,
            w = c.merge,
            m = c.deg2rad;

        c.Tick = function (c, e, m, f, b) {
          this.axis = c;
          this.pos = e;
          this.type = m || "";
          this.isNewLabel = this.isNew = !0;
          this.parameters = b || {};
          this.tickmarkOffset = this.parameters.tickmarkOffset;
          this.options = this.parameters.options;
          m || f || this.addLabel();
        };

        c.Tick.prototype = {
          addLabel: function addLabel() {
            var c = this,
                e = c.axis,
                m = e.options,
                f = e.chart,
                b = e.categories,
                a = e.names,
                d = c.pos,
                h = B(c.options && c.options.labels, m.labels),
                k = e.tickPositions,
                l = d === k[0],
                y = d === k[k.length - 1];
            a = this.parameters.category || (b ? B(b[d], a[d], d) : d);
            var p = c.label;
            b = (!h.step || 1 === h.step) && 1 === e.tickInterval;
            k = k.info;
            var g, t;

            if (e.isDatetimeAxis && k) {
              var x = f.time.resolveDTLFormat(m.dateTimeLabelFormats[!m.grid && k.higherRanks[d] || k.unitName]);
              var L = x.main;
            }

            c.isFirst = l;
            c.isLast = y;
            c.formatCtx = {
              axis: e,
              chart: f,
              isFirst: l,
              isLast: y,
              dateTimeLabelFormat: L,
              tickPositionInfo: k,
              value: e.isLog ? I(e.lin2log(a)) : a,
              pos: d
            };
            m = e.labelFormatter.call(c.formatCtx, this.formatCtx);
            if (t = x && x.list) c.shortenLabel = function () {
              for (g = 0; g < t.length; g++) {
                if (p.attr({
                  text: e.labelFormatter.call(v(c.formatCtx, {
                    dateTimeLabelFormat: t[g]
                  }))
                }), p.getBBox().width < e.getSlotWidth(c) - 2 * B(h.padding, 5)) return;
              }

              p.attr({
                text: ""
              });
            };
            b && e._addedPlotLB && e.isXAxis && c.moveLabel(m, h);
            G(p) || c.movedLabel ? p && p.textStr !== m && !b && (!p.textWidth || h.style && h.style.width || p.styles.width || p.css({
              width: null
            }), p.attr({
              text: m
            }), p.textPxLength = p.getBBox().width) : (c.label = p = c.createLabel({
              x: 0,
              y: 0
            }, m, h), c.rotation = 0);
          },
          moveLabel: function moveLabel(c, e) {
            var r = this,
                f = r.label,
                b = !1,
                a = r.axis,
                d = a.reversed,
                h = a.chart.inverted;
            f && f.textStr === c ? (r.movedLabel = f, b = !0, delete r.label) : C(a.ticks, function (a) {
              b || a.isNew || a === r || !a.label || a.label.textStr !== c || (r.movedLabel = a.label, b = !0, a.labelPos = r.movedLabel.xy, delete a.label);
            });

            if (!b && (r.labelPos || f)) {
              var k = r.labelPos || f.xy;
              f = h ? k.x : d ? 0 : a.width + a.left;
              a = h ? d ? a.width + a.left : 0 : k.y;
              r.movedLabel = r.createLabel({
                x: f,
                y: a
              }, c, e);
              r.movedLabel && r.movedLabel.attr({
                opacity: 0
              });
            }
          },
          createLabel: function createLabel(c, e, m) {
            var f = this.axis,
                b = f.chart;
            if (c = G(e) && m.enabled ? b.renderer.text(e, c.x, c.y, m.useHTML).add(f.labelGroup) : null) b.styledMode || c.css(w(m.style)), c.textPxLength = c.getBBox().width;
            return c;
          },
          replaceMovedLabel: function replaceMovedLabel() {
            var c = this.label,
                e = this.axis,
                m = e.reversed,
                f = this.axis.chart.inverted;

            if (c && !this.isNew) {
              var b = f ? c.xy.x : m ? e.left : e.width + e.left;
              m = f ? m ? e.width + e.top : e.top : c.xy.y;
              c.animate({
                x: b,
                y: m,
                opacity: 0
              }, void 0, c.destroy);
              delete this.label;
            }

            e.isDirty = !0;
            this.label = this.movedLabel;
            delete this.movedLabel;
          },
          getLabelSize: function getLabelSize() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          },
          handleOverflow: function handleOverflow(c) {
            var e = this.axis,
                r = e.options.labels,
                f = c.x,
                b = e.chart.chartWidth,
                a = e.chart.spacing,
                d = B(e.labelLeft, Math.min(e.pos, a[3]));
            a = B(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, b - a[1]));
            var h = this.label,
                k = this.rotation,
                l = {
              left: 0,
              center: .5,
              right: 1
            }[e.labelAlign || h.attr("align")],
                y = h.getBBox().width,
                p = e.getSlotWidth(this),
                g = p,
                t = 1,
                x,
                L = {};
            if (k || "justify" !== B(r.overflow, "justify")) 0 > k && f - l * y < d ? x = Math.round(f / Math.cos(k * m) - d) : 0 < k && f + l * y > a && (x = Math.round((b - f) / Math.cos(k * m)));else if (b = f + (1 - l) * y, f - l * y < d ? g = c.x + g * (1 - l) - d : b > a && (g = a - c.x + g * l, t = -1), g = Math.min(p, g), g < p && "center" === e.labelAlign && (c.x += t * (p - g - l * (p - Math.min(y, g)))), y > g || e.autoRotation && (h.styles || {}).width) x = g;
            x && (this.shortenLabel ? this.shortenLabel() : (L.width = Math.floor(x), (r.style || {}).textOverflow || (L.textOverflow = "ellipsis"), h.css(L)));
          },
          getPosition: function getPosition(c, e, m, f) {
            var b = this.axis,
                a = b.chart,
                d = f && a.oldChartHeight || a.chartHeight;
            c = {
              x: c ? I(b.translate(e + m, null, null, f) + b.transB) : b.left + b.offset + (b.opposite ? (f && a.oldChartWidth || a.chartWidth) - b.right - b.left : 0),
              y: c ? d - b.bottom + b.offset - (b.opposite ? b.height : 0) : I(d - b.translate(e + m, null, null, f) - b.transB)
            };
            c.y = F(c.y, -1E5, 1E5);
            u(this, "afterGetPosition", {
              pos: c
            });
            return c;
          },
          getLabelPosition: function getLabelPosition(c, e, A, f, b, a, d, h) {
            var k = this.axis,
                l = k.transA,
                r = k.isLinked && k.linkedParent ? k.linkedParent.reversed : k.reversed,
                p = k.staggerLines,
                g = k.tickRotCorr || {
              x: 0,
              y: 0
            },
                t = b.y,
                x = f || k.reserveSpaceDefault ? 0 : -k.labelOffset * ("center" === k.labelAlign ? .5 : 1),
                L = {};
            G(t) || (t = 0 === k.side ? A.rotation ? -8 : -A.getBBox().height : 2 === k.side ? g.y + 8 : Math.cos(A.rotation * m) * (g.y - A.getBBox(!1, 0).height / 2));
            c = c + b.x + x + g.x - (a && f ? a * l * (r ? -1 : 1) : 0);
            e = e + t - (a && !f ? a * l * (r ? 1 : -1) : 0);
            p && (A = d / (h || 1) % p, k.opposite && (A = p - A - 1), e += k.labelOffset / p * A);
            L.x = c;
            L.y = Math.round(e);
            u(this, "afterGetLabelPosition", {
              pos: L,
              tickmarkOffset: a,
              index: d
            });
            return L;
          },
          getMarkPath: function getMarkPath(c, e, m, f, b, a) {
            return a.crispLine(["M", c, e, "L", c + (b ? 0 : -m), e + (b ? m : 0)], f);
          },
          renderGridLine: function renderGridLine(c, e, m) {
            var f = this.axis,
                b = f.options,
                a = this.gridLine,
                d = {},
                h = this.pos,
                k = this.type,
                l = B(this.tickmarkOffset, f.tickmarkOffset),
                r = f.chart.renderer,
                p = k ? k + "Grid" : "grid",
                g = b[p + "LineWidth"],
                t = b[p + "LineColor"];
            b = b[p + "LineDashStyle"];
            a || (f.chart.styledMode || (d.stroke = t, d["stroke-width"] = g, b && (d.dashstyle = b)), k || (d.zIndex = 1), c && (e = 0), this.gridLine = a = r.path().attr(d).addClass("highcharts-" + (k ? k + "-" : "") + "grid-line").add(f.gridGroup));
            if (a && (m = f.getPlotLinePath({
              value: h + l,
              lineWidth: a.strokeWidth() * m,
              force: "pass",
              old: c
            }))) a[c || this.isNew ? "attr" : "animate"]({
              d: m,
              opacity: e
            });
          },
          renderMark: function renderMark(c, e, m) {
            var f = this.axis,
                b = f.options,
                a = f.chart.renderer,
                d = this.type,
                h = d ? d + "Tick" : "tick",
                k = f.tickSize(h),
                l = this.mark,
                r = !l,
                p = c.x;
            c = c.y;
            var g = B(b[h + "Width"], !d && f.isXAxis ? 1 : 0);
            b = b[h + "Color"];
            k && (f.opposite && (k[0] = -k[0]), r && (this.mark = l = a.path().addClass("highcharts-" + (d ? d + "-" : "") + "tick").add(f.axisGroup), f.chart.styledMode || l.attr({
              stroke: b,
              "stroke-width": g
            })), l[r ? "attr" : "animate"]({
              d: this.getMarkPath(p, c, k[0], l.strokeWidth() * m, f.horiz, a),
              opacity: e
            }));
          },
          renderLabel: function renderLabel(c, e, m, f) {
            var b = this.axis,
                a = b.horiz,
                d = b.options,
                h = this.label,
                k = d.labels,
                l = k.step;
            b = B(this.tickmarkOffset, b.tickmarkOffset);
            var y = !0,
                p = c.x;
            c = c.y;
            h && q(p) && (h.xy = c = this.getLabelPosition(p, c, h, a, k, b, f, l), this.isFirst && !this.isLast && !B(d.showFirstLabel, 1) || this.isLast && !this.isFirst && !B(d.showLastLabel, 1) ? y = !1 : !a || k.step || k.rotation || e || 0 === m || this.handleOverflow(c), l && f % l && (y = !1), y && q(c.y) ? (c.opacity = m, h[this.isNewLabel ? "attr" : "animate"](c), this.isNewLabel = !1) : (h.attr("y", -9999), this.isNewLabel = !0));
          },
          render: function render(e, m, q) {
            var f = this.axis,
                b = f.horiz,
                a = this.pos,
                d = B(this.tickmarkOffset, f.tickmarkOffset);
            a = this.getPosition(b, a, d, m);
            d = a.x;
            var h = a.y;
            f = b && d === f.pos + f.len || !b && h === f.pos ? -1 : 1;
            q = B(q, 1);
            this.isActive = !0;
            this.renderGridLine(m, q, f);
            this.renderMark(a, q, f);
            this.renderLabel(a, m, q, e);
            this.isNew = !1;
            c.fireEvent(this, "afterRender");
          },
          destroy: function destroy() {
            H(this, this.axis);
          }
        };
      });
      M(J, "parts/Axis.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.animObject,
            I = e.arrayMax,
            G = e.arrayMin,
            H = e.clamp,
            v = e.correctFloat,
            q = e.defined,
            C = e.destroyObjectProperties,
            B = e.extend,
            u = e.isArray,
            w = e.isNumber,
            m = e.isString,
            r = e.objectEach,
            D = e.pick,
            A = e.relativeLength,
            f = e.splat,
            b = e.syncTimeout,
            a = c.addEvent,
            d = c.color,
            h = c.defaultOptions,
            k = c.deg2rad,
            l = c.fireEvent,
            y = c.format,
            p = c.getMagnitude,
            g = c.merge,
            t = c.normalizeTickInterval,
            x = c.removeEvent,
            L = c.seriesTypes,
            E = c.Tick;

        e = function e() {
          this.init.apply(this, arguments);
        };

        B(e.prototype, {
          defaultOptions: {
            dateTimeLabelFormats: {
              millisecond: {
                main: "%H:%M:%S.%L",
                range: !1
              },
              second: {
                main: "%H:%M:%S",
                range: !1
              },
              minute: {
                main: "%H:%M",
                range: !1
              },
              hour: {
                main: "%H:%M",
                range: !1
              },
              day: {
                main: "%e. %b"
              },
              week: {
                main: "%e. %b"
              },
              month: {
                main: "%b '%y"
              },
              year: {
                main: "%Y"
              }
            },
            endOnTick: !1,
            labels: {
              enabled: !0,
              indentation: 10,
              x: 0,
              style: {
                color: "#666666",
                cursor: "default",
                fontSize: "11px"
              }
            },
            maxPadding: .01,
            minorTickLength: 2,
            minorTickPosition: "outside",
            minPadding: .01,
            showEmpty: !0,
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickPixelInterval: 100,
            tickmarkPlacement: "between",
            tickPosition: "outside",
            title: {
              align: "middle",
              style: {
                color: "#666666"
              }
            },
            type: "linear",
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#ccd6eb",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            tickColor: "#ccd6eb"
          },
          defaultYAxisOptions: {
            endOnTick: !0,
            maxPadding: .05,
            minPadding: .05,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
              x: -8
            },
            startOnTick: !0,
            title: {
              rotation: 270,
              text: "Values"
            },
            stackLabels: {
              allowOverlap: !1,
              enabled: !1,
              crop: !0,
              overflow: "justify",
              formatter: function formatter() {
                var a = this.axis.chart.numberFormatter;
                return a(this.total, -1);
              },
              style: {
                color: "#000000",
                fontSize: "11px",
                fontWeight: "bold",
                textOutline: "1px contrast"
              }
            },
            gridLineWidth: 1,
            lineWidth: 0
          },
          defaultLeftAxisOptions: {
            labels: {
              x: -15
            },
            title: {
              rotation: 270
            }
          },
          defaultRightAxisOptions: {
            labels: {
              x: 15
            },
            title: {
              rotation: 90
            }
          },
          defaultBottomAxisOptions: {
            labels: {
              autoRotation: [-45],
              x: 0
            },
            margin: 15,
            title: {
              rotation: 0
            }
          },
          defaultTopAxisOptions: {
            labels: {
              autoRotation: [-45],
              x: 0
            },
            margin: 15,
            title: {
              rotation: 0
            }
          },
          init: function init(b, d) {
            var n = d.isX,
                g = this;
            g.chart = b;
            g.horiz = b.inverted && !g.isZAxis ? !n : n;
            g.isXAxis = n;
            g.coll = g.coll || (n ? "xAxis" : "yAxis");
            l(this, "init", {
              userOptions: d
            });
            g.opposite = d.opposite;
            g.side = d.side || (g.horiz ? g.opposite ? 0 : 2 : g.opposite ? 1 : 3);
            g.setOptions(d);
            var z = this.options,
                h = z.type;
            g.labelFormatter = z.labels.formatter || g.defaultLabelFormatter;
            g.userOptions = d;
            g.minPixelPadding = 0;
            g.reversed = z.reversed;
            g.visible = !1 !== z.visible;
            g.zoomEnabled = !1 !== z.zoomEnabled;
            g.hasNames = "category" === h || !0 === z.categories;
            g.categories = z.categories || g.hasNames;
            g.names || (g.names = [], g.names.keys = {});
            g.plotLinesAndBandsGroups = {};
            g.isLog = "logarithmic" === h;
            g.isDatetimeAxis = "datetime" === h;
            g.positiveValuesOnly = g.isLog && !g.allowNegativeLog;
            g.isLinked = q(z.linkedTo);
            g.ticks = {};
            g.labelEdge = [];
            g.minorTicks = {};
            g.plotLinesAndBands = [];
            g.alternateBands = {};
            g.len = 0;
            g.minRange = g.userMinRange = z.minRange || z.maxZoom;
            g.range = z.range;
            g.offset = z.offset || 0;
            g.stacks = {};
            g.oldStacks = {};
            g.stacksTouched = 0;
            g.max = null;
            g.min = null;
            g.crosshair = D(z.crosshair, f(b.options.tooltip.crosshairs)[n ? 0 : 1], !1);
            d = g.options.events;
            -1 === b.axes.indexOf(g) && (n ? b.axes.splice(b.xAxis.length, 0, g) : b.axes.push(g), b[g.coll].push(g));
            g.series = g.series || [];
            b.inverted && !g.isZAxis && n && "undefined" === typeof g.reversed && (g.reversed = !0);
            r(d, function (b, d) {
              c.isFunction(b) && a(g, d, b);
            });
            g.lin2log = z.linearToLogConverter || g.lin2log;
            g.isLog && (g.val2lin = g.log2lin, g.lin2val = g.lin2log);
            l(this, "afterInit");
          },
          setOptions: function setOptions(a) {
            this.options = g(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], g(h[this.coll], a));
            l(this, "afterSetOptions", {
              userOptions: a
            });
          },
          defaultLabelFormatter: function defaultLabelFormatter() {
            var a = this.axis,
                b = this.value,
                d = a.chart.time,
                g = a.categories,
                f = this.dateTimeLabelFormat,
                c = h.lang,
                t = c.numericSymbols;
            c = c.numericSymbolMagnitude || 1E3;
            var l = t && t.length,
                x = a.options.labels.format;
            a = a.isLog ? Math.abs(b) : a.tickInterval;
            var k = this.chart,
                p = k.numberFormatter;
            if (x) var e = y(x, this, k);else if (g) e = b;else if (f) e = d.dateFormat(f, b);else if (l && 1E3 <= a) for (; l-- && "undefined" === typeof e;) {
              d = Math.pow(c, l + 1), a >= d && 0 === 10 * b % d && null !== t[l] && 0 !== b && (e = p(b / d, -1) + t[l]);
            }
            "undefined" === typeof e && (e = 1E4 <= Math.abs(b) ? p(b, -1) : p(b, -1, void 0, ""));
            return e;
          },
          getSeriesExtremes: function getSeriesExtremes() {
            var a = this,
                b = a.chart,
                d;
            l(this, "getSeriesExtremes", null, function () {
              a.hasVisibleSeries = !1;
              a.dataMin = a.dataMax = a.threshold = null;
              a.softThreshold = !a.isXAxis;
              a.buildStacks && a.buildStacks();
              a.series.forEach(function (g) {
                if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                  var n = g.options,
                      z = n.threshold;
                  a.hasVisibleSeries = !0;
                  a.positiveValuesOnly && 0 >= z && (z = null);

                  if (a.isXAxis) {
                    if (n = g.xData, n.length) {
                      d = g.getXExtremes(n);
                      var f = d.min;
                      var h = d.max;
                      w(f) || f instanceof Date || (n = n.filter(w), d = g.getXExtremes(n), f = d.min, h = d.max);
                      n.length && (a.dataMin = Math.min(D(a.dataMin, f), f), a.dataMax = Math.max(D(a.dataMax, h), h));
                    }
                  } else if (g.getExtremes(), h = g.dataMax, f = g.dataMin, q(f) && q(h) && (a.dataMin = Math.min(D(a.dataMin, f), f), a.dataMax = Math.max(D(a.dataMax, h), h)), q(z) && (a.threshold = z), !n.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
                }
              });
            });
            l(this, "afterGetSeriesExtremes");
          },
          translate: function translate(a, b, d, g, f, h) {
            var n = this.linkedParent || this,
                z = 1,
                c = 0,
                t = g ? n.oldTransA : n.transA;
            g = g ? n.oldMin : n.min;
            var l = n.minPixelPadding;
            f = (n.isOrdinal || n.isBroken || n.isLog && f) && n.lin2val;
            t || (t = n.transA);
            d && (z *= -1, c = n.len);
            n.reversed && (z *= -1, c -= z * (n.sector || n.len));
            b ? (a = (a * z + c - l) / t + g, f && (a = n.lin2val(a))) : (f && (a = n.val2lin(a)), a = w(g) ? z * (a - g) * t + c + z * l + (w(h) ? t * h : 0) : void 0);
            return a;
          },
          toPixels: function toPixels(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
          },
          toValue: function toValue(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
          },
          getPlotLinePath: function getPlotLinePath(a) {
            var b = this,
                d = b.chart,
                g = b.left,
                n = b.top,
                f = a.old,
                h = a.value,
                c = a.translatedValue,
                t = a.lineWidth,
                x = a.force,
                k,
                p,
                e,
                E,
                m = f && d.oldChartHeight || d.chartHeight,
                L = f && d.oldChartWidth || d.chartWidth,
                y,
                r = b.transB,
                q = function q(a, b, d) {
              if ("pass" !== x && a < b || a > d) x ? a = H(a, b, d) : y = !0;
              return a;
            };

            a = {
              value: h,
              lineWidth: t,
              old: f,
              force: x,
              acrossPanes: a.acrossPanes,
              translatedValue: c
            };
            l(this, "getPlotLinePath", a, function (a) {
              c = D(c, b.translate(h, null, null, f));
              c = H(c, -1E5, 1E5);
              k = e = Math.round(c + r);
              p = E = Math.round(m - c - r);
              w(c) ? b.horiz ? (p = n, E = m - b.bottom, k = e = q(k, g, g + b.width)) : (k = g, e = L - b.right, p = E = q(p, n, n + b.height)) : (y = !0, x = !1);
              a.path = y && !x ? null : d.renderer.crispLine(["M", k, p, "L", e, E], t || 1);
            });
            return a.path;
          },
          getLinearTickPositions: function getLinearTickPositions(a, b, d) {
            var g = v(Math.floor(b / a) * a);
            d = v(Math.ceil(d / a) * a);
            var n = [],
                f;
            v(g + a) === g && (f = 20);
            if (this.single) return [b];

            for (b = g; b <= d;) {
              n.push(b);
              b = v(b + a, f);
              if (b === z) break;
              var z = b;
            }

            return n;
          },
          getMinorTickInterval: function getMinorTickInterval() {
            var a = this.options;
            return !0 === a.minorTicks ? D(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
          },
          getMinorTickPositions: function getMinorTickPositions() {
            var a = this,
                b = a.options,
                d = a.tickPositions,
                g = a.minorTickInterval,
                f = [],
                h = a.pointRangePadding || 0,
                c = a.min - h;
            h = a.max + h;
            var t = h - c;
            if (t && t / g < a.len / 3) if (a.isLog) this.paddedTicks.forEach(function (b, d, n) {
              d && f.push.apply(f, a.getLogTickPositions(g, n[d - 1], n[d], !0));
            });else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) f = f.concat(a.getTimeTicks(a.normalizeTimeTickInterval(g), c, h, b.startOfWeek));else for (b = c + (d[0] - c) % g; b <= h && b !== f[0]; b += g) {
              f.push(b);
            }
            0 !== f.length && a.trimTicks(f);
            return f;
          },
          adjustForMinRange: function adjustForMinRange() {
            var a = this.options,
                b = this.min,
                d = this.max,
                g,
                f,
                h,
                c,
                t;
            this.isXAxis && "undefined" === typeof this.minRange && !this.isLog && (q(a.min) || q(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
              c = a.xData;

              for (f = t = a.xIncrement ? 1 : c.length - 1; 0 < f; f--) {
                if (h = c[f] - c[f - 1], "undefined" === typeof g || h < g) g = h;
              }
            }), this.minRange = Math.min(5 * g, this.dataMax - this.dataMin)));

            if (d - b < this.minRange) {
              var l = this.dataMax - this.dataMin >= this.minRange;
              var x = this.minRange;
              var k = (x - d + b) / 2;
              k = [b - k, D(a.min, b - k)];
              l && (k[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin);
              b = I(k);
              d = [b + x, D(a.max, b + x)];
              l && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax);
              d = G(d);
              d - b < x && (k[0] = d - x, k[1] = D(a.min, d - x), b = I(k));
            }

            this.min = b;
            this.max = d;
          },
          getClosest: function getClosest() {
            var a;
            this.categories ? a = 1 : this.series.forEach(function (b) {
              var d = b.closestPointRange,
                  g = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
              !b.noSharedTooltip && q(d) && g && (a = q(a) ? Math.min(a, d) : d);
            });
            return a;
          },
          nameToX: function nameToX(a) {
            var b = u(this.categories),
                d = b ? this.categories : this.names,
                g = a.options.x;
            a.series.requireSorting = !1;
            q(g) || (g = !1 === this.options.uniqueNames ? a.series.autoIncrement() : b ? d.indexOf(a.name) : D(d.keys[a.name], -1));

            if (-1 === g) {
              if (!b) var n = d.length;
            } else n = g;

            "undefined" !== typeof n && (this.names[n] = a.name, this.names.keys[a.name] = n);
            return n;
          },
          updateNames: function updateNames() {
            var a = this,
                b = this.names;
            0 < b.length && (Object.keys(b.keys).forEach(function (a) {
              delete b.keys[a];
            }), b.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (b) {
              b.xIncrement = null;
              if (!b.points || b.isDirtyData) a.max = Math.max(a.max, b.xData.length - 1), b.processData(), b.generatePoints();
              b.data.forEach(function (d, g) {
                if (d && d.options && "undefined" !== typeof d.name) {
                  var n = a.nameToX(d);
                  "undefined" !== typeof n && n !== d.x && (d.x = n, b.xData[g] = n);
                }
              });
            }));
          },
          setAxisTranslation: function setAxisTranslation(a) {
            var b = this,
                d = b.max - b.min,
                g = b.axisPointRange || 0,
                n = 0,
                f = 0,
                h = b.linkedParent,
                c = !!b.categories,
                t = b.transA,
                x = b.isXAxis;

            if (x || c || g) {
              var k = b.getClosest();
              h ? (n = h.minPointOffset, f = h.pointRangePadding) : b.series.forEach(function (a) {
                var d = c ? 1 : x ? D(a.options.pointRange, k, 0) : b.axisPointRange || 0,
                    h = a.options.pointPlacement;
                g = Math.max(g, d);
                if (!b.single || c) a = L.xrange && a instanceof L.xrange ? !x : x, n = Math.max(n, a && m(h) ? 0 : d / 2), f = Math.max(f, a && "on" === h ? 0 : d);
              });
              h = b.ordinalSlope && k ? b.ordinalSlope / k : 1;
              b.minPointOffset = n *= h;
              b.pointRangePadding = f *= h;
              b.pointRange = Math.min(g, b.single && c ? 1 : d);
              x && (b.closestPointRange = k);
            }

            a && (b.oldTransA = t);
            b.translationSlope = b.transA = t = b.staticScale || b.len / (d + f || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = t * n;
            l(this, "afterSetAxisTranslation");
          },
          minFromRange: function minFromRange() {
            return this.max - this.range;
          },
          setTickInterval: function setTickInterval(a) {
            var b = this,
                d = b.chart,
                g = b.options,
                n = b.isLog,
                f = b.isDatetimeAxis,
                h = b.isXAxis,
                x = b.isLinked,
                k = g.maxPadding,
                e = g.minPadding,
                E = g.tickInterval,
                m = g.tickPixelInterval,
                L = b.categories,
                y = w(b.threshold) ? b.threshold : null,
                r = b.softThreshold;
            f || L || x || this.getTickAmount();
            var A = D(b.userMin, g.min);
            var u = D(b.userMax, g.max);

            if (x) {
              b.linkedParent = d[b.coll][g.linkedTo];
              var C = b.linkedParent.getExtremes();
              b.min = D(C.min, C.dataMin);
              b.max = D(C.max, C.dataMax);
              g.type !== b.linkedParent.options.type && c.error(11, 1, d);
            } else {
              if (!r && q(y)) if (b.dataMin >= y) C = y, e = 0;else if (b.dataMax <= y) {
                var B = y;
                k = 0;
              }
              b.min = D(A, C, b.dataMin);
              b.max = D(u, B, b.dataMax);
            }

            n && (b.positiveValuesOnly && !a && 0 >= Math.min(b.min, D(b.dataMin, b.min)) && c.error(10, 1, d), b.min = v(b.log2lin(b.min), 16), b.max = v(b.log2lin(b.max), 16));
            b.range && q(b.max) && (b.userMin = b.min = A = Math.max(b.dataMin, b.minFromRange()), b.userMax = u = b.max, b.range = null);
            l(b, "foundExtremes");
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            !(L || b.axisPointRange || b.usePercentage || x) && q(b.min) && q(b.max) && (d = b.max - b.min) && (!q(A) && e && (b.min -= d * e), !q(u) && k && (b.max += d * k));
            w(b.userMin) || (w(g.softMin) && g.softMin < b.min && (b.min = A = g.softMin), w(g.floor) && (b.min = Math.max(b.min, g.floor)));
            w(b.userMax) || (w(g.softMax) && g.softMax > b.max && (b.max = u = g.softMax), w(g.ceiling) && (b.max = Math.min(b.max, g.ceiling)));
            r && q(b.dataMin) && (y = y || 0, !q(A) && b.min < y && b.dataMin >= y ? b.min = b.options.minRange ? Math.min(y, b.max - b.minRange) : y : !q(u) && b.max > y && b.dataMax <= y && (b.max = b.options.minRange ? Math.max(y, b.min + b.minRange) : y));
            b.tickInterval = b.min === b.max || "undefined" === typeof b.min || "undefined" === typeof b.max ? 1 : x && !E && m === b.linkedParent.options.tickPixelInterval ? E = b.linkedParent.tickInterval : D(E, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, L ? 1 : (b.max - b.min) * m / Math.max(b.len, m));
            h && !a && b.series.forEach(function (a) {
              a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && !E && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));
            a = D(g.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            !E && b.tickInterval < a && (b.tickInterval = a);
            f || n || E || (b.tickInterval = t(b.tickInterval, null, p(b.tickInterval), D(g.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
            this.tickAmount || (b.tickInterval = b.unsquish());
            this.setTickPositions();
          },
          setTickPositions: function setTickPositions() {
            var a = this.options,
                b = a.tickPositions;
            var d = this.getMinorTickInterval();
            var g = a.tickPositioner,
                f = a.startOnTick,
                h = a.endOnTick;
            this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
            this.minorTickInterval = "auto" === d && this.tickInterval ? this.tickInterval / 5 : d;
            this.single = this.min === this.max && q(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
            this.tickPositions = d = b && b.slice();
            !d && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (d = [this.min, this.max], c.error(19, !1, this.chart)) : d = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), d.length > this.len && (d = [d[0], d.pop()], d[0] === d[1] && (d.length = 1)), this.tickPositions = d, g && (g = g.apply(this, [this.min, this.max]))) && (this.tickPositions = d = g);
            this.paddedTicks = d.slice(0);
            this.trimTicks(d, f, h);
            this.isLinked || (this.single && 2 > d.length && !this.categories && (this.min -= .5, this.max += .5), b || g || this.adjustTickAmount());
            l(this, "afterSetTickPositions");
          },
          trimTicks: function trimTicks(a, b, d) {
            var g = a[0],
                n = a[a.length - 1],
                f = this.minPointOffset || 0;
            l(this, "trimTicks");

            if (!this.isLinked) {
              if (b && -Infinity !== g) this.min = g;else for (; this.min - f > a[0];) {
                a.shift();
              }
              if (d) this.max = n;else for (; this.max + f < a[a.length - 1];) {
                a.pop();
              }
              0 === a.length && q(g) && !this.options.tickPositions && a.push((n + g) / 2);
            }
          },
          alignToOthers: function alignToOthers() {
            var a = {},
                b,
                d = this.options;
            !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || !1 === d.startOnTick || !1 === d.endOnTick || this.isLog || this.chart[this.coll].forEach(function (d) {
              var g = d.options;
              g = [d.horiz ? g.left : g.top, g.width, g.height, g.pane].join();
              d.series.length && (a[g] ? b = !0 : a[g] = 1);
            });
            return b;
          },
          getTickAmount: function getTickAmount() {
            var a = this.options,
                b = a.tickAmount,
                d = a.tickPixelInterval;
            !q(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
            !b && this.alignToOthers() && (b = Math.ceil(this.len / d) + 1);
            4 > b && (this.finalTickAmt = b, b = 5);
            this.tickAmount = b;
          },
          adjustTickAmount: function adjustTickAmount() {
            var a = this.options,
                b = this.tickInterval,
                d = this.tickPositions,
                g = this.tickAmount,
                f = this.finalTickAmt,
                h = d && d.length,
                c = D(this.threshold, this.softThreshold ? 0 : null),
                t;

            if (this.hasData()) {
              if (h < g) {
                for (t = this.min; d.length < g;) {
                  d.length % 2 || t === c ? d.push(v(d[d.length - 1] + b)) : d.unshift(v(d[0] - b));
                }

                this.transA *= (h - 1) / (g - 1);
                this.min = a.startOnTick ? d[0] : Math.min(this.min, d[0]);
                this.max = a.endOnTick ? d[d.length - 1] : Math.max(this.max, d[d.length - 1]);
              } else h > g && (this.tickInterval *= 2, this.setTickPositions());

              if (q(f)) {
                for (b = a = d.length; b--;) {
                  (3 === f && 1 === b % 2 || 2 >= f && 0 < b && b < a - 1) && d.splice(b, 1);
                }

                this.finalTickAmt = void 0;
              }
            }
          },
          setScale: function setScale() {
            var a = this.series.some(function (a) {
              return a.isDirtyData || a.isDirty || a.xAxis && a.xAxis.isDirty;
            }),
                b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            (b = this.len !== this.oldAxisLength) || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();
            l(this, "afterSetScale");
          },
          setExtremes: function setExtremes(a, b, d, g, f) {
            var n = this,
                h = n.chart;
            d = D(d, !0);
            n.series.forEach(function (a) {
              delete a.kdTree;
            });
            f = B(f, {
              min: a,
              max: b
            });
            l(n, "setExtremes", f, function () {
              n.userMin = a;
              n.userMax = b;
              n.eventArgs = f;
              d && h.redraw(g);
            });
          },
          zoom: function zoom(a, b) {
            var d = this.dataMin,
                g = this.dataMax,
                n = this.options,
                f = Math.min(d, D(n.min, d)),
                h = Math.max(g, D(n.max, g));
            a = {
              newMin: a,
              newMax: b
            };
            l(this, "zoom", a, function (a) {
              var b = a.newMin,
                  n = a.newMax;
              if (b !== this.min || n !== this.max) this.allowZoomOutside || (q(d) && (b < f && (b = f), b > h && (b = h)), q(g) && (n < f && (n = f), n > h && (n = h))), this.displayBtn = "undefined" !== typeof b || "undefined" !== typeof n, this.setExtremes(b, n, !1, void 0, {
                trigger: "zoom"
              });
              a.zoomed = !0;
            });
            return a.zoomed;
          },
          setAxisSize: function setAxisSize() {
            var a = this.chart,
                b = this.options,
                d = b.offsets || [0, 0, 0, 0],
                g = this.horiz,
                f = this.width = Math.round(A(D(b.width, a.plotWidth - d[3] + d[1]), a.plotWidth)),
                h = this.height = Math.round(A(D(b.height, a.plotHeight - d[0] + d[2]), a.plotHeight)),
                c = this.top = Math.round(A(D(b.top, a.plotTop + d[0]), a.plotHeight, a.plotTop));
            b = this.left = Math.round(A(D(b.left, a.plotLeft + d[3]), a.plotWidth, a.plotLeft));
            this.bottom = a.chartHeight - h - c;
            this.right = a.chartWidth - f - b;
            this.len = Math.max(g ? f : h, 0);
            this.pos = g ? b : c;
          },
          getExtremes: function getExtremes() {
            var a = this.isLog;
            return {
              min: a ? v(this.lin2log(this.min)) : this.min,
              max: a ? v(this.lin2log(this.max)) : this.max,
              dataMin: this.dataMin,
              dataMax: this.dataMax,
              userMin: this.userMin,
              userMax: this.userMax
            };
          },
          getThreshold: function getThreshold(a) {
            var b = this.isLog,
                d = b ? this.lin2log(this.min) : this.min;
            b = b ? this.lin2log(this.max) : this.max;
            null === a || -Infinity === a ? a = d : Infinity === a ? a = b : d > a ? a = d : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1);
          },
          autoLabelAlign: function autoLabelAlign(a) {
            var b = (D(a, 0) - 90 * this.side + 720) % 360;
            a = {
              align: "center"
            };
            l(this, "autoLabelAlign", a, function (a) {
              15 < b && 165 > b ? a.align = "right" : 195 < b && 345 > b && (a.align = "left");
            });
            return a.align;
          },
          tickSize: function tickSize(a) {
            var b = this.options,
                d = b[a + "Length"],
                g = D(b[a + "Width"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0);

            if (g && d) {
              "inside" === b[a + "Position"] && (d = -d);
              var f = [d, g];
            }

            a = {
              tickSize: f
            };
            l(this, "afterTickSize", a);
            return a.tickSize;
          },
          labelMetrics: function labelMetrics() {
            var a = this.tickPositions && this.tickPositions[0] || 0;
            return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
          },
          unsquish: function unsquish() {
            var a = this.options.labels,
                b = this.horiz,
                d = this.tickInterval,
                g = d,
                f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d),
                h,
                c = a.rotation,
                t = this.labelMetrics(),
                l,
                x = Number.MAX_VALUE,
                p,
                e = this.max - this.min,
                E = function E(a) {
              var b = a / (f || 1);
              b = 1 < b ? Math.ceil(b) : 1;
              b * d > e && Infinity !== a && Infinity !== f && e && (b = Math.ceil(e / d));
              return v(b * d);
            };

            b ? (p = !a.staggerLines && !a.step && (q(c) ? [c] : f < D(a.autoRotationLimit, 80) && a.autoRotation)) && p.forEach(function (a) {
              if (a === c || a && -90 <= a && 90 >= a) {
                l = E(Math.abs(t.h / Math.sin(k * a)));
                var b = l + Math.abs(a / 360);
                b < x && (x = b, h = a, g = l);
              }
            }) : a.step || (g = E(t.h));
            this.autoRotation = p;
            this.labelRotation = D(h, c);
            return g;
          },
          getSlotWidth: function getSlotWidth(a) {
            var b = this.chart,
                d = this.horiz,
                g = this.options.labels,
                f = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                n = b.margin[3];
            return a && a.slotWidth || d && 2 > (g.step || 0) && !g.rotation && (this.staggerLines || 1) * this.len / f || !d && (g.style && parseInt(g.style.width, 10) || n && n - b.spacing[3] || .33 * b.chartWidth);
          },
          renderUnsquish: function renderUnsquish() {
            var a = this.chart,
                b = a.renderer,
                d = this.tickPositions,
                g = this.ticks,
                f = this.options.labels,
                h = f && f.style || {},
                c = this.horiz,
                t = this.getSlotWidth(),
                l = Math.max(1, Math.round(t - 2 * (f.padding || 5))),
                x = {},
                k = this.labelMetrics(),
                p = f.style && f.style.textOverflow,
                e = 0;
            m(f.rotation) || (x.rotation = f.rotation || 0);
            d.forEach(function (a) {
              a = g[a];
              a.movedLabel && a.replaceMovedLabel();
              a && a.label && a.label.textPxLength > e && (e = a.label.textPxLength);
            });
            this.maxLabelLength = e;
            if (this.autoRotation) e > l && e > k.h ? x.rotation = this.labelRotation : this.labelRotation = 0;else if (t) {
              var E = l;

              if (!p) {
                var L = "clip";

                for (l = d.length; !c && l--;) {
                  var y = d[l];
                  if (y = g[y].label) y.styles && "ellipsis" === y.styles.textOverflow ? y.css({
                    textOverflow: "clip"
                  }) : y.textPxLength > t && y.css({
                    width: t + "px"
                  }), y.getBBox().height > this.len / d.length - (k.h - k.f) && (y.specificTextOverflow = "ellipsis");
                }
              }
            }
            x.rotation && (E = e > .5 * a.chartHeight ? .33 * a.chartHeight : e, p || (L = "ellipsis"));
            if (this.labelAlign = f.align || this.autoLabelAlign(this.labelRotation)) x.align = this.labelAlign;
            d.forEach(function (a) {
              var b = (a = g[a]) && a.label,
                  d = h.width,
                  f = {};
              b && (b.attr(x), a.shortenLabel ? a.shortenLabel() : E && !d && "nowrap" !== h.whiteSpace && (E < b.textPxLength || "SPAN" === b.element.tagName) ? (f.width = E, p || (f.textOverflow = b.specificTextOverflow || L), b.css(f)) : b.styles && b.styles.width && !f.width && !d && b.css({
                width: null
              }), delete b.specificTextOverflow, a.rotation = x.rotation);
            }, this);
            this.tickRotCorr = b.rotCorr(k.b, this.labelRotation || 0, 0 !== this.side);
          },
          hasData: function hasData() {
            return this.series.some(function (a) {
              return a.hasData();
            }) || this.options.showEmpty && q(this.min) && q(this.max);
          },
          addTitle: function addTitle(a) {
            var b = this.chart.renderer,
                d = this.horiz,
                f = this.opposite,
                h = this.options.title,
                n,
                c = this.chart.styledMode;
            this.axisTitle || ((n = h.textAlign) || (n = (d ? {
              low: "left",
              middle: "center",
              high: "right"
            } : {
              low: f ? "right" : "left",
              middle: "center",
              high: f ? "left" : "right"
            })[h.align]), this.axisTitle = b.text(h.text, 0, 0, h.useHTML).attr({
              zIndex: 7,
              rotation: h.rotation || 0,
              align: n
            }).addClass("highcharts-axis-title"), c || this.axisTitle.css(g(h.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
            c || h.style.width || this.isRadial || this.axisTitle.css({
              width: this.len
            });
            this.axisTitle[a ? "show" : "hide"](a);
          },
          generateTick: function generateTick(a) {
            var b = this.ticks;
            b[a] ? b[a].addLabel() : b[a] = new E(this, a);
          },
          getOffset: function getOffset() {
            var a = this,
                b = a.chart,
                d = b.renderer,
                g = a.options,
                f = a.tickPositions,
                h = a.ticks,
                c = a.horiz,
                t = a.side,
                x = b.inverted && !a.isZAxis ? [1, 0, 3, 2][t] : t,
                k,
                p = 0,
                e = 0,
                E = g.title,
                m = g.labels,
                L = 0,
                y = b.axisOffset;
            b = b.clipOffset;
            var A = [-1, 1, 1, -1][t],
                u = g.className,
                v = a.axisParent;
            var w = a.hasData();
            a.showAxis = k = w || D(g.showEmpty, !0);
            a.staggerLines = a.horiz && m.staggerLines;
            a.axisGroup || (a.gridGroup = d.g("grid").attr({
              zIndex: g.gridZIndex || 1
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (u || "")).add(v), a.axisGroup = d.g("axis").attr({
              zIndex: g.zIndex || 2
            }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (u || "")).add(v), a.labelGroup = d.g("axis-labels").attr({
              zIndex: m.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (u || "")).add(v));
            w || a.isLinked ? (f.forEach(function (b, d) {
              a.generateTick(b, d);
            }), a.renderUnsquish(), a.reserveSpaceDefault = 0 === t || 2 === t || {
              1: "left",
              3: "right"
            }[t] === a.labelAlign, D(m.reserveSpace, "center" === a.labelAlign ? !0 : null, a.reserveSpaceDefault) && f.forEach(function (a) {
              L = Math.max(h[a].getLabelSize(), L);
            }), a.staggerLines && (L *= a.staggerLines), a.labelOffset = L * (a.opposite ? -1 : 1)) : r(h, function (a, b) {
              a.destroy();
              delete h[b];
            });

            if (E && E.text && !1 !== E.enabled && (a.addTitle(k), k && !1 !== E.reserveSpace)) {
              a.titleOffset = p = a.axisTitle.getBBox()[c ? "height" : "width"];
              var C = E.offset;
              e = q(C) ? 0 : D(E.margin, c ? 5 : 10);
            }

            a.renderLine();
            a.offset = A * D(g.offset, y[t] ? y[t] + (g.margin || 0) : 0);
            a.tickRotCorr = a.tickRotCorr || {
              x: 0,
              y: 0
            };
            d = 0 === t ? -a.labelMetrics().h : 2 === t ? a.tickRotCorr.y : 0;
            e = Math.abs(L) + e;
            L && (e = e - d + A * (c ? D(m.y, a.tickRotCorr.y + 8 * A) : m.x));
            a.axisTitleMargin = D(C, e);
            a.getMaxLabelDimensions && (a.maxLabelDimensions = a.getMaxLabelDimensions(h, f));
            c = this.tickSize("tick");
            y[t] = Math.max(y[t], a.axisTitleMargin + p + A * a.offset, e, f && f.length && c ? c[0] + A * a.offset : 0);
            g = g.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
            b[x] = Math.max(b[x], g);
            l(this, "afterGetOffset");
          },
          getLinePath: function getLinePath(a) {
            var b = this.chart,
                d = this.opposite,
                g = this.offset,
                f = this.horiz,
                h = this.left + (d ? this.width : 0) + g;
            g = b.chartHeight - this.bottom - (d ? this.height : 0) + g;
            d && (a *= -1);
            return b.renderer.crispLine(["M", f ? this.left : h, f ? g : this.top, "L", f ? b.chartWidth - this.right : h, f ? g : b.chartHeight - this.bottom], a);
          },
          renderLine: function renderLine() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
              stroke: this.options.lineColor,
              "stroke-width": this.options.lineWidth,
              zIndex: 7
            }));
          },
          getTitlePosition: function getTitlePosition() {
            var a = this.horiz,
                b = this.left,
                d = this.top,
                g = this.len,
                f = this.options.title,
                h = a ? b : d,
                c = this.opposite,
                t = this.offset,
                x = f.x || 0,
                k = f.y || 0,
                p = this.axisTitle,
                e = this.chart.renderer.fontMetrics(f.style && f.style.fontSize, p);
            p = Math.max(p.getBBox(null, 0).height - e.h - 1, 0);
            g = {
              low: h + (a ? 0 : g),
              middle: h + g / 2,
              high: h + (a ? g : 0)
            }[f.align];
            b = (a ? d + this.height : b) + (a ? 1 : -1) * (c ? -1 : 1) * this.axisTitleMargin + [-p, p, e.f, -p][this.side];
            a = {
              x: a ? g + x : b + (c ? this.width : 0) + t + x,
              y: a ? b + k - (c ? this.height : 0) + t : g + k
            };
            l(this, "afterGetTitlePosition", {
              titlePosition: a
            });
            return a;
          },
          renderMinorTick: function renderMinorTick(a) {
            var b = this.chart.hasRendered && w(this.oldMin),
                d = this.minorTicks;
            d[a] || (d[a] = new E(this, a, "minor"));
            b && d[a].isNew && d[a].render(null, !0);
            d[a].render(null, !1, 1);
          },
          renderTick: function renderTick(a, b) {
            var d = this.isLinked,
                g = this.ticks,
                f = this.chart.hasRendered && w(this.oldMin);
            if (!d || a >= this.min && a <= this.max) g[a] || (g[a] = new E(this, a)), f && g[a].isNew && g[a].render(b, !0, -1), g[a].render(b);
          },
          render: function render() {
            var a = this,
                d = a.chart,
                g = a.options,
                f = a.isLog,
                h = a.isLinked,
                t = a.tickPositions,
                x = a.axisTitle,
                k = a.ticks,
                p = a.minorTicks,
                e = a.alternateBands,
                m = g.stackLabels,
                L = g.alternateGridColor,
                y = a.tickmarkOffset,
                q = a.axisLine,
                A = a.showAxis,
                u = F(d.renderer.globalAnimation),
                D,
                v;
            a.labelEdge.length = 0;
            a.overlap = !1;
            [k, p, e].forEach(function (a) {
              r(a, function (a) {
                a.isActive = !1;
              });
            });
            if (a.hasData() || h) a.minorTickInterval && !a.categories && a.getMinorTickPositions().forEach(function (b) {
              a.renderMinorTick(b);
            }), t.length && (t.forEach(function (b, d) {
              a.renderTick(b, d);
            }), y && (0 === a.min || a.single) && (k[-1] || (k[-1] = new E(a, -1, null, !0)), k[-1].render(-1))), L && t.forEach(function (b, g) {
              v = "undefined" !== typeof t[g + 1] ? t[g + 1] + y : a.max - y;
              0 === g % 2 && b < a.max && v <= a.max + (d.polar ? -y : y) && (e[b] || (e[b] = new c.PlotLineOrBand(a)), D = b + y, e[b].options = {
                from: f ? a.lin2log(D) : D,
                to: f ? a.lin2log(v) : v,
                color: L
              }, e[b].render(), e[b].isActive = !0);
            }), a._addedPlotLB || ((g.plotLines || []).concat(g.plotBands || []).forEach(function (b) {
              a.addPlotBandOrLine(b);
            }), a._addedPlotLB = !0);
            [k, p, e].forEach(function (a) {
              var g,
                  f = [],
                  h = u.duration;
              r(a, function (a, b) {
                a.isActive || (a.render(b, !1, 0), a.isActive = !1, f.push(b));
              });
              b(function () {
                for (g = f.length; g--;) {
                  a[f[g]] && !a[f[g]].isActive && (a[f[g]].destroy(), delete a[f[g]]);
                }
              }, a !== e && d.hasRendered && h ? h : 0);
            });
            q && (q[q.isPlaced ? "animate" : "attr"]({
              d: this.getLinePath(q.strokeWidth())
            }), q.isPlaced = !0, q[A ? "show" : "hide"](A));
            x && A && (g = a.getTitlePosition(), w(g.y) ? (x[x.isNew ? "attr" : "animate"](g), x.isNew = !1) : (x.attr("y", -9999), x.isNew = !0));
            m && m.enabled && a.renderStackTotals();
            a.isDirty = !1;
            l(this, "afterRender");
          },
          redraw: function redraw() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
              a.render();
            }));
            this.series.forEach(function (a) {
              a.isDirty = !0;
            });
          },
          keepProps: "extKey hcEvents names series userMax userMin".split(" "),
          destroy: function destroy(a) {
            var b = this,
                d = b.stacks,
                g = b.plotLinesAndBands,
                f;
            l(this, "destroy", {
              keepEvents: a
            });
            a || x(b);
            r(d, function (a, b) {
              C(a);
              d[b] = null;
            });
            [b.ticks, b.minorTicks, b.alternateBands].forEach(function (a) {
              C(a);
            });
            if (g) for (a = g.length; a--;) {
              g[a].destroy();
            }
            "stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
              b[a] && (b[a] = b[a].destroy());
            });

            for (f in b.plotLinesAndBandsGroups) {
              b.plotLinesAndBandsGroups[f] = b.plotLinesAndBandsGroups[f].destroy();
            }

            r(b, function (a, d) {
              -1 === b.keepProps.indexOf(d) && delete b[d];
            });
          },
          drawCrosshair: function drawCrosshair(a, b) {
            var g = this.crosshair,
                f = D(g.snap, !0),
                h,
                c = this.cross;
            l(this, "drawCrosshair", {
              e: a,
              point: b
            });
            a || (a = this.cross && this.cross.e);

            if (this.crosshair && !1 !== (q(b) || !f)) {
              f ? q(b) && (h = D("colorAxis" !== this.coll ? b.crosshairPos : null, this.isXAxis ? b.plotX : this.len - b.plotY)) : h = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos);

              if (q(h)) {
                var t = {
                  value: b && (this.isXAxis ? b.x : D(b.stackY, b.y)),
                  translatedValue: h
                };
                this.chart.polar && B(t, {
                  isCrosshair: !0,
                  chartX: a && a.chartX,
                  chartY: a && a.chartY,
                  point: b
                });
                t = this.getPlotLinePath(t) || null;
              }

              if (!q(t)) {
                this.hideCrosshair();
                return;
              }

              f = this.categories && !this.isRadial;
              c || (this.cross = c = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (f ? "category " : "thin ") + g.className).attr({
                zIndex: D(g.zIndex, 2)
              }).add(), this.chart.styledMode || (c.attr({
                stroke: g.color || (f ? d("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                "stroke-width": D(g.width, 1)
              }).css({
                "pointer-events": "none"
              }), g.dashStyle && c.attr({
                dashstyle: g.dashStyle
              })));
              c.show().attr({
                d: t
              });
              f && !g.width && c.attr({
                "stroke-width": this.transA
              });
              this.cross.e = a;
            } else this.hideCrosshair();

            l(this, "afterDrawCrosshair", {
              e: a,
              point: b
            });
          },
          hideCrosshair: function hideCrosshair() {
            this.cross && this.cross.hide();
            l(this, "afterHideCrosshair");
          }
        });
        return c.Axis = e;
      });
      M(J, "parts/DateTimeAxis.js", [J["parts/Globals.js"]], function (c) {
        var e = c.Axis,
            F = c.getMagnitude,
            I = c.normalizeTickInterval,
            G = c.timeUnits;

        e.prototype.getTimeTicks = function () {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        };

        e.prototype.normalizeTimeTickInterval = function (c, e) {
          var q = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
          e = q[q.length - 1];
          var v = G[e[0]],
              B = e[1],
              u;

          for (u = 0; u < q.length && !(e = q[u], v = G[e[0]], B = e[1], q[u + 1] && c <= (v * B[B.length - 1] + G[q[u + 1][0]]) / 2); u++) {
            ;
          }

          v === G.year && c < 5 * v && (B = [1, 2, 5]);
          c = I(c / v, B, "year" === e[0] ? Math.max(F(c / v), 1) : 1);
          return {
            unitRange: v,
            count: c,
            unitName: e[0]
          };
        };
      });
      M(J, "parts/LogarithmicAxis.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.pick;
        e = c.Axis;
        var I = c.getMagnitude,
            G = c.normalizeTickInterval;

        e.prototype.getLogTickPositions = function (c, e, q, C) {
          var v = this.options,
              u = this.len,
              w = [];
          C || (this._minorAutoInterval = null);
          if (.5 <= c) c = Math.round(c), w = this.getLinearTickPositions(c, e, q);else if (.08 <= c) {
            u = Math.floor(e);
            var m, r;

            for (v = .3 < c ? [1, 2, 4] : .15 < c ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; u < q + 1 && !r; u++) {
              var D = v.length;

              for (m = 0; m < D && !r; m++) {
                var A = this.log2lin(this.lin2log(u) * v[m]);
                A > e && (!C || f <= q) && "undefined" !== typeof f && w.push(f);
                f > q && (r = !0);
                var f = A;
              }
            }
          } else e = this.lin2log(e), q = this.lin2log(q), c = C ? this.getMinorTickInterval() : v.tickInterval, c = F("auto" === c ? null : c, this._minorAutoInterval, v.tickPixelInterval / (C ? 5 : 1) * (q - e) / ((C ? u / this.tickPositions.length : u) || 1)), c = G(c, null, I(c)), w = this.getLinearTickPositions(c, e, q).map(this.log2lin), C || (this._minorAutoInterval = c / 5);
          C || (this.tickInterval = c);
          return w;
        };

        e.prototype.log2lin = function (c) {
          return Math.log(c) / Math.LN10;
        };

        e.prototype.lin2log = function (c) {
          return Math.pow(10, c);
        };
      });
      M(J, "parts/PlotLineOrBand.js", [J["parts/Globals.js"], J["parts/Axis.js"], J["parts/Utilities.js"]], function (c, e, F) {
        var I = F.arrayMax,
            G = F.arrayMin,
            H = F.defined,
            v = F.destroyObjectProperties,
            q = F.erase,
            C = F.extend,
            B = F.objectEach,
            u = F.pick,
            w = c.merge;

        c.PlotLineOrBand = function (c, e) {
          this.axis = c;
          e && (this.options = e, this.id = e.id);
        };

        c.PlotLineOrBand.prototype = {
          render: function render() {
            c.fireEvent(this, "render");
            var e = this,
                r = e.axis,
                q = r.horiz,
                A = e.options,
                f = A.label,
                b = e.label,
                a = A.to,
                d = A.from,
                h = A.value,
                k = H(d) && H(a),
                l = H(h),
                y = e.svgElem,
                p = !y,
                g = [],
                t = A.color,
                x = u(A.zIndex, 0),
                L = A.events;
            g = {
              "class": "highcharts-plot-" + (k ? "band " : "line ") + (A.className || "")
            };
            var E = {},
                n = r.chart.renderer,
                z = k ? "bands" : "lines";
            r.isLog && (d = r.log2lin(d), a = r.log2lin(a), h = r.log2lin(h));
            r.chart.styledMode || (l ? (g.stroke = t || "#999999", g["stroke-width"] = u(A.width, 1), A.dashStyle && (g.dashstyle = A.dashStyle)) : k && (g.fill = t || "#e6ebf5", A.borderWidth && (g.stroke = A.borderColor, g["stroke-width"] = A.borderWidth)));
            E.zIndex = x;
            z += "-" + x;
            (t = r.plotLinesAndBandsGroups[z]) || (r.plotLinesAndBandsGroups[z] = t = n.g("plot-" + z).attr(E).add());
            p && (e.svgElem = y = n.path().attr(g).add(t));
            if (l) g = r.getPlotLinePath({
              value: h,
              lineWidth: y.strokeWidth(),
              acrossPanes: A.acrossPanes
            });else if (k) g = r.getPlotBandPath(d, a, A);else return;
            (p || !y.d) && g && g.length ? (y.attr({
              d: g
            }), L && B(L, function (a, b) {
              y.on(b, function (a) {
                L[b].apply(e, [a]);
              });
            })) : y && (g ? (y.show(!0), y.animate({
              d: g
            })) : y.d && (y.hide(), b && (e.label = b = b.destroy())));
            f && (H(f.text) || H(f.formatter)) && g && g.length && 0 < r.width && 0 < r.height && !g.isFlat ? (f = w({
              align: q && k && "center",
              x: q ? !k && 4 : 10,
              verticalAlign: !q && k && "middle",
              y: q ? k ? 16 : 10 : k ? 6 : -4,
              rotation: q && !k && 90
            }, f), this.renderLabel(f, g, k, x)) : b && b.hide();
            return e;
          },
          renderLabel: function renderLabel(c, e, q, A) {
            var f = this.label,
                b = this.axis.chart.renderer;
            f || (f = {
              align: c.textAlign || c.align,
              rotation: c.rotation,
              "class": "highcharts-plot-" + (q ? "band" : "line") + "-label " + (c.className || "")
            }, f.zIndex = A, A = this.getLabelText(c), this.label = f = b.text(A, 0, 0, c.useHTML).attr(f).add(), this.axis.chart.styledMode || f.css(c.style));
            b = e.xBounds || [e[1], e[4], q ? e[6] : e[1]];
            e = e.yBounds || [e[2], e[5], q ? e[7] : e[2]];
            q = G(b);
            A = G(e);
            f.align(c, !1, {
              x: q,
              y: A,
              width: I(b) - q,
              height: I(e) - A
            });
            f.show(!0);
          },
          getLabelText: function getLabelText(c) {
            return H(c.formatter) ? c.formatter.call(this) : c.text;
          },
          destroy: function destroy() {
            q(this.axis.plotLinesAndBands, this);
            delete this.axis;
            v(this);
          }
        };
        C(e.prototype, {
          getPlotBandPath: function getPlotBandPath(c, e) {
            var m = this.getPlotLinePath({
              value: e,
              force: !0,
              acrossPanes: this.options.acrossPanes
            }),
                r = this.getPlotLinePath({
              value: c,
              force: !0,
              acrossPanes: this.options.acrossPanes
            }),
                f = [],
                b = this.horiz,
                a = 1;
            c = c < this.min && e < this.min || c > this.max && e > this.max;

            if (r && m) {
              if (c) {
                var d = r.toString() === m.toString();
                a = 0;
              }

              for (c = 0; c < r.length; c += 6) {
                b && m[c + 1] === r[c + 1] ? (m[c + 1] += a, m[c + 4] += a) : b || m[c + 2] !== r[c + 2] || (m[c + 2] += a, m[c + 5] += a), f.push("M", r[c + 1], r[c + 2], "L", r[c + 4], r[c + 5], m[c + 4], m[c + 5], m[c + 1], m[c + 2], "z"), f.isFlat = d;
              }
            }

            return f;
          },
          addPlotBand: function addPlotBand(c) {
            return this.addPlotBandOrLine(c, "plotBands");
          },
          addPlotLine: function addPlotLine(c) {
            return this.addPlotBandOrLine(c, "plotLines");
          },
          addPlotBandOrLine: function addPlotBandOrLine(e, r) {
            var m = new c.PlotLineOrBand(this, e).render(),
                q = this.userOptions;

            if (m) {
              if (r) {
                var f = q[r] || [];
                f.push(e);
                q[r] = f;
              }

              this.plotLinesAndBands.push(m);
            }

            return m;
          },
          removePlotBandOrLine: function removePlotBandOrLine(c) {
            for (var e = this.plotLinesAndBands, m = this.options, A = this.userOptions, f = e.length; f--;) {
              e[f].id === c && e[f].destroy();
            }

            [m.plotLines || [], A.plotLines || [], m.plotBands || [], A.plotBands || []].forEach(function (b) {
              for (f = b.length; f--;) {
                b[f].id === c && q(b, b[f]);
              }
            });
          },
          removePlotBand: function removePlotBand(c) {
            this.removePlotBandOrLine(c);
          },
          removePlotLine: function removePlotLine(c) {
            this.removePlotBandOrLine(c);
          }
        });
      });
      M(J, "parts/Tooltip.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.clamp,
            I = e.defined,
            G = e.discardElement,
            H = e.extend,
            v = e.isNumber,
            q = e.isString,
            C = e.pick,
            B = e.splat,
            u = e.syncTimeout;
        "";
        var w = c.doc,
            m = c.format,
            r = c.merge,
            D = c.timeUnits;

        c.Tooltip = function () {
          this.init.apply(this, arguments);
        };

        c.Tooltip.prototype = {
          init: function init(c, f) {
            this.chart = c;
            this.options = f;
            this.crosshairs = [];
            this.now = {
              x: 0,
              y: 0
            };
            this.isHidden = !0;
            this.split = f.split && !c.inverted && !c.polar;
            this.shared = f.shared || this.split;
            this.outside = C(f.outside, !(!c.scrollablePixelsX && !c.scrollablePixelsY));
          },
          cleanSplit: function cleanSplit(c) {
            this.chart.series.forEach(function (f) {
              var b = f && f.tt;
              b && (!b.isActive || c ? f.tt = b.destroy() : b.isActive = !1);
            });
          },
          applyFilter: function applyFilter() {
            var c = this.chart;
            c.renderer.definition({
              tagName: "filter",
              id: "drop-shadow-" + c.index,
              opacity: .5,
              children: [{
                tagName: "feGaussianBlur",
                "in": "SourceAlpha",
                stdDeviation: 1
              }, {
                tagName: "feOffset",
                dx: 1,
                dy: 1
              }, {
                tagName: "feComponentTransfer",
                children: [{
                  tagName: "feFuncA",
                  type: "linear",
                  slope: .3
                }]
              }, {
                tagName: "feMerge",
                children: [{
                  tagName: "feMergeNode"
                }, {
                  tagName: "feMergeNode",
                  "in": "SourceGraphic"
                }]
              }]
            });
            c.renderer.definition({
              tagName: "style",
              textContent: ".highcharts-tooltip-" + c.index + "{filter:url(#drop-shadow-" + c.index + ")}"
            });
          },
          getLabel: function getLabel() {
            var e = this,
                f = this.chart.renderer,
                b = this.chart.styledMode,
                a = this.options,
                d = "tooltip" + (I(a.className) ? " " + a.className : ""),
                h;

            if (!this.label) {
              this.outside && (this.container = h = c.doc.createElement("div"), h.className = "highcharts-tooltip-container", c.css(h, {
                position: "absolute",
                top: "1px",
                pointerEvents: a.style && a.style.pointerEvents,
                zIndex: 3
              }), c.doc.body.appendChild(h), this.renderer = f = new c.Renderer(h, 0, 0, {}, void 0, void 0, f.styledMode));
              this.split ? this.label = f.g(d) : (this.label = f.label("", 0, 0, a.shape || "callout", null, null, a.useHTML, null, d).attr({
                padding: a.padding,
                r: a.borderRadius
              }), b || this.label.attr({
                fill: a.backgroundColor,
                "stroke-width": a.borderWidth
              }).css(a.style).shadow(a.shadow));
              b && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

              if (e.outside && !e.split) {
                var k = {
                  x: this.label.xSetter,
                  y: this.label.ySetter
                };

                this.label.xSetter = function (a, b) {
                  k[b].call(this.label, e.distance);
                  h.style.left = a + "px";
                };

                this.label.ySetter = function (a, b) {
                  k[b].call(this.label, e.distance);
                  h.style.top = a + "px";
                };
              }

              this.label.attr({
                zIndex: 8
              }).add();
            }

            return this.label;
          },
          update: function update(c) {
            this.destroy();
            r(!0, this.chart.options.tooltip.userOptions, c);
            this.init(this.chart, r(!0, this.options, c));
          },
          destroy: function destroy() {
            this.label && (this.label = this.label.destroy());
            this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
            this.renderer && (this.renderer = this.renderer.destroy(), G(this.container));
            c.clearTimeout(this.hideTimer);
            c.clearTimeout(this.tooltipTimeout);
          },
          move: function move(e, f, b, a) {
            var d = this,
                h = d.now,
                k = !1 !== d.options.animation && !d.isHidden && (1 < Math.abs(e - h.x) || 1 < Math.abs(f - h.y)),
                l = d.followPointer || 1 < d.len;
            H(h, {
              x: k ? (2 * h.x + e) / 3 : e,
              y: k ? (h.y + f) / 2 : f,
              anchorX: l ? void 0 : k ? (2 * h.anchorX + b) / 3 : b,
              anchorY: l ? void 0 : k ? (h.anchorY + a) / 2 : a
            });
            d.getLabel().attr(h);
            k && (c.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
              d && d.move(e, f, b, a);
            }, 32));
          },
          hide: function hide(e) {
            var f = this;
            c.clearTimeout(this.hideTimer);
            e = C(e, this.options.hideDelay, 500);
            this.isHidden || (this.hideTimer = u(function () {
              f.getLabel()[e ? "fadeOut" : "hide"]();
              f.isHidden = !0;
            }, e));
          },
          getAnchor: function getAnchor(c, f) {
            var b = this.chart,
                a = b.pointer,
                d = b.inverted,
                h = b.plotTop,
                k = b.plotLeft,
                l = 0,
                e = 0,
                p,
                g;
            c = B(c);
            this.followPointer && f ? ("undefined" === typeof f.chartX && (f = a.normalize(f)), c = [f.chartX - b.plotLeft, f.chartY - h]) : c[0].tooltipPos ? c = c[0].tooltipPos : (c.forEach(function (a) {
              p = a.series.yAxis;
              g = a.series.xAxis;
              l += a.plotX + (!d && g ? g.left - k : 0);
              e += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!d && p ? p.top - h : 0);
            }), l /= c.length, e /= c.length, c = [d ? b.plotWidth - e : l, this.shared && !d && 1 < c.length && f ? f.chartY - h : d ? b.plotHeight - l : e]);
            return c.map(Math.round);
          },
          getPosition: function getPosition(c, f, b) {
            var a = this.chart,
                d = this.distance,
                h = {},
                k = a.inverted && b.h || 0,
                l,
                e = this.outside,
                p = e ? w.documentElement.clientWidth - 2 * d : a.chartWidth,
                g = e ? Math.max(w.body.scrollHeight, w.documentElement.scrollHeight, w.body.offsetHeight, w.documentElement.offsetHeight, w.documentElement.clientHeight) : a.chartHeight,
                t = a.pointer.getChartPosition(),
                x = a.containerScaling,
                L = function L(a) {
              return x ? a * x.scaleX : a;
            },
                E = function E(a) {
              return x ? a * x.scaleY : a;
            },
                n = function n(h) {
              var n = "x" === h;
              return [h, n ? p : g, n ? c : f].concat(e ? [n ? L(c) : E(f), n ? t.left - d + L(b.plotX + a.plotLeft) : t.top - d + E(b.plotY + a.plotTop), 0, n ? p : g] : [n ? c : f, n ? b.plotX + a.plotLeft : b.plotY + a.plotTop, n ? a.plotLeft : a.plotTop, n ? a.plotLeft + a.plotWidth : a.plotTop + a.plotHeight]);
            },
                z = n("y"),
                m = n("x"),
                r = !this.followPointer && C(b.ttBelow, !a.inverted === !!b.negative),
                q = function q(a, b, g, f, c, t, n) {
              var l = "y" === a ? E(d) : L(d),
                  x = (g - f) / 2,
                  e = f < c - d,
                  p = c + d + f < b,
                  z = c - l - g + x;
              c = c + l - x;
              if (r && p) h[a] = c;else if (!r && e) h[a] = z;else if (e) h[a] = Math.min(n - f, 0 > z - k ? z : z - k);else if (p) h[a] = Math.max(t, c + k + g > b ? c : c + k);else return !1;
            },
                A = function A(a, b, g, f, c) {
              var t;
              c < d || c > b - d ? t = !1 : h[a] = c < g / 2 ? 1 : c > b - f / 2 ? b - f - 2 : c - g / 2;
              return t;
            },
                u = function u(a) {
              var b = z;
              z = m;
              m = b;
              l = a;
            },
                v = function v() {
              !1 !== q.apply(0, z) ? !1 !== A.apply(0, m) || l || (u(!0), v()) : l ? h.x = h.y = 0 : (u(!0), v());
            };

            (a.inverted || 1 < this.len) && u();
            v();
            return h;
          },
          defaultFormatter: function defaultFormatter(c) {
            var f = this.points || B(this);
            var b = [c.tooltipFooterHeaderFormatter(f[0])];
            b = b.concat(c.bodyFormatter(f));
            b.push(c.tooltipFooterHeaderFormatter(f[0], !0));
            return b;
          },
          refresh: function refresh(e, f) {
            var b = this.chart,
                a = this.options,
                d = e,
                h = {},
                k = [],
                l = a.formatter || this.defaultFormatter;
            h = this.shared;
            var y = b.styledMode;

            if (a.enabled) {
              c.clearTimeout(this.hideTimer);
              this.followPointer = B(d)[0].series.tooltipOptions.followPointer;
              var p = this.getAnchor(d, f);
              f = p[0];
              var g = p[1];
              !h || d.series && d.series.noSharedTooltip ? h = d.getLabelConfig() : (b.pointer.applyInactiveState(d), d.forEach(function (a) {
                a.setState("hover");
                k.push(a.getLabelConfig());
              }), h = {
                x: d[0].category,
                y: d[0].y
              }, h.points = k, d = d[0]);
              this.len = k.length;
              b = l.call(h, this);
              l = d.series;
              this.distance = C(l.tooltipOptions.distance, 16);
              !1 === b ? this.hide() : (this.split ? this.renderSplit(b, B(e)) : (e = this.getLabel(), a.style.width && !y || e.css({
                width: this.chart.spacingBox.width
              }), e.attr({
                text: b && b.join ? b.join("") : b
              }), e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + C(d.colorIndex, l.colorIndex)), y || e.attr({
                stroke: a.borderColor || d.color || l.color || "#666666"
              }), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: d.negative,
                ttBelow: d.ttBelow,
                h: p[2] || 0
              })), this.isHidden && this.label && this.label.attr({
                opacity: 1
              }).show(), this.isHidden = !1);
              c.fireEvent(this, "refresh");
            }
          },
          renderSplit: function renderSplit(e, f) {
            function b(a, b, d, g, c) {
              void 0 === c && (c = !0);
              d ? (b = D ? 0 : I, a = F(a - g / 2, K.left, K.right - g)) : (b -= B, a = c ? a - g - v : a + v, a = F(a, c ? a : K.left, K.right));
              return {
                x: a,
                y: b
              };
            }

            var a = this,
                d = a.chart,
                h = a.chart,
                k = h.chartWidth,
                l = h.chartHeight,
                y = h.plotHeight,
                p = h.plotLeft,
                g = h.plotTop,
                t = h.plotWidth,
                x = h.pointer,
                L = h.renderer,
                E = h.scrollablePixelsX;
            E = void 0 === E ? 0 : E;
            var n = h.scrollablePixelsY,
                z = void 0 === n ? 0 : n;
            n = h.scrollingContainer;
            n = void 0 === n ? {
              scrollLeft: 0,
              scrollTop: 0
            } : n;
            var m = n.scrollLeft,
                r = n.scrollTop,
                u = h.styledMode,
                v = a.distance,
                w = a.options,
                A = a.options.positioner,
                K = {
              left: E ? p : 0,
              right: E ? p + t - E : k,
              top: z ? g : 0,
              bottom: z ? g + y - z : l
            },
                R = a.getLabel(),
                D = !(!d.xAxis[0] || !d.xAxis[0].opposite),
                B = g,
                G = 0,
                I = y - z;
            q(e) && (e = [!1, e]);
            e = e.slice(0, f.length + 1).reduce(function (d, c, h) {
              if (!1 !== c && "" !== c) {
                h = f[h - 1] || {
                  isHeader: !0,
                  plotX: f[0].plotX,
                  plotY: y,
                  series: {}
                };
                var t = h.isHeader,
                    n = t ? a : h.series,
                    l = n.tt,
                    x = h.isHeader;
                var e = h.series;
                var k = "highcharts-color-" + C(h.colorIndex, e.colorIndex, "none");
                l || (l = {
                  padding: w.padding,
                  r: w.borderRadius
                }, u || (l.fill = w.backgroundColor, l["stroke-width"] = w.borderWidth), l = L.label(null, null, null, w[x ? "headerShape" : "shape"] || "callout", null, null, w.useHTML).addClass(x ? "highcharts-tooltip-header " : "highcharts-tooltip-box " + k).attr(l).add(R));
                l.isActive = !0;
                l.attr({
                  text: c
                });
                u || l.css(w.style).shadow(w.shadow).attr({
                  stroke: w.borderColor || h.color || e.color || "#333333"
                });
                c = n.tt = l;
                x = c.getBBox();
                n = x.width + c.strokeWidth();
                t && (G = x.height, I += G, D && (B -= G));
                e = h.plotX;
                e = void 0 === e ? 0 : e;
                k = h.plotY;
                k = void 0 === k ? 0 : k;
                var E = h.series;
                h.isHeader ? (e = p + e - m, k = g + (y - z) / 2) : (l = E.xAxis, E = E.yAxis, e = l.pos + F(e, -v, l.len + v) - m, k = E.pos + F(k, 0, E.len) - r);
                e = F(e, K.left - v, K.right + v);
                k = F(k, K.top, K.bottom);
                x = x.height + 1;
                l = A ? A.call(a, n, x, h) : b(e, k, t, n);
                d.push({
                  align: A ? 0 : void 0,
                  anchorX: e,
                  anchorY: k,
                  boxWidth: n,
                  point: h,
                  rank: C(l.rank, t ? 1 : 0),
                  size: x,
                  target: l.y,
                  tt: c,
                  x: l.x
                });
              }

              return d;
            }, []);
            !A && e.some(function (a) {
              return 0 > a.x;
            }) && (e = e.map(function (a) {
              var d = b(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1);
              return H(a, {
                target: d.y,
                x: d.x
              });
            }));
            a.cleanSplit();
            c.distribute(e, I, void 0);
            e.forEach(function (a) {
              var b = a.pos;
              a.tt.attr({
                visibility: "undefined" === typeof b ? "hidden" : "inherit",
                x: a.x,
                y: b + B,
                anchorX: a.anchorX,
                anchorY: a.anchorY
              });
            });
            e = a.container;
            d = a.renderer;
            a.outside && e && d && (h = R.getBBox(), d.setSize(h.width + h.x, h.height + h.y, !1), x = x.getChartPosition(), e.style.left = x.left + "px", e.style.top = x.top + "px");
          },
          updatePosition: function updatePosition(e) {
            var f = this.chart,
                b = f.pointer,
                a = this.getLabel(),
                d = e.plotX + f.plotLeft,
                h = e.plotY + f.plotTop;
            b = b.getChartPosition();
            e = (this.options.positioner || this.getPosition).call(this, a.width, a.height, e);

            if (this.outside) {
              var k = (this.options.borderWidth || 0) + 2 * this.distance;
              this.renderer.setSize(a.width + k, a.height + k, !1);
              if (f = f.containerScaling) c.css(this.container, {
                transform: "scale(" + f.scaleX + ", " + f.scaleY + ")"
              }), d *= f.scaleX, h *= f.scaleY;
              d += b.left - e.x;
              h += b.top - e.y;
            }

            this.move(Math.round(e.x), Math.round(e.y || 0), d, h);
          },
          getDateFormat: function getDateFormat(c, f, b, a) {
            var d = this.chart.time,
                h = d.dateFormat("%m-%d %H:%M:%S.%L", f),
                e = {
              millisecond: 15,
              second: 12,
              minute: 9,
              hour: 6,
              day: 3
            },
                l = "millisecond";

            for (y in D) {
              if (c === D.week && +d.dateFormat("%w", f) === b && "00:00:00.000" === h.substr(6)) {
                var y = "week";
                break;
              }

              if (D[y] > c) {
                y = l;
                break;
              }

              if (e[y] && h.substr(e[y]) !== "01-01 00:00:00.000".substr(e[y])) break;
              "week" !== y && (l = y);
            }

            if (y) var p = d.resolveDTLFormat(a[y]).main;
            return p;
          },
          getXDateFormat: function getXDateFormat(c, f, b) {
            f = f.dateTimeLabelFormats;
            var a = b && b.closestPointRange;
            return (a ? this.getDateFormat(a, c.x, b.options.startOfWeek, f) : f.day) || f.year;
          },
          tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(e, f) {
            var b = f ? "footer" : "header",
                a = e.series,
                d = a.tooltipOptions,
                h = d.xDateFormat,
                k = a.xAxis,
                l = k && "datetime" === k.options.type && v(e.key),
                y = d[b + "Format"];
            f = {
              isFooter: f,
              labelConfig: e
            };
            c.fireEvent(this, "headerFormatter", f, function (b) {
              l && !h && (h = this.getXDateFormat(e, d, k));
              l && h && (e.point && e.point.tooltipDateKeys || ["key"]).forEach(function (a) {
                y = y.replace("{point." + a + "}", "{point." + a + ":" + h + "}");
              });
              a.chart.styledMode && (y = this.styledModeFormat(y));
              b.text = m(y, {
                point: e,
                series: a
              }, this.chart);
            });
            return f.text;
          },
          bodyFormatter: function bodyFormatter(c) {
            return c.map(function (c) {
              var b = c.series.tooltipOptions;
              return (b[(c.point.formatPrefix || "point") + "Formatter"] || c.point.tooltipFormatter).call(c.point, b[(c.point.formatPrefix || "point") + "Format"] || "");
            });
          },
          styledModeFormat: function styledModeFormat(c) {
            return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
          }
        };
      });
      M(J, "parts/Pointer.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.attr,
            I = e.defined,
            G = e.extend,
            H = e.isNumber,
            v = e.isObject,
            q = e.objectEach,
            C = e.offset,
            B = e.pick,
            u = e.splat,
            w = c.addEvent,
            m = c.charts,
            r = c.color,
            D = c.css,
            A = c.find,
            f = c.fireEvent,
            b = c.Tooltip;

        c.Pointer = function (a, b) {
          this.init(a, b);
        };

        c.Pointer.prototype = {
          init: function init(a, d) {
            this.options = d;
            this.chart = a;
            this.runChartClick = d.chart.events && !!d.chart.events.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            b && (a.tooltip = new b(a, d.tooltip), this.followTouchMove = B(d.tooltip.followTouchMove, !0));
            this.setDOMEvents();
          },
          zoomOption: function zoomOption(a) {
            var b = this.chart,
                c = b.options.chart,
                f = c.zoomType || "";
            b = b.inverted;
            /touch/.test(a.type) && (f = B(c.pinchType, f));
            this.zoomX = a = /x/.test(f);
            this.zoomY = f = /y/.test(f);
            this.zoomHor = a && !b || f && b;
            this.zoomVert = f && !b || a && b;
            this.hasZoom = a || f;
          },
          getChartPosition: function getChartPosition() {
            var a = this.chart;
            a = a.scrollingContainer || a.container;
            return this.chartPosition || (this.chartPosition = C(a));
          },
          normalize: function normalize(a, b) {
            var d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            b || (b = this.getChartPosition());
            var c = d.pageX - b.left;
            b = d.pageY - b.top;
            if (d = this.chart.containerScaling) c /= d.scaleX, b /= d.scaleY;
            return G(a, {
              chartX: Math.round(c),
              chartY: Math.round(b)
            });
          },
          getCoordinates: function getCoordinates(a) {
            var b = {
              xAxis: [],
              yAxis: []
            };
            this.chart.axes.forEach(function (d) {
              b[d.isXAxis ? "xAxis" : "yAxis"].push({
                axis: d,
                value: d.toValue(a[d.horiz ? "chartX" : "chartY"])
              });
            });
            return b;
          },
          findNearestKDPoint: function findNearestKDPoint(a, b, c) {
            var d;
            a.forEach(function (a) {
              var f = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y");
              a = a.searchPoint(c, f);

              if ((f = v(a, !0)) && !(f = !v(d, !0))) {
                f = d.distX - a.distX;
                var h = d.dist - a.dist,
                    g = (a.series.group && a.series.group.zIndex) - (d.series.group && d.series.group.zIndex);
                f = 0 < (0 !== f && b ? f : 0 !== h ? h : 0 !== g ? g : d.series.index > a.series.index ? -1 : 1);
              }

              f && (d = a);
            });
            return d;
          },
          getPointFromEvent: function getPointFromEvent(a) {
            a = a.target;

            for (var b; a && !b;) {
              b = a.point, a = a.parentNode;
            }

            return b;
          },
          getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, b) {
            var d = a.series,
                c = d.xAxis;
            d = d.yAxis;
            var f = B(a.clientX, a.plotX),
                e = a.shapeArgs;
            if (c && d) return b ? {
              chartX: c.len + c.pos - f,
              chartY: d.len + d.pos - a.plotY
            } : {
              chartX: f + c.pos,
              chartY: a.plotY + d.pos
            };
            if (e && e.x && e.y) return {
              chartX: e.x,
              chartY: e.y
            };
          },
          getHoverData: function getHoverData(a, b, c, f, e, y) {
            var d,
                g = [];
            f = !(!f || !a);
            var h = b && !b.stickyTracking ? [b] : c.filter(function (a) {
              return a.visible && !(!e && a.directTouch) && B(a.options.enableMouseTracking, !0) && a.stickyTracking;
            });
            b = (d = f || !y ? a : this.findNearestKDPoint(h, e, y)) && d.series;
            d && (e && !b.noSharedTooltip ? (h = c.filter(function (a) {
              return a.visible && !(!e && a.directTouch) && B(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
            }), h.forEach(function (a) {
              var b = A(a.points, function (a) {
                return a.x === d.x && !a.isNull;
              });
              v(b) && (a.chart.isBoosting && (b = a.getPoint(b)), g.push(b));
            })) : g.push(d));
            return {
              hoverPoint: d,
              hoverSeries: b,
              hoverPoints: g
            };
          },
          runPointActions: function runPointActions(a, b) {
            var d = this.chart,
                f = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
                e = f ? f.shared : !1,
                y = b || d.hoverPoint,
                p = y && y.series || d.hoverSeries;
            p = this.getHoverData(y, p, d.series, (!a || "touchmove" !== a.type) && (!!b || p && p.directTouch && this.isDirectTouch), e, a);
            y = p.hoverPoint;
            var g = p.hoverPoints;
            b = (p = p.hoverSeries) && p.tooltipOptions.followPointer;
            e = e && p && !p.noSharedTooltip;

            if (y && (y !== d.hoverPoint || f && f.isHidden)) {
              (d.hoverPoints || []).forEach(function (a) {
                -1 === g.indexOf(a) && a.setState();
              });
              if (d.hoverSeries !== p) p.onMouseOver();
              this.applyInactiveState(g);
              (g || []).forEach(function (a) {
                a.setState("hover");
              });
              d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");
              if (!y.series) return;
              y.firePointEvent("mouseOver");
              d.hoverPoints = g;
              d.hoverPoint = y;
              f && f.refresh(e ? g : y, a);
            } else b && f && !f.isHidden && (y = f.getAnchor([{}], a), f.updatePosition({
              plotX: y[0],
              plotY: y[1]
            }));

            this.unDocMouseMove || (this.unDocMouseMove = w(d.container.ownerDocument, "mousemove", function (a) {
              var b = m[c.hoverChartIndex];
              if (b) b.pointer.onDocumentMouseMove(a);
            }));
            d.axes.forEach(function (b) {
              var d = B(b.crosshair.snap, !0),
                  f = d ? c.find(g, function (a) {
                return a.series[b.coll] === b;
              }) : void 0;
              f || !d ? b.drawCrosshair(a, f) : b.hideCrosshair();
            });
          },
          applyInactiveState: function applyInactiveState(a) {
            var b = [],
                c;
            (a || []).forEach(function (a) {
              c = a.series;
              b.push(c);
              c.linkedParent && b.push(c.linkedParent);
              c.linkedSeries && (b = b.concat(c.linkedSeries));
              c.navigatorSeries && b.push(c.navigatorSeries);
            });
            this.chart.series.forEach(function (a) {
              -1 === b.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive");
            });
          },
          reset: function reset(a, b) {
            var d = this.chart,
                c = d.hoverSeries,
                f = d.hoverPoint,
                e = d.hoverPoints,
                p = d.tooltip,
                g = p && p.shared ? e : f;
            a && g && u(g).forEach(function (b) {
              b.series.isCartesian && "undefined" === typeof b.plotX && (a = !1);
            });
            if (a) p && g && u(g).length && (p.refresh(g), p.shared && e ? e.forEach(function (a) {
              a.setState(a.state, !0);
              a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
            }) : f && (f.setState(f.state, !0), d.axes.forEach(function (a) {
              a.crosshair && f.series[a.coll] === a && a.drawCrosshair(null, f);
            })));else {
              if (f) f.onMouseOut();
              e && e.forEach(function (a) {
                a.setState();
              });
              if (c) c.onMouseOut();
              p && p.hide(b);
              this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
              d.axes.forEach(function (a) {
                a.hideCrosshair();
              });
              this.hoverX = d.hoverPoints = d.hoverPoint = null;
            }
          },
          scaleGroups: function scaleGroups(a, b) {
            var d = this.chart,
                c;
            d.series.forEach(function (f) {
              c = a || f.getPlotBox();
              f.xAxis && f.xAxis.zoomEnabled && f.group && (f.group.attr(c), f.markerGroup && (f.markerGroup.attr(c), f.markerGroup.clip(b ? d.clipRect : null)), f.dataLabelsGroup && f.dataLabelsGroup.attr(c));
            });
            d.clipRect.attr(b || d.clipBox);
          },
          dragStart: function dragStart(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY;
          },
          drag: function drag(a) {
            var b = this.chart,
                c = b.options.chart,
                f = a.chartX,
                e = a.chartY,
                m = this.zoomHor,
                p = this.zoomVert,
                g = b.plotLeft,
                t = b.plotTop,
                x = b.plotWidth,
                L = b.plotHeight,
                E = this.selectionMarker,
                n = this.mouseDownX,
                z = this.mouseDownY,
                q = v(c.panning) ? c.panning && c.panning.enabled : c.panning,
                u = c.panKey && a[c.panKey + "Key"];
            if (!E || !E.touch) if (f < g ? f = g : f > g + x && (f = g + x), e < t ? e = t : e > t + L && (e = t + L), this.hasDragged = Math.sqrt(Math.pow(n - f, 2) + Math.pow(z - e, 2)), 10 < this.hasDragged) {
              var w = b.isInsidePlot(n - g, z - t);
              b.hasCartesianSeries && (this.zoomX || this.zoomY) && w && !u && !E && (this.selectionMarker = E = b.renderer.rect(g, t, m ? 1 : x, p ? 1 : L, 0).attr({
                "class": "highcharts-selection-marker",
                zIndex: 7
              }).add(), b.styledMode || E.attr({
                fill: c.selectionMarkerFill || r("#335cad").setOpacity(.25).get()
              }));
              E && m && (f -= n, E.attr({
                width: Math.abs(f),
                x: (0 < f ? 0 : f) + n
              }));
              E && p && (f = e - z, E.attr({
                height: Math.abs(f),
                y: (0 < f ? 0 : f) + z
              }));
              w && !E && q && b.pan(a, c.panning);
            }
          },
          drop: function drop(a) {
            var b = this,
                c = this.chart,
                e = this.hasPinched;

            if (this.selectionMarker) {
              var l = {
                originalEvent: a,
                xAxis: [],
                yAxis: []
              },
                  m = this.selectionMarker,
                  p = m.attr ? m.attr("x") : m.x,
                  g = m.attr ? m.attr("y") : m.y,
                  t = m.attr ? m.attr("width") : m.width,
                  x = m.attr ? m.attr("height") : m.height,
                  L;
              if (this.hasDragged || e) c.axes.forEach(function (d) {
                if (d.zoomEnabled && I(d.min) && (e || b[{
                  xAxis: "zoomX",
                  yAxis: "zoomY"
                }[d.coll]])) {
                  var c = d.horiz,
                      f = "touchend" === a.type ? d.minPixelPadding : 0,
                      h = d.toValue((c ? p : g) + f);
                  c = d.toValue((c ? p + t : g + x) - f);
                  l[d.coll].push({
                    axis: d,
                    min: Math.min(h, c),
                    max: Math.max(h, c)
                  });
                  L = !0;
                }
              }), L && f(c, "selection", l, function (a) {
                c.zoom(G(a, e ? {
                  animation: !1
                } : null));
              });
              H(c.index) && (this.selectionMarker = this.selectionMarker.destroy());
              e && this.scaleGroups();
            }

            c && H(c.index) && (D(c.container, {
              cursor: c._cursor
            }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
          },
          onContainerMouseDown: function onContainerMouseDown(a) {
            a = this.normalize(a);
            2 !== a.button && (this.zoomOption(a), a.preventDefault && a.preventDefault(), this.dragStart(a));
          },
          onDocumentMouseUp: function onDocumentMouseUp(a) {
            m[c.hoverChartIndex] && m[c.hoverChartIndex].pointer.drop(a);
          },
          onDocumentMouseMove: function onDocumentMouseMove(a) {
            var b = this.chart,
                c = this.chartPosition;
            a = this.normalize(a, c);
            !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
          },
          onContainerMouseLeave: function onContainerMouseLeave(a) {
            var b = m[c.hoverChartIndex];
            b && (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = void 0);
          },
          onContainerMouseMove: function onContainerMouseMove(a) {
            var b = this.chart;
            I(c.hoverChartIndex) && m[c.hoverChartIndex] && m[c.hoverChartIndex].mouseIsDown || (c.hoverChartIndex = b.index);
            a = this.normalize(a);
            a.preventDefault || (a.returnValue = !1);
            "mousedown" === b.mouseIsDown && this.drag(a);
            !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a);
          },
          inClass: function inClass(a, b) {
            for (var d; a;) {
              if (d = F(a, "class")) {
                if (-1 !== d.indexOf(b)) return !0;
                if (-1 !== d.indexOf("highcharts-container")) return !1;
              }

              a = a.parentNode;
            }
          },
          onTrackerMouseOut: function onTrackerMouseOut(a) {
            var b = this.chart.hoverSeries;
            a = a.relatedTarget || a.toElement;
            this.isDirectTouch = !1;
            if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
          },
          onContainerClick: function onContainerClick(a) {
            var b = this.chart,
                c = b.hoverPoint,
                e = b.plotLeft,
                l = b.plotTop;
            a = this.normalize(a);
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (f(c.series, "click", G(a, {
              point: c
            })), b.hoverPoint && c.firePointEvent("click", a)) : (G(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - e, a.chartY - l) && f(b, "click", a)));
          },
          setDOMEvents: function setDOMEvents() {
            var a = this,
                b = a.chart.container,
                f = b.ownerDocument;

            b.onmousedown = function (b) {
              a.onContainerMouseDown(b);
            };

            b.onmousemove = function (b) {
              a.onContainerMouseMove(b);
            };

            b.onclick = function (b) {
              a.onContainerClick(b);
            };

            this.unbindContainerMouseLeave = w(b, "mouseleave", a.onContainerMouseLeave);
            c.unbindDocumentMouseUp || (c.unbindDocumentMouseUp = w(f, "mouseup", a.onDocumentMouseUp));
            c.hasTouch && (w(b, "touchstart", function (b) {
              a.onContainerTouchStart(b);
            }), w(b, "touchmove", function (b) {
              a.onContainerTouchMove(b);
            }), c.unbindDocumentTouchEnd || (c.unbindDocumentTouchEnd = w(f, "touchend", a.onDocumentTouchEnd)));
          },
          destroy: function destroy() {
            var a = this;
            a.unDocMouseMove && a.unDocMouseMove();
            this.unbindContainerMouseLeave();
            c.chartCount || (c.unbindDocumentMouseUp && (c.unbindDocumentMouseUp = c.unbindDocumentMouseUp()), c.unbindDocumentTouchEnd && (c.unbindDocumentTouchEnd = c.unbindDocumentTouchEnd()));
            clearInterval(a.tooltipTimeout);
            q(a, function (b, c) {
              a[c] = null;
            });
          }
        };
      });
      M(J, "parts/TouchPointer.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.extend,
            I = e.pick,
            G = c.charts,
            H = c.noop;
        F(c.Pointer.prototype, {
          pinchTranslate: function pinchTranslate(c, e, C, B, u, w) {
            this.zoomHor && this.pinchTranslateDirection(!0, c, e, C, B, u, w);
            this.zoomVert && this.pinchTranslateDirection(!1, c, e, C, B, u, w);
          },
          pinchTranslateDirection: function pinchTranslateDirection(c, e, C, B, u, w, m, r) {
            var q = this.chart,
                v = c ? "x" : "y",
                f = c ? "X" : "Y",
                b = "chart" + f,
                a = c ? "width" : "height",
                d = q["plot" + (c ? "Left" : "Top")],
                h,
                k,
                l = r || 1,
                y = q.inverted,
                p = q.bounds[c ? "h" : "v"],
                g = 1 === e.length,
                t = e[0][b],
                x = C[0][b],
                L = !g && e[1][b],
                E = !g && C[1][b];

            C = function C() {
              !g && 20 < Math.abs(t - L) && (l = r || Math.abs(x - E) / Math.abs(t - L));
              k = (d - x) / l + t;
              h = q["plot" + (c ? "Width" : "Height")] / l;
            };

            C();
            e = k;

            if (e < p.min) {
              e = p.min;
              var n = !0;
            } else e + h > p.max && (e = p.max - h, n = !0);

            n ? (x -= .8 * (x - m[v][0]), g || (E -= .8 * (E - m[v][1])), C()) : m[v] = [x, E];
            y || (w[v] = k - d, w[a] = h);
            w = y ? 1 / l : l;
            u[a] = h;
            u[v] = e;
            B[y ? c ? "scaleY" : "scaleX" : "scale" + f] = l;
            B["translate" + f] = w * d + (x - w * t);
          },
          pinch: function pinch(c) {
            var e = this,
                v = e.chart,
                B = e.pinchDown,
                u = c.touches,
                w = u.length,
                m = e.lastValidTouch,
                r = e.hasZoom,
                D = e.selectionMarker,
                A = {},
                f = 1 === w && (e.inClass(c.target, "highcharts-tracker") && v.runTrackerClick || e.runChartClick),
                b = {};
            1 < w && (e.initiated = !0);
            r && e.initiated && !f && c.preventDefault();
            [].map.call(u, function (a) {
              return e.normalize(a);
            });
            "touchstart" === c.type ? ([].forEach.call(u, function (a, b) {
              B[b] = {
                chartX: a.chartX,
                chartY: a.chartY
              };
            }), m.x = [B[0].chartX, B[1] && B[1].chartX], m.y = [B[0].chartY, B[1] && B[1].chartY], v.axes.forEach(function (a) {
              if (a.zoomEnabled) {
                var b = v.bounds[a.horiz ? "h" : "v"],
                    c = a.minPixelPadding,
                    f = a.toPixels(Math.min(I(a.options.min, a.dataMin), a.dataMin)),
                    e = a.toPixels(Math.max(I(a.options.max, a.dataMax), a.dataMax)),
                    m = Math.max(f, e);
                b.min = Math.min(a.pos, Math.min(f, e) - c);
                b.max = Math.max(a.pos + a.len, m + c);
              }
            }), e.res = !0) : e.followTouchMove && 1 === w ? this.runPointActions(e.normalize(c)) : B.length && (D || (e.selectionMarker = D = F({
              destroy: H,
              touch: !0
            }, v.plotBox)), e.pinchTranslate(B, u, A, D, b, m), e.hasPinched = r, e.scaleGroups(A, b), e.res && (e.res = !1, this.reset(!1, 0)));
          },
          touch: function touch(e, q) {
            var v = this.chart,
                B;
            if (v.index !== c.hoverChartIndex) this.onContainerMouseLeave({
              relatedTarget: !0
            });
            c.hoverChartIndex = v.index;
            if (1 === e.touches.length) {
              if (e = this.normalize(e), (B = v.isInsidePlot(e.chartX - v.plotLeft, e.chartY - v.plotTop)) && !v.openMenu) {
                q && this.runPointActions(e);

                if ("touchmove" === e.type) {
                  q = this.pinchDown;
                  var u = q[0] ? 4 <= Math.sqrt(Math.pow(q[0].chartX - e.chartX, 2) + Math.pow(q[0].chartY - e.chartY, 2)) : !1;
                }

                I(u, !0) && this.pinch(e);
              } else q && this.reset();
            } else 2 === e.touches.length && this.pinch(e);
          },
          onContainerTouchStart: function onContainerTouchStart(c) {
            this.zoomOption(c);
            this.touch(c, !0);
          },
          onContainerTouchMove: function onContainerTouchMove(c) {
            this.touch(c);
          },
          onDocumentTouchEnd: function onDocumentTouchEnd(e) {
            G[c.hoverChartIndex] && G[c.hoverChartIndex].pointer.drop(e);
          }
        });
      });
      M(J, "parts/MSPointer.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.extend,
            I = e.objectEach;
        e = e.wrap;
        var G = c.addEvent,
            H = c.charts,
            v = c.css,
            q = c.doc,
            C = c.noop,
            B = c.Pointer,
            u = c.removeEvent,
            w = c.win;

        if (!c.hasTouch && (w.PointerEvent || w.MSPointerEvent)) {
          var m = {},
              r = !!w.PointerEvent,
              D = function D() {
            var c = [];

            c.item = function (b) {
              return this[b];
            };

            I(m, function (b) {
              c.push({
                pageX: b.pageX,
                pageY: b.pageY,
                target: b.target
              });
            });
            return c;
          },
              A = function A(f, b, a, d) {
            "touch" !== f.pointerType && f.pointerType !== f.MSPOINTER_TYPE_TOUCH || !H[c.hoverChartIndex] || (d(f), d = H[c.hoverChartIndex].pointer, d[b]({
              type: a,
              target: f.currentTarget,
              preventDefault: C,
              touches: D()
            }));
          };

          F(B.prototype, {
            onContainerPointerDown: function onContainerPointerDown(c) {
              A(c, "onContainerTouchStart", "touchstart", function (b) {
                m[b.pointerId] = {
                  pageX: b.pageX,
                  pageY: b.pageY,
                  target: b.currentTarget
                };
              });
            },
            onContainerPointerMove: function onContainerPointerMove(c) {
              A(c, "onContainerTouchMove", "touchmove", function (b) {
                m[b.pointerId] = {
                  pageX: b.pageX,
                  pageY: b.pageY
                };
                m[b.pointerId].target || (m[b.pointerId].target = b.currentTarget);
              });
            },
            onDocumentPointerUp: function onDocumentPointerUp(c) {
              A(c, "onDocumentTouchEnd", "touchend", function (b) {
                delete m[b.pointerId];
              });
            },
            batchMSEvents: function batchMSEvents(c) {
              c(this.chart.container, r ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
              c(this.chart.container, r ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
              c(q, r ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
            }
          });
          e(B.prototype, "init", function (c, b, a) {
            c.call(this, b, a);
            this.hasZoom && v(b.container, {
              "-ms-touch-action": "none",
              "touch-action": "none"
            });
          });
          e(B.prototype, "setDOMEvents", function (c) {
            c.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(G);
          });
          e(B.prototype, "destroy", function (c) {
            this.batchMSEvents(u);
            c.call(this);
          });
        }
      });
      M(J, "parts/Legend.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.defined,
            I = e.discardElement,
            G = e.isNumber,
            H = e.pick,
            v = e.relativeLength,
            q = e.setAnimation,
            C = e.syncTimeout;
        e = e.wrap;
        var B = c.addEvent,
            u = c.css,
            w = c.fireEvent,
            m = c.isFirefox,
            r = c.marginNames,
            D = c.merge,
            A = c.stableSort,
            f = c.win;

        c.Legend = function (b, a) {
          this.init(b, a);
        };

        c.Legend.prototype = {
          init: function init(b, a) {
            this.chart = b;
            this.setOptions(a);
            a.enabled && (this.render(), B(this.chart, "endResize", function () {
              this.legend.positionCheckboxes();
            }), this.proximate ? this.unchartrender = B(this.chart, "render", function () {
              this.legend.proximatePositions();
              this.legend.positionItems();
            }) : this.unchartrender && this.unchartrender());
          },
          setOptions: function setOptions(b) {
            var a = H(b.padding, 8);
            this.options = b;
            this.chart.styledMode || (this.itemStyle = b.itemStyle, this.itemHiddenStyle = D(this.itemStyle, b.itemHiddenStyle));
            this.itemMarginTop = b.itemMarginTop || 0;
            this.itemMarginBottom = b.itemMarginBottom || 0;
            this.padding = a;
            this.initialItemY = a - 5;
            this.symbolWidth = H(b.symbolWidth, 16);
            this.pages = [];
            this.proximate = "proximate" === b.layout && !this.chart.inverted;
          },
          update: function update(b, a) {
            var d = this.chart;
            this.setOptions(D(!0, this.options, b));
            this.destroy();
            d.isDirtyLegend = d.isDirtyBox = !0;
            H(a, !0) && d.redraw();
            w(this, "afterUpdate");
          },
          colorizeItem: function colorizeItem(b, a) {
            b.legendGroup[a ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

            if (!this.chart.styledMode) {
              var d = this.options,
                  c = b.legendItem,
                  f = b.legendLine,
                  e = b.legendSymbol,
                  m = this.itemHiddenStyle.color;
              d = a ? d.itemStyle.color : m;
              var p = a ? b.color || m : m,
                  g = b.options && b.options.marker,
                  t = {
                fill: p
              };
              c && c.css({
                fill: d,
                color: d
              });
              f && f.attr({
                stroke: p
              });
              e && (g && e.isMarker && (t = b.pointAttribs(), a || (t.stroke = t.fill = m)), e.attr(t));
            }

            w(this, "afterColorizeItem", {
              item: b,
              visible: a
            });
          },
          positionItems: function positionItems() {
            this.allItems.forEach(this.positionItem, this);
            this.chart.isResizing || this.positionCheckboxes();
          },
          positionItem: function positionItem(b) {
            var a = this.options,
                d = a.symbolPadding;
            a = !a.rtl;
            var c = b._legendItemPos,
                f = c[0];
            c = c[1];
            var e = b.checkbox;
            if ((b = b.legendGroup) && b.element) b[F(b.translateY) ? "animate" : "attr"]({
              translateX: a ? f : this.legendWidth - f - 2 * d - 4,
              translateY: c
            });
            e && (e.x = f, e.y = c);
          },
          destroyItem: function destroyItem(b) {
            var a = b.checkbox;
            ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (a) {
              b[a] && (b[a] = b[a].destroy());
            });
            a && I(b.checkbox);
          },
          destroy: function destroy() {
            function b(a) {
              this[a] && (this[a] = this[a].destroy());
            }

            this.getAllItems().forEach(function (a) {
              ["legendItem", "legendGroup"].forEach(b, a);
            });
            "clipRect up down pager nav box title group".split(" ").forEach(b, this);
            this.display = null;
          },
          positionCheckboxes: function positionCheckboxes() {
            var b = this.group && this.group.alignAttr,
                a = this.clipHeight || this.legendHeight,
                d = this.titleHeight;

            if (b) {
              var c = b.translateY;
              this.allItems.forEach(function (f) {
                var e = f.checkbox;

                if (e) {
                  var h = c + d + e.y + (this.scrollOffset || 0) + 3;
                  u(e, {
                    left: b.translateX + f.checkboxOffset + e.x - 20 + "px",
                    top: h + "px",
                    display: this.proximate || h > c - 6 && h < c + a - 6 ? "" : "none"
                  });
                }
              }, this);
            }
          },
          renderTitle: function renderTitle() {
            var b = this.options,
                a = this.padding,
                d = b.title,
                c = 0;
            d.text && (this.title || (this.title = this.chart.renderer.label(d.text, a - 3, a - 4, null, null, null, b.useHTML, null, "legend-title").attr({
              zIndex: 1
            }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({
              width: this.maxLegendWidth + "px"
            }), b = this.title.getBBox(), c = b.height, this.offsetWidth = b.width, this.contentGroup.attr({
              translateY: c
            }));
            this.titleHeight = c;
          },
          setText: function setText(b) {
            var a = this.options;
            b.legendItem.attr({
              text: a.labelFormat ? c.format(a.labelFormat, b, this.chart) : a.labelFormatter.call(b)
            });
          },
          renderItem: function renderItem(b) {
            var a = this.chart,
                d = a.renderer,
                c = this.options,
                f = this.symbolWidth,
                e = c.symbolPadding,
                m = this.itemStyle,
                p = this.itemHiddenStyle,
                g = "horizontal" === c.layout ? H(c.itemDistance, 20) : 0,
                t = !c.rtl,
                x = b.legendItem,
                L = !b.series,
                E = !L && b.series.drawLegendSymbol ? b.series : b,
                n = E.options;
            n = this.createCheckboxForItem && n && n.showCheckbox;
            g = f + e + g + (n ? 20 : 0);
            var z = c.useHTML,
                r = b.options.className;
            x || (b.legendGroup = d.g("legend-item").addClass("highcharts-" + E.type + "-series highcharts-color-" + b.colorIndex + (r ? " " + r : "") + (L ? " highcharts-series-" + b.index : "")).attr({
              zIndex: 1
            }).add(this.scrollGroup), b.legendItem = x = d.text("", t ? f + e : -e, this.baseline || 0, z), a.styledMode || x.css(D(b.visible ? m : p)), x.attr({
              align: t ? "left" : "right",
              zIndex: 2
            }).add(b.legendGroup), this.baseline || (this.fontMetrics = d.fontMetrics(a.styledMode ? 12 : m.fontSize, x), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, x.attr("y", this.baseline)), this.symbolHeight = c.symbolHeight || this.fontMetrics.f, E.drawLegendSymbol(this, b), this.setItemEvents && this.setItemEvents(b, x, z));
            n && !b.checkbox && this.createCheckboxForItem(b);
            this.colorizeItem(b, b.visible);
            !a.styledMode && m.width || x.css({
              width: (c.itemWidth || this.widthOption || a.spacingBox.width) - g
            });
            this.setText(b);
            a = x.getBBox();
            b.itemWidth = b.checkboxOffset = c.itemWidth || b.legendItemWidth || a.width + g;
            this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth);
            this.totalItemWidth += b.itemWidth;
            this.itemHeight = b.itemHeight = Math.round(b.legendItemHeight || a.height || this.symbolHeight);
          },
          layoutItem: function layoutItem(b) {
            var a = this.options,
                d = this.padding,
                c = "horizontal" === a.layout,
                f = b.itemHeight,
                e = this.itemMarginBottom,
                m = this.itemMarginTop,
                p = c ? H(a.itemDistance, 20) : 0,
                g = this.maxLegendWidth;
            a = a.alignColumns && this.totalItemWidth > g ? this.maxItemWidth : b.itemWidth;
            c && this.itemX - d + a > g && (this.itemX = d, this.lastLineHeight && (this.itemY += m + this.lastLineHeight + e), this.lastLineHeight = 0);
            this.lastItemY = m + this.itemY + e;
            this.lastLineHeight = Math.max(f, this.lastLineHeight);
            b._legendItemPos = [this.itemX, this.itemY];
            c ? this.itemX += a : (this.itemY += m + f + e, this.lastLineHeight = f);
            this.offsetWidth = this.widthOption || Math.max((c ? this.itemX - d - (b.checkbox ? 0 : p) : a) + d, this.offsetWidth);
          },
          getAllItems: function getAllItems() {
            var b = [];
            this.chart.series.forEach(function (a) {
              var d = a && a.options;
              a && H(d.showInLegend, F(d.linkedTo) ? !1 : void 0, !0) && (b = b.concat(a.legendItems || ("point" === d.legendType ? a.data : a)));
            });
            w(this, "afterGetAllItems", {
              allItems: b
            });
            return b;
          },
          getAlignment: function getAlignment() {
            var b = this.options;
            return this.proximate ? b.align.charAt(0) + "tv" : b.floating ? "" : b.align.charAt(0) + b.verticalAlign.charAt(0) + b.layout.charAt(0);
          },
          adjustMargins: function adjustMargins(b, a) {
            var d = this.chart,
                c = this.options,
                f = this.getAlignment();
            f && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (e, h) {
              e.test(f) && !F(b[h]) && (d[r[h]] = Math.max(d[r[h]], d.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h] * c[h % 2 ? "x" : "y"] + H(c.margin, 12) + a[h] + (d.titleOffset[h] || 0)));
            });
          },
          proximatePositions: function proximatePositions() {
            var b = this.chart,
                a = [],
                d = "left" === this.options.align;
            this.allItems.forEach(function (f) {
              var e = d;

              if (f.yAxis && f.points) {
                f.xAxis.options.reversed && (e = !e);
                var h = c.find(e ? f.points : f.points.slice(0).reverse(), function (a) {
                  return G(a.plotY);
                });
                e = this.itemMarginTop + f.legendItem.getBBox().height + this.itemMarginBottom;
                var m = f.yAxis.top - b.plotTop;
                f.visible ? (h = h ? h.plotY : f.yAxis.height, h += m - .3 * e) : h = m + f.yAxis.height;
                a.push({
                  target: h,
                  size: e,
                  item: f
                });
              }
            }, this);
            c.distribute(a, b.plotHeight);
            a.forEach(function (a) {
              a.item._legendItemPos[1] = b.plotTop - b.spacing[0] + a.pos;
            });
          },
          render: function render() {
            var b = this.chart,
                a = b.renderer,
                d = this.group,
                c,
                f = this.box,
                e = this.options,
                m = this.padding;
            this.itemX = m;
            this.itemY = this.initialItemY;
            this.lastItemY = this.offsetWidth = 0;
            this.widthOption = v(e.width, b.spacingBox.width - m);
            var p = b.spacingBox.width - 2 * m - e.x;
            -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (p /= 2);
            this.maxLegendWidth = this.widthOption || p;
            d || (this.group = d = a.g("legend").attr({
              zIndex: 7
            }).add(), this.contentGroup = a.g().attr({
              zIndex: 1
            }).add(d), this.scrollGroup = a.g().add(this.contentGroup));
            this.renderTitle();
            p = this.getAllItems();
            A(p, function (a, b) {
              return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
            });
            e.reversed && p.reverse();
            this.allItems = p;
            this.display = c = !!p.length;
            this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
            p.forEach(this.renderItem, this);
            p.forEach(this.layoutItem, this);
            p = (this.widthOption || this.offsetWidth) + m;
            var g = this.lastItemY + this.lastLineHeight + this.titleHeight;
            g = this.handleOverflow(g);
            g += m;
            f || (this.box = f = a.rect().addClass("highcharts-legend-box").attr({
              r: e.borderRadius
            }).add(d), f.isNew = !0);
            b.styledMode || f.attr({
              stroke: e.borderColor,
              "stroke-width": e.borderWidth || 0,
              fill: e.backgroundColor || "none"
            }).shadow(e.shadow);
            0 < p && 0 < g && (f[f.isNew ? "attr" : "animate"](f.crisp.call({}, {
              x: 0,
              y: 0,
              width: p,
              height: g
            }, f.strokeWidth())), f.isNew = !1);
            f[c ? "show" : "hide"]();
            b.styledMode && "none" === d.getStyle("display") && (p = g = 0);
            this.legendWidth = p;
            this.legendHeight = g;
            c && (a = b.spacingBox, f = a.y, /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? f += b.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b.titleOffset[2] && (f -= b.titleOffset[2]), f !== a.y && (a = D(a, {
              y: f
            })), d.align(D(e, {
              width: p,
              height: g,
              verticalAlign: this.proximate ? "top" : e.verticalAlign
            }), !0, a));
            this.proximate || this.positionItems();
            w(this, "afterRender");
          },
          handleOverflow: function handleOverflow(b) {
            var a = this,
                d = this.chart,
                c = d.renderer,
                f = this.options,
                e = f.y,
                m = this.padding;
            e = d.spacingBox.height + ("top" === f.verticalAlign ? -e : e) - m;

            var p = f.maxHeight,
                g,
                t = this.clipRect,
                x = f.navigation,
                L = H(x.animation, !0),
                E = x.arrowSize || 12,
                n = this.nav,
                z = this.pages,
                r,
                q = this.allItems,
                u = function u(b) {
              "number" === typeof b ? t.attr({
                height: b
              }) : t && (a.clipRect = t.destroy(), a.contentGroup.clip());
              a.contentGroup.div && (a.contentGroup.div.style.clip = b ? "rect(" + m + "px,9999px," + (m + b) + "px,0)" : "auto");
            },
                w = function w(b) {
              a[b] = c.circle(0, 0, 1.3 * E).translate(E / 2, E / 2).add(n);
              d.styledMode || a[b].attr("fill", "rgba(0,0,0,0.0001)");
              return a[b];
            };

            "horizontal" !== f.layout || "middle" === f.verticalAlign || f.floating || (e /= 2);
            p && (e = Math.min(e, p));
            z.length = 0;
            b > e && !1 !== x.enabled ? (this.clipHeight = g = Math.max(e - 20 - this.titleHeight - m, 0), this.currentPage = H(this.currentPage, 1), this.fullHeight = b, q.forEach(function (a, b) {
              var d = a._legendItemPos[1],
                  c = Math.round(a.legendItem.getBBox().height),
                  f = z.length;
              if (!f || d - z[f - 1] > g && (r || d) !== z[f - 1]) z.push(r || d), f++;
              a.pageIx = f - 1;
              r && (q[b - 1].pageIx = f - 1);
              b === q.length - 1 && d + c - z[f - 1] > g && d !== r && (z.push(d), a.pageIx = f);
              d !== r && (r = d);
            }), t || (t = a.clipRect = c.clipRect(0, m, 9999, 0), a.contentGroup.clip(t)), u(g), n || (this.nav = n = c.g().attr({
              zIndex: 1
            }).add(this.group), this.up = c.symbol("triangle", 0, 0, E, E).add(n), w("upTracker").on("click", function () {
              a.scroll(-1, L);
            }), this.pager = c.text("", 15, 10).addClass("highcharts-legend-navigation"), d.styledMode || this.pager.css(x.style), this.pager.add(n), this.down = c.symbol("triangle-down", 0, 0, E, E).add(n), w("downTracker").on("click", function () {
              a.scroll(1, L);
            })), a.scroll(0), b = e) : n && (u(), this.nav = n.destroy(), this.scrollGroup.attr({
              translateY: 1
            }), this.clipHeight = 0);
            return b;
          },
          scroll: function scroll(b, a) {
            var d = this,
                f = this.chart,
                e = this.pages,
                l = e.length,
                m = this.currentPage + b;
            b = this.clipHeight;
            var p = this.options.navigation,
                g = this.pager,
                t = this.padding;
            m > l && (m = l);
            0 < m && ("undefined" !== typeof a && q(a, f), this.nav.attr({
              translateX: t,
              translateY: b + this.padding + 7 + this.titleHeight,
              visibility: "visible"
            }), [this.up, this.upTracker].forEach(function (a) {
              a.attr({
                "class": 1 === m ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
              });
            }), g.attr({
              text: m + "/" + l
            }), [this.down, this.downTracker].forEach(function (a) {
              a.attr({
                x: 18 + this.pager.getBBox().width,
                "class": m === l ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
              });
            }, this), f.styledMode || (this.up.attr({
              fill: 1 === m ? p.inactiveColor : p.activeColor
            }), this.upTracker.css({
              cursor: 1 === m ? "default" : "pointer"
            }), this.down.attr({
              fill: m === l ? p.inactiveColor : p.activeColor
            }), this.downTracker.css({
              cursor: m === l ? "default" : "pointer"
            })), this.scrollOffset = -e[m - 1] + this.initialItemY, this.scrollGroup.animate({
              translateY: this.scrollOffset
            }), this.currentPage = m, this.positionCheckboxes(), a = c.animObject(H(a, f.renderer.globalAnimation, !0)), C(function () {
              w(d, "afterScroll", {
                currentPage: m
              });
            }, a.duration || 0));
          }
        };
        c.LegendSymbolMixin = {
          drawRectangle: function drawRectangle(b, a) {
            var d = b.symbolHeight,
                c = b.options.squareSymbol;
            a.legendSymbol = this.chart.renderer.rect(c ? (b.symbolWidth - d) / 2 : 0, b.baseline - d + 1, c ? d : b.symbolWidth, d, H(b.options.symbolRadius, d / 2)).addClass("highcharts-point").attr({
              zIndex: 3
            }).add(a.legendGroup);
          },
          drawLineMarker: function drawLineMarker(b) {
            var a = this.options,
                d = a.marker,
                c = b.symbolWidth,
                f = b.symbolHeight,
                e = f / 2,
                m = this.chart.renderer,
                p = this.legendGroup;
            b = b.baseline - Math.round(.3 * b.fontMetrics.b);
            var g = {};
            this.chart.styledMode || (g = {
              "stroke-width": a.lineWidth || 0
            }, a.dashStyle && (g.dashstyle = a.dashStyle));
            this.legendLine = m.path(["M", 0, b, "L", c, b]).addClass("highcharts-graph").attr(g).add(p);
            d && !1 !== d.enabled && c && (a = Math.min(H(d.radius, e), e), 0 === this.symbol.indexOf("url") && (d = D(d, {
              width: f,
              height: f
            }), a = 0), this.legendSymbol = d = m.symbol(this.symbol, c / 2 - a, b - a, 2 * a, 2 * a, d).addClass("highcharts-point").add(p), d.isMarker = !0);
          }
        };
        (/Trident\/7\.0/.test(f.navigator && f.navigator.userAgent) || m) && e(c.Legend.prototype, "positionItem", function (b, a) {
          var d = this,
              c = function c() {
            a._legendItemPos && b.call(d, a);
          };

          c();
          d.bubbleLegend || setTimeout(c);
        });
      });
      M(J, "parts/Chart.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.animObject,
            I = e.attr,
            G = e.defined,
            H = e.discardElement,
            v = e.erase,
            q = e.extend,
            C = e.isArray,
            B = e.isNumber,
            u = e.isObject,
            w = e.isString,
            m = e.numberFormat,
            r = e.objectEach,
            D = e.pick,
            A = e.pInt,
            f = e.relativeLength,
            b = e.setAnimation,
            a = e.splat,
            d = e.syncTimeout,
            h = c.addEvent,
            k = c.animate,
            l = c.doc,
            y = c.Axis,
            p = c.createElement,
            g = c.defaultOptions,
            t = c.charts,
            x = c.css,
            L = c.find,
            E = c.fireEvent,
            n = c.Legend,
            z = c.marginNames,
            N = c.merge,
            O = c.Pointer,
            V = c.removeEvent,
            T = c.seriesTypes,
            P = c.win,
            Q = c.Chart = function () {
          this.getArgs.apply(this, arguments);
        };

        c.chart = function (a, b, d) {
          return new Q(a, b, d);
        };

        q(Q.prototype, {
          callbacks: [],
          getArgs: function getArgs() {
            var a = [].slice.call(arguments);
            if (w(a[0]) || a[0].nodeName) this.renderTo = a.shift();
            this.init(a[0], a[1]);
          },
          init: function init(a, b) {
            var d,
                f = a.series,
                e = a.plotOptions || {};
            E(this, "init", {
              args: arguments
            }, function () {
              a.series = null;
              d = N(g, a);
              r(d.plotOptions, function (a, b) {
                u(a) && (a.tooltip = e[b] && N(e[b].tooltip) || void 0);
              });
              d.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
              d.series = a.series = f;
              this.userOptions = a;
              var n = d.chart,
                  x = n.events;
              this.margin = [];
              this.spacing = [];
              this.bounds = {
                h: {},
                v: {}
              };
              this.labelCollectors = [];
              this.callback = b;
              this.isResizing = 0;
              this.options = d;
              this.axes = [];
              this.series = [];
              this.time = a.time && Object.keys(a.time).length ? new c.Time(a.time) : c.time;
              this.numberFormatter = n.numberFormatter || m;
              this.styledMode = n.styledMode;
              this.hasCartesianSeries = n.showAxes;
              var l = this;
              l.index = t.length;
              t.push(l);
              c.chartCount++;
              x && r(x, function (a, b) {
                c.isFunction(a) && h(l, b, a);
              });
              l.xAxis = [];
              l.yAxis = [];
              l.pointCount = l.colorCounter = l.symbolCounter = 0;
              E(l, "afterInit");
              l.firstRender();
            });
          },
          initSeries: function initSeries(a) {
            var b = this.options.chart;
            b = a.type || b.type || b.defaultSeriesType;
            var d = T[b];
            d || c.error(17, !0, this, {
              missingModuleFor: b
            });
            b = new d();
            b.init(this, a);
            return b;
          },
          setSeriesData: function setSeriesData() {
            this.getSeriesOrderByLinks().forEach(function (a) {
              a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data, !1);
            });
          },
          getSeriesOrderByLinks: function getSeriesOrderByLinks() {
            return this.series.concat().sort(function (a, b) {
              return a.linkedSeries.length || b.linkedSeries.length ? b.linkedSeries.length - a.linkedSeries.length : 0;
            });
          },
          orderSeries: function orderSeries(a) {
            var b = this.series;

            for (a = a || 0; a < b.length; a++) {
              b[a] && (b[a].index = a, b[a].name = b[a].getName());
            }
          },
          isInsidePlot: function isInsidePlot(a, b, d) {
            var g = d ? b : a;
            a = d ? a : b;
            return 0 <= g && g <= this.plotWidth && 0 <= a && a <= this.plotHeight;
          },
          redraw: function redraw(a) {
            E(this, "beforeRedraw");
            var d = this.axes,
                g = this.series,
                c = this.pointer,
                f = this.legend,
                e = this.userOptions.legend,
                h = this.isDirtyLegend,
                t = this.hasCartesianSeries,
                n = this.isDirtyBox,
                x = this.renderer,
                l = x.isHidden(),
                p = [];
            this.setResponsive && this.setResponsive(!1);
            b(a, this);
            l && this.temporaryDisplay();
            this.layOutTitles();

            for (a = g.length; a--;) {
              var k = g[a];

              if (k.options.stacking) {
                var m = !0;

                if (k.isDirty) {
                  var z = !0;
                  break;
                }
              }
            }

            if (z) for (a = g.length; a--;) {
              k = g[a], k.options.stacking && (k.isDirty = !0);
            }
            g.forEach(function (a) {
              a.isDirty && ("point" === a.options.legendType ? (a.updateTotals && a.updateTotals(), h = !0) : e && (e.labelFormatter || e.labelFormat) && (h = !0));
              a.isDirtyData && E(a, "updatedData");
            });
            h && f && f.options.enabled && (f.render(), this.isDirtyLegend = !1);
            m && this.getStacks();
            t && d.forEach(function (a) {
              a.updateNames();
              a.setScale();
            });
            this.getMargins();
            t && (d.forEach(function (a) {
              a.isDirty && (n = !0);
            }), d.forEach(function (a) {
              var b = a.min + "," + a.max;
              a.extKey !== b && (a.extKey = b, p.push(function () {
                E(a, "afterSetExtremes", q(a.eventArgs, a.getExtremes()));
                delete a.eventArgs;
              }));
              (n || m) && a.redraw();
            }));
            n && this.drawChartBox();
            E(this, "predraw");
            g.forEach(function (a) {
              (n || a.isDirty) && a.visible && a.redraw();
              a.isDirtyData = !1;
            });
            c && c.reset(!0);
            x.draw();
            E(this, "redraw");
            E(this, "render");
            l && this.temporaryDisplay(!0);
            p.forEach(function (a) {
              a.call();
            });
          },
          get: function get(a) {
            function b(b) {
              return b.id === a || b.options && b.options.id === a;
            }

            var d = this.series,
                g;
            var c = L(this.axes, b) || L(this.series, b);

            for (g = 0; !c && g < d.length; g++) {
              c = L(d[g].points || [], b);
            }

            return c;
          },
          getAxes: function getAxes() {
            var b = this,
                d = this.options,
                g = d.xAxis = a(d.xAxis || {});
            d = d.yAxis = a(d.yAxis || {});
            E(this, "getAxes");
            g.forEach(function (a, b) {
              a.index = b;
              a.isX = !0;
            });
            d.forEach(function (a, b) {
              a.index = b;
            });
            g.concat(d).forEach(function (a) {
              new y(b, a);
            });
            E(this, "afterGetAxes");
          },
          getSelectedPoints: function getSelectedPoints() {
            var a = [];
            this.series.forEach(function (b) {
              a = a.concat((b[b.hasGroupedData ? "points" : "data"] || []).filter(function (a) {
                return D(a.selectedStaging, a.selected);
              }));
            });
            return a;
          },
          getSelectedSeries: function getSelectedSeries() {
            return this.series.filter(function (a) {
              return a.selected;
            });
          },
          setTitle: function setTitle(a, b, d) {
            this.applyDescription("title", a);
            this.applyDescription("subtitle", b);
            this.applyDescription("caption", void 0);
            this.layOutTitles(d);
          },
          applyDescription: function applyDescription(a, b) {
            var d = this,
                g = "title" === a ? {
              color: "#333333",
              fontSize: this.options.isStock ? "16px" : "18px"
            } : {
              color: "#666666"
            };
            g = this.options[a] = N(!this.styledMode && {
              style: g
            }, this.options[a], b);
            var c = this[a];
            c && b && (this[a] = c = c.destroy());
            g && !c && (c = this.renderer.text(g.text, 0, 0, g.useHTML).attr({
              align: g.align,
              "class": "highcharts-" + a,
              zIndex: g.zIndex || 4
            }).add(), c.update = function (b) {
              d[{
                title: "setTitle",
                subtitle: "setSubtitle",
                caption: "setCaption"
              }[a]](b);
            }, this.styledMode || c.css(g.style), this[a] = c);
          },
          layOutTitles: function layOutTitles(a) {
            var b = [0, 0, 0],
                d = this.renderer,
                g = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function (a) {
              var c = this[a],
                  f = this.options[a],
                  e = f.verticalAlign || "top";
              a = "title" === a ? -3 : "top" === e ? b[0] + 2 : 0;

              if (c) {
                if (!this.styledMode) var h = f.style.fontSize;
                h = d.fontMetrics(h, c).b;
                c.css({
                  width: (f.width || g.width + (f.widthAdjust || 0)) + "px"
                });
                var t = Math.round(c.getBBox(f.useHTML).height);
                c.align(q({
                  y: "bottom" === e ? h : a + h,
                  height: t
                }, f), !1, "spacingBox");
                f.floating || ("top" === e ? b[0] = Math.ceil(b[0] + t) : "bottom" === e && (b[2] = Math.ceil(b[2] + t)));
              }
            }, this);
            b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin);
            b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin);
            var c = !this.titleOffset || this.titleOffset.join(",") !== b.join(",");
            this.titleOffset = b;
            E(this, "afterLayOutTitles");
            !this.isDirtyBox && c && (this.isDirtyBox = this.isDirtyLegend = c, this.hasRendered && D(a, !0) && this.isDirtyBox && this.redraw());
          },
          getChartSize: function getChartSize() {
            var a = this.options.chart,
                b = a.width;
            a = a.height;
            var d = this.renderTo;
            G(b) || (this.containerWidth = c.getStyle(d, "width"));
            G(a) || (this.containerHeight = c.getStyle(d, "height"));
            this.chartWidth = Math.max(0, b || this.containerWidth || 600);
            this.chartHeight = Math.max(0, f(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
          },
          temporaryDisplay: function temporaryDisplay(a) {
            var b = this.renderTo;
            if (a) for (; b && b.style;) {
              b.hcOrigStyle && (c.css(b, b.hcOrigStyle), delete b.hcOrigStyle), b.hcOrigDetached && (l.body.removeChild(b), b.hcOrigDetached = !1), b = b.parentNode;
            } else for (; b && b.style;) {
              l.body.contains(b) || b.parentNode || (b.hcOrigDetached = !0, l.body.appendChild(b));
              if ("none" === c.getStyle(b, "display", !1) || b.hcOricDetached) b.hcOrigStyle = {
                display: b.style.display,
                height: b.style.height,
                overflow: b.style.overflow
              }, a = {
                display: "block",
                overflow: "hidden"
              }, b !== this.renderTo && (a.height = 0), c.css(b, a), b.offsetWidth || b.style.setProperty("display", "block", "important");
              b = b.parentNode;
              if (b === l.body) break;
            }
          },
          setClassName: function setClassName(a) {
            this.container.className = "highcharts-container " + (a || "");
          },
          getContainer: function getContainer() {
            var a = this.options,
                b = a.chart;
            var d = this.renderTo;
            var g = c.uniqueKey(),
                f,
                e;
            d || (this.renderTo = d = b.renderTo);
            w(d) && (this.renderTo = d = l.getElementById(d));
            d || c.error(13, !0, this);
            var h = A(I(d, "data-highcharts-chart"));
            B(h) && t[h] && t[h].hasRendered && t[h].destroy();
            I(d, "data-highcharts-chart", this.index);
            d.innerHTML = "";
            b.skipClone || d.offsetWidth || this.temporaryDisplay();
            this.getChartSize();
            h = this.chartWidth;
            var n = this.chartHeight;
            x(d, {
              overflow: "hidden"
            });
            this.styledMode || (f = q({
              position: "relative",
              overflow: "hidden",
              width: h + "px",
              height: n + "px",
              textAlign: "left",
              lineHeight: "normal",
              zIndex: 0,
              "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, b.style));
            this.container = d = p("div", {
              id: g
            }, f, d);
            this._cursor = d.style.cursor;
            this.renderer = new (c[b.renderer] || c.Renderer)(d, h, n, null, b.forExport, a.exporting && a.exporting.allowHTML, this.styledMode);
            this.setClassName(b.className);
            if (this.styledMode) for (e in a.defs) {
              this.renderer.definition(a.defs[e]);
            } else this.renderer.setStyle(b.style);
            this.renderer.chartIndex = this.index;
            E(this, "afterGetContainer");
          },
          getMargins: function getMargins(a) {
            var b = this.spacing,
                d = this.margin,
                g = this.titleOffset;
            this.resetMargins();
            g[0] && !G(d[0]) && (this.plotTop = Math.max(this.plotTop, g[0] + b[0]));
            g[2] && !G(d[2]) && (this.marginBottom = Math.max(this.marginBottom, g[2] + b[2]));
            this.legend && this.legend.display && this.legend.adjustMargins(d, b);
            E(this, "getMargins");
            a || this.getAxisMargins();
          },
          getAxisMargins: function getAxisMargins() {
            var a = this,
                b = a.axisOffset = [0, 0, 0, 0],
                d = a.colorAxis,
                g = a.margin,
                c = function c(a) {
              a.forEach(function (a) {
                a.visible && a.getOffset();
              });
            };

            a.hasCartesianSeries ? c(a.axes) : d && d.length && c(d);
            z.forEach(function (d, c) {
              G(g[c]) || (a[d] += b[c]);
            });
            a.setChartSize();
          },
          reflow: function reflow(a) {
            var b = this,
                g = b.options.chart,
                f = b.renderTo,
                e = G(g.width) && G(g.height),
                h = g.width || c.getStyle(f, "width");
            g = g.height || c.getStyle(f, "height");
            f = a ? a.target : P;

            if (!e && !b.isPrinting && h && g && (f === P || f === l)) {
              if (h !== b.containerWidth || g !== b.containerHeight) c.clearTimeout(b.reflowTimeout), b.reflowTimeout = d(function () {
                b.container && b.setSize(void 0, void 0, !1);
              }, a ? 100 : 0);
              b.containerWidth = h;
              b.containerHeight = g;
            }
          },
          setReflow: function setReflow(a) {
            var b = this;
            !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = h(P, "resize", function (a) {
              b.options && b.reflow(a);
            }), h(this, "destroy", this.unbindReflow));
          },
          setSize: function setSize(a, g, c) {
            var f = this,
                e = f.renderer;
            f.isResizing += 1;
            b(c, f);
            f.oldChartHeight = f.chartHeight;
            f.oldChartWidth = f.chartWidth;
            "undefined" !== typeof a && (f.options.chart.width = a);
            "undefined" !== typeof g && (f.options.chart.height = g);
            f.getChartSize();

            if (!f.styledMode) {
              var h = e.globalAnimation;
              (h ? k : x)(f.container, {
                width: f.chartWidth + "px",
                height: f.chartHeight + "px"
              }, h);
            }

            f.setChartSize(!0);
            e.setSize(f.chartWidth, f.chartHeight, c);
            f.axes.forEach(function (a) {
              a.isDirty = !0;
              a.setScale();
            });
            f.isDirtyLegend = !0;
            f.isDirtyBox = !0;
            f.layOutTitles();
            f.getMargins();
            f.redraw(c);
            f.oldChartHeight = null;
            E(f, "resize");
            d(function () {
              f && E(f, "endResize", null, function () {
                --f.isResizing;
              });
            }, F(h).duration || 0);
          },
          setChartSize: function setChartSize(a) {
            var b = this.inverted,
                d = this.renderer,
                g = this.chartWidth,
                c = this.chartHeight,
                f = this.options.chart,
                e = this.spacing,
                h = this.clipOffset,
                t,
                n,
                x,
                l;
            this.plotLeft = t = Math.round(this.plotLeft);
            this.plotTop = n = Math.round(this.plotTop);
            this.plotWidth = x = Math.max(0, Math.round(g - t - this.marginRight));
            this.plotHeight = l = Math.max(0, Math.round(c - n - this.marginBottom));
            this.plotSizeX = b ? l : x;
            this.plotSizeY = b ? x : l;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = d.spacingBox = {
              x: e[3],
              y: e[0],
              width: g - e[3] - e[1],
              height: c - e[0] - e[2]
            };
            this.plotBox = d.plotBox = {
              x: t,
              y: n,
              width: x,
              height: l
            };
            g = 2 * Math.floor(this.plotBorderWidth / 2);
            b = Math.ceil(Math.max(g, h[3]) / 2);
            d = Math.ceil(Math.max(g, h[0]) / 2);
            this.clipBox = {
              x: b,
              y: d,
              width: Math.floor(this.plotSizeX - Math.max(g, h[1]) / 2 - b),
              height: Math.max(0, Math.floor(this.plotSizeY - Math.max(g, h[2]) / 2 - d))
            };
            a || this.axes.forEach(function (a) {
              a.setAxisSize();
              a.setAxisTranslation();
            });
            E(this, "afterSetChartSize", {
              skipAxes: a
            });
          },
          resetMargins: function resetMargins() {
            E(this, "resetMargins");
            var a = this,
                b = a.options.chart;
            ["margin", "spacing"].forEach(function (d) {
              var g = b[d],
                  c = u(g) ? g : [g, g, g, g];
              ["Top", "Right", "Bottom", "Left"].forEach(function (g, f) {
                a[d][f] = D(b[d + g], c[f]);
              });
            });
            z.forEach(function (b, d) {
              a[b] = D(a.margin[d], a.spacing[d]);
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0];
          },
          drawChartBox: function drawChartBox() {
            var a = this.options.chart,
                b = this.renderer,
                d = this.chartWidth,
                g = this.chartHeight,
                c = this.chartBackground,
                f = this.plotBackground,
                e = this.plotBorder,
                h = this.styledMode,
                t = this.plotBGImage,
                n = a.backgroundColor,
                x = a.plotBackgroundColor,
                l = a.plotBackgroundImage,
                p,
                k = this.plotLeft,
                m = this.plotTop,
                z = this.plotWidth,
                L = this.plotHeight,
                r = this.plotBox,
                q = this.clipRect,
                y = this.clipBox,
                N = "animate";
            c || (this.chartBackground = c = b.rect().addClass("highcharts-background").add(), N = "attr");
            if (h) var u = p = c.strokeWidth();else {
              u = a.borderWidth || 0;
              p = u + (a.shadow ? 8 : 0);
              n = {
                fill: n || "none"
              };
              if (u || c["stroke-width"]) n.stroke = a.borderColor, n["stroke-width"] = u;
              c.attr(n).shadow(a.shadow);
            }
            c[N]({
              x: p / 2,
              y: p / 2,
              width: d - p - u % 2,
              height: g - p - u % 2,
              r: a.borderRadius
            });
            N = "animate";
            f || (N = "attr", this.plotBackground = f = b.rect().addClass("highcharts-plot-background").add());
            f[N](r);
            h || (f.attr({
              fill: x || "none"
            }).shadow(a.plotShadow), l && (t ? (l !== t.attr("href") && t.attr("href", l), t.animate(r)) : this.plotBGImage = b.image(l, k, m, z, L).add()));
            q ? q.animate({
              width: y.width,
              height: y.height
            }) : this.clipRect = b.clipRect(y);
            N = "animate";
            e || (N = "attr", this.plotBorder = e = b.rect().addClass("highcharts-plot-border").attr({
              zIndex: 1
            }).add());
            h || e.attr({
              stroke: a.plotBorderColor,
              "stroke-width": a.plotBorderWidth || 0,
              fill: "none"
            });
            e[N](e.crisp({
              x: k,
              y: m,
              width: z,
              height: L
            }, -e.strokeWidth()));
            this.isDirtyBox = !1;
            E(this, "afterDrawChartBox");
          },
          propFromSeries: function propFromSeries() {
            var a = this,
                b = a.options.chart,
                d,
                g = a.options.series,
                c,
                f;
            ["inverted", "angular", "polar"].forEach(function (e) {
              d = T[b.type || b.defaultSeriesType];
              f = b[e] || d && d.prototype[e];

              for (c = g && g.length; !f && c--;) {
                (d = T[g[c].type]) && d.prototype[e] && (f = !0);
              }

              a[e] = f;
            });
          },
          linkSeries: function linkSeries() {
            var a = this,
                b = a.series;
            b.forEach(function (a) {
              a.linkedSeries.length = 0;
            });
            b.forEach(function (b) {
              var d = b.options.linkedTo;
              w(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && d.linkedParent !== b && (d.linkedSeries.push(b), b.linkedParent = d, d.enabledDataSorting && b.setDataSortingOptions(), b.visible = D(b.options.visible, d.options.visible, b.visible));
            });
            E(this, "afterLinkSeries");
          },
          renderSeries: function renderSeries() {
            this.series.forEach(function (a) {
              a.translate();
              a.render();
            });
          },
          renderLabels: function renderLabels() {
            var a = this,
                b = a.options.labels;
            b.items && b.items.forEach(function (d) {
              var g = q(b.style, d.style),
                  c = A(g.left) + a.plotLeft,
                  f = A(g.top) + a.plotTop + 12;
              delete g.left;
              delete g.top;
              a.renderer.text(d.html, c, f).attr({
                zIndex: 2
              }).css(g).add();
            });
          },
          render: function render() {
            var a = this.axes,
                b = this.colorAxis,
                d = this.renderer,
                g = this.options,
                c = 0,
                f = function f(a) {
              a.forEach(function (a) {
                a.visible && a.render();
              });
            };

            this.setTitle();
            this.legend = new n(this, g.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            g = this.plotWidth;
            a.some(function (a) {
              if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return c = 21, !0;
            });
            var e = this.plotHeight = Math.max(this.plotHeight - c, 0);
            a.forEach(function (a) {
              a.setScale();
            });
            this.getAxisMargins();
            var h = 1.1 < g / this.plotWidth;
            var t = 1.05 < e / this.plotHeight;
            if (h || t) a.forEach(function (a) {
              (a.horiz && h || !a.horiz && t) && a.setTickInterval(!0);
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries ? f(a) : b && b.length && f(b);
            this.seriesGroup || (this.seriesGroup = d.g("series-group").attr({
              zIndex: 3
            }).add());
            this.renderSeries();
            this.renderLabels();
            this.addCredits();
            this.setResponsive && this.setResponsive();
            this.updateContainerScaling();
            this.hasRendered = !0;
          },
          addCredits: function addCredits(a) {
            var b = this;
            a = N(!0, this.options.credits, a);
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
              a.href && (P.location.href = a.href);
            }).attr({
              align: a.position.align,
              zIndex: 8
            }), b.styledMode || this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (a) {
              b.credits = b.credits.destroy();
              b.addCredits(a);
            });
          },
          updateContainerScaling: function updateContainerScaling() {
            var a = this.container;

            if (a.offsetWidth && a.offsetHeight && a.getBoundingClientRect) {
              var b = a.getBoundingClientRect(),
                  d = b.width / a.offsetWidth;
              a = b.height / a.offsetHeight;
              1 !== d || 1 !== a ? this.containerScaling = {
                scaleX: d,
                scaleY: a
              } : delete this.containerScaling;
            }
          },
          destroy: function destroy() {
            var a = this,
                b = a.axes,
                d = a.series,
                g = a.container,
                f,
                e = g && g.parentNode;
            E(a, "destroy");
            a.renderer.forExport ? v(t, a) : t[a.index] = void 0;
            c.chartCount--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            V(a);

            for (f = b.length; f--;) {
              b[f] = b[f].destroy();
            }

            this.scroller && this.scroller.destroy && this.scroller.destroy();

            for (f = d.length; f--;) {
              d[f] = d[f].destroy();
            }

            "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) {
              var d = a[b];
              d && d.destroy && (a[b] = d.destroy());
            });
            g && (g.innerHTML = "", V(g), e && H(g));
            r(a, function (b, d) {
              delete a[d];
            });
          },
          firstRender: function firstRender() {
            var a = this,
                b = a.options;

            if (!a.isReadyToRender || a.isReadyToRender()) {
              a.getContainer();
              a.resetMargins();
              a.setChartSize();
              a.propFromSeries();
              a.getAxes();
              (C(b.series) ? b.series : []).forEach(function (b) {
                a.initSeries(b);
              });
              a.linkSeries();
              a.setSeriesData();
              E(a, "beforeRender");
              O && (a.pointer = new O(a, b));
              a.render();
              if (!a.renderer.imgCount && a.onload) a.onload();
              a.temporaryDisplay(!0);
            }
          },
          onload: function onload() {
            this.callbacks.concat([this.callback]).forEach(function (a) {
              a && "undefined" !== typeof this.index && a.apply(this, [this]);
            }, this);
            E(this, "load");
            E(this, "render");
            G(this.index) && this.setReflow(this.options.chart.reflow);
            this.onload = null;
          }
        });
      });
      M(J, "parts/ScrollablePlotArea.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.pick,
            I = c.addEvent;
        e = c.Chart;
        "";
        I(e, "afterSetChartSize", function (e) {
          var G = this.options.chart.scrollablePlotArea,
              v = G && G.minWidth;
          G = G && G.minHeight;

          if (!this.renderer.forExport) {
            if (v) {
              if (this.scrollablePixelsX = v = Math.max(0, v - this.chartWidth)) {
                this.plotWidth += v;
                this.inverted ? (this.clipBox.height += v, this.plotBox.height += v) : (this.clipBox.width += v, this.plotBox.width += v);
                var q = {
                  1: {
                    name: "right",
                    value: v
                  }
                };
              }
            } else G && (this.scrollablePixelsY = v = Math.max(0, G - this.chartHeight)) && (this.plotHeight += v, this.inverted ? (this.clipBox.width += v, this.plotBox.width += v) : (this.clipBox.height += v, this.plotBox.height += v), q = {
              2: {
                name: "bottom",
                value: v
              }
            });

            q && !e.skipAxes && this.axes.forEach(function (e) {
              q[e.side] ? e.getPlotLinePath = function () {
                var v = q[e.side].name,
                    u = this[v];
                this[v] = u - q[e.side].value;
                var w = c.Axis.prototype.getPlotLinePath.apply(this, arguments);
                this[v] = u;
                return w;
              } : (e.setAxisSize(), e.setAxisTranslation());
            });
          }
        });
        I(e, "render", function () {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        });

        e.prototype.setUpScrolling = function () {
          var e = {
            WebkitOverflowScrolling: "touch",
            overflowX: "hidden",
            overflowY: "hidden"
          };
          this.scrollablePixelsX && (e.overflowX = "auto");
          this.scrollablePixelsY && (e.overflowY = "auto");
          this.scrollingContainer = c.createElement("div", {
            className: "highcharts-scrolling"
          }, e, this.renderTo);
          this.innerContainer = c.createElement("div", {
            className: "highcharts-inner-container"
          }, null, this.scrollingContainer);
          this.innerContainer.appendChild(this.container);
          this.setUpScrolling = null;
        };

        e.prototype.moveFixedElements = function () {
          var c = this.container,
              e = this.fixedRenderer,
              v = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
              q;
          this.scrollablePixelsX && !this.inverted ? q = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? q = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? q = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (q = ".highcharts-yaxis");
          v.push(q, q + "-labels");
          v.forEach(function (q) {
            [].forEach.call(c.querySelectorAll(q), function (c) {
              (c.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(c);
              c.style.pointerEvents = "auto";
            });
          });
        };

        e.prototype.applyFixed = function () {
          var e,
              H = !this.fixedDiv,
              v = this.options.chart.scrollablePlotArea;
          H ? (this.fixedDiv = c.createElement("div", {
            className: "highcharts-fixed"
          }, {
            position: "absolute",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 2
          }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = e = new c.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight), this.scrollableMask = e.path().attr({
            fill: this.options.chart.backgroundColor || "#fff",
            "fill-opacity": F(v.opacity, .85),
            zIndex: -1
          }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), I(this, "afterShowResetZoom", this.moveFixedElements), I(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
          e = this.chartWidth + (this.scrollablePixelsX || 0);
          var q = this.chartHeight + (this.scrollablePixelsY || 0);
          c.stop(this.container);
          this.container.style.width = e + "px";
          this.container.style.height = q + "px";
          this.renderer.boxWrapper.attr({
            width: e,
            height: q,
            viewBox: [0, 0, e, q].join(" ")
          });
          this.chartBackground.attr({
            width: e,
            height: q
          });
          this.scrollablePixelsY && (this.scrollingContainer.style.height = this.chartHeight + "px");
          H && (v.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * v.scrollPositionX), v.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * v.scrollPositionY));
          q = this.axisOffset;
          H = this.plotTop - q[0] - 1;
          v = this.plotLeft - q[3] - 1;
          e = this.plotTop + this.plotHeight + q[2] + 1;
          q = this.plotLeft + this.plotWidth + q[1] + 1;
          var C = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
              B = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
          H = this.scrollablePixelsX ? ["M", 0, H, "L", this.plotLeft - 1, H, "L", this.plotLeft - 1, e, "L", 0, e, "Z", "M", C, H, "L", this.chartWidth, H, "L", this.chartWidth, e, "L", C, e, "Z"] : this.scrollablePixelsY ? ["M", v, 0, "L", v, this.plotTop - 1, "L", q, this.plotTop - 1, "L", q, 0, "Z", "M", v, B, "L", v, this.chartHeight, "L", q, this.chartHeight, "L", q, B, "Z"] : ["M", 0, 0];
          "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
            d: H
          });
        };
      });
      M(J, "parts/Point.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.animObject,
            I = e.defined,
            G = e.erase,
            H = e.extend,
            v = e.isArray,
            q = e.isNumber,
            C = e.isObject,
            B = e.syncTimeout,
            u = e.pick,
            w,
            m = c.fireEvent,
            r = c.format,
            D = c.uniqueKey,
            A = c.removeEvent;

        c.Point = w = function w() {};

        c.Point.prototype = {
          init: function init(c, b, a) {
            this.series = c;
            this.applyOptions(b, a);
            this.id = I(this.id) ? this.id : D();
            this.resolveColor();
            c.chart.pointCount++;
            m(this, "afterInit");
            return this;
          },
          resolveColor: function resolveColor() {
            var c = this.series;
            var b = c.chart.options.chart.colorCount;
            var a = c.chart.styledMode;
            a || this.options.color || (this.color = c.color);
            c.options.colorByPoint ? (a || (b = c.options.colors || c.chart.options.colors, this.color = this.color || b[c.colorCounter], b = b.length), a = c.colorCounter, c.colorCounter++, c.colorCounter === b && (c.colorCounter = 0)) : a = c.colorIndex;
            this.colorIndex = u(this.colorIndex, a);
          },
          applyOptions: function applyOptions(c, b) {
            var a = this.series,
                d = a.options.pointValKey || a.pointValKey;
            c = w.prototype.optionsToObject.call(this, c);
            H(this, c);
            this.options = this.options ? H(this.options, c) : c;
            c.group && delete this.group;
            c.dataLabels && delete this.dataLabels;
            d && (this.y = this[d]);
            this.formatPrefix = (this.isNull = u(this.isValid && !this.isValid(), null === this.x || !q(this.y))) ? "null" : "point";
            this.selected && (this.state = "select");
            "name" in this && "undefined" === typeof b && a.xAxis && a.xAxis.hasNames && (this.x = a.xAxis.nameToX(this));
            "undefined" === typeof this.x && a && (this.x = "undefined" === typeof b ? a.autoIncrement(this) : b);
            return this;
          },
          setNestedProperty: function setNestedProperty(c, b, a) {
            a.split(".").reduce(function (a, c, f, e) {
              a[c] = e.length - 1 === f ? b : C(a[c], !0) ? a[c] : {};
              return a[c];
            }, c);
            return c;
          },
          optionsToObject: function optionsToObject(f) {
            var b = {},
                a = this.series,
                d = a.options.keys,
                e = d || a.pointArrayMap || ["y"],
                k = e.length,
                l = 0,
                m = 0;
            if (q(f) || null === f) b[e[0]] = f;else if (v(f)) for (!d && f.length > k && (a = typeof f[0], "string" === a ? b.name = f[0] : "number" === a && (b.x = f[0]), l++); m < k;) {
              d && "undefined" === typeof f[l] || (0 < e[m].indexOf(".") ? c.Point.prototype.setNestedProperty(b, f[l], e[m]) : b[e[m]] = f[l]), l++, m++;
            } else "object" === typeof f && (b = f, f.dataLabels && (a._hasPointLabels = !0), f.marker && (a._hasPointMarkers = !0));
            return b;
          },
          getClassName: function getClassName() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          },
          getZone: function getZone() {
            var c = this.series,
                b = c.zones;
            c = c.zoneAxis || "y";
            var a = 0,
                d;

            for (d = b[a]; this[c] >= d.value;) {
              d = b[++a];
            }

            this.nonZonedColor || (this.nonZonedColor = this.color);
            this.color = d && d.color && !this.options.color ? d.color : this.nonZonedColor;
            return d;
          },
          hasNewShapeType: function hasNewShapeType() {
            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
          },
          destroy: function destroy() {
            function c() {
              e && (b.setState(), G(e, b), e.length || (d.hoverPoints = null));
              if (b === d.hoverPoint) b.onMouseOut();
              if (b.graphic || b.dataLabel || b.dataLabels) A(b), b.destroyElements();

              for (l in b) {
                b[l] = null;
              }
            }

            var b = this,
                a = b.series,
                d = a.chart;
            a = a.options.dataSorting;
            var e = d.hoverPoints,
                k = F(b.series.chart.renderer.globalAnimation),
                l;
            a && a.enabled ? (this.animateBeforeDestroy(), B(c, k.duration)) : c();
            d.pointCount--;
            b.legendItem && d.legend.destroyItem(b);
          },
          animateBeforeDestroy: function animateBeforeDestroy() {
            var c = this,
                b = {
              x: c.startXPos,
              opacity: 0
            },
                a,
                d = c.getGraphicalProps();
            d.singular.forEach(function (d) {
              a = "dataLabel" === d;
              c[d] = c[d].animate(a ? {
                x: c[d].startXPos,
                y: c[d].startYPos,
                opacity: 0
              } : b);
            });
            d.plural.forEach(function (a) {
              c[a].forEach(function (a) {
                a.element && a.animate(H({
                  x: c.startXPos
                }, a.startYPos ? {
                  x: a.startXPos,
                  y: a.startYPos
                } : {}));
              });
            });
          },
          destroyElements: function destroyElements(c) {
            var b = this;
            c = b.getGraphicalProps(c);
            c.singular.forEach(function (a) {
              b[a] = b[a].destroy();
            });
            c.plural.forEach(function (a) {
              b[a].forEach(function (a) {
                a.element && a.destroy();
              });
              delete b[a];
            });
          },
          getGraphicalProps: function getGraphicalProps(c) {
            var b = this,
                a = [],
                d,
                f = {
              singular: [],
              plural: []
            };
            c = c || {
              graphic: 1,
              dataLabel: 1
            };
            c.graphic && a.push("graphic", "shadowGroup");
            c.dataLabel && a.push("dataLabel", "dataLabelUpper", "connector");

            for (d = a.length; d--;) {
              var e = a[d];
              b[e] && f.singular.push(e);
            }

            ["dataLabel", "connector"].forEach(function (a) {
              var d = a + "s";
              c[a] && b[d] && f.plural.push(d);
            });
            return f;
          },
          getLabelConfig: function getLabelConfig() {
            return {
              x: this.category,
              y: this.y,
              color: this.color,
              colorIndex: this.colorIndex,
              key: this.name || this.category,
              series: this.series,
              point: this,
              percentage: this.percentage,
              total: this.total || this.stackTotal
            };
          },
          tooltipFormatter: function tooltipFormatter(c) {
            var b = this.series,
                a = b.tooltipOptions,
                d = u(a.valueDecimals, ""),
                f = a.valuePrefix || "",
                e = a.valueSuffix || "";
            b.chart.styledMode && (c = b.chart.tooltip.styledModeFormat(c));
            (b.pointArrayMap || ["y"]).forEach(function (a) {
              a = "{point." + a;
              if (f || e) c = c.replace(RegExp(a + "}", "g"), f + a + "}" + e);
              c = c.replace(RegExp(a + "}", "g"), a + ":,." + d + "f}");
            });
            return r(c, {
              point: this,
              series: this.series
            }, b.chart);
          },
          firePointEvent: function firePointEvent(c, b, a) {
            var d = this,
                f = this.series.options;
            (f.point.events[c] || d.options && d.options.events && d.options.events[c]) && this.importEvents();
            "click" === c && f.allowPointSelect && (a = function a(_a) {
              d.select && d.select(null, _a.ctrlKey || _a.metaKey || _a.shiftKey);
            });
            m(this, c, b, a);
          },
          visible: !0
        };
      });
      M(J, "parts/Series.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.animObject,
            I = e.arrayMax,
            G = e.arrayMin,
            H = e.clamp,
            v = e.correctFloat,
            q = e.defined,
            C = e.erase,
            B = e.extend,
            u = e.isArray,
            w = e.isNumber,
            m = e.isString,
            r = e.objectEach,
            D = e.pick,
            A = e.splat,
            f = e.syncTimeout,
            b = c.addEvent,
            a = c.defaultOptions,
            d = c.defaultPlotOptions,
            h = c.fireEvent,
            k = c.merge,
            l = c.removeEvent,
            y = c.SVGElement,
            p = c.win;
        c.Series = c.seriesType("line", null, {
          lineWidth: 2,
          allowPointSelect: !1,
          showCheckbox: !1,
          animation: {
            duration: 1E3
          },
          events: {},
          marker: {
            enabledThreshold: 2,
            lineColor: "#ffffff",
            lineWidth: 0,
            radius: 4,
            states: {
              normal: {
                animation: !0
              },
              hover: {
                animation: {
                  duration: 50
                },
                enabled: !0,
                radiusPlus: 2,
                lineWidthPlus: 1
              },
              select: {
                fillColor: "#cccccc",
                lineColor: "#000000",
                lineWidth: 2
              }
            }
          },
          point: {
            events: {}
          },
          dataLabels: {
            align: "center",
            formatter: function formatter() {
              var a = this.series.chart.numberFormatter;
              return null === this.y ? "" : a(this.y, -1);
            },
            padding: 5,
            style: {
              fontSize: "11px",
              fontWeight: "bold",
              color: "contrast",
              textOutline: "1px contrast"
            },
            verticalAlign: "bottom",
            x: 0,
            y: 0
          },
          cropThreshold: 300,
          opacity: 1,
          pointRange: 0,
          softThreshold: !0,
          states: {
            normal: {
              animation: !0
            },
            hover: {
              animation: {
                duration: 50
              },
              lineWidthPlus: 1,
              marker: {},
              halo: {
                size: 10,
                opacity: .25
              }
            },
            select: {
              animation: {
                duration: 0
              }
            },
            inactive: {
              animation: {
                duration: 50
              },
              opacity: .2
            }
          },
          stickyTracking: !0,
          turboThreshold: 1E3,
          findNearestPointBy: "x"
        }, {
          axisTypes: ["xAxis", "yAxis"],
          coll: "series",
          colorCounter: 0,
          cropShoulder: 1,
          directTouch: !1,
          eventsToUnbind: [],
          isCartesian: !0,
          parallelArrays: ["x", "y"],
          pointClass: c.Point,
          requireSorting: !0,
          sorted: !0,
          init: function init(a, d) {
            h(this, "init", {
              options: d
            });
            var g = this,
                f = a.series,
                e;
            this.eventOptions = this.eventOptions || {};
            g.chart = a;
            g.options = d = g.setOptions(d);
            g.linkedSeries = [];
            g.bindAxes();
            B(g, {
              name: d.name,
              state: "",
              visible: !1 !== d.visible,
              selected: !0 === d.selected
            });
            var t = d.events;
            r(t, function (a, d) {
              c.isFunction(a) && g.eventOptions[d] !== a && (c.isFunction(g.eventOptions[d]) && l(g, d, g.eventOptions[d]), g.eventOptions[d] = a, b(g, d, a));
            });
            if (t && t.click || d.point && d.point.events && d.point.events.click || d.allowPointSelect) a.runTrackerClick = !0;
            g.getColor();
            g.getSymbol();
            g.parallelArrays.forEach(function (a) {
              g[a + "Data"] || (g[a + "Data"] = []);
            });
            g.isCartesian && (a.hasCartesianSeries = !0);
            f.length && (e = f[f.length - 1]);
            g._i = D(e && e._i, -1) + 1;
            a.orderSeries(this.insert(f));
            d.dataSorting && d.dataSorting.enabled ? g.setDataSortingOptions() : g.points || g.data || g.setData(d.data, !1);
            h(this, "afterInit");
          },
          insert: function insert(a) {
            var b = this.options.index,
                d;

            if (w(b)) {
              for (d = a.length; d--;) {
                if (b >= D(a[d].options.index, a[d]._i)) {
                  a.splice(d + 1, 0, this);
                  break;
                }
              }

              -1 === d && a.unshift(this);
              d += 1;
            } else a.push(this);

            return D(d, a.length - 1);
          },
          bindAxes: function bindAxes() {
            var a = this,
                b = a.options,
                d = a.chart,
                f;
            h(this, "bindAxes", null, function () {
              (a.axisTypes || []).forEach(function (g) {
                d[g].forEach(function (d) {
                  f = d.options;
                  if (b[g] === f.index || "undefined" !== typeof b[g] && b[g] === f.id || "undefined" === typeof b[g] && 0 === f.index) a.insert(d.series), a[g] = d, d.isDirty = !0;
                });
                a[g] || a.optionalAxis === g || c.error(18, !0, d);
              });
            });
          },
          updateParallelArrays: function updateParallelArrays(a, b) {
            var d = a.series,
                c = arguments,
                g = w(b) ? function (c) {
              var g = "y" === c && d.toYData ? d.toYData(a) : a[c];
              d[c + "Data"][b] = g;
            } : function (a) {
              Array.prototype[b].apply(d[a + "Data"], Array.prototype.slice.call(c, 2));
            };
            d.parallelArrays.forEach(g);
          },
          hasData: function hasData() {
            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
          },
          autoIncrement: function autoIncrement() {
            var a = this.options,
                b = this.xIncrement,
                d,
                c = a.pointIntervalUnit,
                f = this.chart.time;
            b = D(b, a.pointStart, 0);
            this.pointInterval = d = D(this.pointInterval, a.pointInterval, 1);
            c && (a = new f.Date(b), "day" === c ? f.set("Date", a, f.get("Date", a) + d) : "month" === c ? f.set("Month", a, f.get("Month", a) + d) : "year" === c && f.set("FullYear", a, f.get("FullYear", a) + d), d = a.getTime() - b);
            this.xIncrement = b + d;
            return b;
          },
          setDataSortingOptions: function setDataSortingOptions() {
            var a = this.options;
            B(this, {
              requireSorting: !1,
              sorted: !1,
              enabledDataSorting: !0,
              allowDG: !1
            });
            q(a.pointRange) || (a.pointRange = 1);
          },
          setOptions: function setOptions(b) {
            var d = this.chart,
                c = d.options,
                g = c.plotOptions,
                f = d.userOptions || {};
            b = k(b);
            d = d.styledMode;
            var e = {
              plotOptions: g,
              userOptions: b
            };
            h(this, "setOptions", e);
            var l = e.plotOptions[this.type],
                p = f.plotOptions || {};
            this.userOptions = e.userOptions;
            f = k(l, g.series, f.plotOptions && f.plotOptions[this.type], b);
            this.tooltipOptions = k(a.tooltip, a.plotOptions.series && a.plotOptions.series.tooltip, a.plotOptions[this.type].tooltip, c.tooltip.userOptions, g.series && g.series.tooltip, g[this.type].tooltip, b.tooltip);
            this.stickyTracking = D(b.stickyTracking, p[this.type] && p[this.type].stickyTracking, p.series && p.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : f.stickyTracking);
            null === l.marker && delete f.marker;
            this.zoneAxis = f.zoneAxis;
            c = this.zones = (f.zones || []).slice();
            !f.negativeColor && !f.negativeFillColor || f.zones || (g = {
              value: f[this.zoneAxis + "Threshold"] || f.threshold || 0,
              className: "highcharts-negative"
            }, d || (g.color = f.negativeColor, g.fillColor = f.negativeFillColor), c.push(g));
            c.length && q(c[c.length - 1].value) && c.push(d ? {} : {
              color: this.color,
              fillColor: this.fillColor
            });
            h(this, "afterSetOptions", {
              options: f
            });
            return f;
          },
          getName: function getName() {
            return D(this.options.name, "Series " + (this.index + 1));
          },
          getCyclic: function getCyclic(a, b, d) {
            var c = this.chart,
                g = this.userOptions,
                f = a + "Index",
                e = a + "Counter",
                h = d ? d.length : D(c.options.chart[a + "Count"], c[a + "Count"]);

            if (!b) {
              var t = D(g[f], g["_" + f]);
              q(t) || (c.series.length || (c[e] = 0), g["_" + f] = t = c[e] % h, c[e] += 1);
              d && (b = d[t]);
            }

            "undefined" !== typeof t && (this[f] = t);
            this[a] = b;
          },
          getColor: function getColor() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || d[this.type].color, this.chart.options.colors);
          },
          getSymbol: function getSymbol() {
            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
          },
          findPointIndex: function findPointIndex(a, b) {
            var d = a.id,
                g = a.x,
                f = this.points,
                e,
                h = this.options.dataSorting;
            if (d) var t = this.chart.get(d);else if (this.linkedParent || this.enabledDataSorting) {
              var l = h && h.matchByName ? "name" : "index";
              t = c.find(f, function (b) {
                return !b.touched && b[l] === a[l];
              });
              if (!t) return;
            }

            if (t) {
              var p = t && t.index;
              "undefined" !== typeof p && (e = !0);
            }

            "undefined" === typeof p && w(g) && (p = this.xData.indexOf(g, b));
            -1 !== p && "undefined" !== typeof p && this.cropped && (p = p >= this.cropStart ? p - this.cropStart : p);
            !e && f[p] && f[p].touched && (p = void 0);
            return p;
          },
          drawLegendSymbol: c.LegendSymbolMixin.drawLineMarker,
          updateData: function updateData(a, b) {
            var d = this.options,
                c = d.dataSorting,
                g = this.points,
                f = [],
                e,
                h,
                t,
                l = this.requireSorting,
                p = a.length === g.length,
                m = !0;
            this.xIncrement = null;
            a.forEach(function (a, b) {
              var h = q(a) && this.pointClass.prototype.optionsToObject.call({
                series: this
              }, a) || {};
              var n = h.x;

              if (h.id || w(n)) {
                if (n = this.findPointIndex(h, t), -1 === n || "undefined" === typeof n ? f.push(a) : g[n] && a !== d.data[n] ? (g[n].update(a, !1, null, !1), g[n].touched = !0, l && (t = n + 1)) : g[n] && (g[n].touched = !0), !p || b !== n || c && c.enabled || this.hasDerivedData) e = !0;
              } else f.push(a);
            }, this);
            if (e) for (a = g.length; a--;) {
              (h = g[a]) && !h.touched && h.remove && h.remove(!1, b);
            } else !p || c && c.enabled ? m = !1 : (a.forEach(function (a, b) {
              g[b].update && a !== g[b].y && g[b].update(a, !1, null, !1);
            }), f.length = 0);
            g.forEach(function (a) {
              a && (a.touched = !1);
            });
            if (!m) return !1;
            f.forEach(function (a) {
              this.addPoint(a, !1, null, null, !1);
            }, this);
            null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = I(this.xData), this.autoIncrement());
            return !0;
          },
          setData: function setData(a, b, d, f) {
            var g = this,
                e = g.points,
                h = e && e.length || 0,
                t,
                l = g.options,
                p = g.chart,
                x = l.dataSorting,
                k = null,
                r = g.xAxis;
            k = l.turboThreshold;
            var L = this.xData,
                q = this.yData,
                y = (t = g.pointArrayMap) && t.length,
                v = l.keys,
                A = 0,
                B = 1,
                C;
            a = a || [];
            t = a.length;
            b = D(b, !0);
            x && x.enabled && (a = this.sortData(a));
            !1 !== f && t && h && !g.cropped && !g.hasGroupedData && g.visible && !g.isSeriesBoosting && (C = this.updateData(a, d));

            if (!C) {
              g.xIncrement = null;
              g.colorCounter = 0;
              this.parallelArrays.forEach(function (a) {
                g[a + "Data"].length = 0;
              });
              if (k && t > k) {
                if (k = g.getFirstValidPoint(a), w(k)) for (d = 0; d < t; d++) {
                  L[d] = this.autoIncrement(), q[d] = a[d];
                } else if (u(k)) {
                  if (y) for (d = 0; d < t; d++) {
                    f = a[d], L[d] = f[0], q[d] = f.slice(1, y + 1);
                  } else for (v && (A = v.indexOf("x"), B = v.indexOf("y"), A = 0 <= A ? A : 0, B = 0 <= B ? B : 1), d = 0; d < t; d++) {
                    f = a[d], L[d] = f[A], q[d] = f[B];
                  }
                } else c.error(12, !1, p);
              } else for (d = 0; d < t; d++) {
                "undefined" !== typeof a[d] && (f = {
                  series: g
                }, g.pointClass.prototype.applyOptions.apply(f, [a[d]]), g.updateParallelArrays(f, d));
              }
              q && m(q[0]) && c.error(14, !0, p);
              g.data = [];
              g.options.data = g.userOptions.data = a;

              for (d = h; d--;) {
                e[d] && e[d].destroy && e[d].destroy();
              }

              r && (r.minRange = r.userMinRange);
              g.isDirty = p.isDirtyBox = !0;
              g.isDirtyData = !!e;
              d = !1;
            }

            "point" === l.legendType && (this.processData(), this.generatePoints());
            b && p.redraw(d);
          },
          sortData: function sortData(a) {
            var b = this,
                d = b.options.dataSorting.sortKey || "y",
                c = function c(a, b) {
              return q(b) && a.pointClass.prototype.optionsToObject.call({
                series: a
              }, b) || {};
            };

            a.forEach(function (d, g) {
              a[g] = c(b, d);
              a[g].index = g;
            }, this);
            a.concat().sort(function (a, b) {
              return w(b[d]) ? b[d] - a[d] : -1;
            }).forEach(function (a, b) {
              a.x = b;
            }, this);
            b.linkedSeries && b.linkedSeries.forEach(function (b) {
              var d = b.options,
                  g = d.data;
              d.dataSorting && d.dataSorting.enabled || !g || (g.forEach(function (d, f) {
                g[f] = c(b, d);
                a[f] && (g[f].x = a[f].x, g[f].index = f);
              }), b.setData(g, !1));
            });
            return a;
          },
          processData: function processData(a) {
            var b = this.xData,
                d = this.yData,
                g = b.length;
            var f = 0;
            var e = this.xAxis,
                h = this.options;
            var l = h.cropThreshold;
            var p = this.getExtremesFromAll || h.getExtremesFromAll,
                m = this.isCartesian;
            h = e && e.val2lin;
            var k = e && e.isLog,
                r = this.requireSorting;
            if (m && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !a) return !1;

            if (e) {
              a = e.getExtremes();
              var q = a.min;
              var y = a.max;
            }

            if (m && this.sorted && !p && (!l || g > l || this.forceCrop)) if (b[g - 1] < q || b[0] > y) b = [], d = [];else if (this.yData && (b[0] < q || b[g - 1] > y)) {
              f = this.cropData(this.xData, this.yData, q, y);
              b = f.xData;
              d = f.yData;
              f = f.start;
              var u = !0;
            }

            for (l = b.length || 1; --l;) {
              if (g = k ? h(b[l]) - h(b[l - 1]) : b[l] - b[l - 1], 0 < g && ("undefined" === typeof w || g < w)) var w = g;else 0 > g && r && (c.error(15, !1, this.chart), r = !1);
            }

            this.cropped = u;
            this.cropStart = f;
            this.processedXData = b;
            this.processedYData = d;
            this.closestPointRange = this.basePointRange = w;
          },
          cropData: function cropData(a, b, d, c, f) {
            var g = a.length,
                e = 0,
                h = g,
                t;
            f = D(f, this.cropShoulder);

            for (t = 0; t < g; t++) {
              if (a[t] >= d) {
                e = Math.max(0, t - f);
                break;
              }
            }

            for (d = t; d < g; d++) {
              if (a[d] > c) {
                h = d + f;
                break;
              }
            }

            return {
              xData: a.slice(e, h),
              yData: b.slice(e, h),
              start: e,
              end: h
            };
          },
          generatePoints: function generatePoints() {
            var a = this.options,
                b = a.data,
                d = this.data,
                c,
                f = this.processedXData,
                e = this.processedYData,
                l = this.pointClass,
                p = f.length,
                m = this.cropStart || 0,
                k = this.hasGroupedData;
            a = a.keys;
            var r = [],
                q;
            d || k || (d = [], d.length = b.length, d = this.data = d);
            a && k && (this.options.keys = !1);

            for (q = 0; q < p; q++) {
              var y = m + q;

              if (k) {
                var u = new l().init(this, [f[q]].concat(A(e[q])));
                u.dataGroup = this.groupMap[q];
                u.dataGroup.options && (u.options = u.dataGroup.options, B(u, u.dataGroup.options), delete u.dataLabels);
              } else (u = d[y]) || "undefined" === typeof b[y] || (d[y] = u = new l().init(this, b[y], f[q]));

              u && (u.index = y, r[q] = u);
            }

            this.options.keys = a;
            if (d && (p !== (c = d.length) || k)) for (q = 0; q < c; q++) {
              q !== m || k || (q += p), d[q] && (d[q].destroyElements(), d[q].plotX = void 0);
            }
            this.data = d;
            this.points = r;
            h(this, "afterGeneratePoints");
          },
          getXExtremes: function getXExtremes(a) {
            return {
              min: G(a),
              max: I(a)
            };
          },
          getExtremes: function getExtremes(a) {
            var b = this.xAxis,
                d = this.yAxis,
                c = this.processedXData || this.xData,
                g = [],
                f = 0,
                e = 0;
            var l = 0;
            var p = this.requireSorting ? this.cropShoulder : 0,
                m = d ? d.positiveValuesOnly : !1,
                k;
            a = a || this.stackedYData || this.processedYData || [];
            d = a.length;
            b && (l = b.getExtremes(), e = l.min, l = l.max);

            for (k = 0; k < d; k++) {
              var r = c[k];
              var q = a[k];
              var y = (w(q) || u(q)) && (q.length || 0 < q || !m);
              r = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !b || (c[k + p] || r) >= e && (c[k - p] || r) <= l;
              if (y && r) if (y = q.length) for (; y--;) {
                w(q[y]) && (g[f++] = q[y]);
              } else g[f++] = q;
            }

            this.dataMin = G(g);
            this.dataMax = I(g);
            h(this, "afterGetExtremes");
          },
          getFirstValidPoint: function getFirstValidPoint(a) {
            for (var b = null, d = a.length, c = 0; null === b && c < d;) {
              b = a[c], c++;
            }

            return b;
          },
          translate: function translate() {
            this.processedXData || this.processData();
            this.generatePoints();
            var a = this.options,
                b = a.stacking,
                d = this.xAxis,
                c = d.categories,
                f = this.enabledDataSorting,
                e = this.yAxis,
                l = this.points,
                p = l.length,
                k = !!this.modifyValue,
                m,
                r = this.pointPlacementToXValue(),
                y = w(r),
                A = a.threshold,
                B = a.startFromThreshold ? A : 0,
                C,
                G = this.zoneAxis || "y",
                I = Number.MAX_VALUE;

            for (m = 0; m < p; m++) {
              var F = l[m],
                  J = F.x;
              var W = F.y;
              var M = F.low,
                  Z = b && e.stacks[(this.negStacks && W < (B ? 0 : A) ? "-" : "") + this.stackKey];
              e.positiveValuesOnly && null !== W && 0 >= W && (F.isNull = !0);
              F.plotX = C = v(H(d.translate(J, 0, 0, 0, 1, r, "flags" === this.type), -1E5, 1E5));

              if (b && this.visible && Z && Z[J]) {
                var S = this.getStackIndicator(S, J, this.index);

                if (!F.isNull) {
                  var Y = Z[J];
                  var ba = Y.points[S.key];
                }
              }

              u(ba) && (M = ba[0], W = ba[1], M === B && S.key === Z[J].base && (M = D(w(A) && A, e.min)), e.positiveValuesOnly && 0 >= M && (M = null), F.total = F.stackTotal = Y.total, F.percentage = Y.total && F.y / Y.total * 100, F.stackY = W, this.irregularWidths || Y.setOffset(this.pointXOffset || 0, this.barW || 0));
              F.yBottom = q(M) ? H(e.translate(M, 0, 1, 0, 1), -1E5, 1E5) : null;
              k && (W = this.modifyValue(W, F));
              F.plotY = W = "number" === typeof W && Infinity !== W ? H(e.translate(W, 0, 1, 0, 1), -1E5, 1E5) : void 0;
              F.isInside = "undefined" !== typeof W && 0 <= W && W <= e.len && 0 <= C && C <= d.len;
              F.clientX = y ? v(d.translate(J, 0, 0, 0, 1, r)) : C;
              F.negative = F[G] < (a[G + "Threshold"] || A || 0);
              F.category = c && "undefined" !== typeof c[F.x] ? c[F.x] : F.x;

              if (!F.isNull && !1 !== F.visible) {
                "undefined" !== typeof ca && (I = Math.min(I, Math.abs(C - ca)));
                var ca = C;
              }

              F.zone = this.zones.length && F.getZone();
              !F.graphic && this.group && f && (F.isNew = !0);
            }

            this.closestPointRangePx = I;
            h(this, "afterTranslate");
          },
          getValidPoints: function getValidPoints(a, b, d) {
            var c = this.chart;
            return (a || this.points || []).filter(function (a) {
              return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !1 !== a.visible && (d || !a.isNull);
            });
          },
          getClipBox: function getClipBox(a, b) {
            var d = this.options,
                c = this.chart,
                g = c.inverted,
                f = this.xAxis,
                e = f && this.yAxis;
            a && !1 === d.clip && e ? a = g ? {
              y: -c.chartWidth + e.len + e.pos,
              height: c.chartWidth,
              width: c.chartHeight,
              x: -c.chartHeight + f.len + f.pos
            } : {
              y: -e.pos,
              height: c.chartHeight,
              width: c.chartWidth,
              x: -f.pos
            } : (a = this.clipBox || c.clipBox, b && (a.width = c.plotSizeX, a.x = 0));
            return b ? {
              width: a.width,
              x: a.x
            } : a;
          },
          setClip: function setClip(a) {
            var b = this.chart,
                d = this.options,
                c = b.renderer,
                g = b.inverted,
                f = this.clipBox,
                e = this.getClipBox(a),
                h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, e.height, d.xAxis, d.yAxis].join(),
                l = b[h],
                p = b[h + "m"];
            l || (a && (e.width = 0, g && (e.x = b.plotSizeX + (!1 !== d.clip ? 0 : b.plotTop)), b[h + "m"] = p = c.clipRect(g ? b.plotSizeX + 99 : -99, g ? -b.plotLeft : -b.plotTop, 99, g ? b.chartWidth : b.chartHeight)), b[h] = l = c.clipRect(e), l.count = {
              length: 0
            });
            a && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1);
            if (!1 !== d.clip || a) this.group.clip(a || f ? l : b.clipRect), this.markerGroup.clip(p), this.sharedClipKey = h;
            a || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())));
          },
          animate: function animate(a) {
            var b = this.chart,
                d = F(this.options.animation);
            if (a) this.setClip(d);else {
              var c = this.sharedClipKey;
              a = b[c];
              var g = this.getClipBox(d, !0);
              a && a.animate(g, d);
              b[c + "m"] && b[c + "m"].animate({
                width: g.width + 99,
                x: g.x - (b.inverted ? 0 : 99)
              }, d);
              this.animate = null;
            }
          },
          afterAnimate: function afterAnimate() {
            this.setClip();
            h(this, "afterAnimate");
            this.finishedAnimating = !0;
          },
          drawPoints: function drawPoints() {
            var a = this.points,
                b = this.chart,
                d,
                c,
                f = this.options.marker,
                e = this[this.specialGroup] || this.markerGroup,
                h = this.xAxis,
                l = D(f.enabled, !h || h.isRadial ? !0 : null, this.closestPointRangePx >= f.enabledThreshold * f.radius);
            if (!1 !== f.enabled || this._hasPointMarkers) for (d = 0; d < a.length; d++) {
              var p = a[d];
              var m = (c = p.graphic) ? "animate" : "attr";
              var k = p.marker || {};
              var r = !!p.marker;

              if ((l && "undefined" === typeof k.enabled || k.enabled) && !p.isNull && !1 !== p.visible) {
                var q = D(k.symbol, this.symbol);
                var y = this.markerAttribs(p, p.selected && "select");
                this.enabledDataSorting && (p.startXPos = h.reversed ? -y.width : h.width);
                var u = !1 !== p.isInside;
                c ? c[u ? "show" : "hide"](u).animate(y) : u && (0 < y.width || p.hasImage) && (p.graphic = c = b.renderer.symbol(q, y.x, y.y, y.width, y.height, r ? k : f).add(e), this.enabledDataSorting && b.hasRendered && (c.attr({
                  x: p.startXPos
                }), m = "animate"));
                c && "animate" === m && c[u ? "show" : "hide"](u).animate(y);
                if (c && !b.styledMode) c[m](this.pointAttribs(p, p.selected && "select"));
                c && c.addClass(p.getClassName(), !0);
              } else c && (p.graphic = c.destroy());
            }
          },
          markerAttribs: function markerAttribs(a, b) {
            var d = this.options.marker,
                c = a.marker || {},
                g = c.symbol || d.symbol,
                f = D(c.radius, d.radius);
            b && (d = d.states[b], b = c.states && c.states[b], f = D(b && b.radius, d && d.radius, f + (d && d.radiusPlus || 0)));
            a.hasImage = g && 0 === g.indexOf("url");
            a.hasImage && (f = 0);
            a = {
              x: Math.floor(a.plotX) - f,
              y: a.plotY - f
            };
            f && (a.width = a.height = 2 * f);
            return a;
          },
          pointAttribs: function pointAttribs(a, b) {
            var d = this.options.marker,
                c = a && a.options,
                g = c && c.marker || {},
                f = this.color,
                e = c && c.color,
                h = a && a.color;
            c = D(g.lineWidth, d.lineWidth);
            var l = a && a.zone && a.zone.color;
            a = 1;
            f = e || l || h || f;
            e = g.fillColor || d.fillColor || f;
            f = g.lineColor || d.lineColor || f;
            b = b || "normal";
            d = d.states[b];
            b = g.states && g.states[b] || {};
            c = D(b.lineWidth, d.lineWidth, c + D(b.lineWidthPlus, d.lineWidthPlus, 0));
            e = b.fillColor || d.fillColor || e;
            f = b.lineColor || d.lineColor || f;
            a = D(b.opacity, d.opacity, a);
            return {
              stroke: f,
              "stroke-width": c,
              fill: e,
              opacity: a
            };
          },
          destroy: function destroy(a) {
            var b = this,
                d = b.chart,
                g = /AppleWebKit\/533/.test(p.navigator.userAgent),
                f,
                e,
                l = b.data || [],
                k,
                m;
            h(b, "destroy");
            this.removeEvents(a);
            (b.axisTypes || []).forEach(function (a) {
              (m = b[a]) && m.series && (C(m.series, b), m.isDirty = m.forceRedraw = !0);
            });
            b.legendItem && b.chart.legend.destroyItem(b);

            for (e = l.length; e--;) {
              (k = l[e]) && k.destroy && k.destroy();
            }

            b.points = null;
            c.clearTimeout(b.animationTimeout);
            r(b, function (a, b) {
              a instanceof y && !a.survive && (f = g && "group" === b ? "hide" : "destroy", a[f]());
            });
            d.hoverSeries === b && (d.hoverSeries = null);
            C(d.series, b);
            d.orderSeries();
            r(b, function (d, c) {
              a && "hcEvents" === c || delete b[c];
            });
          },
          getGraphPath: function getGraphPath(a, b, d) {
            var c = this,
                f = c.options,
                g = f.step,
                e,
                h = [],
                l = [],
                p;
            a = a || c.points;
            (e = a.reversed) && a.reverse();
            (g = {
              right: 1,
              center: 2
            }[g] || g && 3) && e && (g = 4 - g);
            a = this.getValidPoints(a, !1, !(f.connectNulls && !b && !d));
            a.forEach(function (e, n) {
              var t = e.plotX,
                  m = e.plotY,
                  k = a[n - 1];
              (e.leftCliff || k && k.rightCliff) && !d && (p = !0);
              e.isNull && !q(b) && 0 < n ? p = !f.connectNulls : e.isNull && !b ? p = !0 : (0 === n || p ? n = ["M", e.plotX, e.plotY] : c.getPointSpline ? n = c.getPointSpline(a, e, n) : g ? (n = 1 === g ? ["L", k.plotX, m] : 2 === g ? ["L", (k.plotX + t) / 2, k.plotY, "L", (k.plotX + t) / 2, m] : ["L", t, k.plotY], n.push("L", t, m)) : n = ["L", t, m], l.push(e.x), g && (l.push(e.x), 2 === g && l.push(e.x)), h.push.apply(h, n), p = !1);
            });
            h.xMap = l;
            return c.graphPath = h;
          },
          drawGraph: function drawGraph() {
            var a = this,
                b = this.options,
                d = (this.gappedPath || this.getGraphPath).call(this),
                c = this.chart.styledMode,
                f = [["graph", "highcharts-graph"]];
            c || f[0].push(b.lineColor || this.color || "#cccccc", b.dashStyle);
            f = a.getZonesGraphs(f);
            f.forEach(function (f, g) {
              var e = f[0],
                  h = a[e],
                  l = h ? "animate" : "attr";
              h ? (h.endX = a.preventGraphAnimation ? null : d.xMap, h.animate({
                d: d
              })) : d.length && (a[e] = h = a.chart.renderer.path(d).addClass(f[1]).attr({
                zIndex: 1
              }).add(a.group));
              h && !c && (e = {
                stroke: f[2],
                "stroke-width": b.lineWidth,
                fill: a.fillGraph && a.color || "none"
              }, f[3] ? e.dashstyle = f[3] : "square" !== b.linecap && (e["stroke-linecap"] = e["stroke-linejoin"] = "round"), h[l](e).shadow(2 > g && b.shadow));
              h && (h.startX = d.xMap, h.isArea = d.isArea);
            });
          },
          getZonesGraphs: function getZonesGraphs(a) {
            this.zones.forEach(function (b, d) {
              d = ["zone-graph-" + d, "highcharts-graph highcharts-zone-graph-" + d + " " + (b.className || "")];
              this.chart.styledMode || d.push(b.color || this.color, b.dashStyle || this.options.dashStyle);
              a.push(d);
            }, this);
            return a;
          },
          applyZones: function applyZones() {
            var a = this,
                b = this.chart,
                d = b.renderer,
                c = this.zones,
                f,
                e,
                h = this.clips || [],
                l,
                p = this.graph,
                k = this.area,
                m = Math.max(b.chartWidth, b.chartHeight),
                r = this[(this.zoneAxis || "y") + "Axis"],
                q = b.inverted,
                y,
                u,
                w,
                v = !1;

            if (c.length && (p || k) && r && "undefined" !== typeof r.min) {
              var A = r.reversed;
              var C = r.horiz;
              p && !this.showLine && p.hide();
              k && k.hide();
              var B = r.getExtremes();
              c.forEach(function (c, g) {
                f = A ? C ? b.plotWidth : 0 : C ? 0 : r.toPixels(B.min) || 0;
                f = H(D(e, f), 0, m);
                e = H(Math.round(r.toPixels(D(c.value, B.max), !0) || 0), 0, m);
                v && (f = e = r.toPixels(B.max));
                y = Math.abs(f - e);
                u = Math.min(f, e);
                w = Math.max(f, e);
                r.isXAxis ? (l = {
                  x: q ? w : u,
                  y: 0,
                  width: y,
                  height: m
                }, C || (l.x = b.plotHeight - l.x)) : (l = {
                  x: 0,
                  y: q ? w : u,
                  width: m,
                  height: y
                }, C && (l.y = b.plotWidth - l.y));
                q && d.isVML && (l = r.isXAxis ? {
                  x: 0,
                  y: A ? u : w,
                  height: l.width,
                  width: b.chartWidth
                } : {
                  x: l.y - b.plotLeft - b.spacingBox.x,
                  y: 0,
                  width: l.height,
                  height: b.chartHeight
                });
                h[g] ? h[g].animate(l) : h[g] = d.clipRect(l);
                p && a["zone-graph-" + g].clip(h[g]);
                k && a["zone-area-" + g].clip(h[g]);
                v = c.value > B.max;
                a.resetZones && 0 === e && (e = void 0);
              });
              this.clips = h;
            } else a.visible && (p && p.show(!0), k && k.show(!0));
          },
          invertGroups: function invertGroups(a) {
            function d() {
              ["group", "markerGroup"].forEach(function (b) {
                c[b] && (f.renderer.isVML && c[b].attr({
                  width: c.yAxis.len,
                  height: c.xAxis.len
                }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(c.isRadialSeries ? !1 : a));
              });
            }

            var c = this,
                f = c.chart;
            c.xAxis && (c.eventsToUnbind.push(b(f, "resize", d)), d(), c.invertGroups = d);
          },
          plotGroup: function plotGroup(a, b, d, c, f) {
            var g = this[a],
                e = !g;
            e && (this[a] = g = this.chart.renderer.g().attr({
              zIndex: c || .1
            }).add(f));
            g.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (q(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
            g.attr({
              visibility: d
            })[e ? "attr" : "animate"](this.getPlotBox());
            return g;
          },
          getPlotBox: function getPlotBox() {
            var a = this.chart,
                b = this.xAxis,
                d = this.yAxis;
            a.inverted && (b = d, d = this.xAxis);
            return {
              translateX: b ? b.left : a.plotLeft,
              translateY: d ? d.top : a.plotTop,
              scaleX: 1,
              scaleY: 1
            };
          },
          removeEvents: function removeEvents(a) {
            a ? this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) {
              a();
            }), this.eventsToUnbind.length = 0) : l(this);
          },
          render: function render() {
            var a = this,
                b = a.chart,
                d = a.options,
                c = !!a.animate && b.renderer.isSVG && F(d.animation).duration,
                e = a.visible ? "inherit" : "hidden",
                l = d.zIndex,
                p = a.hasRendered,
                k = b.seriesGroup,
                m = b.inverted;
            h(this, "render");
            var r = a.plotGroup("group", "series", e, l, k);
            a.markerGroup = a.plotGroup("markerGroup", "markers", e, l, k);
            c && a.animate(!0);
            r.inverted = a.isCartesian || a.invertable ? m : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            a.visible && a.drawPoints();
            a.drawDataLabels && a.drawDataLabels();
            a.redrawPoints && a.redrawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            a.invertGroups(m);
            !1 === d.clip || a.sharedClipKey || p || r.clip(b.clipRect);
            c && a.animate();
            p || (a.animationTimeout = f(function () {
              a.afterAnimate();
            }, c || 0));
            a.isDirty = !1;
            a.hasRendered = !0;
            h(a, "afterRender");
          },
          redraw: function redraw() {
            var a = this.chart,
                b = this.isDirty || this.isDirtyData,
                d = this.group,
                c = this.xAxis,
                f = this.yAxis;
            d && (a.inverted && d.attr({
              width: a.plotWidth,
              height: a.plotHeight
            }), d.animate({
              translateX: D(c && c.left, a.plotLeft),
              translateY: D(f && f.top, a.plotTop)
            }));
            this.translate();
            this.render();
            b && delete this.kdTree;
          },
          kdAxisArray: ["clientX", "plotY"],
          searchPoint: function searchPoint(a, b) {
            var d = this.xAxis,
                c = this.yAxis,
                f = this.chart.inverted;
            return this.searchKDTree({
              clientX: f ? d.len - a.chartY + d.pos : a.chartX - d.pos,
              plotY: f ? c.len - a.chartX + c.pos : a.chartY - c.pos
            }, b, a);
          },
          buildKDTree: function buildKDTree(a) {
            function b(a, c, f) {
              var g;

              if (g = a && a.length) {
                var e = d.kdAxisArray[c % f];
                a.sort(function (a, b) {
                  return a[e] - b[e];
                });
                g = Math.floor(g / 2);
                return {
                  point: a[g],
                  left: b(a.slice(0, g), c + 1, f),
                  right: b(a.slice(g + 1), c + 1, f)
                };
              }
            }

            this.buildingKdTree = !0;
            var d = this,
                c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            delete d.kdTree;
            f(function () {
              d.kdTree = b(d.getValidPoints(null, !d.directTouch), c, c);
              d.buildingKdTree = !1;
            }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
          },
          searchKDTree: function searchKDTree(a, b, d) {
            function c(a, b, d, l) {
              var p = b.point,
                  n = f.kdAxisArray[d % l],
                  t = p;
              var k = q(a[g]) && q(p[g]) ? Math.pow(a[g] - p[g], 2) : null;
              var m = q(a[e]) && q(p[e]) ? Math.pow(a[e] - p[e], 2) : null;
              m = (k || 0) + (m || 0);
              p.dist = q(m) ? Math.sqrt(m) : Number.MAX_VALUE;
              p.distX = q(k) ? Math.sqrt(k) : Number.MAX_VALUE;
              n = a[n] - p[n];
              m = 0 > n ? "left" : "right";
              k = 0 > n ? "right" : "left";
              b[m] && (m = c(a, b[m], d + 1, l), t = m[h] < t[h] ? m : p);
              b[k] && Math.sqrt(n * n) < t[h] && (a = c(a, b[k], d + 1, l), t = a[h] < t[h] ? a : t);
              return t;
            }

            var f = this,
                g = this.kdAxisArray[0],
                e = this.kdAxisArray[1],
                h = b ? "distX" : "dist";
            b = -1 < f.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            this.kdTree || this.buildingKdTree || this.buildKDTree(d);
            if (this.kdTree) return c(a, this.kdTree, b, b);
          },
          pointPlacementToXValue: function pointPlacementToXValue() {
            var a = this.xAxis,
                b = this.options.pointPlacement;
            "between" === b && (b = a.reversed ? -.5 : .5);
            w(b) && (b *= D(this.options.pointRange || a.pointRange));
            return b;
          }
        });
        "";
      });
      M(J, "parts/Stacking.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.correctFloat,
            I = e.defined,
            G = e.destroyObjectProperties,
            H = e.objectEach,
            v = e.pick;
        e = c.Axis;
        var q = c.Chart,
            C = c.format,
            B = c.Series;

        c.StackItem = function (c, e, m, r, q) {
          var u = c.chart.inverted;
          this.axis = c;
          this.isNegative = m;
          this.options = e = e || {};
          this.x = r;
          this.total = null;
          this.points = {};
          this.stack = q;
          this.rightCliff = this.leftCliff = 0;
          this.alignOptions = {
            align: e.align || (u ? m ? "left" : "right" : "center"),
            verticalAlign: e.verticalAlign || (u ? "middle" : m ? "bottom" : "top"),
            y: e.y,
            x: e.x
          };
          this.textAlign = e.textAlign || (u ? m ? "right" : "left" : "center");
        };

        c.StackItem.prototype = {
          destroy: function destroy() {
            G(this, this.axis);
          },
          render: function render(c) {
            var e = this.axis.chart,
                m = this.options,
                r = m.format;
            r = r ? C(r, this, e) : m.formatter.call(this);
            this.label ? this.label.attr({
              text: r,
              visibility: "hidden"
            }) : (this.label = e.renderer.label(r, null, null, m.shape, null, null, m.useHTML, !1, "stack-labels"), r = {
              text: r,
              align: this.textAlign,
              rotation: m.rotation,
              padding: v(m.padding, 0),
              visibility: "hidden"
            }, this.label.attr(r), e.styledMode || this.label.css(m.style), this.label.added || this.label.add(c));
            this.label.labelrank = e.plotHeight;
          },
          setOffset: function setOffset(c, e, m, r, q) {
            var u = this.axis,
                f = u.chart;
            r = u.translate(u.usePercentage ? 100 : r ? r : this.total, 0, 0, 0, 1);
            m = u.translate(m ? m : 0);
            m = I(r) && Math.abs(r - m);
            c = v(q, f.xAxis[0].translate(this.x)) + c;
            u = I(r) && this.getStackBox(f, this, c, r, e, m, u);
            e = this.label;
            c = this.isNegative;
            q = "justify" === v(this.options.overflow, "justify");

            if (e && u) {
              m = e.getBBox();
              var b = f.inverted ? c ? m.width : 0 : m.width / 2,
                  a = f.inverted ? m.height / 2 : c ? -4 : m.height + 4;
              this.alignOptions.x = v(this.options.x, 0);
              e.align(this.alignOptions, null, u);
              r = e.alignAttr;
              e.show();
              r.y -= a;
              q && (r.x -= b, B.prototype.justifyDataLabel.call(this.axis, e, this.alignOptions, r, m, u), r.x += b);
              r.x = e.alignAttr.x;
              e.attr({
                x: r.x,
                y: r.y
              });
              v(!q && this.options.crop, !0) && ((f = f.isInsidePlot(e.x + (f.inverted ? 0 : -m.width / 2), e.y) && f.isInsidePlot(e.x + (f.inverted ? c ? -m.width : m.width : m.width / 2), e.y + m.height)) || e.hide());
            }
          },
          getStackBox: function getStackBox(c, e, m, r, q, v, f) {
            var b = e.axis.reversed,
                a = c.inverted;
            c = f.height + f.pos - (a ? c.plotLeft : c.plotTop);
            e = e.isNegative && !b || !e.isNegative && b;
            return {
              x: a ? e ? r : r - v : m,
              y: a ? c - m - q : e ? c - r - v : c - r,
              width: a ? v : q,
              height: a ? q : v
            };
          }
        };

        q.prototype.getStacks = function () {
          var c = this,
              e = c.inverted;
          c.yAxis.forEach(function (c) {
            c.stacks && c.hasVisibleSeries && (c.oldStacks = c.stacks);
          });
          c.series.forEach(function (m) {
            var r = m.xAxis && m.xAxis.options || {};
            !m.options.stacking || !0 !== m.visible && !1 !== c.options.chart.ignoreHiddenSeries || (m.stackKey = [m.type, v(m.options.stack, ""), e ? r.top : r.left, e ? r.height : r.width].join());
          });
        };

        e.prototype.buildStacks = function () {
          var e = this.series,
              q = v(this.options.reversedStacks, !0),
              m = e.length,
              r;

          if (!this.isXAxis) {
            this.usePercentage = !1;

            for (r = m; r--;) {
              var D = e[q ? r : m - r - 1];
              D.setStackedPoints();
            }

            for (r = 0; r < m; r++) {
              e[r].modifyStacks();
            }

            c.fireEvent(this, "afterBuildStacks");
          }
        };

        e.prototype.renderStackTotals = function () {
          var c = this.chart,
              e = c.renderer,
              m = this.stacks,
              r = this.stackTotalGroup;
          r || (this.stackTotalGroup = r = e.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
          }).add());
          r.translate(c.plotLeft, c.plotTop);
          H(m, function (c) {
            H(c, function (c) {
              c.render(r);
            });
          });
        };

        e.prototype.resetStacks = function () {
          var c = this,
              e = c.stacks;
          c.isXAxis || H(e, function (e) {
            H(e, function (m, q) {
              m.touched < c.stacksTouched ? (m.destroy(), delete e[q]) : (m.total = null, m.cumulative = null);
            });
          });
        };

        e.prototype.cleanStacks = function () {
          if (!this.isXAxis) {
            if (this.oldStacks) var c = this.stacks = this.oldStacks;
            H(c, function (c) {
              H(c, function (c) {
                c.cumulative = c.total;
              });
            });
          }
        };

        B.prototype.setStackedPoints = function () {
          if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
            var e = this.processedXData,
                q = this.processedYData,
                m = [],
                r = q.length,
                D = this.options,
                A = D.threshold,
                f = v(D.startFromThreshold && A, 0),
                b = D.stack;
            D = D.stacking;
            var a = this.stackKey,
                d = "-" + a,
                h = this.negStacks,
                k = this.yAxis,
                l = k.stacks,
                y = k.oldStacks,
                p,
                g;
            k.stacksTouched += 1;

            for (g = 0; g < r; g++) {
              var t = e[g];
              var x = q[g];
              var L = this.getStackIndicator(L, t, this.index);
              var E = L.key;
              var n = (p = h && x < (f ? 0 : A)) ? d : a;
              l[n] || (l[n] = {});
              l[n][t] || (y[n] && y[n][t] ? (l[n][t] = y[n][t], l[n][t].total = null) : l[n][t] = new c.StackItem(k, k.options.stackLabels, p, t, b));
              n = l[n][t];
              null !== x ? (n.points[E] = n.points[this.index] = [v(n.cumulative, f)], I(n.cumulative) || (n.base = E), n.touched = k.stacksTouched, 0 < L.index && !1 === this.singleStacks && (n.points[E][0] = n.points[this.index + "," + t + ",0"][0])) : n.points[E] = n.points[this.index] = null;
              "percent" === D ? (p = p ? a : d, h && l[p] && l[p][t] ? (p = l[p][t], n.total = p.total = Math.max(p.total, n.total) + Math.abs(x) || 0) : n.total = F(n.total + (Math.abs(x) || 0))) : n.total = F(n.total + (x || 0));
              n.cumulative = v(n.cumulative, f) + (x || 0);
              null !== x && (n.points[E].push(n.cumulative), m[g] = n.cumulative);
            }

            "percent" === D && (k.usePercentage = !0);
            this.stackedYData = m;
            k.oldStacks = {};
          }
        };

        B.prototype.modifyStacks = function () {
          var c = this,
              e = c.stackKey,
              m = c.yAxis.stacks,
              r = c.processedXData,
              q,
              v = c.options.stacking;
          c[v + "Stacker"] && [e, "-" + e].forEach(function (f) {
            for (var b = r.length, a, d; b--;) {
              if (a = r[b], q = c.getStackIndicator(q, a, c.index, f), d = (a = m[f] && m[f][a]) && a.points[q.key]) c[v + "Stacker"](d, a, b);
            }
          });
        };

        B.prototype.percentStacker = function (c, e, m) {
          e = e.total ? 100 / e.total : 0;
          c[0] = F(c[0] * e);
          c[1] = F(c[1] * e);
          this.stackedYData[m] = c[1];
        };

        B.prototype.getStackIndicator = function (c, e, m, r) {
          !I(c) || c.x !== e || r && c.key !== r ? c = {
            x: e,
            index: 0,
            key: r
          } : c.index++;
          c.key = [m, e, c.index].join();
          return c;
        };
      });
      M(J, "parts/Dynamics.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.defined,
            I = e.erase,
            G = e.extend,
            H = e.isArray,
            v = e.isNumber,
            q = e.isObject,
            C = e.isString,
            B = e.objectEach,
            u = e.pick,
            w = e.relativeLength,
            m = e.setAnimation,
            r = e.splat,
            D = c.addEvent,
            A = c.animate,
            f = c.Axis;
        e = c.Chart;
        var b = c.createElement,
            a = c.css,
            d = c.fireEvent,
            h = c.merge,
            k = c.Point,
            l = c.Series,
            y = c.seriesTypes;

        c.cleanRecursively = function (a, b) {
          var d = {};
          B(a, function (f, g) {
            if (q(a[g], !0) && !a.nodeType && b[g]) f = c.cleanRecursively(a[g], b[g]), Object.keys(f).length && (d[g] = f);else if (q(a[g]) || a[g] !== b[g]) d[g] = a[g];
          });
          return d;
        };

        G(e.prototype, {
          addSeries: function addSeries(a, b, c) {
            var f,
                g = this;
            a && (b = u(b, !0), d(g, "addSeries", {
              options: a
            }, function () {
              f = g.initSeries(a);
              g.isDirtyLegend = !0;
              g.linkSeries();
              f.enabledDataSorting && f.setData(a.data, !1);
              d(g, "afterAddSeries", {
                series: f
              });
              b && g.redraw(c);
            }));
            return f;
          },
          addAxis: function addAxis(a, b, d, c) {
            return this.createAxis(b ? "xAxis" : "yAxis", {
              axis: a,
              redraw: d,
              animation: c
            });
          },
          addColorAxis: function addColorAxis(a, b, d) {
            return this.createAxis("colorAxis", {
              axis: a,
              redraw: b,
              animation: d
            });
          },
          createAxis: function createAxis(a, b) {
            var d = this.options,
                g = "colorAxis" === a,
                e = b.redraw,
                l = b.animation;
            b = h(b.axis, {
              index: this[a].length,
              isX: "xAxis" === a
            });
            var p = g ? new c.ColorAxis(this, b) : new f(this, b);
            d[a] = r(d[a] || {});
            d[a].push(b);
            g && (this.isDirtyLegend = !0, this.axes.forEach(function (a) {
              a.series = [];
            }), this.series.forEach(function (a) {
              a.bindAxes();
              a.isDirtyData = !0;
            }));
            u(e, !0) && this.redraw(l);
            return p;
          },
          showLoading: function showLoading(d) {
            var c = this,
                f = c.options,
                e = c.loadingDiv,
                h = f.loading,
                l = function l() {
              e && a(e, {
                left: c.plotLeft + "px",
                top: c.plotTop + "px",
                width: c.plotWidth + "px",
                height: c.plotHeight + "px"
              });
            };

            e || (c.loadingDiv = e = b("div", {
              className: "highcharts-loading highcharts-loading-hidden"
            }, null, c.container), c.loadingSpan = b("span", {
              className: "highcharts-loading-inner"
            }, null, e), D(c, "redraw", l));
            e.className = "highcharts-loading";
            c.loadingSpan.innerHTML = u(d, f.lang.loading, "");
            c.styledMode || (a(e, G(h.style, {
              zIndex: 10
            })), a(c.loadingSpan, h.labelStyle), c.loadingShown || (a(e, {
              opacity: 0,
              display: ""
            }), A(e, {
              opacity: h.style.opacity || .5
            }, {
              duration: h.showDuration || 0
            })));
            c.loadingShown = !0;
            l();
          },
          hideLoading: function hideLoading() {
            var b = this.options,
                d = this.loadingDiv;
            d && (d.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || A(d, {
              opacity: 0
            }, {
              duration: b.loading.hideDuration || 100,
              complete: function complete() {
                a(d, {
                  display: "none"
                });
              }
            }));
            this.loadingShown = !1;
          },
          propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
          propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
          propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
          collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
          update: function update(a, b, f, e) {
            var g = this,
                l = {
              credits: "addCredits",
              title: "setTitle",
              subtitle: "setSubtitle",
              caption: "setCaption"
            },
                p,
                k,
                m,
                t = a.isResponsiveOptions,
                q = [];
            d(g, "update", {
              options: a
            });
            t || g.setResponsive(!1, !0);
            a = c.cleanRecursively(a, g.options);
            h(!0, g.userOptions, a);

            if (p = a.chart) {
              h(!0, g.options.chart, p);
              "className" in p && g.setClassName(p.className);
              "reflow" in p && g.setReflow(p.reflow);

              if ("inverted" in p || "polar" in p || "type" in p) {
                g.propFromSeries();
                var x = !0;
              }

              "alignTicks" in p && (x = !0);
              B(p, function (a, b) {
                -1 !== g.propsRequireUpdateSeries.indexOf("chart." + b) && (k = !0);
                -1 !== g.propsRequireDirtyBox.indexOf(b) && (g.isDirtyBox = !0);
                t || -1 === g.propsRequireReflow.indexOf(b) || (m = !0);
              });
              !g.styledMode && "style" in p && g.renderer.setStyle(p.style);
            }

            !g.styledMode && a.colors && (this.options.colors = a.colors);
            a.plotOptions && h(!0, this.options.plotOptions, a.plotOptions);
            a.time && this.time === c.time && (this.time = new c.Time(a.time));
            B(a, function (a, b) {
              if (g[b] && "function" === typeof g[b].update) g[b].update(a, !1);else if ("function" === typeof g[l[b]]) g[l[b]](a);
              "chart" !== b && -1 !== g.propsRequireUpdateSeries.indexOf(b) && (k = !0);
            });
            this.collectionsWithUpdate.forEach(function (b) {
              if (a[b]) {
                if ("series" === b) {
                  var d = [];
                  g[b].forEach(function (a, b) {
                    a.options.isInternal || d.push(u(a.options.index, b));
                  });
                }

                r(a[b]).forEach(function (a, c) {
                  (c = F(a.id) && g.get(a.id) || g[b][d ? d[c] : c]) && c.coll === b && (c.update(a, !1), f && (c.touched = !0));
                  !c && f && g.collectionsWithInit[b] && (g.collectionsWithInit[b][0].apply(g, [a].concat(g.collectionsWithInit[b][1] || []).concat([!1])).touched = !0);
                });
                f && g[b].forEach(function (a) {
                  a.touched || a.options.isInternal ? delete a.touched : q.push(a);
                });
              }
            });
            q.forEach(function (a) {
              a.remove && a.remove(!1);
            });
            x && g.axes.forEach(function (a) {
              a.update({}, !1);
            });
            k && g.getSeriesOrderByLinks().forEach(function (a) {
              a.chart && a.update({}, !1);
            }, this);
            a.loading && h(!0, g.options.loading, a.loading);
            x = p && p.width;
            p = p && p.height;
            C(p) && (p = w(p, x || g.chartWidth));
            m || v(x) && x !== g.chartWidth || v(p) && p !== g.chartHeight ? g.setSize(x, p, e) : u(b, !0) && g.redraw(e);
            d(g, "afterUpdate", {
              options: a,
              redraw: b,
              animation: e
            });
          },
          setSubtitle: function setSubtitle(a, b) {
            this.applyDescription("subtitle", a);
            this.layOutTitles(b);
          },
          setCaption: function setCaption(a, b) {
            this.applyDescription("caption", a);
            this.layOutTitles(b);
          }
        });
        e.prototype.collectionsWithInit = {
          xAxis: [e.prototype.addAxis, [!0]],
          yAxis: [e.prototype.addAxis, [!1]],
          series: [e.prototype.addSeries]
        };
        G(k.prototype, {
          update: function update(a, b, d, c) {
            function f() {
              g.applyOptions(a);
              null === g.y && h && (g.graphic = h.destroy());
              q(a, !0) && (h && h.element && a && a.marker && "undefined" !== typeof a.marker.symbol && (g.graphic = h.destroy()), a && a.dataLabels && g.dataLabel && (g.dataLabel = g.dataLabel.destroy()), g.connector && (g.connector = g.connector.destroy()));
              l = g.index;
              e.updateParallelArrays(g, l);
              k.data[l] = q(k.data[l], !0) || q(a, !0) ? g.options : u(a, k.data[l]);
              e.isDirty = e.isDirtyData = !0;
              !e.fixedBox && e.hasCartesianSeries && (p.isDirtyBox = !0);
              "point" === k.legendType && (p.isDirtyLegend = !0);
              b && p.redraw(d);
            }

            var g = this,
                e = g.series,
                h = g.graphic,
                l,
                p = e.chart,
                k = e.options;
            b = u(b, !0);
            !1 === c ? f() : g.firePointEvent("update", {
              options: a
            }, f);
          },
          remove: function remove(a, b) {
            this.series.removePoint(this.series.data.indexOf(this), a, b);
          }
        });
        G(l.prototype, {
          addPoint: function addPoint(a, b, c, f, e) {
            var g = this.options,
                h = this.data,
                l = this.chart,
                p = this.xAxis;
            p = p && p.hasNames && p.names;
            var k = g.data,
                m = this.xData,
                t;
            b = u(b, !0);
            var r = {
              series: this
            };
            this.pointClass.prototype.applyOptions.apply(r, [a]);
            var q = r.x;
            var x = m.length;
            if (this.requireSorting && q < m[x - 1]) for (t = !0; x && m[x - 1] > q;) {
              x--;
            }
            this.updateParallelArrays(r, "splice", x, 0, 0);
            this.updateParallelArrays(r, x);
            p && r.name && (p[q] = r.name);
            k.splice(x, 0, a);
            t && (this.data.splice(x, 0, null), this.processData());
            "point" === g.legendType && this.generatePoints();
            c && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), this.updateParallelArrays(r, "shift"), k.shift()));
            !1 !== e && d(this, "addPoint", {
              point: r
            });
            this.isDirtyData = this.isDirty = !0;
            b && l.redraw(f);
          },
          removePoint: function removePoint(a, b, d) {
            var c = this,
                f = c.data,
                g = f[a],
                e = c.points,
                h = c.chart,
                l = function l() {
              e && e.length === f.length && e.splice(a, 1);
              f.splice(a, 1);
              c.options.data.splice(a, 1);
              c.updateParallelArrays(g || {
                series: c
              }, "splice", a, 1);
              g && g.destroy();
              c.isDirty = !0;
              c.isDirtyData = !0;
              b && h.redraw();
            };

            m(d, h);
            b = u(b, !0);
            g ? g.firePointEvent("remove", null, l) : l();
          },
          remove: function remove(a, b, c, f) {
            function g() {
              e.destroy(f);
              e.remove = null;
              h.isDirtyLegend = h.isDirtyBox = !0;
              h.linkSeries();
              u(a, !0) && h.redraw(b);
            }

            var e = this,
                h = e.chart;
            !1 !== c ? d(e, "remove", null, g) : g();
          },
          update: function update(a, b) {
            a = c.cleanRecursively(a, this.userOptions);
            d(this, "update", {
              options: a
            });
            var f = this,
                g = f.chart,
                e = f.userOptions,
                l = f.initialType || f.type,
                p = a.type || e.type || g.options.chart.type,
                k = !(this.hasDerivedData || a.dataGrouping || p && p !== this.type || "undefined" !== typeof a.pointStart || a.pointInterval || a.pointIntervalUnit || a.keys),
                m = y[l].prototype,
                r,
                q = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"],
                v = ["eventOptions", "navigatorSeries", "baseSeries"],
                w = f.finishedAnimating && {
              animation: !1
            },
                A = {};
            k && (v.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== a.visible && v.push("area", "graph"), f.parallelArrays.forEach(function (a) {
              v.push(a + "Data");
            }), a.data && (a.dataSorting && G(f.options.dataSorting, a.dataSorting), this.setData(a.data, !1)));
            a = h(e, w, {
              index: "undefined" === typeof e.index ? f.index : e.index,
              pointStart: u(e.pointStart, f.xData[0])
            }, !k && {
              data: f.options.data
            }, a);
            k && a.data && (a.data = f.options.data);
            v = q.concat(v);
            v.forEach(function (a) {
              v[a] = f[a];
              delete f[a];
            });
            f.remove(!1, null, !1, !0);

            for (r in m) {
              f[r] = void 0;
            }

            y[p || l] ? G(f, y[p || l].prototype) : c.error(17, !0, g, {
              missingModuleFor: p || l
            });
            v.forEach(function (a) {
              f[a] = v[a];
            });
            f.init(g, a);

            if (k && this.points) {
              var D = f.options;
              !1 === D.visible ? (A.graphic = 1, A.dataLabel = 1) : f._hasPointLabels || (p = D.marker, m = D.dataLabels, p && (!1 === p.enabled || "symbol" in p) && (A.graphic = 1), m && !1 === m.enabled && (A.dataLabel = 1));
              this.points.forEach(function (a) {
                a && a.series && (a.resolveColor(), Object.keys(A).length && a.destroyElements(A), !1 === D.showInLegend && a.legendItem && g.legend.destroyItem(a));
              }, this);
            }

            a.zIndex !== e.zIndex && q.forEach(function (b) {
              f[b] && f[b].attr({
                zIndex: a.zIndex
              });
            });
            f.initialType = l;
            g.linkSeries();
            d(this, "afterUpdate");
            u(b, !0) && g.redraw(k ? void 0 : !1);
          },
          setName: function setName(a) {
            this.name = this.options.name = this.userOptions.name = a;
            this.chart.isDirtyLegend = !0;
          }
        });
        G(f.prototype, {
          update: function update(a, b) {
            var d = this.chart,
                c = a && a.events || {};
            a = h(this.userOptions, a);
            d.options[this.coll].indexOf && (d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)] = a);
            B(d.options[this.coll].events, function (a, b) {
              "undefined" === typeof c[b] && (c[b] = void 0);
            });
            this.destroy(!0);
            this.init(d, G(a, {
              events: c
            }));
            d.isDirtyBox = !0;
            u(b, !0) && d.redraw();
          },
          remove: function remove(a) {
            for (var b = this.chart, d = this.coll, c = this.series, f = c.length; f--;) {
              c[f] && c[f].remove(!1);
            }

            I(b.axes, this);
            I(b[d], this);
            H(b.options[d]) ? b.options[d].splice(this.options.index, 1) : delete b.options[d];
            b[d].forEach(function (a, b) {
              a.options.index = a.userOptions.index = b;
            });
            this.destroy();
            b.isDirtyBox = !0;
            u(a, !0) && b.redraw();
          },
          setTitle: function setTitle(a, b) {
            this.update({
              title: a
            }, b);
          },
          setCategories: function setCategories(a, b) {
            this.update({
              categories: a
            }, b);
          }
        });
      });
      M(J, "parts/AreaSeries.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.objectEach,
            I = e.pick,
            G = c.color,
            H = c.Series;
        e = c.seriesType;
        e("area", "line", {
          softThreshold: !1,
          threshold: 0
        }, {
          singleStacks: !1,
          getStackPoints: function getStackPoints(c) {
            var e = [],
                v = [],
                B = this.xAxis,
                u = this.yAxis,
                w = u.stacks[this.stackKey],
                m = {},
                r = this.index,
                D = u.series,
                A = D.length,
                f = I(u.options.reversedStacks, !0) ? 1 : -1,
                b;
            c = c || this.points;

            if (this.options.stacking) {
              for (b = 0; b < c.length; b++) {
                c[b].leftNull = c[b].rightNull = void 0, m[c[b].x] = c[b];
              }

              F(w, function (a, b) {
                null !== a.total && v.push(b);
              });
              v.sort(function (a, b) {
                return a - b;
              });
              var a = D.map(function (a) {
                return a.visible;
              });
              v.forEach(function (d, c) {
                var h = 0,
                    l,
                    q;
                if (m[d] && !m[d].isNull) e.push(m[d]), [-1, 1].forEach(function (e) {
                  var g = 1 === e ? "rightNull" : "leftNull",
                      h = 0,
                      p = w[v[c + e]];
                  if (p) for (b = r; 0 <= b && b < A;) {
                    l = p.points[b], l || (b === r ? m[d][g] = !0 : a[b] && (q = w[d].points[b]) && (h -= q[1] - q[0])), b += f;
                  }
                  m[d][1 === e ? "rightCliff" : "leftCliff"] = h;
                });else {
                  for (b = r; 0 <= b && b < A;) {
                    if (l = w[d].points[b]) {
                      h = l[1];
                      break;
                    }

                    b += f;
                  }

                  h = u.translate(h, 0, 1, 0, 1);
                  e.push({
                    isNull: !0,
                    plotX: B.translate(d, 0, 0, 0, 1),
                    x: d,
                    plotY: h,
                    yBottom: h
                  });
                }
              });
            }

            return e;
          },
          getGraphPath: function getGraphPath(c) {
            var e = H.prototype.getGraphPath,
                v = this.options,
                B = v.stacking,
                u = this.yAxis,
                w,
                m = [],
                r = [],
                D = this.index,
                A = u.stacks[this.stackKey],
                f = v.threshold,
                b = Math.round(u.getThreshold(v.threshold));
            v = I(v.connectNulls, "percent" === B);

            var a = function a(_a2, d, e) {
              var g = c[_a2];
              _a2 = B && A[g.x].points[D];
              var l = g[e + "Null"] || 0;
              e = g[e + "Cliff"] || 0;
              g = !0;

              if (e || l) {
                var p = (l ? _a2[0] : _a2[1]) + e;
                var k = _a2[0] + e;
                g = !!l;
              } else !B && c[d] && c[d].isNull && (p = k = f);

              "undefined" !== typeof p && (r.push({
                plotX: h,
                plotY: null === p ? b : u.getThreshold(p),
                isNull: g,
                isCliff: !0
              }), m.push({
                plotX: h,
                plotY: null === k ? b : u.getThreshold(k),
                doCurve: !1
              }));
            };

            c = c || this.points;
            B && (c = this.getStackPoints(c));

            for (w = 0; w < c.length; w++) {
              B || (c[w].leftCliff = c[w].rightCliff = c[w].leftNull = c[w].rightNull = void 0);
              var d = c[w].isNull;
              var h = I(c[w].rectPlotX, c[w].plotX);
              var k = I(c[w].yBottom, b);
              if (!d || v) v || a(w, w - 1, "left"), d && !B && v || (r.push(c[w]), m.push({
                x: w,
                plotX: h,
                plotY: k
              })), v || a(w, w + 1, "right");
            }

            w = e.call(this, r, !0, !0);
            m.reversed = !0;
            d = e.call(this, m, !0, !0);
            d.length && (d[0] = "L");
            d = w.concat(d);
            e = e.call(this, r, !1, v);
            d.xMap = w.xMap;
            this.areaPath = d;
            return e;
          },
          drawGraph: function drawGraph() {
            this.areaPath = [];
            H.prototype.drawGraph.apply(this);
            var c = this,
                e = this.areaPath,
                C = this.options,
                B = [["area", "highcharts-area", this.color, C.fillColor]];
            this.zones.forEach(function (e, q) {
              B.push(["zone-area-" + q, "highcharts-area highcharts-zone-area-" + q + " " + e.className, e.color || c.color, e.fillColor || C.fillColor]);
            });
            B.forEach(function (q) {
              var v = q[0],
                  m = c[v],
                  r = m ? "animate" : "attr",
                  u = {};
              m ? (m.endX = c.preventGraphAnimation ? null : e.xMap, m.animate({
                d: e
              })) : (u.zIndex = 0, m = c[v] = c.chart.renderer.path(e).addClass(q[1]).add(c.group), m.isArea = !0);
              c.chart.styledMode || (u.fill = I(q[3], G(q[2]).setOpacity(I(C.fillOpacity, .75)).get()));
              m[r](u);
              m.startX = e.xMap;
              m.shiftUnit = C.step ? 2 : 1;
            });
          },
          drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
        });
        "";
      });
      M(J, "parts/SplineSeries.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.pick;
        c = c.seriesType;
        c("spline", "line", {}, {
          getPointSpline: function getPointSpline(c, e, H) {
            var v = e.plotX,
                q = e.plotY,
                C = c[H - 1];
            H = c[H + 1];

            if (C && !C.isNull && !1 !== C.doCurve && !e.isCliff && H && !H.isNull && !1 !== H.doCurve && !e.isCliff) {
              c = C.plotY;
              var B = H.plotX;
              H = H.plotY;
              var u = 0;
              var w = (1.5 * v + C.plotX) / 2.5;
              var m = (1.5 * q + c) / 2.5;
              B = (1.5 * v + B) / 2.5;
              var r = (1.5 * q + H) / 2.5;
              B !== w && (u = (r - m) * (B - v) / (B - w) + q - r);
              m += u;
              r += u;
              m > c && m > q ? (m = Math.max(c, q), r = 2 * q - m) : m < c && m < q && (m = Math.min(c, q), r = 2 * q - m);
              r > H && r > q ? (r = Math.max(H, q), m = 2 * q - r) : r < H && r < q && (r = Math.min(H, q), m = 2 * q - r);
              e.rightContX = B;
              e.rightContY = r;
            }

            e = ["C", F(C.rightContX, C.plotX), F(C.rightContY, C.plotY), F(w, v), F(m, q), v, q];
            C.rightContX = C.rightContY = null;
            return e;
          }
        });
        "";
      });
      M(J, "parts/AreaSplineSeries.js", [J["parts/Globals.js"]], function (c) {
        var e = c.seriesTypes.area.prototype,
            F = c.seriesType;
        F("areaspline", "spline", c.defaultPlotOptions.area, {
          getStackPoints: e.getStackPoints,
          getGraphPath: e.getGraphPath,
          drawGraph: e.drawGraph,
          drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
        });
        "";
      });
      M(J, "parts/ColumnSeries.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.animObject,
            I = e.clamp,
            G = e.defined,
            H = e.extend,
            v = e.isNumber,
            q = e.pick,
            C = c.color,
            B = c.merge,
            u = c.Series;
        e = c.seriesType;
        var w = c.svg;
        e("column", "line", {
          borderRadius: 0,
          crisp: !0,
          groupPadding: .2,
          marker: null,
          pointPadding: .1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: {
            hover: {
              halo: !1,
              brightness: .1
            },
            select: {
              color: "#cccccc",
              borderColor: "#000000"
            }
          },
          dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
          },
          softThreshold: !1,
          startFromThreshold: !0,
          stickyTracking: !1,
          tooltip: {
            distance: 6
          },
          threshold: 0,
          borderColor: "#ffffff"
        }, {
          cropShoulder: 0,
          directTouch: !0,
          trackerGroups: ["group", "dataLabelsGroup"],
          negStacks: !0,
          init: function init() {
            u.prototype.init.apply(this, arguments);
            var c = this,
                e = c.chart;
            e.hasRendered && e.series.forEach(function (e) {
              e.type === c.type && (e.isDirty = !0);
            });
          },
          getColumnMetrics: function getColumnMetrics() {
            var c = this,
                e = c.options,
                v = c.xAxis,
                u = c.yAxis,
                f = v.options.reversedStacks;
            f = v.reversed && !f || !v.reversed && f;
            var b,
                a = {},
                d = 0;
            !1 === e.grouping ? d = 1 : c.chart.series.forEach(function (f) {
              var e = f.yAxis,
                  g = f.options;

              if (f.type === c.type && (f.visible || !c.chart.options.chart.ignoreHiddenSeries) && u.len === e.len && u.pos === e.pos) {
                if (g.stacking) {
                  b = f.stackKey;
                  "undefined" === typeof a[b] && (a[b] = d++);
                  var h = a[b];
                } else !1 !== g.grouping && (h = d++);

                f.columnIndex = h;
              }
            });
            var h = Math.min(Math.abs(v.transA) * (v.ordinalSlope || e.pointRange || v.closestPointRange || v.tickInterval || 1), v.len),
                k = h * e.groupPadding,
                l = (h - 2 * k) / (d || 1);
            e = Math.min(e.maxPointWidth || v.len, q(e.pointWidth, l * (1 - 2 * e.pointPadding)));
            c.columnMetrics = {
              width: e,
              offset: (l - e) / 2 + (k + ((c.columnIndex || 0) + (f ? 1 : 0)) * l - h / 2) * (f ? -1 : 1)
            };
            return c.columnMetrics;
          },
          crispCol: function crispCol(c, e, q, v) {
            var f = this.chart,
                b = this.borderWidth,
                a = -(b % 2 ? .5 : 0);
            b = b % 2 ? .5 : 1;
            f.inverted && f.renderer.isVML && (b += 1);
            this.options.crisp && (q = Math.round(c + q) + a, c = Math.round(c) + a, q -= c);
            v = Math.round(e + v) + b;
            a = .5 >= Math.abs(e) && .5 < v;
            e = Math.round(e) + b;
            v -= e;
            a && v && (--e, v += 1);
            return {
              x: c,
              y: e,
              width: q,
              height: v
            };
          },
          translate: function translate() {
            var c = this,
                e = c.chart,
                v = c.options,
                w = c.dense = 2 > c.closestPointRange * c.xAxis.transA;
            w = c.borderWidth = q(v.borderWidth, w ? 0 : 1);
            var f = c.yAxis,
                b = v.threshold,
                a = c.translatedThreshold = f.getThreshold(b),
                d = q(v.minPointLength, 5),
                h = c.getColumnMetrics(),
                k = h.width,
                l = c.barW = Math.max(k, 1 + 2 * w),
                y = c.pointXOffset = h.offset,
                p = c.dataMin,
                g = c.dataMax;
            e.inverted && (a -= .5);
            v.pointPadding && (l = Math.ceil(l));
            u.prototype.translate.apply(c);
            c.points.forEach(function (h) {
              var m = q(h.yBottom, a),
                  t = 999 + Math.abs(m),
                  r = k;
              t = I(h.plotY, -t, f.len + t);
              var n = h.plotX + y,
                  z = l,
                  v = Math.min(t, m),
                  u = Math.max(t, m) - v;

              if (d && Math.abs(u) < d) {
                u = d;
                var w = !f.reversed && !h.negative || f.reversed && h.negative;
                h.y === b && c.dataMax <= b && f.min < b && p !== g && (w = !w);
                v = Math.abs(v - a) > d ? m - d : a - (w ? d : 0);
              }

              G(h.options.pointWidth) && (r = z = Math.ceil(h.options.pointWidth), n -= Math.round((r - k) / 2));
              h.barX = n;
              h.pointWidth = r;
              h.tooltipPos = e.inverted ? [f.len + f.pos - e.plotLeft - t, c.xAxis.len - n - z / 2, u] : [n + z / 2, t + f.pos - e.plotTop, u];
              h.shapeType = c.pointClass.prototype.shapeType || "rect";
              h.shapeArgs = c.crispCol.apply(c, h.isNull ? [n, a, z, 0] : [n, v, z, u]);
            });
          },
          getSymbol: c.noop,
          drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
          drawGraph: function drawGraph() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          },
          pointAttribs: function pointAttribs(c, e) {
            var m = this.options,
                r = this.pointAttrToOptions || {};
            var f = r.stroke || "borderColor";
            var b = r["stroke-width"] || "borderWidth",
                a = c && c.color || this.color,
                d = c && c[f] || m[f] || this.color || a,
                h = c && c[b] || m[b] || this[b] || 0;
            r = c && c.options.dashStyle || m.dashStyle;
            var k = q(c && c.opacity, m.opacity, 1);

            if (c && this.zones.length) {
              var l = c.getZone();
              a = c.options.color || l && (l.color || c.nonZonedColor) || this.color;
              l && (d = l.borderColor || d, r = l.dashStyle || r, h = l.borderWidth || h);
            }

            e && c && (c = B(m.states[e], c.options.states && c.options.states[e] || {}), e = c.brightness, a = c.color || "undefined" !== typeof e && C(a).brighten(c.brightness).get() || a, d = c[f] || d, h = c[b] || h, r = c.dashStyle || r, k = q(c.opacity, k));
            f = {
              fill: a,
              stroke: d,
              "stroke-width": h,
              opacity: k
            };
            r && (f.dashstyle = r);
            return f;
          },
          drawPoints: function drawPoints() {
            var c = this,
                e = this.chart,
                q = c.options,
                u = e.renderer,
                f = q.animationLimit || 250,
                b;
            c.points.forEach(function (a) {
              var d = a.graphic,
                  h = !!d,
                  k = d && e.pointCount < f ? "animate" : "attr";

              if (v(a.plotY) && null !== a.y) {
                b = a.shapeArgs;
                d && a.hasNewShapeType() && (d = d.destroy());
                c.enabledDataSorting && (a.startXPos = c.xAxis.reversed ? -(b ? b.width : 0) : c.xAxis.width);
                d || (a.graphic = d = u[a.shapeType](b).add(a.group || c.group)) && c.enabledDataSorting && e.hasRendered && e.pointCount < f && (d.attr({
                  x: a.startXPos
                }), h = !0, k = "animate");
                if (d && h) d[k](B(b));
                if (q.borderRadius) d[k]({
                  r: q.borderRadius
                });
                e.styledMode || d[k](c.pointAttribs(a, a.selected && "select")).shadow(!1 !== a.allowShadow && q.shadow, null, q.stacking && !q.borderRadius);
                d.addClass(a.getClassName(), !0);
              } else d && (a.graphic = d.destroy());
            });
          },
          animate: function animate(c) {
            var e = this,
                m = this.yAxis,
                q = e.options,
                f = this.chart.inverted,
                b = {},
                a = f ? "translateX" : "translateY";
            if (w) if (c) b.scaleY = .001, c = I(m.toPixels(q.threshold), m.pos, m.pos + m.len), f ? b.translateX = c - m.len : b.translateY = c, e.clipBox && e.setClip(), e.group.attr(b);else {
              var d = e.group.attr(a);
              e.group.animate({
                scaleY: 1
              }, H(F(e.options.animation), {
                step: function step(c, f) {
                  b[a] = d + f.pos * (m.pos - d);
                  e.group.attr(b);
                }
              }));
              e.animate = null;
            }
          },
          remove: function remove() {
            var c = this,
                e = c.chart;
            e.hasRendered && e.series.forEach(function (e) {
              e.type === c.type && (e.isDirty = !0);
            });
            u.prototype.remove.apply(c, arguments);
          }
        });
        "";
      });
      M(J, "parts/BarSeries.js", [J["parts/Globals.js"]], function (c) {
        c = c.seriesType;
        c("bar", "column", null, {
          inverted: !0
        });
        "";
      });
      M(J, "parts/ScatterSeries.js", [J["parts/Globals.js"]], function (c) {
        var e = c.Series,
            F = c.seriesType;
        F("scatter", "line", {
          lineWidth: 0,
          findNearestPointBy: "xy",
          jitter: {
            x: 0,
            y: 0
          },
          marker: {
            enabled: !0
          },
          tooltip: {
            headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
          }
        }, {
          sorted: !1,
          requireSorting: !1,
          noSharedTooltip: !0,
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
          takeOrdinalPosition: !1,
          drawGraph: function drawGraph() {
            this.options.lineWidth && e.prototype.drawGraph.call(this);
          },
          applyJitter: function applyJitter() {
            var c = this,
                e = this.options.jitter,
                F = this.points.length;
            e && this.points.forEach(function (v, q) {
              ["x", "y"].forEach(function (C, B) {
                var u = "plot" + C.toUpperCase();

                if (e[C] && !v.isNull) {
                  var w = c[C + "Axis"];
                  var m = e[C] * w.transA;

                  if (w && !w.isLog) {
                    var r = Math.max(0, v[u] - m);
                    w = Math.min(w.len, v[u] + m);
                    B = 1E4 * Math.sin(q + B * F);
                    v[u] = r + (w - r) * (B - Math.floor(B));
                    "x" === C && (v.clientX = v.plotX);
                  }
                }
              });
            });
          }
        });
        c.addEvent(e, "afterTranslate", function () {
          this.applyJitter && this.applyJitter();
        });
        "";
      });
      M(J, "mixins/centered-series.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.isNumber,
            I = e.pick,
            G = e.relativeLength,
            H = c.deg2rad;
        c.CenteredSeriesMixin = {
          getCenter: function getCenter() {
            var c = this.options,
                e = this.chart,
                C = 2 * (c.slicedOffset || 0),
                B = e.plotWidth - 2 * C;
            e = e.plotHeight - 2 * C;
            var u = c.center;
            u = [I(u[0], "50%"), I(u[1], "50%"), c.size || "100%", c.innerSize || 0];
            var w = Math.min(B, e),
                m;

            for (m = 0; 4 > m; ++m) {
              var r = u[m];
              c = 2 > m || 2 === m && /%$/.test(r);
              u[m] = G(r, [B, e, w, u[2]][m]) + (c ? C : 0);
            }

            u[3] > u[2] && (u[3] = u[2]);
            return u;
          },
          getStartAndEndRadians: function getStartAndEndRadians(c, e) {
            c = F(c) ? c : 0;
            e = F(e) && e > c && 360 > e - c ? e : c + 360;
            return {
              start: H * (c + -90),
              end: H * (e + -90)
            };
          }
        };
      });
      M(J, "parts/PieSeries.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.clamp,
            I = e.defined,
            G = e.isNumber,
            H = e.pick,
            v = e.relativeLength,
            q = e.setAnimation,
            C = c.addEvent;
        e = c.CenteredSeriesMixin;
        var B = e.getStartAndEndRadians,
            u = c.merge,
            w = c.noop,
            m = c.Point,
            r = c.Series,
            D = c.seriesType,
            A = c.fireEvent;
        D("pie", "line", {
          center: [null, null],
          clip: !1,
          colorByPoint: !0,
          dataLabels: {
            allowOverlap: !0,
            connectorPadding: 5,
            connectorShape: "fixedOffset",
            crookDistance: "70%",
            distance: 30,
            enabled: !0,
            formatter: function formatter() {
              return this.point.isNull ? void 0 : this.point.name;
            },
            softConnector: !0,
            x: 0
          },
          fillColor: void 0,
          ignoreHiddenPoint: !0,
          inactiveOtherPoints: !0,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: !1,
          slicedOffset: 10,
          stickyTracking: !1,
          tooltip: {
            followPointer: !0
          },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: {
            hover: {
              brightness: .1
            }
          }
        }, {
          isCartesian: !1,
          requireSorting: !1,
          directTouch: !0,
          noSharedTooltip: !0,
          trackerGroups: ["group", "dataLabelsGroup"],
          axisTypes: [],
          pointAttribs: c.seriesTypes.column.prototype.pointAttribs,
          animate: function animate(c) {
            var b = this,
                a = b.points,
                d = b.startAngleRad;
            c || (a.forEach(function (a) {
              var c = a.graphic,
                  f = a.shapeArgs;
              c && f && (c.attr({
                r: H(a.startR, b.center && b.center[3] / 2),
                start: d,
                end: d
              }), c.animate({
                r: f.r,
                start: f.start,
                end: f.end
              }, b.options.animation));
            }), b.animate = null);
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          updateTotals: function updateTotals() {
            var c,
                b = 0,
                a = this.points,
                d = a.length,
                e = this.options.ignoreHiddenPoint;

            for (c = 0; c < d; c++) {
              var k = a[c];
              b += e && !k.visible ? 0 : k.isNull ? 0 : k.y;
            }

            this.total = b;

            for (c = 0; c < d; c++) {
              k = a[c], k.percentage = 0 < b && (k.visible || !e) ? k.y / b * 100 : 0, k.total = b;
            }
          },
          generatePoints: function generatePoints() {
            r.prototype.generatePoints.call(this);
            this.updateTotals();
          },
          getX: function getX(c, b, a) {
            var d = this.center,
                f = this.radii ? this.radii[a.index] : d[2] / 2;
            c = Math.asin(F((c - d[1]) / (f + a.labelDistance), -1, 1));
            return d[0] + (b ? -1 : 1) * Math.cos(c) * (f + a.labelDistance) + (0 < a.labelDistance ? (b ? -1 : 1) * this.options.dataLabels.padding : 0);
          },
          translate: function translate(c) {
            this.generatePoints();
            var b = 0,
                a = this.options,
                d = a.slicedOffset,
                f = d + (a.borderWidth || 0),
                e = B(a.startAngle, a.endAngle),
                l = this.startAngleRad = e.start;
            e = (this.endAngleRad = e.end) - l;
            var m = this.points,
                p = a.dataLabels.distance;
            a = a.ignoreHiddenPoint;
            var g,
                t = m.length;
            c || (this.center = c = this.getCenter());

            for (g = 0; g < t; g++) {
              var q = m[g];
              var r = l + b * e;
              if (!a || q.visible) b += q.percentage / 100;
              var u = l + b * e;
              q.shapeType = "arc";
              q.shapeArgs = {
                x: c[0],
                y: c[1],
                r: c[2] / 2,
                innerR: c[3] / 2,
                start: Math.round(1E3 * r) / 1E3,
                end: Math.round(1E3 * u) / 1E3
              };
              q.labelDistance = H(q.options.dataLabels && q.options.dataLabels.distance, p);
              q.labelDistance = v(q.labelDistance, q.shapeArgs.r);
              this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, q.labelDistance);
              u = (u + r) / 2;
              u > 1.5 * Math.PI ? u -= 2 * Math.PI : u < -Math.PI / 2 && (u += 2 * Math.PI);
              q.slicedTranslation = {
                translateX: Math.round(Math.cos(u) * d),
                translateY: Math.round(Math.sin(u) * d)
              };
              var n = Math.cos(u) * c[2] / 2;
              var z = Math.sin(u) * c[2] / 2;
              q.tooltipPos = [c[0] + .7 * n, c[1] + .7 * z];
              q.half = u < -Math.PI / 2 || u > Math.PI / 2 ? 1 : 0;
              q.angle = u;
              r = Math.min(f, q.labelDistance / 5);
              q.labelPosition = {
                natural: {
                  x: c[0] + n + Math.cos(u) * q.labelDistance,
                  y: c[1] + z + Math.sin(u) * q.labelDistance
                },
                "final": {},
                alignment: 0 > q.labelDistance ? "center" : q.half ? "right" : "left",
                connectorPosition: {
                  breakAt: {
                    x: c[0] + n + Math.cos(u) * r,
                    y: c[1] + z + Math.sin(u) * r
                  },
                  touchingSliceAt: {
                    x: c[0] + n,
                    y: c[1] + z
                  }
                }
              };
            }

            A(this, "afterTranslate");
          },
          drawEmpty: function drawEmpty() {
            var c = this.options;

            if (0 === this.total) {
              var b = this.center[0];
              var a = this.center[1];
              this.graph || (this.graph = this.chart.renderer.circle(b, a, 0).addClass("highcharts-graph").add(this.group));
              this.graph.animate({
                "stroke-width": c.borderWidth,
                cx: b,
                cy: a,
                r: this.center[2] / 2,
                fill: c.fillColor || "none",
                stroke: c.color || "#cccccc"
              });
            } else this.graph && (this.graph = this.graph.destroy());
          },
          redrawPoints: function redrawPoints() {
            var c = this,
                b = c.chart,
                a = b.renderer,
                d,
                e,
                k,
                l,
                m = c.options.shadow;
            this.drawEmpty();
            !m || c.shadowGroup || b.styledMode || (c.shadowGroup = a.g("shadow").attr({
              zIndex: -1
            }).add(c.group));
            c.points.forEach(function (f) {
              var g = {};
              e = f.graphic;

              if (!f.isNull && e) {
                l = f.shapeArgs;
                d = f.getTranslate();

                if (!b.styledMode) {
                  var h = f.shadowGroup;
                  m && !h && (h = f.shadowGroup = a.g("shadow").add(c.shadowGroup));
                  h && h.attr(d);
                  k = c.pointAttribs(f, f.selected && "select");
                }

                f.delayedRendering ? (e.setRadialReference(c.center).attr(l).attr(d), b.styledMode || e.attr(k).attr({
                  "stroke-linejoin": "round"
                }).shadow(m, h), f.delayedRendering = !1) : (e.setRadialReference(c.center), b.styledMode || u(!0, g, k), u(!0, g, l, d), e.animate(g));
                e.attr({
                  visibility: f.visible ? "inherit" : "hidden"
                });
                e.addClass(f.getClassName());
              } else e && (f.graphic = e.destroy());
            });
          },
          drawPoints: function drawPoints() {
            var c = this.chart.renderer;
            this.points.forEach(function (b) {
              b.graphic || (b.graphic = c[b.shapeType](b.shapeArgs).add(b.series.group), b.delayedRendering = !0);
            });
          },
          searchPoint: w,
          sortByAngle: function sortByAngle(c, b) {
            c.sort(function (a, d) {
              return "undefined" !== typeof a.angle && (d.angle - a.angle) * b;
            });
          },
          drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
          getCenter: e.getCenter,
          getSymbol: w,
          drawGraph: null
        }, {
          init: function init() {
            m.prototype.init.apply(this, arguments);
            var c = this;
            c.name = H(c.name, "Slice");

            var b = function b(a) {
              c.slice("select" === a.type);
            };

            C(c, "select", b);
            C(c, "unselect", b);
            return c;
          },
          isValid: function isValid() {
            return G(this.y) && 0 <= this.y;
          },
          setVisible: function setVisible(c, b) {
            var a = this,
                d = a.series,
                f = d.chart,
                e = d.options.ignoreHiddenPoint;
            b = H(b, e);
            c !== a.visible && (a.visible = a.options.visible = c = "undefined" === typeof c ? !a.visible : c, d.options.data[d.data.indexOf(a)] = a.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (b) {
              if (a[b]) a[b][c ? "show" : "hide"](!0);
            }), a.legendItem && f.legend.colorizeItem(a, c), c || "hover" !== a.state || a.setState(""), e && (d.isDirty = !0), b && f.redraw());
          },
          slice: function slice(c, b, a) {
            var d = this.series;
            q(a, d.chart);
            H(b, !0);
            this.sliced = this.options.sliced = I(c) ? c : !this.sliced;
            d.options.data[d.data.indexOf(this)] = this.options;
            this.graphic.animate(this.getTranslate());
            this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
          },
          getTranslate: function getTranslate() {
            return this.sliced ? this.slicedTranslation : {
              translateX: 0,
              translateY: 0
            };
          },
          haloPath: function haloPath(c) {
            var b = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(b.x, b.y, b.r + c, b.r + c, {
              innerR: b.r - 1,
              start: b.start,
              end: b.end
            });
          },
          connectorShapes: {
            fixedOffset: function fixedOffset(c, b, a) {
              var d = b.breakAt;
              b = b.touchingSliceAt;
              return ["M", c.x, c.y].concat(a.softConnector ? ["C", c.x + ("left" === c.alignment ? -5 : 5), c.y, 2 * d.x - b.x, 2 * d.y - b.y, d.x, d.y] : ["L", d.x, d.y]).concat(["L", b.x, b.y]);
            },
            straight: function straight(c, b) {
              b = b.touchingSliceAt;
              return ["M", c.x, c.y, "L", b.x, b.y];
            },
            crookedLine: function crookedLine(c, b, a) {
              b = b.touchingSliceAt;
              var d = this.series,
                  e = d.center[0],
                  f = d.chart.plotWidth,
                  l = d.chart.plotLeft;
              d = c.alignment;
              var m = this.shapeArgs.r;
              a = v(a.crookDistance, 1);
              a = "left" === d ? e + m + (f + l - e - m) * (1 - a) : l + (e - m) * a;
              e = ["L", a, c.y];
              if ("left" === d ? a > c.x || a < b.x : a < c.x || a > b.x) e = [];
              return ["M", c.x, c.y].concat(e).concat(["L", b.x, b.y]);
            }
          },
          getConnectorPath: function getConnectorPath() {
            var c = this.labelPosition,
                b = this.series.options.dataLabels,
                a = b.connectorShape,
                d = this.connectorShapes;
            d[a] && (a = d[a]);
            return a.call(this, {
              x: c.final.x,
              y: c.final.y,
              alignment: c.alignment
            }, c.connectorPosition, b);
          }
        });
        "";
      });
      M(J, "parts/DataLabels.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.animObject,
            I = e.arrayMax,
            G = e.clamp,
            H = e.defined,
            v = e.extend,
            q = e.isArray,
            C = e.objectEach,
            B = e.pick,
            u = e.relativeLength,
            w = e.splat,
            m = c.format,
            r = c.merge;
        e = c.noop;
        var D = c.Series,
            A = c.seriesTypes,
            f = c.stableSort;

        c.distribute = function (b, a, d) {
          function e(a, b) {
            return a.target - b.target;
          }

          var k,
              l = !0,
              m = b,
              p = [];
          var g = 0;
          var t = m.reducedLen || a;

          for (k = b.length; k--;) {
            g += b[k].size;
          }

          if (g > t) {
            f(b, function (a, b) {
              return (b.rank || 0) - (a.rank || 0);
            });

            for (g = k = 0; g <= t;) {
              g += b[k].size, k++;
            }

            p = b.splice(k - 1, b.length);
          }

          f(b, e);

          for (b = b.map(function (a) {
            return {
              size: a.size,
              targets: [a.target],
              align: B(a.align, .5)
            };
          }); l;) {
            for (k = b.length; k--;) {
              l = b[k], g = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2, l.pos = G(g - l.size * l.align, 0, a - l.size);
            }

            k = b.length;

            for (l = !1; k--;) {
              0 < k && b[k - 1].pos + b[k - 1].size > b[k].pos && (b[k - 1].size += b[k].size, b[k - 1].targets = b[k - 1].targets.concat(b[k].targets), b[k - 1].align = .5, b[k - 1].pos + b[k - 1].size > a && (b[k - 1].pos = a - b[k - 1].size), b.splice(k, 1), l = !0);
            }
          }

          m.push.apply(m, p);
          k = 0;
          b.some(function (b) {
            var e = 0;
            if (b.targets.some(function () {
              m[k].pos = b.pos + e;
              if (Math.abs(m[k].pos - m[k].target) > d) return m.slice(0, k + 1).forEach(function (a) {
                delete a.pos;
              }), m.reducedLen = (m.reducedLen || a) - .1 * a, m.reducedLen > .1 * a && c.distribute(m, a, d), !0;
              e += m[k].size;
              k++;
            })) return !0;
          });
          f(m, e);
        };

        D.prototype.drawDataLabels = function () {
          function b(a, b) {
            var d = b.filter;
            return d ? (b = d.operator, a = a[d.property], d = d.value, ">" === b && a > d || "<" === b && a < d || ">=" === b && a >= d || "<=" === b && a <= d || "==" === b && a == d || "===" === b && a === d ? !0 : !1) : !0;
          }

          function a(a, b) {
            var d = [],
                c;
            if (q(a) && !q(b)) d = a.map(function (a) {
              return r(a, b);
            });else if (q(b) && !q(a)) d = b.map(function (b) {
              return r(a, b);
            });else if (q(a) || q(b)) for (c = Math.max(a.length, b.length); c--;) {
              d[c] = r(a[c], b[c]);
            } else d = r(a, b);
            return d;
          }

          var d = this,
              e = d.chart,
              f = d.options,
              l = f.dataLabels,
              y = d.points,
              p,
              g = d.hasRendered || 0,
              t = F(f.animation).duration,
              x = Math.min(t, 200),
              u = !e.renderer.forExport && B(l.defer, 0 < x),
              v = e.renderer;
          l = a(a(e.options.plotOptions && e.options.plotOptions.series && e.options.plotOptions.series.dataLabels, e.options.plotOptions && e.options.plotOptions[d.type] && e.options.plotOptions[d.type].dataLabels), l);
          c.fireEvent(this, "drawDataLabels");

          if (q(l) || l.enabled || d._hasPointLabels) {
            var n = d.plotGroup("dataLabelsGroup", "data-labels", u && !g ? "hidden" : "inherit", l.zIndex || 6);
            u && (n.attr({
              opacity: +g
            }), g || setTimeout(function () {
              var a = d.dataLabelsGroup;
              a && (d.visible && n.show(!0), a[f.animation ? "animate" : "attr"]({
                opacity: 1
              }, {
                duration: x
              }));
            }, t - x));
            y.forEach(function (c) {
              p = w(a(l, c.dlOptions || c.options && c.options.dataLabels));
              p.forEach(function (a, g) {
                var h = a.enabled && (!c.isNull || c.dataLabelOnNull) && b(c, a),
                    l = c.dataLabels ? c.dataLabels[g] : c.dataLabel,
                    p = c.connectors ? c.connectors[g] : c.connector,
                    k = B(a.distance, c.labelDistance),
                    t = !l;

                if (h) {
                  var q = c.getLabelConfig();
                  var r = B(a[c.formatPrefix + "Format"], a.format);
                  q = H(r) ? m(r, q, e) : (a[c.formatPrefix + "Formatter"] || a.formatter).call(q, a);
                  r = a.style;
                  var y = a.rotation;
                  e.styledMode || (r.color = B(a.color, r.color, d.color, "#000000"), "contrast" === r.color ? (c.contrastColor = v.getContrast(c.color || d.color), r.color = !H(k) && a.inside || 0 > k || f.stacking ? c.contrastColor : "#000000") : delete c.contrastColor, f.cursor && (r.cursor = f.cursor));
                  var x = {
                    r: a.borderRadius || 0,
                    rotation: y,
                    padding: a.padding,
                    zIndex: 1
                  };
                  e.styledMode || (x.fill = a.backgroundColor, x.stroke = a.borderColor, x["stroke-width"] = a.borderWidth);
                  C(x, function (a, b) {
                    "undefined" === typeof a && delete x[b];
                  });
                }

                !l || h && H(q) ? h && H(q) && (l ? x.text = q : (c.dataLabels = c.dataLabels || [], l = c.dataLabels[g] = y ? v.text(q, 0, -9999).addClass("highcharts-data-label") : v.label(q, 0, -9999, a.shape, null, null, a.useHTML, null, "data-label"), g || (c.dataLabel = l), l.addClass(" highcharts-data-label-color-" + c.colorIndex + " " + (a.className || "") + (a.useHTML ? " highcharts-tracker" : ""))), l.options = a, l.attr(x), e.styledMode || l.css(r).shadow(a.shadow), l.added || l.add(n), a.textPath && !a.useHTML && (l.setTextPath(c.getDataLabelPath && c.getDataLabelPath(l) || c.graphic, a.textPath), c.dataLabelPath && !a.textPath.enabled && (c.dataLabelPath = c.dataLabelPath.destroy())), d.alignDataLabel(c, l, a, null, t)) : (c.dataLabel = c.dataLabel && c.dataLabel.destroy(), c.dataLabels && (1 === c.dataLabels.length ? delete c.dataLabels : delete c.dataLabels[g]), g || delete c.dataLabel, p && (c.connector = c.connector.destroy(), c.connectors && (1 === c.connectors.length ? delete c.connectors : delete c.connectors[g])));
              });
            });
          }

          c.fireEvent(this, "afterDrawDataLabels");
        };

        D.prototype.alignDataLabel = function (b, a, c, e, f) {
          var d = this,
              h = this.chart,
              p = this.isCartesian && h.inverted,
              g = this.enabledDataSorting,
              k = B(b.dlBox && b.dlBox.centerX, b.plotX, -9999),
              m = B(b.plotY, -9999),
              q = a.getBBox(),
              r = c.rotation,
              n = c.align,
              u = h.isInsidePlot(k, Math.round(m), p),
              w = "justify" === B(c.overflow, g ? "none" : "justify"),
              A = this.visible && (b.series.forceDL || g && !w || u || e && h.isInsidePlot(k, p ? e.x + 1 : e.y + e.height - 1, p));

          var C = function C(c) {
            g && d.xAxis && !w && d.setDataLabelStartPos(b, a, f, u, c);
          };

          if (A) {
            var D = h.renderer.fontMetrics(h.styledMode ? void 0 : c.style.fontSize, a).b;
            e = v({
              x: p ? this.yAxis.len - m : k,
              y: Math.round(p ? this.xAxis.len - k : m),
              width: 0,
              height: 0
            }, e);
            v(c, {
              width: q.width,
              height: q.height
            });
            r ? (w = !1, k = h.renderer.rotCorr(D, r), k = {
              x: e.x + c.x + e.width / 2 + k.x,
              y: e.y + c.y + {
                top: 0,
                middle: .5,
                bottom: 1
              }[c.verticalAlign] * e.height
            }, C(k), a[f ? "attr" : "animate"](k).attr({
              align: n
            }), C = (r + 720) % 360, C = 180 < C && 360 > C, "left" === n ? k.y -= C ? q.height : 0 : "center" === n ? (k.x -= q.width / 2, k.y -= q.height / 2) : "right" === n && (k.x -= q.width, k.y -= C ? 0 : q.height), a.placed = !0, a.alignAttr = k) : (C(e), a.align(c, null, e), k = a.alignAttr);
            w && 0 <= e.height ? this.justifyDataLabel(a, c, k, q, e, f) : B(c.crop, !0) && (A = h.isInsidePlot(k.x, k.y) && h.isInsidePlot(k.x + q.width, k.y + q.height));
            if (c.shape && !r) a[f ? "attr" : "animate"]({
              anchorX: p ? h.plotWidth - b.plotY : b.plotX,
              anchorY: p ? h.plotHeight - b.plotX : b.plotY
            });
          }

          f && g && (a.placed = !1);
          A || g && !w || (a.hide(!0), a.placed = !1);
        };

        D.prototype.setDataLabelStartPos = function (b, a, c, e, f) {
          var d = this.chart,
              h = d.inverted,
              p = this.xAxis,
              g = p.reversed,
              k = h ? a.height / 2 : a.width / 2;
          b = (b = b.pointWidth) ? b / 2 : 0;
          p = h ? f.x : g ? -k - b : p.width - k + b;
          f = h ? g ? this.yAxis.height - k + b : -k - b : f.y;
          a.startXPos = p;
          a.startYPos = f;
          e ? "hidden" === a.visibility && (a.show(), a.attr({
            opacity: 0
          }).animate({
            opacity: 1
          })) : a.attr({
            opacity: 1
          }).animate({
            opacity: 0
          }, void 0, a.hide);
          d.hasRendered && (c && a.attr({
            x: a.startXPos,
            y: a.startYPos
          }), a.placed = !0);
        };

        D.prototype.justifyDataLabel = function (b, a, c, e, f, l) {
          var d = this.chart,
              h = a.align,
              g = a.verticalAlign,
              k = b.box ? 0 : b.padding || 0;
          var m = c.x + k;

          if (0 > m) {
            "right" === h ? (a.align = "left", a.inside = !0) : a.x = -m;
            var q = !0;
          }

          m = c.x + e.width - k;
          m > d.plotWidth && ("left" === h ? (a.align = "right", a.inside = !0) : a.x = d.plotWidth - m, q = !0);
          m = c.y + k;
          0 > m && ("bottom" === g ? (a.verticalAlign = "top", a.inside = !0) : a.y = -m, q = !0);
          m = c.y + e.height - k;
          m > d.plotHeight && ("top" === g ? (a.verticalAlign = "bottom", a.inside = !0) : a.y = d.plotHeight - m, q = !0);
          q && (b.placed = !l, b.align(a, null, f));
          return q;
        };

        A.pie && (A.pie.prototype.dataLabelPositioners = {
          radialDistributionY: function radialDistributionY(b) {
            return b.top + b.distributeBox.pos;
          },
          radialDistributionX: function radialDistributionX(b, a, c, e) {
            return b.getX(c < a.top + 2 || c > a.bottom - 2 ? e : c, a.half, a);
          },
          justify: function justify(b, a, c) {
            return c[0] + (b.half ? -1 : 1) * (a + b.labelDistance);
          },
          alignToPlotEdges: function alignToPlotEdges(b, a, c, e) {
            b = b.getBBox().width;
            return a ? b + e : c - b - e;
          },
          alignToConnectors: function alignToConnectors(b, a, c, e) {
            var d = 0,
                f;
            b.forEach(function (a) {
              f = a.dataLabel.getBBox().width;
              f > d && (d = f);
            });
            return a ? d + e : c - d - e;
          }
        }, A.pie.prototype.drawDataLabels = function () {
          var b = this,
              a = b.data,
              d,
              e = b.chart,
              f = b.options.dataLabels,
              l = f.connectorPadding,
              m,
              p = e.plotWidth,
              g = e.plotHeight,
              q = e.plotLeft,
              x = Math.round(e.chartWidth / 3),
              u,
              v = b.center,
              n = v[2] / 2,
              z = v[1],
              w,
              A,
              C,
              F,
              G = [[], []],
              J,
              K,
              M,
              S,
              U = [0, 0, 0, 0],
              X = b.dataLabelPositioners,
              aa;
          b.visible && (f.enabled || b._hasPointLabels) && (a.forEach(function (a) {
            a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
              width: "auto"
            }).css({
              width: "auto",
              textOverflow: "clip"
            }), a.dataLabel.shortened = !1);
          }), D.prototype.drawDataLabels.apply(b), a.forEach(function (a) {
            a.dataLabel && (a.visible ? (G[a.half].push(a), a.dataLabel._pos = null, !H(f.style.width) && !H(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > x && (a.dataLabel.css({
              width: .7 * x
            }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
          }), G.forEach(function (a, h) {
            var k = a.length,
                m = [],
                r;

            if (k) {
              b.sortByAngle(a, h - .5);

              if (0 < b.maxLabelDistance) {
                var t = Math.max(0, z - n - b.maxLabelDistance);
                var x = Math.min(z + n + b.maxLabelDistance, e.plotHeight);
                a.forEach(function (a) {
                  0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, z - n - a.labelDistance), a.bottom = Math.min(z + n + a.labelDistance, e.plotHeight), r = a.dataLabel.getBBox().height || 21, a.distributeBox = {
                    target: a.labelPosition.natural.y - a.top + r / 2,
                    size: r,
                    rank: a.y
                  }, m.push(a.distributeBox));
                });
                t = x + r - t;
                c.distribute(m, t, t / 5);
              }

              for (S = 0; S < k; S++) {
                d = a[S];
                C = d.labelPosition;
                w = d.dataLabel;
                M = !1 === d.visible ? "hidden" : "inherit";
                K = t = C.natural.y;
                m && H(d.distributeBox) && ("undefined" === typeof d.distributeBox.pos ? M = "hidden" : (F = d.distributeBox.size, K = X.radialDistributionY(d)));
                delete d.positionIndex;
                if (f.justify) J = X.justify(d, n, v);else switch (f.alignTo) {
                  case "connectors":
                    J = X.alignToConnectors(a, h, p, q);
                    break;

                  case "plotEdges":
                    J = X.alignToPlotEdges(w, h, p, q);
                    break;

                  default:
                    J = X.radialDistributionX(b, d, K, t);
                }
                w._attr = {
                  visibility: M,
                  align: C.alignment
                };
                w._pos = {
                  x: J + f.x + ({
                    left: l,
                    right: -l
                  }[C.alignment] || 0),
                  y: K + f.y - 10
                };
                C.final.x = J;
                C.final.y = K;
                B(f.crop, !0) && (A = w.getBBox().width, t = null, J - A < l && 1 === h ? (t = Math.round(A - J + l), U[3] = Math.max(t, U[3])) : J + A > p - l && 0 === h && (t = Math.round(J + A - p + l), U[1] = Math.max(t, U[1])), 0 > K - F / 2 ? U[0] = Math.max(Math.round(-K + F / 2), U[0]) : K + F / 2 > g && (U[2] = Math.max(Math.round(K + F / 2 - g), U[2])), w.sideOverflow = t);
              }
            }
          }), 0 === I(U) || this.verifyDataLabelOverflow(U)) && (this.placeDataLabels(), this.points.forEach(function (a) {
            aa = r(f, a.options.dataLabels);

            if (m = B(aa.connectorWidth, 1)) {
              var c;
              u = a.connector;

              if ((w = a.dataLabel) && w._pos && a.visible && 0 < a.labelDistance) {
                M = w._attr.visibility;
                if (c = !u) a.connector = u = e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + a.colorIndex + (a.className ? " " + a.className : "")).add(b.dataLabelsGroup), e.styledMode || u.attr({
                  "stroke-width": m,
                  stroke: aa.connectorColor || a.color || "#666666"
                });
                u[c ? "attr" : "animate"]({
                  d: a.getConnectorPath()
                });
                u.attr("visibility", M);
              } else u && (a.connector = u.destroy());
            }
          }));
        }, A.pie.prototype.placeDataLabels = function () {
          this.points.forEach(function (b) {
            var a = b.dataLabel,
                c;
            a && b.visible && ((c = a._pos) ? (a.sideOverflow && (a._attr.width = Math.max(a.getBBox().width - a.sideOverflow, 0), a.css({
              width: a._attr.width + "px",
              textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
            }), a.shortened = !0), a.attr(a._attr), a[a.moved ? "animate" : "attr"](c), a.moved = !0) : a && a.attr({
              y: -9999
            }));
            delete b.distributeBox;
          }, this);
        }, A.pie.prototype.alignDataLabel = e, A.pie.prototype.verifyDataLabelOverflow = function (b) {
          var a = this.center,
              c = this.options,
              e = c.center,
              f = c.minSize || 80,
              l = null !== c.size;

          if (!l) {
            if (null !== e[0]) var m = Math.max(a[2] - Math.max(b[1], b[3]), f);else m = Math.max(a[2] - b[1] - b[3], f), a[0] += (b[3] - b[1]) / 2;
            null !== e[1] ? m = G(m, f, a[2] - Math.max(b[0], b[2])) : (m = G(m, f, a[2] - b[0] - b[2]), a[1] += (b[0] - b[2]) / 2);
            m < a[2] ? (a[2] = m, a[3] = Math.min(u(c.innerSize || 0, m), m), this.translate(a), this.drawDataLabels && this.drawDataLabels()) : l = !0;
          }

          return l;
        });
        A.column && (A.column.prototype.alignDataLabel = function (b, a, c, e, f) {
          var d = this.chart.inverted,
              h = b.series,
              p = b.dlBox || b.shapeArgs,
              g = B(b.below, b.plotY > B(this.translatedThreshold, h.yAxis.len)),
              k = B(c.inside, !!this.options.stacking);
          p && (e = r(p), 0 > e.y && (e.height += e.y, e.y = 0), p = e.y + e.height - h.yAxis.len, 0 < p && (e.height -= p), d && (e = {
            x: h.yAxis.len - e.y - e.height,
            y: h.xAxis.len - e.x - e.width,
            width: e.height,
            height: e.width
          }), k || (d ? (e.x += g ? 0 : e.width, e.width = 0) : (e.y += g ? e.height : 0, e.height = 0)));
          c.align = B(c.align, !d || k ? "center" : g ? "right" : "left");
          c.verticalAlign = B(c.verticalAlign, d || k ? "middle" : g ? "top" : "bottom");
          D.prototype.alignDataLabel.call(this, b, a, c, e, f);
          e && (0 >= e.height && e.y === this.chart.plotHeight || 0 >= e.width && 0 === e.x) && (a.hide(!0), a.placed = !1);
          c.inside && b.contrastColor && a.css({
            color: b.contrastColor
          });
        });
      });
      M(J, "modules/overlapping-datalabels.src.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.isArray,
            I = e.objectEach,
            G = e.pick;
        e = c.Chart;
        var H = c.addEvent,
            v = c.fireEvent;
        H(e, "render", function () {
          var c = [];
          (this.labelCollectors || []).forEach(function (e) {
            c = c.concat(e());
          });
          (this.yAxis || []).forEach(function (e) {
            e.options.stackLabels && !e.options.stackLabels.allowOverlap && I(e.stacks, function (e) {
              I(e, function (e) {
                c.push(e.label);
              });
            });
          });
          (this.series || []).forEach(function (e) {
            var q = e.options.dataLabels;
            e.visible && (!1 !== q.enabled || e._hasPointLabels) && e.points.forEach(function (e) {
              e.visible && (F(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : []).forEach(function (q) {
                var m = q.options;
                q.labelrank = G(m.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height);
                m.allowOverlap || c.push(q);
              });
            });
          });
          this.hideOverlappingLabels(c);
        });

        e.prototype.hideOverlappingLabels = function (c) {
          var e = this,
              q = c.length,
              u = e.renderer,
              w,
              m,
              r,
              D = !1;

          var A = function A(a) {
            var b = a.box ? 0 : a.padding || 0;
            var c = 0;

            if (a && (!a.alignAttr || a.placed)) {
              var e = a.alignAttr || {
                x: a.attr("x"),
                y: a.attr("y")
              };
              var f = a.parentGroup;
              a.width || (c = a.getBBox(), a.width = c.width, a.height = c.height, c = u.fontMetrics(null, a.element).h);
              return {
                x: e.x + (f.translateX || 0) + b,
                y: e.y + (f.translateY || 0) + b - c,
                width: a.width - 2 * b,
                height: a.height - 2 * b
              };
            }
          };

          for (m = 0; m < q; m++) {
            if (w = c[m]) w.oldOpacity = w.opacity, w.newOpacity = 1, w.absoluteBox = A(w);
          }

          c.sort(function (a, b) {
            return (b.labelrank || 0) - (a.labelrank || 0);
          });

          for (m = 0; m < q; m++) {
            var f = (A = c[m]) && A.absoluteBox;

            for (w = m + 1; w < q; ++w) {
              var b = (r = c[w]) && r.absoluteBox;
              !f || !b || A === r || 0 === A.newOpacity || 0 === r.newOpacity || b.x > f.x + f.width || b.x + b.width < f.x || b.y > f.y + f.height || b.y + b.height < f.y || ((A.labelrank < r.labelrank ? A : r).newOpacity = 0);
            }
          }

          c.forEach(function (a) {
            var b;

            if (a) {
              var c = a.newOpacity;
              a.oldOpacity !== c && (a.alignAttr && a.placed ? (c ? a.show(!0) : b = function b() {
                a.hide(!0);
                a.placed = !1;
              }, D = !0, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b), v(e, "afterHideOverlappingLabel")) : a.attr({
                opacity: c
              }));
              a.isOld = !0;
            }
          });
          D && v(e, "afterHideAllOverlappingLabels");
        };
      });
      M(J, "parts/Interaction.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.defined,
            I = e.extend,
            G = e.isArray,
            H = e.isObject,
            v = e.objectEach,
            q = e.pick,
            C = c.addEvent;
        e = c.Chart;
        var B = c.createElement,
            u = c.css,
            w = c.defaultOptions,
            m = c.defaultPlotOptions,
            r = c.fireEvent,
            D = c.hasTouch,
            A = c.Legend,
            f = c.merge,
            b = c.Point,
            a = c.Series,
            d = c.seriesTypes,
            h = c.svg;
        var k = c.TrackerMixin = {
          drawTrackerPoint: function drawTrackerPoint() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = function d(a) {
              var b = c.getPointFromEvent(a);
              "undefined" !== typeof b && (c.isDirectTouch = !0, b.onMouseOver(a));
            },
                e;

            a.points.forEach(function (a) {
              e = G(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [];
              a.graphic && (a.graphic.element.point = a);
              e.forEach(function (b) {
                b.div ? b.div.point = a : b.element.point = a;
              });
            });
            a._hasTracking || (a.trackerGroups.forEach(function (e) {
              if (a[e]) {
                a[e].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function (a) {
                  c.onTrackerMouseOut(a);
                });
                if (D) a[e].on("touchstart", d);
                !b.styledMode && a.options.cursor && a[e].css(u).css({
                  cursor: a.options.cursor
                });
              }
            }), a._hasTracking = !0);
            r(this, "afterDrawTracker");
          },
          drawTrackerGraph: function drawTrackerGraph() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                k = f.pointer,
                m = f.renderer,
                n = f.options.tooltip.snap,
                q = a.tracker,
                u,
                v = function v() {
              if (f.hoverSeries !== a) a.onMouseOver();
            },
                w = "rgba(192,192,192," + (h ? .0001 : .002) + ")";

            if (e && !c) for (u = e + 1; u--;) {
              "M" === d[u] && d.splice(u + 1, 0, d[u + 1] - n, d[u + 2], "L"), (u && "M" === d[u] || u === e) && d.splice(u, 0, "L", d[u - 2] + n, d[u - 1]);
            }
            q ? q.attr({
              d: d
            }) : a.graph && (a.tracker = m.path(d).attr({
              visibility: a.visible ? "visible" : "hidden",
              zIndex: 2
            }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), f.styledMode || a.tracker.attr({
              "stroke-linejoin": "round",
              stroke: w,
              fill: c ? w : "none",
              "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * n)
            }), [a.tracker, a.markerGroup].forEach(function (a) {
              a.addClass("highcharts-tracker").on("mouseover", v).on("mouseout", function (a) {
                k.onTrackerMouseOut(a);
              });
              b.cursor && !f.styledMode && a.css({
                cursor: b.cursor
              });
              if (D) a.on("touchstart", v);
            }));
            r(this, "afterDrawTracker");
          }
        };
        d.column && (d.column.prototype.drawTracker = k.drawTrackerPoint);
        d.pie && (d.pie.prototype.drawTracker = k.drawTrackerPoint);
        d.scatter && (d.scatter.prototype.drawTracker = k.drawTrackerPoint);
        I(A.prototype, {
          setItemEvents: function setItemEvents(a, c, d) {
            var e = this,
                h = e.chart.renderer.boxWrapper,
                l = a instanceof b,
                p = "highcharts-legend-" + (l ? "point" : "series") + "-active",
                k = e.chart.styledMode;
            (d ? c : a.legendGroup).on("mouseover", function () {
              a.visible && e.allItems.forEach(function (b) {
                a !== b && b.setState("inactive", !l);
              });
              a.setState("hover");
              a.visible && h.addClass(p);
              k || c.css(e.options.itemHoverStyle);
            }).on("mouseout", function () {
              e.chart.styledMode || c.css(f(a.visible ? e.itemStyle : e.itemHiddenStyle));
              e.allItems.forEach(function (b) {
                a !== b && b.setState("", !l);
              });
              h.removeClass(p);
              a.setState();
            }).on("click", function (b) {
              var c = function c() {
                a.setVisible && a.setVisible();
                e.allItems.forEach(function (b) {
                  a !== b && b.setState(a.visible ? "inactive" : "", !l);
                });
              };

              h.removeClass(p);
              b = {
                browserEvent: b
              };
              a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : r(a, "legendItemClick", b, c);
            });
          },
          createCheckboxForItem: function createCheckboxForItem(a) {
            a.checkbox = B("input", {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: a.selected,
              defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            C(a.checkbox, "click", function (b) {
              r(a.series || a, "checkboxClick", {
                checked: b.target.checked,
                item: a
              }, function () {
                a.select();
              });
            });
          }
        });
        I(e.prototype, {
          showResetZoom: function showResetZoom() {
            function a() {
              b.zoomOut();
            }

            var b = this,
                c = w.lang,
                d = b.options.chart.resetZoomButton,
                e = d.theme,
                f = e.states,
                h = "chart" === d.relativeTo || "spaceBox" === d.relativeTo ? null : "plotBox";
            r(this, "beforeShowResetZoom", null, function () {
              b.resetZoomButton = b.renderer.button(c.resetZoom, null, null, a, e, f && f.hover).attr({
                align: d.position.align,
                title: c.resetZoomTitle
              }).addClass("highcharts-reset-zoom").add().align(d.position, !1, h);
            });
            r(this, "afterShowResetZoom");
          },
          zoomOut: function zoomOut() {
            r(this, "selection", {
              resetSelection: !0
            }, this.zoom);
          },
          zoom: function zoom(a) {
            var b = this,
                c,
                d = b.pointer,
                e = !1,
                f = b.inverted ? d.mouseDownX : d.mouseDownY;
            !a || a.resetSelection ? (b.axes.forEach(function (a) {
              c = a.zoom();
            }), d.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
              var g = a.axis,
                  h = b.inverted ? g.left : g.top,
                  l = b.inverted ? h + g.width : h + g.height,
                  p = g.isXAxis,
                  k = !1;
              if (!p && f >= h && f <= l || p || !F(f)) k = !0;
              d[p ? "zoomX" : "zoomY"] && k && (c = g.zoom(a.min, a.max), g.displayBtn && (e = !0));
            });
            var h = b.resetZoomButton;
            e && !h ? b.showResetZoom() : !e && H(h) && (b.resetZoomButton = h.destroy());
            c && b.redraw(q(b.options.chart.animation, a && a.animation, 100 > b.pointCount));
          },
          pan: function pan(a, b) {
            var c = this,
                d = c.hoverPoints,
                e = c.options.chart,
                f;
            b = "object" === typeof b ? b : {
              enabled: b,
              type: "x"
            };
            e && e.panning && (e.panning = b);
            var h = b.type;
            r(this, "pan", {
              originalEvent: a
            }, function () {
              d && d.forEach(function (a) {
                a.setState();
              });
              var b = [1];
              "xy" === h ? b = [1, 0] : "y" === h && (b = [0]);
              b.forEach(function (b) {
                var d = c[b ? "xAxis" : "yAxis"][0],
                    e = d.options,
                    g = d.horiz,
                    h = a[g ? "chartX" : "chartY"];
                g = g ? "mouseDownX" : "mouseDownY";
                var l = c[g],
                    k = (d.pointRange || 0) / 2,
                    p = d.reversed && !c.inverted || !d.reversed && c.inverted ? -1 : 1,
                    m = d.getExtremes(),
                    n = d.toValue(l - h, !0) + k * p;
                p = d.toValue(l + d.len - h, !0) - k * p;
                var q = p < n;
                l = q ? p : n;
                n = q ? n : p;
                p = Math.min(m.dataMin, k ? m.min : d.toValue(d.toPixels(m.min) - d.minPixelPadding));
                k = Math.max(m.dataMax, k ? m.max : d.toValue(d.toPixels(m.max) + d.minPixelPadding));

                if (!e.ordinal) {
                  b && (e = p - l, 0 < e && (n += e, l = p), e = n - k, 0 < e && (n = k, l -= e));
                  if (d.series.length && l !== m.min && n !== m.max && b || d.panningState && l >= d.panningState.startMin && n <= d.panningState.startMax) d.setExtremes(l, n, !1, !1, {
                    trigger: "pan"
                  }), f = !0;
                  c[g] = h;
                }
              });
              f && c.redraw(!1);
              u(c.container, {
                cursor: "move"
              });
            });
          }
        });
        I(b.prototype, {
          select: function select(a, b) {
            var c = this,
                d = c.series,
                e = d.chart;
            this.selectedStaging = a = q(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
              accumulate: b
            }, function () {
              c.selected = c.options.selected = a;
              d.options.data[d.data.indexOf(c)] = c.options;
              c.setState(a && "select");
              b || e.getSelectedPoints().forEach(function (a) {
                var b = a.series;
                a.selected && a !== c && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options, a.setState(e.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"));
              });
            });
            delete this.selectedStaging;
          },
          onMouseOver: function onMouseOver(a) {
            var b = this.series.chart,
                c = b.pointer;
            a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);
            c.runPointActions(a, this);
          },
          onMouseOut: function onMouseOut() {
            var a = this.series.chart;
            this.firePointEvent("mouseOut");
            this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) {
              a.setState();
            });
            a.hoverPoints = a.hoverPoint = null;
          },
          importEvents: function importEvents() {
            if (!this.hasImportedEvents) {
              var a = this,
                  b = f(a.series.options.point, a.options).events;
              a.events = b;
              v(b, function (b, d) {
                c.isFunction(b) && C(a, d, b);
              });
              this.hasImportedEvents = !0;
            }
          },
          setState: function setState(a, b) {
            var c = this.series,
                d = this.state,
                e = c.options.states[a || "normal"] || {},
                f = m[c.type].marker && c.options.marker,
                h = f && !1 === f.enabled,
                l = f && f.states && f.states[a || "normal"] || {},
                k = !1 === l.enabled,
                u = c.stateMarkerGraphic,
                v = this.marker || {},
                y = c.chart,
                w = c.halo,
                A,
                B = f && c.markerAttribs;
            a = a || "";

            if (!(a === this.state && !b || this.selected && "select" !== a || !1 === e.enabled || a && (k || h && !1 === l.enabled) || a && v.states && v.states[a] && !1 === v.states[a].enabled)) {
              this.state = a;
              B && (A = c.markerAttribs(this, a));

              if (this.graphic) {
                d && this.graphic.removeClass("highcharts-point-" + d);
                a && this.graphic.addClass("highcharts-point-" + a);

                if (!y.styledMode) {
                  var C = c.pointAttribs(this, a);
                  var D = q(y.options.chart.animation, e.animation);
                  c.options.inactiveOtherPoints && ((this.dataLabels || []).forEach(function (a) {
                    a && a.animate({
                      opacity: C.opacity
                    }, D);
                  }), this.connector && this.connector.animate({
                    opacity: C.opacity
                  }, D));
                  this.graphic.animate(C, D);
                }

                A && this.graphic.animate(A, q(y.options.chart.animation, l.animation, f.animation));
                u && u.hide();
              } else {
                if (a && l) {
                  d = v.symbol || c.symbol;
                  u && u.currentSymbol !== d && (u = u.destroy());
                  if (A) if (u) u[b ? "animate" : "attr"]({
                    x: A.x,
                    y: A.y
                  });else d && (c.stateMarkerGraphic = u = y.renderer.symbol(d, A.x, A.y, A.width, A.height).add(c.markerGroup), u.currentSymbol = d);
                  !y.styledMode && u && u.attr(c.pointAttribs(this, a));
                }

                u && (u[a && this.isInside ? "show" : "hide"](), u.element.point = this);
              }

              a = e.halo;
              e = (u = this.graphic || u) && u.visibility || "inherit";
              a && a.size && u && "hidden" !== e && !this.isCluster ? (w || (c.halo = w = y.renderer.path().add(u.parentGroup)), w.show()[b ? "animate" : "attr"]({
                d: this.haloPath(a.size)
              }), w.attr({
                "class": "highcharts-halo highcharts-color-" + q(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""),
                visibility: e,
                zIndex: -1
              }), w.point = this, y.styledMode || w.attr(I({
                fill: this.color || c.color,
                "fill-opacity": a.opacity
              }, a.attributes))) : w && w.point && w.point.haloPath && w.animate({
                d: w.point.haloPath(0)
              }, null, w.hide);
              r(this, "afterSetState");
            }
          },
          haloPath: function haloPath(a) {
            return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
          }
        });
        I(a.prototype, {
          onMouseOver: function onMouseOver() {
            var a = this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && r(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this;
          },
          onMouseOut: function onMouseOut() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            b.hoverSeries = null;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && r(this, "mouseOut");
            !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
            b.series.forEach(function (a) {
              a.setState("", !0);
            });
          },
          setState: function setState(a, b) {
            var c = this,
                d = c.options,
                e = c.graph,
                f = d.inactiveOtherPoints,
                h = d.states,
                l = d.lineWidth,
                k = d.opacity,
                m = q(h[a || "normal"] && h[a || "normal"].animation, c.chart.options.chart.animation);
            d = 0;
            a = a || "";

            if (c.state !== a && ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) {
              b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a));
            }), c.state = a, !c.chart.styledMode)) {
              if (h[a] && !1 === h[a].enabled) return;
              a && (l = h[a].lineWidth || l + (h[a].lineWidthPlus || 0), k = q(h[a].opacity, k));
              if (e && !e.dashstyle) for (h = {
                "stroke-width": l
              }, e.animate(h, m); c["zone-graph-" + d];) {
                c["zone-graph-" + d].attr(h), d += 1;
              }
              f || [c.group, c.markerGroup, c.dataLabelsGroup, c.labelBySeries].forEach(function (a) {
                a && a.animate({
                  opacity: k
                }, m);
              });
            }

            b && f && c.points && c.setAllPointsToState(a);
          },
          setAllPointsToState: function setAllPointsToState(a) {
            this.points.forEach(function (b) {
              b.setState && b.setState(a);
            });
          },
          setVisible: function setVisible(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            var k = (c.visible = a = c.options.visible = c.userOptions.visible = "undefined" === typeof a ? !h : a) ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
              if (c[a]) c[a][k]();
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && d.series.forEach(function (a) {
              a.options.stacking && a.visible && (a.isDirty = !0);
            });
            c.linkedSeries.forEach(function (b) {
              b.setVisible(a, !1);
            });
            f && (d.isDirtyBox = !0);
            r(c, k);
            !1 !== b && d.redraw();
          },
          show: function show() {
            this.setVisible(!0);
          },
          hide: function hide() {
            this.setVisible(!1);
          },
          select: function select(a) {
            this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a;
            this.checkbox && (this.checkbox.checked = a);
            r(this, a ? "select" : "unselect");
          },
          drawTracker: k.drawTrackerGraph
        });
      });
      M(J, "parts/Responsive.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.isArray,
            I = e.isObject,
            G = e.objectEach,
            H = e.pick,
            v = e.splat;
        e = c.Chart;

        e.prototype.setResponsive = function (e, v) {
          var q = this.options.responsive,
              u = [],
              w = this.currentResponsive;
          !v && q && q.rules && q.rules.forEach(function (e) {
            "undefined" === typeof e._id && (e._id = c.uniqueKey());
            this.matchResponsiveRule(e, u);
          }, this);
          v = c.merge.apply(0, u.map(function (e) {
            return c.find(q.rules, function (c) {
              return c._id === e;
            }).chartOptions;
          }));
          v.isResponsiveOptions = !0;
          u = u.toString() || void 0;
          u !== (w && w.ruleIds) && (w && this.update(w.undoOptions, e, !0), u ? (w = this.currentOptions(v), w.isResponsiveOptions = !0, this.currentResponsive = {
            ruleIds: u,
            mergedOptions: v,
            undoOptions: w
          }, this.update(v, e, !0)) : this.currentResponsive = void 0);
        };

        e.prototype.matchResponsiveRule = function (c, e) {
          var q = c.condition;
          (q.callback || function () {
            return this.chartWidth <= H(q.maxWidth, Number.MAX_VALUE) && this.chartHeight <= H(q.maxHeight, Number.MAX_VALUE) && this.chartWidth >= H(q.minWidth, 0) && this.chartHeight >= H(q.minHeight, 0);
          }).call(this) && e.push(c._id);
        };

        e.prototype.currentOptions = function (c) {
          function e(c, m, r, u) {
            var w;
            G(c, function (c, b) {
              if (!u && -1 < q.collectionsWithUpdate.indexOf(b)) for (c = v(c), r[b] = [], w = 0; w < c.length; w++) {
                m[b][w] && (r[b][w] = {}, e(c[w], m[b][w], r[b][w], u + 1));
              } else I(c) ? (r[b] = F(c) ? [] : {}, e(c, m[b] || {}, r[b], u + 1)) : r[b] = "undefined" === typeof m[b] ? null : m[b];
            });
          }

          var q = this,
              u = {};
          e(c, this.options, u, 0);
          return u;
        };
      });
      M(J, "masters/highcharts.src.js", [J["parts/Globals.js"], J["parts/Utilities.js"]], function (c, e) {
        var F = e.extend;
        F(c, {
          animObject: e.animObject,
          arrayMax: e.arrayMax,
          arrayMin: e.arrayMin,
          attr: e.attr,
          correctFloat: e.correctFloat,
          defined: e.defined,
          destroyObjectProperties: e.destroyObjectProperties,
          discardElement: e.discardElement,
          erase: e.erase,
          extend: e.extend,
          extendClass: e.extendClass,
          isArray: e.isArray,
          isClass: e.isClass,
          isDOMElement: e.isDOMElement,
          isNumber: e.isNumber,
          isObject: e.isObject,
          isString: e.isString,
          numberFormat: e.numberFormat,
          objectEach: e.objectEach,
          offset: e.offset,
          pad: e.pad,
          pick: e.pick,
          pInt: e.pInt,
          relativeLength: e.relativeLength,
          setAnimation: e.setAnimation,
          splat: e.splat,
          syncTimeout: e.syncTimeout,
          wrap: e.wrap
        });
        return c;
      });
      J["masters/highcharts.src.js"]._modules = J;
      return J["masters/highcharts.src.js"];
    }); //# sourceMappingURL=highcharts.js.map

    /***/

  },

  /***/
  "./node_modules/highcharts/modules/exporting.src.js":
  /*!**********************************************************!*\
    !*** ./node_modules/highcharts/modules/exporting.src.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsModulesExportingSrcJs(module, exports, __webpack_require__) {
    "use strict";

    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Highcharts JS v8.0.0 (2019-12-10)
    *
    * Exporting module
    *
    * (c) 2010-2019 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */


    (function (factory) {
      if (true && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
      } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
        /*! highcharts */
        "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (Highcharts) {
          factory(Highcharts);
          factory.Highcharts = Highcharts;
          return factory;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(function (Highcharts) {
      var _modules = Highcharts ? Highcharts._modules : {};

      function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
          obj[path] = fn.apply(null, args);
        }
      }

      _registerModule(_modules, 'modules/full-screen.src.js', [_modules['parts/Globals.js']], function (H) {
        /* *
         *
         *  (c) 2009-2019 Sebastian Bochann
         *
         *  Full screen for Highcharts
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */

        /* eslint-disable no-invalid-this, valid-jsdoc */

        /**
         * The FullScreen class.
         * The module allows user to enable full screen mode in StockTools.
         * Based on default solutions in browsers.
         *
         * @private
         * @class
         * @name Highcharts.FullScreen
         *
         * @param {Highcharts.HTMLDOMElement} container
         *        Chart container
         */
        var FullScreen = H.FullScreen = function (container) {
          this.init(container.parentNode);
        };

        FullScreen.prototype = {
          /**
           * Init function
           * @private
           * @param {Highcharts.HTMLDOMElement} container
           *        Chart container's parent
           * @return {void}
           */
          init: function init(container) {
            var promise;

            if (container.requestFullscreen) {
              promise = container.requestFullscreen();
            } else if (container.mozRequestFullScreen) {
              promise = container.mozRequestFullScreen();
            } else if (container.webkitRequestFullscreen) {
              promise = container.webkitRequestFullscreen();
            } else if (container.msRequestFullscreen) {
              promise = container.msRequestFullscreen();
            }

            if (promise) {
              promise['catch'](function () {
                alert('Full screen is not supported inside a frame'); // eslint-disable-line no-alert
              });
            }
          }
        };
      });

      _registerModule(_modules, 'mixins/navigation.js', [], function () {
        /**
         *
         *  (c) 2010-2018 Paweł Fus
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        var chartNavigation = {
          /**
           * Initializes `chart.navigation` object which delegates `update()` methods
           * to all other common classes (used in exporting and navigationBindings).
           *
           * @private
           * @param {Highcharts.Chart} chart
           *        The chart instance.
           * @return {void}
           */
          initUpdate: function initUpdate(chart) {
            if (!chart.navigation) {
              chart.navigation = {
                updates: [],
                update: function update(options, redraw) {
                  this.updates.forEach(function (updateConfig) {
                    updateConfig.update.call(updateConfig.context, options, redraw);
                  });
                }
              };
            }
          },

          /**
           * Registers an `update()` method in the `chart.navigation` object.
           *
           * @private
           * @param {Highcharts.ChartNavigationUpdateFunction} update
           *        The `update()` method that will be called in `chart.update()`.
           * @param {Highcharts.Chart} chart
           *        The chart instance. `update()` will use that as a context
           *        (`this`).
           * @return {void}
           */
          addUpdate: function addUpdate(update, chart) {
            if (!chart.navigation) {
              this.initUpdate(chart);
            }

            chart.navigation.updates.push({
              update: update,
              context: chart
            });
          }
        };
        return chartNavigation;
      });

      _registerModule(_modules, 'modules/exporting.src.js', [_modules['parts/Globals.js'], _modules['parts/Utilities.js'], _modules['mixins/navigation.js']], function (H, U, chartNavigationMixin) {
        /* *
         *
         *  Exporting module
         *
         *  (c) 2010-2019 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */

        /**
         * Gets fired after a chart is printed through the context menu item or the
         * Chart.print method.
         *
         * @callback Highcharts.ExportingAfterPrintCallbackFunction
         *
         * @param {Highcharts.Chart} chart
         *        The chart on which the event occured.
         *
         * @param {global.Event} event
         *        The event that occured.
         */

        /**
         * Gets fired before a chart is printed through the context menu item or the
         * Chart.print method.
         *
         * @callback Highcharts.ExportingBeforePrintCallbackFunction
         *
         * @param {Highcharts.Chart} chart
         *        The chart on which the event occured.
         *
         * @param {global.Event} event
         *        The event that occured.
         */

        /**
         * Function to call if the offline-exporting module fails to export a chart on
         * the client side.
         *
         * @callback Highcharts.ExportingErrorCallbackFunction
         *
         * @param {Highcharts.ExportingOptions} options
         *        The exporting options.
         *
         * @param {global.Error} err
         *        The error from the module.
         */

        /**
         * Definition for a menu item in the context menu.
         *
         * @interface Highcharts.ExportingMenuObject
         */

        /**
        * The text for the menu item.
        *
        * @name Highcharts.ExportingMenuObject#text
        * @type {string|undefined}
        */

        /**
        * If internationalization is required, the key to a language string.
        *
        * @name Highcharts.ExportingMenuObject#textKey
        * @type {string|undefined}
        */

        /**
        * The click handler for the menu item.
        *
        * @name Highcharts.ExportingMenuObject#onclick
        * @type {Highcharts.EventCallbackFunction<Highcharts.Chart>|undefined}
        */

        /**
        * Indicates a separator line instead of an item.
        *
        * @name Highcharts.ExportingMenuObject#separator
        * @type {boolean|undefined}
        */

        /**
         * Possible MIME types for exporting.
         *
         * @typedef {"image/png"|"image/jpeg"|"application/pdf"|"image/svg+xml"} Highcharts.ExportingMimeTypeValue
         */
        var discardElement = U.discardElement,
            extend = U.extend,
            isObject = U.isObject,
            objectEach = U.objectEach,
            pick = U.pick; // create shortcuts

        var defaultOptions = H.defaultOptions,
            doc = H.doc,
            Chart = H.Chart,
            addEvent = H.addEvent,
            removeEvent = H.removeEvent,
            fireEvent = H.fireEvent,
            createElement = H.createElement,
            css = H.css,
            merge = H.merge,
            isTouchDevice = H.isTouchDevice,
            win = H.win,
            userAgent = win.navigator.userAgent,
            SVGRenderer = H.SVGRenderer,
            symbols = H.Renderer.prototype.symbols,
            isMSBrowser = /Edge\/|Trident\/|MSIE /.test(userAgent),
            isFirefoxBrowser = /firefox/i.test(userAgent); // Add language

        extend(defaultOptions.lang
        /**
         * @optionparent lang
         */
        , {
          /**
           * Exporting module only. View the chart in full screen.
           *
           * @since    7.1.0
           * @requires modules/exporting
           *
           * @private
           */
          viewFullscreen: 'View in full screen',

          /**
           * Exporting module only. The text for the menu item to print the chart.
           *
           * @since    3.0.1
           * @requires modules/exporting
           *
           * @private
           */
          printChart: 'Print chart',

          /**
           * Exporting module only. The text for the PNG download menu item.
           *
           * @since    2.0
           * @requires modules/exporting
           *
           * @private
           */
          downloadPNG: 'Download PNG image',

          /**
           * Exporting module only. The text for the JPEG download menu item.
           *
           * @since    2.0
           * @requires modules/exporting
           *
           * @private
           */
          downloadJPEG: 'Download JPEG image',

          /**
           * Exporting module only. The text for the PDF download menu item.
           *
           * @since    2.0
           * @requires modules/exporting
           *
           * @private
           */
          downloadPDF: 'Download PDF document',

          /**
           * Exporting module only. The text for the SVG download menu item.
           *
           * @since    2.0
           * @requires modules/exporting
           *
           * @private
           */
          downloadSVG: 'Download SVG vector image',

          /**
           * Exporting module menu. The tooltip title for the context menu holding
           * print and export menu items.
           *
           * @since    3.0
           * @requires modules/exporting
           *
           * @private
           */
          contextButtonTitle: 'Chart context menu'
        });

        if (!defaultOptions.navigation) {
          // Buttons and menus are collected in a separate config option set called
          // 'navigation'. This can be extended later to add control buttons like
          // zoom and pan right click menus.

          /**
           * A collection of options for buttons and menus appearing in the exporting
           * module.
           *
           * @requires     modules/exporting
           * @optionparent navigation
           */
          defaultOptions.navigation = {};
        }

        merge(true, defaultOptions.navigation, {
          /**
           * @optionparent navigation.buttonOptions
           *
           * @private
           */
          buttonOptions: {
            theme: {},

            /**
             * Whether to enable buttons.
             *
             * @sample highcharts/navigation/buttonoptions-enabled/
             *         Exporting module loaded but buttons disabled
             *
             * @type      {boolean}
             * @default   true
             * @since     2.0
             * @apioption navigation.buttonOptions.enabled
             */

            /**
             * The pixel size of the symbol on the button.
             *
             * @sample highcharts/navigation/buttonoptions-height/
             *         Bigger buttons
             *
             * @since 2.0
             */
            symbolSize: 14,

            /**
             * The x position of the center of the symbol inside the button.
             *
             * @sample highcharts/navigation/buttonoptions-height/
             *         Bigger buttons
             *
             * @since 2.0
             */
            symbolX: 12.5,

            /**
             * The y position of the center of the symbol inside the button.
             *
             * @sample highcharts/navigation/buttonoptions-height/
             *         Bigger buttons
             *
             * @since 2.0
             */
            symbolY: 10.5,

            /**
             * Alignment for the buttons.
             *
             * @sample highcharts/navigation/buttonoptions-align/
             *         Center aligned
             *
             * @type  {Highcharts.AlignValue}
             * @since 2.0
             */
            align: 'right',

            /**
             * The pixel spacing between buttons.
             *
             * @since 2.0
             */
            buttonSpacing: 3,

            /**
             * Pixel height of the buttons.
             *
             * @sample highcharts/navigation/buttonoptions-height/
             *         Bigger buttons
             *
             * @since 2.0
             */
            height: 22,

            /**
             * A text string to add to the individual button.
             *
             * @sample highcharts/exporting/buttons-text/
             *         Full text button
             * @sample highcharts/exporting/buttons-text-symbol/
             *         Combined symbol and text
             *
             * @type      {string}
             * @default   null
             * @since     3.0
             * @apioption navigation.buttonOptions.text
             */

            /**
             * The vertical offset of the button's position relative to its
             * `verticalAlign`.
             *
             * @sample highcharts/navigation/buttonoptions-verticalalign/
             *         Buttons at lower right
             *
             * @type      {number}
             * @default   0
             * @since     2.0
             * @apioption navigation.buttonOptions.y
             */

            /**
             * The vertical alignment of the buttons. Can be one of `"top"`,
             * `"middle"` or `"bottom"`.
             *
             * @sample highcharts/navigation/buttonoptions-verticalalign/
             *         Buttons at lower right
             *
             * @type  {Highcharts.VerticalAlignValue}
             * @since 2.0
             */
            verticalAlign: 'top',

            /**
             * The pixel width of the button.
             *
             * @sample highcharts/navigation/buttonoptions-height/
             *         Bigger buttons
             *
             * @since 2.0
             */
            width: 24
          }
        }); // Presentational attributes

        merge(true, defaultOptions.navigation
        /**
         * A collection of options for buttons and menus appearing in the exporting
         * module.
         *
         * @optionparent navigation
         */
        , {
          /**
           * CSS styles for the popup menu appearing by default when the export
           * icon is clicked. This menu is rendered in HTML.
           *
           * @see In styled mode, the menu is styled with the `.highcharts-menu`
           *      class.
           *
           * @sample highcharts/navigation/menustyle/
           *         Light gray menu background
           *
           * @type    {Highcharts.CSSObject}
           * @default {"border": "1px solid #999999", "background": "#ffffff", "padding": "5px 0"}
           * @since   2.0
           *
           * @private
           */
          menuStyle: {
            /** @ignore-option */
            border: '1px solid #999999',

            /** @ignore-option */
            background: '#ffffff',

            /** @ignore-option */
            padding: '5px 0'
          },

          /**
           * CSS styles for the individual items within the popup menu appearing
           * by default when the export icon is clicked. The menu items are
           * rendered in HTML. Font size defaults to `11px` on desktop and `14px`
           * on touch devices.
           *
           * @see In styled mode, the menu items are styled with the
           *      `.highcharts-menu-item` class.
           *
           * @sample {highcharts} highcharts/navigation/menuitemstyle/
           *         Add a grey stripe to the left
           *
           * @type    {Highcharts.CSSObject}
           * @default {"padding": "0.5em 1em", "color": "#333333", "background": "none", "fontSize": "11px/14px", "transition": "background 250ms, color 250ms"}
           * @since   2.0
           *
           * @private
           */
          menuItemStyle: {
            /** @ignore-option */
            padding: '0.5em 1em',

            /** @ignore-option */
            color: '#333333',

            /** @ignore-option */
            background: 'none',

            /** @ignore-option */
            fontSize: isTouchDevice ? '14px' : '11px',

            /** @ignore-option */
            transition: 'background 250ms, color 250ms'
          },

          /**
           * CSS styles for the hover state of the individual items within the
           * popup menu appearing by default when the export icon is clicked. The
           * menu items are rendered in HTML.
           *
           * @see In styled mode, the menu items are styled with the
           *      `.highcharts-menu-item` class.
           *
           * @sample highcharts/navigation/menuitemhoverstyle/
           *         Bold text on hover
           *
           * @type    {Highcharts.CSSObject}
           * @default {"background": "#335cad", "color": "#ffffff"}
           * @since   2.0
           *
           * @private
           */
          menuItemHoverStyle: {
            /** @ignore-option */
            background: '#335cad',

            /** @ignore-option */
            color: '#ffffff'
          },

          /**
           * A collection of options for buttons appearing in the exporting
           * module.
           *
           * In styled mode, the buttons are styled with the
           * `.highcharts-contextbutton` and `.highcharts-button-symbol` classes.
           *
           * @requires modules/exporting
           *
           * @private
           */
          buttonOptions: {
            /**
             * Fill color for the symbol within the button.
             *
             * @sample highcharts/navigation/buttonoptions-symbolfill/
             *         Blue symbol stroke for one of the buttons
             *
             * @type  {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @since 2.0
             */
            symbolFill: '#666666',

            /**
             * The color of the symbol's stroke or line.
             *
             * @sample highcharts/navigation/buttonoptions-symbolstroke/
             *         Blue symbol stroke
             *
             * @type  {Highcharts.ColorString}
             * @since 2.0
             */
            symbolStroke: '#666666',

            /**
             * The pixel stroke width of the symbol on the button.
             *
             * @sample highcharts/navigation/buttonoptions-height/
             *         Bigger buttons
             *
             * @since 2.0
             */
            symbolStrokeWidth: 3,

            /**
             * A configuration object for the button theme. The object accepts
             * SVG properties like `stroke-width`, `stroke` and `fill`.
             * Tri-state button styles are supported by the `states.hover` and
             * `states.select` objects.
             *
             * @sample highcharts/navigation/buttonoptions-theme/
             *         Theming the buttons
             *
             * @requires modules/exporting
             *
             * @since 3.0
             */
            theme: {
              /**
               * The default fill exists only to capture hover events.
               *
               * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
               * @default   #ffffff
               * @apioption navigation.buttonOptions.theme.fill
               */

              /**
               * Default stroke for the buttons.
               * @type      {Highcharts.ColorString}
               * @default   none
               * @apioption navigation.buttonOptions.theme.stroke
               */

              /**
               * Padding for the button.
               */
              padding: 5
            }
          }
        }); // Add the export related options

        /**
         * Options for the exporting module. For an overview on the matter, see
         * [the docs](https://www.highcharts.com/docs/export-module/export-module-overview).
         *
         * @requires     modules/exporting
         * @optionparent exporting
         */

        defaultOptions.exporting = {
          /**
           * Experimental setting to allow HTML inside the chart (added through
           * the `useHTML` options), directly in the exported image. This allows
           * you to preserve complicated HTML structures like tables or bi-directional
           * text in exported charts.
           *
           * Disclaimer: The HTML is rendered in a `foreignObject` tag in the
           * generated SVG. The official export server is based on PhantomJS,
           * which supports this, but other SVG clients, like Batik, does not
           * support it. This also applies to downloaded SVG that you want to
           * open in a desktop client.
           *
           * @type      {boolean}
           * @default   false
           * @since     4.1.8
           * @apioption exporting.allowHTML
           */

          /**
           * Additional chart options to be merged into the chart before exporting to
           * an image format. This does not apply to printing the chart via the export
           * menu.
           *
           * For example, a common use case is to add data labels to improve
           * readability of the exported chart, or to add a printer-friendly color
           * scheme to exported PDFs.
           *
           * @sample {highcharts} highcharts/exporting/chartoptions-data-labels/
           *         Added data labels
           * @sample {highstock} highcharts/exporting/chartoptions-data-labels/
           *         Added data labels
           *
           * @type      {Highcharts.Options}
           * @apioption exporting.chartOptions
           */

          /**
           * Whether to enable the exporting module. Disabling the module will
           * hide the context button, but API methods will still be available.
           *
           * @sample {highcharts} highcharts/exporting/enabled-false/
           *         Exporting module is loaded but disabled
           * @sample {highstock} highcharts/exporting/enabled-false/
           *         Exporting module is loaded but disabled
           *
           * @type      {boolean}
           * @default   true
           * @since     2.0
           * @apioption exporting.enabled
           */

          /**
           * Function to call if the offline-exporting module fails to export
           * a chart on the client side, and [fallbackToExportServer](
           * #exporting.fallbackToExportServer) is disabled. If left undefined, an
           * exception is thrown instead. Receives two parameters, the exporting
           * options, and the error from the module.
           *
           * @see [fallbackToExportServer](#exporting.fallbackToExportServer)
           *
           * @type      {Highcharts.ExportingErrorCallbackFunction}
           * @since     5.0.0
           * @requires  modules/exporting
           * @requires  modules/offline-exporting
           * @apioption exporting.error
           */

          /**
           * Whether or not to fall back to the export server if the offline-exporting
           * module is unable to export the chart on the client side. This happens for
           * certain browsers, and certain features (e.g.
           * [allowHTML](#exporting.allowHTML)), depending on the image type exporting
           * to. For very complex charts, it is possible that export can fail in
           * browsers that don't support Blob objects, due to data URL length limits.
           * It is recommended to define the [exporting.error](#exporting.error)
           * handler if disabling fallback, in order to notify users in case export
           * fails.
           *
           * @type      {boolean}
           * @default   true
           * @since     4.1.8
           * @requires  modules/exporting
           * @requires  modules/offline-exporting
           * @apioption exporting.fallbackToExportServer
           */

          /**
           * The filename, without extension, to use for the exported chart.
           *
           * @sample {highcharts} highcharts/exporting/filename/
           *         Custom file name
           * @sample {highstock} highcharts/exporting/filename/
           *         Custom file name
           *
           * @type      {string}
           * @default   chart
           * @since     2.0
           * @apioption exporting.filename
           */

          /**
           * An object containing additional key value data for the POST form that
           * sends the SVG to the export server. For example, a `target` can be set to
           * make sure the generated image is received in another frame, or a custom
           * `enctype` or `encoding` can be set.
           *
           * @type      {Highcharts.HTMLAttributes}
           * @since     3.0.8
           * @apioption exporting.formAttributes
           */

          /**
           * Path where Highcharts will look for export module dependencies to
           * load on demand if they don't already exist on `window`. Should currently
           * point to location of [CanVG](https://github.com/canvg/canvg) library,
           * [RGBColor.js](https://github.com/canvg/canvg),
           * [jsPDF](https://github.com/yWorks/jsPDF) and
           * [svg2pdf.js](https://github.com/yWorks/svg2pdf.js), required for client
           * side export in certain browsers.
           *
           * @type      {string}
           * @default   https://code.highcharts.com/{version}/lib
           * @since     5.0.0
           * @apioption exporting.libURL
           */

          /**
           * Analogous to [sourceWidth](#exporting.sourceWidth).
           *
           * @type      {number}
           * @since     3.0
           * @apioption exporting.sourceHeight
           */

          /**
           * The width of the original chart when exported, unless an explicit
           * [chart.width](#chart.width) is set, or a pixel width is set on the
           * container. The width exported raster image is then multiplied by
           * [scale](#exporting.scale).
           *
           * @sample {highcharts} highcharts/exporting/sourcewidth/
           *         Source size demo
           * @sample {highstock} highcharts/exporting/sourcewidth/
           *         Source size demo
           * @sample {highmaps} maps/exporting/sourcewidth/
           *         Source size demo
           *
           * @type      {number}
           * @since     3.0
           * @apioption exporting.sourceWidth
           */

          /**
           * The pixel width of charts exported to PNG or JPG. As of Highcharts
           * 3.0, the default pixel width is a function of the [chart.width](
           * #chart.width) or [exporting.sourceWidth](#exporting.sourceWidth) and the
           * [exporting.scale](#exporting.scale).
           *
           * @sample {highcharts} highcharts/exporting/width/
           *         Export to 200px wide images
           * @sample {highstock} highcharts/exporting/width/
           *         Export to 200px wide images
           *
           * @type      {number}
           * @since     2.0
           * @apioption exporting.width
           */

          /**
           * Default MIME type for exporting if `chart.exportChart()` is called
           * without specifying a `type` option. Possible values are `image/png`,
           *  `image/jpeg`, `application/pdf` and `image/svg+xml`.
           *
           * @type  {Highcharts.ExportingMimeTypeValue}
           * @since 2.0
           */
          type: 'image/png',

          /**
           * The URL for the server module converting the SVG string to an image
           * format. By default this points to Highchart's free web service.
           *
           * @since 2.0
           */
          url: 'https://export.highcharts.com/',

          /**
           * When printing the chart from the menu item in the burger menu, if
           * the on-screen chart exceeds this width, it is resized. After printing
           * or cancelled, it is restored. The default width makes the chart
           * fit into typical paper format. Note that this does not affect the
           * chart when printing the web page as a whole.
           *
           * @since 4.2.5
           */
          printMaxWidth: 780,

          /**
           * Defines the scale or zoom factor for the exported image compared
           * to the on-screen display. While for instance a 600px wide chart
           * may look good on a website, it will look bad in print. The default
           * scale of 2 makes this chart export to a 1200px PNG or JPG.
           *
           * @see [chart.width](#chart.width)
           * @see [exporting.sourceWidth](#exporting.sourceWidth)
           *
           * @sample {highcharts} highcharts/exporting/scale/
           *         Scale demonstrated
           * @sample {highstock} highcharts/exporting/scale/
           *         Scale demonstrated
           * @sample {highmaps} maps/exporting/scale/
           *         Scale demonstrated
           *
           * @since 3.0
           */
          scale: 2,

          /**
           * Options for the export related buttons, print and export. In addition
           * to the default buttons listed here, custom buttons can be added.
           * See [navigation.buttonOptions](#navigation.buttonOptions) for general
           * options.
           *
           * @type     {Highcharts.Dictionary<*>}
           * @requires modules/exporting
           */
          buttons: {
            /**
             * Options for the export button.
             *
             * In styled mode, export button styles can be applied with the
             * `.highcharts-contextbutton` class.
             *
             * @declare  Highcharts.ExportingButtonsOptionsObject
             * @extends  navigation.buttonOptions
             * @requires modules/exporting
             */
            contextButton: {
              /**
               * A click handler callback to use on the button directly instead of
               * the popup menu.
               *
               * @sample highcharts/exporting/buttons-contextbutton-onclick/
               *         Skip the menu and export the chart directly
               *
               * @type      {Function}
               * @since     2.0
               * @apioption exporting.buttons.contextButton.onclick
               */

              /**
               * See [navigation.buttonOptions.symbolFill](
               * #navigation.buttonOptions.symbolFill).
               *
               * @type      {Highcharts.ColorString}
               * @default   #666666
               * @since     2.0
               * @apioption exporting.buttons.contextButton.symbolFill
               */

              /**
               * The horizontal position of the button relative to the `align`
               * option.
               *
               * @type      {number}
               * @default   -10
               * @since     2.0
               * @apioption exporting.buttons.contextButton.x
               */

              /**
               * The class name of the context button.
               */
              className: 'highcharts-contextbutton',

              /**
               * The class name of the menu appearing from the button.
               */
              menuClassName: 'highcharts-contextmenu',

              /**
               * The symbol for the button. Points to a definition function in
               * the `Highcharts.Renderer.symbols` collection. The default
               * `exportIcon` function is part of the exporting module. Possible
               * values are "circle", "square", "diamond", "triangle",
               * "triangle-down", "menu", "menuball" or custom shape.
               *
               * @sample highcharts/exporting/buttons-contextbutton-symbol/
               *         Use a circle for symbol
               * @sample highcharts/exporting/buttons-contextbutton-symbol-custom/
               *         Custom shape as symbol
               *
               * @type  {Highcharts.SymbolKeyValue|"exportIcon"|"menu"|"menuball"|string}
               * @since 2.0
               */
              symbol: 'menu',

              /**
               * The key to a [lang](#lang) option setting that is used for the
               * button's title tooltip. When the key is `contextButtonTitle`, it
               * refers to [lang.contextButtonTitle](#lang.contextButtonTitle)
               * that defaults to "Chart context menu".
               *
               * @since 6.1.4
               */
              titleKey: 'contextButtonTitle',

              /**
               * This option is deprecated, use
               * [titleKey](#exporting.buttons.contextButton.titleKey) instead.
               *
               * @deprecated
               * @type      {string}
               * @apioption exporting.buttons.contextButton._titleKey
               */

              /**
               * A collection of strings pointing to config options for the menu
               * items. The config options are defined in the
               * `menuItemDefinitions` option.
               *
               * By default, there is the "View in full screen" and "Print" menu
               * items, plus one menu item for each of the available export types.
               *
               * @sample {highcharts} highcharts/exporting/menuitemdefinitions/
               *         Menu item definitions
               * @sample {highstock} highcharts/exporting/menuitemdefinitions/
               *         Menu item definitions
               * @sample {highmaps} highcharts/exporting/menuitemdefinitions/
               *         Menu item definitions
               *
               * @type    {Array<string>}
               * @default ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
               * @since   2.0
               */
              menuItems: ['viewFullscreen', 'printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
            }
          },

          /**
           * An object consisting of definitions for the menu items in the context
           * menu. Each key value pair has a `key` that is referenced in the
           * [menuItems](#exporting.buttons.contextButton.menuItems) setting,
           * and a `value`, which is an object with the following properties:
           *
           * - **onclick:** The click handler for the menu item
           *
           * - **text:** The text for the menu item
           *
           * - **textKey:** If internationalization is required, the key to a language
           *   string
           *
           * @sample {highcharts} highcharts/exporting/menuitemdefinitions/
           *         Menu item definitions
           * @sample {highstock} highcharts/exporting/menuitemdefinitions/
           *         Menu item definitions
           * @sample {highmaps} highcharts/exporting/menuitemdefinitions/
           *         Menu item definitions
           *
           * @type    {Highcharts.Dictionary<Highcharts.ExportingMenuObject>}
           * @default {"viewFullscreen": {}, "printChart": {}, "separator": {}, "downloadPNG": {}, "downloadJPEG": {}, "downloadPDF": {}, "downloadSVG": {}}
           * @since   5.0.13
           */
          menuItemDefinitions: {
            /**
             * @ignore
             */
            viewFullscreen: {
              textKey: 'viewFullscreen',
              onclick: function onclick() {
                this.fullscreen = new H.FullScreen(this.container);
              }
            },

            /**
             * @ignore
             */
            printChart: {
              textKey: 'printChart',
              onclick: function onclick() {
                this.print();
              }
            },

            /**
             * @ignore
             */
            separator: {
              separator: true
            },

            /**
             * @ignore
             */
            downloadPNG: {
              textKey: 'downloadPNG',
              onclick: function onclick() {
                this.exportChart();
              }
            },

            /**
             * @ignore
             */
            downloadJPEG: {
              textKey: 'downloadJPEG',
              onclick: function onclick() {
                this.exportChart({
                  type: 'image/jpeg'
                });
              }
            },

            /**
             * @ignore
             */
            downloadPDF: {
              textKey: 'downloadPDF',
              onclick: function onclick() {
                this.exportChart({
                  type: 'application/pdf'
                });
              }
            },

            /**
             * @ignore
             */
            downloadSVG: {
              textKey: 'downloadSVG',
              onclick: function onclick() {
                this.exportChart({
                  type: 'image/svg+xml'
                });
              }
            }
          }
        };
        /**
         * Fires after a chart is printed through the context menu item or the
         * `Chart.print` method.
         *
         * @sample highcharts/chart/events-beforeprint-afterprint/
         *         Rescale the chart to print
         *
         * @type      {Highcharts.ExportingAfterPrintCallbackFunction}
         * @since     4.1.0
         * @context   Highcharts.Chart
         * @requires  modules/exporting
         * @apioption chart.events.afterPrint
         */

        /**
         * Fires before a chart is printed through the context menu item or
         * the `Chart.print` method.
         *
         * @sample highcharts/chart/events-beforeprint-afterprint/
         *         Rescale the chart to print
         *
         * @type      {Highcharts.ExportingBeforePrintCallbackFunction}
         * @since     4.1.0
         * @context   Highcharts.Chart
         * @requires  modules/exporting
         * @apioption chart.events.beforePrint
         */

        /**
         * The post utility
         *
         * @private
         * @function Highcharts.post
         * @param {string} url
         *        Post URL
         * @param {object} data
         *        Post data
         * @param {Highcharts.Dictionary<string>} [formAttributes]
         *        Additional attributes for the post request
         * @return {void}
         */

        H.post = function (url, data, formAttributes) {
          // create the form
          var form = createElement('form', merge({
            method: 'post',
            action: url,
            enctype: 'multipart/form-data'
          }, formAttributes), {
            display: 'none'
          }, doc.body); // add the data

          objectEach(data, function (val, name) {
            createElement('input', {
              type: 'hidden',
              name: name,
              value: val
            }, null, form);
          }); // submit

          form.submit(); // clean up

          discardElement(form);
        };

        if (H.isSafari) {
          H.win.matchMedia('print').addListener(function (mqlEvent) {
            if (!H.printingChart) {
              return void 0;
            }

            if (mqlEvent.matches) {
              H.printingChart.beforePrint();
            } else {
              H.printingChart.afterPrint();
            }
          });
        }

        extend(Chart.prototype,
        /** @lends Highcharts.Chart.prototype */
        {
          /* eslint-disable no-invalid-this, valid-jsdoc */

          /**
           * Exporting module only. A collection of fixes on the produced SVG to
           * account for expando properties, browser bugs, VML problems and other.
           * Returns a cleaned SVG.
           *
           * @private
           * @function Highcharts.Chart#sanitizeSVG
           * @param {string} svg
           *        SVG code to sanitize
           * @param {Highcharts.Options} options
           *        Chart options to apply
           * @return {string}
           *         Sanitized SVG code
           * @requires modules/exporting
           */
          sanitizeSVG: function sanitizeSVG(svg, options) {
            var split = svg.indexOf('</svg>') + 6,
                html = svg.substr(split); // Remove any HTML added to the container after the SVG (#894, #9087)

            svg = svg.substr(0, split); // Move HTML into a foreignObject

            if (options && options.exporting && options.exporting.allowHTML) {
              if (html) {
                html = '<foreignObject x="0" y="0" ' + 'width="' + options.chart.width + '" ' + 'height="' + options.chart.height + '">' + '<body xmlns="http://www.w3.org/1999/xhtml">' + html + '</body>' + '</foreignObject>';
                svg = svg.replace('</svg>', html + '</svg>');
              }
            }

            svg = svg.replace(/zIndex="[^"]+"/g, '').replace(/symbolName="[^"]+"/g, '').replace(/jQuery[0-9]+="[^"]+"/g, '').replace(/url\(("|&quot;)(.*?)("|&quot;)\;?\)/g, 'url($2)').replace(/url\([^#]+#/g, 'url(#').replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+\:)href=/g, ' xlink:href=') // #3567
            .replace(/\n/, ' ') // Batik doesn't support rgba fills and strokes (#3095)
            .replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, // eslint-disable-line max-len
            '$1="rgb($2)" $1-opacity="$3"') // Replace HTML entities, issue #347
            .replace(/&nbsp;/g, "\xA0") // no-break space
            .replace(/&shy;/g, "\xAD"); // soft hyphen
            // Further sanitize for oldIE

            if (this.ieSanitizeSVG) {
              svg = this.ieSanitizeSVG(svg);
            }

            return svg;
          },

          /**
           * Return the unfiltered innerHTML of the chart container. Used as hook for
           * plugins. In styled mode, it also takes care of inlining CSS style rules.
           *
           * @see Chart#getSVG
           *
           * @function Highcharts.Chart#getChartHTML
           *
           * @returns {string}
           *          The unfiltered SVG of the chart.
           *
           * @requires modules/exporting
           */
          getChartHTML: function getChartHTML() {
            if (this.styledMode) {
              this.inlineStyles();
            }

            return this.container.innerHTML;
          },

          /**
           * Return an SVG representation of the chart.
           *
           * @sample highcharts/members/chart-getsvg/
           *         View the SVG from a button
           *
           * @function Highcharts.Chart#getSVG
           *
           * @param {Highcharts.Options} [chartOptions]
           *        Additional chart options for the generated SVG representation. For
           *        collections like `xAxis`, `yAxis` or `series`, the additional
           *        options is either merged in to the original item of the same
           *        `id`, or to the first item if a common id is not found.
           *
           * @return {string}
           *         The SVG representation of the rendered chart.
           *
           * @fires Highcharts.Chart#event:getSVG
           *
           * @requires modules/exporting
           */
          getSVG: function getSVG(chartOptions) {
            var chart = this,
                chartCopy,
                sandbox,
                svg,
                seriesOptions,
                sourceWidth,
                sourceHeight,
                cssWidth,
                cssHeight,
                // Copy the options and add extra options
            options = merge(chart.options, chartOptions); // Use userOptions to make the options chain in series right (#3881)

            options.plotOptions = merge(chart.userOptions.plotOptions, chartOptions && chartOptions.plotOptions); // ... and likewise with time, avoid that undefined time properties are
            // merged over legacy global time options

            options.time = merge(chart.userOptions.time, chartOptions && chartOptions.time); // create a sandbox where a new chart will be generated

            sandbox = createElement('div', null, {
              position: 'absolute',
              top: '-9999em',
              width: chart.chartWidth + 'px',
              height: chart.chartHeight + 'px'
            }, doc.body); // get the source size

            cssWidth = chart.renderTo.style.width;
            cssHeight = chart.renderTo.style.height;
            sourceWidth = options.exporting.sourceWidth || options.chart.width || /px$/.test(cssWidth) && parseInt(cssWidth, 10) || (options.isGantt ? 800 : 600);
            sourceHeight = options.exporting.sourceHeight || options.chart.height || /px$/.test(cssHeight) && parseInt(cssHeight, 10) || 400; // override some options

            extend(options.chart, {
              animation: false,
              renderTo: sandbox,
              forExport: true,
              renderer: 'SVGRenderer',
              width: sourceWidth,
              height: sourceHeight
            });
            options.exporting.enabled = false; // hide buttons in print

            delete options.data; // #3004
            // prepare for replicating the chart

            options.series = [];
            chart.series.forEach(function (serie) {
              seriesOptions = merge(serie.userOptions, {
                animation: false,
                enableMouseTracking: false,
                showCheckbox: false,
                visible: serie.visible
              }); // Used for the navigator series that has its own option set

              if (!seriesOptions.isInternal) {
                options.series.push(seriesOptions);
              }
            }); // Assign an internal key to ensure a one-to-one mapping (#5924)

            chart.axes.forEach(function (axis) {
              if (!axis.userOptions.internalKey) {
                // #6444
                axis.userOptions.internalKey = H.uniqueKey();
              }
            }); // generate the chart copy

            chartCopy = new H.Chart(options, chart.callback); // Axis options and series options  (#2022, #3900, #5982)

            if (chartOptions) {
              ['xAxis', 'yAxis', 'series'].forEach(function (coll) {
                var collOptions = {};

                if (chartOptions[coll]) {
                  collOptions[coll] = chartOptions[coll];
                  chartCopy.update(collOptions);
                }
              });
            } // Reflect axis extremes in the export (#5924)


            chart.axes.forEach(function (axis) {
              var axisCopy = H.find(chartCopy.axes, function (copy) {
                return copy.options.internalKey === axis.userOptions.internalKey;
              }),
                  extremes = axis.getExtremes(),
                  userMin = extremes.userMin,
                  userMax = extremes.userMax;

              if (axisCopy && (typeof userMin !== 'undefined' && userMin !== axisCopy.min || typeof userMax !== 'undefined' && userMax !== axisCopy.max)) {
                axisCopy.setExtremes(userMin, userMax, true, false);
              }
            }); // Get the SVG from the container's innerHTML

            svg = chartCopy.getChartHTML();
            fireEvent(this, 'getSVG', {
              chartCopy: chartCopy
            });
            svg = chart.sanitizeSVG(svg, options); // free up memory

            options = null;
            chartCopy.destroy();
            discardElement(sandbox);
            return svg;
          },

          /**
           * @private
           * @function Highcharts.Chart#getSVGForExport
           * @param {Highcharts.ExportingOptions} options
           * @param {Highcharts.Options} chartOptions
           * @return {string}
           * @requires modules/exporting
           */
          getSVGForExport: function getSVGForExport(options, chartOptions) {
            var chartExportingOptions = this.options.exporting;
            return this.getSVG(merge({
              chart: {
                borderRadius: 0
              }
            }, chartExportingOptions.chartOptions, chartOptions, {
              exporting: {
                sourceWidth: options && options.sourceWidth || chartExportingOptions.sourceWidth,
                sourceHeight: options && options.sourceHeight || chartExportingOptions.sourceHeight
              }
            }));
          },

          /**
           * Get the default file name used for exported charts. By default it creates
           * a file name based on the chart title.
           *
           * @function Highcharts.Chart#getFilename
           *
           * @return {string} A file name without extension.
           *
           * @requires modules/exporting
           */
          getFilename: function getFilename() {
            var s = this.userOptions.title && this.userOptions.title.text,
                filename = this.options.exporting.filename;

            if (filename) {
              return filename.replace(/\//g, '-');
            }

            if (typeof s === 'string') {
              filename = s.toLowerCase().replace(/<\/?[^>]+(>|$)/g, '') // strip HTML tags
              .replace(/[\s_]+/g, '-').replace(/[^a-z0-9\-]/g, '') // preserve only latin
              .replace(/^[\-]+/g, '') // dashes in the start
              .replace(/[\-]+/g, '-') // dashes in a row
              .substr(0, 24).replace(/[\-]+$/g, ''); // dashes in the end;
            }

            if (!filename || filename.length < 5) {
              filename = 'chart';
            }

            return filename;
          },

          /**
           * Exporting module required. Submit an SVG version of the chart to a server
           * along with some parameters for conversion.
           *
           * @sample highcharts/members/chart-exportchart/
           *         Export with no options
           * @sample highcharts/members/chart-exportchart-filename/
           *         PDF type and custom filename
           * @sample highcharts/members/chart-exportchart-custom-background/
           *         Different chart background in export
           * @sample stock/members/chart-exportchart/
           *         Export with Highstock
           *
           * @function Highcharts.Chart#exportChart
           *
           * @param {Highcharts.ExportingOptions} exportingOptions
           *        Exporting options in addition to those defined in
           *        [exporting](https://api.highcharts.com/highcharts/exporting).
           *
           * @param {Highcharts.Options} chartOptions
           *        Additional chart options for the exported chart. For example a
           *        different background color can be added here, or `dataLabels` for
           *        export only.
           *
           * @return {void}
           *
           * @requires modules/exporting
           */
          exportChart: function exportChart(exportingOptions, chartOptions) {
            var svg = this.getSVGForExport(exportingOptions, chartOptions); // merge the options

            exportingOptions = merge(this.options.exporting, exportingOptions); // do the post

            H.post(exportingOptions.url, {
              filename: exportingOptions.filename ? exportingOptions.filename.replace(/\//g, '-') : this.getFilename(),
              type: exportingOptions.type,
              // IE8 fails to post undefined correctly, so use 0
              width: exportingOptions.width || 0,
              scale: exportingOptions.scale,
              svg: svg
            }, exportingOptions.formAttributes);
          },

          /**
          * Move the chart container(s) to another div.
          *
          * @function Highcharts#moveContainers
          *
          * @private
          *
          * @param {Highcharts.HTMLDOMElement} moveTo
          *        Move target
          * @return {void}
          */
          moveContainers: function moveContainers(moveTo) {
            var chart = this;
            (chart.fixedDiv ? // When scrollablePlotArea is active (#9533)
            [chart.fixedDiv, chart.scrollingContainer] : [chart.container]).forEach(function (div) {
              moveTo.appendChild(div);
            });
          },

          /**
          * Prepare chart and document before printing a chart.
          *
          * @function Highcharts#beforePrint
          *
          * @private
          *
          * @return {void}
          *
          * @fires Highcharts.Chart#event:beforePrint
          */
          beforePrint: function beforePrint() {
            var chart = this,
                body = doc.body,
                printMaxWidth = chart.options.exporting.printMaxWidth,
                printReverseInfo = {
              childNodes: body.childNodes,
              origDisplay: [],
              resetParams: void 0
            };
            var handleMaxWidth;
            chart.isPrinting = true;
            chart.pointer.reset(null, 0);
            fireEvent(chart, 'beforePrint'); // Handle printMaxWidth

            handleMaxWidth = printMaxWidth && chart.chartWidth > printMaxWidth;

            if (handleMaxWidth) {
              printReverseInfo.resetParams = [chart.options.chart.width, void 0, false];
              chart.setSize(printMaxWidth, void 0, false);
            } // hide all body content


            [].forEach.call(printReverseInfo.childNodes, function (node, i) {
              if (node.nodeType === 1) {
                printReverseInfo.origDisplay[i] = node.style.display;
                node.style.display = 'none';
              }
            }); // pull out the chart

            chart.moveContainers(body); // Storage details for undo action after printing

            chart.printReverseInfo = printReverseInfo;
          },

          /**
          * Clena up after printing a chart.
          *
          * @function Highcharts#afterPrint
          *
          * @private
          *
          * @param {Highcharts.Chart} chart
          *        Chart that was (or suppose to be) printed
          * @return {void}
          *
          * @fires Highcharts.Chart#event:afterPrint
          */
          afterPrint: function afterPrint() {
            var chart = this;

            if (!chart.printReverseInfo) {
              return void 0;
            }

            var childNodes = chart.printReverseInfo.childNodes,
                origDisplay = chart.printReverseInfo.origDisplay,
                resetParams = chart.printReverseInfo.resetParams; // put the chart back in

            chart.moveContainers(chart.renderTo); // restore all body content

            [].forEach.call(childNodes, function (node, i) {
              if (node.nodeType === 1) {
                node.style.display = origDisplay[i] || '';
              }
            });
            chart.isPrinting = false; // Reset printMaxWidth

            if (resetParams) {
              chart.setSize.apply(chart, resetParams);
            }

            delete chart.printReverseInfo;
            delete H.printingChart;
            fireEvent(chart, 'afterPrint');
          },

          /**
           * Exporting module required. Clears away other elements in the page and
           * prints the chart as it is displayed. By default, when the exporting
           * module is enabled, a context button with a drop down menu in the upper
           * right corner accesses this function.
           *
           * @sample highcharts/members/chart-print/
           *         Print from a HTML button
           *
           * @function Highcharts.Chart#print
           *
           * @return {void}
           *
           * @fires Highcharts.Chart#event:beforePrint
           * @fires Highcharts.Chart#event:afterPrint
           *
           * @requires modules/exporting
           */
          print: function print() {
            var chart = this;

            if (chart.isPrinting) {
              // block the button while in printing mode
              return;
            }

            H.printingChart = chart;

            if (!H.isSafari) {
              chart.beforePrint();
            } // Give the browser time to draw WebGL content, an issue that randomly
            // appears (at least) in Chrome ~67 on the Mac (#8708).


            setTimeout(function () {
              win.focus(); // #1510

              win.print(); // allow the browser to prepare before reverting

              if (!H.isSafari) {
                setTimeout(function () {
                  chart.afterPrint();
                }, 1000);
              }
            }, 1);
          },

          /**
           * Display a popup menu for choosing the export type.
           *
           * @private
           * @function Highcharts.Chart#contextMenu
           * @param {string} className
           *        An identifier for the menu.
           * @param {Array<string|Highcharts.ExportingMenuObject>} items
           *        A collection with text and onclicks for the items.
           * @param {number} x
           *        The x position of the opener button
           * @param {number} y
           *        The y position of the opener button
           * @param {number} width
           *        The width of the opener button
           * @param {number} height
           *        The height of the opener button
           * @return {void}
           * @requires modules/exporting
           */
          contextMenu: function contextMenu(className, items, x, y, width, height, button) {
            var chart = this,
                navOptions = chart.options.navigation,
                chartWidth = chart.chartWidth,
                chartHeight = chart.chartHeight,
                cacheName = 'cache-' + className,
                menu = chart[cacheName],
                menuPadding = Math.max(width, height),
                // for mouse leave detection
            innerMenu,
                menuStyle; // create the menu only the first time

            if (!menu) {
              // create a HTML element above the SVG
              chart.exportContextMenu = chart[cacheName] = menu = createElement('div', {
                className: className
              }, {
                position: 'absolute',
                zIndex: 1000,
                padding: menuPadding + 'px',
                pointerEvents: 'auto'
              }, chart.fixedDiv || chart.container);
              innerMenu = createElement('ul', {
                className: 'highcharts-menu'
              }, {
                listStyle: 'none',
                margin: 0,
                padding: 0
              }, menu); // Presentational CSS

              if (!chart.styledMode) {
                css(innerMenu, extend({
                  MozBoxShadow: '3px 3px 10px #888',
                  WebkitBoxShadow: '3px 3px 10px #888',
                  boxShadow: '3px 3px 10px #888'
                }, navOptions.menuStyle));
              } // hide on mouse out


              menu.hideMenu = function () {
                css(menu, {
                  display: 'none'
                });

                if (button) {
                  button.setState(0);
                }

                chart.openMenu = false;
                css(chart.renderTo, {
                  overflow: 'hidden'
                }); // #10361

                H.clearTimeout(menu.hideTimer);
                fireEvent(chart, 'exportMenuHidden');
              }; // Hide the menu some time after mouse leave (#1357)


              chart.exportEvents.push(addEvent(menu, 'mouseleave', function () {
                menu.hideTimer = win.setTimeout(menu.hideMenu, 500);
              }), addEvent(menu, 'mouseenter', function () {
                H.clearTimeout(menu.hideTimer);
              }), // Hide it on clicking or touching outside the menu (#2258,
              // #2335, #2407)
              addEvent(doc, 'mouseup', function (e) {
                if (!chart.pointer.inClass(e.target, className)) {
                  menu.hideMenu();
                }
              }), addEvent(menu, 'click', function () {
                if (chart.openMenu) {
                  menu.hideMenu();
                }
              })); // create the items

              items.forEach(function (item) {
                if (typeof item === 'string') {
                  item = chart.options.exporting.menuItemDefinitions[item];
                }

                if (isObject(item, true)) {
                  var element;

                  if (item.separator) {
                    element = createElement('hr', null, null, innerMenu);
                  } else {
                    element = createElement('li', {
                      className: 'highcharts-menu-item',
                      onclick: function onclick(e) {
                        if (e) {
                          // IE7
                          e.stopPropagation();
                        }

                        menu.hideMenu();

                        if (item.onclick) {
                          item.onclick.apply(chart, arguments);
                        }
                      },
                      innerHTML: item.text || chart.options.lang[item.textKey]
                    }, null, innerMenu);

                    if (!chart.styledMode) {
                      element.onmouseover = function () {
                        css(this, navOptions.menuItemHoverStyle);
                      };

                      element.onmouseout = function () {
                        css(this, navOptions.menuItemStyle);
                      };

                      css(element, extend({
                        cursor: 'pointer'
                      }, navOptions.menuItemStyle));
                    }
                  } // Keep references to menu divs to be able to destroy them


                  chart.exportDivElements.push(element);
                }
              }); // Keep references to menu and innerMenu div to be able to destroy
              // them

              chart.exportDivElements.push(innerMenu, menu);
              chart.exportMenuWidth = menu.offsetWidth;
              chart.exportMenuHeight = menu.offsetHeight;
            }

            menuStyle = {
              display: 'block'
            }; // if outside right, right align it

            if (x + chart.exportMenuWidth > chartWidth) {
              menuStyle.right = chartWidth - x - width - menuPadding + 'px';
            } else {
              menuStyle.left = x - menuPadding + 'px';
            } // if outside bottom, bottom align it


            if (y + height + chart.exportMenuHeight > chartHeight && button.alignOptions.verticalAlign !== 'top') {
              menuStyle.bottom = chartHeight - y - menuPadding + 'px';
            } else {
              menuStyle.top = y + height - menuPadding + 'px';
            }

            css(menu, menuStyle);
            css(chart.renderTo, {
              overflow: ''
            }); // #10361

            chart.openMenu = true;
            fireEvent(chart, 'exportMenuShown');
          },

          /**
           * Add the export button to the chart, with options.
           *
           * @private
           * @function Highcharts.Chart#addButton
           * @param {Highcharts.NavigationButtonOptions} options
           * @return {void}
           * @requires modules/exporting
           */
          addButton: function addButton(options) {
            var chart = this,
                renderer = chart.renderer,
                btnOptions = merge(chart.options.navigation.buttonOptions, options),
                onclick = btnOptions.onclick,
                menuItems = btnOptions.menuItems,
                symbol,
                button,
                symbolSize = btnOptions.symbolSize || 12;

            if (!chart.btnCount) {
              chart.btnCount = 0;
            } // Keeps references to the button elements


            if (!chart.exportDivElements) {
              chart.exportDivElements = [];
              chart.exportSVGElements = [];
            }

            if (btnOptions.enabled === false) {
              return;
            }

            var attr = btnOptions.theme,
                states = attr.states,
                hover = states && states.hover,
                select = states && states.select,
                callback;

            if (!chart.styledMode) {
              attr.fill = pick(attr.fill, '#ffffff');
              attr.stroke = pick(attr.stroke, 'none');
            }

            delete attr.states;

            if (onclick) {
              callback = function callback(e) {
                if (e) {
                  e.stopPropagation();
                }

                onclick.call(chart, e);
              };
            } else if (menuItems) {
              callback = function callback(e) {
                // consistent with onclick call (#3495)
                if (e) {
                  e.stopPropagation();
                }

                chart.contextMenu(button.menuClassName, menuItems, button.translateX, button.translateY, button.width, button.height, button);
                button.setState(2);
              };
            }

            if (btnOptions.text && btnOptions.symbol) {
              attr.paddingLeft = pick(attr.paddingLeft, 25);
            } else if (!btnOptions.text) {
              extend(attr, {
                width: btnOptions.width,
                height: btnOptions.height,
                padding: 0
              });
            }

            if (!chart.styledMode) {
              attr['stroke-linecap'] = 'round';
              attr.fill = pick(attr.fill, '#ffffff');
              attr.stroke = pick(attr.stroke, 'none');
            }

            button = renderer.button(btnOptions.text, 0, 0, callback, attr, hover, select).addClass(options.className).attr({
              title: pick(chart.options.lang[btnOptions._titleKey || btnOptions.titleKey], '')
            });
            button.menuClassName = options.menuClassName || 'highcharts-menu-' + chart.btnCount++;

            if (btnOptions.symbol) {
              symbol = renderer.symbol(btnOptions.symbol, btnOptions.symbolX - symbolSize / 2, btnOptions.symbolY - symbolSize / 2, symbolSize, symbolSize // If symbol is an image, scale it (#7957)
              , {
                width: symbolSize,
                height: symbolSize
              }).addClass('highcharts-button-symbol').attr({
                zIndex: 1
              }).add(button);

              if (!chart.styledMode) {
                symbol.attr({
                  stroke: btnOptions.symbolStroke,
                  fill: btnOptions.symbolFill,
                  'stroke-width': btnOptions.symbolStrokeWidth || 1
                });
              }
            }

            button.add(chart.exportingGroup).align(extend(btnOptions, {
              width: button.width,
              x: pick(btnOptions.x, chart.buttonOffset) // #1654

            }), true, 'spacingBox');
            chart.buttonOffset += (button.width + btnOptions.buttonSpacing) * (btnOptions.align === 'right' ? -1 : 1);
            chart.exportSVGElements.push(button, symbol);
          },

          /**
           * Destroy the export buttons.
           * @private
           * @function Highcharts.Chart#destroyExport
           * @param {global.Event} [e]
           * @return {void}
           * @requires modules/exporting
           */
          destroyExport: function destroyExport(e) {
            var chart = e ? e.target : this,
                exportSVGElements = chart.exportSVGElements,
                exportDivElements = chart.exportDivElements,
                exportEvents = chart.exportEvents,
                cacheName; // Destroy the extra buttons added

            if (exportSVGElements) {
              exportSVGElements.forEach(function (elem, i) {
                // Destroy and null the svg elements
                if (elem) {
                  // #1822
                  elem.onclick = elem.ontouchstart = null;
                  cacheName = 'cache-' + elem.menuClassName;

                  if (chart[cacheName]) {
                    delete chart[cacheName];
                  }

                  chart.exportSVGElements[i] = elem.destroy();
                }
              });
              exportSVGElements.length = 0;
            } // Destroy the exporting group


            if (chart.exportingGroup) {
              chart.exportingGroup.destroy();
              delete chart.exportingGroup;
            } // Destroy the divs for the menu


            if (exportDivElements) {
              exportDivElements.forEach(function (elem, i) {
                // Remove the event handler
                H.clearTimeout(elem.hideTimer); // #5427

                removeEvent(elem, 'mouseleave'); // Remove inline events

                chart.exportDivElements[i] = elem.onmouseout = elem.onmouseover = elem.ontouchstart = elem.onclick = null; // Destroy the div by moving to garbage bin

                discardElement(elem);
              });
              exportDivElements.length = 0;
            }

            if (exportEvents) {
              exportEvents.forEach(function (unbind) {
                unbind();
              });
              exportEvents.length = 0;
            }
          }
          /* eslint-enable no-invalid-this, valid-jsdoc */

        }); // These ones are translated to attributes rather than styles

        SVGRenderer.prototype.inlineToAttributes = ['fill', 'stroke', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth', 'textAnchor', 'x', 'y']; // These CSS properties are not inlined. Remember camelCase.

        SVGRenderer.prototype.inlineBlacklist = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/ // #7700
        // /^text (border|color|cursor|height|webkitBorder)/
        ];
        SVGRenderer.prototype.unstyledElements = ['clipPath', 'defs', 'desc'];
        /**
         * Analyze inherited styles from stylesheets and add them inline
         *
         * @private
         * @function Highcharts.Chart#inlineStyles
         * @return {void}
         *
         * @todo: What are the border styles for text about? In general, text has a lot
         * of properties.
         * @todo: Make it work with IE9 and IE10.
         *
         * @requires modules/exporting
         */

        Chart.prototype.inlineStyles = function () {
          var renderer = this.renderer,
              inlineToAttributes = renderer.inlineToAttributes,
              blacklist = renderer.inlineBlacklist,
              whitelist = renderer.inlineWhitelist,
              // For IE
          unstyledElements = renderer.unstyledElements,
              defaultStyles = {},
              dummySVG,
              iframe,
              iframeDoc; // Create an iframe where we read default styles without pollution from this
          // body

          iframe = doc.createElement('iframe');
          css(iframe, {
            width: '1px',
            height: '1px',
            visibility: 'hidden'
          });
          doc.body.appendChild(iframe);
          iframeDoc = iframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>');
          iframeDoc.close();
          /**
           * Make hyphenated property names out of camelCase
           * @private
           * @param {string} prop
           *        Property name in camelCase
           * @return {string}
           *         Hyphenated property name
           */

          function hyphenate(prop) {
            return prop.replace(/([A-Z])/g, function (a, b) {
              return '-' + b.toLowerCase();
            });
          }
          /**
           * Call this on all elements and recurse to children
           * @private
           * @param {Highcharts.HTMLDOMElement} node
           *        Element child
           * @return {void}
           */


          function recurse(node) {
            var styles,
                parentStyles,
                cssText = '',
                dummy,
                styleAttr,
                blacklisted,
                whitelisted,
                i;
            /**
             * Check computed styles and whether they are in the white/blacklist for
             * styles or atttributes.
             * @private
             * @param {string} val
             *        Style value
             * @param {string} prop
             *        Style property name
             * @return {void}
             */

            function filterStyles(val, prop) {
              // Check against whitelist & blacklist
              blacklisted = whitelisted = false;

              if (whitelist) {
                // Styled mode in IE has a whitelist instead.
                // Exclude all props not in this list.
                i = whitelist.length;

                while (i-- && !whitelisted) {
                  whitelisted = whitelist[i].test(prop);
                }

                blacklisted = !whitelisted;
              } // Explicitly remove empty transforms


              if (prop === 'transform' && val === 'none') {
                blacklisted = true;
              }

              i = blacklist.length;

              while (i-- && !blacklisted) {
                blacklisted = blacklist[i].test(prop) || typeof val === 'function';
              }

              if (!blacklisted) {
                // If parent node has the same style, it gets inherited, no need
                // to inline it. Top-level props should be diffed against parent
                // (#7687).
                if ((parentStyles[prop] !== val || node.nodeName === 'svg') && defaultStyles[node.nodeName][prop] !== val) {
                  // Attributes
                  if (inlineToAttributes.indexOf(prop) !== -1) {
                    node.setAttribute(hyphenate(prop), val); // Styles
                  } else {
                    cssText += hyphenate(prop) + ':' + val + ';';
                  }
                }
              }
            }

            if (node.nodeType === 1 && unstyledElements.indexOf(node.nodeName) === -1) {
              styles = win.getComputedStyle(node, null);
              parentStyles = node.nodeName === 'svg' ? {} : win.getComputedStyle(node.parentNode, null); // Get default styles from the browser so that we don't have to add
              // these

              if (!defaultStyles[node.nodeName]) {
                /*
                if (!dummySVG) {
                    dummySVG = doc.createElementNS(H.SVG_NS, 'svg');
                    dummySVG.setAttribute('version', '1.1');
                    doc.body.appendChild(dummySVG);
                }
                */
                dummySVG = iframeDoc.getElementsByTagName('svg')[0];
                dummy = iframeDoc.createElementNS(node.namespaceURI, node.nodeName);
                dummySVG.appendChild(dummy); // Copy, so we can remove the node

                defaultStyles[node.nodeName] = merge(win.getComputedStyle(dummy, null)); // Remove default fill, otherwise text disappears when exported

                if (node.nodeName === 'text') {
                  delete defaultStyles.text.fill;
                }

                dummySVG.removeChild(dummy);
              } // Loop through all styles and add them inline if they are ok


              if (isFirefoxBrowser || isMSBrowser) {
                // Some browsers put lots of styles on the prototype
                for (var p in styles) {
                  // eslint-disable-line guard-for-in
                  filterStyles(styles[p], p);
                }
              } else {
                objectEach(styles, filterStyles);
              } // Apply styles


              if (cssText) {
                styleAttr = node.getAttribute('style');
                node.setAttribute('style', (styleAttr ? styleAttr + ';' : '') + cssText);
              } // Set default stroke width (needed at least for IE)


              if (node.nodeName === 'svg') {
                node.setAttribute('stroke-width', '1px');
              }

              if (node.nodeName === 'text') {
                return;
              } // Recurse


              [].forEach.call(node.children || node.childNodes, recurse);
            }
          }
          /**
           * Remove the dummy objects used to get defaults
           * @private
           * @return {void}
           */


          function tearDown() {
            dummySVG.parentNode.removeChild(dummySVG);
          }

          recurse(this.container.querySelector('svg'));
          tearDown();
        };

        symbols.menu = function (x, y, width, height) {
          var arr = ['M', x, y + 2.5, 'L', x + width, y + 2.5, 'M', x, y + height / 2 + 0.5, 'L', x + width, y + height / 2 + 0.5, 'M', x, y + height - 1.5, 'L', x + width, y + height - 1.5];
          return arr;
        };

        symbols.menuball = function (x, y, width, height) {
          var path = [],
              h = height / 3 - 2;
          path = path.concat(this.circle(width - h, y, h, h), this.circle(width - h, y + h + 4, h, h), this.circle(width - h, y + 2 * (h + 4), h, h));
          return path;
        };
        /**
         * Add the buttons on chart load
         * @private
         * @function Highcharts.Chart#renderExporting
         * @return {void}
         * @requires modules/exporting
         */


        Chart.prototype.renderExporting = function () {
          var chart = this,
              exportingOptions = chart.options.exporting,
              buttons = exportingOptions.buttons,
              isDirty = chart.isDirtyExporting || !chart.exportSVGElements;
          chart.buttonOffset = 0;

          if (chart.isDirtyExporting) {
            chart.destroyExport();
          }

          if (isDirty && exportingOptions.enabled !== false) {
            chart.exportEvents = [];
            chart.exportingGroup = chart.exportingGroup || chart.renderer.g('exporting-group').attr({
              zIndex: 3 // #4955, // #8392

            }).add();
            objectEach(buttons, function (button) {
              chart.addButton(button);
            });
            chart.isDirtyExporting = false;
          } // Destroy the export elements at chart destroy


          addEvent(chart, 'destroy', chart.destroyExport);
        };
        /* eslint-disable no-invalid-this */
        // Add update methods to handle chart.update and chart.exporting.update and
        // chart.navigation.update. These must be added to the chart instance rather
        // than the Chart prototype in order to use the chart instance inside the update
        // function.


        addEvent(Chart, 'init', function () {
          var chart = this;
          /**
           * @private
           * @param {"exporting"|"navigation"} prop
           *        Property name in option root
           * @param {Highcharts.ExportingOptions|Highcharts.NavigationOptions} options
           *        Options to update
           * @param {boolean} [redraw=true]
           *        Whether to redraw
           * @return {void}
           */

          function _update(prop, options, redraw) {
            chart.isDirtyExporting = true;
            merge(true, chart.options[prop], options);

            if (pick(redraw, true)) {
              chart.redraw();
            }
          }

          chart.exporting = {
            update: function update(options, redraw) {
              _update('exporting', options, redraw);
            }
          }; // Register update() method for navigation. Can not be set the same way as
          // for exporting, because navigation options are shared with bindings which
          // has separate update() logic.

          chartNavigationMixin.addUpdate(function (options, redraw) {
            _update('navigation', options, redraw);
          }, chart);
        });
        /* eslint-enable no-invalid-this */

        Chart.prototype.callbacks.push(function (chart) {
          chart.renderExporting();
          addEvent(chart, 'redraw', chart.renderExporting); // Uncomment this to see a button directly below the chart, for quick
          // testing of export

          /*
          var button,
              viewImage,
              viewSource;
          if (!chart.renderer.forExport) {
              viewImage = function () {
                  var div = doc.createElement('div');
                  div.innerHTML = chart.getSVGForExport();
                  chart.renderTo.parentNode.appendChild(div);
              };
               viewSource = function () {
                  var pre = doc.createElement('pre');
                  pre.innerHTML = chart.getSVGForExport()
                      .replace(/</g, '\n&lt;')
                      .replace(/>/g, '&gt;');
                  chart.renderTo.parentNode.appendChild(pre);
              };
               viewImage();
               // View SVG Image
              button = doc.createElement('button');
              button.innerHTML = 'View SVG Image';
              chart.renderTo.parentNode.appendChild(button);
              button.onclick = viewImage;
               // View SVG Source
              button = doc.createElement('button');
              button.innerHTML = 'View SVG Source';
              chart.renderTo.parentNode.appendChild(button);
              button.onclick = viewSource;
          }
          //*/
        });
      });

      _registerModule(_modules, 'masters/modules/exporting.src.js', [], function () {});
    });
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/dashboard/dashboard.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/dashboard/dashboard.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"page_heading\">\n    <h2>Dashboard</h2>\n</section>\n<div class=\"dashboard-section\">\n    <div class=\"order-summary\">\n        <p class=\"order-summary-text\" *ngIf=\"orderSummary\">Summary for today</p>\n        <app-order-summary [orderSummary]=\"orderSummary\" *ngIf=\"orderSummary\"></app-order-summary>\n        <p class=\"order-summary-text\" *ngIf=\"eventObj\">Upcoming Events</p>\n        <app-event [eventObj]=\"eventObj\" *ngIf=\"eventObj\"></app-event>\n    </div>\n    <div class=\"chart-section\">\n        <div class=\"bar chart\">\n            <mat-card>\n                <p class=\"graph-title\">Bar Chart</p>\n                <div [chart]=\"chart\" style=\"height: 94%;\"></div>\n            </mat-card>\n        </div>\n        <div class=\"doughnut chart\">\n            <mat-card>\n                <p class=\"graph-title\">Top Performing Vendors</p>\n                <div [chart]=\"chartcircle\" style=\"height: 94%;\"></div>\n            </mat-card>\n\n        </div>\n        <div class=\"doughnut chart\">\n\n            <mat-card>\n                <p class=\"graph-title\">Total Orders</p>\n                <div [chart]=\"chartPie\" style=\"height: 94%;\"></div>\n\n            </mat-card>\n\n        </div>\n        <div class=\"radar chart\">\n\n            <mat-card>\n                <p class=\"graph-title\">Delivery Trends</p>\n                <div [chart]=\"chartline\" style=\"height: 94%;\"></div>\n\n\n            </mat-card>\n        </div>\n    </div>\n\n</div>\n<!-- <div class=\"timeline\">\n    <p>Order History- 12684858</p>\n    <mgl-timeline [toggle]=\"toggle\" [alternate]=\"alternate\" [side]=\"side\">\n        <mgl-timeline-entry *ngFor=\"let entry of entries; let i = index;\" (expand)=\"onExpandEntry($event, i)\">\n            <mgl-timeline-entry-header (click)=\"onHeaderClick($event)\">\n                <div>{{entry.header}}</div>\n            </mgl-timeline-entry-header>\n            <mgl-timeline-entry-content>\n                <div>\n                    <div>{{entry.content}}</div>\n                    <div>{{entry.content}}</div>\n                    <div>{{entry.content}}</div>\n                </div>\n            </mgl-timeline-entry-content>\n            <mgl-timeline-entry-dot [size]=\"size\" (click)=\"onDotClick($event)\">\n            </mgl-timeline-entry-dot>\n        </mgl-timeline-entry>\n    </mgl-timeline>\n</div> -->\n<loader [fullPageLoader]=\"true\" *ngIf=\"isShowLoader\">\n\n</loader>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/event/event.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/event/event.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentEventEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n\n\n    <div class=\"order-card\" *ngFor=\"let event of eventObj; let index=index\" (click)=\"clickOnTab(index)\"\n        [ngStyle]=\"{'border-bottom-color': selectedItem == index? event.bgColor:'#e4e5e6'}\">\n        <mat-card [style.backgroundColor]=\"event.bgColor\">\n            <mat-card-title>{{event.eventCount}}</mat-card-title>\n            <p>{{event.eventName}}</p>\n        </mat-card>\n    </div>\n\n\n</section>\n<div class=\"event-details\" [style.backgroundColor]=\"bgColor\">\n    <div class=\"event\">\n        <p class=\"event-date\">Today 3/30/2017</p>\n        <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n            <p class=\"event-time\">6:00 AM - 7:00 AM</p>\n            <p class=\"event-order-id\" (click)=\"check()\">Order# 12684858</p>\n        </div>\n\n    </div>\n    <div class=\"event\">\n        <p class=\"event-date\">Today 3/30/2017</p>\n        <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n            <p class=\"event-time\">6:00 AM - 7:00 AM</p>\n            <p class=\"event-order-id\">Order# 12684858</p>\n        </div>\n    </div>\n    <div class=\"event\">\n        <p class=\"event-date\">Today 3/30/2017</p>\n        <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n            <p class=\"event-time\">6:00 AM - 7:00 AM</p>\n            <p class=\"event-order-id\">Order# 12684858</p>\n        </div>\n\n    </div>\n    <div class=\"event\">\n        <p class=\"event-date\">Today 3/30/2017</p>\n        <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n            <p class=\"event-time\">6:00 AM - 7:00 AM</p>\n            <p class=\"event-order-id\">Order# 12684858</p>\n        </div>\n    </div>\n    <div class=\"event\">\n        <p class=\"event-date\">Today 3/30/2017</p>\n        <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n            <p class=\"event-time\">6:00 AM - 7:00 AM</p>\n            <p class=\"event-order-id\">Order# 12684858</p>\n        </div>\n\n    </div>\n    <div class=\"event\">\n        <p class=\"event-date\">Today 3/30/2017</p>\n        <div fxLayout=\"row\" fxLayoutGap=\"15px\">\n            <p class=\"event-time\">6:00 AM - 7:00 AM</p>\n            <p class=\"event-order-id\">Order# 12684858</p>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/order-summary/order-summary.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/order-summary/order-summary.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentOrderSummaryOrderSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section *ngIf=\"ordersData\">\n    <div class=\"order-card\" *ngFor=\"let order of ordersData;let index=index\">\n        <mat-card [style.backgroundColor]=\"order.color\">\n\n            <mat-card-title>{{order.orderCount}}</mat-card-title>\n            <p>{{order.orderStatus}}</p>\n        </mat-card>\n    </div>\n    <!-- <div class=\"processing order-card\">\n        <mat-card>\n            <mat-card-title>04</mat-card-title>\n            <p>Order InProgressing</p>\n        </mat-card>\n    </div>\n    <div class=\"complete order-card\">\n        <mat-card>\n            <mat-card-title>0</mat-card-title>\n            <p>Order Completed</p>\n        </mat-card>\n    </div>\n    <div class=\"cancel order-card\">\n        <mat-card>\n            <mat-card-title>0</mat-card-title>\n            <p>Order Cancelled</p>\n        </mat-card>\n    </div> -->\n</section>";
    /***/
  },

  /***/
  "./src/app/core/component/dashboard/dashboard-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/core/component/dashboard/dashboard-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppCoreComponentDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/core/component/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/component/dashboard/dashboard.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/core/component/dashboard/dashboard.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-summary {\n  width: 50%;\n  display: inline-block;\n  padding: 0 10px 0 3px;\n}\n.order-summary-text {\n  font-size: 18px;\n  color: black;\n  margin: 0px;\n  display: inline-block;\n  margin-left: 7px;\n  font-weight: bold;\n}\n.chart-section {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\nmat-card {\n  padding: 5px 15px;\n}\n.chart {\n  width: 47%;\n  display: inline-block;\n  margin: 8px;\n  height: 260px;\n}\n.chart mat-card {\n  height: 100%;\n}\n.graph-title {\n  font-size: 13px;\n  margin: 0px;\n  font-weight: bold;\n}\n.dashboard-section {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 5px;\n}\nmgl-timeline-entry-dot {\n  background-color: #fb8aa3 !important;\n}\nmgl-timeline-entry {\n  margin-bottom: 16px;\n}\nmgl-timeline .mgl-timeline-line {\n  width: 5px !important;\n}\n.timeline {\n  margin: 8px;\n}\n.timeline p {\n  font-size: 18px;\n  color: black;\n  margin: 0px;\n  display: inline-block;\n  font-weight: bold;\n  margin-bottom: 9px;\n}\n.pie {\n  position: relative;\n  background-color: white;\n}\n.pie div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n@media screen and (max-width: 767px) {\n  .dashboard-section {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .order-summary {\n    width: 100%;\n  }\n\n  .chart-section {\n    width: 100%;\n  }\n\n  .chart {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmVzaC9Eb3dubG9hZHMvVW50aXRsZWQgRm9sZGVyICg0KS9zcmMvYXBwL2NvcmUvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0FKO0FEQ0k7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0ksaUJBQUE7QUNDUjtBREVBO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURHQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQUo7QURDSTtFQUNJLFlBQUE7QUNDUjtBREdBO0VBRUksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0RKO0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7RUFDSyxvQ0FBQTtBQ0FMO0FERUE7RUFDSSxtQkFBQTtBQ0NKO0FEQ0E7RUFDSSxxQkFBQTtBQ0VKO0FEQ0E7RUFDUSxXQUFBO0FDRVI7QUREUTtFQUNKLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FDR0o7QUREQTtFQUNRLGtCQUFBO0VBQ0osUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDSUo7QUREQTtFQUNFO0lBQ0ksNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDSUo7O0VERkE7SUFDSSxXQUFBO0VDS0o7O0VESEE7SUFDSSxXQUFBO0VDTUo7O0VESkE7SUFDSSxXQUFBO0VDT0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5vcmRlci1zdW1tYXJ5e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDNweDtcbiAgICAmLXRleHR7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLmNoYXJ0LXNlY3Rpb257XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblxufVxubWF0LWNhcmR7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5jaGFydHtcbiAgICB3aWR0aDogNDclO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDhweDtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgICYgbWF0LWNhcmR7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIFxuICAgIH1cbn1cbi5ncmFwaC10aXRsZXtcbiAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kYXNoYm9hcmQtc2VjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbm1nbC10aW1lbGluZS1lbnRyeS1kb3R7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjhhYTMgIWltcG9ydGFudDtcbn1cbm1nbC10aW1lbGluZS1lbnRyeXtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxubWdsLXRpbWVsaW5lIC5tZ2wtdGltZWxpbmUtbGluZXtcbiAgICB3aWR0aDogNXB4ICFpbXBvcnRhbnRcbn1cblxuLnRpbWVsaW5le1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgJiBwe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDlweDtcbn1cbn1cbi5waWV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnBpZSBkaXZ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5kYXNoYm9hcmQtc2VjdGlvbntcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4gIC5vcmRlci1zdW1tYXJ5e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNoYXJ0LXNlY3Rpb257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY2hhcnR7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbn0iLCIub3JkZXItc3VtbWFyeSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4IDAgM3B4O1xufVxuLm9yZGVyLXN1bW1hcnktdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoYXJ0LXNlY3Rpb24ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxubWF0LWNhcmQge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLmNoYXJ0IHtcbiAgd2lkdGg6IDQ3JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDhweDtcbiAgaGVpZ2h0OiAyNjBweDtcbn1cbi5jaGFydCBtYXQtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyYXBoLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kYXNoYm9hcmQtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbm1nbC10aW1lbGluZS1lbnRyeS1kb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4YWEzICFpbXBvcnRhbnQ7XG59XG5cbm1nbC10aW1lbGluZS1lbnRyeSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbm1nbC10aW1lbGluZSAubWdsLXRpbWVsaW5lLWxpbmUge1xuICB3aWR0aDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZSB7XG4gIG1hcmdpbjogOHB4O1xufVxuLnRpbWVsaW5lIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbn1cblxuLnBpZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5waWUgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmRhc2hib2FyZC1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm9yZGVyLXN1bW1hcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNoYXJ0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNoYXJ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/component/dashboard/dashboard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/component/dashboard/dashboard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppCoreComponentDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-highcharts */
    "./node_modules/angular-highcharts/fesm2015/angular-highcharts.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/core/services/order.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(orderService) {
        _classCallCheck(this, DashboardComponent);

        this.orderService = orderService;
        this.isShowLoader = false;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
          chart: {
            type: 'column'
          },
          title: {
            text: null,
            align: "left",
            x: 40
          },
          yAxis: {
            title: {
              text: 'USD (million)'
            }
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Line 1',
            data: [4, 2, 3, 4, 1],
            type: undefined
          }]
        });
        this.chartPie = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: null
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: false
            }
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Brandsk',
            type: undefined,
            colorByPoint: true,
            data: [{
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: false
            }, {
              name: 'Internet Explorer',
              y: 11.84
            }, {
              name: 'Firefox',
              y: 10.85
            }, {
              name: 'Edge',
              y: 4.67
            }]
          }]
        });
        this.chartcircle = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
          chart: {
            type: 'pie'
          },
          title: {
            text: null
          },
          credits: {
            enabled: false
          },
          pane: {
            startAngle: 0,
            endAngle: 360
          },
          plotOptions: {
            pie: {
              shadow: false
            }
          },
          tooltip: {
            formatter: function formatter() {
              return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
            }
          },
          series: [{
            type: undefined,
            name: 'Browsers',
            data: [["Firefox", 6], ["MSIE", 4], ["Chrome", 7]],
            size: '100%',
            innerSize: '40%',
            showInLegend: true,
            dataLabels: {
              enabled: false
            }
          }],
          exporting: {
            enabled: false
          },
          legend: {
            enabled: false
          }
        });
        this.chartline = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 2010
            }
          },
          title: {
            text: null,
            align: "left",
            x: 40
          },
          pane: {
            startAngle: 0,
            endAngle: 360
          },
          yAxis: {
            title: {
              text: 'USD (million)'
            }
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            type: undefined
          }]
        });
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.getDashBoardData();
        }
      }, {
        key: "chartClicked",
        value: function chartClicked(e) {}
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {}
      }, {
        key: "getDashBoardData",
        value: function getDashBoardData() {
          var _this4 = this;

          this.isShowLoader = true;
          var data = {
            userName: 'Ethan',
            password: 'abc@123'
          };
          this.orderService.getDashBoardData(data).subscribe(function (response) {
            _this4.isShowLoader = false;
            _this4.eventObj = response["eventsCount"];
            _this4.orderSummary = response["ordersCount"];
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              text: "Oops! Something went wrong",
              icon: 'warning',
              showCancelButton: false,
              confirmButtonText: 'Yes'
            });
            _this4.isShowLoader = false;
            console.log(error);
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/core/component/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/core/component/dashboard/dashboard.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/component/dashboard/dashboard.module.ts ***!
    \**************************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppCoreComponentDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-mgl-timeline */
    "./node_modules/angular-mgl-timeline/fesm2015/angular-mgl-timeline.js");
    /* harmony import */


    var angular_highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-highcharts */
    "./node_modules/angular-highcharts/fesm2015/angular-highcharts.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/core/component/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/core/component/dashboard/dashboard.component.ts");
    /* harmony import */


    var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared-module/shared-module.module */
    "./src/app/shared-module/shared-module.module.ts");
    /* harmony import */


    var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../order-summary/order-summary.component */
    "./src/app/core/component/order-summary/order-summary.component.ts");
    /* harmony import */


    var _event_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../event/event.component */
    "./src/app/core/component/event/event.component.ts");
    /* harmony import */


    var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! highcharts/highcharts-more.src */
    "./node_modules/highcharts/highcharts-more.src.js");
    /* harmony import */


    var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! highcharts/modules/exporting.src */
    "./node_modules/highcharts/modules/exporting.src.js");
    /* harmony import */


    var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_12__);

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_9__["OrderSummaryComponent"], _event_event_component__WEBPACK_IMPORTED_MODULE_10__["EventComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_5__["ChartModule"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_4__["MglTimelineModule"], src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"]],
      providers: [{
        provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_5__["HIGHCHARTS_MODULES"],
        useFactory: function useFactory() {
          return [highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_11__, highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_12__];
        }
      } // add as factory to your providers
      ]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/core/component/event/event.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/core/component/event/event.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentEventEventComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  margin: 0px;\n  padding: 0px;\n}\n\nsection {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.order-card {\n  width: 102px;\n  max-height: 99px;\n  margin: 5px;\n  cursor: pointer;\n  margin-bottom: 0px;\n  border-bottom: 10px solid #e4e5e6;\n}\n\nmat-card {\n  height: 100%;\n  border-radius: 0px !important;\n  box-shadow: none !important;\n}\n\nmat-card-title {\n  margin-bottom: 0px;\n  font-size: 19px;\n}\n\nmat-card p {\n  margin: 0px;\n  color: #29323d;\n  font-size: 12px;\n}\n\nmat-card-title {\n  color: #29323d;\n}\n\n.event-details {\n  background-color: purple;\n  margin-left: 5px;\n  padding: 10px;\n}\n\n.event-details p {\n  color: #29323d;\n  padding: 4px 0px;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.event-date {\n  border-bottom: 1px solid gray;\n}\n\n.event {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmVzaC9Eb3dubG9hZHMvVW50aXRsZWQgRm9sZGVyICg0KS9zcmMvYXBwL2NvcmUvY29tcG9uZW50L2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudC9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDUSxZQUFBO0VBQ0osZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBRENBO0VBQ0Usd0JBQUE7RUFDSSxnQkFBQTtFQUNGLGFBQUE7QUNFSjs7QUREQTtFQUNPLGNBQUE7RUFDSCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0MsNkJBQUE7QUNHRDs7QUREQTtFQUNJLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudC9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5zZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLm9yZGVyLWNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDJweDtcbiAgICBtYXgtaGVpZ2h0OiA5OXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZTRlNWU2O1xufVxubWF0LWNhcmR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblxufVxubWF0LWNhcmQtdGl0bGV7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cblxubWF0LWNhcmQgIHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICMyOTMyM2Q7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIFxufVxubWF0LWNhcmQtdGl0bGV7XG4gICAgY29sb3I6ICMyOTMyM2Q7XG59XG5cbi8vZXZlbnQgZGV0YWlsc1xuLmV2ZW50LWRldGFpbHN7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiYgcHtcbiAgICAgICBjb2xvcjogIzI5MzIzZDtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxufVxuLmV2ZW50LWRhdGV7XG4gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG4uZXZlbnR7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSIsInAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ub3JkZXItY2FyZCB7XG4gIHdpZHRoOiAxMDJweDtcbiAgbWF4LWhlaWdodDogOTlweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlNGU1ZTY7XG59XG5cbm1hdC1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG5tYXQtY2FyZCBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMjkzMjNkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICMyOTMyM2Q7XG59XG5cbi5ldmVudC1kZXRhaWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmV2ZW50LWRldGFpbHMgcCB7XG4gIGNvbG9yOiAjMjkzMjNkO1xuICBwYWRkaW5nOiA0cHggMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ldmVudC1kYXRlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5ldmVudCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/component/event/event.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/component/event/event.component.ts ***!
    \*********************************************************/

  /*! exports provided: EventComponent */

  /***/
  function srcAppCoreComponentEventEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
      return EventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EventComponent =
    /*#__PURE__*/
    function () {
      function EventComponent(router) {
        _classCallCheck(this, EventComponent);

        this.router = router;
        this.bgColor = "#a88bda";
        this.colors = ["#a88bda", "#6eb9f7", "#f1749e", "#f7776e"];
        this.selectedItem = 0;
      } // eventObj = [
      //   {
      //     no: '11',
      //     msg: 'Order Due',
      //     bgColor: '#a88bda'
      //   },
      //   {
      //     no: '06',
      //     msg: 'Deliveries Today',
      //     bgColor: '#6eb9f7'
      //   },
      //   {
      //     no: '08',
      //     msg: 'Delayed Orders',
      //     bgColor: '#f1749e'
      //   },
      //   {
      //     no: '02',
      //     msg: 'Delayed Deliveries',
      //     bgColor: '#f7776e'
      //   }
      // ]


      _createClass(EventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setBackgroundColor(this.eventObj);
        }
      }, {
        key: "setBackgroundColor",
        value: function setBackgroundColor(data) {
          var _this5 = this;

          if (data) {
            this.eventData = data.map(function (ele, index) {
              ele["bgColor"] = _this5.colors[index];
              return ele;
            });
          }
        }
      }, {
        key: "clickOnTab",
        value: function clickOnTab(i) {
          this.bgColor = this.eventObj[i].bgColor;
          this.selectedItem = i;
        }
      }, {
        key: "check",
        value: function check() {
          this.router.navigate(['/order-details'], {
            queryParams: {
              orderId: 12345678
            }
          });
        }
      }]);

      return EventComponent;
    }();

    EventComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventComponent.prototype, "eventObj", void 0);
    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/event/event.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event.component.scss */
      "./src/app/core/component/event/event.component.scss")).default]
    })], EventComponent);
    /***/
  },

  /***/
  "./src/app/core/component/order-summary/order-summary.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/core/component/order-summary/order-summary.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentOrderSummaryOrderSummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.order-card {\n  width: 102px;\n  max-height: 99px;\n  margin: 5px;\n  cursor: pointer;\n}\n\nmat-card {\n  height: 100%;\n}\n\np {\n  color: #29323d;\n  font-size: 12px;\n}\n\nmat-card-title {\n  color: #29323d;\n}\n\nmat-card {\n  box-shadow: none !important;\n  border-radius: 0;\n}\n\nmat-card-title {\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hcmVzaC9Eb3dubG9hZHMvVW50aXRsZWQgRm9sZGVyICg0KS9zcmMvYXBwL2NvcmUvY29tcG9uZW50L29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnQvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNJLG1CQUFBO0FDQ1I7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50L29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ub3JkZXItY2FyZHtcbiAgICB3aWR0aDogMTAycHg7XG4gICAgbWF4LWhlaWdodDogOTlweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5tYXQtY2FyZHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgXG59XG5cbnB7XG4gICAgY29sb3I6ICMyOTMyM2Q7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIFxufVxubWF0LWNhcmQtdGl0bGV7XG4gICAgY29sb3I6ICMyOTMyM2Q7XG59XG5tYXQtY2FyZHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbm1hdC1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn0iLCJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ub3JkZXItY2FyZCB7XG4gIHdpZHRoOiAxMDJweDtcbiAgbWF4LWhlaWdodDogOTlweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnAge1xuICBjb2xvcjogIzI5MzIzZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMjkzMjNkO1xufVxuXG5tYXQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/component/order-summary/order-summary.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/core/component/order-summary/order-summary.component.ts ***!
    \*************************************************************************/

  /*! exports provided: OrderSummaryComponent */

  /***/
  function srcAppCoreComponentOrderSummaryOrderSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function () {
      return OrderSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/core/services/order.service.ts");

    var OrderSummaryComponent =
    /*#__PURE__*/
    function () {
      function OrderSummaryComponent(orderService) {
        _classCallCheck(this, OrderSummaryComponent);

        this.orderService = orderService;
        this.bgColor = ["#fe6767", "#71c174", "#ffc266", "#7b8cea"];
      }

      _createClass(OrderSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setBackgroundColor(this.orderSummary);
        }
      }, {
        key: "setBackgroundColor",
        value: function setBackgroundColor(data) {
          var _this6 = this;

          if (data) {
            this.ordersData = data.map(function (ele, index) {
              ele["color"] = _this6.bgColor[index];
              return ele;
            });
          }
        }
      }]);

      return OrderSummaryComponent;
    }();

    OrderSummaryComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrderSummaryComponent.prototype, "orderSummary", void 0);
    OrderSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/order-summary/order-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-summary.component.scss */
      "./src/app/core/component/order-summary/order-summary.component.scss")).default]
    })], OrderSummaryComponent);
    /***/
  }
}]);
//# sourceMappingURL=component-dashboard-dashboard-module-es5.js.map