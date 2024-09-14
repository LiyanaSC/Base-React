//je créer des éléments html avec des fonctions
function Banner() {
    const title = "La maison jungle"
      return (<h1>{title.toUpperCase()}</h1>)
    }
    
function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<section>
                <h2>Panier</h2>
                <ul>
                    <li>Monstera : {monsteraPrice}€</li>
                    <li>Lierre : {ivyPrice}€</li>
                    <li>Fleurs : {flowerPrice}€</li>
                </ul>
                    Total : {monsteraPrice + ivyPrice + flowerPrice }€
            </section>)
}
    // je les renvoie dans le DOM avec ReactDOM.render qui fonctionne comme appendchild
    ReactDOM.render(<div><Banner /><Cart /></div>, document.getElementById('root'))