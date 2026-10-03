import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {

    const createProductsList = () =>[
        {
            id: 1,
            name: 'Avocado quinoa bowl',
            image: 'products/product10.jpg',
            price: 650,
            category: 'Bowls',
            description: 'A fresh and filling bowl packed with wholesome ingredients.',
            longDescription: " A nutritious combination of fluffy quinoa, creamy avocado, roasted vegetables, fresh greens, and a light herb dressing."
        },
        {
            id: 2,
            name: 'Mushroom pasta',
            image: 'products/product11.jpg',
            price: 750,
            category: 'Pasta',
            description: 'Rich and comforting pasta with sautéed mushrooms and herbs',
            longDescription: "Al dente pasta tossed in a creamy mushroom sauce with garlic, herbs, and parmesan for a satisfying vegetarian meal."
        },
        {
            id: 3,
            name: 'Veggie wrap',
            image: 'products/product12.jpg',
            price: 900,
            category: 'Wraps',
            description: 'A delicious wrap filled with fresh vegetables and hummus',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
         {
            id: 4,
            name: 'Buddha bowl',
            image: 'products/product1.jpg',
            price: 1000,
            category: 'Bowls',
            description: 'A nutritious bowl filled with quinoa, roasted vegetables, and tahini dressing',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 5,
            name: 'Caprese toast',
            image: 'products/product2.jpg',
            price: 1400,
            category: 'Bowls',
            description: 'A delicious toast topped with fresh mozzarella, tomatoes, and basil',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 6,
            name: 'Thai curry',
            image: 'products/product3.jpg',
            price: 1200,
            category: 'Bowls',
            description: 'A flavorful curry with a blend of spices and vegetables',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
         {
            id: 7,
            name: 'Feta quiche',
            image: 'products/product1.jpg',
            price: 1500,
            category: 'Bowls',
            description: 'A delicious quiche filled with feta cheese and spinach',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 8,
            name: 'Vegetable panini',
            image: 'products/product2.jpg',
            price: 2000,
            category: 'Bowls',
            description: 'A delicious panini filled with fresh vegetables and hummus',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            id: 9,
            name: 'Yogurt parfait',
            image: 'products/product3.jpg',
            price: 1300,
            category: 'Bowls',
            description: 'A refreshing parfait layered with yogurt, berries, and granola',
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }, 
    ]
    const products = ref(createProductsList())

    const selectedProductId = ref(null)
    const selectedProduct = computed(() => {
        return products.value.find(product => product.id === selectedProductId.value)
    })

    function selectProduct(id) {
        selectedProductId.value = id
    }

    const resetProducts = () => {
        products.value = createProductsList()
    }

    function addProduct(data){
        const lastId = products.value.length > 0 ? 
            products.value[products.value.length - 1].id : 0
        data.id = lastId + 1
        products.value.push(data)
    }
    return{ products, selectedProductId, selectedProduct, selectProduct, resetProducts, addProduct}

},
{
    persist: true,
}
)