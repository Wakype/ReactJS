export function Tes(props) {
  return (
    <div>
      <p>Nama : {props.nama}</p>
      <p>Sekolah : {props.sekolah}</p>
    </div>
  )
}

export function Tes2({ mapel, nilai, warna = 'blue', lulus = false }) {
  return (
    <div style={{ color: warna }}>
      <p>Mapel : {mapel} </p>
      <p>Nilai : {nilai} </p>

      <h3>
        {lulus ? 'Selamat Anda telah lulus!' : 'Mohon maaf! Try again next year!'}
      </h3>
    </div>
  )
}