import Card from "./componenets/Card"; // Dosya yolunu doğru şekilde verin

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-amber-50">
      <Card /> {/* Card bileşenini buraya çağırıyoruz */}
    </div>
  );
};

export default App;
