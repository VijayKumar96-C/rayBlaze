import Header from "./Header"
import WeddingServices from "./WeddingServices"
import RecomServices from "./RecomServices"
import AdCard from "./ResubaleComponents/AdCard"
import PlayStore from "./PlayStore"
import Footer from "./Footer"
import ServiceCard from "./ServiceCard"



const weddingServices = [
    {
        id: 1,
        name: "Party Makeup and Hair",
        image: "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg?w=996&t=st=1704291493~exp=1704292093~hmac=ef251756af735f08bf6faccb8c118d185aa12e246d19df76df563bbe34c6c367",
        price: "2500",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 2,
        name: "Party Makeup and Hair",
        image: "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg?w=996&t=st=1704291493~exp=1704292093~hmac=ef251756af735f08bf6faccb8c118d185aa12e246d19df76df563bbe34c6c367",
        price: "2500",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 3,
        name: "Party Makeup and Hair",
        image: "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg?w=996&t=st=1704291493~exp=1704292093~hmac=ef251756af735f08bf6faccb8c118d185aa12e246d19df76df563bbe34c6c367",
        price: "2500",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 4,
        name: "Party Makeup and Hair",
        image: "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg?w=996&t=st=1704291493~exp=1704292093~hmac=ef251756af735f08bf6faccb8c118d185aa12e246d19df76df563bbe34c6c367",
        price: "2500",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },

]
const paintingServices = [
    {
        id: 1,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=996&t=st=1704294373~exp=1704294973~hmac=17f5dd6e01f1b04a8b91945fcdd4477dd630eee4f4bddff336f86c96d554d94f",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 2,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=996&t=st=1704294373~exp=1704294973~hmac=17f5dd6e01f1b04a8b91945fcdd4477dd630eee4f4bddff336f86c96d554d94f",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 3,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=996&t=st=1704294373~exp=1704294973~hmac=17f5dd6e01f1b04a8b91945fcdd4477dd630eee4f4bddff336f86c96d554d94f",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 4,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=996&t=st=1704294373~exp=1704294973~hmac=17f5dd6e01f1b04a8b91945fcdd4477dd630eee4f4bddff336f86c96d554d94f",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },


]
const cleaningServices = [
    {
        id: 1,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?w=996&t=st=1704288131~exp=1704288731~hmac=f8a199bba5a8b0bb8e13fe29d9b1d2b0c89596c82590c7c3ab966266b0518498",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 2,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?w=996&t=st=1704288131~exp=1704288731~hmac=f8a199bba5a8b0bb8e13fe29d9b1d2b0c89596c82590c7c3ab966266b0518498",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 3,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?w=996&t=st=1704288131~exp=1704288731~hmac=f8a199bba5a8b0bb8e13fe29d9b1d2b0c89596c82590c7c3ab966266b0518498",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },
    {
        id: 4,
        name: "House Painting",
        image: "https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?w=996&t=st=1704288131~exp=1704288731~hmac=f8a199bba5a8b0bb8e13fe29d9b1d2b0c89596c82590c7c3ab966266b0518498",
        price: "25000",
        rating: 4.8,
        reviews: 13,
        place: "Delhi"
    },


]

function DashBoard() {
    return (
        <div>
            <Header />
            <RecomServices />
            <WeddingServices services={weddingServices} text='Wedding services' />
            <WeddingServices services={paintingServices} text='Painting & Renovation' />
            <WeddingServices services={cleaningServices} text='Home Cleaning' />
            <AdCard />
            <PlayStore />
            <Footer />
        </div>
    )
}

export default DashBoard