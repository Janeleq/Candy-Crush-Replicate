const ScoreBoard = ({score}) => {
    return(
        <div style = {{position: "absolute", right: 1000, backgroundColor: "dimgrey", borderRadius: 20, outlineStyle: "inset"}} >
        <div className="score-board">
            <h2 style ={{textAlign: "center", padding: 20, backgroundColor:"grey", outlineStyle: "inset"}}><p style={{outlineStyle: "groove", padding: 10,}}>Score: {score}</p></h2>
        </div>
        </div>
    )
}

export default ScoreBoard