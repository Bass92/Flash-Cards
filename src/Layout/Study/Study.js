import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import CardList from "./CardList";

function Study() {
  const [deckName, setDeckName] = useState([]);
  const [card, setCard] = useState([]);
  const { deckId } = useParams()

  //const params = useParams();
  //const deckId = params.deckId;

  useEffect(() => {
    async function fetchDecks() {
      const data = await readDeck(deckId);
      setDeckName(data);
    }
    fetchDecks();
  }, [deckId]);


  return (
    <>
      <div className="col-13 mx-auto">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg> Home</Link>
              </li>

              <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>{deckName.name}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Study
              </li>
          </ol>
        </nav>
        <h1>Study: {deckName.name}</h1>
        <CardList deckName={deckName} />
        </div>
      </>
      );
}

      export default Study;