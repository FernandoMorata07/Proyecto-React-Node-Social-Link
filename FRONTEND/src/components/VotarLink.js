import "../css/singleLink.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { votarLinkService } from "../services/linksServices";

export const VotarLink = ({ idLink, loggedUserVote, addVoteToLink }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const handleChange = async (e) => {
    try {
      if (loggedUserVote) {
        return;
      }
      const { avgVotos } = await votarLinkService({
        voto: +e.target.value,
        token,
        idLink,
      });

      addVoteToLink({
        id: idLink,
        newAvgVotos: avgVotos,
        vote: +e.target.value,
      });
    } catch (error) {
      setError();
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="clasificacion">
      <input
        className="estrella"
        id={`link-${idLink}voto5`}
        type="radio"
        name="voto"
        value="5"
        checked={loggedUserVote === 5}
        onChange={handleChange}
      ></input>
      <label className="estrella" htmlFor={`link-${idLink}voto5`}>
        ★
      </label>

      <input
        className="estrella"
        id={`link-${idLink}voto4`}
        type="radio"
        name="voto"
        value="4"
        checked={loggedUserVote === 4}
        onChange={handleChange}
      ></input>
      <label className="estrella" htmlFor={`link-${idLink}voto4`}>
        ★
      </label>

      <input
        className="estrella"
        id={`link-${idLink}voto3`}
        type="radio"
        name="voto"
        value="3"
        checked={loggedUserVote === 3}
        onChange={handleChange}
      ></input>
      <label className="estrella" htmlFor={`link-${idLink}voto3`}>
        ★
      </label>

      <input
        className="estrella"
        id={`link-${idLink}voto2`}
        type="radio"
        name="voto"
        value="2"
        checked={loggedUserVote === 2}
        onChange={handleChange}
      ></input>
      <label className="estrella" htmlFor={`link-${idLink}voto2`}>
        ★
      </label>

      <input
        className="estrella"
        id={`link-${idLink}voto1`}
        type="radio"
        name="voto"
        value="1"
        checked={loggedUserVote === 1}
        onChange={handleChange}
      ></input>
      <label className="estrella" htmlFor={`link-${idLink}voto1`}>
        ★
      </label>

      {sending && <p>Votando link</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
