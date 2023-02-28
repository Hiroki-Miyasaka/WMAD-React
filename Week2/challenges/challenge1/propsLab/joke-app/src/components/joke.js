export default function Joke({setup, punchline}){
    return(
        <div className="joke">
            <h1>{setup}</h1>
            <p>{punchline}</p>
        </div>
    );
}
