/*global on, _, getObj */
/*jslint white: true, bitwise: true, multivar: true, browser: true */
var roll20mixin = roll20mixin || (function() {
    'use strict';
    var mixinroll20 = function () {
            _.mixin({
                alog: function(text,label){
                    log((label ? label + ': ' : '') + text);
                },
                bound: function(value,lower,upper,integer){
                    var v = Number(value)||~~value,
                        l = Number(lower)||~~lower,
                        u = Number(upper)||~~upper,
                        r = integer ? ~~(Math.max(Math.min(v,u),l)) : Math.max(Math.min(v,u),l);
                    return r;
                },
                represents: function (obj){
                    var r;
                    if(!_.isUndefined(obj)){
                        obj = _.has(obj,'represents') ? obj : getObj('graphic',obj);
                        r = getObj('character', obj.get('represents'));
                        if(!_.isUndefined(r)){
                            return r;
                        }
                    }
                    return undfined; //need to update read me
                },
                removeObj: function (obj,type){
                    if(!_.isUndefined(obj)){
                        if( _.has(obj,'remove') && _.isFunction(obj.remove) ){
                            obj.remove();
                            return true;
                        }
                        obj = getObj(type||'graphic',obj);
                        if(obj){
                            obj.remove();
                            return true;
                        }
                    }
                    return false;
                },
                snapdist: function(distance,unit,roundingtype){
                    var d = Number(distance)||~~distance,
                        u = Number(unit)||~~unit,
                        t = roundingtype === 'floor' ? 0 : roundingtype === 'ceil' ? 1 : 0.5,
                        r = ~~((d/u) + t) * u;
                    return r;
                },
                snapspin: function(rotation,degree){
                    var a = Number(rotation)||~~rotation,
                        d = Number(degree)||~~degree,
                        r = (~~(((a)/(d))+0.5)*(d))%360 + ((a) < 0 ? 360 : 0);
                   return r;
                }
            });
        };
    return {
        mixinroll20: mixinroll20
    };
}()); 
