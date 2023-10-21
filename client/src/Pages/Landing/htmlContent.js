const htmlContent = `
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="next-head-count" content="2" />
    <noscript data-n-css=""></noscript>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    />
    <!-- GOOGLE FONTS -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />

    <style>
      body {
        font-size: 100%;
      }
    </style>
    <style>
      /*! CSS Used from: https://www.autoyoutube.pro/_next/static/css/18b133a5231446ac.css */
      *,
      :after,
      :before {
        box-sizing: border-box;
        border: 0 solid #e5e7eb;
      }
      :after,
      :before {
        --tw-content: "";
      }
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
          Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        font-feature-settings: normal;
        font-variation-settings: normal;
      }
      body {
        margin: 0;
        line-height: inherit;
      }
      h2,
      h3,
      h4 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      button,
      input {
        font-family: inherit;
        font-feature-settings: inherit;
        font-variation-settings: inherit;
        font-size: 100%;
        font-weight: inherit;
        line-height: inherit;
        color: inherit;
        margin: 0;
        padding: 0;
      }
      button {
        text-transform: none;
      }
      button {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
      }
      h2,
      h3,
      h4,
      p {
        margin: 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      input::placeholder {
        opacity: 1;
        color: #9ca3af;
      }
      [role="button"],
      button {
        cursor: pointer;
      }
      :disabled {
        cursor: default;
      }
      iframe,
      img,
      svg,
      video {
        display: block;
        vertical-align: middle;
      }
      img,
      video {
        max-width: 100%;
        height: auto;
      }
      *,
      :after,
      :before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }
      html {
        scroll-behavior: smooth;
        font-size: 62.5%;
        box-sizing: border-box;
      }
      body {
        color: #2f2e2e;
      }
      ul {
        list-style-type: none;
      }
      img {
        width: 100%;
      }
      *,
      :after,
      :before {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-scroll-snap-strictness: proximity;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
      }
      :root {
        --primary: #fff;
        --secondary: #6495ed;
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: var(--secondary) var(--primary);
      }
      ::-webkit-scrollbar {
        width: 15px;
      }
      ::-webkit-scrollbar-track {
        background: var(--primary);
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 14px;
        border: 3px solid var(--primary);
      }
      .bold {
        font-family: SFProDisplayBold !important;
      }
      .medium {
        font-weight: 500;
      }
      .medium,
      .regular {
        font-family: inter !important;
      }
      .regular {
        font-weight: 400;
      }
      .link {
        cursor: pointer;
        color: #000;
      }
      .link:hover {
        color: #4869e8;
      }
      .gradient {
        background: -webkit-linear-gradient(#3b3bf9, #10e0f9);
        -webkit-background-clip: text;
      }
      .gradient {
        -webkit-text-fill-color: transparent;
      }
      .relative {
        position: relative;
      }
      .z-50 {
        z-index: 50;
      }
      .order-first {
        order: -9999;
      }
      .m-auto {
        margin: auto;
      }
      .\!mx-auto {
        margin-left: auto !important;
        margin-right: auto !important;
      }
      .my-\[10rem\] {
        margin-top: 10rem;
        margin-bottom: 10rem;
      }
      .my-\[3rem\] {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
      .my-\[5rem\] {
        margin-top: 5rem;
        margin-bottom: 5rem;
      }
      .my-\[8rem\] {
        margin-top: 8rem;
        margin-bottom: 8rem;
      }
      .mb-\[-30px\] {
        margin-bottom: -30px;
      }
      .mb-\[3rem\] {
        margin-bottom: 3rem;
      }
      .mb-\[5rem\] {
        margin-bottom: 5rem;
      }
      .ml-\[2\.5rem\] {
        margin-left: 2.5rem;
      }
      .ml-\[9px\] {
        margin-left: 9px;
      }
      .mt-\[10rem\] {
        margin-top: 10rem;
      }
      .mt-\[15rem\] {
        margin-top: 15rem;
      }
      .mt-\[1rem\] {
        margin-top: 1rem;
      }
      .mt-\[25rem\] {
        margin-top: 25rem;
      }
      .mt-\[2rem\] {
        margin-top: 2rem;
      }
      .mt-\[4rem\] {
        margin-top: 4rem;
      }
      .mt-\[5rem\] {
        margin-top: 5rem;
      }
      .mt-\[8rem\] {
        margin-top: 8rem;
      }
      .inline-block {
        display: inline-block;
      }
      .flex {
        display: flex;
      }
      .hidden {
        display: none;
      }
      .h-\[100\%\] {
        height: 100%;
      }
      .h-\[15rem\] {
        height: 15rem;
      }
      .h-\[37px\] {
        height: 37px;
      }
      .w-\[10\%\] {
        width: 10%;
      }
      .w-\[100rem\] {
        width: 100rem;
      }
      .w-\[130rem\] {
        width: 130rem;
      }
      .w-\[140rem\] {
        width: 140rem;
      }
      .w-\[20\%\] {
        width: 20%;
      }
      .w-\[30rem\] {
        width: 30rem;
      }
      .w-\[32px\] {
        width: 32px;
      }
      .w-\[60\%\] {
        width: 60%;
      }
      .w-\[7\%\] {
        width: 7%;
      }
      .w-full {
        width: 100%;
      }
      .flex-1 {
        flex: 1 1 0%;
      }
      .flex-col {
        flex-direction: column;
      }
      .items-center {
        align-items: center;
      }
      .justify-center {
        justify-content: center;
      }
      .justify-between {
        justify-content: space-between;
      }
      .gap-\[0rem\] {
        gap: 0;
      }
      .gap-\[10rem\] {
        gap: 10rem;
      }
      .gap-\[1rem\] {
        gap: 1rem;
      }
      .gap-\[3rem\] {
        gap: 3rem;
      }
      .self-center {
        align-self: center;
      }
      .rounded-\[100\%\] {
        border-radius: 100%;
      }
      .rounded-\[1rem\] {
        border-radius: 1rem;
      }
      .rounded-\[8rem\] {
        border-radius: 8rem;
      }
      .bg-purple-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(192 132 252 / var(--tw-bg-opacity));
      }
      .p-\[3rem\] {
        padding: 3rem;
      }
      .px-\[4rem\] {
        padding-left: 4rem;
        padding-right: 4rem;
      }
      .px-\[5rem\] {
        padding-left: 5rem;
        padding-right: 5rem;
      }
      .px-\[7rem\] {
        padding-left: 7rem;
        padding-right: 7rem;
      }
      .px-\[9\.5rem\] {
        padding-left: 9.5rem;
        padding-right: 9.5rem;
      }
      .py-\[1\.5rem\] {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
      .py-\[20px\] {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .py-\[2rem\] {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      .py-\[9px\] {
        padding-top: 9px;
        padding-bottom: 9px;
      }
      .text-left {
        text-align: left;
      }
      .text-center {
        text-align: center;
      }
      .align-middle {
        vertical-align: middle;
      }
      .text-\[1\.2rem\] {
        font-size: 1.2rem;
      }
      .text-\[5rem\] {
        font-size: 5rem;
      }
      .text-\[6\.2rem\] {
        font-size: 6.2rem;
      }
      .text-\[6rem\] {
        font-size: 6rem;
      }
      .text-\[7rem\] {
        font-size: 7rem;
      }
      .text-\[8rem\] {
        font-size: 8rem;
      }
      .text-\[9rem\] {
        font-size: 9rem;
      }
      .leading-\[8rem\] {
        line-height: 8rem;
      }
      .text-\[\#000\] {
        --tw-text-opacity: 1;
        color: rgb(0 0 0 / var(--tw-text-opacity));
      }
      .text-\[\#5C5C5C\] {
        --tw-text-opacity: 1;
        color: rgb(92 92 92 / var(--tw-text-opacity));
      }
      .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
      }
      .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
          0 4px 6px -4px var(--tw-shadow-color);
      }
      .shadow-lg {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }
      .shadow-blue-500\/50 {
        --tw-shadow-color: rgba(59, 130, 246, 0.5);
        --tw-shadow: var(--tw-shadow-colored);
      }
      .shadow-purple-500\/50 {
        --tw-shadow-color: rgba(168, 85, 247, 0.5);
        --tw-shadow: var(--tw-shadow-colored);
      }
      .shadow-red-500\/50 {
        --tw-shadow-color: rgba(239, 68, 68, 0.5);
        --tw-shadow: var(--tw-shadow-colored);
      }
      .showcaseVideo {
        position: absolute;
        top: 45%;
        left: 45%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        background-color: #2424d2a9;
      }
      .showcase-image {
        box-shadow: 5px 10px 10px #2424d2a9;
      }
      .style-0 {
        grid-column-gap: 24px;
        grid-row-gap: 24px;
        flex-flow: column wrap;
        flex: 0 auto;
        grid-template: "."/1fr 1fr 1fr 1fr;
        grid-auto-flow: row;
        justify-content: center;
        align-self: auto;
        align-items: stretch;
        justify-items: stretch;
        margin-top: 64px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        position: static;
      }
      .style-0,
      .style-1 {
        grid-auto-columns: 1fr;
      }
      .style-1 {
        gap: 24px 0;
        flex-direction: column;
        grid-template-rows: auto auto;
        grid-template-columns: 291.2px;
        place-content: start;
        place-items: start;
        display: grid;
      }
      .style-1,
      .style-2 {
        box-sizing: border-box;
      }
      .style-2 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
      }
      .style-3 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-4 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-4,
      .style-5 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-5 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-6 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-6,
      .style-7 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-7 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-8 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-8,
      .style-9 {
        box-sizing: border-box;
      }
      .style-9 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-10 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-10,
      .style-11 {
        box-sizing: border-box;
      }
      .style-11 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-12 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-12,
      .style-13 {
        box-sizing: border-box;
      }
      .style-13 {
        background-color: #f6f6fd;
        border: 1.6px solid #f6f6fd;
        border-radius: 16px;
        padding: 16px;
      }
      .style-14 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-15 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-15,
      .style-16 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-16 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-17 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-17,
      .style-18 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-18 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-19 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-19,
      .style-20 {
        box-sizing: border-box;
      }
      .style-20 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-21 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-21,
      .style-22 {
        box-sizing: border-box;
      }
      .style-22 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-23 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-23,
      .style-24 {
        box-sizing: border-box;
      }
      .style-24 {
        flex-direction: column;
        display: flex;
      }
      .style-25 {
        max-width: 288px;
        margin-bottom: 20px;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-25,
      .style-26 {
        box-sizing: border-box;
      }
      .style-26 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
      }
      .style-27 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-28 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-28,
      .style-29 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-29 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-30 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-30,
      .style-31 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-31 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-32 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-32,
      .style-33 {
        box-sizing: border-box;
      }
      .style-33 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-34 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-34,
      .style-35 {
        box-sizing: border-box;
      }
      .style-35 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-36 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-37 {
        gap: 24px 0;
        grid-template-rows: auto auto;
        grid-template-columns: 291.2px;
        grid-auto-columns: 1fr;
        place-content: start;
        place-items: start;
        display: grid;
      }
      .style-37,
      .style-38 {
        flex-direction: column;
        box-sizing: border-box;
      }
      .style-38 {
        display: flex;
      }
      .style-39 {
        max-width: 288px;
        margin-bottom: 20px;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-39,
      .style-40 {
        box-sizing: border-box;
      }
      .style-40 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
      }
      .style-41 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-42 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-42,
      .style-43 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-43 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-44 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-44,
      .style-45 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-45 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-46 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-46,
      .style-47 {
        box-sizing: border-box;
      }
      .style-47 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-48 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-48,
      .style-49 {
        box-sizing: border-box;
      }
      .style-49 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-50 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-50,
      .style-51 {
        box-sizing: border-box;
      }
      .style-51 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
      }
      .style-52 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-53 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-53,
      .style-54 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-54 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-55 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-55,
      .style-56 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-56 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-57 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-57,
      .style-58 {
        box-sizing: border-box;
      }
      .style-58 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-59 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-59,
      .style-60 {
        box-sizing: border-box;
      }
      .style-60 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-61 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-61,
      .style-62 {
        box-sizing: border-box;
      }
      .style-62 {
        gap: 24px 0;
        flex-direction: column;
        grid-template-rows: auto auto;
        grid-template-columns: 291.2px;
        grid-auto-columns: 1fr;
        place-content: start;
        place-items: start;
        display: grid;
      }
      .style-63 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
      }
      .style-63,
      .style-64 {
        box-sizing: border-box;
      }
      .style-64 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-65 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-65,
      .style-66 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-66 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-67 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-67,
      .style-68 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-68 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-69 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-69,
      .style-70 {
        box-sizing: border-box;
      }
      .style-70 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-71 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-71,
      .style-72 {
        box-sizing: border-box;
      }
      .style-72 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-73 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-73,
      .style-74 {
        box-sizing: border-box;
      }
      .style-74 {
        background-color: #f6f6fd;
        border: 1.6px solid #f6f6fd;
        border-radius: 16px;
        padding: 16px;
      }
      .style-75 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-76 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-76,
      .style-77 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-77 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-78 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-78,
      .style-79 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-79 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-80 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-80,
      .style-81 {
        box-sizing: border-box;
      }
      .style-81 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-82 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-82,
      .style-83 {
        box-sizing: border-box;
      }
      .style-83 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-84 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-84,
      .style-85 {
        box-sizing: border-box;
      }
      .style-85 {
        flex-direction: column;
        display: flex;
      }
      .style-86 {
        max-width: 288px;
        margin-bottom: 20px;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-86,
      .style-87 {
        box-sizing: border-box;
      }
      .style-87 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
      }
      .style-88 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-89 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-89,
      .style-90 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-90 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-91 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-91,
      .style-92 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-92 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-93 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-93,
      .style-94 {
        box-sizing: border-box;
      }
      .style-94 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
      }
      .style-95 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
      }
      .style-95,
      .style-96 {
        box-sizing: border-box;
      }
      .style-96 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
      }
      .style-97 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-97,
      .style-98 {
        box-sizing: border-box;
      }
      .style-98 {
        gap: 24px 0;
        flex-direction: column;
        grid-template-rows: auto auto;
        grid-template-columns: 291.2px;
        grid-auto-columns: 1fr;
        place-content: start;
        place-items: start;
        display: grid;
      }
      .style-99 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
      }
      .style-100,
      .style-99 {
        box-sizing: border-box;
      }
      .style-100 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        border: 0 #111827;
      }
      .style-101 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-101,
      .style-102 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-102 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-103 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-103,
      .style-104 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-104 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-105 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-106 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
        box-sizing: border-box;
      }
      .style-107 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        box-sizing: border-box;
      }
      .style-108 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
        box-sizing: border-box;
      }
      .style-109 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-110 {
        grid-area: span 1 / span 1 / span 1 / span 1;
        flex-direction: column;
        display: flex;
        box-sizing: border-box;
      }
      .style-111 {
        max-width: 288px;
        margin-bottom: 20px;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-112 {
        border: 1.6px solid #e5e7eb;
        border-radius: 16px;
        padding: 16px;
        box-sizing: border-box;
      }
      .style-113 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-114 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-114,
      .style-115 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-115 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-116 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-116,
      .style-117 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-117 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-118 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-119 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
        box-sizing: border-box;
      }
      .style-120 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        box-sizing: border-box;
      }
      .style-121 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
        box-sizing: border-box;
      }
      .style-122 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-123 {
        background-color: #f6f6fd;
        border: 1.6px solid #f6f6fd;
        border-radius: 16px;
        padding: 16px;
        box-sizing: border-box;
      }
      .style-124 {
        max-height: 25px;
        flex: 0 1 auto;
        margin-bottom: 16px;
        max-width: 100%;
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-125 {
        width: 256px;
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .style-125,
      .style-126 {
        margin-top: 0;
        box-sizing: border-box;
      }
      .style-126 {
        color: #9ca3af;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 500;
      }
      .style-127 {
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        display: flex;
      }
      .style-127,
      .style-128 {
        grid-template-rows: auto;
        grid-auto-columns: 1fr;
        align-items: stretch;
        box-sizing: border-box;
      }
      .style-128 {
        gap: 16px 8px;
        flex: 0 0 auto;
        grid-template-columns: auto auto;
        display: grid;
      }
      .style-129 {
        width: 41px;
        height: 41px;
        border-radius: 50%;
        max-width: 100%;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      .style-130 {
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2px;
        padding-bottom: 2px;
        display: flex;
        box-sizing: border-box;
      }
      .style-131 {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        box-sizing: border-box;
      }
      .style-132 {
        max-width: 200px;
        color: #9ca3af;
        font-size: 12px;
        line-height: 12px;
        box-sizing: border-box;
      }
      .style-133 {
        max-width: 100%;
        display: block;
        vertical-align: middle;
        box-sizing: border-box;
        border: 0 #111827;
      }
      @media (min-width: 1024px) {
        .lg\:order-last {
          order: 9999;
        }
        .lg\:m-auto {
          margin: auto;
        }
        .lg\:my-0 {
          margin-top: 0;
        }
        .lg\:mb-0,
        .lg\:my-0 {
          margin-bottom: 0;
        }
        .lg\:mb-\[-10px\] {
          margin-bottom: -10px;
        }
        .lg\:mb-\[0px\] {
          margin-bottom: 0;
        }
        .lg\:mb-\[3rem\] {
          margin-bottom: 3rem;
        }
        .lg\:mb-\[5rem\] {
          margin-bottom: 5rem;
        }
        .lg\:ml-\[8rem\] {
          margin-left: 8rem;
        }
        .lg\:mt-0 {
          margin-top: 0;
        }
        .lg\:mt-\[0\.7rem\] {
          margin-top: 0.7rem;
        }
        .lg\:mt-\[0rem\] {
          margin-top: 0;
        }
        .lg\:mt-\[1\.5rem\] {
          margin-top: 1.5rem;
        }
        .lg\:mt-\[1\.8rem\] {
          margin-top: 1.8rem;
        }
        .lg\:mt-\[10\.5rem\] {
          margin-top: 10.5rem;
        }
        .lg\:mt-\[10rem\] {
          margin-top: 10rem;
        }
        .lg\:mt-\[15\.2rem\] {
          margin-top: 15.2rem;
        }
        .lg\:mt-\[15rem\] {
          margin-top: 15rem;
        }
        .lg\:mt-\[19\.5rem\] {
          margin-top: 19.5rem;
        }
        .lg\:mt-\[2rem\] {
          margin-top: 2rem;
        }
        .lg\:block {
          display: block;
        }
        .lg\:flex {
          display: flex;
        }
        .lg\:hidden {
          display: none;
        }
        .lg\:h-\[12px\] {
          height: 12px;
        }
        .lg\:h-\[3\.9rem\] {
          height: 3.9rem;
        }
        .lg\:h-\[6\.2rem\] {
          height: 6.2rem;
        }
        .lg\:w-\[100\%\] {
          width: 100%;
        }
        .lg\:w-\[100rem\] {
          width: 100rem;
        }
        .lg\:w-\[130rem\] {
          width: 130rem;
        }
        .lg\:w-\[15\%\] {
          width: 15%;
        }
        .lg\:w-\[18\.8rem\] {
          width: 18.8rem;
        }
        .lg\:w-\[4\.5\%\] {
          width: 4.5%;
        }
        .lg\:w-\[55\%\] {
          width: 55%;
        }
        .lg\:w-\[7\.4px\] {
          width: 7.4px;
        }
        .lg\:w-\[70\%\] {
          width: 70%;
        }
        .lg\:w-\[80\%\] {
          width: 80%;
        }
        .lg\:w-\[93rem\] {
          width: 93rem;
        }
        .lg\:flex-row {
          flex-direction: row;
        }
        .lg\:flex-row-reverse {
          flex-direction: row-reverse;
        }
        .lg\:gap-2 {
          gap: 0.5rem;
        }
        .lg\:gap-\[3rem\] {
          gap: 3rem;
        }
        .lg\:gap-\[rem\] {
          gap: rem;
        }
        .lg\:rounded-\[3\.6rem\] {
          border-radius: 3.6rem;
        }
        .lg\:px-0,
        .lg\:px-\[0rem\] {
          padding-left: 0;
          padding-right: 0;
        }
        .lg\:px-\[2\.5rem\] {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }
        .lg\:px-\[9px\] {
          padding-left: 9px;
          padding-right: 9px;
        }
        .lg\:py-0 {
          padding-top: 0;
          padding-bottom: 0;
        }
        .lg\:py-\[1rem\] {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .lg\:pr-\[6rem\] {
          padding-right: 6rem;
        }
        .lg\:text-\[1\.5rem\] {
          font-size: 1.5rem;
        }
        .lg\:text-\[1\.8rem\] {
          font-size: 1.8rem;
        }
        .lg\:text-\[2\.2rem\] {
          font-size: 2.2rem;
        }
        .lg\:text-\[2\.5rem\] {
          font-size: 2.5rem;
        }
        .lg\:text-\[2rem\] {
          font-size: 2rem;
        }
        .lg\:text-\[3\.5rem\] {
          font-size: 3.5rem;
        }
        .lg\:text-\[3\.8rem\] {
          font-size: 3.8rem;
        }
        .lg\:text-\[4\.2rem\] {
          font-size: 4.2rem;
        }
        .lg\:text-\[4rem\] {
          font-size: 4rem;
        }
        .lg\:text-\[5rem\] {
          font-size: 5rem;
        }
        .lg\:leading-\[5rem\] {
          line-height: 5rem;
        }
      }
      /*! CSS Used from: https://www.autoyoutube.pro/_next/static/css/e9273749d889f3e8.css */
      .PrimaryButton_button__G7py0 {
        display: flex;
        color: #fff;
        border-radius: 10px;
        background-color: FF3333;
        transition: all 0.3s ease-out;
        position: relative;
        z-index: 1;
      }
      .PrimaryButton_button__G7py0:focus {
        box-shadow: linear-gradient(
          78.51deg,
          rgba(59, 59, 249, 0.5) 9.96%,
          rgba(16, 224, 249, 0.5) 114.51%,
          rgba(146, 255, 255, 0.5) 214.96%
        );
      }
      .PrimaryButton_button__G7py0:hover {
        transform: translateY(-3px);
        transition: all 0.4s ease-out;
        /* background: linear-gradient(
          78.51deg,
          rgba(13, 49, 69, 0.901) 9.96%,
          rgba(16, 226, 249, 0.965) 114.51%,
          rgba(146, 255, 255, 0.905) 214.96%
        ); */
        background-color: #ff8080;
      }
      .PrimaryButton_button__G7py0:active {
        box-shadow: inset 0 3px 7px #d6d6e7;
        transform: translateY(2px);
      }
      .Header_navbar__XsPgK {
        background-color: hsla(0, 0%, 100%, 0.5);
        -webkit-backdrop-filter: blur(50px);
        backdrop-filter: blur(50px);
        box-shadow: 0 4px 5px hsla(210, 1%, 46%, 0.06);
        position: fixed;
        left: 0;
        top: 0;
      }
      .Header_navbar__XsPgK li {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
      }
      .Header_navbar__XsPgK li:not(:last-child) {
        margin-right: 3.2rem;
      }
      .Header_burger__KWQhr {
        position: relative;
        width: 60px;
        height: 50px;
        background: transparent;
        cursor: pointer;
        display: hidden;
      }
      .Header_burger__KWQhr input {
        display: none;
      }
      .Header_burger__KWQhr span {
        display: block;
        position: absolute;
        height: 6px;
        width: 100%;
        background: #000;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
      }
      .Header_burger__KWQhr span:first-of-type {
        top: 0;
        transform-origin: left center;
      }
      .Header_burger__KWQhr span:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        transform-origin: left center;
      }
      .Header_burger__KWQhr span:nth-of-type(3) {
        top: 100%;
        transform-origin: left center;
        transform: translateY(-100%);
      }
      .Header_burger__KWQhr input:checked ~ span:first-of-type {
        transform: rotate(45deg);
        top: -13px;
        left: 5px;
      }
      .Header_burger__KWQhr input:checked ~ span:nth-of-type(2) {
        width: 0;
        opacity: 0;
      }
      .Header_burger__KWQhr input:checked ~ span:nth-of-type(3) {
        transform: rotate(-45deg);
        top: 28px;
        left: 5px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .css-67l5gl {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        overflow-anchor: none;
        border-radius: 0;
      }
      .css-67l5gl:before {
        position: absolute;
        left: 0;
        top: -1px;
        right: 0;
        height: 1px;
        content: "";
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.12);
        -webkit-transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      .css-67l5gl:first-of-type:before {
        display: none;
      }
      .css-67l5gl:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      .css-67l5gl:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      /*! CSS Used from: Embedded */
      .css-1iji0d4 {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        -moz-appearance: none;
        -webkit-appearance: none;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 48px;
        padding: 0px 16px;
        -webkit-transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
          background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      @media print {
        .css-1iji0d4 {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
      .css-1iji0d4:hover:not(.Mui-disabled) {
        cursor: pointer;
      }
      /*! CSS Used from: Embedded */
      .css-17o5nyn {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin: 12px 0;
        -webkit-transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-1fx8m19 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.54);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
          0ms;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      /*! CSS Used from: Embedded */
      .css-vubbuv {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
      /*! CSS Used from: Embedded */
      .css-a0y2e3 {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        visibility: hidden;
      }
      /*! CSS Used from: Embedded */
      .css-hboir5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-8atqhb {
        width: 100%;
      }
      /*! CSS Used from: Embedded */
      .css-u7qq7e {
        padding: 8px 16px 16px;
      }
      /*! CSS Used from: Embedded */
      .fb_reset {
        background: none;
        border: 0;
        border-spacing: 0;
        color: #000;
        cursor: auto;
        direction: ltr;
        font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
        font-size: 11px;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        letter-spacing: normal;
        line-height: 1;
        margin: 0;
        overflow: visible;
        padding: 0;
        text-align: left;
        text-decoration: none;
        text-indent: 0;
        text-shadow: none;
        text-transform: none;
        visibility: visible;
        white-space: normal;
        word-spacing: normal;
      }
      .fb_reset > div {
        overflow: hidden;
      }
      .fb_reset {
        background: none;
        border: 0;
        border-spacing: 0;
        color: #000;
        cursor: auto;
        direction: ltr;
        font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
        font-size: 11px;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        letter-spacing: normal;
        line-height: 1;
        margin: 0;
        overflow: visible;
        padding: 0;
        text-align: left;
        text-decoration: none;
        text-indent: 0;
        text-shadow: none;
        text-transform: none;
        visibility: visible;
        white-space: normal;
        word-spacing: normal;
      }
      .fb_reset > div {
        overflow: hidden;
      }
      .fb_dialog {
        background: rgba(82, 82, 82, 0.7);
        position: absolute;
        top: -10000px;
        z-index: 10001;
      }
      .fb_dialog_advanced {
        border-radius: 8px;
        padding: 10px;
      }
      .fb_dialog_content {
        background: #fff;
        color: #373737;
      }
      .fb_iframe_widget {
        display: inline-block;
        position: relative;
      }
      .fb_iframe_widget span {
        display: inline-block;
        position: relative;
        text-align: justify;
      }
      .fb_iframe_widget iframe {
        position: absolute;
      }
      .fb_customer_chat_bounce_out_v2 {
        animation-duration: 300ms;
        animation-name: fb_bounce_out_v2;
        transition-timing-function: ease-in;
      }
      .fb_invisible_flow {
        display: inherit;
        height: 0;
        overflow-x: hidden;
        width: 0;
      }
      /*! CSS Used keyframes */
      @keyframes fb_bounce_out_v2 {
        0% {
          opacity: 1;
          transform: scale(1, 1);
          transform-origin: bottom right;
        }
        100% {
          opacity: 0;
          transform: scale(0, 0);
          transform-origin: bottom right;
        }
      }
      /*! CSS Used fontfaces */
      @font-face {
        font-family: SFProDisplayBold;
        src: url(https://www.autoyoutube.pro/_next/static/media/SFPRODISPLAYBOLD.da4e794c.OTF);
      }
      @font-face {
        font-family: inter;
        src: url(https://www.autoyoutube.pro/_next/static/media/inter.11bf447c.ttf);
      }
    </style>
  </head>
  <body
    data-new-gr-c-s-check-loaded="14.1121.0"
    data-gr-ext-installed=""
    data-new-gr-c-s-loaded="14.1121.0"
  >
    <div>
      <div id="__next">
        <div class="w-[130rem] !mx-auto">
          <nav
            class="Header_navbar__XsPgK w-full h-[15rem] lg:h-[6.2rem] flex justify-center items-center px-[5rem] lg:px-[0rem] py-[20px] z-50"
          >
            <div class="flex w-[140rem] justify-between items-center py-[9px]">
              <div style="opacity: 1; transform: none">
                <a href="/"
                  ><img
                    class="w-[30rem] lg:w-[100%]"
                    src="https://www.autoyoutube.pro/static/yt-logo.png"
                    alt="Logo"
                /></a>
              </div>
              <ul class="hidden lg:flex align-middle medium">
                <li class="link"><a href="/">Home</a></li>
                <li class="link"><a href="/index#services">Services</a></li>
                <li class="link"><a href="/index#solutions">Solutions</a></li>
                <li class="link">
                  <a href="/index#testimonials">Testimonials</a>
                </li>
              </ul>
              <div class="hidden lg:block" style="opacity: 1; transform: none">
                <button
                  class="PrimaryButton_button__G7py0 shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem] undefined"
                >
                  Get Started<img
                    src="images/icons/btn-arrow.svg"
                    class="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]"
                    alt="arrowRight"
                  />
                </button>
              </div>
              <label class="Header_burger__KWQhr lg:hidden" for="burger"
                ><input type="checkbox" id="burger" /><span></span><span></span
                ><span></span
              ></label>
            </div>
          </nav>
          <div
            class="mt-[25rem] lg:mt-[15.2rem] flex flex-col lg:flex-row px-[7rem] gap-[0rem] lg:gap-[rem]"
          >
            <div class="flex-1 self-center">
              <h4
                class="flex justify-left bold gradient text-[6rem] lg:text-[2rem] mt-[8rem] lg:mt-[0rem] mb-[-30px] lg:mb-[0px]"
              >
                Built &amp; Used by YouTube Automation Pros.
              </h4>
              <h2
                class="bold lg:pr-[6rem] text-[7rem] lg:text-[4rem] mt-[5rem] lg:mt-[0.7rem] leading-[8rem] lg:leading-[5rem]"
              >
                Work Smarter, Not Harder. Join the New 1%, Today.
              </h2>
              <p
                class="regular lg:pr-[6rem] text-[6rem] mt-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
              >
                Time to Unleash Your Financial Freedom in the New Digital Era
                with Faceless YouTube Automation.
              </p>
              <div
                class="group mt-[4rem] lg:mt-[1.8rem]"
                style="opacity: 1; transform: none"
              >
                <a href="/get-started"
                  ><button
                    class="PrimaryButton_button__G7py0 shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem] undefined"
                  >
                    Get Started<img
                      src="/images/icons/btn-arrow.svg"
                      class="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]"
                      alt="arrowRight"
                    /></button
                ></a>
                <p
                  class="text-[#5C5C5C] mt-[1rem] ml-[2.5rem] regular text-[1.2rem]"
                >
                  No Credit Card Required
                </p>
              </div>
            </div>
            <div
              class="showcase-image relative flex-1 order-first lg:order-last"
              style="opacity: 1; transform: none"
            >
              <img
                alt="project1"
                loading="lazy"
                width="715"
                height="428.33"
                decoding="async"
                data-nimg="1"
                style="color: transparent"
                src="/images/redplaybutton.png"
              />
              <!-- <div class="showcaseVideo w-[60%]">
              <video controls="" autoplay="" loop="">
                <source
                  src="https://synthesia-results.s3.eu-west-1.amazonaws.com/website_demos/transparent+avatars/homepage/TransparentAvatar-WebsiteHero-02-hevc-safari-hevc-safari.mp4"
                  type='video/mp4; codecs="hvc1"'
                />
                <source
                  src="https://synthesia-results.s3.eu-west-1.amazonaws.com/website_demos/transparent+avatars/homepage/TransparentAvatar-WebsiteHero-02-hevc-safari-vp9-chrome.webm"
                  type="video/webm"
                />
              </video>
            </div> -->
            </div>
          </div>
          <div
            class="mt-[25rem] lg:mt-[15.2rem] flex justify-center px-[7rem] gap-[1rem] lg:gap-[3rem]"
          >
            <img class="w-[20%] lg:w-[15%]" src="/images/top1.svg" /><img
              class="w-[20%] lg:w-[15%]"
              src="/images/top2.svg"
            /><img class="w-[20%] lg:w-[15%]" src="/images/top3.svg" /><img
              class="w-[20%] lg:w-[15%]"
              src="/images/top4.svg"
            /><img class="w-[20%] lg:w-[15%]" src="/images/top5.svg" />
          </div>
          <div id="services" class="mt-[15rem] lg:mt-[10.5rem] px-[7rem]">
            <h4
              class="flex justify-center bold gradient text-[5rem] lg:text-[2.5rem] mb-[-30px] lg:mb-[-10px]"
            >
              How it works
            </h4>
            <h2
              class="flex justify-center bold mt-[2rem] text-center lg:mt-[0rem] text-[9rem] lg:text-[5rem]"
            >
              You don't need a Second Job, You Need a Second Income!
            </h2>
            <p
              class="regular justify-center text-center m-auto lg:w-[55%] lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
            >
              Don't make your life harder with YT Automation, Make it Easier
              with AutoYT. Better Videos (or More Money) in Less Time.
            </p>
            <div
              class="flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]"
            >
              <div class="flex-1">
                <h2
                  class="inline-block bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]"
                >
                  Niches to Riches. Turn Trends to Treasures.
                </h2>
                <p
                  class="regular inline-block lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                >
                  Don't gamble on unworthy niches to lose time and money. Target
                  the highest RPM (Revenue Per Mile) by country, niche and
                  competition to stay ahead with weekly trending topics
                  available to choose from so you to dominate.
                </p>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="/images/icons/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Choose Highest RPM Countries to Target Natively
                  </p>
                </div>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="/images/icons/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Choose Highest Niches RPM. Data update every 24 Hrs.
                  </p>
                </div>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="/images/icons/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Choose Topics with Low Competition, Growing search
                  </p>
                </div>
              </div>
              <div
                class="lg:mt-0 mt-[15rem] flex-1"
                style="opacity: 1; transform: none"
              >
                <img
                  src="/images/img1.png"
                  class="h-[100%] lg:w-[100rem] rounded-[1rem]"
                />
              </div>
            </div>
            <div
              class="flex flex-col lg:flex-row-reverse justify-center gap-[0rem] my-[3rem]"
            >
              <div class="lg:ml-[8rem] flex-1">
                <h2
                  class="inline-block bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]"
                >
                  AI-Powered Shorts, Pro-Edited Stories!
                </h2>
                <p
                  class="regular inline-block lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                >
                  Only using AI-generated videos risks blending in crow while
                  violating YouTube's policy causing channel’s delist. At
                  AutoYT, you'll harness AI-crafted shorts to maximize reach
                  paired with captivating custom videos to maximize watch time
                  aka ad money!
                </p>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="https://www.autoyoutube.pro/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Dedicated YouTube Pro Editoral Team
                  </p>
                </div>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="https://www.autoyoutube.pro/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Undetectable Human Natural Voiceover
                  </p>
                </div>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="https://www.autoyoutube.pro/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    SEO Optimized Script, Title + Description
                  </p>
                </div>
              </div>
              <div
                class="lg:mt-0 mt-[15rem] flex-1"
                style="opacity: 1; transform: none"
              >
                <img
                  src="/images/img2.png"
                  class="h-[100%] lg:w-[130rem] rounded-[1rem]"
                />
              </div>
            </div>

            <div
              class="flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]"
            >
              <div class="flex-1">
                <h2
                  class="inline-block bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]"
                >
                  One Creation, Limitless Connection, Data Direction.
                </h2>
                <p
                  class="regular inline-block lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                >
                  Repurpose &amp; post to All Social Media Channels with One
                  Click of A Button to maximize reach with Actionable Insights
                  to know what's resonating well.
                </p>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="https://www.autoyoutube.pro/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Repurpose post to Shorts, Reels, TikTok to Maximize Reach.
                  </p>
                </div>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="https://www.autoyoutube.pro/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Actionable insight on Your Dashboard to see what's
                    performing well.
                  </p>
                </div>
                <div class="flex gap-[3rem] lg:gap-2">
                  <img
                    class="w-[7%] lg:w-[4.5%] lg:mt-[2rem]"
                    src="https://www.autoyoutube.pro/tick.svg"
                  />
                  <p
                    class="flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Videos Posted at Best Time for Each Platform Based on Your
                    Audience's Time zones to Maximize Views &amp; Ranking.
                  </p>
                </div>
              </div>
              <div
                class="lg:mt-0 mt-[15rem] flex-1"
                style="opacity: 1; transform: none"
              >
                <img
                  src="/images/img2and2.png"
                  class="h-[100%] lg:w-[100rem] rounded-[1rem]"
                />
              </div>
            </div>
          </div>

          <div id="solutions" class="mt-[15rem] lg:mt-[19.5rem]">
            <h2
              class="flex justify-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[4rem] lg:w-[70%] lg:m-auto text-center"
            >
              Turn From A Content Consumer to A Creator. Save 20+ Hrs/Week. Get
              Ahead.
            </h2>
            <p
              class="regular justify-center text-center m-auto lg:w-[55%] lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
            >
              “The best time to plant a tree was 20 years ago. The second best
              time is now.”
            </p>
            <div
              class="flex lg:flex-row flex-col gap-[10rem] justify-center mt-[5rem] px-[4rem] lg:px-0"
            >
              <div class="shadow-lg shadow-blue-500/50 p-[3rem] flex-1">
                <h3 class="bold lg:my-0 my-[3rem] text-[5rem] lg:text-[2rem]">
                  DIY
                </h3>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/sad.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Picking Unprofitable Niche
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/sad.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Spending Countless Hours Coming up Scripts
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/sad.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Spending Countless Hours Editing Videos
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/sad.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Spending Countless Hours Making Thumbnails
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/sad.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Spending Countless Hours Coming up with Title &amp;
                    description
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/sad.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Manually posting, commenting, losing will power. Burning
                    Out.
                  </p>
                </div>
              </div>
              <div class="lg:mt-[15rem] lg:my-0 my-[5rem]">
                <div
                  class="bg-purple-400 shadow-lg shadow-purple-500/50 p-[3rem] m-auto rounded-[100%] w-[10%] lg:w-[100%] py-[1.5rem] lg:py-0 lg:px-[9px] text-center justify-center text-white"
                >
                  <p
                    class="regular text-center align-middle text-[6rem] lg:mt-[2rem] lg:text-[3.8rem]"
                  >
                    vs
                  </p>
                </div>
              </div>
              <div class="shadow-lg shadow-red-500/50 p-[3rem] flex-1">
                <h3 class="bold lg:my-0 my-[8rem] text-[5rem] lg:text-[2rem]">
                  Expert Team
                </h3>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/happy.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Highest Profitable Niche Selected
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/happy.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Top Script By Top Writers Tailored for YouTube
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/happy.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Pro YouTube Video by Top Editors
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/happy.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Mouthwatering Thumbnails made by Top Designers
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/happy.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Title &amp; Description made by SEO experts
                  </p>
                </div>
                <div class="flex gap-[1rem]">
                  <img
                    src="/images/icons/happy.svg"
                    class="w-[10%] lg:mt-[1.5rem]"
                  />
                  <p
                    class="flex-1 regular justify-center lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Auto Posting on YouTube + All Social Media Channels at the
                    Best Time to maximize Ad Revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="services" class="mt-[15rem] lg:mt-[10.5rem] px-[7rem]">
              <!-- <h4
            class="flex justify-center bold gradient text-[5rem] lg:text-[2.5rem] mb-[-30px] lg:mb-[-10px]"
          >
            How it works
          </h4> -->
              <h2
                class="flex justify-center bold mt-[2rem] text-center lg:mt-[0rem] text-[9rem] lg:text-[5rem]"
              >
                Other benfits of Youtube Automation
              </h2>
              <div
                class="flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]"
              >
                <div class="flex-1">
                  <h2
                    class="inline-block bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]"
                  >
                    Add Money
                  </h2>
                  <p
                    class="regular inline-block lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  >
                    Maximize your earnings through targeted ads and monetize
                    your content effectively.
                  </p>
                  <div
                    class="lg:mt-0 mt-[15rem] flex-1"
                    style="
                      opacity: 1;
                      transform: none;
                      margin-right: 20px;
                      padding: 25px;
                      height: 400px;
                    "
                  >
                    <img
                      src="images/img3.png"
                      class="h-[100%] lg:w-[100rem] rounded-[1rem]"
                    />
                  </div>
                </div>

                <div
                  class="lg:mt-0 mt-[15rem] flex-1"
                  style="opacity: 1; transform: none; margin-left: 25px"
                >
                  <img
                    src="images/img4.png"
                    class="h-[100%] lg:w-[100rem] rounded-[1rem]"
                    style="width: 400px !important"
                  />
                </div>
              </div>
            </div>
            <div
              class="flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]"
            >
              <div class="flex-1" style="text-align: center">
                <h2
                  class="inline-block bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]"
                  style="margin-top: 80px"
                >
                  Affiliate Money
                </h2>
                <p
                  class="regular inline-block lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
                  style="width: 550px; padding-left: 50px"
                >
                  Leverage affilate marketing to earn commissions by promoting
                  products that align with your content.
                </p>
              </div>
              <div
                class="lg:mt-0 mt-[15rem] flex-1"
                style="opacity: 1; transform: none"
              >
                <img
                  src="/images/img5.png"
                  class="h-[100%] lg:w-[100rem] rounded-[1rem]"
                  style="width: 550px"
                />
              </div>
            </div>
            <div
              class="flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]"
            >
              <!-- <div class="flex-1" style="text-align: center"></div> -->

              <div style="width: 100%">
                <img
                  src="/images/img6.png"
                  class="h-[100%] lg:w-[100rem] rounded-[1rem]"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
          <div
            id="testimonials"
            class="mt-[10rem] lg:mt-[15rem] px-[4rem] lg:px-0"
          >
            <h2
              class="flex justify-center text-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[5rem] lg:mb-0 mb-[5rem]"
            >
              You're in good company with AutoYT
            </h2>
            <p
              class="regular justify-center text-center m-auto lg:w-[55%] lg:pr-[6rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]"
            >
              Thousands of marketers, agencies, and entrepreneurs choose AutoYT
              to automate and simplify their content marketing.
            </p>
            <div class="style-0">
              <div class="style-1">
                <div class="style-2">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                    loading="lazy"
                    alt=""
                    class="style-3"
                  />
                  <h3 class="style-4">Supercharged My YouTube Growth</h3>
                  <p class="style-5">
                    Since I started using this platform, my channel has seen
                    exponential growth. It's like having a virtual assistant
                    that optimizes my content and engages with my audience. A
                    must-have for serious creators
                  </p>
                  <div class="style-6">
                    <div class="style-7">
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6a1bf45c972_Joseph-Kania.png"
                        loading="lazy"
                        alt=""
                        class="style-8"
                      />
                      <div class="style-9">
                        <div class="style-10">Joseph Kania</div>
                        <div class="style-11">Content Cretor</div>
                      </div>
                    </div>
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                      loading="lazy"
                      alt=""
                      class="style-12"
                    />
                  </div>
                </div>
                <div class="style-13">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6582e45ca10_logo-02.svg"
                    loading="lazy"
                    alt=""
                    class="style-14"
                  />
                  <h3 class="style-15">Saves Me Hours of Work Every Week</h3>
                  <p class="style-16">
                    Managing my YouTube channel used to be time-consuming.
                    Thanks to this platform, I've reclaimed precious hours.
                  </p>
                  <div class="style-17">
                    <div class="style-18">
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6ef7e45c973_Mustafa.png"
                        loading="lazy"
                        alt=""
                        class="style-19"
                      />
                      <div class="style-20">
                        <div class="style-21">Mustafa Y.</div>
                        <div class="style-22">Startup Founder</div>
                      </div>
                    </div>
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg"
                      loading="lazy"
                      alt=""
                      class="style-23"
                    />
                  </div>
                </div>
                <div class="style-24">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e64ec445ca58_Testimonials-3-1.png"
                    loading="lazy"
                    alt=""
                    class="style-25"
                  />
                  <div class="style-26">
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                      loading="lazy"
                      alt=""
                      class="style-27"
                    />
                    <h3 class="style-28">Quality Content Made Effortless</h3>
                    <p class="style-29">
                      Creating compelling videos has never been this easy. The
                      platform's content recommendations align perfectly with my
                      niche, ensuring I consistently produce high-quality
                      content that resonates with my viewers.
                    </p>
                    <div class="style-30">
                      <div class="style-31">
                        <img
                          src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6a14345c974_Clark-Brown.png"
                          loading="lazy"
                          alt=""
                          class="style-32"
                        />
                        <div class="style-33">
                          <div class="style-34">Clark Brown</div>
                          <div class="style-35">Youtuber</div>
                        </div>
                      </div>
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                        loading="lazy"
                        alt=""
                        class="style-36"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="style-37">
                <div class="style-38">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1.png"
                    loading="lazy"
                    srcset="
                      https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1-p-500.png 500w,
                      https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1.png       576w
                    "
                    sizes="(max-width: 479px) 0px, (max-width: 767px) 100vw, 288px"
                    alt=""
                    class="style-39"
                  />
                  <div class="style-40">
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6582e45ca10_logo-02.svg"
                      loading="lazy"
                      alt=""
                      class="style-41"
                    />
                    <h3 class="style-42">A Goldmine of Insights!</h3>
                    <p class="style-43">
                      The analytics dashboard is a treasure trove of
                      information. I can track video performance, audience
                      demographics, and engagement metrics in real-time. It's a
                      true ally in understanding my viewers.
                    </p>
                    <div class="style-44">
                      <div class="style-45">
                        <img
                          src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e67c9b45c975_Talha.png"
                          loading="lazy"
                          alt=""
                          class="style-46"
                        />
                        <div class="style-47">
                          <div class="style-48">Talha R.</div>
                          <div class="style-49">Influencer</div>
                        </div>
                      </div>
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                        loading="lazy"
                        alt=""
                        class="style-50"
                      />
                    </div>
                  </div>
                </div>
                <div class="style-51">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                    loading="lazy"
                    alt=""
                    class="style-52"
                  />
                  <h3 class="style-53">Effortless SEO Optimization!</h3>
                  <p class="style-54">
                    My videos are now ranking higher on search results, thanks
                    to the platform's intelligent SEO suggestions. It's like
                    having an SEO expert by my side, guiding me to the top of
                    the search page!
                  </p>
                  <div class="style-55">
                    <div class="style-56">
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e63c5045c976_Jenny-Andrei.png"
                        loading="lazy"
                        alt=""
                        class="style-57"
                      />
                      <div class="style-58">
                        <div class="style-59">Jenny Andrei</div>
                        <div class="style-60">Freelancer</div>
                      </div>
                    </div>
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                      loading="lazy"
                      alt=""
                      class="style-61"
                    />
                  </div>
                </div>
              </div>
              <div class="style-62">
                <div class="style-63">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                    loading="lazy"
                    alt=""
                    class="style-64"
                  />
                  <h3 class="style-65">Consistency at Its Best!</h3>
                  <p class="style-66">
                    Consistency is key in the YouTube game, and this platform
                    helps me maintain it effortlessly. From scheduled uploads to
                    content planning, it's the secret to keeping my subscribers
                    engaged.
                  </p>
                  <div class="style-67">
                    <div class="style-68">
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6929145c977_David-Rodin.png"
                        loading="lazy"
                        alt=""
                        class="style-69"
                      />
                      <div class="style-70">
                        <div class="style-71">David Rodin</div>
                        <div class="style-72">Musician</div>
                      </div>
                    </div>
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                      loading="lazy"
                      alt=""
                      class="style-73"
                    />
                  </div>
                </div>
                <div class="style-74">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                    loading="lazy"
                    alt=""
                    class="style-75"
                  />
                  <h3 class="style-76">A Lifesaver for Busy Creators!</h3>
                  <p class="style-77">
                    Being a content creator and juggling other commitments can
                    be tough. This platform's automation features have lightened
                    my load, allowing me to focus on what matters most: creating
                    awesome videos.
                  </p>
                  <div class="style-78">
                    <div class="style-79">
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6c67145c978_Dorothea-Kelly.png"
                        loading="lazy"
                        alt=""
                        class="style-80"
                      />
                      <div class="style-81">
                        <div class="style-82">Dorothea Kelly</div>
                        <div class="style-83">Youtuber</div>
                      </div>
                    </div>
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg"
                      loading="lazy"
                      alt=""
                      class="style-84"
                    />
                  </div>
                </div>
                <div class="style-85">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6ac8c45ca56_Testimonials-8-1.png"
                    loading="lazy"
                    alt=""
                    class="style-86"
                  />
                  <div class="style-87">
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                      loading="lazy"
                      alt=""
                      class="style-88"
                    />
                    <h3 class="style-89">Smart Collaboration with AI!</h3>
                    <p class="style-90">
                      The AI-powered collaboration between me and the platform
                      is magical. It understands my channel's identity and
                      goals, suggesting improvements that align perfectly with
                      my creative vision.
                    </p>
                    <div class="style-91">
                      <div class="style-92">
                        <img
                          src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e670e045c979_Nedyalko-Spas.png"
                          loading="lazy"
                          alt=""
                          class="style-93"
                        />
                        <div class="style-94">
                          <div class="style-95">Nedyalko Spas</div>
                          <div class="style-96">Video Creator</div>
                        </div>
                      </div>
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                        loading="lazy"
                        alt=""
                        class="style-97"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="style-98">
                <div class="style-99">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                    loading="lazy"
                    alt=""
                    class="style-100"
                  />
                  <h3 class="style-101">Unleashed My Channel's Potential!</h3>
                  <p class="style-102">
                    This platform's personalized recommendations are like having
                    a secret weapon for success. It's taken my channel to new
                    heights, reaching audiences I never thought possible. I'm
                    blown away!
                  </p>
                  <div class="style-103">
                    <div class="style-104">
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e680c245c97b_Zohaib-Zeeshan.png"
                        loading="lazy"
                        alt=""
                        class="style-105"
                      />
                      <div class="style-106">
                        <div class="style-107">Zohaib Zeeshan</div>
                        <div class="style-108">Youtuber</div>
                      </div>
                    </div>
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                      loading="lazy"
                      alt=""
                      class="style-109"
                    />
                  </div>
                </div>
                <div class="style-110">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6425c45ca57_Testimonials-10-1.png"
                    loading="lazy"
                    alt=""
                    class="style-111"
                  />
                  <div class="style-112">
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                      loading="lazy"
                      alt=""
                      class="style-113"
                    />
                    <h3 class="style-114">Content Strategy On Point!</h3>
                    <p class="style-115">
                      From video topics to posting schedules, this platform has
                      transformed how I strategize my content. It's an
                      indispensable tool that's revolutionizing the way I
                      approach YouTube.
                    </p>
                    <div class="style-116">
                      <div class="style-117">
                        <img
                          src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e61b5b45c97a_Bart-Gusta.png"
                          loading="lazy"
                          alt=""
                          class="style-118"
                        />
                        <div class="style-119">
                          <div class="style-120">Bart Gusta</div>
                          <div class="style-121">Upcoming Content creator</div>
                        </div>
                      </div>
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg"
                        loading="lazy"
                        alt=""
                        class="style-122"
                      />
                    </div>
                  </div>
                </div>
                <div class="style-123">
                  <img
                    src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg"
                    loading="lazy"
                    alt=""
                    class="style-124"
                  />
                  <h3 class="style-125">Simplified Audience Engagement!</h3>
                  <p class="style-126">
                    I used to struggle with managing comments and engaging with
                    my viewers. With this platform, I can easily connect with my
                    audience, fostering a strong community around my channel.
                  </p>
                  <div class="style-127">
                    <div class="style-128">
                      <img
                        src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e615fa45c97c_Moses-Olanrewaju.png"
                        loading="lazy"
                        alt=""
                        class="style-129"
                      />
                      <div class="style-130">
                        <div class="style-131">Moses Olanrewaju</div>
                        <div class="style-132">Freelancer</div>
                      </div>
                    </div>
                    <img
                      src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg"
                      loading="lazy"
                      alt=""
                      class="style-133"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center text-center mt-[10rem]">
            <h3
              class="bold text-[6.2rem] lg:text-[4.2rem] w-[100rem] lg:w-[93rem] mb-[3rem]"
            >
              100+ satisfied clients and counting - trust us, we’re just getting
              started.
            </h3>
            <button
              class="PrimaryButton_button__G7py0 shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem] undefined"
            >
              Get Started<img
                src="images/icons/btn-arrow.svg"
                class="ml-[9px] w-[32px] h-[37px] lg:w-[7.4px] lg:h-[12px]"
                alt="arrowRight"
              />
            </button>
          </div>
          <div class="mt-[10rem] lg:mt-[10rem] px-[4rem] lg:px-0 lg:mb-[5rem]">
            <h2
              class="flex justify-center text-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[5rem] lg:mb-[3rem] mb-[5rem]"
            >
              Frequently Asked Questions
            </h2>
            <div class="lg:w-[80%] m-auto">
              <style>
                input[type="checkbox"] {
                  display: none;
                }

                .faq-text {
                  display: none;
                  margin: 30px 0 0;
                  line-height: 2.4rem;
                }

                input[type="checkbox"]:checked + label + .faq-text {
                  display: block;
                }
              </style>

              <div
                style="
                  max-width: 1200px;
                  margin: 0 auto;
                  border-radius: 10px;
                  background-color: #fff;
                  overflow: hidden;
                  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
                "
              >
                <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: 0 0;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <input type="checkbox" id="faq1" />
                  <label
                    for="faq1"
                    class="faq-title"
                    style="
                      margin: 0;
                      color: #000;
                      cursor: pointer;
                      display: block;
                    "
                    >How much income am I expected to make &amp; what results
                    can you guarantee?</label
                  >
                  <div class="faq-text">
                    Income all depends on how much time &amp; money you
                    invest...
                  </div>
                  <label
                    for="faq1"
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                  >
                    <i class="fas fa-angle-down"></i>
                  </label>
                </div>
                <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: 0 0;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <input type="checkbox" id="faq1" />
                  <label
                    for="faq1"
                    class="faq-title"
                    style="
                      margin: 0;
                      color: #000;
                      cursor: pointer;
                      display: block;
                    "
                    >How much income am I expected to make &amp; what results
                    can you guarantee?</label
                  >
                  <div class="faq-text">
                    Income all depends on how much time &amp; money you
                    invest...
                  </div>
                  <label
                    for="faq1"
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                  >
                    <i class="fas fa-angle-down"></i>
                  </label>
                </div>
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    How much income am I expected to make & what results can you
                    guarantee?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    Income all depends on how much time & money you invest. We
                    can't guarantee any amount or timeline as we're a tool
                    designed to maximize your success in the minimum time, not
                    an agency. What we can guarantee is your chances of success
                    will significantly drop if you were to do it all yourself.
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    Is there any commitment? Can I cancel any time?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    Absolutely! You can cancel anytime, no strings attached, as
                    we're not agency to lock you to a commitment but tool to set
                    you up for success.
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    Is it too late to get to YouTube automation?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    Absolutely not! In fact, it has actually just started.
                    Unfortunately numerous people don't see results to then give
                    up with all the time and hours wasted as they try to figure
                    out all themselves instead of following a strategic system
                    that's working as it's built by the pros.
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    What the hell is YouTube Automation & why is it taking over?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    Simply put, YouTube automation is making money off youtube
                    without ever showing your face or recording a video. It's
                    taking over because if it's done well, it can pay pretty
                    dividends.
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    Can I still have creative control authority over the
                    channel?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    Absolutely! Our platform is built to empower you, not
                    replace you. You're the brain of your business at the end of
                    the day.
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    Can I sell merchants, courses, books or anything on the
                    channel & even make sponsorship money?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    Absolutely! With us, we setup all your partnership tools for
                    you right away so brands come to you not vice versa. You can
                    sell anything you want on your channel to make more cash as
                    it's completely your business..
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    I couldn't join your platform on July 2023 as your seats
                    were sold out. Will it be happening again if I don't start
                    right away?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    We're working around the clock to not happen again given the
                    influx of demand our editorial team receive. While we can't
                    guarantee anything, we highly suggest to take your spot asap
                    before it's too late..
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    Is the platform user-friendly? Do I need technical skills?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    Absolutely! No jargons or anything. Your success is ours. No
                    need for technical skils.
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    How to pick topics worth making video about?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    AutoYT shows you the top trending topics with the search &
                    competition volume. So you make the best video in the least
                    time!
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    Would I get rejected from YouTube monetization program if I
                    post AI generated content?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    AutoYouTube AI generated content is completely original as
                    it’s powered by GPT4 & Dall-E by OpenAi. Yet, We highly
                    recommend to have at least half your content custom made by
                    editorial team especially in the early phase to not only
                    pass YouTube monetization program but also maximize your ad
                    revenue!
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
                <!-- Example FAQ item -->
                <!-- <div
                  class="faq"
                  style="
                    box-sizing: border-box;
                    background: transparent;
                    padding: 30px;
                    position: relative;
                    overflow: hidden;
                    font-size: 22px;
                  "
                >
                  <h3 class="faq-title" style="margin: 0; color: black">
                    How would I know what niche to pick & how saturated it’s?
                  </h3>
                  <br />
                  <p
                    class="faq-text"
                    style="margin: 30px 0 0; display: none; line-height: 2.4rem"
                  >
                    AutoYT not only shows you niches with highest RPM but also
                    countries with highest RPM to target using the native
                    language for maximum success
                  </p>
                  <button
                    class="faq-toggle"
                    style="
                      background-color: transparent;
                      border: 1px solid #e6e6e6;
                      color: inherit;
                      border-radius: 50%;
                      cursor: pointer;
                      font-size: 16px;
                      position: absolute;
                      top: 30px;
                      right: 30px;
                      height: 30px;
                      width: 30px;
                      transition: 0.3s ease;
                    "
                    onclick="toggleFaq(this)"
                  >
                    <i class="fas fa-angle-down"></i>
                  </button>
                </div> -->
                <!-- Add more FAQ items as needed -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="h10-xray"></div>
      <div id="h10-xray-keywords"></div>
      <div id="h10-asin-grabber"></div>
      <div id="h10-demand"></div>
      <div id="h10-inventory"></div>
      <div id="h10-profitability-calculator"></div>
      <div id="h10-review"></div>
      <div id="h10-xray-walmart"></div>
      <div id="h10-token-connection"></div>
      <div id="h10-page-widget"></div>
      <next-route-announcer
        ><p
          aria-live="assertive"
          id="__next-route-announcer__"
          role="alert"
          style="
            border: 0px;
            clip: rect(0px, 0px, 0px, 0px);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0px;
            position: absolute;
            top: 0px;
            width: 1px;
            white-space: nowrap;
            overflow-wrap: normal;
          "
        ></p
      ></next-route-announcer>
      <div id="fb-root" class="fb_reset">
        <div style="position: absolute; top: -10000px; width: 0px; height: 0px">
          <div></div>
        </div>
        <div
          class="fb_iframe_widget fb_invisible_flow"
          fb-iframe-plugin-query="app_id=&amp;attribution=biz_inbox&amp;container_width=0&amp;current_url=https%3A%2F%2Fwww.autoyoutube.pro%2F&amp;is_loaded_by_facade=true&amp;local_state=%7B%22v%22%3A1%2C%22path%22%3A4%2C%22chatState%22%3A3%2C%22visibility%22%3A%22not-hidden%22%2C%22showUpgradePrompt%22%3A%22dont_wait_for_reply_upsell%22%2C%22greetingVisibility%22%3A%22hidden%22%2C%22shouldShowLoginPage%22%3Afalse%2C%22euit%22%3A1693035998568%7D&amp;locale=en_US&amp;log_id=18c08f4f-9bba-4bf8-a894-3323e9bb25a0&amp;page_id=122105349284001952&amp;request_time=1693295746133&amp;sdk=joey"
        >
          <span style="vertical-align: bottom; width: 1000px; height: 0px"
            ><iframe
              name="fc66cdc108b7a4"
              width="1000px"
              height="1000px"
              data-testid="dialog_iframe"
              title=""
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v17.0/plugins/customerchat.php?app_id=&amp;attribution=biz_inbox&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df17da18dc519f%26domain%3Dwww.autoyoutube.pro%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.autoyoutube.pro%252Ff2eaa45350e6b3%26relation%3Dparent.parent&amp;container_width=0&amp;current_url=https%3A%2F%2Fwww.autoyoutube.pro%2F&amp;is_loaded_by_facade=true&amp;local_state=%7B%22v%22%3A1%2C%22path%22%3A4%2C%22chatState%22%3A3%2C%22visibility%22%3A%22not-hidden%22%2C%22showUpgradePrompt%22%3A%22dont_wait_for_reply_upsell%22%2C%22greetingVisibility%22%3A%22hidden%22%2C%22shouldShowLoginPage%22%3Afalse%2C%22euit%22%3A1693035998568%7D&amp;locale=en_US&amp;log_id=18c08f4f-9bba-4bf8-a894-3323e9bb25a0&amp;page_id=122105349284001952&amp;request_time=1693295746133&amp;sdk=joey"
              style="
                padding: 0px;
                position: fixed;
                z-index: 2147483646;
                border-radius: 16px;
                top: auto;
                background: none;
                width: 399px;
                bottom: 84px;
                max-height: 0px;
                right: 16px;
                height: 373px;
                visibility: visible;
                min-height: 0px;
              "
              class="fb_customer_chat_bounce_out_v2"
            ></iframe
          ></span>
        </div>
        <div
          class="fb_dialog fb_dialog_advanced"
          alignment="right"
          desktop_bottom_spacing="24"
        >
          <div class="fb_dialog_content">
            <iframe
              name="blank_fc66cdc108b7a4"
              width="60px"
              tabindex="-1"
              data-testid="bubble_iframe"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v17.0/plugins/customer_chat/bubble"
              style="
                background: none;
                border-radius: 60px;
                bottom: 24px;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
                display: block;
                height: 60px;
                margin: 0px 12px;
                overflow: visible;
                padding: 0px;
                position: fixed;
                right: 12px;
                top: auto;
                width: 60px;
                z-index: 2147483644;
              "
            ></iframe
            ><iframe
              name="availabilityStatus_fc66cdc108b7a4"
              tabindex="-1"
              data-testid="availabilityStatus_iframe"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v17.0/plugins/customer_chat/bubble"
              style="
                border-radius: 50%;
                bottom: 21.5px;
                height: 15px;
                position: fixed;
                right: 24px;
                width: 15px;
                z-index: 2147483646;
              "
            ></iframe
            ><iframe
              name="unread_fc66cdc108b7a4"
              tabindex="-1"
              data-testid="unread_iframe"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v17.0/plugins/customer_chat/bubble"
              style="
                background: none;
                border-radius: 4pt;
                bottom: 68px;
                height: 24px;
                position: fixed;
                right: 22px;
                width: 20px;
                z-index: 2147483645;
              "
            ></iframe
            ><iframe
              name="greeting_fc66cdc108b7a4"
              tabindex="-1"
              data-testid="greeting_iframe"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/v17.0/plugins/customer_chat/bubble"
              style="
                border: none;
                max-height: 0px;
                min-height: 0px;
                bottom: 96px;
              "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <grammarly-desktop-integration
      data-grammarly-shadow-root="true"
    ></grammarly-desktop-integration>

    <script>
      function toggleFaq(button) {
        const faq = button.parentElement;
        faq.classList.toggle("active");
        const text = faq.querySelector(".faq-text");
        text.style.display = text.style.display === "none" ? "block" : "none";

        if (faq.classList.contains("active")) {
          button.style.transform = "rotate(180deg)";
          button.style.backgroundColor = "#a876aa";
          button.style.borderColor = "#a876aa";
          button.style.color = "#fff";
        } else {
          button.style.transform = "none";
          button.style.backgroundColor = "transparent";
          button.style.borderColor = "#e6e6e6";
          button.style.color = "inherit";
        }
      }
    </script>
  </body>
</html>


`;

export default htmlContent;
