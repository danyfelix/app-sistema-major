using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AppSistemaMajor.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }


        [HttpGet("[action]")]
        public IEnumerable<Dupla> GetDuplas()
        {
            return ListaDeDuplas;
        }

        private static List<Dupla> ListaDeDuplas = new List<Dupla>
        {
           new Dupla(){ Number = "00", Word = "Osos" },
           new Dupla(){ Number = "01", Word = "Setas" },
           new Dupla(){ Number = "02", Word = "Santa" },
           new Dupla(){ Number = "03", Word = "Samwise Gamgee" },
           new Dupla(){ Number = "04", Word = "Sor Juana Ines" },
           new Dupla(){ Number = "05", Word = "Silvio Rodriguez" },
           new Dupla(){ Number = "06", Word = "Segway" },
           new Dupla(){ Number = "07", Word = "Sakura" },
           new Dupla(){ Number = "08", Word = "Sifon" },
           new Dupla(){ Number = "09", Word = "Sapo" },
           new Dupla(){ Number = "10", Word = "Tesoro" },
           new Dupla(){ Number = "11", Word = "Tata" },
           new Dupla(){ Number = "12", Word = "Tina Turner" },
           new Dupla(){ Number = "13", Word = "Tim Reynolds" },
           new Dupla(){ Number = "14", Word = "Transformer" },
           new Dupla(){ Number = "15", Word = "Tulipan" },
           new Dupla(){ Number = "16", Word = "Tigre" },
           new Dupla(){ Number = "17", Word = "Tikio" },
           new Dupla(){ Number = "18", Word = "Teflon" },
           new Dupla(){ Number = "19", Word = "Tapon" },
           new Dupla(){ Number = "20", Word = "Nasa" },
           new Dupla(){ Number = "21", Word = "Nata" },
           new Dupla(){ Number = "22", Word = "Nina Simone" },
           new Dupla(){ Number = "23", Word = "Nemo" },
           new Dupla(){ Number = "24", Word = "Neron" },
           new Dupla(){ Number = "25", Word = "Nilo" },
           new Dupla(){ Number = "26", Word = "Negro" },
           new Dupla(){ Number = "27", Word = "Nuke" },
           new Dupla(){ Number = "28", Word = "Nefertiti" },
           new Dupla(){ Number = "29", Word = "Napoleon" },
           new Dupla(){ Number = "30", Word = "Masa" },
           new Dupla(){ Number = "31", Word = "Motel" },
           new Dupla(){ Number = "32", Word = "Minion" },
           new Dupla(){ Number = "33", Word = "Momia" },
           new Dupla(){ Number = "34", Word = "Morro" },
           new Dupla(){ Number = "35", Word = "Mole" },
           new Dupla(){ Number = "36", Word = "Mago" },
           new Dupla(){ Number = "37", Word = "Moka Pot" },
           new Dupla(){ Number = "38", Word = "Mafalda" },
           new Dupla(){ Number = "39", Word = "Mapa" },
           new Dupla(){ Number = "40", Word = "Rastafari" },
           new Dupla(){ Number = "41", Word = "Rata" },
           new Dupla(){ Number = "42", Word = "Rana" },
           new Dupla(){ Number = "43", Word = "Rama" },
           new Dupla(){ Number = "44", Word = "Reir" },
           new Dupla(){ Number = "45", Word = "Rola" },
           new Dupla(){ Number = "46", Word = "Ragu" },
           new Dupla(){ Number = "47", Word = "Reek" },
           new Dupla(){ Number = "48", Word = "Rafa Marquez" },
           new Dupla(){ Number = "49", Word = "Ropa" },
           new Dupla(){ Number = "50", Word = "Lasagna" },
           new Dupla(){ Number = "51", Word = "Litio" },
           new Dupla(){ Number = "52", Word = "Lana del Rey" },
           new Dupla(){ Number = "53", Word = "Lumbre" },
           new Dupla(){ Number = "54", Word = "Lirio" },
           new Dupla(){ Number = "55", Word = "Lilo" },
           new Dupla(){ Number = "56", Word = "Lagarto" },
           new Dupla(){ Number = "57", Word = "Luke Skywalker" },
           new Dupla(){ Number = "58", Word = "Luftansa" },
           new Dupla(){ Number = "59", Word = "Leopardo" },
           new Dupla(){ Number = "60", Word = "Gas" },
           new Dupla(){ Number = "61", Word = "Gota" },
           new Dupla(){ Number = "62", Word = "Ginebra" },
           new Dupla(){ Number = "63", Word = "Gema" },
           new Dupla(){ Number = "64", Word = "Gorro" },
           new Dupla(){ Number = "65", Word = "Gel" },
           new Dupla(){ Number = "66", Word = "Gaga" },
           new Dupla(){ Number = "67", Word = "Goku" },
           new Dupla(){ Number = "68", Word = "Gafete" },
           new Dupla(){ Number = "69", Word = "Gepeto" },
           new Dupla(){ Number = "70", Word = "Kassandra" },
           new Dupla(){ Number = "71", Word = "Kit" },
           new Dupla(){ Number = "72", Word = "Ken" },
           new Dupla(){ Number = "73", Word = "Kim Bassinger" },
           new Dupla(){ Number = "74", Word = "Krasnoyarsk" },
           new Dupla(){ Number = "75", Word = "Kal Drogo" },
           new Dupla(){ Number = "76", Word = "Kegel Ball" },
           new Dupla(){ Number = "77", Word = "Kaka" },
           new Dupla(){ Number = "78", Word = "Kefir" },
           new Dupla(){ Number = "79", Word = "Kopi Luwak" },
           new Dupla(){ Number = "80", Word = "Fosa" },
           new Dupla(){ Number = "81", Word = "Futbol" },
           new Dupla(){ Number = "82", Word = "Fan" },
           new Dupla(){ Number = "83", Word = "Fumarola" },
           new Dupla(){ Number = "84", Word = "Ferry" },
           new Dupla(){ Number = "85", Word = "Falcao" },
           new Dupla(){ Number = "86", Word = "Figo" },
           new Dupla(){ Number = "87", Word = "Fake ID" },
           new Dupla(){ Number = "88", Word = "Fifa" },
           new Dupla(){ Number = "89", Word = "Fap" },
           new Dupla(){ Number = "90", Word = "Pase" },
           new Dupla(){ Number = "91", Word = "Pato" },
           new Dupla(){ Number = "92", Word = "Pinocho" },
           new Dupla(){ Number = "93", Word = "Pomada" },
           new Dupla(){ Number = "94", Word = "Portero" },
           new Dupla(){ Number = "95", Word = "Plata" },
           new Dupla(){ Number = "96", Word = "Pegaso" },
           new Dupla(){ Number = "97", Word = "Pikachu" },
           new Dupla(){ Number = "98", Word = "Puff" },
           new Dupla(){ Number = "99", Word = "Papa" }
        };

        public class Dupla
        {
            public string Number { get; set; }
            public string Word { get; set; }
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
