const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        {
            name: "Pat Smith",
            address: "1 Main Street"
        },
    ],
    type : {
        make: 'Toyota',
        model: 'Corolla',
        cc: '1.8',
    },
    registration : {
        year: 201,
        county: 'WD',
        number: '1058',
    },
    mileage: 1000,
    colour: {
        exterior: 'red',
        interior: {
            texture: 'leather',
            shade: 'cream'
        }
    }
};

console.log(aCar.owner + ' drives a ' + aCar.type.make);

console.log('Reg. = ' + aCar.registration.year + '-' +
    aCar.registration.county + '-' + aCar.registration.number + '.');

console.log('First owner : ' + aCar.previous_owners[0].name + ' - '
    + aCar.previous_owners[0].address);

console.log('It is a ' + aCar.colour.exterior + ' car, ' + aCar.mileage
    + ' mileage, with ' + aCar.colour.interior.texture + ' interior.');