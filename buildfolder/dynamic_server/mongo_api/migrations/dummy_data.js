"use strict";

var cov_252piajyo8 = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\migrations\\dummy_data.js";
  var hash = "2e0dd9091a9fa54e8c6de3c7fce87cd4888de0cb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\migrations\\dummy_data.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 10
        },
        end: {
          line: 3,
          column: 20
        }
      },
      "1": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 77
        }
      },
      "2": {
        start: {
          line: 5,
          column: 14
        },
        end: {
          line: 5,
          column: 72
        }
      },
      "3": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 7,
          column: 31
        }
      },
      "4": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 57
        }
      },
      "5": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 37
        }
      },
      "6": {
        start: {
          line: 11,
          column: 17
        },
        end: {
          line: 11,
          column: 59
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2e0dd9091a9fa54e8c6de3c7fce87cd4888de0cb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _token_generator = require("../helpers/token_generator");

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var now = (cov_252piajyo8.s[0]++, new Date());
var startOfToday = (cov_252piajyo8.s[1]++, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
var today = (cov_252piajyo8.s[2]++, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
var yesterdayStart = (cov_252piajyo8.s[3]++, new Date());
cov_252piajyo8.s[4]++;
yesterdayStart.setDate(yesterdayStart.getDate() - 1);
cov_252piajyo8.s[5]++;
yesterdayStart.setHours(0, 0, 0, 0);
var oneWeekAgo = (cov_252piajyo8.s[6]++, Date(new Date() - 7 * 60 * 60 * 24 * 1000));
var _default = {
  mechanicRequest: [{
    id: 1,
    user_id: 1,
    location: "9.88888899,-6.3222222000",
    address: '5 Opebi ALLEN IKEJA , LAGOS NIGERIA',
    status: "Pending",
    email: "juwavictor@gmail.com",
    firstname: "saladin",
    lastname: "saladin",
    carbrand: "TOYOTA S3",
    description: "car tyre removed and was hit by a truck driver.",
    images: ["https://commute-bucket.s3.amazonaws.com/car5.jpg"]
  }],
  plan: [{
    id: 1,
    category: 'Individual',
    description: "For individuals who wants to make bookings for taxis"
  }, {
    id: 2,
    category: 'Corporate',
    description: "For corporate firms or organizations"
  }],
  individualPlan: [{
    id: 1,
    plan_category_id: 1,
    plan_name: 'Individual',
    plan_categories: 'Saver',
    description: 'Saver plans lets you pay as you go on this plan',
    price: '5,000'
  }, {
    id: 2,
    plan_category_id: 1,
    plan_name: 'Individual',
    plan_categories: 'Richly',
    description: 'Richly plans lets you pay as you go on this plan',
    price: '15,000'
  }, {
    id: 3,
    plan_category_id: 1,
    plan_name: 'Individual',
    plan_categories: 'Weekend',
    description: 'Weekend plans lets you pay as you go on this plan',
    price: '35,000'
  }, {
    id: 4,
    plan_category_id: 1,
    plan_name: 'Individual',
    plan_categories: 'Special',
    description: 'Special plans lets you pay as you go on this plan',
    price: '85,000'
  }],
  coperatePlan: [{
    id: 1,
    plan_category_id: 2,
    plan_name: 'Corporate',
    plan_categories: 'Corporate Lite',
    description: 'Corporate Lite plan lets you pay as you go on this plan',
    price: '5,000'
  }, {
    id: 2,
    plan_name: 'Corporate',
    plan_categories: 'Corporate Plus',
    description: 'Corporate Plus plan lets you pay as you go on this plan',
    price: '15,000'
  } // {
  //     id :3,
  //     plan_name:'Coperate',
  //     plan_categories:'Coperate Premium',
  //     description:'Premium plans lets you pay as you go on this plan',
  //     price:'35,000',
  // },
  //  {
  //     id :4,
  //     plan_name:'Coperate',
  //     plan_categories:'Coperate Weekend',
  //     description:'Weekend plans lets you pay as you go on this plan',
  //     price:'65,000',
  // }
  ],
  userPlan: [//1
  {
    id: 1,
    plan_id: 'CMT-PLAN-DEMO-ID44343',
    user_id: 1,
    individual_id: 1,
    plan_name: 'Saver',
    plan_category_name: 'Individual',
    duration: '15',
    price: 40000,
    payment_status: 'Pending`',
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    //coperate_id:1,
    itineries: [{
      id: 1,
      certificate_id: 'COMMUTE-123EWW-212-CCC',
      start_location: 'Under bridge Ikeja',
      destination: 'moloko I',
      no_hours: '5',
      start_time: new Date(),
      end_time: new Date(),
      drive_option: "Driver",
      user_id: 1,
      travel_option: 'intracity',
      plan_id: 'CMT-PLAN-DEMO-ID44343',
      user_plan_id: 'CMT-PLAN-DEMO-ID44343',
      drivingschool: 'Yaba secondary driving school',
      status: "Ongoing",
      plan_category: "Saver",
      username: "saladin",
      email: "juwavictor@gmail.com",
      phone_number: "08068291106"
    }, {
      id: 2,
      certificate_id: 'COMMUTE-121EWW-012-CCC',
      start_location: 'Allen avenue',
      destination: 'OKOKO II',
      no_hours: '5',
      start_time: new Date(),
      end_time: new Date(),
      drive_option: "Driver",
      user_id: 1,
      travel_option: 'intercity',
      plan_id: 'CMT-PLAN-DEMO-ID44343',
      user_plan_id: 'CMT-PLAN-DEMO-ID44343',
      drivingschool: 'mile 2 driving school',
      status: "Pending",
      plan_category: "Saver",
      username: "saladin",
      email: "juwavictor@gmail.com",
      phone_number: "08068291106"
    }, {
      id: 3,
      certificate_id: 'COMMUTE-12213EWW-2112-32C',
      start_location: 'AlAKIJA',
      destination: 'MILE II',
      no_hours: '5',
      start_time: new Date(),
      end_time: new Date(),
      drive_option: "Driver",
      user_id: 1,
      travel_option: 'intracity',
      plan_id: 'CMT-PLAN-DEMO-ID44343',
      user_plan_id: 'CMT-PLAN-DEMO-ID44343',
      drivingschool: 'lekkki driving school',
      status: "Pending",
      plan_category: "Saver",
      username: "saladin",
      email: "juwavictor@gmail.com",
      phone_number: "08068291106"
    }, {
      id: 4,
      certificate_id: 'COMMUTE-123EWW-212-CCC',
      start_location: 'Obalende',
      destination: 'Lekki Phase II',
      no_hours: '5',
      start_time: new Date(),
      end_time: new Date(),
      drive_option: "Driver",
      user_id: 1,
      travel_option: 'intracity',
      plan_id: 'CMT-PLAN-DEMO-ID44343',
      user_plan_id: 'CMT-PLAN-DEMO-ID44343',
      drivingschool: 'Yaba secondary driving school',
      status: "Completed",
      plan_category: "Saver",
      username: "saladin",
      email: "juwavictor@gmail.com",
      phone_number: "08068291106"
    }],
    //max of 3 cars selected
    cars_on_plan: [{
      id: 1,
      car_type: 'Toyota',
      car_year: '2012',
      color: 'white',
      model: 'Camry',
      partner_id: 'CMT-PARTNER-12RTR4',
      status: 'Available',
      images: 'https://commute-bucket.s3.amazonaws.com/car5.jpg',
      plate_number: '328ds9-32x',
      isOwnedByCompany: false,
      assigned_driver_name: 'saladin',
      assigned_driver_email: 'juwavictor@gmail.com',
      assigned_driver_location: '6.5355, 3.3087',
      assigned_driver_phone: '08068291106',
      socket_id: 'default-id'
    }, {
      id: 2,
      car_type: 'Toyota',
      car_year: '2012',
      color: 'white',
      model: 'Camry',
      partner_id: 'CMT-PARTNER-54565EW',
      status: 'Available',
      images: 'https://commute-bucket.s3.amazonaws.com/car4.jpg',
      plate_number: '3sa28ds9-32',
      isOwnedByCompany: false,
      assigned_driver_name: 'kudirat',
      assigned_driver_email: 'kudirat@gmail.com',
      assigned_driver_location: '6.5355, 3.3087',
      assigned_driver_phone: '08068291106',
      socket_id: 'default-id'
    }, {
      id: 3,
      car_type: 'Toyota',
      car_year: '2012',
      color: 'white',
      model: 'Camry',
      partner_id: 'CMT-PARTNER-223445',
      status: 'Available',
      images: 'https://commute-bucket.s3.amazonaws.com/car3.jpg',
      plate_number: '232328ds9-32',
      isOwnedByCompany: false,
      assigned_driver_name: 'kudiratu',
      assigned_driver_email: 'kudiratu@gmail.com',
      assigned_driver_location: '6.5355, 3.3087',
      assigned_driver_phone: '08068291106',
      socket_id: 'default-id'
    }]
  }],
  userItinerary: [{
    id: 1,
    certificate_id: 'COMMUTE-123EWW-212-CCC',
    start_location: 'Agege',
    destination: 'moloko I',
    no_hours: '5',
    start_time: new Date(),
    end_time: new Date(),
    drive_option: "Driver",
    user_id: 1,
    travel_option: 'intracity',
    user_plan_id: 'CMT-PLAN-DEMO-ID44343',
    drivingschool: 'Yaba secondary driving school',
    status: "Ongoing",
    plan_category: "Saver",
    plan_id: 'CMT-PLAN-DEMO-ID44343',
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    assigned_driver_id: '1',
    assigned_driver_phone: '08068291107',
    assigned_driver_name: 'saladin',
    assigned_driver_email: 'juwavictordriver@gmail.com'
  }, {
    id: 2,
    certificate_id: 'COMMUTE-121EWW-012-CCC',
    start_location: 'Ijaye',
    destination: 'OKOKO II',
    no_hours: '5',
    start_time: new Date(),
    end_time: new Date(),
    drive_option: "Driver",
    user_id: 1,
    travel_option: 'intercity',
    user_plan_id: 'CMT-PLAN-DEMO-ID44343',
    plan_id: 'CMT-PLAN-DEMO-ID44343',
    drivingschool: 'mile 2 driving school',
    status: "Pending",
    plan_category: "Saver",
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    assigned_driver_id: '1',
    assigned_driver_phone: '08068291107',
    assigned_driver_name: 'saladin',
    assigned_driver_email: 'juwavictordriver@gmail.com'
  }, {
    id: 3,
    certificate_id: 'COMMUTE-12213EWW-2112-32C',
    start_location: 'AlAKIJA',
    destination: 'MILE II',
    no_hours: '5',
    start_time: new Date(),
    end_time: new Date(),
    drive_option: "Driver",
    user_id: 1,
    travel_option: 'intracity',
    user_plan_id: 'CMT-PLAN-DEMO-ID44343',
    plan_id: 'CMT-PLAN-DEMO-ID44343',
    drivingschool: 'lekkki driving school',
    status: "Pending",
    plan_category: "Saver",
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    assigned_driver_id: '1',
    assigned_driver_phone: '08068291107',
    assigned_driver_name: 'saladin',
    assigned_driver_email: 'juwavictordriver@gmail.com'
  }, {
    id: 4,
    certificate_id: 'COMMUTE-123EWW-212-CCC',
    start_location: 'Obalende',
    destination: 'Lekki Phase II',
    no_hours: '5',
    start_time: new Date(),
    end_time: new Date(),
    drive_option: "Driver",
    user_id: 1,
    travel_option: 'intracity',
    user_plan_id: 'CMT-PLAN-DEMO-ID44343',
    plan_id: 'CMT-PLAN-DEMO-ID44343',
    drivingschool: 'Yaba secondary driving school',
    status: "Completed",
    plan_category: "Saver",
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    assigned_driver_id: '1',
    assigned_driver_phone: '08068291107',
    assigned_driver_name: 'saladin',
    assigned_driver_email: 'juwavictordriver@gmail.com'
  }],
  cars: [{
    id: 1,
    car_type: 'Black jack',
    car_year: '2012',
    color: 'white',
    model: 'Reen',
    model_make_id: 'abarth',
    description: 'dummy description for this car',
    inspection_detail: 'CMT-INSP-9943043',
    partner_id: 'CMT-PARTNER-12345',
    status: 'Available',
    images: 'https://commute-bucket.s3.amazonaws.com/car5.jpg',
    license: 'jdjsjds',
    plate_number: '328ds9-32x',
    isOwnedByCompany: false,
    price: "80000",
    assigned_driver_id: '1',
    assigned_driver_name: 'saladin',
    assigned_driver_email: 'juwavictor@gmail.com',
    assigned_driver_location: '6.5355, 3.3087',
    assigned_driver_phone: '08068291106',
    socket_id: 'default-id'
  }, {
    id: 2,
    car_type: 'Toyota',
    car_year: '2012',
    color: 'white',
    model: 'Camry',
    model_make_id: 'acura',
    partner_id: 'CMT-PARTNER-43345',
    status: 'Available',
    images: 'https://commute-bucket.s3.amazonaws.com/car4.jpg',
    plate_number: '3sa28ds9-32',
    price: '30000',
    license: 'jdjsjds',
    isOwnedByCompany: false,
    description: 'dummy description for this car',
    inspection_detail: 'CMT-INSP-9943043',
    assigned_driver_name: 'kudirat',
    assigned_driver_id: '2',
    assigned_driver_email: 'kudirat@gmail.com',
    assigned_driver_location: '6.5355, 3.3087',
    assigned_driver_phone: '08068291106',
    socket_id: 'default-id'
  }, {
    id: 3,
    car_type: 'Morris',
    car_year: '2012',
    color: 'white',
    model: 'Vagen',
    model_make_id: 'audi',
    partner_id: 'CMT-PARTNER-223445',
    status: 'Available',
    images: 'https://commute-bucket.s3.amazonaws.com/car3.jpg',
    price: "170000",
    plate_number: '232328ds9-32',
    isOwnedByCompany: false,
    description: 'dummy description for this car',
    inspection_detail: 'CMT-INSP-9943043',
    assigned_driver_name: 'kudirata',
    assigned_driver_id: '3',
    license: 'jdjsjds',
    assigned_driver_email: 'kudirata@gmail.com',
    assigned_driver_location: '6.5355, 3.3087',
    assigned_driver_phone: '08068291106',
    socket_id: 'default-id'
  }, {
    id: 4,
    car_type: 'Ferari',
    car_year: '2012',
    color: 'wine',
    model: 'Camry',
    model_make_id: 'avanti',
    partner_id: 'CMT-PARTNER-54565',
    status: 'Available',
    images: 'https://commute-bucket.s3.amazonaws.com/car2.jpg',
    plate_number: '328ds9-32',
    isOwnedByCompany: false,
    price: "2000",
    description: 'dummy description for this car',
    inspection_detail: 'CMT-INSP-9943043',
    assigned_driver_name: 'kudiratu',
    assigned_driver_email: 'kudiratu@gmail.com',
    assigned_driver_location: '6.5355, 3.3087',
    assigned_driver_phone: '08068291106',
    assigned_driver_id: '4',
    socket_id: 'default-id',
    license: 'jdjsjds'
  }, {
    id: 5,
    car_type: 'Rolls Royce',
    car_year: '2012',
    color: 'wine',
    model: '3x',
    model_make_id: 'austin',
    partner_id: 'CMT-PARTNER-12RTR4',
    status: 'Available',
    images: 'https://commute-bucket.s3.amazonaws.com/car5.jpg',
    plate_number: '328ds9-32',
    isOwnedByCompany: false,
    price: "2000",
    description: 'dummy description for this car',
    inspection_detail: 'CMT-INSP-9943043',
    assigned_driver_name: 'saladin',
    assigned_driver_email: 'juwavictor@gmail.com',
    assigned_driver_location: '6.5355, 3.3087',
    socket_id: 'default-id',
    license: 'jdjsjds'
  }],
  interventions: [{
    id: 1,
    user_id: 1,
    category: "General Enquiries",
    //'Technical Support', 
    //'Feedback', 
    location: "magbon road",
    comment: "hello world",
    images: "bb.PNG",
    subject: "stolen money",
    status: "Pending",
    ticket_id: "CMT-TKT-" + "20202",
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    response: "Dear User, your ticket has been marked as reviewed and the service team are working on it",
    assigned_to: "saladin"
  }, {
    id: 1,
    user_id: 1,
    category: "Technical Support",
    location: "magbon road",
    comment: "hello world",
    images: "bb.PNG",
    subject: "stolen car",
    status: "Pending",
    ticket_id: "CMT-TKT-" + "20201",
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    response: "Dear User, your ticket has been marked as reviewed and the service team are working on it",
    assigned_to: "saladin"
  }, {
    id: 1,
    user_id: 1,
    category: "Feedback",
    location: "magbon road",
    comment: "hello world",
    images: "bb.PNG",
    subject: "stolen girl friend",
    status: "Pending",
    ticket_id: "CMT-TKT-" + "202033",
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106",
    response: "Dear User, your ticket has been marked as reviewed and the service team are working on it",
    assigned_to: "saladin"
  }],
  partners: [{
    businessName: "Drive suit",
    firstName: "saladin",
    lastName: "saladin",
    email: "juwavictorx@gmail.com",
    password: _token_generator.TokenGenerator.hashPassword('password123'),
    phoneNumber: "08068291106",
    avatar: 'saladinjake.jpg',
    totalCars: 5,
    status: "Active",
    address: "12 drive road ikoyi lagos Nigeria",
    userName: "kings"
  }],
  drivers: [{
    id: 3,
    firstname: 'saladin',
    //firstname
    lastname: 'saladin',
    //lastname
    user_type: 'Individual',
    //othernames
    username: 'saladin',
    //username
    email: 'juwavictord@gmail.com',
    phone_number: '08068291106',
    password: _token_generator.TokenGenerator.hashPassword('password123'),
    is_active: true,
    isVerified: true,
    avatar: 'saladinjake.jpg',
    //saladinjake.jpg
    roles: "Individual Driver",
    balance: "0.00",
    identity_card: "ireoireroiieoroie",
    test_certificate: "hfdhjhfhdfhd",
    notification_count: 0,
    status: "Active",
    car_assigned_name: 'Black jack',
    assigned_car_plate_number: '3sa28ds9-32',
    location: {
      type: "Point",
      coordinates: [6.6233, 3.3313]
    }
  }, {
    id: 4,
    firstname: 'malam',
    //firstname
    lastname: 'Aminu',
    //lastname
    user_type: 'Individual',
    //othernames
    username: 'Kudirat',
    //username
    email: 'kudirat@gmail.com',
    phone_number: '08068291106',
    password: _token_generator.TokenGenerator.hashPassword('password123'),
    is_active: true,
    isVerified: true,
    avatar: 'saladinjake.jpg',
    //saladinjake.jpg
    roles: "Individual Driver",
    balance: "0.00",
    identity_card: "ireoireroiieoroie",
    test_certificate: "hfdhjhfhdfhd",
    notification_count: 0,
    status: "Active",
    car_assigned_name: 'Toyota',
    assigned_car_plate_number: '328ds9-32x',
    location: {
      type: "Point",
      coordinates: [6.6180, 3.3209]
    }
  }, (_ref = {
    id: 5,
    firstname: 'solomon',
    //firstname
    lastname: 'Andas',
    //lastname
    roles: 'Individual Driver',
    user_type: 'Individual',
    //othernames
    username: 'kudirata',
    //username
    email: 'kudirata@gmail.com',
    phone_number: '08068291106',
    password: _token_generator.TokenGenerator.hashPassword('password123'),
    is_active: true,
    isVerified: true,
    avatar: 'saladinjake.jpg'
  }, _defineProperty(_ref, "roles", "Individual Driver"), _defineProperty(_ref, "balance", "0.00"), _defineProperty(_ref, "identity_card", "ireoireroiieoroie"), _defineProperty(_ref, "test_certificate", "hfdhjhfhdfhd"), _defineProperty(_ref, "notification_count", 0), _defineProperty(_ref, "status", "Active"), _defineProperty(_ref, "car_assigned_name", 'Morris'), _defineProperty(_ref, "assigned_car_plate_number", '328ds9-32x'), _defineProperty(_ref, "location", {
    type: "Point",
    coordinates: [6.4281, 3.34219]
  }), _ref), {
    id: 6,
    firstname: 'solon',
    //firstname
    lastname: 'Andas',
    //lastname
    user_type: 'Individual',
    //othernames
    username: 'kudiratu',
    //username
    email: 'kudiratu@gmail.com',
    phone_number: '08068291106',
    password: _token_generator.TokenGenerator.hashPassword('password123'),
    is_active: true,
    isVerified: true,
    avatar: 'saladinjake.jpg',
    //saladinjake.jpg
    roles: "Individual Driver",
    balance: "0.00",
    identity_card: "ireoireroiieoroie",
    test_certificate: "hfdhjhfhdfhd",
    notification_count: 0,
    status: "Active",
    car_assigned_name: 'Ferari',
    assigned_car_plate_number: '328ds9-32x',
    location: {
      type: "Point",
      coordinates: [6.5584, 3.3915]
    }
  }],
  users: [{
    id: 1,
    firstname: 'saladin',
    //firstname
    lastname: 'saladin',
    //lastname
    user_type: 'Individual',
    //othernames
    username: 'saladin',
    //username
    email: 'juwavictor@gmail.com',
    phone_number: '08068291106',
    password: _token_generator.TokenGenerator.hashPassword('password123'),
    is_admin: true,
    //is_admin
    isVerified: true,
    avatar: 'saladinjake.jpg',
    //saladinjake.jpg
    plan_name: 'Saver',
    roles: 'Super Admin',
    view_bookings: 'yes',
    view_quotations: 'yes',
    view_transactions: 'yes',
    view_payments: 'yes',
    view_drivers: 'yes',
    view_sos: 'yes',
    view_partners: 'yes',
    view_package: 'yes',
    view_cars: 'yes',
    view_tickets: 'yes',
    view_faqs: 'yes',
    view_users: 'yes',
    view_admins: 'yes',
    view_settings: 'yes',
    manage_bookings: 'yes',
    manage_quotations: 'yes',
    manage_payments: 'yes',
    manage_drivers: 'yes',
    manage_sos: 'yes',
    manage_partners: 'yes',
    manage_package: 'yes',
    manage_transactions: 'yes',
    manage_cars: 'yes',
    manage_tickets: 'yes',
    manage_faqs: 'yes',
    manage_settings: 'yes',
    manage_users: 'yes',
    manage_admins: 'yes',
    // previledges_rules:[{
    //   view_payments:'yes',
    //   view_transactions:'yes',
    //   view_payments:'yes',
    //   view_quotations:'yes',
    //   view_cars:'yes',
    //   view_drivers:'yes',
    //   view_partners:'yes',
    //   view_sos:'yes',
    //   view_package:'yes',
    //   view_bookings:'yes',
    // }],
    balance: '480000',
    notification_count: 0,
    plan_type: 'Individual'
  }, {
    id: 2,
    firstname: 'Goodguys',
    lastname: 'Goodest',
    user_type: 'Individual',
    username: 'father',
    email: 'codyqwerty@gmail.com',
    phone_number: '08068291106',
    password: _token_generator.TokenGenerator.hashPassword('password123'),
    is_admin: false,
    //is_admin
    isVerified: true,
    avatar: 'saladinjake.jpg',
    //saladinjake.jpg
    plan_name: 'Saver',
    roles: "user",
    status: "Active",
    // previledges_rules:[{
    //   view_payments:'yes',
    //   view_transactions:'yes',
    //   view_payments:'yes',
    //   view_quotations:'yes',
    //   view_cars:'yes',
    //   view_drivers:'yes',
    //   view_partners:'yes',
    //   view_sos:'yes',
    //   view_package:'yes',
    //   view_bookings:'yes',
    // }],
    balance: "0.00",
    notification_count: 0,
    plan_type: 'Individual'
  }],
  redflags: [{
    id: 1,
    user_id: 1,
    // user_id
    location: '3A Dotun Jolasho close',
    //location
    media: ['https://commute-bucket.s3.amazonaws.com/1578984054190_testVideo.webm'],
    plate_number: "22-xx-3232",
    address: "3A Dotun Jolasho close",
    status: "Pending",
    //status
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106"
  }, {
    id: 1,
    user_id: 1,
    // user_id
    location: "3545fAfcv Dotun Jolasho close",
    //location
    media: ['https://commute-bucket.s3.amazonaws.com/1578984054190_testVideo.webm'],
    address: "3A Dotun Jolasho close",
    plate_number: "12333-xewe-3232",
    status: "Pending",
    //status
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106"
  }, {
    id: 1,
    user_id: 1,
    // user_id
    location: "5A Dotun Jolasho close",
    //location
    media: ['https://commute-bucket.s3.amazonaws.com/1578984054190_testVideo.webm'],
    address: "3A Dotun Jolasho close",
    plate_number: "223-xewe-3232",
    status: "Pending",
    //status
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106"
  }, {
    id: 1,
    user_id: 1,
    // user_id
    location: "203A Dotun Jolasho close",
    //location
    media: ['https://commute-bucket.s3.amazonaws.com/1578984054190_testVideo.webm'],
    address: "3A Dotun Jolasho close",
    plate_number: "223-fdtry",
    status: "Completed",
    //status
    username: "saladin",
    email: "juwavictor@gmail.com",
    phone_number: "08068291106"
  }],
  faqs: [{
    id: 1,
    question: "How do i recover my password?",
    answer: "Click on forget password link and enter your email.<br/> An email would be sent to you to activate your new password"
  }, {
    id: 2,
    question: "How do i request for a cab?",
    answer: "After logging in to our platform, click on the plan link on the left side navigation and click on create plan. Follow the steps available for you until you hit the request quote button. After successful entry of your itineries a mail would be sent to you."
  }, {
    id: 3,
    question: "How do i request create an Itinerary?",
    answer: "After logging in to our platform, click on the plan link on the left side navigation and click on create plan. Follow the steps available for you until you hit the request quote button. After successful entry of your itineries a mail would be sent to you."
  }],
  notification: [// {
    //  id:1,
    //  user_id:1,
    //  message: "SOS Message",
    //  type:"success",
    //  description:"The sos message at the location 3rd mainland bridge was sent successfully"
    // },
    //  {
    //  id:2,
    //  user_id:1,
    //  message: "Payment",
    //  type:"success",
    //  description:"The payment for the planned itinerary PLAN22323434 was successfully"
    // },
    //  {
    //  id:3,
    //  user_id:1,
    //  message: "Payment",
    //  type:"information",
    //  description:"Your quote request is slated below. Total payment of N50,000 to be paid."
    // }
  ],
  instagramSettings: [{
    api_mode: "test" // test_secret_key:"",
    // test_public_key:"",
    // live_secret_key:"",
    // live_public_key:""

  }],
  facebookSettings: [{
    api_mode: "test",
    test_secret_key: "93b9f3a55a6dd95b15643e3745cc65fb",
    test_public_key: "1438251769712975",
    // live_secret_key:"",
    // live_public_key:"",
    call_back_url: "http://localhost:12000/api/v1/auth/facebook/callback"
  }],
  googleSettings: [{
    api_mode: "test",
    test_secret_key: "qqe24GwnjJT9USK6hcbkBuA0",
    test_public_key: "1074713618823-ilte2t2mittsv45icmmn1nri0ghbgr3g.apps.googleusercontent.com" // live_secret_key:"",
    // live_public_key:"",

  }],
  awsSettings: [{
    api_mode: "test",
    test_secret_key: "k4oqkNc14uVn1kVoUrGRZMS67nZmHU7OCjfBLQuf",
    test_public_key: "AKIA4UXBI7JVZPYJOU54" // live_secret_key:"",
    // live_public_key:""

  }],
  sendgridSettings: [{
    api_mode: "test",
    test_secret_key: "saladinjake",
    test_public_key: "saladin123!@#" // live_secret_key:"",
    // live_public_key:""

  }],
  paystackSettings: [{
    api_mode: "test",
    test_secret_key: "some random paystack code",
    test_public_key: "jdjsjdkjsdj" // live_secret_key:"",
    // live_public_key:""

  }],
  walletHistory: [{
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-889845",
    username: "saladin",
    phone_number: "08068201107",
    createdDate: startOfToday,
    //today,
    created_at: today,
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393"
  }, {
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-545323",
    username: "saladin",
    phone_number: "08068201107",
    createdDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
    //YESTERDAY, 
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000),
    // new Date(Date.now() - 24*60*60 * 1000),
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393"
  }, {
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-324545",
    createdDate: oneWeekAgo,
    //LASTWEEK, 
    created_at: oneWeekAgo,
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393",
    username: "saladin",
    phone_number: "08068201107"
  }, {
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-12345",
    createdDate: new Date(new Date().getMonth() - 1),
    created_at: new Date(new Date().getMonth() - 1),
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393",
    username: "saladin",
    phone_number: "08068201107"
  }],
  paymentHistory: [{
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-889845",
    username: "saladin",
    phone_number: "08068201107",
    createdDate: startOfToday,
    //today, 
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393",
    quotation_id: 'CMT-QUOT-12334',
    plan_id: 'CMT-PLAN-DEMO-ID44343',
    status: 'Unpaid'
  }],
  quotationHistory: [{
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-889845",
    createdDate: startOfToday,
    //today, 
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393",
    quotation_id: 'CMT-QUOT-12334',
    plan_id: 'CMT-PLAN-DEMO-ID44343',
    status: 'Unpaid',
    username: "saladin",
    phone_number: "08068201107"
  }, {
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-889845",
    createdDate: startOfToday,
    //today, 
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393",
    quotation_id: 'CMT-QUOT-12334',
    plan_id: 'CMT-PLAN-DEMO-ID443434',
    status: 'Failed',
    username: "saladin",
    phone_number: "08068201107"
  }, {
    id: 1,
    full_name: "saladin",
    email: "juwavictor@gmail.com",
    amount: "120000",
    reference: "PAYSTACK-889845",
    createdDate: startOfToday,
    //today, 
    userId: "CMT-USER-" + "DUMMY-ID-DJ920393",
    quotation_id: 'CMT-QUOT-12334',
    plan_id: 'CMT-PLAN-DEMO-ID44343112',
    status: 'Unpaid',
    username: 'saladin',
    phone_number: '08068201107'
  }],
  previledgesA: [{
    previledges_info: 'Simple Admin',
    previledges_description: 'Description for this admin has few previledges'
  }, {
    previledges_info: 'Moderator Admin',
    previledges_description: 'Description for this admin has few previledges lower than the super admin'
  }, {
    previledges_info: 'Super Admin',
    previledges_description: 'Description for this admin has all previledges'
  }],
  inspection: [{
    status: 'Completed',
    description: 'this car is not fully in order. ',
    plate_number: '983cbdds-juduis',
    username: 'saladin',
    email: 'juwavictor@gmail.com',
    time: '7:02:00',
    createdDate: new Date(),
    phone_number: '08068291106'
  }],
  driveTest: [{
    status: 'Completed',
    description: 'aso rock villa',
    test_center: '983cbdds-juduis',
    username: 'saladin',
    email: 'juwavictor@gmail.com',
    createdDate: new Date(),
    phone_number: '08068291106'
  }]
};
exports["default"] = _default;
//# sourceMappingURL=dummy_data.js.map