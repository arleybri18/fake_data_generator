const fs = require('fs');
const faker = require('faker');

function generateFakeData(index) {
  let companyName = faker.company.companyName();
  const fakeData = {
    "HotelId": index,
    "HotelName": companyName,
    "Website": faker.internet.url(),
    "loc_Lat": faker.address.latitude(),
    "loc_Lng": faker.address.longitude(),
    "loc_Place": faker.address.streetAddress(),
    "loc_City": faker.address.city(),
    "loc_State": faker.address.state(),
    "loc_Country": faker.address.county(),
    "FrontImg": faker.image.business(1234, 2345, true),
    "Gallery": [
      faker.image.business(1234, 2345, true),
      faker.image.nature(1234, 2345, true),
      faker.image.nightlife(1234, 2345, true),
      faker.image.people(1234, 2345, true)
    ],
    "PhoneNumber": faker.phone.phoneNumber(),
    "CountryCode": "+1",
    "Email": faker.internet.email(),
    "HotelDescription": faker.lorem.paragraph(),
    "StarRating": faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
    "ReviewNumber": faker.datatype.number(1000),
    "Tags": [faker.lorem.word(), faker.lorem.word()],
    "SpecialTags": "none",
    "PopularityNumber": faker.datatype.number(50),
    "DateAdded": faker.date.recent(10),
    "TrendingNumber": faker.datatype.number(30),
    "SN_Facebook": "https://www.facebook.com/" + companyName + "/",
    "SN_Twitter": "https://twitter.com/" + companyName + "/",
    "SN_Instagram": "https://instagram.com/" + companyName + "/",
    "SN_Pinterest": "https://www.pinterest.com/" + companyName + "/",
    "Reviews": [
      {
        "Rating": faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        "User": faker.name.findName(),
        "Date": faker.date.recent(10),
        "HotelReview": faker.lorem.paragraph()
      },
      {
        "Rating": faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        "User": faker.name.findName(),
        "Date": faker.date.recent(10),
        "HotelReview": faker.lorem.paragraph()
      },
      {
        "Rating": faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        "User": faker.name.findName(),
        "Date": faker.date.recent(10),
        "HotelReview": faker.lorem.paragraph()
      },
      {
        "Rating": faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
        "User": faker.name.findName(),
        "Date": faker.date.recent(10),
        "HotelReview": faker.lorem.paragraph()
      }
    ],
    "Policies": ["Check-in time: 15:00 PM", "Check-out time: 12:00 AM"],
    "Rooms": [
      {
        "RoomImg": faker.image.business(1234, 2345, true),
        "RoomName": "Deluxe Room with Queen Bed",
        "Amenities": ["Queen", "Shower", "LCD TV", "Couch"],
        "Inclusions": ["Wi-Fi", "Breakfast", "Non Refundable"],
        "OriginalPricePerNight": 958,
        "Discount": 30,
        "About": [
          faker.lorem.paragraph()
        ],
        "Facility": ["Floor 12-20"]
      },
      {
        "RoomImg": faker.image.business(1234, 2345, true),
        "RoomName": "Deluxe Accessible Queen",
        "Amenities": ["King/Twin", "Shower", "LCD TV", "Couch"],
        "Inclusions": ["Wi-Fi", "Breakfast", "Non Refundable"],
        "OriginalPricePerNight": 980,
        "Discount": 30,
        "About": [
          faker.lorem.paragraph()
        ],
        "Facility": ["Floors 21 -35"]
      },
      {
        "RoomImg": faker.image.business(1234, 2345, true),
        "RoomName": "Deluxe Room with King Bed",
        "Amenities": ["King/Twin", "Shower", "LCD TV", "Better Couch"],
        "Inclusions": ["Wi-Fi", "Breakfast", "Non Refundable"],
        "OriginalPricePerNight": 1230,
        "Discount": 5,
        "About": [
          faker.lorem.paragraph()
        ],
        "Facility": ["Floors 36 - 40"]
      },
      {
        "RoomImg": faker.image.business(1234, 2345, true),
        "RoomName": "King Suite ",
        "Amenities": ["King", "Pool", "LCD TV", "Better Couch"],
        "Inclusions": ["Wi-Fi", "Breakfast", "Non Refundable"],
        "OriginalPricePerNight": 1999,
        "Discount": 24,
        "About": [
          faker.lorem.paragraph()
        ],
        "Facility": ["Floor 41"]
      }
    ]
  }
  return fakeData;
}

// generate fake data
const numEntries = 100;
const fakeDataList = Array.from({ length: numEntries }, (_, index) => generateFakeData(index + 1));
// save to file
fs.writeFileSync('fakeData.json', JSON.stringify(fakeDataList, null, 2));
