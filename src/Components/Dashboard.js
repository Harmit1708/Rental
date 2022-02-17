import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { useNavigate } from "react-router-dom";

function Dashboard() {


  

  let navigate = useNavigate();
  const city = [
    { label: "Ahmedabad" },
    { label: "Surat" },
    { label: "Vadodra" },
    { label: "Rajkot" },
    { label: "Bhavnagar" },
    { label: "Jamnagar" },
    { label: "Junagadh" },
    { label: "Gandhinagar" },
    { label: "Gandhidam" },
    { label: "Anand" },
    { label: "Navsari" },
    { label: "Nadiad" },
    { label: "Bharuch" },
    { label: "Mehsana" },
    { label: "Bhuj" },
    { label: "Porbandar" },
    { label: "Valsad" },
    { label: "Vapi" },
    { label: "Somnath" },
    { label: "Patan" },
    { label: "Jodhpur" },
    { label: "Jaipur" },
    { label: "Kota" },
    { label: "Bhiwadi" },
    { label: "Bikaner" },
    { label: "Udaipur" },
    { label: "Ajmer" },
    { label: "Bhilwar" },
    { label: "Alwar" },
    { label: "Sikar" },
    { label: "Bharatpur" },
    { label: "Pali" },
    { label: "Sri Ganganagar" },
    { label: "Hanumangarh" },
    { label: "Beawar" },
    { label: "Pune" },
    { label: "Nagpur" },
    { label: "Nashik" },
    { label: "Thane" },
    { label: "Aurangabad" },
    { label: "Solapur" },
    { label: "Jalgaon" },
    { label: "Amravati" },
    { label: "Kolhapur" },
    { label: "Ulhasnagar" },
    { label: "Malegaon" },
    { label: "Latur" },
    { label: "Dhule" },
    { label: "Ahmednagar" },
    { label: "Miraj" },
    { label: "Chandrapur" },
    { label: "Jalna" },
    { label: "Navi Mumbai" },
    { label: "Satara" },
    { label: "Kamptee" },
    { label: "Gondia" },
    { label: "Achlapur" },
    { label: "Nandurbar" },
    { label: "Wardha" },
    { label: "Hingaghat" },
    { label: "Dhar" },
    { label: "Hubballi-Dharwad" },
    { label: "Mysuru" },
    { label: "Kalaburagi" },
    { label: "Mangaluru" },
    { label: "Belagavi" },
    { label: "Ballari" },
    { label: "Vijayapura" },
    { label: "Shivamogga" },
    { label: "Raichur" },
    { label: "Bidar" },
    { label: "Hospet" },
    { label: "Robertsonpet" },
    { label: "Hassan" },
    { label: "Bhadravati" },
    { label: "Chitradurga" },
    { label: "Udupi" },
    { label: "Kolar" },
    { label: "Mandya" },
    { label: "Chikmagalur" },
    { label: "Gangavati" },
    { label: "Ranebennuru" },
    { label: "Kasaragod" },
    { label: "Kannur" },
    { label: "Alappuza" },
    { label: "Ernakulam" },
    { label: "Idukki" },
    { label: "Kollam" },
    { label: "Kottayam" },
    { label: "Kozikode" },
    { label: "Malappuram" },
    { label: "Palakkad" },
    { label: "Pathanamthitta" },
    { label: "Thiruvananthapuram" },
    { label: "Thrissur" },
    { label: "Wayanad" },
    { label: "Coimbatore" },
    { label: "Madurai" },
    { label: "Tiruchirappalli" },
    { label: "Tiruppur" },
    { label: "Salem" },
    { label: "Erode" },
    { label: "Vellore" },
    { label: "Thoothukkudi" },
    { label: "Dindigul" },
    { label: "Thanjavur" },
    { label: "Ranipet" },
    { label: "Karur" },
    { label: "Nagercoil" },
    { label: "Kanchipuram" },
    { label: "Karaikkudi" },
    { label: "Neyveli" },
    { label: "Cuddalore" },
    { label: "Tiruvannamalai" },
    { label: "Pollachi" },
    { label: "Pudukkottai" },
    { label: "Vaniyambadi" },
    { label: "Ambur" },
    { label: "Nagapattinam" },
    { label: "Visakhapatnam" },
    { label: "Vijayawada" },
    { label: "Guntur" },
    { label: "Nellore" },
    { label: "Kurnool" },
    { label: "Kakinada" },
    { label: "Kadapa" },
    { label: "Tirupati" },
    { label: "Anantapuram" },
    { label: "Vizianagaram" },
    { label: "Eluru" },
    { label: "Nadyal" },
    { label: "Ongole" },
    { label: "Adoni" },
    { label: "Madanapalle" },
    { label: "Machilipatnam" },
    { label: "Tenali" },
    { label: "Proddatur" },
    { label: "Chittor" },
    { label: "Hindupur" },
    { label: "Srikakulam" },
    { label: "Bhimavaram" },
    { label: "Gudivada" },
    { label: "Guntakal" },
    { label: "Dharamavaram" },
    { label: "Tadipatri" },
    { label: "Mangalagiri" },
    { label: "Warangal" },
    { label: "Nizamabad" },
    { label: "Khammam" },
    { label: "Karimnagar" },
    { label: "Ramagundam" },
    { label: "Mahabubnagar" },
    { label: "Nalgonda" },
    { label: "Adilabad" },
    { label: "Suryapet" },
    { label: "Siddipet" },
    { label: "Miryalaguda" },
    { label: "Jagtial" },
    { label: "Indore" },
    { label: "Bhopal" },
    { label: "Jablapur" },
    { label: "Gwalior" },
    { label: "Ujjain" },
    { label: "Sagar" },
    { label: "Dewas" },
    { label: "Satna" },
    { label: "Ratlam" },
    { label: "Rewa" },
    { label: "Murwara" },
    { label: "Singrauli" },
    { label: "Burhanpur" },
    { label: "Khandwa" },
    { label: "Bhind" },
    { label: "Chhindwara" },
    { label: "Guna" },
    { label: "Shivpur" },
    { label: "Vidisha" },
    { label: "Chhatarpur" },
    { label: "Damoh" },
    { label: "Mandsaur" },
    { label: "Khargone" },
    { label: "Neemuch" },
    { label: "Pithapur" },
    { label: "Narmadapuram" },
    { label: "Itarsi" },
    { label: "Sehore" },
    { label: "Morena" },
    { label: "Betul" },
    { label: "Seoni" },
    { label: "Datia" },
    { label: "Nagda" },
    { label: "Dindori" },
    { label: "Raipur" },
    { label: "Durg" },
    { label: "Rajnandgaon" },
    { label: "Raigarh" },
    { label: "Korba" },
    { label: "Jagdalpur" },
    { label: "Dhamtari" },
    { label: "Chirmiri" },
    { label: "Bilaspur" },
    { label: "Bhilai" },
    { label: "Ambikapur" },
    { label: "Mahasamund" },
    { label: "Koriya" },
    { label: "Bhubaneshwar" },
    { label: "Cuttack" },
    { label: "Rourkela" },
    { label: "Berhampur" },
    { label: "Samalpur" },
    { label: "Puri" },
    { label: "Balasore" },
    { label: "Bhadrak" },
    { label: "Baripada" },
    { label: "Kolkata" },
    { label: "Asansol" },
    { label: "Siliguri" },
    { label: "Durgapur" },
    { label: "Bardhaman" },
    { label: "Malda City" },
    { label: "Baharampur" },
    { label: "Shantipur" },
    { label: "Ranaghat" },
    { label: "Haldia" },
    { label: "Krishnanagar" },
    { label: "Jalpaiguri" },
    { label: "Balurghat" },
    { label: "Bankura" },
    { label: "Darjeeling" },
    { label: "Alipurduar" },
    { label: "Purulia" },
    { label: "Jangipur" },
    { label: "Bangaon" },
    { label: "Cooch Behar" },
    { label: "Patna" },
    { label: "Gaya" },
    { label: "Bhagalpur" },
    { label: "Muzaffarpur" },
    { label: "Purina" },
    { label: "Begusarai" },
    { label: "Katihar" },
    { label: "Munger" },
    { label: "Chhapra" },
    { label: "Danapur" },
    { label: "Hajipur" },
    { label: "Dehri" },
    { label: "Siwan" },
    { label: "Motihari" },
    { label: "Nawada" },
    { label: "Bagaha" },
    { label: "Buxar" },
    { label: "Sitamarhi" },
    { label: "Jamalpur" },
    { label: "Jehanabad" },
    { label: "Aurangabad" },
    { label: "Jamshedpur" },
    { label: "Dhanbad" },
    { label: "Ranchi" },
    { label: "Bokaro" },
    { label: "Deoghar" },
    { label: "Phusro" },
    { label: "Hazaribagh" },
    { label: "Giridih" },
    { label: "Ramgarh" },
    { label: "Medininagar" },
    { label: "Chirkunda" },
    { label: "Meerut" },
    { label: "Saharanpur" },
    { label: "Ghaziabad" },
    { label: "Noida" },
    { label: "Aligarh" },
    { label: "Agra" },
    { label: "Moradabad" },
    { label: "Bareily" },
    { label: "Etawah" },
    { label: "Jhansi" },
    { label: "Lucknow" },
    { label: "Kanpur" },
    { label: "Prayagraj" },
    { label: "Varanasi" },
    { label: "Ayodhya" },
    { label: "Basti" },
    { label: "Gorakhpur" },
    { label: "Faridabad" },
    { label: "Gurugram" },
    { label: "Panipat" },
    { label: "Ambala" },
    { label: "Yamunagar" },
    { label: "Rohtak" },
    { label: "Sonipat" },
    { label: "Bhiwani" },
    { label: "Ludhiana" },
    { label: "Amritsar" },
    { label: "Jalandhar" },
    { label: "Patiala" },
    { label: "Bathinda" },
    { label: "Mohali" },
    { label: "Batala" },
    { label: "Pathankot" },
    { label: "Firozpur" },
    { label: "Malerkotla" },
    { label: "Khanna" },
    { label: "Muktsar" },
    { label: "Sunam" },
    { label: "Srinagar" },
    { label: "Jammu" },
    { label: "Anantnag" },
    { label: "Shimla" },
    { label: "Dharamshala" },
    { label: "Solan" },
    { label: "Palampur" },
    { label: "Sundarnagar" },
    { label: "Kullu" },
    { label: "Manali" },
    { label: "Dalhousie" },
    { label: "Rohru" },
    { label: "Jawalamukhi" },
    { label: "Indora" },
    { label: "Kasauli" },
    { label: "Naina Devi" },
    { label: "Kotkhai" },
    { label: "Narkanda" },
    { label: "Sarkaghat" },
    { label: "Una" },
    { label: "Dehradun" },
    { label: "Haridwar" },
    { label: "Roorke" },
    { label: "Rishikesh" },
    { label: "Kashipur" },
    { label: "Hadwani" },
    { label: "Rudrapur" },
    { label: "Gangtok" },
    { label: "Namchi" },
    { label: "Udalguri" },
    { label: "Karimganj" },
    { label: "Cachar" },
    { label: "Kampur" },
    { label: "Dhubri" },
    { label: "Sivasagar" },
    { label: "Guwahati" },
    { label: "Silchar" },
    { label: "Jorhat" },
    { label: "Papum Pare" },
    { label: "Changlang" },
    { label: "Lohit" },
    { label: "West Siang" },
    { label: "Tirap" },
    { label: "East Siang" },
    { label: "Kuma Kurg" },
    { label: "Dimapur" },
    { label: "Kiphire" },
    { label: "Kohima" },
    { label: "Longleng" },
    { label: "Mon" },
    { label: "Phek" },
    { label: "Tuensang" },
    { label: "Wokha" },
    { label: "Noklak" },
    { label: "Chandel" },
    { label: "Imphal East" },
    { label: "Imphal West" },
    { label: "Senapati" },
    { label: "Thoubal" },
    { label: "Churachandpur" },
    { label: "Dhalai" },
    { label: "Nort" },
    { label: "Sout" },
    { label: "Wes" },
    { label: "Mamit" },
    { label: "Aizawal" },
    { label: "Kolasib" },
    { label: "Champhai" },
    { label: "Serchhip" },
    { label: "Saiha" },
    { label: "Lawngtlai" },
  ];

  let select = [
    {
      label: "Hourly/Daily",
    },
    {
      label: "30 Day Booking",
    },
  ];

  const [value, setValue] = React.useState([null, null]);

  let products = [
    {
      label: "Camera",
    },
    {
      label: "EV Bike",
    },
    {
      label: "Bicycle",
    },
    {
      label: "Tripad",
    },
    {
      label: "Atomos Shogun Monitor",
    },
  ];

  // let handlesubmit = () => {
  //   if (TextField.params === products[0]) {
  //     console.log("Hy");
  //   }
  // }
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (event, value) => setSelectedOptions(value);

  const handleSubmit = () => {
    if (selectedOptions.label === "Camera") {
      navigate("/camera");
    } else if (selectedOptions.label === "EV Bike") {
      navigate("/ev-bike");
    } else if (selectedOptions.label === "Bicycle") {
      navigate("/bicycle");
    } else if (selectedOptions.label === "Tripad") {
      navigate("/tripad");
    } else if (selectedOptions.label === "Atomos Shogun Monitor") {
      navigate("/atmos-shougn-monitor");
    }
  };

  return (
    <div>
      <div className="text-center" style={{ marginTop: "250px" }}>
        <h1>RENT TODAY, OWN TOMMOROW</h1>
        <div className="grid bg-white container mt-5">
          <Autocomplete
            className="m-auto"
            id="country-select-demo"
            sx={{ width: 300 }}
            options={city}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  // src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                className="pr-2 pl-2"
                {...params}
                label="Select City"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={select}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Hourly / Daily" />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <Autocomplete
            autoHighlight
            className="ml-4"
            disablePortal
            id="combo-box-demo"
            options={products}
            onChange={handleChange}
            // filterSelectedOptions
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Products" />}
          />
        </div>
        <button
          className="btn btn-primary m-auto mt-5"
          style={{ width: "200px" }}
          onClick={() => handleSubmit()}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
