<template>
    <div class="container">
        <h1 class="text-center text-primary">Products</h1>
        <ul class="list-group">
            <li class="list-group-item text-primary" v-for="product in products" :key="product.id">
                {{ product.title }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async getdata() {
            const response = await fetch("http://localhost:3000/products");
            const data = await response.json();
            this.products = data;
        },
    },
    mounted() {
        this.getdata();
    },
};
</script>
