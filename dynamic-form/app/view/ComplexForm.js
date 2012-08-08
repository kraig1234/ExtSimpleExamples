/*
 * File: app/view/ComplexForm.js
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

Ext.define('MyApp.view.ComplexForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.complexform',

    height: 321,
    width: 552,
    bodyPadding: 10,
    title: 'Inner Tabs',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'column'
                    },
                    items: [
                        {
                            xtype: 'container',
                            columnWidth: 0.5,
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '95%',
                                    fieldLabel: 'First Name'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '95%',
                                    fieldLabel: 'Company'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            columnWidth: 0.5,
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '95%',
                                    fieldLabel: 'Last Name'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '95%',
                                    fieldLabel: 'Email'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    height: 179,
                    activeTab: 0,
                    plain: true,
                    items: [
                        {
                            xtype: 'panel',
                            bodyPadding: 10,
                            title: 'Personal Details',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'First Name'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Last Name'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Company'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Email'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            bodyPadding: 10,
                            title: 'Phone Numbers',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'home',
                                    fieldLabel: 'Home'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'business',
                                    fieldLabel: 'Business'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'mobile',
                                    fieldLabel: 'Mobile'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'fax',
                                    fieldLabel: 'Fax'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Biography',
                            items: [
                                {
                                    xtype: 'htmleditor',
                                    height: 150,
                                    style: 'background-color: white;',
                                    name: 'bio2'
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});