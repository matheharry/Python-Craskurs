"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2897,8633],{98633:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r,a=n(9481),i=n(5859),o=n(75044),d=n(16762),s=n(99855),c=n(15783),l=n(83738),v=n(15343),u=n(36470);!function(e){e.open="settingeditor:open",e.revert="settingeditor:revert",e.save="settingeditor:save"}(r||(r={}));const g={id:"@jupyterlab/settingeditor-extension:plugin",requires:[a.ILayoutRestorer,c.ISettingRegistry,o.IEditorServices,l.IStateDB,d.IRenderMimeRegistry,a.ILabStatus,v.ITranslator],optional:[i.ICommandPalette],autoStart:!0,provides:s.ISettingEditorTracker,activate:function(e,t,n,a,o,d,c,l,v){const m=l.load("jupyterlab"),{commands:p,shell:S}=e,_="setting-editor",I=a.factoryService.newInlineEditor,y=new i.WidgetTracker({namespace:_});let R;return t.restore(y,{command:r.open,args:e=>({}),name:e=>_}),p.addCommand(r.open,{execute:()=>{if(y.currentWidget)return void S.activateById(y.currentWidget.id);const t=g.id,a=e.restored;R=new s.SettingEditor({commands:{registry:p,revert:r.revert,save:r.save},editorFactory:I,key:t,registry:n,rendermime:d,state:o,translator:l,when:a});let v=null;R.commandsChanged.connect(((e,t)=>{t.forEach((e=>{p.notifyCommandChanged(e)})),R.canSaveRaw?v||(v=c.setDirty()):v&&(v.dispose(),v=null),R.disposed.connect((()=>{v&&v.dispose()}))})),R.id=_,R.title.icon=u.settingsIcon,R.title.label=m.__("Settings");const E=new i.MainAreaWidget({content:R});y.add(E),S.add(E)},label:m.__("Advanced Settings Editor")}),v&&v.addItem({category:m.__("Settings"),command:r.open}),p.addCommand(r.revert,{execute:()=>{var e;null===(e=y.currentWidget)||void 0===e||e.content.revert()},icon:u.undoIcon,label:m.__("Revert User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=y.currentWidget)||void 0===e?void 0:e.content.canRevertRaw)&&void 0!==t&&t}}),p.addCommand(r.save,{execute:()=>{var e;return null===(e=y.currentWidget)||void 0===e?void 0:e.content.save()},icon:u.saveIcon,label:m.__("Save User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=y.currentWidget)||void 0===e?void 0:e.content.canSaveRaw)&&void 0!==t&&t}}),y}},m=g}}]);
//# sourceMappingURL=2897.c0c58ca.js.map