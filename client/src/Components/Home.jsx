import Sets from "./Sets"
import Header from "./Header"

function Home({ setSelectedSet, cardSet }){
    
    return(
        <div>
            <Header />
            {cardSet.map(set=>{
                return(
                    <Sets key={set.id} set={set} setSelectedSet={setSelectedSet}/>
                )
            })}
        </div>
    )
}

export default Home