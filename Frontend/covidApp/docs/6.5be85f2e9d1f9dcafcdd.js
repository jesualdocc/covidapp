(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{uHdG:function(t,e,a){"use strict";a.r(e),a.d(e,"ReportsModule",(function(){return _}));var i=a("Dh3D"),c=a("M9IT"),n=a("ofXK"),s=a("tyNb"),o=a("fXoL"),r=a("EnSQ"),d=a("wZkO"),l=a("+0xr"),b=a("XNvx"),h=a("Xa2L");function u(t,e){1&t&&(o.Rb(0,"div",2),o.Mb(1,"mat-spinner"),o.Qb())}function f(t,e){1&t&&(o.Rb(0,"th",13),o.zc(1," Date "),o.Qb())}function m(t,e){if(1&t&&(o.Rb(0,"td",14),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.date," ")}}function p(t,e){1&t&&(o.Rb(0,"th",13),o.zc(1," Cases "),o.Qb())}function g(t,e){if(1&t&&(o.Rb(0,"td",14),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.cases," ")}}function v(t,e){1&t&&(o.Rb(0,"th",13),o.zc(1," Deaths "),o.Qb())}function y(t,e){if(1&t&&(o.Rb(0,"td",14),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.deaths," ")}}function w(t,e){1&t&&o.Mb(0,"tr",15)}function D(t,e){1&t&&o.Mb(0,"tr",16)}const R=function(){return[7,30,60]};function C(t,e){if(1&t&&(o.Rb(0,"div"),o.Rb(1,"div",3),o.Rb(2,"table",4),o.Pb(3,5),o.yc(4,f,2,0,"th",6),o.yc(5,m,2,1,"td",7),o.Ob(),o.Pb(6,8),o.yc(7,p,2,0,"th",6),o.yc(8,g,2,1,"td",7),o.Ob(),o.Pb(9,9),o.yc(10,v,2,0,"th",6),o.yc(11,y,2,1,"td",7),o.Ob(),o.yc(12,w,1,0,"tr",10),o.yc(13,D,1,0,"tr",11),o.Qb(),o.Mb(14,"mat-paginator",12),o.Qb(),o.Qb()),2&t){const t=o.dc();o.Ab(2),o.ic("dataSource",t.dataSource),o.Ab(10),o.ic("matHeaderRowDef",t.displayedColumns),o.Ab(1),o.ic("matRowDefColumns",t.displayedColumns),o.Ab(1),o.ic("pageSizeOptions",o.jc(4,R))}}let S=(()=>{class t{constructor(t,e){this.dataService=t,this.loginService=e,this.displayedColumns=["date","cases","deaths"],this.loading=!1,this.requestData(60)}ngAfterViewInit(){}highlightRow(t){this.selectedName=t.date}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}requestData(t){this.loading=!0;var e=this.loginService.user;e.days=t,this.dataService.getCovidData(e).subscribe(t=>{this.data=t.body.data},t=>{},()=>{var t=this.formatData(this.data);this.dataSource=new l.k(t),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.loading=!1})}formatData(t){var e=[];return Object.keys(t).forEach((function(a){var i={cases:0,date:"",deaths:0},c=t[a];c.date=a,i.cases=c.cases,i.deaths=c.deaths,i.date=c.date,e.push(i)})),e.sort((t,e)=>{var a=new Date(t.date),i=new Date(e.date);return a>i?-1:a<i?1:0}),e}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a),o.Lb(b.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-covidtable"]],viewQuery:function(t,e){var a;1&t&&(o.Cc(c.a,!0),o.Cc(i.a,!0)),2&t&&(o.nc(a=o.ac())&&(e.paginator=a.first),o.nc(a=o.ac())&&(e.sort=a.first))},decls:2,vars:2,consts:[["class","centerVH",4,"ngIf"],[4,"ngIf"],[1,"centerVH"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cases"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.yc(0,u,2,0,"div",0),o.yc(1,C,15,5,"div",1)),2&t&&(o.ic("ngIf",e.loading),o.Ab(1),o.ic("ngIf",!e.loading))},directives:[n.k,h.b,l.j,i.a,l.c,l.e,l.b,l.g,l.i,c.a,l.d,i.b,l.a,l.f,l.h],styles:[".titleDiv[_ngcontent-%COMP%]{align-items:center}table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.centerVH[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 20px)}"]}),t})();var Q=a("mrSG");function O(t,e){1&t&&(o.Rb(0,"div",2),o.Mb(1,"mat-spinner"),o.Qb())}function z(t,e){1&t&&(o.Rb(0,"th",13),o.zc(1," Date "),o.Qb())}function M(t,e){if(1&t&&(o.Rb(0,"td",14),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.date," ")}}function A(t,e){1&t&&(o.Rb(0,"th",13),o.zc(1," Cases "),o.Qb())}function P(t,e){if(1&t&&(o.Rb(0,"td",14),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.cases," ")}}function H(t,e){1&t&&(o.Rb(0,"th",13),o.zc(1," Deaths "),o.Qb())}function I(t,e){if(1&t&&(o.Rb(0,"td",14),o.zc(1),o.Qb()),2&t){const t=e.$implicit;o.Ab(1),o.Bc(" ",t.deaths," ")}}function L(t,e){1&t&&o.Mb(0,"tr",15)}function j(t,e){1&t&&o.Mb(0,"tr",16)}const k=function(){return[10,20]};function x(t,e){if(1&t&&(o.Rb(0,"div"),o.Rb(1,"div",3),o.Rb(2,"table",4),o.Pb(3,5),o.yc(4,z,2,0,"th",6),o.yc(5,M,2,1,"td",7),o.Ob(),o.Pb(6,8),o.yc(7,A,2,0,"th",6),o.yc(8,P,2,1,"td",7),o.Ob(),o.Pb(9,9),o.yc(10,H,2,0,"th",6),o.yc(11,I,2,1,"td",7),o.Ob(),o.yc(12,L,1,0,"tr",10),o.yc(13,j,1,0,"tr",11),o.Qb(),o.Mb(14,"mat-paginator",12),o.Qb(),o.Qb()),2&t){const t=o.dc();o.Ab(2),o.ic("dataSource",t.dataSource),o.Ab(10),o.ic("matHeaderRowDef",t.displayedColumns),o.Ab(1),o.ic("matRowDefColumns",t.displayedColumns),o.Ab(1),o.ic("pageSizeOptions",o.jc(4,k))}}let B=(()=>{class t{constructor(t){this.dataService=t,this.displayedColumns=["date","cases","deaths"],this.loading=!1,this.requestData()}highlightRow(t){this.selectedName=t.date}requestData(){return Object(Q.a)(this,void 0,void 0,(function*(){this.loading=!0;var t=yield this.dataService.getPredictions().toPromise().then(t=>t.body),e=this.formatData(t);this.dataSource=new l.k(e),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.loading=!1}))}formatData(t){var e=[],a=t.cases,i=t.deaths,c=t.days;for(let o=0;o<c;o++){var n={cases:0,date:"",deaths:0},s=new Date;s.setDate(s.getDate()+1+o),n.cases=a[o],n.deaths=i[o],n.date=s.toLocaleDateString(),e.push(n)}return e}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-covidpredictions"]],viewQuery:function(t,e){var a;1&t&&(o.Cc(c.a,!0),o.Cc(i.a,!0)),2&t&&(o.nc(a=o.ac())&&(e.paginator=a.first),o.nc(a=o.ac())&&(e.sort=a.first))},decls:2,vars:2,consts:[["class","centerVH",4,"ngIf"],[4,"ngIf"],[1,"centerVH"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cases"],["matColumnDef","deaths"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(o.yc(0,O,2,0,"div",0),o.yc(1,x,15,5,"div",1)),2&t&&(o.ic("ngIf",e.loading),o.Ab(1),o.ic("ngIf",!e.loading))},directives:[n.k,h.b,l.j,i.a,l.c,l.e,l.b,l.g,l.i,c.a,l.d,i.b,l.a,l.f,l.h],styles:["table.mat-table[_ngcontent-%COMP%]{display:table;width:100%;table-layout:fixed}.centerVH[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 20px)}"]}),t})(),V=(()=>{class t{constructor(t){this.dataService=t,this.title="Reports",this.dataService.changePageTitle(this.title)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-reports"]],decls:5,vars:0,consts:[["mat-align-tabs","center"],["label","Covid Records"],["label","Covid Predictions"]],template:function(t,e){1&t&&(o.Rb(0,"mat-tab-group",0),o.Rb(1,"mat-tab",1),o.Mb(2,"app-covidtable"),o.Qb(),o.Rb(3,"mat-tab",2),o.Mb(4,"app-covidpredictions"),o.Qb(),o.Qb())},directives:[d.b,d.a,S,B],styles:[""]}),t})();var F=a("kmnG");const $=[{path:"",component:V}];let _=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[n.c,d.c,l.l,F.d,c.b,h.a,i.c,s.f.forChild($)],s.f]}),t})()}}]);