<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                    <v-carousel-item src="/foodimages/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/foodimages/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/foodimages/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/foodimages/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- About us -->
     <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align="center">
                    <v-card-title>Welcome to Plantd</v-card-title>
                    <v-card-text class="text-body-large">Plantd is a vegetarian food platform created to make plant based eating more accessible, enjoyable, and inspiring. We bring together a variety of vegetarian meals, recipes, and food ideas to help people discover new flavours and make better choices for everyday eating.</v-card-text>
                    <v-card-text class="text-body-large">Whether you are a long time vegetarian, exploring plant based meals for the first time, or simply looking for fresh and nutritious food options, Plant’d provides a simple space to discover meals that fit your lifestyle. Our goal is to make vegetarian food easy to explore, enjoyable to prepare, and something everyone can appreciate.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- Shop options -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/foodimages/card1.jpg" cover></v-img>
                    <v-card-title>Discover</v-card-title>
                    <v-card-text>Browse a curated selection of vegetarian dishes for every taste and occasion.</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/foodimages/card2.jpg" cover></v-img>
                    <v-card-title>Explore</v-card-title>
                    <v-card-text>Find new flavours, ingredients, and meal ideas to inspire you.</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/foodimages/card3.jpg" cover></v-img>
                    <v-card-title>Save</v-card-title>
                    <v-card-text>Create a personal collection of meals you want to come back to.</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card width="300px" color="primary">
                    <v-img src="/foodimages/card4.jpg" cover></v-img>
                    <v-card-title>Get inspired</v-card-title>
                    <v-card-text>Turn everyday ingredients into delicious ideas worth trying.</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- Footer -->
      <v-container max-width="100%" class="mt-16 bg-secondary" >
        <v-row>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Subscribe to our mailing list</v-card-title>
                    <v-card-text>Get the latest news, health tips, and meal updates delivered to your inbox.</v-card-text>
                    <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4" bg-color="white">
                        <template v-slot:append-inner>
                        <v-btn color="primary" > Subscribe </v-btn>
                        </template>
                    </v-text-field>
                    <div class="text-center mb-4">
                        <p>Follow us on:</p>
                        <v-icon icon="mdi-instagram"></v-icon>
                        <v-icon icon="mdi-twitter"></v-icon>
                        <v-icon icon="mdi-facebook"></v-icon>
                    </div>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title> Contact Information</v-card-title>
                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            Plantd 
                        </p>
                        <p> 123, Main Street Madaraka, Nairobi </p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            +254712345678
                        </p>
                        <p>
                            <v-icon icon="mdi-email-outline"></v-icon>
                            info@plantd.com
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card height="300px" color="secondary" flat>
                    <v-card-title> Quick Links</v-card-title>
                    <v-card-text>About Us</v-card-text>
                    <v-card-text>Shops</v-card-text>
                    <v-card-text>Products</v-card-text>
                    <v-card-text>News and Events</v-card-text>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
</template>