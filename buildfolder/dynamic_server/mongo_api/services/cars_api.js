"use strict";

var cov_10nzqfryqh = function () {
  var path = "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\services\\cars_api.js";
  var hash = "706f32207df8593444c0730f7ae091ddc08b9a87";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Obiajulu\\Desktop\\commute\\commute-dev-Proj-repo\\server\\dynamic_server\\mongo_api\\services\\cars_api.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 346,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "706f32207df8593444c0730f7ae091ddc08b9a87"
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
var allCars = (cov_10nzqfryqh.s[0]++, [{
  "car_name": "Chevrolet Express LT 3500 3dr Ext Van (6.6L 8cyl Turbodiesel 6A) 2017",
  "model_id": 71107,
  "model_make_id": "Chevrolet",
  "model_name": "Express",
  "model_trim": "LT 3500 3dr Ext Van (6.6L 8cyl Turbodiesel 6A)",
  "model_year": 2017
}, {
  "car_name": "Chevrolet Express LT 2500 3dr Van (4.8L 8cyl 6A) 2017",
  "model_id": 71108,
  "model_make_id": "Chevrolet",
  "model_name": "Express",
  "model_trim": "LT 2500 3dr Van (4.8L 8cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Ford Focus ST 4dr Hatchback w/EcoBoost (2.0L 4cyl Turbo 6M) 2017",
  "model_id": 71109,
  "model_make_id": "Ford",
  "model_name": "Focus ST",
  "model_trim": "4dr Hatchback w/EcoBoost (2.0L 4cyl Turbo 6M)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon XLE 4dr Sedan (3.5L 6cyl 6A) 2017",
  "model_id": 71110,
  "model_make_id": "Toyota",
  "model_name": "Avalon",
  "model_trim": "XLE 4dr Sedan (3.5L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon Limited 4dr Sedan (3.5L 6cyl 6A) 2017",
  "model_id": 71111,
  "model_make_id": "Toyota",
  "model_name": "Avalon",
  "model_trim": "Limited 4dr Sedan (3.5L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon XLE Touring 4dr Sedan (3.5L 6cyl 6A) 2017",
  "model_id": 71112,
  "model_make_id": "Toyota",
  "model_name": "Avalon",
  "model_trim": "XLE Touring 4dr Sedan (3.5L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon XLE Premium 4dr Sedan (3.5L 6cyl 6A) 2017",
  "model_id": 71113,
  "model_make_id": "Toyota",
  "model_name": "Avalon",
  "model_trim": "XLE Premium 4dr Sedan (3.5L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon XLE Touring SE 4dr Sedan (3.5L 6cyl 6A) 2017",
  "model_id": 71114,
  "model_make_id": "Toyota",
  "model_name": "Avalon",
  "model_trim": "XLE Touring SE 4dr Sedan (3.5L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon Hybrid XLE Premium 4dr Sedan (2.5L 4cyl gas/electric hybrid CVT) 2017",
  "model_id": 71115,
  "model_make_id": "Toyota",
  "model_name": "Avalon Hybrid",
  "model_trim": "XLE Premium 4dr Sedan (2.5L 4cyl gas/electric hybrid CVT)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon Hybrid XLE Touring 4dr Sedan (2.5L 4cyl gas/electric hybrid CVT) 2017",
  "model_id": 71116,
  "model_make_id": "Toyota",
  "model_name": "Avalon Hybrid",
  "model_trim": "XLE Touring 4dr Sedan (2.5L 4cyl gas/electric hybrid CVT)",
  "model_year": 2017
}, {
  "car_name": "Toyota Avalon Hybrid Limited 4dr Sedan (2.5L 4cyl gas/electric hybrid CVT) 2017",
  "model_id": 71117,
  "model_make_id": "Toyota",
  "model_name": "Avalon Hybrid",
  "model_trim": "Limited 4dr Sedan (2.5L 4cyl gas/electric hybrid CVT)",
  "model_year": 2017
}, {
  "car_name": "Kia Sedona L 4dr Minivan (3.3L 6cyl 6A) 2017",
  "model_id": 71118,
  "model_make_id": "Kia",
  "model_name": "Sedona",
  "model_trim": "L 4dr Minivan (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Kia Sedona LX 4dr Minivan (3.3L 6cyl 6A) 2017",
  "model_id": 71119,
  "model_make_id": "Kia",
  "model_name": "Sedona",
  "model_trim": "LX 4dr Minivan (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Kia Sedona SX 4dr Minivan (3.3L 6cyl 6A) 2017",
  "model_id": 71120,
  "model_make_id": "Kia",
  "model_name": "Sedona",
  "model_trim": "SX 4dr Minivan (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Kia Sedona SX-Limited 4dr Minivan (3.3L 6cyl 6A) 2017",
  "model_id": 71121,
  "model_make_id": "Kia",
  "model_name": "Sedona",
  "model_trim": "SX-Limited 4dr Minivan (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Porsche 911 Carrera 4 GTS 2dr Coupe AWD (3.8L 6cyl 7M) 2017",
  "model_id": 71122,
  "model_make_id": "Porsche",
  "model_name": 911,
  "model_trim": "Carrera 4 GTS 2dr Coupe AWD (3.8L 6cyl 7M)",
  "model_year": 2017
}, {
  "car_name": "Porsche 911 Carrera GTS 2dr Convertible (3.8L 6cyl 7M) 2017",
  "model_id": 71123,
  "model_make_id": "Porsche",
  "model_name": 911,
  "model_trim": "Carrera GTS 2dr Convertible (3.8L 6cyl 7M)",
  "model_year": 2017
}, {
  "car_name": "Porsche 911 Carrera 4 GTS 2dr Convertible AWD (3.8L 6cyl 7M) 2017",
  "model_id": 71124,
  "model_make_id": "Porsche",
  "model_name": 911,
  "model_trim": "Carrera 4 GTS 2dr Convertible AWD (3.8L 6cyl 7M)",
  "model_year": 2017
}, {
  "car_name": "Porsche 911 Carrera GTS 2dr Coupe (3.8L 6cyl 7M) 2017",
  "model_id": 71125,
  "model_make_id": "Porsche",
  "model_name": 911,
  "model_trim": "Carrera GTS 2dr Coupe (3.8L 6cyl 7M)",
  "model_year": 2017
}, {
  "car_name": "Hyundai Santa Fe GLS 4dr SUV (3.3L 6cyl 6A) 2017",
  "model_id": 71126,
  "model_make_id": "Hyundai",
  "model_name": "Santa Fe",
  "model_trim": "GLS 4dr SUV (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Hyundai Santa Fe GLS 4dr SUV AWD (3.3L 6cyl 6A) 2017",
  "model_id": 71127,
  "model_make_id": "Hyundai",
  "model_name": "Santa Fe",
  "model_trim": "GLS 4dr SUV AWD (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Hyundai Santa Fe Limited 4dr SUV (3.3L 6cyl 6A) 2017",
  "model_id": 71128,
  "model_make_id": "Hyundai",
  "model_name": "Santa Fe",
  "model_trim": "Limited 4dr SUV (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Hyundai Santa Fe Limited 4dr SUV AWD (3.3L 6cyl 6A) 2017",
  "model_id": 71129,
  "model_make_id": "Hyundai",
  "model_name": "Santa Fe",
  "model_trim": "Limited 4dr SUV AWD (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Hyundai Santa Fe Limited w/Saddle Interior 4dr SUV (3.3L 6cyl 6A) 2017",
  "model_id": 71130,
  "model_make_id": "Hyundai",
  "model_name": "Santa Fe",
  "model_trim": "Limited w/Saddle Interior 4dr SUV (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Hyundai Santa Fe Limited w/Saddle Interior 4dr SUV AWD (3.3L 6cyl 6A) 2017",
  "model_id": 71131,
  "model_make_id": "Hyundai",
  "model_name": "Santa Fe",
  "model_trim": "Limited w/Saddle Interior 4dr SUV AWD (3.3L 6cyl 6A)",
  "model_year": 2017
}, {
  "car_name": "Toyota Tundra SR5 4dr CrewMax 4WD SB (4.6L 8cyl 6A) 2019",
  "model_id": 75906,
  "model_make_id": "Toyota",
  "model_name": "Tundra",
  "model_trim": "SR5 4dr CrewMax 4WD SB (4.6L 8cyl 6A)",
  "model_year": 2019
}, {
  "car_name": "Toyota Tundra TRD PRO 4dr CrewMax 4WD SB (5.7L 8cyl 6A) 2019",
  "model_id": 75907,
  "model_make_id": "Toyota",
  "model_name": "Tundra",
  "model_trim": "TRD PRO 4dr CrewMax 4WD SB (5.7L 8cyl 6A)",
  "model_year": 2019
}, {
  "car_name": "Toyota Tundra TRD PRO FFV 4dr CrewMax 4WD SB (5.7L 8cyl 6A) 2019",
  "model_id": 75908,
  "model_make_id": "Toyota",
  "model_name": "Tundra",
  "model_trim": "TRD PRO FFV 4dr CrewMax 4WD SB (5.7L 8cyl 6A)",
  "model_year": 2019
}, {
  "car_name": "Toyota Tundra SR5 4dr Double Cab LB (5.7L 8cyl 6A) 2019",
  "model_id": 75909,
  "model_make_id": "Toyota",
  "model_name": "Tundra",
  "model_trim": "SR5 4dr Double Cab LB (5.7L 8cyl 6A)",
  "model_year": 2019
}, {
  "car_name": "Volkswagen Beetle R-Line w/Sunroof | Sound | Navigation 2dr Hatchback (2.0L 4cyl Tur 2019",
  "model_id": 76356,
  "model_make_id": "Volkswagen",
  "model_name": "Beetle",
  "model_trim": "R-Line w/Sunroof | Sound | Navigation 2dr Hatchback (2.0L 4cyl Tur",
  "model_year": 2019
}, {
  "car_name": "Volkswagen Beetle R-Line PZEV w/Sunroof | Sound 2dr Hatchback (2.0L 4cyl Turbo 6AM) 2019",
  "model_id": 76357,
  "model_make_id": "Volkswagen",
  "model_name": "Beetle",
  "model_trim": "R-Line PZEV w/Sunroof | Sound 2dr Hatchback (2.0L 4cyl Turbo 6AM)",
  "model_year": 2019
}, {
  "car_name": "Honda Civic Hybrid w/Leather 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT) 2017",
  "model_id": 71217,
  "model_make_id": "Honda",
  "model_name": "Civic",
  "model_trim": "Hybrid w/Leather 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT)",
  "model_year": 2017
}, {
  "car_name": "Honda Civic Hybrid 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT) 2017",
  "model_id": 71218,
  "model_make_id": "Honda",
  "model_name": "Civic",
  "model_trim": "Hybrid 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT)",
  "model_year": 2017
}, {
  "car_name": "Honda Civic Hybrid w/Navigation 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT 2017",
  "model_id": 71219,
  "model_make_id": "Honda",
  "model_name": "Civic",
  "model_trim": "Hybrid w/Navigation 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT",
  "model_year": 2017
}, {
  "car_name": "Honda Civic Hybrid w/Leather and Navigation 4dr Sedan (1.5L 4cyl gas/electri 2017",
  "model_id": 71220,
  "model_make_id": "Honda",
  "model_name": "Civic",
  "model_trim": "Hybrid w/Leather and Navigation 4dr Sedan (1.5L 4cyl gas/electri",
  "model_year": 2017
}, {
  "car_name": "Nissan Quest Platinum 4dr Minivan (3.5L 6cyl CVT) 2017",
  "model_id": 71221,
  "model_make_id": "Nissan",
  "model_name": "Quest",
  "model_trim": "Platinum 4dr Minivan (3.5L 6cyl CVT)",
  "model_year": 2017
}, {
  "car_name": "Nissan Quest S 4dr Minivan (3.5L 6cyl CVT) 2017",
  "model_id": 71222,
  "model_make_id": "Nissan",
  "model_name": "Quest",
  "model_trim": "S 4dr Minivan (3.5L 6cyl CVT)",
  "model_year": 2017
}, {
  "car_name": "Nissan Quest SV 4dr Minivan (3.5L 6cyl CVT) 2017",
  "model_id": 71223,
  "model_make_id": "Nissan",
  "model_name": "Quest",
  "model_trim": "SV 4dr Minivan (3.5L 6cyl CVT)",
  "model_year": 2017
}, {
  "car_name": "Nissan Quest SL 4dr Minivan (3.5L 6cyl CVT) 2017",
  "model_id": 71224,
  "model_make_id": "Nissan",
  "model_name": "Quest",
  "model_trim": "SL 4dr Minivan (3.5L 6cyl CVT)",
  "model_year": 2017
}, {
  "car_name": "McLaren 650S Spider 2dr Convertible (3.8L 8cyl Turbo 7AM) 2017",
  "model_id": 71225,
  "model_make_id": "McLaren",
  "model_name": "650S Spider",
  "model_trim": "2dr Convertible (3.8L 8cyl Turbo 7AM)",
  "model_year": 2017
}, {
  "car_name": "McLaren 650S Coupe 2dr Coupe (3.8L 8cyl Turbo 7AM) 2017",
  "model_id": 71226,
  "model_make_id": "McLaren",
  "model_name": "650S Coupe",
  "model_trim": "2dr Coupe (3.8L 8cyl Turbo 7AM)",
  "model_year": 2017
}, {
  "car_name": "Lexus LS 600h L 4dr Sedan AWD (5.0L 8cyl gas/electric hybrid CVT) 2017",
  "model_id": 71227,
  "model_make_id": "Lexus",
  "model_name": "LS 600h L",
  "model_trim": "4dr Sedan AWD (5.0L 8cyl gas/electric hybrid CVT)",
  "model_year": 2017
}, {
  "car_name": "Kia Soul EV + 4dr Wagon (electric DD) 2017",
  "model_id": 71228,
  "model_make_id": "Kia",
  "model_name": "Soul EV",
  "model_trim": "+ 4dr Wagon (electric DD)",
  "model_year": 2017
}]);
var _default = allCars;
exports["default"] = _default;
//# sourceMappingURL=cars_api.js.map