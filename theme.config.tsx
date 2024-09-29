import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
    // 站点 log
    logo: (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0" y="0"
                 width="24" height="24"
                 viewBox="152.66575862884523 96.99507381439209 34.66848655700684 56.009848556518556"
                 preserveAspectRatio="xMidYMid meet" colorInterpolationFilters="sRGB">
                <g>
                    <defs>
                        <linearGradient id="92" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fa71cd"></stop>
                            <stop offset="100%" stopColor="#9b59b6"></stop>
                        </linearGradient>
                        <linearGradient id="93" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f9d423"></stop>
                            <stop offset="100%" stopColor="#f83600"></stop>
                        </linearGradient>
                        <linearGradient id="94" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0064d2"></stop>
                            <stop offset="100%" stopColor="#1cb0f6"></stop>
                        </linearGradient>
                        <linearGradient id="95" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f00978"></stop>
                            <stop offset="100%" stopColor="#3f51b1"></stop>
                        </linearGradient>
                        <linearGradient id="96" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7873f5"></stop>
                            <stop offset="100%" stopColor="#ec77ab"></stop>
                        </linearGradient>
                        <linearGradient id="97" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f9d423"></stop>
                            <stop offset="100%" stopColor="#e14fad"></stop>
                        </linearGradient>
                        <linearGradient id="98" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#009efd"></stop>
                            <stop offset="100%" stopColor="#2af598"></stop>
                        </linearGradient>
                        <linearGradient id="99" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffcc00"></stop>
                            <stop offset="100%" stopColor="#00b140"></stop>
                        </linearGradient>
                        <linearGradient id="100" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#d51007"></stop>
                            <stop offset="100%" stopColor="#ff8177"></stop>
                        </linearGradient>
                        <linearGradient id="102" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a2b6df"></stop>
                            <stop offset="100%" stopColor="#0c3483"></stop>
                        </linearGradient>
                        <linearGradient id="103" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7ac5d8"></stop>
                            <stop offset="100%" stopColor="#eea2a2"></stop>
                        </linearGradient>
                        <linearGradient id="104" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00ecbc"></stop>
                            <stop offset="100%" stopColor="#007adf"></stop>
                        </linearGradient>
                        <linearGradient id="105" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#b88746"></stop>
                            <stop offset="100%" stopColor="#fdf5a6"></stop>
                        </linearGradient>
                    </defs>
                    <g className="imagesvg isNoFont" transform="translate(153.0056438446045,97.33496284484863)">
                        <g>
                            <rect fill="#333333" fillOpacity="0" strokeWidth="2" x="0" y="0" width="33.988711362035"
                                  height="55.330074333026744" className="image-rect"></rect>
                            <svg x="0" y="0" width="33.988711362035" height="55.330074333026744"
                                 className="image-svg-svg primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.600000381469727 14">
                                    <path d="M7 3.2H2.22a1.6 1.6 0 0 1 0-3.2H7a1.6 1.6 0 1 1 0 3.2z"
                                          fill="#1eadef"></path>
                                    <path
                                        d="M1.6 14a1.6 1.6 0 0 1 0-3.2 3.8 3.8 0 0 0 3.76-3.48V1.65a1.6 1.6 0 0 1 3.2 0v5.89a6.93 6.93 0 0 1-2.21 4.55A7 7 0 0 1 1.6 14zm3.76-6.72z"
                                        fill="#f1511b"></path>
                                </svg>
                            </svg>
                        </g>
                    </g>
                    <defs v-gra="od"></defs>
                </g>
            </svg>
            <span style={{marginLeft: '.4em', fontWeight: 800}}>
        JAVGO
      </span>
        </>
    ),
    // github
    project: {
        link: 'https://github.com/javgocn/javgo-web',
        icon: (
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="4382" width="24" height="24">
                <path
                    d="M512 0C229.283787 0 0.142041 234.942803 0.142041 524.867683c0 231.829001 146.647305 428.553077 350.068189 497.952484 25.592898 4.819996 34.976961-11.38884 34.976961-25.294314 0-12.45521-0.469203-45.470049-0.725133-89.276559-142.381822 31.735193-172.453477-70.380469-172.453477-70.380469-23.246882-60.569859-56.816233-76.693384-56.816234-76.693385-46.493765-32.58829 3.540351-31.948468 3.540351-31.948467 51.356415 3.71097 78.356923 54.086324 78.356923 54.086324 45.683323 80.19108 119.817417 57.072162 148.993321 43.593236 4.649376-33.91059 17.915029-57.029508 32.50298-70.167195-113.675122-13.222997-233.151301-58.223843-233.1513-259.341366 0-57.285437 19.919806-104.163095 52.678715-140.846248-5.246544-13.265652-22.820334-66.626844 4.990615-138.884127 0 0 42.996069-14.076094 140.760939 53.787741 40.863327-11.644769 84.627183-17.445825 128.177764-17.6591 43.465272 0.213274 87.271782 6.014331 128.135109 17.6591 97.679561-67.906489 140.59032-53.787741 140.59032-53.787741 27.938914 72.257282 10.407779 125.618474 5.118579 138.884127 32.844219 36.683154 52.593405 83.560812 52.593405 140.846248 0 201.586726-119.646798 245.990404-233.663158 258.957473 18.341577 16.208835 34.721032 48.199958 34.721032 97.210357 0 70.167195-0.639822 126.7275-0.639823 143.960051 0 14.033439 9.213443 30.370239 35.190235 25.209005 203.250265-69.527373 349.769606-266.123484 349.769605-497.867175C1023.857959 234.942803 794.673558 0 512 0"
                    fill="#3E75C3" p-id="4383"></path>
            </svg>
        )
    },
    // chat
    chat: {
        link: 'https://chatgpt.com/',
        icon: (
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="14117" width="24" height="24">
                <path
                    d="M565.265178 954.519092c-22.289934 0-48.400999-8.151747-67.952455-14.838727a103.425292 103.425292 0 0 1-26.875292-11.272338c-12.737105-7.769634-15.411897-8.342804-19.806198-24.773669 21.971506-5.158528 81.581157-41.905075 103.871091-55.342721 148.896757-89.159735 119.028246-10.444426 119.028246-364.981743 15.029784 3.566389 82.791182 32.415932 82.791182 57.316972 0 133.102747 20.570425 273.847757-52.604243 354.91943-22.799418 25.47421-91.834527 58.972796-138.388646 58.972796z m-433.061569-299.321966c258.626916 136.860193 184.369594 157.048504 357.721593 52.094759 44.579867-27.193719 90.433445-49.292596 132.593263-77.568969v101.896839c-95.528287 22.226248-272.319304 227.038896-419.050754 100.686815l-25.856323-25.155782c-37.319718-43.943012-45.344094-72.410442-45.344094-151.889977z m375.744596-19.105658c-19.933569-13.310275-79.479535-51.330533-101.896839-57.316972v-133.739602a1158.312326 1158.312326 0 0 0 101.896839-57.316973c43.943012 10.189684 70.690933 47.063603 114.633945 57.316973v127.371049c-17.831947 12.10025-95.846715 58.718054-114.633945 63.749211z m-426.693016-178.31947c0-63.685525-4.26693-90.306074 38.84817-145.776166 23.945757-30.88748 47.509402-39.612396 82.090641-57.953828v261.110652c44.134069 23.372588 83.873836 49.037854 129.345301 74.448379l131.765351 78.396881c-59.545966 15.921381-63.685525 61.32916-109.602788 33.753328-104.699003-62.730242-272.38299-129.345301-272.38299-243.91556z m866.123138 127.37105c0 79.543221-47.573087 161.188063-121.002497 178.31947v-165.582365c0-82.791182 9.743885-84.574377-48.910483-116.608196L565.265178 362.371082c15.79401-23.62733 22.608361-19.105657 48.146256-34.835982 41.714019-25.47421 39.039227-16.112438 117.053995 28.785857 94.190891 54.196382 216.849212 100.559444 216.849212 228.885777z m-541.326961-197.425127v-95.528287c43.751956-23.181531 90.688187-50.94842 133.357489-76.804743 82.154327-49.547338 95.528287-63.303412 185.006449-63.303412 48.464684 0 102.533695 36.746548 125.651541 65.405034 42.223503 52.22213 39.930824 92.662439 39.930824 151.125751-31.078536-16.494551-192.393971-121.002497-222.899337-121.002498s-229.650003 123.422547-261.110652 140.108155z m-50.94842 159.213812c-16.36718-10.95391-63.112355-39.99451-82.791183-44.579867 0-168.320842-33.880699-314.606493 67.952455-390.519639 56.043262-41.714019 113.169178-53.814269 181.376375-30.696423 25.47421 8.661231 35.536523 20.888852 56.36169 26.429493-11.781822 16.048752-80.68956 50.311565-102.278953 63.303412-154.564769 93.235608-120.620384 7.451206-120.620384 376.063024z m-292.953415 121.002498c0 169.148754 115.143429 280.853165 274.293556 273.847756 59.800708-2.674792 26.811606-7.705949 69.417222 25.47421 97.820966 76.741057 228.822091 73.747838 319.637649 1.018969a251.939936 251.939936 0 0 0 52.604244-55.661149c58.20857-85.274918-10.95391-45.598836 81.96327-83.619094 130.236898-53.241099 199.399378-217.358696 128.64476-355.428914-27.448461-53.559526-40.249252-28.849543-28.276373-104.699003 18.723544-118.582447-63.176041-230.032116-157.621674-269.771884-98.90362-41.586648-129.090559 12.737105-178.892639-37.574459A161.888604 161.888604 0 0 0 580.103905 28.913674C474.003821-27.766443 331.284559 1.528898 258.428319 93.681853c-81.326415 102.979494 9.489143 54.705866-92.407697 98.648878C15.149614 257.353652-33.251385 439.175825 41.579107 561.06992c56.807488 92.598753 20.570425 4.967471 20.570424 106.800625z"
                    fill="#10A37F" p-id="14118"></path>
            </svg>
        )
    },
    // 文档的仓库 URL。它用于生成 “编辑此页面”链接和“反馈”链接
    docsRepositoryBase: 'https://github.com/javgocn/javgo-web/tree/main/pages',
    // 页脚
    footer: {
        text: (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0" y="0"
                     width="24" height="24"
                     viewBox="152.66575862884523 96.99507381439209 34.66848655700684 56.009848556518556"
                     preserveAspectRatio="xMidYMid meet" colorInterpolationFilters="sRGB">
                    <g>
                        <defs>
                            <linearGradient id="92" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#fa71cd"></stop>
                                <stop offset="100%" stopColor="#9b59b6"></stop>
                            </linearGradient>
                            <linearGradient id="93" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f9d423"></stop>
                                <stop offset="100%" stopColor="#f83600"></stop>
                            </linearGradient>
                            <linearGradient id="94" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0064d2"></stop>
                                <stop offset="100%" stopColor="#1cb0f6"></stop>
                            </linearGradient>
                            <linearGradient id="95" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f00978"></stop>
                                <stop offset="100%" stopColor="#3f51b1"></stop>
                            </linearGradient>
                            <linearGradient id="96" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7873f5"></stop>
                                <stop offset="100%" stopColor="#ec77ab"></stop>
                            </linearGradient>
                            <linearGradient id="97" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f9d423"></stop>
                                <stop offset="100%" stopColor="#e14fad"></stop>
                            </linearGradient>
                            <linearGradient id="98" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#009efd"></stop>
                                <stop offset="100%" stopColor="#2af598"></stop>
                            </linearGradient>
                            <linearGradient id="99" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ffcc00"></stop>
                                <stop offset="100%" stopColor="#00b140"></stop>
                            </linearGradient>
                            <linearGradient id="100" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#d51007"></stop>
                                <stop offset="100%" stopColor="#ff8177"></stop>
                            </linearGradient>
                            <linearGradient id="102" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a2b6df"></stop>
                                <stop offset="100%" stopColor="#0c3483"></stop>
                            </linearGradient>
                            <linearGradient id="103" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7ac5d8"></stop>
                                <stop offset="100%" stopColor="#eea2a2"></stop>
                            </linearGradient>
                            <linearGradient id="104" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00ecbc"></stop>
                                <stop offset="100%" stopColor="#007adf"></stop>
                            </linearGradient>
                            <linearGradient id="105" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#b88746"></stop>
                                <stop offset="100%" stopColor="#fdf5a6"></stop>
                            </linearGradient>
                        </defs>
                        <g className="imagesvg isNoFont" transform="translate(153.0056438446045,97.33496284484863)">
                            <g>
                                <rect fill="#333333" fillOpacity="0" strokeWidth="2" x="0" y="0"
                                      width="33.988711362035"
                                      height="55.330074333026744" className="image-rect"></rect>
                                <svg x="0" y="0" width="33.988711362035" height="55.330074333026744"
                                     className="image-svg-svg primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.600000381469727 14">
                                        <path d="M7 3.2H2.22a1.6 1.6 0 0 1 0-3.2H7a1.6 1.6 0 1 1 0 3.2z"
                                              fill="#1eadef"></path>
                                        <path
                                            d="M1.6 14a1.6 1.6 0 0 1 0-3.2 3.8 3.8 0 0 0 3.76-3.48V1.65a1.6 1.6 0 0 1 3.2 0v5.89a6.93 6.93 0 0 1-2.21 4.55A7 7 0 0 1 1.6 14zm3.76-6.72z"
                                            fill="#f1511b"></path>
                                    </svg>
                                </svg>
                            </g>
                        </g>
                        <defs v-gra="od"></defs>
                    </g>
                </svg>
                <span>
        MIT {new Date().getFullYear()} ©{' '}
                    <a href="https://github.com/javgocn/javgo-web" target="_blank">
          JAVGO
        </a>
        .&nbsp;&nbsp;&nbsp;
      </span>
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="5142" width="24" height="24">
                    <path
                        d="M716.578736 343.726595l-204.691626-64.347136-204.691626 67.237113c-17.520483 96.498126-8.760242 181.300878 26.325881 254.363099 32.15099 61.412003 90.627861 111.128633 178.365745 146.214755 87.737884-35.086123 146.214755-84.802752 175.430613-146.214755 38.021255-73.062222 46.781497-157.864973 29.261013-257.253076z m-204.691626 230.972351l-99.433258-99.433258 23.390748-20.455616 76.04251 76.04251 105.258368-105.258368 23.390748 20.455616-128.649116 128.649116z"
                        fill="#1C6DC9" p-id="5143"></path>
                </svg>
                <span>
                    {/* ICP 备案信息 */}
                    <a href="https://beian.miit.gov.cn/" target="_blank">
          黔ICP备2023002021号-2
        </a>
                </span>
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6348" width="24" height="24">
                    <path
                        d="M511.7 898.2l-9.5-6.5c-2.8-1.9-69.9-47.4-138.1-110.9-93.9-87.5-141.5-163.7-141.5-226.6v-285l289.5-136.1 289.5 135.3v285.7c0 67.5-47.6 145.2-141.6 230.8-68.3 62.3-135.5 105.1-138.3 106.9l-10 6.4zM257.8 291.5v262.7c0 51.9 44.9 121.2 130 200.5 51.5 48 103.6 86.2 124.5 101.1 21-14.1 72.9-50.5 124.1-97.2 85-77.4 129.8-148.2 129.8-204.5V290.8L512.1 172 257.8 291.5z"
                        p-id="6349"></path>
                    <path
                        d="M644.5 504.1l-15.4 110H362.5l15.4-110h266.6z m-104.7-9.7l-25.6-10.2-28.4 10.2H373l4.6-33.3h69l4.6-1.4-29.5-11.9h-49l51.9-71.5-7.4-8.4h79.9l-9.9 13.3h174.5l-7.4 53.3-70.4 25.2 4.2 1.4h69l-4.6 33.3H539.8zM474 580.9l1.1-8.4h-53.3l-1.1 8.4H474z m-48.4-35.1h53.3l1.1-8.4h-53.3l-1.1 8.4z m44.5-131.3l50.8 20.3 56.8-20.3H470.1z m110.3 166.4l1.1-8.4h-53.3l-1.1 8.4h53.3z m-47.3-43.4l-1.1 8.4h53.3l1.1-8.4h-53.3z"
                        fill="#0000FF" p-id="6350"></path>
                </svg>
                <span>
                    {/* 公安备案信息 */}
                    <a href="https://beian.miit.gov.cn/" target="_blank">

                </a>
                </span>
            </>
        )
    },
    // title 后缀
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – JAVGO'
            }
        }
    },
    // 页头
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="JAVGO"/>
            <meta property="og:description" content="JAVGO Stack"/>
            {/*  站点 Title 图标  */}
            <link rel="icon" href="/svg/logo.svg"/>
        </>
    ),
    // 站点横幅
    banner: {
        key: '1.0-release',
        text: (
            <a href="Software/GPT4" target="_self">
                🎉 GPT4 升级指南. Read more →
            </a>
        )
    },
    // 侧边栏
    sidebar: {
        // 左侧菜单折叠的文件夹级别
        defaultMenuCollapseLevel: 1,
        // 自动折叠高于 defaultMenuCollapseLevel 的非活动文件夹
        // autoCollapse: true,
        // 隐藏/显示侧边栏切换按钮
        toggleButton: true,
    },
    // 页面右侧目录
    toc: {
        // 将目录浮动在内容旁边
        float: true,
        // 目录侧边栏的标题。默认情况下，它是 “在此页面上"
        title: "TOC",
        // 滚动到顶部
        // backToTop: true,
    },
    // 编辑链接
    editLink: {
        // 编辑链接的文本。默认情况下，它是 “编辑此页面"
        // text: 'Edit this page',
        // 禁用
        component: null,
    },
    // 意见反馈链接
    feedback: {
        // 反馈链接的文本。默认情况下，自定义链接将在 “docsRepositoryBase” 中设置的存储库中打开一个问题。
        content: 'Issues',
    },
    // 上一页和下一页链接
    navigation: {
        prev: true,
        next: true
    },
    // 显示每个页面的最后更新日期
    gitTimestamp: true,
}

export default config
