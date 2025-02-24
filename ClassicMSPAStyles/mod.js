module.exports = {
    title: "Classic MSPA Styles",
    summary: "Tweaks to make UHSC look like the old MSPA site",
    author: "aubymori",
    modVersion: 1.0,

    routes: {},
    styles: [],

    computed(api)
    {
        let store = api.store;
        let computed = {
            styles: [],
            routes: []
        };

        computed.routes["assets://classic-mspa-styles/v2_mspalogo.gif"] = "./v2_mspalogo.gif";
        computed.routes["assets://classic-mspa-styles/v2_mspalogo_scratch.gif"] = "./v2_mspalogo_scratch.gif";
        computed.routes["assets://classic-mspa-styles/v2_mspalogo_cascade.gif"] = "./v2_mspalogo_cascade.gif";
        computed.routes["assets://classic-mspa-styles/mspalogo_sbahj.jpg"] = "./mspalogo_sbahj.jpg";
        computed.routes["assets://classic-mspa-styles/v2_mspalogo_trickster.gif"] = "./v2_mspalogo_trickster.gif";
        computed.routes["assets://classic-mspa-styles/v2_mspalogo_A6A6.gif"] = "./v2_mspalogo_A6A6.gif";

        if (store.get("smallfonts"))
        {
            computed.styles.push({ body: `
            .pageBody .pageFrame .pageContent .textContent {
                font-size: 12px !important;
                margin-top: 1em !important;
            }

            .pageNavigation {
                margin-top: 1em !important;
            }

            .prattle {
                margin: 0 !important;
            }

            .log .logContent {
                padding: 3px 5% !important;
            }
            ` });
        }

        if (store.get("classicnav"))
        {
            computed.styles.push({ body: `
            .tabFrame.mspa > div,
            .tabFrame.dark > div {
                --nav-bg: #000000 !important;
                --nav-divider: #bbbbbb !important;
            }

            nav .navList ul {
                font-family: Verdana,Arial,Helvetica,sans-serif !important;
                font-size: 9px !important;
            }

            .pageBody .pageFrame {
                padding-top: 0 !important;
            }
            `});
        }

        if (store.get("classicnav"))
        {
            computed.styles.push({ body: `
            .footer {
                background: var(--page-pageFrame) !important;
                position: relative !important;
                height: 102px !important;
            }

            .footer img {
                display: none !important;
            }

            .footer::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 212px;
                height: 102px;
                background: no-repeat url("assets://classic-mspa-styles/v2_mspalogo.gif");
            }

            .footer.scratch::before { 
                background-image: url("assets://classic-mspa-styles/v2_mspalogo_scratch.gif") !important;
            }

            .footer.sbahj::before { 
                background-image: url("assets://classic-mspa-styles/mspalogo_sbahj.jpg") !important;
            }

            .footer.cascade::before { 
                background-image: url("assets://classic-mspa-styles/v2_mspalogo_cascade.gif") !important;
            }

            /* Hack to blend Trickster background properly */
            .pageBody.trickster .pageFrame {
                padding-bottom: 125px;
            }

            .footer.trickster {
                height: 0 !important;
                background: transparent !important;
            }

            .footer.trickster::before {
                top: -102px;
                background-image: url("assets://classic-mspa-styles/v2_mspalogo_trickster.gif") !important;
            }

            .footer.A6A6::before {
                background-image: url("assets://classic-mspa-styles/v2_mspalogo_A6A6.gif") !important;
            }
            `});
        }

        if (store.get("redlinks"))
        {
            computed.styles.push({ body: `
            .tabFrame.mspa a:active,
            .tabFrame.retro a:active,
            .tabFrame.mspfa a:active,
            .tabFrame.sbahj a:active,
            .tabFrame.dark a:active {
                --page-links: #ff0000;
            }
            `});
        }

        if (store.get("accurateadvlinks"))
        {
            computed.styles.push({ body: `
            .adventureLinks {
                flex-flow: unset !important;
                flex-direction: column-reverse !important;
                margin-top: 34px !important;
                margin-bottom: 116px !important;
            }

            .adventureLinks .adventure {
                font-family: Verdana,Arial,Helvetica,sans-serif !important;
                font-size: 24px !important;
                font-weight: 400 !important;
                line-height: 1 !important;
            }

            .adventureLinks .adventure img,
            .adventureLinks .adventure br {
                display: none !important;
            }
            `});
        }

        if (store.get("accuratelogs"))
        {
            computed.styles.push({ body: `
            .switchOrder {
                font-family: Verdana,Arial,Helvetica,sans-serif !important;
                font-size: 10px !important;
            }

            .logItems {
                font-size: 10px !important;
                padding-top: 1em !important;
                padding-bottom: 116px !important;
            }
            `});
        }

        return computed;
    },

    settings: {
        boolean: [
            {
                model: "smallfonts",
                label: "Small fonts",
                desc: "Use small fonts like MSPA did prior to 2012"
            },
            {
                model: "classicnav",
                label: "Classic navigation",
                desc: "Use the navigation style MSPA did prior to Cascade (Oct 2011)"
            },
            {
                model: "classicfooter",
                label: "Classic footer",
                desc: "Use the footer style MSPA did prior to Cascade (Oct 2011)"
            },
            {
                model: "redlinks",
                label: "Red active links",
                desc: "Make links red when they are being clicked"
            },
            {
                model: "accurateadvlinks",
                label: "MSPA Adventure Menus",
                desc: "Make the menus for Map and Log look how they did on the MSPA site"
            },
            {
                model: "accuratelogs",
                label: "Small Logs",
                desc: "Make the logs use small fonts, like they did on the MSPA site"
            },
        ]
    }
};