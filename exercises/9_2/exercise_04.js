const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (temperature) => {
  return `Mars temperature is: ${temperature} degree(s) Celsius`;
};

setTimeout(() => {
  console.log(sendMarsTemperature(getMarsTemperature()));
}, messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
