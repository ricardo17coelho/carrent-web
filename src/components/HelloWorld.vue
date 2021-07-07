<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                    :src="require('../assets/car-rental-logo.png')"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to Carrent
                </h1>
                <v-btn @click="getAllCarClasses">
                    <v-icon left>mdi-database</v-icon>
                    Reques GetAllCarClasses
                </v-btn>
                <v-btn @click="getAllCarClassesAxios">
                    <v-icon left>mdi-database</v-icon>
                    Axios GetAllCarClasses
                </v-btn>

                <div v-for="(carClass, idx) in carClasses" :key="idx">
                    id: {{ carClass.id }} pricePerDay:
                    {{ carClass.pricePerDay }} type: {{ carClass.type }}
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import request from "@/util/request";
export default {
    name: "HelloWorld",

    data: () => ({
        carClasses: [],
    }),
    methods: {
        getAllCarClasses() {
            request
                .post("CarClass")
                .then((respData) => {
                    this.carClasses = respData;
                    this.$toast.success("CarClasses loaded");
                })
                .catch((error) => {
                    console.log(error);
                    this.$toast.error("Get CarClasses error");
                });
        },
        getAllCarClassesAxios() {
            axios({
                method: "get",
                url: "/CarClass",
            })
                .then((response) => {
                    console.warn("response", response);
                    const respData = response.data;
                    this.carClasses = respData;
                    this.$toast.success("CarClasses loaded");
                })
                .catch((error) => {
                    console.log(error);
                    this.$toast.error("Get CarClasses error");
                });
        },
    },
};
</script>
