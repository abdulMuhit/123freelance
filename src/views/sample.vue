<template>
  <div class="grid-container">
    <div class="grid-item item-1">item 1 HEADER</div>
    <div class="grid-item item-2">item 2 NAV </div>
    <div class="grid-item item-3">item 3 MAIN </div>
    <div class="grid-item item-4">item 4 ADS</div>
    <div class="grid-item item-5">item 5 FOOTER</div>
  </div>
</template>

<script>
export default {
  name: "sample"
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 30px;
}

/*
.grid-container {
  height: 100vh;
  border: 10px solid #14a76c;
  display: grid;
  grid-template-rows: 200px 200px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.grid-item {
  background-color: #ccc;
  border: 4px solid #ff652f;
  padding: 20px;
}

.item-1 {
  grid-column: 1 / 3;
}
.item-2 {
  grid-area: 1 / 3 / 3 / 4;
  z-index: 1;
}
.item-3 {
  grid-area: 2 / 1 / span 3 / span 2;
}
.item-4 {
  grid-area: 2 / 2 / span 2 / span 2;
}
.item-5 {
}
 */

.grid-container {
  height: 100vh;
  border: 10px solid #14a76c;
  display: grid;
    grid-template-areas: 
    "header header header"
    "nav main ads"
    "footer footer footer";
    
}

.grid-item {
  background-color: #ccc;
  border: 4px solid #ff652f;
  padding: 20px;
}

.item-1 {
  grid-area: header;
}
.item-2 {
  grid-area: nav;
}
.item-3 {
  grid-area: main;
}
.item-4 {
  grid-area: ads;
}
.item-5 {
  grid-area: footer;
}
</style>