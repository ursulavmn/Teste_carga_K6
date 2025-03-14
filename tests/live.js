import http from 'k6/http'
import { check, sleep} from 'k6';

export const options = {
  vus: 10, 
  duration: '5s',
};

export default function () {

const url = "http://localhost:8080/api/cars"
const response = http.get(url);
const cars = response.json

check(response, {
  // verifica a resposta 200 ok 
  'status is 200' : (r) => r.status === 200,
  // verifica os 5 carros 
  'contains exactly 5 cars' : () => cars.legth === 5 
});
sleep(1);
}

// Exportando o resumo em html 

export function handleSummary(data) {
    return {
        "./report/live-qazando.html" : htmlReport(data), //gerar relatório em HTML
    };
  }