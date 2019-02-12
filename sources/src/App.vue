<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
html * {
    box-sizing: border-box;
}

body,
html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    padding: 0 1em;
    width: 100%;
    max-width: 900px;
    margin: 1em auto;
}

html {
    font-size: 16px;
    font-family: 'Roboto Mono', sans-serif;
}

button,
input {
    font-family: inherit;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
    font-weight: 500;
    text-align: center;
    margin-top: 0;
}

.flex {
    display: flex;
    &-v {
        flex-direction: column;
        &.flex-centerh {
            align-items: center;
        }
        &.flex-centerv {
            justify-content: center;
        }
    }
    &-centerv {
        align-items: center;
    }
    &-centerh {
        justify-content: center;
    }
    &-center {
        justify-content: center;
        align-items: center;
    }
}

.box {
    background: rgba(0,0,0,0.05);
    padding: 0.5em;
    border-radius: 3px;
    margin: 0.75em 1.5em;
    .box {
        margin: 0.5em 1em;
        .box {
            margin: 0.25em 0.5em;
        }
    }
}
</style>
