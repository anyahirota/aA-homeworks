{
    entities: {
        users: { 
            2: {
                id: 2,
                spotIds: [2],
                bookingIds: [1, 2],
                reviewIds: [1, 5, 8],
                helpfulIds: [1, 2, 3]
            }
        },
        spots: { 
            1: {
                id: 1, 
                name: "Sunny Meadow", 
                hostId: 1, 
                description: "Sunny Meadow is a beautiful campground. Perfect for a weekend outside of the city. It gives all campers easy access to lakes, forests, and of course, the sunny meadow.", 
                location: "California", 
                type: "Camping",
                pricePerNight: "$30", 
                minimumNights: 2, 
                nearbyAttractions: "Yosemite National Park", 
                lodgingProvided: "", 
                campsiteArea: "Bring your own tents, Up to 8 guests per site, ADA access", 
                campingVehiclesDetails: "", 
                essentials: "Campfires allowed, Toilet available", 
                amenities: "Picnic table available", 
                activities:	"Hiking, Biking, Fishing, Climbing",
                terrain: "Forest, Meadow, Lake",
                weather: "Pretty Sunny",
                elevation: "3,054ft",
                distance: "Not walking distance",
                checkInDetails: "After 12PM",
                checkOutDetails: "Before 11AM",
                cancellationPolicy: "Strict",
                onArrival: "Go straight to camp",
                booking_acceptance: "6 months out", 
                bookingIds: [2, 5], 
                reviewIds: [2]
            }
            2: {
                id: 2,
                name: "Small House",
                hostId: 2,
                description: "Just another tiny house in the woods.",
                location: "California",
                type: "Glamping",
                pricePerNight: "$80",
                minimumNights: 2,
                nearbyAttractions: "Sequoia National Park",
                lodgingProvided: "Cabin, 1 site, Up to 2 guests per site",
                campsiteArea: "",
                campingVehiclesDetails: "",
                essentials: "Campfires allowed, Toilet available",
                amenities: "Potable water available, Showers available, Picnic table available, Bins available",
                activities: "Hiking, Biking, Fishing, Climbing",
                terrain: "Forest, Meadow, Lake",
                weather: "Slightly Cloudy",
                elevation: "3,054ft",
                distance: "Not walking distance",
                checkInDetails: "After 12PM",
                checkOutDetails: "Before 11AM",
                cancellationPolicy: "Moderate",
                onArrival: "Go straight to camp",
                booking_acceptance: "3 months out",
                bookingIds: [6, 7],
                reviewIds: [4]
            }
        },
        bookings: { 
            1: {
                id: 1, 
                spotId: 4, 
                bookerId: 2, 
                checkInDate: 05.18.2020, 
                checkOutDate: 05.21.2020, 
                totalNights: 3, 
                totalPrice: 300, 
                guests: 3
            }
        }, 
        reviews: {
            1: {
                id: 1, 
                title: "Cutest Cabin",
                authorId: 2,
                body: "I loved staying in this cute cabin. It was perfect for a spring getaway.",
                spotId: 4, 
                helpfuls: 2,
                createdAt: 05.30.2020,
            }
        }
    },
    session: {
        currentUser: 2
    },
    ui: {
        modalOpen: false
    },
    errors: {
        sessionErrors: ["Incorrect username/password combination"],
        reviewsErrors: ["Reviews body cannot be blank"], 
        bookingsErrors: ["Number of guests must included"]
    }

}