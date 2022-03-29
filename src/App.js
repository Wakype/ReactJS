import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tes, Tes2 } from "./Tes";
import Contoh from "./module/Contoh";
import { Apa, Oke } from "./module/Apa";
import dayjs from "dayjs";

function App() {
  let waktu = new Date();
  let [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <div className="header">
        <h1
          style={{
            color: "white",
            fontSize: "50px",
            // marginTop: '80px',
            backgroundColor: "aquamarine",
            padding: "20px 0px",
          }}
        >
          HELLO WORLD!
        </h1>
        <div className="state">
          <h4>{count}</h4>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Tambah
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Kurang
          </button>
        </div>

        <Tes nama="Hilmi" sekolah="SMK MQ" />
        <Tes nama="Lars" sekolah="SMA MQ" />
        <Tes nama="Nabil" sekolah="AMALIA SCHOOL" />
        <Contoh />

        <Tes2 mapel="Matematika" nilai={100} warna="green" lulus />
        <Tes2 mapel="Bahasa Inggris" nilai={90} />

        <Contoh />
        {/* <Apa /> */}
        <Oke />
        <div>hari ini tanggal {dayjs(waktu).format("DD-M-YYYY HH:mm")}</div>
      </div>
    </React.Fragment>
  );
}

export default App;
