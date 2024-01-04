
const services = [
    {
        name: "Wedding Decorations",
        image: "https://img.freepik.com/free-photo/rose-petals-cover-green-garden-ready-traditional-hindu-weddi_8353-8879.jpg?w=996&t=st=1704287890~exp=1704288490~hmac=37a8d44af7a4b5dd11150f70b3e8ff32392f3dee07452dfdcc5c4418726fdfcb"

    },
    {
        name: "Massage Men",
        image: "https://img.freepik.com/free-photo/very-relaxed-young-latin-man-getting-deep-tissue-massage-his-back-wellness-spa-clinic_662251-2512.jpg?w=996&t=st=1704287938~exp=1704288538~hmac=d4ed94ea2b8ebd99ef87cff048138392869589ef8bb745e980a4bfc9aef49372"

    },
    {
        name: "Massage Women",
        image: "https://img.freepik.com/free-photo/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort_176420-13956.jpg?w=996&t=st=1704288001~exp=1704288601~hmac=b7731bd4d209a548e9c1b5d9b78baec75e513e6845bfd557da4f70a602fcad70"

    }
    ,
    {
        name: "Beauty Parlour",
        image: "https://img.freepik.com/free-photo/female-visagiste-doing-makeup_23-2148113172.jpg?w=996&t=st=1704288060~exp=1704288660~hmac=69ad4f34f7bea89be0e9fbbcbcc7e6c8c089cbb5c57c16029f2f687c989e4f2b"

    },
    {
        name: "House Cleaning",
        image: "https://img.freepik.com/free-photo/professional-cleaning-service-people-working-together-office_23-2150520596.jpg?w=996&t=st=1704288131~exp=1704288731~hmac=f8a199bba5a8b0bb8e13fe29d9b1d2b0c89596c82590c7c3ab966266b0518498"

    }
]



function RecomServices() {


    return (
        <div className="recomContainer" >
            <h2>Recommended Services</h2>
            <div className="recomServiceContainer" >
                
                {services.map((service) => {
                    return (
                        <div  >
                            <img className="imageR" src={service.image} alt={service.name} />
                            <div>{service.name}</div>
                        </div>
                    )
                })}
                
            </div>
        </div>


    )

}
export default RecomServices