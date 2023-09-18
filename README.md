# 專案初始化

第一次開啟專案時，請先下 npm i 安裝相關依賴

```
npm i
```
PS.假如沒有npm的話，請先安裝Node.js https://nodejs.org/en

# 本專案使用 tailwindcss 寫 css

## 開發指令

本專案使用 tailwindcss 開發，<br/><br/>
開發時請務必先下以下這段指令!<br/>
開發時請務必先下以下這段指令!!<br/>
開發時請務必先下以下這段指令!!!<br/><br/>
才會產生給 index.html 使用的 css 檔案( 目前檔案會編譯到 assets/tailwindcss/output.css )<br/>
```
npm run css
```

## 開發基本心法

### 1.撰寫時直接使用 tailwindcss 的 class 即可
不需要自己寫額外的 class( 除非 tailwindcss 沒有提供。基本上除非極冷門，否則都找的到 )<br/>
不知道想要的 css 對應 class 是什麼，直接官網搜尋 9 成都可以照到對應 class<br/>
例如要找 border-radious 的 class 是什麼，直接官網 search border-radious 即可。<br/>
馬上試試 : https://tailwindcss.com/
### 2.盡量不要寫純css
請到input.css檔案中的 @layer utilities 底下增加自己的 工具class<br/>
透過 @layer utilities 寫class ( 搭配使用@apply 複用已有的class )<br/>
除了添加自己的工具class以外，也可以當做是收納HTML中過長的class串
```css
@layer utilities {
  /* padding */
  .global-padding-x{
    @apply px-7 xs:px-9 sm:px-14 md:px-24 xl:px-28 2xl:px-36
  }
}
```
### 3.亂中有序
tailwindcss的風格，乍看下會一長串很噁心，<br/>
但其實有很多方法可以理出一套邏輯，<br/>
1.透過2.的方法，可以收納整理，<br/>
2.撰寫class時盡可能的依照固定的順序排列<br/>
例如 : position、size、spacing、text、.....RWD
RWD我會排在最後面，可依據個人喜好調整
```html
<!-- 按照固定順序排列css -->
<section class="relative w-full text-white text-h2 font-[900] h-[700px] xl:h-[540px]">
    <!-- 略 -->
</section>
```

# 專案 Design System

建立 Design system 統一管理設計相關的樣式，才不會凌亂無章<br/>
拜託設計師，請盡量給Design System!<br>
拜託設計師，請盡量給Design System!!<br>
拜託設計師，請盡量給Design System!!!<br>

設計師沒給...如果可以的話只能自己整理囉......

## global spacing
檔案位置 : input.css
設置一些全局共用的margin 或 padding 方便統一頁面的對齊<br/>
例如目前有全局的左右padding
```css
/* padding */
.global-padding-x{
    @apply px-7 xs:px-9 sm:px-14 md:px-24 xl:px-28 2xl:px-36
}
```
## Typography systems

檔案位置 : input.css
定義字體大小的系統，專案中調整字型大小，<br/>
請統一使用這裡建立的 Typography systems class<br/>

## 擴充 tailwindcss  
這是另外一種增加客製化class的方式，
目前專案使用在 tailwind.config.js 的 theme 底下的 extend 來擴充，如color或RWD斷點<br/>
一定要在extend中寫，否則會把原本的class覆蓋!( 原本既有class將會無法使用! )<br/>
一定要在extend中寫，否則會把原本的class覆蓋!!( 原本既有class將會無法使用! )<br/>
一定要在extend中寫，否則會把原本的class覆蓋!!!( 原本既有class將會無法使用! )<br/>
```javascript
theme: {
    extend: {
        // 要擴充的東西寫這裡面
    }
}
```
### Color systems
詳見 tailwind.config.js 中的 colors 部分

### RWD 斷點
詳見 tailwind.config.js 中的 screens 部分

## 導入字型檔案

1.先到 input.css 中新增 fontface<br/>

```css
@font-face {
  font-family: "NotoSansCJKtc-Bold";
  src: url("./assets/fonts/NotoSansCJKtc-Bold.otf") format("opentype");
}
```

2.到 tailwind.config.js 中的 fontFamily 導入<br/>
注意 : value 要和 font-family 一樣

```javascript
fontFamily: {
    notosnscjktcbold: ["NotoSansCJKtc-Bold"],
},
```

# 專案使用的插件

## Tailwind Elements
https://tailwind-elements.com/<br/>
目前僅 slider 部分套用此插件
