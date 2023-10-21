const htmlContent = `
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="next-head-count" content="2"><noscript data-n-css=""></noscript><noscript id="__next_css__DO_NOT_USE__"></noscript><style>body{font-size:100%;}</style><style>/*! CSS Used from: Embedded */
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}
::before,::after{--tw-content:'';}
html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;}
body{margin:0;line-height:inherit;}
h2,h3,h4{font-size:inherit;font-weight:inherit;}
a{color:inherit;text-decoration:inherit;}
button,input{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;}
button{text-transform:none;}
button,[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}
h2,h3,h4,p{margin:0;}
input::placeholder{opacity:1;color:#9ca3af;}
button{cursor:pointer;}
:disabled{cursor:default;}
img,iframe{display:block;vertical-align:middle;}
img{max-width:100%;height:auto;}
*,*::before,*::after{margin:0;padding:0;box-sizing:inherit;}
html{scroll-behavior:smooth;font-size:62.5%;box-sizing:border-box;}
body{color:#2f2e2e;}
img{width:100%;}
*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}
:root{--primary:white;--secondary:cornflowerblue;}
*{scrollbar-width:thin;scrollbar-color:var(--secondary) var(--primary);}
*::-webkit-scrollbar{width:15px;}
*::-webkit-scrollbar-track{background:var(--primary);border-radius:5px;}
*::-webkit-scrollbar-thumb{background-color:var(--secondary);border-radius:14px;border:3px solid var(--primary);}
.bold{font-family:'SFProDisplayBold'!important;}
.medium{font-family:'inter'!important;font-weight:500;}
.regular{font-family:'inter'!important;font-weight:400;}
.gradient{background:linear-gradient(10deg, #4D3AE4 0%, #C81EAB 50%, #F33F60 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.absolute{position:absolute;}
.relative{position:relative;}
.right-\[\.5rem\]{right:.5rem;}
.top-\[\.35rem\]{top:.35rem;}
.z-50{z-index:50;}
.z-\[110\]{z-index:110;}
.z-\[20\]{z-index:20;}
.order-first{order:-9999;}
.m-auto{margin:auto;}
.\!mx-auto{margin-left:auto!important;margin-right:auto!important;}
.my-\[10rem\]{margin-top:10rem;margin-bottom:10rem;}
.my-\[3rem\]{margin-top:3rem;margin-bottom:3rem;}
.my-\[5rem\]{margin-top:5rem;margin-bottom:5rem;}
.my-\[8rem\]{margin-top:8rem;margin-bottom:8rem;}
.mb-\[-30px\]{margin-bottom:-30px;}
.mb-\[3rem\]{margin-bottom:3rem;}
.mb-\[5rem\]{margin-bottom:5rem;}
.ml-\[2\.5rem\]{margin-left:2.5rem;}
.ml-\[2em\]{margin-left:2em;}
.ml-\[9px\]{margin-left:9px;}
.mr-\[\.5rem\]{margin-right:.5rem;}
.mt-\[\.9rem\]{margin-top:.9rem;}
.mt-\[10rem\]{margin-top:10rem;}
.mt-\[12rem\]{margin-top:12rem;}
.mt-\[15rem\]{margin-top:15rem;}
.mt-\[1rem\]{margin-top:1rem;}
.mt-\[25rem\]{margin-top:25rem;}
.mt-\[2rem\]{margin-top:2rem;}
.mt-\[4rem\]{margin-top:4rem;}
.mt-\[5rem\]{margin-top:5rem;}
.mt-\[8rem\]{margin-top:8rem;}
.inline-block{display:inline-block;}
.flex{display:flex;}
.hidden{display:none;}
.h-\[100\%\]{height:100%;}
.h-\[13\.4rem\]{height:13.4rem;}
.h-\[15rem\]{height:15rem;}
.h-\[16rem\]{height:16rem;}
.h-\[37px\]{height:37px;}
.h-full{height:100%;}
.w-\[10\%\]{width:10%;}
.w-\[100rem\]{width:100rem;}
.w-\[105rem\]{width:105rem;}
.w-\[130rem\]{width:130rem;}
.w-\[140rem\]{width:140rem;}
.w-\[20\%\]{width:20%;}
.w-\[29rem\]{width:29rem;}
.w-\[32px\]{width:32px;}
.w-\[7\%\]{width:7%;}
.w-\[7rem\]{width:7rem;}
.w-\[80\%\]{width:80%;}
.w-full{width:100%;}
.flex-1{flex:1 1 0%;}
.flex-col{flex-direction:column;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-\[0rem\]{gap:0rem;}
.gap-\[10rem\]{gap:10rem;}
.gap-\[1rem\]{gap:1rem;}
.gap-\[3rem\]{gap:3rem;}
.self-center{align-self:center;}
.rounded-\[\.6rem\]{border-radius:.6rem;}
.rounded-\[100\%\]{border-radius:100%;}
.rounded-\[1rem\]{border-radius:1rem;}
.rounded-\[2rem\]{border-radius:2rem;}
.rounded-\[8rem\]{border-radius:8rem;}
.border{border-width:1px;}
.border-\[\#909090\]\/\[\.5\]{border-color:rgb(144 144 144 / .5);}
.bg-\[\#fff\]{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}
.bg-purple-400{--tw-bg-opacity:1;background-color:rgb(192 132 252 / var(--tw-bg-opacity));}
.p-\[1rem\]{padding:1rem;}
.p-\[3rem\]{padding:3rem;}
.px-\[1\.3rem\]{padding-left:1.3rem;padding-right:1.3rem;}
.px-\[4rem\]{padding-left:4rem;padding-right:4rem;}
.px-\[5rem\]{padding-left:5rem;padding-right:5rem;}
.px-\[7rem\]{padding-left:7rem;padding-right:7rem;}
.px-\[9\.5rem\]{padding-left:9.5rem;padding-right:9.5rem;}
.py-\[1\.5rem\]{padding-top:1.5rem;padding-bottom:1.5rem;}
.py-\[20px\]{padding-top:20px;padding-bottom:20px;}
.py-\[2rem\]{padding-top:2rem;padding-bottom:2rem;}
.py-\[9px\]{padding-top:9px;padding-bottom:9px;}
.pl-\[4rem\]{padding-left:4rem;}
.pr-\[3rem\]{padding-right:3rem;}
.text-center{text-align:center;}
.align-middle{vertical-align:middle;}
.text-\[1\.2rem\]{font-size:1.2rem;}
.text-\[4\.5rem\]{font-size:4.5rem;}
.text-\[4rem\]{font-size:4rem;}
.text-\[5rem\]{font-size:5rem;}
.text-\[6\.2rem\]{font-size:6.2rem;}
.text-\[6rem\]{font-size:6rem;}
.text-\[7rem\]{font-size:7rem;}
.text-\[8rem\]{font-size:8rem;}
.text-\[9rem\]{font-size:9rem;}
.leading-\[8rem\]{line-height:8rem;}
.text-\[\#5C5C5C\]{--tw-text-opacity:1;color:rgb(92 92 92 / var(--tw-text-opacity));}
.text-\[\#7B68EE\]{--tw-text-opacity:1;color:rgb(123 104 238 / var(--tw-text-opacity));}
.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}
.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}
.shadow-blue-500\/50{--tw-shadow-color:rgb(59 130 246 / 0.5);--tw-shadow:var(--tw-shadow-colored);}
.shadow-purple-500\/50{--tw-shadow-color:rgb(168 85 247 / 0.5);--tw-shadow:var(--tw-shadow-colored);}
.shadow-red-500\/50{--tw-shadow-color:rgb(239 68 68 / 0.5);--tw-shadow:var(--tw-shadow-colored);}
.style-0{grid-column-gap:24px;grid-row-gap:24px;flex-flow:column wrap;flex:0 auto;grid-template:"."/1fr 1fr 1fr 1fr;grid-auto-columns:1fr;grid-auto-flow:row;justify-content:center;align-self:auto;align-items:stretch;justify-items:stretch;margin-top:64px;margin-left:auto;margin-right:auto;display:grid;position:static;}
.style-1{gap:24px 0px;flex-direction:column;grid-template-rows:auto auto;grid-template-columns:291.2px;grid-auto-columns:1fr;place-content:start;place-items:start;display:grid;box-sizing:border-box;}
.style-2{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-3{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-4{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-5{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-6{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-7{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-8{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-9{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-10{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-11{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-12{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-13{background-color:rgb(246, 246, 253);border-color:rgb(246, 246, 253);border:1.6px solid rgb(246, 246, 253);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-14{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-15{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-16{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-17{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-18{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-19{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-20{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-21{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-22{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-23{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-24{flex-direction:column;display:flex;box-sizing:border-box;}
.style-25{max-width:288px;margin-bottom:20px;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-26{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-27{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-28{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-29{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-30{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-31{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-32{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-33{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-34{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-35{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-36{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-37{gap:24px 0px;flex-direction:column;grid-template-rows:auto auto;grid-template-columns:291.2px;grid-auto-columns:1fr;place-content:start;place-items:start;display:grid;box-sizing:border-box;}
.style-38{flex-direction:column;display:flex;box-sizing:border-box;}
.style-39{max-width:288px;margin-bottom:20px;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-40{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-41{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-42{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-43{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-44{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-45{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-46{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-47{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-48{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-49{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-50{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-51{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-52{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-53{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-54{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-55{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-56{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-57{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-58{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-59{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-60{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-61{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-62{gap:24px 0px;flex-direction:column;grid-template-rows:auto auto;grid-template-columns:291.2px;grid-auto-columns:1fr;place-content:start;place-items:start;display:grid;box-sizing:border-box;}
.style-63{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-64{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-65{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-66{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-67{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-68{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-69{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-70{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-71{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-72{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-73{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-74{background-color:rgb(246, 246, 253);border-color:rgb(246, 246, 253);border:1.6px solid rgb(246, 246, 253);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-75{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-76{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-77{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-78{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-79{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-80{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-81{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-82{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-83{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-84{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-85{flex-direction:column;display:flex;box-sizing:border-box;}
.style-86{max-width:288px;margin-bottom:20px;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-87{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-88{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-89{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-90{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-91{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-92{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-93{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-94{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-95{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-96{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-97{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-98{gap:24px 0px;flex-direction:column;grid-template-rows:auto auto;grid-template-columns:291.2px;grid-auto-columns:1fr;place-content:start;place-items:start;display:grid;box-sizing:border-box;}
.style-99{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-100{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-101{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-102{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-103{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-104{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-105{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-106{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-107{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-108{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-109{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-110{grid-area:span 1 / span 1 / span 1 / span 1;flex-direction:column;display:flex;box-sizing:border-box;}
.style-111{max-width:288px;margin-bottom:20px;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-112{border:1.6px solid rgb(229, 231, 235);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-113{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-114{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-115{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-116{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-117{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-118{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-119{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-120{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-121{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-122{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-123{background-color:rgb(246, 246, 253);border-color:rgb(246, 246, 253);border:1.6px solid rgb(246, 246, 253);border-radius:16px;padding:16px;box-sizing:border-box;}
.style-124{max-height:25px;flex:0 1 auto;margin-bottom:16px;max-width:100%;display:inline-block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-125{width:256px;margin-top:0px;margin-bottom:12px;font-size:20px;font-weight:700;line-height:28px;box-sizing:border-box;}
.style-126{color:rgb(156, 163, 175);margin-bottom:24px;font-size:14px;font-weight:500;margin-top:0px;box-sizing:border-box;}
.style-127{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:space-between;align-items:stretch;display:flex;box-sizing:border-box;}
.style-128{gap:16px 8px;flex:0 0 auto;grid-template-rows:auto;grid-template-columns:auto auto;grid-auto-columns:1fr;align-items:stretch;display:grid;box-sizing:border-box;}
.style-129{width:41px;height:41px;border-radius:50%;max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.style-130{flex-direction:column;justify-content:space-around;padding-top:2px;padding-bottom:2px;display:flex;box-sizing:border-box;}
.style-131{font-size:14px;font-weight:700;line-height:16px;box-sizing:border-box;}
.style-132{max-width:200px;color:rgb(156, 163, 175);font-size:12px;line-height:12px;box-sizing:border-box;}
.style-133{max-width:100%;display:block;vertical-align:middle;box-sizing:border-box;border:0px none rgb(17, 24, 39);}
.bg-image::after{content:"";position:absolute;top:-15rem;right:0rem;background:url(http://localhost:3001/_next/static/media/bg.4f7bd887.png);display:inline-block;height:100%;width:30%;z-index:10;background-repeat:no-repeat;}
.placeholder\:ml-3::placeholder{margin-left:0.75rem;}
.placeholder\:text-\[3\.6rem\]::placeholder{font-size:3.6rem;}
.placeholder\:font-medium::placeholder{font-weight:500;}
.placeholder\:text-\[\#909090\]::placeholder{--tw-text-opacity:1;color:rgb(144 144 144 / var(--tw-text-opacity));}
.focus\:outline-0:focus{outline-width:0px;}
@media (min-width: 1024px){
.lg\:order-last{order:9999;}
.lg\:m-0{margin:0px;}
.lg\:m-auto{margin:auto;}
.lg\:my-0{margin-top:0px;margin-bottom:0px;}
.lg\:mb-0{margin-bottom:0px;}
.lg\:mb-\[-10px\]{margin-bottom:-10px;}
.lg\:mb-\[0px\]{margin-bottom:0px;}
.lg\:ml-0{margin-left:0px;}
.lg\:ml-\[8rem\]{margin-left:8rem;}
.lg\:mt-0{margin-top:0px;}
.lg\:mt-\[0\.7rem\]{margin-top:0.7rem;}
.lg\:mt-\[0rem\]{margin-top:0rem;}
.lg\:mt-\[1\.2rem\]{margin-top:1.2rem;}
.lg\:mt-\[1\.5rem\]{margin-top:1.5rem;}
.lg\:mt-\[1\.8rem\]{margin-top:1.8rem;}
.lg\:mt-\[10\.5rem\]{margin-top:10.5rem;}
.lg\:mt-\[15\.2rem\]{margin-top:15.2rem;}
.lg\:mt-\[15rem\]{margin-top:15rem;}
.lg\:mt-\[19\.5rem\]{margin-top:19.5rem;}
.lg\:mt-\[2rem\]{margin-top:2rem;}
.lg\:block{display:block;}
.lg\:flex{display:flex;}
.lg\:hidden{display:none;}
.lg\:h-\[12px\]{height:12px;}
.lg\:h-\[3\.9rem\]{height:3.9rem;}
.lg\:h-\[4\.5rem\]{height:4.5rem;}
.lg\:h-\[5\.4rem\]{height:5.4rem;}
.lg\:h-\[6\.2rem\]{height:6.2rem;}
.lg\:w-\[100\%\]{width:100%;}
.lg\:w-\[100rem\]{width:100rem;}
.lg\:w-\[130rem\]{width:130rem;}
.lg\:w-\[15\%\]{width:15%;}
.lg\:w-\[15\.6rem\]{width:15.6rem;}
.lg\:w-\[18\.8rem\]{width:18.8rem;}
.lg\:w-\[4\.5\%\]{width:4.5%;}
.lg\:w-\[53\.4rem\]{width:53.4rem;}
.lg\:w-\[55\%\]{width:55%;}
.lg\:w-\[7\.4px\]{width:7.4px;}
.lg\:w-\[70\%\]{width:70%;}
.lg\:w-\[93rem\]{width:93rem;}
.lg\:flex-row{flex-direction:row;}
.lg\:flex-row-reverse{flex-direction:row-reverse;}
.lg\:gap-2{gap:0.5rem;}
.lg\:gap-\[3rem\]{gap:3rem;}
.lg\:gap-\[rem\]{gap:rem;}
.lg\:rounded-\[\.5rem\]{border-radius:.5rem;}
.lg\:rounded-\[3\.6rem\]{border-radius:3.6rem;}
.lg\:px-0{padding-left:0px;padding-right:0px;}
.lg\:px-\[0rem\]{padding-left:0rem;padding-right:0rem;}
.lg\:px-\[2\.5rem\]{padding-left:2.5rem;padding-right:2.5rem;}
.lg\:px-\[9px\]{padding-left:9px;padding-right:9px;}
.lg\:py-0{padding-top:0px;padding-bottom:0px;}
.lg\:py-\[1rem\]{padding-top:1rem;padding-bottom:1rem;}
.lg\:pl-2{padding-left:0.5rem;}
.lg\:pr-\[6rem\]{padding-right:6rem;}
.lg\:text-\[1\.5rem\]{font-size:1.5rem;}
.lg\:text-\[1\.6rem\]{font-size:1.6rem;}
.lg\:text-\[1\.8rem\]{font-size:1.8rem;}
.lg\:text-\[2\.5rem\]{font-size:2.5rem;}
.lg\:text-\[2rem\]{font-size:2rem;}
.lg\:text-\[3\.5rem\]{font-size:3.5rem;}
.lg\:text-\[3\.8rem\]{font-size:3.8rem;}
.lg\:text-\[4\.2rem\]{font-size:4.2rem;}
.lg\:text-\[4rem\]{font-size:4rem;}
.lg\:text-\[5rem\]{font-size:5rem;}
.lg\:font-medium{font-weight:500;}
.lg\:leading-\[5rem\]{line-height:5rem;}
.placeholder\:lg\:text-\[1\.6rem\]::placeholder{font-size:1.6rem;}
}
/*! CSS Used from: Embedded */
.PrimaryButton_button__G7py0{display:flex;color:white;border-radius:10px;background-color:#7B68EE;transition:0.3s ease-out all;position:relative;z-index:1;}
.PrimaryButton_button__G7py0:focus{box-shadow:linear-gradient( 		78.51deg, 		rgba(59, 59, 249, 0.5) 9.96%, 		rgba(16, 224, 249, 0.5) 114.51%, 		rgba(146, 255, 255, 0.5) 214.96% 	);}
.PrimaryButton_button__G7py0:hover{transform:translateY(-3px);transition:all .4s ease-out;background-color:#fff;color:#7B68EE;border:1px solid #7B68EE;}
.PrimaryButton_button__G7py0:active{box-shadow:#d6d6e7 0 3px 7px inset;transform:translateY(2px);}
/*! CSS Used from: Embedded */
.Header_navbar__XsPgK{position:fixed;left:0;top:0;}
.Header_scroll__ENw7f{background-color:rgba(255, 255, 255, 0.5);-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);box-shadow:0px 4px 5px rgba(117, 118, 119, 0.06);}
.Header_burger__KWQhr{position:relative;width:60px;height:50px;background:transparent;cursor:pointer;display:hidden;}
.Header_burger__KWQhr input{display:none;}
.Header_burger__KWQhr span{display:block;position:absolute;height:6px;width:100%;background:black;border-radius:9px;opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out;}
.Header_burger__KWQhr span:nth-of-type(1){top:0px;transform-origin:left center;}
.Header_burger__KWQhr span:nth-of-type(2){top:50%;transform:translateY(-50%);transform-origin:left center;}
.Header_burger__KWQhr span:nth-of-type(3){top:100%;transform-origin:left center;transform:translateY(-100%);}
.Header_burger__KWQhr input:checked ~ span:nth-of-type(1){transform:rotate(45deg);top:-13px;left:5px;}
.Header_burger__KWQhr input:checked ~ span:nth-of-type(2){width:0%;opacity:0;}
.Header_burger__KWQhr input:checked ~ span:nth-of-type(3){transform:rotate(-45deg);top:28px;left:5px;}
/*! CSS Used from: Embedded */
.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;}
.fb_reset>div{overflow:hidden;}
.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;}
.fb_reset>div{overflow:hidden;}
.fb_iframe_widget{display:inline-block;position:relative;}
.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify;}
.fb_iframe_widget iframe{position:absolute;}
.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0;}
/*! CSS Used fontfaces */
@font-face{font-family:'SFProDisplayBold';src:url(http://localhost:3001/_next/static/media/SFPRODISPLAYBOLD.da4e794c.OTF);}
@font-face{font-family:'inter';src:url(http://localhost:3001/_next/static/media/inter.11bf447c.ttf);}</style></head><body data-new-gr-c-s-check-loaded="14.1132.0" data-gr-ext-installed=""><div id="__next"><div class="w-[130rem] !mx-auto"><nav class="Header_navbar__XsPgK Header_scroll__ENw7f w-full h-[15rem] lg:h-[6.2rem] flex justify-center items-center px-[5rem] lg:px-[0rem] py-[20px] z-50"><div class="flex w-[140rem] justify-between items-center py-[9px]"><div style="opacity: 1; transform: none;"><a href="/text-to-reels#home"><img class="w-[7rem]" src="http://localhost:3001/logo.png" alt="Logo"></a></div><div class="hidden lg:block z-[110]" style="opacity: 1; transform: none;"></div><label class="Header_burger__KWQhr lg:hidden" for="burger"><input type="checkbox" id="burger"><span></span><span></span><span></span></label></div></nav><div id="home" class="bg-image mt-[25rem] lg:mt-[15.2rem] flex flex-col lg:flex-row  gap-[0rem] lg:gap-[rem]"><div class="flex-1 self-center pr-[3rem]"><h4 class="flex justify-left bold gradient text-[6rem] lg:text-[2rem] mt-[8rem] lg:mt-[0rem] mb-[-30px] lg:mb-[0px]">ReelGPT is finally here. Create 30 viral reels in 30 seconds.</h4><h2 class="bold lg:pr-[6rem] text-[7rem] lg:text-[4rem] mt-[5rem] lg:mt-[0.7rem] leading-[8rem] lg:leading-[5rem]">Turn Your Text Prompt to the Next Viral Reels with AI</h2><p class="regular  lg:pr-[6rem]  text-[6rem] mt-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Turn Your Text into a Viral Reels with Human-like voice over &amp; Caption ready to post on all platforms! Supports all languages.</p><div class="group mt-[4rem] lg:mt-[1.8rem] flex gap-[3rem]" style="opacity: 1; transform: none;"><div class="ml-[2em] lg:ml-0 w-[105rem] h-[16rem] lg:w-[53.4rem] lg:h-[5.4rem] flex relative mt-[8rem] lg:mt-[1.2rem] z-[20]"><input class="border lg:pl-2 pl-[4rem] h-z border-[#909090]/[.5] h-full w-full rounded-[.6rem] text-[4.5rem] lg:text-[1.6rem] lg:font-medium placeholder:ml-3 placeholder:text-[3.6rem] placeholder:text-[#909090] placeholder:lg:text-[1.6rem] placeholder:font-medium px-[1.3rem] focus:outline-0" placeholder="Create a Reel about…."><button class="text-[4rem] medium lg:m-0 mr-[.5rem] mt-[.9rem] p-[1rem] w-[29rem] h-[13.4rem] lg:text-[1.5rem] lg:w-[15.6rem] lg:h-[4.5rem] bg-[#fff] text-[#7B68EE] rounded-[2rem] lg:rounded-[.5rem] absolute right-[.5rem] top-[.35rem]" type="submit">Generate →</button></div></div><div class="mt-[4rem]"><button class="PrimaryButton_button__G7py0 shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem] undefined">Create Video<img src="http://localhost:3001/static/btn-arrow.svg" class="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]" alt="arrowRight"></button><p class="text-[#5C5C5C] mt-[1rem] ml-[2.5rem] regular text-[1.2rem]">No Credit Card Required</p></div></div><div class=" relative flex-1 order-first lg:order-last" style="opacity: 1; transform: none;"><div class="flex justify-center items-center mt-[12rem]"><span style="width: 50px; height: 50px; border-radius: 100%; border-width: 5px; border-style: solid; border-color: rgb(255, 77, 0) rgb(255, 77, 0) transparent; border-image: initial; display: inline-block; animation: 0.75s linear 0s infinite normal both running react-spinners-ClipLoader-clip;"></span></div></div></div><div class=" mt-[25rem] lg:mt-[15.2rem] flex justify-center  px-[7rem] gap-[1rem] lg:gap-[3rem]"><img class="w-[20%] lg:w-[15%]" src="http://localhost:3001/static/badges/1.svg"><img class="w-[20%] lg:w-[15%]" src="http://localhost:3001/static/badges/2.svg"><img class="w-[20%] lg:w-[15%]" src="http://localhost:3001/static/badges/3.svg"><img class="w-[20%] lg:w-[15%]" src="http://localhost:3001/static/badges/4.svg"><img class="w-[20%] lg:w-[15%]" src="http://localhost:3001/static/badges/5.svg"></div><div id="services" class="mt-[15rem] lg:mt-[10.5rem] px-[7rem] "><h4 class="flex justify-center bold gradient text-[5rem] lg:text-[2.5rem] mb-[-30px] lg:mb-[-10px]">How it works</h4><div class="flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]"><div class="flex-1"><h2 class="inline-block  bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]">Turn Your Idea Into Script</h2><p class="regular inline-block lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Let AI write the perfect script for you while you just hone it.</p><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Hone it until perfection with our AI</p></div><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Supports any video duration</p></div><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Supports all languages</p></div></div><div class="lg:mt-0 mt-[15rem] flex-1" style="opacity: 1; transform: none;"><img src="https://cdn.sanity.io/images/dyzs9wuy/production/58285d814d6014fff891f56ba87de01daf528cc0-1162x852.png" class="h-[100%] lg:w-[100rem] rounded-[1rem]"></div></div><div class="flex flex-col lg:flex-row-reverse justify-center gap-[0rem] my-[3rem]"><div class="lg:ml-[8rem] flex-1"><h2 class="inline-block  bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]">Choose your favourite voice</h2><p class="regular inline-block lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Pick the voice that best matches the tone of your video.</p><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Make or Female voices to choose from</p></div><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Undetectable Human Natural Voices</p></div><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Supports all languages</p></div></div><div class="lg:mt-0 mt-[15rem] flex-1" style="opacity: 1; transform: none;"><img src="https://cdn.sanity.io/images/dyzs9wuy/production/22a21bbb6939fbe5f33df61eb26bd3741c309e46-1732x1238.png" class="h-[100%] lg:w-[130rem] rounded-[1rem]"></div></div><div class="flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]"><div class="flex-1"><h2 class="inline-block  bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]">One Post, All Platforms</h2><p class="regular inline-block lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Repurpose &amp; post to All Social Media Channels with One Click of A Button to maximize reach with Actionable Insights to know what's resonating well.</p><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Repurpose post to Shorts, Reels, TikTok to Maximize Reach.</p></div><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Actionable insight on Your Dashboard to see what's performing well.</p></div><div class="flex gap-[3rem] lg:gap-2"><img class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]" src="http://localhost:3001/tick.svg"><p class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Videos Posted at Best Time for Each Platform Based on Your Audience's Time zones to Maximize Views &amp; Ranking.</p></div></div><div class="lg:mt-0 mt-[15rem] flex-1" style="opacity: 1; transform: none;"><img src="https://cdn.sanity.io/images/dyzs9wuy/production/35c15beae8fe5376b19ea5b0f05dbe9cd2bc954a-976x1054.png" class="h-[100%] lg:w-[100rem] rounded-[1rem]"></div></div></div><div id="solutions" class="mt-[15rem] lg:mt-[19.5rem] "><h2 class="flex justify-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[4rem] lg:w-[70%] lg:m-auto text-center">Turn From A Content Editor to A Creator. Save 20+ Hrs/Week. Get Ahead.</h2><p class="regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">“The best time to plant a tree was 20 years ago. The second best time is now.”</p><div class="flex lg:flex-row flex-col gap-[10rem] justify-center mt-[5rem] px-[4rem] lg:px-0"><div class="shadow-lg shadow-blue-500/50 p-[3rem] flex-1"><h3 class="bold lg:my-0 my-[3rem] text-[5rem] lg:text-[2rem]">DIY</h3><div class="flex gap-[1rem]"><img src="http://localhost:3001/sad.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Writers Block - Spending Countless hours thinking of topic</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/sad.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Spending Countless Hours Editing Videos</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/sad.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Spending Countless Hours Re-Recording</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/sad.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Spending Countless Hours Coming up with Title &amp; description</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/sad.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Manually posting, commenting, losing will power. Burning Out.</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/sad.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Hard To Stay Consistent to See Worthy Results</p></div></div><div class="lg:mt-[15rem] lg:my-0 my-[5rem]"><div class="bg-purple-400 shadow-lg shadow-purple-500/50 p-[3rem] m-auto rounded-[100%] w-[10%] lg:w-[100%] py-[1.5rem] lg:py-0 lg:px-[9px] text-center justify-center text-white"><p class="regular  text-center align-middle text-[6rem] lg:mt-[2rem] lg:text-[3.8rem] ">vs</p></div></div><div class="shadow-lg shadow-red-500/50 p-[3rem] flex-1"><h3 class="bold lg:my-0 my-[8rem] text-[5rem] lg:text-[2rem]">Clipify</h3><div class="flex gap-[1rem]"><img src="http://localhost:3001/happy.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Trending &amp; SEO optimized Topic auto-generated for your niche</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/happy.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">AI piecing the perfect video for you</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/happy.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Viral Video Ready to be Posted</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/happy.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">SEO Optimized Title &amp; Script, Auto Generated</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/happy.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Auto Posting on YouTube + All Social Media Channels at the Best Time to maximize Ad Revenue.</p></div><div class="flex gap-[1rem]"><img src="http://localhost:3001/happy.svg" class="w-[10%] lg:mt-[1.5rem]"><p class="flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">AI taking care of consistency for you.</p></div></div></div></div><div id="testimonials" class="mt-[10rem] lg:mt-[15rem] px-[4rem] lg:px-0"><h2 class="flex w-[80%] m-auto justify-center text-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[5rem] lg:mb-0 mb-[5rem]">Turn Your Text to Reels to Dominate Search, Maximize Reach.</h2><p class="regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">Thousands of marketers, agencies, and entrepreneurs choose AutoYT to automate and simplify their content marketing.</p><div class="style-0"><div class="style-1"><div class="style-2"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-3"><h3 class="style-4">"SEO Revolutionized!"</h3><p class="style-5">"Turning my blogs into YouTube videos was a game-changer. I'm now dominating search results on both Google and YouTube. This AI is a marketer's dream!"</p><div class="style-6"><div class="style-7"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6a1bf45c972_Joseph-Kania.png" loading="lazy" alt="" class="style-8"><div class="style-9"><div class="style-10">Joseph Kania</div><div class="style-11">Content Cretor</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-12"></div></div><div class="style-13"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6582e45ca10_logo-02.svg" loading="lazy" alt="" class="style-14"><h3 class="style-15"> "Double the Impact!"</h3><p class="style-16">"One piece of content, two massive platforms. My blog's reach has expanded exponentially, all thanks to this AI's seamless transformation."</p><div class="style-17"><div class="style-18"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6ef7e45c973_Mustafa.png" loading="lazy" alt="" class="style-19"><div class="style-20"><div class="style-21">Mustafa Y.</div><div class="style-22">Startup Founder</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg" loading="lazy" alt="" class="style-23"></div></div><div class="style-24"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e64ec445ca58_Testimonials-3-1.png" loading="lazy" alt="" class="style-25"><div class="style-26"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-27"><h3 class="style-28">"Content Amplified!"</h3><p class="style-29">"I thought my blogs were impactful, but seeing them as engaging videos? It's taken my content strategy to a whole new level."</p><div class="style-30"><div class="style-31"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6a14345c974_Clark-Brown.png" loading="lazy" alt="" class="style-32"><div class="style-33"><div class="style-34">Clark Brown</div><div class="style-35">Youtuber</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-36"></div></div></div></div><div class="style-37"><div class="style-38"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1.png" loading="lazy" srcset="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1-p-500.png  500w,https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1.png  576w" sizes="(max-width: 479px) 0px, (max-width: 767px) 100vw, 288px" alt="" class="style-39"><div class="style-40"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6582e45ca10_logo-02.svg" loading="lazy" alt="" class="style-41"><h3 class="style-42">"Time &amp; Money Saved!"</h3><p class="style-43">"No need for expensive video production or hours of editing. This AI effortlessly turns my written words into captivating visuals."</p><div class="style-44"><div class="style-45"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e67c9b45c975_Talha.png" loading="lazy" alt="" class="style-46"><div class="style-47"><div class="style-48">Talha R.</div><div class="style-49">Influencer</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-50"></div></div></div><div class="style-51"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-52"><h3 class="style-53">"Audience Multiplied!"</h3><p class="style-54">"Some prefer reading, others love watching. Now, I cater to both without any extra effort. My audience has grown, and so has my brand's reach."</p><div class="style-55"><div class="style-56"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e63c5045c976_Jenny-Andrei.png" loading="lazy" alt="" class="style-57"><div class="style-58"><div class="style-59">Jenny Andrei</div><div class="style-60">Freelancer</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-61"></div></div></div><div class="style-62"><div class="style-63"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-64"><h3 class="style-65">"Beyond Blogging!"</h3><p class="style-66">"I've been a blogger for years, but this tool has transformed me into a multimedia content creator. The transition is seamless and the results, astounding."</p><div class="style-67"><div class="style-68"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6929145c977_David-Rodin.png" loading="lazy" alt="" class="style-69"><div class="style-70"><div class="style-71">David Rodin</div><div class="style-72">Musician</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-73"></div></div><div class="style-74"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-75"><h3 class="style-76">"SEO Double Whammy!"</h3><p class="style-77">"Ranking on Google was my goal. Now, I'm also a YouTube sensation. This AI has truly given my content a double SEO boost."</p><div class="style-78"><div class="style-79"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6c67145c978_Dorothea-Kelly.png" loading="lazy" alt="" class="style-80"><div class="style-81"><div class="style-82">Dorothea Kelly</div><div class="style-83">Youtuber</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg" loading="lazy" alt="" class="style-84"></div></div><div class="style-85"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6ac8c45ca56_Testimonials-8-1.png" loading="lazy" alt="" class="style-86"><div class="style-87"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-88"><h3 class="style-89">"Engagement Overdrive!"</h3><p class="style-90">"My blogs were engaging, but the videos? They're a whole new level of interactive. Comments, shares, likes – everything has skyrocketed!"</p><div class="style-91"><div class="style-92"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e670e045c979_Nedyalko-Spas.png" loading="lazy" alt="" class="style-93"><div class="style-94"><div class="style-95">Nedyalko Spas</div><div class="style-96">Video Creator</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-97"></div></div></div></div><div class="style-98"><div class="style-99"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-100"><h3 class="style-101">"Future of Blogging!"</h3><p class="style-102">"In a digital age where video is king, this AI ensures bloggers like me aren't left behind. It's the next step in content evolution."</p><div class="style-103"><div class="style-104"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e680c245c97b_Zohaib-Zeeshan.png" loading="lazy" alt="" class="style-105"><div class="style-106"><div class="style-107">Zohaib Zeeshan</div><div class="style-108">Youtuber</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-109"></div></div><div class="style-110"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6425c45ca57_Testimonials-10-1.png" loading="lazy" alt="" class="style-111"><div class="style-112"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-113"><h3 class="style-114">"From Text to Talk!"</h3><p class="style-115">"My words now have a voice, a visual, and a wider audience. This tool has transformed how I think about content creation."</p><div class="style-116"><div class="style-117"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e61b5b45c97a_Bart-Gusta.png" loading="lazy" alt="" class="style-118"><div class="style-119"><div class="style-120">Bart Gusta</div><div class="style-121">Upcoming Content creator</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" class="style-122"></div></div></div><div class="style-123"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" class="style-124"><h3 class="style-125">"Limitless Potential!"</h3><p class="style-126">"Every blog post now has the potential to be so much more. From articles to videos to social media campaigns, the possibilities are endless."</p><div class="style-127"><div class="style-128"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e615fa45c97c_Moses-Olanrewaju.png" loading="lazy" alt="" class="style-129"><div class="style-130"><div class="style-131">Moses Olanrewaju</div><div class="style-132">Freelancer</div></div></div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg" loading="lazy" alt="" class="style-133"></div></div></div></div></div><div class="flex flex-col items-center text-center my-[10rem]"><h3 class="bold text-[6.2rem] lg:text-[4.2rem] w-[100rem] lg:w-[93rem] mb-[3rem]">100+ satisfied clients and counting - trust us, we’re just getting started.</h3><a href="/get-started"><button class="PrimaryButton_button__G7py0 shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem] undefined">Get Started<img src="http://localhost:3001/static/btn-arrow.svg" class="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]" alt="arrowRight"></button></a></div><div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"></div></div></div><div id="h10-xray"></div><div id="h10-xray-keywords"></div><div id="h10-asin-grabber"></div><div id="h10-demand"></div><div id="h10-inventory"></div><div id="h10-profitability-calculator"></div><div id="h10-review"></div><div id="h10-xray-walmart"></div><div id="h10-token-connection"></div><div id="h10-page-widget"></div><div id="__next-build-watcher" style="position: fixed; bottom: 10px; right: 20px; width: 0px; height: 0px; z-index: 99999;"></div><div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div><div id="fb-customer-chat" class="fb-customerchat" page_id="122105349284001952" attribution="biz_inbox" style="position: fixed; bottom: 10px; right: 10px; z-index: 999999;" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;attribution=biz_inbox&amp;current_url=http%3A%2F%2Flocalhost%3A3001%2Ftext-to-reels&amp;is_loaded_by_facade=true&amp;locale=en_US&amp;log_id=bb8e2e07-7a6a-4deb-b14c-ea8bfa412c7d&amp;page_id=122105349284001952&amp;request_time=1697701435931&amp;sdk=joey&amp;should_use_new_domain=false"><div id="f23be93751f8c"></div></div><div class=" fb_iframe_widget fb_invisible_flow" fb-iframe-plugin-query="app_id=&amp;attribution=biz_inbox&amp;container_width=0&amp;current_url=http%3A%2F%2Flocalhost%3A3001%2Ftext-to-reels&amp;is_loaded_by_facade=true&amp;locale=en_US&amp;log_id=bb8e2e07-7a6a-4deb-b14c-ea8bfa412c7d&amp;page_id=122105349284001952&amp;request_time=1697701443950&amp;sdk=joey"><span style="vertical-align: top; width: 0px; height: 0px; overflow: hidden;"><iframe name="fa4cefd3210708" width="1000px" height="1000px" data-testid="fb:customerchat Facebook Social Plugin" title="" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v17.0/plugins/customerchat.php?app_id=&amp;attribution=biz_inbox&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df21e794865ed148%26domain%3Dlocalhost%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Flocalhost%253A3001%252Ff211034eb6ae86c%26relation%3Dparent.parent&amp;container_width=0&amp;current_url=http%3A%2F%2Flocalhost%3A3001%2Ftext-to-reels&amp;is_loaded_by_facade=true&amp;locale=en_US&amp;log_id=bb8e2e07-7a6a-4deb-b14c-ea8bfa412c7d&amp;page_id=122105349284001952&amp;request_time=1697701443950&amp;sdk=joey" style="border: none; visibility: visible; width: 0px; height: 0px;"></iframe></span></div></div><next-route-announcer><p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p></next-route-announcer><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></body></html>

`;
export default htmlContent;
