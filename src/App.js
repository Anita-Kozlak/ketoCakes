import React, {useState} from "react";


function App() {

  const [makaKokosowa, setMakaKokosowa] = useState(false)
  const [addedMakaKokosowa, setAddedMakaKokosowa] = useState('')
  const [makaMigdalowa, setMakaMigdalowa] = useState(false)
  const [addedMakaMigdalowa, setAddedMakaMigdalowa] = useState('')
  const [czekolada, setCzekolada] = useState(false)
  const [addedCzekolada, setAddedCzekolada] = useState('')
  const [masloOrzechowe, setMasloOrzechowe] = useState(false)
  const [addedMasloOrzechowe, setAddedMasloOrzechowe] = useState('')
  const [stanApp, setStanApp] = useState('')
  const addMakaKokosowa = (e) => {
    setMakaKokosowa(prevState => prevState === false ? true : false )
    setAddedMakaKokosowa(makaKokosowa === false ? e.target.value : '')
  }
  const addMakaMigdalowa = (e) => {
    setMakaMigdalowa(prevState => prevState === false ? true : false )
    setAddedMakaMigdalowa(makaMigdalowa=== false ? e.target.value : '')
  }
  const addCzekolada = (e) => {
    setCzekolada(prevState => prevState === false ? true : false )
    setAddedCzekolada(czekolada === false ? e.target.value : '')
  }
  const addMasloOrzechowe = (e) => {
    setMasloOrzechowe(prevState => prevState === false ? true : false )
    setAddedMasloOrzechowe(masloOrzechowe === false ? e.target.value : '')
  }


  // const newRecipe = {
  //     flour: {
  //         makaKokosowa,
  //         makaMigdalowa,
  //     },
  //     products: {
  //         czekolada,
  //         masloOrzechowe,
  //         kokos,
  //         smietanka,
  //         sernik,
  //         marcepan
  //     },
  //     fruits: {
  //         truskawka,
  //         malina,
  //         jablko
  //     }
  //
  // };




  return (
      <div style={{backgroundColor: "white", paddingTop: 100, fontFamily: 'Indie Flower'}} className="ketoCakes">
        <header className="ketoCakes__header">
          <div className="container" style={{display: "flex", alignItems: "center", color: "rgb(62,150,148)"}}>
            <img src='data:image/png;base64,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' style={{width: 300, height: 300, borderRadius: "50%", }}/>
            <h1 style={{fontFamily: 'Henny Penny', fontSize: 70}}>KetoCakes</h1>

          </div>
        </header>
        <main className='products'>
          <h1 style={{marginBottom: 50, marginTop: 100}}>Składniki do wyboru:</h1>
          <div className="products__list" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="fluor">
              <h2>Mąka</h2>
              <h3>Mąka kokosowa
                <label>
                  <input onChange={addMakaKokosowa} value='mąka kokosowa' type="checkbox" id="chkProdTomove"/>
                  <span className="check-box-effect"></span>
                </label></h3>

              <h3>Mąka migdałowa<label>
                <input onChange={addMakaMigdalowa} value='mąka migdałowa' type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h3>
            </div>
            <div className="taste">
              <h2>Smak</h2>
              <h4>Czekolada<label>
                <input onChange={addCzekolada} value=' czekolada' type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Masło orzechowe <label>
                <input onChange={addMasloOrzechowe} value='masło orzechowe' type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Kokos<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Śmietanka<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Sernik<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Marcepan<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
            </div>
            <div className="fruits">
              <h2>Owoce</h2>
              <h4>Truskawka<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Malina<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Jabłko<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>
              <h4>Cytryna<label>
                <input type="checkbox" id="chkProdTomove"/>
                <span className="check-box-effect"></span>
              </label></h4>

            </div>


          </div>
          <p>{addedMakaKokosowa}</p>
          <p>{addedMakaMigdalowa}</p>
          <p>{addedCzekolada}</p>
          <p>{addedMasloOrzechowe}</p>

          <button style={{width: 200, height: 50, marginTop: 100, marginBottom: 100, fontFamily: 'Indie Flower'}}>Szukaj przepisów</button>
          <h1 style={{float: 'right', marginTop: 70}}>Lista Twoich przepisów: 1</h1>
        </main>
      </div>
  )

}

export default App;

