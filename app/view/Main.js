Ext.define('FirstApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
		
        items: [
            
			{
            xtype: 'formpanel',
            title: 'Form',
			items: [
                {
                    xtype: 'selectfield',
                    label: 'Choose one',
					autoSelect: false,
                    placeHolder: 'Select a value',
                    options: [
                        {text: 'First Option',  value: 'first'},
                        {text: 'Second Option', value: 'second'},
                        {text: 'Third Option',  value: 'third'}						
                    ]
                },
				{
                xtype: 'textfield',
                placeHolder: 'Enter your username',
                name: 'username',
                label: 'Username'
                }, 
				{
                xtype: 'passwordfield',
                placeHolder: 'Enter your password',
                name: 'password',
                label: 'Password'
                }, 
				{
                xtype: 'button',
                name: 'login',
                text: 'Login',
                cls: 'login-btn'
                }
	        ]
        },
		{
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
