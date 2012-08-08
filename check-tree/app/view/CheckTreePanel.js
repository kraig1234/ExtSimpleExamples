/*
 * File: app/view/CheckTreePanel.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.CheckTreePanel', {
    extend: 'Ext.tree.Panel',

    frame: true,
    height: 250,
    width: 200,
    title: 'Check Tree',
    store: 'MyJsonTreeStore',
    rootVisible: false,
    useArrows: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Get Checked Nodes',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, options) {
        var records = this.getView().getChecked(),
            names = [];

        Ext.Array.each(records, function(rec) {
            names.push(rec.get('text'));
        });

        Ext.MessageBox.show({
            title: 'Selected Nodes',
            msg: names.join('<br/>'),
            icon: Ext.MessageBox.INFO
        });
    }

});