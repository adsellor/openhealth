const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const institutions = {
  1: "Երեբունի ԲԿ",
  2: "Գրիգոր Լուսավորիչ",
  3: "Հանրապետական",
  4: "Մուրացան"
};

const ughegirsAsObj = {
  1: {
    id: 1,
    patient: {
      firstName: "Համազասպ",
      lastName: "Գյըւլբեկյան",
      middleName: "Արմեն",
      identification: 23456789,
      phone: 74165654
    },
    expires: 30,
    institution: {
      name: "Մուրացան",
      city: "Երեվան",
      phone: 1000000
    },
    diagnosis: "Ինսուլտ",
    goal: "Ընդհանուր ստուգում",
    epicrisisId: 1,
    treatments: [
      { name: "պլօրը կտրել", coast: 550 },
      { name: "նունուշիկ տեղադրել", coast: 550 }
    ],
    roomCoast: 55,
    medicineCoast: 55,
    treatmentCoast: 55,
    otherCoast: 55
  }
};

const smsData = {
  isNeed: false,
  number: "",
  text: ""
};

app.get("/history", (req, res) => {
  res.json(Object.values(ughegirsAsObj));
});

app.get("/ughegir", (req, res) => {
  res.json(Object.values(ughegirsAsObj));
});

app.post("/ughegir", (req, res) => {
  // ughegirsAsObj[req.body.ughegir.id] = req.body.ughegir;
  smsData.isNeed = true;
  smsData.number = "+37491119395";
  smsData.text = "1 - Erebuni, 2 - Lusavorich, 3 - Hanrapetakan, 4 - Muratsan";
  res.send();
});

app.post("/epicrisis", (req, res) => {
  ughegirsAsObj[req.body.ughegirId].epicrisis = req.body.epicrisis;
  res.send();
});

app.post("/feed-back", (req, res) => {
  historyAsObj[req.body.feedBack.id] = req.body.feedBack;
  res.send();
});

app.get("/sms", (req, res) => {
  if (smsData.isNeed) {
    res.json({
      number: smsData.number,
      text: smsData.text
    });
    smsData.isNeed = false;
    smsData.number = "";
    smsData.text = "";
  } else {
    res.json(false);
  }
});

app.post("/sms", (req, res) => {
  console.log("aaaaaaaaaaaaaaa");

  // ughegirsAsObj[2].institution.name = institutions[req.body.answer];
  res.send();
});

app.listen(1337, () => {
  console.log("openDataBack listening on port 1337!");
});
