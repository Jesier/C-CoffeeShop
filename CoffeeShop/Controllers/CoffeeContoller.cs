using Microsoft.AspNetCore.Mvc;
using CoffeeShop.Models;
using CoffeeShop.Repositories;

namespace CoffeeShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeContoller : ControllerBase
    {
        private readonly ICoffeeRepository _coffeeRepository;
        public CoffeeContoller(ICoffeeRepository coffeeRepository) 
        {
            _coffeeRepository = coffeeRepository;
        }


    }
}
