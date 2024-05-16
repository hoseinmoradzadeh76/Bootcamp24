<script setup>

function clear() {
    let res = document.getElementById("result");
    res.value = '';
}


function display(value) {
    let res = document.getElementById("result");
    res.value += value;
}

function equal() {
    
        let res = document.getElementById("result");
        res.value = eval(res.value);

 
}

</script>

<template>
    <div class="container">
        <section class="row-1">
            <input type="text" id='result' />
            <button type='button' class="clear" @click="clear">C</button>
        </section>


        <section class="keys">
            <div>
                <button type="button" class="button" @click="display('7')">7</button>
                <button type="button" class="button" @click="display('8')">8</button>
                <button type="button" class="button" @click="display('9')">9</button>

            </div>
            <div>
                <button type="button" class="button" @click="display('4')">4</button>
                <button type="button" class="button" @click="display('5')">5</button>
                <button type="button" class="button" @click="display('6')">6</button>

            </div>
            <div>
                <button type="button" class="button" @click="display('1')">1</button>
                <button type="button" class="button" @click="display('2')">2</button>
                <button type="button" class="button" @click="display('3')">3</button>

            </div>
            <div>
                <button type="button" class="button" @click="display('0')">0</button>



            </div>

            <div>
                <button type="button" class="operator" @click="display('+')">+</button>
                <button type="button" class="operator" @click="display('-')">-</button>
                <button type="button" class="operator" @click="display('*')">*</button>
                <button type="button" class="button equal" @click="equal()">=</button>
            </div>
        </section>

    </div>

</template>
