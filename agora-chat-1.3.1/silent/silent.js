"use strict";!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.websdk=r():e.websdk=r()}(self,(function(){return(self.webpackChunkwebsdk=self.webpackChunkwebsdk||[]).push([[883],{1735:function(e,r,t){t.r(r),t.d(r,{clearRemindTypeForConversation:function(){return l},getPushPerformLanguage:function(){return m},getSilentModeForAll:function(){return p},getSilentModeForConversation:function(){return d},getSilentModeForConversations:function(){return f},getSilentModeRemindTypeConversations:function(){return y},setPushPerformLanguage:function(){return h},setSilentModeForAll:function(){return c},setSilentModeForConversation:function(){return u}}),t(7941),t(1539),t(8674),t(2222),t(9753),t(9554),t(4747),t(9600),t(1249);var o=t(4024),n=t(3246),a=t(7252),i=t(5531),s=t(7360);function c(e){if(!(e.options instanceof Object))throw Error('Invalid parameter: "options"');var r=e.options.paramType;if("number"!=typeof r||r<0||r>2)throw Error('Invalid parameter: "options of paramType"');if(0===r){if("string"!=typeof e.options.remindType)throw Error('Invalid parameter: "options of remindType"')}else if(1===r){if("number"!=typeof e.options.duration)throw Error('Invalid parameter: "options of duration"')}else if(2===r){var t=e.options,c=t.startTime,p=t.endTime;if(!(c instanceof Object&&Object.keys(c).length))throw Error('Invalid parameter: "options of startTime"');if(!c.hours||"number"!=typeof c.hours||!c.minutes||"number"!=typeof c.minutes)throw Error('Invalid parameter: "options of startTime of hours or minutes"');if(!(p instanceof Object&&Object.keys(p).length))throw Error('Invalid parameter: "options of endTime"');if(!p.hours||"number"!=typeof p.hours||!p.minutes||"number"!=typeof p.minutes)throw Error('Invalid parameter: "options of endTime of hours or minutes"')}if(!n.XZ.call(this)){var u=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(u)}var l=this.context,d=l.accessToken,f=l.orgName,h=l.appName,m=l.userId,y=l.jid,g={};switch(r){case 0:g={type:e.options.remindType};break;case 1:g={ignoreDuration:e.options.duration};break;case 2:var T=e.options;c=T.startTime,p=T.endTime,g={ignoreInterval:"".concat(c.hours,":").concat(c.minutes,"-").concat(p.hours,":").concat(p.minutes)}}var v={url:"".concat(this.apiUrl,"/").concat(f,"/").concat(h,"/users/").concat(m,"/notification/user/").concat(m,"?resource=").concat(y.clientResource),type:"PUT",dataType:"json",data:JSON.stringify(g),headers:{Authorization:"Bearer "+d,"Content-Type":"application/json"},success:e.success,error:e.error};return s.kg.debug("Call setSilentModeForAll:",e),o.hj.call(this,v)}function p(e){if(!n.XZ.call(this)){var r=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(r)}var t=this.context,c=t.accessToken,p=t.orgName,u=t.appName,l=t.userId,d={url:"".concat(this.apiUrl,"/").concat(p,"/").concat(u,"/users/").concat(l,"/notification/user/").concat(l),type:"GET",dataType:"json",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"},success:null==e?void 0:e.success,error:null==e?void 0:e.error};return s.kg.debug("Call getSilentModeForAll:",e),o.hj.call(this,d)}function u(e){if("string"!=typeof e.conversationId||!e.conversationId)throw Error('Invalid parameter: "conversationId"');if("string"!=typeof e.type||!e.type)throw Error('Invalid parameter: "type"');if(!(e.options instanceof Object))throw Error('Invalid parameter: "options"');var r=e.options.paramType;if("number"!=typeof r||r<0||r>2)throw Error('Invalid parameter: "options of paramType"');if(0===r){if("string"!=typeof e.options.remindType)throw Error('Invalid parameter: "options of remindType"')}else if(1===r){if("number"!=typeof e.options.duration)throw Error('Invalid parameter: "options of duration"')}else if(2===r){var t=e.options,c=t.startTime,p=t.endTime;if(!(c instanceof Object&&Object.keys(c).length))throw Error('Invalid parameter: "options of startTime"');if(!c.hours||"number"!=typeof c.hours||!c.minutes||"number"!=typeof c.minutes)throw Error('Invalid parameter: "options of startTime of hours or minutes"');if(!(p instanceof Object&&Object.keys(p).length))throw Error('Invalid parameter: "options of endTime"');if(!p.hours||"number"!=typeof p.hours||!p.minutes||"number"!=typeof p.minutes)throw Error('Invalid parameter: "options of endTime of hours or minutes"')}if(!n.XZ.call(this)){var u=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(u)}var l=this.context,d=l.accessToken,f=l.orgName,h=l.appName,m=l.userId,y=l.jid,g="chatgroup",T={};switch(r){case 0:T={type:e.options.remindType};break;case 1:T={ignoreDuration:e.options.duration};break;case 2:var v=e.options;c=v.startTime,p=v.endTime,T={ignoreInterval:"".concat(c.hours,":").concat(c.minutes,"-").concat(p.hours,":").concat(p.minutes)}}"singleChat"===e.type&&(g="user");var S={url:"".concat(this.apiUrl,"/").concat(f,"/").concat(h,"/users/").concat(m,"/notification/").concat(g,"/").concat(e.conversationId,"?resource=").concat(y.clientResource),type:"PUT",dataType:"json",data:JSON.stringify(T),headers:{Authorization:"Bearer "+d,"Content-Type":"application/json"},success:e.success,error:e.error};return s.kg.debug("Call setSilentModeForConversation:",e),o.hj.call(this,S)}function l(e){if("string"!=typeof e.conversationId||!e.conversationId)throw Error('Invalid parameter: "conversationId"');if("string"!=typeof e.type||!e.type)throw Error('Invalid parameter: "type"');if(!n.XZ.call(this)){var r=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(r)}var t=this.context,c=t.accessToken,p=t.orgName,u=t.appName,l=t.userId,d=t.jid,f="chatgroup";"singleChat"===e.type&&(f="user");var h={url:"".concat(this.apiUrl,"/").concat(p,"/").concat(u,"/users/").concat(l,"/notification/").concat(f,"/").concat(e.conversationId,"?resource=").concat(d.clientResource),type:"PUT",dataType:"json",data:JSON.stringify({type:"DEFAULT"}),headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"},success:e.success,error:e.error};return s.kg.debug("Call clearRemindTypeForConversation:",e),o.hj.call(this,h)}function d(e){if("string"!=typeof e.conversationId||!e.conversationId)throw Error('Invalid parameter: "conversationId"');if("string"!=typeof e.type||!e.type)throw Error('Invalid parameter: "type"');if(!n.XZ.call(this)){var r=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(r)}var t=this.context,c=t.accessToken,p=t.orgName,u=t.appName,l=t.userId,d="chatgroup";"singleChat"===e.type&&(d="user");var f={url:"".concat(this.apiUrl,"/").concat(p,"/").concat(u,"/users/").concat(l,"/notification/").concat(d,"/").concat(e.conversationId),type:"GET",dataType:"json",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"},success:e.success,error:e.error};return s.kg.debug("Call getSilentModeForConversation:",e),o.hj.call(this,f)}function f(e){if(!Array.isArray(e.conversationList))throw Error('Invalid parameter: "conversationList"');if(!n.XZ.call(this)){var r=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(r)}var t=this.context,c=t.accessToken,p=t.orgName,u=t.appName,l=t.userId,d=[],f=[];e.conversationList.forEach((function(e){"singleChat"===e.type?d.push(e.id):f.push(e.id)}));var h=d.length?d.join(","):"",m=f.length?f.join(","):"",y={url:"".concat(this.apiUrl,"/").concat(p,"/").concat(u,"/users/").concat(l,"/notification?user=").concat(h,"&group=").concat(m),type:"GET",dataType:"json",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"},success:e.success,error:e.error};return s.kg.debug("Call getSilentModeForConversations:",e),o.hj.call(this,y)}function h(e){if("string"!=typeof e.language||!e.language)throw Error('Invalid parameter: "language"');if(!n.XZ.call(this)){var r=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(r)}var t={translationLanguage:e.language},c=this.context,p=c.accessToken,u=c.orgName,l=c.appName,d=c.userId,f={url:"".concat(this.apiUrl,"/").concat(u,"/").concat(l,"/users/").concat(d,"/notification/language"),type:"PUT",dataType:"json",data:JSON.stringify(t),headers:{Authorization:"Bearer "+p,"Content-Type":"application/json"},success:e.success,error:e.error};return s.kg.debug("Call setPushPerformLanguage:",e),o.hj.call(this,f)}function m(e){if(!n.XZ.call(this)){var r=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(r)}var t=this.context,c=t.accessToken,p=t.orgName,u=t.appName,l=t.userId,d={url:"".concat(this.apiUrl,"/").concat(p,"/").concat(u,"/users/").concat(l,"/notification/language"),type:"GET",dataType:"json",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"},success:null==e?void 0:e.success,error:null==e?void 0:e.error};return s.kg.debug("Call getPushPerformLanguage:",e),o.hj.call(this,d)}function y(e){if(!n.XZ.call(this)){var r=a.Z.create({type:i.E.REST_PARAMS_STATUS,message:"appkey or token error"});return Promise.reject(r)}if("number"!=typeof e.pageSize)throw Error('Invalid parameter: "pageSize"');var t=this.context,c=t.accessToken,p=t.orgName,u=t.appName,l=t.userId,d={limit:e.pageSize||10,cursor:e.cursor};e.cursor||delete d.cursor;var f={url:"".concat(this.apiUrl,"/").concat(p,"/").concat(u,"/users/").concat(l,"/notification/mute/type"),type:"GET",dataType:"json",data:d,headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"}};return s.kg.debug("Call getSilentModeRemindTypeConversations:",e),o.hj.call(this,f).then((function(e){return e.data?{data:{conversations:e.data.map((function(e){return"user"in e?{conversationId:e.user,type:"singleChat",remindType:e.value}:{conversationId:e.group,type:"groupChat",remindType:e.value}})),cursor:e.cursor},type:e.type}:e}))}}},function(e){return 1735,e(e.s=1735)}])}));