function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'botchains';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 287,
      vars: 0,
      consts: [["src", "../assets/images/BotchainsLogo.png", "alt", ""], ["href", "#section1"], ["href", "#section2"], ["href", "#section3"], ["href", "#section5"], ["href", "#section6"], ["href", "#section4"], ["href", "#contact"], ["id", "section1", 1, "content_main"], [1, "level_heading", "shadow_modifier"], [1, "level_para", "width_modifier", "shadow_modifier"], [1, "container"], ["id", "section2", 1, "section_box"], [1, "left"], [1, "level_heading", "color_modifier"], [1, "level_para", "color_modifier"], [1, "bullet_points"], [1, "right"], ["src", "../assets/images/Final_chip_1920.png", "alt", ""], ["id", "section3", 1, "section_box02"], [1, "level_heading", "text-gradient"], [1, "bullet_two"], [1, "img-class"], ["src", "../assets/images/image1.jpg", "alt", ""], ["id", "section4", 1, "section_box_01"], [1, "level_heading"], ["href", "../assets/images/downlaods/whitepaper.pdf", "download", "download"], ["x", "0px", "y", "0px", "width", "100px", "height", "100px", "viewBox", "0 0 100 100", 1, "pulse"], ["cx", "50", "cy", "50", "r", "6"], ["cx", "50", "cy", "50", "r", "4", "stroke-width", "2", 1, "pulse-circle"], ["cx", "50", "cy", "50", "r", "4", "stroke-width", "2", 1, "pulse-circle-2"], [1, "download_icon"], ["src", "../assets/images/download_icon.svg", "alt", ""], ["href", "../assets/images/downlaods/Litepaper.pdf", "download", "download"], ["href", "../assets/images/downlaods/Botchains Token Economics.pdf", "download", "download"], ["id", "section5", 1, "team_sec"], [1, "team-pro"], [1, "team_card"], ["src", "../assets/images/photo6075421224231611405.jpg", "alt", ""], [1, "qual"], [1, "first"], ["href", "https://www.linkedin.com/in/howard-wu-537978/", "target", "_blank"], [1, "team_block"], [1, "team_mem"], ["src", "../assets/images/team/ace-of-diamonds.svg", "alt", ""], ["src", "../assets/images/team/ace-of-spades.svg", "alt", ""], ["src", "../assets/images/team/ace-of-hearts.svg", "alt", ""], ["src", "../assets/images/team/playing-card.svg", "alt", ""], ["src", "../assets/images/team/king-of-diamonds-card.svg", "alt", ""], ["src", "../assets/images/team/icons8-joker-100.png", "alt", ""], ["src", "../assets/images/team/icons8-queen-of-spades-100.png", "alt", ""], ["src", "../assets/images/team/icons8-jack-of-clubs-100.png", "alt", ""], ["src", "../assets/images/team/icons8-king-of-clubs-100.png", "alt", ""], ["id", "section6", 1, "roadmap"], [1, "roadmap-box"], [1, "roadmap-box-inside", "roadmap-box-inside1"], [1, "date-01", "date-00"], [1, "date-02", "date-00"], [1, "roadmap-box-inside", "roadmap-box-inside2"], [1, "date-03", "date-00"], [1, "roadmap-box-inside", "roadmap-box-inside3"], [1, "date-04", "date-00"], [1, "roadmap-box-inside", "roadmap-box-inside4"], [1, "date-05", "date-00"], [1, "roadmap-box-inside", "roadmap-box-inside5"], [1, "date-04", "date-06", "date-00"], [1, "roadmap-box-inside", "roadmap-box-inside6"], [1, "date-03", "date-07", "date-00"], [1, "date-08", "date-00"], [1, "killer-apps"], [1, "level_heading", "color_modifier", 2, "margin-bottom", "30px"], [1, "killer-points"], ["x", "0px", "y", "0px", "width", "70px", "height", "70px", "viewBox", "0 0 100 100", 1, "pulse"], ["id", "contact"], ["id", "JotFormIFrame-203490927031451", "title", "General Inquiry Contact Form", "onload", "window.parent.scrollTo(0,0)", "allowtransparency", "true", "allowfullscreen", "true", "allow", "geolocation; microphone; camera", "src", "https://form.jotform.com/203490927031451", "frameborder", "0", "scrolling", "no", 2, "min-width", "100%", "height", "750px", "border", "none"], ["src", "../assets/images/icons/email_icon.png", "alt", ""], ["src", "../assets/images/icons/secure-mail.png", "alt", ""], ["src", "../assets/images/icons/telegram-icon.webp", "alt", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "What\u2019s Botchains?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What is it for?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Why Botchains?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Roadmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Investor Deck");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "What is Botchains?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Botchains is an anonymity-centric post-quantum fully autonomous and infinitely-scalable decentralized technology for building the internet of infinitely scalable blockchains(ledger-like chains) and to power goal-driven long-running decentralized autonomous organizations as well as self-evolving sensor-actor nodes without human bias, malice and intervention. Botchains is minerless as far its mainnet operation is concerned. Total addressable marketsize of Botchains ecosystems will be more than USD10 trillion by 2025. That includes marketcap of legacy cryptocurrencies and decentralized platforms as well as sizeable share of USD832.1 billion global cloud computing market. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "What is it for? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Botchains enable and power following decentralized applications: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Financial Operations with an infinitely divisible currency and monetary unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Governance framework of DAOs-Decentralized Autonomous Organizations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Sensor-Actor networks and Internet of Things ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Distributed AI Operating Systems for Autonomous Drones and Vehicles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Computational and Execution Engine for digital assets and digital avatars of\ncyber-physical systems, sensor-actor networks, drones, self-driven cars and robots");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Provably fair lotteries, betting, gaming and traditionally unfathomable\nsupraturing beyond Von-Neumann hypercomputing tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " DeFi Yield mining and AI mining ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Automated metaprograming and distribution of non-clonable modular plug-n-play distributed software and software components endowed with global statefulness without involving any human agents.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Seamless non-custodial value transfers from legacy blockchains to Botchains and vice versa via zkSNARKed privacy-preserving drivechains without requiring any centralized (CEXes) and decentralized (DEXes) exchanges.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Godel hyperchip of Botchains ecosystem enables instantaneous quantum energy transportation from space-based solar energy farms directly to end-user devices, EV cars, autonomous EVcars and drones on-the-fly without requiring any charging points and charging station infrastructure.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Botchains and Godel engine enable searchable tracking of Digital Avatars of all sensors, robots, physical/digital objects and even cybernetic networked humans(via Brain-Machine Interface) aka Cyborgs with real-time one-to-one control flows.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Irreversible offline transactions without internet connection and realization of physical cryptocurrency bills/notes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Why Botchains? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Botchains is required to tackle following emerging challenges, some are extremely critical:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " With emerging quantum computing machines such as Google\u2019s and that of China\u2019s Photonic quantum chip apparently more than billion times more powerful than Google\u2019s will make cryptographic security of all public blockchains including Bitcoin and Ethereum vulnerable to brute force and key collision attacks thereby putting hundreds of billions of dollar(soon trillions of dollar) of public value at extreme risk of sabotage . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Truly autonomous and intelligent drones and self-driven cars are not technologically feasible without having the background consciousness and associated self-awareness of human-level or suprahuman-level due to uncertain nature of the real physical world. All algorithmic systems will fail even the so called reinforcement learner algorithms eventually. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Decentralized organizations comprising of human miners and token holders running public blockchains are susceptible to darkest tendencies of human nature e.g. jealousy, anger, greed, malice, conscious/unconscious bias and so on. Hence they can\u2019t truly govern decentralized autonomous organizations in a way that would be fair to all parties and stakeholders including token-hodlers/holders and miners at all times. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Truly decentralized gaming such as lotteries and betting apps require quantum sources of randomness to make them provably fair. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Realtime blockchain search engine, distributed AI engine and an IoT track and execute engine are urgently required for growth of both decentralized economy and IoT infrastructure.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Decentralized Finance-DeFi or Open Finance can\u2019t grow much without a robust privacy solution. Native Heim token of Botchains ensures anonymity of the sender and receiver as well as protects the privacy of both account balances and code. Any tokens/ contracts/protocols/dapps built on Botchains will have the same anonymous privacy preserving property by default. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Turing-completeness of smart contracts makes is far too easier for malicious criminal-minded hackers to find bugs, exploits and 0days and steal tens of millions of dollar often in DeFi space.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Swapping a pair of cryptos or transferring crypto values one-way during face-to-face meetings between reasonably trusted parties should not require an Internet connection. Simple P2P networks like Bluetooth connection should be able to validate such transaction irreversibly. This can be done by engineering some non-clonable primitives both logically and electronically or phonically or physically. This will give birth to a new type of physical crypto notes/bills that does not require an internet connection for validation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h1", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Investor Deck ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "svg", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Botchains Whitepaper\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "svg", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Botchains Litepaper\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "svg", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Token Economics\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "section", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Our Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Howard Wu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Executive Adviser at Huawei Technologies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Bellevue, Washington, United States.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "SpaceEagle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Subbies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Rehn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Danny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Eightdim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Kinster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Twitchell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Rector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Yoshioka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "section", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Roadmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Q1-2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Q2-2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Q3-2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Q4-2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Q1-2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Q2-2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Q3-2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Q4-2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "section", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h2", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Killer apps of Botchains ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Hack-proof distributed autonomous operating system for DAOs, autonomous cars and drones. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Searchable collaborative Digital Avatars of real world devices,autonomous cars, sensors, bots , drones and individuals with globally unique zero-knowledge identifiers extending working time and capacities of individuals and organizations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Human Readable Anonymous agreements and guarantees known as zkSAGs to replace smart contracts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Irreversible offline transactions without internet connection and realization of physical cryptocurrency bills ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " Seamless non-custodial value transfers from legacy blockchains to Botchains and vice versa by implementing recursive zkSNARKed privacy-preserving drivechains without requiring any centralized (CEXes)and decentralized (DEXes) exchanges or 3rd party wallets ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Decentralized censorship-proof secure encrypted messenger and social media apps that don\u2019t not require an army of programmers and coders for building and maintenance. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Godel hyperchip of Botchains ecosystem will enable secure wireless energy distribution and trading via instantaneous quantum energy teleportation from space-based and terrestrial solar energy farms and small nuclear \u2622\uFE0F fusion reactors directly to end-user devices, EV cars, autonomous EVcars, drones, satellites \uD83D\uDEF0 and spacestations as well as space colonies in the near future. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " KYC-free Universal Decentralized Payment Processor for more than 100 cryptocurrencies and stablecoins besides Heim enabled via recursive zkSNARKed drivechains ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "svg", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "circle", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "circle", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Censorship-free Botverse DappStore allowing developers to list their Dapps for easy end-user access and marketing based on keyphrases and keywords ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "section", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "iframe", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Email : bot@Botchains.tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Secure mail : Botchains@protonmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Telegram : @HeimTimer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["header[_ngcontent-%COMP%] {\n  height: 600px;\n  background-image: url('blockchain_bg.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0px 50px;\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 60px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  border-bottom: 1px solid transparent;\n  height: 50px;\n  padding: 0px 20px;\n  color: #00DBB3;\n  display: block;\n  line-height: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #00DBB3;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   div.content_main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  padding-top: 90px;\n}\n.level_heading[_ngcontent-%COMP%] {\n  font-family: \"Poiret One\", cursive;\n  font-size: 60px;\n  letter-spacing: 1px;\n  color: #fff;\n}\n.level_para[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  color: #fff;\n  font-weight: 600;\n  margin-top: 10px;\n  text-align: justify;\n  line-height: 28px;\n}\n.width_modifier[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.color_modifier[_ngcontent-%COMP%] {\n  color: #000;\n}\n.shadow_modifier[_ngcontent-%COMP%] {\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n}\n.container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n}\n.container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  padding: 50px 10px;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bullet_points[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bullet_points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  margin-bottom: 5px;\n  text-align: justify;\n  padding-left: 30px;\n  line-height: 28px;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bullet_points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  background-color: #fff;\n  left: 0px;\n  top: 10px;\n}\n.container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n.container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.download_icon[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-right: 5px;\n}\n.download_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n}\ncircle[_ngcontent-%COMP%] {\n  fill: #80ffff;\n  transform-origin: center;\n}\n.pulse-circle[_ngcontent-%COMP%], .pulse-circle-2[_ngcontent-%COMP%] {\n  stroke: #80ffff;\n  stroke-width: 2px;\n  fill: none;\n  transform: translate3d(0, 0, 0);\n}\n.pulse-circle[_ngcontent-%COMP%] {\n  -webkit-animation: pulse 1.5s 1s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n          animation: pulse 1.5s 1s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n}\n.pulse-circle-2[_ngcontent-%COMP%] {\n  -webkit-animation: pulse-2 1.5s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n          animation: pulse-2 1.5s cubic-bezier(0.39, 0.54, 0.41, 1.5) infinite alternate;\n}\n@-webkit-keyframes pulse {\n  0% {\n    r: 4;\n  }\n  50% {\n    r: 16;\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes pulse {\n  0% {\n    r: 4;\n  }\n  50% {\n    r: 16;\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse-2 {\n  0%, 50% {\n    r: 4;\n  }\n  100% {\n    r: 16;\n  }\n}\n@keyframes pulse-2 {\n  0%, 50% {\n    r: 4;\n  }\n  100% {\n    r: 16;\n  }\n}\n.text-gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.section_box_01[_ngcontent-%COMP%] {\n  background-image: url('image3.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 100px 50px;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.section_box_01[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  letter-spacing: 1px;\n  color: #fff;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n  font-weight: 700;\n  text-decoration: none;\n}\n.section_box_01[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00dbb3;\n}\n.section_box02[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 50px;\n}\n.bullet_two[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  color: #000;\n  font-weight: 600;\n  text-align: justify;\n  line-height: 28px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  padding-left: 50px;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::after {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: \"Patua One\", cursive;\n  font-size: 30px;\n  text-align: center;\n  color: #00DBB3;\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1)::after {\n  content: \"01\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2)::after {\n  content: \"02\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3)::after {\n  content: \"03\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4)::after {\n  content: \"04\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(5)::after {\n  content: \"05\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(6)::after {\n  content: \"06\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(7)::after {\n  content: \"07\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(8)::after {\n  content: \"08\";\n}\n.bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(9)::after {\n  content: \"09\";\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: #1e1e1f;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 50px;\n}\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 60px;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  border-bottom: 1px solid #666666;\n  display: flex;\n  align-items: center;\n  margin: 10px 0px;\n  transition: all 0.3s ease;\n  font-weight: 700;\n  text-decoration: none;\n  color: #00dbb3;\n}\n.team-pro[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 40px;\n  padding-bottom: 20px;\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: #fff;\n  border-radius: 4px;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 20px;\n  justify-content: stretch;\n  align-items: center;\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 22px;\n  font-weight: bold;\n  color: #8261C3;\n  margin: 10px 0px;\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%]   .qual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-bottom: 0px;\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%]   .qual[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 2px;\n  font-weight: bold;\n  color: #000;\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%]   .qual[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #333;\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  padding-left: 40px;\n  color: #fff;\n  background-color: #0078D4;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  border-radius: 2px;\n  letter-spacing: 1px;\n  font-weight: bold;\n  margin-top: 20px;\n  background-image: url('icons8-linkedin-48.png');\n  background-repeat: no-repeat;\n  background-size: 28px 28px;\n  background-position: 8px 6px;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  transform: translateY(0px);\n}\n.team-pro[_ngcontent-%COMP%]   .team_card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.team_sec[_ngcontent-%COMP%] {\n  padding: 50px;\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n}\n.team_sec[_ngcontent-%COMP%]   .team_block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px 0px;\n  justify-content: center;\n}\n.team_sec[_ngcontent-%COMP%]   .team_block[_ngcontent-%COMP%]   .team_mem[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 15px 20px;\n  margin: 0px 10px;\n  border-radius: 4px;\n  background-color: #f0f0f0;\n}\n.team_sec[_ngcontent-%COMP%]   .team_block[_ngcontent-%COMP%]   .team_mem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.team_sec[_ngcontent-%COMP%]   .team_block[_ngcontent-%COMP%]   .team_mem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #000;\n  font-size: 16px;\n  margin-top: 10px;\n  font-weight: 700;\n  margin-bottom: 0px;\n}\n.img-class[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  width: 600px;\n}\n.img-class[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n}\n.date-00[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #000;\n  display: flex;\n}\n.date-00[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #fff;\n  font-weight: bold;\n  font-family: \"Open Sans\", sans-serif;\n}\n.date-01[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50px;\n  top: -15px;\n  transform: translateY(-50%);\n}\n.date-01[_ngcontent-%COMP%]::after {\n  content: \"Development & testing of Godel Hyperchip technologies Hiring full-time Chief Software and Hardware project managers Godel Alpha Digital Asset & Avatar search engine Release\";\n  position: absolute;\n  width: 300px;\n  top: -110px;\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n  border-radius: 8px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: \"Open Sans\", sans-serif;\n}\n.date-02[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n.date-02[_ngcontent-%COMP%]::after {\n  content: \"Selecting & rewarding grants to independent R&D labs/companies to commericalize productions and distribution of open source Godel Hyperchip and Godel-powered devices including wearable mind-machine interfaces(BMIs)\";\n  position: absolute;\n  width: 150px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n  border-radius: 8px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px 20px;\n  left: 110px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.date-03[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  transform: translate(-50%, 20%);\n}\n.date-03[_ngcontent-%COMP%]::after {\n  content: \"Alpha Botchains Testnet released Botchains Foundation incorporated in Liechtenstein Announcing strategic partnerships and engagements \";\n  position: absolute;\n  width: 150px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n  border-radius: 8px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px 20px;\n  left: -200px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.date-04[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  transform: translateX(50%);\n  top: 15px;\n}\n.date-04[_ngcontent-%COMP%]::after {\n  content: \"Beta testnet of Botchains Release First batch of Godel hyperchips release\";\n  position: absolute;\n  width: 150px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n  border-radius: 8px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px 20px;\n  right: -200px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.date-05[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  transform: translate(-50%, 20%);\n}\n.date-05[_ngcontent-%COMP%]::after {\n  content: \" Beta testnet of Godel Engine Release Rewarding farther grants to R&D labs and qualified Botchains ecosystem developers\";\n  position: absolute;\n  width: 150px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n  border-radius: 8px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px 20px;\n  left: -200px;\n  font-family: \"Open Sans\", sans-serif;\n}\n.date-06[_ngcontent-%COMP%]::after {\n  content: \"Botchains Core 1.0 Release Drivechains interface released for legacy blockchains \";\n}\n.date-07[_ngcontent-%COMP%]::after {\n  content: \" Fully functional Godel engine released  Decentralized distribution of second batch of Godel hyperchips \";\n}\n.date-08[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 50px;\n  bottom: -15px;\n  transform: translateY(50%);\n}\n.date-08[_ngcontent-%COMP%]::after {\n  content: \" Debugged Botchains Core 1.1 Release Standalone Heim Mainnet Wallet Release \";\n  position: absolute;\n  width: 300px;\n  bottom: -70px;\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n  border-radius: 8px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 10px 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-family: \"Open Sans\", sans-serif;\n}\n.killer-apps[_ngcontent-%COMP%] {\n  padding: 50px;\n  background: #8360c3;\n  \n  \n  background: linear-gradient(to bottom, #2ebf91, #8360c3);\n  \n}\n.killer-points[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bold;\n  color: #000;\n  margin-bottom: 20px;\n}\n.killer-points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex: 1;\n  letter-spacing: 1px;\n  line-height: 26px;\n}\n.killer-points[_ngcontent-%COMP%]   .pulse-circle[_ngcontent-%COMP%] {\n  stroke: #000;\n}\n.roadmap[_ngcontent-%COMP%] {\n  padding: 50px;\n  background-color: #fff;\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  margin: 200px auto;\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 150px;\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside1[_ngcontent-%COMP%] {\n  width: 50%;\n  align-self: center;\n  border-top: 10px solid #666;\n  border-right: 10px solid #666;\n  border-bottom: 10px solid #666;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 100px;\n  position: relative;\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside2[_ngcontent-%COMP%] {\n  align-self: center;\n  border-top: 10px solid #666;\n  border-bottom: 10px solid #666;\n  border-left: 10px solid #666;\n  border-top-left-radius: 100px;\n  border-top-right-radius: -100px;\n  border-bottom-left-radius: 100px;\n  transform: translate(-70px, -10px);\n  position: relative;\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside3[_ngcontent-%COMP%] {\n  align-self: center;\n  border-top: 10px solid #666;\n  border-right: 10px solid #666;\n  border-bottom: 10px solid #666;\n  transform: translateY(-20px);\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 100px;\n  position: relative;\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside4[_ngcontent-%COMP%] {\n  align-self: center;\n  border-top: 10px solid #666;\n  border-left: 10px solid #666;\n  border-bottom: 10px solid #666;\n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 100px;\n  position: relative;\n  transform: translate(-73px, -30px);\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside5[_ngcontent-%COMP%] {\n  align-self: center;\n  border-top: 10px solid #666;\n  border-right: 10px solid #666;\n  border-bottom: 10px solid #666;\n  transform: translate(10px, -40px);\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 100px;\n  position: relative;\n}\n.roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside6[_ngcontent-%COMP%] {\n  align-self: center;\n  border-top: 10px solid #666;\n  border-bottom: 10px solid #666;\n  border-left: 10px solid #666;\n  border-top-left-radius: 100px;\n  border-top-right-radius: -100px;\n  border-bottom-left-radius: 100px;\n  transform: translate(-61px, -50px);\n  position: relative;\n}\n@media screen and (max-width: 420px) {\n  .killer-apps[_ngcontent-%COMP%] {\n    padding: 50px 10px;\n  }\n\n  .date-00[_ngcontent-%COMP%] {\n    height: 75px;\n  }\n\n  .roadmap[_ngcontent-%COMP%] {\n    padding: 50px 10px;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 300px;\n    padding-left: 50px;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside[_ngcontent-%COMP%] {\n    align-self: flex-start;\n    width: 5px;\n    border: none;\n    background-color: #666;\n    height: 200px;\n    transform: none;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside1[_ngcontent-%COMP%] {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside2[_ngcontent-%COMP%] {\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside3[_ngcontent-%COMP%] {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside4[_ngcontent-%COMP%] {\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside5[_ngcontent-%COMP%] {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n  .roadmap[_ngcontent-%COMP%]   .roadmap-box[_ngcontent-%COMP%]   .roadmap-box-inside6[_ngcontent-%COMP%] {\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n  }\n\n  .date-01[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: -200px;\n    transform: translateX(-50%);\n    z-index: 11111;\n  }\n  .date-01[_ngcontent-%COMP%]::after {\n    content: \"Development & testing of Godel Hyperchip technologies Hiring full-time Chief Software and Hardware project managers Godel Alpha Digital Asset & Avatar search engine Release\";\n    position: absolute;\n    width: 150px;\n    background: #8360c3;\n    \n    \n    background: linear-gradient(to bottom, #2ebf91, #8360c3);\n    \n    border-radius: 8px;\n    color: #fff;\n    font-size: 12px;\n    line-height: 18px;\n    padding: 10px 10px;\n    left: 110px;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: \"Open Sans\", sans-serif;\n  }\n  .date-01[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    width: 5px;\n    height: 125px;\n    background-color: #666;\n    left: 50%;\n    bottom: -167%;\n    transform: translateX(-50%);\n    z-index: -1;\n  }\n\n  .date-08[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    bottom: -70px;\n    transform: translateX(-50%);\n  }\n  .date-08[_ngcontent-%COMP%]::after {\n    content: \" Debugged Botchains Core 1.1 Release Standalone Heim Mainnet Wallet Release \";\n    position: absolute;\n    width: 150px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: #8360c3;\n    \n    \n    background: linear-gradient(to bottom, #2ebf91, #8360c3);\n    \n    border-radius: 8px;\n    color: #fff;\n    font-size: 12px;\n    line-height: 18px;\n    padding: 10px 10px;\n    left: 110px;\n    font-family: \"Open Sans\", sans-serif;\n  }\n\n  .date-04[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    transform: translateX(-50%);\n    top: 0px;\n  }\n  .date-04[_ngcontent-%COMP%]::after {\n    content: \"Beta testnet of Botchains Release First batch of Godel hyperchips release\";\n    position: absolute;\n    width: 150px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: #8360c3;\n    \n    \n    background: linear-gradient(to bottom, #2ebf91, #8360c3);\n    \n    border-radius: 8px;\n    color: #fff;\n    font-size: 12px;\n    line-height: 18px;\n    padding: 10px 10px;\n    left: 110px;\n    font-family: \"Open Sans\", sans-serif;\n  }\n\n  .date-02[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    transform: translateX(-50%);\n  }\n  .date-02[_ngcontent-%COMP%]::after {\n    content: \"Selecting & rewarding grants to independent R&D labs/companies to commericalize productions and distribution of open source Godel Hyperchip and Godel-powered devices including wearable mind-machine interfaces(BMIs)\";\n    position: absolute;\n    width: 150px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: #8360c3;\n    \n    \n    background: linear-gradient(to bottom, #2ebf91, #8360c3);\n    \n    border-radius: 8px;\n    color: #fff;\n    font-size: 12px;\n    line-height: 18px;\n    padding: 10px 10px;\n    left: 110px;\n    font-family: \"Open Sans\", sans-serif;\n  }\n\n  .date-03[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    transform: translate(-50%);\n  }\n  .date-03[_ngcontent-%COMP%]::after {\n    content: \"Alpha Botchains Testnet released Botchains Foundation incorporated in Liechtenstein Announcing strategic partnerships and engagements \";\n    position: absolute;\n    width: 150px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: #8360c3;\n    \n    \n    background: linear-gradient(to bottom, #2ebf91, #8360c3);\n    \n    border-radius: 8px;\n    color: #fff;\n    font-size: 12px;\n    line-height: 18px;\n    padding: 10px 10px;\n    left: 110px;\n    font-family: \"Open Sans\", sans-serif;\n  }\n\n  .date-05[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0px;\n    transform: translate(-50%);\n  }\n  .date-05[_ngcontent-%COMP%]::after {\n    content: \" Beta testnet of Godel Engine Release Rewarding farther grants to R&D labs and qualified Botchains ecosystem developers\";\n    position: absolute;\n    width: 150px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: #8360c3;\n    \n    \n    background: linear-gradient(to bottom, #2ebf91, #8360c3);\n    \n    border-radius: 8px;\n    color: #fff;\n    font-size: 12px;\n    line-height: 18px;\n    padding: 10px 10px;\n    left: 110px;\n    font-family: \"Open Sans\", sans-serif;\n  }\n\n  .img-class[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .level_heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  header[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 20px 20px;\n    padding-bottom: 50px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: auto;\n    justify-content: space-evenly;\n  }\n  header[_ngcontent-%COMP%]   div.content_main[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding-top: 0px;\n  }\n  header[_ngcontent-%COMP%]   div.content_main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .width_modifier[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .section_box02[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n\n  .bullet_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .section_box_01[_ngcontent-%COMP%] {\n    padding: 100px 10px;\n  }\n\n  .team_sec[_ngcontent-%COMP%] {\n    padding: 50px 10px;\n  }\n\n  .team_sec[_ngcontent-%COMP%]   .team_block[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n\n  .team_sec[_ngcontent-%COMP%]   .team_block[_ngcontent-%COMP%]   .team_mem[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    padding: 50px 10px;\n    justify-content: space-around;\n  }\n\n  footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    align-items: center;\n  }\n\n  .container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%] {\n    padding: 10px;\n    padding-bottom: 50px;\n    justify-content: space-around;\n  }\n  .container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bullet_points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n  .container[_ngcontent-%COMP%]   .section_box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 250;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxocFxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtcXGJvdGNoYWlucy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1o7QURDWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ2hCO0FEQWdCO0VBQ0kscUJBQUE7QUNFcEI7QUREb0I7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNHeEI7QURGd0I7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNJNUI7QURHSTtFQUNKLE9BQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNEQTtBREtBO0VBR0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSko7QURNQTtFQUVJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtBQ0xKO0FET0E7RUFFSSxVQUFBO0FDTEo7QURPQTtFQUVJLFdBQUE7QUNMSjtBRE9BO0VBQ0ksMkNBQUE7QUNKSjtBRFFJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFD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LG9CQUFBO0lBQ0EsNkJBQUE7RUNyREo7RUR1REk7SUFDQyxnQkFBQTtFQ3JETDtFRHVESTtJQUNFLDZCQUFBO0VDckROO0VEc0RNO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VDcERWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmxvY2tjaGFpbl9iZy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG5hdntcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBEQkIzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBEQkIzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYuY29udGVudF9tYWlue1xyXG5mbGV4OiAxO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5wYWRkaW5nLXRvcDo5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGV2ZWxfaGVhZGluZ1xyXG57XHJcbiAgICAvL2ZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZScsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmxldmVsX3BhcmFcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuLndpZHRoX21vZGlmaWVyXHJcbntcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLmNvbG9yX21vZGlmaWVyXHJcbntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5zaGFkb3dfbW9kaWZpZXJ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDRweCAzcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgLnNlY3Rpb25fYm94e1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcblxyXG4gICAgIC5sZWZ0e1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4OiAxO1xyXG5wYWRkaW5nOiA1MHB4IDEwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi5idWxsZXRfcG9pbnRze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuICAgICB9XHJcbiAgICAgLnJpZ2h0e1xyXG4gICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZG93bmxvYWRfaWNvblxyXG57XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogIDVweDtcclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5jaXJjbGUge1xyXG4gICAgZmlsbDogIzgwZmZmZjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnB1bHNlLWNpcmNsZSxcclxuICAucHVsc2UtY2lyY2xlLTIge1xyXG4gICAgc3Ryb2tlOiAjODBmZmZmO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgXHJcbiAgLnB1bHNlLWNpcmNsZSB7XHJcbiAgICAgIFxyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIDFzIGN1YmljLWJlemllcigwLjM5LCAwLjU0LCAwLjQxLCAxLjUpIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnB1bHNlLWNpcmNsZS0yIHtcclxuICAgIGFuaW1hdGlvbjogcHVsc2UtMiAxLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU0LCAwLjQxLCAxLjUpIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHI6IDQ7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICByOiAxNjtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBwdWxzZS0yIHtcclxuICAgIDAlLFxyXG4gICAgNTAlIHtcclxuICAgICAgcjogNDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICByOiAxNjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbi50ZXh0LWdyYWRpZW50e1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xyXG5cdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG5cdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4gIC5zZWN0aW9uX2JveF8wMVxyXG4gIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9pbWFnZTMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDRweCAzcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwZGJiMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5zZWN0aW9uX2JveDAyXHJcbiAge1xyXG5cclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuYnVsbGV0X3R3b1xyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwe1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgXHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHRvcDo1MCU7XHJcbiAgICAgXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMERCQjM7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idWxsZXRfdHdve1xyXG4gICAgcDpudGgtY2hpbGQoMSk6OmFmdGVye1xyXG4gICAgICBjb250ZW50OicwMSc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHA6bnRoLWNoaWxkKDIpOjphZnRlcntcclxuICAgICAgY29udGVudDonMDInO1xyXG4gICAgfVxyXG5cclxuICAgIHA6bnRoLWNoaWxkKDMpOjphZnRlcntcclxuICAgICAgY29udGVudDonMDMnO1xyXG4gICAgfVxyXG5cclxuICAgIHA6bnRoLWNoaWxkKDQpOjphZnRlcntcclxuICAgICAgY29udGVudDonMDQnO1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgcDpudGgtY2hpbGQoNSk6OmFmdGVye1xyXG4gICAgICBjb250ZW50OicwNSc7XHJcbiAgICB9XHJcblxyXG4gICAgcDpudGgtY2hpbGQoNik6OmFmdGVye1xyXG4gICAgICBjb250ZW50OicwNic7XHJcbiAgICB9XHJcblxyXG4gICAgcDpudGgtY2hpbGQoNyk6OmFmdGVye1xyXG4gICAgICBjb250ZW50OicwNyc7XHJcbiAgICB9XHJcbiAgICBwOm50aC1jaGlsZCg4KTo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6JzA4JztcclxuICAgIH1cclxuICAgIHA6bnRoLWNoaWxkKDkpOjphZnRlcntcclxuICAgICAgY29udGVudDonMDknO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICBkaXZ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgYXtcclxuICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjY2NjtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwZGJiMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAudGVhbS1wcm9cclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC50ZWFtX2NhcmRcclxuICAgIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwYWRkaW5nOjIwcHggMjBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjYxQzM7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG4gICAgICAucXVhbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIC5maXJzdHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhe1xyXG4gICAgICAgIHBhZGRpbmc6MTBweCAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OEQ0O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uczgtbGlua2VkaW4tNDgucG5nKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHggMjhweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDhweCA2cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGVhbV9zZWN7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzgzNjBjMzsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIFxyXG4gXHJcbiAgICAudGVhbV9ibG9ja3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAudGVhbV9tZW17XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWctY2xhc3N7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87d2lkdGg6IDYwMHB4O1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLmRhdGUtMDBcclxue1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG4uZGF0ZS0wMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTBweDtcclxuICB0b3A6IC0xNXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAmOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdEZXZlbG9wbWVudCAmIHRlc3Rpbmcgb2YgR29kZWwgSHlwZXJjaGlwIHRlY2hub2xvZ2llcyBIaXJpbmcgZnVsbC10aW1lIENoaWVmIFNvZnR3YXJlIGFuZCBIYXJkd2FyZSBwcm9qZWN0IG1hbmFnZXJzIEdvZGVsIEFscGhhIERpZ2l0YWwgQXNzZXQgJiBBdmF0YXIgc2VhcmNoIGVuZ2luZSBSZWxlYXNlJztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdG9wOiAtMTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG59XHJcbi5kYXRlLTAye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICAmOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdTZWxlY3RpbmcgJiByZXdhcmRpbmcgZ3JhbnRzIHRvIGluZGVwZW5kZW50IFImRCBsYWJzL2NvbXBhbmllcyB0byBjb21tZXJpY2FsaXplIHByb2R1Y3Rpb25zIGFuZCBkaXN0cmlidXRpb24gb2Ygb3BlbiBzb3VyY2UgR29kZWwgSHlwZXJjaGlwIGFuZCBHb2RlbC1wb3dlcmVkIGRldmljZXMgaW5jbHVkaW5nIHdlYXJhYmxlIG1pbmQtbWFjaGluZSBpbnRlcmZhY2VzKEJNSXMpJztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGxlZnQ6IDExMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG4uZGF0ZS0wM3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMjAlKTtcclxuICAmOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdBbHBoYSBCb3RjaGFpbnMgVGVzdG5ldCByZWxlYXNlZCBCb3RjaGFpbnMgRm91bmRhdGlvbiBpbmNvcnBvcmF0ZWQgaW4gTGllY2h0ZW5zdGVpbiBBbm5vdW5jaW5nIHN0cmF0ZWdpYyBwYXJ0bmVyc2hpcHMgYW5kIGVuZ2FnZW1lbnRzICc7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzgzNjBjMzsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBsZWZ0OiAtMjAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcbi5kYXRlLTA0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG4gIHRvcDogMTVweDtcclxuICAmOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdCZXRhIHRlc3RuZXQgb2YgQm90Y2hhaW5zIFJlbGVhc2UgRmlyc3QgYmF0Y2ggb2YgR29kZWwgaHlwZXJjaGlwcyByZWxlYXNlJztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIHJpZ2h0OiAtMjAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmRhdGUtMDV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDIwJSk7XHJcbiAgJjo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnIEJldGEgdGVzdG5ldCBvZiBHb2RlbCBFbmdpbmUgUmVsZWFzZSBSZXdhcmRpbmcgZmFydGhlciBncmFudHMgdG8gUiZEIGxhYnMgYW5kIHF1YWxpZmllZCBCb3RjaGFpbnMgZWNvc3lzdGVtIGRldmVsb3BlcnMnO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6ICM4MzYwYzM7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbGVmdDogLTIwMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmRhdGUtMDZcclxue1xyXG4gICY6OmFmdGVye1xyXG4gICAgY29udGVudDogJ0JvdGNoYWlucyBDb3JlIDEuMCBSZWxlYXNlIERyaXZlY2hhaW5zIGludGVyZmFjZSByZWxlYXNlZCBmb3IgbGVnYWN5IGJsb2NrY2hhaW5zICc7XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0ZS0wN1xyXG57XHJcbiAgJjo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnIEZ1bGx5IGZ1bmN0aW9uYWwgR29kZWwgZW5naW5lIHJlbGVhc2VkICBEZWNlbnRyYWxpemVkIGRpc3RyaWJ1dGlvbiBvZiBzZWNvbmQgYmF0Y2ggb2YgR29kZWwgaHlwZXJjaGlwcyAnO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5kYXRlLTA4e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTBweDtcclxuICBib3R0b206IC0xNXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICY6OmFmdGVye1xyXG4gICAgY29udGVudDogJyBEZWJ1Z2dlZCBCb3RjaGFpbnMgQ29yZSAxLjEgUmVsZWFzZSBTdGFuZGFsb25lIEhlaW0gTWFpbm5ldCBXYWxsZXQgUmVsZWFzZSAnO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3R0b206IC03MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzgzNjBjMzsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5raWxsZXItYXBwc1xyXG57XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuLmtpbGxlci1wb2ludHNcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAucHVsc2UtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogIzAwMDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxufVxyXG4ucm9hZG1hcFxyXG57XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC5yb2FkbWFwLWJveFxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMjAwcHggYXV0bztcclxuICAgIC5yb2FkbWFwLWJveC1pbnNpZGVcclxuICAgIHtcclxuICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLnJvYWRtYXAtYm94LWluc2lkZTFcclxuICAgIHtcclxuICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzY2NjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICM2NjY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzY2NjtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5yb2FkbWFwLWJveC1pbnNpZGUyXHJcbiAgICB7XHJcbiAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjNjY2O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICM2NjY7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICM2NjY7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLTEwMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwcHgsIC0xMHB4KTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnJvYWRtYXAtYm94LWluc2lkZTNcclxuICAgIHtcclxuICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgIzY2NjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICM2NjY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzY2NjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5yb2FkbWFwLWJveC1pbnNpZGU0XHJcbiAgICB7XHJcbiAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICAjNjY2O1xyXG4gICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAgIzY2NjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAgIzY2NjtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03M3B4LCAtMzBweCk7XHJcbiAgICB9XHJcbiAgICAucm9hZG1hcC1ib3gtaW5zaWRlNVxyXG4gICAge1xyXG4gICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAgIzY2NjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICAjNjY2O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICAjNjY2O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNDBweCk7XHJcblxyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnJvYWRtYXAtYm94LWluc2lkZTZcclxuICAgIHtcclxuICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICAjNjY2O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICAjNjY2O1xyXG4gICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAgIzY2NjtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAtMTAwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjFweCwgLTUwcHgpO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyMHB4KXtcclxuXHJcblxyXG4gIC5raWxsZXItYXBwc1xyXG4gIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMTBweDtcclxuICB9XHJcblxyXG4gIC5kYXRlLTAwXHJcbiAge1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gIH1cclxuXHJcbiAgLnJvYWRtYXBcclxuICB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgICAucm9hZG1hcC1ib3hcclxuICAgIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgIC5yb2FkbWFwLWJveC1pbnNpZGVcclxuICAgICAge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgd2lkdGg6NXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9hZG1hcC1ib3gtaW5zaWRlMVxyXG4gICAgICB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb2FkbWFwLWJveC1pbnNpZGUyXHJcbiAgICAgIHtcclxuICAgICAgIFxyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9hZG1hcC1ib3gtaW5zaWRlM1xyXG4gICAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJvYWRtYXAtYm94LWluc2lkZTRcclxuICAgICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAucm9hZG1hcC1ib3gtaW5zaWRlNVxyXG4gICAgICB7XHJcbiAgICAgIFxyXG4gIFxyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb2FkbWFwLWJveC1pbnNpZGU2XHJcbiAgICAgIHtcclxuXHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuZGF0ZS0wMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogLTIwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgei1pbmRleDogMTExMTE7XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgY29udGVudDogJ0RldmVsb3BtZW50ICYgdGVzdGluZyBvZiBHb2RlbCBIeXBlcmNoaXAgdGVjaG5vbG9naWVzIEhpcmluZyBmdWxsLXRpbWUgQ2hpZWYgU29mdHdhcmUgYW5kIEhhcmR3YXJlIHByb2plY3QgbWFuYWdlcnMgR29kZWwgQWxwaGEgRGlnaXRhbCBBc3NldCAmIEF2YXRhciBzZWFyY2ggZW5naW5lIFJlbGVhc2UnO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMTBweDtcclxuICAgICAgdG9wOjUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgYm90dG9tOiAtMTY3JTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcblxyXG4gIC5kYXRlLTA4e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAtNzBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICY6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnIERlYnVnZ2VkIEJvdGNoYWlucyBDb3JlIDEuMSBSZWxlYXNlIFN0YW5kYWxvbmUgSGVpbSBNYWlubmV0IFdhbGxldCBSZWxlYXNlICc7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIHRvcDo1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgYmFja2dyb3VuZDogIzgzNjBjMzsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgbGVmdDogMTEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG5cclxuICAuZGF0ZS0wNHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICdCZXRhIHRlc3RuZXQgb2YgQm90Y2hhaW5zIFJlbGVhc2UgRmlyc3QgYmF0Y2ggb2YgR29kZWwgaHlwZXJjaGlwcyByZWxlYXNlJztcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgYmFja2dyb3VuZDogIzgzNjBjMzsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgbGVmdDogMTEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIC5kYXRlLTAye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgY29udGVudDogJ1NlbGVjdGluZyAmIHJld2FyZGluZyBncmFudHMgdG8gaW5kZXBlbmRlbnQgUiZEIGxhYnMvY29tcGFuaWVzIHRvIGNvbW1lcmljYWxpemUgcHJvZHVjdGlvbnMgYW5kIGRpc3RyaWJ1dGlvbiBvZiBvcGVuIHNvdXJjZSBHb2RlbCBIeXBlcmNoaXAgYW5kIEdvZGVsLXBvd2VyZWQgZGV2aWNlcyBpbmNsdWRpbmcgd2VhcmFibGUgbWluZC1tYWNoaW5lIGludGVyZmFjZXMoQk1JcyknO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5kYXRlLTAze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICdBbHBoYSBCb3RjaGFpbnMgVGVzdG5ldCByZWxlYXNlZCBCb3RjaGFpbnMgRm91bmRhdGlvbiBpbmNvcnBvcmF0ZWQgaW4gTGllY2h0ZW5zdGVpbiBBbm5vdW5jaW5nIHN0cmF0ZWdpYyBwYXJ0bmVyc2hpcHMgYW5kIGVuZ2FnZW1lbnRzICc7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4MzYwYzM7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgIGxlZnQ6IDExMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRhdGUtMDV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgICY6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnIEJldGEgdGVzdG5ldCBvZiBHb2RlbCBFbmdpbmUgUmVsZWFzZSBSZXdhcmRpbmcgZmFydGhlciBncmFudHMgdG8gUiZEIGxhYnMgYW5kIHF1YWxpZmllZCBCb3RjaGFpbnMgZWNvc3lzdGVtIGRldmVsb3BlcnMnO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjODM2MGMzOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICBsZWZ0OiAxMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5pbWctY2xhc3N7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC5sZXZlbF9oZWFkaW5nXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBoZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIG5hdntcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBkaXYuY29udGVudF9tYWlue1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLndpZHRoX21vZGlmaWVyXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5zZWN0aW9uX2JveDAyIHtcclxuXHJcbiAgcGFkZGluZzogNTBweCAyMHB4O1xyXG59XHJcbi5idWxsZXRfdHdvIHAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnNlY3Rpb25fYm94XzAxIHtcclxuICBwYWRkaW5nOjEwMHB4IDEwcHg7XHJcbn1cclxuLnRlYW1fc2VjIHtcclxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbn1cclxuLnRlYW1fc2VjIC50ZWFtX2Jsb2NrIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi50ZWFtX3NlYyAudGVhbV9ibG9jayAudGVhbV9tZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuZm9vdGVyIGRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgLnNlY3Rpb25fYm94e1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAubGVmdCAgLmJ1bGxldF9wb2ludHMgcHtcclxuICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnJpZ2h0e1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcbn0iLCJoZWFkZXIge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9ibG9ja2NoYWluX2JnLmpwZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDBweCA1MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciBuYXYge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciBuYXYgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjBweDtcbn1cbmhlYWRlciBuYXYgZGl2IHVsIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgbmF2IGRpdiB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbmhlYWRlciBuYXYgZGl2IHVsIGxpIGEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGNvbG9yOiAjMDBEQkIzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbmhlYWRlciBuYXYgZGl2IHVsIGxpIGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMwMERCQjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuaGVhZGVyIGRpdi5jb250ZW50X21haW4ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogOTBweDtcbn1cblxuLmxldmVsX2hlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJQb2lyZXQgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sZXZlbF9wYXJhIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4ud2lkdGhfbW9kaWZpZXIge1xuICB3aWR0aDogNjAlO1xufVxuXG4uY29sb3JfbW9kaWZpZXIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNoYWRvd19tb2RpZmllciB7XG4gIHRleHQtc2hhZG93OiAycHggNHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5jb250YWluZXIgLnNlY3Rpb25fYm94IHtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjODM2MGMzO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG4uY29udGFpbmVyIC5zZWN0aW9uX2JveCAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDUwcHggMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLnNlY3Rpb25fYm94IC5sZWZ0IC5idWxsZXRfcG9pbnRzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb25fYm94IC5sZWZ0IC5idWxsZXRfcG9pbnRzIHAge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uX2JveCAubGVmdCAuYnVsbGV0X3BvaW50cyBwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uX2JveCAucmlnaHQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbl9ib3ggLnJpZ2h0IGltZyB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5kb3dubG9hZF9pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5kb3dubG9hZF9pY29uIGltZyB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuY2lyY2xlIHtcbiAgZmlsbDogIzgwZmZmZjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4ucHVsc2UtY2lyY2xlLFxuLnB1bHNlLWNpcmNsZS0yIHtcbiAgc3Ryb2tlOiAjODBmZmZmO1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgZmlsbDogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLnB1bHNlLWNpcmNsZSB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMS41cyAxcyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NCwgMC40MSwgMS41KSBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5wdWxzZS1jaXJjbGUtMiB7XG4gIGFuaW1hdGlvbjogcHVsc2UtMiAxLjVzIGN1YmljLWJlemllcigwLjM5LCAwLjU0LCAwLjQxLCAxLjUpIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICByOiA0O1xuICB9XG4gIDUwJSB7XG4gICAgcjogMTY7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHVsc2UtMiB7XG4gIDAlLCA1MCUge1xuICAgIHI6IDQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgcjogMTY7XG4gIH1cbn1cbi50ZXh0LWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWN0aW9uX2JveF8wMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ltYWdlMy5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiAxMDBweCA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uc2VjdGlvbl9ib3hfMDEgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMnB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2VjdGlvbl9ib3hfMDEgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBkYmIzO1xufVxuXG4uc2VjdGlvbl9ib3gwMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5idWxsZXRfdHdvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5idWxsZXRfdHdvIHAge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1bGxldF90d28gcDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiUGF0dWEgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwREJCMztcbn1cblxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoMSk6OmFmdGVyIHtcbiAgY29udGVudDogXCIwMVwiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoMik6OmFmdGVyIHtcbiAgY29udGVudDogXCIwMlwiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgY29udGVudDogXCIwM1wiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoNCk6OmFmdGVyIHtcbiAgY29udGVudDogXCIwNFwiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoNSk6OmFmdGVyIHtcbiAgY29udGVudDogXCIwNVwiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoNik6OmFmdGVyIHtcbiAgY29udGVudDogXCIwNlwiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoNyk6OmFmdGVyIHtcbiAgY29udGVudDogXCIwN1wiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoOCk6OmFmdGVyIHtcbiAgY29udGVudDogXCIwOFwiO1xufVxuLmJ1bGxldF90d28gcDpudGgtY2hpbGQoOSk6OmFmdGVyIHtcbiAgY29udGVudDogXCIwOVwiO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNTBweDtcbn1cbmZvb3RlciBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2MHB4O1xufVxuZm9vdGVyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmZvb3RlciBkaXYgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2NjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDBkYmIzO1xufVxuXG4udGVhbS1wcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4udGVhbS1wcm8gLnRlYW1fY2FyZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGVhbS1wcm8gLnRlYW1fY2FyZCBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udGVhbS1wcm8gLnRlYW1fY2FyZCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgyNjFDMztcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi50ZWFtLXBybyAudGVhbV9jYXJkIC5xdWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udGVhbS1wcm8gLnRlYW1fY2FyZCAucXVhbCAuZmlyc3Qge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRlYW0tcHJvIC50ZWFtX2NhcmQgLnF1YWwgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMztcbn1cbi50ZWFtLXBybyAudGVhbV9jYXJkIGEge1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc4RDQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb25zOC1saW5rZWRpbi00OC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI4cHggMjhweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOHB4IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbn1cbi50ZWFtLXBybyAudGVhbV9jYXJkIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi50ZWFtX3NlYyB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICM4MzYwYzM7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cbi50ZWFtX3NlYyAudGVhbV9ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogNTBweCAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRlYW1fc2VjIC50ZWFtX2Jsb2NrIC50ZWFtX21lbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLnRlYW1fc2VjIC50ZWFtX2Jsb2NrIC50ZWFtX21lbSBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4udGVhbV9zZWMgLnRlYW1fYmxvY2sgLnRlYW1fbWVtIHAge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaW1nLWNsYXNzIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA2MDBweDtcbn1cbi5pbWctY2xhc3MgaW1nIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5kYXRlLTAwIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kYXRlLTAwIHAge1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5kYXRlLTAxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MHB4O1xuICB0b3A6IC0xNXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uZGF0ZS0wMTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkRldmVsb3BtZW50ICYgdGVzdGluZyBvZiBHb2RlbCBIeXBlcmNoaXAgdGVjaG5vbG9naWVzIEhpcmluZyBmdWxsLXRpbWUgQ2hpZWYgU29mdHdhcmUgYW5kIEhhcmR3YXJlIHByb2plY3QgbWFuYWdlcnMgR29kZWwgQWxwaGEgRGlnaXRhbCBBc3NldCAmIEF2YXRhciBzZWFyY2ggZW5naW5lIFJlbGVhc2VcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIHRvcDogLTExMHB4O1xuICBiYWNrZ3JvdW5kOiAjODM2MGMzO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uZGF0ZS0wMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG59XG4uZGF0ZS0wMjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlNlbGVjdGluZyAmIHJld2FyZGluZyBncmFudHMgdG8gaW5kZXBlbmRlbnQgUiZEIGxhYnMvY29tcGFuaWVzIHRvIGNvbW1lcmljYWxpemUgcHJvZHVjdGlvbnMgYW5kIGRpc3RyaWJ1dGlvbiBvZiBvcGVuIHNvdXJjZSBHb2RlbCBIeXBlcmNoaXAgYW5kIEdvZGVsLXBvd2VyZWQgZGV2aWNlcyBpbmNsdWRpbmcgd2VhcmFibGUgbWluZC1tYWNoaW5lIGludGVyZmFjZXMoQk1JcylcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6ICM4MzYwYzM7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBsZWZ0OiAxMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5kYXRlLTAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7XG59XG4uZGF0ZS0wMzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkFscGhhIEJvdGNoYWlucyBUZXN0bmV0IHJlbGVhc2VkIEJvdGNoYWlucyBGb3VuZGF0aW9uIGluY29ycG9yYXRlZCBpbiBMaWVjaHRlbnN0ZWluIEFubm91bmNpbmcgc3RyYXRlZ2ljIHBhcnRuZXJzaGlwcyBhbmQgZW5nYWdlbWVudHMgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kOiAjODM2MGMzO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbGVmdDogLTIwMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmRhdGUtMDQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB0b3A6IDE1cHg7XG59XG4uZGF0ZS0wNDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkJldGEgdGVzdG5ldCBvZiBCb3RjaGFpbnMgUmVsZWFzZSBGaXJzdCBiYXRjaCBvZiBHb2RlbCBoeXBlcmNoaXBzIHJlbGVhc2VcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6ICM4MzYwYzM7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICByaWdodDogLTIwMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmRhdGUtMDUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTtcbn1cbi5kYXRlLTA1OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIEJldGEgdGVzdG5ldCBvZiBHb2RlbCBFbmdpbmUgUmVsZWFzZSBSZXdhcmRpbmcgZmFydGhlciBncmFudHMgdG8gUiZEIGxhYnMgYW5kIHF1YWxpZmllZCBCb3RjaGFpbnMgZWNvc3lzdGVtIGRldmVsb3BlcnNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6ICM4MzYwYzM7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBsZWZ0OiAtMjAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uZGF0ZS0wNjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkJvdGNoYWlucyBDb3JlIDEuMCBSZWxlYXNlIERyaXZlY2hhaW5zIGludGVyZmFjZSByZWxlYXNlZCBmb3IgbGVnYWN5IGJsb2NrY2hhaW5zIFwiO1xufVxuXG4uZGF0ZS0wNzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBGdWxseSBmdW5jdGlvbmFsIEdvZGVsIGVuZ2luZSByZWxlYXNlZCAgRGVjZW50cmFsaXplZCBkaXN0cmlidXRpb24gb2Ygc2Vjb25kIGJhdGNoIG9mIEdvZGVsIGh5cGVyY2hpcHMgXCI7XG59XG5cbi5kYXRlLTA4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiAtMTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG4uZGF0ZS0wODo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBEZWJ1Z2dlZCBCb3RjaGFpbnMgQ29yZSAxLjEgUmVsZWFzZSBTdGFuZGFsb25lIEhlaW0gTWFpbm5ldCBXYWxsZXQgUmVsZWFzZSBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvdHRvbTogLTcwcHg7XG4gIGJhY2tncm91bmQ6ICM4MzYwYzM7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5raWxsZXItYXBwcyB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICM4MzYwYzM7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbn1cblxuLmtpbGxlci1wb2ludHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ua2lsbGVyLXBvaW50cyBwIHtcbiAgZmxleDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4ua2lsbGVyLXBvaW50cyAucHVsc2UtY2lyY2xlIHtcbiAgc3Ryb2tlOiAjMDAwO1xufVxuXG4ucm9hZG1hcCB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucm9hZG1hcCAucm9hZG1hcC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDIwMHB4IGF1dG87XG59XG4ucm9hZG1hcCAucm9hZG1hcC1ib3ggLnJvYWRtYXAtYm94LWluc2lkZSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4ucm9hZG1hcCAucm9hZG1hcC1ib3ggLnJvYWRtYXAtYm94LWluc2lkZTEge1xuICB3aWR0aDogNTAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzY2NjtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICM2NjY7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgIzY2NjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yb2FkbWFwIC5yb2FkbWFwLWJveCAucm9hZG1hcC1ib3gtaW5zaWRlMiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjNjY2O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICM2NjY7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICM2NjY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLTEwMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwcHgsIC0xMHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJvYWRtYXAgLnJvYWRtYXAtYm94IC5yb2FkbWFwLWJveC1pbnNpZGUzIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM2NjY7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjNjY2O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucm9hZG1hcCAucm9hZG1hcC1ib3ggLnJvYWRtYXAtYm94LWluc2lkZTQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzY2NjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzY2NjtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjNjY2O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTczcHgsIC0zMHB4KTtcbn1cbi5yb2FkbWFwIC5yb2FkbWFwLWJveCAucm9hZG1hcC1ib3gtaW5zaWRlNSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjNjY2O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzY2NjtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjNjY2O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNDBweCk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucm9hZG1hcCAucm9hZG1hcC1ib3ggLnJvYWRtYXAtYm94LWluc2lkZTYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzY2NjtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjNjY2O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjNjY2O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC0xMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MXB4LCAtNTBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmtpbGxlci1hcHBzIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gIH1cblxuICAuZGF0ZS0wMCB7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICB9XG5cbiAgLnJvYWRtYXAge1xuICAgIHBhZGRpbmc6IDUwcHggMTBweDtcbiAgfVxuICAucm9hZG1hcCAucm9hZG1hcC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgfVxuICAucm9hZG1hcCAucm9hZG1hcC1ib3ggLnJvYWRtYXAtYm94LWluc2lkZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5yb2FkbWFwIC5yb2FkbWFwLWJveCAucm9hZG1hcC1ib3gtaW5zaWRlMSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICB9XG4gIC5yb2FkbWFwIC5yb2FkbWFwLWJveCAucm9hZG1hcC1ib3gtaW5zaWRlMiB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICB9XG4gIC5yb2FkbWFwIC5yb2FkbWFwLWJveCAucm9hZG1hcC1ib3gtaW5zaWRlMyB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICB9XG4gIC5yb2FkbWFwIC5yb2FkbWFwLWJveCAucm9hZG1hcC1ib3gtaW5zaWRlNCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgfVxuICAucm9hZG1hcCAucm9hZG1hcC1ib3ggLnJvYWRtYXAtYm94LWluc2lkZTUge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgfVxuICAucm9hZG1hcCAucm9hZG1hcC1ib3ggLnJvYWRtYXAtYm94LWluc2lkZTYge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIC5kYXRlLTAxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogLTIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB6LWluZGV4OiAxMTExMTtcbiAgfVxuICAuZGF0ZS0wMTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiRGV2ZWxvcG1lbnQgJiB0ZXN0aW5nIG9mIEdvZGVsIEh5cGVyY2hpcCB0ZWNobm9sb2dpZXMgSGlyaW5nIGZ1bGwtdGltZSBDaGllZiBTb2Z0d2FyZSBhbmQgSGFyZHdhcmUgcHJvamVjdCBtYW5hZ2VycyBHb2RlbCBBbHBoYSBEaWdpdGFsIEFzc2V0ICYgQXZhdGFyIHNlYXJjaCBlbmdpbmUgUmVsZWFzZVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZDogIzgzNjBjMztcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBsZWZ0OiAxMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmRhdGUtMDE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogLTE2NyU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgLmRhdGUtMDgge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm90dG9tOiAtNzBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbiAgLmRhdGUtMDg6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBEZWJ1Z2dlZCBCb3RjaGFpbnMgQ29yZSAxLjEgUmVsZWFzZSBTdGFuZGFsb25lIEhlaW0gTWFpbm5ldCBXYWxsZXQgUmVsZWFzZSBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjODM2MGMzO1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gICAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGxlZnQ6IDExMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLmRhdGUtMDQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRvcDogMHB4O1xuICB9XG4gIC5kYXRlLTA0OjphZnRlciB7XG4gICAgY29udGVudDogXCJCZXRhIHRlc3RuZXQgb2YgQm90Y2hhaW5zIFJlbGVhc2UgRmlyc3QgYmF0Y2ggb2YgR29kZWwgaHlwZXJjaGlwcyByZWxlYXNlXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzgzNjBjMztcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBsZWZ0OiAxMTBweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5kYXRlLTAyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICAuZGF0ZS0wMjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiU2VsZWN0aW5nICYgcmV3YXJkaW5nIGdyYW50cyB0byBpbmRlcGVuZGVudCBSJkQgbGFicy9jb21wYW5pZXMgdG8gY29tbWVyaWNhbGl6ZSBwcm9kdWN0aW9ucyBhbmQgZGlzdHJpYnV0aW9uIG9mIG9wZW4gc291cmNlIEdvZGVsIEh5cGVyY2hpcCBhbmQgR29kZWwtcG93ZXJlZCBkZXZpY2VzIGluY2x1ZGluZyB3ZWFyYWJsZSBtaW5kLW1hY2hpbmUgaW50ZXJmYWNlcyhCTUlzKVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQ6ICM4MzYwYzM7XG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgbGVmdDogMTEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuZGF0ZS0wMyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgfVxuICAuZGF0ZS0wMzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiQWxwaGEgQm90Y2hhaW5zIFRlc3RuZXQgcmVsZWFzZWQgQm90Y2hhaW5zIEZvdW5kYXRpb24gaW5jb3Jwb3JhdGVkIGluIExpZWNodGVuc3RlaW4gQW5ub3VuY2luZyBzdHJhdGVnaWMgcGFydG5lcnNoaXBzIGFuZCBlbmdhZ2VtZW50cyBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjODM2MGMzO1xuICAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJlYmY5MSwgIzgzNjBjMyk7XG4gICAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGxlZnQ6IDExMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLmRhdGUtMDUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIH1cbiAgLmRhdGUtMDU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBCZXRhIHRlc3RuZXQgb2YgR29kZWwgRW5naW5lIFJlbGVhc2UgUmV3YXJkaW5nIGZhcnRoZXIgZ3JhbnRzIHRvIFImRCBsYWJzIGFuZCBxdWFsaWZpZWQgQm90Y2hhaW5zIGVjb3N5c3RlbSBkZXZlbG9wZXJzXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogIzgzNjBjMztcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmViZjkxLCAjODM2MGMzKTtcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZWJmOTEsICM4MzYwYzMpO1xuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBsZWZ0OiAxMTBweDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5pbWctY2xhc3Mge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5sZXZlbF9oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbiAgaGVhZGVyIG5hdiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIGhlYWRlciBuYXYgZGl2IHVsIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbiAgaGVhZGVyIGRpdi5jb250ZW50X21haW4ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICBoZWFkZXIgZGl2LmNvbnRlbnRfbWFpbiBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLndpZHRoX21vZGlmaWVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zZWN0aW9uX2JveDAyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gIH1cblxuICAuYnVsbGV0X3R3byBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLnNlY3Rpb25fYm94XzAxIHtcbiAgICBwYWRkaW5nOiAxMDBweCAxMHB4O1xuICB9XG5cbiAgLnRlYW1fc2VjIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gIH1cblxuICAudGVhbV9zZWMgLnRlYW1fYmxvY2sge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAudGVhbV9zZWMgLnRlYW1fYmxvY2sgLnRlYW1fbWVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cblxuICBmb290ZXIgZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGFpbmVyIC5zZWN0aW9uX2JveCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAuY29udGFpbmVyIC5zZWN0aW9uX2JveCAubGVmdCAuYnVsbGV0X3BvaW50cyBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5jb250YWluZXIgLnNlY3Rpb25fYm94IC5yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmNvbnRhaW5lciAuc2VjdGlvbl9ib3ggLnJpZ2h0IGltZyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjUwO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\hp\OneDrive\Desktop\work\botchains\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map