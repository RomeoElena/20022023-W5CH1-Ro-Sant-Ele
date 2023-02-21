import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <h4 className="title" role="paragraph">
        React Padawans: Elena, Rocío and Santiago
      </h4>
      <h4 className="title" role="paragraph">
        Jedi Master: Alejandro
      </h4>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png"
        alt="Star Wars logo"
        width="200rem"
      />
    </div>
  );
}
