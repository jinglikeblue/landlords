//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.OverrideBase
         * @classdesc
         * OverrideBase 类是视图状态所用的 override 类的基类。
         * @extends egret.HashObject
         * @implements egret.gui.IOverride
         */
        var OverrideBase = (function (_super) {
            __extends(OverrideBase, _super);
            function OverrideBase() {
                _super.call(this);
            }
            var __egretProto__ = OverrideBase.prototype;
            __egretProto__.initialize = function (parent) {
            };
            __egretProto__.apply = function (parent) {
            };
            __egretProto__.remove = function (parent) {
                if (parent === null) {
                }
            };
            /**
             * 从对象初始化，这是一个便利方法
             * @method egret.gui.OverrideBase#initializeFromObject
             * @param properties {any}
             * @returns {any}
             */
            __egretProto__.initializeFromObject = function (properties) {
                for (var p in properties) {
                    this[p] = properties[p];
                }
                return this;
            };
            return OverrideBase;
        })(egret.HashObject);
        gui.OverrideBase = OverrideBase;
        OverrideBase.prototype.__class__ = "egret.gui.OverrideBase";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
