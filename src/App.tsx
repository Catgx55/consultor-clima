import style from "./App.module.css"
import Alert from "./components/Alert/Alert.tsx"
import Form from "./components/Form/Form"
import Spinner from "./components/Spinner/Spinner.tsx"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={style.title}>Buscador de Clima</h1>

      <div className={style.container}>
        <Form 
          fetchWeather={fetchWeather}
        />
        
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad No Encontrada</Alert>}
      </div>
    </>
  )
}

export default App
