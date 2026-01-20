import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const cards = [
    { id: 1, title: "Machine Learning", text: "Learn basics of ML and build projects." },
    { id: 2, title: "Web Development", text: "HTML, CSS, Bootstrap and React." },
    { id: 3, title: "Data Structures", text: "Arrays, Linked Lists, Trees and Graphs." }
  ];

  return (

    <div className="app-container">
      <div className="position-absolute top-50 start-50 translate-middle">
      <h2 className="app-title text-center">
        Card-Based Layout Using Bootstrap
      </h2>

      <div className="cards-wrapper">
        {cards.map(card => (
          <div className="card custom-card" key={card.id}>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
}

export default App;
